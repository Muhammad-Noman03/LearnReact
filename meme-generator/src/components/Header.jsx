import Troll from "../images/Troll.png";

export default function Header() {
    return (
        <header className="flex items-center bg-indigo-500 p-4 shadow-md">
            <img
                src={Troll}
                alt="Troll Face"
                className="w-10 h-10 mr-4"
            />
            <h1 className="text-white text-2xl font-bold">Meme Generator</h1>
        </header>
    )
}