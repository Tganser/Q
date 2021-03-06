import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { getAdmin } from '../../redux/admin/actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/DeleteOutlined'
import EditIcon from '@material-ui/icons/EditOutlined'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// {/* <button onClick={this.makeCall}>getAdmin</button> */}


class AdminPage extends React.Component {

makeCall = () => {
  this.props.getAdmin()
}

  render = () => {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <div className={classes.topArea}>
         <Typography variant="h5" component="h3">
           Site Administrators
          </Typography>
          <Fab aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </div>
          <div className={classes.cardsArea}>
          <Card className={classes.adminCard}>
            <CardContent>
              Jim Ellison
              <EditIcon className={classes.edit}/>
              <DeleteIcon color= "disabled" className={classes.delete}/>
            </CardContent>
          </Card>
          <Card className={classes.adminCard}>
            <CardContent>
              Alex Wenthe
              <EditIcon className={classes.edit}/>
              <DeleteIcon className={classes.delete}/>
            </CardContent>
          </Card>
          <Card className={classes.adminCard}>
            <CardContent>
              Tessa Ganser
              <EditIcon className={classes.edit}/>
              <DeleteIcon className={classes.delete}/>
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
    margin: 20,
    padding: 20,
  },
  adminCard: {
    width: 220,
    margin: 12,
    padding: 12,
  },
  edit: {
    padding: 5,
    marginLeft: 20,
  },
  delete: {
    padding: 5,
  },
  fab : {
    color: '#526c5f',
    marginLeft: 1010,
  },
  cardsArea: {
    display: 'flex',
    marginTop: 10,
  },
  topArea: {
    display: 'flex',
  }
});

const mapStateToProps = state => {
  const searchComplete = state.searchComplete
  const isSearchingAdmin = state.isSearchingAdmin

  return {
    searchComplete, isSearchingAdmin
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAdmin }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AdminPage));
