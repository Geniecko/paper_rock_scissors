import { hideResultPanel, showGamePanel } from "./toggleGamePanels"

export const playAgain = () => {
  hideResultPanel();
  showGamePanel();
}