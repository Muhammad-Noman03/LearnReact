

const Die = (props) => {

    const Styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white'
    }

    return (
        <button
            style={Styles}
            className="w-12 h-12 flex justify-center items-center border-2 border-black rounded-md bg-slate-400 text-black font-semibold cursor-pointer">
            {props.value}
        </button>
    )
}

export default Die