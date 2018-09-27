const backdropForm = document.querySelector('.backdrop-form');

/* close backdrop at home page */
const closeBackdrop = function (event) {
    backdropForm.style.display = 'none'
}
const closeModal = function (event) {
    backdropForm.style.display = 'none'
}
const openModal = function (event) {
    backdropForm.style.display = 'block'
}
/* End of close backdrop at home page */