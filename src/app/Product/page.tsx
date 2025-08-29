/* eslint-disable */
'use client'
import { MdFilterList } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Components/Navbar';
import Footers from '../Components/Footers';
import '../App.css'
import data from '../data.json'
import Lenis from 'lenis';
import { useEffect, useState } from 'react';
import { ClerkProvider } from "@clerk/nextjs";
import Offers from '../Components/Offers';

export default function Products() {
  const [showOffers, setShowOffers] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 100000000,
    strapMaterial: '',
    strapColor: '',
    type: ''
  });



  // Filter products based on current filters
  const applyFilters = (newFilters) => {
    let filtered = data.filter((product) => {
      // Price filter
      if (product.price < newFilters.minPrice || product.price > newFilters.maxPrice) {
        return false;
      }

      // Strap material filter
      if (newFilters.strapMaterial && newFilters.strapMaterial !== '') {
        const predefinedMaterials = ['Leather', 'Stainless Steel', 'Titanium', 'Silicon'];
        if (newFilters.strapMaterial === 'Other') {
          if (predefinedMaterials.includes(product.strap_material)) {
            return false;
          }
        } else {
          if (product.strap_material !== newFilters.strapMaterial) {
            return false;
          }
        }
      }

      // Strap color filter
      if (newFilters.strapColor && newFilters.strapColor !== '') {
        const predefinedColors = ['White', 'Black', 'Golden', 'Silver', 'Grey'];
        if (newFilters.strapColor === 'Other') {
          if (predefinedColors.includes(product.strap_color)) {
            return false;
          }
        } else {
          if (product.strap_color !== newFilters.strapColor) {
            return false;
          }
        }
      }

      // Type filter
      if (newFilters.type && newFilters.type !== '') {
        if (product.type !== newFilters.type) {
          return false;
        }
      }

      return true;
    });

    setFilteredProducts(filtered);
  };

  const handleFilterApply = (newFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
    setShowOffers(false);
  };

  const clearFilters = () => {
    const defaultFilters = {
      minPrice: 0,
      maxPrice: 100000000,
      strapMaterial: '',
      strapColor: '',
      type: ''
    };
    setFilters(defaultFilters);
    setFilteredProducts(data);
  };

  return (
    <>
      <ClerkProvider>
        {showOffers ? (
          <Offers
            onApplyFilters={handleFilterApply}
            onClose={() => setShowOffers(false)}
            currentFilters={filters}
          />
        ) : null}
        <Navbar />
        <section className="bg-black text-white body-font">
          <div className="container !px-5 mx-auto">
            <div className="sm:text-3xl text-2xl font-medium title-font text-center text-white !pt-12 !pb-21 flex justify-center items-center gap-20">
              <h1>Our Collections</h1>
              <div className="flex flex-row text-xl justify-center items-center gap-2 cursor-pointer !border-1 !border-white !p-2 rounded-full !px-4 hover:scale-105 transition-all duration-200" onClick={() => { setShowOffers(!showOffers) }}>
                Filter <MdFilterList />
              </div>
            </div>

            {/* Filter status and clear button */}
            <div className="flex justify-center items-center gap-4 !mb-6">
              <p className="text-gray-300">
                Showing {filteredProducts.length} of {data.length} products
              </p>
              {(filters.minPrice > 0 || filters.maxPrice < 100000000 || filters.strapMaterial || filters.strapColor || filters.type) && (
                <button
                  onClick={clearFilters}
                  className="text-sm  text-white !px-3 !py-1 rounded-2xl !border-white !border-2 hover:scale-105 hover:cursor-pointer transition-all duration-200"
                >
                  Clear Filters
                </button>
              )}
            </div>

            <div className="flex flex-wrap -m-4 gap-12 justify-center transition-all duration-500">
              {filteredProducts.map((product) => (
                <div key={product.id} className="lg:w-1/4 md:w-1/2 p-6 w-full opacity-100 animate-fadeIn">
                  <Link
                    href={`/products/${product.id}`}
                    className="block relative h-50 rounded overflow-hidden group"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center group-hover:scale-115 transition-transform duration-300 rounded-2xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </Link>
                  <div className="!mt-4 flex flex-col items-center">
                    <h2 className="text-white title-font text-lg font-medium hover:text-gray-300 transition-colors">
                      <Link href={`/products/${product.id}`}>
                        {product.name}
                      </Link>
                    </h2>
                    <p className="mt-1 text-lg text-[14px] text-zinc-400 font-light">
                      ₹{product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <h2 className="text-2xl text-gray-400 mb-4">No products found</h2>
                <p className="text-gray-500 mb-6">Try adjusting your filter criteria</p>
                <button
                  onClick={clearFilters}
                  className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>
        <Footers />
      </ClerkProvider>
    </>
  );
}