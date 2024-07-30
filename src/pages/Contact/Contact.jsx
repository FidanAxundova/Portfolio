import React, { useState } from "react";
import "./Contact.scss";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline, MdMessage } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

// import photo from "../../assets/images/contact photo.jpeg"

const Contact = () => {
  const [action, setAction] = useState("");

  return (
    <div className="wrapper">
      {/* <img src={photo} alt=" photo" /> */}
      <div className="form-box register">
        <form action="">
          <h1>Contact</h1>
          <div className="input-box">
            <div>
              <FaRegUser />
            </div>
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-box">
            <div>
              <MdOutlineMailOutline />
            </div>
            <input type="e-mail" placeholder="E-mail" required />
          </div>
          <div className="input-box">
            {/* <textarea name="" id=""></textarea> */}
            <div>
              <MdMessage />
            </div>
            <input type="message" placeholder="Message" required />
          </div>

          <button type="Send">
            <span>Send</span>
            <div>
              <IoIosSend />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
