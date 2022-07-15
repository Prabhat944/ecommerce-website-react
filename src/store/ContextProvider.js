import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";



const ContextProvider=props=>{

const localtoken=localStorage.getItem('token');
const url='https://crudcrud.com/api/c4381b118586483e8aba3775e2e2d6ac/';
const [Email,setEmail] = useState('');
const [addedItemList,setAddedItemList] = useState([]);
const [quantity,setQuantity] = useState(0);
const [TotalAmount,setTotalAmount]=useState(0);
const [Token,setToken] = useState(localtoken);

const FetchItemHandler=(arr)=>{
    let tempQuantity=0;
    let tempAmount=0;
    for(let key in arr){
       tempQuantity=tempQuantity+arr[key].quantity;
       tempAmount=tempAmount+(arr[key].price * arr[key].quantity);
    }
    setQuantity(tempQuantity);
    setTotalAmount(tempAmount);
    setAddedItemList([...arr]);
}

useEffect(()=>{
    const email=localStorage.getItem('email');
    setEmail(email);
    fetch(`${url}cart${Email}`)
           .then(res=>res.json())
           .then(data=>{
            if(data.length > 0)
            { FetchItemHandler(data)}
             })
            .catch(err=>console.log("Fetching data error",err))
    },[Email])
const IsLoggedIn=!!Token;
const LoginHandler=(obj)=>{
    const email=obj.email.replace('@','');
    const userId = email.replace('.','');  
    setEmail(userId);
    setToken(obj.token);
    localStorage.setItem('token',obj.token);
    localStorage.setItem('email',userId);
}
const LogoutHandler=()=>{
    setEmail('');
    setToken(null);
    setAddedItemList([]);
    setQuantity(0);
    setTotalAmount(0);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
}


const addItemHandler=async(item)=>{
    const itemindex=addedItemList.findIndex(
       (itemList)=>itemList.name === item.name
    );
    const existingItem=addedItemList[itemindex];
    
    const URL=existingItem ?`${url}cart${Email}/${existingItem.KeyId || existingItem._id}` : `${url}cart${Email}`;
    await fetch(URL,{
        method:existingItem ?'PUT':'POST',
        body:JSON.stringify(existingItem ?{...existingItem,quantity:existingItem.quantity+item.quantity}:{...item}),
        headers:{
            'Content-type': 'application/json'
        }
    }).then(response=>response.json())
    .then(json=>{
        item={...item,KeyId:json._id}
        console.log('Item Added Response',json)})
    .catch(err=>console.log('error',err))

    let updatedItem;
    if(existingItem){
        const temp={...existingItem,quantity:existingItem.quantity+item.quantity};
        updatedItem=[...addedItemList];
        updatedItem[itemindex]=temp;
        

    }else{
        updatedItem=[...addedItemList,item]
       
    }
    setAddedItemList(updatedItem);
    setQuantity(prev=>prev+item.quantity);
    setTotalAmount(prev=>prev+(item.price));
     
    
    
};
const deleteItemHandler=async(title)=>{
    const itemindex=addedItemList.findIndex(
        itemlist=>itemlist.title === title
    )
    const existingItem =addedItemList[itemindex];
    const URL=`${url}cart${Email}/${existingItem.KeyId || existingItem._id}`;
    if(existingItem.quantity >= 2){
        await fetch(URL,{
            method:"PUT",
            body:JSON.stringify({...existingItem,quantity:existingItem.quantity-1}),
            headers:{
                'Content-type': 'application/json' 
            }
        }).then(response=>console.log("Item Removed Response",response))
        .catch(err=>console.log("error",err))
    }
    else{
        await fetch(URL,{method:"DELETE"})
    }
     let updatedItem;
    if(existingItem.quantity <= 1 || existingItem.quantity === '1'){
  
        updatedItem=addedItemList.filter(item=> item.title !== title)

         
    }else {
     const temp={...existingItem,quantity:existingItem.quantity - 1};
     updatedItem=[...addedItemList];
     updatedItem[itemindex]=temp; 
    
    }
    setAddedItemList(updatedItem);
    setQuantity(prev=>prev-1);
    setTotalAmount(prev=>prev-Number(existingItem.price));
};


const contextitem={
    email:Email,
    items:addedItemList,
    fetchItem:FetchItemHandler,
    totalQuantity:quantity,
    total:TotalAmount,
    addItem:addItemHandler,
    deleteItem:deleteItemHandler,
    token:Token,
    isLogin:IsLoggedIn,
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