import { Layout } from "@/components/Layout";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Product, ProductCard } from "./Products";
import { useCallback, useEffect, useState } from "react";
import { productApiClient, userApiClient } from "@/utils/apiClient";
import { useAuth } from "@/context/auth";

const FeaturedProducts = () => {
	const [products, setProducts] = useState<Product[]>([]);

	const fetchProducts = useCallback(async () => {
		try {
			const response = await productApiClient.get("/featured");
			const fetchedProducts = response.data;

			setProducts(fetchedProducts);
		} catch (error) {
			console.error("Error fetching featured products:", error);
		}
	}, [setProducts]);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	return (
		products?.length > 0 && (
			<div className="flex flex-col w-full h-full justify-center items-center gap-4 p-4 overflow-auto">
				<h1 className="text-2xl font-bold mt-4">Featured Products</h1>
				<Carousel className="flex w-80 h-fit">
					<CarouselContent>
						{products.map((product) => (
							<CarouselItem key={product.id}>
								<ProductCard product={product} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		)
	);
};

const RecentlyViewedProducts = () => {
	const { user } = useAuth();
	const [products, setProducts] = useState<Product[]>([]);

	const fetchProducts = useCallback(async () => {
		try {
			const response = await userApiClient.get(
				`/recent-product-views?userId=${user!.id}`,
			);
			const fetchedProducts = response.data;

			setProducts(fetchedProducts);
		} catch (error) {
			console.error("Error fetching recently viewed products:", error);
		}
	}, [setProducts, user]);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	return (
		products?.length > 0 && (
			<div className="flex flex-col w-full h-full justify-center items-center gap-4 p-4 overflow-auto">
				<h1 className="text-2xl font-bold mt-4">
					Recently Viewed Products
				</h1>
				<Carousel className="flex w-80 h-fit">
					<CarouselContent>
						{products.map((product) => (
							<CarouselItem key={product.id}>
								<ProductCard product={product} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		)
	);
};

function Home() {
	return (
		<Layout>
			<div className="flex flex-col w-full h-full justify-center items-center gap-4 p-4">
				<RecentlyViewedProducts />
				<FeaturedProducts />
			</div>
		</Layout>
	);
}

export default Home;
