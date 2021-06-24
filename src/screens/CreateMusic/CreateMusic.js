import React, { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import FormData from 'form-data';
import DatePicker from "react-datepicker";

import { createMusic } from "../../services/music"
import { useForm } from "../../hooks/useForm"
import { useProtectPage } from '../../hooks/useProtectPage';
import LoggedContext from '../../context/LoggedContex';

import { FormContainer, CreateMusicContainer, TitleContainer, SubtitleContainer, ButtonContainer, RegisterContainer, InputLabelContainer } from './styles';
import "react-datepicker/dist/react-datepicker.css";

const CreateMusic = () => {
    useProtectPage();

    const history = useHistory()
    const loggedContext = useContext(LoggedContext)
    const filesElement = useRef(null);
    
    const formData = new FormData();

    const { form, onChange } = useForm({ title: "", file: "", date: new Date(), genre: "", album: "" })

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = async (event) => {
        event.preventDefault()

        for (let name in form) {
            formData.append(name, form[name]);
        }

        for (const file of filesElement.current.files) {
            formData.append('file', file);
        }

        createMusic(formData, history, loggedContext.setLogged)
    }
    
    const handleDateInput = (date) => {
        onChange(date, "date")
    }
    
    return (
        <CreateMusicContainer>
            <TitleContainer variant="h3" component="h1">
                Create music
            </TitleContainer>

            <SubtitleContainer variant="h4" component="h2">
                Create a new song
            </SubtitleContainer>

            <FormContainer onSubmit={handleSubmission} >
                <InputLabelContainer>Title</InputLabelContainer>
                <TextField 
                    label="Title"
                    variant="filled"
                    name="title"
                    value={form.title}
                    onChange={handleInputChange}
                />

                <InputLabelContainer>Author</InputLabelContainer>
                <TextField 
                    label="Me"
                    variant="filled"
                    name="author"
                    disabled
                />

                <InputLabelContainer>Date</InputLabelContainer>
                <DatePicker selected={form.date} onChange={(date) => handleDateInput(date)} />

                <InputLabelContainer>File</InputLabelContainer>
                <input type="file" name="file" ref={filesElement} />

                <InputLabelContainer>Genre</InputLabelContainer>
                <TextField  
                    label="Genre"
                    variant="filled"                
                    type="genre"
                    name="genre"
                    value={form.genre}
                    onChange={handleInputChange}
                />

                <InputLabelContainer>Album</InputLabelContainer>
                <TextField  
                    label="Album"
                    variant="filled"                
                    type="album"
                    name="album"
                    value={form.album}
                    onChange={handleInputChange}
                />
                
                <RegisterContainer>
                    <ButtonContainer
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Create
                    </ButtonContainer>
                </RegisterContainer>
            </FormContainer>
        </CreateMusicContainer>
    )
}

export default CreateMusic;