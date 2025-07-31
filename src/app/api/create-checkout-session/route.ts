import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
    try {
      const body = await req.json();
      const { total } = body;
  
      if (!total) {
        throw new Error("Total amount is required.");
      }
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: { name: "Test Product" },
              
              unit_amount: Math.round(total * 100),
            },
            quantity: 1,
          },
        ],
        success_url: `${req.nextUrl.origin}/`,
        cancel_url: `${req.nextUrl.origin}/`,
      });
  
      return NextResponse.json({ id: session.id });
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: 500 });
      } else {
        console.error("Unexpected error", err);
        return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
      }
    }
}
  