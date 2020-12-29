import React from 'react'
import Grid from '@material-ui/core/Grid';
import { FiDatabase } from 'react-icons/fi';

function Anchor({source}) {
    return (
        <div>
            <Grid container spacing={3}>
        <Grid item xs={5}>
            
        </Grid>
        <Grid item xs={2}>
            <h2> <a href = {source}> Dataset <FiDatabase /> </a> </h2>
        </Grid>
        <Grid item xs={5}>
            
        </Grid>
        </Grid>
        </div>
    )
}

export default Anchor
