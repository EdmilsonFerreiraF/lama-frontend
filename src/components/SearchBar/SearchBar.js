import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "../../hooks/useForm"
import { TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { search } from '../../services/user';
import LoggedContext from '../../context/LoggedContex';
import { SearchIconContainer, SearchBarContainer } from './styles';

const SearchBar = () => {
    const history = useHistory()
    const loggedContext = useContext(LoggedContext)
    const {form, onChange} = useForm({search: ""})

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        search(form, history, loggedContext.setLogged)
    }

    return(
        <SearchBarContainer>
            <SearchIconContainer>
                <SearchIcon
                onClick={handleSubmission}/>
            </SearchIconContainer>
            
            <TextField  
            label="Search"
            variant="filled"                
            type="search"
            name="search"
            value={form.search}
            onChange={handleInputChange}
            />
        </SearchBarContainer>
    )
}

export default SearchBar;