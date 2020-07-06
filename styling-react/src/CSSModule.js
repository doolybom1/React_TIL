import React from 'react';
import styles from './CSSModule.module.css'

const CSSModule = () => {
    return (
        // class를 두개 이상 적용할때 
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요, 저는 <span className="something">CSS Module</span>
        </div>
    );
};

export default CSSModule;