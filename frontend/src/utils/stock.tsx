import { Badge } from "@/components/ui/badge"

export const getStockBadge = (stock: number) => {
	if (stock === 0) {
		return <Badge variant={"outline"} className="border-red-600 text-red-600">Out of stock</Badge>;
	} else if (stock < 10) {
		return <Badge variant={"outline"} className="border-orange-500 text-orange-500">Selling fast</Badge>;
	} else {
		return <Badge variant={"outline"} className="border-green-500 text-green-500">Available</Badge>;
	}
};
