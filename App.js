
// code goes here for now (without tooling)

const Pet = ({ name, animal,breed}) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed),
    ]);
}
// declared component 
const App = () => {
    return React.createElement(
        "div",
        {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, { name: "Cita", animal: "Cat", breed: 'Classic'}),
        React.createElement(Pet, { name: "Luna", animal: "Dog", breed: 'Havanese'}),
        React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: 'eagle'})
    ]
    );
};
// inject it into the dom, root div
ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);