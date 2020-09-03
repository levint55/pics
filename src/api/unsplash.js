import axios from 'axios';

//configure api dipisah
export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: "Client-ID 6IQPiTOTMSblF0pxGvfPiuIxxuGuDvAKI_bIWQSt9zw",
  },
});