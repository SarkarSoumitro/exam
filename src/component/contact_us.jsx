import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Assuming Bootstrap is installed
import './contact_us.css'



const ContactForm = () => {
  return (
   <div className='body'>

    


    <div className="form5 cid-u7iIUPFU5B" id="contact-form-3-u7iIUPFU5B">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 content-head">
            <div className="mbr-section-head mb-5">
              <h3 className="mbr-section-title a mbr-fonts-style align-center mb-0 display-2">
                <strong>Get in Touch</strong>
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
            <div className="dragArea row">
              <div className="col-md col-sm-12 form-group mb-3" data-for="name">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  data-form-field="name"
                  className="form-control h"
                  id="name-form02-0"
                />
              </div>
              <div className="col-md col-sm-12 form-group mb-3" data-for="email">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  data-form-field="email"
                  className="form-control h"
                  id="email-form02-0"
                />
              </div>
              <div className="col-12 form-group mb-3" data-for="url">
                <input
                  type="url"
                  name="url"
                  placeholder="Phone"
                  data-form-field="url"
                  className="form-control h"
                  id="url-form5-0"
                />
              </div>
              <div className="col-12 form-group mb-3" data-for="textarea">
                <textarea
                  name="textarea"
                  placeholder="Message"
                  data-form-field="textarea"
                  className="form-control h"
                  id="textarea-form02-0"
                />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                <button type="submit" className=" b ">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="contacts03 cid-u7iIUPFcSx" id="contacts-11-u7iIUPFcSx">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="col-12 col-md-12">
              <h5 className="mbr-section-title mbr-fonts-style mt-0 mb-4 display-2">
                <strong>Reach Out</strong>
              </h5>
              <p className="mbr-section-subtitle mbr-fonts-style mt-0 mb-4 display-7">
                Call: <a href="">1-800-CIRCUSFUN</a>
                <br />
                Email: info@circusmania.com
                <br />
                Visit: Dhaka Bangladesh
                <br />
                Showtime Hours: Mon-Sun: 9am - 10pm
              </p>
            </div>
          </div>
          <div className="col-lg-8 side-features">
            <div className="google-map">
              <iframe
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?key&#x3D;AIzaSyCt1265A4qvZy9HKUeA8J15AOC4SrCyZe4&amp;q&#x3D;Dhaka%20Bangladesh"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div> 





    </div>
  );
};

export default ContactForm;
