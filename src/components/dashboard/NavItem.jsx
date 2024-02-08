function NavItem({ navItem }) {
  return (
    <li className="dashboard__nav-item">
      <i className={navItem.icon}></i>
      <p>{navItem.name}</p>
    </li>
  );
}

export default NavItem;
