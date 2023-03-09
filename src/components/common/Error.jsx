import styled from "styled-components";
import { ResponsiveWidth, Colors } from "themes/themes";

const Paragraph = styled.p`
  color: ${Colors.word.red};
  font-size: 0.7rem;
  @media screen and (min-width: ${ResponsiveWidth.md}) {
    font-size: 0.8rem;
  }
`;

export default function Error({ error, touched }) {
    return (
        <> { error && touched && <Paragraph>{error}</Paragraph> } </>
    );
};