import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#C6FF00]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#C6FF00]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Subscribe to Our <span className="text-[#C6FF00]">Newsletter</span>
          </h2>
          <p className="text-white/60 mb-8">
            Stay updated with our latest news, insights, and exclusive offers.
            Join our community today!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 h-5 w-5" />
              <Input
                type="email"
                placeholder="Enter your email address"
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
              />
            </div>
            <Button className="bg-[#C6FF00] hover:bg-[#a8d900] text-black font-medium h-12">
              Subscribe Now
            </Button>
          </div>

          <p className="text-xs text-white/40 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
