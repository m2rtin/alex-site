function myFunction() {
    c2c.from = 'MjJtYXJ0aW4yMkBzZXpuYW0uY3o=';
    c2c.text = 'Call us Now &raquo;';
    // c2c.cls = 'btn btn-large btn-success';
    c2c.config = {
        http_service_url: null,
        websocket_proxy_url: null,
        sip_outbound_proxy_url: null
    };
    c2c.init();
}


c2c = {
    debug: false
};
if (window.console.info) {
    window.console.info("[C2C] API version = 1.0.2")
}
var Base64 = (function() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var b = {
        encode: function(e) {
            var c = "";
            var m, k, h;
            var l, j, g, f;
            var d = 0;
            do {
                m = e.charCodeAt(d++);
                k = e.charCodeAt(d++);
                h = e.charCodeAt(d++);
                l = m >> 2;
                j = ((m & 3) << 4) | (k >> 4);
                g = ((k & 15) << 2) | (h >> 6);
                f = h & 63;
                if (isNaN(k)) {
                    g = f = 64
                } else {
                    if (isNaN(h)) {
                        f = 64
                    }
                }
                c = c + a.charAt(l) + a.charAt(j) + a.charAt(g) + a.charAt(f)
            } while (d < e.length);
            return c
        },
        decode: function(e) {
            var c = "";
            var m, k, h;
            var l, j, g, f;
            var d = 0;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            do {
                l = a.indexOf(e.charAt(d++));
                j = a.indexOf(e.charAt(d++));
                g = a.indexOf(e.charAt(d++));
                f = a.indexOf(e.charAt(d++));
                m = (l << 2) | (j >> 4);
                k = ((j & 15) << 4) | (g >> 2);
                h = ((g & 3) << 6) | f;
                c = c + String.fromCharCode(m);
                if (g != 64) {
                    c = c + String.fromCharCode(k)
                }
                if (f != 64) {
                    c = c + String.fromCharCode(h)
                }
            } while (d < e.length);
            return c
        }
    };
    return b
})();
var MD5 = (function() {
    var o = 0;
    var a = "";
    var l = 8;
    var j = function(r, u) {
        var t = (r & 65535) + (u & 65535);
        var s = (r >> 16) + (u >> 16) + (t >> 16);
        return (s << 16) | (t & 65535)
    };
    var n = function(r, s) {
        return (r << s) | (r >>> (32 - s))
    };
    var b = function(u) {
        var t = [];
        var r = (1 << l) - 1;
        for (var s = 0; s < u.length * l; s += l) {
            t[s >> 5] |= (u.charCodeAt(s / l) & r) << (s % 32)
        }
        return t
    };
    var g = function(t) {
        var u = "";
        var r = (1 << l) - 1;
        for (var s = 0; s < t.length * 32; s += l) {
            u += String.fromCharCode((t[s >> 5] >>> (s % 32)) & r)
        }
        return u
    };
    var q = function(t) {
        var s = o ? "0123456789ABCDEF" : "0123456789abcdef";
        var u = "";
        for (var r = 0; r < t.length * 4; r++) {
            u += s.charAt((t[r >> 2] >> ((r % 4) * 8 + 4)) & 15) + s.charAt((t[r >> 2] >> ((r % 4) * 8)) & 15)
        }
        return u
    };
    var p = function(u) {
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var w = "";
        var v, r;
        for (var s = 0; s < u.length * 4; s += 3) {
            v = (((u[s >> 2] >> 8 * (s % 4)) & 255) << 16) | (((u[s + 1 >> 2] >> 8 * ((s + 1) % 4)) & 255) << 8) | ((u[s + 2 >> 2] >> 8 * ((s + 2) % 4)) & 255);
            for (r = 0; r < 4; r++) {
                if (s * 8 + r * 6 > u.length * 32) {
                    w += a
                } else {
                    w += t.charAt((v >> 6 * (3 - r)) & 63)
                }
            }
        }
        return w
    };
    var d = function(z, v, u, r, y, w) {
        return j(n(j(j(v, z), j(r, w)), y), u)
    };
    var k = function(v, u, A, z, r, y, w) {
        return d((u & A) | ((~u) & z), v, u, r, y, w)
    };
    var c = function(v, u, A, z, r, y, w) {
        return d((u & z) | (A & (~z)), v, u, r, y, w)
    };
    var m = function(v, u, A, z, r, y, w) {
        return d(u ^ A ^ z, v, u, r, y, w)
    };
    var i = function(v, u, A, z, r, y, w) {
        return d(A ^ (u | (~z)), v, u, r, y, w)
    };
    var f = function(C, w) {
        C[w >> 5] |= 128 << ((w) % 32);
        C[(((w + 64) >>> 9) << 4) + 14] = w;
        var B = 1732584193;
        var A = -271733879;
        var z = -1732584194;
        var y = 271733878;
        var v, u, t, r;
        for (var s = 0; s < C.length; s += 16) {
            v = B;
            u = A;
            t = z;
            r = y;
            B = k(B, A, z, y, C[s + 0], 7, -680876936);
            y = k(y, B, A, z, C[s + 1], 12, -389564586);
            z = k(z, y, B, A, C[s + 2], 17, 606105819);
            A = k(A, z, y, B, C[s + 3], 22, -1044525330);
            B = k(B, A, z, y, C[s + 4], 7, -176418897);
            y = k(y, B, A, z, C[s + 5], 12, 1200080426);
            z = k(z, y, B, A, C[s + 6], 17, -1473231341);
            A = k(A, z, y, B, C[s + 7], 22, -45705983);
            B = k(B, A, z, y, C[s + 8], 7, 1770035416);
            y = k(y, B, A, z, C[s + 9], 12, -1958414417);
            z = k(z, y, B, A, C[s + 10], 17, -42063);
            A = k(A, z, y, B, C[s + 11], 22, -1990404162);
            B = k(B, A, z, y, C[s + 12], 7, 1804603682);
            y = k(y, B, A, z, C[s + 13], 12, -40341101);
            z = k(z, y, B, A, C[s + 14], 17, -1502002290);
            A = k(A, z, y, B, C[s + 15], 22, 1236535329);
            B = c(B, A, z, y, C[s + 1], 5, -165796510);
            y = c(y, B, A, z, C[s + 6], 9, -1069501632);
            z = c(z, y, B, A, C[s + 11], 14, 643717713);
            A = c(A, z, y, B, C[s + 0], 20, -373897302);
            B = c(B, A, z, y, C[s + 5], 5, -701558691);
            y = c(y, B, A, z, C[s + 10], 9, 38016083);
            z = c(z, y, B, A, C[s + 15], 14, -660478335);
            A = c(A, z, y, B, C[s + 4], 20, -405537848);
            B = c(B, A, z, y, C[s + 9], 5, 568446438);
            y = c(y, B, A, z, C[s + 14], 9, -1019803690);
            z = c(z, y, B, A, C[s + 3], 14, -187363961);
            A = c(A, z, y, B, C[s + 8], 20, 1163531501);
            B = c(B, A, z, y, C[s + 13], 5, -1444681467);
            y = c(y, B, A, z, C[s + 2], 9, -51403784);
            z = c(z, y, B, A, C[s + 7], 14, 1735328473);
            A = c(A, z, y, B, C[s + 12], 20, -1926607734);
            B = m(B, A, z, y, C[s + 5], 4, -378558);
            y = m(y, B, A, z, C[s + 8], 11, -2022574463);
            z = m(z, y, B, A, C[s + 11], 16, 1839030562);
            A = m(A, z, y, B, C[s + 14], 23, -35309556);
            B = m(B, A, z, y, C[s + 1], 4, -1530992060);
            y = m(y, B, A, z, C[s + 4], 11, 1272893353);
            z = m(z, y, B, A, C[s + 7], 16, -155497632);
            A = m(A, z, y, B, C[s + 10], 23, -1094730640);
            B = m(B, A, z, y, C[s + 13], 4, 681279174);
            y = m(y, B, A, z, C[s + 0], 11, -358537222);
            z = m(z, y, B, A, C[s + 3], 16, -722521979);
            A = m(A, z, y, B, C[s + 6], 23, 76029189);
            B = m(B, A, z, y, C[s + 9], 4, -640364487);
            y = m(y, B, A, z, C[s + 12], 11, -421815835);
            z = m(z, y, B, A, C[s + 15], 16, 530742520);
            A = m(A, z, y, B, C[s + 2], 23, -995338651);
            B = i(B, A, z, y, C[s + 0], 6, -198630844);
            y = i(y, B, A, z, C[s + 7], 10, 1126891415);
            z = i(z, y, B, A, C[s + 14], 15, -1416354905);
            A = i(A, z, y, B, C[s + 5], 21, -57434055);
            B = i(B, A, z, y, C[s + 12], 6, 1700485571);
            y = i(y, B, A, z, C[s + 3], 10, -1894986606);
            z = i(z, y, B, A, C[s + 10], 15, -1051523);
            A = i(A, z, y, B, C[s + 1], 21, -2054922799);
            B = i(B, A, z, y, C[s + 8], 6, 1873313359);
            y = i(y, B, A, z, C[s + 15], 10, -30611744);
            z = i(z, y, B, A, C[s + 6], 15, -1560198380);
            A = i(A, z, y, B, C[s + 13], 21, 1309151649);
            B = i(B, A, z, y, C[s + 4], 6, -145523070);
            y = i(y, B, A, z, C[s + 11], 10, -1120210379);
            z = i(z, y, B, A, C[s + 2], 15, 718787259);
            A = i(A, z, y, B, C[s + 9], 21, -343485551);
            B = j(B, v);
            A = j(A, u);
            z = j(z, t);
            y = j(y, r)
        }
        return [B, A, z, y]
    };
    var e = function(t, w) {
        var v = b(t);
        if (v.length > 16) {
            v = f(v, t.length * l)
        }
        var r = new Array(16),
        u = new Array(16);
        for (var s = 0; s < 16; s++) {
            r[s] = v[s] ^ 909522486;
            u[s] = v[s] ^ 1549556828
        }
        var x = f(r.concat(b(w)), 512 + w.length * l);
        return f(u.concat(x), 512 + 128)
    };
    var h = {
        hexdigest: function(r) {
            return q(f(b(r), r.length * l))
        },
        b64digest: function(r) {
            return p(f(b(r), r.length * l))
        },
        hash: function(r) {
            return g(f(b(r), r.length * l))
        },
        hmac_hexdigest: function(r, s) {
            return q(e(r, s))
        },
        hmac_b64digest: function(r, s) {
            return p(e(r, s))
        },
        hmac_hash: function(r, s) {
            return g(e(r, s))
        },
        test: function() {
            return MD5.hexdigest("abc") === "900150983cd24fb0d6963f7d28e17f72"
        }
    };
    return h
})();
document.write(unescape("%3Cscript src='https://sipml5.googlecode.com/svn/trunk/release/SIPml-api.js' type='text/javascript'%3E%3C/script%3E"));
if (!window.c2c) {
    c2c = {
        debug: true
    }
}
c2c.config = {};
c2c.started = false;
c2c.callSession = null;
c2c.add_html_elts = function(b, c) {
    var a = document.getElementsByTagName(b)[0];
    c.forEach(function(d) {
        var f = document.createElement(d.type);
        d.attributes.forEach(function(g) {
            f.setAttribute(g.name, g.value)
        });
        var e = document.getElementsByTagName(d.type);
        if (e && e.length > 0) {
            e[0].parentNode.insertBefore(f, e[0])
        } else {
            a.appendChild(f)
        }
    })
};
if (c2c.debug) {
    c2c.add_html_elts("head", [{
        type: "script",
        attributes: [{
            name: "type",
            value: "text/javascript"
        }, {
            name: "src",
            value: "c2c-base64.js"
        }]
    }, {
        type: "script",
        attributes: [{
            name: "type",
            value: "text/javascript"
        }, {
            name: "src",
            value: "c2c-md5.js"
        }]
    }])
} else {
    c2c.add_html_elts("body", [{
        type: "link",
        attributes: [{
            name: "href",
            value: "stylesheets/bootstrap.css"
        }, {
            name: "rel",
            value: "stylesheet"
        }]
    }, {
        type: "link",
        attributes: [{
            name: "href",
            value: "stylesheets/bootstrap-responsive.css"
        }, {
            name: "rel",
            value: "stylesheet"
        }]
    }])
}
c2c.buildAuthToken = function(b, a) {
    return MD5.hexdigest(a + ":" + b + ":click2call.org")
};
c2c.buildHa1 = function(c, a, b) {
    return MD5.hexdigest(c + ":" + a + ":" + b)
};
c2c.obfuscate = function(a) {
    return Base64.encode(a)
};
c2c.unobfuscate = function(a) {
    return Base64.decode(a)
};
c2c.init = function() {
    tsk_utils_log_info("[C2C] c2c.init()");
    c2c.audio_remote = document.createElement("audio");
    c2c.audio_remote.autoplay = "autoplay";
    c2c.audio_ringbacktone = document.createElement("audio");
    c2c.audio_ringbacktone.src = "sounds/ringbacktone.wav";
    c2c.audio_ringbacktone.loop = true;
    // document.write("<a href='#' class='btn btn-large btn-success' id='c2c_btn_call' style='position:fixed; visibility:hidden; z-index:98; top: 25%;'>Call us Now</a>");
    // document.write("<div id='c2c_div_glass' style='visibility:hidden;z-index: 99;position: fixed;width: 100%;height: 100%;margin: 0;padding: 0;top: 0;left: 0;opacity: 0.8;background-color: Gray'></div>");
    
    
    // c2c.div_glass = document.getElementById("c2c_div_glass");
    c2c.button_call = document.getElementById("c2c_btn_call");
    if (c2c.cls) {
        c2c.button_call.setAttribute("class", c2c.cls)
    }
    c2c.button_call.innerHTML = c2c.button_call._innerHTML = c2c.text ? c2c.text : "call us &raquo;";
    c2c.button_call.onclick = function() {
        if (!c2c.stack) {
            var b = (tsk_string_is_null_or_empty(c2c.config.websocket_proxy_url) && window.localStorage) ? window.localStorage.getItem("org.doubango.click2dial.admin.websocket_server_url") : c2c.config.websocket_proxy_url;
            var d = (tsk_string_is_null_or_empty(c2c.config.sip_outbound_proxy_url) && window.localStorage) ? window.localStorage.getItem("org.doubango.click2dial.admin.sip_outboundproxy_url") : c2c.config.sip_outbound_proxy_url;
            if (tsk_string_is_null_or_empty(b)) {
                var a = (true ? 10062 : 10060) + (((new Date().getTime()) % 1) * 1000);
                var c = "ns313841.ovh.net";
                b = "wss://" + c + ":" + a
            }
            c2c.stack = new SIPml.Stack({
                realm: "click2dial.org",
                impi: c2c.from,
                impu: "sip:" + c2c.from + "@click2dial.org",
                password: "mysecret",
                events_listener: {
                    events: "*",
                    listener: function(f) {
                        tsk_utils_log_info("[C2C] stack event = " + f.type);
                        switch (f.type) {
                            case "started":
                            c2c.started = true;
                            c2c.call();
                            break;
                            case "stopped":
                            case "stopping":
                            c2c.callSession = null;
                            c2c.audio_ringbacktone.pause();
                            c2c.started = false;
                            c2c.button_call.innerHTML = c2c.button_call._innerHTML;
                            break;
                            case "m_permission_requested":
                            // if (c2c.glass) {
                            //     c2c.div_glass.style.visibility = "visible"
                            // }
                            break;
                            case "m_permission_accepted":
                            case "m_permission_refused":
                            // c2c.div_glass.style.visibility = "hidden";
                            break;
                            break
                        }
                    }
                },
                enable_rtcweb_breaker: true,
                enable_click2call: true,
                websocket_proxy_url: b,
                outbound_proxy_url: d
            })
}
if (!c2c.started) {
    c2c.stack.start()
} else {
    c2c.call()
}
};
//document.body.appendChild(c2c.button_call);
//document.body.appendChild(c2c.audio_remote);
SIPml.init(function(a) {
    c2c.button_call.style.visibility = "visible"
}, function(a) {
    c2c.button_call.innerHTML = a.description
})
};
c2c.signup = function(d, c, a, b) {
    var e = JSON.stringify({
        action: "req_account_add",
        name: d,
        email: c
    });
    return c2c._send_data(e, a, b)
};
c2c.activate = function(d, c, a, b) {
    var e = JSON.stringify({
        action: "req_account_activate",
        email: c,
        code: d
    });
    return c2c._send_data(e, a, b)
};
c2c.linkaddress = function(b, a) {
    return b + "/u/" + c2c.obfuscate(a)
};
c2c.signin = function(d, c, a, b) {
    var e = JSON.stringify({
        action: "req_account_info",
        email: d,
        auth_token: c2c.buildAuthToken(d, c)
    });
    return c2c._send_data(e, a, b)
};
c2c.add_sip_address = function(e, d, b, a, c) {
    var f = JSON.stringify({
        action: "req_account_sip_add",
        email: e,
        auth_token: c2c.buildAuthToken(e, d),
        sip: {
            address: b
        }
    });
    return c2c._send_data(f, a, c)
};
c2c.delete_sip_address = function(d, c, f, a, b) {
    var e = JSON.stringify({
        action: "req_account_sip_delete",
        email: d,
        auth_token: c2c.buildAuthToken(d, c),
        id: f
    });
    return c2c._send_data(e, a, b)
};
c2c.add_sip_caller = function(f, j, k, b, i, e, h, g, a, d) {
    var c = JSON.stringify({
        action: "req_account_sip_caller_add",
        email: f,
        auth_token: c2c.buildAuthToken(f, j),
        display_name: k,
        impu: b,
        impi: i,
        realm: e,
        account_sip_id: g,
        ha1: c2c.buildHa1(i, e, h)
    });
    return c2c._send_data(c, a, d)
};
c2c.delete_sip_caller = function(d, c, f, a, b) {
    var e = JSON.stringify({
        action: "req_account_sip_caller_delete",
        email: d,
        auth_token: c2c.buildAuthToken(d, c),
        id: f
    });
    return c2c._send_data(e, a, b)
};
c2c.call = function(c) {
    tsk_utils_log_info("[C2C] c2c.call()");
    if (!c2c.stack) {
        c2c.button_call.click();
        return
    }
    if (c2c.callSession) {
        c2c.callSession.hangup();
        return
    }
    var c = (c || c2c.from);
    var b = (c2c.to || c);
    var a = function(f) {
        tsk_utils_log_info("[C2C] session event = " + f.type);
        switch (f.type) {
            case "connecting":
            case "connected":
            if (f.session == c2c.callSession) {
                c2c.button_call.innerHTML = ((f.type === "connecting") ? "calling..." : "in call")
            }
            break;
            case "i_ao_request":
            if (f.session == c2c.callSession) {
                var d = f.getSipResponseCode();
                if (d == 180 || d == 183) {
                    c2c.audio_ringbacktone.play();
                    c2c.button_call.innerHTML = "ringing..."
                }
            }
            break;
            case "m_early_media":
            if (f.session == c2c.callSession) {
                c2c.audio_ringbacktone.pause();
                c2c.button_call.innerHTML = "early media..."
            }
            break;
            case "terminating":
            case "terminated":
            if (f.session == c2c.callSession) {
                c2c.button_call.innerHTML = f.description.toLowerCase();
                c2c.callSession = null;
                c2c.audio_ringbacktone.pause();
                // c2c.div_glass.style.visibility = "hidden";
                window.setTimeout(function() {
                    c2c.button_call.innerHTML = c2c.button_call._innerHTML;
                    if (c2c.started && !c2c.callSession) {
                        c2c.stack.stop()
                    }
                }, 2000)
            }
            break
        }
    };
    c2c.callSession = c2c.stack.newSession("call-audio", {
        from: c,
        audio_remote: c2c.audio_remote,
        video_local: null,
        video_remote: null,
        events_listener: {
            events: "*",
            listener: a
        },
        sip_caps: [{
            name: "+g.oma.sip-im"
        }, {
            name: "+sip.ice"
        }, {
            name: "language",
            value: '"en,fr"'
        }]
    });
    c2c.callSession.call(b)
};
c2c._send_data = function(f, a, c) {
    var g = (tsk_string_is_null_or_empty(c2c.config.http_service_url) && window.localStorage) ? window.localStorage.getItem("org.doubango.click2dial.admin.http_server_url") : c2c.config.http_service_url;
    var d = window.XMLHttpRequest ? new XMLHttpRequest() : (window.XDomainRequest ? window.XDomainRequest : new ActiveXObject("MSXML2.XMLHTTP.3.0"));
    if (tsk_string_is_null_or_empty(g)) {
        var b = (true ? 10072 : 10060) + (((new Date().getTime()) % 1) * 1000);
        var e = "ns313841.ovh.net";
        g = "https://" + e + ":" + b
    }
    d.onreadystatechange = function(j) {
        var i;
        try {
            if (this.readyState == this.DONE) {
                if (this.status == 200) {
                    if (this.responseText != null) {
                        tsk_utils_log_info("[C2C] RECV: " + this.responseText);
                        i = JSON.parse(this.responseText)
                    }
                    if (a) {
                        a({
                            status: this.status,
                            statusText: this.statusText,
                            JSONObject: i
                        })
                    }
                } else {
                    if (c) {
                        c({
                            status: this.status,
                            statusText: tsk_string_is_null_or_empty(this.statusText) ? "timeout" : this.statusText,
                            JSONObject: i
                        })
                    }
                }
            }
        } catch (h) {
            if (c) {
                c({
                    status: 600,
                    statusText: h.toString(),
                    JSONObject: null
                })
            }
        }
    };
    d.open("POST", g, true);
    d.setRequestHeader("Content-type", "application/json");
    tsk_utils_log_info("[C2C] SEND[" + g + "]: not displayed");
    d.send(f)
};