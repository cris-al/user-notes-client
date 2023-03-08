import styled from "styled-components";
import { Colors, ResponsiveWidth } from "themes/themes";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
  gap: 0.8rem;
`;

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 1rem;
  @media (min-width: ${ResponsiveWidth.xs}) {
    width: 320px;
  }
  @media (min-width: ${ResponsiveWidth.sm}) {
    width: 500px;
    gap: 1.5rem;
  }
  @media (min-width: ${ResponsiveWidth.md}) {
    width: 700px;
  }
  @media (min-width: ${ResponsiveWidth.lg}) {
    width: 900px;
    gap: 2rem;
  }
`;

export const Note = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 0.8rem;
  gap: 0.5rem;
  transition: 0.5s;
  box-shadow: 5px 5px 20px ${Colors.shadow.black};
  &:hover {
    box-shadow: 5px 5px 20px ${Colors.shadow.grey};
  }
  @media (min-width: ${ResponsiveWidth.sm}) {
    padding: 1rem;
    gap: 1rem;
  }
  @media (min-width: ${ResponsiveWidth.md}) {
    padding: 1.5rem 2rem;
    gap: 1.5rem;
  }
  @media (min-width: ${ResponsiveWidth.lg}) {
    padding: 2rem;
  }
`;

export const NoteTitle = styled.h1`
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: ${ResponsiveWidth.sm}) {
    font-size: 1.3rem;
  }
  @media (min-width: ${ResponsiveWidth.lg}) {
    font-size: 1.4rem;
  }
`;

export const NoteDescription = styled.span`
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  @media (min-width: ${ResponsiveWidth.sm}) {
    font-size: 1rem;
  }
  @media (min-width: ${ResponsiveWidth.lg}) {
    font-size: 1.1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 0.5rem;
`;