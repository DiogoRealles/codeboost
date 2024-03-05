import Container from "@/components/Container/Index";
import TitleSection from "@/components/TitleSection/Index";
import CarouselCards from "@/components/CarouselCards/Index";

type TProps = {
  subtitle: string;
  title: string;
  data?: any[];
};

const Index = ({ subtitle, title, data }: TProps) => {
  return (
    <section className="py-10 @desktop:py-28">
      <Container className="px-0 @desktop:px-3">
        <TitleSection subtitle={subtitle} title={title} />
        <CarouselCards data={data} />
      </Container>
    </section>
  );
};

export default Index;
