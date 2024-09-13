'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
export interface Product {
  name: string;
  type: string;
  colors: string[];
  images: { [color: string]: string };
  price: number;
  link: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <Card className="w-80 rounded-lg border shadow-md">
      <CardHeader className="px-4 py-2">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.type}</p>
        <div className="mt-2 flex space-x-1">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className={`h-4 w-4 cursor-pointer rounded-full ${selectedColor === color ? 'border-2 border-black' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            ></div>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <div className="relative h-40 w-full">
          <Image
            src={product.images[selectedColor]}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
        <div className="mt-4">
          <p className="text-xl font-semibold">
            Rp. {product.price.toLocaleString('id-ID')}
          </p>
          <Link href={product.link}>
            <button className="mt-4 block w-full rounded-2xl border-2 border-transparent bg-PurpleBlue px-4 py-2 text-center text-white hover:border-PurpleBlue hover:bg-transparent hover:text-PurpleBlue">
              PILIH
            </button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
