const toggleMenu = (navId, menuId, toggleB) => {
    let nav = navId,
        menu = menuId,
        toggleButton = toggleB

    function showNav() {
        nav.classList.toggle('is-active')
    }

    if (nav) {
        if(toggleButton) {
            toggleButton.addEventListener('click', showNav);
        } else {
            console.log(`Not found ${toggleButton}`)
        }
    } else {
        console.error(`Not found ${navId}`)
    }
}

const toggleB = document.getElementById('navId-toggle')
const menuId = document.getElementById('menuId')
const navId = document.getElementById('navId')

toggleMenu(navId,menuId,toggleB)
