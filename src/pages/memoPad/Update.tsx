import {useNavigate, useParams} from "react-router-dom";
import dayjs from "dayjs";
import {useState, useEffect} from "react";
import {memoState} from "../../atoms";
import {IMemo} from "../../type";
import {EDITMODE} from "../../constants";
import {useRecoilState} from "recoil";
import EditMode from "../../components/EditMode";

function Update() {
  const navigate = useNavigate();
  let param = useParams();
  const [memos, setMemos] = useRecoilState<IMemo[]>(memoState);
  const [data, setData] = useState<IMemo>();

  useEffect(() => {
    setData(memos.filter((memo) => memo.id === String(param.id))[0]);
  }, []);
  function goBackHandler() {
    navigate("/memo");
  }
  function submitHandler(evt: any) {
    evt.preventDefault();
    const memoEntry = {
      id: String(data?.id),
      title: evt.target.title.value + "",
      content:
        evt.target.content.value.replaceAll(/(?:\r\n|\r|\n)/g, "<br/>") + "",
      date: dayjs(new Date()).format("YYYY-MM-DD"),
      bookMark: Boolean(data?.bookMark),
    };
    const updatedEntry = memos.map((ele) => {
      if (ele.id === data?.id) {
        return (ele = {...memoEntry});
      }
      return ele;
    });
    setMemos(updatedEntry);
    navigate(`/memo/detail/${data?.id}`);
  }
  return (
    <EditMode
      submitHandler={submitHandler}
      goBackHandler={goBackHandler}
      mode={EDITMODE.EDIT}
      data={data}
    />
  );
}

export default Update;
