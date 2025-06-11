import { Button } from "@workspace/ui/components/Button";
import { Input } from "@workspace/ui/components/Input";

const Newsletter = () => {
  return (
    <section
      className="bg-[var(--contactbg)] border-[var(--contactborder)] py-[80px] px-[36px] relative overflow-hidden items-start rounded-2xl"
      style={{
        backgroundImage: "url('ColoredVectorBg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className=" text-center">
        <h2 className="text-[38px] font-bold mb-6 md:hidden text-[var(--whitetext)]">
          Join Our <br />
          Newsletter
        </h2>
        <h2 className="text-5xl font-bold mb-6 hidden md:block text-[var(--whitetext)]">
          Join Our Newsletter
        </h2>
        <p className="text-white/60 mb-8 text-[18px]">
          Join our newsletter community for exclusive updates, industry
          insights, special offers, and valuable tips.
        </p>

        <div className="flex sm:flex-row max-w-xl mx-auto border-white/10 rounded-[25px] justify-center">
          <div
            className="flex bg-[var(--iconborder)] rounded-[34px] py-1 pr-2 pl-6 w-[436px] h-[60px] items-center"
            style={{ boxShadow: "0px 0px 0px 1px var(--border) inset" }}
          >
            <Input
              type="email"
              placeholder="example@gs.com"
              className=" bg-[var(--iconborder)] mr-auto max-md:w-[160px] border-none md:w-[436px] text-[16px] font-normal placeholder:text-white/40 h-10 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              className="cursor-pointer bg-[var(--greenyellow)] hover:bg-[var(--darkergreen)] text-black px-4 py-[10px] h-[52px] w-[111px] text-[18px] rounded-[25px] animate-fade-in"
              style={{
                animationDelay: "0.3s",
                borderRight:
                  "2px solid var(--color-yellow-60, var(--greenbackground))",
                borderBottom:
                  "4px solid var(--color-yellow-60, var(--greenbackground))",
              }}
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
