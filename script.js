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
