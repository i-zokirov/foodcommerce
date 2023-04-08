import React, { useEffect } from "react";

const ShoppingCart = () => {
    useEffect(() => {
        const menuClsBtn = document.querySelector(".menu-cls-btn");
        const body = document.querySelector("body")!;
        const handleMenuClsBtnClick = (): void => {
            body.classList.remove("active");
        };
        menuClsBtn?.addEventListener("click", handleMenuClsBtnClick);
        return () => {
            menuClsBtn?.removeEventListener("click", handleMenuClsBtnClick);
        };
    }, []);
    return (
        <div className="menu-wrap">
            <div className="menu-inner ps ps--active-x ps--active-y">
                <span className="menu-cls-btn">
                    <i className="cls-leftright"></i>
                    <i className="cls-rightleft"></i>
                </span>
                <div className="checkout-order">
                    <div className="title-checkout">
                        <h3>My Orders</h3>
                    </div>
                    <div className="banner-wilmington">
                        <img
                            alt="logo"
                            src="https://via.placeholder.com/50x50"
                        />
                        <h6>Kennington Lane Cafe</h6>
                    </div>
                    <ul>
                        <li className="price-list">
                            <i className="closeButton fa-solid fa-xmark"></i>
                            <div className="counter-container">
                                <div className="counter-food">
                                    <img
                                        alt="food"
                                        src="https://via.placeholder.com/100x67"
                                    />
                                    <h5>Pasta, kiwi and sauce chilli</h5>
                                </div>
                                <h4>$39</h4>
                            </div>
                            <div className="price">
                                <div>
                                    <h2>$39</h2>
                                    <span>Sum</span>
                                </div>
                                <div>
                                    <div className="qty-input">
                                        <button
                                            className="qty-count qty-count--minus"
                                            data-action="minus"
                                            type="button"
                                        >
                                            -
                                        </button>
                                        <input
                                            className="product-qty"
                                            type="number"
                                            name="product-qty"
                                            min="0"
                                        />
                                        <button
                                            className="qty-count qty-count--add"
                                            data-action="add"
                                            type="button"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <span>Quantity</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="totel-price">
                        <span>Total order:</span>
                        <h5>$137</h5>
                    </div>
                    <div className="totel-price">
                        <span>To pay:</span>
                        <h2>$137</h2>
                    </div>
                    <button className="button-price">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
