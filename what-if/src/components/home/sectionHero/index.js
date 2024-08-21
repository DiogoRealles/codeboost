import Image from "next/future/image";
import { Container } from "../../../styles/global";
import { AreaSocial, ContentText, SectionHeroStyle } from "./styles";

import IconYoutube from "../../../assets/youtube.svg";
import IconInstagram from "../../../assets/instagram.svg";
import { Button } from "../../button";
import { PopupVideo } from "../../popupVideo";
import { useRouter } from "next/router";

const socials = [
  {
    name: "Youtube",
    url: "#",
    icon: IconYoutube,
  },
  {
    name: "Instagram",
    url: "#",
    icon: IconInstagram,
  },
];

export function SectionHero({ data }) {
  const router = useRouter();
  return (
    <SectionHeroStyle>
      <Container>
        <AreaSocial>
          <ul>
            {socials.map(({ name, url, icon }) => {
              return (
                <li key={`social-${name}`}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <Image src={icon} alt="Youtube" />
                  </a>
                </li>
              );
            })}
          </ul>
        </AreaSocial>
        <ContentText>
          <div className="left">
            <h3>{data.subtitle}</h3>
            <h1>{data.title}</h1>
            <p>{data.description[0].text}</p>
            <Button
              label={data.label_button}
              colorBg="$red900"
              onCLick={() => {
                router.push(`${data.url_button.url}`);
              }}
            />
          </div>
          <PopupVideo text={data.label_trailer} />
        </ContentText>
      </Container>
    </SectionHeroStyle>
  );
}
