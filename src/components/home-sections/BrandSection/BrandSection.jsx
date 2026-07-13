import "./BrandSection.css";

import apple from "../../../assets/brands/apple.png";
import brave from "../../../assets/brands/brave.png";
import facebook from "../../../assets/brands/facebook.png";
import firefox from "../../../assets/brands/firefox.png";
import google from "../../../assets/brands/google.png";
import huawei from "../../../assets/brands/huawei.png";
import lenovo from "../../../assets/brands/lenovo.png";
import microsoft from "../../../assets/brands/microsoft.png";
import nexus from "../../../assets/brands/nexus.png";
import oneplus from "../../../assets/brands/oneplus.png";
import tencent from "../../../assets/brands/tencent.png";
import tesla from "../../../assets/brands/tesla.png";

function BrandSection() {

  const brands = [
    oneplus,
    tencent,
    apple,
    microsoft,
    lenovo,
    huawei,
    nexus,
    google,
    firefox,
    tesla,
    brave,
    facebook,
  ];

  return (
    <section className="brand-section">

      <div className="container">

        <h2>Shop by Brand</h2>

        <div className="brand-grid">

          {brands.map((brand, index) => (

            <div
              className="brand-card"
              key={index}
            >

              <img
                src={brand}
                alt="brand"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default BrandSection;




