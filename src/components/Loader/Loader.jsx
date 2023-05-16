import React from "react";
import { CircleLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div
      style={{
        width: "100vw",
        heigth: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        font: "900",
      }}
    >
      <CircleLoader color="#000" size={100} font={900} />
    </div>
  );
};
