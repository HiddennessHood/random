function openChat(evt, chatName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabchat");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("chatbutton");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(chatName).style.display = "block";
    evt.currentTarget.className += " active";
}
function openChannel(evt, channelName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("channelbutton");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(channelName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("ortbutton").click();
document.getElementById("lasqabutton").click();
