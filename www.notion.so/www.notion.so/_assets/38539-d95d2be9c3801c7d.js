"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [38539, 72181], {
        46552: (e, t, a) => {
            a.d(t, {
                P: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.37 6.08 19.25 8.5",
                    svg: (0, a(474848).jsx)("path", {
                        fillRule: "evenodd",
                        d: "M14.5 6.081c1.576 0 2.938.968 3.59 2.375H19a.625.625 0 0 1 0 1.25h-.543q.042.307.043.625c0 2.347-1.79 4.25-4 4.25s-4-1.903-4-4.25q.001-.547.124-1.056a1.53 1.53 0 0 0-1.249 0q.123.507.125 1.056c0 2.347-1.79 4.25-4 4.25s-4-1.903-4-4.25q0-.319.043-.625H1a.625.625 0 0 1 0-1.25h.91c.652-1.407 2.014-2.375 3.59-2.375 1.444 0 2.709.814 3.412 2.033a2.78 2.78 0 0 1 2.174 0c.703-1.22 1.97-2.033 3.414-2.033m-9 1.25c-1.448 0-2.75 1.27-2.75 3s1.302 3 2.75 3 2.75-1.27 2.75-3-1.302-3-2.75-3m9 0c-1.448 0-2.75 1.27-2.75 3s1.302 3 2.75 3 2.75-1.27 2.75-3-1.302-3-2.75-3",
                        clipRule: "evenodd"
                    })
                },
                i = (0, a(104509).wt)("eyeglasses", n, "default")
        },
        221507: (e, t, a) => {
            a.d(t, {
                c: () => i
            });
            let n = {};

            function i(e) {
                let t = (0, a(15859).X$)(e),
                    i = null == t ? void 0 : t.chatIcon;
                if (i) return n[i]
            }
        },
        265035: (e, t, a) => {
            a.r(t), a.d(t, {
                SCROLLING_SQUIGGLE_DEFAULTS: () => r,
                ScrollingSquiggle: () => o
            });
            var n = a(296540),
                i = a(474848);
            let r = {
                width: 24,
                height: 16,
                tempo: 18,
                minLoopSize: 24,
                maxLoopSize: 32,
                acceleration: .3,
                tailLength: 72,
                strokeWidth: 1.5,
                loopSpacing: 1.3,
                modulationSpeed: .4,
                modulationPhaseOffset: 2,
                tempoModulation: 10,
                accelerationModulation: .12
            };

            function o(e) {
                let {
                    style: t,
                    width: o = r.width,
                    height: l = r.height,
                    tempo: d = r.tempo,
                    minLoopSize: s = r.minLoopSize,
                    maxLoopSize: c = r.maxLoopSize,
                    acceleration: u = r.acceleration,
                    tailLength: h = r.tailLength,
                    strokeWidth: p = r.strokeWidth,
                    strokeColor: g,
                    loopSpacing: m = r.loopSpacing,
                    modulationSpeed: f = r.modulationSpeed,
                    modulationPhaseOffset: v = r.modulationPhaseOffset,
                    tempoModulation: y = r.tempoModulation,
                    accelerationModulation: T = r.accelerationModulation
                } = e, S = (0, n.useRef)(null), M = (0, n.useRef)(), C = (0, n.useRef)(!0), b = (0, a(960253).e)(), A = (0, a(632079).O4)({
                    theme: b
                }), w = (0, n.useMemo)(() => {
                    let e = l / 2,
                        t = o / 200 * 8 * m,
                        a = Math.min(s / 100 * l, .45 * l),
                        n = Math.min(c / 100 * l, .45 * l),
                        i = Math.max(3, h * Math.min(1, o / 200)),
                        r = .95 * o - n;
                    return {
                        W: o,
                        H: l,
                        BASE_Y: e,
                        FRAMES_PER_RAD: d,
                        SUB_STEPS: 3,
                        DX_PER_RAD: t,
                        ACC_FACTOR: u,
                        MIN_R: a,
                        MAX_R: n,
                        R_BASE: (a + n) / 2,
                        R_VAR: (n - a) / 2,
                        R_FREQ1: .2,
                        R_FREQ2: .1,
                        TAIL_RADS: i,
                        PURGE_PAD_R: 5,
                        START_OFFSET: r,
                        D_THETA_PER_SECOND: Math.PI / d * 60
                    }
                }, [o, l, d, s, c, u, h, m]), I = (0, n.useMemo)(() => ({
                    modulationSpeed: f,
                    modulationPhaseOffset: v,
                    tempoModulation: y,
                    accelerationModulation: T
                }), [f, v, y, T]);
                return (0, n.useEffect)(() => {
                    let e = () => {
                        C.current = !document.hidden
                    };
                    return document.addEventListener("visibilitychange", e), () => {
                        document.removeEventListener("visibilitychange", e)
                    }
                }, []), (0, n.useEffect)(() => {
                    let e = S.current;
                    if (!e) return;
                    let t = e.getContext("2d", {
                        willReadFrequently: !1,
                        alpha: !0,
                        desynchronized: !0
                    });
                    if (!t) return;
                    e.width = 2 * o, e.height = 2 * l, t.scale(2, 2), t.imageSmoothingEnabled = !1;
                    let {
                        W: a,
                        H: n,
                        BASE_Y: i,
                        SUB_STEPS: r,
                        DX_PER_RAD: s,
                        ACC_FACTOR: c,
                        MIN_R: u,
                        R_BASE: h,
                        R_VAR: m,
                        R_FREQ1: f,
                        R_FREQ2: v,
                        TAIL_RADS: y,
                        PURGE_PAD_R: T,
                        START_OFFSET: b
                    } = w;
                    t.lineCap = "round", t.lineJoin = "round", t.strokeStyle = g || A.text.primary, t.lineWidth = p;
                    let k = 0,
                        x = performance.now(),
                        R = performance.now(),
                        P = Array(1e3),
                        _ = 0,
                        j = 0,
                        B = 0,
                        F = 0,
                        O = 0;
                    return M.current = requestAnimationFrame(() => (function e(t) {
                        let o, l = performance.now(),
                            p = Math.min((l - x) / 1e3, .1);
                        x = l;
                        let g = Math.sin(2 * Math.PI * I.modulationSpeed * ((l - R) / 1e3) + I.modulationPhaseOffset),
                            S = d + I.tempoModulation * g,
                            A = c + I.accelerationModulation * g,
                            w = F > 5 ? Math.max(1, Math.floor(r / 2)) : r,
                            H = Math.PI / Math.max(1, S) * 60 * p * (1 + -(A * Math.sin(k))) / w;
                        for (let e = 0; e < w; e++) k += H, P[j] = function(e) {
                            let t = Math.max(u, h + m * (.6 * Math.sin(f * e) + .4 * Math.sin(v * e + 1.1)));
                            return {
                                x: e * s + t * Math.cos(e),
                                y: i - t * Math.sin(e),
                                t: e
                            }
                        }(k), j = (j + 1) % 1e3, B < 1e3 ? B++ : _ = (_ + 1) % 1e3;
                        let E = k - y;
                        for (; B > 0 && P[_].t < E - T;) _ = (_ + 1) % 1e3, B--;
                        let U = k * s - b,
                            D = U - O;
                        O = U, Math.abs(D) < a && (D > 0 ? t.clearRect(0, 0, Math.ceil(D) + 10, n) : D < 0 && t.clearRect(a + Math.floor(D) - 10, 0, -D + 10, n)), t.clearRect(0, 0, a, n), t.save(), t.translate(-U, 0);
                        let L = _,
                            W = 0;
                        for (; W < B && P[L].t < E;) L = (L + 1) % 1e3, W++;
                        if (0 === W || 0 === B) o = P[_];
                        else if (W < B) {
                            let e = P[(L - 1 + 1e3) % 1e3],
                                t = P[L],
                                a = (E - e.t) / (t.t - e.t);
                            o = {
                                x: e.x + (t.x - e.x) * a,
                                y: e.y + (t.y - e.y) * a
                            }
                        }
                        if (o && B > 0) {
                            t.beginPath(), t.moveTo(o.x, o.y);
                            let e = L;
                            for (let a = W; a < B; a++) t.lineTo(P[e].x, P[e].y), e = (e + 1) % 1e3;
                            t.stroke()
                        }
                        t.restore(), performance.now() - l > 16 ? F++ : F > 0 && (F = Math.max(0, F - .1)), C.current ? M.current = requestAnimationFrame(() => e(t)) : setTimeout(() => {
                            C.current && (M.current = requestAnimationFrame(() => e(t)))
                        }, 100)
                    })(t)), () => {
                        M.current && cancelAnimationFrame(M.current)
                    }
                }, [w, I, o, l, p, g, A.text.primary, d]), (0, i.jsx)("canvas", {
                    ref: S,
                    style: {
                        width: o,
                        height: l,
                        display: "block",
                        ...t
                    }
                })
            }
        },
        457067: (e, t, a) => {
            function n(e) {
                return e.device.isPhone || "actionSheet" === e.tabletBehavior && e.device.isTablet ? {
                    menuType: a(649476).gu.ActionSheet
                } : {
                    menuType: a(649476).gu.Popup,
                    maxHeight: e.maxHeight,
                    maxWidth: e.maxWidth,
                    paddingTop: e.paddingTop,
                    paddingBottom: e.paddingBottom,
                    width: e.width,
                    minWidth: e.minWidth
                }
            }

            function i(e) {
                let t = (0, a(533992).Y0)();
                return (0, a(682985).K8)(() => n({
                    device: t,
                    maxHeight: null == e ? void 0 : e.maxHeight,
                    maxWidth: null == e ? void 0 : e.maxWidth,
                    paddingTop: null == e ? void 0 : e.paddingTop,
                    paddingBottom: null == e ? void 0 : e.paddingBottom,
                    width: null == e ? void 0 : e.width,
                    minWidth: null == e ? void 0 : e.minWidth,
                    tabletBehavior: null == e ? void 0 : e.tabletBehavior
                }), [t, null == e ? void 0 : e.maxHeight, null == e ? void 0 : e.maxWidth, null == e ? void 0 : e.paddingTop, null == e ? void 0 : e.paddingBottom, null == e ? void 0 : e.width, null == e ? void 0 : e.minWidth, null == e ? void 0 : e.tabletBehavior])
            }
            a.d(t, {
                e: () => i,
                v: () => n
            })
        },
        478588: (e, t, a) => {
            a.d(t, {
                Bd: () => l
            }), a(944114);
            var n = () => a(722371);
            let i = ["sidebar", "fullPage", "background"],
                r = ["sidebar", "fullPage", "background"],
                o = new(a(245541)).R({
                    key: "sendDestinationOrder",
                    namespace: a(274919).Bq,
                    important: !0,
                    trackingType: "preference"
                });

            function l(e) {
                let t = o.getState(),
                    a = function(e) {
                        if (!Array.isArray(e)) return r;
                        let t = [];
                        for (let a of e)(0, n().Xk)(i, a) && !t.includes(a) && t.push(a);
                        let a = [...t];
                        for (let e of r) a.includes(e) || a.push(e);
                        let [o, l, d] = a;
                        return o && l && d ? [o, l, d] : r
                    }(null == t ? void 0 : t[e]);
                return t && ! function(e, t) {
                    if (!Array.isArray(e) || e.length !== t.length) return !1;
                    for (let a = 0; a < e.length; a += 1)
                        if (e[a] !== t[a]) return !1;
                    return !0
                }(t[e], a) && o.setState({ ...t,
                    [e]: a
                }), a
            }
        },
        500786: (e, t, a) => {
            a.d(t, {
                h: () => n
            });

            function n(e) {
                let t = (0, a(972740).L)();
                return (0, a(682985).K8)(() => {
                    if (e && t) return a(360851).N.createChildStore(t, {
                        table: a(43296).C,
                        id: e,
                        spaceId: t.id
                    })
                }, [e, t])
            }
        },
        530993: (e, t, a) => {
            a.d(t, {
                q: () => r
            }), a(296540);
            var n = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 15.25 11.75",
                    directional: !0,
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M11.93 9.125a.5.5 0 0 0-.5.5v3.75a.5.5 0 0 0 .5.5h3.145a.5.5 0 0 0 .5-.5v-3.75a.5.5 0 0 0-.5-.5z"
                        }), (0, n.jsx)("path", {
                            d: "M4.5 4.125A2.125 2.125 0 0 0 2.375 6.25v7.5c0 1.174.951 2.125 2.125 2.125h11a2.125 2.125 0 0 0 2.125-2.125v-7.5A2.125 2.125 0 0 0 15.5 4.125zM3.625 6.25c0-.483.392-.875.875-.875h11c.483 0 .875.392.875.875v7.5a.875.875 0 0 1-.875.875h-11a.875.875 0 0 1-.875-.875z"
                        })]
                    })
                },
                r = (0, a(104509).wt)("peekCorner", i, "default")
        },
        540328: (e, t, a) => {
            a.d(t, {
                KY: () => r,
                dr: () => o,
                xX: () => l
            });
            var n = () => a(558208);
            let i = new Map;

            function r(e) {
                i.set(e.id, e)
            }

            function o(e) {
                if (e) return i.get(e)
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
                let h = l.getTranscript(),
                    p = l.getParentId(),
                    g = l.getParentTable(),
                    m = null == (t = l.getData()) ? void 0 : t.workflow_id,
                    f = l.getType(),
                    v = null == (r = l.getData()) ? void 0 : r.title,
                    y = l.getSpaceId() ? ? s.id,
                    {
                        performResult: T
                    } = (0, a(377796).createAndCommit)({
                        userAction: "databaseAgent.persistTemporaryThread",
                        environment: d,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: y
                        },
                        perform: e => {
                            let t = (0, a(757688).aP)({
                                environment: d,
                                spaceStore: s,
                                userStore: c,
                                transcript: h,
                                transaction: e,
                                threadId: l.id,
                                workflowId: m,
                                threadType: f
                            });
                            return p && g && (0, a(173157).z)({
                                store: t,
                                transaction: e,
                                data: {
                                    parent_id: p,
                                    parent_table: g,
                                    space_id: y
                                }
                            }), v && (0, a(173157).z)({
                                store: t.getDataStore(),
                                transaction: e,
                                data: {
                                    title: v
                                }
                            }), t
                        }
                    });
                return o = l.id, i.delete(o), T ? ? a(174148).E.createChildStore(s, {
                    id: l.id,
                    spaceId: y,
                    table: a(832375).Toz
                })
            }
        },
        589820: (e, t, a) => {
            a.d(t, {
                LY: () => o,
                Nd: () => d
            });
            var n = a(296540),
                i = a(474848);
            let r = {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: .2
                        }
                    },
                    exit: {
                        opacity: 0,
                        y: 10,
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: .15
                        }
                    }
                },
                o = (0, a(109939).YK)({
                    chatPlaceholder: {
                        id: "sidebar.sidebarUnifiedChatInput.chatPlaceholder",
                        defaultMessage: "Ask, search, create with AI…"
                    },
                    compactChatPlaceholder: {
                        id: "sidebar.sidebarUnifiedChatInput.compactChatPlaceholder",
                        defaultMessage: "Ask AI in the background…"
                    },
                    backgroundSendToastTitle: {
                        id: "sidebar.sidebarUnifiedChatInput.backgroundSendToastTitle",
                        defaultMessage: "Sent in background"
                    },
                    backgroundSendToastMessage: {
                        id: "sidebar.sidebarUnifiedChatInput.backgroundSendToastMessage",
                        defaultMessage: "Your message was sent. Check the Chats tab to view it."
                    },
                    backgroundSendFailedToastTitle: {
                        id: "sidebar.sidebarUnifiedChatInput.backgroundSendFailedToastTitle",
                        defaultMessage: "Background send failed"
                    },
                    backgroundSendFailedToastMessage: {
                        id: "sidebar.sidebarUnifiedChatInput.backgroundSendFailedToastMessage",
                        defaultMessage: "Please try again or open the full page chat."
                    },
                    compactSendToastMessage: {
                        id: "sidebar.sidebarUnifiedChatInput.compactSendToastMessage",
                        defaultMessage: "Message sent. AI is working in the background."
                    },
                    compactSendToastOpenChat: {
                        id: "sidebar.sidebarUnifiedChatInput.compactSendToastOpenChat",
                        defaultMessage: "Open chat"
                    }
                }),
                l = {
                    loadingSkeleton: {
                        width: "100%",
                        height: 96,
                        borderRadius: 16,
                        backgroundColor: a(632079).Tj.background.secondaryTranslucent
                    }
                };

            function d({
                spaceId: e,
                selectedTab: t,
                onSelectTab: s,
                isExpanded: c,
                forceVisible: u = !1,
                onAfterSubmit: h,
                omitCurrentPage: p = !1,
                compact: g = !1
            }) {
                let m = (0, a(533992).v3)(),
                    f = (0, a(109939).tz)(),
                    v = (0, a(972740).L)(),
                    y = (0, a(548124).useChatPanelState)(),
                    T = g || void 0 !== t && "chats" !== t,
                    S = T ? a(548124).DEFAULT_OPEN_CHAT_SIDEBAR_ROUTE_DATA : y.isOpen ? y : a(548124).DEFAULT_OPEN_CHAT_SIDEBAR_ROUTE_DATA,
                    {
                        threadStore: M
                    } = (0, a(732877).j)({
                        clientStore: a(57168).defaultClientAIChatStore,
                        chatPanelState: S,
                        spaceStore: v
                    }),
                    C = (0, a(682985).O$)(a(728372).AppStoreMainEditorCurrentBlockStore),
                    b = (0, a(346596).L)(m),
                    A = (0, a(558208).AD)(),
                    w = (0, a(682985).K8)(() => !!a(728372).AppStoreMainEditorCurrentBlockStore.state, []),
                    I = (0, a(682985).K8)(() => {
                        let {
                            route: e
                        } = m.RouterStore.state;
                        return (0, a(548124).shouldAllowOpeningAgentOnSpecifiedRoute)(e)
                    }, [m]),
                    k = !(w || b || I),
                    x = (0, a(430937).AI)({
                        initialValue: (0, a(247438).x9d)("")
                    }),
                    R = "chats" === t && y.isOpen,
                    P = (0, a(758360).K7)("slippery_slope"),
                    _ = (0, n.useMemo)(() => f.formatMessage(g ? o.compactChatPlaceholder : o.chatPlaceholder), [f, g]),
                    {
                        nextConfig: j,
                        setNextConfig: B
                    } = (0, a(891603).I)({
                        threadStore: M,
                        spaceId: e
                    }),
                    F = (0, n.useCallback)(t => {
                        let {
                            newThreadStore: n,
                            submitFrom: i
                        } = t;
                        if (!e) return;
                        let r = (0, a(951125).az)((0, a(478588).Bd)(e), i);
                        if (!n) {
                            "background" === r && a(819652).HK({
                                title: f.formatMessage(o.backgroundSendFailedToastTitle),
                                message: f.formatMessage(o.backgroundSendFailedToastMessage),
                                variant: "error",
                                presentationType: "transient"
                            });
                            return
                        }
                        if (null == h || h(), A.reset(), g) return void a(819652).HK({
                            message: f.formatMessage(o.compactSendToastMessage),
                            presentationType: "transient",
                            actions: {
                                primary: {
                                    title: f.formatMessage(o.compactSendToastOpenChat),
                                    onAction: () => {
                                        (0, a(862451).navigateToInferenceTranscriptRoute)({
                                            environment: m,
                                            oldThreadStore: void 0,
                                            newThreadStore: n
                                        })
                                    }
                                }
                            }
                        });
                        switch (r) {
                            case "fullPage":
                                (0, a(705059).z)({
                                    environment: m,
                                    source: "programmatic"
                                }), (0, a(862451).navigateToInferenceTranscriptRoute)({
                                    environment: m,
                                    oldThreadStore: void 0,
                                    newThreadStore: n
                                });
                                return;
                            case "background":
                                return void a(819652).HK({
                                    title: f.formatMessage(o.backgroundSendToastTitle),
                                    message: f.formatMessage(o.backgroundSendToastMessage),
                                    variant: "default",
                                    presentationType: "transient"
                                });
                            default:
                                {
                                    let e = (0, a(548124).shouldAllowOpeningAgentOnSpecifiedRoute)(m.RouterStore.state.route),
                                        t = C ? ? b ? ? void 0;
                                    if ("assistant" !== n.getType() && (void 0 !== t || e)) {
                                        T && s && s("chats"), "sidebar" !== a(562733).zI.state.chatPanelMode && (0, a(168682).M)({
                                            environment: m,
                                            chatPanelMode: "sidebar",
                                            trackAnalytics: !1,
                                            saveUserPreference: !1
                                        });
                                        try {
                                            (0, a(358667).openChatPanel)({
                                                environment: m,
                                                store: t,
                                                chatPanelState: {
                                                    isOpen: !0,
                                                    threadId: n.id
                                                },
                                                source: "programmatic"
                                            });
                                            return
                                        } catch {}
                                    }(0, a(862451).navigateToInferenceTranscriptRoute)({
                                        environment: m,
                                        oldThreadStore: void 0,
                                        newThreadStore: n
                                    })
                                }
                        }
                    }, [m, b, C, T, s, h, A, e, f, g]);
                if (!u && !k && !c && !R || !e) return null;
                let O = (0, i.jsx)(a(316258).hP, {
                    surface: a(316258).wy.fullPage,
                    children: (0, i.jsx)(a(656592).n_, {
                        renderLoading: e => e ? (0, i.jsx)("div", {
                            style: l.loadingSkeleton
                        }) : null,
                        aiChatFeatureController: P,
                        clientStore: a(57168).defaultClientAIChatStore,
                        threadStore: T ? void 0 : M,
                        onThreadChange: F,
                        nextConfig: j,
                        setNextConfig: B,
                        placeholder: _,
                        mockTextStoreWithSetter: x,
                        forceOmitCurrentPage: p,
                        compact: g
                    })
                });
                return !u && k ? null : (0, i.jsx)(a(203066).N, {
                    mode: "wait",
                    children: (0, i.jsx)(a(153321).P.div, { ...r,
                        children: O
                    }, "chat-input")
                })
            }
        },
        635587: (e, t, a) => {
            function n({
                environment: e,
                threadStore: t,
                title: i,
                userSetTitle: r = !1
            }) {
                let o = t.getSpaceId();
                (0, a(377796).createAndCommit)({
                    userAction: "agentPersistenceActions.updateThreadTitle",
                    environment: e,
                    cellTarget: o ? {
                        spaceWithId: o
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, a(173157).z)({
                            store: t.getDataStore(),
                            transaction: e,
                            data: r ? {
                                title: i,
                                user_set_title: !0
                            } : {
                                title: i
                            }
                        })
                    }
                })
            }

            function i({
                environment: e,
                threadStore: t,
                icon: n
            }) {
                let r = t.getSpaceId();
                (0, a(377796).createAndCommit)({
                    userAction: "agentPersistenceActions.updateThreadIcon",
                    environment: e,
                    cellTarget: r ? {
                        spaceWithId: r
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, a(173157).z)({
                            store: t.getDataStore(),
                            transaction: e,
                            data: n ? {
                                icon: n,
                                user_set_icon: !0
                            } : {
                                icon: void 0,
                                user_set_icon: void 0
                            }
                        })
                    }
                })
            }

            function r({
                environment: e,
                spaceViewStore: t,
                workflowModulePointer: n
            }) {
                var i;
                let o = (null == (i = t.getSettings()) ? void 0 : i.agent_chat_modules) ? ? [],
                    l = t.getSpaceId();
                (0, a(377796).createAndCommit)({
                    canUndo: !1,
                    environment: e,
                    cellTarget: l ? {
                        spaceWithId: l
                    } : void 0,
                    perform: e => {
                        a(380762).AG(t, e, {
                            agent_chat_modules: [...o, {
                                pointer: n,
                                defaultEnabled: !1
                            }]
                        })
                    },
                    userAction: "agentPersistenceHelpers.addAgentChatModule"
                })
            }

            function o({
                currentUserPointer: e,
                environment: t,
                workflowModule: n,
                workflowPointer: i
            }) {
                let {
                    icon: r,
                    name: l,
                    pointer: d,
                    tools: s,
                    ...c
                } = n;
                return (0, a(377796).createAndCommit)({
                    canUndo: !1,
                    environment: t,
                    cellTarget: {
                        spaceWithId: d.spaceId
                    },
                    perform: n => {
                        a(124937).vt({
                            environment: t,
                            table: a(832375).yMG,
                            args: {
                                createdByPointer: e,
                                id: d.id,
                                module_type: "mcpServer",
                                parentPointer: i || e,
                                space_id: d.spaceId,
                                alive: !0,
                                data: { ...c,
                                    ...s && s.length > 0 ? {
                                        tools: s
                                    } : {},
                                    icon: r,
                                    id: d.id,
                                    name: l
                                }
                            },
                            inMemoryRecordCache: t.defaultRecordCache.inMemoryRecordCache,
                            transaction: n
                        })
                    },
                    userAction: "agentPersistenceHelpers.createAgentChatModule"
                }).serverCommitResult
            }
            a.d(t, {
                eg: () => o,
                hP: () => r,
                i5: () => n,
                pS: () => i
            })
        },
        660658: (e, t, a) => {
            a.d(t, {
                N: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.37 1.37 13.26 16.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M9.191 1.478a.624.624 0 0 1 .864.867l-.08.099-1.942 1.932H10A6.625 6.625 0 1 1 3.375 11a.625.625 0 1 1 1.25 0A5.375 5.375 0 1 0 10 5.626H8.037L9.962 7.56l.08.098a.626.626 0 0 1-.966.783L6.083 5.434l-.077-.096a.626.626 0 0 1 .08-.788l3.007-2.993z"
                    })
                },
                i = (0, a(104509).wt)("arrowCircleSpinCounterClockwise", n, "default")
        },
        693683: (e, t, a) => {
            a.d(t, {
                R: () => c
            }), a(944114);
            var n = a(296540);
            a(898992), a(737550);
            let i = new(a(815048)).O2("RenameThreadPopup", async () => await a.e(42489).then(a.bind(a, 262255))),
                r = (0, a(815048)._h)(i, e => e.RenameThreadPopup);
            var o = a(474848);

            function l({
                variant: e = "sidebar",
                ariaLabel: t,
                onClick: n,
                aiChatFeatureController: i,
                ...r
            }) {
                let d = "header" === e ? a(397900).ellipsisIcon : a(361226).ellipsisSmallIcon,
                    s = a(986939).A.isMobile ? "tertiary" : "sidebar" === e ? "secondary" : "primary",
                    c = "header" === e || "header_compact" === e,
                    u = (0, a(719298).v)({
                        shape: (null == i ? void 0 : i.headerButtonShape) ? ? "roundrect",
                        aiChatFeatureController: i
                    });
                return (0, o.jsx)(a(374533).A, {
                    icon: d,
                    ariaLabel: t,
                    onClick: n,
                    colorVariant: s,
                    style: c ? u.iconButton : void 0,
                    iconStyle: c ? u.iconButtonIcon : void 0,
                    ...r
                })
            }
            let d = (0, a(109939).YK)({
                    menuTooltip: {
                        id: "chatHistoryItemMenu.tooltip",
                        defaultMessage: "Delete, rename, and more…"
                    },
                    rename: {
                        id: "chatHistoryItemMenu.rename",
                        defaultMessage: "Rename"
                    },
                    changeIcon: {
                        id: "chatHistoryItemMenu.changeIcon",
                        defaultMessage: "Change icon"
                    },
                    iconTab: {
                        id: "chatHistoryItemMenu.iconTab",
                        defaultMessage: "Icons"
                    },
                    delete: {
                        id: "chatHistoryItemMenu.delete",
                        defaultMessage: "Delete"
                    },
                    clearDailyBrief: {
                        id: "chatHistoryItemMenu.clearDailyBrief",
                        defaultMessage: "Clear today’s brief"
                    },
                    openInSidebar: {
                        id: "chatHistoryItemMenu.openInSidebar",
                        defaultMessage: "Open in sidebar"
                    },
                    openInFloating: {
                        id: "chatHistoryItemMenu.openInFloating",
                        defaultMessage: "Open in floating"
                    },
                    openInNewTab: {
                        id: "chatHistoryItemMenu.openInNewTab",
                        defaultMessage: "Open in new tab"
                    },
                    lastUpdated: {
                        id: "chatHistoryItemMenu.lastUpdated",
                        defaultMessage: "Last updated {timestamp}"
                    },
                    deleteConfirmation: {
                        id: "chatHistoryItemMenu.deleteConfirmation",
                        defaultMessage: "Are you sure you want to delete this chat?"
                    }
                }),
                s = {
                    paddingBlock: 4,
                    paddingInline: 14
                };

            function c({
                threadStore: e,
                isDailyBriefThread: t,
                onDelete: i,
                onClearDailyBrief: u,
                onOpenInPreferredMode: h,
                preferredChatPanelMode: p,
                onOpenInNewTab: g,
                onRename: m,
                variant: f = "sidebar",
                buttonPopupStore: v,
                originRect: y,
                onMenuClosed: T,
                hideOriginButton: S,
                aiChatFeatureController: M
            }) {
                let C, b = (0, a(109939).tz)(),
                    A = (0, a(533992).v3)(),
                    w = (0, a(682985).K8)(() => {
                        let t = e.getUpdatedTime();
                        if (t) return (0, a(799843).nl)(t, {
                            useLowercase: !0,
                            useCompactFormat: !0,
                            roundDownYears: !0
                        })
                    }, [e]),
                    [I, k] = (0, n.useState)(!1),
                    [x, R] = (0, n.useState)(void 0),
                    P = (0, n.useRef)(null),
                    _ = (0, n.useRef)(void 0),
                    j = (C = (0, a(533992).v3)(), (0, a(682985).K8)(() => {
                        if (!e) return !1;
                        let t = e.getTranscript();
                        if (!(null == t ? void 0 : t.some(e => "title" === e.type))) return !1;
                        let a = C.currentUser.id,
                            n = e.getCreatedById() === a,
                            i = "editor" === e.getRole();
                        return n || i
                    }, [e, C.currentUser.id])),
                    B = (0, n.useCallback)(() => {
                        k(!1), R(void 0)
                    }, []),
                    F = (0, n.useCallback)(() => {
                        var e, t;
                        if (m) return void m();
                        let a = null == (e = P.current) ? void 0 : e.getAnchor();
                        if (a instanceof HTMLElement) {
                            let e = a.getBoundingClientRect();
                            null == (t = _.current) || t.call(_), requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    R(e), k(!0)
                                })
                            })
                        }
                    }, [m]),
                    O = (0, n.useCallback)(async () => {
                        var e;
                        null == (e = _.current) || e.call(_), (await a(647095).Gh({
                            message: b.formatMessage(d.deleteConfirmation)
                        })).accept && (null == i || i())
                    }, [b, i]),
                    H = (0, n.useCallback)(() => {
                        var e;
                        null == (e = _.current) || e.call(_), null == u || u()
                    }, [u]),
                    E = (0, n.useCallback)(() => {
                        var e;
                        null == (e = _.current) || e.call(_), null == h || h()
                    }, [h]),
                    U = (0, n.useCallback)(() => {
                        var e;
                        null == (e = _.current) || e.call(_), null == g || g()
                    }, [g]),
                    D = (0, n.useCallback)(() => {
                        var t, n;
                        let i = null == (t = P.current) || null == (t = t.getAnchor()) ? void 0 : t.getBoundingClientRect();
                        null == (n = _.current) || n.call(_), a(874443).W(A, {
                            originGap: 16,
                            originRect: i,
                            popupWidth: a(703188).jv,
                            title: b.formatMessage(d.changeIcon),
                            currentTab: "icon",
                            tabs: [{
                                type: "icon",
                                title: b.formatMessage(d.iconTab),
                                onChange: t => {
                                    a(874443).I(), (0, a(635587).pS)({
                                        environment: A,
                                        threadStore: e,
                                        icon: t
                                    })
                                },
                                tabHeight: a(703188).GF,
                                enforceIconColor: "lightgray",
                                hideRandomButton: !0
                            }]
                        })
                    }, [A, b, e]),
                    L = b.formatMessage(d.menuTooltip);
                if (!(j || i || h || g || t && u)) return null;
                let W = [];
                j && W.push({
                    key: "rename",
                    render: e => {
                        let {
                            ref: t,
                            ...n
                        } = e;
                        return (0, o.jsx)(a(95582).A, { ...n,
                            icon: (0, o.jsx)(a(16275).I, {
                                icon: a(111481).M
                            }),
                            title: b.formatMessage(d.rename),
                            ref: t
                        })
                    },
                    action: F
                }), j && W.push({
                    key: "change-icon",
                    render: e => (0, o.jsx)(a(95582).A, {
                        icon: (0, o.jsx)(a(16275).I, {
                            icon: a(976898).emojiFaceIcon
                        }),
                        title: b.formatMessage(d.changeIcon),
                        ...e
                    }),
                    action: D
                }), t && u && W.push({
                    key: "clear-daily-brief",
                    render: e => (0, o.jsx)(a(95582).A, {
                        icon: (0, o.jsx)(a(16275).I, {
                            icon: a(660658).N
                        }),
                        title: b.formatMessage(d.clearDailyBrief),
                        ...e
                    }),
                    action: H
                }), i && W.push({
                    key: "delete",
                    render: e => (0, o.jsx)(a(95582).A, {
                        icon: (0, o.jsx)(a(16275).I, {
                            icon: a(968411).trashIcon
                        }),
                        title: b.formatMessage(d.delete),
                        ...e
                    }),
                    action: O
                });
                let z = [];
                if (h) {
                    let e = "popup" === p;
                    z.push({
                        key: "open-in-preferred-mode",
                        render: t => (0, o.jsx)(a(95582).A, {
                            icon: (0, o.jsx)(a(16275).I, {
                                icon: e ? a(530993).q : a(357055).A
                            }),
                            title: b.formatMessage(e ? d.openInFloating : d.openInSidebar),
                            ...t
                        }),
                        action: E
                    })
                }
                g && z.push({
                    key: "open-in-new-tab",
                    render: e => (0, o.jsx)(a(95582).A, {
                        icon: (0, o.jsx)(a(16275).I, {
                            icon: a(684668).arrowDiagonalUpRightIcon
                        }),
                        title: b.formatMessage(d.openInNewTab),
                        ...e
                    }),
                    action: U
                });
                let K = [];
                return W.length > 0 && K.push({
                    key: "primary-actions",
                    render: e => (0, o.jsx)(a(844565).A, { ...e,
                        topBorder: !1
                    }),
                    items: W
                }), z.length > 0 && K.push({
                    key: "navigation-actions",
                    render: e => (0, o.jsx)(a(844565).A, { ...e,
                        topBorder: W.length > 0
                    }),
                    items: z
                }), w && K.push({
                    key: "metadata",
                    render: e => (0, o.jsx)(a(844565).A, { ...e,
                        topBorder: !0
                    }),
                    items: [{
                        key: "last-updated",
                        render: () => (0, o.jsx)(a(636518).Ay, {
                            shouldWrapTitle: !0,
                            title: (0, o.jsx)(a(324489).V, {
                                isSmall: !0,
                                isSecondaryColor: !0,
                                children: (0, o.jsx)(a(109939).sA, { ...d.lastUpdated,
                                    values: {
                                        timestamp: w
                                    }
                                })
                            }),
                            style: s
                        }),
                        action: () => {}
                    }]
                }), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(a(656252).A, {
                        ref: P,
                        buttonPopupStore: v,
                        popupType: a(656252).z.Popup,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "end",
                        originGap: 4,
                        originRect: y,
                        onClosed: T,
                        trapFocus: !0,
                        content: e => (_.current = e.close, (0, o.jsx)(a(747369).A, {
                            menuType: a(649476).gu.Popup,
                            children: (0, o.jsx)(a(558045).A, {
                                type: a(558045).O.Vertical,
                                onAccept: e.close,
                                initialFocus: void 0,
                                sections: K
                            })
                        })),
                        children: ({
                            onClick: e
                        }) => S ? (0, o.jsx)("div", {
                            "aria-hidden": !0
                        }) : (0, o.jsx)(a(51831).m, {
                            content: () => (0, o.jsx)(a(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                children: (0, o.jsx)(a(109939).sA, { ...d.menuTooltip
                                })
                            }),
                            children: t => (0, o.jsx)(l, {
                                variant: f,
                                ariaLabel: L,
                                onClick: e,
                                aiChatFeatureController: M,
                                ...t
                            })
                        })
                    }), m ? void 0 : (0, o.jsx)(r, {
                        threadStore: e,
                        open: I,
                        originRect: x,
                        onDismiss: B
                    })]
                })
            }
        },
        719298: (e, t, a) => {
            a.d(t, {
                v: () => n
            });

            function n(e) {
                let {
                    active: t,
                    shape: n,
                    aiChatFeatureController: i
                } = e;
                return (0, a(960253).I)(() => {
                    let e = null != i && i.supportsTallChatHeader ? 40 : 28,
                        r = null != i && i.supportsTallChatHeader ? a(104509).lD.default : a(104509).Ev.default;
                    return {
                        iconButton: {
                            width: e,
                            height: e,
                            ..."pill" === n ? {
                                borderRadius: 50
                            } : {}
                        },
                        iconButtonIcon: {
                            width: r,
                            height: r,
                            fill: t ? a(632079).Tj.blue.icon.accentPrimary : a(632079).Tj.icon.primary
                        }
                    }
                }, [t, n, null == i ? void 0 : i.supportsTallChatHeader])
            }
        },
        732877: (e, t, a) => {
            a.d(t, {
                j: () => i
            });
            var n = a(296540);

            function i({
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
                    let i = (0, a(533992).v3)(),
                        r = (0, a(876252).$)(),
                        o = (0, a(558208).AD)();
                    return {
                        threadStore: (0, a(682985).K8)(() => {
                            if (!n || !t || !r) return;
                            let e = (0, a(548124).getChatPanelState)(i) ? ? t;
                            if ("isNewThread" in e && e.isNewThread) {
                                n && o.getOrCreateThreadId({
                                    environment: i,
                                    spaceId: n.id,
                                    maybeThreadStore: void 0
                                });
                                return
                            } {
                                let t = (0, a(548124).threadStoreGivenRouteData)({
                                    spaceStore: n,
                                    chatPanelState: e
                                });
                                return (0, a(540328).dr)(null == t ? void 0 : t.id) ? ? t
                            }
                        }, [n, t, r, o, i]),
                        isNewThread: "isNewThread" in t && t.isNewThread
                    }
                }({
                    clientStore: e,
                    chatPanelState: t,
                    spaceStore: r
                }), {
                    steps: d,
                    allReady: s
                } = (0, a(682985).K8)(() => o ? (0, a(187353).A3)({
                    clientStore: e,
                    threadStore: o
                }) : {
                    steps: [],
                    allReady: !1
                }, [e, o]), [c, u] = (0, n.useState)(s), [h, p] = (0, n.useState)(void 0), g = s && !c;
                return ((h !== o || g) && (p(o), u(s)), l) ? {
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
        891603: (e, t, a) => {
            a.d(t, {
                I: () => i
            }), a(898992), a(354520), a(430670), a(581454), a(737550);
            var n = a(296540);

            function i(e) {
                let {
                    threadStore: t,
                    spaceId: i,
                    defaultConfig: o
                } = e, l = (0, a(533992).v3)(), d = (0, a(109939).tz)(), s = (0, a(909212).i7)(), c = (0, a(83208).X)("ai_allow_model_switching_during_chat"), u = (0, a(682985).K8)(() => {
                    let {
                        steps: e
                    } = (0, a(187353).A3)({
                        clientStore: a(57168).defaultClientAIChatStore,
                        threadStore: t
                    });
                    return (0, a(850563).TU)({
                        transcript: e
                    })
                }, [t], {
                    equalityFn: a(381453).n4
                }), h = (0, a(682985).K8)(() => (function(e) {
                    let {
                        environment: t,
                        intl: n,
                        isAgentEnabled: i,
                        spaceId: o
                    } = e, l = t.RouterStore.state.route;
                    if ("page" !== l.name && "chat" !== l.name && "home" !== l.name && "ai" !== l.name) return;
                    if ("chat" === l.name && l.peekViewBlockId && ("settings" === l.workflowViewType || "activity" === l.workflowViewType || "chat" === l.workflowViewType)) return (0, a(922900).getWorkflowAgentConfig)({
                        environment: t,
                        spaceId: o,
                        workflowId: l.peekViewBlockId,
                        isCustomAgent: !0
                    });
                    let d = l.targetConfig;
                    if (!d || !(0, a(271452).bD)(d.type)) return;
                    let s = (0, a(180139).bz)(d.type),
                        c = { ...s,
                            ...d
                        };
                    switch (c.type) {
                        case "markdown-chat":
                            if (r({
                                    config: (0, a(358519).Qq)(a(465862).zu, c),
                                    intl: n,
                                    isAgentEnabled: i,
                                    environment: t,
                                    spaceId: o
                                })) return c;
                            break;
                        case "researcher":
                            if ((0, a(358519).Xj)(a(465862).Gy, c)) return c;
                            break;
                        case "workflow":
                            if ((0, a(358519).Xj)(a(465862).zp, c) && r({
                                    config: c,
                                    intl: n,
                                    isAgentEnabled: i,
                                    environment: t,
                                    spaceId: o
                                })) return c
                    }
                    return s
                })({
                    environment: l,
                    intl: d,
                    isAgentEnabled: s,
                    spaceId: i
                }), [l, d, s, i], {
                    equalityFn: a(381453).n4
                }), p = (0, a(682985).K8)(() => (0, a(862451).getDefaultNewThreadConfigFromUserPreference)({
                    spaceId: i,
                    environment: l
                }), [i, l], {
                    equalityFn: a(381453).n4
                }), [g, m] = (0, n.useState)(), f = (0, n.useCallback)(e => {
                    m("reset" === e ? void 0 : e)
                }, []), v = (0, a(668745).ZC)(null == t ? void 0 : t.id);
                (0, n.useEffect)(() => {
                    if (v !== (null == t ? void 0 : t.id) && !(0, a(558208).Ci)(t)) {
                        if (t) {
                            let {
                                steps: e
                            } = (0, a(187353).A3)({
                                clientStore: a(57168).defaultClientAIChatStore,
                                threadStore: t
                            }), n = (0, a(850563).TU)({
                                transcript: e
                            });
                            if ((null == n ? void 0 : n.type) === "council-chat") return void f(n)
                        }
                        f("reset")
                    }
                }, [null == t ? void 0 : t.id, v, f, t]);
                let y = !!(null == t ? void 0 : t.id),
                    T = g ? ? (y ? void 0 : o) ? ? u ? ? (y ? void 0 : h) ? ? p,
                    S = "workflow" === T.type ? T.workflowId : void 0,
                    M = (0, a(500786).h)(S),
                    C = (0, a(682985).K8)(() => (null == M ? void 0 : M.canEdit()) ? ? !1, [M]);
                return {
                    nextConfig: (0, a(682985).K8)(() => {
                        let e = "workflow" === T.type || "markdown-chat" === T.type,
                            t = y && c && e && void 0 !== T.model && !r({
                                config: T,
                                intl: d,
                                isAgentEnabled: s,
                                environment: l,
                                spaceId: i
                            }),
                            n = "workflow" === T.type && !0 === T.isCustomAgent && C ? { ...T,
                                useCustomAgentDraft: !0
                            } : T;
                        var o = t ? "workflow" === n.type ? { ...n,
                                model: void 0,
                                modelFromUser: !1
                            } : "markdown-chat" === n.type ? { ...n,
                                model: void 0
                            } : n : n,
                            u = l,
                            h = i;
                        if ("workflow" === o.type) {
                            let e = (0, a(922900).getWorkflowAgentConfig)({ ...o,
                                environment: u,
                                spaceId: h
                            });
                            return e.writerMode ? (0, a(922900).getWorkflowAgentConfig)({ ...o,
                                environment: u,
                                spaceId: h,
                                writerMode: !1,
                                model: void 0
                            }) : e
                        }
                        return o
                    }, [T, l, C, d, s, c, y, i], {
                        equalityFn: a(795676).k
                    }),
                    setNextConfig: f
                }
            }

            function r(e) {
                let {
                    intl: t,
                    isAgentEnabled: n,
                    environment: i,
                    spaceId: r,
                    config: o
                } = e;
                if (!o) return !1;
                if (!o.model) return !0;
                let l = (0, a(317606)._y)({
                    intl: t,
                    isAgentEnabled: n,
                    environment: i,
                    spaceId: r
                });
                return !!(l.some(e => e.isLoading) || l.flatMap(e => e.items).filter(e => e.config.type === o.type).map(e => e.askMode).includes(o.model) || a(218744).default.checkGate({
                    gateName: "agent_model_picker"
                }) && (0, a(426048).R5)(o.model))
            }
        },
        951125: (e, t, a) => {
            a.d(t, {
                az: () => i
            }), a(898992), a(672577);
            let n = {
                enter: 0,
                "command+enter": 1,
                "command+alt+enter": 2
            };

            function i(e, t) {
                return e[t ? n[t] : 0]
            }
        }
    }
]);