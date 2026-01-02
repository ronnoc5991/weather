"use client";
import { PropsWithChildren, useLayoutEffect, useRef, useState } from "react";
import cn from "classnames";

type WidgetProps = PropsWithChildren<{
  title: string;
}>;

const inlinePadding = "pl-3";

export default function Widget({ title, children }: WidgetProps) {
  const rootElement = useRef<HTMLDivElement | null>(null);
  const clippedContainer = useRef<HTMLDivElement | null>(null);

  // think about these names better
  const [pxToClip, setPxToClip] = useState<number>(0);

  useLayoutEffect(() => {
    const onScroll = () => {
      if (!rootElement?.current || !clippedContainer?.current) return;

      const { top } = rootElement.current.getBoundingClientRect();
      setPxToClip(
        Math.min(clippedContainer.current.scrollHeight, Math.max(0, top * -1))
      );
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={rootElement} className={cn("relative")}>
      <div
        className={cn(
          "absolute",
          "border-1",
          "rounded-lg",
          "border-white/30",
          "bg-white/20",
          "shadow-[0px_4px_30px_rgba(0,0,0,0.1)]",
          "backdrop-blur-[5px]"
        )}
        style={{ inset: `${pxToClip}px 0 0 0` }}
      />
      <div className={cn(inlinePadding, "sticky", "top-0")}>
        <h2>{title}</h2>
      </div>
      <div
        ref={clippedContainer}
        className={cn(inlinePadding, "relative")}
        style={{ clipPath: `inset(${pxToClip}px 0 0 0)` }}
      >
        {children}
      </div>
    </div>
  );
}
