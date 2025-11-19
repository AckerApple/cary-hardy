// Simple Pinball Game - Clean Implementation
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game dimensions
const WIDTH = 400;
const HEIGHT = 600;
canvas.width = WIDTH;
canvas.height = HEIGHT;

// Game state
let score = 0;
let lives = 3;

// Ball object
const ball = {
    x: WIDTH - 30,
    y: HEIGHT - 100,
    vx: 0,
    vy: 0,
    radius: 8,
    gravity: 0.3,
    damping: 0.99,
    maxSpeed: 20
};

// Plunger - simple spring mechanism
const plunger = {
    x: WIDTH - 30,
    y: HEIGHT - 50,
    power: 0,
    maxPower: 15,
    charging: false
};

// Flippers - simple rotating paddles
const flippers = {
    left: {
        x: 120,
        y: HEIGHT - 80,
        length: 60,
        angle: 30,  // Degrees - positive is down for left
        restAngle: 30,
        activeAngle: -20,
        active: false
    },
    right: {
        x: WIDTH - 120,
        y: HEIGHT - 80,
        length: 60,
        angle: -30,  // Degrees - negative is down for right
        restAngle: -30,
        activeAngle: 20,
        active: false
    }
};

// Simple bumpers
const bumpers = [
    { x: 100, y: 200, radius: 25, points: 100 },
    { x: WIDTH/2, y: 150, radius: 25, points: 100 },
    { x: WIDTH - 100, y: 200, radius: 25, points: 100 }
];

// Input handling
const keys = {};

document.addEventListener('keydown', (e) => {
    keys[e.key] = true;

    // Left flipper
    if (e.key === 'ArrowLeft') {
        flippers.left.active = true;
    }
    // Right flipper
    if (e.key === 'ArrowRight') {
        flippers.right.active = true;
    }
    // Plunger
    if (e.key === ' ') {
        e.preventDefault();
        plunger.charging = true;
    }
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;

    // Release flippers
    if (e.key === 'ArrowLeft') {
        flippers.left.active = false;
    }
    if (e.key === 'ArrowRight') {
        flippers.right.active = false;
    }
    // Launch ball
    if (e.key === ' ') {
        e.preventDefault();
        if (plunger.charging && plunger.power > 0) {
            // Launch the ball
            ball.vy = -plunger.power;
            ball.vx = 0;
        }
        plunger.charging = false;
    }
});

// Update physics
function update() {
    // Update plunger
    if (plunger.charging) {
        if (plunger.power < plunger.maxPower) {
            plunger.power += 0.5;
        }
    } else {
        if (plunger.power > 0) {
            plunger.power -= 1;
        }
    }

    // Update flippers
    const flipperSpeed = 0.3;

    if (flippers.left.active) {
        flippers.left.angle += (flippers.left.activeAngle - flippers.left.angle) * flipperSpeed;
    } else {
        flippers.left.angle += (flippers.left.restAngle - flippers.left.angle) * flipperSpeed;
    }

    if (flippers.right.active) {
        flippers.right.angle += (flippers.right.activeAngle - flippers.right.angle) * flipperSpeed;
    } else {
        flippers.right.angle += (flippers.right.restAngle - flippers.right.angle) * flipperSpeed;
    }

    // Update ball physics
    ball.vy += ball.gravity;

    // Apply damping
    ball.vx *= ball.damping;
    ball.vy *= ball.damping;

    // Limit speed
    const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
    if (speed > ball.maxSpeed) {
        ball.vx = (ball.vx / speed) * ball.maxSpeed;
        ball.vy = (ball.vy / speed) * ball.maxSpeed;
    }

    // Move ball
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Wall collisions (simple boundaries)
    if (ball.x - ball.radius < 20) {
        ball.x = 20 + ball.radius;
        ball.vx = Math.abs(ball.vx) * 0.8;
    }
    if (ball.x + ball.radius > WIDTH - 20) {
        ball.x = WIDTH - 20 - ball.radius;
        ball.vx = -Math.abs(ball.vx) * 0.8;
    }
    if (ball.y - ball.radius < 40) {
        ball.y = 40 + ball.radius;
        ball.vy = Math.abs(ball.vy) * 0.8;
    }

    // Check bumper collisions
    bumpers.forEach(bumper => {
        const dx = ball.x - bumper.x;
        const dy = ball.y - bumper.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < ball.radius + bumper.radius) {
            // Normalize collision vector
            const nx = dx / dist;
            const ny = dy / dist;

            // Push ball away
            ball.x = bumper.x + nx * (ball.radius + bumper.radius);
            ball.y = bumper.y + ny * (ball.radius + bumper.radius);

            // Bounce with extra force
            const bounceForce = 10;
            ball.vx = nx * bounceForce;
            ball.vy = ny * bounceForce;

            // Add score
            score += bumper.points;
        }
    });

    // Check flipper collisions
    checkFlipperCollision(flippers.left);
    checkFlipperCollision(flippers.right);

    // Ball out of bounds (bottom)
    if (ball.y > HEIGHT + 50) {
        resetBall();
    }
}

