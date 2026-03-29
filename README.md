Title: JS Console Exec

⚠️ IMPORTANT SECURITY WARNING (Read & Use the Extension Accordingly)
This extension requires `'unsafe-eval'` to execute arbitrary JavaScript code you enter. Therefore:
• Because of Moz://a's strict security policy against `unsafe-eval`, this extension cannot be published on addons.mozilla.org and is only offered here on GitHub in order to offer the benefits from this extension on conditiion of users respecting, for their own security, strict security handling of the extension.
• I recommend using it only as a temporary add-on via `about:debugging`.
• It is distributed informally via GitHub for users who understand the risks and want an offline JS execution sandbox.
• It is intended only for personal offline learning, testing, and education based on the each use principle: Load - Use - Remove.
• Never paste or run untrusted, malicious, or unknown code.
• The code runs in an isolated extension context (the sidebar) and does not affect normal web pages.
• By using this tool you accept that you are solely responsible for the code you execute.

Add-On Version: 1.0

Browser Compatibility: Designed for the desktop version of Firefox. Requires manifest version 2 support.

Dependencies: None; pure HTML, CSS, JavaScript, JSON.

This README.md is an out-of-Moz://a Add-on Developer Hub, published over GitHub.com/LiborBenes-US by Dr. Libor Benes, M.A., on Sunday, March 29, 2026.

This Add-On for Windows & Moz://a Firefox Browser was developed on Sunday, March 29, 2026.

This Add-On was developed by Dr. Libor Benes, M.A. I used Grok 4.20 Beta AI for code generation and for this README.md file.

Support E-mail: Benes@iwp.edu

Development Philosophy:
This extension provides a safe, offline environment for learning and experimenting with JavaScript features, modern syntax, async code, DOM manipulation, canvas graphics, and small games — all without leaving Firefox.

It complements the existing HTML & CSS Scriptor add-on on published on Moz://a Developer Hub on September 16, 2025, by adding the missing JavaScript execution part as a separate tool in a controlled sidebar for user's security.

Purpose:
Offline Firefox sidebar for real-time JavaScript code execution and console output.

A lightweight, privacy-first educational tool that lets you write and instantly execute JavaScript code directly in a Firefox sidebar — with full console capture, canvas support, and interactive examples.

Target Audience:
• JavaScript learners and students.
• Developers testing code snippets offline.
• Educators teaching JS concepts.
• Anyone who wants a local, private JS playground.

Features:
• Real-time JavaScript execution with captured `console.log/error/warn/info`.
• Full support for modern JS (async/await, classes, promises, fetch, etc.).
• Canvas and DOM experiments inside the sidebar.
• Interactive examples: Neon Dodge game, Minesweeper, particle animation, silly jokes via public APIs.
• Dialog support (`alert`, `prompt`, `confirm`).
• Keyboard shortcut: **Ctrl + Enter** to run.
• Clear button clears both console and code area.
• High-contrast neon dark theme for excellent readability.

What the Tool Can Do (Wide Scope):
JS Console Exec runs real, full-powered JavaScript in an isolated environment. Here’s what can be realistically tested:
• Fully supported & works greatAll modern JavaScript (ES6+): let/const, arrow functions, classes, destructuring, async/await, Promises, modules (via new Function tricks), template literals, etc.
• Console API (log, error, warn, info, dir, table, clear).
• Browser dialogs: alert(), confirm(), prompt().
• Timers: setTimeout, setInterval, requestAnimationFrame.
• Fetch / network requests to public APIs (no extra permissions needed).
• Math, Date, RegExp, JSON, etc.
• DOM inside the sidebar: You can create, style, and append elements (see “DOM Manipulation” and “Canvas Graphics” examples above).
• Canvas, SVG, basic animations, and simple graphics.
• Error handling and stack traces (line numbers shown when possible).

Partially works (but limited by sidebar size):
• Graphical / visual experiments (Canvas, SVG, CSS animations) — they work, but the sidebar is narrow (~400px wide by default). Great for testing concepts, not full-screen apps.
• Live-updating UIs (timers + DOM changes) — perfect for learning reactivity.

Hard Limits of the Tool (What Will NOT Work):
• Because this is a sidebar extension page (not a content script injected into a webpage), there are clear architectural boundaries:
Feature                                       Works?            Reason / Workaround
Access current webpage DOM                      No              You cannot do document.querySelector('body') on google.com or any tab
Modify open websites                            No              No content-script injection
Browser APIs (tabs, bookmarks, history)       Limited           Only clipboardWrite is allowed
External script libraries                       No              CSP blocks <script src="..."> (you can only use pure JS)
Web Workers (advanced)                   Possible but complex   Requires extra code to set up
Full-screen games / heavy graphics            Limited           Canvas works but sidebar is small; performance is good for learning
Persistent data across reloads                   No             No browser.storage yet (easy to add later)

