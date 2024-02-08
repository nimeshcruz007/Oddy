import NavItem from "./NavItem";
import style from "./Navbar.module.css";

function Navbar() {
  const navItemArray = [
    {
      name: "Home",
      icon: "oddy-home",
    },
    {
      name: "Invoices",
      icon: "oddy-invoice",
    },
    {
      name: "Products",
      icon: "oddy-burger",
    },
    {
      name: "Clients",
      icon: "oddy-users",
    },
    {
      name: "Messages",
      icon: "oddy-messges",
    },
    {
      name: "Settings",
      icon: "oddy-settings",
    },
    {
      name: "Help",
      icon: "oddy-help",
    },
    {
      name: "Logout",
      icon: "oddy-exit",
    },
  ];
  return (
    <nav className="dashboard__nav">
      <ul className="dashboard__navlist">
        {navItemArray.map((item, key) => (
          <NavItem key={key} navItem={item} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
