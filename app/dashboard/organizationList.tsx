import React from 'react';
import { RxCaretSort } from "react-icons/rx";
import { IoCopy } from "react-icons/io5";

export const organizations = [
  {
    UUID: "c120261",
    organizationName: "Product Release Webinar Company",
    carrier: "SelectHealth",
    account: "Normal Account",
    deliveryConfiguration: "875428",
  },
  {
    UUID: "c120262",
    organizationName: "Demo Group 1",
    carrier: "Guardian",
    account: "Normal Account",
    deliveryConfiguration: "12.02.2024",
  },
  {
    UUID: "c120263",
    organizationName: "Demo Group 2",
    carrier: "SelectHealth",
    account: "Normal Account",
    deliveryConfiguration: "01.01.2024",
  },
  {
    UUID: "c120264",
    organizationName: "Puma",
    carrier: "Guardian",
    account: "Normal Account",
    deliveryConfiguration: "09.03.2024",
  },
  {
    UUID: "c120265",
    organizationName: "Demo Group Inc",
    carrier: "Kaiser Permanente",
    account: "Normal Account",
    deliveryConfiguration: "01.01.2024",
  },
  {
    UUID: "c120266",
    organizationName: "Demo Group Inc",
    carrier: "Blue Shield of California",
    account: "Normal Account",
    deliveryConfiguration: "28.01.2024",
  },
  {
    UUID: "c120267",
    organizationName: "Middo",
    carrier: "Blue Shield of California",
    account: "Normal Account",
    deliveryConfiguration: "12.01.2024",
  },
  {
    UUID: "c120268",
    organizationName: "Zalando",
    carrier: "Guardian",
    account: "Normal Account",
    deliveryConfiguration: "03.01.2024",
  },
  {
    UUID: "c120269",
    organizationName: "Puma",
    carrier: "Guardian",
    account: "Normal Account",
    deliveryConfiguration: "09.03.2024",
  },
  {
    UUID: "c1202610",
    organizationName: "Amazon",
    carrier: "Kaiser Permanente",
    account: "Normal Account",
    deliveryConfiguration: "04.01.2024",
  },
];

const OrganizationList: React.FC = () => {
  return (
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
          <div className="table-cell text-[#890089]"><IoCopy className="copy-icon inline-flex mr-1"/> {org.UUID}</div>
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
