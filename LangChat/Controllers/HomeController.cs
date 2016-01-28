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
        [AllowAnonymous]
        public ActionResult Chat()
        {
            return View();
        }

        /// <summary>
        /// d3.jsで世界地図をいろいろするためのもの
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous]
        public ActionResult World()
        {
            return View();
        }


    }
}
