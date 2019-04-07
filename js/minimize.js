
jQuery(function($) {
    $(document).on('s123.page.ready', function(event) {
        var layoutNUM = $('#layoutNUM').val();
        if (layoutNUM != '2' && layoutNUM != '15' && layoutNUM != '3' && layoutNUM != '11' && layoutNUM != '4' && layoutNUM != '20') {
            if ($('.inside_page').length == 0) {
                if ($('.opacity-full').length > 0) { //If there is no opacity FULL we take the menu right when we start scroll
                    var beforeScrollMenuHeight = $('#mainNav').height() + parseInt($('body').css('margin-top'), 10);
                } else {
                    if (layoutNUM != '13') {
                        var beforeScrollMenuHeight = parseInt($('body').css('margin-top'), 10);
                    } else {
                        var beforeScrollMenuHeight = parseInt($('body').css('margin-top'), 10) + 40; //Layout 13 have 40px margin top
                    }
                }
                if (beforeScrollMenuHeight == 0) {
                    beforeScrollMenuHeight = 1;
                }
            } else {
                var beforeScrollMenuHeight = parseInt($('body').css('margin-top'), 10);
            }
            $('body').scrollspy({
                target: '#mainNav',
                offset: beforeScrollMenuHeight
            });
            $('#mainNav').affix({
                offset: {
                    top: beforeScrollMenuHeight
                }
            });
            if (typeof document.fonts === 'undefined' || typeof document.fonts.ready === 'undefined' || typeof document.fonts.ready.then === 'undefined') {
                setTimeout(function() {
                    ReduseMenuSizeWhenWeDontHavePlace();
                }, 150);
            } else {
                document.fonts.ready.then(function() {
                    ReduseMenuSizeWhenWeDontHavePlace();
                });
            }
            $(window).resize(function() {
                ReduseMenuSizeWhenWeDontHavePlace();
            });
        }
    });
});

/**
 * The function initialize the Promo Module.
 */
function PromoModuleInitialize() {
    $(document).on('s123.page.ready', function(event) {
        var $section = $('section.my-promo-module-v2');
        $($section).each(function(index) {
            var $sectionThis = $(this);
            $sectionThis.find('.carousel').carousel();
            $sectionThis.find('.promoForm').each(function(index) {
                var $form = $(this);
                /**
                 * jQuery Validation Plugin Initial
                 * Documentation : http://jqueryvalidation.org/documentation/
                 */
                $form.validate({
                    errorElement: 'div',
                    errorClass: 'help-block',
                    focusInvalid: true,
                    ignore: "",
                    highlight: function(e) {
                        $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
                    },
                    success: function(e) {
                        $(e).closest('.form-group').removeClass('has-error');
                        $(e).remove();
                    },
                    submitHandler: function(form) {
                        var $form = $(form);
                        $form.find('button:submit').prop('disabled', true);
                        var url = "/versions/" + $('#versionNUM').val() + "/include/contactO.php";
                        if ($form.hasClass('custom-form')) {
                            url = "/versions/" + $('#versionNUM').val() + "/include/customFormO.php";
                        }
                        $.ajax({
                            type: "POST",
                            url: url,
                            data: $form.serialize(),
                            success: function(data) {
                                var dataObj = jQuery.parseJSON(data);
                                $form.trigger("reset");
                                bootbox.alert({
                                    title: translations.sent,
                                    message: translations.ThankYouAfterSubmmit + '<iframe src="/versions/' + $('#versionNUM').val() + '/include/contactSentO.php?w=' + $('#w').val() + '&websiteID=' + dataObj.websiteID + '&moduleID=' + dataObj.moduleID + '" style="width:100%;height:30px;" frameborder="0"></iframe>',
                                    className: 'contactUsConfirm',
                                    backdrop: true
                                });
                                $form.find('button:submit').prop('disabled', false);
                            }
                        });
                        return false;
                    }
                });
            });
        });
    });
}
jQuery(function($) {
    PromoModuleInitialize();
});
/**
 * The function initialize the Promo Module.
 */
function PromoOldV1ModuleInitialize() {
    $(document).on('s123.page.ready', function(event) {
        var $section = $('section.my-module-promo');
        $($section).each(function(index) {
            var $sectionThis = $(this);
            $sectionThis.find('.carousel').carousel();
        });
    });
}
jQuery(function($) {
    CountdownModuleInitialize();
});
/**
 * The function initialize the Countdown Module.
 */
