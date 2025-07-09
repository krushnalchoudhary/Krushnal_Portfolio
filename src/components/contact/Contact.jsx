import React, { useRef } from "react";
import "./Contact.css";
import contactImage from "../../assets/contactImage.png";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fhgkubv",       // Replace with your EmailJS Service ID
        "template_j1v1y8j",      // Replace with your EmailJS Template ID
        form.current,
        "S3SbzowGcEMWdoxtR"           // Replace with your EmailJS Public Key (User ID)
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message was sent successfully. We will get back to you soon.",
            confirmButtonColor: "#3085d6",
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <i className="fas fa-paper-plane"></i> Get in <span>Touch</span>
      </h2>

      <div className="contact-card">
        {/* Image Section */}
        <div className="contact-image">
          <img src={contactImage} alt="Contact" />
        </div>

        {/* Form Section */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>
            Your Name
            <input type="text" name="name" placeholder="Enter your name" required />
          </label>

          <label>
            Your Email
            <input type="email" name="email" placeholder="Enter your email" required />
          </label>

          <label>
            Phone Number
            <input type="tel" name="phone" placeholder="Enter your phone number" required />
          </label>

          <label>
            Message
            <textarea name="message" rows="5" placeholder="Write your message..." required></textarea>
          </label>

          <button type="submit">
            <i className="fas fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
