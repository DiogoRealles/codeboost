import Image from "next/image";
import { IconETH, IconVerify, Img01 } from "@/assets/imgs/Index";

type TProps = {
  id: string;
  thumbnail: string;
  name: string;
  value_btc: string;
  percent: string;
};

const Index = ({ id, thumbnail, name, value_btc, percent }: TProps) => {
  return (
    <div className="bg-white/5 px-6 py-4 flex items-center justify-between rounded-full border border-white/5 w-full max-w-card-collector">
      <div className="flex items-center gap-4 @desktop:gap-6">
        <strong className="font-semibold">{id}</strong>
        <div className="flex items-center gap-4">
          <div className="relative w-10 h-10">
            <div className="w-full h-full rounded-full relative overflow-hidden flex items-center justify-center border-2 border-white/5">
              <Image
                className="w-full h-full bg-cover object-cover"
                src={thumbnail}
                fill
                alt=""
              />
            </div>
            <Image
              className="absolute -bottom-1 -right-1"
              src={IconVerify}
              alt=""
            />
          </div>

          <div className="space-y-1">
            <h4 className="">{name}</h4>
            <p className="flex flex-col @desktop:flex-row items-start @desktop:items-center gap-1 text-sm text-white/70">
              Preço mínimo
              <span className="flex items-center gap-1 font-semibold text-sm">
                <Image className="" src={IconETH} alt="" />
                {value_btc} BTC
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-1 text-right">
        <strong className="text-green-primary font-bold">+{percent}%</strong>
        <span className="flex items-center gap-1 font-semibold text-sm">
          <Image className="" src={IconETH} alt="" />
          {value_btc} BTC
        </span>
      </div>
    </div>
  );
};

export default Index;
