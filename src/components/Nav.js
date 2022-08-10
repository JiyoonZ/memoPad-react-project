import styled from "styled-components";
function Nav() {
  return (
    <Flexbox>
      <Button btnColor="red">+ NEW</Button>
      <Button btnColor="blue">모두보기</Button>
      <Button btnColor="blue">즐겨찾기</Button>
    </Flexbox>
  );
}
const Button = styled.button`
  color: ${(props) => (props.btnColor === "red" ? "#f24130" : "#135EF2")};
  height: 2rem;
  width: 70px;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  background-color: #e4ebf5;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;

  :nth-child(2) {
    margin-left: 100px;
  }
`;
const Flexbox = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;

export default Nav;
