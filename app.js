const heading = React.createElement("h1",{id:"heading"},"Hello React!");
console.log(heading); // Object
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);