import React, { useState } from "react"
import { useGenerateButton } from "../hooks/useGenerateButton";
import axios from "axios";

const Body: React.FC<any> = () => {
    const { button, setButton } = useGenerateButton();
    const [disable, setDisable] = useState(false);
    const [rawText, setRawText] = useState('');

    const inputTextHandler = (event: any) => {
        setRawText(event.target.value);
    };

    const buttonHandler = () => {
        if (button === "generate summary") {
            setButton("generating ....")
            setDisable(true);
            axios.get('http://127.0.0.1:5000/generate', { params: { rawText: rawText } }).then(response => {
                console.log(response);
                setButton('generated')
                setTimeout(() => {
                    setButton("generate summary");
                    setDisable(false);
                }, 1000)
            });
        }
    }
    return (
        <>
            <section className="text-gray-400 pt-0 body-font dark:bg-gray-700 overflow-y-auto" style={{ "maxHeight": '80vh', "minHeight": '80vh' }}>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full text-gray-900 mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 dark:text-white">Summary of document using nlp</h1>
                            <div className="h-1 w-20 bg-blue-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed dark:text-white">This model is built by EL KOURCHI and AIT ADDI.</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="basis-1/3 hover:basis-1/2 text-center justify-center">
                            <div className="flex flex-wrap w-full text-gray-900 mb-20">
                                <label className="leading-7 dark:text-white text-lg text-gray-400">The text</label>
                                <textarea id="message" onChange={inputTextHandler} name="message" className="w-full h-60 dark:bg-gray-800 bg-gray-200 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="basis-1/3 items-center text-center justify-center h-60">
                            <button disabled={disable} onClick={buttonHandler} className="rounded-full text-white bg-blue-500 mt-28 p-4">{button}</button>
                        </div>
                        <div className="basis-1/2 items-center text-center justify-center">
                            <div className="flex flex-wrap w-full text-gray-900 mb-20">
                                <label className="leading-7 dark:text-white text-lg text-gray-400">The result</label>
                                <textarea id="message" name="message" disabled className="w-full h-60 dark:bg-gray-800 bg-gray-200 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Body;