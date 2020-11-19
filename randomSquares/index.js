function setup(){
    frameRate(5);
createCanvas(window.innerWidth, window.innerHeight)
}

function draw(){
 
    
    let colors = ['#EF7A6A', '#FFB84E', '#FFDC00', '#6EB2F0', '#65D6A0', '#5175D2', '#39CCCC', '#B792C3']
    let c = Math.floor(Math.random()* colors.length)
    
    fill(colors[c])
    stroke(colors[c])
    circle(Math.random()*window.innerWidth, Math.random()*window.innerHeight, (window.innerWidth/(Math.random()*100)))
   
   

    

    
    
    
    
    

    
}

