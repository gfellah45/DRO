import React, { FC } from "react";

interface Props {
  label?: string;
  val?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: FC<Props> = ({ val, onChange }) => {
  return (
    <div className="flex items-center w-full px-3 py-2 mx-auto my-2 bg-white rounded-md shadow-lg md:w-6/12">
      <i className="text-lg font-bold text-blue-800 bx bx-search-alt-2"></i>
      <input
        className="w-full h-full px-2 outline-none"
        type="text"
        placeholder="Search"
        value={val}
        onChange={onChange}
        name="search"
      />
    </div>
  );
};

export default Inputs;
