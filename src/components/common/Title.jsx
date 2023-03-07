import styled from "styled-components";
import { ResponsiveWidth, Colors } from "themes/themes";

const Text = styled.h1`
  font-size: 1.8rem;
  text-shadow: 5px 5px 5px ${Colors.shadow.black};
  @media screen and (min-width: ${ResponsiveWidth.sm}) {
    font-size: 2.3rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.md}) {
    font-size: 2.6rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.lg}) {
    font-size: 3.2rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.xl}) {
    font-size: 3.6rem;
  }
`;

export default function Title({ text }) {
  return <Text>{text}</Text>;
}
