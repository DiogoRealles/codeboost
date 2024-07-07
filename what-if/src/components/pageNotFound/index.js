import { Button } from "../../components/button";

import ImageNotFound from "../../assets/img-not-found.png";
import Image from "next/image";
import { PageNotFoundStyle } from "./styles";
import { Container } from "../../styles/global";
import { useRouter } from "next/router";

export function PageNotFound() {
  const router = useRouter();
  return (
    <PageNotFoundStyle>
      <Container>
        <h1>Whoops, essa página sumiu.</h1>
        <p>
          OHHH, parece que não conseguimos encontrar a página que você está
          procurando. Tente voltar à página anterior ou consulte nossa Central
          de Ajuda para obter mais informações.
        </p>
        <Button
          label="Voltar"
          colorBg="$red900"
          onCLick={() => {
            router.push("/");
          }}
        />
        <Image src={ImageNotFound} alt="Image not Found" />
      </Container>
    </PageNotFoundStyle>
  );
}
