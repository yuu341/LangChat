using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace LangChat.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// チャットをするためのサンプル
        /// </summary>
        /// <returns></returns>
        public ActionResult Chat()
        {
            return View();
        }
    }
}
