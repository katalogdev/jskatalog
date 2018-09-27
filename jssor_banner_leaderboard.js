jssor_banner_leaderboard = function () {
                var e = [[{
                    b: -1
                    , d: 1
                    , o: -0.7
                }], [{
                    b: 900
                    , d: 2000
                    , x: -379
                    , e: {
                        x: 7
                    }
                }], [{
                    b: 900
                    , d: 2000
                    , x: -379
                    , e: {
                        x: 7
                    }
                }], [{
                    b: -1
                    , d: 1
                    , o: -1
                    , sX: 2
                    , sY: 2
                }, {
                    b: 0
                    , d: 900
                    , x: -171
                    , y: -341
                    , o: 1
                    , sX: -2
                    , sY: -2
                    , e: {
                        x: 3
                        , y: 3
                        , sX: 3
                        , sY: 3
                    }
                }, {
                    b: 900
                    , d: 1600
                    , x: -283
                    , o: -1
                    , e: {
                        x: 16
                    }
                }]];
                var d = {
                    $AutoPlay: 1
                    , $SlideDuration: 800
                    , $SlideEasing: $Jease$.$OutQuint
                    , $CaptionSliderOptions: {
                        $Class: $JssorCaptionSlideo$
                        , $Transitions: e
                    }
                    , $ArrowNavigatorOptions: {
                        $Class: $JssorArrowNavigator$
                    }
                    , $BulletNavigatorOptions: {
                        $Class: $JssorBulletNavigator$
                    }
                };
                var d = new $JssorSlider$("jssor_banner_leaderboard", d);

                function f() {
                    var c = d.$Elmt.parentNode;
                    var a = c.clientWidth;
                    if (a) {
                        var b = Math.min(MAX_WIDTH || a, a);
                        d.$ScaleWidth(b)
                    }
                    else {
                        window.setTimeout(f, 30)
                    }
                }
                f();
                $Jssor$.$AddEvent(window, "load", f);
                $Jssor$.$AddEvent(window, "resize", f);
                $Jssor$.$AddEvent(window, "orientationchange", f)
            };
