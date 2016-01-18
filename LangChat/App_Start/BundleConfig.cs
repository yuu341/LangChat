using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace LangChat
{
    public class BundleConfig
    {
        // バンドルの詳細については、http://go.microsoft.com/fwlink/?LinkId=301862 を参照してください
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                "~/Scripts/jquery/jquery.unobtrusive*",
                "~/Scripts/jquery/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                "~/Scripts/knockout/knockout-{version}.js",
                "~/Scripts/knockout/knockout.validation.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/sammy/sammy-{version}.js",
                "~/Scripts/app/common.js",
                "~/Scripts/app/app.datamodel.js",
                "~/Scripts/app/app.viewmodel.js",
                "~/Scripts/app/home.viewmodel.js",
                "~/Scripts/app/_run.js"));

            //古家追加
            bundles.Add(new ScriptBundle("~/bundles/signalr")
                .Include("~/Scripts/signalr/jquery.signalR-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularjs")
                .Include("~/Scripts/angularjs/angular.js")
                .Include("~/Scripts/angularjs/angular-aria.js")
                .Include("~/Scripts/angularjs/angular-cookies.js")
                .Include("~/Scripts/angularjs/angular-csp.js")
                .Include("~/Scripts/angularjs/angular-loader.js")
                .Include("~/Scripts/angularjs/angular-message-format.js")
                .Include("~/Scripts/angularjs/angular-messages.js")
                .Include("~/Scripts/angularjs/angular-mocks.js")
                .Include("~/Scripts/angularjs/angular-resource.js")
                .Include("~/Scripts/angularjs/angular-route.js")
                .Include("~/Scripts/angularjs/angular-sanitize.js")
                .Include("~/Scripts/angularjs/angular-scenario.js")
                .Include("~/Scripts/angularjs/angular-touch.js")
                .Include("~/Scripts/angularjs/i18n/angular-locale_ja-jp.js")
                .Include("~/Scripts/angularjs/i18n/angular-locale_ja.js")
                
                );

            bundles.Add(new ScriptBundle("~/bundles/ts/chat")
                .IncludeDirectory("~/TypeScripts/chat", "*.js", true));

            // 開発と学習には、Modernizr の開発バージョンを使用します。次に、実稼働の準備が
            // できたら、http://modernizr.com にあるビルド ツールを使用して、必要なテストのみを選択します。
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/bootstrap/bootstrap.js",
                "~/Scripts/bootstrap/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                 "~/Content/normalize.css",
                 "~/Content/bootstrap.css",
                 "~/Content/Site.css"));
        }
    }
}
