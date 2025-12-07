function initialize() {
    // Identify the span element which stores the score
    elements.score = document.getElementById("score")

    // Identify the rect element which is the player's pad/bar
    elements.barGroup = document.getElementById("bar-group")

    // Identify the circle element which represents the ball
    elements.ballGroup = document.querySelector("ball")

    // Identify the group element (g) where all the blocks are
    elements.blockGroup = document.querySelector("block")

    // Identify teh group element (g) in which loot drops appear
    elements.bonusGroup = document.getElementById("bonus-group")
}