// import { Box, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { apiClient } from '../../../shared/services/api-client'

const Question = () => {
    const [data, setdata] = useState(null);
    const getQuestion = async() =>{
        console.log('URL = ', process.env.REACT_APP_QUESTION_URL);
        const response = await apiClient.get(process.env.REACT_APP_QUESTION_URL);
            console.log('Response is ', response);
            setdata(response);
    }
    
    return(
        <div>
            <button onClick={getQuestion}>click me</button>
            {data==null?<h1>'Loading...'</h1>:<h2>{data.question}</h2>}
        </div>
    )
}

export default Question