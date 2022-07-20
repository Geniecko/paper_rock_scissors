import { renderScore } from './renderScore';
import { showGamePanel } from './toggleGamePanels';

const init = () => {
  showGamePanel();
  renderScore();
};

init();
