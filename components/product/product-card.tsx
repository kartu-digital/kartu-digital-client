import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Product } from '@/lib/types';

const ProductCard = ({ product }: { product: Product }) => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);

    return (
        <Card className="w-80 border rounded-lg shadow-md">
            <CardHeader className="px-4 py-2">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.type}</p>
                <div className="flex space-x-1 mt-2">
                    {product.colors.map((color, index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 rounded-full cursor-pointer ${selectedColor === color ? 'border-2 border-black' : ''}`}
                            style={{ backgroundColor: color }}
                            onClick={() => setSelectedColor(color)}
                        ></div>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="px-4 py-2">
                <div className="relative w-full h-40">
                    <Image
                        src={product.images[selectedColor]}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                    />
                </div>
                <div className="mt-4">
                    <p className="text-xl font-semibold">Rp. {product.price.toLocaleString('id-ID')}</p>
                    <Link href={product.link}>
                        <button className="block w-full mt-4 bg-PurpleBlue text-white text-center py-2 px-4 rounded-2xl border-2 border-transparent hover:bg-transparent hover:text-PurpleBlue hover:border-PurpleBlue">
                            PILIH
                        </button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}

export default ProductCard;
