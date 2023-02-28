const NAVBAR = document.getElementById("navbar");
const NAVTOGGLE = document.getElementById("navToggle")
const NAVITEMS = document.querySelectorAll(".navItem");
const navItemsArr= Array.from(NAVITEMS);
const TOPNAV = document.getElementById('topNav');

// Navbar toggler
const toggle = () => {
    NAVBAR.classList.toggle('active');
}

NAVTOGGLE.addEventListener("click" ,() => {
    toggle();
})


// Closing the navbar every time a link is clicked
navItemsArr.forEach(e => {
    e.addEventListener('click', () => {
        toggle()
    })
});

//  Displaying hamburger menu on scroll on big devices and hide top nav
const hamburgerDisplay = () =>{
    let scrollPoz = 100;
    let windowY = window.scrollY
    if(screen.width > 1000){
        if (windowY > scrollPoz){
            NAVTOGGLE.classList.add('active')
            TOPNAV.classList.add('hidden')
        }
        else{
            NAVTOGGLE.classList.remove('active')
            NAVBAR.classList.remove('active')
            TOPNAV.classList.remove('hidden')
        }
    }
    else{
        return
    }
    }

    // check device width on load and display hamburger menu if on smaller devices

    const checkWidth = () => {
        if(screen.width < 1000){
            NAVTOGGLE.classList.add('active')
        }
        else{
            window.addEventListener('scroll', () =>{
                hamburgerDisplay()
            })
        }
    }

    document.onload = checkWidth();


//open images on click
const IMAGES_SOURCE = document.querySelectorAll(".cardImg");
const IMAGESArr = Array.from(IMAGES_SOURCE);
const MODAL = document.getElementById('modal');
const OVERLAY = document.getElementById('overlay');

OVERLAY.addEventListener('click', ()=>{
    OVERLAY.classList.toggle('active');
    MODAL.classList.toggle('active');
});

const modalOpen = (src) =>{
    MODAL.classList.toggle('active');
    OVERLAY.classList.toggle('active');
    MODAL.innerHTML = `<img class="modalImg" src="${src}">`
};
IMAGESArr.forEach(e => {
    e.addEventListener('click', ()=>{
        modalOpen(e.getAttribute('src'))
    })
});
