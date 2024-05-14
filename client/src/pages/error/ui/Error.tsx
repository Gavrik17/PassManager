import React, { FC } from "react";

export const Error: FC = () => {
  return (
    <svg viewBox="0 0 10 2">
      <text
        x="3"
        y="1"
        text-anchor="middle"
        font-size="1"
        font-weight="bold"
        fill="#fff"
        stroke-width=".015"
        font-family="Arial, sans-serif"
      >
        404
      </text>
      <text
        x="2.7"
        y="1"
        text-anchor="middle"
        font-size="1"
        font-weight="bold"
        fill="none"
        stroke-width=".015"
        stroke="#ffffff50"
        font-family="Arial, sans-serif"
      >
        404
      </text>
    </svg>
  );
};
