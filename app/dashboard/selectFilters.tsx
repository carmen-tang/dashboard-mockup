import React, { useState } from 'react';
import { Button, Calendar, CalendarCell, CalendarGrid, DateInput, DatePicker, DateSegment, Dialog, Group, Heading, Popover } from 'react-aria-components';
import { IoCloseOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { LuCalendar1 } from "react-icons/lu";

type Tab = 'Filters' | 'Saved Filters';

type Props = {
  toggleFilters: () => void;
};

const SelectFilters: React.FC<Props> = ({ toggleFilters }) => {
  const [activeTab, setActiveTab] = useState<Tab>('Filters');
  
  return (
    <div className="select-filters z-10 bg-white shadow-xl h-full w-[450px] absolute right-0 top-0">
      <h2 className="flex justify-between text-2xl mb-2 p-6">Select Filters <IoCloseOutline className="large-icon cursor-pointer" onClick={toggleFilters} /></h2>

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
      <div className="tab-content mt-1">
        {activeTab === 'Filters' ? (
          <div className="mt-1">
            <div className="p-6">

              {/* organization name */}
              <div className="relative my-2">
                <label htmlFor="organization-name" className="font-semibold">Organization Name</label>
                <div className="flex border rounded-lg border-gray-300 w-full p-2">
                  <div className="filter-tag-select">Amazon <IoCloseOutline className="small-icon ml-1" /></div>
                  <div className="filter-tag-select">Middo <IoCloseOutline className="small-icon ml-1" /></div>
                  <FaChevronDown className="absolute right-4 top-10" />
                </div>
              </div>

              {/* group */}
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

              {/* coverage start date */}
              <div className="flex flex-col my-4">
                <label htmlFor="coverage-start-date" className="font-semibold">Coverage Start Date</label>
                <div className="flex relative">
                  <div className="flex-grow w-3/6 relative mr-1">
                    <select id="coverage-start-date" className="select-dropdown border rounded-lg border-gray-300 w-full p-2">
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
                        <DateInput className="flex uppercase">
                          {(segment) => <DateSegment segment={segment} />}
                        </DateInput>
                        <Button><LuCalendar1 className="small-icon" /></Button>
                      </Group>
                      <Popover className="bg-white shadow-md rounded-xl p-2 mt-2">
                        <Dialog>
                          <Calendar>
                            <div className="flex justify-between mt-4">
                              <Button slot="previous">◀</Button>
                              <Heading />
                              <Button slot="next">▶</Button>
                            </div>
                            <CalendarGrid>
                              {(date) => <CalendarCell date={date} className="text-center" />}
                            </CalendarGrid>
                          </Calendar>
                        </Dialog>
                      </Popover>
                    </DatePicker>
                  </div>
                </div>
              </div>

              {/* coverage end date */}
              <div className="flex flex-col my-4">
                <label htmlFor="coverage-end-date" className="font-semibold">Coverage End Date</label>
                <div className="flex relative">
                  <div className="flex-grow w-3/6 relative mr-1">
                    <select id="coverage-end-date" className="select-dropdown border rounded-lg border-gray-300 w-full p-2">
                      <option value=""></option>
                      <option value="group1">Group 1</option>
                      <option value="group2">Group 2</option>
                      <option value="group3">Group 3</option>
                    </select>
                    <FaChevronDown className="absolute right-4 top-3" />
                  </div>
                  <div className="flex-grow w-3/6 ml-1">
                    <DatePicker className="select-dropdown border rounded-lg border-gray-300 w-full p-2">
                      <Group className="flex justify-between">
                        <DateInput className="flex uppercase">
                          {(segment) => <DateSegment segment={segment} />}
                        </DateInput>
                        <Button><LuCalendar1 className="small-icon" /></Button>
                      </Group>
                      <Popover className="bg-white shadow-md rounded-xl p-2 mt-2">
                        <Dialog>
                          <Calendar>
                            <div className="flex justify-between mt-4">
                              <Button slot="previous">◀</Button>
                              <Heading />
                              <Button slot="next">▶</Button>
                            </div>
                            <CalendarGrid>
                              {(date) => <CalendarCell date={date} className="text-center" />}
                            </CalendarGrid>
                          </Calendar>
                        </Dialog>
                      </Popover>
                    </DatePicker>
                  </div>
                </div>
              </div>

              {/* setup complete at */}
              <div className="flex flex-col my-4">
                <label htmlFor="setup-complete-at" className="font-semibold">Setup Complete At</label>
                <div className="flex relative">
                  <div className="flex-grow w-3/6 relative mr-1">
                    <select id="setup-complete-at" className="select-dropdown border rounded-lg border-gray-300 w-full p-2">
                      <option value=""></option>
                      <option value="group1">Group 1</option>
                      <option value="group2">Group 2</option>
                      <option value="group3">Group 3</option>
                    </select>
                    <FaChevronDown className="absolute right-4 top-3" />
                  </div>
                  <div className="flex-grow w-3/6 ml-1">
                    <DatePicker className="select-dropdown border rounded-lg border-gray-300 w-full p-2">
                      <Group className="flex justify-between">
                        <DateInput className="flex uppercase">
                          {(segment) => <DateSegment segment={segment} />}
                        </DateInput>
                        <Button><LuCalendar1 className="small-icon" /></Button>
                      </Group>
                      <Popover className="bg-white shadow-md rounded-xl p-2 mt-2">
                        <Dialog>
                          <Calendar>
                            <div className="flex justify-between mt-4">
                              <Button slot="previous">◀</Button>
                              <Heading />
                              <Button slot="next">▶</Button>
                            </div>
                            <CalendarGrid>
                              {(date) => <CalendarCell date={date} className="text-center" />}
                            </CalendarGrid>
                          </Calendar>
                        </Dialog>
                      </Popover>
                    </DatePicker>
                  </div>
                </div>
              </div>

              {/* distribution format */}
              <div className="relative my-4">
                <label htmlFor="distribution-format" className="font-semibold">Distribution Format</label>
                <div className="flex gap-10 mt-2">
                  <div className="inline-flex items-center w-3/6">
                    <label className="relative flex items-center cursor-pointer" htmlFor="EDI">
                      <input name="framework" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="EDI" />
                      <span className="absolute bg-[#890089] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      </span>
                    </label>
                    <label className="ml-2" htmlFor="EDI">EDI</label>
                  </div>
                  <div className="inline-flex items-center w-3/6">
                    <label className="relative flex items-center cursor-pointer" htmlFor="API">
                      <input name="framework" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="API" />
                      <span className="absolute bg-[#890089] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      </span>
                    </label>
                    <label className="ml-2" htmlFor="API">API</label>
                  </div>
                </div>
              </div>

              {/* carrier */}
              <div className="relative my-4">
                <label htmlFor="carrier" className="font-semibold">Carrier</label>
                <select id="carrier" className="select-dropdown border rounded-lg border-gray-300 w-full p-2">
                  <option value="blue-shield">Blue Shield of California</option>
                  <option value="kaiser-permanente">Kaiser Permanente</option>
                  <option value="guardian">Guardian</option>
                </select>
                <FaChevronDown className="absolute right-4 top-9" />
              </div>

              {/* state */}
              <div className="relative my-4">
                <label htmlFor="state" className="font-semibold">State</label>
                <select id="state" className="select-dropdown border rounded-lg border-gray-300 w-full p-2">
                  <option value=""></option>
                  <option value="az">AZ</option>
                  <option value="ca">CA</option>
                </select>
                <FaChevronDown className="absolute right-4 top-9" />
              </div>

              {/* save filter */}
              <div className="save-filter flex justify-end my-4">
                <button className="border rounded-lg border-gray-200 text-sm p-2">Save Filter</button>
              </div>
            </div>

            {/* cta buttons */}
            <div className="save-filter-buttons flex justify-between mt-4 border-t border-gray-200 p-6">
              <button className="border rounded-lg border-gray-200 text-md p-2 w-3/6 mr-1">Reset</button>
              <button className="bg-[#890089] text-white rounded-lg text-md p-2 w-3/6 ml-1">Apply</button>
            </div>

          </div>
        ) : (
          <ul className="flex flex-col mt-4">
            <li className="flex justify-between items-center px-4 py-3 bg-[#F9EEFF] cursor-pointer">
              <span>Initial and Paused</span>
              <span className="filter-tag-select text-sm">Default</span>
            </li>
            <li className="flex justify-between items-center px-4 py-3 hover:bg-[#F1F1F3] cursor-pointer group">
              <span>Filter Custom Name</span>
              <span className="flex absolute right-4">
                <button className="text-sm bg-white hidden group-hover:block border border-gray-200 rounded-md px-2 py-1 mr-2">Make Default</button>
                <button className="text-sm bg-white text-red-500 hidden group-hover:block border border-gray-200 rounded-md px-2 py-1">Delete</button>
              </span>
            </li>
            <li className="flex justify-between items-center px-4 py-3 hover:bg-[#F1F1F3] cursor-pointer group ">
              <span>Name Filter Custom</span>
              <span className="flex absolute right-4">
                <button className="text-sm bg-white hidden group-hover:block border border-gray-200 rounded-md px-2 py-1 mr-2">Make Default</button>
                <button className="text-sm bg-white text-red-500 hidden group-hover:block border border-gray-200 rounded-md px-2 py-1">Delete</button>
              </span>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
};

export default SelectFilters;
