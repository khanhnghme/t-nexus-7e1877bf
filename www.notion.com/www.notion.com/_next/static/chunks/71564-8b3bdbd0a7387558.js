! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            s = (new e.Error).stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "0aa0039b-60a0-4ef1-8eeb-37a5b6fac1c8", e._sentryDebugIdIdentifier = "sentry-dbid-0aa0039b-60a0-4ef1-8eeb-37a5b6fac1c8")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [71564, 25161], {
        325161: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                WarningIcon: function() {
                    return r
                }
            });
            var t = a(552322);
            a(202784);
            var o = a(506221);

            function r(e) {
                return (0, t.jsx)(o.t, { ...e,
                    viewBox: "0 0 20 20",
                    children: (0, t.jsx)("path", {
                        d: "M10.54 2.5H9.46L1.7 15.938l.54.937h15.516l.54-.937zm.71 13.125h-2.5V13.75h2.5zm0-5.625-.625 2.5h-1.25L8.75 10V6.25h2.5z",
                        fill: "currentColor"
                    })
                })
            }
        },
        226807: function(e, s, a) {
            "use strict";
            a.d(s, {
                A: function() {
                    return h
                }
            });
            var t = a(552322),
                o = a(339332),
                r = a(202784),
                n = a(719110),
                i = a(859306),
                l = a(165607),
                m = a(930066),
                c = a(961490),
                u = a(9534),
                d = a(50227),
                p = a(665012),
                f = a(133761);

            function h({
                ariaLabel: e,
                action: s,
                children: a,
                href: h,
                noArrow: g,
                arrowType: b,
                onClick: _,
                variant: y = "button",
                buttonSize: x = "medium",
                buttonVariant: w = "primary",
                suppressHrefLocale: v,
                analyticsEventName: k,
                target: j
            }) {
                let N = (0, d.F)(),
                    M = (0, r.useContext)(p.kV),
                    S = (0, o.useSearchParams)();
                if ("downloadDesktopAppArchAware" === s) return (0, t.jsx)(l.u, {
                    ariaLabel: e,
                    href: h,
                    onClick: _,
                    arrowType: b,
                    suppressHrefLocale: v,
                    buttonSize: x,
                    buttonVariant: w,
                    children: a
                });
                let C = (0, u.G1)(h, M);
                return (C && S && (C = (0, u.p4)(C, S)), "button" === y) ? (0, t.jsx)(i.z, {
                    buttonSize: x,
                    variant: w,
                    href: C,
                    ariaLabel: e,
                    arrowType: b,
                    suppressHrefLocale: v,
                    onClick: _ || (e => n.t(N, { ...(0, c.ok)(e.currentTarget),
                        name: k || "block_cta"
                    })),
                    children: a
                }) : "text" === y ? (0, t.jsx)("div", {
                    className: f.inlineTextLinkWrap,
                    children: (0, t.jsx)(m.u, {
                        arrowType: "right",
                        href: C,
                        color: "theme",
                        underline: "hover",
                        suppressHrefLocale: v,
                        eventData: {
                            name: "block_cta"
                        },
                        target: j,
                        children: a
                    })
                }) : null
            }
        },
        165607: function(e, s, a) {
            "use strict";
            a.d(s, {
                u: function() {
                    return w
                }
            });
            var t = a(552322),
                o = a(72779),
                r = a.n(o),
                n = a(202784),
                i = a(839725);
            i.Qk.downloadMac, i.Qk.downloadMacUniversal, i.Qk.downloadMacIntel, i.Qk.downloadMacAppleSilicon, i.Qk.downloadWindows, i.Qk.downloadWindowsArm, i.Qk.downloadWindowsMsix, i.Qk.downloadWindowsMsixArm;
            let l = [{
                route: i.Qk.downloadMac,
                architecture: "universal",
                operatingSystem: "mac",
                target: "macUniversal"
            }, {
                route: i.Qk.downloadMacIntel,
                architecture: "x86",
                operatingSystem: "mac",
                target: "mac"
            }, {
                route: i.Qk.downloadMacUniversal,
                architecture: "universal",
                operatingSystem: "mac",
                target: "macUniversal"
            }, {
                route: i.Qk.downloadMacAppleSilicon,
                architecture: "arm",
                operatingSystem: "mac",
                target: "macArm64"
            }, {
                route: i.Qk.downloadWindows,
                architecture: "x86",
                operatingSystem: "windows",
                target: "windows"
            }, {
                route: i.Qk.downloadWindowsArm,
                architecture: "arm",
                operatingSystem: "windows",
                target: "windowsArm64"
            }, {
                route: i.Qk.downloadWindowsMsix,
                architecture: "x86",
                operatingSystem: "windows",
                target: "msix"
            }, {
                route: i.Qk.downloadWindowsMsixArm,
                architecture: "arm",
                operatingSystem: "windows",
                target: "msixArm64"
            }];

            function m(e = "") {
                let s = e.toLowerCase();
                return s.startsWith("arm") ? "arm" : s.startsWith("x86") || "intel" === s ? "x86" : null
            }
            var c = a(716952),
                u = a(719110),
                d = a(406518),
                p = a(859306),
                f = a(206790),
                h = a(962753),
                g = a(961490),
                b = a(9534),
                _ = a(50227),
                y = a(665012),
                x = a(381378);

            function w({
                ariaLabel: e,
                children: s,
                href: a,
                arrowType: o,
                onClick: i,
                buttonSize: w = "medium",
                buttonVariant: v = "primary",
                suppressHrefLocale: k
            }) {
                let j = (0, c.YB)(),
                    N = (0, _.F)(),
                    M = (0, n.useContext)(y.kV),
                    S = (0, b.G1)(a, M),
                    [C, F] = (0, n.useState)(S),
                    [L, z] = (0, n.useState)(!1);
                return (0, n.useEffect)(() => {
                    var e, s;
                    N.os && (null == a ? void 0 : a.includes(N.os)) && "userAgentData" in navigator && (null === (s = navigator.userAgentData) || void 0 === s || null === (e = s.getHighEntropyValues) || void 0 === e || e.call(s, ["architecture"]).then(({
                        architecture: e
                    }) => {
                        let s = function(e, s, a) {
                            let t = m(e);
                            if (!t || !("mac" === s || "windows" === s)) return null;
                            let o = l.find(e => e.architecture === t && e.operatingSystem === s);
                            return (null == o ? void 0 : o.route) || null
                        }(e, N.os);
                        s && F((0, b.G1)(s, M)), "windows" === N.os && "x86" === m(e) && z(!0)
                    }).catch(e => {
                        throw Error(e)
                    }))
                }, [N.os, M, a]), (0, t.jsxs)("div", {
                    className: x.container,
                    children: [(0, t.jsx)(p.z, {
                        className: r()("downloadButton", L ? x.msPersistUnthemedColors : null),
                        buttonSize: w,
                        variant: v,
                        href: C,
                        ariaLabel: e,
                        arrowType: o,
                        suppressHrefLocale: k,
                        onClick: i || (e => u.t(N, { ...(0, g.ok)(e.currentTarget),
                            name: "download_desktop_app"
                        })),
                        children: s
                    }), L ? (0, t.jsx)("a", {
                        href: "https://apps.microsoft.com/detail/XPDBVSS44R0L9H?referrer=appbadge&cid=notion_web_msbadge&mode=direct",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: j.formatMessage({
                            id: "msStoreBadgeAlt",
                            defaultMessage: "Download from Microsoft Store",
                            description: "Alt text for Microsoft Store badge"
                        }),
                        className: r()(f.button, f.buttonVariantPrimary, x.msPersistUnthemedColors, x.msStoreButton),
                        onClick: () => u.dy(N, {
                            app_platform: "windows",
                            variant: "store"
                        }),
                        children: (0, t.jsx)(h.E, {
                            src: d.Z.badges.microsoftSvg,
                            width: 161,
                            height: 44,
                            alt: "",
                            className: x.msStoreBadge
                        })
                    }) : null]
                })
            }
        },
        641284: function(e, s, a) {
            "use strict";
            a.d(s, {
                I: function() {
                    return d
                }
            });
            var t = a(552322),
                o = a(202784),
                r = a(72779),
                n = a.n(r),
                i = a(914775),
                l = a(389473),
                m = a(353095),
                c = a(822332),
                u = a(417029);
            let d = (0, o.forwardRef)(function({
                size: e = "medium",
                before: s,
                after: a,
                className: r,
                classes: d = {},
                children: p,
                ...f
            }, h) {
                let g = (0, m.z)(u, d),
                    [b, _] = (0, o.useState)(null),
                    [y, x] = (0, o.useState)(null),
                    {
                        inlineSize: w = 0
                    } = (0, c.I)(b) ? ? {},
                    {
                        inlineSize: v = 0
                    } = (0, c.I)(y) ? ? {};
                return (0, t.jsxs)("div", {
                    style: {
                        [(0, i.Ay)("--before-width")]: `${(0,l.Q1)(w)}rem`,
                        [(0, i.Ay)("--after-width")]: `${(0,l.Q1)(v)}rem`
                    },
                    className: n()(g.root, {
                        [g.sizeMedium]: "medium" === e,
                        [g.sizeLarge]: "large" === e,
                        [g.hasBefore]: !!s,
                        [g.hasAfter]: !!a
                    }),
                    children: [s ? (0, t.jsx)("span", {
                        className: g.before,
                        ref: _,
                        children: s
                    }, "before") : null, (0, o.createElement)("input", { ...f,
                        key: "input",
                        className: n()(g.input, r),
                        ref: h
                    }), a ? (0, t.jsx)("span", {
                        className: g.after,
                        ref: x,
                        children: a
                    }, "after") : null, p]
                })
            })
        },
        908205: function(e, s, a) {
            "use strict";
            a.d(s, {
                A: function() {
                    return M
                }
            });
            var t = a(552322),
                o = a(72779),
                r = a.n(o),
                n = a(202784),
                i = a(807354),
                l = a(776747),
                m = a(444212),
                c = a(838421),
                u = a(160122),
                d = a(488944),
                p = a(859306),
                f = a(334816);

            function h() {
                let [e, s] = (0, u.UK)(g, []), a = "pending" === e.status || e.value;
                return (0, t.jsx)("div", {
                    className: f.previewModeAlert,
                    children: (0, t.jsx)(p.z, {
                        isFullWidth: !0,
                        variant: "tertiary",
                        onClick: s,
                        children: a ? "Hold on..." : "End preview"
                    })
                })
            }
            async function g() {
                return await fetch(`${d.kL.frontApi}/endPreview`), window.location.reload(), !0
            }
            var b = a(138312),
                _ = a(741521),
                y = a(50227),
                x = a(961829),
                w = a(47277),
                v = a(676995),
                k = a(823269),
                j = a(506933);
            let N = {
                lg: r()(j.layoutBase, j.lg),
                xl: r()(j.layoutBase, j.xl),
                xxl: j.main
            };

            function M({
                children: e,
                title: s,
                metadata: a,
                hideHeader: o,
                navigation: u,
                hideFooter: d,
                hideNotificationBanner: p,
                preview: f,
                containerWidth: g = "xxl",
                theme: j,
                pageNav: M,
                favicon: S,
                className: C,
                HeaderCTA: F,
                MobileHeaderCTA: L
            }) {
                (0, _.z)("undefined" != typeof document ? document.body : null);
                let {
                    isMobile: z,
                    isServer: D
                } = (0, y.F)(), A = (0, w.y)(), {
                    firstOpenNotification: B
                } = (0, v.z)({
                    localeNotificationType: A
                }), E = (0, n.useMemo)(() => {
                    if (!p && B && (D || !z)) return (0, t.jsx)(c.Z, {
                        notification: B
                    })
                }, [B, p, z, D]), R = (0, x.q)();
                return (0, t.jsxs)(k.f6, {
                    global: !0,
                    value: j,
                    children: [(0, t.jsx)(m.S, {
                        title: s,
                        metadata: a,
                        favicon: S
                    }), o ? void 0 : (0, t.jsxs)(t.Fragment, {
                        children: [E, (0, t.jsx)(l.h, {
                            navigation: u,
                            experiments: R,
                            HeaderCTA: F,
                            MobileHeaderCTA: L
                        })]
                    }), M, (0, t.jsx)("main", {
                        className: r()(N[g], C),
                        children: e
                    }), (0, t.jsx)(b.S, {}), f ? (0, t.jsx)(h, {}) : void 0, d ? void 0 : (0, t.jsx)(i.$, {})]
                })
            }
        },
        95564: function(e, s, a) {
            "use strict";
            a.d(s, {
                r: function() {
                    return n
                }
            });
            var t = a(552322),
                o = a(202784),
                r = a(401607);

            function n({
                children: e
            }) {
                let [s, a] = (0, o.useState)(!0);
                return (0, r.L)(() => {
                    a(!1)
                }, []), s ? null : (0, t.jsx)(t.Fragment, {
                    children: e
                })
            }
        },
        333513: function(e, s, a) {
            "use strict";
            a.d(s, {
                X: function() {
                    return m
                }
            });
            var t = a(552322),
                o = a(72779),
                r = a.n(o),
                n = a(202784),
                i = a(914775),
                l = a(918264);
            let m = (0, n.forwardRef)(function({
                width: e = 1080,
                height: s = 675,
                className: a,
                onClose: o,
                onBookingConfirmed: m,
                ...c
            }, u) {
                return (0, n.useEffect)(() => {
                    function e(e) {
                        (0, i.Rw)(e.data) || ("close" === e.data.action ? null == o || o() : "booking-confirmed" === e.data.action && (null == m || m()))
                    }
                    return window.addEventListener("message", e), () => {
                        window.removeEventListener("message", e)
                    }
                }, [o, m]), (0, t.jsx)("iframe", { ...c,
                    className: r()(l.bookingFrame, a),
                    width: e,
                    height: s,
                    ref: u
                })
            })
        },
        141208: function(e, s, a) {
            "use strict";
            a.d(s, {
                O: function() {
                    return X
                }
            });
            var t = a(552322),
                o = a(72779),
                r = a.n(o),
                n = a(811163),
                i = a(202784),
                l = a(108666),
                m = a(160122),
                c = a(133990),
                u = a(572678),
                d = a(614050),
                p = a(716952),
                f = a(971274),
                h = a(320246),
                g = a(719110),
                b = a(859306),
                _ = a(269976),
                y = a(841740),
                x = a(871968),
                w = a(380625),
                v = a(981204),
                k = a(702094),
                j = a(930066),
                N = a(95564),
                M = a(779700),
                S = a(428666),
                C = a(696014),
                F = a(283802),
                L = a(622232),
                z = a(216481),
                D = a(353357),
                A = a(308212),
                B = a(50227),
                E = a(618619),
                R = a(756092),
                T = a(918264),
                H = a(809833),
                I = a(325161),
                P = a(914775),
                q = a(779851),
                W = a(233498),
                V = a(366308),
                O = a(333513);
            let Q = {
                    success: H.CheckmarkIcon,
                    error: I.WarningIcon,
                    form: e => null
                },
                G = (0, i.forwardRef)(function({
                    role: e = "alertdialog",
                    className: s,
                    step: a,
                    supportEmailHref: o,
                    schedulingUrl: n,
                    onBookingConfirmed: l,
                    ...m
                }, c) {
                    let u = (0, p.YB)(),
                        f = (0, i.useRef)(null),
                        h = (0, V.q)(c, f),
                        {
                            to: g,
                            body: _
                        } = (0, i.useMemo)(() => (0, D.RG)(o), [o]),
                        y = (0, i.useCallback)(() => {
                            _ && navigator.clipboard.writeText(_)
                        }, [_]),
                        x = (0, i.useCallback)(() => {
                            let e = f.current;
                            null == e || e.close()
                        }, []),
                        w = Q[a],
                        v = (0, P.lm)(n);
                    return (0, t.jsxs)(q.Vq, { ...m,
                        open: m.open || "form" !== a,
                        role: e,
                        className: r()(T.stateDialog, {
                            [T.success]: "success" === a,
                            [T.error]: "error" === a,
                            [T.withBooking]: v
                        }, s),
                        "aria-label": u.formatMessage({
                            id: "salesForm.serverError.label",
                            defaultMessage: "We couldn’t submit your information",
                            description: "Label for an error alert on the contact sales form"
                        }),
                        ref: h,
                        children: [(0, t.jsx)(q.fK, {
                            className: r()(T.stateDialogHeader),
                            children: (0, t.jsx)(w, {
                                width: 28,
                                className: T.stateIcon
                            })
                        }), "success" === a && n ? (0, t.jsx)(O.X, {
                            src: n,
                            onClose: x,
                            onBookingConfirmed: l
                        }) : null, (0, t.jsxs)(q.a7, {
                            className: T.stateDialogBody,
                            children: [(0, t.jsx)(W.X, {
                                level: 2,
                                variant: "sans-400-bold",
                                children: (0, t.jsx)(p._H, {
                                    id: "salesForm.step.title",
                                    description: "Title for a status message on the contact sales form",
                                    values: {
                                        step: a
                                    },
                                    defaultMessage: (0, p.Ys)("step", {
                                        error: "Submission failed",
                                        other: "Successfully submitted"
                                    })
                                })
                            }), "success" === a ? (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)(M.Z, {
                                    as: "p",
                                    className: T.dialogDescription,
                                    children: (0, t.jsx)(p._H, {
                                        id: "salesForm.success.nextSteps",
                                        description: "Thank you and next steps message for a successful submission on the contact sales form",
                                        defaultMessage: "Thanks for reaching out! We’ll be in touch soon. In the meantime, here are some resources to learn more about Notion:",
                                        values: {
                                            supportEmail: g,
                                            supportEmailLink: e => (0, t.jsx)(j.u, {
                                                href: o,
                                                className: T.stateDialogErrorLink,
                                                eventData: {
                                                    name: "sales_support_email"
                                                },
                                                children: e
                                            })
                                        }
                                    })
                                }), (0, t.jsxs)("ul", {
                                    role: "list",
                                    className: T.dialogNextStepLinks,
                                    children: [(0, t.jsx)("li", {
                                        children: (0, t.jsx)(j.u, {
                                            href: d._j.customers,
                                            eventData: {
                                                name: "sales_customer_stories"
                                            },
                                            children: (0, t.jsx)(p._H, {
                                                id: "salesForm.success.nextSteps.customerStories",
                                                description: "Link to customer stories",
                                                defaultMessage: "Customer stories"
                                            })
                                        })
                                    }), (0, t.jsx)("li", {
                                        children: (0, t.jsx)(j.u, {
                                            href: d._j.templates,
                                            eventData: {
                                                name: "sales_marketplace"
                                            },
                                            children: (0, t.jsx)(p._H, {
                                                id: "salesForm.success.nextSteps.templateGallery",
                                                description: "Link to template gallery",
                                                defaultMessage: "Marketplace"
                                            })
                                        })
                                    }), (0, t.jsx)("li", {
                                        children: (0, t.jsx)(j.u, {
                                            href: d._j.guides,
                                            eventData: {
                                                name: "sales_guides_and_tutorials"
                                            },
                                            children: (0, t.jsx)(p._H, {
                                                id: "salesForm.success.nextSteps.guidesAndTutorials",
                                                description: "Link to guides",
                                                defaultMessage: "Guides and tutorials"
                                            })
                                        })
                                    })]
                                })]
                            }) : null, "error" === a ? (0, t.jsx)(M.Z, {
                                as: "p",
                                className: T.dialogDescription,
                                children: (0, t.jsx)(p._H, {
                                    id: "salesForm.serverError.resolution",
                                    description: "Description for an error alert on the contact sales form",
                                    defaultMessage: "We weren’t able to submit your information. You can send an email with pre-populated information to <supportEmailLink>{supportEmail}</supportEmailLink> instead.",
                                    values: {
                                        supportEmail: g,
                                        supportEmailLink: e => (0, t.jsx)(j.u, {
                                            href: o,
                                            className: T.stateDialogErrorLink,
                                            eventData: {
                                                name: "sales_support_email_error"
                                            },
                                            children: e
                                        })
                                    }
                                })
                            }) : null]
                        }), "error" === a ? (0, t.jsxs)(q.cN, {
                            className: T.stateDialogFooter,
                            children: [(0, t.jsx)(b.z, {
                                href: o,
                                variant: "tertiary",
                                isFullWidth: !0,
                                children: (0, t.jsx)(p._H, {
                                    id: "salesForm.serverError.sendEmail",
                                    description: "Button to send an email to sales with pre-populated customer information in the event that an unknown error occurs on the backend",
                                    defaultMessage: "Send email"
                                })
                            }), (0, t.jsx)(b.z, {
                                hidden: !_,
                                onClick: y,
                                variant: "simple",
                                children: (0, t.jsx)(p._H, {
                                    id: "salesForm.serverError.copyPrepopulatedInfo",
                                    description: "Button to copy a template body of an email to sales with info pre-populated from their form submission which failed",
                                    defaultMessage: "Copy pre-populated information"
                                })
                            })]
                        }) : null]
                    })
                }),
                Y = ["firstName", "lastName", "email", "jobTitle", "phoneNumber", "companyName", "companySize", "country", "demoReason", "message", "marketingCommsConsent"],
                U = Object.fromEntries(Y.map(e => [e, e])),
                $ = ["business", "enterprise"],
                Z = {
                    root: T.root,
                    label: T.label,
                    input: T.input,
                    error: T.error
                },
                J = {
                    root: T.root,
                    label: T.label,
                    select: T.select,
                    error: T.error
                };

            function X({
                className: e,
                countryCodeFromIp: s,
                email: a
            }) {
                let o = (0, p.YB)(),
                    H = (0, R.b)(),
                    {
                        urlAnalytics: I
                    } = (0, A.O)(),
                    P = (0, B.F)(),
                    [q, W] = (0, i.useState)(null),
                    [V, O] = (0, i.useState)("form"),
                    [Q, X] = (0, i.useState)(null),
                    [K, ee] = (0, i.useState)(s),
                    es = (0, i.useMemo)(() => {
                        let e = s ? ? K;
                        return e ? (0, l.Aw)(e) : null
                    }, [s, K]),
                    ea = (0, i.useMemo)(() => (0, l.$i)(o, {
                        locale: H
                    }).filter(({
                        countryCode: e
                    }) => !(0, u.MP)(e)), [o, H]),
                    et = (0, i.useMemo)(() => (0, z.qw)(s), [s]),
                    eo = (0, i.useMemo)(() => !!s && "APAC" === (0, l.X2)(s), [s]),
                    er = (0, n.useRouter)(),
                    en = (0, i.useMemo)(() => {
                        let {
                            referrer: e
                        } = er.query;
                        return $.includes(e)
                    }, [er]),
                    ei = (0, i.useMemo)(() => {
                        if (!en) return;
                        let {
                            referrer: e
                        } = er.query;
                        switch (e) {
                            case "business":
                                return o.formatMessage({
                                    id: "salesForm.businessTrial",
                                    defaultMessage: "Request a business trial",
                                    description: "Message field value for the contact sales form"
                                });
                            case "enterprise":
                                return o.formatMessage({
                                    id: "salesForm.enterpriseTrial",
                                    defaultMessage: "Request an enterprise trial",
                                    description: "Message field value for the contact sales form"
                                })
                        }
                    }, [o, er, en]),
                    el = {
                        firstName: (0, E.R)(q, U.firstName),
                        lastName: (0, E.R)(q, U.lastName),
                        email: (0, E.R)(q, U.email),
                        jobTitle: (0, E.R)(q, U.jobTitle),
                        phoneNumber: (0, E.R)(q, U.phoneNumber),
                        companyName: (0, E.R)(q, U.companyName),
                        companySize: (0, E.R)(q, U.companySize),
                        country: (0, E.R)(q, U.country),
                        demoReason: (0, E.R)(q, U.demoReason),
                        message: (0, E.R)(q, U.message),
                        marketingCommsConsent: (0, E.R)(q, U.marketingCommsConsent)
                    },
                    {
                        opt: em
                    } = es ? ? {},
                    ec = (0, i.useMemo)(() => Object.fromEntries(Y.map(e => {
                        let s = o.formatMessage({
                            id: "salesForm.fieldLabel",
                            description: "Label for a field in the contact sales form",
                            defaultMessage: (0, p.Ys)("fieldName", {
                                firstName: "First name",
                                lastName: "Last name",
                                email: "Work email",
                                jobTitle: "Job title",
                                phoneNumber: "Phone number",
                                companyName: "Company name",
                                companySize: "Company size",
                                country: "Country or region",
                                demoReason: "Reason for contact",
                                message: "Provide more details",
                                marketingCommsConsent: (0, p.Ys)("opt", {
                                    out: "No, I do not want to receive marketing communications from Notion.",
                                    other: "I agree to Notion sending marketing communications about Notion"
                                }),
                                other: "Other"
                            })
                        }, {
                            fieldName: e,
                            opt: em ? ? "in"
                        });
                        return [e, s]
                    })), [o, em]),
                    [eu, ed] = (0, i.useState)((0, D.B$)(c.sJ)),
                    ep = (0, t.jsx)("option", {
                        value: "",
                        children: (0, t.jsx)(p._H, {
                            id: "salesForm.dropdownEmptyState",
                            defaultMessage: "Select…",
                            description: "Empty state for dropdowns in the contact sales form"
                        })
                    }),
                    [ef, eh] = (0, m.UK)(async e => {
                        let {
                            utm_source: a,
                            utm_medium: t,
                            utm_content: r,
                            utm_campaign: n,
                            utm_term: i,
                            gclid: m
                        } = I ? ? {};
                        if (!es) throw Error("Could not resolve marketing comms consent rules");
                        let u = (0, z.US)(e.marketingCommsConsent, es.opt),
                            b = function(e) {
                                let {
                                    intl: s,
                                    formValues: a,
                                    labels: t
                                } = e, o = { ...a,
                                    companySize: (0, z.pH)(parseInt(a.companySize, 10)),
                                    country: (0, l.pD)(a.country),
                                    demoReason: (0, z.on)(a.demoReason),
                                    marketingCommsConsent: s.formatMessage({
                                        id: "salesForm.serverError.supportEmail.marketingCommsConsent",
                                        description: "Label for marketing comms consent value in the support email body for the contact sales form in the event of a server error",
                                        defaultMessage: (0, p.Ys)("consent", {
                                            on: "Yes",
                                            other: "No"
                                        })
                                    }, {
                                        consent: a.marketingCommsConsent ? ? "off"
                                    })
                                };
                                return {
                                    subject: s.formatMessage({
                                        id: "salesForm.serverError.supportEmail.subject",
                                        description: "Subject line for an email to Notion's sales team from the contact sales form in the event of a server error",
                                        defaultMessage: "Demo request for {firstName} {lastName} at {companyName}"
                                    }, {
                                        firstName: o.firstName,
                                        lastName: o.lastName,
                                        companyName: o.companyName
                                    }),
                                    body: s.formatMessage({
                                        id: "salesForm.serverError.supportEmail.body",
                                        description: "Body text for an email to Notion's sales team from the contact sales form in the event of a server error",
                                        defaultMessage: ["firstName", "lastName", "email", "jobTitle", "phoneNumber", "companyName", "companySize", "country", "demoReason", "message", "marketingCommsConsent"].map(e => `{${e}Label}: {${e}}`).join("{newline}")
                                    }, {
                                        newline: "\n",
                                        firstName: o.firstName,
                                        lastName: o.lastName,
                                        email: o.email,
                                        jobTitle: o.jobTitle,
                                        phoneNumber: o.phoneNumber,
                                        companyName: o.companyName,
                                        companySize: o.companySize,
                                        country: o.country,
                                        demoReason: o.demoReason,
                                        message: o.message,
                                        marketingCommsConsent: o.marketingCommsConsent,
                                        firstNameLabel: t.firstName,
                                        lastNameLabel: t.lastName,
                                        emailLabel: t.email,
                                        jobTitleLabel: t.jobTitle,
                                        phoneNumberLabel: t.phoneNumber,
                                        companyNameLabel: t.companyName,
                                        companySizeLabel: t.companySize,
                                        countryLabel: t.country,
                                        demoReasonLabel: t.demoReason,
                                        messageLabel: t.message,
                                        marketingCommsConsentLabel: t.marketingCommsConsent
                                    })
                                }
                            }({
                                intl: o,
                                formValues: e,
                                labels: ec
                            });
                        ed((0, D.B$)(c.sJ, b));
                        let _ = await (0, C.ej)("_mkto_trk"),
                            y = parseInt(e.companySize, 10),
                            x = (0, z.pH)(y);
                        await (0, S.pt)("submitMarketoForm", { ...e,
                            type: "contactSalesMarketing",
                            ipCountry: s,
                            companySize: y,
                            marketingCommsConsent: u,
                            trialRequested: en,
                            gclid: m,
                            utm_source: (0, z.sG)(a),
                            utm_medium: (0, z.sG)(t),
                            utm_content: (0, z.sG)(r),
                            utm_campaign: (0, z.sG)(n),
                            utm_term: (0, z.sG)(i),
                            cookie: _
                        }).then(e => f.x.unwrap(e)).then(({
                            schedulingUrl: e
                        }) => {
                            e ? (O("success"), X(e)) : er.push(d._j.contactSalesConfirmation)
                        }).catch(() => O("error")).finally(() => {
                            (0, g.Pv)("contact_sales", "contact_sales_page", {
                                company_size: x,
                                country: e.country,
                                email: e.email,
                                ...e.demoReason && {
                                    demo_reason: e.demoReason
                                }
                            })
                        }).finally(() => {
                            h.UV(P, {
                                country: e.country,
                                companyName: e.companyName,
                                companySize: x
                            })
                        })
                    }, [o, P, ec, I, es, en, s, er]),
                    eg = "pending" === ef.status,
                    eb = (0, i.useCallback)(e => {
                        if (e.preventDefault(), !e.currentTarget.checkValidity()) {
                            (0, F.hB)(e.currentTarget);
                            return
                        }
                        eh((0, z.zi)(e.currentTarget))
                    }, [eh]),
                    e_ = Object.fromEntries(Object.entries(el).map(([e, s]) => [e, (0, z.t2)(s)])),
                    ey = (0, t.jsx)(x.y, {
                        required: !0,
                        name: U.firstName,
                        error: e_.firstName,
                        label: ec.firstName,
                        classes: Z,
                        placeholder: o.formatMessage({
                            id: "salesForm.firstName.placeholder",
                            defaultMessage: "Ada",
                            description: "This is a fake first name used as placeholder text in a form."
                        })
                    }),
                    ex = (0, t.jsx)(x.y, {
                        required: !0,
                        name: U.lastName,
                        error: e_.lastName,
                        label: ec.lastName,
                        classes: Z,
                        placeholder: o.formatMessage({
                            id: "salesForm.lastName.placeholder",
                            defaultMessage: "Lovelace",
                            description: "This is a fake surname used as placeholder text in a form."
                        })
                    });
                return (0, t.jsxs)(_.l, {
                    className: e,
                    onSubmit: eb,
                    ref: W,
                    children: [(0, t.jsx)(G, {
                        step: V,
                        supportEmailHref: eu,
                        schedulingUrl: Q,
                        onClose: () => er.push(d._j.contactSalesConfirmation)
                    }), (0, t.jsx)(w.p, {
                        className: T.row,
                        children: (0, L.EK)(H) ? [ex, ey] : [ey, ex]
                    }), (0, t.jsxs)(w.p, {
                        className: T.row,
                        children: [(0, t.jsx)(x.y, {
                            type: "email",
                            required: !0,
                            name: U.email,
                            error: e_.email,
                            label: ec.email,
                            classes: Z,
                            defaultValue: a
                        }), (0, t.jsx)(x.y, {
                            required: !0,
                            name: U.jobTitle,
                            error: e_.jobTitle,
                            label: ec.jobTitle,
                            classes: Z
                        })]
                    }), (0, t.jsxs)(w.p, {
                        className: T.row,
                        children: [(0, t.jsx)(x.y, {
                            required: !0,
                            name: U.companyName,
                            error: e_.companyName,
                            label: ec.companyName,
                            classes: Z,
                            placeholder: o.formatMessage({
                                id: "salesForm.companyName.placeholder",
                                defaultMessage: "Lovelace Inc.",
                                description: "This is a fake company name used as placeholder text in a form field. Any company name relevant to locale will work."
                            })
                        }), (0, t.jsxs)(v.i, {
                            required: !0,
                            name: U.companySize,
                            error: e_.companySize,
                            label: ec.companySize,
                            classes: J,
                            children: [ep, c.TM.map((e, s) => {
                                let a = c.TM[s + 1] ? ? e;
                                return (0, t.jsx)("option", {
                                    value: e,
                                    children: (0, t.jsx)(p._H, {
                                        id: "salesForm.companySize",
                                        description: "Label for company size option in the contact sales form",
                                        values: {
                                            min: e,
                                            max: a - 1
                                        },
                                        defaultMessage: (0, p.Ys)("min", {
                                            3e3: "{min}+ employees",
                                            other: "{min}-{max} employees"
                                        })
                                    })
                                }, e)
                            })]
                        })]
                    }), (0, t.jsxs)(w.p, {
                        className: T.row,
                        children: [(0, t.jsxs)(v.i, {
                            required: !0,
                            defaultValue: s,
                            name: U.country,
                            error: e_.country,
                            label: ec.country,
                            classes: J,
                            onChange: e => ee(e.currentTarget.value || void 0),
                            children: [ep, ea.map(({
                                countryCode: e
                            }) => (0, t.jsx)("option", {
                                value: e,
                                children: (0, t.jsx)(N.r, {
                                    children: (0, l.qA)(o, e)
                                })
                            }, e))]
                        }), (0, t.jsx)(x.y, {
                            type: "tel",
                            required: et,
                            name: U.phoneNumber,
                            error: e_.phoneNumber,
                            label: ec.phoneNumber,
                            classes: { ...Z,
                                requiredOptionalAddon: r()({
                                    [T.hideOptionalLabel]: !et
                                })
                            },
                            placeholder: o.formatMessage({
                                id: "salesForm.phone.placeholder",
                                description: "This is placeholder text for a phone number field in the contact sales form. Please format to match the standard format of phone numbers in each locale, with the country code included for users not in en-US (e.g. +33 for French users). The form validation is quite permissive so any format should pass validation.",
                                defaultMessage: "(123) 456-7891"
                            })
                        })]
                    }), (0, t.jsx)("div", {
                        className: T.row,
                        children: (0, t.jsxs)(v.i, {
                            required: !0,
                            name: U.demoReason,
                            error: e_.demoReason,
                            label: ec.demoReason,
                            classes: J,
                            children: [ep, c.BT.map(e => (0, t.jsx)("option", {
                                value: e,
                                children: (0, t.jsx)(p._H, {
                                    id: "salesForm.demoReasons",
                                    description: "Default reasons for customers to request a demo, which are provided in a dropdown",
                                    values: {
                                        demoReason: e
                                    },
                                    defaultMessage: (0, p.Ys)("demoReason", {
                                        enterprise: "I’d like to discuss an enterprise use case",
                                        pricing: "I’d like to explore pricing options",
                                        demo: "I’d like to see a demo of the product",
                                        studentOrNonProfitPricing: "I am looking for student/non-profit pricing",
                                        support: "I am looking for product or billing support",
                                        other: "Other (please provide more details below)"
                                    })
                                })
                            }, e))]
                        })
                    }), (0, t.jsxs)("div", {
                        children: [(0, t.jsx)(k.B, {
                            defaultValue: ei,
                            maxlength: 1e3,
                            name: U.message,
                            error: e_.message,
                            label: ec.message,
                            required: eo,
                            placeholder: o.formatMessage({
                                id: "salesForm.message.placeholder",
                                defaultMessage: "How are you looking to use Notion?",
                                description: "Placeholder for message multi-line text box in the contact sales form"
                            })
                        }), es ? (0, t.jsx)("div", {
                            className: T.marketingCommsConsentContainer,
                            children: (0, t.jsx)(y.z, {
                                defaultChecked: (0, z.lG)(es),
                                name: U.marketingCommsConsent,
                                error: e_.marketingCommsConsent,
                                label: ec.marketingCommsConsent
                            })
                        }) : null, (0, t.jsx)("span", {
                            role: "status",
                            className: T.visuallyHidden,
                            children: eg ? (0, t.jsx)(p._H, {
                                id: "salesForm.submitButton.status",
                                defaultMessage: "Submitting",
                                description: "Accessible message for assistive devices used to indicate that processing is ongoing for the user's submission"
                            }) : null
                        }), (0, t.jsx)(b.z, {
                            className: T.submitButton,
                            type: "submit",
                            variant: "primary",
                            loading: eg,
                            children: (0, t.jsx)(p._H, {
                                id: "salesForm.submitButton.label",
                                defaultMessage: "Contact sales",
                                description: "Submit button text on the contact sales form"
                            })
                        }), es ? (0, t.jsx)(M.Z, {
                            className: T.disclosure,
                            as: "p",
                            variant: "sans-50-regular",
                            color: "text-medium",
                            children: (0, t.jsx)(p._H, {
                                defaultMessage: "You may unsubscribe from receiving marketing communications any time. Notion’s websites and communications are subject to our <privacyLink>Privacy Policy</privacyLink>.",
                                id: "salesForm.terms",
                                description: "Privacy policy agreement acknowledgement on the contact sales form",
                                values: {
                                    privacyLink: e => (0, t.jsx)(j.u, {
                                        href: d.$e.privacyPolicy,
                                        eventData: {
                                            name: "sales_privacy_policy"
                                        },
                                        children: e
                                    })
                                }
                            })
                        }) : null]
                    }), (0, t.jsxs)("label", {
                        hidden: !0,
                        className: T.passwordField,
                        children: [(0, t.jsx)("input", {
                            hidden: !0,
                            autoComplete: "off",
                            name: "password",
                            className: T.passwordFieldInput,
                            placeholder: o.formatMessage({
                                id: "salesForm.password.placeholder",
                                defaultMessage: "Enter a password here",
                                description: "This is a fake field used as placeholder text in a form."
                            })
                        }), (0, t.jsx)(p._H, {
                            id: "salesForm.password.label",
                            description: "Label for a fake field which is intended to catch traffic and submissions to the Contact Sales page by bots",
                            defaultMessage: "Password"
                        })]
                    })]
                })
            }
        },
        755137: function(e, s, a) {
            "use strict";
            let t, o;
            a.d(s, {
                y: function() {
                    return m
                }
            });
            var r = a(202784),
                n = a(914775),
                i = a(961803),
                l = a(401607);

            function m(e, s, a) {
                var m;
                let c, u;
                let d = (0, r.useRef)((t = t ? ? new Map, o = o ? ? (m = t, c = !1, u = (0, n.Ay)([]), new ResizeObserver((e, s) => {
                        u = u.concat(e), c || (c = !0, window.requestAnimationFrame(() => {
                            let e = new Set;
                            [...u].reverse().filter(s => {
                                let a = e.has(s.target);
                                return e.add(s.target), !a
                            }).forEach(e => {
                                let a = m.get(e.target);
                                null == a || a.forEach(a => {
                                    a([e], s)
                                })
                            }), u = [], c = !1
                        }))
                    })), {
                        subscribe: (e, s, a) => {
                            o.observe(e, a);
                            let r = [...t.get(e) ? ? [], s];
                            t.set(e, r)
                        },
                        unsubscribe: (e, s) => {
                            let a = t.get(e) ? ? [],
                                r = a.findIndex(e => e === s),
                                n = a.filter((e, s) => s !== r);
                            if (n.length < 1) {
                                o.unobserve(e), t.delete(e);
                                return
                            }
                            t.set(e, n)
                        }
                    })),
                    p = (0, i.r)(a ? ? {});
                (0, l.L)(() => {
                    let a = d.current;
                    if (a && e) return a.subscribe(e, s, p), () => {
                        a.unsubscribe(e, s)
                    }
                }, [e, s, p])
            }
        },
        133761: function(e) {
            e.exports = {
                inlineTextLinkWrap: "blockCta_inlineTextLinkWrap__NAfG2"
            }
        },
        381378: function(e) {
            e.exports = {
                container: "desktopDownloadButton_container__nfbY_",
                msPersistUnthemedColors: "desktopDownloadButton_msPersistUnthemedColors__z_y2R",
                msStoreButton: "desktopDownloadButton_msStoreButton__NORVf",
                msStoreBadge: "desktopDownloadButton_msStoreBadge__S8gEp"
            }
        },
        417029: function(e) {
            e.exports = {
                root: "input_root__sj8RO",
                sizeMedium: "input_sizeMedium__Y3knn",
                sizeLarge: "input_sizeLarge__ObHrl",
                hasBefore: "input_hasBefore__VWVp9",
                hasAfter: "input_hasAfter__zhGrc",
                input: "input_input__PoidJ",
                before: "input_before__3w5qd",
                after: "input_after__MsoSh"
            }
        },
        506933: function(e) {
            e.exports = {
                main: "layout_main__E4cY1",
                layoutBase: "layout_layoutBase__qpePC",
                lg: "layout_lg__mwZvj",
                xl: "layout_xl__0fxfK"
            }
        },
        334816: function(e) {
            e.exports = {
                previewModeAlert: "previewModeAlert_previewModeAlert__zrcfx"
            }
        },
        918264: function(e) {
            e.exports = {
                visuallyHidden: "salesForm_visuallyHidden__AZSWp",
                stateDialog: "salesForm_stateDialog__ECSFd",
                success: "salesForm_success__v3seu",
                withBooking: "salesForm_withBooking__Mbm5R",
                stateDialogHeader: "salesForm_stateDialogHeader__hGI4e",
                stateDialogBody: "salesForm_stateDialogBody__pItuP",
                stateIcon: "salesForm_stateIcon__PxM99",
                error: "salesForm_error__w30yH",
                stateDialogErrorLink: "salesForm_stateDialogErrorLink__67Ayr",
                bookingFrame: "salesForm_bookingFrame__3Vb56",
                stateDialogFooter: "salesForm_stateDialogFooter__XUvDz",
                row: "salesForm_row___JVBD",
                root: "salesForm_root__PgL1e",
                label: "salesForm_label__MkC2P",
                input: "salesForm_input__ZDkBo",
                select: "salesForm_select__2NYcG",
                passwordField: "salesForm_passwordField__e8JzC",
                passwordFieldInput: "salesForm_passwordFieldInput__91jiA",
                marketingCommsConsentContainer: "salesForm_marketingCommsConsentContainer__b6O7j",
                submitButton: "salesForm_submitButton__zmS_b",
                disclosure: "salesForm_disclosure__5yAj6",
                hideOptionalLabel: "salesForm_hideOptionalLabel__fNlFq",
                dialogDescription: "salesForm_dialogDescription__Nt8c8",
                dialogNextStepLinks: "salesForm_dialogNextStepLinks__qlDON"
            }
        }
    }
]);