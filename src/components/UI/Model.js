import { Fragment } from "react";
import ReactDOM from 'react-dom';
import styles from './Model.module.css';


const BackDrop=(props)=>{
    return (<div className={styles.backdrop} onClick={props.onCancel}></div>);
};
const ModelOverlay=(props)=>{
    return (
        <div className={styles.modal}>
            <div className={props.content}>{props.children}</div>
        </div>
    );
};
const portalElement=document.getElementById('overlays');
const Model=(props)=>{

    return (<Fragment>
        {ReactDOM.createPortal(<BackDrop onCancel={props.onCloseCart} />,document.getElementById('backdrop'))}
        {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
    </Fragment>);
};

export default Model;