import { atom } from "jotai";
import { ReferenceLink } from "./references";

export type SidebarAtomState = {
  open: boolean;
  references: ReferenceLink[];
};
export const sidebarAtom = atom<SidebarAtomState>({
  open: false,
  references: [],
});
