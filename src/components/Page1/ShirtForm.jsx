import React, { useState } from 'react';
import { ArrowRightFromLine } from 'lucide-react';
import { ImageDialog } from './SizeChart';

export default function ShirtForm() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const price = 399;

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${selectedSize} size hoodie(s) to cart`);
  };

  return (
    <div className="min-h-screen text-white ">
        <div className="text-2xl mb-4 flex">
        Price :<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'> ₹{price}</span>
        </div>
      <div className="max-w-md mx-auto">
       
        

        <div className="mb-8">
        <div className="flex justify-start">
            <button className=" text-sm rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 
          hover:from-purple-600 hover:to-pink-600 transition-all" type="submit" 
          onClick={() => setIsDialogOpen(true)}>
                Size
            </button>
           <ImageDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          imageUrl="src/components/sizeChart.png"
          alt="Size chart"
          /> 
          </div>
          <h2 className="text-xl mb-4 flex">Select Size:</h2>
          <div className="flex gap-4">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-14 h-14 rounded-lg border-2 flex justify-center items-center transition-all
                  ${selectedSize === size 
                    ? 'border-purple-400 bg-purple-700' 
                    : 'border-purple-600 hover:border-purple-400'
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl mb-4 flex">Select Quantity:</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="w-12 flex justify-center items-center h-12 rounded-lg border-2 border-purple-600 hover:border-purple-400 text-2xl"
            >
              -
            </button>
            <span className="text-2xl w-12 text-center">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="w-12 flex justify-center items-center h-12 rounded-lg border-2 border-purple-600 hover:border-purple-400 text-2xl"
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            <span>Total:</span>
            <span>₹{price * quantity}</span>
          </div>
        </div>

        <a
          href='/submission'
          className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 
            hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2"
        >
          Buy {quantity}
          <ArrowRightFromLine size={24} />
        </a>
      </div>
    </div>
  );
}

