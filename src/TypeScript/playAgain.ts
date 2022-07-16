import { hideResultPanel, showGamePanel } from "./toggleGamePanels"

export const playAgain = ():void => {
  hideResultPanel();
  showGamePanel();
}