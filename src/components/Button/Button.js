import React, { Component } from 'react';
import styles from './button.scss';

class Button extends Component{
    render(){
        return (
            <div>
                <button className={styles.button}>
                    {this.props.label}
                </button>
            </div>
        )
    }
}

export default Button;