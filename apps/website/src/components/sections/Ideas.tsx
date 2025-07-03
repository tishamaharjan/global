import { actions } from "astro:actions";
import { useTransition } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { toast } from "@workspace/ui/components/sonner";

const Ideas = () => {
  const [isPending, setIsPending] = useTransition();
  return (
    <>
      <section className="bg-contactbg border border-statbg py-[36px] px-[32px] rounded-2xl">
        <div>
          <span className="font-bold text-whitetext text-2xl">Got Ideas?</span>
          <form
            action={async (formData) => {
              setIsPending(async () => {
                try {
                  await actions.send(formData);
                  toast.success("Thank you for sharing your idea!");
                } catch (error) {
                  toast.error("There was an error. Please try again.");
                }
              });
            }}
            className="space-y-6 mt-5"
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="flex gap-3">
                <Input
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                  className="py-[16px] px-[24px] h-[55px] content-between bg-darkinput bg-darkinput lg:bg-iconborder border-contactborder text-white placeholder:text-placeholdertext rounded-lg"
                />

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="py-[16px] px-[24px] h-[55px] content-between bg-darkinput bg-darkinput lg:bg-iconborder border-contactborder text-white placeholder:text-placeholdertext rounded-lg"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                className="h-[104px] py-[16px] px-[24px] bg-darkinput lg:bg-iconborder border-contactborder text-white placeholder:text-placeholdertext rounded-lg"
              />
            </div>

            <Button
              type="submit"
              className="cursor-pointer w-full h-[51px] text-darkergreen hover:bg-darkergreen px-[16px] py-[12px] mt-10 rounded-lg"
              style={{
                background: "rgba(25, 25, 25, 0.80)",
                borderRight:
                  "2px solid var(--color-grey-9250, rgba(234, 234, 234, 0.50))",
                borderBottom:
                  "2px solid var(--color-grey-9250, rgba(234, 234, 234, 0.50))",
              }}
              disabled={isPending}
            >
              {isPending ? "Sending..." : "Send"}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Ideas;
