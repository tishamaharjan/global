import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-[#0A0A0A] relative overflow-hidden items-start">
      <div className=" py-[80px] px-[36px] rounded-[16px]">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[color:var(--green)]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[color:var(--green)]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:hidden">
              Join Our <br />
              Newsletter
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hidden md:block">
              Join Our Newsletter
            </h2>
            <p className="text-white/60 mb-8">
              Join our newsletter community for exclusive updates, industry
              insights, special offers, and valuable tips.
            </p>

            <div className="flex sm:flex-row w-72 max-w-xl mx-auto border-white/10 bg-white/5 rounded-[25px]">
              <div className="relative flex-grow">
                {/* <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 h-5 w-5" /> */}
                <Input
                  type="email"
                  placeholder="example@gs.com"
                  className="pl-5 bg-white/5  text-white placeholder:text-white/40 h-10"
                />
              </div>
              <Button
                className="cursor-pointer bg-[color:var(--green)] hover:bg-[#a8d900] text-black px-2 py-1 h-10 text-base rounded-[25px] animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                Join
                <div className="bg-black rounded-full p-2 ml-1">
                  <img src="Component1.svg" alt="component" />
                </div>
              </Button>
            </div>

            {/* <p className="text-xs text-white/40 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
