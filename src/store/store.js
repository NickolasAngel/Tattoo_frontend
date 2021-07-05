import * as axios from "axios";


let store = {
    state: {
        masterPage: {
            master: {masterName: "sss", experience: 24, masterDesc: " fkdkfk  fldflпоавопщоапщвпоа",
            avatar: "https://im0-tub-ru.yandex.net/i?id=3375b22338bda4e6024f9eb5ca7890bd-l&n=13"}
        },

        getState() {
            return this._state
        }
    }}

export default store
// function getUser(index) {
//     let newArray = []
//     axios.get("https://kiber-ronin-tatto.herokuapp.com/api/master/1")
//
//         .then(function (response){
//             newArray.push(response.data)
//
//         })
//         .catch(function (error){
//             console.log(error)
//         });
//         return newArray[index]
// }
//
//
// console.log(getUser(0))



// {masterName: "sss", experience: 24, masterDesc: " fkdkfk  fldflпоавопщоапщвпоа",
//     avatar: "https://im0-tub-ru.yandex.net/i?id=3375b22338bda4e6024f9eb5ca7890bd-l&n=13"}
// }