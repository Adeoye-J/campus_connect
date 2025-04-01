// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa6"
import { Link, Links } from "react-router-dom"


const Footer = () => {

    const currentYear = new Date().getFullYear()

    const products = [
        { name: "Product 1", link: "/product1" },
        { name: "Product 2", link: "/product2" },
        { name: "Product 3", link: "/product3" },
    ]

    const services = [
        { name: "Service 1", link: "/service1" },
        { name: "Service 2", link: "/service2" },
        { name: "Service 3", link: "/service3" },
    ]

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 border-t border-gray-600 py-14">
                <div className="">
                    <img src="/logos/logo.png" alt="Organization's Logo" className="w-40 sm:w-48" />
                </div>
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-blue-900">Products</h2>
                    <ul className="flex flex-col gap-2 font-medium">
                        {
                            products.map((product, index) => (
                                <li key={index}>
                                    <Link to={product.link} className="hover:text-blue-900 inline">
                                            {product.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-blue-900">Services</h2>
                    <ul className="flex flex-col gap-2 font-medium">
                        {
                            services.map((service, index) => (
                                    <li key={index}>
                                        <Link to={service.link} className="hover:text-blue-900 inline">
                                                {service.name}
                                        </Link>
                                    </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-blue-900">Sign Up For Newsletter</h2>
                    <div className="border border-blue-900 rounded-md p-2 flex gap-2 items-center justify-between">
                        <input type="email" placeholder="Enter your email" className="py-2 outline-none border-none flex-1" />
                        <button className="bg-blue-900 border border-blue-900 text-white hover:bg-white hover:text-blue-900 transition-all duration-500 px-4 py-2 rounded-md">Subscribe</button>
                    </div>

                    <p>Subscribe to our newsletter for the latest updates.</p>
                </div>
            </div>
            <div className="border-t border-gray-600 py-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
                <div className="flex flex-col items-center md:items-start justify-center gap-4">
                    <p className="text-center text-sm font-medium">Follow us on:</p>
                    <div className="flex gap-4 justify-center items-center">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/logos/facebook.svg" alt="facebook logo" className="w-8 h-8" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/logos/twitter.svg" alt="twitter logo" className="w-8 h-8" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/logos/instagram.svg" alt="instagram logo" className="w-8 h-8" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="/logos/linkedin.svg" alt="linkedin logo" className="w-8 h-8" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-end justify-center">
                    <p className="text-center text-sm font-medium">© {currentYear} CampusConnect. All rights reserved.</p>
                    <p className="text-center text-sm font-medium"><Link className="text-blue-900" to={"/"}>Privacy Policy</Link> | <Link className="text-blue-900" to={"/"}>Terms of Service</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Footer