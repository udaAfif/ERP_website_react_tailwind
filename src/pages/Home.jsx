import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Carousel from "../partials/Carousel";
import Newsletter from "../partials/Newsletter";
import RunningImages from "../partials/RunRightToLeft";

const Home = () => {
  return (
    <>
      <main className="flex-grow">
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />

        <div className=" py-3 px-10">
          <Carousel />
        </div>
        <Newsletter />

        {/* <Newsletter /> */}
      </main>
    </>
  );
};

export default Home;
