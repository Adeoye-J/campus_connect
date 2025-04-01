import { Link } from "react-router-dom"

const Hero = () => {

    return (
        <div className="flex items-center gap-5 flex-col md:flex-row">
            <div className="flex-1 space-y-4 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-6xl font-semibold">Students Development Hub - <span className="text-blue-900">Learn, Connect and Earn</span></h1>
                <h3 className="text-xs md:text-sm font-semibold italic">The No. 1 Student Path to Financial Freedom</h3>
                <p className="mt-4 text-gray-800 font-semibold">Get Financially independent, Grow your network, Develop your brand</p>
                <div className="text-base">
                    <Link to={"/"} className="text-sm border border-blue-900 bg-blue-900 text-white hover:bg-white hover:text-blue-900 transition-all duration-500 px-6 py-4 font-semibold rounded-md inline-block">Start Big Now</Link>
                </div>
            </div>
            <div className="flex-1 overflow-hidden">
                <img src="/images/student_1.jpg" alt="" className="w-full rounded-3xl" />
            </div>
        </div>
    )
}

export default Hero