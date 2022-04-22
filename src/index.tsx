import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    Render() {
        return <div>Hi there!</div>
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));