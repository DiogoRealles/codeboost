import { IconHanburguer, Logo } from "@/assets/imgs/Index";
import Container from "@/components/Container/Index";
import { LABELS_BTN, NAV_LINKS } from "@/constants/Index";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  return (
    <header className="absolute top-0 left-0 py-6 w-full @laptop:py-5">
      <Container className="flex items-center justify-between">
        <Image className="max-w-logo-size-mob" src={Logo} alt="" />

        <div className="hidden @tablet:flex flex-1 max-w-nav-header items-center justify-between">
          <nav className="flex gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                className="font-medium font-body hover:text-blue-primary transition-all ease-linear p-2"
                key={link.id}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button className="bg-blue-primary py-4 px-7 rounded-full font-medium hover:bg-blue-900 transition-all ease-linear">
            {LABELS_BTN[0]}
          </button>
        </div>
        <button className="w-10 h-10 flex items-center justify-center border border-white/5 rounded bg-white/5 @laptop:hidden">
          <Image src={IconHanburguer} alt="" />
        </button>
      </Container>
    </header>
  );
};

export default Index;
