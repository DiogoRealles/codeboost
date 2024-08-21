import Image, { StaticImageData } from "next/image";

interface IProppsThumbImage {
  srcImage: StaticImageData;
  onClick: () => void;
}

const Index = ({ srcImage, onClick }: IProppsThumbImage) => {
  return (
    <button
      className="w-full h-full overflow-hidden rounded-md"
      onClick={onClick}
    >
      <Image
        className="hover:scale-110 transition-all ease-linear cursor-pointer"
        src={srcImage}
        alt=""
        width={300}
        height={200}
      />
    </button>
  );
};

export default Index;
