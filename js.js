var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = 500;
var c = canvas.getContext("2d");


var mouse ={
      x: undefined,
      y:undefined
}
var maxRadius = 40;

var colorArray = [
            '#2E0927',
            '#D90000',
            '#FF2D00',
            '#FF8C00',
            '#04756F',
];

window.addEventListener("mousemove", function(event){
      mouse.x = event.x;
      mouse.y = event.y;
})

window.addEventListener("resize" ,function(){
      canvas.width = window.innerWidth;
 circleArray = [];
      init();
});

function Circle(x, y, dx, dy, radius){
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.minRadius= radius;
      this.color = colorArray[Math.floor(Math.random()* colorArray.length)];
      this.draw = function(){
            c.beginPath();
            c.arc(this.x, this.y,  this.radius, 0, Math.PI *2, false);
            c.fillStyle = this.color;
            c.fill();





      }
      this.update = function() {
            if(this.x +this.radius > canvas.width ||this. x- this.radius < 0 ){
                  this.dx =-this.dx;
            }
            if(this.y +this.radius > canvas.height || this.y- this.radius < 0 ){
                  this.dy =-this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;

            if( mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y -this.y< 50&& mouse.y - this.y > -50) {
                  if(this.radius < maxRadius){
                        this.radius += 1;
                  }

            }else if(this.radius > this.minRadius) {
                  this.radius--;
            }

            this.draw();
      }
}

var circleArray = [];


init = function(){

 circleArray = [];
      for (var i = 0; i <1600 ; i++) {
            var radius = Math.random() * 3 +1;
            var x = Math.random() * (canvas.width - radius*2) + radius;
            var y = Math.random() * (canvas.height - radius*2) + radius;
            var dx = (Math.random()  -0.5) ;
            var dy = (Math.random()  -0.5) ;

            circleArray.push(new Circle(x, y, dx, dy, radius));


      }
      animate();
}

function animate(){
      requestAnimationFrame(animate);
      c.clearRect(0 , 0, canvas.width, canvas.height);

for (var i = 0; i < circleArray.length; i++) {
circleArray[i].update();
}
text();
}

function text(){

      c.font = "750% Arial";
      c.textAlign = "center";
      c.fillStyle="#000000";
      c.fillText("Damian Jans",canvas.width/2 ,canvas.height/2);
      c.font = "500% Arial";
      c.fillText("Freelance Web-Desinger",canvas.width/2 ,canvas.height/2 + 80);
}

init();
