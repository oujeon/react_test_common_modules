"use client";

import { Button_sample } from "react_chakra_ui_common_modules";

export default function Home() {
  return (
    <Button_sample
      title="hello World"
      onClick={() => {
        alert("ddd");
      }}
    />
  );
}