function CountdownModuleInitialize() {
    $(document).on('s123.page.ready', function(event) {
        $('.my-module-countdown-container').each(function() {
            var $this = $(this);
            var $clock = $this.find('.clock');
            var $message = $this.find('.message');
            var datetime = $clock.data('datetime');
            var type = $clock.data('type');
            var futureDate = new Date(datetime);
            var currentDate = new Date();
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            if (diff <= 0) {
                diff = 0;
                $message.css('visibility', 'visible');
            }
            switch (type) {
                case 1:
                    var clockFace = 'DailyCounter';
                    break;
                case 2:
                    var clockFace = 'HourlyCounter';
                    break;
                case 3:
                    var clockFace = 'MinuteCounter';
                    break;
                default:
                    var clockFace = 'DailyCounter';
            }
            /**
             * Countdown Modules - FlipClock Initial
             * Documentation : http://flipclockjs.com/
             */
            $clock = $clock.FlipClock(diff, {
                clockFace: clockFace,
                autoStart: true,
                countdown: true,
                callbacks: {
                    stop: function() {
                        $message.css('visibility', 'visible');
                    }
                }
            });
        });
    });
}! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(e) {
        function t(n) {
            if (o[n]) return o[n].exports;
            var i = o[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var o = {};
        return t.m = e, t.c = o, t.p = "dist/", t(0)
    }([function(e, t, o) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
                }
                return e
            },
            a = o(1),
            r = (n(a), o(5)),
            c = n(r),
            u = o(6),
            s = n(u),
            d = o(7),
            f = n(d),
            l = o(8),
            m = n(l),
            p = o(9),
            b = n(p),
            v = o(10),
            g = n(v),
            y = o(13),
            w = n(y),
            h = [],
            k = !1,
            x = document.all && !window.atob,
            j = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded"
            },
            O = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
                return e && (k = !0), k ? (h = (0, g["default"])(h, j), (0, b["default"])(h, j.once), h) : void 0
            },
            _ = function() {
                h = (0, w["default"])(), O()
            },
            z = function() {
                h.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                })
            },
            A = function(e) {
                return e === !0 || "mobile" === e && m["default"].mobile() || "phone" === e && m["default"].phone() || "tablet" === e && m["default"].tablet() || "function" == typeof e && e() === !0
            },
            E = function(e) {
                return j = i(j, e), h = (0, w["default"])(), A(j.disable) || x ? z() : (document.querySelector("body").setAttribute("data-aos-easing", j.easing), document.querySelector("body").setAttribute("data-aos-duration", j.duration), document.querySelector("body").setAttribute("data-aos-delay", j.delay), "DOMContentLoaded" === j.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? O(!0) : "load" === j.startEvent ? window.addEventListener(j.startEvent, function() {
                    O(!0)
                }) : document.addEventListener(j.startEvent, function() {
                    O(!0)
                }), window.addEventListener("resize", (0, s["default"])(O, 50, !0)), window.addEventListener("orientationchange", (0, s["default"])(O, 50, !0)), window.addEventListener("scroll", (0, c["default"])(function() {
                    (0, b["default"])(h, j.once)
                }, 99)), document.addEventListener("DOMNodeRemoved", function(e) {
                    var t = e.target;
                    t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute("data-aos") && (0, s["default"])(_, 50, !0)
                }), (0, f["default"])("[data-aos]", _), h)
            };
        e.exports = {
            init: E,
            refresh: O,
            refreshHard: _
        }
    }, function(e, t) {}, , , , function(e, t, o) {
        "use strict";

        function n(e, t, o) {
            var n = !0,
                a = !0;
            if ("function" != typeof e) throw new TypeError(c);
            return i(o) && (n = "leading" in o ? !!o.leading : n, a = "trailing" in o ? !!o.trailing : a), r(e, t, {
                leading: n,
                maxWait: t,
                trailing: a
            })
        }

        function i(e) {
            var t = "undefined" == typeof e ? "undefined" : a(e);
            return !!e && ("object" == t || "function" == t)
        }
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            r = o(6),
            c = "Expected a function";
        e.exports = n
    }, function(e, t) {
        "use strict";

        function o(e, t, o) {
            function n(t) {
                var o = b,
                    n = v;
                return b = v = void 0, O = t, y = e.apply(n, o)
            }

            function a(e) {
                return O = e, w = setTimeout(d, t), _ ? n(e) : y
            }

            function r(e) {
                var o = e - h,
                    n = e - O,
                    i = t - o;
                return z ? x(i, g - n) : i
            }

            function u(e) {
                var o = e - h,
                    n = e - O;
                return !h || o >= t || 0 > o || z && n >= g
            }

            function d() {
                var e = j();
                return u(e) ? f(e) : void(w = setTimeout(d, r(e)))
            }

            function f(e) {
                return clearTimeout(w), w = void 0, A && b ? n(e) : (b = v = void 0, y)
            }

            function l() {
                void 0 !== w && clearTimeout(w), h = O = 0, b = v = w = void 0
            }

            function m() {
                return void 0 === w ? y : f(j())
            }

            function p() {
                var e = j(),
                    o = u(e);
                if (b = arguments, v = this, h = e, o) {
                    if (void 0 === w) return a(h);
                    if (z) return clearTimeout(w), w = setTimeout(d, t), n(h)
                }
                return void 0 === w && (w = setTimeout(d, t)), y
            }
            var b, v, g, y, w, h = 0,
                O = 0,
                _ = !1,
                z = !1,
                A = !0;
            if ("function" != typeof e) throw new TypeError(s);
            return t = c(t) || 0, i(o) && (_ = !!o.leading, z = "maxWait" in o, g = z ? k(c(o.maxWait) || 0, t) : g, A = "trailing" in o ? !!o.trailing : A), p.cancel = l, p.flush = m, p
        }

        function n(e) {
            var t = i(e) ? h.call(e) : "";
            return t == f || t == l
        }

        function i(e) {
            var t = "undefined" == typeof e ? "undefined" : u(e);
            return !!e && ("object" == t || "function" == t)
        }

        function a(e) {
            return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
        }

        function r(e) {
            return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || a(e) && h.call(e) == m
        }

        function c(e) {
            if ("number" == typeof e) return e;
            if (r(e)) return d;
            if (i(e)) {
                var t = n(e.valueOf) ? e.valueOf() : e;
                e = i(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(p, "");
            var o = v.test(e);
            return o || g.test(e) ? y(e.slice(2), o ? 2 : 8) : b.test(e) ? d : +e
        }
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            s = "Expected a function",
            d = NaN,
            f = "[object Function]",
            l = "[object GeneratorFunction]",
            m = "[object Symbol]",
            p = /^\s+|\s+$/g,
            b = /^[-+]0x[0-9a-f]+$/i,
            v = /^0b[01]+$/i,
            g = /^0o[0-7]+$/i,
            y = parseInt,
            w = Object.prototype,
            h = w.toString,
            k = Math.max,
            x = Math.min,
            j = Date.now;
        e.exports = o
    }, function(e, t) {
        "use strict";

        function o(e, t) {
            r.push({
                selector: e,
                fn: t
            }), !c && a && (c = new a(n), c.observe(i.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })), n()
        }

        function n() {
            for (var e, t, o = 0, n = r.length; n > o; o++) {
                e = r[o], t = i.querySelectorAll(e.selector);
                for (var a, c = 0, u = t.length; u > c; c++) a = t[c], a.ready || (a.ready = !0, e.fn.call(a, a))
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = window.document,
            a = window.MutationObserver || window.WebKitMutationObserver,
            r = [],
            c = void 0;
        t["default"] = o
    }, function(e, t) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var o = 0; o < t.length; o++) {
                        var n = t[o];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, o, n) {
                    return o && e(t.prototype, o), n && e(t, n), t
                }
            }(),
            i = function() {
                function e() {
                    o(this, e)
                }
                return n(e, [{
                    key: "phone",
                    value: function() {
                        var e = !1;
                        return function(t) {
                            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
                        }(navigator.userAgent || navigator.vendor || window.opera), e
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var e = !1;
                        return function(t) {
                            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
                        }(navigator.userAgent || navigator.vendor || window.opera), e
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t["default"] = new i
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function(e, t, o) {
                var n = e.node.getAttribute("data-aos-once");
                t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof n && ("false" === n || !o && "true" !== n) && e.node.classList.remove("aos-animate")
            },
            n = function(e, t) {
                var n = window.pageYOffset,
                    i = window.innerHeight;
                e.forEach(function(e, a) {
                    o(e, i + n, t)
                })
            };
        t["default"] = n
    }, function(e, t, o) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(11),
            a = n(i),
            r = function(e, t) {
                return e.forEach(function(e, o) {
                    e.node.classList.add("aos-init"), e.position = (0, a["default"])(e.node, t.offset)
                }), e
            };
        t["default"] = r
    }, function(e, t, o) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(12),
            a = n(i),
            r = function(e, t) {
                var o = 0,
                    n = 0,
                    i = window.innerHeight,
                    r = {
                        offset: e.getAttribute("data-aos-offset"),
                        anchor: e.getAttribute("data-aos-anchor"),
                        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                    };
                switch (r.offset && !isNaN(r.offset) && (n = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), o = (0, a["default"])(e).top, r.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        o += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        o += e.offsetHeight;
                        break;
                    case "top-center":
                        o += i / 2;
                        break;
                    case "bottom-center":
                        o += i / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        o += i / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        o += i;
                        break;
                    case "bottom-top":
                        o += e.offsetHeight + i;
                        break;
                    case "center-top":
                        o += e.offsetHeight / 2 + i
                }
                return r.anchorPlacement || r.offset || isNaN(t) || (n = t), o + n
            };
        t["default"] = r
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function(e) {
            for (var t = 0, o = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), o += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: o,
                left: t
            }
        };
        t["default"] = o
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function(e) {
            e = e || document.querySelectorAll("[data-aos]");
            var t = [];
            return [].forEach.call(e, function(e, o) {
                t.push({
                    node: e
                })
            }), t
        };
        t["default"] = o
    }])
});

/**
 * Active all popup in the page
 */
function ActivePopupInPage() {
    $(document).on('s123.page.ready', function(event) {
        ActivePopupActionButtonsInPage();
    });
}

