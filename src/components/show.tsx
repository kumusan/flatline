import { listState } from "./recoil/atomState";
import { useRecoilValue } from "recoil";

export const Show = () => {
  const todoList = useRecoilValue(listState);

  return (
    <>
      {todoList.map((item) => (
        <p key={item.id}>{item.text}</p>
      ))}
    </>
  );
};
