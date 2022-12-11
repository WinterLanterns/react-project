import React, { useState, useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../components/CartContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Summary = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled(Link)`
  padding: 10px;
  font-size: 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 1px double black;
  width: 180px;
  text-align: center;
  text-decoration: none;
  &:hover {
    color: #4ebcbb;
  }
`;

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);

  const cart = useContext(CartContext);

  let cartTotal = cart.cart?.map(
    (cartItem) => cartItem.product.price * cartItem.quantity
  );

  const calculateSum = (sum) =>
    sum.reduce(
      (total, current) => Math.round(total * 100 + current * 100) / 100,
      0
    );

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(cart);
    cart.emptyCart();
    navigate("../products");
  }

  function handleSelectChange(e) {
    setQuantity(e.target.value);
  }

  return (
    <div className="maincontainer ">
      <div class="container">
        <div class="py-5 text-center">
          <h2>Checkout form</h2>
          <p class="lead">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-8 order-md-1 ">
            <h4 class="mb-3">Billing address</h4>

            <form onSubmit={handleSubmit} class="needs-validation" novalidate>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="email">
                  Email <span class="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
              <div class="mb-3">
                <label for="address">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              <div class="mb-3">
                <label for="address2">
                  Address 2 <span class="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>
              <div class="row">
                <div class="col-md-5 mb-3">
                  <label for="country">Country</label>
                  <select
                    class="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="state">State</label>
                  <select
                    class="custom-select d-block w-100"
                    id="state"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="zip">Zip</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr class="mb-4" />
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="same-address"
                />
                <label class="custom-control-label" for="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="save-info"
                />
                <label class="custom-control-label" for="save-info">
                  Save this information for next time
                </label>
              </div>
              <hr class="mb-4" />
              <h4 class="mb-3">Payment</h4>
              <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    checked
                    required
                  />
                  <label class="custom-control-label" for="credit">
                    Credit card
                  </label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    required
                  />
                  <label class="custom-control-label" for="debit">
                    Debit card
                  </label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    required
                  />
                  <label class="custom-control-label" for="paypal">
                    Paypal
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small class="text-muted">
                    Full name as displayed on card
                  </small>
                  <div class="invalid-feedback">Name on card is required</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">Expiration</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Expiration date required</div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">CVV</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr class="mb-4" />

              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>{calculateSum(cartTotal)}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 5.99</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -5.99</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>{calculateSum(cartTotal)}</SummaryItemPrice>
                </SummaryItem>
                <Button type="submit">Submit</Button>
              </Summary>
              <footer class="my-5 pt-5 text-muted text-center text-small">
                <p class="mb-1">&copy; 2022 Diana Diaz</p>
              </footer>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
