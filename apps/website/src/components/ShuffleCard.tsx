import React, { useState, useEffect } from "react";

const SerialShifting = () => {
  const items = [
    { id: 1, text: "A", color: "bg-red-500" },
    { id: 2, text: "B", color: "bg-blue-500" },
    { id: 3, text: "C", color: "bg-green-500" },
    { id: 4, text: "D", color: "bg-yellow-500" },
    { id: 5, text: "E", color: "bg-purple-500" },
  ];

  const [positions, setPositions] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) => {
        return [prev[1], prev[2], prev[3], prev[4], prev[0]];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Real Serial Shifting
        </h2>

        {/* Container with fixed positions */}
        <div
          className="relative flex gap-4"
          style={{ width: "320px", height: "80px" }}
        >
          {items.map((item, originalIndex) => {
            // Find where this item should be positioned
            const currentPosition = positions[originalIndex];
            const translateX = currentPosition * 64; // 64px = width + gap

            return (
              <div
                key={item.id}
                // className={`
                //   absolute
                //   ${item.color}
                //   w-12 h-12
                //   rounded-lg
                //   flex items-center justify-center
                //   text-white text-lg font-bold
                //   shadow-lg
                //   transition-transform duration-1000 ease-in-out
                // `}
                style={{
                  position: "absolute",
                  backgroundColor: "#ef4444",
                  transform: `translateX(${translateX}px)`,
                  transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {item.text}
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <div className="text-sm text-gray-600 mb-2">Current order:</div>
          <div className="font-mono text-lg">
            {positions.map((pos) => items[pos].text).join(" → ")}
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-gray-500">
          Items are physically moving to new positions
        </div>
      </div>
    </div>
  );
};

export default SerialShifting;
