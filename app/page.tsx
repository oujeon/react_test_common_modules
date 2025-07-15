"use client";

import { Button_sample as ChakraAntButtonSample } from "react_chakra_ui_common_modules";
import { Button_sample as AntButtonSample } from "react_ant_design_common_modules";
import { Button_sample as MaterialButtonSample } from "react_material_ui_common_modules";
import * as fn from "react_functions_common_modules";

export default function Home() {
  return (
    <>
      <AntButtonSample />
      <MaterialButtonSample />
      <ChakraAntButtonSample
        title="hello World"
        onClick={() => {
          alert("ddd");
        }}
      />
      <table>
        <tr>
          <td style={{ textAlign: "center" }} colSpan={4}>
            <b>날짜</b>
          </td>
        </tr>
        <tr>
          <td>1.</td>
          <td>년-월-일</td>
          <td>:</td>
          <td>{fn.fn_date.y_m_d("20251231")}</td>
        </tr>
      </table>
    </>
  );
}
