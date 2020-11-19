function setup() {
    createCanvas(600, 600);
    // frameRate(1)
   noLoop()
  }
  
  function draw() {
    
    strokeWeight(30)
    let colors = ['white', 'black', '#D8D6E4', '#4D7292', '#365482', '#274F6D', '#383838']
  
    rect(0,0, width, height)
    
    for (let i =0; i<height; i+=150){
      strokeWeight(20)
      circle(i*Math.random()+ 100, i-30, i/2)
      fill(colors[Math.floor(Math.random()*colors.length)])
    }
    for (let i=0; i < 5; i++){
    rect(width*Math.random(), height*Math.random()+100,width*Math.random(), height*Math.random() /2)
       fill(colors[Math.floor(Math.random()*colors.length)])
    }
    
  }