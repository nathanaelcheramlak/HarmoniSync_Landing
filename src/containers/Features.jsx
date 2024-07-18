import { NextIcon, FlaskIcon, MySqlIcon } from "../../public";
import FeatureCard from "../components/FeatureCard/FeatureCard";

const features = [
  {
    title: "Seamless Playlist",
    description:
      "Our intuitive interface allows you to effortlessly create, organize, and share playlists.",
    image: null,
    isCenter: false,
  },
  {
    title: "Cross Platform Integration",
    description: "Our platform seamlessly integrates with Spotify.",
    image: "../../public/assets/spotify-icon.png", // Ensure this path is correct
    isCenter: true,
  },
  {
    title: "Discover Trending Musics",
    description:
      "Explore the latest hits and trending tracks with our platform.",
    image: "../../public/assets/billboard-icon.png", // Ensure this path is correct
    isCenter: false,
  },
];

const Features = () => {
  return (
    <section
      className="z-10 px-40 pb-32 w-full flex flex-col border-b bg-gradient-to-b from-transparent from-0% via-[#0A0D3C] via-6% to-[#09090F] to-60%"
      id="features"
    >
      <div className="z-10 flex items-center">
        <div className="first:w-full">
          <h1 className="text-3xl sm:text-6xl tracking-wide font-semibold leading-[70px]">
            Personalized Music Recommendation
          </h1>
        </div>

        <div className="relative w-full">
          <div className="blue_gradient w-16 h-2 -translate-y-6" />
          <p className="text-xl text-left leading-8">
            Our recommendation engine suggests music, podcasts, and audiobooks
            based on your unique tastes and listening history, ensuring you
            always have something new to enjoy.
          </p>
        </div>
      </div>

      <div className="z-10 mt-12 px-40 flex justify-between items-center">
        <div className="w-[250px] h-fit">
          <img src={NextIcon} alt="Next Js" className="object-contain" />
        </div>

        <div className="flex justify-center items-center">
          <div className="w-[100px] h-fit">
            <img
              src={FlaskIcon}
              alt="Flask"
              className="object-contain w-[75px]"
            />
          </div>

          <p className="text-3xl font-stoke">Flask</p>
        </div>

        <div className="w-[150px] h-fit flex justify-center items-center">
          <img src={MySqlIcon} alt="MySql" className="object-contain" />
        </div>
      </div>

      <div className="z-10 mt-12 w-full flex justify-center text-black">
        <div className="flex w-[85%] justify-between gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} content={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
