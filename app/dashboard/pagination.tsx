import { FaChevronDown } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Pagination: React.FC = () => (
  <div className="pagination flex justify-end mt-4 items-center">
    <span className="text-gray-400 mr-4">Showing 1-10 of 76 results</span>
    <span className="mr-2">Show:</span>
    <div className="relative mr-4">
      <select id="show-count" className="select-dropdown w-[70px] border rounded-lg border-gray-200 text-sm px-4 py-2">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <FaChevronDown className="purple-fill absolute right-3 top-3" />
    </div>
    <span className="flex items-center mr-4 text=[#AFB0B9] text-[#890089] tracking-widest"><FaAngleLeft className="mr-2 gray-fill" /> 1 2 ... 6 7 <FaAngleRight className="ml-2 purple-fill" /></span>
    <span className="mr-2">Jump to page:</span>
    <button className="border rounded-lg border-gray-200 text-sm px-4 py-2">1</button>
  </div>
);

export default Pagination;