function checkFlipperCollision(flipper) {
    // Convert angle to radians
    const rad = flipper.angle * Math.PI / 180;

    // Calculate flipper end position
    const endX = flipper.x + Math.cos(rad) * flipper.length;
    const endY = flipper.y + Math.sin(rad) * flipper.length;

    // Check distance from ball to flipper line
    const A = ball.x - flipper.x;
    const B = ball.y - flipper.y;
    const C = endX - flipper.x;
    const D = endY - flipper.y;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    let t = Math.max(0, Math.min(1, dot / lenSq));

    const closestX = flipper.x + t * C;
    const closestY = flipper.y + t * D;

    const distX = ball.x - closestX;
    const distY = ball.y - closestY;
    const dist = Math.sqrt(distX * distX + distY * distY);

    if (dist < ball.radius + 5) {
        // Collision detected
        const nx = distX / dist;
        const ny = distY / dist;

        // Push ball away
        ball.x = closestX + nx * (ball.radius + 5);
        ball.y = closestY + ny * (ball.radius + 5);

        // Apply flipper force if active
        if (flipper.active) {
            const flipForce = 12;
            ball.vx = nx * flipForce;
            ball.vy = -Math.abs(ny * flipForce) - 5; // Always upward
        } else {
            // Just bounce
            const dot = ball.vx * nx + ball.vy * ny;
            ball.vx -= 2 * dot * nx * 0.5;
            ball.vy -= 2 * dot * ny * 0.5;
        }
    }
}

function resetBall() {
    ball.x = WIDTH - 30;
    ball.y = HEIGHT - 100;
    ball.vx = 0;
    ball.vy = 0;
    lives--;
}

// Render everything
function render() {
    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Draw walls
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;

    // Left wall
    ctx.beginPath();
    ctx.moveTo(20, 40);
    ctx.lineTo(20, HEIGHT - 150);
    ctx.stroke();

    // Right wall
    ctx.beginPath();
    ctx.moveTo(WIDTH - 20, 40);
    ctx.lineTo(WIDTH - 20, HEIGHT - 150);
    ctx.stroke();

    // Top wall
    ctx.beginPath();
    ctx.moveTo(20, 40);
    ctx.lineTo(WIDTH - 20, 40);
    ctx.stroke();

    // Draw slopes to flippers
    ctx.beginPath();
    ctx.moveTo(20, HEIGHT - 150);
    ctx.lineTo(80, HEIGHT - 80);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(WIDTH - 20, HEIGHT - 150);
    ctx.lineTo(WIDTH - 80, HEIGHT - 80);
    ctx.stroke();

    // Draw bumpers
    bumpers.forEach(bumper => {
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(bumper.x, bumper.y, bumper.radius, 0, Math.PI * 2);
        ctx.stroke();
    });

    // Draw flippers
    function drawFlipper(flipper) {
        const rad = flipper.angle * Math.PI / 180;
        const endX = flipper.x + Math.cos(rad) * flipper.length;
        const endY = flipper.y + Math.sin(rad) * flipper.length;

        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(flipper.x, flipper.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }

    drawFlipper(flippers.left);
    drawFlipper(flippers.right);

    // Draw plunger
    if (plunger.power > 0 || plunger.charging) {
        // Spring effect
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        const springHeight = 60 - plunger.power * 2;
        for (let i = 0; i < 8; i++) {
            const y = HEIGHT - 100 + (springHeight / 8) * i;
            ctx.beginPath();
            ctx.moveTo(WIDTH - 35, y);
            ctx.lineTo(WIDTH - 25, y);
            ctx.stroke();
        }
    }

    // Draw ball
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();

    // Draw UI
    ctx.fillStyle = '#fff';
    ctx.font = '16px monospace';
    ctx.fillText(`Score: ${score}`, 10, 25);
    ctx.fillText(`Lives: ${lives}`, WIDTH - 80, 25);

    // Instructions
    ctx.font = '10px monospace';
    ctx.fillText('← → Flippers | Space: Launch', WIDTH/2 - 80, HEIGHT - 10);
}

// Game loop
function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

// Start game
gameLoop();