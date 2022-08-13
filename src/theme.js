import styled from "styled-components";

const colors = {
  mainGray: "#e4ebf5",
  shadowGray: "#c8d0e7",
  white: "#ffffff",
  red: "#f24130",
  blue: "#135EF2",
  darkGray: "#262626",
};

const layout = {
  flexbox: `
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexCenter: `
  display: flex;
  align-items: center;
  justify-content: center;
`,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

const theme = {
  colors,
  layout,
};

export default theme;
