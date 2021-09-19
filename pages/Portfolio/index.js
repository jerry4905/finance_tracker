import React from "react";
import Project from "../../components/Project"
import passwordGenerator from "../../assets/password_generator.JPG";
import codingQuiz from "../../assets/TimedQuiz.JPG";
import workDayPlanner from "../../assets/workdayscheduler.JPG";
import weatherDashboard from "../../assets/weather_dashboard.JPG";
import burgerLogger from "../../assets/pointless_adventures.JPG";
import ToDoList from "../../assets/todolist.JPG";


function Portfolio(props) {
//   const imagePath = "./Assets/Images/"
  const projects = [
    {
        name: 'Password Generator',
        imageURL: passwordGenerator,
        appLink: "https://jerry4905.github.io/password-generator/",
        githubLink: "https://github.com/jerry4905/password-generator"
    },
    {
        name: 'Coding Quiz',
        imageURL: codingQuiz,
        appLink: "https://jerry4905.github.io/Timed-Quiz/",
        githubLink: "https://github.com/jerry4905/Timed-Quiz"
    },
    {
        name: 'Work Day Scheduler',
        imageURL: workDayPlanner,
        appLink: "https://jerry4905.github.io/schedular/",
        githubLink: "https://github.com/jerry4905/schedular"
    },
    {
        name: 'Weather Dashboard',
        imageURL: weatherDashboard,
        appLink: "https://jerry4905.github.io/weather/",
        githubLink: "https://github.com/jerry4905/weather"
    },
    {
        name: 'Pointless Adventures',
        imageURL: burgerLogger,
        appLink: "https://jerry4905.github.io/pointless-adventures/",
        githubLink: "https://github.com/jerry4905/pointless-adventures"
    },
    {
        name: 'To Do List',
        imageURL: ToDoList,
        appLink: "https://jerry4905.github.io/To-do-list/",
        githubLink: "https://github.com/jerry4905/To-do-list"
    }
    
];
  return (
    <div className="row">
        <div className="col-md-9">
            <div className="card bg-light">
                <div className="card-body">
                    <h1 className="card-title" title="Portfolio"><span id="portfolio">Portfol</span><strong><span id="io">io</span></strong></h1>
                    <hr></hr>
                    <Project projects={projects}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;