Bottom line:
This tool is excellent for learning and testing pure JavaScript logic, console behavior, async code, modern syntax, small DOM/Canvas experiments, and algorithms.

It is not a full browser automation or webpage-manipulation tool (that would require content scripts and different permissions).

Dropdown Picklist:
• Hello World: Basic console output.
• Variables & Math: Variables, arithmetic, and built-in Math functions.
• Loop: For loops and iteration.
• Function: Function declaration and calling.
• Array Methods: Array operations (`reduce`, `map`, etc.).
• Async/Fetch (public API): Demonstrates `async/await` + `fetch` using the Official Joke API.
• Dialogs (alert, prompt, confirm): Shows browser dialog functions with console feedback.
• Promises: Basic Promise usage and chaining.
• DOM Manipulation: Creating and appending elements dynamically in the sidebar.
• Canvas Graphics: Simple static canvas drawing.
• Particle Animation: Animated colorful particles using `requestAnimationFrame`.
• Timers & Live Updates: `setInterval` with live console output.
• Classes & Modern JS: ES6 classes and modern syntax.
• Neon Dodge Game: Interactive canvas game (move with Arrow Keys or WASD).
• Minesweeper: Fully playable Minesweeper with mouse controls (left-click to reveal, right-click to flag).

or

alternatively, outside of this dropdown menu, in the text field, type in and run your own code and view the output.

Security Considerations:
• No data collection (explicitly declared).
• No network requests except those you explicitly code (e.g., joke APIs).
• All processing happens locally in the browser.
• Flat file structure for easy auditing.

Note: The `manifest.json` includes, now already as standard feature, the `"data_collection_permissions"` property, explicitly declaring that no user data is collected or transmitted. I understand this provision, approach, and philosophy as Mozilla’s strengthened security and privacy policies, ensuring compliance with upcoming requirements. This approach and philosophy aligns with my own persistent emphasis on security aspects in building browser add-ons to provide maximum safety and privacy to users in their use of my add-ons.

Technical Details:
• Compatibility: Firefox 140.0+ (64-bit desktop).
• Runtime Execution RAM Footprint: ~19 KB (manifest.json + sidebar.html + style.css + script.js).
• Total Extension Download/Install Size: ~48 KB (including README.md).
• Performance: Instant load, no lag.
• Colors chosen for good redability.
• Testing: Verified on Firefox 149.0.

Usage:
• Open the sidebar.
• Select an example from the dropdown or write your own code in the text field.
• Click Run or press Ctrl + Enter -> view execution on the right side.
• Use the Clear button to reset both panels.
• Widen the sidebar for better experience with games and canvas.

Installation for Testing & Use:
• Download or clone this repository.
• Make sure all files are in one flat folder (no subfolders).
• Open Firefox and go to `about:debugging#/runtime/this-firefox`.
• Click "Load Temporary Add-on".
• Select the `manifest.json` file from the folder.
• The sidebar will appear under View → Sidebar → JS Console Exec
• Remove after use.

Not intended and not suitable for permanent installation, in the interest of the user's computer safety.

Testing:
• The Add-On passed testing on Firefox 149.0 (64-bit) - latest version as of March 29, 2026 - over `about:debugging#/runtime/this-firefox`.
• Other browsers may vary. While the Add-On might work in Chrome or Firefox Mobile, it was not tested on browsers other than the desktop version of Firefox. 


Files:
1) manifest.json         - Extension metadata with permissions and the explicit mandatory “no data collection” declaration.
2) sidebar.html          - Main interface.
3) style.css             - Neon dark theme.
4) script.js             - Core logic and examples.
5) README.md             - Documentation file explaining the add-on's purpose, features, installation, usage, and privacy.



Directory Structure:

js_console_exec/
├── manifest.json
├── sidebar.html
├── style.css
├── script.js
└── README.md

Creation of the Add-On:
• After these 5 files were created, they were packaged for AMO into manifest.zip and prepared for upload to Moz://a Add-On Developer Hub for initial testing of version 1.0 on March 29, 2026.


Files:

1) manifest.json

