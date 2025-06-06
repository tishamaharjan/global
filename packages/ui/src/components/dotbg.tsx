import React from "react";

const DotBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className=" overflow-hidden h-full max-lg:rounded-2xl"
      style={{
        backgroundImage: "url('/dot.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "18px 18px",
        backgroundPosition: "center",
      }}
    >
      <div className="backdrop:blur-sm rounded-sm">{children}</div>
    </div>
  );
};

export default DotBackground;
