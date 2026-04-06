"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [23644, 28463, 35905, 43239, 87196], {
        6260: (e, t, i) => {
            i.d(t, {
                Z: () => r
            }), i(296540);
            var n = i(474848);
            let a = {
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
                r = (0, i(104509).wt)("browserMagnifyingGlass", a, "default")
        },
        11255: (e, t, i) => {
            i.d(t, {
                qB: () => a,
                sq: () => n
            });
            let n = ["favorite", "edit", "writeInsert", "create", "thinkAskChat", "findSearch", "custom", "notionActions", "recent", "databaseAgent"],
                a = ["improve_writing", "fix_spelling_grammar", "explain_this", "reformat", "create_daily_brief"]
        },
        49204: (e, t, i) => {
            i.d(t, {
                J: () => n,
                X: () => a
            });
            let n = [function(e) {
                    var t, n;
                    return (0, i(576348).ZE)(e.publicEditMode, (null == (t = e.blocks) ? void 0 : t.length) === 1 ? e.blocks[0] : null == (n = e.pageContext) ? void 0 : n.pageStore)
                }, i(998256).p, (0, i(572251).A)(i(287310).J)],
                a = [...n, (0, i(572251).A)(i(99378).v), (0, i(572251).A)(i(183205).y), function(e) {
                    return e.blocks.length > 0
                }]
        },
        80384: (e, t, i) => {
            i.d(t, {
                MG: () => r,
                T1: () => a,
                a1: () => c,
                dt: () => o,
                kg: () => l,
                lC: () => s,
                n_: () => d
            });
            var n = i(296540);
            let a = new(i(815048)).O2("PerformanceToolbar", () => Promise.all([i.e(39225), i.e(45624)]).then(i.bind(i, 476932))),
                r = (0, i(815048)._h)(a, e => e.PerformanceToolbar),
                o = (0, i(815048)._h)(a, e => e.PerformanceToolbarSettings);

            function l() {
                let e = (0, i(533992).v3)();
                return (0, i(682985).K8)(() => (0, i(186452).D)(e, e.RouterStore.state), [e])
            }

            function d() {
                let e = (0, i(533992).v3)(),
                    t = u("performanceToolbarStore"),
                    n = u("isPerformanceToolbarVisible");
                return (0, i(682985).K8)(() => !!t && !!n && n(e, e.RouterStore.state, t.state), [n, e, t])
            }

            function s() {
                let e = u("performanceToolbarStore");
                return (0, i(682985).K8)(() => !!e && e.state.isPerformanceToolbarMounted, [e])
            }

            function c() {
                let e = (0, i(533992).v3)(),
                    t = u("createPerformanceToolbarMouseListeners"),
                    a = u("performanceToolbarStore"),
                    {
                        sidebarExpanded: r,
                        sidebarWidth: o,
                        secondarySidebarExpanded: l,
                        secondarySidebarWidth: d,
                        updateSidebarExpanded: s,
                        updateSidebarWidth: c
                    } = (0, i(682985).K8)(() => ({
                        sidebarExpanded: i(984858).sidebarExpandedStore.state,
                        sidebarWidth: i(984858).sidebarWidthStore.state,
                        secondarySidebarExpanded: i(550830).default.isOpen(),
                        secondarySidebarWidth: i(515492).Ay.getWidth(),
                        updateSidebarExpanded: i(449473).B8.state.expanded,
                        updateSidebarWidth: i(449473).B8.state.width
                    }), []);
                return (0, n.useEffect)(() => {
                    if (a && t) return t({
                        environment: e,
                        setMouseNearPerformanceToolbar: e => a.update(t => ({ ...t,
                            isMouseNearPerformanceToolbar: e
                        })),
                        sidebarExpanded: r,
                        sidebarWidth: o,
                        secondarySidebarExpanded: l,
                        secondarySidebarWidth: d,
                        updateSidebarExpanded: s,
                        updateSidebarWidth: c
                    })
                }, [t, e, a, r, o, l, d, s, c])
            }

            function u(e) {
                let t = l(),
                    [{
                        value: n
                    }] = (0, i(97668).Yb)(() => t ? a.load().then(t => t[e]) : Promise.resolve(void 0), [e, t]);
                return n
            }
        },
        85071: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => n,
                integrationIcon: () => a
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                a = (0, i(104509).wt)("integration", n, "default")
        },
        93042: (e, t, i) => {
            i.r(t), i.d(t, {
                checkmarkCircleFillIcon: () => a,
                iconDefinition: () => n
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0m10.5-2.018a.625.625 0 1 0-1.071-.644L9.25 11.595 7.815 9.92a.625.625 0 0 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                    })
                },
                a = (0, i(104509).wt)("checkmarkCircleFill", n, "fill")
        },
        99378: (e, t, i) => {
            i.d(t, {
                v: () => n
            }), i(898992), i(737550);

            function n(e) {
                return e.blocks.some(e => {
                    let t = (0, i(330870).a)();
                    return !!(t && (0, i(335818).fc)(t) || (0, i(444285).S)(t) && null != t && t.uiContains(e) && t !== e)
                })
            }
        },
        101127: (e, t, i) => {
            i.d(t, {
                a: () => a
            }), i(296540);
            var n = i(474848);

            function a(e) {
                let {
                    disabled: t,
                    checked: i,
                    selectorSize: a,
                    ...r
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("input", {
                        type: "radio",
                        checked: i,
                        disabled: t,
                        ...{
                            0: {
                                className: "x-default-marker xg01cxk x1ypdohk xtgyt42 x67bb7w xaqnwrm x1xp8n7a xmix8c7"
                            },
                            1: {
                                className: "x-default-marker xg01cxk x1ypdohk xtgyt42 x67bb7w xaqnwrm x6jxa94 x1v9usgg"
                            }
                        }["small" === a | 0],
                        ...r
                    }), (0, n.jsx)("span", {
                        className: "x10l6tqk x78zum5 x1a00udw xx3o462 x123j3cw x1gabggj xs9asl8 xaso8d8 xr9ek0c xnnr8r xjpr12u xwklpps xl56j7k x6s0dn4 x3pnbk8 xfex06f x2lah0s x1c9tyrk xeusxvb x1pahc9y x1ertn4p x19dvpgm x47corl xdvhukp x19co3pv x1b9t0dy x14j0lww x1ug14d3 x1v0fp5g xo5oljs xd54fh8 x19o3z4c x1phxbvn x13wbzba x1nvdgag x1s928wv xzkji8o x13r0tq7 x1bv6n7p x1wdn0qd x1cm9i5h x12o4cpz x1rrhjjp xdxfgz"
                    })]
                })
            }
        },
        103499: (e, t, i) => {
            i.r(t), i.d(t, {
                filterSmallIcon: () => a,
                iconDefinition: () => n
            }), i(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.69 3.69 12.61 8.61",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M2.4 3.7a.7.7 0 1 0 0 1.4h11.2a.7.7 0 1 0 0-1.4zm9.5 3.594H4.1a.7.7 0 1 0 0 1.4h7.8a.7.7 0 1 0 0-1.4M5.8 10.9a.7.7 0 1 0 0 1.4h4.4a.7.7 0 1 0 0-1.4z"
                    })
                },
                a = (0, i(104509).wt)("filterSmall", n, "small")
        },
        129593: (e, t, i) => {
            i.d(t, {
                CP: () => n
            }), (0, i(722371).qb)()(["openai-gpt-4o", "openai-gpt-4o-mini", "openai-turbo", "openai-chatgpt-4o-latest", "openai-o1", "openai-o1-mini", "openai-o3-mini", "openai-gpt-4.1", "openai-gpt-4.1-mini", "openai-gpt-4.1-nano", "openai-gpt-5-mini", "openai-gpt-5-nano", "openai-o3", "openai-o4-mini", "openai-turbo-thinking", "openai-turbo-minimal-thinking", "openai-turbo-10", "openai-turbo-8", "orange-tart", "orange-tart-minimal-thinking"]), (0, i(722371).qb)()(["anthropic-sonnet-4", "anthropic-sonnet-3.7", "anthropic-sonnet-3.7-thinking", "anthropic-opus", "anthropic-sonnet-4-thinking", "anthropic-opus-4", "anthropic-opus-4-thinking", "anthropic-opus-4.1", "anthropic-opus-4.1-thinking", "anthropic-sonnet-alt", "anthropic-sonnet-alt-no-thinking", "anthropic-sonnet-alt-thinking", "anthropic-haiku-4.5", "anthropic-haiku-4.5-thinking", "apple-danish"]), (0, i(722371).qb)()(["vertex-gemini-1.5-pro", "vertex-gemini-1.5-flash", "vertex-gemini-2.0-flash", "vertex-gemini-2.5-pro", "vertex-gemini-2.5-flash", "gemini-pro", "gemini-flash", "gateau-roule", "gateau-roule-low-thinking"]), (0, i(722371).qb)()(["fireworks-llama3-70b", "fireworks-deepseek-r1", "fireworks-llama3.1-405b", "fireworks-llama3.1-70b", "fireworks-llama3.3-70b", "fireworks-llama3.3-70b-dedicated", "fireworks-llama3.3-70b-dedicated-multiregion", "fireworks-llama3.1-8b", "fireworks-mixtral-22b", "fireworks-mixtral-7b", "fireworks-ft-router-101", "fireworks-ft-router-102", "fireworks-deepseek-v3", "fireworks-deepseek-r1-0528", "fireworks-kimi-k2", "fireworks-kimi-k2.5", "fireworks-minimax-m2.5", "fireworks-glm-5", "pi-fireworks-glm-5", "fireworks-gpt-oss-20b", "fireworks-gpt-oss-120b", "fireworks-gpt-oss-safeguard-120b", "fireworks-llama-8b-finetune-v07-p50-cru6bgc4"]), (0, i(722371).qb)()(["groq-gemma2-9b-it", "groq-gemma-7b-it", "groq-llama-70b", "groq-llama-8b", "groq-mixtral"]), (0, i(722371).qb)()(["bedrock-nova-pro", "bedrock-nova-lite", "bedrock-nova-micro"]), (0, i(722371).qb)()(["bedrock-anthropic-sonnet-3.7"]), (0, i(722371).qb)()(["cerebras-llama3.1-8b", "cerebras-llama3.3-70b", "cerebras-deepseek-r1-distill-llama-70b", "cerebras-gpt-oss-120b"]), (0, i(722371).qb)()(["cinder-kite"]), (0, i(722371).qb)()(["anyscale-gpt-oss-safeguard-20b"]), (0, i(722371).qb)()(["baseten-kimi-k2.5"]);
            let n = (0, i(722371).qb)()(["custom-openai-slot-1", "custom-openai-slot-2", "custom-openai-slot-3", "custom-openai-slot-4", "custom-openai-slot-5", "custom-anthropic-slot-1", "custom-anthropic-slot-2", "custom-anthropic-slot-3", "custom-anthropic-slot-4", "custom-anthropic-slot-5"]);
            (0, i(722371).qb)()(["oatmeal-cookie", "pi-openai-gpt-5.2", "oatmeal-cookie-medium-thinking", "oatmeal-cookie-high-thinking", "oatmeal-cake", "oval-kumquat", "oval-kumquat-medium", "oval-kumquat-high", "oregon-grape-low", "oregon-grape-medium", "oregon-grape-high", "otaheite-apple-low", "otaheite-apple-medium", "otaheite-apple-high", "oreo-cheesecake", "old-fashioned-donut", "gingerbread", "pi-gemini-3.1-pro", "avocado-froyo-max", "avocado-froyo-high", "avocado-froyo-medium", "avocado-froyo-low", "almond-croissant-max", "almond-croissant-high", "almond-croissant-medium", "almond-croissant-low", "pi-anthropic-sonnet-4.6", "pi-anthropic-opus-4.6", "pi-fireworks-glm-5", "gpt-5.3-codex", "gpt-5.2-codex", "gpt-5.1-codex-max", "gpt-5.1-codex", "galette", "galette-low-thinking", "galette-medium-thinking"])
        },
        140758: (e, t, i) => {
            i.d(t, {
                R: () => r
            }), i(296540);
            var n = i(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 2.62 15.26 15.26",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M8.875 5.75c.345 0 .625.28.625.625V8.25h1.875a.625.625 0 1 1 0 1.25H9.5v1.875a.625.625 0 1 1-1.25 0V9.5H6.375a.625.625 0 1 1 0-1.25H8.25V6.375c0-.345.28-.625.625-.625"
                        }), (0, n.jsx)("path", {
                            d: "M8.875 2.625a6.25 6.25 0 1 0 3.955 11.09l3.983 3.982a.625.625 0 1 0 .884-.884l-3.983-3.982a6.25 6.25 0 0 0-4.84-10.205m-5 6.25a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
                        })]
                    })
                },
                r = (0, i(104509).wt)("magnifyingGlassPlus", a, "default")
        },
        141973: (e, t, i) => {
            i.d(t, {
                Di: () => l,
                G1: () => r,
                PB: () => o,
                iH: () => c,
                kG: () => s,
                mA: () => d,
                qR: () => u,
                r2: () => a,
                w_: () => n
            });
            let n = 10,
                a = 32,
                r = 36,
                o = 220,
                l = 44,
                d = 5,
                s = 20,
                c = 8,
                u = 5
        },
        153262: (e, t, i) => {
            i.d(t, {
                Jg: () => a,
                bM: () => n,
                hG: () => r,
                ic: () => o
            });
            let n = "150ms ease";

            function a() {
                return {
                    borderRadius: 6
                }
            }
            let r = i(986939).A.isMobile ? {} : { ...a(),
                display: "flex",
                marginInlineStart: 0,
                marginInlineEnd: 0,
                transition: `background ${n}`
            };

            function o() {
                return {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8
                }
            }
        },
        154911: (e, t, i) => {
            i.d(t, {
                K: () => n
            });

            function n() {
                return [(0, i(828294).a)("agent_writer") ? "commandAltJ" : "commandJ"]
            }
        },
        161368: (e, t, i) => {
            i.d(t, {
                W: () => h
            }), i(296540);
            var n = i(474848);
            let a = {
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
                r = {
                    kzqmXN: "x10vfzb2",
                    kZKoxP: "x6w4g8m",
                    krdFHd: "xkqq1k2",
                    kfmiAY: "x91jh78",
                    kT0f0o: "x1xkn691",
                    kVL7Gh: "x4oqio7",
                    $$css: !0
                },
                o = {
                    kzqmXN: "x1a00udw",
                    kZKoxP: "xx3o462",
                    krdFHd: "xr9e8f9",
                    kfmiAY: "x1e4oeot",
                    kT0f0o: "x1ui04y5",
                    kVL7Gh: "x6en5u8",
                    $$css: !0
                },
                l = {
                    kGVxlE: "x1wivvx4",
                    kC7eKd: "x1y1zhng x19foi3z",
                    $$css: !0
                },
                d = {
                    kGVxlE: "x13bgxqi",
                    kC7eKd: "xu4q3vz",
                    $$css: !0
                },
                s = {
                    kGVxlE: "x14j0lww",
                    kC7eKd: "xd54fh8 xkllkjw",
                    $$css: !0
                },
                c = {
                    kGVxlE: "x13bgxqi",
                    kC7eKd: "xd54fh8",
                    $$css: !0
                },
                u = {
                    kGVxlE: "x9wfp6s",
                    kI3sdo: "xdvhukp",
                    $$css: !0
                },
                p = {
                    kSiTet: "xg01cxk",
                    $$css: !0
                },
                g = {
                    kzqmXN: "x1xp8n7a",
                    kZKoxP: "xmix8c7",
                    $$css: !0
                },
                m = {
                    kfzvcC: "x47corl",
                    $$css: !0
                },
                f = {
                    kkrTdU: "x1ypdohk",
                    $$css: !0
                };

            function h(e) {
                let {
                    selectorSize: t = "normal",
                    style: h,
                    className: x,
                    ...y
                } = e, {
                    disabled: b,
                    checked: v
                } = y, [k, S] = (0, i(768397).s)();
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("input", {
                        ref: k,
                        type: "checkbox",
                        ...y,
                        ...i(952687).A.props(p, "large" === t && g, b ? m : f, h, void 0 !== x && {
                            $$css: !0,
                            className: x
                        })
                    }), (0, n.jsx)("span", { ...i(952687).A.props(a, "large" === t ? o : r, v ? b ? d : l : b ? c : s, S && u),
                        children: v ? (0, n.jsx)(i(16275).I, {
                            icon: i(20413).checkmarkFillSmallIcon,
                            colorPalette: "blue",
                            colorVariant: "inversePrimary",
                            size: "large" === t ? "xs" : "xxs"
                        }) : void 0
                    })]
                })
            }
        },
        183205: (e, t, i) => {
            i.d(t, {
                y: () => n
            }), i(898992), i(737550);

            function n(e) {
                return e.blocks.some(i(574676).u)
            }
        },
        186452: (e, t, i) => {
            i.d(t, {
                D: () => n
            });

            function n(e, t) {
                return t.route.name, !1
            }
        },
        199894: (e, t, i) => {
            i.d(t, {
                t: () => n
            }), i(16280), i(898992), i(672577), i(581454);

            function n(e) {
                let {
                    environment: t,
                    selection: n,
                    transaction: a,
                    preventSetSelection: r
                } = e, {
                    blocks: o
                } = e, l = (0, i(385941).Z)();
                if (!l) throw Error("No root store.");
                if (n.length > 0) {
                    let e = n[0],
                        l = i(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!l || !l.props.onInsertAbove) throw Error("No Selectable found.");
                    let d = l.props.onInsertAbove({
                        insertStores: o,
                        transaction: a
                    });
                    return r || (0, i(854924).t)({
                        environment: t,
                        stores: d
                    }), d
                } {
                    let e = l.getContentStore(),
                        n = o.map(t => (0, i(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: a
                        }).childStore);
                    return r || (0, i(854924).t)({
                        environment: t,
                        stores: n
                    }), n
                }
            }
        },
        229820: (e, t, i) => {
            i.d(t, {
                AH: () => a,
                B9: () => r,
                G2: () => l,
                Js: () => d,
                pk: () => o,
                tv: () => s
            }), i(898992), i(354520), i(581454);
            let n = i(426048).di.filter(e => !(0, i(722371).Xk)(i(129593).CP, e.notionName)),
                a = n.filter(e => "fast" === e.displayGroup).map(e => e.notionName),
                r = n.filter(e => "intelligent" === e.displayGroup).map(e => e.notionName),
                o = [...a, ...r];

            function l(e) {
                switch (e) {
                    case "openai":
                        return {
                            buttonColor: "gray",
                            textColor: "gray"
                        };
                    case "anthropic":
                        return {
                            buttonColor: "orange",
                            textColor: "orange"
                        };
                    default:
                        return
                }
            }
            let d = (0, i(109939).YK)({
                default: {
                    id: "UnifiedModelPicker.default",
                    defaultMessage: "Auto"
                },
                "baseten-kimi-k2.5": {
                    id: "UnifiedModelPicker.basetenKimiK25",
                    defaultMessage: "Kimi K2.5 (Baseten)"
                },
                "fireworks-kimi-k2.5": {
                    id: "UnifiedModelPicker.fireworks-kimi-k2.5",
                    defaultMessage: "Kimi K2.5 (Fireworks)"
                },
                "fireworks-minimax-m2.5": {
                    id: "UnifiedModelPicker.fireworks-minimax-m2.5",
                    defaultMessage: "MiniMax M2.5 (Fireworks)"
                },
                "fireworks-glm-5": {
                    id: "UnifiedModelPicker.fireworks-glm-5",
                    defaultMessage: "GLM-5 (Fireworks)"
                },
                "anthropic-sonnet-4": {
                    id: "UnifiedModelPicker.anthropic-sonnet-4",
                    defaultMessage: "Claude 4 Sonnet"
                },
                "anthropic-sonnet-4-thinking": {
                    id: "UnifiedModelPicker.anthropic-sonnet-4-thinking",
                    defaultMessage: "Claude 4 Sonnet with thinking"
                },
                "anthropic-sonnet-3.7": {
                    id: "UnifiedModelPicker.anthropic-sonnet-3.7",
                    defaultMessage: "Claude 3.7 Sonnet"
                },
                "anthropic-sonnet-3.7-thinking": {
                    id: "UnifiedModelPicker.anthropic-sonnet-3.7-thinking",
                    defaultMessage: "Claude 3.7 Sonnet with thinking"
                },
                "anthropic-opus-4": {
                    id: "UnifiedModelPicker.anthropic-opus-4",
                    defaultMessage: "Claude 4 Opus"
                },
                "anthropic-opus-4-thinking": {
                    id: "UnifiedModelPicker.anthropic-opus-4-thinking",
                    defaultMessage: "Claude 4 Opus with thinking"
                },
                "anthropic-opus-4.1": {
                    id: "UnifiedModelPicker.anthropic-opus-4.1",
                    defaultMessage: "Claude 4.1 Opus"
                },
                "anthropic-opus-4.1-thinking": {
                    id: "UnifiedModelPicker.anthropic-opus-4.1-thinking",
                    defaultMessage: "Claude 4.1 Opus with thinking"
                },
                "anthropic-sonnet-alt": {
                    id: "UnifiedModelPicker.anthropicSonnetAlt",
                    defaultMessage: "Claude Sonnet 4.5"
                },
                "anthropic-sonnet-alt-no-thinking": {
                    id: "UnifiedModelPicker.anthropicSonnetAltNoThinking",
                    defaultMessage: "Claude Sonnet 4.5"
                },
                "anthropic-sonnet-alt-thinking": {
                    id: "UnifiedModelPicker.anthropicSonnetAltThinking",
                    defaultMessage: "Claude Sonnet (dev only) with thinking"
                },
                "openai-gpt-4.1": {
                    id: "UnifiedModelPicker.openai",
                    defaultMessage: "OpenAI GPT-4.1"
                },
                "openai-gpt-4.1-mini": {
                    id: "UnifiedModelPicker.openaiMini",
                    defaultMessage: "OpenAI GPT-4.1 Mini"
                },
                "openai-gpt-5-mini": {
                    id: "UnifiedModelPicker.openaiGpt5Mini",
                    defaultMessage: "OpenAI GPT-5 Mini"
                },
                "openai-gpt-5-nano": {
                    id: "UnifiedModelPicker.openaiGpt5Nano",
                    defaultMessage: "OpenAI GPT-5 Nano"
                },
                "openai-o4-mini": {
                    id: "UnifiedModelPicker.openaiO4Mini",
                    defaultMessage: "OpenAI o4-mini"
                },
                "gemini-pro": {
                    id: "UnifiedModelPicker.geminiPro",
                    defaultMessage: "Gemini 2.5 Pro"
                },
                galette: {
                    id: "UnifiedModelPicker.galette",
                    defaultMessage: "Gemini 3.1 Pro (High)"
                },
                "galette-low-thinking": {
                    id: "UnifiedModelPicker.galetteLowThinking",
                    defaultMessage: "Gemini 3.1 Pro (Low)"
                },
                "galette-medium-thinking": {
                    id: "UnifiedModelPicker.galetteMediumThinking",
                    defaultMessage: "Gemini 3.1 Pro"
                },
                "gemini-flash": {
                    id: "UnifiedModelPicker.geminiFlash",
                    defaultMessage: "Gemini 2.5 Flash"
                },
                "openai-turbo": {
                    id: "UnifiedModelPicker.openaiTurbo",
                    defaultMessage: "OpenAI GPT-5"
                },
                "openai-turbo-thinking": {
                    id: "UnifiedModelPicker.openaiTurboThinking",
                    defaultMessage: "OpenAI GPT-5 with thinking"
                },
                "openai-turbo-minimal-thinking": {
                    id: "UnifiedModelPicker.openaiTurboMinimalThinking",
                    defaultMessage: "OpenAI GPT-5 + minimal CoT"
                },
                "openai-turbo-10": {
                    id: "UnifiedModelPicker.openaiTurbo10",
                    defaultMessage: "OpenAI GPT-5 + juice@10"
                },
                "openai-turbo-8": {
                    id: "UnifiedModelPicker.openaiTurbo8",
                    defaultMessage: "OpenAI GPT-5 + juice@8"
                },
                "anthropic-haiku-4.5": {
                    id: "UnifiedModelPicker.anthropicHaiku4Point5",
                    defaultMessage: "Claude Haiku 4.5"
                },
                "anthropic-haiku-4.5-thinking": {
                    id: "UnifiedModelPicker.anthropicHaiku4Point5Thinking",
                    defaultMessage: "Claude Haiku 4.5 with thinking"
                },
                "apple-danish": {
                    id: "UnifiedModelPicker.appleDanish",
                    defaultMessage: "Claude Opus 4.5"
                },
                "orange-tart": {
                    id: "UnifiedModelPicker.openaiOrangeTart",
                    defaultMessage: "OpenAI GPT-5.1"
                },
                "orange-tart-minimal-thinking": {
                    id: "UnifiedModelPicker.openaiOrangeTartMinimalThinking",
                    defaultMessage: "OpenAI GPT-5.1 + minimal CoT"
                },
                "gateau-roule": {
                    id: "UnifiedModelPicker.gateauRoule",
                    defaultMessage: "Gemini 3 Pro"
                },
                "gateau-roule-low-thinking": {
                    id: "UnifiedModelPicker.gateauRouleLowThinking",
                    defaultMessage: "Gemini 3 Pro (Low Thinking)"
                },
                gingerbread: {
                    id: "UnifiedModelPicker.gingerbread",
                    defaultMessage: "Gemini 3 Flash"
                },
                "avocado-froyo-max": {
                    id: "UnifiedModelPicker.avocadoFroyoMax",
                    defaultMessage: "Opus 4.6 (Max)"
                },
                "avocado-froyo-high": {
                    id: "UnifiedModelPicker.avocadoFroyoHigh",
                    defaultMessage: "Opus 4.6 (High)"
                },
                "avocado-froyo-medium": {
                    id: "UnifiedModelPicker.avocadoFroyoMedium",
                    defaultMessage: "Opus 4.6 (Medium)"
                },
                "avocado-froyo-low": {
                    id: "UnifiedModelPicker.avocadoFroyoLow",
                    defaultMessage: "Opus 4.6 (Low)"
                },
                "almond-croissant-max": {
                    id: "UnifiedModelPicker.almondCroissantMax",
                    defaultMessage: "Sonnet 4.6 (Max)"
                },
                "almond-croissant-high": {
                    id: "UnifiedModelPicker.almondCroissantHigh",
                    defaultMessage: "Sonnet 4.6 (High)"
                },
                "almond-croissant-medium": {
                    id: "UnifiedModelPicker.almondCroissantMedium",
                    defaultMessage: "Sonnet 4.6 (Medium)"
                },
                "almond-croissant-low": {
                    id: "UnifiedModelPicker.almondCroissantLow",
                    defaultMessage: "Sonnet 4.6 (Low)"
                },
                "oatmeal-cookie": {
                    id: "UnifiedModelPicker.oatmealCookie",
                    defaultMessage: "GPT 5.2"
                },
                "pi-openai-gpt-5.2": {
                    id: "UnifiedModelPicker.piOpenAiGpt52",
                    defaultMessage: "Pi GPT 5.2"
                },
                "pi-anthropic-sonnet-4.6": {
                    id: "UnifiedModelPicker.piAnthropicSonnet46",
                    defaultMessage: "Pi Sonnet 4.6"
                },
                "pi-anthropic-opus-4.6": {
                    id: "UnifiedModelPicker.piAnthropicOpus46",
                    defaultMessage: "Pi Opus 4.6"
                },
                "pi-gemini-3.1-pro": {
                    id: "UnifiedModelPicker.piGemini31Pro",
                    defaultMessage: "Pi Gemini 3.1 Pro"
                },
                "pi-fireworks-glm-5": {
                    id: "UnifiedModelPicker.piFireworksGlm5",
                    defaultMessage: "Pi GLM-5"
                },
                "oatmeal-cake": {
                    id: "UnifiedModelPicker.oatmealCake",
                    defaultMessage: "Oatmeal Cake"
                },
                "oval-kumquat": {
                    id: "UnifiedModelPicker.ovalKumquat",
                    defaultMessage: "Oval Kumquat"
                },
                "oval-kumquat-medium": {
                    id: "UnifiedModelPicker.ovalKumquatMedium",
                    defaultMessage: "Oval Kumquat (Medium)"
                },
                "oval-kumquat-high": {
                    id: "UnifiedModelPicker.ovalKumquatHigh",
                    defaultMessage: "Oval Kumquat (High)"
                },
                "oregon-grape-low": {
                    id: "UnifiedModelPicker.oregonGrapeLow",
                    defaultMessage: "Oregon Grape (Low)"
                },
                "oregon-grape-medium": {
                    id: "UnifiedModelPicker.oregonGrapeMedium",
                    defaultMessage: "Oregon Grape (Medium)"
                },
                "oregon-grape-high": {
                    id: "UnifiedModelPicker.oregonGrapeHigh",
                    defaultMessage: "Oregon Grape (High)"
                },
                "otaheite-apple-low": {
                    id: "UnifiedModelPicker.otaheiteAppleLow",
                    defaultMessage: "Otaheite Apple (Low)"
                },
                "otaheite-apple-medium": {
                    id: "UnifiedModelPicker.otaheiteAppleMedium",
                    defaultMessage: "Otaheite Apple (Medium)"
                },
                "otaheite-apple-high": {
                    id: "UnifiedModelPicker.otaheiteAppleHigh",
                    defaultMessage: "Otaheite Apple (High)"
                },
                "cinder-kite": {
                    id: "UnifiedModelPicker.cinderKite",
                    defaultMessage: "Engram 1"
                },
                "gpt-5.2-codex": {
                    id: "UnifiedModelPicker.gpt52Codex",
                    defaultMessage: "GPT-5.2 Codex"
                },
                "gpt-5.3-codex": {
                    id: "UnifiedModelPicker.gpt53Codex",
                    defaultMessage: "GPT-5.3 Codex"
                },
                "oatmeal-cookie-medium-thinking": {
                    id: "UnifiedModelPicker.gpt52MediumThinking",
                    defaultMessage: "GPT-5.2 Medium"
                },
                "oatmeal-cookie-high-thinking": {
                    id: "UnifiedModelPicker.gpt52HighThinking",
                    defaultMessage: "GPT-5.2 High"
                },
                "gpt-5.1-codex-max": {
                    id: "UnifiedModelPicker.gpt51CodexMax",
                    defaultMessage: "GPT-5.1 Codex Max"
                },
                "gpt-5.1-codex": {
                    id: "UnifiedModelPicker.gpt51Codex",
                    defaultMessage: "GPT-5.1 Codex"
                },
                "custom-openai-slot-1": {
                    id: "UnifiedModelPicker.eapOpenaiSlot1",
                    defaultMessage: "unconfigured-openai-slot-1"
                },
                "custom-openai-slot-2": {
                    id: "UnifiedModelPicker.eapOpenaiSlot2",
                    defaultMessage: "unconfigured-openai-slot-2"
                },
                "custom-openai-slot-3": {
                    id: "UnifiedModelPicker.eapOpenaiSlot3",
                    defaultMessage: "unconfigured-openai-slot-3"
                },
                "custom-openai-slot-4": {
                    id: "UnifiedModelPicker.eapOpenaiSlot4",
                    defaultMessage: "unconfigured-openai-slot-4"
                },
                "custom-openai-slot-5": {
                    id: "UnifiedModelPicker.eapOpenaiSlot5",
                    defaultMessage: "unconfigured-openai-slot-5"
                },
                "custom-anthropic-slot-1": {
                    id: "UnifiedModelPicker.eapAnthropicSlot1",
                    defaultMessage: "unconfigured-anthropic-slot-1"
                },
                "custom-anthropic-slot-2": {
                    id: "UnifiedModelPicker.eapAnthropicSlot2",
                    defaultMessage: "unconfigured-anthropic-slot-2"
                },
                "custom-anthropic-slot-3": {
                    id: "UnifiedModelPicker.eapAnthropicSlot3",
                    defaultMessage: "unconfigured-anthropic-slot-3"
                },
                "custom-anthropic-slot-4": {
                    id: "UnifiedModelPicker.eapAnthropicSlot4",
                    defaultMessage: "unconfigured-anthropic-slot-4"
                },
                "custom-anthropic-slot-5": {
                    id: "UnifiedModelPicker.eapAnthropicSlot5",
                    defaultMessage: "unconfigured-anthropic-slot-5"
                },
                fastSection: {
                    id: "UnifiedModelPicker.fastSection",
                    defaultMessage: "Fast (Workspace context, dev only)"
                },
                agentModelSection: {
                    id: "UnifiedModelPicker.agentModelSection",
                    defaultMessage: "Choose a model"
                },
                intelligentSection: {
                    id: "UnifiedModelPicker.intelligentSection",
                    defaultMessage: "Intelligent (Workspace context, dev only)"
                },
                agentIntelligentSection: {
                    id: "UnifiedModelPicker.agentIntelligentSection",
                    defaultMessage: "Intelligent models"
                }
            });

            function s(e, t) {
                return (0, i(722371).O)(d, e) ? t.formatMessage(d[e]) : e
            }
        },
        248791: (e, t, i) => {
            i.d(t, {
                lz: () => a,
                nO: () => n,
                wl: () => r
            });
            let n = {
                    chatSidebar: new(i(815048)).O2("chatSidebar", () => Promise.all([i.e(75134), i.e(9773), i.e(55373), i.e(36192), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(16471), i.e(37353), i.e(18965), i.e(85142), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(12560), i.e(88268), i.e(39726), i.e(42534), i.e(86662), i.e(6212), i.e(29663), i.e(28482), i.e(14369), i.e(56308), i.e(75136), i.e(98175), i.e(83490), i.e(58360), i.e(12690), i.e(68583), i.e(35602), i.e(12024), i.e(95969), i.e(22195), i.e(65441), i.e(44903), i.e(3456), i.e(28463), i.e(2703)]).then(i.bind(i, 827778))),
                    chatSidebarActions: new(i(815048)).O2("chatSidebarActions", async () => await i.e(87196).then(i.bind(i, 358667))),
                    chatSidebarHelpers: new(i(815048)).O2("chatSidebarHelpers", async () => await Promise.resolve().then(i.bind(i, 548124))),
                    chatSidebarModeButton: new(i(815048)).O2("chatSidebarModeButton", async () => await Promise.all([i.e(9773), i.e(55373), i.e(36192), i.e(96346), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(43444), i.e(23979), i.e(64696), i.e(48486), i.e(76135), i.e(76298), i.e(23644), i.e(94814)]).then(i.bind(i, 471286))),
                    dockedSidebar: new(i(815048)).O2("dockedSidebar", async () => await Promise.all([i.e(75134), i.e(9773), i.e(55373), i.e(36192), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(16471), i.e(37353), i.e(18965), i.e(85142), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(12560), i.e(88268), i.e(39726), i.e(42534), i.e(86662), i.e(6212), i.e(29663), i.e(28482), i.e(14369), i.e(56308), i.e(75136), i.e(98175), i.e(83490), i.e(58360), i.e(12690), i.e(68583), i.e(35602), i.e(12024), i.e(95969), i.e(22195), i.e(65441), i.e(44903), i.e(3456), i.e(28463)]).then(i.bind(i, 707709)))
                },
                a = (0, i(815048)._h)(n.chatSidebar, e => e.ChatSidebar),
                r = (0, i(815048)._h)(n.chatSidebarModeButton, e => e.ChatSidebarModeButtonPopupContents)
        },
        250943: (e, t, i) => {
            i.d(t, {
                E: () => n
            }), i(581454);

            function n(e) {
                let {
                    multiSelection: t
                } = e;
                return (0, i(58512).$)(t).map(({
                    store: e,
                    selection: t
                }) => {
                    let n = (0, i(247438).RQ)(e.getValue()),
                        a = (0, i(247438).xbM)(n, t),
                        {
                            tokensInsideRange: r
                        } = (0, i(247438).AI5)(n, a.startIndex, a.endIndex);
                    return (0, i(536614).r4)(r, e)
                }).join("\n\n")
            }
        },
        268896: (e, t, i) => {
            i.d(t, {
                b: () => a,
                i: () => n
            });
            let n = {
                    wrapper: {
                        width: i(770657).k
                    },
                    coverContainer: {
                        height: 36,
                        zIndex: 1
                    },
                    breadcrumb: {
                        color: i(632079).Tj.text.tertiary,
                        fontSize: 11,
                        marginBottom: -2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: "100%"
                    },
                    pageTitle: {
                        display: "inline",
                        fontWeight: i(699422).Wy.semibold,
                        color: i(632079).Tj.text.primary,
                        fontSize: 13,
                        lineHeight: 1.15
                    },
                    pageTitleIcon: {
                        zIndex: 2,
                        position: "relative",
                        marginInlineStart: 16,
                        marginTop: -15,
                        marginBottom: 8
                    },
                    pageTitleContainer: { ...(0, i(418676).pA)(2),
                        verticalAlign: "top",
                        lineHeight: 1.15
                    },
                    empty: {
                        height: 16
                    },
                    highlightedBlockWrapper: {
                        display: "flex",
                        marginBottom: 8
                    }
                },
                a = {
                    icon: {
                        height: 16,
                        width: 16,
                        fill: i(632079).Tj.purple.icon.accentPrimary,
                        marginInlineEnd: 2
                    },
                    title: {
                        fontSize: 12,
                        color: i(632079).Tj.purple.icon.accentPrimary
                    },
                    summary: { ...(0, i(418676).pA)(4),
                        fontSize: 12,
                        lineHeight: 1.35,
                        color: i(632079).Tj.text.secondary,
                        marginBottom: 12
                    },
                    contentCover: {
                        color: i(632079).Tj.text.primary,
                        fontSize: 11,
                        lineHeight: 1.5,
                        marginBottom: 0,
                        width: "110%",
                        transform: "translateX(-13px) translateY(-2px) scale(0.91)"
                    },
                    contentCoverEmpty: {
                        height: 16
                    },
                    imageCoverWrap: {
                        marginBottom: 16
                    },
                    contentCoverFade: {
                        height: 48,
                        background: `linear-gradient(to bottom, transparent, ${i(632079).Tj.background.elevated} 100%)`
                    },
                    loadingShimmer: {
                        marginBottom: 0
                    },
                    rendererBlockStyle: {
                        fontSize: 9
                    }
                }
        },
        272307: (e, t, i) => {
            i.r(t), i.d(t, {
                HoverPagePreview: () => o
            }), i(581454);
            var n = i(296540),
                a = i(474848);
            let r = {
                emptyPage: {
                    height: i(770657).w
                }
            };

            function o(e) {
                let {
                    store: t,
                    contentBlocks: o,
                    events: l,
                    size: d = "regular",
                    isDiscussion: s,
                    hideCover: c = !1,
                    hideIcon: u = !1,
                    hideTitle: p = !1
                } = e, g = (0, i(682985).K8)(() => (null == t ? void 0 : t.isEmptyPage()) ? ? !1, [t]), m = (0, i(682985).K8)(() => null == t ? void 0 : t.getIcon(), [t]), f = (0, n.useMemo)(() => t ? g ? (0, a.jsx)("div", {
                    style: r.emptyPage
                }) : o ? o.map((e, n) => (0, a.jsx)("div", {
                    style: i(268896).i.highlightedBlockWrapper,
                    children: (0, a.jsx)(i(892452).f, {
                        store: t,
                        startBlockId: null == e ? void 0 : e.id,
                        size: d,
                        isDiscussion: s
                    })
                }, `${e.id}_${n}`)) : (0, a.jsx)(i(892452).f, {
                    store: t,
                    size: d
                }) : null, [t, o, d, s, g]), h = (0, i(682985).K8)(() => (0, i(569553).Te)(t), [t]);
                return t ? (0, a.jsxs)("div", {
                    style: i(268896).i.wrapper,
                    ...l,
                    children: [c ? void 0 : (0, a.jsx)("div", {
                        style: i(268896).i.coverContainer,
                        children: (0, a.jsx)(i(15021).d, {
                            store: t,
                            disabled: !0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            height: 36,
                            proxyWidth: 260
                        })
                    }), u ? void 0 : (0, a.jsx)(i(569553).B6, {
                        disabled: !0,
                        icon: m,
                        iconRecordCategory: h,
                        isEmptyPage: g,
                        isLarge: !0,
                        disableShrinking: !0,
                        size: 26,
                        emojiSize: 26,
                        largeIcon: !0,
                        style: i(268896).i.pageTitleIcon
                    }), (0, a.jsxs)(i(4458).VP, {
                        gap: 4,
                        paddingInline: 16,
                        children: [p ? void 0 : (0, a.jsxs)(i(4458).VP, {
                            gap: 2,
                            children: [(0, a.jsx)(i(307983).Ay, {
                                store: t,
                                style: i(268896).i.breadcrumb
                            }), (0, a.jsx)("div", {
                                style: i(268896).i.pageTitleContainer,
                                children: (0, a.jsx)(i(627918).A, {
                                    shouldWrap: !0,
                                    maxLines: 2,
                                    store: t,
                                    style: i(268896).i.pageTitle
                                })
                            })]
                        }), f]
                    })]
                }) : null
            }
        },
        295206: (e, t, i) => {
            i.d(t, {
                P: () => r
            }), i(16280), i(898992), i(354520);
            var n = () => i(273917);
            class a extends n().U {
                indexCache = new WeakMap;
                isModelAvailable(e, t, i) {
                    return void 0 !== this.getModelEntry(e, t, i)
                }
                isModelDisabled(e, t, i) {
                    let n = this.getModelEntry(e, t, i);
                    return (null == n ? void 0 : n.isDisabled) ? ? !1
                }
                getModelEntry(e, t, i) {
                    let n = this.getData(e, {
                        spaceId: t
                    });
                    if (n) return this.getIndex(n).get(i)
                }
                getModelMessage(e, t, i) {
                    var n;
                    return null == (n = this.getModelEntry(e, t, i)) ? void 0 : n.modelMessage
                }
                getModelFamily(e, t, n) {
                    var a;
                    let r = null == (a = this.getModelEntry(e, t, n)) ? void 0 : a.modelFamily;
                    return (0, i(443037).jb)(r) ? r : void 0
                }
                getModelsForMode(e, t, i) {
                    let n = this.getData(e, {
                        spaceId: t
                    });
                    if (n) return n.filter(e => "markdown-chat" === i ? void 0 !== e.markdownChat : "workflow" === i ? void 0 !== e.workflow : void 0 !== e.customAgent)
                }
                getIndex(e) {
                    let t = this.indexCache.get(e);
                    if (t) return t;
                    let i = new Map;
                    for (let t of e) i.set(t.model, t);
                    return this.indexCache.set(e, i), i
                }
            }
            let r = new a((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }) => {
                let n = e.currentUser.id;
                try {
                    let a = await e.api.callCellCompatibleApi({
                        eventName: "getAvailableModels",
                        environment: e,
                        cellNavigation: {
                            spaceId: t
                        },
                        data: {
                            spaceId: t
                        }
                    });
                    if ("failed" === a.type) {
                        let e = (0, i(201790).V4)(a);
                        i(419750).O8(Error(`Failed to fetch available models: ${e}`), {
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
                    return 0 === a.data.models.length && i(419750).O8(Error("Received empty model list from server"), {
                        from: "AvailableModelsStore.fetch",
                        type: "empty_response",
                        data: {
                            spaceId: t,
                            userId: n
                        }
                    }), a.data.models
                } catch (e) {
                    i(419750).O8(e, {
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
            (0, i(202146).exposeDebugValue)("availableAiModelsStore", r)
        },
        322095: (e, t, i) => {
            function n(e, t) {
                return e.map(e => a(e, t))
            }

            function a(e, t) {
                var n, a;
                let r, {
                        nameMessage: o,
                        descriptionMessage: l,
                        ...d
                    } = e,
                    {
                        rootId: s,
                        previewRootId: c,
                        spaceId: u
                    } = (n = e, a = t, r = (0, i(599412).H)(a), n.sources[r] || n.sources[i(599412).q]);
                return { ...d,
                    id: o.id,
                    rootId: s,
                    spaceId: u,
                    previewRootId: c,
                    name: t.formatMessage(o),
                    description: l ? t.formatMessage(l) : void 0
                }
            }
            i.d(t, {
                B: () => a,
                o: () => n
            }), i(581454)
        },
        336613: (e, t, i) => {
            let n, a;

            function r(e) {
                n = e
            }

            function o(e) {
                a = e
            }

            function l() {
                if (!n) throw Error("configureSubscriptionActions() must be called before using subscription actions");
                return n
            }
            async function d() {
                if (!a) throw Error("configureSubscriptionActionsLazyDeps() must be called before loading lazy deps");
                return a()
            }
            i.d(t, {
                N7: () => d,
                NK: () => r,
                NS: () => o,
                XC: () => l
            }), i(16280)
        },
        358667: (e, t, i) => {
            i.r(t), i.d(t, {
                openChatPanel: () => n
            }), i(16280), i(814603), i(147566), i(198721);

            function n(e) {
                var t;
                let n, {
                        environment: a,
                        store: r,
                        chatPanelState: o,
                        source: l = "button"
                    } = e,
                    d = i(680007).default.mark("agent_time_to_render"),
                    s = (0, i(420459).G4)();
                i(562733).zI.setState({ ...i(562733).zI.state,
                    agentTimeToRenderMetric: d,
                    openSource: l,
                    completionContext: s
                });
                let c = o ? ? {},
                    u = c.isNewThread,
                    p = "threadId" in c && !!c.threadId;
                !u && !p && i(973240).L.threadId && i(973240).L.updatedAt && i(973240).L.updatedAt + 6e5 > Date.now() && (c = { ...c,
                    threadId: i(973240).L.threadId
                }), (0, i(487246).a)();
                let g = (0, i(548124).getMergedChatSidebarRouteData)({
                        environment: a,
                        update: c
                    }),
                    m = (0, i(548124).routeArgsGivenChatSidebarRouteData)(g),
                    f = a.RouterStore.state.route;
                if (r)
                    if ((null == r ? void 0 : r.table) === i(832375).evP) n = (0, i(483227).Ef)({
                        environment: a,
                        updates: { ...m,
                            scrollToBlockId: void 0,
                            store: r
                        }
                    });
                    else if ((null == r ? void 0 : r.table) === i(832375).C0E) {
                    let e = {};
                    "agent" === f.name && (e = {
                        workflowViewType: f.workflowViewType,
                        workflowViewId: f.workflowViewId,
                        workflowPrompt: f.workflowPrompt,
                        agentChatThreadId: f.agentChatThreadId
                    }), n = (0, i(453573).Lm)({
                        workflowId: r.id,
                        params: {
                            workflowViewType: "agent",
                            ...m,
                            ...e
                        }
                    })
                } else(0, i(722371).HB)(r);
                else if (!r && (0, i(548124).shouldAllowOpeningAgentOnSpecifiedRoute)(f)) {
                    let e = new URL(window.location.href);
                    m.chatThreadId && e.searchParams.set(i(737869).P5, m.chatThreadId), n = e.toString()
                }
                if (!n) throw Error(`Cannot open chat panel on route ${f.name} without a store`);
                let h = i(728372).AppStoreMainEditorCurrentBlockStore.state !== r;
                (0, i(79266).navigate)({
                    environment: a,
                    url: n,
                    redirect: !h
                });
                let x = (0, i(828560).hw)(),
                    y = i(562733).zI.state.chatPanelMode;
                x || (x && "sidebar" === y ? (0, i(16822).h)({
                    environment: a,
                    isExpanded: !0,
                    from: "slippery_slope_experiment",
                    saveDetailsSidebarPreference: !1
                }) : function(e) {
                    let {
                        environment: t
                    } = e;
                    !(0, i(712358).K)(t) || (0, i(548124).getIsChatPanelOpen)(t) || (i(984858).sidebarExpandedStore.setState(!1), i(475097).default.setSidebarExpandedStoreState(!1), i(562733).zI.setState({ ...i(562733).zI.state,
                        reopenMainSidebarOnClose: !0
                    }))
                }({
                    environment: a
                }));
                let b = null == (t = (0, i(328765).S)()) ? void 0 : t.id;
                b && (a.api.callApi({
                    eventName: "warmSearchCache",
                    environment: a,
                    data: {
                        spaceId: b
                    }
                }), a.api.callCellCompatibleApi({
                    eventName: "warmVectorDBCache",
                    environment: a,
                    data: {
                        spaceId: b
                    },
                    cellNavigation: {
                        spaceId: b
                    }
                })), (async () => {
                    try {
                        (await Promise.all([i.e(36556), i.e(55373), i.e(36192), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(53050), i.e(87353), i.e(5721), i.e(64696), i.e(94495)]).then(i.bind(i, 305721))).trackAgentOpened({
                            environment: a,
                            from: l,
                            leftNotionSidebarOpenState: i(984858).sidebarExpandedStore.state
                        })
                    } catch (e) {}
                })()
            }
        },
        366318: (e, t, i) => {
            i.d(t, {
                S: () => n
            });

            function n(e) {
                return (0, i(682985).K8)(() => {
                    if (!(0, i(23803).vL)()) return !1;
                    let t = e.getParentStore();
                    return !!((null == t ? void 0 : t.table) === i(832375).VlP && t.getFormatStore().getKeyStore("external_collection_type").getValue()) || !1
                }, [e])
            }
        },
        374241: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowStraightLeftSmallIcon: () => a,
                iconDefinition: () => n
            }), i(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, i(474848).jsx)("path", {
                        d: "M2.16 8.206q.046.13.148.236l4.32 4.32a.625.625 0 0 0 .884-.884L4.259 8.625h8.991a.625.625 0 1 0 0-1.25H4.259l3.253-3.253a.625.625 0 1 0-.884-.884l-4.32 4.32a.62.62 0 0 0-.148.648"
                    })
                },
                a = (0, i(104509).wt)("arrowStraightLeftSmall", n, "small")
        },
        398879: (e, t, i) => {
            i.d(t, {
                EG: () => o,
                K5: () => r,
                RH: () => a,
                Yi: () => l,
                ls: () => n
            });
            let n = 32,
                a = 202,
                r = 1e3,
                o = "Want to add a metric? Look for 'src/client/performanceToolbar/config.ts' in notion-next.",
                l = "To disable the toolbar entirely, go to the 'Experiments' panel and look for the 'performance_debugging_toolbar' flag."
        },
        408138: (e, t, i) => {
            i.d(t, {
                X: () => n
            });
            let n = i(546605).Store.createValue({
                shouldReset: !1
            }, {
                name: "MobileAssistantMenuStore"
            })
        },
        420459: (e, t, i) => {
            i.d(t, {
                G4: () => o,
                gu: () => a,
                rs: () => r
            }), i(18107), i(967357);
            var n = () => i(970831);

            function a(e) {
                let t = e ? ? ("editing" === i(358377).default.state.mode ? i(358377).default.state.multiSelection : void 0);
                if (!t) return;
                let a = t.start.store,
                    r = a.getRecordStoreUIRoot(),
                    o = i(521595).n.findNodeFromStore(a),
                    l = (0, i(534012).T)(a),
                    d = null == l ? void 0 : l.getRecordStoreUIParent(),
                    s = (0, i(730994).K3)(r),
                    c = l && l instanceof n().B && l !== r ? l : void 0,
                    u = c ? ? o;
                if (r && r instanceof n().B && u) return {
                    type: "cursor",
                    textSelection: t,
                    currentPage: r,
                    currentBlock: c,
                    origin: u,
                    currentParent: d,
                    scrollerStore: s,
                    isPageTitle: r.id === a.id
                }
            }

            function r() {
                let {
                    stores: e
                } = i(584265).default.state, t = i(358377).default.state, a = "empty" !== t.mode ? t.multiSelection : void 0, r = "empty" !== t.mode ? t.multiSelection.start.store : void 0, o = r ? r.getRecordStoreUIRoot() : void 0;
                if (!(o instanceof n().B)) {
                    let e, t = null == r ? void 0 : r.getRecordStoreUIParent();
                    for (; null != t;) t instanceof n().B && (e = t), t = t.getRecordStoreUIParent();
                    e && (o = e)
                }
                if (a && o && o instanceof n().B) {
                    let t = (0, i(534012).T)(a.end.store),
                        n = null == t ? void 0 : t.getRecordStoreUIParent(),
                        r = (0, i(730994).K3)(o);
                    if (t && n) return {
                        type: "textSelection",
                        stores: e,
                        textSelection: a,
                        currentPage: o,
                        origin: t,
                        endBlock: t,
                        endBlockParent: n,
                        scrollerStore: r
                    }
                }
            }

            function o() {
                if (i(584265).default.state.stores.length > 0) {
                    let e = i(358377).default.state;
                    if ("empty" === e.mode) {
                        let e = function() {
                            if (1 !== i(584265).default.state.stores.length) return;
                            let e = i(584265).default.state.stores[0];
                            if (!(e instanceof n().B)) return;
                            let t = e.getTitleStore();
                            if (t) return {
                                start: {
                                    store: t,
                                    index: 0
                                },
                                end: {
                                    store: t,
                                    index: 0
                                }
                            }
                        }();
                        return e ? a(e) : function() {
                            let {
                                stores: e
                            } = i(584265).default.state, t = e[0], a = e.at(-1), r = t ? t.getRecordStoreUIRoot() : void 0;
                            if (r && r instanceof n().B && a) {
                                let t = (0, i(730994).K3)(r);
                                return {
                                    type: "blockSelection",
                                    stores: e,
                                    currentPage: r,
                                    origin: a,
                                    scrollerStore: t
                                }
                            }
                        }()
                    }
                    return (0, i(971541).k)(e.multiSelection) ? a() : r()
                }
            }
        },
        422575: (e, t, i) => {
            i.d(t, {
                L8: () => r,
                O2: () => s,
                dm: () => d,
                qN: () => o
            });
            var n = i(296540),
                a = i(474848);
            let r = (0, n.createContext)({
                collectionContextStore: void 0,
                propertySchema: void 0,
                property: void 0,
                propertyFormat: void 0,
                isEmptyStore: i(546605).Store.createValue(!1),
                canEdit: !1,
                disabled: !0,
                shouldRenderTooltip: !1,
                shouldWrap: !1,
                baseStyles: {},
                surface: "table",
                containerRef: null,
                store: void 0,
                shouldShowMultiSelectCheckbox: void 0,
                propertyIndex: void 0,
                collectionSchemaStore: i(546605).Store.createValue(void 0)
            });
            r.displayName = "BlockPropertyValueContext";
            let o = n.memo(function(e) {
                var t, o;
                let {
                    children: d,
                    unmappedProperty: c,
                    property: u,
                    propertySchema: p,
                    containerRef: g
                } = e, {
                    surface: m,
                    disabled: f,
                    store: h,
                    tableWrap: x,
                    collectionStore: y,
                    shouldSetCellHeight: b,
                    isLast: v,
                    locked: k,
                    showIfEmpty: S,
                    shouldShowMultiSelectCheckbox: w,
                    propertyIndex: M,
                    propertyModule: I,
                    formQuestionStore: C,
                    formDataStore: j,
                    onClose: P,
                    collectionViewStore: T
                } = e.innerProps, A = (0, i(533992).v3)(), {
                    value: z
                } = (0, i(815048).fJ)(i(864850).T.formulas), E = (0, i(713311).Ks)(), [B, _] = (0, i(682985).K8)(() => {
                    let e = null == E ? void 0 : E.getPropertyFormat(c ? ? u),
                        t = !1;
                    return j && C && (t = !!j.getQuestionError(C.id)), [e, t]
                }, [E, j, C, u, c], {
                    equalityFn: i(381453).n4
                }), U = (0, n.useMemo)(() => new(i(345426)).ComputedStore(() => {
                    var e;
                    return (null == j || null == (e = j.getFormState()) ? void 0 : e.collectionSchema) || y.getSchema()
                }, {
                    debugName: "BlockPropertyValueContext.collectionSchemaStore"
                }), [y, j]), O = (0, i(366318).S)(h), R = s({
                    store: h,
                    collectionStore: y,
                    property: u,
                    disabled: f,
                    surface: m,
                    propertySchema: p,
                    collectionContextStore: E,
                    writeStateType: "edit"
                }), D = (t = m, o = x, "page" === t || "table" === t && o || "board" === t && o || "gallery" === t && o || "feed" === t && o || "form_viewer" === t), N = I && "style" in I && "large" === I.style, V = (0, i(916769).x7)({
                    shouldSetCellHeight: b,
                    surface: m,
                    shouldWrap: D,
                    isLast: v,
                    locked: k,
                    disabled: f,
                    showIfEmpty: S,
                    isInvalidFormAnswer: _,
                    isLargeModule: N,
                    collectionViewStore: T
                }), L = function(e) {
                    let {
                        store: t,
                        collectionSchemaStore: n,
                        property: a,
                        propertySchema: r,
                        surface: o,
                        isExternallyImportedAndSyncedPage: d,
                        environment: s,
                        formulasModule: c
                    } = e;
                    return (0, i(682985).K8)(() => "board" === o || "gallery" === o || "list" === o || "relation" === o || "relation_section" === o || "feed" === o || ("mini" === o ? !l({
                        store: t,
                        collectionSchema: n.state,
                        property: a,
                        propertySchemaType: null == r ? void 0 : r.type,
                        formulasModule: c,
                        environment: s
                    }) : ("page" === o || "compact_page" === o || "table" === o || "form_viewer" === o || "form_editor" === o || "property_module" === o || "calendar" === o || "timeline" === o) && d), [n, s, o, c, d, a, null == r ? void 0 : r.type, t])
                }({
                    store: h,
                    collectionSchemaStore: U,
                    property: u,
                    propertySchema: p,
                    surface: m,
                    isExternallyImportedAndSyncedPage: O,
                    environment: A,
                    formulasModule: z
                }), H = (0, n.useMemo)(() => {
                    let e;
                    return {
                        store: h,
                        collectionContextStore: E,
                        property: u,
                        propertySchema: p,
                        propertyFormat: B,
                        isEmpty: !1,
                        canEdit: R,
                        disabled: f,
                        shouldRenderTooltip: L,
                        shouldWrap: D,
                        baseStyles: V,
                        surface: m,
                        containerRef: g,
                        shouldShowMultiSelectCheckbox: w,
                        propertyIndex: M,
                        isExternallyImportedAndSyncedPage: O,
                        propertyModule: I,
                        onClose: P,
                        collectionSchemaStore: U,
                        get isEmptyStore() {
                            return e || (e = new(i(345426)).ComputedStore(() => l({
                                store: h,
                                collectionSchema: U.state,
                                property: u,
                                propertySchemaType: null == p ? void 0 : p.type,
                                formulasModule: z,
                                environment: A
                            }), {
                                debugName: "BlockPropertyValueContext.isEmptyStore"
                            })), e
                        }
                    }
                }, [h, E, u, p, B, R, f, L, D, V, m, g, w, M, O, I, P, U, A, z]);
                return (0, a.jsx)(r.Provider, {
                    value: H,
                    children: d
                })
            });

            function l(e) {
                let {
                    store: t,
                    collectionSchema: n,
                    property: a,
                    propertySchemaType: r,
                    formulasModule: o,
                    environment: l
                } = e;
                return !!a && !!t && !!t.isDefined() && !!n && "checkbox" !== r && "button" !== r && "created_time" !== r && "created_by" !== r && "last_edited_time" !== r && "last_edited_by" !== r && "formula" !== r && "rollup" !== r && "auto_increment_id" !== r && (0, i(175567).r)({
                    block: t.getModel(),
                    property: a,
                    schema: n,
                    getRecordModel: t.getRecordModel,
                    userTimeZone: (0, i(714350).P)(),
                    intl: i(962299).A.getIntl(),
                    userId: l.currentUser.id,
                    experimentService: i(218744).default,
                    collectionFeatureGates: (0, i(457103).i)(),
                    formulasModule: o,
                    spaceIdCreator: l.idCreator.getSpaceIdCreatorSync(t.getSpaceId()),
                    getRelationEdgeList: (0, i(323082).Y)({
                        environment: l,
                        spaceId: t.getSpaceId()
                    })
                })
            }

            function d(e) {
                let {
                    store: t,
                    collectionSchema: n,
                    property: a,
                    propertySchema: r,
                    environment: o
                } = e, {
                    value: d
                } = (0, i(815048).fJ)(i(864850).T.formulas);
                return (0, i(682985).K8)(() => l({
                    store: t,
                    collectionSchema: n,
                    property: a,
                    propertySchemaType: null == r ? void 0 : r.type,
                    formulasModule: d,
                    environment: o
                }), [n, o, a, null == r ? void 0 : r.type, t, d], {
                    debugName: "BlockPropertyValueContext.useIsBPVEmpty"
                })
            }

            function s(e) {
                let {
                    store: t,
                    collectionStore: n,
                    property: a,
                    disabled: r,
                    surface: o,
                    propertySchema: l,
                    collectionContextStore: d,
                    writeStateType: s
                } = e;
                return (0, i(682985).K8)(() => {
                    var e, c;
                    if (!t || !n || !a || "calendar" === o || "timeline" === o || (0, i(235089).u)(a) || (0, i(9247).z3)(l) || (0, i(973681).Lp)({
                            collectionStore: n,
                            property: a,
                            propertySchema: l
                        }) || null != d && d.isUnlistedViewStore.state || a === i(511791).hx || "comment" === s && !(0, i(512845).SF)(t.getSystemBlockTypeStore().getValue())) return !1;
                    if (r || !t.canEdit() || (0, i(444285).B)(t).state) return "edit" !== s && t.canComment() && !(0, i(88527).O)(t);
                    let u = (0, i(23803).JD)(n);
                    if ((0, i(973681).ni)({
                            store: t,
                            collectionStore: n,
                            collectionContextStore: d,
                            propertySchema: l,
                            property: a,
                            isJiraTwoWaySyncEnabled: u
                        }) || !n.isExternallyImportedAndSyncedCollection() && (0, i(561872).VF)(t.getModel(), a, t.getRecordModel)) return !1;
                    if (null != l && l.synced_permissions) switch (l.synced_permissions) {
                        case "read_only":
                            return !1;
                        case "read_write":
                            break;
                        default:
                            (0, i(722371).HB)(l.synced_permissions)
                    }
                    return !(t.isType("transcription") && (0, i(247438).w9s)(null == (e = t.getTitleStore()) ? void 0 : e.getValue()) || t.isType("transcription") && (null == (c = t.getFormat()) ? void 0 : c.transcription_calendar_event) !== void 0 && "title" === a)
                }, [o, a, l, n, d, r, t, s], {
                    debugName: `BlockPropertyValueContext.useWriteState|${s}`
                })
            }
        },
        425749: (e, t, i) => {
            i.d(t, {
                I$: () => o,
                R2: () => s,
                WF: () => d,
                bZ: () => l,
                cE: () => a,
                jX: () => r,
                rz: () => c
            });
            var n = () => i(381453);

            function a(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let r = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function o(e) {
                return !!(void 0 !== e && (0, i(722371).Xk)(r, e))
            }

            function l() {
                let e = (0, i(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: i(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, i(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function d(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let s = [{
                type: "everything"
            }];

            function c(e) {
                for (let t of s)
                    if (n().n4(e, t)) return !0;
                return !1
            }
        },
        428602: (e, t, i) => {
            i.d(t, {
                Y: () => r
            }), i(296540);
            var n = i(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 2.37 11.25 11.25",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.053 6.407a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.893 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286M5.159 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M7.053 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M8.947 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M10.84 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286m-5.681 1.894a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286"
                        }), (0, n.jsx)("path", {
                            d: "M4.25 2.375c-1.036 0-1.875.84-1.875 1.875v7.5c0 1.036.84 1.875 1.875 1.875h7.5c1.036 0 1.875-.84 1.875-1.875v-7.5c0-1.036-.84-1.875-1.875-1.875zm-.625 9.375V5.632h8.75v6.118c0 .345-.28.625-.625.625h-7.5a.625.625 0 0 1-.625-.625"
                        })]
                    })
                },
                r = (0, i(104509).wt)("viewCalendarSmall", a, "small")
        },
        455205: (e, t, i) => {
            i.r(t), i.d(t, {
                FETCHABLE_TEAM_TYPES: () => o,
                fetchUnfetchedTeams: () => d,
                fetchUnfetchedTeamsFromLocalStorage: () => c,
                getActiveTeamsMetadataForUserInSpace: () => p,
                getAllTeamsMetadataForUserInSpace: () => g,
                getTeamMetadataFromStore: () => f,
                getTeamStore: () => m,
                refetchTeams: () => s
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520);
            var n = () => i(988752);
            async function a(e) {
                let {
                    actorUserId: t,
                    targetUserId: n,
                    spaceId: a,
                    teamTypes: r,
                    teamIds: o,
                    environment: l
                } = e;
                if (!(0, i(422280).GL)({
                        actorUserId: t,
                        targetUserId: n,
                        teamTypes: r
                    })) throw new(i(101787)).qQk("User does not have permission to fetch teams for another user.");
                let d = await l.api.callCellCompatibleApi({
                    eventName: "getTeamsV2",
                    environment: l,
                    data: {
                        spaceId: a,
                        teamTypes: Array.from(r),
                        teamIds: "all" === o ? void 0 : Array.from(o),
                        sort: e.sort,
                        canTruncateRecordMap: e.canTruncateRecordMap,
                        includeMembershipSummary: !(0, i(958692).X7)() && void 0,
                        targetUserId: n
                    },
                    userId: t,
                    cellNavigation: {
                        cellId: void 0,
                        recordId: void 0,
                        spaceId: a
                    }
                });
                if ("failed" === d.type) throw d.error;
                let {
                    teams: s,
                    hasUnjoinedActiveTeams: c
                } = d.data;
                return {
                    teams: s,
                    ...void 0 !== c && {
                        hasUnjoinedActiveTeams: c
                    }
                }
            }
            let r = new(i(245541)).R({
                    key: "localStorageTeams",
                    namespace: i(274919).Bq,
                    important: !1,
                    trackingType: "preference"
                }),
                o = ["Joined", "UnjoinedActive", "Archived"];
            async function l(e) {
                let {
                    userId: t,
                    spaceId: o,
                    teamTypesToUpdate: l,
                    teamIdsToUpdate: d,
                    environment: s,
                    canTruncateRecordMap: c,
                    sort: u
                } = e, p = n().E.getOrCreateUnit(t, o);
                if (0 === l.size || "all" !== d && 0 === d.size) return void await p.pendingUpdates;
                let g = a({
                    actorUserId: t,
                    targetUserId: t,
                    spaceId: o,
                    teamTypes: l,
                    teamIds: d,
                    environment: s,
                    canTruncateRecordMap: c,
                    sort: u
                });
                n().E.queueUpdateForSpaceUser({
                        userId: t,
                        spaceId: o,
                        fetchedTeamsPromise: g,
                        fetchedTeamsSource: "server",
                        teamTypesToUpdate: l,
                        teamIdsToUpdate: d
                    }), await p.pendingUpdates,
                    function(e) {
                        let {
                            userId: t,
                            spaceId: n,
                            teamsResponse: a
                        } = e;
                        if (!i(218744).default.checkGate({
                                gateName: "teams_local_storage_write"
                            })) return;
                        let {
                            teams: o
                        } = a, l = o.filter(e => "Joined" === e.type), d = o.filter(e => "UnjoinedActive" === e.type), s = o.filter(e => "Archived" === e.type), c = l.concat(d, s).slice(0, 1e3);
                        r.update(e => ({ ...e ? ? {},
                            [t] : { ...(null == e ? void 0 : e[t]) ? ? {},
                                [n] : { ...a,
                                    teams: c
                                }
                            }
                        }))
                    }({
                        userId: t,
                        spaceId: o,
                        teamsResponse: {
                            teams: Object.values(p.teams),
                            hasUnjoinedActiveTeams: p.hasUnjoinedActiveTeams
                        }
                    })
            }
            async function d(e) {
                let {
                    userId: t,
                    spaceId: i,
                    teamTypes: a,
                    environment: r,
                    canTruncateRecordMap: o,
                    sort: d
                } = e, s = n().E.getOrCreateUnit(t, i), c = new Set(Array.from(a.values()).filter(e => "server" !== s.lastFetchSourceOfTeamType[e]));
                await l({
                    userId: t,
                    spaceId: i,
                    teamTypesToUpdate: c,
                    teamIdsToUpdate: "all",
                    environment: r,
                    canTruncateRecordMap: o,
                    sort: d
                })
            }
            async function s(e) {
                let {
                    userId: t,
                    spaceId: i,
                    teamIds: a,
                    environment: r
                } = e, d = n().E.getOrCreateUnit(t, i), s = new Set(o.filter(e => "server" === d.lastFetchSourceOfTeamType[e]));
                await l({
                    userId: t,
                    spaceId: i,
                    teamTypesToUpdate: s,
                    teamIdsToUpdate: a,
                    environment: r
                })
            }

            function c() {
                let e = r.getState();
                for (let t in e)
                    for (let i in e[t]) {
                        let a = n().E.getOrCreateUnit(t, i),
                            r = new Set(o.filter(e => "none" === a.lastFetchSourceOfTeamType[e]));
                        0 !== r.size && n().E.queueUpdateForSpaceUser({
                            userId: t,
                            spaceId: i,
                            fetchedTeamsPromise: Promise.resolve(e[t][i]),
                            fetchedTeamsSource: "local",
                            teamTypesToUpdate: r,
                            teamIdsToUpdate: "all"
                        })
                    }
            }
            async function u(e) {
                let {
                    userId: t,
                    spaceStore: i,
                    teamTypes: a,
                    environment: r
                } = e;
                return await d({
                    userId: t,
                    spaceId: i.id,
                    teamTypes: a,
                    environment: r
                }), n().E.readTeams(t, i.id, a).teams
            }
            async function p(e) {
                let {
                    userId: t,
                    spaceStore: i,
                    environment: n
                } = e;
                return await u({
                    userId: t,
                    spaceStore: i,
                    teamTypes: new Set(["Joined", "UnjoinedActive"]),
                    environment: n
                })
            }
            async function g(e) {
                let {
                    userId: t,
                    spaceStore: i,
                    environment: n
                } = e;
                return await u({
                    userId: t,
                    spaceStore: i,
                    teamTypes: new Set(["Joined", "UnjoinedActive", "Archived"]),
                    environment: n
                })
            }

            function m(e) {
                let {
                    teamId: t,
                    spaceStore: n
                } = e;
                return i(681735).h.createChildStore(n, {
                    table: i(832375).yKj,
                    id: t
                })
            }

            function f(e) {
                var t;
                let {
                    teamStore: a,
                    userId: r,
                    spaceStore: o
                } = e, l = n().E.readMembershipCount({
                    userId: r,
                    spaceId: o.id,
                    teamId: a.id
                }), d = a.getArchivedBy() ? "Archived" : (0, i(220530).f)({
                    userId: r,
                    teamStore: a,
                    userPermissionGroups: i(68809).f.getSpacePermissionGroupIds({
                        spaceId: o.id
                    })
                }) ? "Joined" : "UnjoinedActive", s = (0, i(228091).a)({
                    teamStore: a,
                    userId: r,
                    userPermissionGroups: i(68809).f.getSpacePermissionGroupIds({
                        spaceId: o.id
                    })
                }) ? ? "none";
                return {
                    id: a.id,
                    title: a.getName() ? ? "",
                    icon: null == (t = a.getIcon()) ? void 0 : t.icon,
                    type: d,
                    membershipSummary: l,
                    lastEditedTime: 0 === a.getLastEditedTime() ? void 0 : a.getLastEditedTime(),
                    securitySettings: {
                        disablePublicAccess: a.getDisablePublicAccess(),
                        disableGuests: a.getDisableGuests(),
                        disableExport: a.getDisableExport()
                    },
                    teamRole: s,
                    isDefaultTeam: a.isDefault(),
                    accessLevel: a.getTeamAccessLevel(),
                    description: a.getDescription()
                }
            }
        },
        469738: (e, t, i) => {
            i.d(t, {
                a: () => p
            });
            var n = i(296540),
                a = i(474848);
            let r = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                o = {
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
                l = {
                    kkrTdU: "x1ypdohk",
                    $$css: !0
                },
                d = {
                    kX8ASl: "xkb36d3",
                    kwv6qe: "xqjjoj2",
                    k4EQJz: "x1kna7tg",
                    kO87eX: "xlh1tma",
                    $$css: !0
                },
                s = {
                    kX8ASl: "x4o2q0i",
                    kwv6qe: "xkmrbco",
                    k4EQJz: "x1v8h2t0",
                    kO87eX: "x1dy7txk",
                    $$css: !0
                },
                c = {
                    kGNEyG: "x6s0dn4",
                    $$css: !0
                },
                u = {
                    kGNEyG: "x1cy8zhl",
                    $$css: !0
                },
                p = n.forwardRef(function({
                    additionalContent: e,
                    description: t,
                    isDisabled: p,
                    isSelected: f,
                    label: h,
                    name: x,
                    onChange: y,
                    width: b,
                    selectorSize: v = "normal",
                    selectAlignXAxis: k = "left",
                    selectAlignYAxis: S = "center",
                    selectType: w = "checkbox",
                    style: M,
                    supportText: I,
                    value: C,
                    colorVariant: j,
                    alignAdditionalContent: P,
                    ...T
                }, A) {
                    let z = (0, n.useId)(),
                        E = f && !p ? d : s,
                        B = {
                            0: {
                                className: "x78zum5"
                            },
                            1: {
                                className: "x78zum5 xr9ek0c"
                            }
                        }["top" === S | 0],
                        _ = (0, a.jsxs)(i(4458).fI, {
                            alignItems: "top" === S ? "flex-start" : "center",
                            gap: 12,
                            width: "number" == typeof b ? b : void 0,
                            className: "fill" === b ? "autolayout-fill-width" : void 0,
                            style: r,
                            children: [(0, a.jsx)("div", { ...B,
                                children: (0, a.jsx)(m, {
                                    id: z,
                                    selectType: w,
                                    name: x,
                                    value: C,
                                    onChange: y,
                                    isSelected: f,
                                    selectorSize: v,
                                    isDisabled: p,
                                    ...T
                                })
                            }), (0, a.jsx)(g, {
                                colorVariant: j,
                                description: t,
                                label: h,
                                selectorSize: v,
                                supportText: I,
                                isDisabled: p
                            })]
                        }),
                        U = (0, a.jsxs)(i(4458).fI, {
                            alignItems: "top" === S ? "flex-start" : "center",
                            justifyContent: "center",
                            gap: 12,
                            className: "autolayout-fill-width",
                            style: r,
                            children: [(0, a.jsx)(g, {
                                colorVariant: j,
                                description: t,
                                label: h,
                                selectorSize: v,
                                supportText: I,
                                isDisabled: p
                            }), (0, a.jsx)("div", { ...B,
                                children: (0, a.jsx)(m, {
                                    id: z,
                                    selectType: w,
                                    name: x,
                                    value: C,
                                    onChange: y,
                                    selectorSize: v,
                                    isSelected: f,
                                    isDisabled: p,
                                    ...T
                                })
                            })]
                        }),
                        O = e ? (0, a.jsx)("div", {
                            className: "x2lah0s",
                            children: e
                        }) : null;
                    return (0, a.jsx)("label", {
                        ref: A,
                        ...i(952687).A.props(o, E, "flex-start" === P ? u : c, !p && l, M),
                        htmlFor: z,
                        children: "left" === k ? (0, a.jsxs)(a.Fragment, {
                            children: [_, O]
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [O, U]
                        })
                    })
                });

            function g(e) {
                let t, {
                    description: n,
                    label: o,
                    supportText: l,
                    selectorSize: d,
                    isDisabled: s,
                    colorVariant: c
                } = e;
                return "large" === d ? t = "pageContentTextBlock" : "normal" === d || void 0 === d ? t = "bodySmMedium" : "small" === d ? t = "captionRegular" : (0, i(722371).HB)(d), (0, a.jsxs)(i(4458).VP, {
                    gap: 4,
                    flex: "1 1 0",
                    style: r,
                    children: [(0, a.jsxs)(i(4458).VP, {
                        gap: 2,
                        style: r,
                        children: [(0, a.jsx)(i(111010).D, {
                            styleKey: t,
                            colorVariant: c || (s ? "disabled" : "primary"),
                            children: o
                        }), n ? (0, a.jsx)(i(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: s ? "disabled" : "secondary",
                            children: n
                        }) : null]
                    }), l ? (0, a.jsx)(i(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "tertiary",
                        children: l
                    }) : null]
                })
            }

            function m(e) {
                let {
                    selectType: t,
                    selectorSize: n = "normal",
                    id: r,
                    name: o,
                    value: l,
                    onChange: d,
                    isSelected: s,
                    isDisabled: c,
                    ...u
                } = e;
                switch (t) {
                    case "radio":
                        return (0, a.jsx)(i(101127).a, {
                            id: r,
                            name: o,
                            value: l,
                            onChange: d,
                            checked: s,
                            disabled: c,
                            selectorSize: n,
                            ...u
                        });
                    case "checkbox":
                        return (0, a.jsx)(i(4458).fI, {
                            minWidth: 18,
                            justifyContent: "center",
                            children: (0, a.jsx)(i(161368).W, {
                                id: r,
                                name: o,
                                value: l,
                                onChange: d,
                                checked: s,
                                disabled: c,
                                selectorSize: n,
                                ...u
                            })
                        });
                    case "none":
                        return null;
                    default:
                        (0, i(722371).HB)(t)
                }
            }
        },
        485129: (e, t, i) => {
            i.d(t, {
                d: () => n
            }), i(581454);

            function n(e) {
                let {
                    teams: t
                } = e, n = e.spaceStore;
                return n ? t.map(({
                    id: e,
                    type: t,
                    membershipSummary: a
                }) => ({
                    store: i(681735).h.createChildStore(n, {
                        table: i(832375).yKj,
                        id: e
                    }),
                    type: t,
                    membershipSummary: a
                })) : []
            }
        },
        487016: (e, t, i) => {
            i.d(t, {
                Bi: () => l,
                My: () => o,
                ZM: () => s,
                _M: () => d,
                navigateToWorkflowTemplateOnboardingModal: () => c
            }), i(16280), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(672577), i(581454);
            var n = () => i(388507),
                a = () => i(715144),
                r = () => i(717673);

            function o({
                transaction: e,
                collectionStore: t,
                propertyTemplates: i
            }) {
                var l, d;
                let s = (null == (l = t.getParentBlockStore()) ? void 0 : l.getCollectionViewStores().filter(e => "table" === e.getType())) ? ? [];
                if (0 === s.length) return;
                let c = [];
                for (let e of i) {
                    let i = (0, r().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    i && c.push({
                        property: i.id,
                        visible: !(0, n().Sz)(e),
                        ...e.tablePropertyFormat
                    })
                }
                if (0 !== c.length)
                    for (let t of s) {
                        let i = (null == (d = t.getPropertyFormatsStore("table_properties")) ? void 0 : d.getValue()) ? ? [],
                            n = new Set(i.map(e => e.property)),
                            r = c.filter(e => !n.has(e.property));
                        0 !== r.length && (0, a().z)({
                            stores: [t],
                            update: {
                                table_properties: [...i, ...r]
                            },
                            transaction: e
                        })
                    }
            }

            function l({
                transaction: e,
                collectionStore: t,
                propertyTemplates: i
            }) {
                let n = [];
                for (let e of i) {
                    let i = (0, r().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    i && n.push({
                        property: i.id,
                        visible: !0
                    })
                }
                let o = t.getFormat().collection_page_properties ? ? [],
                    d = new Set(o.map(e => e.property)),
                    s = n.filter(e => !d.has(e.property));
                s.length && (0, a().z)({
                    stores: [t],
                    update: {
                        collection_page_properties: [...o, ...s]
                    },
                    transaction: e
                })
            }

            function d({
                environment: e,
                newPageStore: t,
                result: n
            }) {
                if ("accepted_template" === n.type || "accepted_empty_collection" === n.type) {
                    let a = t.getSpaceId();
                    (0, i(377796).createAndCommit)({
                        environment: e,
                        canUndo: !1,
                        cellTarget: a ? {
                            spaceWithId: a
                        } : void 0,
                        perform: a => {
                            let r = t.getTitleValue();
                            if ((0, i(173157).z)({
                                    store: t,
                                    transaction: a,
                                    data: {
                                        alive: !1
                                    }
                                }), "accepted_empty_collection" === n.type && !(0, i(247438).w9s)(r)) {
                                let o = i(970831).B.createChildStore(t, {
                                    table: "block",
                                    id: n.blockId
                                }).getTitleStore();
                                o && i(41403).yr({
                                    environment: e,
                                    transaction: a,
                                    tokens: r,
                                    index: 0,
                                    store: o
                                })
                            }
                            let o = t.getParentStore();
                            if ((null == o ? void 0 : o.table) === i(682956).ev) {
                                let e = o.getContentIds();
                                (0, i(173157).z)({
                                    store: o,
                                    transaction: a,
                                    data: {
                                        content: e.filter(e => e !== t.id)
                                    }
                                })
                            }
                        },
                        userAction: "clean_up_empty_new_page"
                    })
                }
            }

            function s({
                environment: e,
                userAction: t,
                result: n,
                existingCollectionViewBlockStore: a,
                existingCollectionStore: r
            }) {
                if ("canceled" !== n.type) {
                    if ("accepted_empty_collection" === n.type && r) {
                        let a = r.getKeyStore("name"),
                            o = (0, i(247438).x9d)(n.newCollectionTitle);
                        if (a) {
                            let n = r.getSpaceId();
                            (0, i(377796).createAndCommit)({
                                userAction: t,
                                environment: e,
                                canUndo: !0,
                                cellTarget: n ? {
                                    spaceWithId: n
                                } : void 0,
                                perform: t => i(41403).R9({
                                    environment: e,
                                    store: a,
                                    transaction: t,
                                    value: o
                                })
                            })
                        }
                    }
                    if (a) {
                        var o;
                        let e = null == (o = (0, i(444610).U)(a)) ? void 0 : o.settingsStore;
                        e && (0, i(72762).o)({
                            collectionSettingsStore: e
                        })
                    }
                    if ("accepted_template" === n.type && null != a && a.isCollectionView() && !(null != a && a.hasSingleSourceAndNoLinkedCollections())) {
                        let t = (0, i(444610).U)(a),
                            r = a.getCollectionViewStores().find(e => {
                                var t;
                                return (null == (t = e.getCollectionStore()) ? void 0 : t.id) === n.collectionId
                            });
                        if (!t || !r) return;
                        (0, i(532013).t)({
                            environment: e,
                            collectionContextStore: t,
                            collectionViewId: r.id,
                            isFullScreen: t.isFullScreenStore.state,
                            isRootChild: t.isRootChildStore.state,
                            isInPeekRenderer: t.isInPeekRendererStore.state
                        })
                    }
                }
            }
            async function c({
                environment: e,
                collectionViewBlockStore: t
            }) {
                let n = t.id;
                if (!t.isDefined()) {
                    let a = await (0, i(389323).$)({
                        environment: e,
                        blockId: n
                    });
                    if (!a) return;
                    e = await i(274662).T({
                        environment: e,
                        newCurrentUserId: a
                    }), t = new(i(970831)).B(e, {
                        table: i(682956).ev,
                        id: n
                    }), await t.load()
                }
                let a = t.getSpaceId();
                if (!a) throw Error("Space ID not found for collection block");
                let r = (0, i(593303).k)(a);
                if (!r) throw Error(`Space view not found for space ID: ${a}`);
                let o = i(728372).AppStoreSidebarSpaceStore.state;
                (null == o ? void 0 : o.id) !== a && await (0, i(269948).y)({
                    environment: e,
                    spaceViewStore: r
                });
                let l = t.getFormat();
                if ((null == l ? void 0 : l.collection_view_sub_type) === "workflow_template_placeholder" && null != l && l.placeholder_workflow_template_id && t.isCollectionView()) {
                    let {
                        getCollectionTemplateFromId: n
                    } = await i(708370).t.load(), a = n(l.placeholder_workflow_template_id);
                    if (!a) throw Error(`Collection template "${l.placeholder_workflow_template_id}" not found`);
                    let {
                        onNavigateToPlaceholderWorkflowTemplateBlock: r
                    } = await i(903673).O.load();
                    r({
                        environment: e,
                        collectionTemplate: a,
                        collectionViewBlockStore: t
                    })
                } else(0, i(545586).navigateToBlock)({
                    environment: e,
                    store: t,
                    pageVisitSource: i(254656).y8.WorkflowTemplatesDeeplink
                })
            }
        },
        489561: (e, t, i) => {
            i.d(t, {
                CA: () => o
            }), i(16280), i(898992), i(354520), i(581454);
            let n = Symbol("JSON Schema"),
                a = Symbol("JSON Schema Components"),
                r = Symbol("No JSON Schema"),
                o = (0, i(722371).MU)((0, i(722371).WP)({
                    isNull: () => ({
                        type: "null",
                        [a]: {}
                    }),
                    boolean: () => ({
                        type: "boolean",
                        [a]: {}
                    }),
                    number: () => ({
                        type: "number",
                        [a]: {}
                    }),
                    integer: () => ({
                        type: "integer",
                        [a]: {}
                    }),
                    string: () => ({
                        type: "string",
                        [a]: {}
                    }),
                    matchesRegExp: e => ({
                        type: "string",
                        pattern: e.source,
                        [a]: {}
                    }),
                    dateString: () => ({
                        type: "string",
                        format: "date",
                        [a]: {}
                    }),
                    dateTimeString: () => ({
                        type: "string",
                        format: "date-time",
                        [a]: {}
                    }),
                    literal: e => {
                        let t = {
                            const: e,
                            [a]: {}
                        };
                        return "boolean" == typeof e ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof e ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    literals: (...e) => {
                        let t = {
                                enum: e,
                                [a]: {}
                            },
                            i = e[0];
                        return "boolean" == typeof i ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof i ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    uuid: () => ({
                        type: "string",
                        format: "uuid",
                        [a]: {}
                    }),
                    binary: () => ({
                        type: "string",
                        format: "binary",
                        [a]: {}
                    }),
                    uuidWithoutDashes: () => ({
                        type: "string",
                        format: "uuid",
                        [a]: {}
                    }),
                    array: e => ({
                        type: "array",
                        items: e[n],
                        [a]: e[n][a]
                    }),
                    tuple: e => ({
                        type: "tuple",
                        items: !1,
                        prefixItems: e.map(e => e[n]).filter(e => e !== r),
                        [a]: Object.assign({}, ...e.map(e => e[n][a]))
                    }),
                    record: (e, t) => ({
                        type: "object",
                        additionalProperties: t[n],
                        [a]: t[n][a]
                    }),
                    object: ({
                        required: e,
                        optional: t,
                        exact: o
                    }) => ({
                        type: "object",
                        properties: (0, i(722371).MU)(Object.entries({ ...e,
                            ...t
                        }).filter(([e, t]) => t[n] !== r).map(([e, t]) => [e, t[n]])),
                        ...o && {
                            additionalProperties: !1
                        },
                        ...Object.keys(e).length > 0 && {
                            required: Object.keys(e)
                        },
                        [a]: Object.assign({}, ...Object.values({ ...e,
                            ...t
                        }).map(e => e[n][a]))
                    }),
                    union: e => {
                        let t = (0, i(381453).hS)(e.map(e => e[n]).filter(e => e !== r), e => JSON.stringify(e)),
                            o = (0, i(381453).hS)(e.map(e => e[n][a]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [a]: Object.assign({}, ...o)
                        } : {
                            anyOf: t,
                            [a]: Object.assign({}, ...o)
                        }
                    },
                    intersection: e => {
                        let t = (0, i(381453).hS)(e.map(e => e[n]).filter(e => e !== r), e => JSON.stringify(e)),
                            o = (0, i(381453).hS)(e.map(e => e[n][a]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [a]: Object.assign({}, ...o)
                        } : {
                            allOf: t,
                            [a]: Object.assign({}, ...o)
                        }
                    },
                    gte: (e, t) => {
                        let i = e[n];
                        return i !== r ? { ...i,
                            minimum: t
                        } : i
                    },
                    gt: (e, t) => {
                        let i = e[n];
                        return i !== r ? { ...i,
                            exclusiveMinimum: t
                        } : i
                    },
                    lte: (e, t) => {
                        let i = e[n];
                        return i !== r ? { ...i,
                            maximum: t
                        } : i
                    },
                    lt: (e, t) => {
                        let i = e[n];
                        return i !== r ? { ...i,
                            exclusiveMaximum: t
                        } : i
                    },
                    maxLength: (e, t) => {
                        let i = e[n];
                        if (i === r) return i;
                        if ("type" in i) {
                            if ("string" === i.type) return { ...i,
                                maxLength: t
                            };
                            else if ("array" === i.type) return { ...i,
                                maxItems: t
                            }
                        }
                        throw Error("Unknown type for max length.")
                    },
                    minLength: (e, t) => {
                        let i = e[n];
                        if (i === r) return i;
                        if ("type" in i) {
                            if ("string" === i.type) return { ...i,
                                minLength: t
                            };
                            else if ("array" === i.type) return { ...i,
                                minItems: t
                            }
                        }
                        throw Error("Unknown type for min length.")
                    },
                    nonEmpty: e => {
                        let t = e[n];
                        if (t === r) return t;
                        if ("type" in t) {
                            if ("string" === t.type) return { ...t,
                                minLength: 1
                            };
                            else if ("object" === t.type) return { ...t,
                                minProperties: 1
                            };
                            else if ("array" === t.type) return { ...t,
                                minItems: 1
                            }
                        }
                        throw Error("Unknown non-emptyable type.")
                    },
                    nullable: e => {
                        let t = e[n];
                        if (t === r) return t;
                        if ("const" in t) return { ...t,
                            const: void 0,
                            enum: [t.const, null]
                        };
                        if ("type" in t)
                            if (Array.isArray(t.type))
                                if ("null" === t.type[1]) return t;
                                else(0, i(722371).HB)(t.type[1]);
                        else {
                            if ("string" === t.type || "object" === t.type || "array" === t.type || "tuple" === t.type || "boolean" === t.type || "integer" === t.type || "number" === t.type) return { ...t,
                                type: [t.type, "null"]
                            };
                            if ("null" === t.type) return t;
                            (0, i(722371).HB)(t.type)
                        } else if ("enum" in t) {
                            let e = t.enum;
                            return { ...t,
                                enum: Array.isArray(e) ? [...e, null] : [null]
                            }
                        } else {
                            var o;
                            if ("anyOf" in t) return { ...t,
                                anyOf: [...t.anyOf, {
                                    type: "null",
                                    [a]: {}
                                }]
                            };
                            if ("oneOf" in t) return { ...t,
                                oneOf: [...t.oneOf, {
                                    type: "null",
                                    [a]: {}
                                }]
                            };
                            if ("allOf" in t) return { ...t,
                                oneOf: [{
                                    allOf: t.allOf,
                                    [a]: {}
                                }, {
                                    type: "null",
                                    [a]: {}
                                }]
                            };
                            if ("$ref" in t) return {
                                anyOf: [t, {
                                    type: "null",
                                    [a]: {}
                                }],
                                [a]: t[a]
                            };
                            if (o = t, (0, i(722371).Gv)(o) && 0 === Object.keys(o).length) return t;
                            (0, i(722371).HB)(t)
                        }
                    }
                }).map(([e, t]) => [e, (...r) => 1 === r.length && (0, i(722371).Gv)(r[0]) && ("id" in r[0] || "title" in r[0] || "description" in r[0] || "examples" in r[0]) ? (...o) => {
                    let {
                        description: l,
                        examples: d,
                        id: s,
                        title: c
                    } = r[0], u = { ...c && {
                            title: c
                        },
                        description: l,
                        ...d && {
                            examples: d
                        },
                        ...t(...o)
                    };
                    return s && (u = {
                        $ref: `#/components/schemas/${s}`,
                        [a]: { ...u[a],
                            [s]: u
                        }
                    }), {
                        [n]: u,
                        ...i(969475)[e](...o)
                    }
                } : {
                    [n]: t(...r),
                    ...i(969475)[e](...r),
                    describe: t => o[e]({
                        description: t
                    })(...r)
                }]));
            Symbol("Exact empty object ({})"), o.object({
                id: "emptyObject"
            })({
                required: {},
                optional: {},
                exact: !0
            })
        },
        497857: (e, t, i) => {
            i.d(t, {
                h: () => a
            }), i(296540);
            var n = i(474848);

            function a() {
                return (0, n.jsx)(i(16275).I, {
                    icon: i(746204).w,
                    size: "lg",
                    colorVariant: "primary"
                })
            }
        },
        519529: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => n,
                xMarkFillSmallIcon: () => a
            }), i(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.03 3.03 9.94 9.94",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M12.73 4.33a.75.75 0 1 0-1.06-1.06L8 6.94 4.33 3.27a.75.75 0 1 0-1.06 1.06L6.94 8l-3.67 3.67a.75.75 0 1 0 1.06 1.06L8 9.06l3.67 3.67a.75.75 0 0 0 1.06-1.06L9.06 8z"
                    })
                },
                a = (0, i(104509).wt)("xMarkFillSmall", n, "fillSmall")
        },
        535144: (e, t, i) => {
            i.d(t, {
                C: () => n
            });

            function n(e) {
                return e ? e.getCardLayoutMode() : i(565546).WH
            }
        },
        540328: (e, t, i) => {
            i.d(t, {
                KY: () => r,
                dr: () => o,
                xX: () => l
            });
            var n = () => i(558208);
            let a = new Map;

            function r(e) {
                a.set(e.id, e)
            }

            function o(e) {
                if (e) return a.get(e)
            }

            function l(e) {
                var t, r, o;
                let {
                    threadStore: l,
                    environment: d,
                    spaceStore: s,
                    userStore: c
                } = e;
                if (!l || !(0, n().Ci)(l)) return l;
                let u = d.defaultRecordCache.inMemoryRecordCache;
                for (let e of u.cacheOverrides.slice()) e.name === n().Ll && u.removeCacheOverride(e);
                let p = l.getTranscript(),
                    g = l.getParentId(),
                    m = l.getParentTable(),
                    f = null == (t = l.getData()) ? void 0 : t.workflow_id,
                    h = l.getType(),
                    x = null == (r = l.getData()) ? void 0 : r.title,
                    y = l.getSpaceId() ? ? s.id,
                    {
                        performResult: b
                    } = (0, i(377796).createAndCommit)({
                        userAction: "databaseAgent.persistTemporaryThread",
                        environment: d,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: y
                        },
                        perform: e => {
                            let t = (0, i(757688).aP)({
                                environment: d,
                                spaceStore: s,
                                userStore: c,
                                transcript: p,
                                transaction: e,
                                threadId: l.id,
                                workflowId: f,
                                threadType: h
                            });
                            return g && m && (0, i(173157).z)({
                                store: t,
                                transaction: e,
                                data: {
                                    parent_id: g,
                                    parent_table: m,
                                    space_id: y
                                }
                            }), x && (0, i(173157).z)({
                                store: t.getDataStore(),
                                transaction: e,
                                data: {
                                    title: x
                                }
                            }), t
                        }
                    });
                return o = l.id, a.delete(o), b ? ? i(174148).E.createChildStore(s, {
                    id: l.id,
                    spaceId: y,
                    table: i(832375).Toz
                })
            }
        },
        555676: (e, t, i) => {
            let n;

            function a(e) {
                n = e
            }

            function r() {
                return n
            }
            i.d(t, {
                w: () => a,
                x: () => r
            })
        },
        623644: (e, t, i) => {
            i.d(t, {
                NX: () => a,
                gp: () => o,
                h9: () => r,
                i6: () => d,
                rj: () => l,
                tw: () => n
            }), i(581454);
            let n = ["2021-05-11", "2021-05-13", "2021-08-16", "2022-02-22", "2022-06-28", "2025-09-03", "2026-03-11"],
                a = ["2022-06-28", "2025-09-03", "2026-03-11"],
                r = "2026-03-11",
                o = "2022-06-28",
                l = "2026-03-11";
            i(489561).CA.literals(...n);
            let d = "2025-09-03"
        },
        638501: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => n,
                plusSmallIcon: () => a
            }), i(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.74 2.74 10.52 10.52",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M8 2.74a.66.66 0 0 1 .66.66v3.94h3.94a.66.66 0 0 1 0 1.32H8.66v3.94a.66.66 0 0 1-1.32 0V8.66H3.4a.66.66 0 0 1 0-1.32h3.94V3.4A.66.66 0 0 1 8 2.74"
                    })
                },
                a = (0, i(104509).wt)("plusSmall", n, "small")
        },
        642065: (e, t, i) => {
            i.d(t, {
                $g: () => l,
                Bu: () => v,
                CL: () => b,
                Cn: () => M,
                G4: () => d,
                Ih: () => x,
                KI: () => n,
                MI: () => m,
                Mi: () => a,
                NL: () => f,
                O0: () => y,
                Yu: () => p,
                _Q: () => w,
                aL: () => c,
                at: () => g,
                gJ: () => r,
                hN: () => o,
                hR: () => s,
                kx: () => h,
                wd: () => u
            });
            let n = "28px",
                a = "14px",
                r = "12px",
                o = "16px",
                l = 1.5,
                d = 1.25,
                s = 1.25,
                c = 35,
                u = 21,
                p = 18,
                g = 34,
                m = 30,
                f = 28,
                h = 30,
                x = 32,
                y = 24,
                b = 24,
                v = 30,
                k = {
                    table: {
                        default: {
                            paddingTop: i(47080).Nh,
                            paddingBottom: i(47080).Nh,
                            paddingInlineStart: i(47080).Ke,
                            paddingInlineEnd: i(47080).Ke
                        },
                        text: {
                            paddingTop: i(47080).Zs,
                            paddingBottom: i(47080).Zs,
                            paddingInlineStart: i(47080).Ke,
                            paddingInlineEnd: i(47080).Ke
                        },
                        token: {
                            paddingTop: i(47080).hB,
                            paddingBottom: i(47080).hB,
                            paddingInlineStart: i(47080).Ke,
                            paddingInlineEnd: i(47080).Ke
                        },
                        checkbox: {
                            paddingTop: i(47080).Nl,
                            paddingBottom: i(47080).Nl,
                            paddingInlineStart: i(47080).Ke,
                            paddingInlineEnd: i(47080).Ke
                        },
                        button: {
                            paddingTop: i(47080).Mk,
                            paddingBottom: i(47080).Mk,
                            paddingInlineStart: i(47080).Ke,
                            paddingInlineEnd: i(47080).Ke
                        }
                    },
                    page: {
                        default: {
                            paddingTop: 7,
                            paddingBottom: 7,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        },
                        text: {
                            paddingTop: 6,
                            paddingBottom: 6,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        },
                        token: void 0,
                        checkbox: {
                            paddingTop: 9,
                            paddingBottom: 9,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        },
                        button: {
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        }
                    },
                    compact_page: {
                        default: {
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        },
                        text: {
                            paddingTop: 4,
                            paddingBottom: 4,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        },
                        token: {
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        },
                        checkbox: {
                            paddingTop: 7,
                            paddingBottom: 7,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        },
                        button: {
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6
                        }
                    },
                    card: {
                        default: {
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingInlineStart: 5,
                            paddingInlineEnd: 5
                        },
                        text: {
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingInlineStart: 5,
                            paddingInlineEnd: 5
                        },
                        token: void 0,
                        checkbox: {
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingInlineStart: 5,
                            paddingInlineEnd: 5
                        },
                        button: {
                            paddingTop: 4,
                            paddingBottom: 4,
                            paddingInlineStart: 4,
                            paddingInlineEnd: 4
                        }
                    }
                },
                S = {
                    table: {
                        default: {
                            paddingTop: i(47080).A4,
                            paddingBottom: i(47080).A4,
                            paddingInlineStart: i(47080).Ke,
                            paddingInlineEnd: i(47080).Ke
                        },
                        text: {
                            paddingTop: i(47080).Wh,
                            paddingBottom: i(47080).Wh,
                            paddingInlineStart: i(47080).Ke,
                            paddingInlineEnd: i(47080).Ke
                        },
                        token: {
                            paddingTop: i(47080).Sh,
                            paddingBottom: i(47080).Sh,
                            paddingInlineStart: i(47080).Ke,
                            paddingInlineEnd: i(47080).Ke
                        },
                        checkbox: {
                            paddingTop: i(47080).IH,
                            paddingBottom: i(47080).IH,
                            paddingInlineStart: i(47080).Ke,
                            paddingInlineEnd: i(47080).Ke
                        },
                        button: {
                            paddingTop: i(47080).DX,
                            paddingBottom: i(47080).DX,
                            paddingInlineStart: i(47080).Ke,
                            paddingInlineEnd: i(47080).Ke
                        }
                    },
                    page: k.page,
                    compact_page: k.compact_page,
                    card: k.card
                };

            function w(e) {
                let {
                    isPhone: t
                } = e;
                return t ? S : k
            }
            let M = {
                [i(696654).NY.ExtremeSmall]: void 0,
                [i(696654).NY.ExtraSmall]: void 0,
                [i(696654).NY.Small]: {
                    columnGap: 6,
                    rowGap: 4
                },
                [i(696654).NY.CompactEssential]: {
                    columnGap: 4,
                    rowGap: 6
                },
                [i(696654).NY.Medium]: {
                    columnGap: 8,
                    rowGap: 6
                },
                [i(696654).NY.Large]: {
                    columnGap: 10,
                    rowGap: 10
                },
                [i(696654).NY.Inline]: {
                    columnGap: 6,
                    rowGap: 4
                }
            }
        },
        644970: (e, t, i) => {
            i.d(t, {
                A: () => o
            });
            var n = i(296540),
                a = i(474848);
            let r = {
                    style0: {
                        display: "inline",
                        pointerEvents: "auto",
                        ...(0, i(793550).w_)()
                    }
                },
                o = n.memo(function(e) {
                    var t;
                    let {
                        parentStore: o,
                        withComma: l,
                        linkifyUrls: d,
                        disableCommentHighlight: s,
                        disableLinks: c,
                        shouldTruncate: u,
                        clampLines: p,
                        textValue: g
                    } = e, m = (0, i(533992).v3)(), f = (0, i(960253).e)(), h = (0, i(591404).Ol)(), {
                        collectionContextStore: x,
                        property: y
                    } = (0, n.useContext)(i(422575).L8), {
                        collectionViewBlockId: b,
                        collectionViewId: v
                    } = (0, i(682985).K8)(() => {
                        var e, t;
                        return {
                            collectionViewId: null == x || null == (e = x.collectionViewStore()) ? void 0 : e.id,
                            collectionViewBlockId: null == x || null == (t = x.collectionViewBlockStore()) ? void 0 : t.id
                        }
                    }, [x]), {
                        value: k
                    } = (0, i(815048).fJ)(i(406921).V, {
                        disabled: !(void 0 !== (t = g) && (0, i(247438).IcF)(t).length > 0)
                    }), S = (0, i(682985).K8)(() => {
                        let e = i(847591).qu.state,
                            t = i(847591).wb.state;
                        return e && y && g ? i(536614).nu({
                            textValue: g,
                            blockId: o.id,
                            textProps: {
                                type: "page_property_value_match",
                                collectionViewBlockId: b,
                                collectionViewId: v,
                                propertyId: y
                            },
                            find: e,
                            currentFocusedResult: t,
                            store: o
                        }) : g
                    }, [y, o, g, b, v]), w = (0, i(682985).K8)(() => {
                        if (i(332190).A.getPropertyId() !== y || i(332190).A.getBlockStore() !== o) return S;
                        let e = i(332190).A.getMultiSelection();
                        return e ? i(247438).Mwp({
                            textValue: S,
                            selection: {
                                startIndex: e.start.index,
                                endIndex: e.end.index
                            },
                            annotation: [i(247438).Ifu.TemporaryComment]
                        }) : g ? i(247438).Mwp({
                            textValue: S,
                            selection: {
                                startIndex: 0,
                                endIndex: i(247438).qAZ(g).length
                            },
                            annotation: [i(247438).Ifu.TemporaryComment]
                        }) : S
                    }, [o, y, g, S]), M = (0, i(682985).K8)(() => void 0 === w ? null : i(536614).S5({
                        environment: m,
                        textValue: w && {
                            value: w,
                            spaceId: (0, i(226221).e)(o.pointer.spaceId)
                        },
                        parentStore: o,
                        disableHover: !1,
                        disableStyleAnnotations: !1,
                        disableInsertedDeletedAnnotations: !1,
                        disableDateStyleAnnotations: !1,
                        disableSuggestionAnnotations: !1,
                        disableCommentAnnotations: s ? ? !1,
                        disabled: !0,
                        theme: i(632079).Tj,
                        themeMode: f,
                        disableLinks: c ? ? !1,
                        emojiType: h,
                        katex: k,
                        formulaValueTypes: [],
                        stopLinkPropagation: !0,
                        linkTargetBlank: !0
                    }), [w, m, o, s, c, h, k, f], {
                        silenceRerenderDefender: !0
                    }), I = (0, n.useMemo)(() => {
                        if (!d || void 0 === g) return null;
                        let e = (0, i(247438).k4p)(g);
                        return (0, i(147539).A)(e) ? (0, i(561872).MO)(g) : null
                    }, [d, g]), C = (0, i(960253).I)(() => ({
                        text: { ...u && !p ? i(699422).RC : void 0,
                            ...u && p ? { ...(0, i(418676).pA)(p),
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            } : {}
                        }
                    }), [u, p]);
                    return (0, a.jsxs)("span", {
                        style: C.text,
                        children: [I ? (0, a.jsx)(i(68774).N, {
                            href: I,
                            style: r.style0,
                            external: !0,
                            onClick: e => e.stopPropagation(),
                            children: M
                        }) : M, l ? ", " : null]
                    })
                })
        },
        685745: (e, t, i) => {
            i.d(t, {
                B: () => o
            });
            var n = () => i(129499),
                a = () => i(955630);

            function r(e) {
                for (let t of e) {
                    let e = function(e) {
                        let t = e.getTitleStore();
                        if (t && i(521595).n.findNodeFromStore(t)) return t
                    }(t);
                    if (e && t.getType() !== a().xd.code) return {
                        blockStore: t,
                        titleStore: e
                    }
                }
            }

            function o(e) {
                let t, a = r(e);
                if (!a) return;
                let o = r([...e].reverse());
                if (!o) return;
                let l = (0, i(787926).Ag)({
                    includeNonSelectableListContainer: !1,
                    rootStore: a.blockStore.getHighestContentBlockUIAncestor()
                });
                if (!l) return;
                let d = (0, i(787926).mP)(o.blockStore, l);
                if (d) {
                    for (let e of (0, i(827049).Y_)(d)) {
                        let i = e.value.store.getTitleStore();
                        if (i) {
                            let e = (0, n().s)(i);
                            e && (t = {
                                store: i,
                                index: e.endIndex
                            })
                        }
                    }
                    if (t) return {
                        start: {
                            store: a.titleStore,
                            index: 0
                        },
                        end: t
                    }
                }
            }
        },
        691509: (e, t, i) => {
            i.d(t, {
                A: () => r
            }), i(944114), i(898992), i(803949), i(581454);
            var n = i(296540),
                a = i(474848);
            let r = function({
                children: e,
                onClick: t,
                items: n,
                getKey: r,
                renderItem: o,
                selectedItem: d,
                onSelect: s,
                dontCloseParentOnSelect: c,
                menuTypeOverride: u,
                menuTitle: p,
                width: g,
                minWidth: m,
                disabled: f,
                originGap: h,
                originRectTransform: x,
                buttonPopupStore: y,
                sameWidthAsOrigin: b
            }) {
                let v = (0, i(682985).uB)(y, i(510969).A),
                    k = u ? ? (i(986939).A.isMobile ? i(649476).gu.Modal : i(649476).gu.Popup);
                return (0, a.jsx)(i(656252).A, {
                    popupType: function(e) {
                        switch (e) {
                            case i(649476).gu.ActionSheet:
                                return i(423291).n.SlideUp;
                            case i(649476).gu.Modal:
                                return i(423291).n.BottomSheet;
                            case i(649476).gu.Popup:
                                return i(423291).n.Popup
                        }
                    }(k),
                    bottomSheetInitialState: "half",
                    buttonPopupStore: v,
                    placementToOrigin: "bottom",
                    onClick: t,
                    content: e => (0, a.jsx)(l, {
                        parent: e,
                        items: n,
                        getKey: r,
                        renderItem: o,
                        selectedItem: d,
                        onSelect: s,
                        dontCloseParentOnSelect: c,
                        menuType: k,
                        menuTitle: p,
                        width: g,
                        minWidth: m
                    }),
                    disabled: f,
                    originGap: h,
                    originRectTransform: x,
                    sameWidthAsOrigin: b,
                    children: e
                })
            };

            function o(e, t, a, r, o, l, d, s) {
                return {
                    key: 0,
                    render: e => (0, n.createElement)(i(844565).A, { ...e,
                        key: t,
                        topBorder: t > 0
                    }),
                    items: e.map(e => ({
                        key: r(e),
                        render: t => o({ ...t,
                            value: e,
                            key: r(e),
                            selectedItem: l
                        }),
                        action: () => {
                            l !== e && d(e), s || a.close()
                        }
                    }))
                }
            }

            function l({
                parent: e,
                items: t,
                getKey: n,
                renderItem: r,
                selectedItem: d,
                onSelect: s,
                dontCloseParentOnSelect: c,
                menuType: u,
                menuTitle: p,
                width: g,
                minWidth: m
            }) {
                let f, h = [];
                if (t.length > 0 && t[0] instanceof Array) t.forEach((t, i) => {
                    let a = o(t, i, e, n, r, d, s, c);
                    h.push(a)
                });
                else {
                    let i = o(t, 0, e, n, r, d, s, c);
                    h.push(i)
                }
                let x = (0, a.jsx)(i(558045).A, {
                    type: i(558045).O.Vertical,
                    initialFocus: i(381453).SL(i(381453).Bq(t), e => i(381453).n4(e, d)),
                    sections: h
                });
                switch (u) {
                    case i(649476).gu.ActionSheet:
                        f = {
                            menuType: i(649476).gu.ActionSheet
                        };
                        break;
                    case i(649476).gu.Modal:
                        f = {
                            menuType: i(649476).gu.Modal,
                            title: p,
                            right: (0, a.jsx)(i(109939).sA, { ...i(789722).W.done
                            }),
                            onClickRight: e.close
                        };
                        break;
                    case i(649476).gu.Popup:
                        f = {
                            menuType: i(649476).gu.Popup,
                            width: g || 160,
                            minWidth: m
                        };
                        break;
                    default:
                        (0, i(722371).HB)(u)
                }
                return (0, a.jsx)(i(747369).A, { ...f,
                    children: x
                })
            }
        },
        707709: (e, t, i) => {
            i.r(t), i.d(t, {
                DockedSidebar: () => k
            });
            var n = i(296540);

            function a(e) {
                return {
                    opacity: +!!e,
                    scale: e ? 1 : i(736462).m7,
                    transformOrigin: "bottom right"
                }
            }

            function r(e) {
                return {
                    translateX: e ? 0 : "100%"
                }
            }
            i(944114), i(898992), i(354520), i(672577);
            var o = i(474848);
            let l = {
                background: "transparent",
                height: "100%",
                flexShrink: 0,
                flexGrow: 0,
                pointerEvents: "none"
            };

            function d(e) {
                let {
                    chatPanelVisibility: t,
                    editorWidthUsed: n,
                    animationConfig: a,
                    shouldAnimate: r
                } = e, {
                    isTablet: d
                } = (0, i(533992).Y0)(), s = function(e) {
                    let {
                        chatPanelVisibility: t,
                        editorWidthUsed: i
                    } = e;
                    return {
                        initial: {
                            width: 0
                        },
                        animate: {
                            width: "opening" === t || "open" === t ? i ? ? 0 : 0
                        }
                    }
                }({
                    chatPanelVisibility: t,
                    editorWidthUsed: n
                });
                return (0, o.jsx)(i(654979).A, {
                    style: l,
                    initial: s.initial,
                    animate: s.animate,
                    config: a,
                    skip: !r,
                    visible: !d
                })
            }
            let s = {
                position: "relative"
            };

            function c(e) {
                let t, {
                        chatPanelState: a,
                        chatPanelMode: r,
                        panelSize: l,
                        onDismiss: d,
                        onEsc: c,
                        fromSurface: u = "corner",
                        aiChatFeature: p
                    } = e,
                    g = (0, i(533992).v3)(),
                    m = (0, i(972740).L)(),
                    f = (0, i(682985).O$)(i(728372).AppStoreMainEditorCurrentBlockStore),
                    h = (0, i(682985).K8)(() => null != f && f.isPersonalHomePage() ? "home" : "page", [f]),
                    x = (0, i(960253).I)(() => {
                        let e = "sidebar" === r;
                        return {
                            content: {
                                position: "absolute",
                                bottom: 0,
                                insetInlineStart: 0,
                                insetInlineEnd: 0,
                                top: e ? 0 : void 0
                            },
                            layout: {
                                position: "relative",
                                ...e ? {
                                    flex: 1
                                } : {
                                    minHeight: l.height.min,
                                    maxHeight: l.height.max
                                }
                            }
                        }
                    }, [l.height.min, l.height.max, r]);
                (0, i(383953).w)(() => {
                    i(305721).trackAiOpened({
                        agentEnabled: !0,
                        surface: u,
                        cornerSurface: h
                    })
                });
                let {
                    state: y,
                    threadStore: b,
                    transcript: v
                } = (0, i(732877).j)({
                    clientStore: i(57168).defaultClientAIChatStore,
                    chatPanelState: a,
                    spaceStore: m
                });
                ! function(e) {
                    let {
                        clientStore: t,
                        threadStore: a
                    } = e, r = (0, i(533992).v3)(), o = (0, i(181347).yr)(), l = (0, n.useRef)(o);
                    l.current = o;
                    let d = (0, i(682985).K8)(() => {
                            if (!a) return !1;
                            let {
                                steps: e
                            } = (0, i(187353).A3)({
                                clientStore: t,
                                threadStore: a
                            });
                            return (0, i(997486).ar)((0, i(997486).i)(e))
                        }, [t, a]),
                        s = (0, n.useRef)(!1);
                    (0, n.useEffect)(() => (d && !s.current ? (0, i(168682).M)({
                        environment: r,
                        chatPanelMode: "sidebar",
                        trackAnalytics: !1,
                        saveUserPreference: !1
                    }) : !d && s.current && (0, i(168682).M)({
                        environment: r,
                        chatPanelMode: l.current.chatPanelMode,
                        trackAnalytics: !1,
                        saveUserPreference: !1
                    }), s.current = d, () => {
                        s.current && (0, i(168682).M)({
                            environment: r,
                            chatPanelMode: l.current.chatPanelMode,
                            trackAnalytics: !1,
                            saveUserPreference: !1
                        })
                    }), [d, r])
                }({
                    clientStore: i(57168).defaultClientAIChatStore,
                    threadStore: b
                });
                let k = (0, i(682985).K8)(() => i(562733).zI.state.isLoadingDependencies ? ? !1, []),
                    S = (0, i(346596).L)(g),
                    w = (0, i(558208).AD)(),
                    M = (0, n.useCallback)(({
                        newThreadStore: e
                    }) => {
                        let t = i(728372).AppStoreMainEditorCurrentBlockStore.state || S,
                            n = g.RouterStore.state.route,
                            a = (0, i(548124).shouldAllowOpeningAgentOnSpecifiedRoute)(n);
                        (t || a) && (w.reset(), (0, i(358667).openChatPanel)({
                            environment: g,
                            store: t,
                            chatPanelState: e ? {
                                isOpen: !0,
                                threadId: e.id
                            } : {
                                isOpen: !0,
                                isNewThread: !0
                            }
                        }))
                    }, [g, S, w]);
                switch (r) {
                    case "sidebar":
                        t = p || "agent";
                        break;
                    case "popup":
                    case "full":
                        t = p || "agent_popup";
                        break;
                    default:
                        (0, i(722371).HB)(r)
                }
                return (0, o.jsx)(i(19187).e.Provider, {
                    value: d,
                    children: (0, o.jsx)(i(316258).hP, {
                        surface: i(316258).wy.inferenceTranscriptChatView,
                        children: (0, o.jsx)("div", {
                            style: x.content,
                            children: (0, o.jsx)(i(4458).VP, {
                                width: "content" === l.width.resizeMode ? void 0 : l.width.value,
                                height: "content" === l.height.resizeMode ? void 0 : l.height.value,
                                style: x.layout,
                                children: m ? (0, o.jsx)(i(656592).NV, {
                                    aiChatFeature: t,
                                    clientStore: i(57168).defaultClientAIChatStore,
                                    hideAgentName: !0,
                                    onEsc: c,
                                    onThreadChange: M,
                                    parentStore: m,
                                    threadStore: b,
                                    threadStoreState: k ? "loading" : y,
                                    transcript: v || []
                                }) : (0, o.jsx)(i(4458).VP, {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    style: s,
                                    flex: "1 0 0",
                                    children: (0, o.jsx)(i(517334).k, {})
                                })
                            })
                        })
                    })
                })
            }

            function u(e) {
                let {
                    chatPanelMode: t
                } = e, n = (0, i(960253).e)(), a = (0, i(960253).I)(() => {
                    let e;
                    return "popup" === t && "dark" === n ? e = i(632079).Tj.gray.background.primary : "sidebar" === t && (e = "transparent"), {
                        shading: {
                            background: e,
                            willChange: "background",
                            position: "absolute",
                            inset: 0,
                            transition: `opacity ${i(736462).nW}ms ease-in-out, background ${i(736462).nW}ms ease-in-out`
                        }
                    }
                }, [t, n]);
                return (0, o.jsx)("div", {
                    style: a.shading
                })
            }
            let p = {
                height: "100%",
                zIndex: 1
            };

            function g(e) {
                let {
                    size: t,
                    anchorToSide: a,
                    minSize: r,
                    maxSize: l,
                    onSizeWillChange: d,
                    onSizeChanging: s,
                    onSizeChangeFinished: c,
                    onDismiss: u,
                    keyboardShortcut: g
                } = e, m = (0, i(109939).tz)(), f = (0, i(533992).v3)(), {
                    device: h
                } = f, [x, y] = (0, n.useState)(!1), [b, v] = (0, n.useState)({
                    x: 0,
                    y: 0
                }), [k, S] = (0, i(768397).s)(), w = (0, n.useRef)(null), M = (0, i(421573).A)(k, w), I = (0, n.useRef)(null), C = (0, n.useRef)(!1), j = (0, n.useCallback)(e => Math.max(r, Math.min(l, e)), [r, l]), P = (0, n.useCallback)(e => {
                    (0, i(471e3).I)({
                        environment: f
                    }), I.current = {
                        startX: e.currentX,
                        startSize: t
                    }, C.current = !1, null == d || d()
                }, [f, t, d]), T = (0, n.useCallback)(e => {
                    if (!I.current) return;
                    i(239134).clear(f), C.current = !0;
                    let {
                        startX: t,
                        startSize: n
                    } = I.current, r = e.currentX - t, o = j("right" === a ? n - ((0, i(619157).A1)() ? -r : r) : n + ((0, i(619157).A1)() ? -r : r));
                    null == s || s(o)
                }, [a, f, j, s]), A = (0, n.useCallback)(() => {
                    !C.current && u && u(), I.current = null, null == c || c()
                }, [u, c]), z = (0, n.useCallback)(() => {
                    I.current = null
                }, []), E = (0, n.useCallback)(() => {
                    var e;
                    let t = null == (e = w.current) ? void 0 : e.getBoundingClientRect();
                    t && v(e => ({
                        x: t.left + t.width / 2,
                        y: e.y || t.top + t.height / 2
                    }))
                }, []), B = (0, n.useCallback)(e => {
                    var t;
                    y(!0);
                    let i = null == (t = w.current) ? void 0 : t.getBoundingClientRect();
                    i && v({
                        x: i.left + i.width / 2,
                        y: e.clientY
                    })
                }, []), _ = (0, n.useCallback)(() => {
                    y(!0)
                }, []), U = (0, n.useCallback)(() => {
                    y(!1)
                }, []), O = (0, n.useCallback)(() => {
                    let e = j(t - i(736462).xw);
                    null == s || s(e), null == c || c(), requestAnimationFrame(E)
                }, [t, j, s, c, E]), R = (0, n.useCallback)(() => {
                    let e = j(t + i(736462).xw);
                    null == s || s(e), null == c || c(), requestAnimationFrame(E)
                }, [t, j, s, c, E]), D = (0, n.useCallback)(() => {
                    u && u()
                }, [u]);
                (0, n.useEffect)(() => {
                    requestAnimationFrame(E)
                }, [S, E]);
                let N = (t - r) / (l - r),
                    V = e => (0, o.jsx)(i(111010).D, {
                        as: "span",
                        colorVariant: "inverseSecondary",
                        children: e
                    }),
                    L = (0, n.useCallback)(() => {
                        let e = !!u,
                            t = !!g;
                        return e && t ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(i(109939).sA, {
                                defaultMessage: "Close <invertedcolor>Click or {keyboardShortcut}</invertedcolor>",
                                id: "collapsiblePanelResizer.tooltip.closeWithShortcut",
                                values: {
                                    invertedcolor: V,
                                    keyboardShortcut: g
                                }
                            }), (0, o.jsx)("br", {}), (0, o.jsx)(i(109939).sA, {
                                defaultMessage: "Resize <invertedcolor>Drag</invertedcolor>",
                                id: "collapsiblePanelResizer.tooltip.resizeMessage",
                                values: {
                                    invertedcolor: V
                                }
                            })]
                        }) : e ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(i(109939).sA, {
                                defaultMessage: "Close <invertedcolor>Click</invertedcolor>",
                                id: "collapsiblePanelResizer.tooltip.closeMessage",
                                values: {
                                    invertedcolor: V
                                }
                            }), (0, o.jsx)("br", {}), (0, o.jsx)(i(109939).sA, {
                                defaultMessage: "Resize <invertedcolor>Drag</invertedcolor>",
                                id: "collapsiblePanelResizer.tooltip.resizeMessage",
                                values: {
                                    invertedcolor: V
                                }
                            })]
                        }) : (0, o.jsx)(i(109939).sA, {
                            defaultMessage: "Resize <invertedcolor>Drag</invertedcolor>",
                            id: "collapsiblePanelResizer.tooltip.resizeMessage",
                            values: {
                                invertedcolor: V
                            }
                        })
                    }, [u, g]),
                    H = (0, i(619157).A1)() ? "left" === a ? R : O : "left" === a ? O : R,
                    F = (0, i(619157).A1)() ? "left" === a ? O : R : "left" === a ? R : O,
                    G = (0, i(960253).I)(() => ({
                        draggable: {
                            cursor: "col-resize",
                            height: "100%",
                            width: 12,
                            position: "absolute",
                            pointerEvents: "auto",
                            ..."right" === a ? {
                                insetInlineStart: 0
                            } : {
                                insetInlineEnd: 0
                            },
                            top: 0
                        },
                        resizer: {
                            position: "absolute",
                            ..."right" === a ? {
                                insetInlineStart: 0
                            } : {
                                insetInlineEnd: 0
                            },
                            top: 0,
                            height: "100%",
                            width: 1,
                            backgroundColor: x ? i(632079).Tj.border.primary : i(632079).Tj.border.secondary,
                            pointerEvents: "none"
                        }
                    }), [a, x]);
                return h.isChromebook ? null : (0, o.jsx)(i(369064).N, {
                    capture: S,
                    debugName: "SidebarResizer",
                    onLeft: H,
                    onRight: F,
                    onUp: i(763230).D_,
                    onDown: i(763230).D_,
                    onTab: i(763230).D_,
                    onUntab: i(763230).D_,
                    onEnter: D,
                    children: (0, o.jsx)(i(51831).m, {
                        content: L,
                        originRect: new DOMRect(b.x, b.y, 0, 0),
                        placement: "right" === a ? "left" : "right",
                        originGap: 16,
                        delayThreshold: 0,
                        children: e => (0, o.jsxs)("div", {
                            className: "wrapper",
                            style: p,
                            ...(0, i(63390).A)(e, {
                                onMouseMove: _,
                                onMouseLeave: U,
                                onMouseEnter: B
                            }),
                            children: [(0, o.jsx)("div", {
                                style: G.resizer
                            }), (0, o.jsx)(i(245483).A, {
                                onDraggableDragStart: P,
                                onDraggableDragMove: T,
                                onDraggableDragEnd: A,
                                onDraggableDragCancel: z,
                                disableVerticalEdgeScroll: !0,
                                disableHorizontalEdgeScroll: !0,
                                render: e => (0, o.jsx)("div", {
                                    className: "separator",
                                    ref: M,
                                    role: "separator",
                                    tabIndex: 0,
                                    "aria-label": m.formatMessage({
                                        id: "sidebarResizer.tooltip.resizeLabel",
                                        defaultMessage: "Resize with left and right arrow keys"
                                    }),
                                    "aria-orientation": "vertical",
                                    "aria-valuenow": Math.round(100 * N),
                                    "aria-valuemin": 0,
                                    "aria-valuemax": 100,
                                    style: G.draggable,
                                    ...e
                                })
                            })]
                        })
                    })
                })
            }
            let m = {
                    position: "absolute",
                    top: 0,
                    insetInlineStart: 0,
                    bottom: 0,
                    zIndex: 2
                },
                f = {
                    top: "50%",
                    insetInlineStart: "50%",
                    transform: "translate(calc(var(--direction, 1) * -50%), -50%)"
                },
                h = {
                    bottom: 0,
                    insetInlineEnd: 0
                };

            function x(e) {
                let t, {
                        chatSidebarRouteData: l,
                        fromSurface: s = "corner",
                        aiChatFeature: p
                    } = e,
                    x = (0, i(533992).v3)(),
                    y = (0, i(118872).cD)(),
                    b = (0, n.useRef)(!1),
                    v = (0, i(682985).O$)(i(584257).b),
                    k = (0, i(83208).X)("agent_popup_dnd"),
                    {
                        onDismiss: S,
                        onDismissed: w,
                        userPreferenceSidebarWidth: M,
                        visibility: I,
                        onEsc: C
                    } = (0, i(830949).c)(),
                    j = (0, i(682985).K8)(() => i(562733).zI.state.chatPanelMode, []),
                    P = (0, i(181347).yr)(),
                    T = (0, i(80384).n_)(),
                    A = (0, i(905189).o)(),
                    z = (0, i(682985).K8)(() => x.WindowSizeStore.getSafePaddingTopPx(0), [x]),
                    [E, B] = (0, n.useState)(void 0),
                    [_, U] = (0, n.useState)(void 0),
                    [O, R] = (0, n.useState)(void 0),
                    [D, N] = (0, n.useState)(void 0),
                    [V, L] = (0, n.useState)([]),
                    H = (0, i(682985).K8)(() => i(562733).zI.state.isDragging, []),
                    F = (t = (0, n.useRef)(l), l.isOpen && (t.current = l), t.current),
                    G = (0, i(682985).K8)(() => (0, i(715094).k)(x), [x]),
                    K = (0, n.useMemo)(() => ({
                        width: y.width - G,
                        height: T ? y.height - i(398879).ls : y.height
                    }), [y, G, T]),
                    W = (0, i(682985).K8)(() => i(562733).zI.state.isDragging ? "popup" : j, [j]),
                    $ = (0, n.useMemo)(() => ({ ...i(736462).UZ,
                        duration: i(736462).nn,
                        timingFunction: "ease-out"
                    }), []),
                    q = (0, n.useMemo)(() => ({ ...i(736462).UZ,
                        duration: i(736462).RY,
                        timingFunction: "ease-out"
                    }), []),
                    Y = (0, n.useMemo)(() => ("popup" === W || "full" === W) && "closing" === I ? $ : ("popup" === W || "full" === W) && "opening" === I ? q : i(736462).UZ, [W, I, $, q]),
                    {
                        handleAnimationEnd: X
                    } = function(e) {
                        let {
                            shouldAnimateRef: t,
                            chatPanelMode: a,
                            chatPanelVisibility: r,
                            onClosingFinished: o
                        } = e;
                        (0, i(668745).ZC)(a) !== a && (t.current = !0);
                        let l = (0, n.useCallback)(() => {
                            i(825244).P.setState(!1), t.current = !1, "closing" === r && o()
                        }, [r, t, o]);
                        return (0, n.useEffect)(() => {
                            "opening" === r && (t.current = !0, requestAnimationFrame(() => {
                                i(562733).zI.update(e => ({ ...e,
                                    chatPanelVisibility: "open"
                                }))
                            }))
                        }, [r, t]), {
                            handleAnimationEnd: l
                        }
                    }({
                        shouldAnimateRef: b,
                        chatPanelMode: j,
                        chatPanelVisibility: I,
                        onClosingFinished: w
                    }),
                    {
                        dragSize: J,
                        onSizeWillChange: Z,
                        onWidthChange: Q,
                        onSizeChangeFinished: ee
                    } = function(e) {
                        let {
                            shouldAnimateRef: t,
                            chatPanelMode: a
                        } = e, [r, o] = (0, n.useState)(void 0);
                        (0, n.useEffect)(() => {
                            o(void 0), i(562733).zI.update(e => ({ ...e,
                                isResizing: !1
                            }))
                        }, [a]);
                        let l = (0, n.useCallback)(() => {
                                t.current = !1, i(562733).zI.update(e => ({ ...e,
                                    isResizing: !0
                                }))
                            }, [t]),
                            d = (0, n.useCallback)(e => {
                                "sidebar" === a && o({
                                    width: e
                                })
                            }, [a]),
                            s = (0, n.useCallback)(() => {
                                if (i(562733).zI.update(e => ({ ...e,
                                        isResizing: !1
                                    })), "sidebar" === a && void 0 !== r && (i(562733).BC.setState(r.width), o(void 0), void 0 !== r.width)) {
                                    let e = r.width;
                                    i(562733).zI.update(t => ({ ...t,
                                        editorWidthUsed: e
                                    }))
                                }
                            }, [a, r]);
                        return {
                            dragSize: r,
                            onSizeWillChange: l,
                            onWidthChange: d,
                            onSizeChangeFinished: s
                        }
                    }({
                        shouldAnimateRef: b,
                        chatPanelMode: j
                    }),
                    {
                        editorWidthUsed: et,
                        panelSize: ei,
                        panelRect: en
                    } = (0, n.useMemo)(() => (0, i(581973).m)({
                        availableEditorSize: K,
                        chatPanelMode: W,
                        currentPerformanceToolbarHeight: T ? i(398879).ls : 0,
                        dragSize: J,
                        notionSidebarWidth: G,
                        userPreferenceSidebarWidth: M,
                        tempDragPosition: E,
                        mobileBottomPadding: A,
                        safeAreaTopPadding: z
                    }), [K, W, T, J, G, E, M, A, z]);
                ! function(e) {
                    let {
                        chatPanelMode: t,
                        chatSidebarPreferences: a,
                        availableEditorSize: r,
                        userPreferenceSidebarWidth: o
                    } = e, l = (0, i(533992).v3)(), d = (0, n.useRef)(null), s = (0, n.useRef)(r.width), c = (0, n.useRef)(!1), u = (0, n.useRef)(null), p = (0, i(682985).K8)(() => {
                        let e = (0, i(581973).d)({
                            availableEditorSize: r,
                            userPreferenceSidebarWidth: o
                        });
                        return r.width - e
                    }, [r, o]);
                    (0, n.useEffect)(() => {
                        ("sidebar" === t || "popup" === t) && t === a.chatPanelMode && (c.current = !0)
                    }, [t, a.chatPanelMode]), (0, n.useEffect)(() => {
                        if ("sidebar" !== t && "popup" !== t) return;
                        let e = p < i(736462).UP ? "popup" : "sidebar" === a.chatPanelMode ? "sidebar" : "popup";
                        s.current !== r.width && (s.current = r.width, null !== u.current && u.current !== e && (c.current = !1), u.current = e), c.current || (t !== e ? (d.current = e, (0, i(168682).M)({
                            environment: l,
                            chatPanelMode: e,
                            trackAnalytics: !1,
                            saveUserPreference: !1
                        })) : d.current = null), null === u.current && (u.current = e)
                    }, [t, a.chatPanelMode, p, r.width, l])
                }({
                    chatPanelMode: j,
                    chatSidebarPreferences: P,
                    availableEditorSize: K,
                    userPreferenceSidebarWidth: M
                });
                let ea = (0, n.useMemo)(() => (0, i(581973).d)({
                        availableEditorSize: K,
                        userPreferenceSidebarWidth: M
                    }), [K, M]),
                    er = x.device.isElectron && !v,
                    eo = er || !k,
                    el = (0, i(960253).e)(),
                    ed = (0, i(960253).I)(() => {
                        let e = "dark" === el ? [i(632079).Tj.shadow.base.sm, `0 0 0 1px ${i(632079).Tj.border.secondaryTranslucent}`, "0 0.5px 0 0 rgba(255, 255, 255, 0.20) inset"] : [i(632079).Tj.shadow.base.md, `0 0 0 1px ${i(632079).Tj.border.secondaryTranslucent}`],
                            t = (0, i(758360).f8)(p) ? e.join(", ") : i(632079).Tj.shadow.outline.lg;
                        return {
                            clip: {
                                overflow: "clip",
                                position: "fixed",
                                minWidth: 0,
                                pointerEvents: "none",
                                backgroundColor: i(632079).Tj.background.primary,
                                borderRadius: "popup" === W ? "22px 22px 32px 32px" : 0,
                                boxShadow: "popup" === W ? t : "none",
                                transitionProperty: "box-shadow, border-radius",
                                transitionTimingFunction: "ease-in-out, ease-in-out",
                                transitionDuration: `${i(736462).nW}ms, ${i(736462).nW}ms`
                            },
                            dropzoneSidebar: {
                                position: "fixed",
                                zIndex: 0,
                                pointerEvents: "none",
                                backgroundColor: i(632079).Tj.blue.background.secondaryTranslucent,
                                top: 0,
                                insetInlineEnd: 0,
                                bottom: 0,
                                width: ea
                            },
                            dragArea: {
                                position: "absolute",
                                top: 0,
                                insetInlineStart: 0,
                                insetInlineEnd: 0,
                                height: 44,
                                zIndex: 0,
                                pointerEvents: "auto",
                                cursor: eo ? void 0 : void 0 !== _ ? "grabbing" : "grab"
                            }
                        }
                    }, [W, ea, eo, _, p, el]);
                (0, n.useEffect)(() => {
                    void 0 !== J || "closing" === I || void 0 !== et && i(562733).zI.setState({ ...i(562733).zI.state,
                        editorWidthUsed: et
                    })
                }, [et, J, I]);
                let es = (0, n.useRef)(null),
                    ec = (0, n.useCallback)((e, t) => {
                        let n = [];
                        return ((0, i(619157).A1)() ? e <= ea : e >= y.width - ea) && n.push("sidebar"), n.push("popup"), n
                    }, [y.width, ea]),
                    eu = (0, n.useCallback)(e => {
                        e.preventDefault(), e.stopPropagation(), e.currentTarget.setPointerCapture(e.pointerId), L([j]);
                        let t = es.current;
                        (null == t ? void 0 : t.getBoundingClientRect()) && U({
                            x: e.clientX,
                            y: e.clientY
                        })
                    }, [j]),
                    ep = (0, n.useCallback)(e => {
                        if (!_) return;
                        let t = e.clientX - _.x,
                            n = e.clientY - _.y,
                            a = Math.sqrt(t * t + n * n);
                        if (!H && a < i(736462).GW) return;
                        if (!H) {
                            if (i(562733).zI.update(e => ({ ...e,
                                    isDragging: !0
                                })), "sidebar" === j) {
                                let t = Math.max(0, (0, i(619157).A1)() ? y.width - e.clientX - G - i(736462).Y_ / 2 : Math.min(e.clientX - G - i(736462).Y_ / 2, y.width - G - i(736462).Y_));
                                R({
                                    x: t,
                                    y: 0
                                }), B({
                                    x: t,
                                    y: 0
                                }), b.current = !1
                            } else if ("popup" === j) {
                                let e = en.fromLeftNumeric - G,
                                    t = en.fromTopNumeric;
                                R({
                                    x: e,
                                    y: t
                                }), B({
                                    x: e,
                                    y: t
                                }), b.current = !1
                            }
                        }
                        if (!H || !O) return;
                        let r = ec(e.clientX, e.clientY);
                        L(e => e.filter(e => r.includes(e))), N(r.find(e => !V.includes(e)));
                        let o = O.x + ((0, i(619157).A1)() ? -t : t),
                            l = O.y + n;
                        B({
                            x: Math.max(0, Math.min(o, y.width - i(736462).Y_)),
                            y: Math.max(0, Math.min(l, y.height - i(736462).wl))
                        })
                    }, [j, _, ec, V, O, H, G, en.fromLeftNumeric, en.fromTopNumeric, y.height, y.width]),
                    eg = (0, n.useCallback)(e => {
                        if (_) {
                            if (e.currentTarget.releasePointerCapture(e.pointerId), H) {
                                b.current = !0;
                                let t = ec(e.clientX, e.clientY).find(e => !V.includes(e));
                                t && t !== j && (0, i(168682).M)({
                                    environment: x,
                                    chatPanelMode: t,
                                    trackAnalytics: !0,
                                    saveUserPreference: !0
                                })
                            }
                            U(void 0), R(void 0), B(void 0), N(void 0), L([]), i(562733).zI.update(e => ({ ...e,
                                isDragging: !1
                            }))
                        }
                    }, [_, H, ec, j, V, x]),
                    em = (0, n.useMemo)(() => "sidebar" !== W ? null : (0, o.jsx)("div", {
                        style: m,
                        children: (0, o.jsx)(g, {
                            size: ei.width.value,
                            minSize: ei.width.min,
                            maxSize: ei.width.max,
                            anchorToSide: "right",
                            onSizeWillChange: Z,
                            onSizeChanging: Q,
                            onSizeChangeFinished: ee,
                            onDismiss: S,
                            keyboardShortcut: (0, o.jsx)(i(693592).A, {
                                name: "toggleAISidebar"
                            })
                        })
                    }), [W, ei.width.value, ei.width.min, ei.width.max, Z, Q, ee, S]),
                    ef = function(e) {
                        let {
                            chatPanelMode: t,
                            chatPanelVisibility: n
                        } = e, o = "opening" === n || "open" === n;
                        switch (t) {
                            case "popup":
                            case "full":
                                return {
                                    initial: a(!1),
                                    animate: a(o)
                                };
                            case "sidebar":
                                return {
                                    initial: r(!1),
                                    animate: r(o)
                                };
                            default:
                                (0, i(722371).HB)(t)
                        }
                    }({
                        chatPanelMode: W,
                        chatPanelVisibility: I
                    }),
                    eh = b.current || "opening" === I || "closing" === I;
                return (0, o.jsx)(i(369064).N, {
                    capture: "open" === I,
                    debugName: "ChatPanel",
                    onEsc: C,
                    onBackButton: S,
                    children: (0, o.jsxs)(o.Fragment, {
                        children: [H ? (0, o.jsx)(i(203066).N, {
                            children: "sidebar" === D ? (0, o.jsx)(i(153321).P.div, {
                                style: ed.dropzoneSidebar,
                                variants: i(736462).Kg,
                                initial: "hiddenVariant",
                                animate: "visibleVariant",
                                exit: "hiddenVariant",
                                transition: i(736462).S_
                            }, "sidebar-dropzone") : void 0
                        }) : void 0, (0, o.jsx)(d, {
                            chatPanelVisibility: I,
                            editorWidthUsed: et,
                            animationConfig: i(736462).UZ,
                            shouldAnimate: eh
                        }), (0, o.jsxs)(i(654979).A, {
                            className: "test123",
                            style: ed.clip,
                            initial: ef.initial,
                            animate: { ...ef.animate,
                                top: en.fromTopCss,
                                bottom: en.fromBottomCss,
                                insetInlineStart: en.fromLeftCss,
                                insetInlineEnd: en.fromRightCss
                            },
                            skip: !eh || H,
                            config: Y,
                            onAnimationEnd: X,
                            children: [(0, o.jsx)(u, {
                                chatPanelMode: W
                            }), (0, o.jsx)("div", {
                                ref: es,
                                role: "none",
                                className: er ? i(828432).sbV : void 0,
                                style: ed.dragArea,
                                onPointerDown: eo ? void 0 : eu,
                                onPointerMove: eo ? void 0 : ep,
                                onPointerUp: eo ? void 0 : eg
                            }), (0, o.jsx)("div", {
                                style: {
                                    width: ei.width.value,
                                    height: ei.height.value,
                                    position: "absolute",
                                    zIndex: 1,
                                    ...eh ? f : h
                                },
                                children: (0, o.jsx)(c, {
                                    chatPanelState: F,
                                    chatPanelMode: W,
                                    panelSize: ei,
                                    onDismiss: S,
                                    onEsc: S,
                                    fromSurface: s,
                                    aiChatFeature: p
                                })
                            }), em]
                        })]
                    })
                })
            }
            let y = {
                debugPanelContent: {
                    position: "relative",
                    height: "100%",
                    width: "100%",
                    background: i(632079).Tj.background.primary,
                    pointerEvents: "auto"
                },
                content: {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    insetInlineStart: 0,
                    insetInlineEnd: 0,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "visible"
                }
            };

            function b(e) {
                let {
                    chatPanelState: t
                } = e, a = (0, i(682985).K8)(() => i(562733).zI.state.debugSidebarWidth, []), r = (0, i(682985).K8)(() => (null === i(57168).defaultClientAIChatStore || void 0 === i(57168).defaultClientAIChatStore ? void 0 : i(57168).defaultClientAIChatStore.state.showDebug) ? ? !1, []);
                (0, n.useEffect)(() => {
                    i(562733).zI.setState({ ...i(562733).zI.state,
                        isDebugSidebarOpen: r
                    })
                }, [r]);
                let l = (0, i(972740).L)(),
                    d = (0, i(682985).K8)(() => {
                        if (l && t) return (0, i(548124).threadStoreGivenRouteData)({
                            spaceStore: l,
                            chatPanelState: t
                        })
                    }, [l, t]),
                    s = (0, n.useCallback)(e => {
                        i(562733).zI.setState({ ...i(562733).zI.state,
                            debugSidebarWidth: e
                        })
                    }, []);
                return (0, o.jsx)(i(901587).CollapsiblePanel, {
                    config: t.isOpen && r ? {
                        mode: "resizable",
                        min: i(736462).jp,
                        max: i(736462).pj,
                        defaultSize: a || i(736462).eI,
                        userOverride: void 0,
                        onUserResize: s
                    } : {
                        mode: "closed"
                    },
                    anchorToSide: "right",
                    children: (0, o.jsx)("div", {
                        style: y.debugPanelContent,
                        children: (0, o.jsx)("div", {
                            style: y.content,
                            children: (0, o.jsx)(i(301704).m, {
                                clientStore: i(57168).defaultClientAIChatStore,
                                threadStore: d
                            })
                        })
                    })
                })
            }
            let v = {
                container: {
                    order: i(866217).A.appCursorListener.aiChatSidebar,
                    cursor: "default",
                    zIndex: 110,
                    height: "100%",
                    insetInlineEnd: 0,
                    flexShrink: 0,
                    top: 100,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end"
                }
            };

            function k({
                aiChatFeature: e,
                routeData: t,
                visibility: a,
                mode: r,
                fromSurface: l = "corner"
            }) {
                let {
                    isMobileBrowser: d
                } = (0, i(533992).Y0)();
                (0, n.useLayoutEffect)(() => {
                    if (d) {
                        var e;
                        let t;
                        return ("open" === a || "opening" === a) && (e = i(632079).Tj.background.primary, document.body.style.overflow = "visible", e && (document.body.style.backgroundColor = e), (t = document.getElementById("notion-app")) && (t.style.overflow = "visible", t.style.overscrollBehavior = "contain")), () => {
                            let e;
                            document.body.style.overflow = "", document.body.style.backgroundColor = "", (e = document.getElementById("notion-app")) && (e.style.overflow = "", e.style.overscrollBehavior = "")
                        }
                    }
                }, [a, d]);
                let s = (0, i(463846).A)(!0);
                return "closed" === a ? null : (0, o.jsxs)("div", {
                    style: v.container,
                    className: `${i(828432).AF8} notion-print-ignore`,
                    ...s,
                    children: ["sidebar" === r && t ? (0, o.jsx)(b, {
                        chatPanelState: t
                    }) : null, t ? (0, o.jsx)(x, {
                        aiChatFeature: e,
                        chatSidebarRouteData: t
                    }) : null]
                })
            }
        },
        715094: (e, t, i) => {
            i.d(t, {
                k: () => n
            });

            function n(e) {
                let {
                    shouldShowSidebar: t
                } = (0, i(846044).X)(e), n = (0, i(712358).K)(e);
                return t && n && (0, i(845181).t)(e) ? (0, i(623179).r)(e) : 0
            }
        },
        726342: (e, t, i) => {
            i.d(t, {
                u: () => n
            });

            function n(e) {
                return e instanceof i(681735).h || e instanceof i(695906).SpaceStore || e instanceof i(970831).B
            }
        },
        732877: (e, t, i) => {
            i.d(t, {
                j: () => a
            });
            var n = i(296540);

            function a({
                clientStore: e,
                chatPanelState: t,
                spaceStore: r
            }) {
                let {
                    threadStore: o,
                    isNewThread: l
                } = function({
                    clientStore: e,
                    chatPanelState: t,
                    spaceStore: n
                }) {
                    let a = (0, i(533992).v3)(),
                        r = (0, i(876252).$)(),
                        o = (0, i(558208).AD)();
                    return {
                        threadStore: (0, i(682985).K8)(() => {
                            if (!n || !t || !r) return;
                            let e = (0, i(548124).getChatPanelState)(a) ? ? t;
                            if ("isNewThread" in e && e.isNewThread) {
                                n && o.getOrCreateThreadId({
                                    environment: a,
                                    spaceId: n.id,
                                    maybeThreadStore: void 0
                                });
                                return
                            } {
                                let t = (0, i(548124).threadStoreGivenRouteData)({
                                    spaceStore: n,
                                    chatPanelState: e
                                });
                                return (0, i(540328).dr)(null == t ? void 0 : t.id) ? ? t
                            }
                        }, [n, t, r, o, a]),
                        isNewThread: "isNewThread" in t && t.isNewThread
                    }
                }({
                    clientStore: e,
                    chatPanelState: t,
                    spaceStore: r
                }), {
                    steps: d,
                    allReady: s
                } = (0, i(682985).K8)(() => o ? (0, i(187353).A3)({
                    clientStore: e,
                    threadStore: o
                }) : {
                    steps: [],
                    allReady: !1
                }, [e, o]), [c, u] = (0, n.useState)(s), [p, g] = (0, n.useState)(void 0), m = s && !c;
                return ((p !== o || m) && (g(o), u(s)), l) ? {
                    state: "new",
                    threadStore: o,
                    transcript: d
                } : (s || c) && o ? {
                    state: "ready",
                    threadStore: o,
                    transcript: d
                } : {
                    state: "loading",
                    threadStore: void 0,
                    transcript: void 0
                }
            }
        },
        746204: (e, t, i) => {
            i.d(t, {
                w: () => a
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.87 3.72 7.16 12.56",
                    directional: !0,
                    svg: (0, i(474848).jsx)("path", {
                        d: "M6.131 9.381a.875.875 0 0 0 0 1.238l5.4 5.4a.875.875 0 1 0 1.238-1.238L7.987 10l4.782-4.781A.875.875 0 0 0 11.53 3.98z"
                    })
                },
                a = (0, i(104509).wt)("arrowChevronSingleLeftFill", n, "fill")
        },
        748356: (e, t, i) => {
            i.d(t, {
                f: () => c,
                l: () => h
            }), i(581454), i(296540);
            var n = i(474848);
            let a = (0, i(109939).YK)({
                learnMore: {
                    id: "banner.learnMore",
                    defaultMessage: "Learn more"
                },
                dismiss: {
                    id: "banner.dismiss",
                    defaultMessage: "Dismiss"
                }
            });

            function r(e, t) {
                return (0, i(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: i(632079).Tj[e].background.secondary,
                        padding: "8px 12px",
                        minHeight: 44,
                        flexShrink: 0
                    },
                    icon: {
                        width: i(986939).A.isMobile ? i(104509).Ev.default : i(104509).Ev.sm,
                        height: i(986939).A.isMobile ? i(104509).Ev.default : i(104509).Ev.sm,
                        fill: t ? i(632079).Tj[t].icon.accentPrimary : i(632079).Tj[e].icon.secondary
                    },
                    content: {
                        color: i(632079).Tj[e].text.secondary
                    },
                    contentAutoLayout: {
                        position: "relative",
                        color: i(632079).Tj[e].text.secondary
                    },
                    learnMoreIcon: {
                        fill: i(632079).Tj[e].icon.secondary
                    },
                    titleIcon: {
                        marginInlineEnd: 8
                    }
                }), [e, t])
            }

            function o(e) {
                let {
                    onDismiss: t
                } = e, r = (0, i(109939).tz)();
                return t ? (0, n.jsx)(i(374533).A, {
                    size: "xs",
                    onClick: t,
                    icon: i(25094).xMarkSmallIcon,
                    colorVariant: "primary",
                    ariaLabel: r.formatMessage(a.dismiss)
                }) : (0, n.jsx)("div", {})
            }

            function l(e) {
                let {
                    tint: t,
                    iconGroup: a,
                    style: r
                } = e;
                return a ? (0, n.jsx)(i(708966).Q, {
                    iconGroup: a,
                    variantName: "small",
                    colorPalette: t,
                    colorVariant: "secondary",
                    style: r
                }) : null
            }
            let d = {
                    k1xSpc: "x78zum5",
                    kXwgrk: "x1q0g3np",
                    kGNEyG: "x6s0dn4",
                    $$css: !0
                },
                s = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                };

            function c(e) {
                let {
                    tint: t,
                    action: a
                } = e, {
                    label: r,
                    onClick: o,
                    icon: l
                } = a, s = (0, i(960253).I)(() => ({
                    button: {
                        color: "gray" === t ? i(632079).Tj.text.primary : i(632079).Tj[t].text.secondary,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: i(632079).Tj[t].border.strongTranslucent
                    },
                    buttonHovered: {
                        backgroundColor: i(632079).Tj[t].background.secondaryTranslucent
                    },
                    buttonPressed: {
                        backgroundColor: i(632079).Tj[t].background.tertiaryTranslucent
                    }
                }), [t]);
                return (0, n.jsx)(i(548436).A, {
                    iconLeading: l ? {
                        icon: l,
                        size: "sm"
                    } : void 0,
                    onClick: o,
                    style: s.button,
                    hoveredStyle: s.buttonHovered,
                    pressedStyle: s.buttonPressed,
                    children: (0, n.jsx)(i(111010).D, {
                        styleKey: "bodyMedium",
                        style: d,
                        children: r
                    })
                })
            }

            function u(e) {
                let {
                    label: t,
                    iconGroup: d,
                    tint: u,
                    onDismiss: p,
                    actions: g,
                    onLearnMoreClick: m
                } = e, f = r(u), h = (0, i(109939).tz)();
                return (0, n.jsxs)(i(4458).fI, {
                    style: f.container,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [(0, n.jsxs)(i(4458).fI, {
                        style: f.contentAutoLayout,
                        alignItems: "center",
                        justifyContent: "center",
                        children: [(0, n.jsx)(l, {
                            tint: u,
                            iconGroup: d,
                            style: f.titleIcon
                        }), (0, n.jsx)(i(111010).D, {
                            styleKey: "bodyMedium",
                            children: t
                        }), m ? (0, n.jsx)(i(374533).A, {
                            onClick: m,
                            icon: () => (0, n.jsx)(i(708966).Q, {
                                iconGroup: i(799472).u,
                                variantName: "default",
                                colorPalette: u,
                                colorVariant: "secondary"
                            }),
                            ariaLabel: h.formatMessage(a.learnMore)
                        }) : void 0]
                    }), (0, n.jsxs)(i(4458).fI, {
                        gap: 12,
                        alignItems: "center",
                        justifyContent: "flex-end",
                        style: s,
                        flex: "1 1 0",
                        children: [(0, n.jsx)(i(4458).fI, {
                            gap: 8,
                            alignItems: "center",
                            justifyContent: "center",
                            style: s,
                            children: null == g ? void 0 : g.map((e, t) => e.isCustom ? e.render() : (0, n.jsx)(c, {
                                tint: u,
                                action: e
                            }, t))
                        }), (0, n.jsx)(o, {
                            onDismiss: p
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    label: t,
                    iconGroup: d,
                    staticIcon: u,
                    iconColor: p,
                    tint: g,
                    onDismiss: m,
                    actions: f,
                    onLearnMoreClick: h,
                    alignment: x = "center"
                } = e, y = r(g, p), b = (0, i(109939).tz)(), v = d ? (0, n.jsx)(l, {
                    tint: g,
                    iconGroup: d,
                    style: y.titleIcon
                }) : u ? u({ ...y.icon,
                    ...y.titleIcon
                }) : null;
                return (0, n.jsxs)(i(4458).fI, {
                    style: y.container,
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    gap: 8,
                    children: [(0, n.jsxs)(i(4458).fI, {
                        style: y.contentAutoLayout,
                        gap: 24,
                        flexGrow: 1,
                        alignItems: "center",
                        justifyContent: "start" === x ? "space-between" : "center",
                        children: [(0, n.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            style: s,
                            children: [v, (0, n.jsx)(i(111010).D, {
                                styleKey: "bodyMedium",
                                children: t
                            }), h ? (0, n.jsx)(i(51831).m, {
                                content: () => b.formatMessage(a.learnMore),
                                children: e => (0, n.jsx)(i(374533).A, {
                                    onClick: h,
                                    icon: () => (0, n.jsx)(i(708966).Q, {
                                        iconGroup: i(799472).u,
                                        variantName: "default",
                                        colorPalette: g,
                                        colorVariant: "secondary"
                                    }),
                                    ariaLabel: b.formatMessage(a.learnMore),
                                    ...e
                                })
                            }) : void 0]
                        }), f ? (0, n.jsx)(i(4458).fI, {
                            gap: 8,
                            style: s,
                            children: null == f ? void 0 : f.map((e, t) => e.isCustom ? e.render() : (0, n.jsx)(c, {
                                tint: g,
                                action: e
                            }, t))
                        }) : null]
                    }), (0, n.jsx)(o, {
                        onDismiss: m
                    })]
                })
            }

            function g(e) {
                let {
                    label: t,
                    description: a,
                    iconGroup: d,
                    staticIcon: u,
                    iconColor: p,
                    tint: g,
                    onDismiss: m,
                    actions: f,
                    noRoundedCorners: h
                } = e, x = r(g, p), y = (0, i(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: i(632079).Tj[g].background.secondary,
                        padding: 16,
                        borderRadius: 8 * !h,
                        minHeight: 44,
                        flexShrink: 0
                    }
                }), [g, h]), b = d ? (0, n.jsx)(l, {
                    tint: g,
                    iconGroup: d
                }) : u ? u(x.icon) : null;
                return (0, n.jsxs)(i(4458).fI, {
                    style: y.container,
                    gap: 8,
                    width: "100%",
                    children: [b ? (0, n.jsx)(i(4458).fI, {
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        children: b
                    }) : null, (0, n.jsxs)(i(4458).VP, {
                        style: x.content,
                        gap: 8,
                        flex: "1 1 0",
                        children: [(0, n.jsxs)(i(4458).VP, {
                            gap: 4,
                            style: s,
                            children: [(0, n.jsx)(i(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "gray" === g ? "primary" : void 0,
                                children: t
                            }), a ? (0, n.jsx)(i(111010).D, {
                                styleKey: "bodyRegular",
                                children: a
                            }) : null]
                        }), f ? (0, n.jsx)(i(4458).fI, {
                            gap: 8,
                            style: s,
                            children: null == f ? void 0 : f.map((e, t) => e.isCustom ? e.render() : (0, n.jsx)(c, {
                                tint: g,
                                action: e
                            }, t))
                        }) : null]
                    }), (0, n.jsx)(o, {
                        onDismiss: m
                    })]
                })
            }

            function m(e) {
                let {
                    label: t,
                    staticIcon: a,
                    tint: l,
                    iconColor: d,
                    onDismiss: u,
                    actions: p
                } = e, g = r(l, d), m = (0, i(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: i(632079).Tj[l].background.secondary,
                        paddingTop: 8,
                        paddingInlineEnd: 8,
                        paddingBottom: 8,
                        paddingInlineStart: 12,
                        borderRadius: 8,
                        minHeight: 44,
                        flexShrink: 0
                    }
                }), [l]);
                return (0, n.jsxs)(i(4458).fI, {
                    style: m.container,
                    gap: 8,
                    alignItems: p ? "center" : void 0,
                    justifyContent: p ? "center" : void 0,
                    width: "100%",
                    children: [a ? (0, n.jsx)(i(4458).fI, {
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        children: a(g.icon)
                    }) : null, (0, n.jsxs)(i(4458).fI, {
                        style: g.content,
                        alignItems: "center",
                        justifyContent: "space-between",
                        flex: "1 1 0",
                        children: [(0, n.jsx)(i(4458).VP, {
                            gap: 4,
                            style: s,
                            flex: "1 1 0",
                            children: (0, n.jsx)(i(111010).D, {
                                styleKey: "bodyRegular",
                                children: t
                            })
                        }), p ? (0, n.jsx)(i(4458).fI, {
                            gap: 8,
                            style: s,
                            children: null == p ? void 0 : p.map((e, t) => e.isCustom ? e.render() : (0, n.jsx)(c, {
                                tint: l,
                                action: e
                            }, t))
                        }) : null]
                    }), (0, n.jsx)(o, {
                        onDismiss: u
                    })]
                })
            }

            function f(e) {
                let {
                    tint: t,
                    onDismiss: a,
                    content: l,
                    alignment: d = "center",
                    verticalAlignment: s = "center"
                } = e, c = r(t);
                return (0, n.jsxs)(i(4458).fI, {
                    style: c.container,
                    gap: 8,
                    alignItems: s,
                    justifyContent: "space-between",
                    width: "100%",
                    children: [(0, n.jsx)(i(4458).fI, {
                        style: c.content,
                        flexGrow: 1,
                        justifyContent: d,
                        children: l
                    }), (0, n.jsx)(o, {
                        onDismiss: a
                    })]
                })
            }

            function h(e) {
                let {
                    display: t
                } = e;
                switch (t) {
                    case "inline":
                        return (0, n.jsx)(g, { ...e
                        });
                    case "full-width":
                        if (i(986939).A.isMobile) return (0, n.jsx)(u, { ...e
                        });
                        return (0, n.jsx)(p, { ...e
                        });
                    case "full-width-no-content":
                        return (0, n.jsx)(f, { ...e
                        });
                    case "inline-compact":
                        return (0, n.jsx)(m, { ...e
                        })
                }
                return (0, n.jsx)(n.Fragment, {})
            }
        },
        748869: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => a,
                linkSmallIcon: () => r
            }), i(296540);
            var n = i(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.19 12.19",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M12.848 2.8a3.145 3.145 0 0 0-4.448 0L6.918 4.283a.625.625 0 0 0 .884.883l1.482-1.482c.74-.74 1.94-.74 2.68 0l.294.294c.74.74.74 1.94 0 2.68l-1.482 1.483a.625.625 0 1 0 .884.884l1.482-1.482a3.145 3.145 0 0 0 0-4.449z"
                        }), (0, n.jsx)("path", {
                            d: "M10.472 5.47a.625.625 0 0 0-.884 0L5.229 9.83a.625.625 0 1 0 .884.883l4.359-4.359a.625.625 0 0 0 0-.883"
                        }), (0, n.jsx)("path", {
                            d: "M5.167 6.918a.625.625 0 0 0-.884 0L2.8 8.4a3.146 3.146 0 0 0 0 4.448l.294.294a3.145 3.145 0 0 0 4.449 0l1.482-1.482a.625.625 0 0 0-.884-.884L6.66 12.258c-.74.74-1.94.74-2.68 0l-.295-.294c-.74-.74-.74-1.94 0-2.68L5.167 7.8a.625.625 0 0 0 0-.883"
                        })]
                    })
                },
                r = (0, i(104509).wt)("linkSmall", a, "small")
        },
        752533: (e, t, i) => {
            function n(e, t) {
                let n = i(25825).C6.notionDateTimeToLuxon(e, t.locale);
                return (0, i(850640).eV)({
                    value: n,
                    preset: "medium_with_time"
                })
            }
            i.d(t, {
                t: () => r
            });
            let a = (0, i(109939).YK)({
                startAndEnd: {
                    defaultMessage: "{startDate} - {endDate}",
                    id: "searchHelpers.betweenStartAndEndDates"
                },
                afterStart: {
                    defaultMessage: "After {startDate}",
                    id: "searchHelpers.afterStartDate"
                },
                beforeEnd: {
                    defaultMessage: "Before {endDate}",
                    id: "searchHelpers.beforeEndDate"
                }
            });

            function r(e, t, o = i(943003).vz) {
                let l = "",
                    d = "";
                return (e.starting && (l = "date" === e.starting.type ? (0, i(348582).Y)(e.starting, t, o) : n(e.starting, t)), e.ending && (d = "date" === e.ending.type ? (0, i(348582).Y)(e.ending, t, o) : n(e.ending, t)), l && d) ? t.formatMessage(a.startAndEnd, {
                    startDate: l,
                    endDate: d
                }) : l ? t.formatMessage(a.afterStart, {
                    startDate: l
                }) : t.formatMessage(a.beforeEnd, {
                    endDate: d
                })
            }
        },
        770657: (e, t, i) => {
            i.d(t, {
                k: () => n,
                w: () => a
            });
            let n = 260,
                a = 24
        },
        784626: (e, t, i) => {
            i.d(t, {
                a: () => n
            });

            function n(e) {
                return !!(e.target && e.target instanceof HTMLElement && e.target.classList.contains("rdp-day"))
            }
        },
        789722: (e, t, i) => {
            i.d(t, {
                W: () => n
            });
            let n = (0, i(109939).YK)({
                done: {
                    id: "modal.doneButton",
                    defaultMessage: "Done"
                },
                cancel: {
                    id: "modal.cancelButton",
                    defaultMessage: "Cancel"
                },
                back: {
                    id: "modal.backButton",
                    defaultMessage: "Back"
                }
            })
        },
        799472: (e, t, i) => {
            i.d(t, {
                u: () => n
            });
            let n = (0, i(104509).xh)("questionMarkCircle", {
                default: {
                    loader: () => i.e(82106).then(i.bind(i, 80094))
                },
                small: {
                    loader: () => i.e(82106).then(i.bind(i, 211052))
                },
                fill: {
                    loader: () => i.e(82106).then(i.bind(i, 769980))
                },
                fillSmall: {
                    loader: () => i.e(82106).then(i.bind(i, 479491))
                }
            }, ["question", "query", "inquiry", "uncertain", "unknown", "help", "circle"])
        },
        811558: (e, t, i) => {
            var n = i(746518),
                a = i(439928),
                r = i(225397),
                o = Array;
            n({
                target: "Array",
                proto: !0
            }, {
                with: function(e, t) {
                    return a(r(this), o, e, t)
                }
            })
        },
        830949: (e, t, i) => {
            i.d(t, {
                c: () => a
            });
            var n = i(296540);

            function a() {
                let e = (0, i(533992).v3)(),
                    {
                        visibility: t,
                        mode: a
                    } = (0, i(682985).K8)(() => ({
                        visibility: i(562733).zI.state.chatPanelVisibility,
                        mode: i(562733).zI.state.chatPanelMode
                    }), []),
                    r = (0, i(682985).O$)(i(562733).BC),
                    o = "open" === t || "opening" === t || "closing" === t,
                    l = (0, n.useCallback)(() => {
                        i(562733).BC.setState(void 0), i(562733).zI.update(e => ({ ...e,
                            chatPanelVisibility: "closed",
                            editorWidthUsed: 0,
                            explicitlyAddedTextSelection: void 0
                        })), (0, i(705059).z)({
                            environment: e
                        })
                    }, [e]),
                    d = (0, n.useCallback)(() => {
                        o && (0, i(984107).dismissChatSidebar)()
                    }, [o]),
                    s = (0, n.useCallback)(() => {
                        o && (0, i(984107).dismissChatSidebar)()
                    }, [o]);
                return {
                    onDismissed: l,
                    onDismiss: d,
                    userPreferenceSidebarWidth: r,
                    visibility: t,
                    isOpen: o,
                    mode: a,
                    onEsc: "sidebar" === a ? void 0 : s
                }
            }
        },
        848135: (e, t, i) => {
            i.d(t, {
                B: () => a
            });
            var n = i(296540);

            function a() {
                let e = (0, n.useRef)(null),
                    [t, i] = (0, n.useState)(!1),
                    a = (0, n.useCallback)(() => {
                        let t = e.current;
                        t && i(t.matches(":hover"))
                    }, []);
                return [(0, n.useCallback)(t => {
                    t ? (t.addEventListener("mouseenter", a), t.addEventListener("mouseleave", a), e.current = t, a()) : e.current && (e.current.removeEventListener("mouseenter", a), e.current.removeEventListener("mouseleave", a), e.current = null)
                }, [a]), t, e]
            }
        },
        852864: (e, t, i) => {
            i.d(t, {
                H: () => n
            }), i(898992), i(672577);

            function n({
                spaceStore: e,
                userId: t,
                environment: a
            }) {
                let r = new(i(736309)).d(a, {
                    table: i(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return r ? i(994797).SpaceViewStore.createChildStore(e, {
                    id: r.id,
                    table: i(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        },
        866217: (e, t, i) => {
            i.d(t, {
                A: () => n
            });
            let n = {
                appCursorListener: {
                    sidebar: 1,
                    secondarySidebar: 2,
                    editor: 3,
                    aiChat: 3,
                    marketplace: 3,
                    teamHome: 3,
                    aiChatSidebar: 4
                }
            }
        },
        892452: (e, t, i) => {
            i.d(t, {
                f: () => r
            });
            var n = i(296540),
                a = i(474848);

            function r(e) {
                let t = (0, i(533992).v3)(),
                    {
                        store: r,
                        startBlockId: o,
                        size: l,
                        isDiscussion: d
                    } = e,
                    s = (0, i(682985).K8)(() => i(554181).E(r), [r]),
                    c = s && i(247438).FAw(s) >= 20,
                    u = (0, n.useMemo)(() => i(92513).JW(), []),
                    p = (0, i(682985).K8)(() => {
                        var e;
                        if ("tall" === l) return 200;
                        let t = r.getModel();
                        return t && t.isCollectionView() && !t.hasWikiBlockUri() && !(null != (e = r.getAssociatedCollectionStore()) && e.isPageTreeCollection()) ? 125 : 84
                    }, [l, r]),
                    g = "on" === (0, i(604306).r)("constant_time_page_lookup_in_memory_preview", {
                        enableEventTrailLogging: !0
                    }),
                    m = (0, n.useCallback)(e => {
                        g && e.exhausted && i(155095).Q.markVisited({
                            userId: t.currentUser.id,
                            pageId: r.pointer.id
                        })
                    }, [g, t, r.pointer.id]);
                return ((0, n.useEffect)(() => {
                    let e = i(287641).uk.getCurrentPageVisitId();
                    return i(611844).Z3(t, {
                        hover_session_id: u,
                        mentioned_page_id: r.pointer.id,
                        hover_content_type: c ? "ai_summary" : "content_preview",
                        page_visit_id: e
                    }), () => {
                        i(611844).Q_(t, {
                            hover_session_id: u,
                            hover_content_type: c ? "ai_summary" : "content_preview",
                            mentioned_page_id: r.pointer.id,
                            page_visit_id: e
                        })
                    }
                }, [t, u, c, r.pointer.id]), o || !c) ? (0, a.jsx)(i(742726).z, {
                    variant: "default",
                    store: r,
                    coverFormat: {
                        type: "page_content"
                    },
                    allowVideoPlayback: !1,
                    coverContentFadedOverlay: !0,
                    coverContentFadedOverlayStyle: i(268896).b.contentCoverFade,
                    coverHeight: p,
                    startBlockId: o,
                    contentWrapStyle: i(268896).b.contentCover,
                    imageCoverWrapStyle: i(268896).b.imageCoverWrap,
                    emptyGalleryCoverStyle: i(268896).b.contentCoverEmpty,
                    loadingShimmerStyle: i(268896).b.loadingShimmer,
                    showLoadingShimmer: !0,
                    showEmptyGalleryCover: !0,
                    onLoadProxiedImage: () => {},
                    rendererBlockStyle: i(268896).b.rendererBlockStyle,
                    renderAdditionalBlocks: !0,
                    exactBlockOnlyNoContentCover: d,
                    onContentReady: m
                }) : (0, a.jsx)("div", {
                    children: (0, a.jsx)("div", {
                        style: i(268896).b.summary,
                        children: (0, a.jsx)(i(644970).A, {
                            textValue: s,
                            parentStore: r
                        })
                    })
                })
            }
        },
        894658: (e, t, i) => {
            i.d(t, {
                e1: () => r,
                hC: () => l,
                vd: () => d
            }), i(581454);
            var n = i(296540),
                a = i(474848);

            function r(e) {
                let t = { ...i(44183).G,
                    ...i(456308).V
                };
                return "notion" === e ? i(539694)._ : t[e]
            }
            let o = {
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
                justifyContent: "flex-end",
                marginInlineStart: 5
            };

            function l(e) {
                let {
                    connectors: t,
                    maxBubbles: l,
                    iconSize: d,
                    bubbleStyles: s,
                    disableNumericalEllipsis: c
                } = e, u = (0, n.useMemo)(() => [...t.slice(0, l)].reverse(), [t, l]), p = Math.max(0, t.length - l), g = (0, i(960253).I)(() => ({
                    bubble: {
                        boxShadow: `${i(632079).Tj.border.secondaryTranslucent} 0 0 0 1px`,
                        borderRadius: "100%",
                        width: 20,
                        height: 20,
                        backgroundColor: i(632079).Tj.whiteButtonBackground,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginInlineStart: -5,
                        fontSize: 9,
                        fontWeight: i(699422).Wy.medium,
                        color: i(632079).Tj.text.tertiary,
                        ...s
                    }
                }), [s]);
                return 0 === t.length ? null : (0, a.jsxs)("div", {
                    style: o,
                    children: [!c && p > 0 ? (0, a.jsx)("div", {
                        style: g.bubble,
                        children: (0, a.jsx)("div", {
                            children: `+${p}`
                        })
                    }) : void 0, u.map((e, t) => (0, a.jsx)("div", {
                        style: g.bubble,
                        children: (0, a.jsx)(i(708966).Q, {
                            iconGroup: r(e),
                            style: {
                                width: d,
                                height: d
                            },
                            variantName: "default"
                        })
                    }, `${e}-${t}`))]
                })
            }

            function d(e) {
                if ("notion" === e.type) return "notion";
                if ((0, i(281708).SC)(e.type)) return e.type;
                if ("everything" !== e.type && "universal-workspace" !== e.type && "workspace" !== e.type && "page" !== e.type && "collection" !== e.type && "teamspace" !== e.type && "site" !== e.type && "notion-none" !== e.type && "ai-knowledge" !== e.type && "helpdocs" !== e.type && "web" !== e.type && "universal-none" !== e.type && "slackbot" !== e.type && "labeler" !== e.type) return (0, i(722371).HB)(e.type)
            }
        },
        901587: (e, t, i) => {
            i.r(t), i.d(t, {
                CollapsiblePanel: () => d,
                Resizer: () => p
            });
            var n = i(296540),
                a = i(474848);
            let r = {
                    insetInlineEnd: 0
                },
                o = {
                    insetInlineStart: 0
                },
                l = {
                    position: "relative"
                };

            function d(e) {
                let t, {
                        config: d,
                        anchorToSide: s,
                        children: u,
                        onDismiss: g,
                        onAnimationEnd: m,
                        keyboardShortcut: f,
                        onWidthWillChange: h,
                        onWidthChanged: x,
                        appearance: y
                    } = e,
                    b = (0, i(482170).l)(d),
                    v = (0, i(668745).ZC)(b),
                    [k, S] = (0, n.useState)(void 0),
                    w = "resizable" === b.mode,
                    M = "resizable" === b.mode ? b.min : 0,
                    I = "resizable" === b.mode ? b.max : 1 / 0,
                    [C, j] = (0, n.useState)(0);
                (0, n.useEffect)(() => {
                    let e;
                    switch (b.mode) {
                        case "closed":
                            e = 0;
                            break;
                        case "fill":
                            e = b.availableWidth;
                            break;
                        case "fixed":
                            e = b.width;
                            break;
                        case "resizable":
                            e = k ? ? b.userOverride ? ? b.defaultSize;
                            break;
                        default:
                            (0, i(722371).HB)(b)
                    }
                    let t = Math.max(M, Math.min(I, e));
                    t !== C && (null == h || h(t, void 0 !== k), j(t))
                }, [b, k, C, h, M, I]);
                let P = (0, n.useRef)(!1);
                v !== b && (P.current = (null == v ? void 0 : v.mode) !== b.mode);
                let T = "closed" !== b.mode,
                    A = (0, n.useCallback)(() => {
                        P.current = !1, null == m || m(b), null == x || x(C)
                    }, [b, m, C, x]);
                (0, n.useEffect)(() => {
                    S(void 0)
                }, [b]);
                let z = (0, n.useCallback)(e => {
                        w && (P.current = !1, S(e))
                    }, [w]),
                    E = (0, n.useCallback)(() => {
                        var e;
                        "resizable" === b.mode && k && (null == (e = b.onUserResize) || e.call(b, k), S(void 0), null == x || x(k))
                    }, [b, k, x]),
                    B = (0, i(960253).I)(() => ({
                        outer: {
                            overflow: "clip",
                            height: "100%",
                            position: "relative",
                            minWidth: 0,
                            pointerEvents: "none",
                            flexShrink: 0,
                            ..."elevated" === y && T ? {
                                boxShadow: i(632079).Tj.shadow.outline.lg
                            } : {}
                        },
                        borderArea: {
                            position: "absolute",
                            top: 0,
                            height: "100%",
                            zIndex: 100,
                            display: "flex",
                            insetInlineEnd: "left" === s ? 0 : void 0,
                            insetInlineStart: "right" === s ? 0 : void 0
                        }
                    }), [s, y, T]);
                "resizable" === b.mode ? t = (0, a.jsx)(p, {
                    size: C,
                    minSize: M,
                    maxSize: I,
                    anchorToSide: s,
                    onSizeChanging: z,
                    onSizeChangeFinished: E,
                    onDismiss: g,
                    keyboardShortcut: f
                }) : "fixed" === b.mode && (t = (0, a.jsx)(c, {}));
                let _ = P.current;
                return (0, a.jsx)(i(654979).A, {
                    style: B.outer,
                    forceCompositeLayer: !0,
                    config: {
                        duration: 400
                    },
                    animate: {
                        width: T ? C : 0
                    },
                    skip: !_,
                    onAnimationEnd: A,
                    children: (0, a.jsx)("div", {
                        style: {
                            width: C,
                            height: "100%",
                            position: "absolute",
                            ..."right" === s ? r : o
                        },
                        children: (0, a.jsxs)(i(4458).fI, {
                            className: "autolayout-row autolayout-fill-height autolayout-fill-width",
                            style: l,
                            children: [u, (0, a.jsx)("div", {
                                style: B.borderArea,
                                children: t
                            })]
                        })
                    })
                })
            }
            let s = {
                separator: {
                    width: 1,
                    backgroundColor: i(632079).Tj.border.secondary
                }
            };

            function c() {
                return (0, a.jsx)("div", {
                    style: s.separator
                })
            }
            let u = {
                height: "100%",
                zIndex: 1
            };

            function p(e) {
                let {
                    size: t,
                    anchorToSide: r,
                    minSize: o,
                    maxSize: l,
                    onSizeChanging: d,
                    onSizeChangeFinished: s,
                    onDismiss: c,
                    keyboardShortcut: p
                } = e, g = (0, i(109939).tz)(), m = (0, i(533992).v3)(), {
                    device: f
                } = m, [h, x] = (0, n.useState)(!1), [y, b] = (0, n.useState)({
                    x: 0,
                    y: 0
                }), [v, k] = (0, i(768397).s)(), S = (0, n.useRef)(null), w = (0, i(421573).A)(v, S), M = (0, n.useRef)(null), I = (0, n.useRef)(!1), C = (0, n.useCallback)(e => Math.max(o, Math.min(l, e)), [o, l]), j = (0, n.useCallback)(e => {
                    (0, i(471e3).I)({
                        environment: m
                    }), M.current = {
                        startX: e.currentX,
                        startSize: t
                    }, I.current = !1
                }, [m, t]), P = (0, n.useCallback)(e => {
                    if (!M.current) return;
                    i(239134).clear(m), I.current = !0;
                    let {
                        startX: t,
                        startSize: n
                    } = M.current, a = e.currentX - t, o = C("right" === r ? n - a : n + a);
                    null == d || d(o)
                }, [r, m, C, d]), T = (0, n.useCallback)(() => {
                    !I.current && c && c(), M.current = null, null == s || s()
                }, [c, s]), A = (0, n.useCallback)(() => {
                    M.current = null
                }, []), z = (0, n.useCallback)(() => {
                    var e;
                    let t = null == (e = S.current) ? void 0 : e.getBoundingClientRect();
                    t && b(e => ({
                        x: t.left + t.width / 2,
                        y: e.y || t.top + t.height / 2
                    }))
                }, []), E = (0, n.useCallback)(e => {
                    var t;
                    x(!0);
                    let i = null == (t = S.current) ? void 0 : t.getBoundingClientRect();
                    i && b({
                        x: i.left + i.width / 2,
                        y: e.clientY
                    })
                }, []), B = (0, n.useCallback)(() => {
                    x(!0)
                }, []), _ = (0, n.useCallback)(() => {
                    x(!1)
                }, []), U = (0, n.useCallback)(() => {
                    let e = C(t - 10);
                    null == d || d(e), null == s || s(), requestAnimationFrame(z)
                }, [t, C, d, s, z]), O = (0, n.useCallback)(() => {
                    let e = C(t + 10);
                    null == d || d(e), null == s || s(), requestAnimationFrame(z)
                }, [t, C, d, s, z]), R = (0, n.useCallback)(() => {
                    c && c()
                }, [c]);
                (0, n.useEffect)(() => {
                    requestAnimationFrame(z)
                }, [k, z]);
                let D = (t - o) / (l - o),
                    N = e => (0, a.jsx)(i(111010).D, {
                        as: "span",
                        colorVariant: "inverseSecondary",
                        children: e
                    }),
                    V = (0, n.useCallback)(() => {
                        let e = !!c,
                            t = !!p;
                        return e && t ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(i(109939).sA, {
                                defaultMessage: "Close <invertedcolor>Click or {keyboardShortcut}</invertedcolor>",
                                id: "collapsiblePanelResizer.tooltip.closeWithShortcut",
                                values: {
                                    invertedcolor: N,
                                    keyboardShortcut: p
                                }
                            }), (0, a.jsx)("br", {}), (0, a.jsx)(i(109939).sA, {
                                defaultMessage: "Resize <invertedcolor>Drag</invertedcolor>",
                                id: "collapsiblePanelResizer.tooltip.resizeMessage",
                                values: {
                                    invertedcolor: N
                                }
                            })]
                        }) : e ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(i(109939).sA, {
                                defaultMessage: "Close <invertedcolor>Click</invertedcolor>",
                                id: "collapsiblePanelResizer.tooltip.closeMessage",
                                values: {
                                    invertedcolor: N
                                }
                            }), (0, a.jsx)("br", {}), (0, a.jsx)(i(109939).sA, {
                                defaultMessage: "Resize <invertedcolor>Drag</invertedcolor>",
                                id: "collapsiblePanelResizer.tooltip.resizeMessage",
                                values: {
                                    invertedcolor: N
                                }
                            })]
                        }) : (0, a.jsx)(i(109939).sA, {
                            defaultMessage: "Resize <invertedcolor>Drag</invertedcolor>",
                            id: "collapsiblePanelResizer.tooltip.resizeMessage",
                            values: {
                                invertedcolor: N
                            }
                        })
                    }, [c, p]),
                    L = "left" === r ? U : O,
                    H = "right" === r ? U : O,
                    F = (0, i(960253).I)(() => ({
                        draggable: {
                            cursor: "col-resize",
                            height: "100%",
                            width: 12,
                            position: "absolute",
                            pointerEvents: "auto",
                            ..."right" === r ? {
                                insetInlineStart: 0
                            } : {
                                insetInlineEnd: 0
                            },
                            top: 0
                        },
                        resizer: {
                            position: "absolute",
                            ..."right" === r ? {
                                insetInlineStart: 0
                            } : {
                                insetInlineEnd: 0
                            },
                            top: 0,
                            height: "100%",
                            width: +!!h,
                            backgroundColor: h ? i(632079).Tj.border.primary : i(632079).Tj.border.secondary,
                            pointerEvents: "none"
                        }
                    }), [r, h]);
                return f.isChromebook ? null : (0, a.jsx)(i(369064).N, {
                    capture: k,
                    debugName: "SidebarResizer",
                    onLeft: L,
                    onRight: H,
                    onUp: i(763230).D_,
                    onDown: i(763230).D_,
                    onTab: i(763230).D_,
                    onUntab: i(763230).D_,
                    onEnter: R,
                    children: (0, a.jsx)(i(51831).m, {
                        content: V,
                        originRect: new DOMRect(y.x, y.y, 0, 0),
                        placement: "right" === r ? "left" : "right",
                        originGap: 16,
                        delayThreshold: 0,
                        children: e => (0, a.jsxs)("div", {
                            className: "wrapper",
                            style: u,
                            ...(0, i(63390).A)(e, {
                                onMouseMove: B,
                                onMouseLeave: _,
                                onMouseEnter: E
                            }),
                            children: [(0, a.jsx)("div", {
                                style: F.resizer
                            }), (0, a.jsx)(i(245483).A, {
                                onDraggableDragStart: j,
                                onDraggableDragMove: P,
                                onDraggableDragEnd: T,
                                onDraggableDragCancel: A,
                                disableVerticalEdgeScroll: !0,
                                disableHorizontalEdgeScroll: !0,
                                render: e => (0, a.jsx)("div", {
                                    className: "separator",
                                    ref: w,
                                    role: "separator",
                                    tabIndex: 0,
                                    "aria-label": g.formatMessage({
                                        id: "sidebarResizer.tooltip.resizeLabel",
                                        defaultMessage: "Resize with left and right arrow keys"
                                    }),
                                    "aria-orientation": "vertical",
                                    "aria-valuenow": Math.round(100 * D),
                                    "aria-valuemin": 0,
                                    "aria-valuemax": 100,
                                    style: F.draggable,
                                    ...e
                                })
                            })]
                        })
                    })
                })
            }
        },
        916769: (e, t, i) => {
            function n(e) {
                return e ? ? i(696654).NY.Medium
            }
            i.d(t, {
                Ug: () => n,
                YX: () => r,
                _t: () => l,
                x7: () => s
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            let a = new Set(["title", "text", "email", "phone_number", "number", "url", "date", "created_time", "last_edited_time", "auto_increment_id"]);

            function r(e) {
                return "empty" === e || "error" === e || a.has(e)
            }
            let o = new Set(["button", "file"]);

            function l(e) {
                return o.has(e)
            }
            let d = Object.create(null);

            function s(e) {
                let {
                    shouldSetCellHeight: t,
                    surface: n,
                    shouldWrap: a,
                    isLast: r,
                    disabled: o,
                    locked: l,
                    showIfEmpty: s,
                    isInvalidFormAnswer: c,
                    isLargeModule: u,
                    collectionViewStore: p
                } = e, {
                    isPhone: g
                } = (0, i(533992).Y0)(), m = (0, i(960253).e)(), f = (0, i(682985).K8)(() => "compact" === (0, i(535144).C)(p), [p]), h = [n, a, t, o, l, g, s, r, u, c, f, m].join("|");
                if (d[h]) return d[h];
                let x = function(e) {
                    let {
                        isPhone: t,
                        shouldSetCellHeight: n,
                        surface: a,
                        shouldWrap: r,
                        isLast: o,
                        disabled: l,
                        locked: d,
                        showIfEmpty: s,
                        isInvalidFormAnswer: c,
                        isLargeModule: u,
                        isCompactCardMode: p
                    } = e, g = (0, i(642065)._Q)({
                        isPhone: t
                    }), m = t ? i(47080).Um : i(47080).tt;
                    switch (a) {
                        case "table":
                            return {
                                buttonStyle: {
                                    display: "block",
                                    fontSize: t ? i(642065).hN : i(642065).Mi,
                                    lineHeight: t ? i(642065).G4 : i(642065).$g,
                                    overflow: "clip",
                                    width: "100%",
                                    whiteSpace: r ? "normal" : "nowrap",
                                    height: n ? m : void 0,
                                    minHeight: m,
                                    cursor: l || d ? "default" : "pointer",
                                    ...g.table.default
                                },
                                buttonHoveredStyle: {
                                    background: "unset"
                                },
                                buttonPressedStyle: {
                                    background: "unset"
                                },
                                textStyle: {
                                    lineHeight: t ? i(642065).G4 : i(642065).$g,
                                    whiteSpace: r ? "pre-wrap" : "nowrap",
                                    wordBreak: r ? "break-word" : "normal"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    flexWrap: r ? "wrap" : "nowrap",
                                    ...i(642065).Cn[i(696654).NY.Medium]
                                },
                                textLineHeight: i(642065).wd,
                                sizing: "default",
                                tokenFormat: t ? i(696654).NY.Large : i(696654).NY.Medium
                            };
                        case "gallery":
                        case "board":
                            return {
                                buttonStyle: {
                                    display: "flex",
                                    overflow: "hidden",
                                    alignItems: "center",
                                    borderRadius: 5,
                                    fontSize: t ? i(642065).Mi : i(642065).gJ,
                                    marginTop: 0,
                                    marginBottom: 0,
                                    marginInlineStart: 6 * !p,
                                    marginInlineEnd: 6 * !p,
                                    ...g.card.default,
                                    minHeight: i(642065).NL,
                                    whiteSpace: r ? "normal" : "nowrap",
                                    minWidth: s ? "auto" : "fit-content",
                                    width: s ? "auto" : "fit-content"
                                },
                                textStyle: {
                                    lineHeight: i(642065).$g,
                                    whiteSpace: r ? "pre-wrap" : "nowrap",
                                    wordBreak: r ? "break-word" : "normal",
                                    overflow: "hidden"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    minWidth: 0,
                                    flexShrink: 0,
                                    flexWrap: r ? "wrap" : "nowrap",
                                    width: r ? "100%" : void 0,
                                    ...i(642065).Cn[t ? i(696654).NY.Medium : i(696654).NY.Small]
                                },
                                textLineHeight: t ? i(642065).wd : i(642065).Yu,
                                sizing: t ? "default" : "small",
                                tokenFormat: t ? i(696654).NY.Medium : i(696654).NY.Small
                            };
                        case "relation_section":
                            return {
                                buttonStyle: {
                                    display: "inline-flex",
                                    fontSize: i(642065).gJ,
                                    overflow: "hidden",
                                    alignItems: "center",
                                    marginInlineStart: 0,
                                    minHeight: i(642065).Ih,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingInlineStart: 8,
                                    paddingInlineEnd: 8,
                                    borderRadius: 5
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    minWidth: 0,
                                    ...i(642065).Cn[i(696654).NY.Small]
                                },
                                textLineHeight: i(642065).Yu,
                                sizing: "small",
                                tokenFormat: i(696654).NY.Small
                            };
                        case "relation":
                            return {
                                buttonStyle: {
                                    fontSize: i(642065).gJ,
                                    overflow: "hidden",
                                    alignItems: "center",
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingInlineStart: 4,
                                    paddingInlineEnd: 4,
                                    borderRadius: 5,
                                    display: "flex",
                                    marginInlineStart: 8 * !t,
                                    marginInlineEnd: 8 * !!t,
                                    height: i(642065).O0,
                                    minWidth: 20
                                },
                                textStyle: {
                                    lineHeight: i(642065).$g,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    minWidth: 0,
                                    ...i(642065).Cn[i(696654).NY.Small]
                                },
                                textLineHeight: i(642065).Yu,
                                sizing: "small",
                                tokenFormat: i(696654).NY.Small
                            };
                        case "list":
                            return {
                                buttonStyle: {
                                    fontSize: i(642065).Mi,
                                    overflow: "hidden",
                                    alignItems: "center",
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingInlineStart: i(141973).iH,
                                    paddingInlineEnd: i(141973).iH,
                                    borderRadius: 5,
                                    display: "flex",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    flexBasis: "auto",
                                    marginInlineStart: 0,
                                    marginInlineEnd: 2 * !!t,
                                    minHeight: i(642065).kx,
                                    minWidth: 20
                                },
                                textStyle: {
                                    lineHeight: i(642065).$g,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    minWidth: 0,
                                    ...i(642065).Cn[i(696654).NY.Inline]
                                },
                                textLineHeight: i(642065).wd,
                                sizing: "small",
                                tokenFormat: i(696654).NY.Inline
                            };
                        case "page":
                            return {
                                buttonStyle: {
                                    fontSize: i(642065).Mi,
                                    overflow: "hidden",
                                    display: "inline-block",
                                    borderRadius: 4,
                                    width: "100%",
                                    minHeight: i(642065).at,
                                    ...g.page.default
                                },
                                textStyle: {
                                    lineHeight: i(642065).$g,
                                    wordBreak: "break-word",
                                    whiteSpace: "pre-wrap"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    ...i(642065).Cn[i(696654).NY.Medium]
                                },
                                textLineHeight: i(642065).wd,
                                sizing: "default",
                                tokenFormat: i(696654).NY.Medium
                            };
                        case "timeline":
                            return {
                                buttonStyle: {
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: i(642065).gJ,
                                    marginInlineEnd: 10 * !o
                                },
                                buttonHoveredStyle: {
                                    background: "unset"
                                },
                                buttonPressedStyle: {
                                    background: "unset"
                                },
                                textStyle: {
                                    lineHeight: i(642065).$g,
                                    wordBreak: "break-word",
                                    whiteSpace: "nowrap"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    minWidth: 0,
                                    ...i(642065).Cn[i(696654).NY.Small]
                                },
                                textLineHeight: i(642065).Yu,
                                sizing: "small",
                                tokenFormat: i(696654).NY.Inline
                            };
                        case "calendar":
                            return {
                                buttonStyle: {
                                    fontSize: i(642065).gJ,
                                    display: "flex",
                                    alignItems: "center",
                                    height: i(642065).CL,
                                    whiteSpace: "nowrap",
                                    width: "100%"
                                },
                                textStyle: {
                                    lineHeight: i(642065).$g,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    flexShrink: 0,
                                    flexWrap: "nowrap",
                                    ...i(642065).Cn[i(696654).NY.Small]
                                },
                                textLineHeight: i(642065).Yu,
                                sizing: "small",
                                tokenFormat: i(696654).NY.Small
                            };
                        case "feed":
                            return {
                                buttonStyle: {
                                    fontSize: i(642065).Mi,
                                    overflow: "hidden",
                                    alignItems: "center",
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingInlineStart: 4,
                                    paddingInlineEnd: 4,
                                    borderRadius: 5,
                                    display: "flex",
                                    marginInlineStart: 0,
                                    marginInlineEnd: 2 * !!t,
                                    minHeight: i(642065).kx,
                                    minWidth: 20,
                                    whiteSpace: r ? "normal" : "nowrap"
                                },
                                textStyle: {
                                    lineHeight: i(642065).$g,
                                    whiteSpace: r ? "pre-wrap" : "nowrap",
                                    wordBreak: r ? "break-word" : "normal",
                                    overflow: r ? void 0 : "hidden",
                                    textOverflow: r ? void 0 : "ellipsis"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    minWidth: 0,
                                    flexWrap: r ? "wrap" : "nowrap",
                                    ...i(642065).Cn[i(696654).NY.Inline]
                                },
                                textLineHeight: i(642065).wd,
                                sizing: "small",
                                tokenFormat: i(696654).NY.Inline
                            };
                        case "compact_page":
                            return {
                                buttonStyle: {
                                    fontSize: i(642065).Mi,
                                    overflow: "hidden",
                                    alignItems: "center",
                                    borderRadius: 4,
                                    display: "flex",
                                    width: "100%",
                                    minHeight: i(642065).MI,
                                    ...g.compact_page.default
                                },
                                textStyle: {
                                    lineHeight: i(642065).$g,
                                    wordBreak: "break-word",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    flexWrap: "nowrap",
                                    overflow: "hidden",
                                    alignItems: "center",
                                    ...i(642065).Cn[i(696654).NY.CompactEssential]
                                },
                                textLineHeight: i(642065).wd,
                                sizing: "default",
                                tokenFormat: i(696654).NY.CompactEssential
                            };
                        case "mini":
                            return {
                                buttonStyle: {
                                    fontSize: i(642065).Mi,
                                    overflow: "hidden",
                                    alignItems: "center",
                                    borderRadius: 4,
                                    display: "flex",
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingInlineStart: 6,
                                    paddingInlineEnd: 6,
                                    minWidth: 0,
                                    height: i(642065).Bu,
                                    maxWidth: 300
                                },
                                textStyle: {
                                    lineHeight: i(642065).$g,
                                    wordBreak: "break-word",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    flexWrap: "nowrap",
                                    overflow: "hidden",
                                    alignItems: "center",
                                    ...i(642065).Cn[i(696654).NY.Medium]
                                },
                                textLineHeight: i(642065).wd,
                                sizing: "default",
                                tokenFormat: i(696654).NY.Medium
                            };
                        case "property_module":
                            let f = {
                                fontSize: u ? i(642065).KI : i(642065).Mi,
                                overflow: "hidden",
                                display: "block",
                                borderRadius: 4,
                                width: "100%",
                                minHeight: i(642065).at,
                                ...g.page.default
                            };
                            return {
                                buttonStyle: f,
                                emptyButtonStyle: { ...f,
                                    ...g.page.text
                                },
                                textStyle: {
                                    lineHeight: u ? i(642065).hR : i(642065).$g,
                                    wordBreak: "break-word",
                                    whiteSpace: "pre-wrap",
                                    ...u ? {
                                        fontWeight: i(699422).Wy.medium
                                    } : {}
                                },
                                emptyTextStyle: {
                                    fontSize: i(642065).Mi,
                                    lineHeight: i(642065).$g,
                                    wordBreak: "break-word"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    ...i(642065).Cn[i(696654).NY.Medium]
                                },
                                textLineHeight: u ? i(642065).aL : i(642065).wd,
                                sizing: u ? "large" : "default",
                                tokenFormat: i(696654).NY.Medium
                            };
                        case "form_editor":
                        case "form_viewer":
                            return {
                                buttonStyle: {
                                    borderRadius: 6,
                                    boxShadow: "form_viewer" === a && c ? i(632079).Tj.inputRedFocusRing : `0 0 0 1px ${i(632079).Tj.border.strong} inset`,
                                    marginTop: 8,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingInlineStart: 10,
                                    paddingInlineEnd: 10,
                                    minHeight: 38,
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: 16,
                                    overflowX: "hidden",
                                    cursor: "text"
                                },
                                buttonHoveredStyle: {
                                    background: "unset"
                                },
                                buttonPressedStyle: {
                                    background: "unset"
                                },
                                tokenWrapStyle: {
                                    display: "flex",
                                    flexWrap: r ? "wrap" : "nowrap",
                                    ...i(642065).Cn[i(696654).NY.Large]
                                },
                                textLineHeight: i(642065).wd,
                                sizing: "default",
                                tokenFormat: i(696654).NY.Medium
                            };
                        default:
                            (0, i(722371).HB)(a)
                    }
                }({
                    isPhone: g,
                    shouldSetCellHeight: t,
                    surface: n,
                    shouldWrap: a,
                    isLast: r,
                    disabled: o,
                    locked: l,
                    showIfEmpty: s,
                    isInvalidFormAnswer: c,
                    isLargeModule: u,
                    isCompactCardMode: f
                });
                return d[h] = x, x
            }
        },
        973681: (e, t, i) => {
            i.d(t, {
                DZ: () => c,
                FH: () => u,
                Lp: () => d,
                QK: () => s,
                YX: () => p,
                ni: () => r
            });
            var n = i(296540),
                a = () => i(41403);

            function r(e) {
                var t, n, a;
                let r, {
                    collectionStore: o,
                    propertySchema: l,
                    collectionContextStore: d,
                    store: s,
                    property: c,
                    isJiraTwoWaySyncEnabled: u
                } = e;
                if ((0, i(23803).RL)({
                        isExternallyImportedAndSyncedCollection: o.isExternallyImportedAndSyncedCollection(),
                        propertyId: c,
                        collectionStore: o,
                        propertySchema: l
                    })) return !1;
                if (!u) return !0;
                let p = !!((null == (t = o.getFormat()) || null == (t = t.sync_state) ? void 0 : t.syncing) || (null == (n = o.getFormat()) ? void 0 : n.error));
                if ((null == l ? void 0 : l.synced_permissions) !== "read_write" || !(null != (a = o.getFormat().sync_state) && a.enable_two_way_sync) && (!(r = o.getSpaceStore()) || (0, i(262166).OX)(r.getSubscriptionTier())) || (0, i(260585).r)(o) || p || !i(205885).A.state.online) return !0;
                let g = null == d ? void 0 : d.externalSyncStore.state;
                return !(null != g && g.shouldAllowUserToEditSyncedCollection()) && (0, i(561872).VF)(s.getModel(), c, s.getRecordModel)
            }
            i(11448).Hx.Dates;
            let o = {
                    [i(11448).Hx.Dates]: {
                        propertyId: i(11448).Hx.Dates,
                        validationCheck: e => {
                            let {
                                collectionStore: t
                            } = e, n = t.getPropertyMapping();
                            return !!(null == n ? void 0 : n[i(11448).Hx.StatusV2])
                        }
                    }
                },
                l = {
                    date: [i(11448).Hx.Dates]
                };

            function d(e) {
                let {
                    collectionStore: t,
                    property: i,
                    propertySchema: n
                } = e;
                if (!n) return !0;
                let a = t.getPropertyMapping();
                if (!a) return !1;
                for (let e of l[n.type] ? ? []) {
                    let n = o[e];
                    if (!n.validationCheck({
                            collectionStore: t
                        })) continue;
                    let r = null == a ? void 0 : a[n.propertyId];
                    if (i === n.propertyId || i === r) return !0
                }
                return !1
            }

            function s({
                store: e,
                property: t,
                surface: i,
                onClick: a,
                collectionStore: r,
                blockPropertyValueOverlayStore: o,
                disableHorizontalEdgeScroll: l,
                focusButtonAfterClose: d
            }, c) {
                return (0, n.useMemo)(() => ({
                    store: e,
                    property: t,
                    surface: i,
                    onClick: a,
                    collectionStore: r,
                    blockPropertyValueOverlayStore: o,
                    disableHorizontalEdgeScroll: l,
                    isStatusCheckbox: null == c ? void 0 : c.isStatusCheckbox,
                    focusButtonAfterClose: d
                }), [o, r, l, i, null == c ? void 0 : c.isStatusCheckbox, a, t, e, d])
            }

            function c(e, t, n) {
                return (0, i(682985).K8)(() => {
                    if (!e.isDefined() || !e.isTemplate()) return;
                    let a = null == n ? void 0 : n.type;
                    if (!(0, i(9247).mF)(a)) return;
                    let r = e.getPropertyValue(t);
                    if (!r) return;
                    let o = null == r ? void 0 : r[0];
                    if (o && i(247438).qXl(o)) {
                        let e = i(247438).PVS(i(247438).wQU(o)),
                            t = e && i(247438).y0Y(e);
                        return t && {
                            templateVariable: t.type
                        }
                    }
                }, [t, n, e], {
                    debugName: "useTemplateVariableContext"
                })
            }

            function u(e) {
                var t;
                let {
                    collectionStore: n,
                    propertySchema: a,
                    isJiraTwoWaySyncEnabled: r,
                    surface: o,
                    propertyId: l
                } = e;
                return !(!n || !n.isExternallyImportedAndSyncedCollection() || !r || "page" !== o || !(null != (t = n.getFormat().sync_state) && t.enable_two_way_sync) || (null == a ? void 0 : a.synced_permissions) === "read_write" || l && (0, i(23803).sc)({
                    propertyId: l,
                    collectionStore: n,
                    propertySchema: a,
                    isExternallyImportedAndSyncedCollection: n.isExternallyImportedAndSyncedCollection()
                })) && !0
            }

            function p(e) {
                let {
                    newNumberValue: t,
                    environment: n,
                    stores: r,
                    spaceId: o
                } = e, l = i(272139).h(t);
                (0, i(377796).createAndCommit)({
                    userAction: "BlockPropertyValueOverlay.handleNumberValueChange",
                    environment: n,
                    cellTarget: o ? {
                        spaceWithId: o
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        for (let t of r) a().R9({
                            environment: n,
                            store: t,
                            value: l,
                            transaction: e
                        })
                    }
                })
            }
        },
        996712: (e, t, i) => {
            i.d(t, {
                A: () => l
            });
            var n = i(296540),
                a = i(474848);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.86 2.3 12.06 11.39",
                    svg: (0, a.jsx)("path", {
                        d: "M11.268 2.681 9.325 3.874a6.5 6.5 0 0 1-1.47.666v5.324a6.5 6.5 0 0 1 1.47.665l1.943 1.194zm1 9.413h.056a1.59 1.59 0 0 0 1.59-1.59V3.9a1.59 1.59 0 0 0-1.646-1.59zm-5.413-7.33q-.45.065-.91.065H3.381c-.84 0-1.52.68-1.52 1.52v1.706c0 .674.439 1.246 1.047 1.445h3.947zm-2.223 8.145L3.906 10.5h2.949v2.431a1.1 1.1 0 0 1-1.047.76h-.123a1.1 1.1 0 0 1-1.053-.782"
                    })
                },
                o = (0, i(104509).wt)("megaphoneFillSmall", r, "fillSmall"),
                l = n.forwardRef(function(e, t) {
                    let {
                        teamStore: n,
                        renderAsEveryoneMention: r
                    } = e, l = (0, i(682985).K8)(() => n.getName(), [n]);
                    return (0, a.jsx)(i(95582).A, { ...e,
                        icon: r ? (0, a.jsx)(i(16275).I, {
                            icon: o,
                            size: "sm"
                        }) : (0, a.jsx)(i(729746).x, {
                            size: 14,
                            store: n,
                            disabled: !0
                        }),
                        title: r ? (0, a.jsx)(i(109939).sA, {
                            id: "posts.teamMenuItem.everyoneMention",
                            defaultMessage: "@everyone"
                        }) : l,
                        ref: t,
                        inline: !0,
                        caption: r ? (0, a.jsx)(i(109939).sA, {
                            id: "posts.teamMenuItem.caption",
                            defaultMessage: "Notifies everyone in the teamspace"
                        }) : void 0
                    })
                })
        },
        996903: (e, t, i) => {
            i.d(t, {
                i: () => n
            });

            function n(e) {
                let t = e.getSettings(),
                    n = null == t ? void 0 : t.signup_time;
                return n ? (0, i(362008).Mn)(n) : null
            }
        }
    }
]);