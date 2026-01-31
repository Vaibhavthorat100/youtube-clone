import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../features/video/videoSlice";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  const dispatch = useDispatch();

  const appliedSearch = useSelector(
    (state) => state.video.search
  );

  const [input, setInput] = useState(appliedSearch);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(setSearch(input));
    }
  };

  return (
    <div className="flex w-full max-w-xl">
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="
          flex-1 px-4 py-1.5
          border border-gray-300
          rounded-l-full
          focus:outline-none
          text-black            /* 🔥 THIS FIXES IT */
          bg-white
        "
      />

      <div
        className="
          px-5
          border border-l-0 border-gray-300
          rounded-r-full
          bg-gray-100
          flex items-center justify-center
        "
      >
        <MdSearch size={20} className="text-gray-600" />
      </div>
    </div>
  );
};

export default SearchBar;
