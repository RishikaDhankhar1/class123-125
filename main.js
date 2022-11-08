 noseX=0;
 noseY=0;
 diffrence=0;
 rightWristx=0;
 leftWristx=0;




function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log('poseNet is initialized');

}

function gotPoses(results){
if(results.length>0)
{
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
leftWristx=results[0].pose.leftWrist.x;
rightWristx=results[0].pose.rightWrist.x;
}
}


function draw(){
    background('#DBA6F7');

    document.getElementById("square_side").innerHTML="Width and height of the square will be = "+diffrence+"px";
    fill("peachpuff");
    stroke("purple");
    square(noseX,noseY,diffrence);
}