function ActivePopupActionButtonsInPage() {
    $('[data-toggle="search_menuCallActionIcons"]').off('click').click(function() {
        var $this = $(this);
        var closeLocation = $this.data('closeLocation');
        OpenSearchWindow(closeLocation);
    });
    $('[data-toggle="social_menuCallActionIcons"]').off('click').click(function() {
        var $this = $(this);
        var closeLocation = $this.data('closeLocation');
        if (findBootstrapEnvironment() == 'xs') {
            var isMobile = 'mobile';
        } else {
            var isMobile = '';
        }
        var content = $('#header-social-content').html();
        /*
        content += '<div class="socialBox">';
        if ($('#facebook_url').val()!='') {
        content += '<div class="insideBox '+ isMobile +'"><iframe src="https://www.facebook.com/plugins/page.php?href='+encodeURIComponent($('#facebook_url').val())+'&tabs=timeline&width=320&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="320" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>';
        }
        if ($('#twitter_url').val()!='' && findBootstrapEnvironment()!='xs') {
        content += '<div class="insideBox"><a class="twitter-timeline" data-height="400" href="'+$('#twitter_url').val()+'">Tweets by</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></div>';
        }
        content += '<div>';
        */
        buildPopup('popupFloatDivSearch', '', content, '', true, true, true, closeLocation);
        $(document).trigger('s123.page.ready.wizard_preview_manage_helpers');
    });
    $('[data-toggle="phone_menuCallActionIcons"]').off('click').click(function() {
        var $this = $(this);
        var closeLocation = $this.data('closeLocation');
        buildPopup('popupFloatDivSearch', '', $('#header-phone-content').html(), '', true, true, true, closeLocation);
        $(document).trigger('s123.page.ready.wizard_preview_manage_helpers');
    });
    $('[data-toggle="address_menuCallActionIcons"]').off('click').click(function() {
        var $this = $(this);
        var closeLocation = $this.data('closeLocation');
        buildPopup('popupFloatDivSearch', '', $('#header-address').html(), '', true, true, true, closeLocation);
        $(document).trigger('s123.page.ready.wizard_preview_manage_helpers');
    });
}
/**
 * The function initialize the SITE123 banner.
 */
function Site123AdButtonInitialize() {
    var $html;
    var $showSmallAdOnScroll;
    $(document).on('s123.page.ready', function(event) {
        $html = $('html');
        $showSmallAdOnScroll = $('#showSmallAdOnScroll');
        if ($showSmallAdOnScroll.length === 0) return;
        bannerHandler();
        $(window).scroll(function() {
            bannerHandler();
        });
    });
    /**
     * The function show and hide the banner related to the scroll bar.
     */
    function bannerHandler() {
        var offset = $html.hasClass('inside_page') ? 0 : 50;
        if ($(window).scrollTop() >= offset) {
            $showSmallAdOnScroll.stop().slideDown();
        } else {
            $showSmallAdOnScroll.stop().slideUp();
        }
    }
}
/**
 * Active the lazy image load.
 */
function ActiveLazyImageLoad() {
    /**
     * Active lazy image on all images in the system.
     * Documentation: https://github.com/verlok/lazyload
     */
    var myLazyLoad = new LazyLoad({
        elements_selector: 'img.lazyload, .bgLazyload, .iframeLazyload'
    });
    $(document).on('s123.page.ready', function(event) {
        myLazyLoad.update();
    });
}
/**
 * //Set heights of different elements so everything will fit to everything
 */
function SetHeightToEle() {
    $(document).on('s123.page.ready', function(event) {
        if (whatScreen.any() == 'tablet') {
            $('#top-menu').css('max-height', $(window).height() - $('.navbar-header').outerHeight(true) - menuScrollOffset_mobile);
        }
    });
}

function GetMenuPosition() {
    $(document).on('s123.page.ready', function(event) {
        layoutMenuPositionTXT = $('#layoutMenuPositionTXT').val();
        layoutMenuPositionOpenMenuTXT = ChangeDirection(layoutMenuPositionTXT);
        if (layoutMenuPositionTXT == 'left' || layoutMenuPositionTXT == 'right') {
            FixMenuTopPosition_SideMenu();
        }
        if (layoutMenuPositionTXT == 'top' || layoutMenuPositionTXT == 'bottom') {
            FixMenuTopPosition_TopMenu();
        }
    });
}
/**
 * The function scroll the user to the first section when
 * he click on the first button in the homepage.
 */
function MoveFirstSection(sectionNUM) {
    var $pages = $('#myModulesContainer > section');
    if ($pages.length === 0) return;
    if (!sectionNUM) sectionNUM = 1;
    /**
     * Sometimes the user choose to scroll to a page, and then hide it from
     * homepage, and if it was the last page the scroll isn't working. We like
     * to prevent such cases so we scroll the user to the last page instead.
     */
    if (sectionNUM > $pages.length) sectionNUM = $pages.length;
    /**
     * Fix Section Number - At the previews version of this function we used
     * the next selector to get the pages `$("section")`. The selector return
     * all the website sections (include the homepage), and on the wizard we
     * start the section counting from `1` related to this selector. Now we fix
     * the selector and choose only the website pages, so we decrease the homepage
     * section for not taking actions on existing user. Basically we need to stop
     * scrolling users related to section number, and change the homepage to works
     * like to promos, there we scroll to pages related to the page id.
     */
    sectionNUM -= 1;
    /**
     * Scroll Offset - Some layouts has some padding that we need to scroll up
     * to it, and on mobile it will be always 60 because we have the same layout.
     */
    var offset = findBootstrapEnvironment() != 'xs' ? menuScrollOffset : menuScrollOffset_mobile;
    $('html, body').stop().animate({
        scrollTop: ($pages.eq(sectionNUM).offset().top - offset)
    }, 1250, 'easeInOutExpo');
}

function MoveFirstSectionOrRedirect(url) {
    var $pages = $('#myModulesContainer > section');
    /**
     * Scroll Offset - Some layouts has some padding that we need to scroll up
     * to it, and on mobile it will be always 60 because we have the same layout.
     */
    var offset = findBootstrapEnvironment() != 'xs' ? menuScrollOffset : menuScrollOffset_mobile;
    if ($pages.length !== 0) {
        $('html, body').stop().animate({
            scrollTop: ($pages.eq(0).offset().top - offset)
        }, 1250, 'easeInOutExpo');
    } else {
        if (url) location.href = url;
    }
}
/**
 * The function scroll the user from a module to another module.
 *
 * @param {string} fromModuleID - Source module (module that we scroll from it).
 * @param {string} toModuleID - Destination module (module that we scroll to it).
 */
function ScrollToModule(fromModuleID, toModuleID) {
    var offset = findBootstrapEnvironment() != 'xs' ? menuScrollOffset : menuScrollOffset_mobile;
    var $scrollTo = $('#section-' + toModuleID);
    if ($scrollTo.length === 0 && fromModuleID != '') $scrollTo = $('#section-' + fromModuleID).next('section');
    if ($('html.inside_page').length > 0) {
        if ($('#w').val() != '') {
            location.href = '/?w=' + $('#w').val() + '#section-' + toModuleID;
        } else {
            location.href = '/#section-' + toModuleID;
        }
    } else {
        if ($scrollTo.length !== 0) {
            $('html, body').stop().animate({
                scrollTop: ($scrollTo.offset().top - offset)
            }, 1250, 'easeInOutExpo');
        }
    }
}
var dropdownClickFlag = 0; //Tell us if the user click on dropdown menu so we will not close it with the DOCUMENT event
function activeDropDownMenus() {
    $(document).on('s123.page.ready', function(event) {
        activeDropDownMenusAction();
    });
}

