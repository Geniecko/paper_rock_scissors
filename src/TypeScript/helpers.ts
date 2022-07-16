export interface BeatsOption {
  paper: string;
  rock: string;
  scissors: string;
}

export interface AppState {
  playerScore: number;
  aiScore: number;
  playerChoice: string;
  aiChoice: string;
}

export const beatsOption: BeatsOption = {
  paper: 'rock',
  rock: 'scissors',
  scissors: 'paper'
}

export const options: string[] = ['paper', 'rock', 'scissors'];

export const pathToAssets: string = './Assets/Images/';