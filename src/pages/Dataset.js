import React from 'react';
import { FiDatabase } from 'react-icons/fi';
import DS from './DS'
import Anchor from './Anchor';

const t1 = `We will be using a subset of the CORD-19 dataset
that is hosted on Kaggle as well as on AI2's Semantic Scholar. 
CORD-19 is a resource of over 200,000 scholarly articles, 
including over 100,000 with full text, about COVID-19, SARS-CoV-2, 
and related coronaviruses.`;

const t2 = `The dataset consists of research papers in PDF and PMC formats, 
including studies on topics such as spread and control of coronavirus, 
its symptoms and potential cures among other things`;


function Dataset() {
    return (
        <>
        <div className="home">
            <h1> Dataset </h1>
            <FiDatabase />
        </div>
        <DS data = {t1} />
        <DS data = {t2} />
        <Anchor source={`https://www.kaggle.com/allen-institute-for-ai/CORD-19-research-challenge`} />
        </>
    )
}

export default Dataset;

