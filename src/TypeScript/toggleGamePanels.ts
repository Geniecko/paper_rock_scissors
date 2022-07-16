import { playAgain } from "./playAgain";
import { setListeningToOptions, removeListeningToOptions } from "./toggleListeningToOptios";
import { pathToAssets } from "./helpers";
import { state } from "./state";

export const showResultPanel = (winner: string): void => {
  const resultPanel: HTMLElement | null = document.querySelector('.results-panel');
  const playAgainButton: HTMLElement | null = document.getElementById('playAgainButton');
  const result: HTMLElement | null = document.getElementById('result');
  const aiSelectionWrapper: HTMLElement | null = document.getElementById('aiSelectionWrapper'); 
  const aiSelection:  HTMLElement | null = document.getElementById('aiSelection'); 
  const playerSelectionWrapper: HTMLElement | null = document.getElementById('playerSelectionWrapper'); 
  const playerSelection:  HTMLElement | null = document.getElementById('playerSelection'); 

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
  const resultPanel: HTMLElement | null = document.querySelector('.results-panel');
  const playAgainButton: HTMLElement | null = document.getElementById('playAgainButton');

  playAgainButton?.removeEventListener('click', playAgain)
  resultPanel?.classList.add('hidden');
}

export const showGamePanel = ():void => {
  const selectionPanel: HTMLElement | null = document.querySelector('.selection-panel');

  if(selectionPanel){
    selectionPanel.classList.remove('hidden');
  }

  setListeningToOptions();
}

export const hideGamePanel = ():void => {
  const selectionPanel: HTMLElement | null = document.querySelector('.selection-panel');

  if(selectionPanel){
    selectionPanel.classList.add('hidden');
  }

  removeListeningToOptions();
}