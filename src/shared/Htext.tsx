import React from "react";

type Props = {
  children: React.ReactNode;
};

const Htext = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 font-montseerat text-3xl font-bold">{children}</h1>
  );
};

export default Htext;
