import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import CartItem from "../../components/Cart/CartItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../../utils/Modal";

function CartCheckout({ hidden, width }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { cart, setCart } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deleteId, setDeleteId] = useState("");

  useEffect(() => {
    //Set the totalprice to zero
    setTotalPrice(0);
    //Loop through all the items in and add the product of quantity and price to the previous price
    cart.forEach((item) => {
      setTotalPrice((prevPrice) => prevPrice + item.price.usd * item.qty);
    });
  }, [cart]);

  //Map all cart items to display them
  const productsInCart = cart.map((item) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        img={item.url}
        name={item.name}
        creator={item.creator}
        size={item.size.ft}
        price={item.price.usd}
        qty={item.qty}
        handleClick={removeCart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
      />
    );
  });

  // Toggle modal once delete is clicked and set the deleteId
  async function removeCart(id) {
    setModalIsOpen(!modalIsOpen);
    setDeleteId(id);
  }

  //Increasing the quantity of cart item
  function increaseQty(id) {
    setCart(
      cart.map((item) => {
        // check if the id match and add to the quantity onclick
        if (item.id == id) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        //Otherwise just return the item
        return item;
      })
    );
  }

  //Decreasing the quantity of cart item
  function decreaseQty(id) {
    if (cart.length <= 1) return;
    setCart(
      cart.map((item) => {
        // check if the id match
        if (item.id == id) {
          //If the qty is return the item
          if (item.qty <= 1) {
            return item;
          } else {
            //Otherwise, reduce the quantity by one
            return {
              ...item,
              qty: item.qty - 1,
            };
          }
        }
        //Otherwise return the item
        return item;
      })
    );
  }

  const confirmCartRemove = () => {
    // Once delete is confirm, filter out the item with deleteId from the carts array
    setCart(cart.filter((item) => item.id != deleteId));
    //Show successful toast message
    toast("Product Removed Successfully!", {
      type: "success",
      className: "w-full",
    });
    //setmodal open to false
    setModalIsOpen(false);
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <ToastContainer />
      <Modal isOpen={modalIsOpen} onRequestClose={toggleModal}>
        <div className="grid grid-cols-2 my-2 text-xs md:text-base">
          <button
            onClick={toggleModal}
            className="h-[3.5rem] px-8 flex items-center border-2 border-grey-dark mr-4"
          >
            SAVE FOR LATER
          </button>
          <button
            onClick={confirmCartRemove}
            className="bg-grey-dark text-red-500 h-[3.5rem] px-8 flex items-center flex items-center justify-center"
          >
            REMOVE ITEM
          </button>
        </div>
      </Modal>
      <div className={"w-3/5 mx-auto mt-5 mb-8 hidden " + hidden}>
        <button className="cart-btn active-cart-btn">Shopping cart</button>
        <button className="cart-btn">Shipping details</button>
        <button className="cart-btn">Payment details</button>
      </div>
      <p className="font-medium text-[#BCB7B7] md:hidden">
        Home/ Marketplace/ <span className="text-grey">Cart</span>
      </p>
      <div className="md:hidden bg-[#3A3A3A] rounded-full py-1.5 px-8 text-lg text-white leading-6 font-medium flex justify-between mx-auto my-8 w-[85%]">
        <button className="rounded-full bg-white text-black py-2 px-8">
          Shop
        </button>
        <button className="rounded-full ">Scheduled</button>
      </div>
      <main className="flex gap-8 justify-end">
        <div className="transition-all shrink-0 w-full">
          <section className="mb-8">{productsInCart}</section>
          <section className="flex flex-col-reverse md:flex-row gap-12 justify-between">
            <div
              className={`flex flex-col justify-center item-center mx-12 md:mx-0 md:w-2/5 md: md:pr-24 ${hidden}`}
            >
              <Link to="/shipping-details">
                <button className="bg-blue h-[3.5rem] w-full md:px-8 text-xl mb-5 font-medium text-green-500 block mx-auto">
                  Proceed to checkout
                </button>
              </Link>
              <Link to="/marketplace">
                <span className="text-center  block text-lg underline text-[#006CA2]">
                  Continue Shopping
                </span>
              </Link>
            </div>
            <article
              className={`text-lg flex flex-col gap-6 leading-[100%]  ${width}`}
            >
              <p className="text-grey-light flex">
                <span>Products in cart :</span>{" "}
                <span className="text-grey-dark ml-auto">
                  {cart.length} item{cart.length > 1 ? "s" : ""}
                </span>
              </p>
              <p className="text-grey-light flex">
                <span>Shipping :</span>{" "}
                <span className="text-grey-dark ml-auto">
                  ${(totalPrice * 0.1).toFixed(2)}
                </span>
              </p>
              <p className="text-grey-light flex">
                <span>Total :</span>{" "}
                <span className="text-grey-dark ml-auto">
                  ${(totalPrice + totalPrice * 0.1).toFixed(2)}
                </span>
              </p>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}

export default CartCheckout;
