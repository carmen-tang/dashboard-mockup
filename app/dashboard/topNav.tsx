const TopNav: React.FC<{ topNavLeft: string[]; topNavRight: string[] }> = ({ topNavLeft, topNavRight }) => (
  <nav className="top-nav sticky inset-0 box-border inline-flex flex-grow w-full h-auto py-1 overflow-hidden">
    <div className="top-nav-left flex flex-grow items-start">
      Coverage Periods
    </div>
    <div className="top-nav-right">
      Hanna
    </div>
  </nav>
);

export default TopNav;