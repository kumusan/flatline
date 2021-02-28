import * as React from "react";
import { listState, countState } from "./atomState";
import { useRecoilState, useRecoilValue } from "recoil";

function App() {
  const [list, setList] = useRecoilState(listState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setList(event.target.value);
  };

  const count = useRecoilValue(countState);

  return (
    <div>
      <input type="text" value={list} onChange={onChange} />
      <p>test</p>
      text: {list}
      <br />
      count: {count}
    </div>
  );
}

export default App;
