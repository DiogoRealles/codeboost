import {
  DoubleNFT,
  LogoApple,
  LogoGoogle,
  SingleNFT,
  iconBoost,
} from "@/assets/imgs/Index";
import Container from "@/components/Container/Index";
import Image from "next/image";
import CardsHero from "./CardsHero";

const Index = () => {
  return (
    <section className="overflow-hidden pt-36 bg-hero-pattern bg-no-repeat">
      <Container className="flex flex-col items-center">
        <h3 className="flex items-center gap-2 text-sm @tablet:text-base @desktop:text-xl mb-3">
          <Image src={iconBoost} alt="" />
          <span className="">
            Adentre um reino de possibilidades infinitas{" "}
          </span>
        </h3>

        <h1 className="text-5xl/normal @desktop:text-7xl/normal text-center font-body mb-4 font-semibold w-full">
          Explore um Universo
          <div className="inline-block align-middle mx-2 p-1 bg-white/5 border-white/5 rounded-full w-24 @desktop:w-32">
            <Image className="w-11 @desktop:w-auto" src={SingleNFT} alt="" />
          </div>
          Digital
          <br /> de
          <Image
            className="inline-block w-16 @desktop:w-auto mx-2"
            src={DoubleNFT}
            alt=""
          />
          Colecionáveis Únicos!
        </h1>
        <p className="w-full @desktop:max-w-content-desc-hero text-white/70 text-center text-sm @desktop:text-xl @tablet:text-base mb-6 @desktop:mb-9">
          Adentre um reino de possibilidades infinitas e mergulhe nas coleções
          de NFT, onde a arte, a cultura e a inovação se unem para criar
          experiências verdadeiramente exclusivas.
        </p>

        <div className="flex flex-col items-center gap-4 @tablet:flex-row">
          <Image src={LogoApple} alt="" />
          <Image src={LogoGoogle} alt="" />
        </div>

        <CardsHero />
        <div className="w-full border-t border-white/10 mt-10 @desktop:mt-36"></div>
      </Container>
    </section>
  );
};

export default Index;
