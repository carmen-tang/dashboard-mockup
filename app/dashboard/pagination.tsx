import { FaChevronDown } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Pagination: React.FC = () => (
  <div className="pagination flex justify-end mt-4 items-center">
    <span className="text-gray-400 mr-4">Showing 1-10 of 76 results</span>
    <span className="mr-2">Show:</span>
    <button className="flex items-center border rounded-lg border-gray-200 text-sm px-4 py-2 mr-4">10 <FaChevronDown className="ml-2 purple-fill" /></button>
    <span className="flex items-center mr-4 text=[#AFB0B9] text-[#890089] tracking-widest"><FaAngleLeft className="mr-2 gray-fill" /> 1 2 ... 6 7 <FaAngleRight className="ml-2 purple-fill" /></span>
    <span className="mr-2">Jump to page:</span>
    <button className="border rounded-lg border-gray-200 text-sm px-4 py-2">1</button>
  </div>
);

export default Pagination;
