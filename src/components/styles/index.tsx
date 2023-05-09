import styled from "styled-components";

export const Button = styled.button<{btnColor: string}>`
  height: 2rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  width: ${({btnColor}) => {
    if (btnColor === "back") return "90px";
    else return "70px";
  }};
  color: ${({btnColor, theme}) => {
    if (btnColor === "red") return theme.colors.red;
    else if (btnColor === "blue") return theme.colors.blue;
    else return theme.colors.darkGray;
  }};
  background-color: ${({theme}) => theme.colors.mainGray};
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
  cursor: pointer;
  :nth-child(2) {
    margin-left: 1.2rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  flex-grow: 1;
  border-radius: 20px;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
  position: relative;
`;

export const DashBoardH1 = styled.h1`
  font-size: 29px;
  @media screen and (max-width: 672px) {
    font-size: 24px;
  }
  font-weight: 600;
  line-height: 1.5em;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.5em;
`;

export const SubTitle = styled.h2<{tag: number}>`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5em;
  width: max-content;
  height: max-content;
  padding: 5px 12px;
  border-radius: 20px;
  color: white;
  background-color: ${(props) =>
    props.tag === 1 ? "rgba(255, 87, 115, 0.6)" : "rgba(36, 231, 107, 0.9)"};
`;
