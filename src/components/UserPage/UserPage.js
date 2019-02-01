import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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

});

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(UserPage));
