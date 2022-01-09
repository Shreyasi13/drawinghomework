noseX=0;
noseY=0;
leftWristx=0;
rightWristx=0;
difference=0;
function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes)
}
function draw(){
   document.getElementById("square_side").innerHTML="Width and Height of a square will be= " + difference+"px"
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    text('hello',noseX,noseY,difference)
    
}
function modelLoaded(){
    console.log('PoseNet is saved');
}
function gotposes(results){
if(results.length>0){
console.log(results);
noseX= results[0].pose.nose.x;
noseY= results[0].pose.nose.y;
console.log("noseX= "+ noseX + " noseY= "+noseY);

leftWristx=results[0].pose.leftWrist.x;
rightWristx=results[0].pose.rightWrist.x;
difference= floor(leftWristx-rightWristx);
console.log("leftwristx= "+ leftWristx+ " rightwristy= "+rightWristx +'difference= '+ difference);
}
}
