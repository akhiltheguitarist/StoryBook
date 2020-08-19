  
import React, { Component } from 'react';

import styles from './style.css';

class CustomButton extends Component{
    render(){
        return (
            <button className={styles.CustomButton}>Hello</button>     
        );
    }
}

export default CustomButton;