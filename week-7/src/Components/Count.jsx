import React from 'react'
import Buttons from './Buttons'
import { useRecoilValue } from 'recoil'
import { countAtom } from '../Store/Atoms/Count'

const Count = () => {
    const count = useRecoilValue(countAtom)
    console.log("Re-Render <Count/>");
    return (
        <div>
            <h2>This is count : {count}</h2>
        </div>
    )
}

export default Count