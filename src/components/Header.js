import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';


function Header({ cartItems, user, signOut }) {

    const getCount = () => {
        let count = 0;
        //loop throug all cart items
        cartItems.forEach((item) => {
            //add the quantity of cart item to total
            count += item.product.quantity;
        })
        return count;
    }

    return (
        <Container>
            <HeaderLogo>
                <Link to="/">
                    <img src="https://i.imgur.com/7I9Was5.png" />
                </Link>
            </HeaderLogo>

            <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOptions>
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select your address</OptionLineTwo>
                </HeaderOptions>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIcon>
                    <SearchIcon />
                </HeaderSearchIcon>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOptions onClick={signOut}>
                    <OptionLineOne>Hello, {user.name}</OptionLineOne>
                    <OptionLineTwo>Accounts & Lists</OptionLineTwo>
                </HeaderOptions>

                <HeaderOptions>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOptions>

                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingCartIcon />
                        <CartCount>{getCount()}</CartCount>
                    </Link>
                </HeaderOptionCart>
            </HeaderNavItems>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    position: fixed;
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
    z-index: 200;
    width: 100%
`

const HeaderLogo = styled.div`
    img{
        width: 100px;
        margin-left: 11px;
    }
`

const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`

const OptionLineOne = styled.div`

`

const OptionLineTwo = styled.div`
    font-weight: 700;
`

const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    background-color: white;
    :focus-within{
        box-shadow: 0 0 0 3px #F90;
    }
`

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus{
        outline: none;
    }
`

const HeaderSearchIcon = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center
`
const HeaderNavItems = styled.div`
    display: flex;
`

const HeaderOptions = styled.div`
    padding: 10px 9px 10px 9px;
    cursor: pointer;
`

const HeaderOptionCart = styled.div`
    display: flex;
    a{
        display: flex;
        align-items: center;
        margin-right: 9px;
        color: white;
        text-decoration: none;
    }
`

const CartCount = styled.div`
    padding-left: 2px;
    font-weight: 700;
    color: #F08804;
`

