song="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";


function preload(){
   song= loadSound('music.mp3');
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    pose= ml5.poseNet(video, modelLoaded);
    pose.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('success');
}

function gotPoses(results){
    if(results.length > 0){
      console.log(results);
      leftWristX = results[0].pose.leftWrist.x;  
      leftWristX = results[0].pose.leftWrist.y; 
      righttWristX = results[0].pose.leftWrist.x; 
      rightWristX = results[0].pose.leftWrist.y; 
    }
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function fun(){
    song.play();
}