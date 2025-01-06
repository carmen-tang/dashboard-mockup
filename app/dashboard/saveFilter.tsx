import { IoCloseOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";

type Props = {
  toggleSaveFilter: () => void;
  showSaveFilter: boolean;
};

const SaveFilter: React.FC<Props> = ({ showSaveFilter, toggleSaveFilter }) => {
  return (
    <div className={showSaveFilter ? "block select-filters z-10 bg-white shadow-xl h-full w-[450px] absolute right-0 top-0" : "hidden"}>
      <h2 className="flex text-2xl mb-2 p-6 items-center"><FaAngleLeft className="mr-8 cursor-pointer" onClick={toggleSaveFilter} /> Save Filter <IoCloseOutline className="large-icon cursor-pointer absolute right-4" onClick={toggleSaveFilter} /></h2>

      <div className="p-6">
        <div className="relative my-2">
          <label htmlFor="organization-name" className="font-semibold">Name</label>
          <input className="input-field border rounded-lg border-gray-300 w-full p-2 focus:border-[#890089] focus:ring-0 focus:outline-none" type="text" />

          <div className="inline-flex items-start mt-8">
            <label className="flex items-center cursor-pointer relative">
              <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-md border border-gray-300 checked:bg-[#890089] checked:border-[#890089]" id="check" />
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </span>
            </label>
            <div className="ml-2 mt-[-3px]">
              <span className="block">Set as default filter</span>
              <span className="block text-sm text-gray-400">This filter will be applied by default when you visit the page</span>
            </div>
          </div>
        </div>
      </div>

      {/* save filter cta */}
      <div className="save-filter-buttons flex justify-between mt-4 border-t border-gray-200 p-6">
        <button className="bg-[#890089] text-white rounded-lg text-md p-2 w-full ml-1">Save Filter</button>
      </div>
    </div>
  )
};

export default SaveFilter;
