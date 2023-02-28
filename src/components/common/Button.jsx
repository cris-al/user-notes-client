import styled from "styled-components";
import { Colors, ResponsiveWidth } from "themes/themes";

const ButtonStyled = styled.button`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : Colors.background.green};
  border: none;
  border-radius: 5px;
  padding: 0.5rem 0.8rem;
  box-shadow: 5px 5px 10px ${Colors.shadow.black};
  color: ${Colors.word.grey};
  font-size: 0.8rem;
  &:hover {
    cursor: pointer;
    background-color: ${({ backgroundHover }) =>
      backgroundHover ? backgroundHover : Colors.hover.green};
  }
  @media screen and (min-width: ${ResponsiveWidth.sm}) {
    font-size: 0.9rem;
  }
  @media screen and (min-width: ${ResponsiveWidth.md}) {
    font-size: 1rem;
  }
`;

export default function Button({ text, onClick, type = "button", backgroundColor, backgroundHover }) {
  return (
    <ButtonStyled
      onClick={onClick}
      type={type}
      backgroundColor={backgroundColor}
      backgroundHover={backgroundHover}
    >
      {text}
    </ButtonStyled>
  );
};