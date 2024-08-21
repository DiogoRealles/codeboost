import { LogoApple, LogoGoogle } from "@/assets/imgs/Index";
import Container from "@/components/Container/Index";
import Image from "next/image";

const Index = () => {
  return (
    <section className="">
      <Container className="">
        <div className="w-full h-auto @laptop:h-area-banner bg-banner bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center rounded-xl px-2 py-10 @laptop:px-0 @laptop:py-0">
          <h2 className="text-4xl @laptop:text-6xl/snug font-title text-center mb-4 font-semibold">
            Abra as Portas para a Próxima Revolução Digital!
          </h2>
          <p className="text-center text-base @laptop:text-xl mb-6 max-w-xl">
            Descubra, Adquira e Possua os NFTs Mais Valiosos do Universo
            Digital. Sua Oportunidade, Sua História
          </p>
          <div className="flex flex-col items-center justify-center @laptop:flex-row gap-6">
            <Image src={LogoApple} alt="" />
            <Image src={LogoGoogle} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Index;
