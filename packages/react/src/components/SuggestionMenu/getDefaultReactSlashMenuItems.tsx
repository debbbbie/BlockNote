import {
  BlockNoteEditor,
  BlockSchema,
  getDefaultSlashMenuItems,
  InlineContentSchema,
  StyleSchema,
} from "@blocknote/core";
import {
  RiH1,
  RiH2,
  RiH3,
  RiFile2Line,
  RiImage2Fill,
  RiListOrdered,
  RiListUnordered,
  RiTable2,
  RiText,
} from "react-icons/ri";
import { DefaultReactSuggestionItem } from "./types";

const icons: Record<string, IconType> = {
  heading: RiH1,
  heading_2: RiH2,
  heading_3: RiH3,
  numbered_list: RiListOrdered,
  bullet_list: RiListUnordered,
  paragraph: RiText,
  table: RiTable2,
  image: RiImage2Fill,
  file: RiFile2Line,
};

export function getDefaultReactSlashMenuItems<
  BSchema extends BlockSchema,
  I extends InlineContentSchema,
  S extends StyleSchema
>(editor: BlockNoteEditor<BSchema, I, S>): DefaultReactSuggestionItem[] {
  return getDefaultSlashMenuItems(editor).map((item) => {
    const Icon = icons[item.key];
    return {
      ...item,
      icon: <Icon size={18} />,
    };
  });
}
