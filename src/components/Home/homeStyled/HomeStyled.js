import styled from "styled-components";
import { Colors } from "../../../themes/themes";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0.5rem;
  width: 100%;
`;

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.background.darkGrey};
  height: 100vh;
  width: 100%;
`;
// export const CardContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: ${Colors.background.blue};
//   overflow-y: scroll;

// ::-webkit-scrollbar {
//   width: 10px;
// }
// ::-webkit-scrollbar-thumb {
//   background: ${Colors.background.green};
//   border-radius: 5px;
// }
// ::-webkit-scrollbar-thumb:hover {
//   background: ${Colors.hover.green};
// }
// `;
