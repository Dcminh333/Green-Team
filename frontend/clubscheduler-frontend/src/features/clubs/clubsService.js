import axios from "axios"

// REPLACE WITH ENV VARIABLE
const BACKEND_DOMAIN = "http://localhost:8000"

const FETCH_ALL_URL = `${BACKEND_DOMAIN}/api/v1/clubs/`


const fetchAllClubs = async (accessToken) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
    const response = await axios.get(FETCH_ALL_URL, config)

    return response.data
}


const clubsService = {fetchAllClubs}

export default clubsService
