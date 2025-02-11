import { Header } from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return <div className="bg-gray-900 text-gray-200 grid grid-rows-[min-content_1fr] h-[100dvh] w-[100dvw] p-4">
        <Header />
        {children}
    </div>
};