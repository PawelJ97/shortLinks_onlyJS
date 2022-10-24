window.onload = function(){
    document.getElementById("generate-button")
        .addEventListener("click", generateLinks)

}

function generateLinks(){
    let url = document.getElementById("source-link").value
    fetch("https://api.shrtco.de/v2/shorten?url="+url)
    .then(response => response.json())
    .then(data => linksReady(data))
}

function linksReady(data){
    console.log(data)
    let result = data.result
    setLinkToDomEl("code", result.code)
    setLinkToDomEl("full-short-link", result.full_short_link)
    setLinkToDomEl("full-short-link2", result.full_short_link2)
    setLinkToDomEl("full-short-link3", result.full_short_link3)
}

function setLinkToDomEl(id, shortUrl){
    document.getElementById(id).innerHTML
        = "<a href='"+shortUrl+"'>"+shortUrl+"</a>"
}