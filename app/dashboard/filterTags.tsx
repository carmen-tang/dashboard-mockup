import { IoCloseOutline } from "react-icons/io5";

const FilterTags: React.FC = () => (
  // Note: In a real application, this would be a dynamic component. I would map out the filter tags based on what the user has selected. This is hardcoded for now only for demonstration purposes.
  <div className="filter-tags flex flex-wrap mt-4 items-center">
    <div className="filter-tag mr-2">Company: Amazon, Middo <IoCloseOutline className="small-icon ml-1" /></div>
    <div className="filter-tag">Coverage Start Date: adter 12.02.2024 <IoCloseOutline className="small-icon ml-1" /></div>
    <div className="filter-tag">State: Open <IoCloseOutline className="small-icon ml-1" /></div>
    <div className="filter-tag">Carrier: Blue Shield of California <IoCloseOutline className="small-icon ml-1" /></div>
    <div className="filter-tag">Distribution Format: API <IoCloseOutline className="small-icon ml-1" /></div>
    <div className="filter-tag">Coverage End Date: before 21.02.2024 <IoCloseOutline className="small-icon ml-1" /></div>
  </div>
);

export default FilterTags;
