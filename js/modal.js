(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[menu-modal-open]'),
    closeModalBtn: document.querySelector('[menu-modal-close]'),
    modal: document.querySelector('[menu-modal]'),
    modalLinks: document.querySelectorAll('[menu-modal] a[href^="#"]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  refs.modalLinks.forEach(link => {
    link.addEventListener('click', () => {
      refs.modal.classList.remove('is-open');
    });
  });
})();
