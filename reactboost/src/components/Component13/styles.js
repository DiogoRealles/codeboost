import styled from "styled-components";

export const Card = styled.div`
  border-radius: 16px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 24px;
  width: 100%;
  max-width: 280px;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  color: ${({ titlechangecolor }) => (titlechangecolor ? "red" : "blue")};
  margin-bottom: 16px;
`;

export const CardText = styled.p`
  font-size: 16px;
  color: #999;
  line-height: 150%;
  font-family: "Roboto", sans-serif;
`;
