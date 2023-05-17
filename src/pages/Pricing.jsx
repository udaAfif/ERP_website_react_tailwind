import HeroHomePricing from "../partials/HeroHomePricing";
import CarouselPricing from "../partials/CarouselPricing";
import FreeTrial from "./FreeTrial";
import RunningImages from "../partials/RunRightToLeft";
import Newsletter from "../partials/Newsletter";

const Pricing = () => {
  return (
    <>
      <main className="flex-grow">
        <HeroHomePricing />
        <div className=" py-3 px-10 -mb-10">
          <FreeTrial />
        </div>
        <div className=" py-3 px-10">
          <CarouselPricing />
        </div>
        <Newsletter />
      </main>
    </>
  );
};

export default Pricing;
