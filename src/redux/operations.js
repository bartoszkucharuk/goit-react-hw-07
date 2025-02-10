import axios from "axios";
import { fetchingInProgress, fetchingSuccess, fetchingError } from "./contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://67a9e21165ab088ea7e4d460.mockapi.io/";

export const fetchTasks = createAsyncThunk("contacts/fetchAll",
    async () => {
        const response = await axios.get("/contacts");
        return response.data;
    });