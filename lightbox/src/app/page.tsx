"use client";
import Image, { StaticImageData } from "next/image";
import { listImages } from "@/constants";
import ThumbImage from "@/components/ThumbImage/Index";
import { IconArrow, IconClose } from "@/assets";
import { useState } from "react";

export default function Home() {
  const [dataImgCurrent, setDataImgCurrent] = useState<StaticImageData | null>(
    null
  );

  const [indexCurrent, setIndexCurrent] = useState(0);

  const isOpen = dataImgCurrent != null;

  function handleClickLightboxOpen(index: number) {
    setIndexCurrent(index);
    setDataImgCurrent(listImages[index]);
  }

  function handleClickLightboxClose() {
    setDataImgCurrent(null);
  }

  function handleNavigate(direction: "next" | "previews") {
    let index = direction === "next" ? indexCurrent + 1 : indexCurrent - 1;

    if (index < 0) {
      index = listImages.length - 1;
    }

    if (index >= listImages.length) {
      index = 0;
    }

    setIndexCurrent(index);

    setDataImgCurrent(listImages[index]);
  }

  return (
    <>
      <section className="w-full min-h-screen flex items-start justify-center py-10 px-3 bg-slate-900">
        <div className="grid grid-cols-3 gap-3">
          {listImages.map((img, index) => (
            <ThumbImage
              key={index}
              srcImage={img}
              onClick={() => handleClickLightboxOpen(index)}
            />
          ))}
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 w-full h-full z-10 flex items-center justify-center bg-black/50 gap-4">
          <button
            className="absolute top-5 right-5 w-10"
            onClick={handleClickLightboxClose}
          >
            <Image src={IconClose} alt="" />
          </button>

          <button
            className="w-12 rotate-180 hover:opacity-50 transition-opacity ease-linear"
            onClick={() => handleNavigate("previews")}
          >
            <Image src={IconArrow} alt="" />
          </button>

          {dataImgCurrent && (
            <Image src={dataImgCurrent} alt="" width={500} height={700} />
          )}

          <button
            className="w-12 rotate-0 hover:opacity-50 transition-opacity ease-linear"
            onClick={() => handleNavigate("next")}
          >
            <Image src={IconArrow} alt="" width={500} />
          </button>
        </div>
      )}
    </>
  );
}
