import React, { useState, useEffect } from "react";

import CheckoutBT from "../Components/CheckoutBT";

const Cart = ({ onClose }) => {
  // Sample initial cart items

  const [items, setItems] = useState([]);

  // Calculate subtotal dynamically
  const subtotal = items.reduce(
    (sum, item) => Math.floor((sum + item.price * item.quantity )),
    0
  );
  
  const vatRate = 0.1; // 10% VAT
  const vat = subtotal * vatRate;
  const total = subtotal + vat;

  
  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity < 1 ? 1 : newQuantity }
          : item
      )
    );
  };
  // Max total in GBP, for example:
const MAX_TOTAL = 79999920;
const exceedsLimit = total > MAX_TOTAL;


  // Handle removing an item
  const handleRemove = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
   
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(stored);
      
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center backdrop-blur-[5px] items-center">
      <section
        className="relative bg-black border border-gray-200 rounded-2xl w-full max-w-md p-6 shadow"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h1 id="cart-title" className="text-xl font-bold mb-4">
          Your Cart
        </h1>

        {items.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-600">
                      Size: {item.size} · Color: {item.color}
                    </p>
                    <p className="text-xs text-gray-600">
                      Price: ₹{item.price} 
                    </p>
                  </div>
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-12 border rounded text-center text-sm"
                  />
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700 text-xs"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t pt-4 text-sm space-y-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>VAT (10%)</span>
                <span>${vat.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            {exceedsLimit && (
  <p className="text-red-500 text-sm text-center m-2">
    The total exceeds the maximum allowed amount for checkout.
  </p>
)}
            <button className=" hover:scale-105  "  disabled={exceedsLimit} >
            
                  <CheckoutBT total={ total} disabled={exceedsLimit} className="size-full bt"/>
           
            </button>
          </>
        )}
      </section>
    </div>
  );
};

export default Cart;
