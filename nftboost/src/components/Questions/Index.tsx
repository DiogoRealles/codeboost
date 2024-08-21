import Container from "@/components/Container/Index";
import TitleSection from "@/components/TitleSection/Index";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const questions = [
  {
    question: "O que são NFTs",
    response:
      "Quae, delectus exercitationem animi placeat nobis eligendi impedit ipsum hic sunt justo eius iste quod? Molestiae odit numquam architecto ut facilis nobis voluptas accusamus.",
  },
  {
    question: "Como funciona a compra de NFTs em seu site?",
    response:
      "Perferendis quae laudantium voluptatibus, doloremque quibusdam totam laborum culpa fugit tempore vitae dolorum? Expedita velit doloribus assumenda repellat, alias id.",
  },
  {
    question: "Como posso vender meus próprios NFTs?",
    response:
      "Sit eius et voluptatibus impedit voluptatem veniam ex fugit, porro ratione error. Aliquam, nobis saepe consequuntur voluptate maxime corrupti illum dolores soluta",
  },
  {
    question: "Os NFTs são seguros e autênticos?",
    response:
      "Officiis possimus impedit nesciunt ea eligendi illum odio, alias inventore repudiandae facilis a necessitatibus sequi neque veritatis ducimus quas voluptatibus dolore accusamus! Aspernatur, voluptatem fuga.",
  },
  {
    question:
      "Quais são as taxas envolvidas na compra e venda de NFTs em seu site?",
    response:
      "Voluptatem fugit nisi pariatur, ex voluptatibus consequatur saepe numquam est aspernatur quis animi odio voluptatum dicta sit eius impedit veniam.",
  },
];

const Index = () => {
  return (
    <section className="pt-10 @desktop:pt-28">
      <Container className="">
        <TitleSection
          subtitle="Desvendando os Mistérios dos NFTs"
          title="Perguntas frequentes"
        />

        <div className="">
          <Accordion type="single" collapsible className="w-full">
            {questions.map(({ question, response }, index) => (
              <AccordionItem key={index} value={`question-${index}`}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{response}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default Index;
