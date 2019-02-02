import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/EditOutlined';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class QueryPage extends React.Component {
  render = () => {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
         <Typography variant="h5" component="h3">
           Search the Database
          </Typography>
         <Typography component="p">
           Other info/description about searching
         </Typography>
         <TextField
                  id="standard-name"
                  label="Search"
                  margin="normal"
                  fullWidth
        />
        <CloseIcon  />
    <TextField
      id="date"
      label=""
      type="date"
      defaultValue="2019-02-02"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
    <Button type="submit" variant="contained" className={classes.button}>Search</Button>


       </Paper>
       <Paper className={classes.root} elevation={1}>
      <div className={classes.cardsArea}>
         <Card className={classes.adminCard}>
           <CardContent>
            <Typography variant="h3">Client 1</Typography>
            <Divider className={classes.divider}/>
            <Typography variant="h5">Contact Name: John Smith</Typography>
            <Typography variant="h5">Job: Job XYZ</Typography>
            <Typography variant="p">Site: West River</Typography>
            <Typography variant="p">Site: East Bluff</Typography>
            <Typography variant="p">Management Units: 5</Typography>
            <Typography variant="p">Task: Controlled Burn</Typography>
            <EditIcon className={classes.edit}/>
             <DeleteIcon className={classes.delete}/>
           </CardContent>
         </Card>
         <Card className={classes.adminCard}>
           <CardContent>
             <Typography variant="h3">Client 2</Typography>
             <Divider className={classes.divider}/>
             <Typography variant="h5">Contact Name: Jacob Smith</Typography>
             <Typography variant="h5">Job: Job XYZ</Typography>
             <Typography variant="p">Site: West River</Typography>
             <Typography variant="p">Site: East Bluff</Typography>
             <Typography variant="p">Management Units: 3</Typography>
             <Typography variant="p">Task: Controlled Burn</Typography>
             <EditIcon className={classes.edit}/>
             <DeleteIcon className={classes.delete}/>
           </CardContent>
         </Card>
         <Card className={classes.adminCard}>
           <CardContent>
             <Typography variant="h3">Client 3</Typography>
             <Divider className={classes.divider}/>
             <Typography variant="h5">Contact Name: Jenny Smith</Typography>
             <Typography variant="h5">Job: Job XYZ</Typography>
             <Typography variant="p">Site: West River</Typography>
             <Typography variant="p">Site: East Bluff</Typography>
             <Typography variant="p">Management Units: 7</Typography>
             <Typography variant="p">Task: Controlled Burn</Typography>
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
    margin: 12,
    padding: 12,
  },
  cardsArea: {
    display: 'flex',
    marginTop: 10,
  },
  topArea: {
    display: 'flex',
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
  divider: {
    margin: theme.spacing.unit,
  },
  button : {
    margin: 2,
  }
});

export default withStyles(styles)(QueryPage);
