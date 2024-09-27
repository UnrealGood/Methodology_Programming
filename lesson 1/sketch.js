function setup() {
  createCanvas(1200,800 );
}

function draw() {
  background("#ADD8E6");
  
  noStroke()
  fill ("#556B2F")
  rect (0, 600, 1200, 200)
  fill  ("#FFD700")
   rect(100, 100, 100)
  
   fill ("#8B4513")
  rect (500, 400, 300, 250)
  
  fill ("#A0522D")
   triangle (450 , 400, 850, 400, 650, 200)
  
  circle (650, 500, 100)
  
  stroke("#000000")
  strokeWeight(10)
  line (650, 540, 650 ,460)
   line(600, 500, 700, 500)
  
    noStroke()
   rect(100, 300, 50, 300)
  
  fill ("#008000")
  
  triangle (50,400, 125, 250, 200, 400)
  triangle (50,500, 200, 500, 125, 300)
  
  fill ("#DCDCDC")
  rect (300, 150, 200 ,100)
   rect (800, 50, 200 ,100)
   rect (510, 25, 200 ,100)
  
}