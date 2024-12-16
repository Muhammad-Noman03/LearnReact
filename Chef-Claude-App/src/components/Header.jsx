import chefClaudeLogo from "../Images/Chef.png";

export default function Header() {
    return (
        <header className="flex border-b-2 border-black p-4 justify-center items-center gap-4 bg-white h-[15vh]">
            <img src={chefClaudeLogo} className="w-[60px]" />
            <h1 className="font-semibold text-xl ">Chef Claude</h1>
        </header>
    )
}