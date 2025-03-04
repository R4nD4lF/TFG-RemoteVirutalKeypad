var stompClient = null;

$(document).ready(function() {
    console.log("Index page is ready");
    connect();

    $("#send").click(function() {
        sendMessage();
    });
});

function connect() { //http://161.22.45.138:8081
    var socket = new SockJS('http://localhost:8081/notifications');
    stompClient = Stomp.over(socket);
     var header={
        AccessControlAllowOrigin : "*"
    };
    stompClient.connect(header, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/queue/12548605-d540-45dd-9f59-2fd069d4a5b4', function (message) {
            showMessage(message.body);
        });
    });
}

function showMessage(message) {
    $("#messages").append("<tr><td>" + message + "</td></tr>");
}

function sendMessage() {
    console.log("sending message");
    stompClient.send("/queue/c09146ec-8bb0-402b-9c2f-51e605d7cbc6", {}, $("#message").val());
}
