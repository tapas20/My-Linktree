import React from "react";
import {
  Github,
  Linkedin,
  User,
  ExternalLink,
  Mail,
  Code,
  FileText,
} from "lucide-react";

import ProfileImg from "./assets/Tapas.jpg";

const LinkTreeProfile = () => {
  const profileData = {
    name: "Tapas Jyoti Mohanta",
    title: "Full Stack Developer",
    bio: "Passionate about building scalable, user-centric web applications with modern technologies",
    email: "tapasjyotimohanta@gmail.com",
    links: [
      {
        id: 1,
        title: "Portfolio",
        url: "https://tapasjyotiportfolio.netlify.app/",
        icon: User,
        color: "indigo",
        description: "Explore my latest projects and case studies",
      },
      {
        id: 2,
        title: "GitHub",
        url: "https://github.com/tapas20",
        icon: Github,
        color: "gray",
        description: "View my open source contributions",
      },
      {
        id: 3,
        title: "LeetCode",
        url: "https://leetcode.com/u/Tapas_20/",
        icon: Code,
        color: "amber",
        description: "Algorithmic problem solving skills",
      },
      {
        id: 4,
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/tapas-jyoti/",
        icon: Linkedin,
        color: "blue",
        description: "Professional network and experience",
      },
      {
        id: 5,
        title: "Resume",
        url: "https://drive.google.com/file/d/1-E1fSRYcPmRfvDFCbRS84ar_2_qXZSNy/view",
        icon: FileText,
        color: "emerald",
        description: "Download my professional CV",
      },
      {
        id: 6,
        title: "Topmate",
        url: "https://topmate.io/tapas_20/",
        icon: User,
        color: "red",
        description: "Book a 1:1 session / mentorship",
      },
      {
        id: 7,
        title: "Contact Me",
        url: "mailto:tapasjyotimohanta@gmail.com",
        icon: Mail,
        color: "violet",
        description: "Let's discuss opportunities",
      },
    ],
  };

  const colorVariants = {
    indigo: {
      bg: "bg-gradient-to-r from-indigo-600 to-indigo-700",
      hover: "hover:from-indigo-500 hover:to-indigo-600",
      border: "border-indigo-600 hover:border-indigo-500",
      shadow: "shadow-indigo-900/20 hover:shadow-indigo-900/40",
    },
    gray: {
      bg: "bg-gradient-to-r from-gray-700 to-gray-800",
      hover: "hover:from-gray-600 hover:to-gray-700",
      border: "border-gray-700 hover:border-gray-600",
      shadow: "shadow-gray-900/20 hover:shadow-gray-900/40",
    },
    blue: {
      bg: "bg-gradient-to-r from-blue-600 to-blue-700",
      hover: "hover:from-blue-500 hover:to-blue-600",
      border: "border-blue-600 hover:border-blue-500",
      shadow: "shadow-blue-900/20 hover:shadow-blue-900/40",
    },
    amber: {
      bg: "bg-gradient-to-r from-amber-600 to-amber-700",
      hover: "hover:from-amber-500 hover:to-amber-600",
      border: "border-amber-600 hover:border-amber-500",
      shadow: "shadow-amber-900/20 hover:shadow-amber-900/40",
    },
    emerald: {
      bg: "bg-gradient-to-r from-emerald-600 to-emerald-700",
      hover: "hover:from-emerald-500 hover:to-emerald-600",
      border: "border-emerald-600 hover:border-emerald-500",
      shadow: "shadow-emerald-900/20 hover:shadow-emerald-900/40",
    },
    violet: {
      bg: "bg-gradient-to-r from-violet-600 to-violet-700",
      hover: "hover:from-violet-500 hover:to-violet-600",
      border: "border-violet-600 hover:border-violet-500",
      shadow: "shadow-violet-900/20 hover:shadow-violet-900/40",
    },
    red: {
      bg: "bg-gradient-to-r from-red-500 to-red-600",
      hover: "hover:from-red-400 hover:to-red-700",
      border: "border-red-600 hover:border-red-500",
      shadow: "shadow-red-900/20 hover:shadow-red-900/40",
    },
  };

  const LinkButton = ({ link }) => {
    const IconComponent = link.icon;
    const colors = colorVariants[link.color];

    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full group transition-transform duration-200 hover:-translate-y-1"
      >
        <div
          className={`${colors.bg} ${colors.hover} ${colors.shadow} rounded-xl p-5 transition-all duration-300 ease-out group-hover:shadow-lg border ${colors.border}`}
        >
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                <IconComponent
                  className="w-6 h-6 text-white"
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {link.title}
                  </h3>
                  <p className="text-white/80 text-sm font-medium mt-1">
                    {link.description}
                  </p>
                </div>
                <ExternalLink
                  className="w-5 h-5 text-white/70 group-hover:text-white transition-all duration-200"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30"></div>

      <div className="relative max-w-md mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
              <img
                src={ProfileImg}
                alt="Tapas Jyoti Mohanta"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-emerald-500 rounded-full border-[3px] border-white shadow-md flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
              {profileData.name}
            </h1>
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-indigo-100 rounded-full mb-4">
              <span className="text-indigo-800 font-medium text-sm">
                {profileData.title}
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">{profileData.bio}</p>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {profileData.links.map((link) => (
            <LinkButton key={link.id} link={link} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-sm text-gray-500 mb-1">
            Made with ❤️ by Tapas Jyoti Mohanta
          </p>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkTreeProfile;
