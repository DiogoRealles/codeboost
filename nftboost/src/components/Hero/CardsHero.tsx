import Image from "next/image";
import { CardLeft, CardRight } from "@/assets/imgs/Index";

const CardsHero = () => {
  return (
    <div className="relative w-area-cards-mob @desktop:w-full h-area-cards-mob @desktop:h-area-cards-desk mt-12 @desktop:mt-20">
      <Image
        className="absolute top-0 left-8 @desktop:left-0 w-1/2 @desktop:w-auto z-10"
        src={CardLeft}
        alt=""
      />
      <Image
        className="absolute top-0 @desktop:right-0 right-8 w-1/2 @desktop:w-auto"
        src={CardRight}
        alt=""
      />
    </div>
  );
};

export default CardsHero;