function activeDropDownMenusAction() {
    $('.dropdown-submenu > a').click(function(event) {
        /**
         * Website menu drop down handler - Disable click
         * in modules with drop down option except E-commerce module
         */
        if ($(this).parent().data('menu-module-id') != 112) {
            event.preventDefault();
        }
    });
    $('.navPages li').find('a').off('mouseenter.hideHoverMenu');
    $('.navPages').find('.dropdown-submenu').off('click.subMenu mouseenter.subMenu mouseover.subMenu mouseout.subMenu mouseleave.subMenu').on('click.subMenu mouseenter.subMenu mouseover.subMenu mouseout.subMenu mouseleave.subMenu', function(e) {
        var $this = $(this).find('> a');
        var eventType = e.type;
        if (eventType == 'mouseenter') {
            activeDropDownMenusAction_open(e, $this);
        }
        if (eventType == 'mouseover') {
            $this.parent('.dropdown-submenu').attr('data-menuSubMenuStillOpen', 'true');
        }
        if (eventType == 'click') {
            if (dropdownClickFlag == 0) {
                activeDropDownMenusAction_open(e, $this);
            } else {
                RemoveAllDropDownMenus();
            }
        }
        if (eventType == 'mouseout') {
            $this.parent('.dropdown-submenu').attr('data-menuSubMenuStillOpen', 'false');
            setTimeout(function() {
                if ($this.parent('.dropdown-submenu').attr('data-menuSubMenuStillOpen') == 'false') {
                    $this.parent('.dropdown-submenu').removeClass('active').removeClass('open');
                }
            }, 2000);
        }
    });
    $('.navPages > li').not('.dropdown-submenu').find(' > a').off('mouseenter.hideHoverMenu').on('mouseenter.hideHoverMenu', function(e) {
        $('.dropdown-submenu').removeClass('active').removeClass('open').removeClass('activePath');
        $('.dropdown-submenu').removeAttr('data-menuSubMenuStillOpen');
    });
    $(document).off('click.subMenu').on('click.subMenu', function(e) {
        if (dropdownClickFlag == 0 && $('.dropdown-submenu.open').length > 0) {
            RemoveAllDropDownMenus();
        }
    });
    $('#popupFloatDivMenu .navPagesPopup').find('.dropdown-submenu > a').off('click.subMenu').on('click.subMenu', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var $this = $(this);
        var eventType = e.type;
        if (eventType == 'click') {
            if ($this.parent('.dropdown-submenu.active').length > 0) {
                $('.dropdown-submenu').removeClass('active').removeClass('open');
                $('.dropdown-submenu').removeAttr('data-menuSubMenuStillOpen');
            } else {
                $('.dropdown-submenu').removeClass('active').removeClass('open');
                $('.dropdown-submenu').removeAttr('data-menuSubMenuStillOpen');
                $this.parent('.dropdown-submenu').addClass('active').addClass('open');
            }
        }
    });
}

function RemoveAllDropDownMenus() {
    $('.dropdown-submenu').removeClass('active').removeClass('open');
    $('.dropdown-submenu').removeAttr('data-menuSubMenuStillOpen');
}

function activeDropDownMenusAction_open(e, $this) {
    dropdownClickFlag = 1;
    $this.parent('.dropdown-submenu').addClass('active').addClass('open');
    $this.parents('.dropdown-submenu').each(function() {
        var $this = $(this);
        $this.addClass('activePath');
    });
    $('.dropdown-submenu').not('.activePath').removeClass('active').removeClass('open').removeClass('activePath');
    $('.dropdown-submenu.activePath').removeClass('activePath');
    setTimeout(function() {
        dropdownClickFlag = 0;
    }, 1000);
}
/**
 * The function remove scripts residues. Some scripts are adding HTML
 * to the body, and we need to remove them manually when we refresh/reload
 * page areas via Ajax, otherwise the HTML will duplicate itself when we
 * trigger the `s123.page.ready` event.
 *
 */
function RemoveScriptsResidues() {
    $('body > .tooltip').remove();
}
/**
 * The function Trigger the Site123 page ready custom event.
 */
function TriggerS123PageReady() {
    RemoveScriptsResidues();
    $(document).trigger('s123.page.ready');
}
/**
 * The function Trigger the Site123 page load custom event.
 */
function TriggerS123PageLoad() {
    $(document).trigger('s123.page.load');
}


var layoutMenuPositionTXT;
var layoutMenuPositionOpenMenuTXT;
jQuery(function($) {
    openDivMenuOnMobileClick();
    ActivePopupInPage();
    activeDropDownMenus();
    TriggerS123PageReady();

});


/**
 * AOS Initial - Animate On Scroll
 * Note: AOS is a UMD module so we initial it outside of the ready or load events.
 * Documentation : https://github.com/michalsnik/aos
 */
AOS.init({
    offset: 20,
    duration: 200,
    delay: 0
});
/**
 * The function blocking URL masking for users with a `Free Package`.
 * it's mean that the user with a free package can't open his website inside
 * a iFrame.
 */
function BlockUrlMasking() {
    if (!$.isNumeric($('#w').val()) && packageNUM < '2') {
        if (window.location != window.parent.location) {
            topWindow.location = 'http://' + domain + '.' + subDomainUrl;
        }
    }
}

function ChangeDirection(position) {
    switch (position) {
        case 'right':
            return 'left';
            break;
        case 'left':
            return 'right';
            break;
        case 'top':
            return 'bottom';
            break;
        case 'bottom':
            return 'top';
            break;
    }
}
/**
 * The function handle all the add-to-cart buttons and active them for adding
 * the selected product to the cart.
 */
