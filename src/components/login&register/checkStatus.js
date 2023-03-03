import axios from "axios";

export async function checkStatusSession(){
    let status = false
    await axios.get("http://localhost:8080/users/session")
    .then((response) => {
        const session_date = Number(response.data.cookie.expires.split("T")[0].split("-")[2])
        const today_date = new Date().getUTCDate()
        if (session_date === today_date || session_date > today_date) {
            status = true
        } else {
            localStorage.clear()
        }
    })
    return status
}