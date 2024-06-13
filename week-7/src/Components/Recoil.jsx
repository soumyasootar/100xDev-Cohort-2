import React from 'react'
import Count from './Count'
import Buttons from './Buttons'
import { useRecoilValue } from 'recoil'
import evenSelector from '../Store/Selector/evenSelector'
import EvenSelector from './EvenSelector'

export const Recoil = () => {
    const isEven = useRecoilValue(evenSelector)
    console.log("isEven: ", isEven);
    return (
        <div>
            <div>EvenSelector1 : {!isEven ? "Even" : "Odd"}</div>
            <Count />
            <Buttons />
        </div>
    )
}
