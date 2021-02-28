import { atom, selector } from "recoil";

export const listState = atom<string>({
  key: "listState",
  default: "a",
});

export const countState = selector<number>({
  key: "countState",
  get: ({ get }) => {
    const text = get(listState);
    return text.length;
  },
});
