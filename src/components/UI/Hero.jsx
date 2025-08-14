import { NavLink } from "react-router-dom"
import { FaLongArrowAltRight } from "react-icons/fa";

export const Hero = () => {
    return (
        <main className="bg-white dark:bg-gray-800 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
                
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                        Discover Your Perfect
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"> Beauty & Fashion </span>
                        Collection!
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                        Elevate your style with our curated collection of premium beauty and fashion products for both men and women. From skincare essentials to trendy fashion pieces - find everything you need to look and feel your best!
                    </p>
                    
                    {/* Features list */}
                    <div className="mb-8 grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <span>Premium Beauty Products</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>Trendy Fashion Items</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>For Men & Women</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Curated Collection</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <NavLink to="/product">
                            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                                Shop Now <FaLongArrowAltRight />
                            </button>
                        </NavLink>
                       
                    </div>
                </div>

                <div className="flex justify-center relative">
                    {/* Background decorative elements */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-200 dark:bg-pink-900 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20"></div>
                    
                    {/* Main image container */}
                    <div className="relative z-10 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-2xl">
                        <img
                            src="/images/Myshop.webp"
                            alt="Beauty and Fashion Products"
                            className="w-full max-w-md rounded-lg shadow-md"
                            onError={(e) => {
                                // Fallback to a placeholder if image doesn't exist
                                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='18' fill='%236b7280' text-anchor='middle' dy='.3em'%3EBeauty %26 Fashion Collection%3C/text%3E%3C/svg%3E";
                            }}
                        />
                        
                        {/* Floating product badges */}
                        <div className="absolute -top-2 -right-2 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                            New Arrivals
                        </div>
                        <div className="absolute -bottom-2 -left-2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                            Premium Quality
                        </div>
                    </div>
                </div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-purple-50/30 dark:from-gray-800/50 dark:to-gray-700/50 -z-10"></div>
        </main>
    )
}