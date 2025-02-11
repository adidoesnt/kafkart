import { mockDb } from "@/utils/mockDb";

export const getProducts = async () => {
    return mockDb.products;
};

export const getFeaturedProducts = async () => {
    // TODO: Implement featured products logic
};
