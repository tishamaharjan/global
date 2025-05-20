const CompanyIdentity = () => {
  return (
    <section id="about" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration"
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#C6FF00]/20"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#1E1E1E] rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C6FF00]/10 rounded-lg -z-10"></div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discover Our <span className="text-[#C6FF00]">Identity</span>
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              At GS, we are more than just a tech company. We're your innovation
              partner, constantly pushing boundaries and solving complex digital
              challenges with passion and expertise. We pride ourselves on
              transforming businesses through our innovative digital solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="border-l-2 border-[#C6FF00] pl-4">
                <p className="text-3xl font-bold">2023</p>
                <p className="text-sm text-white/50">Founded</p>
              </div>
              <div className="border-l-2 border-[#C6FF00] pl-4">
                <p className="text-3xl font-bold">25+</p>
                <p className="text-sm text-white/50">Team Members</p>
              </div>
              <div className="border-l-2 border-[#C6FF00] pl-4">
                <p className="text-3xl font-bold">20+</p>
                <p className="text-sm text-white/50">Projects Delivered</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Innovation",
                "Technology",
                "Design",
                "Development",
                "Strategy",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIdentity;
