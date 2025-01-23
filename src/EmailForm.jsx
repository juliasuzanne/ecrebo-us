import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./css/email.css";

export function EmailForm() {
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
          setSuccessMessage([]);
          setErrorShow(false);
          setSuccessMessageShow(true);
          setErrors(["Please fill out all fields"]);
        }
      );
  };

  return (
    <div id="login">
      <form ref={form} onSubmit={sendEmail}>
        <div className="container">
          <div className="row">
            <div className="email-outsides">
              <h3>Get in touch. Let’s put your receipts to work.</h3>
            </div>
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
          </div>
          <div className="row">
            <div>
              E-mail:
              <input name="email" className="form-control" type="email" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              First Name:
              <input name="name" className="form-control" type="string" />
            </div>
            <div className="col-sm-6">
              Last Name:
              <input name="last_name" className="form-control" type="string" />
            </div>
          </div>
          <div className="row">
            <div>
              Message:
              <p>
                <textarea name="message" type="text" className="textarea"></textarea>
              </p>
              {/* <input name="message" className="textarea form-control" type="text" /> */}
            </div>
          </div>
          <div className="row">
            <button className="submitbutton btn btn-secondary mt-3 submit ">Submit</button>
          </div>
          <div className="row">
            <p className="disclaimer">
              Ecrebo will use the information in this form to contact you about a follow-up meeting to learn more about
              Ecrebo’s Clickable Paper Receipt solution.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
