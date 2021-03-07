import { useSetRecoilState } from "recoil";
import { listState } from "./recoil/atomState";

type Props = {
  id: number;
};

const Delete = (props: Props) => {
  const setList = useSetRecoilState(listState);

  const deleteList = (id: number) => {
    setList((list) =>
      list.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <>
      <button onClick={() => deleteList(props.id)}>delete</button>
    </>
  );
};
export default Delete;
