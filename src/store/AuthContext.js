import React from 'react';

const AuthContext = React.createContext(
    {
    email:'',
    items:[],
    fetchItem:(arr)=>{},
    totalQuantity:0,
    total:0,
    addItem:(item)=>{},
    deleteItem:(id)=>{},
    token:'',
    isLogin:false,
    Login:(token)=>{},
    LogOut:()=>{}
    });

export default AuthContext;