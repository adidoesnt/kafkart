import { DEFAULT_USER_PASSWORD } from "./constants";

export const mockDb = {
	users: [
		{
			id: 1,
			username: "user1",
			password: DEFAULT_USER_PASSWORD,
			email: "user1@example.com",
			profileImageUrl:
				"https://kafkart-bucket.s3.eu-west-2.amazonaws.com/user-images/user1.jpg",
			admin: true,
		},
		{
			id: 2,
			username: "user2",
			password: DEFAULT_USER_PASSWORD,
			email: "user2@example.com",
			profileImageUrl:
				"https://kafkart-bucket.s3.eu-west-2.amazonaws.com/user-images/user2.jpg",
			admin: false,
		},
		{
			id: 3,
			username: "user3",
			password: DEFAULT_USER_PASSWORD,
			email: "user3@example.com",
			profileImageUrl:
				"https://kafkart-bucket.s3.eu-west-2.amazonaws.com/user-images/user3.jpg",
			admin: false,
		},
	],
	products: [
		{
			id: 1,
			name: "Standard King-sized Bed",
			description:
				"A luxurious bed with a sturdy frame and a comfortable mattress.",
			price: 2000,
			imageUrl:
				"https://kafkart-bucket.s3.eu-west-2.amazonaws.com/product-images/bed.jpeg",
			stock: 4,
		},
		{
			id: 2,
			name: "Green Bedsheet Set",
			description: "A set of bedsheets in a beautiful olive green color.",
			price: 200,
			imageUrl:
				"https://kafkart-bucket.s3.eu-west-2.amazonaws.com/product-images/bedsheets.jpeg",
			stock: 20,
		},
		{
			id: 3,
			name: "Soy-based Bedside Candle",
			description: "A candle made from soy wax and essential oils.",
			price: 40,
			imageUrl:
				"https://kafkart-bucket.s3.eu-west-2.amazonaws.com/product-images/candle.jpeg",
			stock: 0,
		},
		{
			id: 4,
			name: "White Duvet",
			description:
				"A soft, weighted duvet that provides a cozy and comfortable sleeping experience.",
			price: 300,
			imageUrl:
				"https://kafkart-bucket.s3.eu-west-2.amazonaws.com/product-images/duvet.jpeg",
			stock: 40,
		},
		{
			id: 5,
			name: "Wooden Desk Chair",
			description:
				"A comfortable, stylish and affordable desk chair made of the finest oak wood.",
			price: 100,
			imageUrl:
				"https://kafkart-bucket.s3.eu-west-2.amazonaws.com/product-images/chair.jpeg",
			stock: 50,
		},
		{
			id: 6,
			name: "Bedside Lamp",
			description:
				"A stylish and functional lamp that adds a touch of elegance to your bedroom.",
			price: 35,
			imageUrl:
				"https://kafkart-bucket.s3.eu-west-2.amazonaws.com/product-images/lamp.jpeg",
			stock: 60,
		},
		{
			id: 7,
			name: "Pillows",
			description:
				"A set of soft and fluffy pillows that provide a comfortable and cozy sleeping experience.",
			price: 50,
			imageUrl:
				"https://kafkart-bucket.s3.eu-west-2.amazonaws.com/product-images/pillows.jpeg",
			stock: 70,
		},
		{
			id: 8,
			name: "Bedside Table",
			description:
				"A stylish and functional table that adds a touch of elegance to your bedroom.",
			price: 150,
			imageUrl:
				"https://kafkart-bucket.s3.eu-west-2.amazonaws.com/product-images/side-table.jpeg",
			stock: 80,
		},
		{
			id: 9,
			name: "Wooden Desk",
			description:
				"A sturdy and durable table that provides a comfortable and functional workspace.",
			price: 250,
			imageUrl:
				"https://kafkart-bucket.s3.eu-west-2.amazonaws.com/product-images/table.jpeg",
			stock: 90,
		},
	],
};
