document.addEventListener('DOMContentLoaded',()=>{
    const nav = document.getElementById('navbar-placeholder')
    fetch("./assets/components/navbar.html")
    .then(response => response.text())
    .then(data => nav.innerHTML = data)
    .catch(error =>{
        console.error("Navbar is not loading", error);
        nav.innerHTML = "<p>Navbar not available </p>"
    })    
})