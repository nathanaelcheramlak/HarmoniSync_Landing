import React from "react";
import DevCar from "../components/DevCard/DevCard";

const devs = [
  {
    name: "Nathanael Cheramlak",
    role: "Creative Developer",
    githubLink: "https://github.com/nathanaelcheramlak",
    linkedinLink: "https://www.linkedin.com/in/nathanael-cheramlak-635ba5266/",
    twitterLink: "https://x.com/NathanaelChera1",
  },
  {
    name: "Daniel Yohannes",
    role: "Full Stack Developer",
    githubLink: "https://github.com/danielJohn17",
    linkedinLink:
      "https://www.linkedin.com/in/daniel-yohannes-a0091728a/?originalSubdomain=et",
    twitterLink: "https://x.com/Daniel_Jhon17",
  },
];

const ContactUs = () => {
  return (
    <section className="px-40 py-16 border-t bg-gray-800 flex flex-col gap-12">
      <div>
        <h1 className="text-3xl sm:text-5xl">Contact Us</h1>
      </div>

      <div className="w-full flex items-center justify-around text-black">
        {devs.map((dev, index) => (
          <DevCar key={index} content={dev} />
        ))}
      </div>

      <div className="flex justify-center items-end">
        <p>© 2024 HarmoniSync. All rights reserved.</p>
      </div>
    </section>
  );
};

export default ContactUs;
