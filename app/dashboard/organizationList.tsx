import React from 'react';
import { RxCaretSort } from "react-icons/rx";

export const organizations = [
  {
    UUID: "c12026",
    organizationName: "Product Release Webinar Company",
    carrier: "SelectHealth",
    account: "Normal Account",
    deliveryConfiguration: "875428",
  },
  {
    UUID: "c12026",
    organizationName: "Demo Group 1",
    carrier: "Guardian",
    account: "Normal Account",
    deliveryConfiguration: "12.02.2024",
  },
  {
    UUID: "c12026",
    organizationName: "Demo Group 2",
    carrier: "SelectHealth",
    account: "Normal Account",
    deliveryConfiguration: "01.01.2024",
  },
  {
    UUID: "c12026",
    organizationName: "Puma",
    carrier: "Guardian",
    account: "Normal Account",
    deliveryConfiguration: "09.03.2024",
  },
  {
    UUID: "c12026",
    organizationName: "Demo Group Inc",
    carrier: "Kaiser Permanente",
    account: "Normal Account",
    deliveryConfiguration: "01.01.2024",
  },
  {
    UUID: "c12026",
    organizationName: "Demo Group Inc",
    carrier: "Blue Shield of California",
    account: "Normal Account",
    deliveryConfiguration: "28.01.2024",
  },
  {
    UUID: "c12026",
    organizationName: "Middo",
    carrier: "Blue Shield of California",
    account: "Normal Account",
    deliveryConfiguration: "12.01.2024",
  },
  {
    UUID: "c12026",
    organizationName: "Zalando",
    carrier: "Guardian",
    account: "Normal Account",
    deliveryConfiguration: "03.01.2024",
  },
  {
    UUID: "c12026",
    organizationName: "Puma",
    carrier: "Guardian",
    account: "Normal Account",
    deliveryConfiguration: "09.03.2024",
  },
  {
    UUID: "c12026",
    organizationName: "Amazon",
    carrier: "Kaiser Permanente",
    account: "Normal Account",
    deliveryConfiguration: "04.01.2024",
  },
];

const OrganizationList: React.FC = () => {
  return (
    // Table version
    // <table style={{ borderCollapse: "collapse", width: "100%", border: "1px solid #ccc", borderRadius: "4px" }}>
    //   <thead>
    //     <tr className="bg-[#f1f1f3] text-left">
    //       <th className="p-2">UUID</th>
    //       <th className="p-2">Organization Name</th>
    //       <th className="p-2">Carrier</th>
    //       <th className="p-2">Account</th>
    //       <th className="p-2">Delivery Configuration</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {organizations.map((org) => (
    //       <tr key={org.UUID}>
    //         <td className="p-2">{org.UUID}</td>
    //         <td className="p-2">{org.organizationName}</td>
    //         <td className="p-2">{org.carrier}</td>
    //         <td className="p-2">{org.account}</td>
    //         <td className="p-2">{org.deliveryConfiguration}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>

    <div className="grid grid-cols-5 border-t border-r border-l border-gray-300 rounded-lg overflow-hidden w-full">
      {/* Headers */}
      <div className="table-row-headers">UUID <RxCaretSort className="small-icon" /></div>
      <div className="table-row-headers">Organization Name <RxCaretSort className="small-icon" /></div>
      <div className="table-row-headers">Carrier <RxCaretSort className="small-icon" /></div>
      <div className="table-row-headers">Account <RxCaretSort className="small-icon" /></div>
      <div className="table-row-headers-end">Delivery Configuration <RxCaretSort className="small-icon" /></div>

      {/* Data Rows */}
      {organizations.map((org) => (
        <React.Fragment key={org.UUID}>
          <div className="table-cell">{org.UUID}</div>
          <div className="table-cell">{org.organizationName}</div>
          <div className="table-cell">{org.carrier}</div>
          <div className="table-cell">{org.account}</div>
          <div className="table-cell-end">{org.deliveryConfiguration}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default OrganizationList;
