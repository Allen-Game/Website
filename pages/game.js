import NavBar from '../app/navbar';
import Game from '../app/card'; // 使用大写字母开头的名称 Game
import layout from '../app/layout';

const game = () => {
  return (
    <div>
      <NavBar />

      <Game />
    </div>
  );
};

export default game;
