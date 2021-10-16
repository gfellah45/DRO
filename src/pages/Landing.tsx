import { useState } from "react";
import "../assets/boxicons-2.0.7/css/boxicons.min.css";
import BookList from "../components/BookList";
import Inputs from "../components/common/Inputs";

const Landing = () => {
  const [search, setSearch] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-10/12 min-h-screen pb-10 mx-auto bg-gradient-to-tr from-blue-600 to-red-500">
      <header className="py-4 text-4xl font-bold text-center text-white">
        Bookshop
      </header>

      <div className="w-11/12 mx-auto my-4 md:w-7/12 ">
        <Inputs val={search} onChange={onChange} />
      </div>
      <div className="w-11/12 mx-auto my-4 md:w-9/12">
        <BookList searchTerm={search} />
      </div>
    </div>
  );
};

export default Landing;
