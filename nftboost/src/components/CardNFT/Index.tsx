import Image from "next/image";

import { IconETH, IconHeart, IconVerify, iconClock } from "@/assets/imgs/Index";

type TProps = {
  thumbnail: string;
  name: string;
  value_btc: string;
  value_brl: string;
};

const Index = ({ thumbnail, name, value_btc, value_brl }: TProps) => {
  return (
    <div className="w-full max-w-card-nft overflow-hidden rounded-2xl border border-gray-border-card bg-gray-area-favorite">
      <div className="relative w-full h-area-image-nft overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={thumbnail}
          fill
          alt=""
        />

        <div className="absolute top-2 right-2 z-10 flex items-center gap-2 py-3 px-6 bg-gray-area-favorite rounded-full border border-gray-border-card">
          <Image src={IconHeart} alt="Icon Heart" />
          <small>0</small>
        </div>
      </div>

      <div className="w-full p-4">
        <h4 className="flex items-center gap-1 text-xs mb-1">
          Cartoon Colection
          <Image src={IconVerify} alt="" />
        </h4>
        <h3 className="text-lg/none font-semibold mb-4">{name}</h3>

        <div className="flex items-end justify-between mb-4">
          <div className="space-y-1">
            <span className="text-xs text-white/80">Preço atual</span>
            <h3 className="flex items-center gap-1 text-xl font-semibold">
              <Image src={IconETH} alt="" />
              {value_btc} BTC
            </h3>
          </div>
          <h5 className="relative bottom-1 text-xs font-medium">
            R$ {value_brl}
          </h5>
        </div>

        <button className="w-full py-4 bg-blue-primary rounded-full mb-4 text-sm font-semibold hover:bg-blue-700 transition-all ease-linear">
          Buy now
        </button>

        <div className="flex items-center gap-1">
          <Image src={iconClock} alt="" />
          <p className="text-xs">Fim em 4h 8m 22s</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
