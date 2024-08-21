import { Logo } from "@/assets/imgs/Index";
import Container from "@/components/Container/Index";
import { FOOTER_LINKS, LABELS_BTN } from "@/constants/Index";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  return (
    <footer className="py-10 @laptop:pt-32 @laptop:pb-14">
      <Container className="flex flex-col @laptop:flex-row justify-between gap-10">
        <div className="text-left max-w-full @laptop:max-w-left-content-footer">
          <Image src={Logo} alt="" />
          <p className="mt-4 mb-6 text-lg text-white/70">
            Similique optio quod saepe tempora rerum natus. Ullam praesentium
            nesciunt hic explicabo fugit.
          </p>
          <button className="w-full @tablet:w-auto bg-blue-primary py-4 px-7 rounded-full font-medium hover:bg-blue-900 transition-all ease-linear">
            {LABELS_BTN[0]}
          </button>
        </div>

        <div className="flex flex-col @laptop:flex-row gap-10 @laptop:gap-20">
          {FOOTER_LINKS.map(({ id, title, items }) => (
            <div key={id}>
              <strong className="block text-lg mb-4">{title}</strong>
              <ul className="w-full">
                {items.map((item, index) => (
                  <li className="py-1" key={index}>
                    <Link
                      className="text-lg text-white/70 hover:text-white/100 py-1 transition-all ease-linear"
                      href={item}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Index;
