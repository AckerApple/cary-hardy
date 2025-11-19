// Canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');

// Game dimensions
const GAME_WIDTH = 400;
const GAME_HEIGHT = 600;

// Set canvas size
function resizeCanvas() {
    const scale = Math.min(window.innerWidth / GAME_WIDTH, window.innerHeight / GAME_HEIGHT) * 0.9;
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;
    canvas.style.width = (GAME_WIDTH * scale) + 'px';
    canvas.style.height = (GAME_HEIGHT * scale) + 'px';
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Game state
let score = 0;
let gameRunning = true;

// One-way gate state
const gate = {
    x: GAME_WIDTH - 60,
    y: 110,
    width: 40,
    height: 5,
    active: false
};

// Ball properties
const ball = {
    x: GAME_WIDTH - 40,
    y: GAME_HEIGHT - 120,
    vx: 0,
    vy: 0,
    radius: 8,
    gravity: 0.4,
    damping: 0.995,
    launched: false,
    trail: []
};

// Flippers - positioned closer to center with proper angles
const leftFlipper = {
    x: 130,
    y: GAME_HEIGHT - 100,
    length: 70,
    angle: 30,  // Starting position (down - outer tip high, inner tip low)
    targetAngle: 30,  // Current target (down)
    maxAngle: -30,  // Activated position (up - flips upward)
    minAngle: 30,  // Rest position (down)
    angular: 0
};

const rightFlipper = {
    x: GAME_WIDTH - 130,
    y: GAME_HEIGHT - 100,
    length: 70,
    angle: 150,  // Starting position (down - outer tip high, inner tip low)
    targetAngle: 150,  // Current target (down)
    maxAngle: 210,  // Activated position (up - flips upward)
    minAngle: 150,  // Rest position (down)
    angular: 0
};

// Plunger
const plunger = {
    x: GAME_WIDTH - 40,
    y: GAME_HEIGHT - 50,
    power: 0,
    maxPower: 20,
    pulling: false
};

// Bumpers
const bumpers = [
    { x: 100, y: 200, radius: 25, points: 100, hitAnimation: 0 },
    { x: 200, y: 150, radius: 25, points: 100, hitAnimation: 0 },
    { x: 300, y: 200, radius: 25, points: 100, hitAnimation: 0 },
    { x: 150, y: 300, radius: 20, points: 50, hitAnimation: 0 },
    { x: 250, y: 300, radius: 20, points: 50, hitAnimation: 0 }
];

// Pinball layout with curves and proper launch lane
const walls = [
    // BOUNDARY WALLS - prevent ball from leaving canvas
    { x1: 0, y1: 0, x2: GAME_WIDTH, y2: 0 }, // Top boundary
    { x1: 0, y1: 0, x2: 0, y2: GAME_HEIGHT }, // Left boundary
    { x1: GAME_WIDTH, y1: 0, x2: GAME_WIDTH, y2: GAME_HEIGHT }, // Right boundary

    // Main playfield outer walls
    // Left side
    { x1: 30, y1: 120, x2: 30, y2: GAME_HEIGHT - 200 },

    // Top left curve (multiple segments for smooth curve)
    { x1: 30, y1: 120, x2: 35, y2: 105 },
    { x1: 35, y1: 105, x2: 45, y2: 90 },
    { x1: 45, y1: 90, x2: 60, y2: 75 },
    { x1: 60, y1: 75, x2: 80, y2: 65 },
    { x1: 80, y1: 65, x2: 100, y2: 60 },

    // Top wall
    { x1: 100, y1: 60, x2: GAME_WIDTH - 100, y2: 60 },

    // Top right curve - guides ball from launch lane to playfield
    { x1: GAME_WIDTH - 100, y1: 60, x2: GAME_WIDTH - 90, y2: 65 },
    { x1: GAME_WIDTH - 90, y1: 65, x2: GAME_WIDTH - 75, y2: 75 },
    { x1: GAME_WIDTH - 75, y1: 75, x2: GAME_WIDTH - 65, y2: 90 },
    { x1: GAME_WIDTH - 65, y1: 90, x2: GAME_WIDTH - 60, y2: 110 },

    // Launch lane exit guide - curves ball left onto playfield
    { x1: GAME_WIDTH - 60, y1: 110, x2: GAME_WIDTH - 65, y2: 115 },
    { x1: GAME_WIDTH - 65, y1: 115, x2: GAME_WIDTH - 75, y2: 120 },
    { x1: GAME_WIDTH - 75, y1: 120, x2: GAME_WIDTH - 90, y2: 125 },

    // Launch lane outer wall (right side)
    { x1: GAME_WIDTH - 20, y1: 110, x2: GAME_WIDTH - 20, y2: GAME_HEIGHT - 80 },

    // Launch lane inner wall (left side of launch lane) - with gap at top for ball exit
    { x1: GAME_WIDTH - 60, y1: 140, x2: GAME_WIDTH - 60, y2: GAME_HEIGHT - 300 },

    // Launch lane bottom stopper (prevents ball from going below plunger)
    { x1: GAME_WIDTH - 60, y1: GAME_HEIGHT - 80, x2: GAME_WIDTH - 20, y2: GAME_HEIGHT - 80 },

    // Bottom slopes leading to flippers
    // Left side slope
    { x1: 30, y1: GAME_HEIGHT - 200, x2: 40, y2: GAME_HEIGHT - 180 },
    { x1: 40, y1: GAME_HEIGHT - 180, x2: 60, y2: GAME_HEIGHT - 150 },
    { x1: 60, y1: GAME_HEIGHT - 150, x2: 80, y2: GAME_HEIGHT - 120 },
    { x1: 80, y1: GAME_HEIGHT - 120, x2: 100, y2: GAME_HEIGHT - 100 },

    // Right side slope
    { x1: GAME_WIDTH - 60, y1: GAME_HEIGHT - 180, x2: GAME_WIDTH - 70, y2: GAME_HEIGHT - 150 },
    { x1: GAME_WIDTH - 70, y1: GAME_HEIGHT - 150, x2: GAME_WIDTH - 85, y2: GAME_HEIGHT - 120 },
    { x1: GAME_WIDTH - 85, y1: GAME_HEIGHT - 120, x2: GAME_WIDTH - 100, y2: GAME_HEIGHT - 100 },

    // Small walls above flippers (adjusted for new flipper positions)
    { x1: 100, y1: GAME_HEIGHT - 100, x2: 100, y2: GAME_HEIGHT - 80 },
    { x1: GAME_WIDTH - 100, y1: GAME_HEIGHT - 100, x2: GAME_WIDTH - 100, y2: GAME_HEIGHT - 80 }
];

// Input handling
const keys = {};
let touchStartX = null;
let plungerTouchY = null;

// Desktop controls
document.addEventListener('keydown', (e) => {
    keys[e.key] = true;

    if (e.key === 'ArrowLeft' || (e.key === 'Shift' && e.location === 1)) { // Left Arrow or Left Shift
        leftFlipper.targetAngle = leftFlipper.maxAngle;  // Activate left flipper (up)
    }
    if (e.key === 'ArrowRight' || (e.key === 'Shift' && e.location === 2)) { // Right Arrow or Right Shift
        rightFlipper.targetAngle = rightFlipper.maxAngle;  // Activate right flipper (up)
    }
    if (e.key === ' ') {
        e.preventDefault();
        plunger.pulling = true;
    }
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;

    if (e.key === 'ArrowLeft' || (e.key === 'Shift' && e.location === 1)) {
        leftFlipper.targetAngle = leftFlipper.minAngle;  // Return to rest (down)
    }
    if (e.key === 'ArrowRight' || (e.key === 'Shift' && e.location === 2)) {
        rightFlipper.targetAngle = rightFlipper.minAngle;  // Return to rest (down)
    }
    if (e.key === ' ') {
        e.preventDefault();
        if (plunger.power > 0) {
            launchBall();
        }
        plunger.pulling = false;
        // Don't reset power here - let it animate back
    }
});

// Mobile controls
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / (rect.width / GAME_WIDTH);
    const y = (touch.clientY - rect.top) / (rect.height / GAME_HEIGHT);

    // Check if touching plunger area (works even after ball launched)
    const inLaunchPosition = ball.x > GAME_WIDTH - 50 && ball.y > GAME_HEIGHT - 200;
    if (inLaunchPosition && x > GAME_WIDTH - 60 && y > GAME_HEIGHT - 150) {
        plungerTouchY = y;
        plunger.pulling = true;
    } else {
        // Flipper control
        if (x < GAME_WIDTH / 2) {
            leftFlipper.targetAngle = leftFlipper.maxAngle;  // Activate left flipper
        } else {
            rightFlipper.targetAngle = rightFlipper.maxAngle;  // Activate right flipper
        }
    }
    touchStartX = x;
});

canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (plungerTouchY !== null) {
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const y = (touch.clientY - rect.top) / (rect.height / GAME_HEIGHT);
        const pull = Math.max(0, Math.min(plungerTouchY - y, 100));
        plunger.power = (pull / 100) * plunger.maxPower;
    }
});

canvas.addEventListener('touchend', (e) => {
    e.preventDefault();

    if (plunger.pulling && plunger.power > 0) {
        launchBall();
    }

    leftFlipper.targetAngle = leftFlipper.minAngle;  // Return to rest (down)
    rightFlipper.targetAngle = rightFlipper.minAngle;  // Return to rest (down)
    plunger.pulling = false;
    // Don't reset power here - let it animate back
    plungerTouchY = null;
    touchStartX = null;
});

// Launch ball
function launchBall() {
    // Check if ball is in launch position
    const inLaunchLane = ball.x > GAME_WIDTH - 50 && ball.x < GAME_WIDTH - 30;
    const nearPlunger = ball.y > GAME_HEIGHT - 150 && ball.y < GAME_HEIGHT - 80;

    if (plunger.power > 1 && inLaunchLane && nearPlunger) {
        // Transfer plunger energy to ball - strong upward launch
        ball.vy = -plunger.power * 1.5;  // Strong upward force
        ball.vx = 0; // No horizontal force initially
        ball.launched = true;
        // Sound effect: Play launch sound
    }
}

