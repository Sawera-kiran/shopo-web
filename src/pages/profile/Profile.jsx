import "./Profile.css";

import { useState } from "react";

import ProfileSidebar from "../../components/profile/ProfileSidebar/ProfileSidebar";

import DashboardSection from "../../components/profile/DashboardSection/DashboardSection";
import PersonalInfoSection from "../../components/profile/PersonalInfoSection/PersonalInfoSection";
import OrdersSection from "../../components/profile/OrdersSection/OrdersSection";
import AddressSection from "../../components/profile/AddressSection/AddressSection";
import ReviewsSection from "../../components/profile/ReviewsSection/ReviewsSection";
import Newsletter from "../../components/home-sections/Newsletter/Newsletter";
function Profile() {
  const [activeSection, setActiveSection] = useState("dashboard");

  function renderSection() {
    switch (activeSection) {
      case "dashboard":
        return <DashboardSection />;

      case "personal-info":
        return <PersonalInfoSection />;

      case "orders":
        return <OrdersSection />;

      case "address":
        return <AddressSection />;

      case "reviews":
        return <ReviewsSection />;

      default:
        return <DashboardSection />;
    }
  }

  return (
    <>
    <section className="profile-page">
      <div className="container">
        <div className="profile-layout">
          <ProfileSidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          <div className="profile-content">{renderSection()}</div>
        </div>
      </div>
    </section>
      <Newsletter />
      </>
  );
}

export default Profile;
