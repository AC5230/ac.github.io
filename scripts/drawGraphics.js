function drawBarrel(a, xoffset, yoffset, width, length, alpha, isghost, type) {
	ctx.save();
	ctx.strokeStyle = "rgba(85, 85, 85, " + alpha + ")";
	ctx.lineWidth = 5;
	ctx.fillStyle = "rgba(153, 153, 153, " + alpha + ")";
	ctx.translate(tankpointx, tankpointy, 0);
	if (editmode === false) {
		ctx.rotate((angle(tankpointx, tankpointy, mouse.x, mouse.y) + a) * (Math.PI / 180));
	} else if ((isghost === true) && (shiftheld === true)) {
		if ((a <= -172.5) || (a >= 172.5)) {
			a = 180;
		}
		a -= a % 15;
		ctx.rotate(a * (Math.PI / 180));
	} else {
		ctx.rotate(a * (Math.PI / 180));
	}

	if (type === 0) {
		ctx.fillRect(xoffset, 0 - ((width / 2) + yoffset), length, width);
		ctx.strokeRect(xoffset, 0 - ((width / 2) + yoffset), length, width);
	}

	if (type === 1) {
		ctx.beginPath();
		ctx.moveTo(xoffset + length, -(width / 2) - yoffset);
		ctx.lineTo(xoffset + length + (length / 2), 0 - ((width * 1.5) + yoffset));
		ctx.lineTo(xoffset + length + (length / 2), ((width * 1.5) - yoffset));
		ctx.lineTo(xoffset + length, (width / 2) - yoffset);
		ctx.lineTo(xoffset + length, -(width / 2) - yoffset);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		ctx.fillRect(xoffset, 0 - ((width / 2) + yoffset), length, width);
		ctx.strokeRect(xoffset, 0 - ((width / 2) + yoffset), length, width);
	}

	if (type > 1) {
		ctx.beginPath();
		ctx.moveTo(xoffset + 20, -(width / 4) - yoffset);
		ctx.lineTo(xoffset + 20 + (length / 2), 0 - ((width / 2) + yoffset) - (width / 4));
		ctx.lineTo(xoffset + 20 + (length / 2), ((width / 2) - yoffset) + (width / 4));
		ctx.lineTo(xoffset + 20, (width / 4) - yoffset);
		ctx.lineTo(xoffset + 20, -(width / 4) - yoffset);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}
	ctx.restore();
}

function drawBullet(x, y, size, transparency) {
	//Draw a bullet using the given parameters.

	ctx.save();
	ctx.strokeStyle = "#555555";
	ctx.lineWidth = 5;
	ctx.fillStyle = document.getElementById("color").value;
	ctx.globalAlpha = transparency;
	ctx.beginPath();
	ctx.arc(x, y, size + 2, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
}

function drawTrap(x, y, size, angle, transparency) {
	ctx.save();
	ctx.strokeStyle = "#555555";
	ctx.lineWidth = 5;
	ctx.fillStyle = document.getElementById("color").value;
	ctx.globalAlpha = transparency;
	ctx.translate(x, y);
	ctx.beginPath();
	ctx.moveTo(0, size / 3);
	ctx.rotate(60 * (Math.PI / 180));
	ctx.lineTo(0, size);
	ctx.rotate(60 * (Math.PI / 180));
	ctx.lineTo(0, size / 3);
	ctx.rotate(60 * (Math.PI / 180));
	ctx.lineTo(0, size);
	ctx.rotate(60 * (Math.PI / 180));
	ctx.lineTo(0, size / 3);
	ctx.rotate(60 * (Math.PI / 180));
	ctx.lineTo(0, size);
	ctx.rotate(60 * (Math.PI / 180));
	ctx.lineTo(0, size / 3);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
}

function drawDrone(x, y, size, angle) {
	ctx.save();
	ctx.strokeStyle = "#555555";
	ctx.lineWidth = 5;
	ctx.fillStyle = document.getElementById("color").value;
	ctx.translate(x, y);
	ctx.beginPath();
	ctx.rotate((angle + 10) * (Math.PI / 180));
	ctx.moveTo(0, size);
	ctx.rotate(120 * (Math.PI / 180));
	ctx.lineTo(0, size);
	ctx.rotate(120 * (Math.PI / 180));
	ctx.lineTo(0, size);
	ctx.rotate(120 * (Math.PI / 180));
	ctx.lineTo(0, size);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
}

function drawNecro(x, y, size, angle) {
	ctx.save();
	ctx.fillStyle = document.getElementById("color").value;
	ctx.strokeStyle = "#555555";
	ctx.lineWidth = 10;
	ctx.translate(x, y);
	ctx.rotate(angle * (Math.PI / 180));
	ctx.strokeRect(-size / 2, -size / 2, size, size);
	ctx.fillRect(-size / 2, -size / 2, size, size);
	ctx.restore();
}