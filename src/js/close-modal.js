const modalBuy = document.querySelector('.js-modal-buy');
const modalFranchise = document.querySelector('.js-modal-franchise');
const modalLocation = document.querySelector('.js-modal-location');
const modalAbout = document.querySelector('.js-modal-about');

document.addEventListener('keydown', onModalClose);

function onModalClose(e) {
    if (e.keyCode === 27 && document.body.classList.contains('modal-open')) {
        document.body.classList.remove('modal-open');
        modalBuy.classList.add('backdrop--hidden');
        modalFranchise.classList.add('backdrop--hidden');
        modalLocation.classList.add('backdrop--hidden');
        modalAbout.classList.add('backdrop--hidden');
        document.querySelector('.video-setup').pause();
  }
};
