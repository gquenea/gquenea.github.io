const username = document.querySelector("#username")
const password = document.querySelector("#password")
const send = document.querySelector("#send")
const content = document.querySelector(".content")

send.addEventListener("click", ()=>{getApi(username.value,password.value)})

function getApi(user, pass){
    let url ="https://nameless-dusk-67983.herokuapp.com/api/login_check";

    let corpsDeRequete = {username:user, password:pass}
    let requete = {method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(corpsDeRequete)}

    fetch(url, requete)
        .then(reponse=>reponse.json())
        .then(reponseDeserialisee=>{getData(reponseDeserialisee.token)})
}

function getData(token) {
    let url = "https://nameless-dusk-67983.herokuapp.com/api/truc";

    let requete = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    }
    fetch(url, requete)
        .then(reponse=>reponse.json())
        .then(leMessage=>{content.innerHTML = leMessage})
}