import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={require("./img-01.jpg")} alt="dev" />;
}

function Intro() {
  return (
    <div>
      <h1>React Developer </h1>
      <p>
        An entry-level React developer, with a solid foundation in web
        development and have recently embarked on my journey to master the React
        framework. With a passion for creating interactive and dynamic user
        interfaces. Eager to apply my knowledge of JavaScript, HTML, and CSS to
        build engaging and responsive web applications. Equipped with a strong
        desire to learn and grow. Excited to contribute to projects that
        leverage React's component-based architecture, state management, and
        reusable UI elements. My dedication, adaptability, and collaborative
        mindset make me a valuable asset as I embark on my career as a React
        developer.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="#123456" />
      <Skill skill="HTML/CSS" emoji="💪" color="orange" />
      <Skill skill="Git/Github" emoji="🔥" color="yellow" />
      <Skill skill="svelte" emoji="😃" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
