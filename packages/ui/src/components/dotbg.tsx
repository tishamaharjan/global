import { url } from "inspector";
import React from "react";
import Dot from "../icons/dot.tsx";

const DotBackground = ({ children }: { children: React.ReactNode }) => {
  const dotSpacing = 18;
  const dotsPerRow = 150;
  const dotsPerColumn = 150;
  const totalDots = dotsPerRow * dotsPerColumn;

  //Array of dot positions
  const dots = Array.from({ length: totalDots }, (_, index) => {
    const row = Math.floor(index / dotsPerRow);
    const col = index % dotsPerRow;
    return {
      id: index,
      x: col * dotSpacing,
      y: row * dotSpacing,
    };
  });
  return (
    <div className="bg-[#0A0A0A] relative overflow-hidden h-full max-md:rounded-[24px] max-md:p-1">
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute opacity-15"
            style={{
              left: dot.x + "px",
              top: dot.y + "px",
              width: "2px",
              height: "2px",
            }}
          >
            <Dot />
          </div>
        ))}
      </div>

      {/* Contents */}
      <div className="backdrop:blur-sm inline-block rounded-sm">{children}</div>
    </div>
  );
};

export default DotBackground;
