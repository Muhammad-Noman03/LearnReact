import React from 'react'
import { useState, useEffect } from 'react'

export default function Main() {

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageURL: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const { value, name } = event.target
        setMeme(prevName => ({
            ...prevName,
            [name]: value
        }))


    }

    return (
        <main className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
            <div className="form bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <label className="block mb-4">
                    <span className="text-gray-700">Top Text</span>
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Bottom Text</span>
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </label>
                <button className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme mt-8 relative">
                <img src={meme.imageURL} className="rounded-lg shadow-md" />
                <span className="top absolute top-0 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold uppercase tracking-wide text-center">
                    {meme.topText}
                </span>
                <span className="bottom absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold uppercase tracking-wide text-center">
                    {meme.bottomText}
                </span>
            </div>
        </main>
    )
}