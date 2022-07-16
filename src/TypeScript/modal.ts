const modalButton : HTMLButtonElement | null = document.querySelector('#modalButton');

const closeModal = (modal: HTMLElement): void => {
  modal.classList.add('hidden');
  // document.body.classList.remove('disable-scroll');
};

const showModal = (modal: HTMLElement): void => {
  modal.classList.remove('hidden');
  // document.body.classList.add('disable-scroll');
};

const toggleModal = (element: HTMLElement): void => {
  const target: string | undefined = element.dataset.target;
  const modal: HTMLElement | null = document.getElementById(`${target}`);

  const closeButton: HTMLElement | null =
    document.getElementById('closeModalButton');

  if (target && modal) {
    if (modal.classList.contains('hidden')) {
      showModal(modal);
      closeButton &&
        closeButton.addEventListener('click', () => closeModal(modal));
    } else if (!modal.classList.contains('hidden')) {
      closeModal(modal);
      closeButton &&
        closeButton.removeEventListener('click', () => closeModal(modal));
    }
  }
};

modalButton && modalButton.addEventListener('click', () => toggleModal(modalButton));
