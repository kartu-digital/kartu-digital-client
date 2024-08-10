"use client";
import sampleData from "@/components/items/produk/sample-data";
import ProductCard from "@/components/product/product-card";

const Page = () => {
    return (
        <div className="container mx-auto mb-20 mt-20 lg:mt-0">
            <div className="mb-20 px-6">
                <h1 className="text-center text-4xl font-bold">
                    Silahkan Pilih Kartumu
                </h1>
                <p className="mx-auto mt-8 text-center lg:w-2/5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    pharetra arcu ut elit luctus, sed suscipit nisl iaculis.{" "}
                </p>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-6 px-2 sm:grid-cols-2 md:grid-cols-2 md:px-0 lg:grid-cols-3 xl:grid-cols-4">
                    {sampleData.product.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
