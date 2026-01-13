import { Link, NavLink } from "react-router";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink className={'hover:text-primary'} to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink className={'hover:text-primary'} to={""}>Feature</NavLink>
      </li>
      <li>
        <NavLink className={'hover:text-primary'} to={""}>How It Works</NavLink>
      </li>
      <li>
        <NavLink className={'hover:text-primary'} to={""}>FAQ</NavLink>
      </li>
      <li>
        <NavLink className={'hover:text-primary'} to={""}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <header className=" fixed top-2 w-full z-50 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl uppercase font-bold font-secondary tracking-tight">
            simupitch ai
          </span>
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-primary rounded-full"></div>
            <div className="w-1 h-4 bg-primary rounded-full"></div>
            <div className="w-1 h-4 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 decoration-none">
         <ul className="flex gap-8 items-center font-normal text-sm  transition-colors">
         {links}

         </ul>
        </nav>
        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="https://simupitch.ai/login"
            target="_blank"
            className="text-sm hover:text-gray-300 transition-colors"
          >
            Login
          </Link>
          <Link to={"https://simupitch.ai/login"} target="_blank" className="bg-primary cursor-pointer text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
