"use client"

import React, { useState } from "react";
import useStore from "@/store/CounterStore";
import Link from 'next/link';

const Counter = () => {
    const { increment, decrement, reset} = useStore();

    return(
        <div className="buttons">
            <button className="increment" onClick={increment}>Increment</button>
            <button className="decrement" onClick={decrement}>Decrement</button>
            <button className="reset" onClick={reset}>Reset</button>
            <div>
            <Link href="/count">
             Counting Display
            </Link>
            </div>

        </div>
    )
}

export default Counter;