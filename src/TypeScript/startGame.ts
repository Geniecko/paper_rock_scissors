import { state } from "./state";
import { options, beatsOption, LocalStorageKey } from "./helpers";
import { renderScore } from "./renderScore";
import { showResultPanel, hideGamePanel } from "./toggleGamePanels";

const setAiChoice = (): void => {
  const randomIndex = Math.floor(Math.random() * options.length);

  state.aiChoice = options[randomIndex];
};

function setPlayerChoice (target: HTMLButtonElement): void {
  if(target.dataset.option !== undefined){
    state.playerChoice = target.dataset.option;
  } else {
    console.log('Coś poszło nie tak');
  }
};

const selectWinner = (): void => {
  let winner: string;

  if(state.playerChoice === state.aiChoice){
    winner = 'DRAW';
  }else if (beatsOption[state.playerChoice as keyof typeof beatsOption].includes(state.aiChoice)){
    state.playerScore += 1;
    localStorage.setItem(LocalStorageKey.player, state.playerScore.toString());
    winner = 'PLAYER WIN';
  } else{
    state.aiScore += 1;
    localStorage.setItem(LocalStorageKey.ai, state.aiScore.toString());
    winner = 'AI WIN';
  }

  hideGamePanel();
  showResultPanel(winner);
  renderScore();
}

export function startGame(this: HTMLButtonElement): void {
  setAiChoice();
  setPlayerChoice(this);
  selectWinner();
}