function ActiveOrderPopup() {
    $(document).on('s123.page.ready.activeOrderPopup', function(event) {
        $('.orderButtonPopup').off('click').on('click', function(event) {
            var $this = $(this);
            if (!atcValidator()) return;
            $this.attr('disabled', '');
            /**
             * Modules who has the ability to add multiple products to cart in single
             * click on the order button has array of unqiueID so we take it and modules
             * that don't have this ability we just add the the single unqiueID to array and
             * send it to cart.
             */
            var multiProducts = $this.data('multi-products') ? $this.data('multi-products') : JSON.stringify(Array($this.data('unique-page')));
            /**
             * Form Data Initialize - We use the browser Form Data Interface when we need
             * to upload files via Ajax. Note: We must add `cache: false, contentType: false,
             * processData: false` to `$.ajax` so it will works.
             * Documentations: https://developer.mozilla.org/en-US/docs/Web/API/FormData
             */
            var formData = new FormData();
            formData.append('w', $('#w').val());
            formData.append('websiteID', $('#websiteID').val());
            formData.append('moduleID', $this.data('module'));
            /* fix related product issue - when the user was at the product page and
            he try adding to cart a related product, the system was adding the product
            options to the related product even that they belong to the displayed product */
            if ($this.data('product-page')) {
                formData.append('productOptions', $('#productOptions').length !== 0 ? $('#productOptions').html() : '');
                formData.append('customText', $('#customText').length !== 0 ? $('#customText').html() : '');
            }
            formData.append('amount', $this.data('quantity-amount') ? $this.data('quantity-amount') : '1');
            formData.append('multiProducts', multiProducts);
            $('input[type="file"]').each(function(index, upload) {
                if (upload.files.length > 0) {
                    formData.append(upload.id, upload.files[0]);
                }
            });
            $.ajax({
                type: "POST",
                url: "/versions/" + $('#versionNUM').val() + "/wizard/orders/front/addToCart.php",
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success: function(response) {
                    response = tryParseJSON(response);
                    showCart_GetContent('/versions/' + $('#versionNUM').val() + '/wizard/orders/front/showCart.php?w=' + $('#w').val() + '&websiteID=' + $('#websiteID').val() + '&tranW=' + websiteLanguageCountryFullCode + '&moduleID=' + $this.data('module'));
                    CartCounter.updateCartIcon();
                    $this.removeAttr('disabled');
                    topWindow.eCommerce_cart_lastAdded = response.updatedCartIds ? response.updatedCartIds : false;
                }
            });
        });
        $('.orderOpenCart').off('click').on('click', function(event) {
            var $this = $(this);
            /**
             * Check if the website loaded in an Iframe (e.g. single page data pages), at
             * those cases we like to open the cart pop-up at the parent window and not
             * in the current pop-up/
             */
            showCart_GetContent('/versions/' + $('#versionNUM').val() + '/wizard/orders/front/showCart.php?w=' + $('#w').val() + '&websiteID=' + $('#websiteID').val() + '&moduleTypeNUM=37&tranW=' + websiteLanguageCountryFullCode + '&cartButton=1');
        });
    });

    /**
     * The function check if the product have fields that need to validation
     * before adding them to cart, if so the function alert the user and return
     * false, otherwise it return true.
     */
    function atcValidator() {
        var $ct = $("#product-custom-text");
        var $po = $('.product-options');
        if ($ct.length !== 0 && $ct.data('mandatory')) {
            var $ct_fieldTitle = $('#ct_fieldTitle');
            if ($ct_fieldTitle.val().length === 0) {
                $ct_fieldTitle.popover({
                    container: 'body',
                    content: translations.productvalidatorPopover,
                    trigger: 'manual',
                    template: '<div class="popover product-validator-popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>',
                    placement: function(popover, input) {
                        return isMobile.any() ? 'auto' : ($('html').attr('dir') === 'rtl' ? 'left' : 'right');
                    }
                });
                $ct_fieldTitle.popover('show').one('input', function(e) {
                    $(this).popover('hide');
                });
                $ct_fieldTitle.focus();
                return false;
            }
        }
        /**
         * Check if mandatory fields in product options
         * are not empty.
         */
        if ($po.length !== 0) {
            var $options = $po.find('.p-o-container[data-mandatory="1"]');
            var addToCart = true;
            var $popoverContainer;
            var $firstErrorOption;
            var $errorsOptionsList = [];
            $.each($options, function(index, option) {
                var $option = $(option);
                switch ($option.data('type')) {
                    /**
                     * Multiple Items Options - When an option have multiple items the
                     * system add a `selected` on the chosen item.
                     */
                    case 'color':
                    case 'radio':
                    case 'checkbox':
                    case 'size':
                    case 'list':
                        if ($option.find('[id*=poi].selected').length === 0) {
                            addToCart = false;
                        }
                        $popoverContainer = $(option);
                        break;
                        /**
                         * One Item Option - When an option have only one item we use the
                         * `form-control` to get its input and checking its value.
                         */
                    default:
                        if ($option.find('.form-control').val().length === 0) {
                            addToCart = false;
                            $popoverContainer = $(option).parent();
                        }
                }
                if (!addToCart) {
                    $errorsOptionsList.push($option);
                    var $popover = $option.find('.p-o-popover-box');
                    if ($popover.length === 0) $popover = $option;
                    /**
                     * Bootstrap's Popovers Plugin Initial
                     * Documentation : http://getbootstrap.com/javascript/#popovers
                     */
                    $popover.popover({
                        container: 'body',
                        content: translations.productvalidatorPopover,
                        trigger: 'manual',
                        template: '<div class="popover product-validator-popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>',
                        placement: function(popover, input) {
                            return isMobile.any() ? 'auto' : ($('html').attr('dir') === 'rtl' ? 'right' : 'left');
                        }
                    });
                }
            });
            if ($errorsOptionsList.length !== 0) {
                var offset = $('#mainNav').outerHeight();
                if (!$.isNumeric(offset)) offset = 0;
                if (!elementInViewport($errorsOptionsList[0].get(0))) {
                    $('html, body').scrollTop($errorsOptionsList[0].offset().top - offset);
                }
                $.each($errorsOptionsList, function(index, $option) {
                    var $popover = $option.find('.p-o-popover-box');
                    if ($popover.length === 0) $popover = $option;
                    $popover.popover('show');
                });
                $po.off('po.update').on('po.update', function(event) {
                    $('.product-validator-popover').popover('hide');
                });
            }
            return addToCart;
        }
        return true;
    }
}
/**
 * The function is detecting if the element is within the screen
 * bundles of the user and return true or false.
 *
 * Solution: https://stackoverflow.com/a/125106/10262990
 *
 * @param  {Object} el - Element that we need to check it's position
 * @return {Boolean} True if the element is in view port else false.
 */
function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}

function ReduseMenuSizeWhenWeDontHavePlace() {
    ReduseMenuSizeWhenWeDontHavePlace_Action($('#top-menu .navPages'), 'header', 8);
    ReduseMenuSizeWhenWeDontHavePlace_Action($('.global_footer .nav'), 'footer', 4);
    FixMenuTopPosition_TopMenu();
    ShowMenuAfterReduseSize('header');
    ShowMenuAfterReduseSize('footer');
}

function ReduseMenuSizeWhenWeDontHavePlace_Action($nav, $place, $padding) {
    if (findBootstrapEnvironment() != 'xs' && CheckMenuWidthSpace($place) && $nav.find('>li>a').length > 1) {
        if (CheckMenuWidthSpace($place)) {
            if ($nav.find('.extra-nav-more').length == 0) {
                var x = '<li class="moduleMenu extra-nav-more dropdown-submenu"><a href="#" aria-haspopup="true" aria-expanded="true">';
                if ($place == 'footer') {
                    x += ' <span class="fa fa-caret-up"></span></a> <ul class="site-dropdown-menu dropdown-side-open-up';
                } else {
                    x += ' <span class="fa fa-caret-down"></span></a> <ul class="site-dropdown-menu';
                }
                x += '"></ul></li>';
                $nav.append(x);
            }
            var $newLIpage = $nav.find(">li").eq(-2).detach().prependTo($nav.find('.extra-nav-more>ul'));
            if ($newLIpage.hasClass('dropdown-submenu') == true) {
                if ($('html').attr('dir') == 'rtl') {
                    $newLIpage.find('.site-dropdown-menu').addClass('dropdown-side-open-left');
                } else {
                    $newLIpage.find('.site-dropdown-menu').addClass('dropdown-side-open-right');
                }
                if ($place == 'header') {
                    if ($('html').attr('dir') == 'rtl') {
                        $newLIpage.find('.fa').removeClass('fa-caret-down').addClass('fa-caret-left');
                    } else {
                        $newLIpage.find('.fa').removeClass('fa-caret-down').addClass('fa-caret-right');
                    }
                }
                if ($place == 'footer') {
                    $newLIpage.find('.site-dropdown-menu').removeClass('dropdown-side-open-up');
                    $newLIpage.find('.fa-caret-up').removeClass('fa-caret-up').addClass('fa-caret-' + layoutMenuPositionOpenMenuTXT + '');
                }
            }
            if ($nav.find('.extra-nav-more').length == 0) {
                $nav.find(".extra-nav-more").detach().prependTo($nav);
            }
            ReduseMenuSizeWhenWeDontHavePlace_Action($nav, $place, $padding);
        }
    }
}

function CheckMenuWidthSpace($place) {
    if ($place == 'header') {
        switch ($('#layoutNUM').val()) {
            case '2':
                if ($('#mainNav .site_container').width() - 50 < $('#top-menu .navPages').outerWidth(true) + $('#top-menu .navActions').outerWidth(true)) {
                    return true;
                } else {
                    return false;
                }
                break;
            case '5':
                if ($('.body').outerWidth(false) - 50 < $('#top-menu .navPages').outerWidth(true) + $('#top-menu .navActions').outerWidth(true)) {
                    return true;
                } else {
                    return false;
                }
                break;
            case '13':
                if ($('#mainNav .site_container').width() - 50 < $('.navbar-header').outerWidth(true) + $('#top-menu .navPages').outerWidth(true) + $('#top-menu .navActions').outerWidth(true)) {
                    return true;
                } else {
                    return false;
                }
                break;
            case '21':
                $('#centerLogo19').remove();
                $('#top-menu').css({
                    'padding-right': '0',
                    'padding-left': '0'
                });
                if ($('#mainNav .site_container').width() - 50 < $('.navbar-header').outerWidth(true) + $('#top-menu .navPages').outerWidth(true) + $('#mainNav .navActions').outerWidth(true) + 120) {
                    return true;
                } else {
                    return false;
                }
                break;
            default:
                if (GetTopMenuWidthByIsContainer() < $('.navbar-header').outerWidth(true) + $('#top-menu .navPages').outerWidth(true) + $('#top-menu .navActions').outerWidth(true)) {
                    return true;
                } else {
                    return false;
                }
        }
    }
    if ($place == 'footer') {
        switch ($('#footer_layout').val()) {
            case '2':
                if ($('.global_footer .part1').outerWidth(true) - 100 < $('.global_footer .nav').outerWidth(true)) {
                    return true;
                } else {
                    return false;
                }
                break;
            case '1':
            case '3':
            case '4':
                if ($('.global_footer .side2').outerWidth(true) - 100 < $('.global_footer .nav').outerWidth(true)) {
                    return true;
                } else {
                    return false;
                }
        }
    }
}

