// app/products/[product]/page.tsx
'use client'
import Productpg from "../../Components/Productpg";
import data from "../../data.json";

type PageProps = {
  params: { product: string };
};

export default function Page({ params }: PageProps) {
  const { product } = params;

  const productObj = data.find((item) => String(item.id) === product);

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
