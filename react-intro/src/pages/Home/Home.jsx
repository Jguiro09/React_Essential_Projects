import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex w-full justify-center items-center h-screen">
            <Link to="/TrainingPage"><button className="border-solid border-sky-500">Training Page</button></Link>
        </div>
    )
}