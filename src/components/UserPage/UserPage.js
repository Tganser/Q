import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

class UserPage extends React.Component {
  render = () => {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
         <Typography variant="h5" component="h3">
           Welcome, {this.props.user.username}.
         </Typography>
         <Typography component="p">
           Your ID is: {this.props.user.id}
         </Typography>
         <LogOutButton className="log-in" />
        <Typography  variant="h3" className={classes.title}> Upcoming Jobs </Typography>
        <div className={classes.cardsArea}>
         <Card className={classes.adminCard}>
           <CardContent>
            <Typography variant="h3">Client 1</Typography>
            <Typography variant="h5">Contact Name: John Smith</Typography>
            <Typography variant="h5">Job: Job XYZ</Typography>
            <Typography variant="p">Site: West River</Typography>
            <Typography variant="p">Site: East Bluff</Typography>
            <Typography variant="p">Management Units: 5</Typography>
            <Typography variant="p">Task: Controlled Burn</Typography>
            <Typography variant="p">Date: February 1, 2019</Typography>
           </CardContent>
         </Card>
         <Card className={classes.adminCard}>
           <CardContent>
             <Typography variant="h3">Client 2</Typography>
             <Typography variant="h5">Contact Name: Jacob Smith</Typography>
             <Typography variant="h5">Job: Job XYZ</Typography>
             <Typography variant="p">Site: West River</Typography>
             <Typography variant="p">Site: East Bluff</Typography>
             <Typography variant="p">Management Units: 3</Typography>
             <Typography variant="p">Task: Controlled Burn</Typography>
             <Typography variant="p">Date: February 1, 2019</Typography>
           </CardContent>
         </Card>
         <Card className={classes.adminCard}>
           <CardContent>
             <Typography variant="h3">Client 3</Typography>
             <Typography variant="h5">Contact Name: Jenny Smith</Typography>
             <Typography variant="h5">Job: Job XYZ</Typography>
             <Typography variant="p">Site: West River</Typography>
             <Typography variant="p">Site: East Bluff</Typography>
             <Typography variant="p">Management Units: 7</Typography>
             <Typography variant="p">Task: Controlled Burn</Typography>
             <Typography variant="p">Date: February 1, 2019</Typography>
           </CardContent>
         </Card>
       </div>
      </Paper>
      </div>
    );
  };
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 50,
    padding: 50,
  },
  cardsArea: {
    display: 'flex',
    marginTop: 10,
  },
  topArea: {
    display: 'flex',
  },
  adminCard: {
    margin: 12,
    padding: 12,
  },
  title :{
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  }

});

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(UserPage));
