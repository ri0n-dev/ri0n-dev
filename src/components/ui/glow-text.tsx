import React, { CSSProperties, FC } from "react";

interface GlowTextProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

const GlowText: FC<GlowTextProps> = (
  { children, className = "", style = {} },
) => {
  return (
    <span
      className={`filter select-none font-medium ${className}`}
      style={{
        ...style,
        filter:
          `drop-shadow(0 0 calc((var(--active, 100) / 100) * 5px) hsl(0 0% 100% / 0.6))
                 drop-shadow(0 0 calc((var(--active, 100) / 100) * 10px) hsl(0 0% 100% / 0.4))
                 drop-shadow(0 calc((var(--active, 100) / 100) * 6px) calc((var(--active, 100) / 100) * 15px) hsl(0 0% 100% / 0.3))
                 drop-shadow(0 calc((var(--active, 100) / 100) * 8px) calc((var(--active, 100) / 100) * 20px) hsl(0 0% 100% / 0.2))
                 drop-shadow(0 calc((var(--active, 100) / 100) * 10px) calc((var(--active, 100) / 100) * 30px) hsl(0 0% 100% / 0.1))`,
      }}
    >
      {children}
    </span>
  );
};

export default GlowText;