import { listState } from "./recoil/atomState";
import { useRecoilValue } from "recoil";
import Delete from "./delete";

const Show = () => {
  const todoList = useRecoilValue(listState);

  return (
    <>
      {todoList.map((item) => (
        <p key={item.id}>
          {item.text}
          <Delete id={item.id} />
        </p>
      ))}
    </>
  );
};

export default Show;
