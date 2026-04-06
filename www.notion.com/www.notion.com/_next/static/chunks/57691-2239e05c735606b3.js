! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            r = (new e.Error).stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9eda5b9d-eab4-43b7-ab54-e4cfbb2821c3", e._sentryDebugIdIdentifier = "sentry-dbid-9eda5b9d-eab4-43b7-ab54-e4cfbb2821c3")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [57691, 99909], {
        607985: function(e, r) {
            "use strict";
            var t = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
            r.validate = function(e) {
                if (!e || e.length > 254 || !t.test(e)) return !1;
                var r = e.split("@");
                return !(r[0].length > 64 || r[1].split(".").some(function(e) {
                    return e.length > 63
                }))
            }
        },
        599909: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                Check: function() {
                    return o
                }
            });
            var n = t(552322);
            let o = (0, t(507285).defineIcon)({
                className: "check",
                viewBox: "0 0 14 14",
                svg: (0, n.jsx)("path", {
                    fill: "none",
                    d: "M12 3L5.33333 11L2 8.14286",
                    stroke: "currentColor",
                    strokeWidth: "2"
                })
            })
        },
        394044: function(e, r, t) {
            "use strict";
            t.d(r, {
                e: function() {
                    return s
                }
            });
            var n = t(552322),
                o = t(72779),
                i = t.n(o),
                a = t(202784),
                l = t(47847);
            let s = (0, a.forwardRef)(function({
                className: e,
                children: r,
                ...t
            }, o) {
                return (0, n.jsx)("div", { ...t,
                    className: i()(l.toolbar, e),
                    ref: o,
                    children: r
                })
            })
        },
        779851: function(e, r, t) {
            "use strict";
            t.d(r, {
                Vq: function() {
                    return _
                },
                a7: function() {
                    return g
                },
                cN: function() {
                    return y
                },
                fK: function() {
                    return w
                },
                es: function() {
                    return q.e
                },
                jW: function() {
                    return M
                }
            });
            var n = t(552322),
                o = t(72779),
                i = t.n(o),
                a = t(202784),
                l = t(353095),
                s = t(366308),
                c = t(261198),
                u = t(22724),
                d = t(702513),
                f = t(132904);
            let m = (0, a.forwardRef)(function({
                open: e,
                defaultOpen: r = !1,
                className: t,
                children: o,
                onClose: l,
                preventClose: m,
                ...p
            }, h) {
                let _ = (0, a.useRef)(null),
                    v = (0, s.q)(h, _),
                    [b, x] = (0, u.O)(e, r);
                (0, d.P)(b, _.current), (0, a.useEffect)(() => {
                    let e = _.current;
                    if (e) {
                        if (!b) {
                            e.close();
                            return
                        }
                        e.showModal()
                    }
                }, [b]), (0, a.useEffect)(() => {
                    let e = _.current,
                        r = (0, c.P)(e);
                    if (!r || !e || !b) return;
                    let t = t => {
                        !m && t.target.contains(r.documentElement) && e.close()
                    };
                    return r.addEventListener("click", t), () => {
                        r.removeEventListener("click", t)
                    }
                }, [b, m]);
                let g = (0, a.useCallback)(e => {
                        if (m) {
                            e.preventDefault();
                            return
                        }
                        x(!1), null == l || l(e)
                    }, [m, x, l]),
                    y = (0, a.useCallback)(e => {
                        m && e.preventDefault()
                    }, [m]);
                return (0, n.jsx)("dialog", { ...p,
                    className: i()(f.dialog, t),
                    onClose: g,
                    onCancel: y,
                    ref: v,
                    children: o
                })
            });
            var p = t(47847);
            let h = (0, a.createContext)(void 0);
            h.displayName = "DialogContext";
            let _ = (0, a.forwardRef)(function({
                classes: e = {},
                className: r,
                children: t,
                ...o
            }, c) {
                let u = (0, a.useRef)(null),
                    d = (0, s.q)(c, u),
                    f = (0, l.z)(p, e),
                    [_, v] = (0, a.useState)("none");
                return (0, n.jsx)(m, { ...o,
                    className: i()(f.root, r, {
                        [f.scrollPositionTop]: "top" === _,
                        [f.scrollPositionMiddle]: "middle" === _,
                        [f.scrollPositionBottom]: "bottom" === _
                    }),
                    ref: d,
                    children: (0, n.jsx)("div", {
                        className: f.content,
                        children: (0, n.jsx)(h.Provider, {
                            value: {
                                setScrollPosition: v
                            },
                            children: t
                        })
                    })
                })
            });
            var v = t(961803),
                b = t(488507);
            let x = [0, 1],
                g = (0, a.forwardRef)(function({
                    className: e,
                    children: r,
                    ...t
                }, o) {
                    let l = (0, a.useRef)(null),
                        c = (0, s.q)(l, o),
                        [u, d] = (0, a.useState)(null),
                        [f, m] = (0, a.useState)(null),
                        {
                            setScrollPosition: _
                        } = function() {
                            let e = (0, a.useContext)(h);
                            if (!e) throw Error("Dialog compound components cannot be rendered outside the Dialog component");
                            return e
                        }();
                    return function(e, r, t, n) {
                        let o = (0, v.r)({
                                root: e,
                                threshold: x
                            }),
                            i = (0, a.useRef)(!0),
                            l = (0, a.useRef)(!0),
                            s = (0, a.useCallback)(e => {
                                let o = e.filter(({
                                        target: e
                                    }) => e === r).map(({
                                        isIntersecting: e
                                    }) => e).pop() ? ? i.current,
                                    a = e.filter(({
                                        target: e
                                    }) => e === t).map(({
                                        isIntersecting: e
                                    }) => e).pop() ? ? l.current;
                                if (i.current = o, l.current = a, o && a) {
                                    n("none");
                                    return
                                }
                                if (o) {
                                    n("top");
                                    return
                                }
                                if (a) {
                                    n("bottom");
                                    return
                                }
                                n("middle")
                            }, [r, t, n]);
                        (0, b.S)(r, s, o), (0, b.S)(t, s, o)
                    }(l.current, u, f, _), (0, n.jsxs)("div", { ...t,
                        className: i()(p.body, e),
                        ref: c,
                        children: [(0, n.jsx)("div", {
                            "aria-hidden": !0,
                            className: p.scrollTopMarker,
                            ref: d
                        }), r, (0, n.jsx)("div", {
                            "aria-hidden": !0,
                            className: p.scrollBottomMarker,
                            ref: m
                        })]
                    })
                }),
                y = (0, a.forwardRef)(function({
                    className: e,
                    children: r,
                    ...t
                }, o) {
                    return (0, n.jsx)("footer", { ...t,
                        className: i()(p.footer, e),
                        ref: o,
                        children: r
                    })
                });
            var k = t(481139),
                j = t(716952),
                N = t(574775);
            let w = (0, a.forwardRef)(function({
                className: e,
                children: r,
                preventClose: t,
                ...o
            }, l) {
                let s = (0, j.YB)(),
                    c = (0, a.useCallback)(e => {
                        var r;
                        null === (r = e.currentTarget.closest("dialog")) || void 0 === r || r.close()
                    }, []);
                return (0, n.jsxs)("header", { ...o,
                    className: i()(p.header, {
                        [p.empty]: !r
                    }, e),
                    ref: l,
                    children: [(0, n.jsx)("div", {
                        className: p.headerContent,
                        children: r
                    }), t ? null : (0, n.jsx)("span", {
                        className: p.closeButton,
                        children: (0, n.jsx)(N.h, {
                            edge: "target background",
                            onClick: c,
                            title: s.formatMessage({
                                id: "dialog.header.closeButton.title",
                                description: "Accessible tooltip for the close button in a dialog",
                                defaultMessage: "Close dialog"
                            }),
                            children: (0, n.jsx)(k.x, {})
                        })
                    })]
                })
            });
            var q = t(394044),
                C = t(719268);
            let M = (0, a.forwardRef)(function({
                className: e,
                children: r,
                open: t,
                ...o
            }, l) {
                let c = (0, a.useRef)(null),
                    u = (0, a.useRef)(null),
                    d = (0, s.q)(l, c),
                    f = (0, j.YB)(),
                    [h, _] = (0, a.useState)(!1),
                    v = C.rSc.dark.styles.theme;
                (0, a.useEffect)(() => {
                    t ? requestAnimationFrame(() => {
                        var e;
                        _(!0), null === (e = u.current) || void 0 === e || e.focus()
                    }) : _(!1)
                }, [t]);
                let b = (0, a.useCallback)(e => {
                    var r;
                    null === (r = e.currentTarget.closest("dialog")) || void 0 === r || r.close()
                }, []);
                return (0, n.jsxs)(m, { ...o,
                    open: t,
                    className: i()(p.fullscreen, v, e),
                    ref: d,
                    children: [(0, n.jsx)("div", {
                        className: p.fullscreenClose,
                        children: (0, n.jsx)(N.h, {
                            ref: u,
                            edge: "target background",
                            onClick: b,
                            title: f.formatMessage({
                                id: "dialog.fullscreen.closeButton.title",
                                description: "Accessible tooltip for the close button in a fullscreen dialog",
                                defaultMessage: "Close"
                            }),
                            children: (0, n.jsx)(k.x, {})
                        })
                    }), (0, n.jsx)("div", {
                        className: p.fullscreenContent,
                        children: h ? r : void 0
                    })]
                })
            })
        },
        269976: function(e, r, t) {
            "use strict";
            t.d(r, {
                l: function() {
                    return s
                }
            });
            var n = t(552322),
                o = t(72779),
                i = t.n(o),
                a = t(202784),
                l = t(952004);
            let s = (0, a.forwardRef)(function({
                action: e = "#",
                noValidate: r = !0,
                className: t,
                children: o,
                ...a
            }, s) {
                return (0, n.jsx)("form", { ...a,
                    action: e,
                    noValidate: r,
                    className: i()(l.root, t),
                    ref: s,
                    children: o
                })
            })
        },
        225270: function(e, r, t) {
            "use strict";
            t.d(r, {
                z: function() {
                    return _
                }
            });
            var n = t(552322),
                o = t(202784),
                i = t(72779),
                a = t.n(i),
                l = t(599909),
                s = t(353095),
                c = t(965434);
            let u = (0, o.forwardRef)(function({
                type: e = "checkbox",
                className: r,
                hidden: t,
                classes: i = {},
                ...u
            }, d) {
                let f = (0, s.z)(c, i);
                return (0, n.jsxs)("div", {
                    hidden: t,
                    className: f.root,
                    children: [(0, o.createElement)("input", { ...u,
                        key: "input",
                        type: e,
                        className: a()(f.input, r),
                        hidden: t,
                        ref: d
                    }), (0, n.jsx)("span", {
                        "aria-hidden": !0,
                        className: f.checkbox,
                        children: (0, n.jsx)("span", {
                            className: f.icon,
                            children: (0, n.jsx)(l.Check, {
                                style: {
                                    width: 10,
                                    height: "auto"
                                }
                            })
                        })
                    })]
                })
            });
            var d = t(866666),
                f = t(851202),
                m = t(701373),
                p = t(429056),
                h = t(392521);
            let _ = (0, o.forwardRef)(function({
                label: e,
                required: r,
                error: t,
                className: i,
                classes: l = {},
                hidden: c,
                ..._
            }, v) {
                let b = (0, p.Z)(_.id),
                    x = (0, p.Z)(),
                    g = (0, s.z)(h, l);
                return (0, n.jsxs)("div", {
                    hidden: c,
                    className: g.root,
                    children: [(0, n.jsxs)(f.K, {
                        required: r,
                        className: g.label,
                        classes: {
                            requiredOptionalAddon: g.requiredOptionalAddon,
                            required: g.required
                        },
                        children: [(0, o.createElement)(u, { ..._,
                            key: "input",
                            id: b,
                            required: r,
                            className: a()(i, g.input),
                            classes: { ...g,
                                root: g.checkboxRoot
                            },
                            hidden: c,
                            "aria-invalid": !!t || _["aria-invalid"],
                            "aria-describedby": (0, m.r)(_["aria-describedby"], x),
                            ref: v
                        }), (0, n.jsx)("span", {
                            className: g.labelText,
                            children: e
                        })]
                    }), (0, n.jsx)(d.H, {
                        id: x,
                        className: g.error,
                        children: t
                    })]
                })
            })
        },
        841740: function(e, r, t) {
            "use strict";
            t.d(r, {
                z: function() {
                    return n.z
                }
            });
            var n = t(225270)
        },
        871968: function(e, r, t) {
            "use strict";
            t.d(r, {
                y: function() {
                    return p
                }
            });
            var n = t(552322),
                o = t(202784),
                i = t(72779),
                a = t.n(i),
                l = t(866666),
                s = t(851202),
                c = t(641284),
                u = t(701373),
                d = t(353095),
                f = t(429056),
                m = t(570146);
            let p = (0, o.forwardRef)(function({
                label: e,
                required: r,
                error: t,
                className: i,
                classes: p = {},
                ...h
            }, _) {
                let v = (0, f.Z)(h.id),
                    b = (0, f.Z)(),
                    x = (0, d.z)(m, p),
                    g = (0, o.useMemo)(() => ({
                        requiredOptionalAddon: x.requiredOptionalAddon
                    }), [x.requiredOptionalAddon]);
                return (0, n.jsxs)("div", {
                    hidden: h.hidden,
                    className: x.root,
                    children: [(0, n.jsx)(s.K, {
                        htmlFor: v,
                        required: r,
                        className: x.label,
                        classes: g,
                        children: e
                    }), (0, o.createElement)(c.I, { ...h,
                        key: "input",
                        id: v,
                        required: r,
                        className: a()(i, x.input, m.formInput),
                        classes: {
                            root: x.inputRoot
                        },
                        "aria-invalid": !!t || h["aria-invalid"],
                        "aria-describedby": (0, u.r)(b, h["aria-describedby"]),
                        ref: _
                    }), (0, n.jsx)(l.H, {
                        id: b,
                        className: x.error,
                        children: t
                    })]
                })
            })
        },
        866666: function(e, r, t) {
            "use strict";
            t.d(r, {
                H: function() {
                    return s
                }
            });
            var n = t(552322),
                o = t(72779),
                i = t.n(o),
                a = t(202784),
                l = t(255876);
            let s = (0, a.forwardRef)(function({
                role: e = "alert",
                className: r,
                children: t,
                ...o
            }, a) {
                return (0, n.jsx)("div", { ...o,
                    role: e,
                    className: i()(l.error, r),
                    ref: a,
                    children: t
                })
            })
        },
        851202: function(e, r, t) {
            "use strict";
            t.d(r, {
                K: function() {
                    return u
                }
            });
            var n = t(552322),
                o = t(72779),
                i = t.n(o),
                a = t(202784),
                l = t(716952),
                s = t(353095),
                c = t(673238);
            let u = (0, a.forwardRef)(function({
                required: e,
                children: r,
                className: t,
                classes: o = {},
                ...a
            }, u) {
                let d = (0, s.z)(c, o);
                return (0, n.jsxs)("label", { ...a,
                    className: i()(d.label, {
                        [d.required]: e
                    }, t),
                    ref: u,
                    children: [r, (0, n.jsx)("span", {
                        "aria-hidden": e,
                        className: d.requiredOptionalAddon,
                        children: (0, n.jsx)(l._H, {
                            id: "formItemLabel.optionalOrRequired",
                            description: "Text that accompanies all form fields which tells users whether the field is required or optional",
                            values: {
                                required: e ? "required" : "optional"
                            },
                            defaultMessage: (0, l.Ys)("required", {
                                optional: "(optional)",
                                other: "*"
                            })
                        })
                    })]
                })
            })
        },
        380625: function(e, r, t) {
            "use strict";
            t.d(r, {
                p: function() {
                    return c
                }
            });
            var n = t(552322),
                o = t(72779),
                i = t.n(o),
                a = t(202784),
                l = t(914775),
                s = t(748471);

            function c({
                children: e,
                className: r
            }) {
                let t = a.Children.toArray(e).length;
                return (0, n.jsx)("div", {
                    className: i()(s.formRow, r),
                    style: {
                        [(0, l.Ay)("--form-row-columns")]: t
                    },
                    children: e
                })
            }
        },
        981204: function(e, r, t) {
            "use strict";
            t.d(r, {
                i: function() {
                    return f
                }
            });
            var n = t(552322),
                o = t(72779),
                i = t.n(o),
                a = t(202784),
                l = t(866666),
                s = t(851202),
                c = t(115514),
                u = t(701373),
                d = t(429056);
            let f = (0, a.forwardRef)(function({
                label: e,
                required: r,
                error: t,
                className: o,
                classes: f = {},
                ...m
            }, p) {
                let h = (0, d.Z)(m.id),
                    _ = (0, d.Z)(),
                    v = (0, a.useMemo)(() => ({
                        requiredOptionalAddon: f.requiredOptionalAddon
                    }), [f.requiredOptionalAddon]);
                return (0, n.jsxs)("div", {
                    className: f.root,
                    children: [(0, n.jsx)(s.K, {
                        htmlFor: h,
                        required: r,
                        className: f.label,
                        classes: v,
                        children: e
                    }), (0, n.jsx)(c.P, { ...m,
                        id: h,
                        required: r,
                        className: i()(o, f.select),
                        "aria-invalid": !!t,
                        "aria-describedby": (0, u.r)(m["aria-describedby"], _),
                        ref: p
                    }), (0, n.jsx)(l.H, {
                        id: _,
                        className: f.error,
                        children: t
                    })]
                })
            })
        },
        702094: function(e, r, t) {
            "use strict";
            t.d(r, {
                l: function() {
                    return m
                },
                B: function() {
                    return m
                }
            });
            var n = t(552322),
                o = t(202784),
                i = t(866666),
                a = t(851202),
                l = t(72779),
                s = t.n(l),
                c = t(508852);
            let u = (0, o.forwardRef)(function({
                id: e,
                name: r,
                value: t,
                defaultValue: o,
                placeholder: i,
                onChange: a,
                onBlur: l,
                required: u,
                maxlength: d,
                rows: f = 3,
                className: m,
                "aria-invalid": p,
                "aria-describedby": h
            }, _) {
                return (0, n.jsx)("textarea", {
                    id: e,
                    name: r,
                    className: s()(c.textarea, m),
                    placeholder: i,
                    onChange: a,
                    required: u,
                    rows: f,
                    value: t,
                    defaultValue: o,
                    onBlur: l,
                    maxLength: d,
                    "aria-invalid": p,
                    "aria-describedby": h,
                    ref: _
                })
            });
            var d = t(701373),
                f = t(429056);
            let m = (0, o.forwardRef)(function({
                label: e,
                required: r,
                error: t,
                classes: o = {},
                ...l
            }, s) {
                let c = (0, f.Z)(l.id),
                    m = (0, f.Z)();
                return (0, n.jsxs)("div", {
                    className: o.root,
                    children: [(0, n.jsx)(a.K, {
                        htmlFor: c,
                        required: r,
                        className: o.label,
                        classes: {
                            requiredOptionalAddon: o.requiredOptionalAddon
                        },
                        children: e
                    }), (0, n.jsx)(u, { ...l,
                        id: c,
                        required: r,
                        "aria-invalid": !!t,
                        "aria-describedby": (0, d.r)(l["aria-describedby"], m),
                        className: o.textarea,
                        ref: s
                    }), (0, n.jsx)(i.H, {
                        id: m,
                        className: o.error,
                        children: t
                    })]
                })
            })
        },
        115514: function(e, r, t) {
            "use strict";
            t.d(r, {
                P: function() {
                    return c
                }
            });
            var n = t(552322),
                o = t(72779),
                i = t.n(o),
                a = t(202784),
                l = t(901151),
                s = t(533147);
            let c = (0, a.forwardRef)(function({
                options: e,
                width: r,
                isTransparent: t,
                className: o,
                style: a = {},
                children: c,
                ...u
            }, d) {
                return (0, n.jsxs)("div", {
                    className: s.selectWrap,
                    children: [(0, n.jsxs)("select", { ...u,
                        className: i()(s.select, {
                            [s.selectTransparent]: t
                        }, o),
                        style: { ...a,
                            width: r ? `${r}px` : "100%",
                            maxWidth: "100%"
                        },
                        ref: d,
                        children: [(null == e ? void 0 : e.map((e, r) => (0, n.jsx)("option", {
                            value: e.value,
                            "data-slug": e.slug,
                            children: e.label
                        }, `option-${r}`))) ? ? null, c]
                    }), (0, n.jsx)("div", {
                        className: s.icon,
                        children: (0, n.jsx)(l._, {
                            style: {
                                width: 10,
                                marginInlineStart: 5,
                                marginTop: 1,
                                fill: "var(color-text-medium)"
                            }
                        })
                    })]
                })
            })
        },
        216481: function(e, r, t) {
            "use strict";
            t.d(r, {
                US: function() {
                    return u
                },
                lG: function() {
                    return c
                },
                on: function() {
                    return f
                },
                pH: function() {
                    return i
                },
                qw: function() {
                    return a
                },
                sG: function() {
                    return d
                },
                t2: function() {
                    return l
                },
                zi: function() {
                    return s
                }
            });
            var n = t(108666),
                o = t(914775);

            function i(e) {
                switch (e) {
                    case 1:
                        return "1-99";
                    case 100:
                        return "100-499";
                    case 500:
                        return "500-2999";
                    case 3e3:
                        return "3000+"
                }
            }

            function a(e) {
                if (!e) return !1;
                if (e === n.nR.Japan || e === n.nR.SouthKorea) return !0;
                let r = (0, n.X2)(e);
                return "EMEA" === r || "APAC" === r
            }

            function l({
                touched: e,
                validity: r,
                validationMessage: t
            }) {
                return e && !r.valid ? t : void 0
            }

            function s(e) {
                let r = (0, o.Ay)({});
                for (let [t, n] of new FormData(e)) r[t] = n.valueOf();
                return r
            }

            function c({
                opt: e,
                defaultOptIn: r
            }) {
                switch (e) {
                    case "in":
                    case "doubleIn":
                        return r;
                    case "out":
                        return !r;
                    default:
                        throw Error(`Unexpected opt value "${e}"`)
                }
            }

            function u(e, r) {
                return !!e == ("out" !== r)
            }

            function d(e) {
                return "none" !== e ? e : void 0
            }

            function f(e) {
                switch (e) {
                    case "enterprise":
                        return "I’d like to discuss an enterprise use case";
                    case "pricing":
                        return "I’d like to explore pricing options";
                    case "demo":
                        return "I’d like to see a demo of the product";
                    case "studentOrNonProfitPricing":
                        return "I am looking for student/non-profit pricing";
                    case "support":
                        return "I am looking for product or billing support";
                    case "other":
                        return "Other"
                }
            }
        },
        618619: function(e, r, t) {
            "use strict";
            t.d(r, {
                R: function() {
                    return m
                }
            });
            var n = t(202784),
                o = t(607985);
            t(185934), t(293711), t(923172), t(108666);
            var i = t(716952);
            let a = {
                    badInput: !1,
                    customError: !1,
                    patternMismatch: !1,
                    rangeOverflow: !1,
                    rangeUnderflow: !1,
                    stepMismatch: !1,
                    tooLong: !1,
                    tooShort: !1,
                    typeMismatch: !1,
                    valid: !1,
                    valueMissing: !1
                },
                l = {
                    valueMissing: "required",
                    badInput: "type",
                    typeMismatch: "type",
                    patternMismatch: "pattern",
                    rangeOverflow: "max",
                    rangeUnderflow: "min",
                    stepMismatch: "step",
                    tooLong: "maxLength",
                    tooShort: "minLength"
                };

            function s(e) {
                return /^\d{7,}$/.test(e.replace(/[\s()+\-\.]|ext/gi, ""))
            }

            function c(e) {
                return /^[a-zA-Z]{1,}$/.test(e)
            }

            function u(e) {
                return !!(e && o.validate(e))
            }

            function d(e, r) {
                let t = e.target;
                return (null == t ? void 0 : t.name) === r
            }

            function f(e, r) {
                let t = e.elements.namedItem(r);
                return (null == t ? void 0 : t.tagName) ? [t] : Array.from(t ? ? [])
            }

            function m(e, r, t = {}) {
                let o = (0, i.YB)(),
                    [m, p] = (0, n.useState)(!1),
                    [h, _] = (0, n.useState)(a),
                    [v, b] = (0, n.useState)(""),
                    x = t.validationMessages,
                    g = (0, n.useMemo)(() => ({
                        required: o.formatMessage({
                            id: "front.forms.validator.required",
                            defaultMessage: "This field is required."
                        }),
                        ...x
                    }), [o, x]),
                    y = (0, n.useMemo)(() => ({
                        email: o.formatMessage({
                            id: "front.forms.validator.email",
                            defaultMessage: "Email address is not valid."
                        }),
                        tel: o.formatMessage({
                            id: "front.forms.validator.phone",
                            defaultMessage: "Phone number is not valid.",
                            description: "Form validation error message appearing on /contact-sales"
                        })
                    }), [o]),
                    k = g.type,
                    j = (0, n.useCallback)(e => {
                        if (!e.value) return null;
                        let r = {
                            tel: s,
                            email: u,
                            promoCode: c
                        }[e.type];
                        return !r || r(e.value) ? null : k ? ? y[e.type]
                    }, [k, y]),
                    {
                        validate: N
                    } = t,
                    w = (0, n.useCallback)(e => {
                        if (e.setCustomValidity((null == N ? void 0 : N(e)) ? ? ""), e.validity.customError || (e.setCustomValidity((null == j ? void 0 : j(e)) ? ? ""), e.validity.customError || e.validity.valid)) return;
                        let r = Object.keys(l).find(r => e.validity[r]);
                        if (!r) return;
                        let t = l[r];
                        e.setCustomValidity(g[t] ? ? "")
                    }, [N, j, g]),
                    q = (0, n.useCallback)(() => {
                        _(a), b("")
                    }, []),
                    C = (0, n.useCallback)(e => {
                        w(e), _(e.validity), b(e.validationMessage)
                    }, [w]);
                return (0, n.useEffect)(() => {
                    e && (() => {
                        let [t] = f(e, r);
                        if (!t) {
                            q();
                            return
                        }
                        C(t)
                    })()
                }, [e, r, q, C]), (0, n.useEffect)(() => {
                    if (!e) return;
                    let t = t => {
                        if (!d(t, r)) return;
                        let [n] = f(e, r);
                        C(n)
                    };
                    return e.addEventListener("change", t), e.addEventListener("input", t), () => {
                        e.removeEventListener("change", t), e.removeEventListener("input", t)
                    }
                }, [e, r, C]), (0, n.useEffect)(() => {
                    if (!e) return;
                    let t = e => {
                            d(e, r) && p(!0)
                        },
                        n = () => {
                            p(!0)
                        };
                    return e.addEventListener("focusout", t), e.addEventListener("submit", n), () => {
                        e.removeEventListener("focusout", t), e.removeEventListener("submit", n)
                    }
                }, [e, r]), (0, n.useMemo)(() => ({
                    validity: h,
                    validationMessage: v,
                    touched: m
                }), [m, h, v])
            }
        },
        133990: function(e, r, t) {
            "use strict";
            t.d(r, {
                BT: function() {
                    return o
                },
                TM: function() {
                    return n
                },
                ZK: function() {
                    return a
                },
                sJ: function() {
                    return i
                }
            });
            let n = [1, 100, 500, 3e3],
                o = ["enterprise", "pricing", "demo", "studentOrNonProfitPricing", "support", "other"],
                i = "sales@makenotion.com",
                a = ["linkedin", "coworker", "searchingForSomething", "digitalNewsletter", "inPersonEvent", "webinars", "podcast", "friendFamily", "other"]
        },
        965434: function(e) {
            e.exports = {
                root: "checkbox_root__1xuyd",
                input: "checkbox_input__P6u0V",
                checkbox: "checkbox_checkbox__k9vCf",
                icon: "checkbox_icon__Bt5sB"
            }
        },
        47847: function(e) {
            e.exports = {
                root: "dialog_root__KlMm2",
                content: "dialog_content__vbHod",
                header: "dialog_header__CA_5o",
                headerContent: "dialog_headerContent__YzwnF",
                closeButton: "dialog_closeButton__nMSev",
                toolbar: "dialog_toolbar__pjqli",
                body: "dialog_body__wkRPq",
                empty: "dialog_empty__DgpVz",
                footer: "dialog_footer__guNH5",
                scrollPositionMiddle: "dialog_scrollPositionMiddle__oOsWq",
                scrollPositionBottom: "dialog_scrollPositionBottom__AdS0Q",
                scrollPositionTop: "dialog_scrollPositionTop__HeAGY",
                fullscreen: "dialog_fullscreen__3Pey7",
                fullscreenClose: "dialog_fullscreenClose__0rY9H",
                fullscreenContent: "dialog_fullscreenContent__UM404"
            }
        },
        952004: function(e) {
            e.exports = {
                root: "form_root__W1NM_"
            }
        },
        392521: function(e) {
            e.exports = {
                root: "formCheckbox_root__zez60",
                label: "formCheckbox_label__oYNae",
                checkboxRoot: "formCheckbox_checkboxRoot__VeHH4",
                labelText: "formCheckbox_labelText__UEbI_",
                requiredOptionalAddon: "formCheckbox_requiredOptionalAddon__JwuOL",
                required: "formCheckbox_required__hW_MI"
            }
        },
        570146: function(e) {
            e.exports = {
                root: "formInput_root__FjgXl",
                formInput: "formInput_formInput__jUstH"
            }
        },
        255876: function(e) {
            e.exports = {
                error: "formItemError_error__nQzrg"
            }
        },
        673238: function(e) {
            e.exports = {
                label: "formItemLabel_label__QfEmQ",
                requiredOptionalAddon: "formItemLabel_requiredOptionalAddon__Ab_ch",
                required: "formItemLabel_required__BLLcS"
            }
        },
        748471: function(e) {
            e.exports = {
                formRow: "formRow_formRow__ZBYlX"
            }
        },
        533147: function(e) {
            e.exports = {
                selectWrap: "select_selectWrap__Mpaja",
                select: "select_select__F6Ysx",
                selectTransparent: "select_selectTransparent__n9MvB",
                icon: "select_icon__xS6R3"
            }
        },
        508852: function(e) {
            e.exports = {
                textarea: "textarea_textarea__ctH5E"
            }
        },
        132904: function(e) {
            e.exports = {
                dialog: "dialog_dialog__RX4pP"
            }
        }
    }
]);