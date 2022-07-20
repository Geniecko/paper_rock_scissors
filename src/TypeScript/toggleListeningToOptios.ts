import { startGame } from "./startGame";

export const setListeningToOptions = ()=> {
  const selectionOptions = document.querySelectorAll<HTMLButtonElement>(
    '.selection-panel__option'
  );

  const arraySelectionOptions: HTMLButtonElement[] =
    Array.from(selectionOptions);

  arraySelectionOptions.forEach((option) => {
    option.addEventListener('click', startGame);
  });
};

export const removeListeningToOptions = () => {
  const selectionOptions = document.querySelectorAll<HTMLButtonElement>(
    '.selection-panel__option'
  );

  const arraySelectionOptions: HTMLButtonElement[] =
    Array.from(selectionOptions);

  arraySelectionOptions.forEach((option) => {
    option.removeEventListener('click', startGame);
  });
};