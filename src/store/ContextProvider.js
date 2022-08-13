import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";



const ContextProvider=props=>{
    const localtoken=localStorage.getItem('token');
const [islogin,setisLogin]=useState(false);
const [Email,setEmail] = useState('');
const [addedItemList,setAddedItemList] = useState([]);
const [quantity,setQuantity] = useState(0);
const [TotalAmount,setTotalAmount]=useState(0);
const [Token,setToken] = useState(localtoken);
const [cartUpdate,setCartUpdate]=useState(false);


const url='https://e-commerce-f98f7-default-rtdb.firebaseio.com/';

useEffect(()=>{
    if(localStorage.getItem('token')){
        setisLogin(true);
    }
},[])

useEffect(()=>{
    if(islogin){
    const email=localStorage.getItem('email');
    const cartdata=async()=>{
        await fetch(`https://e-commerce-f98f7-default-rtdb.firebaseio.com/cart${email}.json`)
           .then(res=>res.json())
           .then(data=>{
            if(data.length > 0){
                 FetchItemHandler(data);
                }
             })
            .catch(err=>console.log(err))}
    cartdata();
            }
    },[islogin])

const FetchItemHandler=(arr)=>{
    const email=localStorage.getItem('email');
    let tempQuantity=0;
    let tempAmount=0;
    for(let key in arr){
       tempQuantity=tempQuantity+arr[key].quantity;
       tempAmount=tempAmount+(arr[key].price * arr[key].quantity);
    }
    setQuantity(tempQuantity);
    setTotalAmount(tempAmount);
    setAddedItemList([...arr]);
    if(email){
    setEmail(email);
    }
}




const LoginHandler=async(obj)=>{
    const email=obj.email.replace('@','');
    const userId = email.replace('.','');  
    setEmail(userId);
    setToken(obj.token);
    setisLogin(true);
    localStorage.setItem('token',obj.token);
    localStorage.setItem('email',userId);
   
}

const LogoutHandler=()=>{
    setEmail('');
    setToken(null);
    setAddedItemList([]);
    setQuantity(0);
    setTotalAmount(0);
    setisLogin(false);
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
}


const addItemHandler=async(item)=>{
    if(!islogin){
        return alert('please sign in to save item in cart')
    }
    let existingItem=addedItemList.find(itemList=>itemList.name === item.name);

    if(existingItem){
        const allItem=[...addedItemList];
        for(let key in allItem){
            if(allItem[key].name === existingItem.name){
                allItem[key].quantity = existingItem.quantity + 1;
            }
        }
        setAddedItemList(allItem)
    }
    else{
        setAddedItemList(prev=>[...prev,item]);
    }
    setCartUpdate(true);
    
    setQuantity(prev=>prev+1);
    setTotalAmount(prev=>prev+(item.price));
     
    
    
};
const deleteItemHandler=async(title)=>{
    let existingItem=addedItemList.find(itemList=>itemList.title === title);

    if(existingItem.quantity > 1){
        const allItem=[...addedItemList];
        for(let key in allItem){
            if(allItem[key].name === existingItem.name){
                allItem[key].quantity = existingItem.quantity - 1;
            }
        }
        setAddedItemList(allItem)
    }
    else{
        const allItem=addedItemList.filter(itemList=>itemList !== existingItem);
        setAddedItemList(allItem)
    }
    setCartUpdate(true);
    
    setQuantity(prev=>prev-1);
    setTotalAmount(prev=>prev-Number(existingItem.price));
};

const CartUpdateHandler=async()=>{
    if(islogin === false){
        return alert('please sign in to save item in cart')
    }
 await fetch(`${url}cart${Email}.json`,{
    method:'PUT',
    body:JSON.stringify(addedItemList)
 }).then(res=>{
    if(res.ok){
       res.json().then(()=>console.log('updated cart'));
    }else{
        res.json().then(err=>console.log(err));
    }})
    .catch(err=>console.log(err))

    setCartUpdate(false);
}
const contextitem={
    email:Email,
    items:addedItemList,
    user:'',
    cartUpdate:cartUpdate,
    cartUpdateHandler:CartUpdateHandler,
    fetchItem:FetchItemHandler,
    totalQuantity:quantity,
    total:TotalAmount,
    addItem:addItemHandler,
    deleteItem:deleteItemHandler,
    token:Token,
    isLogin:islogin,
    Login:LoginHandler,
    LogOut:LogoutHandler
 }
    return (
        <AuthContext.Provider value={contextitem}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;