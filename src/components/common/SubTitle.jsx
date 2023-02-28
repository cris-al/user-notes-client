import styled from "styled-components";
import { ResponsiveWidth, Colors } from "themes/themes";

const Text = styled.h2`
  font-size: 1.4rem;
  text-shadow: 2px 2px 10px ${Colors.shadow.black};
  @media screen and (min-width: ${ResponsiveWidth.sm}) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.md}) {
    font-size: 2.1rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.lg}) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.xl}) {
    font-size: 2.8rem;
  }
`;

export default function SubTitle({ text }) {
  return <Text>{text}</Text>;
};