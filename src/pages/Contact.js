import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <BreadCrumb title="Contact" />

      <div className="contact-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.59372203544!2d13.28465014098043!3d52.506970379313024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sbd!4v1677252385185!5m2!1sen!2sbd"
                title="contact"
                className="border w-100 rounded"
                style={{ height: "50vh" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="col-12 mt-5">
              <div>
                <form className="d-flex">
                  <div className="input-group mb-3 me-3 border border-dark rounded">
                    <span
                      className="input-group-text border-0 bg-warning"
                      id="basic-addon1"
                    >
                      Name
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                      aria-label="Enter Your Name"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3 ms-3 border border-dark rounded">
                    <span
                      class="input-group-text border-0 bg-warning"
                      id="basic-addon1"
                    >
                      Email
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Email"
                      aria-label="Enter Your Email"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </form>
                <div class="input-group border border-dark rounded">
                  <span class="input-group-text border-0 bg-warning">
                    Enter Your Message
                  </span>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button className="button mt-3 w-50">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
