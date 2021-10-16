import React from "react";

interface Props {
  text: string;
}

const DataMsg = ({ text }: Props) => {
  return (
    <div className="w-6/12 p-1 mx-auto my-6 mb-12 font-bold text-center text-red-500 bg-white rounded-sm shadow-lg ">
      {text}
    </div>
  );
};

export default DataMsg;
