import { Layout } from "@/components/Layout";
import { productApiClient } from "@/utils/apiClient";
import { getStockBadge } from "@/utils/stock";
import { useCallback, useEffect, useState } from "react";

type Product = {
	id: number;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
	stock: number;
};

function Products() {
	const [products, setProducts] = useState<Product[]>([]);

	const fetchProducts = useCallback(async () => {
		try {
			const response = await productApiClient.get("/");
			const fetchedProducts = response.data;

			setProducts(fetchedProducts);
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	}, [setProducts]);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	return (
		<Layout>
			<div className="flex flex-col w-full h-full justify-center items-center gap-8 py-8 overflow-hidden">
				<h1 className="text-2xl font-bold">All Products</h1>
				<div className="grid grid-flow-row grid-cols-3 gap-8 w-full h-full items-center justify-center overflow-auto">
					{products.map((product) => (
						<div
							key={product.id}
							className="flex flex-col justify-center items-center gap-2 bg-gray-600 rounded-md p-4 w-fit h-full text-center"
						>
							<h2 className="text-xl font-bold">
								{product.name}
							</h2>
							<img
								className="w-80 aspect-square h-80 rounded-md"
								src={product.imageUrl}
								alt={product.name}
							/>
							<p className="text-sm">{product.description}</p>
							<p className="text-sm font-semibold">Price: ${product.price}</p>
							<p className="text-sm">
								{getStockBadge(product.stock)}
							</p>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}

export default Products;
