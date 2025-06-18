import Logoipsum1 from "@/assets/icons/Logoipsum1.tsx";
import Logoipsum2 from "@/assets/icons/Logoipsum2.tsx";
import Logoipsum3 from "@/assets/icons/Logoipsum3.tsx";
import Logoipsum4 from "@/assets/icons/Logoipsum4.tsx";
import Logoipsum5 from "@/assets/icons/Logoipsum5.tsx";
import Logoipsum6 from "@/assets/icons/Logoipsum6.tsx";
import Logoipsum7 from "@/assets/icons/Logoipsum7.tsx";
import Logoipsum8 from "@/assets/icons/Logoipsum8.tsx";
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
