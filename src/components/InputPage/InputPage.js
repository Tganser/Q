import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import InputAdornment from '@material-ui/core/InputAdornment';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InputPage extends React.Component {
  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <Paper className={classes.root} elevation={1}>
         <Typography variant="h5" component="h3">
           Create a new client organization
          </Typography>
         <Typography component="p">
           Other description here about submitting this data
          </Typography>
          {/* <div className={classes.subArea}> */}
          {/* <div className={classes.inputArea}> */}
          <TextField
             id="standard-with-placeholder"
             label="Full Name"
             placeholder=""
             className={classes.textField}
             margin="normal"
          />
          <TextField
             id="standard-with-placeholder"
             label="Short Name"
             placeholder=""
             className={classes.textField}
             margin="normal"
          />
          <FormControlLabel
              control={
                <Checkbox className={classes.checkbox} value="Confirmed" />
              }
              label="Confirmed"
            />
            <FormControlLabel
                control={
                  <Checkbox  className={classes.checkbox} value="Confirmed" />
                }
                label="Potential"
              />
            {/* </div> */}
              {/* <Card className={classes.contactCard}> */}
              <Button type="submit" variant="contained" className={classes.button}>Save</Button>

              <Divider className={classes.divider}/>
              <Typography variant="h7">Create new client contact: </Typography>
              <TextField
                 id="standard-with-placeholder"
                 label="Name"
                 placeholder=""
                 className={classes.textField}
                 margin="normal"
              />
              <TextField
                 id="standard-with-placeholder"
                 label="Address"
                 placeholder=""
                 className={classes.textField}
                 margin="normal"
                 width="20%"
              />
              <TextField
                 id="standard-with-placeholder"
                 label="Phone"
                 placeholder=""
                 className={classes.textField}
                 margin="normal"
                 width="20%"
              />
              <TextField
                 id="standard-with-placeholder"
                 label="Email"
                 placeholder=""
                 className={classes.textField}
                 margin="normal"
                 width="20%"
              />
              <Button type="submit" variant="contained"className={classes.button}>Add</Button>
            {/* </Card> */}
          {/* </div> */}
       </Paper>

       <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Create a new job
         </Typography>
        <Typography component="p">
          Other description here about submitting this data
         </Typography>
         <TextField
            id="standard-with-placeholder"
            label="Job Name"
            placeholder=""
            className={classes.textField}
            margin="normal"
         />
        <TextField
          select
          label="Client Organization"
          className={classes.textField}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        >
            <MenuItem>
              Client 1
            </MenuItem>
            <MenuItem>
              Client 2
            </MenuItem>
          ))}
        </TextField>
         <TextField
           select
           label="Client Contact"
           className={classes.textField}
           InputProps={{
             startAdornment: <InputAdornment position="start"></InputAdornment>,
           }}
         >
             <MenuItem>
               Contact Person 1
             </MenuItem>
             <MenuItem>
               Contact Person 2
             </MenuItem>
           ))}
         </TextField>
         <TextField
            id="standard-with-placeholder"
            label="Site"
            placeholder=""
            className={classes.textField}
            margin="normal"
         />
         <TextField
            id="standard-with-placeholder"
            label="Unit"
            placeholder=""
            className={classes.textField}
            margin="normal"
         />
         <TextField
            id="standard-with-placeholder"
            label="Acres"
            placeholder=""
            className={classes.textField}
            margin="normal"
         />
         <TextField
            id="standard-with-placeholder"
            label="Estimated Hours"
            placeholder=""
            className={classes.textField}
            margin="normal"
         />
         <TextField
            id="standard-with-placeholder"
            label="Type of Work"
            placeholder=""
            className={classes.textField}
            margin="normal"
         />
         <TextField
            id="standard-with-placeholder"
            label="Activity"
            placeholder=""
            className={classes.textField}
            margin="normal"
         />
         <TextField
            id="standard-with-placeholder"
            label="Target Species"
            placeholder=""
            className={classes.textField}
            margin="normal"
         />
         <TextField
            id="standard-with-placeholder"
            label="Scope Description"
            placeholder=""
            className={classes.textField}
            margin="normal"
         />
         <TextField
            id="standard-with-placeholder"
            label="Contract Type"
            placeholder=""
            className={classes.textField}
            margin="normal"
         />
         <TextField
            id="standard-with-placeholder"
            label="Contract Amount"
            placeholder=""
            className={classes.textField}
            margin="normal"
         />
         <TextField
            id="standard-with-placeholder"
            label="Additional Notes"
            placeholder=""
            className={classes.textField}
            margin="normal"
         />
         <Button type="submit" variant="contained" className={classes.button}>Save</Button>

      </Paper>

      <Paper className={classes.root} elevation={1}>
       <Typography variant="h5" component="h3">
         Create a new site
        </Typography>
       <Typography component="p">
         Other description here about submitting this data
        </Typography>
        <TextField
           id="standard-with-placeholder"
           label="Site Name"
           placeholder=""
           className={classes.textField}
           margin="normal"
        />
        <TextField
          multiline
          rowsMax="4"
           id="standard-with-placeholder"
           label="Owner Organization"
           placeholder=""
           className={classes.textField}
           margin="normal"
        />
        <TextField
           id="standard-with-placeholder"
           label="Owner Contact"
           placeholder=""
           className={classes.textField}
           margin="normal"
        />
        <TextField
           id="standard-with-placeholder"
           label="Street Address"
           placeholder=""
           className={classes.textField}
           margin="normal"
        />
        <TextField
           id="standard-with-placeholder"
           label="Township, range, section"
           placeholder=""
           className={classes.textField}
           margin="normal"
        />
        <TextField
           id="standard-with-placeholder"
           label="link to location map"
           placeholder=""
           className={classes.textField}
           margin="normal"
        />

        <Button type="submit" variant="contained" className={classes.button}>Save</Button>

     </Paper>

      <Paper className={classes.root} elevation={1}>
       <Typography variant="h5" component="h3">
         Create a new management unit
        
        </Typography>
       <Typography component="p">
         Other description here about submitting this data
        </Typography>
        <TextField
           id="standard-with-placeholder"
           label="Unit Designation"
           placeholder=""
           className={classes.textField}
           margin="normal"
        />
        <TextField
          multiline
          rowsMax="4"
           id="standard-with-placeholder"
           label="Description"
           placeholder=""
           className={classes.textField}
           margin="normal"
        />
        <TextField
           id="standard-with-placeholder"
           label="Link to Unit Map"
           placeholder=""
           className={classes.textField}
           margin="normal"
        />
        <TextField
           id="standard-with-placeholder"
           label="Acres"
           placeholder=""
           className={classes.textField}
           margin="normal"
        />
        <TextField
           id="standard-with-placeholder"
           label="Burn Perimeter"
           placeholder=""
           className={classes.textField}
           margin="normal"
        />
        <TextField
           id="standard-with-placeholder"
           label="Firebreak"
           placeholder=""
           className={classes.textField}
           margin="normal"
        />
        <TextField
           id="standard-with-placeholder"
           label="Fenceline"
           placeholder=""
           className={classes.textField}
           margin="normal"
        />
        <Button type="submit" variant="contained" className={classes.button}>Save</Button>

     </Paper>

     <Paper className={classes.root} elevation={1}>
      <Typography variant="h5" component="h3">
        Create a new project
       </Typography>
      <Typography component="p">
        Other description here about submitting this data
       </Typography>
       <TextField
          id="standard-with-placeholder"
          label="Name"
          placeholder=""
          className={classes.textField}
          margin="normal"
       />
       <Button type="submit" variant="contained" className={classes.button}>Save</Button>

    </Paper>

    <Paper className={classes.root} elevation={1}>
     <Typography variant="h5" component="h3">
       Create a new task
      </Typography>
     <Typography component="p">
       Other description here about submitting this data
      </Typography>
      <TextField
         id="standard-with-placeholder"
         label="Task Name"
         placeholder=""
         className={classes.textField}
         margin="normal"
      />
      <TextField
         id="standard-with-placeholder"
         label="Activity"
         placeholder=""
         className={classes.textField}
         margin="normal"
      />
      <TextField
         id="standard-with-placeholder"
         label="Date"
         placeholder=""
         className={classes.textField}
         margin="normal"
      />
      <Button type="submit" variant="contained" className={classes.button}>Save</Button>

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
    padding: 12,
  },
  textField: {
   marginLeft: theme.spacing.unit,
   marginRight: theme.spacing.unit,
   width: 200,
 },
  checkbox :{
    align: 'right',
  },
  button: {
    //backgroundColor: '#b0bcbc',
    width: '100px',
  },
  contactCard : {
    width: "600px",
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
  },
  subArea: {
  },
  formControl: {
    minWidth: 200,
  },
  divider: {
    margin: theme.spacing.unit * 2,
  },
  background :{
    backgroundColor: '#ededed',
    padding: 0,
    margin: 0,
  }
});

export default withStyles(styles)(InputPage);
