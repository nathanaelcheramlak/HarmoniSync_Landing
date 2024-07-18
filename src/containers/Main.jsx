import React from "react";

const Main = () => {
  return (
    <section
      className="px-40 py-52 flex flex-col w-full gap-24 main_section"
      id="main"
    >
      <div className="z-10 gap-5">
        <h1 className="max-w-fit sm:text-7xl text-4xl py-3 font-bold tracking-widest blue_gradient bg-clip-text text-transparent">
          HarmoniSync
        </h1>
        <h2 className="text-2xl sm:text-4xl">Music Recommendation</h2>
      </div>
      <div className="z-10">
        <p className="text-2xl font-extralight">
          Get Your Free <br /> Personalized Music Now
        </p>
      </div>
    </section>
  );
};

export default Main;
