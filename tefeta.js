#!/usr/local/bin/node
import { readFileSync } from "fs"
import Maze from "./Maze.js"

const file = process.argv[2];

function readFile(file) {
    const read = readFileSync(file, "utf8").trim()
    const lines = read.split("\n");
    let [width, height] = lines[0].split("x")
    
    const grid = lines.slice(1).map((line) => {
        return line.split('')
    })

    let xStart = -1;
    let yStart = -1;

    if(height === undefined) {
        width = lines.length
        height = grid[0].length
    }
    
    for (let y = 0; y < height; y++) {
        const row = grid[y]
        const x = row.indexOf("1")
        
        if (x != -1) {
            xStart = x
            yStart = y
            break
        }
    }
    const maze = new Maze(width, height, grid)
    maze.findGoal(xStart, yStart)
    const solved = maze.grid.map(line => line.join("")).join("\n")
    console.log(solved);
}


readFile(file)
