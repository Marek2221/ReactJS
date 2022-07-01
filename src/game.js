function Game(game) {
    return (
        <div>
            <div>{game.type} Game</div>
            <div>Class: {game.class}</div>
            <div>Gun: {game.weapon}</div>
        </div>
    );
}
export default Game;