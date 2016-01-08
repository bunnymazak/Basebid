using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Measurement.Controllers
{
    public class BathController : Controller
    {
        //
        // GET: /Bath/

        public ActionResult Index()
        {
            return View("Demo");
        }
        public ActionResult Demo()
        {
            return View("Demo");
        }
        public ActionResult Plumbing()
        {
            return View("Plumbing");
        }
    }
}
