"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import CardNFT from "@/components/CardNFT/Index";
import { IconArrow } from "@/assets/imgs/Index";
import Image from "next/image";
import { useRef } from "react";

type TPropsCards = {
  name: string;
  thumbnail: string;
  value_btc: string;
  value_brl: string;
};

type TPropsData = {
  data?: TPropsCards[];
};

const Index = ({ data }: TPropsData) => {
  const swiperRef = useRef() as any;

  return (
    <div className="w-full relative">
      <button
        className="w-12 h-12 bg-blue-primary rounded-full hidden  @desktop:flex items-center justify-center absolute -left-6 z-10 top-1/2 hover:bg-gray-hover-btn-slide transition-all ease-linear border border-white/5"
        onClick={() => {
          swiperRef.current?.slidePrev();
        }}
      >
        <Image src={IconArrow} alt="" />
      </button>

      <Swiper
        className="!px-3"
        slidesPerView={4}
        spaceBetween={32}
        speed={800}
        loop={true}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.3,
            spaceBetween: 24,
          },
          460: {
            slidesPerView: 1.5,
            spaceBetween: 24,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
      >
        {data!.map(({ name, thumbnail, value_btc, value_brl }, index) => (
          <SwiperSlide key={index}>
            <CardNFT
              name={name}
              thumbnail={thumbnail}
              value_btc={value_btc}
              value_brl={value_brl}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="w-12 h-12 bg-blue-primary rounded-full hidden  @desktop:flex items-center justify-center rotate-180 absolute -right-6 z-10 top-1/2 hover:bg-gray-hover-btn-slide transition-all ease-linear border border-white/5"
        onClick={() => {
          swiperRef.current?.slideNext();
        }}
      >
        <Image src={IconArrow} alt="" />
      </button>
    </div>
  );
};

export default Index;
