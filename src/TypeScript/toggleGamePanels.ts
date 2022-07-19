import { playAgain } from "./playAgain";
import { setListeningToOptions, removeListeningToOptions } from "./toggleListeningToOptios";
import { pathToAssets } from "./helpers";
import { state } from "./state";

export const showResultPanel = (winner: string): void => {
  const resultPanel = <HTMLElement>document.querySelector('.results-panel');
  const playAgainButton = <HTMLButtonElement>document.getElementById('playAgainButton');
  const result = <HTMLElement>document.getElementById('result');
  const aiSelectionWrapper = <HTMLElement>document.getElementById('aiSelectionWrapper'); 
  const aiSelection = <HTMLElement>document.getElementById('aiSelection'); 
  const playerSelectionWrapper = <HTMLElement>document.getElementById('playerSelectionWrapper'); 
  const playerSelection = <HTMLElement>document.getElementById('playerSelection'); 

  resultPanel?.classList.remove('hidden');
  if(result && aiSelection && playerSelection && playerSelectionWrapper && aiSelectionWrapper){
    result.textContent = winner;
    aiSelection.setAttribute('src', `${pathToAssets}icon-${state.aiChoice}.svg`);
    aiSelection.setAttribute('alt', state.aiChoice);
    aiSelectionWrapper.className = '';
    aiSelectionWrapper.className = `option option--${state.aiChoice}`;
    playerSelection.setAttribute('src', `${pathToAssets}icon-${state.playerChoice}.svg`);
    playerSelection.setAttribute('alt', state.playerChoice);
    playerSelectionWrapper.className = '';
    playerSelectionWrapper.className = `option option--${state.playerChoice}`;
  }
  playAgainButton?.addEventListener('click', playAgain)  
}

export const hideResultPanel = (): void => {
  const resultPanel = <HTMLElement>document.querySelector('.results-panel');
  const playAgainButton = <HTMLElement>document.getElementById('playAgainButton');

  playAgainButton?.removeEventListener('click', playAgain)
  resultPanel?.classList.add('hidden');
}

export const showGamePanel = ():void => {
  const selectionPanel = <HTMLElement>document.querySelector('.selection-panel');

  if(selectionPanel){
    selectionPanel.classList.remove('hidden');
  }

  setListeningToOptions();
}

export const hideGamePanel = ():void => {
  const selectionPanel = <HTMLElement>document.querySelector('.selection-panel');

  if(selectionPanel){
    selectionPanel.classList.add('hidden');
  }

  removeListeningToOptions();
}