/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import React, { useState,useEffect } from "react";
import { CartItem } from "../../lib/types/search";


interface HomeNavbarProps {
     cartItems: CartItem[];
        onAdd: (item: CartItem) => void;
        onRemove: (item: CartItem) => void;
        onDelete: (item: CartItem) => void;
        onDeleteAll: () => void;
}
export  default function HomeNavbar (props: HomeNavbarProps) {
    const {cartItems,onDelete,onAdd,onDeleteAll,onRemove} = props;
    const authMember = null;
    const  [count,setCount] = useState<number>(0);
    const [value,setvalue] = useState<boolean>(true);

  useEffect(() => {
    console.log("componentDidMount");// Data fetching
    setCount(count + 1);
  }, [value]);   // value is the dependency, when it changes, useEffect will be called


    /** Handler  */
    const buttonHandler = () => {
        setCount(count + 1);
    };
    return (
    <div className= "home-navbar" >
        <Container  className="navbar-container" >
            <Stack className="menu"
         >
            <Box>
                <NavLink to="/">
                    <img 
                    style={{width:"125px", height:"30px"}} src="/icons/burak.svg"/>
                </NavLink>
            </Box>
           
            <Stack className="links">
            <Box className={"hover-line"}>
                <NavLink to="/"activeClassName={"underline"}>
                 Home </NavLink>
            </Box>

            <Box className={"hover-line"}>
                <NavLink to="/products" activeClassName={"underline"}>Products</NavLink>
            </Box>

             { authMember ?(
                <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName={"underline"} >Orders</NavLink>
            </Box>
             ) :null}

             { authMember ?(
                <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>My Page</NavLink>
            </Box>
             ) :null}
          
            <Box className={"hover-line"}>
                <NavLink to="/help"activeClassName={"underline"}>Help</NavLink>
            </Box>
           
            { /*BASKET} */}
            <Basket cartItems={cartItems}
            onAdd = {onAdd}
            onRemove={onRemove}
            onDelete={onDelete}
            onDeleteAll={onDeleteAll}
            />

            {!authMember ? (
    <Box>
        <Button 
            variant="contained" 
            className="login-button"
        >
            Login
        </Button>
    </Box>
) : (
    <img 
       className="user-avatar"
        src={"/icons/default-user.svg"}
        aria-haspopup={"true"}
    />
)}


        </Stack>
        </Stack>
    <Stack className={"header-frame"}>
        <Stack className={"detail"}>

            <Box className ={"head-main-txt"}>
                World's Most Delicious Cousine 
            </Box>
            <Box className ={"wel-txt"}>
                The Choice, not just a choice
            </Box>
            <Box className ={"service-txt"}>
               {count}hours service
            </Box>

            <Box className ={"signup"}>
                {!authMember ?(
                    <Button variant={"contained"} 
                    className={"signup-button"}
                        onClick={buttonHandler}>
                        SIGN UP 
                    </Button>
                ) : null } 
             
            </Box>
            
            </Stack>
                 <Box className={"logo-frame"}>
                <div className={"logo-img"}>
                    </div>
                        </Box>
        
 </Stack>
        </Container>
         </div>
);
}

