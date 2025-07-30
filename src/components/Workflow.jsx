import { CheckCircle2 } from "lucide-react"
import codeImg from "../Assets/code.jpg"
import { checklistItems } from "../constants"

const Workflow = () => {
    return (
        <div className="mt-20 px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide font-bold">
            Accelerate your
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}coding workflow
            </span>
        </h2>

        {/* Content Section */}
        <div className="flex flex-wrap justify-center items-center mt-10 max-w-7xl mx-auto">
            {/* Left Image */}
            <div className="p-4 w-full lg:w-1/2">
            <img src={codeImg} alt="code" className="rounded-lg shadow-md" />
            </div>

            {/* Right Checklist */}
            <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
                <div key={index} className="flex items-start mb-10 px-4">
                {/* Icon */}
                <div className="text-green-400 bg-neutral-900 p-2 rounded-full mt-1">
                    <CheckCircle2 size={24} />
                </div>

                {/* Text */}
                <div className="ml-6">
                    <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                    <p className="text-md text-neutral-500">{item.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}

export default Workflow
