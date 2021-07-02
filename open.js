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
