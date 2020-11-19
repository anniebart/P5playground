function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    function makeLoop(){
        let i = 0
        if(i<100){
            circle(i, i, i*10)
            i++;
            makeLoop();
        } else {
            return
        }
  

    }
  }
