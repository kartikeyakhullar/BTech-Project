import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import List from './List';

const fixedArray = ['covid', 'coronavirus', 'symptoms', 
'social', 'distancing', 'incubation', 'comorbidity', 'pandemic', 
'community', 'spread', 'quarantine', 'isolation', 'virus', 'sars', 'epidemic', 
'herd immunity', 'flattening', 'curve',];

function SearchResults() {

    const [loading,setLoading] = useState(false);
    const [keywords, setKeywords] = useState([]);
    const [count,setCount] = useState(0);

    const handler = ()=>{
        setLoading(true);
        let words = document.getElementById("inp").value.split(" ");
        words = words.map((x)=>{
            return x.toLowerCase();
        })
        let searchWords = words.filter((word)=>{
            if(fixedArray.indexOf(word) !== -1){
                return true;
            }
            return false;
        });
        if(searchWords.length === 0){
            setCount(1);
            setLoading(false);
            setKeywords([]);
        }else if(searchWords.length > 0){
            setCount(1);
            setLoading(false);
            setKeywords(searchWords);
        }
    }

    if(loading){
        return (
            <>
                <h2> Loading... </h2>
            </>
        )
    }

    if(!loading && keywords.length === 0 && count>0){
        return (
            <>
                <h2> No COVID-19 related keywords were entered...</h2>
            </>
        )
    }

    return (
        <>
        <div>
            <input type="text" id="inp"/>
            <Button size="large" onClick={handler}> Search </Button>
        </div>
        <div className="home">
        { (!loading &&  keywords.length > 0) ? <List keywords = {keywords} /> : <></>}
        </div>
        </>
    )
}

export default SearchResults
