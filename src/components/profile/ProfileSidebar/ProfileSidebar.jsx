import "./ProfileSidebar.css";

import {
  IoGridOutline,
  IoPersonOutline,
  IoReceiptOutline,
  IoLocationOutline,
  IoStarOutline,
} from "react-icons/io5";

function ProfileSidebar({
  activeSection,
  setActiveSection,
}) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <IoGridOutline />,
    },
    {
      id: "personal-info",
      label: "Personal Info",
      icon: <IoPersonOutline />,
    },
    {
      id: "orders",
      label: "Orders",
      icon: <IoReceiptOutline />,
    },
    {
      id: "address",
      label: "Address",
      icon: <IoLocationOutline />,
    },
    {
      id: "reviews",
      label: "Reviews",
      icon: <IoStarOutline />,
    },
  ];

  return (
    <aside className="profile-sidebar">
      <h2 className="profile-sidebar-title">
        Dashboard
      </h2>

      <nav className="profile-sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`profile-sidebar-item ${
              activeSection === item.id
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveSection(item.id)
            }
          >
            <span className="profile-sidebar-icon">
              {item.icon}
            </span>

            <span className="profile-sidebar-text">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default ProfileSidebar;