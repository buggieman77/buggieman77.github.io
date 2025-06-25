/* ============================
   CONTACT JAVASCRIPT
   ============================ */
import emailjs from "@emailjs/browser";

export default function contactSetup() {
  const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message"),
    serviceID = "service_rrpuydg",
    templateID = "template_w2668ta",
    publicKey = "pMxLWX20LGYMG01g3";

  const formReset = () => {
    contactForm.reset(); // Clear input fields
    // Remove message after 3 seconds
    const clear = () => (contactMessage.textContent = "");
    setTimeout(clear, 5000);
  };

  const sentSucces = () => {
    contactMessage.textContent = "Message sent successfully ✅";
    formReset();
  };
  const sentError = (e) => {
    console.info("error : ", e);
    contactMessage.textContent = "Message not sent (service error) ❌";
    formReset();
  };

  const sendEmail = (event) => {
    event.preventDefault();
    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(serviceID, templateID, contactForm, publicKey)
      .then(sentSucces, sentError);
  };

  contactForm.addEventListener("submit", sendEmail);
}