function GetTopMenuWidthByIsContainer() {
    if ($('#mainNav .site_container').length > 0) {
        return $('#mainNav .site_container').width() - 50;
    } else {
        return $(window).outerWidth(true) - 50;
    }
}

function ReduseMenuSizeWhenWeDontHavePlaceHeight() {
    ReduseMenuSizeWhenWeDontHavePlaceHeight_action();
    FixMenuTopPosition_SideMenu();
    ShowMenuAfterReduseSize('');
    ReduseMenuSizeWhenWeDontHavePlace_Action($('.global_footer .nav'), 'footer', 4);
    FixMenuTopPosition_TopMenu();
    ShowMenuAfterReduseSize('footer');
}

function ReduseMenuSizeWhenWeDontHavePlaceHeight_action() {
    var $nav = $('#top-menu .navPages');
    if (findBootstrapEnvironment() != 'xs' && CheckMenuWidthSpaceHeight() && $nav.find('>li>a').length > 1) {
        if (CheckMenuWidthSpaceHeight()) {
            if ($nav.find('.extra-nav-more').length == 0) {
                var x = '<li class="moduleMenu extra-nav-more dropdown-submenu"><a href="#" aria-haspopup="true" aria-expanded="true">';
                if ($('html').attr('dir') == 'rtl') {
                    x += translations.more.toLowerCase();
                    x += ' <span class="fa fa-caret-left"></span>';
                    x += '</a> <ul class="site-dropdown-menu dropdown-side-open-left"></ul></li>';
                } else {
                    x += translations.more.toLowerCase();
                    x += ' <span class="fa fa-caret-right"></span>';
                    x += '</a> <ul class="site-dropdown-menu dropdown-side-open-right"></ul></li>';
                }
                $nav.append(x);
            }
            var $newLIpage = $nav.find(">li").eq(-2).detach().prependTo($nav.find('.extra-nav-more>ul'));
            if ($newLIpage.hasClass('dropdown-submenu') == true) {
                $newLIpage.find('.site-dropdown-menu').addClass('dropdown-side-open-' + layoutMenuPositionOpenMenuTXT + '');
            }
            if ($nav.find('.extra-nav-more').length == 0) {
                $nav.find('.extra-nav-more').detach().prependTo($nav);
            }
            ReduseMenuSizeWhenWeDontHavePlaceHeight_action();
        }
    }
}

function CheckMenuWidthSpaceHeight() {
    switch ($('#layoutNUM').val()) {
        default:
            if ($(window).outerHeight(true) - 20 < $('#header .header-column-logo').outerHeight(true) + $('#header .header-column-menu').outerHeight(true) + $('#header .header-column-menu-actions').outerHeight(true)) {
                return true;
            } else {
                return false;
            }
    }
}

function ShowMenuAfterReduseSize($place) {
    if ($('#top-menu').length > 0 && $('#layoutNUM').val() == '21' && $place == 'header') {
        $('#centerLogo19').remove();
        $('#top-menu').css({
            'padding-right': '0',
            'padding-left': '0'
        });
        var menuWidth = ($('#top-menu .navPages').outerWidth(true) + $('#top-menu .navActions').outerWidth(true)) / 2;
        var sumLIofMenu = 0;
        var saveLIplace = 1;
        var extraPaddingFromSideOne = 0;
        $('#top-menu .navPages > li').each(function() {
            var $this = $(this);
            sumLIofMenu += $this.outerWidth(true);
            if (sumLIofMenu >= menuWidth) {
                extraPaddingFromSideOne = sumLIofMenu - menuWidth;
                return false;
            }
            saveLIplace++;
        });
        if ($('#top-menu .navPages > li').eq(saveLIplace - 1).outerWidth(true) * 0.6 <= (extraPaddingFromSideOne)) {
            saveLIplace = saveLIplace - 1;
        }
        if ($('#top-menu .navPages > li').eq(saveLIplace - 1).length > 0) {
            $('<li id="centerLogo19">' + $('.navbar-header').html() + '</li>').insertAfter($('#top-menu .navPages > li').eq(saveLIplace - 1));
        } else {
            $('#top-menu .navPages').append('<li id="centerLogo19">' + $('.navbar-header').html() + '</li>');
        }
        /**
         * Scrollspy Fix - We are using Bootstrap Scrollspy plugin to active the current
         * menu page on scrolling at single page websites, the issue is that on Layout 2
         * the website logo placed at the center of the menu, and it link the user to the
         * top of the page, so Scrollspy plugin is confused and highlight it on scroll so
         * its flashing. Because Scrollspy has no option to ignore a page link, we decide
         * to remove the `href` from the a tag to handle it ourself to fix that issue.
         * Note: The issue related only to single page websites and only to layout 2.
         */
        (function() {
            var $logo = $('#centerLogo19 a');
            var href = $logo.attr('href');
            $logo
                .attr('href', 'javascript:void(0);')
                .off('click.scrollspyFix')
                .on('click.scrollspyFix', function(event) {
                    event.preventDefault();
                    if (!(IsWizard() && IsHomepage())) {
                        location.href = href;
                    }
                });
        })();
        /* Refresh the wizard preview manage helpers because we generate a new HTML for the logo,
        and we like that when the user clicks on it at the wizard it will open the logo tab */
        if (IsWizard()) {
            $(document).trigger('s123.page.ready.wizard_preview_manage_helpers');
        }
        ShowMenuAfterReduseSize_finishCalc();
        ShowMenuAfterReduseSize_finishCalc();
        ShowMenuAfterReduseSize_finishCalc();
        ShowMenuAfterReduseSize_finishCalc();
    }
    if ($('#header').length == 0 && $('#top-menu').length > 0 && $place == 'header') {
        var rectMenu;
        var rectHeader;
        rectMenu = Math.round($('#top-menu').outerWidth());
        rectHeader = Math.round($('#mainNav .site_container').width());
        if ($('#mainNavMobile').is(":visible") == false && rectMenu > rectHeader && $('#top-menu .navActions .header-menu-wrapper').length == 0 && $('#top-menu.affix').length == 0) {
            $('#top-menu .navActions').append('<li class="header-menu-wrapper replaceActionButtonsToIcon"><a data-close-location="left" class="btn" role="button" data-container="body" data-toggle="menuCallActionIcons"><i class="fa fa-bars"></i></a></li>');
            $('.action-button-wrapper').hide();
            TriggerS123PageReady();
            ResetMoreButton();
        }
        rectMenu = Math.round($('#top-menu').outerWidth());
        rectHeader = Math.round($('#mainNav .site_container').width());
        if ($('#mainNavMobile').is(":visible") == false && rectMenu > rectHeader && $('#top-menu .navActions .header-menu-wrapper').length > 0 && $('.replaceActionButtonsToIcon').length > 0 && $('.replaceActionButtonsToIconRemoveExtra').length == 0 && $('#top-menu.affix').length == 0) {
            $('.header-phone-wrapper, .header-address-wrapper, .header-social-wrapper, .header-search-wrapper').hide();
            $('.replaceActionButtonsToIcon').addClass('replaceActionButtonsToIconRemoveExtra');
            TriggerS123PageReady();
            ResetMoreButton();
        }
    }
    if ($('#mainNavMobile').is(":visible")) {
        if ($('#mainNavMobile .navActions > li:visible').length > 2) {
            $('#mainNavMobile .navActions > li.header-social-wrapper ').hide();
            if ($('#mainNavMobile .navActions > li:visible').length > 2) {
                $('#mainNavMobile .navActions > li.header-search-wrapper').hide();
                if ($('#mainNavMobile .navActions > li:visible').length > 2) {
                    $('#mainNavMobile .navActions > li.header-address-wrapper').hide();
                }
            }
        }
    }
    if ($place == '' || $place == 'header') {
        $('#mainNav #top-menu .navPages, #mainNav #top-menu .navActions, #mainNav #top-menu .headerSocial, #header .header-row').css({
            'opacity': '1'
        });
    }
    if ($place == 'footer') {
        $('.global_footer .nav').css({
            'opacity': '1'
        });
    }
    $('#mainNavMobile').css({
        'opacity': '1'
    });
    activeDropDownMenusAction();
}

