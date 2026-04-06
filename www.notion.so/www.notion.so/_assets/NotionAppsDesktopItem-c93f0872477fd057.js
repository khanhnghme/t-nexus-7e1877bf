"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [59593, 60858], {
        151760: (e, t, o) => {
            o.d(t, {
                R: () => i
            }), o(296540);
            var n = o(474848);
            let a = (0, o(109939).YK)({
                notOpeningPrompt: {
                    id: "openInDesktopApp.notOpeningPrompt",
                    defaultMessage: "Not opening?"
                },
                downloadDesktopApp: {
                    id: "openInDesktopApp.downloadDesktopApp",
                    defaultMessage: "Downloading Notion for Desktop. Already have the app?"
                }
            });
            async function i(e) {
                let {
                    environment: t,
                    from: i,
                    isRegistered: l,
                    alwaysAttemptOpenNativeApp: s
                } = e, c = (0, o(4688).PT)(window.location.href);
                l ? ((0, o(104310).u)({
                    event: {
                        eventName: "open_desktop_app_from_notion",
                        eventProperties: {
                            from: i,
                            always_attempt_open_native_app: s
                        }
                    }
                }), (0, o(884015).e)({
                    environment: t,
                    url: c
                }), function(e) {
                    let {
                        item: t,
                        downloadDesktopCallback: a
                    } = e;
                    o(436555).D6({ ...t,
                        right: (0, n.jsx)(o(531119).jj, {
                            downloadDesktopCallback: a
                        })
                    })
                }({
                    item: {
                        label: o(962299).A.formatMessage(a.notOpeningPrompt),
                        durationMs: 1e4
                    },
                    downloadDesktopCallback: () => {
                        r({
                            environment: t,
                            from: "appSwitcher"
                        })
                    }
                })) : await r({
                    environment: t,
                    from: "appSwitcher"
                })
            }
            async function r(e) {
                let {
                    environment: t,
                    from: r
                } = e, l = await (0, o(542061).a)(t.device);
                l && ((0, o(787786).p)({
                    environment: t,
                    from: r
                }), (0, o(79266).navigate)({
                    environment: t,
                    url: l,
                    openInNew: "tab"
                }), o(436555).Sy(), function(e) {
                    let {
                        item: t,
                        openDesktopCallback: a
                    } = e;
                    o(436555).D6({ ...t,
                        right: (0, n.jsx)(o(531119).zn, {
                            openDesktopCallback: a
                        })
                    })
                }({
                    item: {
                        label: o(962299).A.formatMessage(a.downloadDesktopApp),
                        durationMs: 1e4
                    },
                    openDesktopCallback: () => {
                        i({
                            environment: t,
                            from: "appSwitcher",
                            isRegistered: !0
                        })
                    }
                }))
            }
        },
        423622: (e, t, o) => {
            o.r(t), o.d(t, {
                NotionAppsDesktopItem: () => r
            });
            var n = o(296540),
                a = o(474848);
            let i = {
                height: 14,
                borderRadius: 4,
                width: "60px",
                marginBottom: 3
            };

            function r() {
                let e = (0, o(682985).O$)(o(17118).l),
                    t = (0, o(533992).v3)(),
                    r = (0, n.useCallback)(async () => {
                        let n = e;
                        (0, o(104310).u)({
                            event: {
                                eventName: "click_desktop_sidebar_link",
                                eventProperties: {}
                            }
                        }), null === n && (n = await (0, o(126592).e)(t)), (0, o(151760).R)({
                            environment: t,
                            from: "sidebar_notion_apps_section",
                            isRegistered: !!n
                        })
                    }, [t, e]);
                return (0, a.jsx)(o(597350).p, {
                    tooltip: null === e ? (0, a.jsx)(o(795830).P, {
                        style: i
                    }) : e ? (0, a.jsx)(o(109939).sA, {
                        id: "sidebar.notionapps.desktop.openTooltip.tooltip",
                        defaultMessage: "Open in Notion for Desktop"
                    }) : (0, a.jsx)(o(109939).sA, {
                        id: "sidebar.notionapps.desktop.downloadTooltip.tooltip",
                        defaultMessage: "Download Notion for Desktop"
                    }),
                    onClick: r,
                    icon: (0, a.jsx)(o(16275).I, {
                        icon: o(898378).notionTintableIcon,
                        colorVariant: "secondary",
                        size: "sm"
                    }),
                    label: (0, a.jsx)(o(109939).sA, {
                        id: "sidebar.notionapp.desktop.label",
                        defaultMessage: "Notion Desktop"
                    })
                })
            }
        },
        542061: (e, t, o) => {
            o.d(t, {
                a: () => r,
                E: () => i
            }), o(16280);
            var n = o(296540);
            o(898992), o(672577), o(640088).Ju.downloadMac, o(640088).Ju.downloadMacUniversal, o(640088).Ju.downloadMacIntel, o(640088).Ju.downloadMacAppleSilicon, o(640088).Ju.downloadWindows, o(640088).Ju.downloadWindowsArm, o(640088).Ju.downloadWindowsMsix, o(640088).Ju.downloadWindowsMsixArm;
            let a = [{
                route: o(640088).Ju.downloadMac,
                architecture: "universal",
                operatingSystem: "mac",
                target: "macUniversal"
            }, {
                route: o(640088).Ju.downloadMacIntel,
                architecture: "x86",
                operatingSystem: "mac",
                target: "mac"
            }, {
                route: o(640088).Ju.downloadMacUniversal,
                architecture: "universal",
                operatingSystem: "mac",
                target: "macUniversal"
            }, {
                route: o(640088).Ju.downloadMacAppleSilicon,
                architecture: "arm",
                operatingSystem: "mac",
                target: "macArm64"
            }, {
                route: o(640088).Ju.downloadWindows,
                architecture: "x86",
                operatingSystem: "windows",
                target: "windows"
            }, {
                route: o(640088).Ju.downloadWindowsArm,
                architecture: "arm",
                operatingSystem: "windows",
                target: "windowsArm64"
            }, {
                route: o(640088).Ju.downloadWindowsMsix,
                architecture: "x86",
                operatingSystem: "windows",
                target: "msix"
            }, {
                route: o(640088).Ju.downloadWindowsMsixArm,
                architecture: "arm",
                operatingSystem: "windows",
                target: "msixArm64"
            }];

            function i() {
                let e = (0, n.useRef)(null),
                    t = (0, o(533992).Y0)();
                return (0, n.useEffect)(() => {
                    r(t).then(t => {
                        e.current = t ? ? null
                    }).catch(e => {
                        throw Error(e)
                    })
                }, [t]), e
            }
            async function r(e) {
                var t;
                if (!("userAgentData" in navigator))
                    if (e.isMac) return o(640088).Ju.downloadMacUniversal;
                    else return o(640088).Ju.downloadWindows;
                let n = navigator.userAgentData,
                    i = await (null == n || null == (t = n.getHighEntropyValues) ? void 0 : t.call(n, ["architecture"])),
                    r = function(e, t) {
                        let o = function(e = "") {
                            let t = e.toLowerCase();
                            return t.startsWith("arm") ? "arm" : t.startsWith("x86") || "intel" === t ? "x86" : null
                        }(e);
                        if (!o || "mac" !== t && "windows" !== t) return null;
                        let n = a.find(e => e.architecture === o && e.operatingSystem === t);
                        return (null == n ? void 0 : n.route) || null
                    }(null == i ? void 0 : i.architecture, e.os);
                return r || null
            }
        },
        597350: (e, t, o) => {
            o.d(t, {
                p: () => i
            });
            var n = o(296540),
                a = o(474848);

            function i(e) {
                let {
                    tooltip: t,
                    onClick: i,
                    icon: r,
                    label: l
                } = e, [s, c] = (0, n.useState)(!1), d = (0, o(665002).g)(), u = (0, o(624467).m)();
                return t && !u ? (0, a.jsx)(o(51831).m, {
                    content: () => t,
                    originGap: 6,
                    textWrap: !0,
                    placement: "right",
                    children: e => (0, a.jsx)(o(64960).Ay, { ...e,
                        style: { ...o(132261).DX.baseSidebarItem,
                            ...d && {
                                transition: "none"
                            }
                        },
                        onClick: i,
                        onMouseEnter: t => {
                            var o;
                            c(!0), null == (o = e.onMouseEnter) || o.call(e, t)
                        },
                        onMouseLeave: t => {
                            var o;
                            c(!1), null == (o = e.onMouseLeave) || o.call(e, t)
                        },
                        children: (0, a.jsx)(o(380559).u, {
                            left: r,
                            right: s ? (0, a.jsx)(o(16275).I, {
                                icon: o(759706).arrowDiagonalUpRightSmallIcon,
                                colorVariant: "tertiary",
                                size: "sm"
                            }) : null,
                            children: l
                        })
                    })
                }) : (0, a.jsx)(o(64960).Ay, {
                    style: { ...o(132261).DX.baseSidebarItem,
                        ...d && {
                            transition: "none"
                        }
                    },
                    onClick: i,
                    onMouseEnter: () => {
                        c(!0)
                    },
                    onMouseLeave: () => {
                        c(!1)
                    },
                    children: (0, a.jsx)(o(380559).u, {
                        left: r,
                        right: s ? (0, a.jsx)(o(16275).I, {
                            icon: o(759706).arrowDiagonalUpRightSmallIcon,
                            colorVariant: "tertiary",
                            size: "sm"
                        }) : null,
                        children: l
                    })
                })
            }
        },
        787786: (e, t, o) => {
            o.d(t, {
                p: () => n
            });

            function n(e) {
                let {
                    from: t
                } = e;
                (0, o(104310).u)({
                    event: {
                        eventName: "download_desktop_app_from_notion",
                        eventProperties: {
                            from: t
                        }
                    }
                })
            }
        },
        898378: (e, t, o) => {
            o.r(t), o.d(t, {
                iconDefinition: () => n,
                notionTintableIcon: () => a
            }), o(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.76 1.39 16.47 17.17",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M12.32 1.437c1.17-.1 1.47-.032 2.205.501l3.039 2.136c.5.367.668.467.668.867v11.715c0 .734-.267 1.168-1.202 1.234l-11.055.667c-.702.034-1.036-.066-1.404-.533L2.333 15.12c-.4-.534-.567-.934-.567-1.401V3.306c0-.6.267-1.101 1.035-1.168zm4.241 3.871-10.854.634c-.4.034-.534.235-.534.668v9.945c0 .535.267.735.868.702l10.388-.601c.6-.033.668-.401.668-.835V5.942c0-.433-.167-.667-.536-.634m-1.134 1.836c.066.3 0 .601-.301.635l-.501.1v7.342c-.434.233-.835.367-1.169.367-.534 0-.668-.168-1.068-.668L9.113 9.78v4.973l1.036.233c0 .008-.005.6-.836.6l-2.303.135c-.067-.134 0-.468.233-.535l.602-.167V8.446L7.01 8.38c-.067-.3.1-.734.567-.768l2.472-.166 3.407 5.206V8.046l-.868-.1c-.067-.367.2-.635.534-.668zm-2.705-4.772-9.153.668c-.333.033-.4.2-.267.333l1.303 1.035c.534.433.735.4 1.737.333l9.452-.567c.2 0 .034-.2-.033-.233l-1.57-1.136c-.301-.233-.702-.5-1.47-.433"
                    })
                },
                a = (0, o(104509).wt)("notionTintable", n, "tintable")
        }
    }
]);