import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-[#0A0A0A] border-[#222] py-[80px] px-[36px] relative overflow-hidden items-start rounded-2xl">
      <div className=" text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:hidden">
          Join Our <br />
          Newsletter
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 hidden md:block">
          Join Our Newsletter
        </h2>
        <p className="text-white/60 mb-8 text-[18px]">
          Join our newsletter community for exclusive updates, industry
          insights, special offers, and valuable tips.
        </p>

        <div className="flex sm:flex-row max-w-xl mx-auto border-white/10 rounded-[25px] justify-center">
          <div
            className="flex bg-[#141414] rounded-[34px] py-1 pr-2 pl-6 w-[436px] h-[60px] items-center"
            style={{ boxShadow: "0px 0px 0px 1px #1E1E1E inset" }}
          >
            <Input
              type="email"
              placeholder="example@gs.com"
              className=" bg-[#141414] mr-auto max-md:w-[160px] border-none md:w-[436px] text-[16px] font-normal placeholder:text-white/40 h-10 "
            />
            <Button
              className="cursor-pointer bg-gradient-to-r from-[#62B904] to-[#EDFE8C] hover:bg-[#a8d900] text-black px-2 py-1 h-[52px] w-[111px] text-base rounded-[25px] animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Join
              <div className="bg-black rounded-full p-2 ml-1 w-[32px] h-[32px]">
                <img src="Component1.svg" alt="component" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
