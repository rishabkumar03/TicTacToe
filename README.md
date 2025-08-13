# Tic Tac Toe
A simple 5x5 Tic Tac Toe game built with HTML, CSS, and JavaScript. Two players take turns placing their marks, with the first to align three in a row declared the winner.

## Features
- **Two-Player Gameplay:** Local multiplayer with alternating turns.
- **5x5 Grid:** Larger playing field compared to the classic 3x3 layout.
- **Win Detection:** Automatically checks for winning patterns.
- **Draw Detection:** Declares a draw if all cells are filled without a winner.
- **Game Controls:** Reset or start a new game anytime.
- **Responsive Layout:** Scales for different screen sizes.

## Technologies Used
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **UI Styling:** Custom CSS

## Prerequisites
No special requirements — works in any modern web browser.

## Installation
1. Clone the repository or download the project files:
   ```bash
   git clone <repository-url>
   cd tictactoe
   ```
2. Open ```index.html``` in your preferred browser.

## Usage
1. Player O starts the game.
2. Click on an empty cell to place your mark.
3. The game automatically switches turns between O and X.
4. The first player to align three in a row horizontally, vertically, or diagonally wins.
5. Use Reset Game to clear the board or Play Again! after a win/draw to start fresh.

## File Structure
```bash
tictactoe/
├── index.html      # Main HTML file
├── style.css       # Game styling
└── app.js          # Game logic and event handling
```

## How It Works
1. **Grid Setup:** 25 clickable buttons represent the board cells.
2. **Player Turns:** A boolean flag tracks whose turn it is (O or X).
3. **Win Checking:** After each move, the game checks all predefined winning patterns.
4. **Draw Condition:** If all cells are filled without a winner, a draw is declared.
5. **Restart:** Buttons reset the game state for a new match.

## Configuration
No additional configuration is required.
To change the board size or win conditions, edit:
- ```index.html``` for the number of ```.box``` buttons.
- ```winPatterns``` array in ```app.js``` for winning logic.

## Known Issues
1. **No Single-Player Mode:** Only supports local multiplayer.
2. **Static Win Patterns:** Board size change requires manual update of patterns.
3. **No Move Undo:** Once placed, marks cannot be removed.

## Troubleshooting
### Game Not Starting
- Ensure JavaScript is enabled in your browser.
- Check for errors in the browser console.

### Styling Not Applying
- Confirm ```style.css``` is correctly linked in ```index.html```
- Clear browser cache.

## Security Considerations
- No security risks for local play.
- If hosted online, ensure no injected scripts are added to the HTML/JS.

## Contributing
1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test thoroughly.
5. Submit a pull request.
