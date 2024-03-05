import Image from "next/image";

import { IconETH, IconHeart, IconVerify, iconClock } from "@/assets/imgs/Index";

type TProps = {
  thumbnail: string;
  thumbnail2: string;
  thumbnail3: string;
  name: string;
  value_btc: string;
  value_brl: string;
};

const Index = ({
  thumbnail,
  thumbnail2,
  thumbnail3,
  name,
  value_btc,
  value_brl,
}: TProps) => {
  return (
    <a
      className=""
      href="https://www.mythrillfiction.com/the-dark-rider"
      target="_blank"
    >
      <div className="card">
        <div className="wrapper">
          <Image
            className="cover-image"
            src={thumbnail}
            alt=""
            width={300}
            height={270}
          />
        </div>
        <Image
          className="title"
          src={thumbnail2}
          alt=""
          width={300}
          height={270}
        />
        <Image
          className="character"
          src={thumbnail3}
          alt=""
          width={300}
          height={270}
        />
      </div>
    </a>
  );
};

export default Index;