function ShowMenuAfterReduseSize_finishCalc() {
    var screenCenterPoint = $(window).outerWidth(true) / 2;
    var logoLeftPXforCenter = Math.round(screenCenterPoint - ($('#centerLogo19').outerWidth(true) / 2));
    var logoExistingLeftPX = Math.round($('#centerLogo19').offset().left);
    if (logoLeftPXforCenter > logoExistingLeftPX) {
        var result = (logoLeftPXforCenter - logoExistingLeftPX);
        var existingPadding = parseInt($('#top-menu').css('padding-left'), 10);
        result = result + existingPadding;
        $('#top-menu').css('padding-left', (result) + 'px');
    } else {
        var result = (logoExistingLeftPX - logoLeftPXforCenter);
        var existingPadding = parseInt($('#top-menu').css('padding-right'), 10);
        result = result + existingPadding;
        $('#top-menu').css('padding-right', (result) + 'px');
    }
}

function FixMenuTopPosition_SideMenu() {
    $('.navPages .dropdown-submenu > a').on('click mouseenter', function(e) {
        $this = $(this).parent().find('.site-dropdown-menu');
        if ($this.length > 0) {
            setTimeout(function() {
                var rect = $this[0].getBoundingClientRect();
                if (rect.top + rect.height > window.innerHeight && rect.height < window.innerHeight) {
                    $this.css('top', parseInt($this.css('top'), 10) - (rect.top + rect.height - window.innerHeight) - 25);
                }
                $this.css('opacity', '1');
            }, 100);
        }
    });
};

function FixMenuTopPosition_TopMenu() {
    $('.navPages .dropdown-submenu > a, .global_footer .nav .dropdown-submenu > a').on('click mouseenter', function(e) {
        $this = $(this).parent().find('.site-dropdown-menu');
        if ($this.length > 0) {
            setTimeout(function() {
                if ($this.length > 0) {
                    var rect = $this[0].getBoundingClientRect();
                    if (rect.top + rect.height > window.innerHeight && rect.height < window.innerHeight) {
                        $this.css({
                            'bottom': '100%',
                            'top': 'auto'
                        });
                    } else {
                        if (rect.top < 0 || rect.bottom < 0) {
                            $this.css({
                                'top': '100%',
                                'bottom': 'auto'
                            });
                        }
                    }
                    if ($('html').attr('dir') != 'rtl') {
                        if (rect.right > window.innerWidth && rect.width < window.innerWidth) {
                            $this.css({
                                'left': 'auto',
                                'right': '0'
                            });
                        }
                    } else {
                        if (rect.left < 0 && rect.width < window.innerWidth) {
                            $this.css({
                                'right': 'auto',
                                'left': '0'
                            });
                        }
                    }
                }
                $this.css('opacity', '1');
            }, 100);
        }
    });
}

function openDivMenuOnMobileClick() {
    $(document).on('s123.page.ready', function(event) {
        $('.header-menu-wrapper a').click(function() {
            var $this = $(this);
            var closeLocation = $this.data('closeLocation');
            openDivMenuOnMobileClickAction(closeLocation);
        });
    });
}

function openDivMenuOnMobileClickAction(closeLocation) {
    var pageList = '<ul class="navPagesPopup">' + $('#top-menu-mobile > ul').clone().html() + '</ul>';
    var actionButtons = '<div class="navPagesPopupActionButtons">';
    actionButtons += '<div class="navPagesPopupActionButtons_part1">';
    if ($('.header-phone-wrapper').length > 0) {
        actionButtons += $('.header-phone-wrapper').clone().html();
    }
    if ($('.header-address-wrapper').length > 0) {
        actionButtons += $('.header-address-wrapper').clone().html();
    }
    if ($('.header-social-wrapper').length > 0 && $('.header-social-wrapper.hidden').length == 0) {
        actionButtons += $('.header-social-wrapper').clone().html();
    }
    if ($('.header-search-wrapper').length > 0) {
        actionButtons += $('.header-search-wrapper').clone().html();
    }
    if ($('.website-languages-menu a').length > 0) {
        actionButtons += $('.website-languages-menu').clone().html();
    }
    actionButtons += '</div>';
    if ($('.action-button-wrapper').length > 0) {
        actionButtons += '<div class="navPagesPopupActionButtons_part2">';
        $('.action-button-wrapper').each(function() {
            var $this = $(this);
            actionButtons += $this.clone().html();
        })
        actionButtons += '</div>';
    }
    actionButtons += '</div>';
    buildPopup('popupFloatDivMenu', '', pageList + actionButtons, '', true, true, true, closeLocation);
    setTimeout(function() {
        var navHeight = $('#popupFloatDivMenu .navPagesPopup').outerHeight(true) + 100; //We add another 100px so the menu will be more taller to make some space and to make some space when the user have categories
        var actionHeight = $('.navPagesPopupActionButtons').outerHeight(true);
        var screenHeight = $('#popupFloatDivMenu .page').outerHeight(true);
        if (navHeight + actionHeight > screenHeight) {
            $('#popupFloatDivMenu .navPagesPopup').height(screenHeight - actionHeight - 15);
        } else {
            $('#popupFloatDivMenu .navPagesPopup').height(navHeight - 15);
        }
        $('#popupFloatDivMenu .navPagesPopup .caret').remove();
        $('#popupFloatDivMenu .navPagesPopup .fa-caret-right').remove();
        $('#popupFloatDivMenu .navPagesPopup .fa-caret-left').remove();
        $('#popupFloatDivMenu .navPagesPopup .site-dropdown-menu').css('opacity', '1');
    }, 150);
    activeDropDownMenusAction();
    $('#popupFloatDivMenu .navPagesPopup li').not('.dropdown-submenu').find('a').click(function() {
        buildPopup_CloseAction('popupFloatDivMenu');
    });
    $('#popupFloatDivMenu .navPagesPopupActionButtons_part2 a').click(function() {
        buildPopup_CloseAction('popupFloatDivMenu');
    });
    ActivePopupActionButtonsInPage();
    $(document).trigger('s123.page.ready.pageScrollByClick');
}

function ResetMoreButton() {
    $('#mainNav #top-menu .navPages, #mainNav #top-menu .navActions, #mainNav #top-menu .headerSocial, #header .header-row, .global_footer .nav').css({
        'opacity': '0'
    });
    $('#top-menu .navPages .extra-nav-more > ul > li').each(function() {
        var $this = $(this);
        if ($('#mainNav #top-menu').length > 0) {
            $this.find('.site-dropdown-menu').removeClass('dropdown-side-open-left');
            if ($('html').attr('dir') == 'rtl') {
                $this.find('.fa').removeClass('fa-caret-left').addClass('fa-caret-down');
            } else {
                $this.find('.fa').removeClass('fa-caret-right').addClass('fa-caret-down');
            }
        }
        $this.appendTo($('#top-menu .navPages'));
    });
    $('#top-menu .navPages .extra-nav-more').remove()
    $('footer .navPages .extra-nav-more > ul > li').each(function() {
        var $this = $(this);
        $this.appendTo($('footer .navPages'));
    });
    $('footer .navPages .extra-nav-more').remove();
    if (layoutMenuPositionTXT == 'left' || layoutMenuPositionTXT == 'right') {
        ReduseMenuSizeWhenWeDontHavePlaceHeight();
    } else {
        ReduseMenuSizeWhenWeDontHavePlace();
    }
}



