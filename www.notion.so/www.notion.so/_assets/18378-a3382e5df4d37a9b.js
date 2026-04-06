"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [18378], {
        2009: (e, t, a) => {
            a.d(t, {
                w: () => o
            });
            var n = () => a(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        asyncModals: []
                    }
                }
            }
            let o = new r
        },
        6260: (e, t, a) => {
            a.d(t, {
                Z: () => o
            }), a(296540);
            var n = a(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 16.74 14.99",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M4.5 4.125A2.125 2.125 0 0 0 2.375 6.25v7.5c0 1.174.951 2.125 2.125 2.125h5.702a4.7 4.7 0 0 1-.2-1.25H4.5a.875.875 0 0 1-.875-.875V7.5h12.75v2.535a4.7 4.7 0 0 1 1.25.684V6.25A2.125 2.125 0 0 0 15.5 4.125zm.758 1.684a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0m1.375-.625a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25m2.625.625a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0"
                        }), (0, n.jsx)("path", {
                            d: "M17.7 16.607a3.625 3.625 0 1 0-.893.878l1.223 1.427a.625.625 0 0 0 .94-.823zM12.375 14.5a2.375 2.375 0 1 1 4.75 0 2.375 2.375 0 0 1-4.75 0"
                        })]
                    })
                },
                o = (0, a(104509).wt)("browserMagnifyingGlass", r, "default")
        },
        80384: (e, t, a) => {
            a.d(t, {
                MG: () => o,
                T1: () => r,
                a1: () => d,
                dt: () => l,
                kg: () => i,
                lC: () => c,
                n_: () => s
            });
            var n = a(296540);
            let r = new(a(815048)).O2("PerformanceToolbar", () => Promise.all([a.e(39225), a.e(45624)]).then(a.bind(a, 476932))),
                o = (0, a(815048)._h)(r, e => e.PerformanceToolbar),
                l = (0, a(815048)._h)(r, e => e.PerformanceToolbarSettings);

            function i() {
                let e = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => (0, a(186452).D)(e, e.RouterStore.state), [e])
            }

            function s() {
                let e = (0, a(533992).v3)(),
                    t = u("performanceToolbarStore"),
                    n = u("isPerformanceToolbarVisible");
                return (0, a(682985).K8)(() => !!t && !!n && n(e, e.RouterStore.state, t.state), [n, e, t])
            }

            function c() {
                let e = u("performanceToolbarStore");
                return (0, a(682985).K8)(() => !!e && e.state.isPerformanceToolbarMounted, [e])
            }

            function d() {
                let e = (0, a(533992).v3)(),
                    t = u("createPerformanceToolbarMouseListeners"),
                    r = u("performanceToolbarStore"),
                    {
                        sidebarExpanded: o,
                        sidebarWidth: l,
                        secondarySidebarExpanded: i,
                        secondarySidebarWidth: s,
                        updateSidebarExpanded: c,
                        updateSidebarWidth: d
                    } = (0, a(682985).K8)(() => ({
                        sidebarExpanded: a(984858).sidebarExpandedStore.state,
                        sidebarWidth: a(984858).sidebarWidthStore.state,
                        secondarySidebarExpanded: a(550830).default.isOpen(),
                        secondarySidebarWidth: a(515492).Ay.getWidth(),
                        updateSidebarExpanded: a(449473).B8.state.expanded,
                        updateSidebarWidth: a(449473).B8.state.width
                    }), []);
                return (0, n.useEffect)(() => {
                    if (r && t) return t({
                        environment: e,
                        setMouseNearPerformanceToolbar: e => r.update(t => ({ ...t,
                            isMouseNearPerformanceToolbar: e
                        })),
                        sidebarExpanded: o,
                        sidebarWidth: l,
                        secondarySidebarExpanded: i,
                        secondarySidebarWidth: s,
                        updateSidebarExpanded: c,
                        updateSidebarWidth: d
                    })
                }, [t, e, r, o, l, i, s, c, d])
            }

            function u(e) {
                let t = i(),
                    [{
                        value: n
                    }] = (0, a(97668).Yb)(() => t ? r.load().then(t => t[e]) : Promise.resolve(void 0), [e, t]);
                return n
            }
        },
        84723: (e, t, a) => {
            a.d(t, {
                H: () => l,
                j: () => o
            });
            var n = () => a(546605);
            class r extends n().Store {
                getInitialState() {
                    return {}
                }
                initiate = () => {
                    this.setState({
                        mcpDesktopOAuthState: {
                            status: "initiated"
                        }
                    })
                };
                complete = e => {
                    this.setState({
                        mcpDesktopOAuthState: {
                            status: "completed",
                            ...e
                        }
                    })
                };
                fail = () => {
                    this.setState({
                        mcpDesktopOAuthState: {
                            status: "failed"
                        }
                    })
                };
                reset = () => {
                    this.setState({
                        mcpDesktopOAuthState: void 0
                    })
                }
            }
            let o = new r;

            function l(e) {
                var t;
                if ("initiated" === (null == (t = o.state.mcpDesktopOAuthState) ? void 0 : t.status)) {
                    let {
                        connectionId: t,
                        spaceId: a,
                        error: n
                    } = e;
                    !n && t && a ? o.complete({
                        connectionId: t,
                        spaceId: a
                    }) : o.fail()
                }
                return {
                    didHandle: !0
                }
            }(0, a(202146).exposeDebugValue)("mcpOAuthStore", o)
        },
        101127: (e, t, a) => {
            a.d(t, {
                a: () => r
            }), a(296540);
            var n = a(474848);

            function r(e) {
                let {
                    disabled: t,
                    checked: a,
                    selectorSize: r,
                    ...o
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("input", {
                        type: "radio",
                        checked: a,
                        disabled: t,
                        ...{
                            0: {
                                className: "x-default-marker xg01cxk x1ypdohk xtgyt42 x67bb7w xaqnwrm x1xp8n7a xmix8c7"
                            },
                            1: {
                                className: "x-default-marker xg01cxk x1ypdohk xtgyt42 x67bb7w xaqnwrm x6jxa94 x1v9usgg"
                            }
                        }["small" === r | 0],
                        ...o
                    }), (0, n.jsx)("span", {
                        className: "x10l6tqk x78zum5 x1a00udw xx3o462 x123j3cw x1gabggj xs9asl8 xaso8d8 xr9ek0c xnnr8r xjpr12u xwklpps xl56j7k x6s0dn4 x3pnbk8 xfex06f x2lah0s x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19dvpgm x47corl xdvhukp x19co3pv x1b9t0dy x14j0lww x1ug14d3 x1v0fp5g xo5oljs xd54fh8 x19o3z4c x1phxbvn x13wbzba x1nvdgag x1s928wv xzkji8o x13r0tq7 x1bv6n7p x1wdn0qd x1cm9i5h x12o4cpz x1rrhjjp xdxfgz"
                    })]
                })
            }
        },
        132261: (e, t, a) => {
            a.d(t, {
                DX: () => u,
                FD: () => o,
                Zr: () => l,
                aL: () => n,
                bG: () => i,
                qe: () => d,
                ry: () => r,
                sI: () => c,
                sx: () => s
            });
            let n = 800,
                r = 22,
                o = 24,
                l = 30,
                i = 8,
                s = 4,
                c = 6,
                d = 15,
                u = {
                    baseSidebarItem: { ...a(153262).hG,
                        fontWeight: a(699422).Wy.medium
                    },
                    currentSelectedSidebarItem: {
                        background: a(632079).Tj.sidebarItemSelectedBackground,
                        color: a(632079).Tj.text.primary,
                        ...a(986939).A.isMobile && {
                            boxShadow: `
                            0 1px 0 ${a(632079).Tj.buttonHoveredBackground}
                        `
                        }
                    }
                }
        },
        161368: (e, t, a) => {
            a.d(t, {
                W: () => b
            }), a(296540);
            var n = a(474848);
            let r = {
                    kVAEAm: "x10l6tqk",
                    k1xSpc: "x78zum5",
                    keoZOQ: "xh58mac",
                    k71WvV: "xbpr5gs",
                    k1K539: "xdnc2gc",
                    keTefX: "xvkbmy",
                    kjj79g: "xl56j7k",
                    kGNEyG: "x6s0dn4",
                    kmuXW: "x2lah0s",
                    kmkexE: "xx3f9c7",
                    $$css: !0
                },
                o = {
                    kzqmXN: "x10vfzb2",
                    kZKoxP: "x6w4g8m",
                    krdFHd: "xkqq1k2",
                    kfmiAY: "x91jh78",
                    kT0f0o: "x1xkn691",
                    kVL7Gh: "x4oqio7",
                    $$css: !0
                },
                l = {
                    kzqmXN: "x1a00udw",
                    kZKoxP: "xx3o462",
                    krdFHd: "xr9e8f9",
                    kfmiAY: "x1e4oeot",
                    kT0f0o: "x1ui04y5",
                    kVL7Gh: "x6en5u8",
                    $$css: !0
                },
                i = {
                    kGVxlE: "x1wivvx4",
                    kC7eKd: "x1y1zhng x19foi3z",
                    $$css: !0
                },
                s = {
                    kGVxlE: "x13bgxqi",
                    kC7eKd: "xu4q3vz",
                    $$css: !0
                },
                c = {
                    kGVxlE: "x14j0lww",
                    kC7eKd: "xd54fh8 xkllkjw",
                    $$css: !0
                },
                d = {
                    kGVxlE: "x13bgxqi",
                    kC7eKd: "xd54fh8",
                    $$css: !0
                },
                u = {
                    kGVxlE: "x9wfp6s",
                    kI3sdo: "xdvhukp",
                    $$css: !0
                },
                x = {
                    kSiTet: "xg01cxk",
                    $$css: !0
                },
                p = {
                    kzqmXN: "x1xp8n7a",
                    kZKoxP: "xmix8c7",
                    $$css: !0
                },
                h = {
                    kfzvcC: "x47corl",
                    $$css: !0
                },
                m = {
                    kkrTdU: "x1ypdohk",
                    $$css: !0
                };

            function b(e) {
                let {
                    selectorSize: t = "normal",
                    style: b,
                    className: f,
                    ...k
                } = e, {
                    disabled: v,
                    checked: y
                } = k, [g, w] = (0, a(768397).s)();
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("input", {
                        ref: g,
                        type: "checkbox",
                        ...k,
                        ...a(952687).A.props(x, "large" === t && p, v ? h : m, b, void 0 !== f && {
                            $$css: !0,
                            className: f
                        })
                    }), (0, n.jsx)("span", { ...a(952687).A.props(r, "large" === t ? l : o, y ? v ? s : i : v ? d : c, w && u),
                        children: y ? (0, n.jsx)(a(16275).I, {
                            icon: a(20413).checkmarkFillSmallIcon,
                            colorPalette: "blue",
                            colorVariant: "inversePrimary",
                            size: "large" === t ? "xs" : "xxs"
                        }) : void 0
                    })]
                })
            }
        },
        186452: (e, t, a) => {
            a.d(t, {
                D: () => n
            });

            function n(e, t) {
                return t.route.name, !1
            }
        },
        248791: (e, t, a) => {
            a.d(t, {
                lz: () => r,
                nO: () => n,
                wl: () => o
            });
            let n = {
                    chatSidebar: new(a(815048)).O2("chatSidebar", () => Promise.all([a.e(75134), a.e(9773), a.e(55373), a.e(36192), a.e(96346), a.e(49806), a.e(79974), a.e(45414), a.e(71562), a.e(16471), a.e(37353), a.e(18965), a.e(85142), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(53847), a.e(12354), a.e(5721), a.e(57688), a.e(54951), a.e(43444), a.e(23979), a.e(26997), a.e(73259), a.e(28048), a.e(93430), a.e(12560), a.e(88268), a.e(39726), a.e(42534), a.e(86662), a.e(6212), a.e(29663), a.e(28482), a.e(14369), a.e(56308), a.e(75136), a.e(98175), a.e(83490), a.e(58360), a.e(12690), a.e(68583), a.e(35602), a.e(12024), a.e(95969), a.e(22195), a.e(65441), a.e(44903), a.e(3456), a.e(28463), a.e(2703)]).then(a.bind(a, 827778))),
                    chatSidebarActions: new(a(815048)).O2("chatSidebarActions", async () => await a.e(87196).then(a.bind(a, 358667))),
                    chatSidebarHelpers: new(a(815048)).O2("chatSidebarHelpers", async () => await Promise.resolve().then(a.bind(a, 548124))),
                    chatSidebarModeButton: new(a(815048)).O2("chatSidebarModeButton", async () => await Promise.all([a.e(9773), a.e(55373), a.e(36192), a.e(96346), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(53847), a.e(12354), a.e(5721), a.e(57688), a.e(43444), a.e(23979), a.e(64696), a.e(48486), a.e(76135), a.e(76298), a.e(23644), a.e(94814)]).then(a.bind(a, 471286))),
                    dockedSidebar: new(a(815048)).O2("dockedSidebar", async () => await Promise.all([a.e(75134), a.e(9773), a.e(55373), a.e(36192), a.e(96346), a.e(49806), a.e(79974), a.e(45414), a.e(71562), a.e(16471), a.e(37353), a.e(18965), a.e(85142), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(53847), a.e(12354), a.e(5721), a.e(57688), a.e(54951), a.e(43444), a.e(23979), a.e(26997), a.e(73259), a.e(28048), a.e(93430), a.e(12560), a.e(88268), a.e(39726), a.e(42534), a.e(86662), a.e(6212), a.e(29663), a.e(28482), a.e(14369), a.e(56308), a.e(75136), a.e(98175), a.e(83490), a.e(58360), a.e(12690), a.e(68583), a.e(35602), a.e(12024), a.e(95969), a.e(22195), a.e(65441), a.e(44903), a.e(3456), a.e(28463)]).then(a.bind(a, 707709)))
                },
                r = (0, a(815048)._h)(n.chatSidebar, e => e.ChatSidebar),
                o = (0, a(815048)._h)(n.chatSidebarModeButton, e => e.ChatSidebarModeButtonPopupContents)
        },
        269298: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                lockFillIcon: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 1.95 12.05 15.66",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M6 5.95a4 4 0 1 1 8 0v1.433a2.426 2.426 0 0 1 2.025 2.392v5.4A2.425 2.425 0 0 1 13.6 17.6H6.4a2.425 2.425 0 0 1-2.425-2.425v-5.4c0-1.203.876-2.201 2.025-2.392zm6.75 1.4v-1.4a2.75 2.75 0 1 0-5.5 0v1.4zm-2.2 5.458a1.35 1.35 0 1 0-1.1 0v1.242a.55.55 0 0 0 1.1 0z"
                    })
                },
                r = (0, a(104509).wt)("lockFill", n, "fill")
        },
        288442: (e, t, a) => {
            a.d(t, {
                y: () => d
            });
            var n = () => a(735303);
            let r = {
                    ko: () => a.e(2268).then(a.bind(a, 723608)),
                    es: () => a.e(95264).then(a.bind(a, 499735)),
                    de: () => a.e(35390).then(a.bind(a, 917797)),
                    fr: () => a.e(3272).then(a.bind(a, 32867)),
                    pt: () => a.e(27315).then(a.bind(a, 101699)),
                    zh: () => a.e(69945).then(a.bind(a, 560744)),
                    ja: () => a.e(77757).then(a.bind(a, 59910)),
                    da: () => a.e(9423).then(a.bind(a, 386963)),
                    fi: () => a.e(59337).then(a.bind(a, 23573)),
                    nb: () => a.e(2040).then(a.bind(a, 607288)),
                    nl: () => a.e(51106).then(a.bind(a, 59055)),
                    sv: () => a.e(53631).then(a.bind(a, 767056)),
                    th: () => a.e(17278).then(a.bind(a, 159935)),
                    id: () => a.e(5048).then(a.bind(a, 326497)),
                    vi: () => a.e(42853).then(a.bind(a, 631696)),
                    he: () => a.e(57481).then(a.bind(a, 127879)),
                    ar: () => a.e(29324).then(a.bind(a, 304206))
                },
                o = !1,
                l = !1;
            async function i(e) {
                for (let [a, r] of Object.entries(e.emojiLocaleKeywords)) {
                    var t;
                    n().fB[a] = { ...n().fB[a],
                        keywords: [...r, ...(null == (t = n().fB[a]) ? void 0 : t.keywords) || []]
                    }
                }
                await (0, a(895732).x)(), a(753281).A.update(({
                    emojiByName: t,
                    ...a
                }) => ({ ...a,
                    emojiByName: { ...t,
                        ...e.emojiByName
                    }
                }))
            }
            async function s() {
                l || (await i(await a.e(51872).then(a.bind(a, 348842))), l = !0)
            }
            async function c() {
                if (o) return;
                let [e] = a(849917).locale.split("-");
                e in r && (await i(await r[e]()), o = !0)
            }
            let d = (0, a(517122).A)(async () => {
                await s(), await c()
            })
        },
        295206: (e, t, a) => {
            a.d(t, {
                P: () => o
            }), a(16280), a(898992), a(354520);
            var n = () => a(273917);
            class r extends n().U {
                indexCache = new WeakMap;
                isModelAvailable(e, t, a) {
                    return void 0 !== this.getModelEntry(e, t, a)
                }
                isModelDisabled(e, t, a) {
                    let n = this.getModelEntry(e, t, a);
                    return (null == n ? void 0 : n.isDisabled) ? ? !1
                }
                getModelEntry(e, t, a) {
                    let n = this.getData(e, {
                        spaceId: t
                    });
                    if (n) return this.getIndex(n).get(a)
                }
                getModelMessage(e, t, a) {
                    var n;
                    return null == (n = this.getModelEntry(e, t, a)) ? void 0 : n.modelMessage
                }
                getModelFamily(e, t, n) {
                    var r;
                    let o = null == (r = this.getModelEntry(e, t, n)) ? void 0 : r.modelFamily;
                    return (0, a(443037).jb)(o) ? o : void 0
                }
                getModelsForMode(e, t, a) {
                    let n = this.getData(e, {
                        spaceId: t
                    });
                    if (n) return n.filter(e => "markdown-chat" === a ? void 0 !== e.markdownChat : "workflow" === a ? void 0 !== e.workflow : void 0 !== e.customAgent)
                }
                getIndex(e) {
                    let t = this.indexCache.get(e);
                    if (t) return t;
                    let a = new Map;
                    for (let t of e) a.set(t.model, t);
                    return this.indexCache.set(e, a), a
                }
            }
            let o = new r((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }) => {
                let n = e.currentUser.id;
                try {
                    let r = await e.api.callCellCompatibleApi({
                        eventName: "getAvailableModels",
                        environment: e,
                        cellNavigation: {
                            spaceId: t
                        },
                        data: {
                            spaceId: t
                        }
                    });
                    if ("failed" === r.type) {
                        let e = (0, a(201790).V4)(r);
                        a(419750).O8(Error(`Failed to fetch available models: ${e}`), {
                            from: "AvailableModelsStore.fetch",
                            type: "api_failed_response",
                            data: {
                                spaceId: t,
                                userId: n,
                                errorMessage: e
                            }
                        });
                        return
                    }
                    return 0 === r.data.models.length && a(419750).O8(Error("Received empty model list from server"), {
                        from: "AvailableModelsStore.fetch",
                        type: "empty_response",
                        data: {
                            spaceId: t,
                            userId: n
                        }
                    }), r.data.models
                } catch (e) {
                    a(419750).O8(e, {
                        from: "AvailableModelsStore.fetch",
                        type: "error",
                        data: {
                            spaceId: t,
                            userId: n
                        }
                    });
                    return
                }
            }, {
                dontCacheUndefined: !0
            });
            (0, a(202146).exposeDebugValue)("availableAiModelsStore", o)
        },
        336613: (e, t, a) => {
            let n, r;

            function o(e) {
                n = e
            }

            function l(e) {
                r = e
            }

            function i() {
                if (!n) throw Error("configureSubscriptionActions() must be called before using subscription actions");
                return n
            }
            async function s() {
                if (!r) throw Error("configureSubscriptionActionsLazyDeps() must be called before loading lazy deps");
                return r()
            }
            a.d(t, {
                N7: () => s,
                NK: () => o,
                NS: () => l,
                XC: () => i
            }), a(16280)
        },
        398879: (e, t, a) => {
            a.d(t, {
                EG: () => l,
                K5: () => o,
                RH: () => r,
                Yi: () => i,
                ls: () => n
            });
            let n = 32,
                r = 202,
                o = 1e3,
                l = "Want to add a metric? Look for 'src/client/performanceToolbar/config.ts' in notion-next.",
                i = "To disable the toolbar entirely, go to the 'Experiments' panel and look for the 'performance_debugging_toolbar' flag."
        },
        408138: (e, t, a) => {
            a.d(t, {
                X: () => n
            });
            let n = a(546605).Store.createValue({
                shouldReset: !1
            }, {
                name: "MobileAssistantMenuStore"
            })
        },
        469738: (e, t, a) => {
            a.d(t, {
                a: () => x
            });
            var n = a(296540),
                r = a(474848);
            let o = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                l = {
                    k1xSpc: "x78zum5",
                    khm7nJ: "xp1r0qw",
                    k1C7PZ: "xtqikln",
                    kfSwDN: "x87ps6o",
                    kLKAdn: "x96k8nx",
                    kwRFfy: "xv54qhq",
                    kGO01o: "x1a8lsjc",
                    kZCmMZ: "xe2zdcy",
                    krdFHd: "x1i5p2am",
                    kfmiAY: "x1whfx0g",
                    kT0f0o: "xr2y4jy",
                    kVL7Gh: "x1ihp6rs",
                    $$css: !0
                },
                i = {
                    kkrTdU: "x1ypdohk",
                    $$css: !0
                },
                s = {
                    kX8ASl: "xkb36d3",
                    kwv6qe: "xqjjoj2",
                    k4EQJz: "x1kna7tg",
                    kO87eX: "xlh1tma",
                    $$css: !0
                },
                c = {
                    kX8ASl: "x4o2q0i",
                    kwv6qe: "xkmrbco",
                    k4EQJz: "x1v8h2t0",
                    kO87eX: "x1dy7txk",
                    $$css: !0
                },
                d = {
                    kGNEyG: "x6s0dn4",
                    $$css: !0
                },
                u = {
                    kGNEyG: "x1cy8zhl",
                    $$css: !0
                },
                x = n.forwardRef(function({
                    additionalContent: e,
                    description: t,
                    isDisabled: x,
                    isSelected: m,
                    label: b,
                    name: f,
                    onChange: k,
                    width: v,
                    selectorSize: y = "normal",
                    selectAlignXAxis: g = "left",
                    selectAlignYAxis: w = "center",
                    selectType: S = "checkbox",
                    style: j,
                    supportText: A,
                    value: M,
                    colorVariant: C,
                    alignAdditionalContent: $,
                    ...T
                }, E) {
                    let O = (0, n.useId)(),
                        z = m && !x ? s : c,
                        V = {
                            0: {
                                className: "x78zum5"
                            },
                            1: {
                                className: "x78zum5 xr9ek0c"
                            }
                        }["top" === w | 0],
                        B = (0, r.jsxs)(a(4458).fI, {
                            alignItems: "top" === w ? "flex-start" : "center",
                            gap: 12,
                            width: "number" == typeof v ? v : void 0,
                            className: "fill" === v ? "autolayout-fill-width" : void 0,
                            style: o,
                            children: [(0, r.jsx)("div", { ...V,
                                children: (0, r.jsx)(h, {
                                    id: O,
                                    selectType: S,
                                    name: f,
                                    value: M,
                                    onChange: k,
                                    isSelected: m,
                                    selectorSize: y,
                                    isDisabled: x,
                                    ...T
                                })
                            }), (0, r.jsx)(p, {
                                colorVariant: C,
                                description: t,
                                label: b,
                                selectorSize: y,
                                supportText: A,
                                isDisabled: x
                            })]
                        }),
                        D = (0, r.jsxs)(a(4458).fI, {
                            alignItems: "top" === w ? "flex-start" : "center",
                            justifyContent: "center",
                            gap: 12,
                            className: "autolayout-fill-width",
                            style: o,
                            children: [(0, r.jsx)(p, {
                                colorVariant: C,
                                description: t,
                                label: b,
                                selectorSize: y,
                                supportText: A,
                                isDisabled: x
                            }), (0, r.jsx)("div", { ...V,
                                children: (0, r.jsx)(h, {
                                    id: O,
                                    selectType: S,
                                    name: f,
                                    value: M,
                                    onChange: k,
                                    selectorSize: y,
                                    isSelected: m,
                                    isDisabled: x,
                                    ...T
                                })
                            })]
                        }),
                        N = e ? (0, r.jsx)("div", {
                            className: "x2lah0s",
                            children: e
                        }) : null;
                    return (0, r.jsx)("label", {
                        ref: E,
                        ...a(952687).A.props(l, z, "flex-start" === $ ? u : d, !x && i, j),
                        htmlFor: O,
                        children: "left" === g ? (0, r.jsxs)(r.Fragment, {
                            children: [B, N]
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [N, D]
                        })
                    })
                });

            function p(e) {
                let t, {
                    description: n,
                    label: l,
                    supportText: i,
                    selectorSize: s,
                    isDisabled: c,
                    colorVariant: d
                } = e;
                return "large" === s ? t = "pageContentTextBlock" : "normal" === s || void 0 === s ? t = "bodySmMedium" : "small" === s ? t = "captionRegular" : (0, a(722371).HB)(s), (0, r.jsxs)(a(4458).VP, {
                    gap: 4,
                    flex: "1 1 0",
                    style: o,
                    children: [(0, r.jsxs)(a(4458).VP, {
                        gap: 2,
                        style: o,
                        children: [(0, r.jsx)(a(111010).D, {
                            styleKey: t,
                            colorVariant: d || (c ? "disabled" : "primary"),
                            children: l
                        }), n ? (0, r.jsx)(a(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: c ? "disabled" : "secondary",
                            children: n
                        }) : null]
                    }), i ? (0, r.jsx)(a(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "tertiary",
                        children: i
                    }) : null]
                })
            }

            function h(e) {
                let {
                    selectType: t,
                    selectorSize: n = "normal",
                    id: o,
                    name: l,
                    value: i,
                    onChange: s,
                    isSelected: c,
                    isDisabled: d,
                    ...u
                } = e;
                switch (t) {
                    case "radio":
                        return (0, r.jsx)(a(101127).a, {
                            id: o,
                            name: l,
                            value: i,
                            onChange: s,
                            checked: c,
                            disabled: d,
                            selectorSize: n,
                            ...u
                        });
                    case "checkbox":
                        return (0, r.jsx)(a(4458).fI, {
                            minWidth: 18,
                            justifyContent: "center",
                            children: (0, r.jsx)(a(161368).W, {
                                id: o,
                                name: l,
                                value: i,
                                onChange: s,
                                checked: c,
                                disabled: d,
                                selectorSize: n,
                                ...u
                            })
                        });
                    case "none":
                        return null;
                    default:
                        (0, a(722371).HB)(t)
                }
            }
        },
        473182: (e, t, a) => {
            a.d(t, {
                $y: () => l,
                jc: () => o,
                x9: () => r
            }), a(296540);
            var n = a(474848);

            function r() {
                let e = (0, a(682985).K8)(() => {
                    let {
                        editsBlocked: e
                    } = a(177123).A.state;
                    return e ? ? !1
                }, []);
                return (0, a(682985).K8)(() => (0, a(717274).Jq)(), []) && e
            }

            function o() {
                return (0, a(682985).K8)(() => {
                    var e;
                    let t = a(731632).A.state;
                    return null == t || null == (e = t.data) ? void 0 : e.invoiceHostedUrl
                }, [])
            }

            function l() {
                var e, t;
                let r = (0, a(533992).v3)(),
                    l = o(),
                    s = (0, a(682985).K8)(() => {
                        var e;
                        let t = a(731632).A.state;
                        return (null == t || null == (e = t.data) ? void 0 : e.overdueInvoiceCount) ? ? 0
                    }, []),
                    c = (0, a(682985).K8)(() => (0, a(887788).h)(r), [r]),
                    d = (e = c, t = s, e ? t > 1 ? (0, n.jsx)(a(109939).sA, {
                        defaultMessage: "Access to Notion is limited because we couldn’t process {overdueInvoiceCount, plural, one {your last payment} other {{overdueInvoiceCount} payments}}.",
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.multipleInvoicesMessageContent",
                        values: {
                            overdueInvoiceCount: t
                        }
                    }) : (0, n.jsx)(a(109939).sA, {
                        defaultMessage: "Access to Notion is limited because we couldn’t process your last payment",
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.messageContent"
                    }) : (0, n.jsx)(a(109939).sA, {
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.memberMessageContent",
                        defaultMessage: "Access to Notion is limited"
                    })),
                    u = function(e) {
                        if (!e) return (0, n.jsx)(a(109939).sA, {
                            id: "uncollectibleExperience.uncollectibleExperienceOverlay.memberSecondaryLabel",
                            defaultMessage: "Contact a workspace owner to update your workspace’s payment method"
                        })
                    }(c),
                    x = function(e, t, n) {
                        if (t) {
                            let r = (0, a(987954).a)(n);
                            return a => {
                                r && (i(t, e), r(a))
                            }
                        }
                        return n => {
                            i(t, e), a(599754).Ow()
                        }
                    }(r, c, l),
                    p = c ? (0, n.jsx)(a(109939).sA, {
                        defaultMessage: "View unpaid invoice",
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.buttonLabel"
                    }) : (0, n.jsx)(a(109939).sA, {
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.memberButtonLabel",
                        defaultMessage: "View workspace owner"
                    });
                return {
                    clickAction: x,
                    ctaMessage: p,
                    primaryMessage: d,
                    secondaryMessage: u,
                    ctaIcon: c ? a(213458).arrowUpRightSquareIcon : a(11056).personCircleFillIcon,
                    tooltipBodyMessage: c ? p : u,
                    isWorkspaceOwner: c,
                    overdueInvoiceCount: s
                }
            }

            function i(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "subscription_uncollectible_blurred_experience_cta_clicked",
                        eventProperties: {
                            is_workspace_owner: e
                        }
                    }
                })
            }
        },
        515487: (e, t, a) => {
            a.d(t, {
                r: () => o
            });
            var n = a(296540),
                r = a(474848);

            function o({
                loadingMessage: e
            }) {
                let t = (0, a(934877).A)({
                    visibility: !0,
                    delayShow: 400
                });
                return (0, r.jsx)(a(4458).fI, {
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    children: t ? (0, r.jsxs)(n.Fragment, {
                        children: [(0, r.jsx)(a(517334).k, {}), e ? (0, r.jsx)("div", {
                            className: "x13fj5qh x1b8rd1j",
                            children: e
                        }) : void 0]
                    }) : void 0
                })
            }
        },
        517122: (e, t, a) => {
            a.d(t, {
                A: () => n
            });

            function n(e) {
                let t, a, n;
                return async (...r) => t ? (n = r, a) ? a : a = t.then(() => (a = void 0, t = e(...n))) : t = e(...r)
            }
        },
        555676: (e, t, a) => {
            let n;

            function r(e) {
                n = e
            }

            function o() {
                return n
            }
            a.d(t, {
                w: () => r,
                x: () => o
            })
        },
        609328: (e, t, a) => {
            a.d(t, {
                P: () => o
            }), a(944114), a(296540);
            var n = a(474848);
            let r = (0, a(109939).YK)({
                errorStacktraceCopied: {
                    defaultMessage: "Stacktrace copied to clipboard",
                    id: "errorLabel.moreInfo.stacktrace.toast.label"
                }
            });

            function o({
                environment: e,
                title: t,
                ...l
            }) {
                var i, s, c;
                let d = [],
                    u = null == (i = l.error) ? void 0 : i.stack;
                if (u) {
                    let t = globalThis.Meticulous;
                    null != t && t.isRunningAsTest && (null == (s = t.replay) || null == (c = s.terminate) || c.call(s)), d.push({
                        label: "Copy stacktrace",
                        ariaLabel: "Copy error stacktrace to clipboard",
                        onClick: async () => {
                            (await (0, a(969899).Nu)())({
                                environment: e,
                                stringValue: u,
                                htmlValue: `<meta charset='utf-8'><pre><code class="language-bash">${u}
		</code></pre>`,
                                copiedMessage: r.errorStacktraceCopied
                            })
                        }
                    })
                }
                d.push({
                    buttonType: "solid",
                    color: "blue",
                    label: (0, n.jsx)(a(109939).sA, { ...a(647095)._0.dismissButtonLabel
                    }),
                    onAccept: a(763230).D_
                }), a(647095).ui({
                    message: t,
                    description: (0, n.jsx)(a(149795).dD, { ...l
                    }),
                    allowCopy: !0,
                    showCancel: !1,
                    keepFocus: !1,
                    mode: "wide",
                    items: d
                })
            }
        },
        690004: (e, t, a) => {
            a.d(t, {
                r: () => n
            });
            let n = (0, a(477465).Dv)("importEvernote")
        },
        731632: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var n = () => a(546605);
            class r extends n().Store {}
            let o = new r
        },
        796123: (e, t, a) => {
            a.r(t), a.d(t, {
                showAsyncModal: () => r,
                showAsyncModalComponent: () => o,
                testOnly: () => p
            }), a(898992), a(354520), a(672577), a(581454);
            var n = a(296540);

            function r(e, t = a(2009).w) {
                return new Promise((a, n) => {
                    try {
                        let r = d({
                            renderModal: e,
                            promiseResolve: a,
                            promiseReject: n,
                            store: t
                        });
                        l({
                            asyncModal: r,
                            store: t
                        })
                    } catch (e) {
                        n(e)
                    }
                })
            }

            function o(e, t = a(2009).w) {
                return r(t => n.createElement(e, t), t)
            }

            function l(e) {
                let {
                    asyncModal: t,
                    store: n = a(2009).w
                } = e;
                n.update(e => ({
                    asyncModals: [...e.asyncModals, t]
                }))
            }

            function i(e) {
                let {
                    id: t,
                    promiseResolve: n,
                    store: r = a(2009).w
                } = e;
                return e => {
                    let a = u({
                        id: t,
                        store: r
                    });
                    null != a && a.isOpen && (x({
                        id: t,
                        store: r,
                        update: {
                            isOpen: !1
                        }
                    }), n(e))
                }
            }

            function s(e) {
                let {
                    id: t,
                    promiseResolve: n,
                    store: r = a(2009).w
                } = e;
                return () => {
                    let e = u({
                        id: t,
                        store: r
                    });
                    null != e && e.isOpen && (x({
                        id: t,
                        store: r,
                        update: {
                            isOpen: !1
                        }
                    }), n())
                }
            }

            function c(e) {
                let {
                    id: t,
                    store: n = a(2009).w
                } = e;
                return () => {
                    n.update(e => ({
                        asyncModals: e.asyncModals.filter(e => e.id !== t)
                    }))
                }
            }

            function d(e) {
                let {
                    renderModal: t,
                    promiseResolve: n,
                    promiseReject: r,
                    store: o = a(2009).w
                } = e, l = a(92513).JW(), d = c({
                    id: l,
                    store: o
                }), u = s({
                    id: l,
                    promiseResolve: n,
                    store: o
                }), x = i({
                    id: l,
                    promiseResolve: n,
                    store: o
                });
                return {
                    id: l,
                    internalRenderModal: e => {
                        try {
                            return t({
                                isOpen: e,
                                onClosed: d,
                                onDismiss: u,
                                resolve: x
                            })
                        } catch (e) {
                            throw r(e), e
                        }
                    },
                    isOpen: !0
                }
            }

            function u(e) {
                let {
                    id: t,
                    store: n = a(2009).w
                } = e;
                return n.state.asyncModals.find(e => e.id === t)
            }

            function x(e) {
                let {
                    id: t,
                    update: n,
                    store: r = a(2009).w
                } = e;
                r.update(e => ({
                    asyncModals: e.asyncModals.map(e => e.id !== t ? e : { ...e,
                        ...n
                    })
                }))
            }
            let p = {
                addAsyncModal: l,
                createAsyncModal: d,
                createOnClosed: c,
                createOnDismiss: s,
                createResolve: i,
                getAsyncModal: u,
                updateAsyncModal: x
            }
        },
        831957: (e, t, a) => {
            a.d(t, {
                k: () => n
            });

            function n(e, t) {
                let n = a(986939).A.isMobile ? 2 : 3;
                return t.slice(0, n)
            }
        },
        859941: (e, t, a) => {
            a.d(t, {
                a: () => n
            });

            function n() {
                let e = a(381453).XM(["Activities", "Objects", "Travel & Places"]),
                    t = a(753281).A.state.emojiByCategory[e];
                return a(381453).XM(t)
            }
        },
        895732: (e, t, a) => {
            a.d(t, {
                A: () => r,
                x: () => o
            });
            var n = a(296540);

            function r() {
                (0, n.useEffect)(() => {
                    o()
                }, [])
            }
            let o = a(381453).Oo(async function() {
                let e = await a(765035).w.load();
                a(753281).A.setState((0, a(871871).Se)(e))
            })
        },
        930113: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                lockFillSmallIcon: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.24 1.67 9.51 12.3",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.825 4.85a3.175 3.175 0 1 1 6.35 0v1.061a1.95 1.95 0 0 1 1.575 1.914v4.2a1.95 1.95 0 0 1-1.95 1.95H5.2a1.95 1.95 0 0 1-1.95-1.95v-4.2c0-.949.677-1.74 1.575-1.914zm1.1 1.025h4.15V4.85a2.075 2.075 0 0 0-4.15 0zm2.525 4.299a1.05 1.05 0 1 0-.9 0v.976a.45.45 0 0 0 .9 0z"
                    })
                },
                r = (0, a(104509).wt)("lockFillSmall", n, "fillSmall")
        },
        961489: (e, t, a) => {
            function n(e) {
                let {
                    environment: t,
                    preference: n
                } = e, r = (0, a(904434).R$)(t);
                r && (0, a(377796).createAndCommit)({
                    environment: t,
                    userAction: "userSettingsActions.setContrastPreference",
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: r,
                            transaction: e,
                            data: {
                                contrast_preference: n
                            }
                        })
                    }
                })
            }

            function r(e) {
                let t = (0, a(904434).R$)(e);
                return (null == t ? void 0 : t.getSettingsStore().getKeyStore("contrast_preference").getValue()) ? ? "auto"
            }

            function o(e) {
                return void 0 !== (0, a(904434).R$)(e)
            }
            a.d(t, {
                S4: () => n,
                Wu: () => r,
                rD: () => o
            })
        },
        974024: (e, t, a) => {
            a.d(t, {
                f: () => n
            });
            let n = new(a(815048)).O2("pageCovers", async () => {
                let {
                    pageCovers: e
                } = await a.e(40198).then(a.bind(a, 123367));
                return e
            })
        },
        996903: (e, t, a) => {
            a.d(t, {
                i: () => n
            });

            function n(e) {
                let t = e.getSettings(),
                    n = null == t ? void 0 : t.signup_time;
                return n ? (0, a(362008).Mn)(n) : null
            }
        },
        997524: (e, t, a) => {
            a.d(t, {
                lv: () => u,
                C5: () => c,
                u7: () => s,
                uh: () => d
            });
            let n = "theme";

            function r(e, t) {
                var r, o;
                let l, {
                        ThemeStore: i
                    } = e,
                    {
                        mode: c,
                        usingSystemTheme: d
                    } = t;
                if (a(172474)._u) return;
                let u = {
                    mode: c
                };
                i.setState(u), e.mobileNative && e.mobileNative.setTheme(c, d), l = (0, a(632079).O4)({
                    theme: c
                }), r = {
                    mode: c,
                    usingSystemTheme: d,
                    colors: {
                        white: a(632079).oZ.white,
                        blue: l.blue.background.accentPrimary
                    },
                    borderRadius: 4,
                    textColor: l.text.primary,
                    popoverBackgroundColor: l.popoverBackground,
                    popoverBoxShadow: l.shadow.outline.lg,
                    inputBoxShadow: `${l.border.primaryTranslucent} 0 0 0 1px`,
                    inputBackgroundColor: l.background.secondaryTranslucent,
                    dividerColor: l.border.primaryTranslucent,
                    shadowOpacity: 0
                }, null === a(775657).electronApi || void 0 === a(775657).electronApi || null == (o = a(775657).electronApi.setTheme) || o.call(a(775657).electronApi, r);
                try {
                    localStorage.setItem(n, JSON.stringify(u))
                } catch (e) {
                    (0, a(165219).x)({
                        keyId: n,
                        keyValue: JSON.stringify(u),
                        from: "ThemeActions",
                        error: e
                    })
                }
                s(c), "dark" === c ? (document.body.classList.add("dark"), document.body.classList.add("notion-dark-theme")) : (document.body.classList.remove("dark"), document.body.classList.remove("notion-dark-theme"))
            }
            async function o(e) {
                let {
                    mobileNative: t
                } = e, n = "light";
                n = t && t.api.getTheme ? await t.api.getTheme() : (0, a(172474).VD)(e), r(e, {
                    mode: n,
                    usingSystemTheme: !0
                })
            }
            let l = {
                    light: "rgba(0, 0, 0, 0)",
                    dark: "rgba(0, 0, 0, 0)"
                },
                i = {
                    light: "#D3D1CB",
                    dark: "rgba(255, 255, 255, 0.2)"
                };

            function s(e) {
                if (0 === a(190159).A.state) return;
                let t = document.getElementById("scroll-properties");
                t && (t.innerHTML = `
		* {
			scrollbar-width: 15px;
			scrollbar-color: ${i[e]}  ${l[e]};
		}
	`)
            }

            function c(e) {
                a(199162).A.setState(e)
            }

            function d(e) {
                let t = u();
                switch (t) {
                    case "dark":
                    case "light":
                        r(e, {
                            mode: t,
                            usingSystemTheme: !1
                        });
                        break;
                    case "system":
                        o(e);
                        break;
                    default:
                        (0, a(722371).HB)(t)
                }
            }

            function u() {
                var e;
                return "dark" === (e = a(199162).A.state || "system") || "light" === e || "system" === e ? e : "system"
            }
        }
    }
]);