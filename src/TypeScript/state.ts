import { AppState, playerLSKEy, aiLSKEy } from './helpers';

const loadPlayerScore: string | null = localStorage.getItem(playerLSKEy);
const loadAiScore: string | null = localStorage.getItem(aiLSKEy);

export let state: AppState = {
  playerScore: loadPlayerScore ? Number(loadPlayerScore): 0,
  aiScore: loadAiScore ? Number(loadAiScore): 0,
  playerChoice: '',
  aiChoice: '',
};

