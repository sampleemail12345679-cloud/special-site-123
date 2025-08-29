import Productpg from '../../Components/Productpg';
import data from '../../data.json';

// ✅ Add type for the component props
type PageProps = {
  params: {
    product: string;
  };
};

export default function Page({ params }: PageProps) {
  const productId = params.product;
  const productObj = data.find((item) => String(item.id) === productId);

  return (
    <>
      {productObj ? (
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
      ) : (
        <div className="text-white p-8">Product not found</div>
      )}
    </>
  );
}
