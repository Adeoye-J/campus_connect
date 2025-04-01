import { Link } from "react-router-dom"


interface ButtonProps {
    path: string;
    prompt: string;
}

const Button = ({path, prompt} : ButtonProps) => {
  return (
    <Link to={path} className="px-4 py-2 rounded-md border border-blue-900 hover:text-blue-900 hover:bg-white active:bg-blue-900 active:text-white bg-blue-900 text-white transition-all duration-500 inline-block font-semibold">{prompt}</Link>
  )
}

export default Button