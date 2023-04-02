import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {useNavigate, useLocation} from "react-router-dom";
import {motion} from "framer-motion";

function LeftNav() {
  console.log(useLocation().pathname.split("/")[1]);
  const currentURL = useLocation().pathname.split("/")[1];
  const navigate = useNavigate();

  return (
    <Wrapper>
      <IconDiv active={currentURL === ""} onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faHouse} className="home" />
      </IconDiv>
      <IconDiv active={currentURL === "memo"} onClick={() => navigate("/memo")}>
        <div>Memo</div>
      </IconDiv>
      <IconDiv
        active={currentURL === "board"}
        onClick={() => navigate("/board")}
      >
        <div>Board</div>
      </IconDiv>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  ${(props) => props.theme.layout.flexCenterColumn};
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  @media screen and (max-width: 672px) {
    width: 100%;
    flex-direction: row;
    margin-bottom: 15px;
    height: min-content;
  }
  margin-right: 15px;
  border-radius: 15px;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
`;
export const IconDiv = styled(motion.div)<{active?: boolean}>`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  ${(props) => props.theme.layout.flexCenter};
  margin: 20px 0 0 0;
  @media screen and (max-width: 672px) {
    margin: 0 20px 0 0;
  }
  background-color: ${(props) => (props.active ? "white" : "none")};
  cursor: pointer;
  box-shadow: ${(props) =>
    props.active ? "0.3rem 0.3rem 0.6rem #c8d0e7" : ""};
`;

export default LeftNav;
