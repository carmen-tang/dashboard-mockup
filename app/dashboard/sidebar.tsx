const Sidebar: React.FC<{ navStructure: { category: string; links: { name: string; href: string }[] }[] }> = ({ navStructure }) => (
  <div className="sidebar fixed px-2 pl-5 py-3">
    <div className="store text-blue-800 font-medium px-1 py-2 mb-3">
      <a className="overflow-hidden" href="#">Ideon</a>
    </div>
    <nav className="pt-3">
      <ul className="ml-2 mt-2">
        {navStructure.map((category, categoryIndex) => (
          <li key={categoryIndex} className="mb-4">
            {category.category && (
              <p className="title uppercase text-xs text-gray-600 tracking-wider">{category.category}</p>
            )}
            <ul className="ml-2 mt-2">
              {category.links.map((link, linkIndex) => (
                <li className="flex-grow px-2 py-1" key={linkIndex}>
                  <a className="text-sm font-light text-blue-900 hover:text-blue-700" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Sidebar;