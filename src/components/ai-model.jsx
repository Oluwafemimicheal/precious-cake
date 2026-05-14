import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import image from "../assets/hero.png"

import { GoogleGenerativeAI } from '@google/generative-ai'
import { Button } from "./ui/button";



function AiMode() {
    const genAI = new GoogleGenerativeAI('AIzaSyBdx0yzuGSNjno-1CP3gNS0hG1O3xquaRE')

    const [prompt, setPrompt] = useState('')
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)

    function handleChange(e) {
        setPrompt(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setLoading(true)
            setResponse('')
            const model = genAI.getGenerativeModel({
                model: 'gemini-2.5-flash-lite'
            })

            const result = await model.generateContent(prompt)
            const text = result.response.text()

            setResponse(text)
            setLoading(false)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <div className="relative">
                <div className="absolute top-130 right-5">
                    <Button onClick ={() => setShow(prev => !prev)}>{show? "Close AI" : "Ask Me a question"}</Button>
                </div>
            </div>
            <img src={image      } alt="" />
            {
                show && <div className="h-auto flex flex-col gap-10 justify-center items-center w-200 mx-auto">
                    <div className="w-full mx-auto mt-10">
                        <div className="text-center">
                            {loading && 'Loading...'}
                        </div>
                        <p>{response}</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <Label>Ask question?</Label>
                        <div className="flex items-center gap-2">
                            <Input className={'my-2'} value={prompt} onChange={handleChange}></Input>
                            <Button>Ask</Button>
                        </div>
                    </form>
                    <Button variant="destructive" onClick={() => setResponse('')} >Clear</Button>
                </div>
            }
        </div>
    )
}

export default AiMode