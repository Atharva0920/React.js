import React from "react";
import ReactDOM from "react-dom/client"


const heading = React.createElement("h1",{id:"heading", class :"ad"},"Hello Devs👨‍💻!");
const subHeading = React.createElement("h1",{id:"sub-heading",class:"ad"},"Learning React?🚀");
const newHeading = React.createElement("h1",{id:"new-heading", class:"ad"},"me too😎")
const parent = React.createElement("div",{id:"parent"},[heading, subHeading, newHeading]); // Object
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);