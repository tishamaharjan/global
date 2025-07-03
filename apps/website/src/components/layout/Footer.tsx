import Newsletter from "../sections/Newsletter";
import Contact from "../sections/Contact";
import Ideas from "../sections/Ideas";

const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="bg-black md:px-12 lg:px-[156px] pt-20  pb-6 lg:pb-20 text-white/80 gap-4 box-border"
      >
        <div className="container mx-auto max-sm:px-4">
          <div className="grid grid-cols-1 md:w-full gap-4">
            <div className="lg:mb-[24px]">
              <Newsletter />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-1 lg:flex gap-4 overflow-hidden">
              <div className="lg:w-[40%] overflow-hidden rounded-2xl">
                <Contact />
              </div>

              <div className="lg:w-[60%]">
                <Ideas />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-5 w-full md:px-[156px] border-t border-footerborder text-sm text-center">
        <p>© 2023 GlobalSquare. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
