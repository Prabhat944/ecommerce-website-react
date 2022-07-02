import { useState } from "react";
import AuthContext from "./AuthContext";



const ContextProvider=props=>{

const [addedItemList,setAddedItemList] = useState([]);
const [quantity,setQuantity] = useState(0);
const [TotalAmount,setTotalAmount]=useState(0);

const addItemHandler=(item)=>{
    const itemindex=addedItemList.findIndex(
       (itemList)=>itemList.name === item.name
    );
    const existingItem=addedItemList[itemindex];
    let UpdatedItem;
    if(existingItem){
       const updateitem={...existingItem,quantity:existingItem.quantity + item.quantity};
       UpdatedItem=[...addedItemList];
       UpdatedItem[itemindex]=updateitem;

    }else{
        UpdatedItem=[...addedItemList,item];
    }
    setAddedItemList(UpdatedItem);
    setQuantity(prev=>prev+item.quantity);
    setTotalAmount(prev=>prev+(item.price));
    
};
const deleteItemHandler=(title)=>{
    const itemindex=addedItemList.findIndex(
        itemlist=>itemlist.title === title
    )
    const existing =addedItemList[itemindex];
    let UpdatedItem;
    if(existing.quantity === '1' || existing.quantity <= 1){
         UpdatedItem=addedItemList.filter(items=> items.title !== title);
    }else{
       const updateitem={...existing,quantity:existing.quantity - 1};
       UpdatedItem=[...addedItemList];
       UpdatedItem[itemindex]=updateitem;
    }
    setAddedItemList(UpdatedItem);
    setQuantity(prev=>prev-1);
    setTotalAmount(prev=>prev-existing.price);
};

const contextitem={
    items:addedItemList,
    totalQuantity:quantity,
    total:TotalAmount,
    addItem:addItemHandler,
    deleteItem:deleteItemHandler
 }
    return (
        <AuthContext.Provider value={contextitem}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;