import React, { useState } from "react";

const Contact = () => {

  const [getFormValue, setGetFormValue] = useState([]);
  
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setGetFormValue(data);
  };
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center">Contact US</h1>
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto my-5">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    value={data.fullname}
                    onChange={inputEvent}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    value={data.phone}
                    onChange={inputEvent}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your phone"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="msg"
                    value={data.msg}
                    onChange={inputEvent}
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