```json

{
  "manifest_version": 2,
  "name": "JS Console Exec",
  "version": "1.0",
  "description": "Offline real-time JavaScript code execution sidebar for Firefox. Educational tool with live console, canvas experiments, and interactive games. Sideload only via about:debugging due to unsafe-eval.",
  "browser_specific_settings": {
    "gecko": {
      "id": "js_console_exec@libor_benes.dev",
      "strict_min_version": "140.0",
      "data_collection_permissions": {
        "required": ["none"],
        "optional": []
      }
    }
  },
  "sidebar_action": {
    "default_title": "JS Console Exec",
    "default_panel": "sidebar.html"
  },
  "permissions": [
    "clipboardWrite"
  ],
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
}

```

------------------------------------------------------------------------

2) sidebar.html

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS Console Exec</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <div class="toolbar">
      <button id="run">Run</button>
      <button id="clear">Clear</button>
      <select id="examples">
        <option value="">Load example...</option>
      </select>
      <button id="copy">Copy</button>
    </div>
    
    <div class="main">
      <div class="editor-panel">
        <label>JS Code</label>
        <textarea id="code" spellcheck="false"></textarea>
      </div>
      
      <div class="console-panel">
        <label>Console Output</label>
        <div id="console" class="console-output"></div>
      </div>
    </div>
    
    <div class="status">Ready • Ctrl+Enter to run • Real-time JS execution • Educational use only • Sideload via about:debugging</div>
  </div>

  <script src="script.js"></script>
</body>
</html>

```

------------------------------------------------------------------------

3) style.css

```css

:root {
  --bg: #0a0a0a;
  --panel: #111111;
  --fg: #e0e0e0;
  --neon: #00f5ff;
  --accent: #ff00aa;
  --error: #ff3366;
  --warn: #ffcc00;
}

body {
  margin: 0;
  padding: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 100vh;
  overflow: hidden;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 8px;
  box-sizing: border-box;
}

.toolbar {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

button, select {
  padding: 6px 12px;
  background: #1a1a1a;
  color: var(--fg);
  border: 1px solid var(--neon);
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

button:hover {
  background: #252525;
  box-shadow: 0 0 8px var(--neon);
}

.main {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  min-height: 0;
}

.editor-panel, .console-panel {
  display: flex;
  flex-direction: column;
  background: var(--panel);
  border: 1px solid #333;
  border-radius: 6px;
  overflow: hidden;
}

label {
  padding: 4px 8px;
  background: #1f1f1f;
  font-size: 12px;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.codemirror-container {
  flex: 1;
  overflow: hidden;
}

.console-output {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background: #0a0a0a;
  font-family: ui-monospace, monospace;
  font-size: 13px;
  line-height: 1.45;
  white-space: pre-wrap;
  word-break: break-all;
}

.console-output .log { color: var(--fg); }
.console-output .error { color: var(--error); }
.console-output .warn { color: var(--warn); }

.status {
  font-size: 12px;
  padding: 6px 8px;
  text-align: center;
  color: #888;
  border-top: 1px solid #333;
  font-weight: 400;
}

```

------------------------------------------------------------------------

4) script.js

```js

// script.js - JS Console Exec
const codeArea = document.getElementById('code');
const consoleEl = document.getElementById('console');
const runBtn = document.getElementById('run');
const select = document.getElementById('examples');

const originalConsole = { ...console };

function captureLog(type, ...args) {
  const entry = document.createElement('div');
  entry.className = type;
  const text = args.map(arg => {
    try {
      return typeof arg === 'object' && arg !== null ? JSON.stringify(arg, null, 2) : String(arg);
    } catch (e) {
      return String(arg);
    }
  }).join(' ');
  entry.textContent = text;
  consoleEl.appendChild(entry);
  consoleEl.scrollTop = consoleEl.scrollHeight;
}

function setupConsoleCapture() {
  console.log = (...args) => { originalConsole.log(...args); captureLog('log', ...args); };
  console.error = (...args) => { originalConsole.error(...args); captureLog('error', ...args); };
  console.warn = (...args) => { originalConsole.warn(...args); captureLog('warn', ...args); };
  console.info = (...args) => captureLog('log', ...args);
  console.clear = () => { consoleEl.innerHTML = ''; };
}

function runCode() {
  captureLog('log', '--- Run clicked ---');

  const code = codeArea.value.trim();
  if (!code) {
    captureLog('warn', 'No code entered.');
    return;
  }

  try {
    captureLog('log', 'Executing code...');
    const func = new Function('"use strict";\n' + code);
    func();
    captureLog('log', '✓ Code executed successfully');
  } catch (e) {
    captureLog('error', `Execution error: ${e.message}`);
    if (e.lineNumber) captureLog('error', `Line: ${e.lineNumber}`);
  }
}

// Attach events
runBtn.addEventListener('click', runCode);

document.getElementById('clear').addEventListener('click', () => { 
  consoleEl.innerHTML = ''; 
  codeArea.value = '';   
  select.value = "";     // Reset dropdown to "Load example..." 
});

document.getElementById('copy').addEventListener('click', () => {
  const text = consoleEl.textContent || '';
  if (text) {
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById('copy');
      const oldText = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => btn.textContent = oldText, 1200);
    });
  }
});

