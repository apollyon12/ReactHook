import React, { createContext } from 'react'
import ComB from "./ComB";
import ComC from './ComC'

const BioData = createContext();

const ComA = () => {
    return (
        <BioData.Provider value={"Thapa Technical Subs"}>
            <ComB />
            <ComC />
        </BioData.Provider>
    ) 
}
export default ComA
export { BioData };
