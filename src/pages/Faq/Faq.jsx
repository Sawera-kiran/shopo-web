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
      question: "How does information technology work?",
      answer:
        "Information technology combines computer hardware, software, networking, and data management to store, process, and exchange information efficiently across organizations and devices.",
    },
    {
      id: 2,
      question: "How can I become an IT manager?",
      answer:
        "There are many paths to becoming an IT manager. Build a strong technical foundation, improve leadership skills, gain industry experience, and continuously learn modern technologies and business practices.",
    },
    {
      id: 3,
      question: "What are the latest trends in IT?",
      answer:
        "Artificial Intelligence, Cloud Computing, Cybersecurity, Edge Computing, DevOps, Blockchain, and Data Analytics are among today's most important technology trends.",
    },
    {
      id: 4,
      question: "How long should a business plan be?",
      answer:
        "A business plan should be concise while covering all important sections including executive summary, market research, financial planning, and business strategy.",
    },
    {
      id: 5,
      question: "How does the support policy work?",
      answer:
        "Support policies typically include multiple communication channels, response time commitments, issue tracking, maintenance, and customer assistance.",
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
