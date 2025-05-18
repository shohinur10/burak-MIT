import React, {  ReactNode, useState } from "react";
import Cookies from "universal-cookie";
import { Member } from "../lib/types/member";
import { GlobalContext } from "../components/hooks/useGlobals";


const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const cookies =new Cookies();
    if(!cookies.get("access_token")) localStorage.removeItem("itemData");
       
    const [authMember,setAuthMember] = useState< Member  | null>(
    localStorage.getItem("memberData")
    ? JSON.parse(localStorage.getItem("memberData") as string) 
    : null
);

return (<GlobalContext.Provider value={{ authMember, setAuthMember }}>
    {children}  // children prop is used to render the child components
</GlobalContext.Provider>)
};


export default ContextProvider;