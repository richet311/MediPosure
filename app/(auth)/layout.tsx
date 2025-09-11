import React from "react";
import Background from "@/app/backgrounds/background";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen items-center justify-center gap-32">
      {/* Background of page */}
      <div className="absolute inset-0 -z-10">
        <Background />
      </div> {/* Background of page */}


      {/* Login Box + Text */}   
      <div className="flex flex-col items-center space-y-12">
        <h1 className="mb-6 text-8xl font-bold text-[#00CFCF] text-center text-shadow-lg">
          MediPosure
        </h1>

        <h1 className="mb-12 text-2xl font-bold text-blue-950 text-center">
          Book doctor appointments instantaneoulsy
        </h1>

        <div className="flex flex-col items-center">
          {children}
        </div>
      </div> {/* Login Box + Text */}

      {/* Logo + icons */}
      <div className="flex flex-col items-center space-y-6">
        <img
          src="/icons/logo.png"
          alt="logo"
          className="w-120 h-120"
        />
        <ul className="space-y-4 text-blue-950 text-2xl">
          <li className="flex items-center">
            <img src="/icons/check.png" alt="check" className="w-5 h-5 mr-2" />
            Find top-rated specialists
          </li>
          <li className="flex items-center">
            <img src="/icons/arrow.png" alt="arrow" className="w-5 h-5 mr-2" />
            Manage appointments securely
          </li>
          <li className="flex items-center">
            <img src="/icons/person.png" alt="person" className="w-5 h-5 mr-2" />
            Save time & hassle
          </li>
        </ul>
      </div> {/* Logo + icons */}

    </div>
  );
};

export default AuthLayout;
