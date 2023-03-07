import styled from "styled-components";
import { Colors, ResponsiveWidth } from "themes/themes";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0.5rem;
  @media screen and (min-width: ${ResponsiveWidth.xs}) {
    padding: 1.5rem 0.6rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.lg}) {
    gap: 2rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.xl}) {
    padding: 2rem;
    gap: 3rem;
  }
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem 1rem;
  gap: 1rem;
  @media screen and (min-width: ${ResponsiveWidth.xs}) {
    padding: 1rem 2.3rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.md}) {
    padding: 1.5rem 2.8rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.lg}) {
    gap: 1.5rem;
  }
`;

export const Container1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: ${ResponsiveWidth.sm}) {
    flex-direction: row;
    padding: 1rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.lg}) {
    padding: 0 3rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.9rem;
  text-shadow: 5px 5px 5px ${Colors.shadow.black};
  @media screen and (min-width: ${ResponsiveWidth.xs}) {
    font-size: 2.2rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.sm}) {
    font-size: 2.7rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.md}) {
    font-size: 3.1rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.lg}) {
    font-size: 3.5rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.xl}) {
    font-size: 3.9rem;
  }
`;

export const SubTitle = styled.h1`
  font-size: 1.4rem;
  text-shadow: 5px 5px 5px ${Colors.shadow.black};
  margin: auto;
  @media screen and (min-width: ${ResponsiveWidth.xs}) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.sm}) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.md}) {
    font-size: 2.1rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.lg}) {
    font-size: 2.4rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.xl}) {
    font-size: 2.7rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  text-shadow: 5px 5px 5px ${Colors.shadow.black};
  margin: auto;
  @media screen and (min-width: ${ResponsiveWidth.sm}) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.md}) {
    font-size: 1.3rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.xl}) {
    font-size: 1.4rem;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  animation: img 3s;
  @media screen and (min-width: ${ResponsiveWidth.sm}) {
    width: 180px;
    height: 180px;
  }
  @media screen and (min-width: ${ResponsiveWidth.md}) {
    width: 240px;
    height: 240px;
  }
  @media screen and (min-width: ${ResponsiveWidth.lg}) {
    width: 300px;
    height: 300px;
  }
  @media screen and (min-width: ${ResponsiveWidth.xl}) {
    width: 350px;
    height: 350px;
  }
  @keyframes img {
    50% {
      transform: scale(1.08);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;
  @media screen and (min-width: ${ResponsiveWidth.lg}) {
    gap: 2.5rem;
  }
`;
