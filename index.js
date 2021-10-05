var tpodcast = document.getElementById("podcast");
var icon = document.getElementById("icon");

icon.onclick = function() 
{
    if(tpodcast.paused)
    {
        tpodcast.play();
        icon.src = "images/pause.png";
    }
    else
    {
        tpodcast.pause();
        icon.src = "images/play.png";
    }
}