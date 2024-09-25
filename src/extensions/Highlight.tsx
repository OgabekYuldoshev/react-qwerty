import Highlight from "@tiptap/extension-highlight";
import { useState } from "react";
import { Button } from "../components/button";
import { Colors } from "../components/colors";
import { Popover, PopoverContent, PopoverTrigger } from "../components/popover";
import { createAction } from "../utils/createAction";
import { createExtention } from "../utils/createExtension";
import { getKey } from "../utils/getKey";

const highlighterColors = [
  "#FFFF00", // Yellow
  "#FF69B4", // Pink
  "#00FF00", // Green
  "#00FFFF", // Cyan
  "#FFA500", // Orange
  "#FF4500", // Red-Orange
  "#ADFF2F", // Light Green
  "#87CEEB", // Light Blue
  "#FFD700", // Golden Yellow
  "#FFB6C1", // Light Pink
  "#DDA0DD", // Light Purple
  "#FF6347", // Tomato Red
  "#40E0D0", // Turquoise
  "#8A2BE2", // Blue Violet
];

export const HightlightExtension = createExtention({
  name: Highlight.name,
  extention: Highlight.configure({ multicolor: true }),
  action: createAction({
    render: ({ editor }) => {
      const [open, setOpen] = useState(false);
      return (
        <Popover key={getKey()} open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button icon="Highlighter" title={Highlight.name} />
          </PopoverTrigger>
          <PopoverContent>
            <Colors
              colors={highlighterColors}
              onSelected={(color) => {
                editor.chain().toggleHighlight({ color }).run();
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      );
    },
  }),
});
