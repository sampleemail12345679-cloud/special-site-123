"use client";

import { loadStripe } from "@stripe/stripe-js";
import "../App.css"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutBT({ total }: { total: number }) {
  const handleClick = async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ total: Number(total) / 83 }),
    });

    const data = await res.json();

    if (data.error) {
      console.error(data.error);
      return;
    }

    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bt !mt-12 "
    >
      Checkout
    </button>
  );
}
