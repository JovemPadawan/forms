document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();

    const url = window.location.href;
    //const newLocation = url.slice(0, url.length - 11);

    window.location.href = `${url}pageend.html`

});