import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

function LeftNav() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <HomeIcon onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faHouse} className="home" />
      </HomeIcon>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  ${(props) => props.theme.layout.flexCenterColumn};
  height: 500px;
  width: 70px;
  /* position: absolute;
  left: 8%;
  top: 8%; */
  margin: 15px;
  border-radius: 15px;
  ${(props) => props.theme.layout.flexCenter};
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
`;
export const HomeIcon = styled.div`
  align-self: flex-end;
  width: 40px;
  height: 40px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

export default LeftNav;
