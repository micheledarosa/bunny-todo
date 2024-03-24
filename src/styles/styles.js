import styled, { css } from "styled-components";
import { Reorder } from "framer-motion";

const colors = {
  background: '#b3a398',
  white: '#fff',
  light_pink: '#ffe5e5',
  pink: '#ec9daf',
  button_add: '#503c3c'
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bunny = styled.img`
  width: 6.25rem;
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: ${colors.white};
  padding: 2rem;
  border-radius: 0.35rem;
  height: 34.2rem;
  width: 27rem;
  overflow-y: auto;
  border: 0.125rem solid ${colors.white};
  max-height: calc(90vh - 0.375rem);

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 0.5rem;
  }

  @media screen and (min-width: 684px) and (max-width: 1077px) {
    width: 55%;
  }
`;

export const List = styled.ul`
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: #000;
  font-weight: 400;
  background-color: ${colors.light_pink};
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
  list-style-type: none;
  border-radius: 0.35rem;
  margin-bottom: 1.25rem;
  height: auto;
  width: 18rem;
  padding: 0.625rem;
  word-break: break-all;
  position: relative;
  cursor: pointer;

  ${(props) =>
    props.$completed &&
    css`
      text-decoration: line-through;
    `}

  @media screen and (max-width: 768px) {
  width: 15rem;
  }

  @media screen and (max-width: 393px) {
    width: 12rem;
  }
`;

export const Input = styled.input`
  border: 0.15rem solid ${colors.pink};
  background-color: ${colors.light_pink};
  border-radius: 0.35rem;
  height: 1rem;
  font-size: 0.85rem;
  font-weight: 400;
  outline: none;
  padding: 0.625rem;
  width: 88%;
`;

export const Button = styled.button`
  background: ${colors.button_add};
  border-radius: 0.25rem;
  min-height: 2.38rem;
  border: none;
  width: 93.8%;
  color: ${colors.white};

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 684px) and (max-width: 1077px) {
    width: 93%;
  }
`;

export const FragmentContent = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const ActionsContainer = styled.div`
  padding: 0.6rem;
  margin-left: 6px;
`;

export const ActionButton = styled.button`
  margin-right: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
`;

export const StyledReorderGroup = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
`;

export const ReorderItem = styled(Reorder.Item)`
  list-style-type: none;
`;