import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./css/email.css";
import { MainTitle } from "./Components/MainTitle";

export function EmailForm(props) {
  const form = useRef();
  const [errors, setErrors] = useState([]);
  const [errorShow, setErrorShow] = useState(true);
  const [successMessageShow, setSuccessMessageShow] = useState(true);
  const [successMessage, setSuccessMessage] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();
    const params = new FormData(e.target);
    setErrors([]);

    emailjs
      .sendForm("service_hwre0fi", "template_k0wvatl", form.current, {
        publicKey: "6W7Hp3HlB78SzKycD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setSuccessMessage(["E-mail sent successfully!"]);
          setSuccessMessageShow(false);
          setErrorShow(true);
          setErrors([]);
        },
        (error) => {
          console.log("FAILED...", error.text);
          e.target.reset();
          setSuccessMessage([]);
          setErrorShow(false);
          setSuccessMessageShow(true);
          setErrors(["Please fill out all fields"]);
        }
      );
  };

  return (
    <div id="contact-us" className={props.email_class}>
      <form ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="email-outsides">
            <MainTitle header_color={props.header_color}>
              Get in touch. <br></br>Let's put your receipts to work.
            </MainTitle>
          </div>
        </div>
        <div className="row">
          <div>
            <input name="email" placeholder="E-mail" className="form-control" type="email" required />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <input name="name" placeholder="First Name" className="form-control" type="string" required />
          </div>
          <div className="col-sm-6">
            <input name="last_name" placeholder="Last Name" className="form-control" type="string" required />
          </div>
        </div>
        <div className="row">
          <div>
            <p>
              <textarea placeholder="Message" type="text" className="form-control" required></textarea>
            </p>
          </div>
        </div>

        <p className="disclaimer pull-right">
          Ecrebo will use the information in this form to contact you about a follow-up meeting to learn more about
          Ecrebo’s products and solutions.
        </p>
        <br></br>

        <br></br>
        <ul hidden={successMessageShow} className="success">
          {successMessage.map((successMessage) => (
            <li key={successMessage}>{successMessage}</li>
          ))}
        </ul>
        <ul hidden={errorShow} className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <button className="button submit-button">Submit</button>
      </form>
      <img className="email-circle" src="/assets/Email-Circles.svg" />
    </div>
  );
}
