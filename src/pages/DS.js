import React from 'react'
import Grid from '@material-ui/core/Grid';

function DS({data}) {
    return (
        <div>
        <Grid container spacing={3}>
        <Grid item xs={2}>
            
        </Grid>
        <Grid item xs={8}>
            <h3> {data} </h3>
        </Grid>
        <Grid item xs={2}>
            
        </Grid>
        </Grid>
        </div>


    )
}

export default DS;
