import Hero from "@/components/Hero/Index";
import SwiperCarousel from "@/components/SwiperCarousel/Index";
import Collectors from "@/components/Collectors/Index";
import Banner from "@/components/Banner/Index";
import Questions from "@/components/Questions/Index";

import {
  Img01,
  Img02,
  Img03,
  Img04,
  Img05,
  Img06,
  Img07,
} from "@/assets/imgs/Index";

export default function Home() {
  const featuredCollections = [
    {
      name: "Cat #221",
      thumbnail: Img01.src,
      value_btc: "0.0721",
      value_brl: "602,02",
    },
    {
      name: "Cat #221",
      thumbnail: Img02.src,
      value_btc: "0.0721",
      value_brl: "602,02",
    },
    {
      name: "Cat #221",
      thumbnail: Img03.src,
      value_btc: "0.0721",
      value_brl: "602,02",
    },
    {
      name: "Cat #221",
      thumbnail: Img04.src,
      value_btc: "0.0721",
      value_brl: "602,02",
    },
    {
      name: "Cat #221",
      thumbnail: Img05.src,
      value_btc: "0.0721",
      value_brl: "602,02",
    },
    {
      name: "Cat #221",
      thumbnail: Img06.src,
      value_btc: "0.0721",
      value_brl: "602,02",
    },
    {
      name: "Cat #221",
      thumbnail: Img07.src,
      value_btc: "0.0721",
      value_brl: "602,02",
    },
  ];

  return (
    <main className="">
      <Hero />
      <section className="">
        <SwiperCarousel
          subtitle="Destaque em Coleções"
          title="Coleções notáveis"
          data={featuredCollections}
        />
        <hr className="border-t border-white/10 max-w-grid mx-auto" />
        <SwiperCarousel
          subtitle="Seleção Mensal"
          title="Destaque do Mês"
          data={featuredCollections}
        />

        <Collectors />
        <hr className="border-t border-white/10 max-w-grid mx-auto" />

        <hr className="border-t border-white/10 max-w-grid mx-auto" />
        <SwiperCarousel
          subtitle="Em Tendência"
          title="Tendências"
          data={featuredCollections}
        />

        <Banner />

        <Questions />
      </section>
    </main>
  );
}
