import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InputPage extends React.Component {
  render = () => {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
         <Typography variant="h5" component="h3">
           Create a new 
          </Typography>
         <Typography component="p">
           Paper can be used to build surface or other elements for your application.
         </Typography>
       </Paper>
      </div>
    );
  };
};


// const InputPage = () => (
//   <div>
//     <Paper className={classes.root} elevation={1}>
//      <Typography variant="h5" component="h3">
//        This is a sheet of paper.
//      </Typography>
//      <Typography component="p">
//        Paper can be used to build surface or other elements for your application.
//      </Typography>
//    </Paper>
//   </div>
// );

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 12,
    padding: 12,
  },
});

export default withStyles(styles)(InputPage);
