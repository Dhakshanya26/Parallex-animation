
$(function () {
    // initialize skrollr if the window width is large enough
    if ($(window).width() > 1025) {
        window.skrollr.init({ forceHeight: false, smoothScrolling: false });
    }

    // disable skrollr if the window is resized below 768px wide
    $(window).on('resize', function () {
        if ($(window).width() <= 1025) {
            window.skrollr.init().destroy(); // skrollr.init() returns the singleton created above
        }
    });
});


 
$(function () {
    if (1==1) {
        var a = 0;
        for (; a < 15; a += 1) {
            setTimeout(function b() {
                var a = Math.random() * 1e3 + 5e3,
                    c = $("", {
                        "class": "smoke",
                        css: {
                            opacity: 0,
                            left: Math.random() * 200 + 80
                        }
                    });
                $(c).appendTo("#viewport");
                $.when($(c).animate({
                    opacity: 1
                }, {
                    duration: a / 4,
                    easing: "linear",
                    queue: false,
                    complete: function () {
                        $(c).animate({
                            opacity: 0
                        }, {
                            duration: a / 3,
                            easing: "linear",
                            queue: false
                        })
                    }
                }), $(c).animate({
                    bottom: $("#viewport").height()
                }, {
                    duration: a,
                    easing: "linear",
                    queue: false
                })).then(function () {
                    $(c).remove();
                    b()
                })
            }, Math.random() * 3e3)
            }
        } else {
            "use strict";
            var a = 0;
            for (; a < 15; a += 1) {
                setTimeout(function b() {
                    var a = Math.random() * 1e3 + 5e3,
                        c = $("", {
                            "class": "smoke",
                            css: {
                                left: Math.random() * 200 + 80
                            }
                        });
                    $(c).appendTo("#viewport");
                    $.when($(c).animate({}, {
                        duration: a / 4,
                        easing: "linear",
                        queue: false,
                        complete: function () {
                            $(c).animate({}, {
                                duration: a / 3,
                                easing: "linear",
                                queue: false
                            })
                        }
                    }), $(c).animate({
                        bottom: $("#viewport").height()
                    }, {
                        duration: a,
                        easing: "linear",
                        queue: false
                    })).then(function () {
                        $(c).remove();
                        b()
                    })
                }, Math.random() * 3e3)
                }
            }
}())