import React from 'react'
import Layout from '../core/Layout'
import Hero from './Hero'
import QuoteCard from './QuoteCard'
import Donate from './Donate'
import Impact from "./Impact";

import Fade from 'react-reveal/Fade'






export default function Home() {

    return (
        <Layout className='container'>
            <div className="space-100"></div>
            <Fade >
                <Hero />
            </Fade>
            <Fade bottom>
                <QuoteCard/>
            </Fade>
            <div className="space-50"></div>
            <Donate/>
            <div className="space-100"></div>
            <div className="space-100"></div>
            <Impact/>
            
        </Layout>
    )
}

