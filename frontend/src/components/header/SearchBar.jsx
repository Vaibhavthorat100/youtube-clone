import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../features/video/videoSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.video.search);

  return (
    <div className="hidden md:flex items-center w-1/2">
      <input
        type="text"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Search"
        className="
          w-full px-4 py-1.5
          bg-[#f1f1f1] text-black
          border border-gray-400
          rounded-l-full
          outline-none
          placeholder-gray-600
        "
      />

      <button
        onClick={() => dispatch(setSearch(search))}
        className="
          px-4 py-1.5
          bg-gray-300 text-black
          border border-gray-400
          rounded-r-full
          hover:bg-gray-400
        "
      >
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
