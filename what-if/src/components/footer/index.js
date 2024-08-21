import Image from "next/future/image";
import Logo from "../../assets/logo-codeboost.svg";
import { Container } from "../../styles/global";
import { FooterStyle } from "./styles";

export function Footer() {
  return (
    <FooterStyle>
      <Container>
        <div>
          <strong>©2022 CodeBoost</strong>
          <p>Este projeto foi foi desenvolvido para o curso Codeboost.</p>
        </div>
        <Image src={Logo} alt="Codeboost" />
      </Container>
    </FooterStyle>
  );
}
