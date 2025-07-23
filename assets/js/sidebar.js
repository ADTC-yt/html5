document.addEventListener('DOMContentLoaded',()=>{
    const nav = document.getElementById('sidebar-placeholder')
    fetch("./assets/components/sidebar.html")
    .then(response => response.text())
    .then(data => nav.innerHTML = data)
    .catch(error =>{
        console.error("sidebar is not loading", error);
        nav.innerHTML = "<p>sidebar not available </p>"
    })    
})