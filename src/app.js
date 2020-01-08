import React, { Component, Fragment } from 'react';
import styles from './styles/main.scss';

import Button from './components/Button/Button';
import FancyButton from './components/FancyButton/FancyButton';

class App extends Component{
    render(){
        return (
            <div>
                hello world

                <Button label="Normal" />
                <Button label="Normal" />
                <Button label="Normal" />

                <FancyButton label="Fancy" />
            </div>
        )
    }
}

export default App;