"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [49054], {
        949054: (t, e, n) => {
            n.d(e, {
                Kr: () => I
            });
            var r = 'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
                o = "u" < typeof Element,
                i = o ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                a = !o && Element.prototype.getRootNode ? function(t) {
                    var e;
                    return null == t || null == (e = t.getRootNode) ? void 0 : e.call(t)
                } : function(t) {
                    return null == t ? void 0 : t.ownerDocument
                },
                l = function t(e, n) {
                    void 0 === n && (n = !0);
                    var r, o = null == e || null == (r = e.getAttribute) ? void 0 : r.call(e, "inert");
                    return "" === o || "true" === o || n && e && t(e.parentNode)
                },
                u = function(t) {
                    var e, n = null == t || null == (e = t.getAttribute) ? void 0 : e.call(t, "contenteditable");
                    return "" === n || "true" === n
                },
                c = function(t, e, n) {
                    if (l(t)) return [];
                    var o = Array.prototype.slice.apply(t.querySelectorAll(r));
                    return e && i.call(t, r) && o.unshift(t), o = o.filter(n)
                },
                d = function t(e, n, o) {
                    for (var a = [], u = Array.from(e); u.length;) {
                        var c = u.shift();
                        if (!l(c, !1))
                            if ("SLOT" === c.tagName) {
                                var d = c.assignedElements(),
                                    s = t(d.length ? d : c.children, !0, o);
                                o.flatten ? a.push.apply(a, s) : a.push({
                                    scopeParent: c,
                                    candidates: s
                                })
                            } else {
                                i.call(c, r) && o.filter(c) && (n || !e.includes(c)) && a.push(c);
                                var f = c.shadowRoot || "function" == typeof o.getShadowRoot && o.getShadowRoot(c),
                                    p = !l(f, !1) && (!o.shadowRootFilter || o.shadowRootFilter(c));
                                if (f && p) {
                                    var h = t(!0 === f ? c.children : f.children, !0, o);
                                    o.flatten ? a.push.apply(a, h) : a.push({
                                        scopeParent: c,
                                        candidates: h
                                    })
                                } else u.unshift.apply(u, c.children)
                            }
                    }
                    return a
                },
                s = function(t, e) {
                    return t.tabIndex < 0 && (e || /^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || u(t)) && isNaN(parseInt(t.getAttribute("tabindex"), 10)) ? 0 : t.tabIndex
                },
                f = function(t, e) {
                    return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex
                },
                p = function(t) {
                    return "INPUT" === t.tagName
                },
                h = function(t, e) {
                    for (var n = 0; n < t.length; n++)
                        if (t[n].checked && t[n].form === e) return t[n]
                },
                m = function(t) {
                    if (!t.name) return !0;
                    var e, n = t.form || a(t),
                        r = function(t) {
                            return n.querySelectorAll('input[type="radio"][name="' + t + '"]')
                        };
                    if ("u" > typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) e = r(window.CSS.escape(t.name));
                    else try {
                        e = r(t.name)
                    } catch (t) {
                        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", t.message), !1
                    }
                    var o = h(e, t.form);
                    return !o || o === t
                },
                g = function(t) {
                    return p(t) && "radio" === t.type && !m(t)
                },
                y = function(t) {
                    var e, n, r, o, i, l, u, c = t && a(t),
                        d = null == (e = c) ? void 0 : e.host,
                        s = !1;
                    if (c && c !== t)
                        for (s = !!(null != (n = d) && null != (r = n.ownerDocument) && r.contains(d) || null != t && null != (o = t.ownerDocument) && o.contains(t)); !s && d;) s = !!(null != (l = d = null == (i = c = a(d)) ? void 0 : i.host) && null != (u = l.ownerDocument) && u.contains(d));
                    return s
                },
                v = function(t) {
                    var e = t.getBoundingClientRect(),
                        n = e.width,
                        r = e.height;
                    return 0 === n && 0 === r
                },
                b = function(t, e) {
                    var n = e.displayCheck,
                        r = e.getShadowRoot;
                    if ("hidden" === getComputedStyle(t).visibility) return !0;
                    var o = i.call(t, "details>summary:first-of-type") ? t.parentElement : t;
                    if (i.call(o, "details:not([open]) *")) return !0;
                    if (n && "full" !== n && "legacy-full" !== n) {
                        if ("non-zero-area" === n) return v(t)
                    } else {
                        if ("function" == typeof r) {
                            for (var l = t; t;) {
                                var u = t.parentElement,
                                    c = a(t);
                                if (u && !u.shadowRoot && !0 === r(u)) return v(t);
                                t = t.assignedSlot ? t.assignedSlot : u || c === t.ownerDocument ? u : c.host
                            }
                            t = l
                        }
                        if (y(t)) return !t.getClientRects().length;
                        if ("legacy-full" !== n) return !0
                    }
                    return !1
                },
                S = function(t) {
                    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
                        for (var e = t.parentElement; e;) {
                            if ("FIELDSET" === e.tagName && e.disabled) {
                                for (var n = 0; n < e.children.length; n++) {
                                    var r = e.children.item(n);
                                    if ("LEGEND" === r.tagName) return !!i.call(e, "fieldset[disabled] *") || !r.contains(t)
                                }
                                return !0
                            }
                            e = e.parentElement
                        }
                    return !1
                },
                w = function(t, e) {
                    return !(e.disabled || l(e) || p(e) && "hidden" === e.type || b(e, t) || "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some(function(t) {
                        return "SUMMARY" === t.tagName
                    }) || S(e))
                },
                E = function(t, e) {
                    return !(g(e) || 0 > s(e)) && !!w(t, e)
                },
                N = function(t) {
                    var e = parseInt(t.getAttribute("tabindex"), 10);
                    return !!isNaN(e) || !!(e >= 0)
                },
                R = function t(e) {
                    var n = [],
                        r = [];
                    return e.forEach(function(e, o) {
                        var i = !!e.scopeParent,
                            a = i ? e.scopeParent : e,
                            l = s(a, i),
                            u = i ? t(e.candidates) : a;
                        0 === l ? i ? n.push.apply(n, u) : n.push(a) : r.push({
                            documentOrder: o,
                            tabIndex: l,
                            item: e,
                            isScope: i,
                            content: u
                        })
                    }), r.sort(f).reduce(function(t, e) {
                        return e.isScope ? t.push.apply(t, e.content) : t.push(e.content), t
                    }, []).concat(n)
                },
                I = function(t, e) {
                    return R((e = e || {}).getShadowRoot ? d([t], e.includeContainer, {
                        filter: E.bind(null, e),
                        flatten: !1,
                        getShadowRoot: e.getShadowRoot,
                        shadowRootFilter: N
                    }) : c(t, e.includeContainer, E.bind(null, e)))
                }
        }
    }
]);