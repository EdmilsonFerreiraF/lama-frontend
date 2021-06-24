import React from 'react';
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import { useForm } from "../../hooks/useForm"
import { goToSearch } from '../../routes/coordinator';

import { SearchIconContainer, SearchBarContainer } from './styles';

const SearchBar = () => {
    const history = useHistory()
    const {form, onChange} = useForm({ search: "" })

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        goToSearch(history, form.search)
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