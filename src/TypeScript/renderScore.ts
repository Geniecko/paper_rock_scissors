import { state } from './state';

export const renderScore = () => {
  const playerScore = <HTMLElement>document.getElementById('playerScore');
  const aiScore = <HTMLElement>document.getElementById('aiScore');

  if(playerScore && aiScore){
    playerScore.textContent = state.playerScore.toString();
    aiScore.textContent = state.aiScore.toString();
  }
}