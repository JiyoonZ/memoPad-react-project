import {useNavigate} from "react-router-dom";
import dayjs from "dayjs";
import {memoState} from "../../atoms";
import {IMemo} from "../../type";
import {useRecoilState} from "recoil";
import EditMode from "../../components/EditMode";
import {EDITMODE} from "../../constants";

function Create() {
  const navigate = useNavigate();
  const [memos, setMemos] = useRecoilState<IMemo[]>(memoState);
  function goBackHandler() {
    navigate("/memo");
  }
  function submitHandler(evt: any) {
    evt.preventDefault();
    const memoEntry: IMemo = {
      id: Date.now() + "",
      title: evt.target.title.value + "",
      content:
        evt.target.content.value.replaceAll(/(?:\r\n|\r|\n)/g, "<br/>") + "",
      date: dayjs(new Date()).format("YYYY-MM-DD") + "",
      bookMark: false,
    };
    setMemos((prev) => {
      return [memoEntry, ...prev];
    });
    navigate("/memo");
  }
  return (
    <EditMode
      submitHandler={submitHandler}
      goBackHandler={goBackHandler}
      mode={EDITMODE.CREATE}
    />
  );
}
export default Create;
