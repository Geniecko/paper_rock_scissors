import { AppState, LocalStorageKey } from './helpers';

type LocalStorageScores = string | null;

const loadPlayerScore: LocalStorageScores = localStorage.getItem(LocalStorageKey.player);
const loadAiScore: LocalStorageScores = localStorage.getItem(LocalStorageKey.ai);

export let state: AppState = {
  playerScore: loadPlayerScore ? Number(loadPlayerScore): 0,
  aiScore: loadAiScore ? Number(loadAiScore): 0,
  playerChoice: '',
  aiChoice: '',
};

