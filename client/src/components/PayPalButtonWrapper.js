import { useContext, useEffect, useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

// This values are the props in the UI
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const PayPalButtonWrapper = ({ currency, amount, orderData, billing }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [orderResult, setOrderResult] = useState();
  const { action } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currency) {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }
  }, [currency]);

  return (
    <>
      {currency && amount && (
        <PayPalButtons
          style={style}
          // forceReRender={[amount, currency, style]}
          fundingSource={"paypal"}
          disabled={isPending}
          onCancel={(data) => {
            navigate("/checkout");
            window.alert(`order cancelled: ${data.orderID}`);
          }}
          onError={(err) => {
            navigate("/checkout");
            window.alert(err);
          }}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                      breakdown: {
                        item_total: {
                          currency_code: currency,
                          value: String(
                            Number(amount) -
                              Number(orderData.total_tax) -
                              Number(orderData.shipping_lines[0].total)
                          ),
                        },
                        tax_total: {
                          currency_code: currency,
                          value: orderData.total_tax,
                        },
                        shipping: {
                          currency_code: currency,
                          value: orderData.shipping_lines[0].total,
                        },
                      },
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((res) => {
              // Your code here after capture the order
              let postData = {
                ...orderData,
                transaction_id: res.id,
                payment_method_title: data.paymentSource,
                set_paid: true,
              };
              postData.billing = billing;
              if (!orderData.shipping) {
                postData["shipping"] = billing;
              }

              return fetch(
                `${process.env.REACT_APP_URL}/order/create/${data.orderID}`,
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(postData),
                }
              )
                .then((data) => data.json())
                .then((data) => {
                  setOrderResult(data.data);
                  if (data.status === 200) {
                    navigate(`/order/${res.id}`, {
                      state: { res: res, orderData: data.data },
                    });
                    action.clearCart([]);
                  } else if (data.status === 400) {
                    throw new Error(data.message);
                  }
                })
                .catch((error) => {
                  return error;
                });
            });
          }}
        />
      )}
    </>
  );
};

export default PayPalButtonWrapper;
