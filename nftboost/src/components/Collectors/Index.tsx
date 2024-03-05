import Container from "@/components/Container/Index";
import TitleSection from "@/components/TitleSection/Index";
import CardCollection from "@/components/CardCollection/Index";
import { Img01, Img02, Img03, Img04 } from "@/assets/imgs/Index";

const collectors = [
  {
    id: "1",
    name: "NAME",
    thumbnail: Img01.src,
    percent: "20",
    value_btc: "0721",
  },
  {
    id: "2",
    name: "NAME",
    thumbnail: Img02.src,
    percent: "20",
    value_btc: "0721",
  },
  {
    id: "3",
    name: "NAME",
    thumbnail: Img03.src,
    percent: "20",
    value_btc: "0721",
  },
  {
    id: "4",
    name: "NAME",
    thumbnail: Img04.src,
    percent: "20",
    value_btc: "0721",
  },
];

const Index = () => {
  return (
    <section className="py-10 @desktop:py-28">
      <Container className="">
        <TitleSection
          subtitle="Colecionadores em Foco"
          title="Principais colecionadores"
        />

        <div className="grid grid-cols-1 @tablet:grid-cols-2 gap-x-4 @desktop:gap-x-8 gap-y-4">
          {collectors.map((collector) => (
            <CardCollection key={collector.id} {...collector} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Index;
