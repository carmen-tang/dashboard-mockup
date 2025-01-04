import React, { useState } from 'react';
import OrganizationList from './organizationList';
import Pagination from './pagination';
import FilterTags from './filterTags';
import SelectFilters from './selectFilters';
// import SettingsIcon from 'app/assets/icons/settings'; Decided to use an icon library but if I were to manually add icon assets I would add it to an assets folder and import svgs like this
import { FiSettings } from "react-icons/fi";
import { TbFilterPlus } from "react-icons/tb";

const CoveragePeriods: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  // This is a quick toggle for the filters just for demonstration purposes so that you can see the tags.
  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <div className="coverage-periods bg-white rounded-xl p-6 mb-20">
      <div className="page-header flex justify-between mb-4">
        <h1 className="text-2xl">Coverage Periods</h1>
        <div className="flex">
          <div className="mr-2">
            <button className="border rounded-lg border-gray-200 text-sm p-2">
              <FiSettings className="small-icon"/>
            </button>
          </div>
          <div className="mr-2">
            <button className="border rounded-lg border-gray-200 text-sm p-2">Export CSV</button>
          </div>
          <div className="col-start-2 col-span-4">
            <span className="z-10 leading-snug font-normal absolute text-center bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="#AFB0B9">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <div className="flex justify-between">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                className="px-2 text-sm border-gray-200 pl-8 p-2 float-left w-full border rounded-lg placeholder-[#AFB0B9]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="filtering flex">
          <button
            className="border rounded-lg border-gray-200 text-sm p-2 flex items-center"
            onClick={toggleFilters}
          >
            <TbFilterPlus /> <span className="ml-2">Filters</span>
          </button>
          {showFilters && <span className="flex items-center pl-2 ml-2 text-sm text-[#890089]" onClick={toggleFilters}>Reset Filters</span>}
        </div>
        {showFilters && <FilterTags />}
      </div>
      <div className="page-content">
        <OrganizationList />
        <Pagination />
        {showFilters && <SelectFilters />}
      </div>
    </div>
  );
};

export default CoveragePeriods;
