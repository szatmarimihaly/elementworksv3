'use client';

import SpinnerWhite from "./SpinnerBlack";
import { useState } from "react";
import { getTranslations } from "next-intl/server";
import SpinnerBlack from "./SpinnerBlack";

type Props = {
    resultOk : string,
    resultFail : string
}


export default function PromotionEmail({ resultOk, resultFail } : Props){

    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<{
        success : boolean,
        message : string,
        promoCode?: string
    } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setResult(null);

        try{
            const response = await fetch("/api/promo/subscribe", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({ email })
            });

            const data = await response.json();

            if(response.ok) {
                setResult({
                    success : true,
                    message : data.message,
                    promoCode: data.promoCode
                });
                setEmail("");
            } else {
                setResult({
                    success : false,
                    message : data.error || "Something went wrong",
                })
            }
        }catch(error : any) {
            setResult({
                success: false,
                message : error.message || "Something went wrong"
            })
        }finally{
            setIsLoading(false);
        }
    }



    return(
        <div className="flex flex-col items-center mb-40 mt-20">
            {result && (
                result.success? (
                    <p className="text-green-700 bg-green-300 px-4 py-2 rounded border-2 border-green-500 w-full text-center max-w-lg mx-auto">{resultOk}</p>
                ) : (
                    <p className="text-red-700 bg-red-300 px-4 py-2 rounded border-2 border-red-500 w-full text-center max-w-lg mx-auto">{resultFail}</p>
                )
            )}


            <div className="w-full max-w-xl mx-auto mt-4 border-2 border-gray-400/40 hover:border-gray-200/70 border-gray gray-back rounded-full px-2 py-2 flex items-center justify-between gap-2 ">
                <input type="email" name="email" placeholder="example.user@gmail.com" className="w-full pl-2 outline-none text-gray-200" onChange={(e) => setEmail(e.target.value)}/>
                <button
                    className="bg-white rounded-full px-4 py-2 text-black font-bold transition-all duration-300 hover:bg-gray-400 hover:cursor-pointer"
                    onClick={handleSubmit}
                    disabled={isLoading || !email}
                >
                    {isLoading ? <SpinnerBlack/> : "Promóció"}
                </button>
            </div>
        </div>
    )
}