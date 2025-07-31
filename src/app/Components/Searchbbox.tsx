import { useEffect, useRef, useState } from "react";
import data from "../data.json";

export default function SearchOverlay({ onClose }: { onClose: () => void }) {
  // Ref to focus the input when the overlay opens
  const inputRef = useRef<HTMLInputElement>(null);

  // Search query state
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Prevent background scroll when overlay is open
    document.body.style.overflow = "hidden";

    // Focus the input field on mount
   
    // Close overlay when Escape key is pressed
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  // Filter the data based on the search query
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20">
      <div className="bg-black relative rounded-xl w-full max-w-2xl p-6 shadow-lg border-2 border-white">
        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Search input */}
        <input
          ref={inputRef}
          type="text"
          placeholder="Search products..."
          className="w-[90%] border p-3 rounded-md text-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          
        />

        {/* Filtered results */}
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Products</h3>
          <div className="flex flex-col gap-8 overflow-auto max-h-90">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className="bg-black p-4 rounded border-b-2 border-l-2"
                >
                  <a href={`/products/${item.id}`}>{item.name}</a>
                </div>
              ))
            ) : (
              <div className="text-gray-400">No results found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
