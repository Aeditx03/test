let homeBtn = document.querySelector(".home-btn")
let abtBtn = document.querySelector(".about-btn")
let dldBtn_outer = document.querySelector(".downloadBtn")
let file_name = document.querySelector(".file-name")
let about_nav = document.querySelector(".about-nav")
// adding under in home btn at first 
homeBtn.classList.add('active');



// when clicking about
abtBtn.addEventListener("click", () => {
    dldBtn_outer.style.display = "none";
    file_name.style.display = "none";
    about_nav.style.display = "block"

})
// when clicking home
homeBtn.addEventListener("click", () => {
    dldBtn_outer.style.display = "flex";
    file_name.style.display = "block";
    window.location.href = "#main";
    about_nav.style.display = "none"

})


// btn animations 
let links = document.querySelectorAll('.links a')
let dldBtn = document.querySelectorAll('.downloadBtn button')
console.log(links);
let timer = 0
links.forEach((i) => {
    i.style.animation = `linksBtnAn 2s ease ${timer}s infinite`
    timer += 0.3
})
dldBtn.forEach((i) => {
    i.style.animation = `linksBtnAn 2s ease ${timer}s infinite`
    timer += 0.3
})




// ################################

function toggleWidth(element) {
    // Remove 'active' class from all links
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    element.classList.add('active');
}
function toggleWidthnav(element) {
    // Remove 'active' class from all links
    var links = document.querySelectorAll('.nryt a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    element.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    let wlcm = document.querySelector(".wlcm")
    wlcm.classList.add('active');
    console.log(sec1);
}