// Physics update
function updatePhysics() {
    // Update ball
    if (ball.launched) {
        // Add to trail
        const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
        if (speed > 1) {
            ball.trail.push({ x: ball.x, y: ball.y, alpha: 0.5 });
            if (ball.trail.length > 10) {
                ball.trail.shift();
            }
        }

        ball.vy += ball.gravity;
        ball.vx *= ball.damping;
        ball.vy *= ball.damping;

        ball.x += ball.vx;
        ball.y += ball.vy;

        // Simple gate logic - just track if ball has exited launch lane
        if (ball.y < 200 && ball.launched) {
            gate.active = true;
        }

        // Reset when ball returns to launch position
        if (ball.y > GAME_HEIGHT - 150 && ball.x > GAME_WIDTH - 50) {
            gate.active = false;
            ball.launched = false; // Allow re-launch
        }

        // Ball-wall collisions
        walls.forEach(wall => {
            checkWallCollision(ball, wall);
        });

        // Ball-bumper collisions
        bumpers.forEach(bumper => {
            if (checkBumperCollision(ball, bumper)) {
                score += bumper.points;
                scoreElement.textContent = `Score: ${score}`;
                bumper.hitAnimation = 1;
            }
        });

        // Ball-flipper collisions
        checkFlipperCollision(ball, leftFlipper, true);
        checkFlipperCollision(ball, rightFlipper, false);

        // Ball out of bounds (bottom)
        if (ball.y > GAME_HEIGHT + 50) {
            resetBall();
        }
    }

    // Update flippers
    leftFlipper.angle += (leftFlipper.targetAngle - leftFlipper.angle) * 0.3;
    rightFlipper.angle += (rightFlipper.targetAngle - rightFlipper.angle) * 0.3;

    // Update plunger
    if (plunger.pulling && plunger.power < plunger.maxPower) {
        plunger.power += 0.5;
    }

    // Reset plunger power after release (spring returns to rest)
    if (!plunger.pulling && plunger.power > 0) {
        plunger.power -= 2;  // Quickly return to rest
        if (plunger.power < 0) plunger.power = 0;
    }

    // Update bumper animations
    bumpers.forEach(bumper => {
        if (bumper.hitAnimation > 0) {
            bumper.hitAnimation -= 0.05;
        }
    });

    // Fade trail
    ball.trail.forEach(point => {
        point.alpha *= 0.95;
    });
    ball.trail = ball.trail.filter(point => point.alpha > 0.01);
}

