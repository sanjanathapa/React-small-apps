//creatinh thunk
import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUser = createAsyncThunk('add/users', async() =>{
    const response = await axios.post('http://localhost:3005/users', {
        name: faker.name.fullName()
    });
    console.log("this is the response data", response)
    return response.data
});

export {addUser}

//creating a RTK query API
//1. identify a grp of related reqsts that your app needs to make.
//2. make a new file that will create the api.
//3. the api needs to store a ton of state related to data, requests status, errors. Add a 'reducerPath'.
//4. the api needs to know how and where to send requests. Add a 'baseQuery'.
//5. add 'endpoints' one for each kind of request you want to 