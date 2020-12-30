import React from 'react'
import LongText from './LongText';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      fontSize:10,
    },
    Grid: {
        padding: 5,
        margin: 5,
    }
  }));

function List({keywords,result}) {
    const final = result["hits"].hits;
    console.log(final);
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Grid item xs={12}>
            <h5> Keywords searched : </h5>
            {keywords.map((word)=>{
                return  word 
            })}
            </Grid>
            <Grid item xs={12}>
                {
                    final.map((element,index)=>{
                        let content= element._source.abstract;
                        return (
                            (element._source.abstract.length > 0) ?
                            <Grid container spacing={2}>
                            <div key={index}>
                                <Paper className={classes.paper}><LongText content = {content}/></Paper>
                                <Paper className={classes.paper}><a href={element._source.url} >{element._source.url}</a></Paper>
                                <hr />
                            </div></Grid> : <></>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default List
