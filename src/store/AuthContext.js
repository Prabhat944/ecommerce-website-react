import React from 'react';

const AuthContext = React.createContext(
    {
    items:[],
    totalQuantity:0,
    total:0,
    addItem:(item)=>{},
    deleteItem:(id)=>{}
    });

export default AuthContext;