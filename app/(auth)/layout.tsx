import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/*Div for sign-in and sign-up screen for centering*/}
      <div className="w-1/2 h-full flex items-center justify-center">
        {children}
      </div>

      {/*Screen and logo image*/}
      <div className="hidden md:flex w-1/2 h-full relative">
        <Image
          src="/images/screen.png"
          width={1000}
          height={1000}
          alt="Doctors"
          className="w-full h-full object-cover"
        />

        <div
          className="absolute top-0 w-full h-full 
        bg-opacity-10 z-10 flex flex-col items-center justify-center"
        >
          <h1>SchedulCare</h1>
          <p>You're welcome</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
