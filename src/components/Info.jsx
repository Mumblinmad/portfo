import React, { Component } from 'react';

class Info extends Component {
    render() {
        const skills = ["Html","Css","Sass","Figma","Git","Javascript","React","Node.js","PHP","Mysqli","Mongo Db","C++","Python","Unity","Blender"];
         
        var skillList = skills.map(skill => <li>{skill}</li>)

        return (
            <div className={'info '+this.props.className}>
                <h1>About</h1>
            <div className="flexColumn">
            <article className="card education">
                <h1>Education</h1>
                <div className="flexRow">
                <div className="portfo edu">
                    <h1>Mississppi State University</h1>
                    <p>August 2016 - May 2020</p>
                    <h3>Computer Science</h3>
                </div> 
                <div className="portfo edu">
                    <h1>Mongo DB Online University</h1>
                    <p>January 2021 - Febraury 2021</p>
                    <h3>Mongo DB Developers Exam</h3>
                </div>
                </div>
            </article>
            <article className="card employment">
                <h1>Employment</h1>
                <div className="flexRow">
                <div className="emp">
                    <h1>Marketing Assistant</h1>
                    <p>Prudential</p>
                    <p>June 2018 - Present</p>
                    
                        <ul>
                        <li>Formatting and aggregating data about the
                        local market</li>
                        <li>Scheduled interviews for prospective hires</li>
                        <li>Cold calling local professionals looking for work in finance</li>
                    </ul>
                </div>
                <div className="emp">
                    <h1>Server</h1>
                    <p>Zea Rotisserie & Bar</p>
                    <p>September 2020 - Present</p>
                    <ul>
                        <li>Maintained Covid-19 sanitation standards</li>
                        <li>Handle and document cash flow throughout the shift</li>
                        <li>Three responsibility</li>
                    </ul>
                </div>
                </div>
            </article>
            </div>
            <article className="card skillList">
                <h1>Skills</h1>
                <ul>
                    {skillList}
                </ul>
            </article>
            
            </div>
        );
    }
}

export default Info;