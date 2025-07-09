import Component1 from "@/assets/icons/Component1";
import { Button } from "../Button";
import { Input } from "../Input";
import ColoredVector from "../../../public/ColoredVectorBg.svg";
import { useState } from "react";
import { toast } from "@workspace/ui/components/sonner";

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const url =
  "https://script.google.com/macros/s/AKfycbxBb2C8b8geYvjxTcYPQCqhNr-vlkYfkqdXMqXcwpmyGeVm77_2oQg02FPupTWtmbg/exec";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const subscribeToNewsletter = async (email: string, url: string) => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ email }),
    });
    return response.json();
  };

  const joinUsEmail = async () => {
    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    try {
      setIsLoading(true);
      const res = await subscribeToNewsletter(email, url);
      if (res.result === "Success") {
        toast.success("Thank you for joining our newsletter!");
        setIsLoading(false);
        setEmail("");
      } else {
        toast.error("There was an error. Please try again.");
      }
      console.log(res, "Response from Google Script");
    } catch (error) {
      console.error("Error joining newsletter:", error);
      toast.error("There was an error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section
        className="bg-contactbg border border-statbg py-[80px] px-[36px] relative overflow-hidden items-start rounded-2xl"
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

          <div
            className="flex sm:flex-row max-w-xl mx-auto border-white/10 justify-center bg-iconborder rounded-[34px] py-1 pr-2 pl-6 w-[436px] h-[60px] items-center"
            style={{ boxShadow: "0px 0px 0px 1px border) inset" }}
          >
            <Input
              type="email"
              placeholder="example@gs.com"
              className=" bg-iconborder mr-auto max-md:w-[160px] border-none md:w-[436px] text-[16px] font-normal placeholder:text-white/40 h-10 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className="cursor-pointer border-r-[2px] border-b-[4px] border-greenbackground bg-yellowgreen hover:bg-darkergreen text-black px-4 py-[10px] h-[52px] w-[111px] text-[18px] rounded-[25px] animate-fade-in"
              style={{
                animationDelay: "0.3s",
              }}
              onClick={joinUsEmail}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full border-2 border-black w-5 h-5 border-t-transparent" />
              ) : (
                "Join"
              )}
              <div className="ml-1 w-[32px] h-[32px]">
                <Component1 />
              </div>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
