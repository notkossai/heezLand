import { useState } from "react";
import { data } from "react-router-dom";
import Swal from "sweetalert2";

export default function EmailUs(){

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "38f5d44a-59d1-4c0b-90bf-b889eb746a22");


const response = await fetch("httpk://localhost:5000/api/send", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message")
  })
});
const data = await response.json();

      if (data.success){
    Swal.fire({
  title: "Success!",
  text: "Message sent succeffuly!",
  icon: "success"
  });
   }
  else {
       Swal.fire({
  title: "Oops...",
  text: "Something went worng from our side. Try again later",
  icon: "error"
  });
  }};



    return(
        <main className="emailUs-section">
            <form onSubmit={onSubmit}>
                <h2 className="title">Conctact Form</h2>
                <div className="input-box name">
                    <label>Full Name</label>
                    <input type="text" 
                    className="field name"
                    placeholder="Enter your name"
                    name="name" required />
                </div>
                   <div className="input-box email">
                    <label>Email Adress</label>
                    <input type="email" 
                    className="field email"
                    placeholder="Enter your email"
                    name="email" required />
                </div>
                   <div className="input-box message">
                    <label>Your Message</label>
                    <textarea name="message" id=""
                    className="field message"
                    placeholder="Enter your message" required />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </main>
    );
}