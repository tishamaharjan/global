import React, { useEffect, useState } from "react";
import Logoipsum1 from "../icons/logoipsum1.tsx";
import Logoipsum2 from "../icons/logoipsum2.tsx";
import Logoipsum3 from "../icons/logoipsum3.tsx";
import Logoipsum4 from "../icons/logoipsum4.tsx";
import Logoipsum5 from "../icons/logoipsum5.tsx";
import Logoipsum6 from "../icons/logoipsum6.tsx";
import Logoipsum7 from "../icons/logoipsum7.tsx";
import Logoipsum8 from "../icons/logoipsum8.tsx";

const IconLoop = () => {
  const logos = [
    { id: 1, component: <Logoipsum1 /> },
    { id: 2, component: <Logoipsum2 /> },
    { id: 3, component: <Logoipsum3 /> },
    { id: 4, component: <Logoipsum4 /> },
    { id: 5, component: <Logoipsum5 /> },
    { id: 6, component: <Logoipsum6 /> },
    { id: 7, component: <Logoipsum7 /> },
    { id: 8, component: <Logoipsum8 /> },
  ];
  const [icons, setIcons] = useState(logos);

  const shiftIcons = (array: typeof logos) => {
    const newArray = [...array];
    const firstElement = newArray.shift();
    if (firstElement !== undefined) {
      newArray.push(firstElement);
    }
    return newArray;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIcons((prevIcons) => shiftIcons(prevIcons));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex overflow-hidden">
      {icons.map((icon, index) => (
        <div
          key={icon.id}
          className={`transition-transform duration-1000 ease-in-out`}
          style={{ transform: `translateX(${index * 100}%)` }}
        >
          <div className="transition-transform duration-300">
            {icon.component}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconLoop;
