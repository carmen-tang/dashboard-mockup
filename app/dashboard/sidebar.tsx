import { RxCaretSort } from "react-icons/rx";
import { HiOutlineInbox } from "react-icons/hi2";
import { FiFolder } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { IoDocumentOutline } from "react-icons/io5";
import { HiOutlineBriefcase } from "react-icons/hi";
import { TbTicket } from "react-icons/tb";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { HiOutlineChartBar } from "react-icons/hi";
import { LuClock4 } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FaAngleLeft } from "react-icons/fa6";


const Sidebar: React.FC = () => {
  const navStructure = [
    {
      category: "",
      links: [{ name: "Inbox", href: "#", icon: <HiOutlineInbox /> }],
    },
    {
      category: "Perspective Groups",
      links: [{ name: "Perspective Groups", href: "#", icon: <FiFolder /> }],
    },
    {
      category: "Enrollments",
      links: [
        { name: "Pre Coverage Periods", href: "#", icon: <HiOutlineBookOpen />},
        { name: "Coverage Periods", href: "#", icon: <IoDocumentOutline /> },
        { name: "Enrollment Tasks", href: "#", icon: <HiOutlineBriefcase /> },
        { name: "Customer Tickets", href: "#", icon: <TbTicket /> },
      ],
    },
    {
      category: "Discrepancies",
      links: [
        { name: "Enrollment Discrepancies", href: "#", icon: <HiOutlineDocumentMagnifyingGlass /> },
      ],
    },
    {
      category: "Reports",
      links: [
        { name: "Member Counts", href: "#", icon: <FiUser /> },
        { name: "SLA Performance", href: "#", icon: <HiOutlineChartBar /> },
        { name: "Time to Production", href: "#", icon: <LuClock4 /> },
      ],
    },
    {
      category: "Admin",
      links: [
        { name: "Users", href: "#", icon: <FiUsers /> },
        { name: "Account Settings", href: "#", icon: <FiSettings /> },
      ],
    },
  ];

  return (
    <div className="sidebar w-[330px] pb-20 relative">
      <div className="m-5 max-w-[125px] mb-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 27">
          <g fill="none">
            <path fill="#EE5EEC" d="M.529.775h6.247v25.613H.529zM33.333 13.601c-.0066155 7.0598753-5.7281247 12.7813845-12.788 12.788H9.662V.775H20.54c7.067845.02313693 12.7858343 5.75811741 12.788 12.826m-6.247 0c-.0082459-3.60923562-2.9317657-6.53320236-6.541-6.542h-4.63v13.083h4.63c3.6090726-.0082481 6.5327519-2.9319274 6.541-6.541M104.384.851h6.229V26.39h-6.815L93.762 11.147v15.169h-6.23V.741h6.852l10 15.169z"></path>
            <path fill="#ffffff" d="M86.087 13.153c.002-.0864312-.0014881-.1728825-.009-.259-.2382455-5.3009214-3.7146468-9.90843822-8.7465989-11.59247698C72.2994489-.38251574 66.749988 1.20432415 63.369 5.294c-.072.085-.145.17-.208.259-.063.072-.12.145-.177.218l-3.447 4.22-4.6 5.626-1.5 1.835-.42.515a4.08500326 4.08500326 0 0 1-.331.4c-1.3830297 1.5877176-3.3853842 2.4993705-5.491 2.5-.1 0-.2-.006-.306-.009-3.542968-.1491827-6.468839-2.8177338-6.9426269-6.3320478-.4737879-3.514314 1.6409376-6.86242124 5.0179075-7.94452652C48.3412506 5.4993204 52.0080445 6.99481636 53.665 10.13h-7v5.487h3.315l7.718-9.449c-3.0633439-4.37025564-8.5086924-6.3927373-13.6821348-5.08174392-5.1734425 1.31099338-8.9984598 5.68266293-9.6108456 10.98437902-.6123857 5.3017162 2.1152889 10.430268 6.8536314 12.8861427C45.9969935 27.4126524 51.760023 26.6848178 55.739 23.128c.209-.186.414-.382.613-.585.07-.069.133-.145.2-.217l1.2-1.479 3.1-3.787.056-.067 6.656-8.1a.1630035.1630035 0 0 1 .016-.019c.06-.07.275-.31.553-.613 1.5599078-1.53025234 3.7221118-2.28322812 5.8951173-2.05294256S78.1574779 7.62778555 79.362 9.451l-.036.077c.107.171.2.351.29.529h-.005l.019.026c.3169599.6064392.5481682 1.2539568.687 1.924.062.436.1.877.131 1.3.0450805 1.9309442-.6788151 3.8006977-2.0124128 5.1978716C77.1019895 19.9020454 75.26795 20.7121703 73.337 20.757c-.2 0-.4 0-.6-.011l.015.032c-2.7841483-.1889748-5.2180645-1.945941-6.274-4.529l-2.663 3.247-.748.916-.342.417c2.006 3.228 5.347 5.247 10.526 5.491 5.721.268 10.579-3.753 12.228-8.934h-.062a11.39999663 11.39999663 0 0 0 .484-1.835h.021c.021-.131.031-.265.048-.4.015-.106.027-.212.039-.318.02-.189.037-.38.049-.572.011-.174.017-.348.021-.522 0-.086.01-.17.01-.256 0-.11-.008-.217-.011-.326"></path>
          </g>
        </svg>
      </div>
      <div>
        <span className="inline-flex items-center text-white text-sm border rounded-lg border-gray-600 p-1 ml-5">
          <span className="bg-[#890089] p-1 rounded-md text-white mr-2">CD</span>
          Customer Dashboard
          <RxCaretSort className="small-icon ml-2" />
        </span>
      </div>
      <nav>
        <ul>
          {navStructure.map((category, categoryIndex) => (
            <li key={categoryIndex} className="py-3">
              {category.category && (
                <p className="title text-sm text-white tracking-wider pb-1 pl-5">
                  {category.category}
                </p>
              )}
              <ul className="mt-2">
                {category.links.map((link, linkIndex) => (
                  <li className="flex items-center" key={linkIndex}>
                    <a
                      className="sidebar-link flex items-center text-sm font-light text-white w-full px-5 py-3 hover:bg-[#293042] active:bg-[#293042]"
                      href={link.href}
                    >
                      <span className="small-icon mr-2 text-white">{link.icon}</span>
                      {link.name}
                      {link.name === "Inbox" &&<span className="small-icon flex items-center ml-auto text-white border rounded-lg border-gray-600 p-3 text-center justify-center">8</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
      <span className="border border-gray-700 rounded absolute bottom-4 right-4 gray-fill p-[2px] cursor-pointer">
        <FaAngleLeft className="gray-fill" />
      </span>
    </div>
  );
};

export default Sidebar;
