import React from "react";
import Jerry from "../../assets/Jerry.jpeg"
import github from "../../assets/github_white.png"
import linkedin from "../../assets/linkedin_white.png"
import "./style.css";

function HomeItems() {
    return (
    <div>
        <div className="home-container">
            <div className = "row">
                <div className="card-body">
                    <div id="image">
                        <img src={Jerry} alt="Jerry Carmona" className="img-thumbnail rounded-circle" title="Jerry Carmona"></img>
                    </div>
                </div>
            </div>
            <h1 id="greeting">Hello! I'm <span id="underline"><strong>Jerry Carmona</strong></span>!</h1>
            <h5 id="role">Full Stack Web Developer </h5>
            <div id="social">
                <a href="https://github.com/jerry4905" target="_blank" rel="noreferrer"><img src={github} alt="github" className="social-image"></img></a>{' '}
                <a href="https://www.linkedin.com/in/gerardo-carmona-03117599/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" className="social-image"></img></a>
            </div>
        </div>
    </div>
    );
}

export default HomeItems;