function PageScrollByClick() {
    $(document).on('s123.page.ready.pageScrollByClick', function(event) {
        var offset = findBootstrapEnvironment() != 'xs' ? null : menuScrollOffset_mobile;
        $('a.page-scroll').off('click.scrollEvent').on('click.scrollEvent', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - offset)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });
    });
}
/**
 * The function refresh the Bootstrap Scrollspy. The Scrollspy is the
 * object that responsible on Highlighting the top navigation bar as
 * scrolling occurs. In some cases we need to refresh the it because
 * changes we made in the DOM via Ajax. e.g. changing the pages places.
 * Note: We initialize it on the layouts JS files.
 * Documentation: http://v4-alpha.getbootstrap.com/components/scrollspy/
 */
function RefreshScrollSpy() {
    $(document).on('s123.page.ready.refreshScrollSpy', function(event) {
        $('body').scrollspy('refresh');
    });
};

function findBootstrapEnvironment() {
    var envs = ['xs', 'sm', 'md', 'lg'];
    var $el = $('<div>');
    $el.appendTo($('body'));
    for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];
        $el.addClass('hidden-' + env);
        if ($el.is(':hidden')) {
            $el.remove();
            return env;
        }
    }
}
/**
 * The function count how much items there is per row related to the
 * current Bootstrap environment.
 */
function findBootstrapColPerRow($items) {
    if (!$items || $items.length === 0) return 0;
    var first_item_offset_top = $items.first().offset().top;
    var col_per_row = 0;
    $items.each(function() {
        if ($(this).offset().top === first_item_offset_top) {
            col_per_row += 1;
        } else {
            return;
        }
    });
    return col_per_row;
}

function buildSmallPopup(popID, title, content, iframeURL, closeEsc, closeEnter, oneColor, closeLocation) {
    if (iframeURL != '') {
        content = '<iframe id="' + popID + '_iFrame" src="' + iframeURL + '" scrolling="no"></iframe>';
    }
    var x = '<div id="' + popID + '" class="quickPopupWin">';
    x += '<div class="cover">';
    x += '</div>';
    x += '<div class="content">';
    x += content;
    x += '</div>';
    x += '</div>';
    $('body').append(x);
    popupWinScrollAction(1);
    setTimeout(function() {
        $('#' + popID + '').find('.content').addClass('open');
    }, 100);
    $('#' + popID + ' .cover').click(function() {
        buildSmallPopup_CloseAction(popID);
    });
}

function buildSmallPopup_CloseAction(popID) {
    var $popup = $('#' + popID);
    setTimeout(function() {
        $popup.find('.content').removeClass('open');
    }, 100);
    setTimeout(function() {
        $('#' + popID).remove();
        popupWinScrollAction(0);
    }, 700);
}


function buildPopup(popID, title, content, iframeURL, closeEsc, closeEnter, oneColor, closeLocation) {
    if ($('#' + popID).length !== 0) return;
    /*
    window.onhashchange = function() {
    if ($('#'+popID).length>0 && window.location.hash.substr(1)!=popID) {
    buildPopup_CloseAction(popID);
    }
    }
    */
    if (iframeURL != '') {
        var iClass = '';
        if (iframeURL.indexOf("youtube.com") > -1) {
            iClass = 'videoSize';
        }
        if (iframeURL.indexOf("vimeo.com") > -1) {
            iClass = 'videoSize';
        }
        content = '<iframe id="' + popID + '_iFrame" src="' + iframeURL + '" class="iframe ' + iClass + '" allowfullscreen></iframe>';
    }
    var x = '<div id="' + popID + '" class="popupWin container';
    if (oneColor == true) {
        x += ' oneColor';
    }
    x += '">';
    x += '<div class="cover">';
    x += '</div>';
    x += '<div class="content container">';
    x += '<div class="page">' + content + '</div>';
    x += '</div>';
    x += '<div class="popupCloseButton ' + closeLocation + '">';
    x += '<i class="fa fa-close fa-3x"></i>';
    x += '</div>';
    x += '</div>';
    $('body').append(x);
    popupWinScrollAction(1);
    $('#' + popID).find('.page').css({
        overflow: 'hidden'
    });
    setTimeout(function() {
        $('#' + popID).addClass('open');
        if (iframeURL == '') {
            $('#' + popID).find('.page').css({
                overflow: 'auto'
            });
        }
    }, 100);
    $('#' + popID).find('.popupCloseButton').click(function() {
        buildPopup_CloseAction(popID);
    });
    $('#' + popID + ' .cover').click(function() {
        buildPopup_CloseAction(popID);
    });


    $(document).keyup(function(e) {
        if (closeEsc == true && e.keyCode === 27) {
            buildPopup_CloseAction(popID);
        }
        /*
        if (closeEnter==true && e.keyCode === 13) {
        buildPopup_CloseAction(popID);
        }
        */
    });
}

function is_touch_device() {
    return 'ontouchstart' in window // works on most browsers
        ||
        navigator.maxTouchPoints; // works on IE10/11 and Surface
};

function buildPopup_CloseAction(popID) {
    var $popup = $('#' + popID);
    $popup.find('.page').css({
        overflow: 'hidden'
    });
    $popup.removeClass('open');
    setTimeout(function() {
        $('#' + popID).remove();
        if ($('.popupWin').length <= 1) {
            popupWinScrollAction(0);
        }
    }, 700);
}

function buildPopup_CloseAllPopupsInPage() {
    if ($('.popupWin').length > 0) {
        $('.popupWin').each(function() {
            var popID = $(this).attr('id');
            buildPopup_CloseAction(popID);
        });
    }
}


/* https://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript */
function getScrollbarWidth() {
    if ($(document).height() > $(window).height()) { //Make sure this page have a scroll
        var outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
        document.body.appendChild(outer);
        var widthNoScroll = outer.offsetWidth;
        outer.style.overflow = "scroll";
        var inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);
        var widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    } else {
        return 0; //If this page is short without a scroll we don't add padding
    }
}

function popupWinScrollAction(addBOO) {
    var scrollWidth = getScrollbarWidth();
    if (addBOO == 1 && scrollWidth > 0) {
        $('body').addClass('popupWinScroll');
        $('body').css('padding-right', scrollWidth + 'px');
        $('#mainNavMobile').css('padding-right', scrollWidth + 'px');
        $('#showSmallAdOnScroll').css('padding-right', scrollWidth + 'px');
        if (layoutMenuPositionTXT == 'left' || layoutMenuPositionTXT == 'right') {} else {
            $('#mainNav').css('padding-right', scrollWidth + 'px');
            $('#mainNav #top-menu.affix').css('padding-right', scrollWidth + 'px');
        }
    } else {
        $('body').removeClass('popupWinScroll');
        $('body').css('padding-right', '0px');
        $('#mainNavMobile').css('padding-right', '0px');
        $('#showSmallAdOnScroll').css('padding-right', '0px');
        if (layoutMenuPositionTXT == 'left' || layoutMenuPositionTXT == 'right') {} else {
            $('#mainNav').css('padding-right', '0px');
            $('#mainNav #top-menu.affix').css('padding-right', '0px');
        }
    }
}

