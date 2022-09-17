var marks = [30,40,45,35];
var sum=0
function avg(){
  
  for(var i=0;i<marks.length;i++){
    sum=sum+marks[i]; 
  }
  var avge=sum/marks.length
 console.log(avge)
}

avg()


for(i=0;i<marks.length;i++){
  if(marks[i]>40){
console.log(marks[i])
  }
}





console.log()

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(150);
}