import styled from "styled-components";

export const ContainerApp = styled.div`
  width: 100%;
  max-width: 124.6rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

export const HeaderApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid #fff3;

  h1 {
    font-size: 3.2rem;
  }

  span {
    font-size: 1.6rem;
    opacity: calc() 0.6;
  }
`;

export const ContentCharacters = styled.div`
  & > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;
  }

  button {
    display: block;
    /* line-height: 6.5rem; */
    background: #5b1fa6;
    color: #ffffff;
    border-radius: 6px;
    margin: 40px auto;
    padding: 16px 48px;
    cursor: pointer;
    border: none;
    font-size: 1.8rem;
    mask-type: 4.8rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
  background: #050011;
  display: flex;
  align-items: center;
  justify-content: center;
`;
