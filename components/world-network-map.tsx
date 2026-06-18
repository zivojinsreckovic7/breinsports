"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { offices } from "@/lib/content";
import { MAP_H, MAP_W, landDots, landPath } from "@/lib/world-map-data";

function project(lat: number, lng: number) {
  return {
    x: ((lng + 180) / 360) * MAP_W,
    y: ((90 - lat) / 180) * MAP_H,
  };
}

function arcPath(x1: number, y1: number, x2: number, y2: number, lift = 0.22) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dist = Math.hypot(x2 - x1, y2 - y1);
  const cx = mx;
  const cy = my - dist * lift;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

const officeNodes = offices.map((office) => ({
  ...office,
  ...project(office.lat, office.lng),
}));

const hq = officeNodes.find((o) => o.hq)!;
const spokes = officeNodes.filter((o) => !o.hq);
const london = officeNodes.find((o) => o.city === "London")!;
const prague = officeNodes.find((o) => o.city === "Prague")!;

export function WorldNetworkMap() {
  const ref = useRef<SVGSVGElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const graticule = useMemo(() => {
    const lines: { d: string; key: string }[] = [];
    for (let lat = -60; lat <= 60; lat += 30) {
      const y = ((90 - lat) / 180) * MAP_H;
      lines.push({ key: `lat-${lat}`, d: `M 0 ${y} H ${MAP_W}` });
    }
    for (let lng = -150; lng <= 150; lng += 30) {
      const x = ((lng + 180) / 360) * MAP_W;
      lines.push({ key: `lng-${lng}`, d: `M ${x} 0 V ${MAP_H}` });
    }
    return lines;
  }, []);

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${MAP_W} ${MAP_H}`}
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label="Animated world map showing Breinsport office locations and global connections"
      data-active={active}
    >
      <defs>
        <radialGradient id="wn-bg" cx="42%" cy="38%" r="72%">
          <stop offset="0%" stopColor="#0c2a48" />
          <stop offset="55%" stopColor="#061523" />
          <stop offset="100%" stopColor="#030a12" />
        </radialGradient>

        <radialGradient id="wn-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2b7be2" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#2b7be2" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="wn-arc" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1664c4" stopOpacity="0.15" />
          <stop offset="35%" stopColor="#2b7be2" stopOpacity="0.95" />
          <stop offset="65%" stopColor="#d9dfe5" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#1664c4" stopOpacity="0.15" />
        </linearGradient>

        <linearGradient id="wn-land-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d9dfe5" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#1664c4" stopOpacity="0.04" />
        </linearGradient>

        <clipPath id="wn-land-clip">
          <path d={landPath} />
        </clipPath>

        <filter id="wn-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>

        <filter id="wn-node-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width={MAP_W} height={MAP_H} fill="url(#wn-bg)" />

      <ellipse
        cx={hq.x}
        cy={hq.y}
        rx={220}
        ry={120}
        fill="url(#wn-glow)"
        className="network-hub-glow"
      />

      <g stroke="#d9dfe5" strokeOpacity="0.04" strokeWidth="0.75">
        {graticule.map((line) => (
          <path key={line.key} d={line.d} fill="none" />
        ))}
      </g>

      {/* Continent silhouettes — Natural Earth 110m */}
      <path
        d={landPath}
        fill="url(#wn-land-fill)"
        stroke="#d9dfe5"
        strokeOpacity="0.1"
        strokeWidth="0.6"
      />

      {/* Dot matrix clipped to real coastlines */}
      <g clipPath="url(#wn-land-clip)">
        {landDots.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r={dot.r}
            fill="#d9dfe5"
            opacity={0.22}
            className="network-dot"
            style={{ animationDelay: `${dot.delay}s` }}
          />
        ))}
      </g>

      <g fill="none" strokeLinecap="round">
        {spokes.map((office, i) => {
          const d = arcPath(hq.x, hq.y, office.x, office.y, 0.2 + i * 0.02);
          return (
            <g key={office.city}>
              <path
                d={d}
                stroke="#1664c4"
                strokeOpacity="0.12"
                strokeWidth="3"
                filter="url(#wn-blur)"
              />
              <path
                d={d}
                stroke="url(#wn-arc)"
                strokeWidth="1.25"
                strokeDasharray="6 10"
                className="network-arc"
                style={{ animationDelay: `${0.3 + i * 0.18}s` }}
              />
              <path
                d={d}
                stroke="#f5f7fa"
                strokeWidth="1.5"
                strokeOpacity="0"
                className="network-arc-draw"
                style={{ animationDelay: `${0.15 + i * 0.15}s` }}
              />
              <circle r="2.5" fill="#2b7be2" className="network-packet" style={{ animationDelay: `${1.2 + i * 0.5}s` }}>
                <animateMotion dur={`${4.5 + i * 0.6}s`} repeatCount="indefinite" path={d} />
              </circle>
            </g>
          );
        })}

        <path
          d={arcPath(london.x, london.y, prague.x, prague.y, 0.12)}
          stroke="#d9dfe5"
          strokeOpacity="0.08"
          strokeWidth="1"
          strokeDasharray="3 8"
          className="network-arc-faint"
        />
      </g>

      {officeNodes.map((office, i) => (
        <g key={office.city} transform={`translate(${office.x} ${office.y})`}>
          <circle
            r={office.hq ? 18 : 14}
            fill="#2b7be2"
            opacity="0.12"
            className="network-pulse-ring"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
          <circle
            r={office.hq ? 10 : 7}
            fill="#1664c4"
            opacity="0.25"
            filter="url(#wn-blur)"
          />
          <circle
            r={office.hq ? 4.5 : 3.5}
            fill={office.hq ? "#2b7be2" : "#f5f7fa"}
            filter="url(#wn-node-glow)"
            className="network-node"
            style={{ animationDelay: `${0.5 + i * 0.12}s` }}
          />
          {office.hq ? <circle r="1.5" fill="#fff" opacity="0.9" /> : null}
          <text
            x={office.city === "Toronto" ? -8 : office.city === "Dubai" ? 10 : 0}
            y={office.city === "Dubai" ? -14 : office.city === "Toronto" ? -12 : 20}
            textAnchor="middle"
            fill="#f5f7fa"
            fontSize="10"
            fontWeight="600"
            fontFamily="var(--font-montserrat), Montserrat, sans-serif"
            letterSpacing="0.12em"
            opacity="0.72"
            className="network-label"
            style={{ animationDelay: `${0.8 + i * 0.1}s` }}
          >
            {office.city.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}
