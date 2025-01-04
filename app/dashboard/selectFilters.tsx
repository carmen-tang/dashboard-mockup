import React, { useState } from 'react';
import { Button, Calendar, CalendarCell, CalendarGrid, DateInput, DatePicker, DateSegment, Dialog, Group, Heading, Popover } from 'react-aria-components';
import { IoCloseOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { LuCalendar1 } from "react-icons/lu";


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

            <div className="relative my-2">
              <label htmlFor="group" className="font-semibold">Group</label>
              <select id="group" className="select-dropdown border rounded-lg border-gray-300 w-full p-2">
                <option value=""></option>
                <option value="group1">Group 1</option>
                <option value="group2">Group 2</option>
                <option value="group3">Group 3</option>
              </select>
              <FaChevronDown className="absolute right-4 top-9" />
            </div>

            <div className="flex flex-col my-4">
              <label htmlFor="coverage-start-date" className="font-semibold">Coverage Start Date</label>
              <div className="flex relative">
                <div className="flex-grow w-3/6 relative mr-1">
                  <select id="group" className="select-dropdown border rounded-lg border-gray-300 w-full p-2">
                    <option value="after">After</option>
                    <option value="group1">Group 1</option>
                    <option value="group2">Group 2</option>
                    <option value="group3">Group 3</option>
                  </select>
                  <FaChevronDown className="absolute right-4 top-3" />
                </div>
                <div className="flex-grow w-3/6 ml-1">
                  <DatePicker className="select-dropdown border rounded-lg border-gray-300 w-full p-2">
                    <Group className="flex justify-between">
                      <DateInput className="flex">
                        {(segment) => <DateSegment segment={segment} />}
                      </DateInput>
                      <Button><LuCalendar1 className="small-icon" /></Button>
                    </Group>
                    <Popover>
                      <Dialog>
                        <Calendar>
                          <div className="flex justify-between mt-4">
                            <Button slot="previous">◀</Button>
                            <Heading />
                            <Button slot="next">▶</Button>
                          </div>
                          <CalendarGrid>
                            {(date) => <CalendarCell date={date} />}
                          </CalendarGrid>
                        </Calendar>
                      </Dialog>
                    </Popover>
                  </DatePicker>
                </div>
              </div>
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
