/* eslint-disable */
import { BsArrowRightShort } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import '../App.css';

const Offers = ({ onApplyFilters, onClose, currentFilters }: any) => {
    const [minPrice, setMinPrice] = useState(currentFilters?.minPrice || 0);
    const [maxPrice, setMaxPrice] = useState(currentFilters?.maxPrice || 100000000);
    const [strapMaterial, setStrapMaterial] = useState(currentFilters?.strapMaterial || '');
    const [strapColor, setStrapColor] = useState(currentFilters?.strapColor || '');
    const [type, setType] = useState(currentFilters?.type || '');
    const [error, setError] = useState('');

    // Reset error when prices change
    useEffect(() => {
        setError('');
    }, [minPrice, maxPrice]);

    // Validate prices
    const validatePrices = () => {
        if (minPrice >= maxPrice) {
            setError('Maximum price must be greater than minimum price');
            return false;
        }
        return true;
    };

    // Auto-adjust max price when min price changes
    const handleMinPriceChange = (value : any) => {
        const newMinPrice = Number(value);
        setMinPrice(newMinPrice);

        // Auto-adjust max price if it's less than or equal to min price
        if (newMinPrice >= maxPrice) {
            setMaxPrice(newMinPrice + 10000);
        }
    };

    // Auto-adjust min price when max price changes
    const handleMaxPriceChange = (value : any) => {
        const newMaxPrice = Number(value);
        setMaxPrice(newMaxPrice);

        // Auto-adjust min price if it's greater than or equal to max price
        if (newMaxPrice <= minPrice) {
            setMinPrice(Math.max(0, newMaxPrice - 10000));
        }
    };

    const handleApplyFilters = () => {
        if (!validatePrices()) {
            return;
        }

        const filters = {
            minPrice,
            maxPrice,
            strapMaterial,
            strapColor,
            type
        };

        onApplyFilters(filters);
    };

    const handleReset = () => {
        setMinPrice(0);
        setMaxPrice(100000000);
        setStrapMaterial('');
        setStrapColor('');
        setType('');
        setError('');
    };

    return (
        <div className='w-screen h-screen fixed z-150 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm flex justify-center items-center '>
            <div className='bg-black rounded-2xl md:w-[60%] w-full z-60 max-h-[90vh] overflow-y-auto   flex flex-col gap-6 !p-8 text-white  transform transition-all duration-300 '>

                {/* Header */}
                <div className="flex justify-between items-center">
                     <h1 className="flex items-center text-3xl font-semibold justify-center gap-2">
                        Filter Options <BsArrowRightShort />
                    </h1>
                    <button
                        onClick={onClose}
                        className="text-2xl hover:text-gray-300 transition-colors"
                    >
                        <IoClose />
                    </button>
                </div>

                {/* Error message */}
                {error && (
                    <div className="bg-red-900 border border-red-500 text-red-100 px-4 py-2 rounded-lg">
                        {error}
                    </div>
                )}

                {/* Min Price */}
                <label className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <span className="flex flex-row w-28 items-center gap-3">Min Price <BsArrowRightShort /></span>
                        <span className="text-sm ">₹{minPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-3 ">
                        <input
                            type="range"
                            className="flex-1 h-9  rounded-lg appearance-none cursor-pointer range range-neutral border-1 border-white"
                            max={50000000}
                            min={0}
                            step={1000}
                            value={minPrice}
                            onChange={(e) => handleMinPriceChange(e.target.value)}
                        />
                        <input
                            type="number"
                            className=" border border-gray-600 text-white rounded px-3 py-1 focus:border-white transition-colors "
                            value={minPrice}
                            min={0}
                            max={49999000}
                            step={1000}
                            onChange={(e) => handleMinPriceChange(e.target.value)}
                        />
                    </div>
                </label>

                {/* Max Price */}
                <label className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 flex-row">
                        <span className="flex flex-row w-28 items-center gap-3">Max Price <BsArrowRightShort /></span>
                        <span className="text-sm ">₹{maxPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <input
                            type="range"
                            className="flex-1 h-9  rounded-lg appearance-none cursor-pointer slider range range-neutral border-1 border-white"
                            max={100000000}
                            min={1000}
                            step={1000}
                            value={maxPrice}
                            onChange={(e) => handleMaxPriceChange(e.target.value)}
                        />
                        <input
                            type="number"
                            className="w-32 text-white rounded px-3 py-1 focus:border-white transition-colors"
                            value={maxPrice}
                            min={1000}
                            max={100000000}
                            step={1000}
                            onChange={(e) => handleMaxPriceChange(e.target.value)}
                        />
                    </div>
                </label>

                {/* Strap Material */}
                <label className="flex  gap-3">
                    <div className="flex items-center gap-2">
                        Material of Strap <BsArrowRightShort />
                    </div>
                    <select
                        value={strapMaterial}
                        onChange={(e) => setStrapMaterial(e.target.value)}
                        className="bg-black border  text-white rounded !px-3 !py-2 focus:border-white  w-50"
                    >
                        <option value="">All Materials</option>
                        <option value="Leather">Leather</option>
                        <option value="Stainless Steel">Stainless Steel</option>
                        <option value="Titanium">Titanium</option>
                        <option value="Silicon">Silicon</option>
                        <option value="Other">Other</option>
                    </select>
                </label>

                {/* Strap Color */}
                <label className="flex  gap-3">
                    <div className="flex items-center gap-2">
                        Color of Strap <BsArrowRightShort />
                    </div>
                    <select
                        value={strapColor}
                        onChange={(e) => setStrapColor(e.target.value)}
                        className="bg-black border  text-white rounded !px-3 !py-2 focus:border-white  w-50"
                    >
                        <option value="">All Colors</option>
                        <option value="White">White</option>
                        <option value="Black">Black</option>
                        <option value="Golden">Golden</option>
                        <option value="Silver">Silver</option>
                        <option value="Grey">Grey</option>
                        <option value="Other">Other</option>
                    </select>
                </label>

                {/* Watch Type */}
                <label className="flex  gap-3">
                    <div className="flex items-center gap-2">
                        Type of Watch <BsArrowRightShort />
                    </div>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                         className="bg-black  text-white border px-3 rounded py-2 focus:border-white transition-colors w-50"
                    >
                        <option value="">All Types</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="Digital">Digital</option>
                        <option value="Combined">Combined</option>
                    </select>
                </label>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-4 items-center justify-center">
                    <button
                        onClick={handleApplyFilters}
                        disabled={!!error}
                        className={`flex-1 text-white rounded-xl border border-white py-3 transition-all duration-300 ${error
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:scale-105 border-white !border-2 w-120 !p-3 hover:cursor-pointer'
                            }`}
                    >
                        Apply Filters
                    </button>
                    <button
                        onClick={handleReset}
                        className="!px-6 hover:scale-105 border-white !border-2 w-50 !p-3 hover:cursor-pointer transition-all duration-300"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Offers;