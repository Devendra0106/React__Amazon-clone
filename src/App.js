import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './Home';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { auth, db } from './firebase';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => (
        {
          id: doc.id,
          product: doc.data()
        }
      ))
      setCartItems(tempItems);
    })
  }

  const signOut = () => {
    auth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        setUser(null);
      })
  }

  useEffect(() => {
    getCartItems();
  }, []);

  console.log("User", user);

  return (
    <Router>
      {
        !user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <div className="App">
              <Header
                signOut={signOut}
                user={user}
                cartItems={cartItems} />
              <Switch>
                <Route path="/cart">
                  <Cart cartItems={cartItems} />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Container>
        )
      }
    </Router>
  );
}

export default App;

const Container = styled.div`
    background-color: #EAEDED;
    // margin-top:100px;
`
