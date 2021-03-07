import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { listState } from "./recoil/atomState";

const Create = () => {
  const [inputValue, setInputValue] = useState("");
  const setList = useSetRecoilState(listState);

  const addTodo = () => {
    setList((list) => [
      ...list,
      {
        id: list[list.length - 1].id + 1,
        text: inputValue,
        isCheck: false,
      },
    ]);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
      />
      <button onClick={addTodo}>ADD</button>
    </div>
  );
};
export default Create;
