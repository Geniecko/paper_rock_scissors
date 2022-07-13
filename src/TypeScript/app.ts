import { toggleModal } from './modal';

const modalButton : HTMLButtonElement | null = document.querySelector('#modalButton');

const init = (): void =>  {
  modalButton && modalButton.addEventListener('click', () => toggleModal(modalButton));
}
  
init();
