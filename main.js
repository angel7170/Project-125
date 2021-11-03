noseX = 0;
noseY = 0;
leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' ,gotPoses);
}

function draw()
{
    background("#a503fc");
    fill('#9ac5ed');
    textSize(difference);
    text('Rachel', 50, 400);
}
function modelLoaded()
{
    console.log("PoseNet Is Initialized!");
}

function gotPoses(results)
{
    if(results.length > 0) //If the array has more than 0 value in it then execute the below action
    {
       console.log(results);
       
       leftWrist = results[0].pose.leftWrist.x;
       rightWrist = results[0].pose.rightWrist.x;
       difference = leftWrist - rightWrist;
       noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;
    }
}