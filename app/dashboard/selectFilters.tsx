import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";

type Tab = 'Filters' | 'Saved Filters';

const SelectFilters: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Filters');
  
  return (
    <div className="select-filters z-10 bg-white shadow-xl h-full w-[400px] absolute right-0 top-0">
      <h2 className="flex justify-between text-2xl mb-2 p-6">Select Filters <IoCloseOutline className="large-icon" /></h2>

      <div className="tabs border-b border-gray-200 pl-6">
        {(['Filters', 'Saved Filters'] as Tab[]).map((tab) => (
          <button
            key={tab}
            className={`tab mr-8 ${activeTab === tab ? 'active-tab' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content mt-6">
        {activeTab === 'Filters' ? (
          <div className="mt-6 p-6">
            <label>Organization Name</label>
            <select className=""></select>

            <div className="relative">
              <label htmlFor="group" className="font-semi">Group</label>
              <select id="group" className="select-dropdown border rounded-lg border-gray-300 w-full p-2"></select>
              <FaChevronDown className="absolute right-4 top-9" />
            </div>
          </div>
        ) : (
          <div className="mt-6">Saved Filters Content</div>
        )}
      </div>
    </div>
  )
};

export default SelectFilters;
