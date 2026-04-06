import { Linkedin } from "lucide-react";
import ProfileImg from "./assets/Tapas.jpg";
import BannerImg from "./assets/Tapas01.jpg";
import { Globe, Mail } from "lucide-react";

const LinkTreeProfile = () => {
  const profileData = {
    name: "Tapas Jyoti",
    title: "Software Engineer @Aptisure",
    links: [
      {
        title: "PORTFOLIO",
        url: "https://tapasjyotiportfolio.vercel.app/",
      },
      {
        title: "GITHUB",
        url: "https://github.com/tapas20",
      },
      {
        title: "LEETCODE",
        url: "https://leetcode.com/u/Tapas_20/",
      },
      {
        title: "LINKEDIN",
        url: "https://www.linkedin.com/in/tapas-jyoti/",
      },
      {
        title: "RESUME",
        url: "https://drive.google.com/file/d/1-E1fSRYcPmRfvDFCbRS84ar_2_qXZSNy/view",
      },
      {
        title: "TOPMATE",
        url: "https://topmate.io/tapas_20/",
      },
    ],
    socials: [
      { icon: Globe, url: "https://tapasjyotiportfolio.vercel.app/", label: "Website" },
      { icon: Mail, url: "mailto:tapasjyotimohanta@gmail.com", label: "Email" },
      { icon: Linkedin, url: "https://www.linkedin.com/in/tapas-jyoti/", label: "Location" },
    ],
  };

  return (
    <div className="min-h-screen bg-black flex justify-center">
      {/* Phone card */}
      <div className="relative w-full max-w-[400px] min-h-screen bg-black overflow-hidden">
        {/* Content */}
        <div className="relative flex flex-col items-center">
          {/* Banner section - only behind profile photo */}
          <div className="relative w-full h-[200px]">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale"
              style={{ backgroundImage: `url(${BannerImg})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Profile image - overlapping banner */}
          <div className="-mt-16 relative z-10 w-[120px] h-[120px] rounded-full border-[3px] border-white p-[3px]">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={ProfileImg}
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name in script font */}
          <h1
            className="text-white text-[2.2rem] mt-4 mb-1"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            {profileData.name}
          </h1>

          {/* Title */}
          <p className="text-white text-[11px] tracking-[0.25em] uppercase mb-8">
            {profileData.title}
          </p>

          {/* Link buttons - outlined style */}
          <div className="w-full px-10 space-y-3.5 mb-10">
            {profileData.links.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-center text-white text-[12px] font-semibold tracking-[0.2em] border border-white/80 hover:bg-white/10 transition-all duration-200"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Contact Me */}
          <p className="text-white text-[13px] font-bold tracking-[0.15em] uppercase mb-3">
            CONTACT ME
          </p>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-5 mb-14">
            {profileData.socials.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-all duration-200"
                  aria-label={social.label}
                >
                  <IconComponent className="w-[18px] h-[18px]" strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkTreeProfile;
