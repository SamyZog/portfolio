"use client";

import { useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export const FontToggle = ({ fontSize = "14px" }: { fontSize: string }) => {
  const [val, setVal] = useState(fontSize);

  const onFontToggle = (value: string) => {
    if (!value) return;

    setVal(value);

    document.documentElement.style.fontSize = value;
    document.cookie = `font-size=${value}`;
  };

  return (
    <ToggleGroup
      variant="outline"
      type="single"
      onValueChange={onFontToggle}
      value={val}
      className="flex md:w-full w-fit"
    >
      <ToggleGroupItem className="!text-[14px]" value="14px">
        A
      </ToggleGroupItem>

      <ToggleGroupItem className="!text-[16px]" value="16px">
        A
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
