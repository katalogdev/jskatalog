 (function (a) {
                a(document).ready(function () {
                    a("#cssmenu li.active").addClass("open").children("ul").show();
                    a("#cssmenu li.has-sub>a").on("click", function () {
                        a(this).removeAttr("href");
                        var b = a(this).parent("li");
                        if (b.hasClass("open")) {
                            b.removeClass("open");
                            b.find("li").removeClass("open");
                            b.find("ul").slideUp(200)
                        }
                        else {
                            b.addClass("open");
                            b.children("ul").slideDown(200);
                            b.siblings("li").children("ul").slideUp(200);
                            b.siblings("li").removeClass("open");
                            b.siblings("li").find("li").removeClass("open");
                            b.siblings("li").find("ul").slideUp(200)
                        }
                    })
                })
            });
   