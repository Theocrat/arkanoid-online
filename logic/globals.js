var barPosition = 0

const ball = {
    // Location of the ball, provided as the coordinates of its center
    "x": 0,      "y": 85,
    
    // Velocity of the ball, provided as its speed and its angle
    "speed": 5,  "angle": 90
}

const blockList = []

const elements = {
    "score": null,
    "barGroup": null,
    "ballGroup": null,
    "blockGroup": null,
    "bonusGroup": null
}