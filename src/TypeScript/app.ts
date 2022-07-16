import { renderScore } from './renderScore';
import { showGamePanel } from './toggleGamePanels';

const init = (): void => {
  showGamePanel();
  renderScore();
};

init();
