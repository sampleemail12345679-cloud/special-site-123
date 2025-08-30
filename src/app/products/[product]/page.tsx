// app/products/[product]/page.tsx
import Productpg from "../../Components/Productpg";
import data from "../../data.json";

// ✅ Define the props type using async-compatible params
type PageProps = {
  params: Promise<{
    product: string;
  }>;
};

// ✅ Async page function to match Next.js 15 expectations
export default async function Page({ params }: PageProps) {
  // Unwrap params because Next.js internally treats it as a Promise sometimes
  const { product } = await params;

  // Find the product in your JSON data
  const productObj = data.find((item) => String(item.id) === product);

  // Render
  if (!productObj) {
    return <div className="text-white p-8">Product not found</div>;
  }

  return (
    <Productpg
      brand={productObj.brand}
      name={productObj.name}
      review={productObj.rating}
      srcss={productObj.image}
      description={productObj.description}
      price={productObj.price}
      id={productObj.id}
      category={productObj.category}
      material={productObj.strap_material}
      color={productObj.strap_color}
      type={productObj.type}
    />
  );
}
