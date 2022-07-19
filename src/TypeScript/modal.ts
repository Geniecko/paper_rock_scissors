const modalButton : HTMLButtonElement | null = document.querySelector('#modalButton');

const closeModal = (modal: HTMLElement): void => {
  modal.classList.add('hidden');
};

const showModal = (modal: HTMLElement): void => {
  modal.classList.remove('hidden');
};

const toggleModal = (element: HTMLElement): void => {
  const target: string | undefined = element.dataset.target;
  const modal = <HTMLElement>document.getElementById(`${target}`);

  const closeButton = <HTMLElement>document.getElementById('closeModalButton');

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
