status = "";
input = "";
objects = [];

function setup(){
    canvas = createCanvas(340, 340);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(340, 340);
    video.hide();
}

function draw(){
    image(video, 0, 0, 340, 340);
    if(status == true){
        for(i = 0; i > objects.length; i++){
            percent = floor(objects[i].confidence*100);
        }
    }
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("object").value;
}

function modelLoaded(){
    console.log("Model has been loaded");
    status = true;
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}