document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.key === 'Enter') {
    e.preventDefault();
    runCode();
  }
});

// Examples
const examples = {
  "Hello World": "console.log('Hello from JS Console Exec!');",
  "Variables & Math": "let count = 42;\nconsole.log('Count:', count);\ncount += 10;\nconsole.log('Updated:', count);\nconsole.log('Square root of 144:', Math.sqrt(144));",
  "Loop": "for (let i = 1; i <= 5; i++) {\n  console.log('Iteration', i);\n}",
  "Function": "function greet(name) {\n  console.log('Hello,', name);\n}\ngreet('Learner');",
  "Array Methods": "const nums = [1, 2, 3, 4, 5];\nconsole.log('Sum:', nums.reduce((a, b) => a + b, 0));\nconsole.log('Doubled:', nums.map(n => n * 2));",

  "Async/Fetch (public API)": "async function fetchJoke() {\n  try {\n    const res = await fetch('https://official-joke-api.appspot.com/random_joke');\n    const data = await res.json();\n    console.log('😂 Joke:', data.setup);\n    console.log('Punchline:', data.punchline);\n  } catch (e) {\n    console.error('Failed to fetch joke:', e.message);\n  }\n}\nfetchJoke();",

  "Dialogs (alert, prompt, confirm)": "alert('This is an alert!');\nconst name = prompt('What is your name?');\nif (name) console.log('Hello,', name);\nconst confirmed = confirm('Do you like JavaScript?');\nconsole.log('User confirmed:', confirmed);",

  "Promises": "new Promise(resolve => setTimeout(() => resolve('Done after 1s'), 1000))\n  .then(msg => console.log('Promise resolved:', msg));",

  "DOM Manipulation": "const div = document.createElement('div');\ndiv.style.cssText = 'background:#00f5ff;color:#000;padding:8px;margin:8px 0;border-radius:4px;font-weight:600;';\ndiv.textContent = 'I was created dynamically by your JS code!';\nconsoleEl.appendChild(div);\nconsole.log('✓ Added a new colored box below this message');",

  "Canvas Graphics": "const canvas = document.createElement('canvas');\ncanvas.width = 300;\ncanvas.height = 150;\ncanvas.style.border = '2px solid #00f5ff';\nconst ctx = canvas.getContext('2d');\nctx.fillStyle = '#ff00aa';\nctx.fillRect(20, 20, 260, 110);\nctx.fillStyle = '#fff';\nctx.font = 'bold 24px monospace';\nctx.fillText('JS Console Exec', 40, 90);\nconsoleEl.appendChild(canvas);\nconsole.log('✓ Canvas graphic created below');",

  "Particle Animation": `// Simple colorful particle explosion
const canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 300;
canvas.style.border = '2px solid #00f5ff';
consoleEl.appendChild(canvas);
const ctx = canvas.getContext('2d');

let particles = [];
class Particle {
  constructor(x, y) {
    this.x = x; this.y = y;
    this.size = Math.random() * 6 + 2;
    this.speedX = Math.random() * 6 - 3;
    this.speedY = Math.random() * 6 - 3;
    this.color = ['#00f5ff', '#ff00aa', '#33ff99', '#ffff00'][Math.floor(Math.random()*4)];
    this.life = 80;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life--;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.life / 80;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

function animate() {
  ctx.fillStyle = 'rgba(10,10,10,0.15)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.update();
    p.draw();
    if (p.life <= 0) particles.splice(i, 1);
  });
  if (particles.length < 80) {
    particles.push(new Particle(Math.random()*canvas.width, Math.random()*canvas.height));
  }
  requestAnimationFrame(animate);
}
animate();
console.log('✨ Particle animation started!');`,

  "Timers & Live Updates": "let counter = 0;\nconst interval = setInterval(() => {\n  counter++;\n  console.log('Live tick', counter);\n  if (counter >= 5) clearInterval(interval);\n}, 800);",

  "Classes & Modern JS": "class Counter {\n  constructor() { this.value = 0; }\n  increment() { this.value++; console.log('Value:', this.value); }\n}\nconst c = new Counter();\nc.increment();\nc.increment();",

  "Neon Dodge Game": `// Neon Dodge - Basic Canvas Game
// Use Arrow Keys or WASD to move the player
// Avoid red obstacles, collect cyan points

const canvas = document.createElement('canvas');
canvas.width = 520;
canvas.height = 400;
canvas.style.border = '2px solid #00f5ff';
canvas.style.background = '#0a0a0a';
consoleEl.appendChild(canvas);

const ctx = canvas.getContext('2d');

let player = { x: 240, y: 320, size: 24, speed: 5 };
let obstacles = [];
let points = [];
let score = 0;
let gameOver = false;
let keys = {};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spawn() {
  if (Math.random() < 0.04) {
    obstacles.push({ 
      x: random(0, canvas.width - 30), 
      y: -30, 
      size: 28, 
      speed: random(3, 6) 
    });
  }
  if (Math.random() < 0.03) {
    points.push({ 
      x: random(0, canvas.width - 18), 
      y: -18, 
      size: 18 
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = '#00f5ff';
  ctx.shadowBlur = 20;
  ctx.shadowColor = '#00f5ff';
  ctx.fillRect(player.x, player.y, player.size, player.size);
  
  ctx.shadowBlur = 15;
  ctx.shadowColor = '#ff3366';
  ctx.fillStyle = '#ff3366';
  obstacles.forEach(ob => {
    ctx.fillRect(ob.x, ob.y, ob.size, ob.size);
  });
  
  ctx.shadowBlur = 12;
  ctx.shadowColor = '#00ffff';
  ctx.fillStyle = '#00ffff';
  points.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x + p.size/2, p.y + p.size/2, p.size/2, 0, Math.PI * 2);
    ctx.fill();
  });
  
  ctx.shadowBlur = 0;
  ctx.fillStyle = '#e0e0e0';
  ctx.font = 'bold 18px monospace';
  ctx.fillText('Score: ' + score, 20, 40);
}

function update() {
  if (gameOver) return;

  if (keys['ArrowLeft'] || keys['a'] || keys['A']) player.x -= player.speed;
  if (keys['ArrowRight'] || keys['d'] || keys['D']) player.x += player.speed;
  if (keys['ArrowUp'] || keys['w'] || keys['W']) player.y -= player.speed;
  if (keys['ArrowDown'] || keys['s'] || keys['S']) player.y += player.speed;

  player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));

  obstacles.forEach((ob, i) => {
    ob.y += ob.speed;
    if (ob.y > canvas.height) obstacles.splice(i, 1);
    
    if (
      player.x < ob.x + ob.size &&
      player.x + player.size > ob.x &&
      player.y < ob.y + ob.size &&
      player.y + player.size > ob.y
    ) {
      gameOver = true;
      console.log('💥 Game Over! Final Score: ' + score);
    }
  });

  points.forEach((p, i) => {
    p.y += 4;
    if (p.y > canvas.height) {
      points.splice(i, 1);
      return;
    }
    
    if (
      player.x < p.x + p.size &&
      player.x + player.size > p.x &&
      player.y < p.y + p.size &&
      player.y + player.size > p.y
    ) {
      score += 10;
      points.splice(i, 1);
      console.log('✨ +10 points! Score: ' + score);
    }
  });

  score += 1;
  spawn();
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

window.addEventListener('keydown', e => { keys[e.key] = true; });
window.addEventListener('keyup', e => { keys[e.key] = false; });

console.log('🎮 Neon Dodge started! Use Arrow Keys or WASD to move.');
console.log('Avoid red squares • Collect cyan circles');
gameLoop();`,

  "Minesweeper": `// Minesweeper - Classic Grid Game
// Left click to reveal • Right click to flag mines
// 10 mines on 9×9 grid

const canvas = document.createElement('canvas');
canvas.width = 450;
canvas.height = 450;
canvas.style.border = '3px solid #00f5ff';
canvas.style.background = '#0a0a0a';
consoleEl.appendChild(canvas);

const ctx = canvas.getContext('2d');
const CELL_SIZE = 50;
const COLS = 9;
const ROWS = 9;
const MINES = 10;

let board = [];
let revealed = [];
let flags = [];
let gameOver = false;
let won = false;

function initBoard() {
  board = Array(ROWS).fill().map(() => Array(COLS).fill(0));
  revealed = Array(ROWS).fill().map(() => Array(COLS).fill(false));
  flags = Array(ROWS).fill().map(() => Array(COLS).fill(false));

  let placed = 0;
  while (placed < MINES) {
    const r = Math.floor(Math.random() * ROWS);
    const c = Math.floor(Math.random() * COLS);
    if (board[r][c] !== 'M') {
      board[r][c] = 'M';
      placed++;
    }
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] === 'M') continue;
      let count = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc] === 'M') count++;
        }
      }
      board[r][c] = count;
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = 'bold 28px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const x = c * CELL_SIZE;
      const y = r * CELL_SIZE;

      if (revealed[r][c]) {
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
        ctx.strokeStyle = '#333';
        ctx.strokeRect(x, y, CELL_SIZE, CELL_SIZE);

        if (board[r][c] === 'M') {
          ctx.fillStyle = '#ff3366';
          ctx.fillText('💣', x + CELL_SIZE/2, y + CELL_SIZE/2);
        } else if (board[r][c] > 0) {
          ctx.fillStyle = '#00f5ff';
          ctx.fillText(board[r][c].toString(), x + CELL_SIZE/2, y + CELL_SIZE/2);
        }
      } else {
        ctx.fillStyle = '#00f5ff';
        ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
        ctx.strokeStyle = '#00aacc';
        ctx.strokeRect(x, y, CELL_SIZE, CELL_SIZE);
        
        if (flags[r][c]) {
          ctx.fillStyle = '#ff00aa';
          ctx.fillText('🚩', x + CELL_SIZE/2, y + CELL_SIZE/2);
        }
      }
    }
  }

  if (gameOver) {
    ctx.fillStyle = won ? '#33ff99' : '#ff3366';
    ctx.font = 'bold 36px monospace';
    ctx.fillText(won ? 'YOU WIN!' : 'GAME OVER', canvas.width/2, 40);
  }
}

function reveal(r, c) {
  if (r < 0 || r >= ROWS || c < 0 || c >= COLS || revealed[r][c] || flags[r][c]) return;
  
  revealed[r][c] = true;
  
  if (board[r][c] === 'M') {
    gameOver = true;
    console.log('💥 Boom! You hit a mine.');
    draw();
    return;
  }

  if (board[r][c] === 0) {
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        reveal(r + dr, c + dc);
      }
    }
  }

  checkWin();
  draw();
}

function toggleFlag(r, c) {
  if (revealed[r][c]) return;
  flags[r][c] = !flags[r][c];
  draw();
}

function checkWin() {
  let unrevealedSafe = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (!revealed[r][c] && board[r][c] !== 'M') unrevealedSafe++;
    }
  }
  if (unrevealedSafe === 0) {
    won = true;
    gameOver = true;
    console.log('🎉 Congratulations! You cleared the board!');
  }
}

canvas.addEventListener('click', e => {
  if (gameOver) return;
  const rect = canvas.getBoundingClientRect();
  const c = Math.floor((e.clientX - rect.left) / CELL_SIZE);
  const r = Math.floor((e.clientY - rect.top) / CELL_SIZE);
  reveal(r, c);
});

canvas.addEventListener('contextmenu', e => {
  e.preventDefault();
  if (gameOver) return;
  const rect = canvas.getBoundingClientRect();
  const c = Math.floor((e.clientX - rect.left) / CELL_SIZE);
  const r = Math.floor((e.clientY - rect.top) / CELL_SIZE);
  toggleFlag(r, c);
});

initBoard();
draw();
console.log('🧨 Minesweeper ready!');
console.log('Left click = reveal | Right click = flag mines');
console.log('Find all safe cells without hitting a mine!');`
};

// Populate dropdown
Object.keys(examples).forEach(key => {
  const opt = document.createElement('option');
  opt.value = key;
  opt.textContent = key;
  select.appendChild(opt);
});

select.addEventListener('change', () => {
  const key = select.value;
  if (key && examples[key]) {
    codeArea.value = examples[key];
  }
});

// Initialize
setupConsoleCapture();
codeArea.value = '// Select an example from the dropdown or write your own code\n\n';
captureLog('log', 'JS Console Exec ready.');
captureLog('log', 'Clear now resets both panels and the dropdown properly.');

console.log('✅ script.js fully loaded');

```

------------------------------------------------------------------------

5) README.md
