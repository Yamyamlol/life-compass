
import React from "react";

interface HeadingProps {
  style: string;
  label: string;
}

export const Heading: React.FC<HeadingProps> = ({ style, label }) => {
  return <h2 className={style}>{label}</h2>;
};
