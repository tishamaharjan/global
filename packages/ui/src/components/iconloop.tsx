import Logoipsum1 from "../icons/Logoipsum1.tsx";
import Logoipsum2 from "../icons/Logoipsum2.tsx";
import Logoipsum3 from "../icons/Logoipsum3.tsx";
import Logoipsum4 from "../icons/Logoipsum4.tsx";
import Logoipsum5 from "../icons/Logoipsum5.tsx";
import Logoipsum6 from "../icons/Logoipsum6.tsx";
import Logoipsum7 from "../icons/Logoipsum7.tsx";
import Logoipsum8 from "../icons/Logoipsum8.tsx";
const logos = [
  <Logoipsum1 />,
  <Logoipsum2 />,
  <Logoipsum3 />,
  <Logoipsum4 />,
  <Logoipsum5 />,
  <Logoipsum6 />,
  <Logoipsum7 />,
  <Logoipsum8 />,
];
const IconLoop = () => {
  return (
    <span className="relative inline-block transition-opacity duration-500">
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee py-12 whitespace-nowrap gap-2">
          {logos.map((logo, index) => (
            <span key={index} className="text-4xl whitespace-nowrap">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </span>
  );
};

export default IconLoop;
