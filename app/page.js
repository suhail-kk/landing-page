import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Milestones from "@/components/Milestones";

export default function Home() {
  return (
    <main className="relative w-screen h-fit min-h-screen md:h-screen bg-[url('./assets/images/landing-page/banner/lines.png')]">
      <div className="h-full w-full flex">
        <div className="absolute lg:hidden top-0 mx-auto opacity-10 inset-0">
          <Gallery />
        </div>
        <div className="z-10 h-full min-h-screen w-full flex flex-col justify-between">
          <div className="h-full py-5 md:py-10 px-5 md:px-20">
            <Header />
            <Banner />
          </div>
          <Milestones />
        </div>
        <div className="hidden lg:block">
          <Gallery />
        </div>
      </div>
    </main>
  );
}
