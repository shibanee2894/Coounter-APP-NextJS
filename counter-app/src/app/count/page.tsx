"use client"
import React from 'react';

import useStore from '@/store/CounterStore';

const DisplayCount = () => {
    const { count } = useStore();

    return(
        <div className="display">
            <h1>Count Result</h1>
            <h2>{count}</h2>

        </div>
    )
}

export default DisplayCount;