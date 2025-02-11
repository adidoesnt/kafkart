import { useEffect } from "react";
import { useNavigate } from "react-router";

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 3000);
    }, [navigate])

	return (
		<div className="flex flex-col w-full h-full justify-center items-center bg-gray-900 text-gray-200 p-8">
            <h1 className="text-2xl font-bold">Error 404</h1>
			<p className="text-sm">Page not found, redirecting...</p>
		</div>
	);
}

export default NotFound;
