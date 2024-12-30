const TopNav: React.FC<{ topNavLeft: string[]; topNavRight: string[] }> = ({ topNavLeft, topNavRight }) => (
  <nav className="top-nav inset-0 box-border inline-flex flex-grow w-full h-auto p-6 bg-[#f1f1f3]">
    <div className="top-nav-left flex flex-grow items-start">
      Coverage Periods
    </div>
    <div className="top-nav-right">
      <span className="bg-black p-3 rounded-lg text-white mr-2">HK</span>
      Hanna
    </div>
  </nav>
);

export default TopNav;