function setup(){
createCanvas(window.innerWidth, window.innerHeight)
}

function draw(){
   setInterval(function(){
    
    let colors = ['#EF7A6A', '#FFB84E', '#FFDC00', '#6EB2F0', '#65D6A0', '#5175D2', '#39CCCC', '#B792C3']
    let c = Math.floor(Math.random()* colors.length)
    let l = Math.random()* 60
    let w = Math.random()* 60
    let x = Math.random()* window.innerWidth
    let y = Math.random()* window.innerHeight
    fill(colors[c])
    rect(x, y, l, w)
        
    }, 2000)

    
}