// Wall collision
function checkWallCollision(ball, wall) {
    const dx = wall.x2 - wall.x1;
    const dy = wall.y2 - wall.y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const nx = -dy / len;
    const ny = dx / len;

    const t = ((ball.x - wall.x1) * dx + (ball.y - wall.y1) * dy) / (len * len);
    if (t < 0 || t > 1) return;

    const closestX = wall.x1 + t * dx;
    const closestY = wall.y1 + t * dy;
    const dist = Math.sqrt((ball.x - closestX) ** 2 + (ball.y - closestY) ** 2);

    if (dist < ball.radius) {
        const overlap = ball.radius - dist;
        ball.x += nx * overlap;
        ball.y += ny * overlap;

        const dot = ball.vx * nx + ball.vy * ny;
        ball.vx -= 2 * dot * nx;
        ball.vy -= 2 * dot * ny;

        ball.vx *= 0.8;
        ball.vy *= 0.8;
    }
}

// Bumper collision
function checkBumperCollision(ball, bumper) {
    const dx = ball.x - bumper.x;
    const dy = ball.y - bumper.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < ball.radius + bumper.radius) {
        const nx = dx / dist;
        const ny = dy / dist;

        ball.x = bumper.x + nx * (ball.radius + bumper.radius);
        ball.y = bumper.y + ny * (ball.radius + bumper.radius);

        const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
        ball.vx = nx * Math.max(speed, 5) * 1.5;
        ball.vy = ny * Math.max(speed, 5) * 1.5;

        return true;
    }
    return false;
}

// Flipper collision
function checkFlipperCollision(ball, flipper, isLeft) {
    const rad = flipper.angle * Math.PI / 180;
    const endX = flipper.x + Math.cos(rad) * flipper.length;
    const endY = flipper.y + Math.sin(rad) * flipper.length;

    // Check distance to flipper line segment
    const dx = endX - flipper.x;
    const dy = endY - flipper.y;
    const len2 = dx * dx + dy * dy;

    let t = ((ball.x - flipper.x) * dx + (ball.y - flipper.y) * dy) / len2;
    t = Math.max(0, Math.min(1, t));

    const closestX = flipper.x + t * dx;
    const closestY = flipper.y + t * dy;

    const distX = ball.x - closestX;
    const distY = ball.y - closestY;
    const dist = Math.sqrt(distX * distX + distY * distY);

    // Check if ball is colliding with flipper (increased thickness)
    if (dist < ball.radius + 8) {
        // Normal vector pointing away from flipper
        const nx = distX / dist;
        const ny = distY / dist;

        // Push ball away from flipper
        ball.x = closestX + nx * (ball.radius + 8);
        ball.y = closestY + ny * (ball.radius + 8);

        // Check if flipper is moving
        const angleVelocity = flipper.targetAngle - flipper.angle;
        const flipperMoving = Math.abs(angleVelocity) > 2;

        if (flipperMoving) {
            // Flipper is actively flipping - apply strong force
            const flipPower = 18;

            // Calculate flipper tip velocity direction
            const tipVelAngle = rad + (isLeft ? -Math.PI/4 : Math.PI/4);
            const flipDirection = angleVelocity > 0 ? 1 : -1;

            // Apply force in direction of flip
            ball.vx = Math.cos(tipVelAngle) * flipPower * flipDirection;
            ball.vy = -Math.abs(Math.sin(tipVelAngle) * flipPower) - 5;

            // Add some horizontal direction based on which flipper
            if (isLeft) {
                ball.vx = Math.abs(ball.vx) + 3; // Send right
            } else {
                ball.vx = -Math.abs(ball.vx) - 3; // Send left
            }
        } else {
            // Flipper is stationary - just bounce
            const dot = ball.vx * nx + ball.vy * ny;
            ball.vx -= 2 * dot * nx * 0.7;
            ball.vy -= 2 * dot * ny * 0.7;

            // Ensure ball bounces upward
            if (ball.vy > -2) {
                ball.vy = -4;
            }
        }
    }
}

