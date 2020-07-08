import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { apiServices } from '../Server/Server';
import { useSnackbar } from 'react-simple-snackbar'
import { MovieContext } from '../Context/MoviesContext';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function SearchBar() {
    const [api, setApi] = useState("")
    const [enable, setEnable] = useState(false)
    const [openSnackbar] = useSnackbar()
    const {MovieDispatch } = useContext(MovieContext)

    const classes = useStyles();


    //for url validation
    const isUrlValid = (userInput) => {
        var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        if (res == null)
            return false;
        else
            return true;
    }

    //on change search field
    const handleOnChange = (api) => {
        setApi(api.target.value)

        if (isUrlValid(api.target.value)) {
            setEnable(true)
        } else {
            setEnable(false)
        }
    }
//get data from API
    const getData = () => {
        apiServices.GetData(api).then((data) => {
            if (data.Error) {
                openSnackbar(data.Error);
            } else {
                if (!Array.isArray(data)) {
                    let tempArray = [];
                    tempArray.push(data)
                    MovieDispatch({ type: 'SETDATA', payload: tempArray })
                } else {
                    MovieDispatch({ type: 'SETDATA', payload: data })

                }

                openSnackbar("Successfully get data!")
            }


        }).catch(err => {
            openSnackbar("Something went wrong!")
        })
    }
    return (
        <Paper component="form" className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="menu">
                <SearchIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search movies with API"
                inputProps={{ 'aria-label': 'Search movies with API' }}
                value={api}
                onChange={handleOnChange}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton disabled={!enable} onClick={() => getData()} color="primary" className={classes.iconButton} aria-label="directions">
                <DirectionsIcon />
            </IconButton>
        </Paper>
    );
}
