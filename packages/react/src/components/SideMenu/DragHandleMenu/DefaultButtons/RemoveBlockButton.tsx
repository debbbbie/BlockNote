import {
  BlockSchema,
  DefaultBlockSchema,
  DefaultInlineContentSchema,
  DefaultStyleSchema,
  InlineContentSchema,
  StyleSchema,
} from "@blocknote/core";
import { ReactNode } from "react";

import { useBlockNoteEditor } from "../../../../editor/BlockNoteContext";
import { DragHandleMenuProps } from "../DragHandleMenuProps";
import { DragHandleMenuItem } from "../DragHandleMenuItem";

export const RemoveBlockButton = <
  BSchema extends BlockSchema = DefaultBlockSchema,
  I extends InlineContentSchema = DefaultInlineContentSchema,
  S extends StyleSchema = DefaultStyleSchema
>(
  props: DragHandleMenuProps<BSchema, I, S> & {
    children: ReactNode;
  }
) => {
  const editor = useBlockNoteEditor<BSchema, I, S>();

  return (
    <DragHandleMenuItem onClick={() => editor.removeBlocks([props.block])}>
      {props.children}
    </DragHandleMenuItem>
  );
};
