import Image from "next/future/image";
import Link from "next/link";

import { HeaderStyle } from "./styles";
import { Container } from "../../styles/global";

import Logo from "../../assets/logo.svg";
import LogoCodeboost from "../../assets/logo-codeboost.svg";

export function Header() {
  return (
    <HeaderStyle>
      <Container>
        <div className="logo">
          <Link href="/">
            <a>
              <Image src={Logo} alt="Marvel Studios" />
            </a>
          </Link>
        </div>
        <div className="code">
          <Image src={LogoCodeboost} alt="Codeboost" />
        </div>
      </Container>
    </HeaderStyle>
  );
}
