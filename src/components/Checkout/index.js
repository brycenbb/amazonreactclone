import { useNavigate } from 'react-router-dom';
import './index.css';
import { useContext, useState } from 'react';
import { cartContext } from '../../contexts/contexts.js';
import guava from '../../assests/guava.jpg';
import lock from '../../assests/lock.svg';
export default function Checkout() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const { cart } = useContext(cartContext);

  return (
    <main
      className="checkoutMain"
      onClick={() => {
        setShow(false);
        setShow2(false);
        console.log(false);
      }}
    >
      <nav className="checkoutNav">
        <div id="logoModal">
          <img
            src={guava}
            alt="logo"
            onClick={(e) => {
              // navigate('/');
              e.stopPropagation();
              setShow(true);
              setShow2(false);
              console.log(true);
            }}
          ></img>
          <div
            className="mini-modal1"
            style={{ display: show ? 'block' : 'none' }}
          >
            <div>Are you sure you want to return to your Shopping Basket?</div>
            <button className="confirm stay">Stay in checkout</button>
            <button
              className="confirm"
              onClick={() => {
                navigate('/');
              }}
            >
              Return to Basket
            </button>
          </div>
        </div>

        <div className="checkoutCounter">
          Checkout (
          <div
            onClick={(e) => {
              // navigate('/');
              e.stopPropagation();
              setShow2(true);
              setShow(false);
              console.log(true);
            }}
          >
            {cart.length} items
          </div>
          )
          <div
            className="mini-modal2"
            style={{ display: show2 ? 'block' : 'none' }}
          >
            <div>Are you sure you want to return to your Shopping Basket?</div>
            <button className="confirm stay">Stay in checkout</button>
            <button
              className="confirm"
              onClick={() => {
                navigate('/');
              }}
            >
              Return to Basket
            </button>
          </div>
        </div>
        <img src={lock} alt="privacy policy"></img>
      </nav>
      <section id="checkoutDetails">
        <div>
          1<div>Delivey address</div>
          <table>
            <tr>
              <td>Brycen Barron-Borden</td>
            </tr>
            <tr>
              <td>REDACTED</td>
            </tr>
            <tr>
              <td>Leicester, UK</td>
            </tr>
          </table>
          <div>Change</div>
        </div>
        <div>Payment method</div>
        <div>Items and delivery</div>
      </section>
    </main>
  );
}
