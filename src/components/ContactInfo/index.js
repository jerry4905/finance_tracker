import React from "react";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import "./style.css";

function ContactInfo() {
  return (
    <div className="col-md-5">
        <div className="card bg-light shadow">
            <div className="card-body">
                <h3 className="contact_details">Email</h3>
                <a href="mailto:jerry4905@yahoo.com">jerry4905@yahoo.com</a>
                <hr></hr>
                <h3 className="contact_details">Phone</h3>
                <p>(661) 406-1366</p>
                <hr></hr>
                <a href="https://github.com/jerry4905" target="_blank" rel="noreferrer"><img src={github} alt="github" class="social-icons"></img></a>{' '}
                <a href="https://www.linkedin.com/in/gerardo-carmona-03117599/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" class="social-icons"></img></a>
            </div>
        </div>  
    </div>
  );
}

export default ContactInfo;