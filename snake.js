/** @format */

class Snake {
	constructor(canvasId, initFrameRate, scoreBoardHeight) {
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");
		this.frameRate = initFrameRate;
		this.gameBoardTileSize = 40;
		this.score = { loses: 0, wins: 0 };
		this.startingWormTailLength = 5;
		this.scoreBoardHeight = scoreBoardHeight;

		this.wormHead = {
			x: Math.floor(
				document.body.clientWidth / this.gameBoardTileSize / 2
			),
			y: Math.floor(
				(document.body.clientHeight - this.scoreBoardHeight) /
					this.gameBoardTileSize /
					2
			),
		};
		this.tileCount = {
			width: document.body.clientWidth / this.gameBoardTileSize,
			height:
				(document.body.clientHeight - this.scoreBoardHeight) /
				this.gameBoardTileSize,
		};
		this.wormTail = [];

		this.init();
	}

	init() {
		this.resizeCanvas();
		this.paintCanvasBackground();
	}

	moveWormHead({ keyCode }, wormHead) {
		switch (keyCode) {
			case 37: //left
				return { x: parseInt(-1), y: parseInt(0) };
			case 38: //up
				return { x: parseInt(0), y: parseInt(-1) };
			case 39: //right
				return { x: parseInt(1), y: parseInt(0) };
			case 40: //down
				return { x: parseInt(0), y: parseInt(1) };
		}
	}

	resizeCanvas() {
		this.canvas.width = document.body.clientWidth;
		this.canvas.height = document.body.clientHeight - this.scoreBoardHeight;
	}

	paintCanvasBackground() {
		this.ctx.fillStyle = "#2C3941";
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}

	renderWormTail(wormTail, direction) {
		this.paintCanvasBackground();
		this.ctx.fillStyle = "#00ff00";

		wormTail.forEach((wormBlock) => {
			this.ctx.fillRect(
				wormBlock.x * this.gameBoardTileSize,
				wormBlock.y * this.gameBoardTileSize,
				this.gameBoardTileSize - 1,
				this.gameBoardTileSize - 1
			);
		});
	}
}
