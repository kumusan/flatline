import { selector } from "recoil";
import { listState } from "./atomState";

export const filterCheck = selector({
  key: "filterCheck",
  get: ({ get }) => {
    const list = get(listState);
    const checkList = list.filter((item) => item.isCheck);
    const uncheckList = list.filter((item) => !item.isCheck);
    return { checkList, uncheckList };
  },
});
