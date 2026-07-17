import "./PersonalInfoSection.css";

import { useRef, useState } from "react";
import { IoCameraOutline } from "react-icons/io5";

function PersonalInfoSection() {
  const fileInputRef = useRef(null);

  const [profileImage, setProfileImage] = useState(
    "https://i.pravatar.cc/300?img=12",
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    zipCode: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleImageClick() {
    fileInputRef.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setProfileImage(imageUrl);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    alert("Profile Updated Successfully!");
  }

  function handleCancel() {
    alert("Changes Discarded.");
  }

  return (
    <section className="personal-info-section">
      <div className="section-header">
        <h2>Personal Information</h2>
      </div>

      <form className="personal-info-form" onSubmit={handleSubmit}>
        <div className="personal-info-layout">
          <div className="personal-info-left">
            <div className="personal-info-grid">
              <div className="personal-info-group">
                <label>First Name *</label>

                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="personal-info-group">
                <label>Last Name *</label>

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="personal-info-group">
                <label>Email *</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="personal-info-group">
                <label>Phone Number *</label>

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="personal-info-group personal-info-full">
                <label>Country *</label>

                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>

              <div className="personal-info-group personal-info-full">
                <label>Address *</label>

                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="personal-info-group">
                <label>Town / City *</label>

                <input
                  type="text"
                  name="city"
                  placeholder="Town / City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="personal-info-group">
                <label>Postcode / ZIP *</label>

                <input
                  type="text"
                  name="zipCode"
                  placeholder="Postcode / Zip"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="personal-info-right">
            <h3>Update Profile</h3>

            <p>
              Upload a square profile picture.
              <br />
              Recommended size: 300 × 300 px.
              <br />
              Maximum size: 5 MB.
            </p>

            <div
              className="personal-info-image-wrapper"
              onClick={handleImageClick}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="personal-info-image"
              />

              <div className="personal-info-camera">
                <IoCameraOutline />
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="personal-info-actions">
          <button
            type="button"
            className="personal-info-cancel-btn"
            onClick={handleCancel}
          >
            Cancel
          </button>

          <button type="submit" className="personal-info-save-btn">
            Update Profile
          </button>
        </div>
      </form>
    </section>
  );
}

export default PersonalInfoSection;
