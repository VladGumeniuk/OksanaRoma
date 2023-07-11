const menu = document.querySelector('.header__list');

menu.addEventListener('click', animation)

function animation(event) {
    const click = event.target

    document.querySelectorAll('.section').forEach(function (item) {
        if (item.dataset.id === click.dataset.id) {
            item.classList.add('animation')
        }
        setTimeout(function () {
            item.classList.remove('animation')
        }, 2000);
    });
}

// ===========================================================

// document.querySelectorAll('.price').forEach((priceId) => {

//     priceId.addEventListener('click', price)

//     function price(event) {
//         const click = event.target
//         const id = click.dataset.id
//         console.log(id);
//     }
// })