import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../CommonComponent/Footer";
import Header from "../../CommonComponent/Header";
import CommentList from "./CommentList";
import ImageDetail from "./ImageDetail/ImageDetail";
import styles from './ProductDetail.module.css';

const productsArr = [

    {
    
    name:'Album 1',

    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    name:'Album 2',

    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    name:'Album 3',

    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    name:'Album 4',

    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
const ProductDetail=(props)=>{
    const [userName,setUserName]=useState('');
    const [userComment,setUserComment] = useState('');
    const [prevComment,setNewComment] = useState([]);
    const params=useParams();
    const selectedItem=productsArr.find(item=>item.name === params.productId);
     
    const NameInputHandler=event=>{
        setUserName(event.target.value);
    }
    const CommentInputHandler=event=>{
        setUserComment(event.target.value);
    }
    const CommentHandler=async()=>{
      const response=await fetch(`https://react-https-e99ad-default-rtdb.firebaseio.com/Comment/${selectedItem.name}.json`);
      const data=await response.json();
       const commentArr=[];
       for(const key in data){
        commentArr.push({
            name:data[key].name,
            comment:data[key].comments
        })
       }
       setNewComment(commentArr);
    }

    useEffect(()=>{
        CommentHandler();
    });
    const PostCommentHandler=async(event)=>{
        event.preventDefault();
        const comment={
            name:event.target.Name.value,
            comments:event.target.Comment.value
        };
        await fetch(`https://react-https-e99ad-default-rtdb.firebaseio.com/Comment/${selectedItem.name}.json`,{
            method:"POST",
            body:JSON.stringify(comment),
            headers:{
                'Content-Type':"application/json"
              }
        })
        setUserName('');
        setUserComment('');
        CommentHandler();
    }
    const commentItem=prevComment.map(item=>
        <CommentList key={Math.random().toString()} name={item.name} comment={item.comment} />
    );
    
    return(
        <div>
            <Header cart={true} cartshow={props.cartshow}/>
            <section className={styles.section}>
                <ImageDetail src={selectedItem.imageUrl} alt={selectedItem.title}  item={selectedItem}/>
                <div className={styles.details}>
                    <div className={styles.itemdetail}>
                        <h2>{selectedItem.name}</h2>
                        <label>Special price</label>
                        <h3>${selectedItem.price}</h3>
                        <label>Detail</label>
                        <p>{selectedItem.title}</p>
                    </div>
                    <div>
                        <h1>Comment and Review</h1>
                        <div>
                            {commentItem}
                        </div >
                        <form className={styles.forms} onSubmit={PostCommentHandler}>
                            <label htmlFor="Name">Name:</label><br/>
                            <input type='text' id='Name' onChange={NameInputHandler} value={userName} required/><br/>
                            <label htmlFor="Comment">Your Comment:</label><br/>
                            <input type='text' id="Comment" min='2' onChange={CommentInputHandler} value={userComment} required/><br/>
                            <button>SUBMIT</button>
                        </form>
                        
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );

};
export default ProductDetail;