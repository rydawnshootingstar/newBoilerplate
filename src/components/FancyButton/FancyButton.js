import React, { Component } from 'react';
import styles from './fancy-button.scss';

class FancyButton extends Component{
    render(){
        return (
            <div>
                <button onClick={this.props.onClick} className={styles.button}>
                    {this.props.label}
                </button>
            </div>
        )
    }
}

export default FancyButton;