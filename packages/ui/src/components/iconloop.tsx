import { useEffect, useState } from "react";
const logos = [
  "logos1.svg",
  "logos2.svg",
  "logos3.svg",
  "logos4.svg",
  "logos5.svg",
  "logos6.svg",
  "logos7.svg",
  "logos8.svg",
];
const IconLoop = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!logos || logos.length === 0) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % logos.length);
        setVisible(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="relative inline-block transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <img key={index} src={logos[index]} alt="" />
    </span>
  );
};

export default IconLoop;
