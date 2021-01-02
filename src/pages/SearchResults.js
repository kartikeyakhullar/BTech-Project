import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import List from './List';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { blueGrey } from '@material-ui/core/colors';
import backgroundimage from '../images/bg.png';

const fixedArray = ['covid', 'coronavirus', 'symptoms', 
'social', 'distancing', 'incubation', 'comorbidity', 'pandemic', 
'community', 'spread', 'quarantine', 'isolation', 'virus', 'sars', 'epidemic', 
'herd', 'immunity', 'flattening', 'curve', 'bronchial', 'masks', 'mask', 'dry', 'cough'];

const useStyles = makeStyles((theme) => ({
    root: {
      padding:5,
      alignItems: 'center',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    grid: {
        margin: 10,
        alignItems: 'center',
        alignSelf: 'center',
    }
  }));

function SearchResults() {

    const [loading,setLoading] = useState(false);
    const [keywords, setKeywords] = useState([]);
    const [count,setCount] = useState(0);
    const [result,setResult] = useState({})
    const classes = useStyles();
    const handler = async()=>{
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
            console.log(searchWords[0]);
            const response = await fetch(`http://localhost:9200/summaries/_search?q=${searchWords[0]}`);
            const res = await response.json();
            setResult(res);
            // console.log(res);
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
        <div className={classes.root} style={{ 
                    backgroundImage: backgroundimage }}>
        <Grid container spacing={3}>
            <Grid item xs={12} className={classes.grid} style={{marginLeft : "40%"}}>
                <TextField id="inp" label="Input" variant="outlined" xs={12} />
                <Button size="large" onClick={handler}> Search </Button>
            </Grid>
            <Grid item xs={12} className={classes.grid} style={{marginLeft : "10%"}}>
                { (!loading &&  keywords.length > 0) ? <Grid item xs={12} className={classes.grid}> <List keywords = {keywords} result = {result} /> </Grid> : <></>}
            </Grid>
        </Grid>
        </div>
        </>
    )
}

export default SearchResults
