import styles from './CommentList.module.css';
const CommentList=props=>{

    return (
    <div className={styles.comments}>
        <h2>{props.name}</h2>
        <p>{props.comment}</p>
    </div>);

};

export default CommentList;