// creating a parent node

const parent = React.createElement('div', {id: 'parent'}, 
React.createElement('div', {id: 'child'}, [React.createElement('h2', {id: 'h2'}, 'I am the child'),
React.createElement('h2', {id: 'h2'}, 'I am the child')]))


const heading = React.createElement('h1', {id: 'heading', className: 'main-heading'}, 'Hello world from React');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);