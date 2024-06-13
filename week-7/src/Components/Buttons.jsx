import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { countAtom } from '../Store/Atoms/Count'

const Buttons = () => {
    const setCount = useSetRecoilState(countAtom)
    console.log("Re-Render");
    return (
        <div>
            <button onClick={() => setCount(count=>count + 1)}>+</button>
            <button onClick={() => setCount(count=>count - 1)}>-</button>
        </div>
    )
}

export default Buttons