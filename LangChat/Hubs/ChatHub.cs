﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace LangChat.Hubs
{
    public class ChatHub : Hub
    {
        public void Send(string message)
        {
            Clients.All.addNewMessageToPage(message);
        }
    }
}