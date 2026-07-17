import "./Faq.css";

import { useState } from "react";
import Newsletter from "../../components/home-sections/Newsletter/Newsletter";

function Faq() {
  const [activeQuestion, setActiveQuestion] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const faqData = [
    {
      id: 1,
      question: "How can I place an order?",
      answer:
        "Browse our products, add your favorite items to the cart, proceed to checkout, enter your shipping information, and confirm your order. Once your order is placed, you'll receive a confirmation email.",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer:
        "We accept major debit and credit cards, bank transfers, and popular online payment methods. Additional payment options may be available depending on your region.",
    },
    {
      id: 3,
      question: "How can I track my order?",
      answer:
        "After your order has been shipped, you'll receive a tracking number via email. You can also use the Track Order page on our website to check your order status.",
    },
    {
      id: 4,
      question: "Can I return or exchange a product?",
      answer:
        "Yes. If you're not satisfied with your purchase, you can request a return or exchange within our return policy period. The item must be unused and in its original condition.",
    },
    {
      id: 5,
      question: "How long does shipping take?",
      answer:
        "Delivery times depend on your location and the shipping method selected during checkout. Most standard orders are delivered within 3–7 business days.",
    },
    {
      id: 6,
      question: "Do I need an account to place an order?",
      answer:
        "No. You can place an order as a guest. However, creating an account allows you to save addresses, view your order history, manage your wishlist, and enjoy a faster checkout experience.",
    },
    {
      id: 7,
      question: "How can I contact customer support?",
      answer:
        "You can contact our support team through the Contact page, by email, or by submitting the contact form. Our team will respond as quickly as possible during business hours.",
    },
    {
      id: 8,
      question: "Can I cancel my order after placing it?",
      answer:
        "Yes, orders can usually be cancelled before they are processed for shipping. Once an order has been dispatched, you'll need to follow our return procedure instead.",
    },
  ];

  function toggleQuestion(index) {
    setActiveQuestion(activeQuestion === index ? null : index);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    alert("Message sent successfully!");
  }

  return (
    <>
      <section className="faq-page">
        <div className="container">
          <div className="faq-layout">
            <div className="faq-left">
              <h2>Frequently asked questions</h2>

              <div className="faq-list">
                {faqData.map((item, index) => (
                  <div
                    className={`faq-item ${
                      activeQuestion === index ? "active" : ""
                    }`}
                    key={item.id}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleQuestion(index)}
                      type="button"
                    >
                      <span>
                        {String(index + 1).padStart(2, "0")}. {item.question}
                      </span>

                      <span className="faq-icon">
                        {activeQuestion === index ? "−" : "+"}
                      </span>
                    </button>

                    {activeQuestion === index && (
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="faq-right">
              <div className="faq-form-card">
                <h2>Have Any Question</h2>

                <form className="faq-form" onSubmit={handleSubmit}>
                  <div className="faq-form-group">
                    <label htmlFor="name">First Name *</label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="faq-form-group">
                    <label htmlFor="email">Email Address *</label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="faq-form-group">
                    <label htmlFor="message">Message *</label>

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="faq-submit-btn">
                    Send Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}

export default Faq;
