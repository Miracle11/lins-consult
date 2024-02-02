import React from 'react';
import { WebNavBar } from './WebNavBar';
import { Footer } from './Footer';



export const WebLayout = ({children}) => {
    return (
        <>
            <WebNavBar />
            <div style={{marginTop: 80}} >
                {children}
            </div>
            <Footer />
        </>
    )
};