// Reset ball
function resetBall() {
    ball.x = GAME_WIDTH - 40;
    ball.y = GAME_HEIGHT - 120;
    ball.vx = 0;
    ball.vy = 0;
    ball.launched = false;
    ball.trail = [];
}

// Render game
function render() {
    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Draw walls
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    walls.forEach(wall => {
        ctx.beginPath();
        ctx.moveTo(wall.x1, wall.y1);
        ctx.lineTo(wall.x2, wall.y2);
        ctx.stroke();
    });

    // Draw bumpers
    bumpers.forEach(bumper => {
        // Hit animation effect
        if (bumper.hitAnimation > 0) {
            ctx.fillStyle = `rgba(255, 255, 255, ${bumper.hitAnimation * 0.3})`;
            ctx.beginPath();
            ctx.arc(bumper.x, bumper.y, bumper.radius + bumper.hitAnimation * 10, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(bumper.x, bumper.y, bumper.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner circle
        ctx.beginPath();
        ctx.arc(bumper.x, bumper.y, bumper.radius - 5, 0, Math.PI * 2);
        ctx.stroke();
    });

    // Draw flippers
    function drawFlipper(flipper, isLeft) {
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 12;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(flipper.x, flipper.y);
        const rad = flipper.angle * Math.PI / 180;
        const endX = flipper.x + Math.cos(rad) * flipper.length;
        const endY = flipper.y + Math.sin(rad) * flipper.length;
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Draw pivot point
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(flipper.x, flipper.y, 5, 0, Math.PI * 2);
        ctx.fill();
    }

    drawFlipper(leftFlipper, true);
    drawFlipper(rightFlipper, false);

    // Draw one-way gate
    if (gate.active) {
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(GAME_WIDTH - 60, 110);
        ctx.lineTo(GAME_WIDTH - 35, 105);
        ctx.stroke();
    }

    // Draw plunger (always visible)
    const plungerOffset = plunger.power * 3; // How far down the plunger is pulled

    // Draw spring (coils) - compressed when pulled
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    const coilCount = Math.max(4, 8 - Math.floor(plunger.power / 5));  // Fewer coils when compressed
    const springTop = ball.y + ball.radius + 5;  // Spring starts just below ball
    const springBottom = plunger.y + 30 + plungerOffset;
    const springHeight = springBottom - springTop;

    for (let i = 0; i < coilCount; i++) {
        const y = springTop + (springHeight / coilCount) * i;
        ctx.beginPath();
        ctx.moveTo(plunger.x - 8, y);
        ctx.lineTo(plunger.x + 8, y + 2);
        ctx.stroke();
    }

    // Draw plunger stick
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(plunger.x, ball.y + ball.radius + 5);  // Stick starts below ball
    ctx.lineTo(plunger.x, plunger.y + 30 + plungerOffset);
    ctx.stroke();

    // Draw plunger tip (just below the ball)
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(plunger.x, ball.y + ball.radius + 8, 6, 0, Math.PI * 2);
    ctx.fill();

    // Draw plunger handle
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.strokeRect(plunger.x - 10, plunger.y + 25 + plungerOffset, 20, 10);

    // Draw ball trail
    ball.trail.forEach((point, i) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${point.alpha * 0.3})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, ball.radius * (i / ball.trail.length), 0, Math.PI * 2);
        ctx.fill();
    });

    // Draw ball
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();

    // Removed launch lane guide - was causing visual clutter
}

// Game loop
function gameLoop() {
    updatePhysics();
    render();
    requestAnimationFrame(gameLoop);
}

// Start game
gameLoop();