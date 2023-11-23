

export function SetToken(token) {
    sessionStorage.setItem('token', token)
}





export function GetToken() {
 return   sessionStorage.getItem('token')
}


export function RemoveToken() {
    sessionStorage.clear();
   window.location.href = "/router/"

}



export function SetEmail(email) {
    sessionStorage.setItem('email',email)
}


export function GetEmail() {
   return sessionStorage.getItem('email')
}

 


export function ManageUnAuth(code){
    console.log(code)
    if(code===401){
        console.log('didnt render')
       sessionStorage.clear()
       window.location.href="/router/login"
    }
}


