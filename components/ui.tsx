import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`eyebrow inline-flex items-center gap-3 text-action-bright ${className}`}
    >
      <span className="h-px w-7 bg-action-bright/60" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`${isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="display mt-5 text-balance text-3xl text-arctic sm:text-4xl md:text-[2.7rem]">
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-pretty text-base leading-relaxed text-steel/70 sm:text-lg ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
