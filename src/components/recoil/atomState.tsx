import { atom } from "recoil";

type List = {
  id: number;
  text: string;
  isCheck: boolean;
};

export const listState = atom<Array<List>>({
  key: "listState",
  default: [
    {
      id: 1,
      text: "text",
      isCheck: false,
    },
  ],
});
