import axios from 'axios'
import { Loading } from 'element-ui';

const http = axios.create({
})
let loadingInstance1 ="";
http.interceptors.request.use(
    (request) => {
        // loadingInstance1 = Loading.service({ fullscreen: true });
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
)

http.interceptors.response.use(
    (response) => {
    //    loadingInstance1.close();
        return response.data;
    },
    (error) =>{
        // loadingInstance1.close();
        return Promise.reject(error);
    }
)
export default http