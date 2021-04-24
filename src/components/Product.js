import React from 'react'
import styled from 'styled-components';
import { db } from '../firebase';
import NumberFormat from 'react-number-format';

// we can unpack data and use it e.g. function Product({title, price, rating, image})
function Product(props) {
    const addToCart = () => {
        const cartItem = db.collection("cartItems").doc(props.id);
        cartItem.get()
            .then((doc) => {
                console.log(doc);
                if (doc.exists) {
                    cartItem.update({
                        quantity: doc.data().quantity + 1
                    })
                } else {
                    db.collection("cartItems").doc(props.id).set({
                        name: props.title,
                        image: props.image,
                        price: props.price,
                        quantity: 1
                    })
                }
            })
    }
    return (
        <Container>
            <Title>{props.title}</Title>
            <Price>
                <NumberFormat value={props.price} displayType={'text'} thousandSeparator={true} prefix={'₹'} />
            </Price>
            <Rating>
                {
                    Array(props.rating)
                        .fill()
                        .map(rating => <p>⭐</p>)
                }

            </Rating>
            <Image src={props.image}></Image>
            <ActionSection>
                <AddToCartButton
                    onClick={addToCart}
                >
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Product;

const Container = styled.div`
    max-height: 400px;
    z-index: 100;
    flex: 1;
    background-color: white;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.5);
    padding: 20px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    :hover{
        transform: scale(1.05);
    }
    transition: transform 0.3s ease-in-out;
`
const Title = styled.h3`
    font-size: 15px;
    font-weight: 500;
`

const Price = styled.span`
    font-weight: 700;
    margin-top: 3px;
`
const Rating = styled.div`
    display:flex;
`

const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`

const AddToCartButton = styled.button`
    width:100%;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
`

const ActionSection = styled.div`
    // display: flex;
    // align-item: center;
    // justify-content: center;
    // or use below styling for placing button in center
    margin-top: 12px;
    display: grid;
`

