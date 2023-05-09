import styled from "styled-components";
import * as S from "../components/styles";

function Home() {
  return (
    <>
      <S.Container>
        <S.DashBoardH1>🌏 Zeeyoon 님의 DashBoard</S.DashBoardH1>

        <Section>
          <div>
            <S.SubTitle tag={1}>나의 메모장</S.SubTitle>
            <SectionWrapper>
              <Overview>{`총 ${"n"}개의 메모가 존재합니다.`}</Overview>
            </SectionWrapper>
          </div>
          <div>
            <S.SubTitle tag={2}>나의 보드장</S.SubTitle>
            <SectionWrapper>
              <Overview>{`총 ${"n"}개의 메모가 존재합니다.`}</Overview>
            </SectionWrapper>
          </div>
        </Section>
      </S.Container>
    </>
  );
}
const Section = styled.div`
  margin: auto;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
`;
const SectionWrapper = styled.div`
  margin: 10px 0;
  ${({theme}) => theme.layout.flex};
  height: 150px;
  width: 100%;
`;
const Overview = styled.div`
  width: 300px;
  height: 100%;
  line-height: 18px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7;
  position: relative;
`;

export default Home;
