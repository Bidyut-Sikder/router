import axios from "axios";
import { GetToken, ManageUnAuth, SetEmail, SetToken } from "../utility/TokenHelper";


const BASEURL = "https://cart-api.teamrabbil.com/api"





export async function UserLoginRequest(requestBody) {
    try {
        console.log(requestBody)
        let response = await axios.post(`${BASEURL}/user-login`, requestBody)
        SetEmail(requestBody['UserEmail'])
        return response.data['msg']
    } catch (error) {
        return false;
    }
}




export async function OTPVeryfyRequest(requestBody) {
    try {
        let response = await axios.post(`${BASEURL}/verify-login`, requestBody)
        console.log(response)
        if (response.data['msg'] === 'success') {
            SetToken(response.data['data'])
        }
        return response.data['msg']
    } catch (error) {
        return false;
    }
}
export async function ProductListRequest() {
    try {
        let response = await axios.get(`${BASEURL}/product-list`)
        return response.data['data']
    } catch (error) {
        return [];
    }
}


let config = {
    headers: {
        token: GetToken()
    }
}


export async function CartListRequest() {
    try {
        let response = await axios.get(`${BASEURL}/cart-list`, config)
        return response.data['data']
    } catch (error) {
        ManageUnAuth(error.response.status)

    }
}
export async function AddCartRequest(id, token) {
    console.log(config)
    try {
        let response = await axios.get(`${BASEURL}/create-cart/${id}`, {
            headers: {
                token: token
            }
        })
        console.log(response)
        return response.data['msg']
    } catch (error) {
        ManageUnAuth(error.response.status)

    }
}
export async function RemoveCartRequest(id) {
    try {
        let response = await axios.get(`${BASEURL}/remove-cart/${id}`, config)
        console.log(response)
        return response.data['msg']
    } catch (error) {
        ManageUnAuth(error.response.status)

    }
}




















