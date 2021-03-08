import { listState } from "./recoil/atomState";
import { filterCheck } from "./recoil/selectorState";
import { useRecoilValue } from "recoil";
import Delete from "./delete";

const Show = () => {
  const todoList = useRecoilValue(listState);

  const { checkList, uncheckList } = useRecoilValue(filterCheck);

  return (
    <>
      {todoList.map((item) => (
        <p key={item.id}>
          {item.text}
          <Delete id={item.id} />
        </p>
      ))}
      <hr />
      <p>true</p>
      {checkList.map((item) => (
        <p key={item.id}>{item.text}</p>
      ))}
      <hr />
      <p>false</p>
      {uncheckList.map((item) => (
        <p key={item.id}>{item.text}</p>
      ))}
    </>
  );
};

export default Show;
