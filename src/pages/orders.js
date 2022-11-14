import { getSession, useSession } from "next-auth/react";
import React from "react";
import Header from "../Components/Header";
import { moment } from "moment";
import db from "../../firebase";

function Orders({ orders }) {
  const { data: session } = useSession();

  console.log(orders);

  return (
    <div>
      <Header />
      <main max-w-screen-lg mx-auto p-10>
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>

        {session ? (
          <h2>x Orders</h2>
        ) : (
          <h2>Please Sign in to see your orders</h2>
        )}
        <div className="mt-5 space-y-4">
          {/* {orders?.map((order) => (
            <Order />
          ))} */}
        </div>
      </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  //Get the user logged in credentials ...
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }
  console.log("1st check");
  //  from firebase DB
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timeStamp", "desc")
    .get();
  console.log("firebase DB running");
  // Stripe Orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amoount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );
  console.log("stripe running");

  return {
    props: {
      orders,
    },
  };
}
console.log("orders returned");
