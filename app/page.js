import Image from "next/image";
import Hero from "./components/Hero";
import Whatisvenga from "./components/Whatisvenga";
import Efforlessnavigate from "./components/Efforlessnavigate";
import OurRoadmap from "./components/OurRoadmap";

export default function Home() {
  return (
    <main className="flex-grow-0 flex-shrink-0 basis-auto relative ">
      <div className="max-w-[1440px] w-full my-0 mx-auto py-0 px-5">
        <Hero />
        <Whatisvenga />
        <Efforlessnavigate />
        <OurRoadmap />
      </div>
    </main>
  );
}
