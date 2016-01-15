
/// <reference path="../../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../Scripts/typings/signalr/signalr.d.ts" />

var chat = $.connection.chatHub;

chat.client.addNewMessageToPage = function (name, message) {
}

$.connection.hub.start().done(function () { });