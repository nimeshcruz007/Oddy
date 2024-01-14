import NavItem from "./NavItem";
import style from "./Navbar.module.css";

function Navbar() {
  const navItemArray = [
    {
      name: "Home",
      icon: "icon-home",
    },
    {
      name: "Inoices",
      icon: "icon-invoice",
    },
    {
      name: "Products",
      icon: "icon-burger",
    },
    {
      name: "Clients",
      icon: "icon-users",
    },
    {
      name: "Messages",
      icon: "icon-messges",
    },
    {
      name: "Settings",
      icon: "icon-settings",
    },
    {
      name: "Help",
      icon: "icon-help",
    },
    {
      name: "Logout",
      icon: "icon-logout",
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
