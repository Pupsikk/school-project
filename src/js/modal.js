
const openAndCloseModalBtn = document.querySelectorAll('.js-modal-btn');
const modalBuy = document.querySelector('.js-modal-buy');
const modalFranchise = document.querySelector('.js-modal-franchise');
const modalLocation = document.querySelector('.js-modal-location');
const modalAbout = document.querySelector('.js-modal-about');

openAndCloseModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));

function toggleModal(e) {
  document.body.classList.toggle('modal-open');

  const activeTarget = e.currentTarget.classList;

  if (activeTarget.contains('js-modal-btn-buy')) {
    return modalBuy.classList.toggle('backdrop--hidden');
  }
  if (activeTarget.contains('js-modal-btn-franchise')) {
    return modalFranchise.classList.toggle('backdrop--hidden');
  }
  if (activeTarget.contains('js-modal-btn-location')) {
    return modalLocation.classList.toggle('backdrop--hidden');
  }
  if (activeTarget.contains('js-modal-btn-about')) {
    return modalAbout.classList.toggle('backdrop--hidden');
  }
}