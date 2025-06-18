import Component1 from "@/assets/icons/Component1";
import { Button } from "../Button";
import { Input } from "../Input";
import ColoredVector from "../../../public/ColoredVectorBg.svg";

const Newsletter = () => {
  return (
    <section
      className="bg-contactbg border-contactborder py-[80px] px-[36px] relative overflow-hidden items-start rounded-2xl"
      style={{
        backgroundImage: `url(${ColoredVector.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className=" text-center">
        <h2 className="text-[38px] font-bold mb-6 md:hidden text-whitetext">
          Join Our <br />
          Newsletter
        </h2>
        <h2 className="text-5xl font-bold mb-6 hidden md:block text-whitetext">
          Join Our Newsletter
        </h2>
        <p className="text-white/60 mb-8 text-[18px]">
          Join our newsletter community for exclusive updates, industry
          insights, special offers, and valuable tips.
        </p>

        <div className="flex sm:flex-row max-w-xl mx-auto border-white/10 rounded-[25px] justify-center">
          <div
            className="flex bg-iconborder rounded-[34px] py-1 pr-2 pl-6 w-[436px] h-[60px] items-center"
            style={{ boxShadow: "0px 0px 0px 1px border) inset" }}
          >
            <Input
              type="email"
              placeholder="example@gs.com"
              className=" bg-iconborder mr-auto max-md:w-[160px] border-none md:w-[436px] text-[16px] font-normal placeholder:text-white/40 h-10 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              className="cursor-pointer border-r-[2px] border-b-[4px] border-greenbackground bg-yellowgreen hover:bg-darkergreen text-black px-4 py-[10px] h-[52px] w-[111px] text-[18px] rounded-[25px] animate-fade-in"
              style={{
                animationDelay: "0.3s",
              }}
            >
              Join
              <div className="bg-black rounded-full p-2 ml-1 w-[32px] h-[32px]">
                <Component1 />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
