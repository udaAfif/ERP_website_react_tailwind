import HeroHomePricing from "../partials/HeroHomePricing";
import CarouselPricing from "../partials/CarouselPricing";
import FreeTrial from "./FreeTrial";

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
      </main>
    </>
  );
};

export default Pricing;
