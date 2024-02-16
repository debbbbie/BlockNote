import { filterSuggestionItems } from "@blocknote/core";
import { useBlockNoteContext } from "./BlockNoteContext";
import { FormattingToolbarController } from "../components/FormattingToolbar/FormattingToolbarController";
import { HyperlinkToolbarController } from "../components/HyperlinkToolbar/HyperlinkToolbarController";
import { ImageToolbarController } from "../components/ImageToolbar/ImageToolbarController";
import { SideMenuController } from "../components/SideMenu/SideMenuController";
import { SuggestionMenuController } from "../components/SuggestionMenu/SuggestionMenuController";
import { getDefaultReactSlashMenuItems } from "../components/SuggestionMenu/defaultReactSlashMenuItems";
import { TableHandlesController } from "../components/TableHandles/TableHandlesController";

export type BlockNoteDefaultUIProps = {
  formattingToolbar?: boolean;
  hyperlinkToolbar?: boolean;
  slashMenu?: boolean;
  sideMenu?: boolean;
  imageToolbar?: boolean;
  tableHandles?: boolean;
};

export function BlockNoteDefaultUI(props: BlockNoteDefaultUIProps) {
  const editor = useBlockNoteContext()?.editor;

  if (!editor) {
    throw new Error(
      "BlockNoteDefaultUI must be used within a BlockNoteContext.Provider"
    );
  }

  return (
    <>
      {props.formattingToolbar !== false && <FormattingToolbarController />}
      {props.hyperlinkToolbar !== false && <HyperlinkToolbarController />}
      {props.slashMenu !== false && (
        <SuggestionMenuController
          getItems={async (query) =>
            filterSuggestionItems(getDefaultReactSlashMenuItems(), query)
          }
          // suggestionMenuComponent={MantineSuggestionMenu}
          onItemClick={(item) => {
            item.onItemClick(editor);
          }}
          triggerCharacter="/"
        />
      )}
      {props.sideMenu !== false && <SideMenuController />}
      {editor.imageToolbar && props.imageToolbar !== false && (
        <ImageToolbarController />
      )}
      {editor.tableHandles && props.tableHandles !== false && (
        <TableHandlesController />
      )}
    </>
  );
}
