  
import React, { Component } from 'react';

import styles from './style.css';

class CustomButton extends Component{
    render(){
        return (
            <button className={styles.customButton}>Hello</button>     
        );
    }
}

export default CustomButton;