// import Button from "../../utils/Button"

import { Link } from "react-router-dom"

const Features = () => {
    return (
        <div className="rounded-3xl bg-blue-950 flex flex-col md:flex-row items-center gap-8 md:gap-4 px-4 py-6 md:px-8 md:py-10">
            <div className="w-full md:w-1/2 text-white space-y-4 md:order-2">
                <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold">Version 1.0 Now Available</h1>
                <p className="font-bold italic text-lg">New Feature:</p>
                <h3 className="text-sm md:text-lg">Sell and Purchase handpicked, special products from student entrepreneurs around you at cheap and affordable rates.</h3>
                {/* <Button path="/login" prompt="Check it Out" /> */}
                <Link to={"/"} className="inline-block border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-950 transition-all duration-500 font-semibold text-sm">Check It Out</Link>
            </div>
            <div className="w-full md:w-1/2 flex justify-end md:justify-normal  md:order-1">
                <img src="/images/student_13.jpg" alt="Student Images temp 2" className="rounded-full md:rounded-l-none md:w-[500px] md:h-[500px] object-cover" />
            </div>
        </div>
    )
}

export default Features