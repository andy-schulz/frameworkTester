import "./globals.css";


import SideNav from '@/app/ui/sidenav';
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>

        <div
            className="flex h-screen flex-col md:flex-row md:overflow-hidden"
        >
            <div className="w-full flex-none md:w-64">
                <SideNav/>
            </div>

            <div className="flex flex-col flex-auto flex-grow">
                <div className="py-4 bg-indigo-600 text-white text-center">
                    <Header></Header>
                </div>

                <div className=" overflow-auto h-full p-6">
                    {children}
                </div>
                <Footer></Footer>
            </div>
        </div>

        </body>
        </html>


    );
}
