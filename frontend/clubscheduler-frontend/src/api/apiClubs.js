import axios from 'axios';
import { resolve, getAccessToken } from './apiUtils.js';

const BACKEND_DOMAIN = "http://localhost:8000"

export async function createClub(clubData) {
    const accessToken = getAccessToken();
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            'content-type': 'multipart/form-data'    
        }
    }
    return await resolve(axios.post(BACKEND_DOMAIN + `/api/v1/clubs/`, clubData, config).then(res => res.data));
}