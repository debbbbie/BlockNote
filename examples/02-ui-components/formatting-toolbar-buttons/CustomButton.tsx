import {
  ToolbarButton,
  useBlockNoteEditor,
  useEditorChange,
  useEditorSelectionChange,
} from "@blocknote/react";
import { useState } from "react";

export function CustomButton() {
  const editor = useBlockNoteEditor();

  // Tracks whether the text & background are both blue.
  const [isSelected, setIsSelected] = useState<boolean>(
    editor.getActiveStyles().textColor === "blue" &&
      editor.getActiveStyles().backgroundColor === "blue"
  );

  // Updates state on content change.
  useEditorChange(() => {
    setIsSelected(
      editor.getActiveStyles().textColor === "blue" &&
        editor.getActiveStyles().backgroundColor === "blue"
    );
  }, editor);

  // Updates state on selection change.
  useEditorSelectionChange(() => {
    setIsSelected(
      editor.getActiveStyles().textColor === "blue" &&
        editor.getActiveStyles().backgroundColor === "blue"
    );
  }, editor);

  return (
    <ToolbarButton
      mainTooltip={"Blue Text & Background"}
      onClick={() => {
        editor.toggleStyles({
          textColor: "blue",
          backgroundColor: "blue",
        });
      }}
      isSelected={isSelected}>
      Blue
    </ToolbarButton>
  );
}
