class Maze {
    constructor(width, height, grid) {
        this.width = width
        this.height = height
        this.grid = grid
        this.start = "1"
        this.goal = "2"
        this.wall = "*"
        this.number = 1
    }

    findGoal(x, y) {
        if (this.isOutside(x, y)) {
            return false
        }

        if (this.isGoal(x, y)) {
            return true
        }

        if (this.isBlocked(x, y)) {
            return false
        }

        if (!this.isOpen(x, y)) {
            return false
        }

        this.setValue(x, y, ".")
        
        // Top
        if (this.findGoal(x, y + 1)) {
            return true
        }

        // Bottom
        if (this.findGoal(x, y - 1)) {
            return true
        }

        // Right
        if (this.findGoal(x + 1, y)) {
            return true
        }

        // Left
        if (this.findGoal(x - 1, y)) {
            return true
        }

        this.setValue(x, y, " ")
        return false
    }

    isOutside(x, y) {
        if (x >= this.width || x < 0) {
            return true
        }

        if (y >= this.height || y < 0) {
            return true
        }

        return false
    }

    isGoal(x, y) {
        return this.getValue(x, y) === this.goal
    }

    isBlocked(x, y) {
        return this.getValue(x, y) === this.wall
    }

    isOpen(x, y) {
        if (this.getValue(x, y) == " ") {
            return true
        }

        if (this.getValue(x, y) == this.start) {
            return true
        }

        return false
    }

    getValue(x, y) {
        return this.grid[y][x]
    }

    setValue(x, y, value) {
        if (this.getValue(x, y) != this.start) {
            this.grid[y][x] = value
        }
    }
}

module.exports = Maze;