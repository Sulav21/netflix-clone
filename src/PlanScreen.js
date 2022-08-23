import { object } from "prop-types";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "./firebaseAuth";
import "./planScreen.css";
import {loadStripe} from '@stripe/stripe-js'
export const PlanScreen = () => {
  const [products, setProducts] = useState([]);
  const { user } = useSelector((state) => state.user);
  const [subscription, setSubscription] = useState(null)
  useEffect(() => {
    db.collection('customers')
    .doc(user.uid)
    .collection('subscription')
    .get()
    .then(querySnapshot=>{
      querySnapshot.forEach(async subscription=>{
        setSubscription({
          role:subscription.data
        })
      })
    })
  }, [])
  
  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);
  console.log(products);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url:window.location.origin,
        cancel_url:window.location.origin,
      });
      docRef.onSnapshot(async(snap)=>{
        const {error, sessionId} = snap.data()
        if(error){
          alert(`An error occurred ${error.message}`)
        }
        if(sessionId){
          const stripe = await loadStripe('pk_test_51LUNXwGzLTxHB4nfNxrmgMNUAxam6Q6ZOsnmf10CZbtktKvccrZvEPX89lbAA5JpL8DpoA83iPRrE95hQyNgaCoq009fKOlvWW')
          stripe.redirectToCheckout({sessionId})
        }
      })
  };
  return (
    <div className="planScreen">
      {Object.entries(products).map(([productId, productData]) => {
        // add some logic to check if user subscription is active

        return (
          <div className="planScreen_plan">
            <div className="planScreen_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
};
