(function () {
    var canvas = document.getElementById("canvas");

    var ctext = canvas.getContext("2d");

    ctext.beginPath();
    ctext.strokeStyle = "black";
    ctext.lineWidth = 3;

    ctext.beginPath();
    ctext.arc(300, 150, 40, 0, 2 * Math.PI);
    ctext.fillStyle = "tomato";
    ctext.fill();
    ctext.stroke();

    ctext.beginPath();
    ctext.lineTo(300, 190);
    ctext.lineTo(300, 300);
    ctext.stroke();

    ctext.beginPath();
    ctext.lineTo(300, 215);
    ctext.lineTo(375, 175);
    ctext.stroke();

    ctext.beginPath();
    ctext.lineTo(300, 215);
    ctext.lineTo(225, 175);
    ctext.stroke();

    ctext.beginPath();
    ctext.lineTo(300, 300);
    ctext.lineTo(225, 375);
    ctext.stroke();

    ctext.beginPath();
    ctext.lineTo(300, 300);
    ctext.lineTo(375, 375);
    ctext.stroke();
})();
