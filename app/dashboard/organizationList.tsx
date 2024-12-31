import React from 'react';

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
    
    <div className="grid grid-cols-5 gap-px border border-gray-300 rounded-lg overflow-hidden w-full">
      {/* Headers */}
      <div className="bg-gray-100 font-bold p-2 text-left">UUID</div>
      <div className="bg-gray-100 font-bold p-2 text-left">Organization Name</div>
      <div className="bg-gray-100 font-bold p-2 text-left">Carrier</div>
      <div className="bg-gray-100 font-bold p-2 text-left">Account</div>
      <div className="bg-gray-100 font-bold p-2 text-left">Delivery Configuration</div>

      {/* Data Rows */}
      {organizations.map((org) => (
        <React.Fragment key={org.UUID}>
          <div className="p-2 border-b border-gray-300">{org.UUID}</div>
          <div className="p-2 border-b border-gray-300">{org.organizationName}</div>
          <div className="p-2 border-b border-gray-300">{org.carrier}</div>
          <div className="p-2 border-b border-gray-300">{org.account}</div>
          <div className="p-2 border-b border-gray-300">{org.deliveryConfiguration}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default OrganizationList;
