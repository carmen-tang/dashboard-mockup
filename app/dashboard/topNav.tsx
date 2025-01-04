import { HiOutlineBell } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";

const TopNav: React.FC = () => (
  <nav className="top-nav inset-0 box-border inline-flex flex-grow w-full h-auto p-6 bg-[#f1f1f3]">
    <div className="top-nav-left flex flex-grow items-start text-lg font-semibold">
      Coverage Periods
    </div>
    <div className="top-nav-right flex items-center">
      <span className="bell mr-4"><HiOutlineBell /></span>
      <span className="bg-black p-3 rounded-lg text-white mr-4">HK</span>
      <span className="user flex font-semibold items-center">Hanna <span className="ml-2"><FaChevronDown /></span></span>
    </div>
  </nav>
);

export default TopNav;