"use client";

import Preloader from "@/components/Preloader";
import { AddContactModel } from "@/models/contactModel";
import { useState } from "react";

const ContactPage = () => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [finalError, setFinalError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const addContactData: AddContactModel = {
      name: event.currentTarget.contactName.value,
      email: event.currentTarget.email.value,
      website: event.currentTarget.website.value,
      message: event.currentTarget.message.value,
    };
    let hasError = false;

    const newErrors = { name: "", email: "", website: "", message: "" };
    for (const [key, value] of Object.entries(addContactData) as [
      keyof AddContactModel,
      any
    ][]) {
      if (!value) {
        newErrors[key] = `${key} is required`;
        hasError = true;
      }
    }

    setErrors(newErrors);
    if (hasError) {
      return;
    }

    setIsLoading(true);
    setFinalError("");
    setSuccessMessage("");

    try {
      const addContactResponse = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addContactData),
      });

      if (addContactResponse.ok) {
        setSuccessMessage("Contact added successfully");
      } else {
        console.error("Failed to add contact");
      }
    } catch (error) {
      console.error("An error occurred", error);
      setFinalError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="content-wrap" className="site-page">
      <div className="row">
        <div className="col-twelve">
          <section>
            <div className="content-media">
              <div id="map-wrap">
                <div id="map-container"></div>
                <div id="map-zoom-in"></div>
                <div id="map-zoom-out"></div>
              </div>
            </div>

            <div className="primary-content">
              <h1 className="entry-title add-bottom">Get In Touch With Us.</h1>

              <p className="lead">
                Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat
                magna occaecat Excepteur nisi esse veniam dolor consectetur
                minim qui nisi esse deserunt commodo ea enim ullamco non
                voluptate consectetur minim aliquip Ut incididunt amet ut
                cupidatat.
              </p>

              <p>
                Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
                nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
                incididunt adipisicing veniam velit id fugiat enim mollit amet
                anim veniam dolor dolor irure velit commodo cillum sit nulla
                ullamco magna amet magna cupidatat qui labore cillum sit in
                tempor veniam consequat non laborum adipisicing aliqua ea nisi
                sint ut quis proident ullamco ut dolore culpa occaecat ut
                laboris in sit minim cupidatat ut dolor voluptate enim veniam
                consequat occaecat fugiat in adipisicing in amet Ut nulla nisi
                non ut enim aliqua laborum mollit quis nostrud sed sed.
              </p>

              <div className="row">
                <div className="col-six tab-full">
                  <h4>Where to Find Us</h4>

                  <p>
                    1600 Amphitheatre Parkway
                    <br />
                    Mountain View, CA
                    <br />
                    94043 US
                  </p>
                </div>

                <div className="col-six tab-full">
                  <h4>Contact Info</h4>

                  <p>
                    someone@abstractwebsite.com
                    <br />
                    info@abstractwebsite.com <br />
                    Phone: (+63) 555 1212
                  </p>
                </div>
              </div>

              <form
                name="cForm"
                id="cForm"
                method="post"
                action=""
                onSubmit={handleSubmit}
              >
                <div className="form-field">
                  <input
                    name="contactName"
                    type="text"
                    id="contactName"
                    className="full-width"
                    placeholder="Your Name"
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-field">
                  <input
                    name="email"
                    type="text"
                    id="email"
                    className="full-width"
                    placeholder="Your Email"
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="form-field">
                  <input
                    name="website"
                    type="text"
                    id="website"
                    className="full-width"
                    placeholder="Website"
                  />
                  {errors.website && (
                    <span className="error">{errors.website}</span>
                  )}
                </div>

                <div className="message form-field">
                  <textarea
                    name="message"
                    id="message"
                    className="full-width"
                    placeholder="Your Message"
                  ></textarea>
                  {errors.message && (
                    <span className="error">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="submit button-primary full-width-on-mobile"
                >
                  Submit
                </button>
                {finalError && (
                  <div className="error final-error">{finalError}</div>
                )}
                {successMessage && (
                  <div className="success-message">{successMessage}</div>
                )}
              </form>
            </div>
          </section>
        </div>
        {isLoading && <Preloader />}
      </div>
    </section>
  );
};

export default ContactPage;
