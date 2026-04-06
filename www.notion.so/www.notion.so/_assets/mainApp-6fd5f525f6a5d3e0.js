"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [15021, 78217, 82853], {
        8814: (e, t, n) => {
            n.r(t), n.d(t, {
                getMobileNativeSessionInfo: () => i,
                mobileNativeSessionInfoKey: () => r
            });
            let r = "__mobileNativeSessionInfo";

            function i() {
                return window[r] ? ? {}
            }
        },
        11574: (e, t, n) => {
            n.r(t), n.d(t, {
                initialize: () => r
            });

            function r(e) {
                let t = n(467008).A.get(n(655567).nw),
                    r = (0, n(424007).u)(),
                    i = function() {
                        let e = n(467008).A.get(n(655567).W9);
                        if (!e || !("currentSubTab" in e)) return e; {
                            let t = { ...e,
                                updatesSubTab: e.currentSubTab
                            };
                            return delete t.currentSubTab, t
                        }
                    }(),
                    o = n(467008).A.get(n(655567).NT),
                    a = n(515492).Ay.state;
                if (r && n(424007).A.setState(r), (0, n(907620).T)("supportsNativeHome") ? (n(984858).sidebarExpandedStore.setState(!1), n(984858).sidebarWidthStore.setState(0)) : t ? (void 0 !== t.expanded && n(984858).sidebarExpandedStore.setState(t.expanded), void 0 !== t.width && t.width >= n(984858).SIDEBAR_MIN_WIDTH && n(984858).sidebarWidthStore.setState(t.width)) : (0, n(686300).o)() || n(984858).sidebarExpandedStore.setState(!1), i) {
                    let e = i.width && i.width >= n(449473).Iz ? i.width : n(449473).Iz;
                    n(449473).B8.setState({ ...n(449473).B8.state,
                        ...i,
                        width: e,
                        ...i.currentTab === n(449473).tF.Info ? {
                            expanded: !1
                        } : void 0
                    }), window.innerWidth < n(655567).OS && n(984858).sidebarExpandedStore.setState(!1)
                }
                o && n(475097).default.setSidePeekWidth({
                    preferredSidePeekWidth: o.width,
                    windowWidth: window.innerWidth
                });
                let {
                    openState: s,
                    mode: l,
                    contentType: d
                } = a;
                "open" === s && "panel" === l && "slippery_slope_chat" !== d && (0, n(477810).J$)({
                    environment: e,
                    contentType: d,
                    skipAnimation: !0,
                    autoLoaded: !0
                })
            }
        },
        15021: (e, t, n) => {
            n.d(t, {
                d: () => u
            });
            var r = n(296540);
            let i = "images",
                o = "page-covers",
                a = {
                    [`/${i}/${o}/usda_apple.png`]: 1.6,
                    [`/${i}/${o}/usda_pear.png`]: 1.6
                },
                s = new(n(815048)).O2("AnimatedCoverImageActionBar", async () => Promise.all([n.e(75134), n.e(36556), n.e(55373), n.e(36192), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(87539), n.e(49340), n.e(40454)]).then(n.bind(n, 312446))),
                l = (0, n(815048)._h)(s, e => e.AnimatedCoverImageActionBar);
            var d = n(474848);

            function c({
                src: e,
                placeholderSrc: t,
                placeholderBehavior: i,
                imageStyle: o,
                containerStyle: a,
                onLoadComplete: s,
                testId: l
            }) {
                let u, [p, m] = (0, r.useState)(!0);
                switch (i) {
                    case "force-show-placeholder":
                        u = !0;
                        break;
                    case "show-placeholder-if-loading-src":
                        u = !!t && (p || void 0 === e);
                        break;
                    default:
                        (0, n(722371).HB)(i)
                }
                let h = (0, n(960253).I)(() => {
                    let e = {
                        gridColumn: 1,
                        gridRow: 1
                    };
                    return {
                        container: {
                            display: "grid",
                            ...a
                        },
                        srcWrapper: { ...u && {
                                display: "none"
                            },
                            ...e
                        },
                        placeholderWrapper: {
                            pointerEvents: "none",
                            ...e
                        }
                    }
                }, [a, u]);
                (0, r.useEffect)(() => {
                    void 0 !== e && m(!0)
                }, [e]);
                let g = (0, r.useCallback)(e => {
                    m(!1), null == s || s()
                }, [s]);
                return (0, d.jsxs)("div", {
                    style: h.container,
                    children: [(0, d.jsx)(n(989059).A, {
                        src: e,
                        onLoad: g,
                        style: o,
                        placeholderStyle: h.srcWrapper,
                        placeholderLoadedStyle: h.srcWrapper,
                        testId: l
                    }), t ? (0, d.jsx)(n(989059).A, {
                        src: t,
                        style: o,
                        placeholderStyle: h.placeholderWrapper,
                        placeholderLoadedStyle: h.placeholderWrapper
                    }) : void 0]
                })
            }

            function u(e) {
                let {
                    store: t,
                    disabled: i,
                    paddingRight: o,
                    paddingLeft: s,
                    height: u,
                    proxyWidth: m
                } = e, h = (0, n(109939).tz)(), g = (0, n(533992).v3)(), f = (0, n(533992).Y0)(), b = (0, n(682985).uB)(void 0, n(184332).A), v = (0, n(682985).K8)(() => i || "suggest" === n(708929).Uv.getMode(t) || (0, n(355301).aD)(f), [i, t, f]), w = (0, n(682985).K8)(() => t.getCover(), [t]), S = (0, n(682985).O$)(n(275015).M), {
                    isLoading: y
                } = (0, n(587578).q)(t.id), [A, I] = (0, r.useState)(void 0);
                if (!w) return null;
                let x = S.loadingMode !== n(151525).pF && S.loadingMode !== n(151525).Wc;
                return (0, d.jsx)(n(125374).A, {
                    mouseStore: b,
                    onFlushTemporaryPosition: e => (function(e, t, r) {
                        let {
                            imagePosition: i,
                            reset: o
                        } = e, a = t.getSpaceId();
                        (0, n(377796).createAndCommit)({
                            userAction: "PageCover.handleFlushTemporaryPosition",
                            environment: r,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                (0, n(217135).y)({
                                    store: t,
                                    coverPosition: i,
                                    transaction: e
                                }), o()
                            }
                        })
                    })(e, t, g),
                    renderControl: ({
                        handleRepositionClick: e,
                        handleSavePositionClick: n,
                        handleCancelClick: r,
                        isVisible: i,
                        isRepositioning: a
                    }) => v ? null : (0, d.jsx)(l, {
                        store: t,
                        mouseStore: b,
                        imageUrl: A,
                        handleRepositionClick: e,
                        handleSavePositionClick: n,
                        handleCancelClick: r,
                        visible: i || y,
                        isRepositioning: a,
                        paddingLeft: s,
                        paddingRight: o
                    }),
                    source: "page",
                    store: t,
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: u,
                        maxHeight: 280,
                        cursor: "default"
                    },
                    preventClickPropagation: !0,
                    render: e => (0, d.jsxs)(r.Fragment, {
                        children: [(0, d.jsx)(n(738251).A, {
                            url: w.cover,
                            isAuthenticated: !0,
                            permissionRecord: w.pointer,
                            width: m,
                            onFinishedLoadingProxyUrl: I,
                            render: (t, n) => {
                                let r = a[w.cover] ? ? 1,
                                    i = (1 - (e.imagePosition || 0)) * 100,
                                    o = {
                                        width: "100%",
                                        height: u,
                                        maxHeight: 280,
                                        objectFit: "cover",
                                        opacity: x ? .5 : 1,
                                        objectPosition: `center ${i}%`,
                                        borderRadius: 0,
                                        ...1 !== r && {
                                            transform: `scale(${r})`,
                                            transformOrigin: `center ${i}%`
                                        }
                                    };
                                return (0, d.jsx)(c, {
                                    src: n,
                                    placeholderSrc: x ? S.dataURL : void 0,
                                    placeholderBehavior: x ? "force-show-placeholder" : "show-placeholder-if-loading-src",
                                    containerStyle: {
                                        width: "100%",
                                        height: u,
                                        maxHeight: 280,
                                        overflow: "hidden"
                                    },
                                    imageStyle: o,
                                    onLoadComplete: p,
                                    testId: "pageCover"
                                })
                            }
                        }, w.pointer.id), x ? (0, d.jsx)(n(252691).X, {
                            variant: "spinner",
                            percentage: S.uploadProgress,
                            text: void 0 !== S.uploadProgress ? void 0 : S.progressText
                        }) : y ? (0, d.jsx)(n(252691).X, {
                            variant: "dots",
                            text: h.formatMessage({
                                id: "CoverImageActionBar.generatingCover",
                                defaultMessage: "Generating..."
                            })
                        }) : (0, d.jsx)(n(893818).A, {
                            blockId: t.id
                        })]
                    })
                })
            }

            function p() {
                n(275015).M.reset()
            }
        },
        18677: (e, t, n) => {
            n.d(t, {
                Y: () => i
            });
            let r = new(n(815048)).O2("Invoice", async () => await n.e(60896).then(n.bind(n, 713744))),
                i = (0, n(815048)._h)(r, e => e.Invoice)
        },
        24958: (e, t, n) => {
            n.d(t, {
                H: () => i
            });
            let r = (0, n(109939).YK)({
                overFreeBlockLimitMobileNativeDialog: {
                    id: "subscriptionActions.overFreeBlockLimit.mobileNativeDialog",
                    defaultMessage: "Your free blocks have been used up. Unfortunately, unlimited blocks cannot be purchased on mobile."
                }
            });

            function i(e) {
                if ((0, n(318355).A)(e) && "new" === e.RouterStore.state.route.name) {
                    async function t() {
                        let {
                            navigateToHomeTab: t
                        } = await Promise.resolve().then(n.bind(n, 922425)), {
                            navigateOnBaseUrl: r
                        } = await Promise.resolve().then(n.bind(n, 857400));
                        t(e), r({
                            environment: e,
                            url: n(168962).JZ.root
                        })
                    }
                    n(647095).rG({
                        message: n(962299).A.formatMessage(r.overFreeBlockLimitMobileNativeDialog),
                        onAccept: () => {
                            t()
                        }
                    });
                    return
                }
                n(474329).HQ({
                    id: "SubscriptionEditingBlocker",
                    bannerStore: n(465361).A,
                    styleKey: n(909595).q.Red,
                    contentKey: "over_free_block_limit"
                })
            }
        },
        29244: (e, t, n) => {
            n.d(t, {
                o: () => i
            });
            let r = new(n(815048)).O2("PageError", async () => Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(35837), n.e(33503), n.e(84444), n.e(18406), n.e(97615), n.e(74931), n.e(82628), n.e(66960)]).then(n.bind(n, 705506))),
                i = (0, n(815048)._h)(r, e => e.PageError)
        },
        48542: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(296540);
            var r = n(474848);
            let i = {
                    separator: {
                        height: 14,
                        width: 1,
                        marginInlineStart: 6,
                        marginInlineEnd: 6,
                        background: n(632079).Tj.border.primaryTranslucent
                    }
                },
                o = function() {
                    return (0, r.jsx)("div", {
                        style: i.separator
                    })
                }
        },
        52628: (e, t, n) => {
            n.d(t, {
                w: () => r
            });

            function r(e) {
                return (0, n(545504).w)({
                    url: e,
                    config: { ...n(986939).A,
                        requestedOnAlternateDomain: (0, n(700473).wasRequestedOnAlternateDomain)()
                    }
                })
            }
        },
        70703: (e, t, n) => {
            n.d(t, {
                p: () => o
            });
            var r = n(296540);
            let i = {
                isRepositioning: !1
            };

            function o(e) {
                let {
                    currentPosition: t,
                    imageUrl: o,
                    onSavePosition: a,
                    onPositionChange: s,
                    rootRef: l,
                    environment: d
                } = e, [c, u] = (0, r.useState)(i), {
                    isRepositioning: p
                } = c, m = (0, r.useCallback)(() => {
                    u(i)
                }, []), h = (0, r.useMemo)(() => void 0 !== c.temporaryPosition ? c.temporaryPosition : t, [c.temporaryPosition, t]);
                (0, r.useEffect)(() => {
                    s && s(h)
                }, [h, s]);
                let g = (0, r.useCallback)(e => {
                        (0, n(471e3).I)({
                            environment: d
                        });
                        let t = new Image;
                        t.onload = () => {
                            u(e => ({ ...e,
                                isRepositioning: !0,
                                image: t
                            }))
                        };
                        let r = e || o;
                        r && (t.src = r)
                    }, [d, o]),
                    f = (0, r.useCallback)(() => {
                        a(h), m()
                    }, [a, h, m]),
                    b = (0, r.useCallback)(() => {
                        m()
                    }, [m]);
                (0, r.useEffect)(() => {
                    let e = e => {
                        let t = l.current;
                        t && e.target instanceof Node && !t.contains(e.target) && p && f()
                    };
                    return p && window.addEventListener("mousedown", e), () => {
                        window.removeEventListener("mousedown", e)
                    }
                }, [p, f, l]);
                let v = (0, r.useCallback)(e => {
                        let {
                            image: t
                        } = c;
                        if (!t || !p) return;
                        let n = l.current;
                        if (n && n instanceof Element) {
                            let e = n.getBoundingClientRect().width / t.width * t.height;
                            u(t => ({ ...t,
                                startDragImageScreenHeight: e,
                                startDragRenderedPosition: h
                            }))
                        }
                    }, [c, p, h, l]),
                    w = (0, r.useCallback)(e => {
                        if (!p) return;
                        let {
                            startDragImageScreenHeight: t,
                            startDragRenderedPosition: r
                        } = c, i = e.diffY / (t || 0) + (r || 0);
                        u(e => ({ ...e,
                            temporaryPosition: (0, n(381453).LI)((0, n(752239).A)({
                                num: i,
                                min: 0,
                                max: 1
                            }), 4)
                        }))
                    }, [p, c]),
                    S = (0, r.useCallback)(() => {
                        u(e => ({ ...e,
                            startDragImageScreenHeight: void 0,
                            startDragRenderedPosition: void 0
                        }))
                    }, []),
                    y = p ? "ns-resize" : "default";
                return {
                    isRepositioning: p,
                    currentImagePosition: h,
                    handleDragStart: v,
                    handleDragMove: w,
                    handleDragEnd: S,
                    handleStartReposition: g,
                    handleSavePosition: f,
                    handleCancelReposition: b,
                    repositioningCursor: y
                }
            }
        },
        81185: (e, t, n) => {
            n.d(t, {
                u: () => r
            });
            let r = (0, n(815048)._h)(new(n(815048)).O2("AdminListData", () => Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(45414), n.e(64038), n.e(67430), n.e(57042), n.e(33503), n.e(56809), n.e(30532), n.e(23644), n.e(22841), n.e(12801), n.e(49340), n.e(85782), n.e(91029), n.e(19884)]).then(n.bind(n, 21237))), e => e.default)
        },
        87337: (e, t, n) => {
            n.d(t, {
                J: () => r
            });
            let r = [
                [2, 1, 3, 1],
                [1, 0, 2, 0],
                [0, 2, 0, 3],
                [3, 3, 0, 2],
                [1, 1, 2, 2]
            ]
        },
        125374: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            var r = n(296540),
                i = n(474848);
            let o = {
                    position: "relative",
                    width: "100%",
                    zIndex: 1
                },
                a = function(e) {
                    let t = (0, r.useRef)(null),
                        a = (0, n(533992).v3)(),
                        {
                            renderControl: l,
                            onFlushTemporaryPosition: d,
                            style: c,
                            source: u,
                            store: p
                        } = e,
                        m = (0, n(682985).K8)(() => 0 === n(584265).default.state.stores.length, []),
                        [h, g] = (0, r.useState)(!1),
                        f = (0, n(682985).uB)(e.mouseStore, n(184332).A),
                        b = (0, n(682985).K8)(() => f.state.mouseEntered, [f]),
                        v = (0, n(682985).K8)(() => (function(e, t) {
                            if ("gallery" === e || "board" === e) {
                                let e = t.getFormat().card_cover_position;
                                if ((0, n(763230).Et)(e)) return e
                            }
                            if ((0, n(909212).V)()) {
                                var r;
                                return (null == (r = t.getCover()) ? void 0 : r.cover_position) ? ? .5
                            }
                            if (t.isCollectionView()) {
                                let e = t.getCollectionStoreIfSingleSource();
                                if (e) {
                                    let t = e.getFormat().collection_cover_position;
                                    return (0, n(627179).pN)(t) ? .5 : t
                                }
                            }
                            let i = t.getFormat().page_cover_position;
                            return (0, n(763230).Et)(i) ? i : .5
                        })(u, p), [u, p]),
                        {
                            isRepositioning: w,
                            currentImagePosition: S,
                            handleDragStart: y,
                            handleDragMove: A,
                            handleDragEnd: I,
                            handleStartReposition: x,
                            handleSavePosition: P,
                            handleCancelReposition: k,
                            repositioningCursor: C
                        } = (0, n(70703).p)({
                            currentPosition: v,
                            onSavePosition: e => {
                                d({
                                    imagePosition: e,
                                    reset: () => {
                                        f.reset()
                                    }
                                })
                            },
                            rootRef: t,
                            environment: a
                        }),
                        _ = (0, n(960253).I)(() => ({
                            dragContainer: {
                                width: "100%",
                                cursor: C
                            }
                        }), [C]);
                    w && !m && k();
                    let j = (0, r.useMemo)(() => (0, n(381453).nF)(e => {
                            f.setState({ ...f.state,
                                mouseEntered: !0
                            })
                        }, 100), [f]),
                        T = (0, r.useMemo)(() => (0, n(381453).sg)(e => {
                            f.setState({ ...f.state,
                                mouseEntered: !1
                            })
                        }, 100), [f]),
                        E = (0, r.useCallback)((e, t) => {
                            x(t)
                        }, [x]),
                        R = (0, r.useCallback)(e => {
                            P()
                        }, [P]),
                        M = (0, r.useCallback)(e => {
                            let t = e.target;
                            void 0 !== t && t instanceof HTMLElement && (0, n(768397).p)(t) && g(!0)
                        }, []),
                        L = (0, r.useCallback)(() => {
                            g(!0)
                        }, []),
                        O = (0, n(682985).K8)(() => l({
                            handleRepositionClick: E,
                            handleSavePositionClick: R,
                            handleCancelClick: k,
                            isVisible: b || h || w,
                            isRepositioning: w
                        }), [E, R, k, h, w, b, l]),
                        D = (0, n(463846).A)(!!e.preventClickPropagation);
                    return (0, i.jsxs)("div", {
                        ref: t,
                        onFocus: M,
                        onBlur: L,
                        onMouseEnter: j,
                        onMouseMove: j,
                        onMouseLeave: T,
                        ...D,
                        ...(0, n(762507).ow)(o, c),
                        children: [(0, i.jsx)(n(245483).A, {
                            onDraggableDragStart: y,
                            onDraggableDragMove: A,
                            onDraggableDragEnd: I,
                            onDraggableDragCancel: I,
                            disabled: !w,
                            render: t => (0, i.jsx)("div", {
                                style: _.dragContainer,
                                ...t,
                                children: e.render({
                                    imagePosition: S,
                                    isRepositioning: w
                                })
                            })
                        }), (0, i.jsx)(s, {
                            small: e.small,
                            isRepositioning: w
                        }), O]
                    })
                };

            function s({
                small: e,
                isRepositioning: t
            }) {
                if (e) return null;
                let r = {
                    background: "rgba(0, 0, 0, 0.4)",
                    borderRadius: 4,
                    color: n(632079).oZ.white,
                    fontSize: 12,
                    fontFamily: (0, n(699422).vc)(n(849917).locale).sans,
                    width: 180,
                    insetInlineStart: "calc(50% - 90px)",
                    padding: "0.3em 1.5em 0.3em",
                    pointerEvents: "none",
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    textAlign: "center"
                };
                return (0, i.jsx)(n(654979).A, {
                    visible: t,
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    style: r,
                    children: (0, i.jsx)(n(109939).sA, {
                        defaultMessage: "Drag image to reposition",
                        id: "withImageRepositioning.dragImage.text"
                    })
                })
            }
        },
        139074: (e, t, n) => {
            n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            var r = () => n(746473);
            async function i(e, t) {
                let {
                    currentUser: i
                } = e;
                if (0 === t.stores.length) return;
                let o = t.stores[0].inMemoryRecordCache,
                    a = [],
                    s = n(412951).RecordMap.create(),
                    l = new Set;
                for (let e of t.stores) l.has(e.id) || (l.add(e.id), a.push(e.pointer), s.setValue(e.pointer, (0, r().zH)(e).getValue()));
                let d = n(984418).En(t.initialRecordMap),
                    {
                        createdBacklinks: c,
                        deletedBacklinks: u
                    } = await (0, n(33666).JT)({
                        loadRecordValue: n(95476).ho.fromGetRecordValueFn(o.makeGetRecordValueFn(i.id)),
                        operationPointers: a,
                        getInitialRecordModel: n(993189).b4_.fromRecordMap(d),
                        getFinalRecordModel: n(993189).b4_.fromRecordMap(s)
                    }),
                    p = n(411005).A.updateBacklinks({
                        createdBacklinks: c,
                        deletedBacklinks: u,
                        currentUserId: i.id
                    });
                t.postSubmitCallbacks.push(e => {
                    e && n(411005).A.resetBacklinkState({
                        blockIds: p,
                        currentUserId: i.id
                    })
                })
            }
            let o = {
                updateSyncedCollectionActions: new(n(815048)).O2("updateSyncedCollectionActions", async () => n.e(70522).then(n.bind(n, 752443)))
            };
            var a = () => n(737096);
            let s = new(n(815048)).O2("cleanupSnapshotsAfterUserQueueDrain", async () => await n.e(91787).then(n.bind(n, 544751)));

            function l() {
                return n(22553).z.isEnabled && n(218744).default.checkGate({
                    gateName: "opfs_snapshots"
                })
            }
            async function d(e) {
                if (!l()) return;
                let {
                    cleanupSnapshotsAfterUserQueueDrain: t
                } = await s.load();
                await t(e)
            }
            let c = (0, n(109939).YK)({
                    saveEditsError: {
                        id: "saveEditsError.message",
                        defaultMessage: "There was an issue persisting your edits. Please message us for help."
                    }
                }),
                u = (0, n(381453).nF)(e => {
                    (0, n(104310).u)({
                        event: {
                            eventName: "save_edits_error_modal_show",
                            eventProperties: {
                                errorType: e
                            }
                        }
                    })
                }, 3e4);
            (0, n(210822).P$)({
                async onBeforeTransactionEnqueue({
                    transaction: e,
                    environment: t
                }) {
                    if ((0, n(23803).CS)() && (0, n(607689).Ly)(e, t)) {
                        let n = await o.updateSyncedCollectionActions.load();
                        await n.updateSyncedData({
                            transaction: e,
                            environment: t
                        })
                    }
                },
                onLocalTransactionCommitError({
                    error: e
                }) {
                    switch (e.kind) {
                        case "async":
                            break;
                        case "saveFailed":
                            u(e.originalError.name), e.originalError.name === n(262273).yE ? n(647095).tW(e.originalError.message) : n(647095).tW(n(962299).A.formatMessage(c.saveEditsError));
                            break;
                        case "validation":
                            n(647095).f1(e.displayMessage);
                            break;
                        default:
                            (0, n(722371).HB)(e)
                    }
                },
                onServerTransactionCommitError({
                    error: e,
                    suppressDialog: t
                }) {
                    if (!t) switch (e.kind) {
                        case "serverError":
                            e.sentryId;
                            break;
                        case "requestTooLarge":
                            n(647095).f1(e.displayMessage);
                            break;
                        default:
                            (0, n(722371).HB)(e)
                    }
                },
                onCreateTransactionError({
                    error: e
                }) {},
                onTaskCreated: ({
                    task: e
                }) => (e.userId && (e.maxEditSeq = a().E.incrementEditSeq(e.userId)), e),
                onWillEnqueueTask({
                    environment: e,
                    transaction: t
                }) {
                    let {
                        currentUser: n
                    } = e;
                    i({
                        currentUser: n
                    }, t)
                },
                onTransactionOperationApplied({
                    getRecordModel: e,
                    model: t
                }) {
                    if (n(993189).Bj6.isModel("block", t)) {
                        let r = (0, n(975908).zN)({
                            block: t,
                            getRecordModel: e
                        });
                        r && n(311588).A.setEditedBlock(r.id, t.id)
                    }
                },
                onBeforeTaskSave({
                    queueSessionId: e,
                    tasks: t,
                    userId: n
                }) {
                    if (l() && n)
                        for (let r of t) r.sessionId !== e && a().E.addOwnedTxSessionId(n, r.sessionId)
                },
                onTasksSaved({
                    savedTasks: e,
                    userId: t
                }) {
                    if (t)
                        for (let n of e) void 0 !== n.maxEditSeq && a().E.confirmEditSeq(t, n.maxEditSeq)
                },
                onTaskError({
                    error: e
                }) {
                    l() && e.userId && ("unretryable" === e.kind ? (a().E.recordUnretryableFailure(e.userId, e.task.sessionId), a().E.shouldRotateForUnretryableFailure(e.userId) && (0, n(548843).R)({
                        userId: e.userId,
                        reason: "unretryableFailure"
                    })) : (0, n(722371).HB)(e.kind))
                },
                onTaskQueueDrained: async ({
                    userId: e
                }) => d(e)
            })
        },
        151525: (e, t, n) => {
            n.d(t, {
                Ay: () => d,
                Gi: () => a,
                Wc: () => i,
                pF: () => s,
                vS: () => o
            });
            var r = () => n(546605);
            let i = "loadingLocalImage",
                o = "uploading",
                a = "downloading",
                s = "loaded";
            class l extends r().Store {
                getInitialState() {
                    return {
                        loadingMode: s
                    }
                }
            }
            let d = l
        },
        156658: (e, t, n) => {
            n.r(t), n.d(t, {
                mainApp: () => r
            }), n(16280);
            async function r(e) {
                var t, r;
                let i, o, {
                        minimalEnvironment: a,
                        mainStartTime: s,
                        prefetchInitiatedTime: l,
                        prefetchCache: d,
                        initializeStatsigPromise: c,
                        currentUserId: u
                    } = e,
                    {
                        device: p
                    } = a,
                    [{
                        initialize: m
                    }, {
                        setupOnBeforeUnload: h
                    }, {
                        clientLoggerEnvironmentData: g,
                        log: f
                    }, {
                        createClientEnvironment: b
                    }, {
                        setupTransactionQueue: v
                    }, {
                        default: w
                    }, {
                        setupRecordCacheDebugging: S,
                        DEBUG_ONLY_registerBlockRecordValueSetHandler: y
                    }, {
                        initializeKeyboardShortcutsStore: A
                    }, {
                        setCurrentUserId_FOR_LOGGING_ONLY: I
                    }, {
                        initFeatureAvailability: x
                    }, {
                        initBlockLimitActions: P
                    }, {
                        initUpgradeActions: k
                    }, {
                        initAiConnectorUpsell: C
                    }, {
                        initSubscriptionActions: _
                    }] = await Promise.all([Promise.resolve().then(n.bind(n, 59335)), Promise.resolve().then(n.bind(n, 715689)), Promise.resolve().then(n.bind(n, 773352)), Promise.resolve().then(n.bind(n, 465748)), Promise.resolve().then(n.bind(n, 941701)), Promise.resolve().then(n.bind(n, 553871)), Promise.resolve().then(n.bind(n, 158392)), Promise.resolve().then(n.bind(n, 62276)), Promise.resolve().then(n.bind(n, 518044)), Promise.resolve().then(n.bind(n, 754518)), Promise.resolve().then(n.bind(n, 654249)), Promise.resolve().then(n.bind(n, 935339)), Promise.resolve().then(n.bind(n, 593799)), Promise.resolve().then(n.bind(n, 801818)), Promise.resolve().then(n.bind(n, 139074))]);
                x(), P(), k(), C(), _(), A(a);
                let j = await b({
                        minimalEnvironment: a,
                        prefetchCache: d,
                        currentUserId: u
                    }),
                    T = await m({
                        environment: j,
                        currentUserId: u
                    });
                I(u);
                let [{
                    CurrentUser: E
                }, {
                    getGhostAdminUserId: R
                }] = await Promise.all([Promise.resolve().then(n.bind(n, 792292)), Promise.resolve().then(n.bind(n, 128190))]);
                T.updateCurrentUserId = async e => {
                    let t = await R(T),
                        n = { ...e.environment,
                            currentUser: new E({
                                id: e.currentUserId,
                                loggedInUserIds: e.userIds,
                                adminUserId: t
                            })
                        };
                    I(u), await eb(n), n.idCreator.updateCurrentUserId(e.currentUserId)
                };
                let {
                    isPrewarmedTabLoadSidebarEnabled: M
                } = await Promise.resolve().then(n.bind(n, 989962)), L = "/blank" === window.location.pathname && M;
                if (null != (t = T.bootData) && t.spaceId || L) {
                    let e, [{
                            default: t
                        }, {
                            SpaceStore: i
                        }, {
                            SpaceViewStore: o
                        }, {
                            getLastVisitedSpaceId: a,
                            getLastVisitedSpaceViewId: s
                        }] = await Promise.all([Promise.resolve().then(n.bind(n, 728372)), Promise.resolve().then(n.bind(n, 695906)), Promise.resolve().then(n.bind(n, 994797)), Promise.resolve().then(n.bind(n, 781277))]),
                        l = null == (r = T.bootData) ? void 0 : r.spaceId;
                    if (L && (l ? ? = a(), e ? ? = s()), l) {
                        let n = new i(T, {
                                table: "space",
                                id: l
                            }),
                            r = e ? o.createChildStore(n, {
                                id: e,
                                table: "space_view",
                                spaceId: l
                            }) : void 0;
                        t.setState({ ...t.state,
                            sidebarSpaceStore: n,
                            ...r && {
                                sidebarSpaceViewStore: r
                            }
                        })
                    }
                }
                let {
                    ElectronSqlite: O,
                    RouterStore: D
                } = T;
                S(n(986939).A.isMobile);
                let {
                    TransactionQueueDependenciesImpl: U
                } = await Promise.resolve().then(n.bind(n, 300295)), B = new U(T), N = await v(T, B);
                h({
                    device: p,
                    TransactionQueue: N,
                    AppUpdateStore: T.AppUpdateStore,
                    GlobalFileUploadStore: w
                });
                let [{
                    initialize: W
                }, {
                    default: q
                }] = await Promise.all([Promise.resolve().then(n.bind(n, 344287)), Promise.resolve().then(n.bind(n, 680007))]);
                if (W(T), q.setDevice(p), q.setRouterStore(T.RouterStore), p.isMobileNative) {
                    let e = q.DO_NOT_USE_markLegacy("mobilenative.initialize_from_js"),
                        [{
                            initializeMobileNativeApp: t
                        }, {
                            getMobileNativeDeviceInfo: r
                        }, {
                            getMobileNativeSessionInfo: i
                        }] = await Promise.all([Promise.resolve().then(n.bind(n, 433175)), Promise.resolve().then(n.bind(n, 663250)), Promise.resolve().then(n.bind(n, 8814))]);
                    await t(T), Object.assign(g, r(), i()), q.DO_NOT_USE_measureLegacy(e, {
                        data: {}
                    })
                }
                if (p.isElectron) {
                    let e = q.mark("desktop.initialize_from_js"),
                        {
                            initializeElectron: t
                        } = await Promise.resolve().then(n.bind(n, 996985));
                    await t({
                        device: p,
                        electronSqlite: O,
                        routerStore: D
                    });
                    let {
                        getDesktopDeviceInfo: r
                    } = await Promise.resolve().then(n.bind(n, 70977));
                    Object.assign(g, await r(), {
                        desktopVersion: p.desktopAppVersion
                    }), q.measure(e, {})
                }
                let [{
                    initialize: z
                }, {
                    startListeners: F
                }, {
                    initialize: V
                }, {
                    updateConnectionState: K
                }, {
                    setDefaultEventPropertiesFetcher: $
                }, {
                    provideDependencies: G
                }, {
                    AppStoreMainEditorCurrentBlockStore: H
                }] = await Promise.all([Promise.resolve().then(n.bind(n, 11574)), Promise.resolve().then(n.bind(n, 239134)), Promise.resolve().then(n.bind(n, 260079)), Promise.resolve().then(n.bind(n, 312819)), Promise.resolve().then(n.bind(n, 733561)), Promise.resolve().then(n.bind(n, 863318)), Promise.resolve().then(n.bind(n, 728372))]), [{
                    AppRoot: J
                }, {
                    createElement: Z
                }, {
                    render: Q
                }, {
                    createRoot: Y
                }, {
                    default: X
                }, {
                    initCurrentPageProviders: ee
                }] = await Promise.all([Promise.resolve().then(n.bind(n, 685429)), Promise.resolve().then(n.t.bind(n, 296540, 19)), Promise.resolve().then(n.t.bind(n, 440961, 19)), Promise.resolve().then(n.t.bind(n, 205338, 19)), Promise.resolve().then(n.bind(n, 218744)), Promise.resolve().then(n.bind(n, 694693))]);
                F(p);
                let {
                    mobileNative: et
                } = T;
                if (et && et.sqliteConnection) {
                    let [{
                        backfillRecordsWithUserId: e
                    }, {
                        LOGGED_OUT_USER_ID: t
                    }, {
                        convertErrorToLog: r
                    }] = await Promise.all([Promise.resolve().then(n.bind(n, 863027)), Promise.resolve().then(n.bind(n, 48202)), Promise.resolve().then(n.bind(n, 416607))]);
                    try {
                        await e(et.sqliteConnection, u || t)
                    } catch (e) {
                        f({
                            level: "error",
                            from: "loginAction.ts",
                            type: "backfillRecordsWithUserId",
                            error: r(e),
                            data: {}
                        })
                    }
                }
                $(T), G({
                    defaultStableParentStore: H
                });
                let [{
                    trackSetRecordValueInvocation: en
                }] = await Promise.all([Promise.resolve().then(n.bind(n, 111301))]);
                y(({
                    blockId: e,
                    ...t
                }) => {
                    var n;
                    e === (null == (n = H.state) ? void 0 : n.id) && en({
                        blockId: e,
                        ...t
                    })
                }), ee();
                let {
                    RouteRegistry: er
                } = await Promise.resolve().then(n.bind(n, 580409));
                if (er.isRouteRegistryEnabled) {
                    let {
                        registerRouteConfigs: e
                    } = await n.e(95728).then(n.bind(n, 658279));
                    e(T)
                }
                V(T), N.startLoop();
                let [{
                    refreshNotionCookies: ei,
                    validateHasPermissionArgs: eo,
                    clearNotionCookiesWithNoPermission: ea,
                    clearThirdPartyCookiesAndLocalStorageWithNoPermission: es
                }, {
                    clearNotionLocalStorageWithNoPermission: el
                }, {
                    updateEnvironment: ed
                }, {
                    setSubMetricsAtRenderCallback: ec
                }, {
                    getAppStartTime: eu
                }, {
                    getTimeOriginToAppStartSubMetrics: ep
                }, {
                    default: em
                }, eh] = await Promise.all([Promise.resolve().then(n.bind(n, 128190)), Promise.resolve().then(n.bind(n, 613442)), Promise.resolve().then(n.bind(n, 170801)), Promise.resolve().then(n.bind(n, 266130)), Promise.resolve().then(n.bind(n, 737124)), Promise.resolve().then(n.bind(n, 259533)), Promise.resolve().then(n.bind(n, 516670)), Promise.resolve().then(n.bind(n, 910780))]);
                Promise.all([ea(T), es(T)]).then(() => ei(T)), el(), eo(T);
                let [{
                    waitForStatsigInitialization: eg
                }, {
                    isPrewarmedTabInitialRender: ef
                }] = await Promise.all([Promise.resolve().then(n.bind(n, 404449)), Promise.resolve().then(n.bind(n, 259533))]);
                async function eb(e) {
                    let t = performance.now(),
                        {
                            didStatsigBootupTimeout: n
                        } = await eg({
                            environment: T,
                            initializeStatsigPromise: c
                        });
                    i ? ? = X.checkGate({
                        gateName: "react_18_concurrent_rendering"
                    });
                    let r = performance.now(),
                        a = document.querySelector("#notion-app");
                    if (!a) throw Error('Could not find element with id "notion-app"');
                    N.updateDependencies(new U(e)), K(e), ed(e), $(e), g.userId = e.currentUser.id;
                    let d = () => {
                            let e = document.getElementById("initial-loading-spinner"),
                                i = document.getElementById("skeleton");
                            e && e.remove(), i && i.remove(), ec({
                                mainStartTime: s,
                                prefetchInitiatedTime: l,
                                statsigBootupBlockingStartTime: t,
                                renderStartTime: r,
                                renderEndTime: performance.now()
                            });
                            let o = eu();
                            o && q.DO_NOT_USE_measureLegacy({
                                metricName: "time_origin_to_app_start",
                                startTime: 0,
                                endTime: o
                            }, {
                                data: {
                                    sub_metrics: ep()
                                }
                            }), q.DO_NOT_USE_measureLegacy({
                                metricName: "time_origin_to_prefetch_initiated",
                                startTime: 0,
                                endTime: l
                            }, {}), em.state && q.measure({
                                metricName: "client.migrate_sqlite",
                                startTime: em.state.startTime,
                                endTime: em.state.endTime
                            }, {}), q.measure({
                                metricName: "statsig_bootup_blocking",
                                startTime: t,
                                endTime: r
                            }, {
                                data: {
                                    timed_out: n,
                                    is_prewarmed_tab: ef(T)
                                }
                            })
                        },
                        u = Z(J, {
                            environment: e,
                            onMount: i ? d : void 0
                        });
                    i ? (o ? ? = Y(a)).render(u) : Q(u, a, d)
                }
                z(T), await eb(T);
                let {
                    startFlushing: ev
                } = await Promise.resolve().then(n.bind(n, 963485));
                return ev((e, t) => {
                    q.measure(e, {
                        preboot: !0,
                        shouldSendIfStatsigNotInitialized: !0,
                        shouldExcludeFromTimeline: !0,
                        data: t
                    })
                }), {
                    transactionQueue: N,
                    environment: T
                }
            }
        },
        168814: (e, t, n) => {
            n.d(t, {
                X: () => r
            });

            function r() {
                return (0, n(682985).K8)(() => n(329464).A.state.initialRenderCompleted, [])
            }
        },
        169789: (e, t, n) => {
            n.d(t, {
                JK: () => i
            });
            let r = {
                EdgeManagerContext: new(n(815048)).O2("EdgeManagerContext", () => Promise.all([n.e(75134), n.e(28556), n.e(53923), n.e(48787), n.e(95798), n.e(42510)]).then(n.bind(n, 95798))),
                RelationPropertyWithEdges: new(n(815048)).O2("RelationPropertyWithEdges", () => Promise.all([n.e(75134), n.e(28556), n.e(53923), n.e(48787), n.e(48860), n.e(75234), n.e(65499), n.e(95798), n.e(91562)]).then(n.bind(n, 546073))),
                RelationPropertyOverlayWithEdges: new(n(815048)).O2("RelationPropertyOverlayWithEdges", () => Promise.all([n.e(75134), n.e(28556), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(71562), n.e(62475), n.e(3151), n.e(98629), n.e(53923), n.e(48787), n.e(23301), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(53050), n.e(87353), n.e(54951), n.e(17250), n.e(64696), n.e(28048), n.e(55940), n.e(12560), n.e(21969), n.e(76361), n.e(74145), n.e(48860), n.e(18682), n.e(79349), n.e(33162), n.e(63793), n.e(18881), n.e(62731), n.e(72805), n.e(9817), n.e(75189), n.e(47281), n.e(75234), n.e(66200), n.e(69626), n.e(95150), n.e(11719), n.e(95798), n.e(33490)]).then(n.bind(n, 357417)))
            };
            (0, n(815048)._h)(r.EdgeManagerContext, e => e.EdgeManagerProvider), (0, n(815048).jQ)(r.RelationPropertyWithEdges, e => e.RelationPropertyWithEdges);
            let i = (0, n(815048).jQ)(r.RelationPropertyOverlayWithEdges, e => e.RelationPropertyRendererWithEdges)
        },
        205338: (e, t, n) => {
            var r = n(440961);
            t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
        },
        260079: (e, t, n) => {
            n.r(t), n.d(t, {
                initialize: () => r
            });
            async function r(e) {
                let t = window.history.state && window.history.state.id || (0, n(698596).Ay)(),
                    r = e.currentUser.id;
                window.history.state || (window.history.replaceState({
                    id: t,
                    currentUserId: r
                }, "", window.location.href), (0, n(339613).k)({
                    historyId: t,
                    historyIndex: 0,
                    currentUserId: r
                })), (0, n(318355).A)(e) && e.TabbedRouterStore.setUp({
                    nativeInboxEnabled: (0, n(907620).T)("supportsNativeInbox")
                }), e.device.isElectron && (n(259533).setDesktopLoadContext(), n(219040).H.pushEntry({
                    historyId: t,
                    currentUserId: r,
                    url: window.location.href
                }));
                let i = window.location.href;
                await (0, n(274011).Y)({
                    environment: e,
                    id: t,
                    action: "pop",
                    href: i,
                    updateMobileTabbedRouterArgs: {
                        forceUpdate: !0,
                        silenceErrors: !0,
                        clearNativeRootPageOverride: "/" !== window.location.pathname
                    },
                    enableDesktopAppRedirect: !0,
                    pageVisitSourceOverride: (0, n(254656).Q5)(i) ? void 0 : n(254656).y8.Initialization
                });
                let o = (0, n(418928).w)(r);
                if (!o || "undefined" === o) {
                    let e = window.location.pathname;
                    e && (0, n(418928).E)({
                        currentUserId: r,
                        value: e
                    })
                }
            }
        },
        266004: (e, t, n) => {
            n.d(t, {
                _: () => i
            });
            let r = new(n(815048)).O2("settingsConsole", async () => await Promise.all([n.e(75134), n.e(36556), n.e(55373), n.e(36192), n.e(49806), n.e(79974), n.e(45414), n.e(71562), n.e(26361), n.e(42838), n.e(37571), n.e(27727), n.e(47609), n.e(47010), n.e(25952), n.e(67135), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(12354), n.e(54951), n.e(17250), n.e(26997), n.e(73259), n.e(28048), n.e(55940), n.e(12560), n.e(12001), n.e(40198), n.e(39726), n.e(31243), n.e(21969), n.e(29663), n.e(74145), n.e(56308), n.e(48860), n.e(18682), n.e(79349), n.e(73588), n.e(14231), n.e(64049), n.e(46350), n.e(67281), n.e(64476), n.e(52064), n.e(63611), n.e(14877), n.e(69438), n.e(78257), n.e(74931), n.e(22841), n.e(57912), n.e(33619), n.e(58147), n.e(39951), n.e(94194), n.e(34), n.e(19596)]).then(n.bind(n, 246369))),
                i = (0, n(815048)._h)(r, e => e.OrganizationSettingsConsole)
        },
        275015: (e, t, n) => {
            n.d(t, {
                M: () => r
            });
            let r = new(n(151525)).Ay
        },
        298823: (e, t, n) => {
            n.d(t, {
                Q: () => a
            }), n(898992), n(354520);
            var r = n(296540),
                i = n(474848);
            let o = {
                display: "none"
            };

            function a() {
                let e = (0, n(533992).v3)(),
                    t = (0, n(109939).tz)(),
                    a = `${n(986939).A.identity.domainBaseUrl}/authSync`,
                    s = e.currentUser.isLoggedIn(),
                    [l, d] = (0, r.useState)(null),
                    [c, u] = (0, r.useState)({
                        value: !1,
                        count: 0
                    }),
                    p = (0, n(682985).K8)(() => n(995735).B.getTotalUnreadMentionsCount(), []),
                    m = (0, n(682985).K8)(() => n(492047).A.getAllSpaceViewStores(e), [e]);
                (0, r.useEffect)(() => {
                    let e = t => {
                        let r = n(986939).A.identity.domainBaseUrl;
                        t.origin === r && t.ports && t.ports[0] && (d(t.ports[0]), window.removeEventListener("message", e))
                    };
                    return window.addEventListener("message", e), () => {
                        window.removeEventListener("message", e)
                    }
                }, []), (0, r.useEffect)(() => {
                    !s || c.value || 0 === c.count || null == l || l.postMessage({
                        version: 1,
                        name: "unreadCount",
                        source: "notion",
                        unreadCount: p
                    })
                }, [s, c.count, c.value, l, p]);
                let h = (0, r.useCallback)(async () => {
                    let e = n(381453).hS(m, "userId"),
                        r = await (0, n(975162).lX)(e, 10, async e => {
                            if (!e.userId) return;
                            let r = n(807825).L.createChildStore(e, {
                                table: n(832375).oo9,
                                id: e.userId
                            });
                            await r.load();
                            let i = r.getEmail() ? ? "",
                                o = r.getDisplayName(t) ? ? "",
                                a = r.getProfilePhoto() ? ? "";
                            return {
                                id: e.userId,
                                displayName: o,
                                emailAddress: i,
                                profilePicture: a
                            }
                        });
                    null == l || l.postMessage({
                        version: 1,
                        name: "accountSwitcher",
                        source: "notion",
                        accounts: r.filter(e => void 0 !== e),
                        persistCookie: !0
                    })
                }, [t, l, m]);
                (0, r.useEffect)(() => {
                    s && l && (c.value || 0 === c.count) && h()
                }, [s, h, c.count, c.value, l]), (0, r.useEffect)(() => {
                    (!e.currentUser.id || (0, n(4962).uj)(e.currentUser.id)) && (null == l || l.postMessage({
                        version: 1,
                        name: "setNotionUserID",
                        source: "notion",
                        notionUserID: e.currentUser.id ? e.currentUser.id : "",
                        type: "mutation"
                    }))
                }, [e.currentUser.id, l]), (0, r.useEffect)(() => {
                    s || (null == l || l.postMessage({
                        version: 1,
                        name: "setNotionUserID",
                        source: "notion",
                        notionUserID: "",
                        type: "mutation"
                    }), null == l || l.postMessage({
                        version: 1,
                        name: "accountSwitcher",
                        source: "notion",
                        accounts: [],
                        persistCookie: !0
                    }))
                }, [s, l]);
                let g = (0, r.useCallback)(e => {
                    if (1 !== e.data.version) return;
                    let {
                        source: t
                    } = e.data;
                    "notion" !== t && "mailLoaded" === e.data.name && u(e => ({
                        value: !0,
                        count: e.count + 1
                    }))
                }, []);
                return (0, r.useEffect)(() => (d(e => (e && (e.onmessage = g), e)), () => {
                    d(e => (e && (e.onmessage = null), e))
                }), [g, l]), (0, i.jsx)("iframe", {
                    src: a,
                    style: o,
                    onLoad: e => {
                        let t;
                        return t = e.currentTarget, void setTimeout(() => {
                            var e;
                            null == (e = t.contentWindow) || e.postMessage("initial_handshake", n(986939).A.identity.domainBaseUrl)
                        }, 50)
                    },
                    title: "Notion Identity"
                })
            }
        },
        300295: (e, t, n) => {
            n.d(t, {
                TransactionQueueDependenciesImpl: () => a
            }), n(944114), n(581454);
            var r = () => n(773352),
                i = () => n(433261),
                o = () => n(542376);
            class a {
                timeSource = n(882108).u;
                constructor(e) {
                    this.environment = e
                }
                getExperimentGroup(e) {
                    return n(218744).default.getEligibleGroup({
                        experimentId: e,
                        defaultGroup: "control"
                    })
                }
                async handleSaveTransactions(e) {
                    let t = function(e) {
                            let t = [],
                                o = s,
                                a = [];
                            for (let p of e) {
                                let e;
                                for (let t of (p.spaceId && (e = p.spaceId), p.operations)) {
                                    var u;
                                    if (!(0, i().$t)(t.pointer.table) || (u = t).pointer.table === n(832375).Yxt && "update" === u.command && u.args.target_table === n(832375).NXh && 1 === u.args.version || function(e) {
                                            if (e.pointer.table === n(832375).evP && ("update" === e.command || "set" === e.command)) {
                                                var t;
                                                if ((0, n(381453).n4)(e.path, ["format"]) && e.args.alias_pointer) return e.args.alias_pointer.spaceId !== e.pointer.spaceId;
                                                if ((0, n(381453).n4)(e.path, []) && null != (t = e.args.format) && t.alias_pointer) return e.args.format.alias_pointer.spaceId !== e.pointer.spaceId
                                            }
                                            return !1
                                        }(t)) {
                                        e = l;
                                        break
                                    } else if (t.pointer.spaceId) {
                                        if (void 0 !== e && e !== t.pointer.spaceId) {
                                            e = d;
                                            break
                                        }
                                        e = t.pointer.spaceId
                                    }
                                }
                                e !== l && e !== p.spaceId && r().log({
                                    level: "warning",
                                    from: "TransactionQueueDependencies",
                                    type: "MultiSpaceTransactionWarning",
                                    data: {
                                        message: `Top level space id does not match final space id. Transaction pointers: ${JSON.stringify(p.operations.map(e=>e.pointer))}`,
                                        miscDataToConvertToString: {
                                            spaceIdForTransaction: e,
                                            transactionSpaceId: p.spaceId,
                                            debug: p.debug
                                        }
                                    }
                                }), e || (e = s), o !== e ? (a.length > 0 && t.push(c({
                                    transactions: a,
                                    spaceIdForBatch: o
                                })), a = [p], o = e) : (o = e, a.push(p))
                            }
                            return a.length > 0 && t.push(c({
                                transactions: a,
                                spaceIdForBatch: o
                            })), 0 === t.length && t.push({
                                transactions: e,
                                type: "currentSpace"
                            }), t
                        }(e),
                        a = [];
                    for (let [e, n] of t.entries()) {
                        let r = n.transactions,
                            i = await (0, o().J)({
                                environment: this.environment,
                                cellType: n.type,
                                spaceId: "space" === n.type ? n.spaceId : void 0,
                                tasks: r
                            });
                        if (i.error) {
                            let n = t.slice(e + 1),
                                r = i.error.retryReason,
                                s = i.error.retryDelay;
                            return n.length > 0 && !r && (r = "UntriedTransactionError", s = 2e3), {
                                error: new(o()).r({
                                    message: i.error.message,
                                    clientData: i.error.clientData,
                                    retryDelay: s,
                                    retryReason: r,
                                    savedTasks: [...a, ...i.error.savedTasks],
                                    failedTasks: [...i.error.failedTasks],
                                    failedErrors: [...i.error.failedErrors],
                                    debugMessage: i.error instanceof o().r ? i.error.debugMessage : void 0
                                })
                            }
                        }
                        a.push(...i.value)
                    }
                    return {
                        value: a
                    }
                }
                handleHealthcheck(e) {
                    n(508297).nq(e)
                }
                async rollbackTask(e) {
                    try {
                        await (0, n(445010).X)(this.environment, e)
                    } catch (e) {
                        r().log({
                            level: "error",
                            from: "TransactionQueueDependencies",
                            type: "ClientTransactionCleanupError",
                            error: (0, n(416607).convertErrorToLog)(e),
                            data: {
                                userId: this.environment.currentUser.id
                            }
                        })
                    }
                }
            }
            let s = "curSpaceId",
                l = "mainCellId",
                d = "multiCellRoutedToMainCellId";

            function c(e) {
                let {
                    transactions: t,
                    spaceIdForBatch: n
                } = e;
                return n === l || n === d ? {
                    transactions: t,
                    type: "main"
                } : n === s ? {
                    transactions: t,
                    type: "currentSpace"
                } : {
                    transactions: t,
                    spaceId: n,
                    type: "space"
                }
            }
        },
        303325: (e, t, n) => {
            n.d(t, {
                b: () => r
            });
            let r = (0, n(815048)._h)(new(n(815048)).O2("AdminWorkersHomePage", () => Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(45414), n.e(64038), n.e(67430), n.e(57042), n.e(33503), n.e(56809), n.e(30532), n.e(23644), n.e(22841), n.e(12801), n.e(49340), n.e(85782), n.e(91029), n.e(19884)]).then(n.bind(n, 184062))), e => e.AdminWorkersHomePage)
        },
        344287: (e, t, n) => {
            n.r(t), n.d(t, {
                initialize: () => r
            });

            function r(e) {
                "object" == typeof n(986939).A && n(986939).A.version && (n(773352).clientLoggerEnvironmentData.version = n(986939).A.version);
                let {
                    device: t,
                    currentUser: r
                } = e;
                t.isMobileNative && (n(773352).clientLoggerEnvironmentData.isMobileNative = !0), n(986939).A.isMobile && (n(773352).clientLoggerEnvironmentData.isMobile = !0), t.isAndroid && (n(773352).clientLoggerEnvironmentData.isAndroid = !0), t.isIOS && (n(773352).clientLoggerEnvironmentData.isIOS = !0), t.isElectron && (n(773352).clientLoggerEnvironmentData.isElectron = !0), t.isChromeExtension && (n(773352).clientLoggerEnvironmentData.isChromeExtension = !0), n(773352).clientLoggerEnvironmentData.os = t.os, n(773352).clientLoggerEnvironmentData.platform = t.platform, window.navigator.userAgent && (n(773352).clientLoggerEnvironmentData.userAgent = window.navigator.userAgent), document.referrer && (n(773352).clientLoggerEnvironmentData.referrer = document.referrer), r.id && (n(773352).clientLoggerEnvironmentData.userId = r.id), n(773352).clientLoggerEnvironmentData.is_experimental_build = n(986939).A.buildTarget === n(508066).w6, n(773352).clientLoggerEnvironmentData.is_mobile_build = n(986939).A.buildTarget === n(508066)._j, (0, n(921200).x)().then(e => {
                    e && (n(773352).clientLoggerEnvironmentData.storageUsageEstimate = e.usage, n(773352).clientLoggerEnvironmentData.storageQuotaEstimate = e.quota)
                })
            }
        },
        368252: (e, t, n) => {
            n.d(t, {
                f: () => r
            });
            let r = (0, n(815048)._h)(new(n(815048)).O2("AdminSingleRecord", () => Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(45414), n.e(64038), n.e(67430), n.e(57042), n.e(33503), n.e(56809), n.e(30532), n.e(23644), n.e(22841), n.e(12801), n.e(49340), n.e(85782), n.e(91029), n.e(19884)]).then(n.bind(n, 269048))), e => e.AdminSingleRecord)
        },
        373510: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var r = n(296540),
                i = n(474848);
            let o = function(e) {
                let t = (0, n(533992).Y0)(),
                    o = (0, n(682985).K8)(() => ({
                        initiator: n(400198).A.state.initiator,
                        isDragging: n(966225).Ay.state.isDragging
                    }), []),
                    a = (0, n(682985).K8)(() => n(818955).default.state.isActive, []),
                    s = (0, n(682985).K8)(() => n(818955).default.state.isActive && n(818955).default.state.moved ? "default" : o.isDragging ? "-webkit-grabbing" : "text", [o.isDragging]),
                    l = (0, r.useMemo)(() => {
                        let e = "notion-cursor-listener";
                        return "-webkit-grabbing" === s && (e += " notion-disable-local-cursor"), e
                    }, [s]);
                return (0, r.useEffect)(() => {
                    t.isIOS && ("touch" === o.initiator || o.isDragging || a ? document.body.classList.add("notion-disable-webkit-user-select") : document.body.classList.remove("notion-disable-webkit-user-select"))
                }, [t.isIOS, o.initiator, o.isDragging, a]), (0, i.jsx)("div", {
                    style: { ...e.style,
                        cursor: s
                    },
                    className: l,
                    children: e.children
                })
            }
        },
        398266: (e, t, n) => {
            n.d(t, {
                RK: () => i,
                uC: () => o
            });
            let r = {
                    Toaster: new(n(815048)).O2("Toaster", () => Promise.all([n.e(73259), n.e(47381)]).then(n.bind(n, 323821))),
                    PerfmarkTrialIneligibleToast: new(n(815048)).O2("PerfmarkTrialIneligibleToast", () => Promise.all([n.e(75134), n.e(58790)]).then(n.bind(n, 29489)))
                },
                i = (0, n(815048)._h)(r.Toaster, e => e.Toaster),
                o = (0, n(815048)._h)(r.PerfmarkTrialIneligibleToast, e => e.PerfmarkTrialIneligibleToast)
        },
        419351: (e, t, n) => {
            n.d(t, {
                K: () => u
            });
            var r = n.n(n(440537));
            n(16280), n(816573), n(878100), n(177936), n(748140), n(821903), n(491134), n(128845), n(237467), n(444732), n(979577), n(581454);
            var i = n.n(n(883503));
            let o = Date.UTC(2024, 0, 1);

            function a(e, t) {
                if (e >= 0x1000000000 || e < 0) throw Error("Invalid spaceShortId.");
                t[1] = 240 & t[1] | e / 0x100000000 & 15;
                for (let n = 0; n < 4; n++) t[2 + n] = e / 2 ** (24 - 8 * n) & 255;
                return t
            }

            function s(e, t, r, i) {
                let s = new Uint8Array(16),
                    l = globalThis.crypto.getRandomValues(s);
                return r !== n(213003).NX && function(e, t) {
                    if (e) return t[0] = 255, t[1] = 240 | 15 & t[1];
                    let r = Math.floor((new Date().getTime() - o) / n(627179).nD);
                    if (r >= 4096 || r < 0) throw Error("Invalid offsetInDays.");
                    t[0] = r >> 4, t[1] = r << 4 & 240 | 15 & t[1]
                }(e, l), a(t, l), l[6] = 128 | 1 & !!i, l[8] = 128 | 63 & l[8], ! function(e, t) {
                    if ("block" === e) return t[10] = (0, n(93953).vi)(e) | 63 & t[10];
                    let r = (0, n(93953).vi)(e);
                    t[10] = r >> 8 & 127, t[11] = 255 & r
                }(r, l), c(l)
            }

            function l(e, t, r) {
                let o, s = i()(r),
                    l = n(381453).iv(s, 2).map(e => parseInt(e.join(""), 16));
                if ((0, n(93953).ep)(t)) {
                    if (void 0 === e) throw new(n(101787)).Umn(`Deterministic ID for '${t}' must specify a space short id`)
                } else if (void 0 !== e) throw new(n(101787)).Umn(`Deterministic ID for '${t}' should not provide a space short id`);
                let d = new Uint8Array(l);
                return e && a(e, d), o = (0, n(93953).TG)(t), d[10] = 127 & o | 128 & d[10], d[6] = 130 | 1 & d[6], d[8] = 128 | 63 & d[8], c(d)
            }
            let d = Array(256).fill(0).map((e, t) => t.toString(16).padStart(2, "0"));

            function c(e) {
                let t = 0;
                return d[e[t++]] + d[e[t++]] + d[e[t++]] + d[e[t++]] + "-" + d[e[t++]] + d[e[t++]] + "-" + d[e[t++]] + d[e[t++]] + "-" + d[e[t++]] + d[e[t++]] + "-" + d[e[t++]] + d[e[t++]] + d[e[t++]] + d[e[t++]] + d[e[t++]] + d[e[t++]]
            }
            class u {
                environmentName;
                mainShortId;
                getSettings;
                isServerOriginated;
                mapSpaceIdToShortId;
                idCreatorLogger;
                constructor(e) {
                    this.environmentName = e.environmentName, this.mainShortId = n(73467).Yf[this.environmentName], this.getSettings = e.getSettings, this.isServerOriginated = e.isServerOriginated, this.mapSpaceIdToShortId = e.mapSpaceIdToShortId, this.idCreatorLogger = e.idCreatorLogger ? ? (() => {})
                }
                idInMain(e) {
                    let {
                        enableIdSchema: t
                    } = this.getSettings(e);
                    return t && e !== n(157008).wI ? (this.idCreatorLogger(void 0, e, "id_schema"), s(!1, this.mainShortId, e, this.isServerOriginated)) : this.legacyId(e, "disabled")
                }
                pointerInMain(e) {
                    return {
                        table: e,
                        id: this.idInMain(e)
                    }
                }
                async idWithSpaceId(e, t) {
                    let {
                        enableIdSchema: n
                    } = this.getSettings(t);
                    if (!n) return this.legacyId(t, "disabled");
                    let i = this.mapSpaceIdToShortId(e),
                        o = r().types.isPromise(i) ? await i : i;
                    return o ? (this.idCreatorLogger(e, t, "id_schema"), s(!1, o, t, this.isServerOriginated)) : this.legacyId(t, "missing_short_id")
                }
                async pointerWithSpaceId(e, t) {
                    return {
                        table: t,
                        spaceId: e,
                        id: await this.idWithSpaceId(e, t)
                    }
                }
                idWithSpaceShortId(e, t) {
                    let {
                        enableIdSchema: n
                    } = this.getSettings(t);
                    return n ? (this.idCreatorLogger(void 0, t, "id_schema"), s(!1, e, t, this.isServerOriginated)) : this.legacyId(t, "disabled")
                }
                legacyId(e, t) {
                    return this.idCreatorLogger(void 0, e, t), n(92513).JW()
                }
                deterministicIdInMain(e, t) {
                    let {
                        enableIdSchema: r
                    } = this.getSettings(e);
                    return r ? (this.idCreatorLogger(void 0, e, "id_schema"), l(void 0, e, t)) : (this.idCreatorLogger(void 0, e, "disabled"), n(92513).gB(t))
                }
                async deterministicIdWithSpaceId(e, t, i) {
                    let {
                        enableIdSchema: o
                    } = this.getSettings(t);
                    if (!o) return this.idCreatorLogger(e, t, "disabled"), n(92513).gB(i);
                    let a = this.mapSpaceIdToShortId(e),
                        s = r().types.isPromise(a) ? await a : a;
                    return s ? (this.idCreatorLogger(e, t, "id_schema"), l(s, t, i)) : (this.idCreatorLogger(e, t, "missing_short_id"), n(92513).gB(i))
                }
                deterministicIdWithSpaceShortId(e, t, r) {
                    let {
                        enableIdSchema: i
                    } = this.getSettings(t);
                    return i ? (this.idCreatorLogger(void 0, t, "id_schema"), l(e, t, r)) : (this.idCreatorLogger(void 0, t, "disabled"), n(92513).gB(r))
                }
                async getSpaceIdCreator(e) {
                    if (!e) return new p(e, this.idCreatorLogger);
                    let {
                        enableIdSchema: t
                    } = this.getSettings(void 0);
                    if (!t) return new p(e, this.idCreatorLogger);
                    let n = this.mapSpaceIdToShortId(e),
                        i = r().types.isPromise(n) ? await n : n;
                    return this.getSpaceShortIdCreator(e, i)
                }
                getSpaceIdCreatorSync(e) {
                    if (!e) return new p(e, this.idCreatorLogger);
                    let {
                        enableIdSchema: t
                    } = this.getSettings(void 0);
                    if (!t) return new p(e, this.idCreatorLogger);
                    let n = this.mapSpaceIdToShortId(e),
                        i = r().types.isPromise(n) ? void 0 : n;
                    return this.getSpaceShortIdCreator(e, i)
                }
                getSpaceShortIdCreator(e, t) {
                    let {
                        enableIdSchema: n
                    } = this.getSettings(void 0);
                    return n && t ? new m(e, this, t) : new p(e, this.idCreatorLogger)
                }
                async getSpaceIdCreatorFromModel(e) {
                    return e.getShortIdStr() ? this.getSpaceShortIdCreator(e.id, Number(e.getShortIdStr())) : await this.getSpaceIdCreator(e.id)
                }
            }
            class p {
                spaceId;
                idCreatorLogger;
                constructor(e, t) {
                    this.spaceId = e, this.idCreatorLogger = t
                }
                idInSavedSpace(e) {
                    return this.idCreatorLogger(void 0, e, "disabled"), n(92513).JW()
                }
                idInMain(e) {
                    return this.idCreatorLogger(void 0, e, "disabled"), n(92513).JW()
                }
                deterministicIdInSavedSpace(e, t) {
                    return this.idCreatorLogger(void 0, e, "disabled"), n(92513).gB(t)
                }
                deterministicPointerInSavedSpace(e, t) {
                    return {
                        id: this.deterministicIdInSavedSpace(e, t),
                        table: e,
                        spaceId: this.spaceId
                    }
                }
                pointerInMain(e) {
                    return {
                        id: this.idInMain(e),
                        table: e
                    }
                }
                pointerInSavedSpace(e) {
                    return {
                        id: this.idInSavedSpace(e),
                        table: e,
                        spaceId: this.spaceId
                    }
                }
                getSpaceId() {
                    return this.spaceId
                }
            }
            class m {
                spaceId;
                idCreator;
                spaceShortId;
                constructor(e, t, n) {
                    this.spaceId = e, this.idCreator = t, this.spaceShortId = n
                }
                idInSavedSpace(e) {
                    return this.idCreator.idWithSpaceShortId(this.spaceShortId, e)
                }
                idInMain(e) {
                    return this.idCreator.idInMain(e)
                }
                deterministicIdInSavedSpace(e, t) {
                    return this.idCreator.deterministicIdWithSpaceShortId(this.spaceShortId, e, t)
                }
                deterministicPointerInSavedSpace(e, t) {
                    return {
                        id: this.deterministicIdInSavedSpace(e, t),
                        table: e,
                        spaceId: this.spaceId
                    }
                }
                pointerInMain(e) {
                    return {
                        id: this.idInMain(e),
                        table: e
                    }
                }
                pointerInSavedSpace(e) {
                    return {
                        id: this.idInSavedSpace(e),
                        table: e,
                        spaceId: this.spaceId
                    }
                }
                getSpaceId() {
                    return this.spaceId
                }
            }
        },
        432428: (e, t, n) => {
            n.d(t, {
                V: () => o
            });
            var r = () => n(546605);
            class i extends r().Store {
                getInitialState() {
                    return {
                        isKeyboardShortcutsOpen: !1,
                        toggleSource: void 0,
                        openCount: 0
                    }
                }
            }
            let o = new i;
            (0, n(202146).exposeDebugValue)("keyboardShortcutsModalStore", o)
        },
        434914: (e, t, n) => {
            n.d(t, {
                V: () => r
            });
            let r = (0, n(815048)._h)(new(n(815048)).O2("UnifiedWorkspaceView", () => Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(45414), n.e(64038), n.e(67430), n.e(57042), n.e(33503), n.e(56809), n.e(30532), n.e(23644), n.e(22841), n.e(12801), n.e(49340), n.e(85782), n.e(91029), n.e(19884)]).then(n.bind(n, 448864))), e => e.UnifiedWorkspaceView)
        },
        448137: (e, t, n) => {
            function r(e) {
                let {
                    environment: t,
                    userSettingsStore: r
                } = e, o = r.getSettings(), a = null == o ? void 0 : o.time_zone, s = (0, n(714350).P)();
                a !== s && i({
                    environment: t,
                    userSettingsStore: r,
                    timeZone: s
                })
            }

            function i(e) {
                let {
                    environment: t,
                    userSettingsStore: r,
                    timeZone: i
                } = e;
                (0, n(377796).createAndCommit)({
                    userAction: "checkUserTimeZoneAction.updateTimeZone",
                    environment: t,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: r,
                            transaction: e,
                            data: {
                                time_zone: i
                            }
                        })
                    },
                    userId: r.id
                })
            }

            function o(e) {
                let {
                    environment: t,
                    userSettingsStore: r,
                    disableAutoSetTimezone: i
                } = e;
                (0, n(377796).createAndCommit)({
                    userAction: "checkUserTimeZoneAction.updateDisableAutoSetTimezone",
                    environment: t,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: r,
                            transaction: e,
                            data: {
                                disable_auto_set_timezone: i
                            }
                        })
                    },
                    userId: r.id
                })
            }
            n.d(t, {
                Lj: () => i,
                W2: () => o,
                xw: () => r
            })
        },
        454736: (e, t, n) => {
            n.d(t, {
                p: () => o
            }), n(296540);
            var r = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 1.94 14.91 15.66",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M10.55 12.808a1.35 1.35 0 1 0-1.1 0v1.242a.55.55 0 1 0 1.1 0z"
                        }), (0, r.jsx)("path", {
                            d: "M15.4 1.95a3.48 3.48 0 0 0-3.48 3.48v1.92H6.4a2.425 2.425 0 0 0-2.425 2.425v5.4A2.425 2.425 0 0 0 6.4 17.6h7.2a2.425 2.425 0 0 0 2.425-2.425v-5.4A2.425 2.425 0 0 0 13.6 7.35h-.43V5.43a2.23 2.23 0 1 1 4.46 0v2.095a.625.625 0 1 0 1.25 0V5.43a3.48 3.48 0 0 0-3.48-3.48M5.225 9.775c0-.649.526-1.175 1.175-1.175h7.2c.649 0 1.175.526 1.175 1.175v5.4c0 .649-.526 1.175-1.175 1.175H6.4a1.175 1.175 0 0 1-1.175-1.175z"
                        })]
                    })
                },
                o = (0, n(104509).wt)("lockOpen", i, "default")
        },
        455852: (e, t, n) => {
            n.d(t, {
                A: () => c,
                k: () => o
            }), n(898992), n(354520), n(803949), n(581454);
            var r = n(296540),
                i = n(474848);
            let o = 9999999,
                a = {
                    overflowWrap: {
                        overflowWrap: "break-word"
                    },
                    iconContainer: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 10,
                        fill: n(632079).Tj.icon.secondary
                    },
                    positionRelative: {
                        position: "relative"
                    }
                };

            function s({
                items: e,
                selectType: t,
                selectAlignXAxis: r,
                selectedKeys: o,
                setSelectedKeys: a
            }) {
                let l = e.map((n, s) => {
                    let l = n.key;
                    return (0, i.jsx)(d, {
                        text: n.text,
                        description: n.description,
                        selected: o[l] ? ? !1,
                        isBelowButtons: !!n.showBelowButtons,
                        isLastItem: s === e.length - 1,
                        onSelect: e => {
                            var r;
                            null == (r = n.onSelect) || r.call(n, e), "radio" === t ? a(e => {
                                let t = { ...e
                                };
                                return Object.keys(t).forEach(e => {
                                    t[e] = e === n.key
                                }), t
                            }) : a(t => ({ ...t,
                                [l]: e
                            }))
                        },
                        selectType: t,
                        selectAlignXAxis: r
                    }, l)
                });
                return (0, i.jsxs)(n(4458).VP, {
                    gap: "inherit",
                    children: [(0, i.jsx)(n(884877).A, {
                        size: 5
                    }), l]
                })
            }
            let l = {
                justifyContent: "center",
                border: "none"
            };

            function d({
                text: e,
                description: t,
                selected: o,
                onSelect: a,
                isBelowButtons: s,
                selectType: c = "checkbox",
                selectAlignXAxis: u,
                isLastItem: p
            }) {
                let m = (0, r.useCallback)(() => {
                    "radio" === c ? null == a || a(!0) : null == a || a(!o)
                }, [c, a, o]);
                return (0, i.jsx)(n(469738).a, {
                    label: e,
                    description: t,
                    isSelected: o,
                    value: "select_item",
                    width: s ? void 0 : "fill",
                    colorVariant: s ? "secondary" : "primary",
                    style: {
                        marginBottom: 12 * !p,
                        ...s ? l : {}
                    },
                    selectType: c,
                    selectAlignXAxis: u,
                    onChange: m
                })
            }
            let c = function() {
                let e = (0, r.useId)(),
                    t = (0, r.useId)(),
                    {
                        open: l,
                        innerStyle: d,
                        keepFocus: c,
                        mode: u,
                        message: p,
                        debugInfo: m,
                        description: h,
                        warningText: g,
                        items: f,
                        selectionItems: b,
                        showCancel: v,
                        showCloseButton: w,
                        renderDraftCommentIcon: S,
                        icon: y,
                        allowCopy: A,
                        selectType: I
                    } = (0, n(682985).K8)(() => {
                        let {
                            open: e,
                            innerStyle: t,
                            keepFocus: r,
                            mode: i,
                            message: o,
                            debugInfo: a,
                            description: s,
                            warningText: l,
                            items: d,
                            selectionItems: c,
                            showCancel: u,
                            showCloseButton: p,
                            shouldRenderDraftCommentIcon: m,
                            icon: h,
                            allowCopy: g,
                            selectType: f
                        } = n(107333).A.state;
                        return {
                            open: e,
                            innerStyle: t,
                            keepFocus: r,
                            mode: i,
                            message: o,
                            debugInfo: a,
                            description: s,
                            warningText: l,
                            items: d,
                            selectionItems: c,
                            showCancel: u,
                            showCloseButton: p,
                            renderDraftCommentIcon: m,
                            icon: h,
                            allowCopy: g,
                            selectType: f
                        }
                    }, []),
                    x = (0, r.useCallback)(() => {
                        n(647095).zw();
                        let {
                            handleCancel: e
                        } = n(107333).A.state;
                        return e && e(), !1
                    }, []),
                    P = (0, r.useCallback)(() => {
                        let {
                            requiresUserAction: e
                        } = n(107333).A.state;
                        e || x()
                    }, [x]),
                    k = (0, n(83208).X)("update_dialog_styles"),
                    C = (0, n(960253).I)(() => {
                        let e = {
                            width: "100%",
                            ...!k && {
                                marginTop: 8
                            }
                        };
                        return {
                            plainButton: { ...e,
                                marginBottom: "-12px",
                                justifyContent: "center",
                                borderRadius: 6
                            },
                            warningContainer: {
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                            },
                            warningText: {
                                width: "100%",
                                textAlign: "center"
                            },
                            button: { ...e,
                                borderRadius: 6
                            },
                            description: {
                                color: n(632079).Tj.text.secondary,
                                ...!k && {
                                    paddingTop: 6,
                                    paddingBottom: 6
                                },
                                textWrap: "pretty"
                            },
                            debugMessage: {
                                paddingTop: 10,
                                fontSize: 12,
                                color: n(632079).Tj.text.tertiary,
                                textAlign: h ? "unset" : "center"
                            },
                            modal: {
                                overflow: "hidden",
                                width: "wide" === u ? 406 : 324,
                                marginInlineStart: 24,
                                marginInlineEnd: 24,
                                padding: 20,
                                boxShadow: n(632079).Tj.shadow.outline.scrim,
                                background: n(632079).Tj.background.elevated,
                                borderRadius: 12,
                                fontSize: 16,
                                alignItems: "center",
                                ...d
                            },
                            message: {
                                textAlign: h ? "unset" : "center",
                                fontWeight: n(699422).Wy.semibold,
                                textWrap: "pretty"
                            },
                            buttonContainer: {
                                display: "flex",
                                flexDirection: "column",
                                ...k ? {
                                    padding: 0,
                                    gap: 8
                                } : {
                                    padding: 0,
                                    gap: 1
                                }
                            }
                        }
                    }, [h, d, u, k]),
                    [_, j] = (0, r.useState)({});
                (0, r.useEffect)(() => {
                    let e = {};
                    null == b || b.forEach(t => {
                        e[t.key] = t.preSelected ? ? !1
                    }), j(e)
                }, [b]);
                let T = (0, r.useCallback)(() => {
                    let r;

                    function o(e, t) {
                        let r = () => {
                                var t;
                                null == (t = e.onClick) || t.call(e), e.onAccept && (e.onAccept(b ? _ : void 0), n(647095).zw())
                            },
                            o = 0 === t;
                        return "plain" === e.buttonType ? (0, i.jsx)(n(988022).p, {
                            size: "lg",
                            ariaLabel: e.ariaLabel,
                            autoFocus: o,
                            colorPalette: e.color,
                            style: C.plainButton,
                            className: e.className,
                            onClick: r,
                            children: e.label || "Label"
                        }, t) : "solid" === e.buttonType ? "gray" === e.color ? (0, i.jsx)(n(265779).E, {
                            size: "lg",
                            ariaLabel: e.ariaLabel,
                            autoFocus: o,
                            style: C.button,
                            className: e.className,
                            onClick: r,
                            children: e.label || "Label"
                        }, t) : (0, i.jsx)(n(912946).A, {
                            size: "lg",
                            ariaLabel: e.ariaLabel,
                            autoFocus: o,
                            style: C.button,
                            className: e.className,
                            colorPalette: "red" === e.color ? "red" : "blue",
                            onClick: r,
                            children: e.label || "Label"
                        }, t) : (0, i.jsx)(n(548436).A, {
                            size: e.isSmall ? "sm" : "lg",
                            ariaLabel: e.ariaLabel,
                            style: C.button,
                            colorPalette: "red" === e.color ? "red" : "blue" === e.color ? "blue" : void 0,
                            className: e.className,
                            onClick: r,
                            autoFocus: o,
                            children: e.label || "Label"
                        }, t)
                    }
                    let l = g && f.length > 0 ? [o(f[0], 0), (0, i.jsx)("div", {
                            style: C.warningContainer,
                            children: "string" == typeof g || "number" == typeof g ? (0, i.jsx)(n(111010).D, {
                                styleKey: "captionSmRegular",
                                colorVariant: "tertiary",
                                style: C.warningText,
                                children: g
                            }) : g
                        }, "dialog-warning-text"), ...f.slice(1).map((e, t) => o(e, t + 1))] : f.map((e, t) => o(e, t)),
                        d = (0, i.jsxs)("div", {
                            style: C.buttonContainer,
                            children: [l, v ? (0, i.jsx)(n(548436).A, {
                                size: "lg",
                                style: C.button,
                                onClick: x,
                                children: (0, i.jsx)(n(109939).sA, {
                                    id: "genericDialogModal.cancelButton.label",
                                    defaultMessage: "Cancel"
                                })
                            }) : void 0]
                        }),
                        c = (null == b ? void 0 : b.filter(e => !e.showBelowButtons)) ? ? [],
                        u = c.length > 0 ? (0, i.jsx)(s, {
                            items: c,
                            selectType: I,
                            selectedKeys: _,
                            selectAlignXAxis: "right",
                            setSelectedKeys: j
                        }) : void 0,
                        T = (null == b ? void 0 : b.filter(e => e.showBelowButtons)) ? ? [],
                        E = T.length > 0 ? (0, i.jsx)(s, {
                            items: T,
                            selectType: I,
                            selectedKeys: _,
                            selectAlignXAxis: "right",
                            setSelectedKeys: j
                        }) : void 0;
                    return m && (null != m && m.messagePrefix ? r = `${m.messagePrefix}: ${m.message}` : n(986939).A.isAdminMode && (r = (0, i.jsx)(n(109939).sA, {
                        id: "dialogRenderer.debugMessage.messagePrefix",
                        defaultMessage: "Debug message: {message}",
                        values: {
                            message: m.message
                        }
                    }))), (0, i.jsx)(n(310335).A, {
                        capture: !0,
                        preventType: n(644154).A.All,
                        children: (0, i.jsxs)("div", {
                            style: a.overflowWrap,
                            children: [w ? (0, i.jsx)(n(855353).A, {
                                onClick: P
                            }) : void 0, S ? (0, i.jsx)(n(59557).j, {}) : void 0, y ? (0, i.jsx)("div", {
                                style: a.iconContainer,
                                children: y
                            }) : void 0, A ? (0, i.jsx)(n(281023).k, {
                                enable: !0,
                                shortcuts: {
                                    copy: n(763230).D_
                                },
                                debugName: "DialogRenderer.allowCopy"
                            }) : void 0, k ? (0, i.jsxs)(n(4458).VP, {
                                gap: 24,
                                className: "autolayout-fill-width",
                                style: a.positionRelative,
                                children: [p ? (0, i.jsx)("div", {
                                    style: C.message,
                                    id: e,
                                    children: p
                                }) : void 0, r ? (0, i.jsx)("div", {
                                    style: C.debugMessage,
                                    children: r
                                }) : void 0, h ? (0, i.jsx)("div", {
                                    style: C.description,
                                    id: t,
                                    children: h
                                }) : void 0, u ? (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(n(884877).A, {
                                        size: 20
                                    }), u, (0, i.jsx)(n(884877).A, {
                                        size: 8
                                    })]
                                }) : void 0, d, E || void 0]
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [p ? (0, i.jsx)("div", {
                                    style: C.message,
                                    id: e,
                                    children: p
                                }) : void 0, r ? (0, i.jsx)("div", {
                                    style: C.debugMessage,
                                    children: r
                                }) : void 0, h ? (0, i.jsx)("div", {
                                    style: C.description,
                                    id: t,
                                    children: h
                                }) : void 0, u ? (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(n(884877).A, {
                                        size: 20
                                    }), u, (0, i.jsx)(n(884877).A, {
                                        size: 8
                                    })]
                                }) : void 0, d, E ? (0, i.jsx)(i.Fragment, {
                                    children: E
                                }) : void 0]
                            })]
                        })
                    })
                }, [f, v, b, I, _, m, C.message, C.debugMessage, C.description, C.button, C.plainButton, C.buttonContainer, C.warningContainer, C.warningText, w, P, S, y, A, p, g, e, h, t, x, k]);
                return (0, i.jsx)(n(556809).a, {
                    ariaLabelledBy: e,
                    ariaDescribedBy: t,
                    open: l,
                    keepFocus: c,
                    overlayZIndex: o,
                    onDismiss: P,
                    preventHideChildrenWhileOpening: !0,
                    innerStyle: C.modal,
                    children: T()
                })
            }
        },
        459154: (e, t, n) => {
            n.d(t, {
                F: () => r
            });
            let r = (0, n(815048)._h)(new(n(815048)).O2("UnifiedAccountView", () => Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(45414), n.e(64038), n.e(67430), n.e(57042), n.e(33503), n.e(56809), n.e(30532), n.e(23644), n.e(22841), n.e(12801), n.e(49340), n.e(85782), n.e(91029), n.e(19884)]).then(n.bind(n, 26214))), e => e.UnifiedAccountView)
        },
        463279: (e, t, n) => {
            n.d(t, {
                r: () => r
            });
            let r = (0, n(815048)._h)(new(n(815048)).O2("AdminWorkersDetailPage", () => Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(45414), n.e(64038), n.e(67430), n.e(57042), n.e(33503), n.e(56809), n.e(30532), n.e(23644), n.e(22841), n.e(12801), n.e(49340), n.e(85782), n.e(91029), n.e(19884)]).then(n.bind(n, 274743))), e => e.AdminWorkersDetailPage)
        },
        465748: (e, t, n) => {
            function r() {}
            n.r(t), n.d(t, {
                createClientEnvironment: () => E
            });
            class i {
                inMemoryRecordCache;
                _persistedRecordCache;
                onRecordValueSet;
                constructor(e) {
                    this.inMemoryRecordCache = e.inMemoryRecordCache, this._persistedRecordCache = e.persistedRecordCache, this.onRecordValueSet = e.onRecordValueSet ? ? r
                }
                get persistedRecordCache() {
                    return this._persistedRecordCache
                }
            }
            var o = () => n(923673);

            function a(e, t = !1) {
                o().A.forEachPendingUnsubscribeRecord(({
                    pointer: r,
                    userId: i,
                    timestamp: a,
                    environment: s
                }) => {
                    a < e && (o().A.removeFromPendingUnsubscribeRecords({
                        pointer: r,
                        userId: i
                    }), t && console.log("Unsubscribing and evicting", JSON.stringify(r)), (0, n(585358).a)({
                        pointer: r,
                        userId: i
                    }), n(155095).Q.invalidateOnEviction({
                        pointer: r,
                        userId: i,
                        defaultRecordCache: s.defaultRecordCache
                    }), s.defaultRecordCache.inMemoryRecordCache.deleteRecord({
                        pointer: r,
                        userId: i
                    }))
                }), n(885619).A.forEachPendingEviction(({
                    pointer: r,
                    userId: i,
                    timestamp: o,
                    environment: a
                }) => {
                    if (o < e) {
                        n(885619).A.removeFromPendingEvictions({
                            pointer: r,
                            userId: i
                        });
                        let e = {
                            pointer: r,
                            userId: i
                        };
                        t && console.log("Evicting", JSON.stringify(r)), (0, n(136133).$)(e), n(155095).Q.invalidateOnEviction({
                            pointer: r,
                            userId: i,
                            defaultRecordCache: a.defaultRecordCache
                        }), a.defaultRecordCache.inMemoryRecordCache.deleteRecord(e)
                    }
                })
            }
            setInterval(() => {
                a(Date.now())
            }, 1e4), (0, n(202146).exposeDebugValue)("forceUnsubscribeAndEvictPendingRecords", () => {
                a(1 / 0, !0)
            }), setTimeout(() => {
                (0, n(579929).UL)(() => {
                    o().A.forEachPendingUnsubscribeRecord(({
                        pointer: e,
                        userId: t,
                        timestamp: r,
                        environment: i
                    }) => {
                        (0, n(585358).a)({
                            pointer: e,
                            userId: t
                        });
                        let a = {
                            pointer: e,
                            userId: t
                        };
                        n(885619).A.addToPendingEvictions(a, r), o().A.removeFromPendingUnsubscribeRecords(a)
                    })
                })
            }, 0), n(16280), n(581454);
            let s = 60 * n(627179).TD,
                l = 15 * n(627179).TD;
            class d {
                map = new Map;
                constructor(e) {
                    this.timeoutMs = e
                }
                set(e) {
                    let {
                        key: t,
                        onTimeout: n,
                        onClear: r,
                        value: i
                    } = e;
                    this.clear(t);
                    let o = window.setTimeout(() => {
                        this.map.delete(t), null == n || n()
                    }, this.timeoutMs);
                    this.map.set(t, {
                        timeout: o,
                        value: i,
                        onClear: r
                    })
                }
                get(e) {
                    var t;
                    return null == (t = this.map.get(e)) ? void 0 : t.value
                }
                clear(e) {
                    let t = this.map.get(e);
                    if (void 0 !== t) {
                        var n;
                        window.clearTimeout(t.timeout), this.map.delete(e), null == (n = t.onClear) || n.call(t)
                    }
                }
                has(e) {
                    return this.map.has(e)
                }
            }
            let c = new d(s),
                u = new d(l);
            var p = () => n(941701),
                m = () => n(192883),
                h = () => n(138635),
                g = () => n(218744);
            class f {
                recordUpdates = new Map;
                constructor(e) {
                    this.handleRemoteVersionUpdateForPointer = e
                }
                deferUntilTransactionIsDone(e) {
                    let {
                        pointer: t,
                        version: r
                    } = e, i = n(496282).L3.toKey(t).toString(), o = this.recordUpdates.get(i);
                    if (o) null === o.version || (null === r || r > o.version) && this.recordUpdates.set(i, e);
                    else {
                        if (!p().transactionQueue.isPendingTransactionForRecord(t)) throw Error("Pending transaction must exist for record");
                        this.recordUpdates.set(i, e), p().transactionQueue.awaitRecordTransaction(t).then(() => {
                            let e = (0, n(148337).o9)(this.recordUpdates.get(i), "Pending record update for key must exist");
                            this.recordUpdates.delete(i), this.handleRemoteVersionUpdateForPointer(e)
                        })
                    }
                }
            }
            let b = new f(v);

            function v(e) {
                let {
                    environment: t,
                    pointer: n,
                    version: r
                } = e;
                for (let i of [void 0, ...t.currentUser.loggedInUserIds])
                    if (o().A.getSubscriptionForRecord({
                            userId: i,
                            pointer: n
                        })) {
                        let o = t.defaultRecordCache.inMemoryRecordCache.getVersion({
                            pointer: n,
                            userId: i
                        });
                        if (p().transactionQueue.isPendingTransactionForRecord(n)) return void b.deferUntilTransactionIsDone(e);
                        if (g().default.getConfigKey("always_force_refetch_for_specific_tables", "tables").includes(n.table)) return void(0, h().B)({
                            environment: t,
                            inMemoryRecordCache: t.defaultRecordCache.inMemoryRecordCache,
                            pointer: n,
                            userId: i,
                            forceFetchRemoteRecordSource: "handleRemoteVersionUpdateForPointer"
                        });
                        if (null === r || r > o) {
                            let e = t.defaultRecordCache.inMemoryRecordCache.getModelAndRole({
                                pointer: n,
                                userId: i
                            });
                            if (!(null != e && e.model) && null === r) return;
                            (0, m().s)({
                                environment: t,
                                inMemoryRecordCache: t.defaultRecordCache.inMemoryRecordCache,
                                pointer: n,
                                userId: i,
                                isPendingTransactionForRecord: p().transactionQueue.isPendingTransactionForRecord.bind(p().transactionQueue)
                            })
                        }
                    }
            }

            function w(e) {
                let {
                    environment: t,
                    pointer: r,
                    userId: i,
                    record: a
                } = e, s = {
                    pointer: r,
                    userId: i
                };
                if (!o().A.isSubscribedToRecord(s)) return;
                let l = n(568479).N8(r);
                if ((0, n(880927).A)(l)) {
                    if (!r.id || !r.table) return void n(773352).rateLimitedLog({
                        level: "warning",
                        from: "recordSubscriptionActions:subscribe",
                        type: "KeyValidationError",
                        data: {
                            pointer: r,
                            miscDataToConvertToString: {
                                record: a,
                                key: s,
                                versionsKey: l
                            }
                        }
                    });
                    n(48091).Ay.addListener({
                        key: l,
                        authorizationToken: void 0,
                        listener: ({
                            key: e,
                            value: r
                        }) => {
                            var i, o, a, s;
                            let l, d;
                            return i = t, o = e, a = r, void((l = n(568479).Zg(o)) ? null !== a && "number" != typeof a ? n(773352).rateLimitedLog({
                                level: "warning",
                                from: "handleRemoteVersionUpdate",
                                type: "ValidationError",
                                data: {
                                    key: o,
                                    miscDataToConvertToString: {
                                        pointer: l,
                                        version: a
                                    }
                                }
                            }) : (n(579929).lD && ((0, n(579929).Yl)(o, {
                                latestUpdateTimestamp: Date.now()
                            }), s = o, (d = c.get(s)) && (d.latestUpdate = Date.now()), u.clear(s)), v({
                                environment: i,
                                pointer: l,
                                version: a
                            })) : n(773352).rateLimitedLog({
                                level: "warning",
                                from: "handleRemoteVersionUpdate",
                                type: "ValidationError",
                                data: {
                                    key: o,
                                    miscDataToConvertToString: {
                                        version: a
                                    }
                                }
                            }))
                        },
                        subscriptionId: n(562362).K
                    })
                }
            }

            function S(e) {
                let {
                    pointer: t,
                    userId: r,
                    environment: i
                } = e, a = {
                    pointer: t,
                    userId: r
                };
                !(0, n(660810).y)(t) && (n(363256).e.withListenerIgnored(() => {
                    var e;
                    if (t.id === (null == (e = n(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.id) && (0, n(518044).getCurrentUserId_FOR_LOGGING_ONLY)() && (void 0 === r || void 0 === i.currentUser.id)) {
                        let e = void 0 === r && void 0 === i.currentUser.id ? "both" : void 0 === r ? "argsUserIdOnly" : "environmentOnly";
                        n(419750).Fg(new(n(518044)).PageSubscriptionWithMissingUserIdWhileLoggedInError, {
                            tags: {
                                missingUserIds: e
                            }
                        })
                    }
                }), (0, n(664600).Y)({
                    pointer: t,
                    userId: r
                }), o().A.isSubscribedToRecord(a) || (o().A.addToSubscribedRecords(a), n(374176).default.afterNextFlush(() => {
                    let n = i.defaultRecordCache.inMemoryRecordCache.getRecord(a);
                    n ? w({
                        record: n,
                        ...e
                    }) : (0, m().s)({
                        environment: i,
                        inMemoryRecordCache: i.defaultRecordCache.inMemoryRecordCache,
                        userId: r,
                        pointer: t,
                        isPendingTransactionForRecord: p().transactionQueue.isPendingTransactionForRecord.bind(p().transactionQueue)
                    }).then(t => {
                        w({
                            record: t,
                            ...e
                        })
                    }, () => {
                        o().A.removeFromSubscribedRecords(a)
                    })
                })))
            }
            RegExp(`(${[8,4,4,4,12].map(e=>`[0-9A-Fa-f]{${e}}`).join("-")})`);
            let y = [WebSocket.OPEN, WebSocket.CONNECTING];
            class A {
                sqliteConnection = void 0;
                environment;
                requests = new Map;
                debug = !1;
                setEnvironment(e) {
                    this.environment = e
                }
                async initialize() {
                    let e = await this.getConnectionType();
                    try {
                        this.debug = !!window.localStorage.getItem("sqlitedebug")
                    } catch {}
                    "message-ports" === e ? await this.initializeMessagePort() : await this.initializeWebSocket()
                }
                async getConnectionType() {
                    let {
                        preferences: e
                    } = await n(884972).Zq.get() || {};
                    if ("message-ports" === (null == e ? void 0 : e.sqliteConnectionType)) return "message-ports";
                    let t = (0, n(168179).getDesktopVersion)();
                    if (t && t[0] >= 4) return "message-ports";
                    let r = navigator.userAgent.match(/Notion\/(\d+\.\d+\.\d+)/);
                    if (r) {
                        let [, e] = r, [t] = e.split(".").map(Number);
                        if (t >= 4) return "message-ports"
                    }
                    return null !== n(775657).electronApi && void 0 !== n(775657).electronApi && n(775657).electronApi.sqliteServerEnabled ? "web-sockets" : null
                }
                async initializeMessagePort() {
                    await this.initializeMessagePortConnection();
                    try {
                        n(205885).A.state.online && await this.enableCorruptionRepair()
                    } catch (e) {}
                    try {
                        this.sqliteConnection = await this.createOrReinitializeSqliteConnection(), g().default.waitUntilStatsigReadyAsync().then(() => {
                            this.applyJournalModeIfConfigured()
                        })
                    } catch (e) {}
                }
                async initializeWebSocket() {
                    await this.initializeWebSocketConnection(), this.sqliteConnection = await this.createOrReinitializeSqliteConnection()
                }
                createMessagePortBaseConnection() {
                    return {
                        execSqliteBatchV2: async ({
                            batch: e,
                            precondition: t
                        }) => this.execSqliteBatchInnerMessagePort({
                            id: n(92513).JW(),
                            batch: e,
                            precondition: t
                        }),
                        execSqliteBatch: async e => this.execSqliteBatchInnerMessagePort({
                            id: n(92513).JW(),
                            batch: e
                        }),
                        completelyRebuildSqliteDb: async () => this.completelyRebuildSqliteDbInnerMessagePort(n(92513).JW())
                    }
                }
                createWebSocketBaseConnection() {
                    return {
                        execSqliteBatchV2: async e => {
                            let t = n(92513).JW(),
                                {
                                    batch: r,
                                    precondition: i
                                } = e,
                                o = JSON.stringify({
                                    id: t,
                                    batch: r,
                                    precondition: i,
                                    auth: this.authToken
                                });
                            return await this.execSqliteBatchInnerWebSockets(t, o)
                        },
                        execSqliteBatch: async e => {
                            let t = n(92513).JW(),
                                r = JSON.stringify({
                                    id: t,
                                    batch: e,
                                    auth: this.authToken
                                });
                            return await this.execSqliteBatchInnerWebSockets(t, r)
                        },
                        completelyRebuildSqliteDb: async () => {}
                    }
                }
                async createOrReinitializeSqliteConnection() {
                    try {
                        let e, t = await this.getConnectionType();
                        e = "message-ports" === t ? this.createMessagePortBaseConnection() : this.createWebSocketBaseConnection();
                        let r = await (0, n(232037).G)(e);
                        if (this.sqliteConnection) return this.sqliteConnection.reinitialize({
                            connection: e,
                            type: "v2",
                            migrations: r
                        }), this.sqliteConnection;
                        return new(n(702396)).i({
                            connection: e,
                            type: "v2",
                            migrations: r,
                            debug: this.debug
                        })
                    } catch (e) {
                        throw e
                    }
                }
                async applyJournalModeIfConfigured() {
                    try {
                        if (!this.sqliteConnection || !g().default.isStatsigEnabledAndInitialized()) return;
                        let e = g().default.getEligibleGroup({
                                experimentId: "desktop_sqlite_journal_mode",
                                defaultGroup: "off"
                            }),
                            t = "string" == typeof e ? e.toLowerCase() : "off";
                        if ("wal" !== t && "delete" !== t) return;
                        await (0, n(911822).Bg)({
                            connection: this.sqliteConnection,
                            sql: "wal" === t ? "PRAGMA journal_mode=WAL" : "PRAGMA journal_mode=DELETE"
                        })
                    } catch (e) {
                        n(773352).log({
                            level: "error",
                            from: "electronSqlite",
                            type: "applyJournalModeError",
                            error: (0, n(416607).convertErrorToLog)(e)
                        })
                    }
                }
                async execSqliteBatchInnerWebSockets(e, t) {
                    let n = new Promise(t => {
                        this.requests.set(e, t)
                    });
                    this.ws.readyState === WebSocket.CLOSED && await this.initializeWebSocket();
                    try {
                        this.ws.send(t)
                    } catch (n) {
                        let e = this.ws;
                        this.ws.onopen = function(n) {
                            e.send(t)
                        }
                    }
                    let r = await n;
                    if (r.error) throw Error("Received SQLite error.", {
                        cause: r.error
                    });
                    return r.value
                }
                async execSqliteBatchInnerMessagePort(e) {
                    let t = new Promise(t => {
                        this.requests.set(e.id, t)
                    });
                    if (this.messagePort || await this.initializeMessagePortConnection(), !this.messagePort) throw Error("Message port not initialized.");
                    this.messagePort.postMessage(e);
                    let n = await t;
                    if (n.error) throw Error("Received SQLite error.", {
                        cause: n.error
                    });
                    return n.value
                }
                async completelyRebuildSqliteDbInnerMessagePort(e) {
                    let t = {
                            id: e,
                            command: "completelyRebuildSqliteDb",
                            batch: {
                                body: [],
                                onError: void 0
                            }
                        },
                        n = new Promise(e => {
                            this.requests.set(t.id, e)
                        });
                    if (this.messagePort || await this.initializeMessagePortConnection(), !this.messagePort) throw Error("Message port not initialized.");
                    this.messagePort.postMessage(t);
                    let r = await n;
                    if (r.error) throw Error("completelyRebuildSqliteDb error.", {
                        cause: r.error
                    })
                }
                async enableCorruptionRepairInnerMessagePort(e) {
                    let t = {
                            id: e,
                            command: "enableCorruptionRepair",
                            batch: {
                                body: [],
                                onError: void 0
                            }
                        },
                        n = new Promise(e => {
                            this.requests.set(t.id, e)
                        });
                    if (this.messagePort || await this.initializeMessagePortConnection(), !this.messagePort) throw Error("Message port not initialized.");
                    this.messagePort.postMessage(t);
                    let r = await n;
                    if (r.error) throw Error("enableCorruptionRepair error.", {
                        cause: r.error
                    })
                }
                async disableCorruptionRepairInnerMessagePort(e) {
                    let t = {
                            id: e,
                            command: "disableCorruptionRepair",
                            batch: {
                                body: [],
                                onError: void 0
                            }
                        },
                        n = new Promise(e => {
                            this.requests.set(t.id, e)
                        });
                    if (this.messagePort || await this.initializeMessagePortConnection(), !this.messagePort) throw Error("Message port not initialized.");
                    this.messagePort.postMessage(t);
                    let r = await n;
                    if (r.error) throw Error("disableCorruptionRepair error.", {
                        cause: r.error
                    })
                }
                async restoreBackupInnerMessagePort(e) {
                    let t = {
                            id: e,
                            command: "restoreBackup",
                            batch: {
                                body: [],
                                onError: void 0
                            }
                        },
                        n = new Promise(e => {
                            this.requests.set(t.id, e)
                        });
                    if (this.messagePort || await this.initializeMessagePortConnection(), !this.messagePort) throw Error("Message port not initialized.");
                    this.messagePort.postMessage(t);
                    let r = await n;
                    if (r.error) throw Error("restoreBackup error.", {
                        cause: r.error
                    })
                }
                async initializeMessagePortConnection() {
                    return (0, n(975162).qt)(async e => {
                        if (!(null !== n(775657).electronApi && void 0 !== n(775657).electronApi && n(775657).electronApi.getSqliteMeta) || this.messagePort) return void e();
                        let t = r => {
                            try {
                                if (!r.ports.length || r.source !== window) return;
                                this.messagePort = r.ports[0], this.messagePort.onclose = () => {
                                    this.messagePort = void 0
                                }, this.messagePort.onmessage = async e => {
                                    let {
                                        type: t,
                                        id: r,
                                        result: i,
                                        durationMs: o
                                    } = e.data;
                                    if (o && "number" == typeof o && this.environment) {
                                        let e = performance.now();
                                        n(680007).default.measure({
                                            metricName: "desktop.sqlite_query_execution",
                                            startTime: e - o,
                                            endTime: e
                                        }, {
                                            shouldExcludeFromTimeline: !0
                                        })
                                    }
                                    if ("backupAndResetDatabaseComplete" === t) return void await this.handleBackupAndResetDatabaseComplete();
                                    let a = this.requests.get(r);
                                    a && (this.requests.delete(r), a({
                                        value: i
                                    }))
                                }, window.removeEventListener("message", t), e()
                            } catch (e) {
                                n(773352).log({
                                    level: "error",
                                    from: "electronSqlite",
                                    type: "messagePortError",
                                    error: (0, n(416607).convertErrorToLog)(e)
                                })
                            }
                        };
                        window.addEventListener("message", t), (await n(775657).electronApi.getSqliteMeta()).error
                    })
                }
                async initializeWebSocketConnection() {
                    if (!(null !== n(775657).electronApi && void 0 !== n(775657).electronApi && n(775657).electronApi.getSqliteMeta)) return;
                    let e = await n(775657).electronApi.getSqliteMeta();
                    if (e.error || this.ws && y.includes(this.ws.readyState)) return;
                    let {
                        serverProcessPort: t,
                        authToken: r
                    } = e.value;
                    this.authToken = r;
                    let i = `ws://127.0.0.1:${t}`;
                    this.ws = new WebSocket(i), this.ws.onclose = () => {
                        n(773352).log({
                            level: "warning",
                            from: "electronSqlite",
                            type: "reinitializingWebsocket"
                        }), this.initializeWebSocketConnection()
                    }, this.ws.addEventListener("message", async e => {
                        let {
                            type: t,
                            id: n,
                            result: r
                        } = JSON.parse(e.data.toString());
                        if ("backupAndResetDatabaseComplete" === t) return void await this.handleBackupAndResetDatabaseComplete();
                        let i = this.requests.get(n);
                        i && (this.requests.delete(n), i({
                            value: r
                        }))
                    }), await new Promise(e => {
                        this.ws.onopen = () => {
                            e()
                        }
                    })
                }
                async enableCorruptionRepair() {
                    await this.enableCorruptionRepairInnerMessagePort(n(92513).JW())
                }
                async disableCorruptionRepair() {
                    await this.disableCorruptionRepairInnerMessagePort(n(92513).JW())
                }
                async handleBackupAndResetDatabaseComplete() {
                    try {
                        if (await this.initialize(), !this.sqliteConnection) return;
                        await this.sqliteConnection.ensureMigrated(), await this.restoreBackup();
                        let {
                            SqliteCorruptionRecoveryStatusStore: e
                        } = await n(496088).W.load();
                        e.setState({
                            shouldFetchImportantPages: !0
                        })
                    } catch (e) {}
                }
                async restoreBackup() {
                    await this.restoreBackupInnerMessagePort(n(92513).JW())
                }
            }
            async function I(e) {
                if (!e.device.isElectron || !(null !== n(775657).electronApi && void 0 !== n(775657).electronApi && n(775657).electronApi.sqliteServerEnabled)) return;
                let t = new A;
                return e.environment && t.setEnvironment(e.environment), await t.initialize(), t
            }
            n(814603), n(147566), n(198721);
            let x = Array.from({
                length: 9
            }, (e, t) => (0, n(612483).Ne)({
                config: {
                    base: 100,
                    minJitter: 0,
                    maxJitter: 0
                },
                attempt: t
            }));
            class P {
                tabId;
                initializePromise;
                sharedWorkerConnection;
                dedicatedWorkerConnection;
                lockAcquired = !1;
                initializeRetryCount = 0;
                retryInitializeEnabled;
                observer = new(n(479876)).P({
                    execSqliteBatch: e => this.unobservedExecSqliteBatch(e),
                    completelyRebuildSqliteDb: () => this.unobservedCompletelyRebuildSqliteDb()
                });
                constructor(e) {
                    this.args = e, this.tabId = n(92513).JW(), this.initializePromise = this.initialize(e)
                }
                async waitForInitialize() {
                    return await this.initializePromise
                }
                execSqliteBatch(e) {
                    return this.observer.connection.execSqliteBatch(e)
                }
                async unobservedExecSqliteBatch(e) {
                    let {
                        sqliteConnectionManager: t
                    } = await this.initializePromise;
                    return t.execSqliteBatch(e)
                }
                completelyRebuildSqliteDb() {
                    return this.observer.connection.completelyRebuildSqliteDb()
                }
                async unobservedCompletelyRebuildSqliteDb() {
                    let {
                        sqliteConnectionManager: e
                    } = await this.initializePromise;
                    return e.completelyRebuildSqliteDb()
                }
                async enableCorruptionRepair() {
                    try {
                        let {
                            sharedWorkerConnection: e
                        } = await this.initializePromise;
                        await e.enableCorruptionRepair()
                    } catch (e) {}
                }
                async disableCorruptionRepair() {
                    try {
                        let {
                            sharedWorkerConnection: e
                        } = await this.initializePromise;
                        await e.disableCorruptionRepair()
                    } catch (e) {}
                }
                getObserver() {
                    return this.observer
                }
                getDedicatedWorkerConnection_DEBUG_ONLY() {
                    return this.dedicatedWorkerConnection
                }
                async initialize(e) {
                    try {
                        return await this.initializeInternal(e)
                    } catch (e) {
                        throw new(n(65364)).pm({
                            cause: e,
                            retryCount: this.initializeRetryCount,
                            retryInitializeEnabled: this.retryInitializeEnabled
                        })
                    }
                }
                async initializeInternal(e) {
                    let {
                        loadWorker: t,
                        loadSharedWorker: r
                    } = e, i = t(), o = r();
                    this.sharedWorkerConnection ? ? = n(681335).LV(o.port);
                    let a = this.sharedWorkerConnection;
                    this.dedicatedWorkerConnection ? ? = n(681335).LV(i);
                    let s = this.dedicatedWorkerConnection;
                    if (n(681335).p({
                            initialize: () => s.initialize(),
                            execSqliteBatch: e => s.execSqliteBatch(e),
                            execSqliteBatchV2: e => s.execSqliteBatchV2(e),
                            completelyRebuildSqliteDb: () => s.completelyRebuildSqliteDb(),
                            handleBackupAndResetDatabaseComplete: () => this.handleBackupAndResetDatabaseComplete()
                        }, o.port), n(205885).A.state.online) try {
                        await a.enableCorruptionRepair()
                    } catch (e) {}
                    if (!this.lockAcquired) {
                        var l;
                        await (l = n(279335).S(this.tabId), new Promise((e, t) => {
                            navigator.locks.request(l, () => (e(), new Promise(() => {}))).catch(t)
                        })), this.lockAcquired = !0
                    }
                    this.retryInitializeEnabled = g().default.checkGate({
                        gateName: "retry_sqlite_initialize_on_browser"
                    }), this.retryInitializeEnabled ? await (0, n(612483).L5)({
                        fn: async () => {
                            await a.initializeNewTab({
                                tabId: this.tabId
                            })
                        },
                        handleError: (e, t, n) => {
                            var r;
                            return (this.initializeRetryCount = n, !((r = e) instanceof Error && "NoModificationAllowedError" === r.name) || t) ? {
                                status: "throw",
                                error: e
                            } : {
                                status: "retry"
                            }
                        },
                        retryAttemptsMS: x,
                        retryAttemptRandomOffsetMS: 0,
                        initialInput: void 0
                    }) : await a.initializeNewTab({
                        tabId: this.tabId
                    });
                    let d = {
                            execSqliteBatch: e => a.execSqliteBatch(e),
                            execSqliteBatchV2: e => a.execSqliteBatchV2(e),
                            completelyRebuildSqliteDb: () => a.completelyRebuildSqliteDb()
                        },
                        c = new(n(702396)).i({
                            connection: d,
                            type: "v2",
                            migrations: await (0, n(232037).G)(d)
                        });
                    try {
                        await c.ensureMigrated()
                    } catch (e) {
                        n(773352).log({
                            level: "error",
                            from: "ProxiedWasmSqliteConnectionWrapper",
                            type: "sqliteConnectionEnsureMigratedError",
                            error: (0, n(416607).convertErrorToLog)(e),
                            data: (0, n(65364).CS)(e, {
                                isBrowser: !0
                            })
                        })
                    }
                    return c.optimize().catch(e => {
                        n(773352).log({
                            level: "error",
                            from: "ProxiedWasmSqliteConnectionWrapper",
                            type: "sqliteConnectionOptimizeError",
                            error: (0, n(416607).convertErrorToLog)(e),
                            data: (0, n(65364).CS)(e, {
                                isBrowser: !0
                            })
                        })
                    }), {
                        sqliteConnectionManager: c,
                        sharedWorkerConnection: a,
                        retryInitializeEnabled: this.retryInitializeEnabled,
                        retryCount: this.initializeRetryCount
                    }
                }
                async handleBackupAndResetDatabaseComplete() {
                    try {
                        this.initializePromise = this.initialize(this.args);
                        let {
                            sqliteConnectionManager: e,
                            sharedWorkerConnection: t
                        } = await this.initializePromise;
                        if (!t) return;
                        await e.ensureMigrated(), await t.restoreBackup();
                        let {
                            SqliteCorruptionRecoveryStatusStore: r
                        } = await n(496088).W.load();
                        r.setState({
                            shouldFetchImportantPages: !0
                        })
                    } catch (e) {}
                }
            }
            class k {
                sqliteConnection;
                constructor(e) {
                    this.sqliteConnection = new P({
                        loadWorker: () => new Worker(new URL(n.p + n.u(75528), n.b)),
                        loadSharedWorker: () => new SharedWorker(new URL(n.p + n.u(33429), n.b)),
                        currentUserId: e.currentUserId
                    })
                }
                static maybeCreateInstance(e) {
                    var t;
                    let {
                        device: r,
                        currentUserId: i
                    } = e;
                    if (!r.isBrowser || "u" < typeof navigator || void 0 === (null == (t = navigator.locks) ? void 0 : t.request) || "u" < typeof SharedWorker || r.isAndroid ? 1 : 0) return void C("skipped-unsupported-device"); {
                        C("loading");
                        let e = new k({
                            currentUserId: i
                        });
                        return e.waitForInitialize().then(() => {
                            C("success")
                        }, e => {
                            C("error"), n(773352).log({
                                level: "error",
                                from: "clientEnvironment",
                                type: "wasmSqliteInitializeError",
                                error: (0, n(416607).convertErrorToLog)(e),
                                data: { ...(0, n(65364).CS)(e, {
                                        isBrowser: !0
                                    }),
                                    userId: i
                                }
                            })
                        }), e
                    }
                }
                async waitForInitialize() {
                    return await this.sqliteConnection.waitForInitialize()
                }
                async enableCorruptionRepair() {
                    await this.sqliteConnection.enableCorruptionRepair()
                }
                async disableCorruptionRepair() {
                    await this.sqliteConnection.disableCorruptionRepair()
                }
            }

            function C(e) {
                n(329464).A.state.metricDataStore.update(t => ({ ...t,
                    wasm_sqlite_initialized: e
                }))
            }
            let _ = new(n(815048)).O2("handleHttpFailure", async () => await n.e(34873).then(n.bind(n, 288219)));
            async function j(e) {
                let {
                    handleHttpFailure: t
                } = await _.load();
                return t(e)
            }
            let T = 0;
            async function E(e) {
                let {
                    minimalEnvironment: t,
                    prefetchCache: r,
                    currentUserId: o
                } = e, {
                    device: a,
                    deviceStore: s,
                    mobileNative: l,
                    cookieService: d,
                    queryClient: c
                } = t, u = `${T++}`, p = a.isElectron && (null === n(884972).Ht || void 0 === n(884972).Ht ? void 0 : n(884972).Ht.sqliteServerEnabled) ? await I({
                    device: a
                }) : void 0, m = k.maybeCreateInstance({
                    device: a,
                    currentUserId: o
                }), h = new(n(47246)).A, g = new(n(500880)).Bd, f = new(n(921844)).A, b = (null == l ? void 0 : l.sqliteConnection) || (null == p ? void 0 : p.sqliteConnection) || (null == m ? void 0 : m.sqliteConnection), v = b ? new(n(856114)).m({
                    connection: b,
                    maxSize: a.isDesktop ? 1e6 : 1e5,
                    getEnvironment: function() {
                        return _
                    }
                }) : void 0, w = new i({
                    inMemoryRecordCache: new(n(870941)).A({
                        name: "default"
                    }),
                    persistedRecordCache: v,
                    onRecordValueSet({
                        pointer: e,
                        userId: t
                    }) {
                        (0, n(397831).N)({
                            inMemoryRecordCache: this.inMemoryRecordCache,
                            pointer: e,
                            userId: t
                        })
                    }
                }), y = (0, n(411529).OH)({
                    device: a,
                    RouterStore: h,
                    ThemeStore: f
                }), A = await n(128190).getPublicDomainUserId({
                    device: a,
                    deviceStore: s,
                    mobileNative: l,
                    cookieService: d,
                    queryClient: c
                }), x = new(n(792292)).CurrentUser, P = new(n(529795)).d({
                    environmentName: "production",
                    getSettings: () => ({
                        enableIdSchema: !0
                    }),
                    isServerOriginated: !1,
                    currentUserId: o,
                    mapSpaceIdToShortId: (e, t) => {
                        let r = (0, n(404110).J)({
                            defaultRecordCache: w,
                            userId: e,
                            spaceId: t
                        });
                        if (r && r.short_id_str) return Number(r.short_id_str);
                        let i = n(995450).D.getState();
                        if (i && t in i) return Number(i[t])
                    }
                }), C = await (0, n(501157).getHtmlStreamQueueEntry)("bootData").catch(e => {
                    n(773352).log({
                        level: "warning",
                        from: "clientEnvironment",
                        type: "BootDataError",
                        error: (0, n(416607).convertErrorToLog)(e)
                    })
                }) ? ? void 0, _ = {
                    key: u,
                    AppUpdateStore: new(n(993065)).I,
                    device: a,
                    deviceStore: s,
                    WindowSizeStore: new(n(515378)).nJ({
                        device: a
                    }, window),
                    KeyboardShortcutsStore: n(62276).getKeyboardShortcutsStore(),
                    KeyboardShortcutStackStore: new(n(799492)).X,
                    defaultRecordCache: w,
                    mobileNative: l,
                    RouterStore: h,
                    ThemeStore: f,
                    ThemeModeStore: y,
                    ElectronSqlite: p,
                    WasmSqlite: m,
                    sqliteConnection: b,
                    queryClient: c,
                    updateCurrentUserId: void 0,
                    currentUser: x,
                    TextSelectionCompositionStore: new(n(507176)).P,
                    recordSubscriptionActions: {
                        subscribe: S,
                        unsubscribeAfterDelay: n(397831).N
                    },
                    TabbedRouterStore: g,
                    cookieService: d,
                    publicDomainUserId: A,
                    idCreator: P,
                    bootData: C,
                    api: (0, n(639997).y)({
                        handleHttpFailure: j
                    })
                };
                return n(719100).i.setEnvironment(_), n(719100).i.setCache(r), p && p.setEnvironment(_), n(997524).uh(_), _
            }
        },
        471108: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(581454), n(296540);
            var r = n(474848);
            let i = {
                display: "flex",
                alignItems: "center",
                marginBottom: 11
            };

            function o({
                skipFadeinDelay: e
            }) {
                let {
                    isElectronMac: t,
                    isTablet: a,
                    isAndroid: s
                } = (0, n(533992).Y0)(), l = (0, n(533992).v3)(), d = (0, n(682985).O$)(n(584257).b), c = t && !d, u = (0, n(682985).O$)(n(984858).sidebarExpandedStore), {
                    paddingTop: p,
                    paddingLeft: m
                } = (0, n(682985).K8)(() => {
                    let {
                        WindowSizeStore: e
                    } = l;
                    return {
                        paddingTop: e.getSafePaddingTopPx(0),
                        paddingLeft: e.getSafePaddingLeftPx(0)
                    }
                }, [l]), h = (0, n(682985).K8)(() => u ? n(984858).sidebarWidthStore.state : 0, [u]), g = (0, n(960253).I)(() => {
                    let e = {
                            width: 20,
                            height: 20,
                            borderRadius: 4
                        },
                        t = {
                            height: 10,
                            minHeight: 10,
                            borderRadius: 10
                        };
                    return {
                        sidebar: {
                            backgroundColor: n(632079).Tj.background.secondary,
                            boxShadow: `inset calc(var(--direction, 1) * -1px) 0 0 0 ${n(632079).Tj.border.secondary}`,
                            display: u ? "flex" : "none",
                            minWidth: h,
                            flexDirection: "column",
                            padding: "12px 14px",
                            paddingInlineStart: Math.max(m, 14),
                            ...a && s ? {
                                paddingTop: p + 10
                            } : {},
                            overflow: "hidden"
                        },
                        heroSection: {
                            paddingTop: 36 * !!c,
                            marginBottom: 22,
                            display: "flex",
                            alignItems: "center"
                        },
                        heroSectionIcon: {
                            padding: "1px",
                            ...e,
                            width: 22,
                            height: 22
                        },
                        heroSectionTitle: {
                            width: 177,
                            marginInlineStart: 8,
                            ...t
                        },
                        toplevelMenu: {
                            marginBottom: 20,
                            width: 78,
                            ...t
                        },
                        toplevelMenuLast: {
                            marginBottom: 36,
                            width: 135,
                            ...t
                        },
                        sectionHeader: {
                            marginBottom: 14,
                            width: 56,
                            ...t
                        },
                        pageIcon: { ...e
                        },
                        pageTitle: {
                            marginInlineStart: 8,
                            ...t
                        }
                    }
                }, [u, h, c, p, m, a, s]), f = (0, r.jsxs)("div", {
                    style: g.heroSection,
                    children: [(0, r.jsx)(n(795830).P, {
                        style: g.heroSectionIcon,
                        emphasized: !0
                    }), (0, r.jsx)(n(795830).P, {
                        style: g.heroSectionTitle,
                        emphasized: !0
                    })]
                }), b = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(n(795830).P, {
                        style: g.toplevelMenu,
                        emphasized: !0
                    }), (0, r.jsx)(n(795830).P, {
                        style: g.toplevelMenu,
                        emphasized: !0
                    }), (0, r.jsx)(n(795830).P, {
                        style: g.toplevelMenu,
                        emphasized: !0
                    }), (0, r.jsx)(n(795830).P, {
                        style: g.toplevelMenuLast,
                        emphasized: !0
                    })]
                }), v = (0, r.jsx)(n(795830).P, {
                    style: g.sectionHeader,
                    emphasized: !0
                }), w = n(87337).J.map((t, o) => t.map((t, a) => {
                    var s;
                    return (0, r.jsxs)("div", {
                        style: { ...!e && (0 === (s = o) ? {} : {
                                animation: `1s ease-in ${s}s 1 normal both running fadein`
                            }),
                            ...i
                        },
                        children: [(0, r.jsx)(n(795830).P, {
                            style: g.pageIcon,
                            emphasized: !0
                        }), (0, r.jsx)(n(795830).P, {
                            style: { ...g.pageTitle,
                                width: 80 + 20 * t
                            },
                            emphasized: !0
                        })]
                    }, `${o}-${a}`)
                }));
                return (0, r.jsxs)("div", {
                    style: g.sidebar,
                    children: [f, b, v, w]
                })
            }
        },
        474299: (e, t, n) => {
            n.d(t, {
                O: () => i
            });
            var r = n(296540);

            function i(e) {
                let [t, i] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    n(218744).default.waitUntilStatsigReadyAsync().then(() => {
                        i(!0)
                    })
                }, []);
                let o = (0, n(682985).K8)(() => t && n(218744).default.checkGate({
                    gateName: e
                }), [t, e]);
                return {
                    isStatsigReady: t,
                    isFeatureEnabled: o
                }
            }
        },
        499267: (e, t, n) => {
            function r(e) {
                let {
                    store: t,
                    toggleSource: n
                } = e;
                t.update(e => {
                    let t = !e.isKeyboardShortcutsOpen;
                    return { ...e,
                        isKeyboardShortcutsOpen: t,
                        toggleSource: t ? n : e.toggleSource,
                        openCount: t ? e.openCount + 1 : e.openCount
                    }
                })
            }

            function i(e) {
                let {
                    store: t
                } = e;
                return t.state.isKeyboardShortcutsOpen
            }
            n.d(t, {
                W: () => i,
                j: () => r
            })
        },
        518044: (e, t, n) => {
            let r;
            n.r(t), n.d(t, {
                PageSubscriptionWithMissingUserIdWhileLoggedInError: () => i,
                getCurrentUserId_FOR_LOGGING_ONLY: () => o,
                setCurrentUserId_FOR_LOGGING_ONLY: () => a
            }), n(16280);
            class i extends Error {
                constructor() {
                    super("Page subscription created for undefined user while logged in"), this.name = "PageSubscriptionWithMissingUserIdWhileLoggedInError"
                }
            }

            function o() {
                return r
            }

            function a(e) {
                r = e
            }
        },
        521622: (e, t, n) => {
            n.d(t, {
                o: () => r
            });

            function r(e) {
                return (0, n(355981).isLessThanVersion)(e, [4, 9, 0])
            }
        },
        545504: (e, t, n) => {
            n.d(t, {
                w: () => r
            });

            function r({
                url: e,
                config: t
            }) {
                let i = (0, n(132702).parseRoute)({
                    url: e,
                    baseUrl: t.domainBaseUrl,
                    publicDomainName: t.publicDomainName,
                    isMobile: !1,
                    protocol: t.protocol,
                    currentUrl: void 0,
                    requestedOnAlternateDomain: t.requestedOnAlternateDomain
                });
                if ("page" === i.name) return i.blockId
            }
        },
        547664: (e, t, n) => {
            n.d(t, {
                v: () => i
            });
            let r = {
                    LennyApplication: new(n(815048)).O2("LennyApplication", () => Promise.all([n.e(21753), n.e(86279)]).then(n.bind(n, 354389)))
                },
                i = (0, n(815048)._h)(r.LennyApplication, e => e.LennyApplication)
        },
        585553: (e, t, n) => {
            n.d(t, {
                A: () => i
            }), n(296540);
            var r = n(474848);
            let i = function(e) {
                let t = (0, n(960253).e)(),
                    i = {
                        width: 42,
                        height: 42,
                        flexShrink: 0,
                        flexGrow: 0
                    };
                return (0, r.jsxs)("div", {
                    style: {
                        width: "100vw",
                        height: "90vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center"
                    },
                    children: [(0, r.jsx)(n(590422).Q, {
                        href: n(168962).JZ.root,
                        style: {
                            padding: 8,
                            borderRadius: 4,
                            marginBottom: 2
                        },
                        children: "light" === t ? (0, n(898378).notionTintableIcon)(i) : (0, n(792668).notionIcon)(i)
                    }), (0, r.jsx)("div", {
                        style: {
                            maxWidth: 320,
                            paddingInlineStart: 18,
                            paddingInlineEnd: 18
                        },
                        children: e.children
                    })]
                })
            }
        },
        593799: (e, t, n) => {
            n.r(t), n.d(t, {
                initAiConnectorUpsell: () => r
            });

            function r() {
                (0, n(187649).Q)(async () => {
                    let {
                        buildAiConnectorUpsellConfig: e
                    } = await Promise.all([n.e(55373), n.e(36192), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(98485)]).then(n.bind(n, 668871));
                    return e()
                })
            }
        },
        595417: (e, t, n) => {
            n.d(t, {
                As: () => r,
                E7: () => i,
                JY: () => a,
                S8: () => l,
                iq: () => o
            });
            let r = (0, n(815048)._h)(new(n(815048)).O2("TopLevelMobileComponents", async () => await Promise.all([n.e(75134), n.e(36556), n.e(55373), n.e(36192), n.e(49806), n.e(79974), n.e(71562), n.e(26361), n.e(35837), n.e(85128), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(53050), n.e(87353), n.e(5721), n.e(54951), n.e(64696), n.e(26997), n.e(28048), n.e(55940), n.e(12560), n.e(33503), n.e(21969), n.e(74145), n.e(48860), n.e(18682), n.e(79349), n.e(83490), n.e(73588), n.e(14231), n.e(18406), n.e(83778), n.e(64049), n.e(46350), n.e(67281), n.e(44724), n.e(97615), n.e(52064), n.e(63611), n.e(14877), n.e(69438), n.e(84382), n.e(71379), n.e(41331), n.e(6782), n.e(28720)]).then(n.bind(n, 5706))), e => e.TopLevelMobileComponents),
                i = (0, n(815048)._h)(new(n(815048)).O2("MobileNativeFullPageComponents", async () => await Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(71562), n.e(26361), n.e(96527), n.e(85128), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(53847), n.e(12354), n.e(5721), n.e(54951), n.e(64696), n.e(26997), n.e(28048), n.e(55940), n.e(12560), n.e(39726), n.e(21969), n.e(74145), n.e(48860), n.e(18682), n.e(79349), n.e(83490), n.e(73588), n.e(14231), n.e(47302), n.e(18406), n.e(83778), n.e(64049), n.e(46350), n.e(67281), n.e(44724), n.e(52064), n.e(88004), n.e(63611), n.e(14877), n.e(69438), n.e(9914), n.e(84382), n.e(15975), n.e(71379), n.e(42709), n.e(9806), n.e(41331), n.e(74714)]).then(n.bind(n, 247907))), e => e.MobileNativeFullPageComponents),
                o = (0, n(815048)._h)(new(n(815048)).O2("MobileCalendarDayMenu", async () => {
                    let {
                        MobileCalendarDayMenu: e
                    } = await Promise.all([n.e(71562), n.e(48860), n.e(63793), n.e(18881), n.e(46350), n.e(75234), n.e(66200), n.e(65499), n.e(53883), n.e(5798)]).then(n.bind(n, 677928));
                    return {
                        MobileCalendarDayMenu: e
                    }
                }), e => e.MobileCalendarDayMenu),
                a = (0, n(815048)._h)(new(n(815048)).O2("MobileTopbar", async () => {
                    let {
                        MobileTopbar: e
                    } = await Promise.all([n.e(75134), n.e(36556), n.e(55373), n.e(36192), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(12354), n.e(94849), n.e(68028), n.e(27207), n.e(75559), n.e(30119), n.e(42477)]).then(n.bind(n, 901455));
                    return {
                        MobileTopbar: e
                    }
                }), e => e.MobileTopbar),
                s = new(n(815048)).O2("MobileTopbarPhone", async () => {
                    let {
                        MobileNativePhoneTopPageControls: e
                    } = await Promise.all([n.e(75134), n.e(36556), n.e(55373), n.e(36192), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(12354), n.e(94849), n.e(68028), n.e(27207), n.e(75559), n.e(30119), n.e(42477)]).then(n.bind(n, 551228));
                    return {
                        MobileNativePhoneTopPageControls: e
                    }
                }),
                l = (0, n(815048)._h)(s, e => e.MobileNativePhoneTopPageControls)
        },
        613442: (e, t, n) => {
            n.r(t), n.d(t, {
                clearNotionLocalStorageWithNoPermission: () => r
            });

            function r() {
                n(984479).A.removeAllIfNoPermission(), n(145740).A.removeAllIfNoPermission()
            }
        },
        620174: (e, t, n) => {
            n.d(t, {
                V: () => i
            });
            let r = new(n(815048)).O2("StudentGroupSignup", async () => Promise.all([n.e(75134), n.e(56809), n.e(87539), n.e(21753), n.e(6456), n.e(35032), n.e(84969)]).then(n.bind(n, 344348))),
                i = (0, n(815048)._h)(r, e => e.default)
        },
        654249: (e, t, n) => {
            function r(e) {
                var t;
                let r = n(218744).default.getEligibleGroup({
                    experimentId: "annual_block_limit_offer",
                    defaultGroup: n(218745).STATSIG_DEFAULT_GROUP,
                    disableExposureLogging: !0
                });
                (0, n(614128).W)({
                    environment: e,
                    eventName: "reach_block_limit",
                    key: "reach_block_limit",
                    throttleSeconds: 60,
                    eventProperties: {
                        space_name: null == (t = (0, n(328765).S)()) ? void 0 : t.getName(),
                        experiment: "annual_block_limit_offer",
                        variant: r
                    }
                }) && (0, n(772208).M)(e, {
                    reach_block_limit: !0,
                    reach_block_limit_time: Date.now(),
                    subscription_tier: n(216260).AI()
                })
            }

            function i() {
                (0, n(11474).q)({
                    displayBlockLimitBanner: n(24958).H,
                    trackReachBlockLimit: r,
                    hasUnpaidInvoices: n(987954).A,
                    removeBanner: () => n(474329).zA({
                        bannerStore: n(465361).A,
                        id: "SubscriptionEditingBlocker"
                    })
                })
            }
            n.r(t), n.d(t, {
                initBlockLimitActions: () => i
            })
        },
        660456: (e, t, n) => {
            n.d(t, {
                q: () => i
            });
            let r = new(n(815048)).O2("CreatorProfile", () => Promise.all([n.e(75134), n.e(36556), n.e(55373), n.e(36192), n.e(49806), n.e(79974), n.e(45414), n.e(26361), n.e(37353), n.e(42838), n.e(37571), n.e(63764), n.e(74728), n.e(30535), n.e(78205), n.e(47209), n.e(36289), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(12354), n.e(54951), n.e(17250), n.e(26997), n.e(93430), n.e(12001), n.e(40198), n.e(39726), n.e(31243), n.e(29663), n.e(82538), n.e(73588), n.e(64476), n.e(88004), n.e(98701), n.e(64268), n.e(57912), n.e(74139), n.e(94194), n.e(26816), n.e(97041), n.e(44098), n.e(81476), n.e(40200)]).then(n.bind(n, 75307))),
                i = (0, n(815048)._h)(r, e => e.CreatorProfile)
        },
        664600: (e, t, n) => {
            n.d(t, {
                Y: () => r
            });

            function r(e) {
                let {
                    pointer: t,
                    userId: r
                } = e, i = {
                    pointer: t,
                    userId: r
                };
                (0, n(660810).y)(t) || (n(923673).A.removeFromPendingUnsubscribeRecords(i), n(885619).A.removeFromPendingEvictions(i))
            }
        },
        672580: (e, t, n) => {
            n.d(t, {
                c: () => r
            });
            let r = (0, n(815048)._h)(new(n(815048)).O2("Admin", () => Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(45414), n.e(64038), n.e(67430), n.e(57042), n.e(33503), n.e(56809), n.e(30532), n.e(23644), n.e(22841), n.e(12801), n.e(49340), n.e(85782), n.e(91029), n.e(19884)]).then(n.bind(n, 31239))), e => e.Admin)
        },
        685429: (e, t, n) => {
            n.r(t), n.d(t, {
                AppRoot: () => tS
            });
            var r = n(296540),
                i = n(474848);

            function o({
                id: e,
                targetRenderPhase: t = "all",
                samplePercent: a = 1,
                children: s
            }) {
                let l = (0, r.useCallback)((e, r, i, o, s, l) => {
                        (0, n(69741).rQ)(a) && ("all" === t || r === t) && (0, n(195857).DO_NOT_USE_trackLegacy)(`${n(313432).PX}.${e}`, {
                            time: i,
                            render_phase: r
                        })
                    }, [t, a]),
                    [d] = (0, r.useState)(n(363256).e.withListenerIgnored(() => n(218744).default.checkGate({
                        gateName: "client-performance-profiler"
                    })));
                return d ? (0, i.jsx)(r.Profiler, {
                    id: e,
                    onRender: l,
                    children: s
                }) : (0, i.jsx)(i.Fragment, {
                    children: s
                })
            }

            function a(e) {
                let t = (0, r.useRef)(new Map),
                    o = (0, r.useCallback)(() => {
                        let n = Array.from(t.current.values()).filter(e => e.isSpawned),
                            r = n.length - e.maxPreferredIFrames;
                        if (r <= 0) return;
                        let i = n.filter(e => !e.isVisible);
                        for (let e of (i.sort((e, t) => e.latestTimestamp - t.latestTimestamp), i.slice(0, r))) e.isSpawned = !1, e.onVisibilityChange(!1)
                    }, [e.maxPreferredIFrames]),
                    a = (0, r.useCallback)(e => {
                        for (let n of e) {
                            if (!(n.target instanceof HTMLElement)) continue;
                            let e = t.current.get(n.target);
                            e && (e.isVisible = n.isIntersecting, e.latestTimestamp = n.time, e.isVisible && !e.isSpawned && (e.isSpawned = !0, e.onVisibilityChange(!0)))
                        }
                        o()
                    }, [o]),
                    s = (0, r.useRef)(void 0 !== window.IntersectionObserver ? new IntersectionObserver(a) : null);
                (0, r.useEffect)(() => () => {
                    s.current && (s.current.disconnect(), s.current = null)
                }, []);
                let l = (0, n(668745).ZC)(e.maxPreferredIFrames);
                (0, r.useEffect)(() => {
                    l && e.maxPreferredIFrames < l && o()
                }, [o, e.maxPreferredIFrames, l]);
                let d = (0, r.useMemo)(() => ({
                    track: (e, r) => {
                        s.current ? (t.current.set(e, {
                            isVisible: !1,
                            isSpawned: !1,
                            latestTimestamp: 0,
                            onVisibilityChange: n(381453).sg(r, 50)
                        }), s.current.observe(e)) : n(152502).mm.track(e, r)
                    },
                    untrack: e => {
                        s.current ? (s.current.unobserve(e), t.current.delete(e)) : n(152502).mm.untrack(e)
                    }
                }), []);
                return (0, i.jsx)(n(152502).jq.Provider, {
                    value: d,
                    children: e.children
                })
            }
            n(898992), n(354520);
            var s = () => n(546605);
            class l extends s().Store {
                getInitialState() {
                    return {
                        enabled: !1
                    }
                }
                toggle() {
                    this.setState({
                        enabled: !this.state.enabled
                    })
                }
                setEnabled(e) {
                    this.setState({
                        enabled: e
                    })
                }
            }
            let d = new l;

            function c(e) {
                let {
                    children: t
                } = e, o = (0, n(83208).X)("string_id_debug_mode"), a = (0, n(682985).K8)(() => d.state.enabled, []), s = (0, n(109939).tz)(), l = (0, r.useMemo)(() => {
                    if (!a) return;
                    let e = (0, n(109939).MT)(),
                        t = (0, n(109939).EY)({
                            locale: s.locale,
                            messages: {}
                        }, e),
                        r = t.formatMessage.bind(t);
                    return Object.assign({}, t, {
                        formatMessage: (e, t) => r({ ...e,
                            defaultMessage: void 0
                        }, t)
                    })
                }, [a, s.locale]), c = a && l ? l : s;
                return (0, i.jsxs)(i.Fragment, {
                    children: [o ? (0, i.jsx)(p, {
                        isEnabled: a,
                        onToggle: () => d.toggle()
                    }) : void 0, (0, i.jsx)(n(109939).Lq, {
                        value: c,
                        children: t
                    })]
                })
            }
            let u = {
                position: "fixed",
                bottom: 16,
                insetInlineEnd: 64,
                zIndex: 1e4,
                padding: 4
            };

            function p(e) {
                let {
                    isEnabled: t,
                    onToggle: o
                } = e, a = (0, n(109939).tz)(), [s, l] = (0, r.useState)(!1), d = (0, n(960253).I)(() => ({
                    plainButton: {
                        color: t ? n(632079).Tj.blue.text.primary : n(632079).Tj.text.primary,
                        opacity: +!!s,
                        transition: "opacity 0.2s ease-in-out",
                        pointerEvents: s ? "auto" : "none"
                    }
                }), [s, t]);
                return (0, i.jsx)("div", {
                    style: u,
                    onMouseEnter: () => l(!0),
                    onMouseLeave: () => l(!1),
                    children: (0, i.jsx)(n(988022).p, {
                        colorPalette: t ? "blue" : "gray",
                        style: d.plainButton,
                        iconLeading: {
                            icon: n(6260).Z,
                            colorPalette: t ? "blue" : void 0,
                            colorVariant: t ? "accentPrimary" : "primary"
                        },
                        onClick: o,
                        children: a.formatMessage({
                            id: "stringIdDebug.toggle",
                            defaultMessage: "String ID Debug"
                        })
                    })
                })
            }

            function m() {
                return (0, n(80384).kg)() ? (0, i.jsx)(n(80384).MG, {}) : null
            }
            let h = "lastProtocolUrlDeduplicationId",
                g = (0, n(815048)._h)(new(n(815048)).O2("AdminSyncDetailPage", () => Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(45414), n.e(64038), n.e(67430), n.e(57042), n.e(33503), n.e(56809), n.e(30532), n.e(23644), n.e(22841), n.e(12801), n.e(49340), n.e(85782), n.e(91029), n.e(19884)]).then(n.bind(n, 527621))), e => e.AdminSyncDetailPage),
                f = (0, n(815048)._h)(new(n(815048)).O2("AdminSyncsHomePage", () => Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(45414), n.e(64038), n.e(67430), n.e(57042), n.e(33503), n.e(56809), n.e(30532), n.e(23644), n.e(22841), n.e(12801), n.e(49340), n.e(85782), n.e(91029), n.e(19884)]).then(n.bind(n, 375500))), e => e.AdminSyncsHomePage),
                b = {
                    width: "100%",
                    height: "100%"
                };

            function v(e) {
                return (0, n(533992).v3)().currentUser.isLoggedIn() ? (0, i.jsx)("div", {
                    style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    },
                    children: (0, i.jsx)(n(60469).A, {
                        style: b,
                        spinnerSize: "xl",
                        showSpinnerTimeout: 500
                    })
                }) : null
            }
            let w = new(n(815048)).O2("HelpButton", async () => await n.e(31638).then(n.bind(n, 447697))),
                S = (0, n(815048)._h)(w, e => e.default),
                y = new(n(815048)).O2("StopDictationButtonMobile", async () => await Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(5410), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(12354), n.e(5721), n.e(57688), n.e(17250), n.e(64696), n.e(39726), n.e(87971), n.e(29663), n.e(74145), n.e(55067), n.e(79349), n.e(90735), n.e(50354), n.e(71136), n.e(86102), n.e(30671), n.e(3101)]).then(n.bind(n, 57631))),
                A = (0, n(815048)._h)(y, e => e.StopDictationButtonMobile),
                I = new(n(815048)).O2("StopDictationListener", async () => await Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(5410), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(12354), n.e(5721), n.e(57688), n.e(17250), n.e(64696), n.e(39726), n.e(87971), n.e(29663), n.e(74145), n.e(55067), n.e(79349), n.e(90735), n.e(50354), n.e(71136), n.e(86102), n.e(30671), n.e(3101)]).then(n.bind(n, 413440))),
                x = (0, n(815048)._h)(I, e => e.StopDictationListener),
                P = new(n(815048)).O2("TranscriptionBlockDemoVideoModal", async () => await Promise.all([n.e(75134), n.e(9773), n.e(55373), n.e(36192), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(5721), n.e(57688), n.e(64696), n.e(87971), n.e(79349), n.e(76135), n.e(61842), n.e(71136), n.e(86102), n.e(14889)]).then(n.bind(n, 593988))),
                k = (0, n(815048)._h)(P, e => e.TranscriptionBlockDemoVideoModal),
                C = (0, n(815048)._h)(new(n(815048)).O2("TranscriptionUsageFetcher", () => n.e(30879).then(n.bind(n, 984272))), e => e.TranscriptionUsageFetcher),
                _ = new(n(815048)).O2("InPageFind", async () => Promise.all([n.e(75134), n.e(55373), n.e(36192), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(53050), n.e(87353), n.e(45213), n.e(5721), n.e(57688), n.e(64696), n.e(76135), n.e(28958)]).then(n.bind(n, 29557))),
                j = (0, n(815048)._h)(_, e => e.InPageFind),
                T = new(n(815048)).O2("MaybeInAppActivityRenderer", async () => await Promise.all([n.e(49806), n.e(79974), n.e(45414), n.e(25867), n.e(87971), n.e(50354), n.e(61842), n.e(20957), n.e(58033), n.e(76060), n.e(30673)]).then(n.bind(n, 682738))),
                E = (0, n(815048)._h)(T, e => e.MaybeInAppActivityRenderer);

            function R(e) {
                return (0, i.jsx)("div", {
                    id: "test-customer-io",
                    style: {
                        width: 334,
                        height: 200,
                        position: "absolute",
                        bottom: 64,
                        insetInlineEnd: 21,
                        zIndex: 1,
                        display: e ? void 0 : "none"
                    }
                })
            }
            let M = function() {
                    let {
                        currentUser: e
                    } = (0, n(533992).v3)(), t = (0, n(682985).K8)(() => e.isLoggedIn(), [e]), i = (0, n(718012).V)(), o = "light" === (0, n(960253).e)();
                    (0, r.useEffect)(() => {
                        t && (i.getCalloutVisibility("customer_io").canShow ? o ? n(763927).A.state.suppressReason === n(763927).e.IN_APP_CALLOUT_CONFLICT ? n(763927).A.setState({ ...n(763927).A.state,
                            isVisible: !0,
                            suppressReason: void 0
                        }) : n(763927).A.setState({ ...n(763927).A.state,
                            suppressReason: void 0
                        }) : n(763927).A.setState({
                            isVisible: !1,
                            suppressReason: n(763927).e.DARK_MODE
                        }) : n(763927).A.setState({
                            isVisible: !1,
                            suppressReason: n(763927).e.IN_APP_CALLOUT_CONFLICT
                        }))
                    }, [i, t, o]);
                    let a = (0, n(682985).K8)(() => n(763927).A.state.isVisible && i.getCalloutVisibility("customer_io").canShow, [i]);
                    return ((0, r.useEffect)(() => {
                        if (a) return i.updateCalloutStatus({
                            calloutId: "customer_io",
                            visible: !0
                        }), () => {
                            i.updateCalloutStatus({
                                calloutId: "customer_io",
                                visible: !1
                            })
                        }
                    }, [i, a]), t) ? a ? R(!0) : R(!1) : null
                },
                L = new(n(815048)).O2("KeyboardShortcutsModal", () => n.e(19512).then(n.bind(n, 39513))),
                O = (0, n(815048)._h)(L, e => e.KeyboardShortcutsModal),
                D = (0, n(109939).YK)({
                    pressSlashHeader: {
                        id: "EducationTooltips.pressSlash.header",
                        defaultMessage: "Press {slashkey} for commands"
                    }
                }),
                U = {
                    background: "rgba(255, 255, 255, 0.1)",
                    padding: 3,
                    paddingInlineEnd: 8,
                    paddingInlineStart: 8,
                    marginInlineEnd: 6,
                    marginInlineStart: 6,
                    borderRadius: 4
                };

            function B(e) {
                return (0, i.jsx)("div", {
                    style: U,
                    children: e.char
                })
            }

            function N() {
                let e = (0, n(533992).v3)(),
                    t = n(999773).U();
                return (0, n(682985).K8)(() => {
                    let e = n(728372).AppStoreCurrentUserSettingsStore.state;
                    if (e && e.isReady()) {
                        var t;
                        return !!(null == (t = e.getSettings()) ? void 0 : t.pressed_slash_tooltip)
                    }
                    return !0
                }, []) || n(986939).A.isMobile || !t ? null : (0, i.jsx)(n(788139).k, {
                    hideCloseButton: !0,
                    origin: () => t.getNode(),
                    placementToOrigin: "bottom",
                    header: (0, i.jsx)(n(109939).sA, { ...D.pressSlashHeader,
                        values: {
                            slashkey: (0, i.jsx)(B, {
                                char: "/"
                            })
                        }
                    }),
                    content: null,
                    onCloseClick: () => n(999773).P(e)
                })
            }
            let W = new(n(815048)).O2("SecondarySidebar", async () => await Promise.all([n.e(75134), n.e(9773), n.e(55373), n.e(36192), n.e(96346), n.e(49806), n.e(79974), n.e(45414), n.e(71562), n.e(26361), n.e(16471), n.e(37353), n.e(18965), n.e(30085), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(54951), n.e(43444), n.e(23979), n.e(17250), n.e(26997), n.e(73259), n.e(28048), n.e(93430), n.e(12560), n.e(88268), n.e(12001), n.e(40198), n.e(39726), n.e(31243), n.e(42534), n.e(86662), n.e(14886), n.e(39225), n.e(6212), n.e(2626), n.e(64453), n.e(4779), n.e(28482), n.e(14369), n.e(56308), n.e(83490), n.e(58360), n.e(12690), n.e(72805), n.e(3723), n.e(40716), n.e(14231), n.e(4287), n.e(44724), n.e(30767), n.e(69193), n.e(10188), n.e(97711), n.e(32664), n.e(62146), n.e(8896), n.e(38539), n.e(95281)]).then(n.bind(n, 423905))),
                q = (0, n(815048)._h)(W, e => e.SecondarySidebar),
                z = new(n(815048)).O2("SpaceSettings", async () => Promise.all([n.e(75134), n.e(9773), n.e(55373), n.e(36192), n.e(96346), n.e(49806), n.e(79974), n.e(45414), n.e(71562), n.e(26361), n.e(96527), n.e(22900), n.e(42838), n.e(37571), n.e(50911), n.e(27727), n.e(85128), n.e(47609), n.e(47010), n.e(71278), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(54951), n.e(43444), n.e(23979), n.e(17250), n.e(26997), n.e(73259), n.e(28048), n.e(55940), n.e(12560), n.e(12001), n.e(40198), n.e(31243), n.e(42534), n.e(14886), n.e(39225), n.e(87971), n.e(2626), n.e(64453), n.e(4779), n.e(21969), n.e(14369), n.e(74145), n.e(56308), n.e(48860), n.e(18682), n.e(55067), n.e(79349), n.e(83490), n.e(82538), n.e(2276), n.e(90735), n.e(30532), n.e(73588), n.e(78288), n.e(68719), n.e(14231), n.e(78311), n.e(19812), n.e(47302), n.e(18406), n.e(83778), n.e(64049), n.e(46350), n.e(67281), n.e(64476), n.e(44724), n.e(76395), n.e(52064), n.e(67098), n.e(63611), n.e(14877), n.e(69438), n.e(78257), n.e(84382), n.e(74931), n.e(71379), n.e(74063), n.e(6743), n.e(98701), n.e(16550), n.e(22841), n.e(57912), n.e(70162), n.e(46740), n.e(58147), n.e(47431), n.e(4726), n.e(99543), n.e(605), n.e(6049), n.e(4584)]).then(n.bind(n, 513823))),
                F = (0, n(815048)._h)(z, e => e.SpaceSettings);
            async function V(e, t) {
                let n = await t.api.callApi({
                    eventName: "stripeGetTestClock",
                    environment: t,
                    data: {
                        spaceId: e
                    }
                });
                if ("success" === n.type) {
                    if ("advancing" === n.data.status) throw Error("Test clock is advancing. Please try again in a few seconds.");
                    return n.data.epochSeconds
                }
            }
            async function K(e) {
                let {
                    environment: t,
                    spaceId: n,
                    callback: r
                } = e, i = await V(n, t);
                if (i) return r(i)
            }
            async function $(e) {
                let {
                    environment: t,
                    spaceId: r,
                    durationLike: i
                } = e, o = await V(r, t);
                if (!o) return;
                let a = n(906745).DateTime.fromSeconds(o),
                    s = n(906745).dw.fromDurationLike(i);
                return a.plus(s).toSeconds()
            }
            async function G(e) {
                let {
                    environment: t,
                    spaceId: n,
                    advanceTestClockArgument: r
                } = e;
                if (r)
                    if ("number" == typeof r) return r;
                    else if ("function" == typeof r) return await K({
                    environment: t,
                    spaceId: n,
                    callback: r
                });
                else if ("object" == typeof r) return await $({
                    environment: t,
                    spaceId: n,
                    durationLike: r
                });
                else return
            }
            n(16280);
            let H = {
                WorkflowTemplatesBuilderNotInProd: new(n(815048)).O2("WorkflowTemplateBuilderNotInProd", async () => await Promise.all([n.e(75134), n.e(28556), n.e(9773), n.e(53923), n.e(48787), n.e(23519), n.e(12354), n.e(43444), n.e(48486), n.e(26951), n.e(94611)]).then(n.bind(n, 496208))),
                CollectionItemNameConfigMenuItemNotInProd: new(n(815048)).O2("CollectionItemNameConfigMenuItemNotInProd", async () => await Promise.all([n.e(75134), n.e(33503), n.e(12062)]).then(n.bind(n, 945635)))
            };
            (0, n(815048)._h)(H.WorkflowTemplatesBuilderNotInProd, e => e.WorkflowTemplatesBuilderNotInProd), (0, n(815048)._h)(H.CollectionItemNameConfigMenuItemNotInProd, e => e.CollectionItemNameConfigMenuItemNotInProd);
            let J = new(n(815048)).O2("SharedChatAppView", async () => await Promise.all([n.e(75134), n.e(9773), n.e(55373), n.e(36192), n.e(96346), n.e(49806), n.e(79974), n.e(45414), n.e(71562), n.e(16471), n.e(37353), n.e(18965), n.e(42838), n.e(62761), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(54951), n.e(43444), n.e(23979), n.e(26997), n.e(73259), n.e(28048), n.e(93430), n.e(12560), n.e(88268), n.e(39726), n.e(42534), n.e(86662), n.e(6212), n.e(28482), n.e(14369), n.e(56308), n.e(83490), n.e(12690), n.e(68583), n.e(35602), n.e(12024), n.e(14231), n.e(30228)]).then(n.bind(n, 506249))),
                Z = (0, n(815048)._h)(J, e => e.SharedChatAppView),
                Q = new(n(815048)).O2("AgentPromptDebugPage", async () => await Promise.all([n.e(75134), n.e(9773), n.e(55373), n.e(36192), n.e(96346), n.e(96527), n.e(22900), n.e(50911), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(43444), n.e(23979), n.e(17250), n.e(73259), n.e(55940), n.e(88268), n.e(87971), n.e(21969), n.e(55067), n.e(82538), n.e(2276), n.e(78311), n.e(47302), n.e(83778), n.e(76395), n.e(67098), n.e(79680)]).then(n.bind(n, 743842))),
                Y = (0, n(815048)._h)(Q, e => e.AgentPromptDebugPage),
                X = new(n(815048)).O2("ForkPageModalWrapper", async () => await Promise.all([n.e(75134), n.e(47414), n.e(82538), n.e(87539), n.e(14231), n.e(27761)]).then(n.bind(n, 727812))),
                ee = (0, n(815048)._h)(X, e => e.ForkPageModalWrapper),
                et = new(n(815048)).O2("Marketplace", async () => {
                    let {
                        Marketplace: e
                    } = await Promise.all([n.e(75134), n.e(9773), n.e(55373), n.e(36192), n.e(96346), n.e(37353), n.e(96527), n.e(74728), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(43444), n.e(23979), n.e(64696), n.e(93430), n.e(39726), n.e(4779), n.e(82538), n.e(60262), n.e(81603), n.e(91100), n.e(4287), n.e(47302), n.e(91636), n.e(88004), n.e(9914), n.e(15975), n.e(42709), n.e(9806), n.e(53157), n.e(74856), n.e(26816), n.e(79239)]).then(n.bind(n, 658294));
                    return {
                        Marketplace: e
                    }
                }),
                en = (0, n(815048)._h)(et, e => e.Marketplace),
                er = new(n(815048)).O2("SetupPage", async () => await Promise.all([n.e(55373), n.e(36192), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(53050), n.e(87353), n.e(64696), n.e(58360), n.e(31190), n.e(41815)]).then(n.bind(n, 609947))),
                ei = (0, n(815048)._h)(er, e => e.SetupPage),
                eo = new(n(815048)).O2("SkillsPage", async () => await Promise.all([n.e(75134), n.e(9773), n.e(55373), n.e(36192), n.e(96346), n.e(49806), n.e(79974), n.e(45414), n.e(26361), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(45213), n.e(53847), n.e(12354), n.e(54951), n.e(43444), n.e(23979), n.e(17250), n.e(64696), n.e(12001), n.e(40198), n.e(31243), n.e(42534), n.e(14886), n.e(39225), n.e(2626), n.e(64453), n.e(4779), n.e(67098), n.e(4726), n.e(44124)]).then(n.bind(n, 29363))),
                ea = (0, n(815048)._h)(eo, e => e.SkillsPage),
                es = {
                    FullPageAIChatLoader: new(n(815048)).O2("FullPageAIChatLoader", () => Promise.all([n.e(55373), n.e(36192), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(53050), n.e(87353), n.e(64696), n.e(58596)]).then(n.bind(n, 391356)))
                },
                el = (0, n(815048)._h)(es.FullPageAIChatLoader, e => e.FullPageAIChatLoader);

            function ed({
                routerState: e
            }) {
                let t = (0, n(533992).v3)(),
                    {
                        route: r
                    } = e,
                    o = (0, n(682985).O$)(n(728372).AppStoreMainEditorCurrentBlockStore),
                    a = (0, n(682985).K8)(() => n(686494).A.state.publicPageData, []),
                    {
                        shouldShowFrame: s,
                        shouldShowError: l,
                        shouldRedirectFromHome: d
                    } = (0, n(682985).K8)(() => (0, n(846044).X)(t), [t]),
                    c = (0, n(682985).K8)(() => "page" === r.name && n(469372).A.state.open && (0, n(862085).K1)(n(469372).A.state.blockStore), [r.name]),
                    u = (0, n(226142).a)();
                return (0, i.jsxs)(i.Fragment, {
                    children: [s && "onboardingAgentDebug" !== r.name && (o || u || "meet" === r.name || "library" === r.name || "softwareFactory" === r.name || "factory" === r.name) ? (0, i.jsx)(n(240935).Ay, {
                        routerState: e
                    }) : void 0, u || "chat" !== r.name ? void 0 : (0, i.jsx)(el, {
                        route: r
                    }), u || "agent" !== r.name ? void 0 : (0, i.jsx)(n(178801).Di, {
                        routerState: e
                    }), u || "ai" !== r.name ? void 0 : (0, i.jsx)(n(178801).Xq, {
                        routerState: e
                    }), u || "setup" !== r.name ? void 0 : (0, i.jsx)(ei, {}), u || "skills" !== r.name ? void 0 : (0, i.jsx)(ea, {}), u || "sharedChat" !== r.name ? void 0 : (0, i.jsx)(Z, {
                        spaceId: r.spaceId,
                        threadId: r.threadId
                    }), u || "onboardingAgentDebug" !== r.name ? void 0 : (0, i.jsx)(Y, {}), "marketplace" === r.name ? (0, i.jsx)(en, {}) : void 0, c ? (0, i.jsx)(ee, {}) : void 0, (l || d) && !c ? (0, i.jsx)(n(29244).o, {
                        route: e.route,
                        publicPageData: a,
                        shouldRedirectFromHome: d
                    }) : void 0]
                })
            }
            let ec = (0, n(815048)._h)(n(683194).p, e => e.Sidebar),
                eu = (0, n(815048)._h)(new(n(815048)).O2("SidebarMobile", async () => await Promise.all([n.e(75134), n.e(71562), n.e(26361), n.e(96527), n.e(22900), n.e(85128), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(15389), n.e(54951), n.e(26997), n.e(73259), n.e(28048), n.e(55940), n.e(12560), n.e(33503), n.e(21969), n.e(74145), n.e(48860), n.e(18682), n.e(79349), n.e(47414), n.e(83490), n.e(96579), n.e(87539), n.e(73588), n.e(14231), n.e(18406), n.e(83778), n.e(64049), n.e(46350), n.e(67281), n.e(44724), n.e(52064), n.e(48095), n.e(69193), n.e(63611), n.e(10188), n.e(14877), n.e(69438), n.e(84382), n.e(18802), n.e(59133), n.e(71379), n.e(6743), n.e(16550), n.e(41331), n.e(88119), n.e(67947)]).then(n.bind(n, 534386))), e => e.SidebarMobile),
                ep = r.memo(function() {
                    var e;
                    let t = (0, n(533992).v3)(),
                        {
                            isPhone: o,
                            isTablet: a
                        } = (0, n(533992).Y0)(),
                        s = (0, n(682985).K8)(() => (0, n(712358).K)(t), [t]),
                        l = (0, n(907620).T)("supportsNativeHome"),
                        d = (0, n(682985).K8)(() => (0, n(505941).y)(t), [t]);
                    (0, r.useEffect)(() => {
                        (0, n(635339).yd)("sidebar_loader_mounted")
                    }, []);
                    let c = ! function({
                        isPhone: e,
                        isTablet: t,
                        isViewingAsPublicShareLink: n
                    }) {
                        return e || t && n
                    }(e = {
                        isPhone: o,
                        isTablet: a,
                        isViewingAsPublicShareLink: d,
                        supportsMobileNativeHome: l
                    }) ? "browser-sidebar" : ! function({
                        supportsMobileNativeHome: e
                    }) {
                        return e
                    }(e) ? "mobile-sidebar" : "native-home";
                    return (0, r.useEffect)(() => {
                        let {
                            enableStrictRenderCompletion: e,
                            deferSidebarLoadingWhenCollapsed: r
                        } = (0, n(42491).b8)(t.currentUser.id);
                        e && "browser-sidebar" === c && (s || !r) && n(728372).default.addPendingCriticalRender("sidebar")
                    }, [c, t.currentUser.id, s]), (0, i.jsx)(n(917441).Lp, {
                        children: (() => {
                            switch (c) {
                                case "native-home":
                                    return (0, i.jsx)(n(595417).As, {});
                                case "mobile-sidebar":
                                    return (0, i.jsx)(eu, {});
                                case "browser-sidebar":
                                    return (0, i.jsx)(em, {
                                        isExpanded: s
                                    });
                                default:
                                    return null
                            }
                        })()
                    })
                });

            function em({
                isExpanded: e
            }) {
                let t = (0, n(533992).v3)(),
                    o = t.device.isElectronMac,
                    {
                        deferSidebarLoadingWhenCollapsed: a
                    } = (0, n(42491).b8)(t.currentUser.id),
                    s = (0, n(119965).V)(),
                    l = !e && a && s,
                    d = (0, n(917441).Rx)(),
                    c = !!d;
                (0, r.useEffect)(() => {}, [l, e, a, s]);
                let u = (0, r.useRef)(!1),
                    p = (0, r.useRef)(l);
                (0, r.useEffect)(() => {
                    l || u.current || (u.current = !0, p.current)
                }, [l]), (0, r.useEffect)(() => {}, [d]), (0, n(982853).Jf)({
                    sidebarState: d
                });
                let m = (0, n(682985).K8)(() => (0, n(59406).w)(t), [t]),
                    h = (0, n(682985).K8)(() => (0, n(505941).y)(t), [t]);
                ! function(e) {
                    let {
                        isLoaded: t,
                        isExpanded: i,
                        isOnPublicPage: o,
                        isOnPublicShareLinkPage: a
                    } = e, s = (0, n(533992).v3)(), l = (0, n(682985).K8)(() => (0, n(259533).isPrewarmedTabInitialRender)(s), [s]);
                    (0, r.useEffect)(() => {
                        if (t || l) return;
                        let e = setTimeout(() => {
                            var e, t;
                            let r = {
                                level: "error",
                                from: "SidebarContentContainer",
                                type: "sidebarLoadingTimeout",
                                error: {
                                    message: "Sidebar took longer than 90 seconds to load."
                                },
                                data: {
                                    miscDataToConvertToString: {
                                        isOnline: n(205885).A.state.online,
                                        hasCurrentSpaceStore: !!(0, n(328765).S)(),
                                        hasCurrentSpaceViewStore: !!n(728372).AppStoreSidebarSpaceViewStore.state,
                                        hasCurrentUserRootStore: !!n(728372).AppStoreCurrentUserRootStore.state,
                                        hasCurrentUserSettingsStore: !!n(728372).AppStoreCurrentUserSettingsStore.state,
                                        documentVisibilityState: document.visibilityState,
                                        isOnPublicPage: o,
                                        isOnPublicShareLinkPage: a
                                    }
                                }
                            };
                            n(775657).electronApi ? null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (t = n(775657).electronApi.logErrorForOffline) || t.call(n(775657).electronApi, { ...r,
                                data: r.data ? (0, n(416607).stringifyMiscData)(r.data) : void 0
                            }) : n(773352).log(r), (0, n(635339).Sz)({
                                environment: s,
                                reason: "client_deadline_exceeded",
                                is_expanded: i,
                                spaceId: null == (e = (0, n(328765).S)()) ? void 0 : e.id
                            })
                        }, 9e4);
                        return () => {
                            clearTimeout(e)
                        }
                    }, [t, i, o, a, s, l])
                }({
                    isLoaded: c,
                    isExpanded: e,
                    isOnPublicPage: m,
                    isOnPublicShareLinkPage: h
                });
                let g = (0, r.useCallback)(() => (0, i.jsx)(n(471108).A, {
                        skipFadeinDelay: !0
                    }), []),
                    {
                        isTablet: f
                    } = (0, n(533992).Y0)();
                return l ? null : (0, i.jsx)(ec, {
                    isElectronMac: o,
                    isTablet: f,
                    isExpanded: e,
                    renderLoading: g,
                    forceRenderLoading: !c && !m && !h
                })
            }
            let eh = (0, n(815048)._h)(new(n(815048)).O2("NotionBanners", () => Promise.all([n.e(87569), n.e(72317)]).then(n.bind(n, 190640))), e => e.default),
                eg = new(n(815048)).O2("NotionModals", () => Promise.all([n.e(75134), n.e(9773), n.e(55373), n.e(36192), n.e(96346), n.e(49806), n.e(79974), n.e(45414), n.e(26361), n.e(96527), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(45213), n.e(53847), n.e(12354), n.e(54951), n.e(43444), n.e(23979), n.e(17250), n.e(64696), n.e(73259), n.e(12001), n.e(40198), n.e(31243), n.e(14886), n.e(39225), n.e(2626), n.e(64453), n.e(4779), n.e(47302), n.e(9914), n.e(53157), n.e(74856), n.e(44098), n.e(35367)]).then(n.bind(n, 905516))),
                ef = (0, n(815048)._h)(eg, e => e.default);

            function eb({
                routerState: e
            }) {
                let t, o, a = (0, n(533992).v3)();
                (0, r.useEffect)(() => {
                    var e;
                    if (null != (e = a.mobileNative) && e.api.appComponentMountState) return a.mobileNative.api.appComponentMountState(!0), () => {
                        var e;
                        null != (e = a.mobileNative) && e.api.appComponentMountState && a.mobileNative.api.appComponentMountState(!1)
                    }
                }, [a]);
                let {
                    route: s
                } = e, l = (0, n(682985).O$)((0, n(846044).e)(a)), d = (0, n(473182).x9)(), c = (0, n(682985).K8)(() => {
                    let e = n(728372).AppStoreSidebarSpaceStore.state,
                        t = null == e ? void 0 : e.getModel();
                    return void 0 === t || t.isTranscriptionEnabled()
                }, []), u = (0, n(682985).K8)(() => {
                    if (!(0, n(548124).shouldAllowOpeningAgentOnSpecifiedRoute)(s) || n(240935).eX.state || n(240935).tA.state || d) return !1;
                    let {
                        device: e
                    } = a;
                    return n(886556).z.shouldShowAssistantInCorner(e)
                }, [a, d, s]), p = (0, n(682985).K8)(() => {
                    if (n(986939).A.isMobile || u || n(240935).eX.state || n(240935).tA.state || !a.currentUser.isLoggedIn()) return !1;
                    let e = n(728372).AppStoreMainEditorCurrentBlockStore.state,
                        t = n(728372).AppStoreSidebarSpaceStore.state;
                    return !(!e || !t || (0, n(142484).q)(a, e, t))
                }, [a, u]), m = (0, n(853284).U)(), h = (0, n(682985).K8)(() => {
                    let {
                        device: e
                    } = a;
                    return !!e.isMobileNative && ("page" === s.name ? n(886556).z.isXMLAssistantEnabled() : void 0)
                }, [a, s.name]), g = (0, n(682985).K8)(() => l && !(0, n(845181).t)(a) && n(984858).sidebarOpenStore.state, [a, l]), f = (0, n(682985).K8)(() => (0, n(810737).t)(), []), b = (0, n(682985).K8)(() => n(728372).default.isInitialRenderComplete(), []), v = (0, n(119965).V)();
                return t = ["local", "staging", "development"].includes("production"), o = (0, n(533992).v3)(), (0, r.useEffect)(() => {
                    t && ((0, n(202146).exposeDebugValue)("refreshTestClock", async () => {
                        var e;
                        let t = null == (e = (0, n(328765).S)()) ? void 0 : e.id;
                        if (t) {
                            let e = await V(t, o);
                            if (e) {
                                let t = n(906745).DateTime.fromSeconds(e);
                                console.log(`Test clock time is ${t.toString()} (${e} seconds)`)
                            }
                        }
                    }), (0, n(202146).exposeDebugValue)("advanceTestClock", async e => {
                        var t;
                        if (!e) throw Error("advanceTestClock requires an argument. You can pass an epoch timestamp in seconds, a relative DurationLike object like { months: 2 }, or a function that takes the current epoch seconds and returns the new epoch seconds.");
                        let r = null == (t = (0, n(328765).S)()) ? void 0 : t.id;
                        if (!r) return;
                        let i = await G({
                            environment: o,
                            spaceId: r,
                            advanceTestClockArgument: e
                        });
                        i && await o.api.callApi({
                            eventName: "stripeAdvanceTestClock",
                            environment: o,
                            data: {
                                spaceId: r,
                                epochSeconds: i
                            }
                        })
                    }))
                }, [t, o]), (0, i.jsxs)(n(754687).A, {
                    children: [(0, i.jsx)(n(976800).o, {}), l ? (0, i.jsx)(ep, {}) : void 0, (0, i.jsx)(ed, {
                        routerState: e
                    }), !v && l ? (0, i.jsx)(q, {}) : void 0, v ? void 0 : (0, i.jsx)(n(248791).lz, {}), g ? (0, i.jsx)(ew, {}) : void 0, (0, i.jsx)(M, {}), !v && n(986939).A.isMobile ? (0, i.jsx)(A, {}) : void 0, !v && c ? (0, i.jsx)(C, {}) : void 0, !v && h ? (0, i.jsx)(n(310639).LazyMobileAssistantPendingOperationsCollapsedElement, {}) : void 0, !v && u && "agent" !== s.name ? (0, i.jsx)(n(310639).LazyAssistantOriginElement, {}) : void 0, p ? (0, i.jsx)(S, {}) : void 0, v ? void 0 : (0, i.jsx)(j, {}), f ? (0, i.jsx)(N, {}) : void 0, b && !n(986939).A.isMobile ? (0, i.jsx)(n(398266).RK, {}) : null, m ? (0, i.jsx)(E, {}) : void 0, v ? void 0 : (0, i.jsx)(x, {}), v ? void 0 : (0, i.jsx)(eh, {}), v ? void 0 : (0, i.jsx)(ef, {}), v ? void 0 : (0, i.jsx)(k, {}), void 0, (0, i.jsx)(eS, {}), (0, i.jsx)(ey, {})]
                })
            }

            function ev() {
                (0, n(713167).V)()
            }

            function ew() {
                let e = (0, n(533992).v3)(),
                    t = (0, n(682985).K8)(() => ({
                        position: "absolute",
                        top: 0,
                        insetInlineStart: (0, n(623179).r)(e),
                        insetInlineEnd: 0,
                        bottom: 0,
                        zIndex: 2
                    }), [e]);
                return (0, i.jsx)("div", {
                    style: t,
                    onClick: ev
                })
            }

            function eS() {
                let {
                    currentSpaceStore: e,
                    currentUserStore: t,
                    isInitialRenderComplete: o
                } = (0, n(682985).K8)(() => ({
                    currentSpaceStore: n(728372).AppStoreSidebarSpaceStore.state,
                    currentUserStore: n(728372).AppStoreCurrentUserStore.state,
                    isInitialRenderComplete: n(728372).default.isInitialRenderComplete()
                }), []), a = (0, n(682985).K8)(() => n(227947).A.state.open, []), [s, l] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    a && l(!0)
                }, [a]), e && t && o && s ? (0, i.jsx)(F, {
                    spaceStore: e,
                    userStore: t
                }, `${e.id}-${null==t?void 0:t.id}`) : null
            }

            function ey() {
                let e = (0, n(682985).K8)(() => n(499267).W({
                        store: n(432428).V
                    }), []),
                    t = (0, r.useCallback)(() => {
                        n(499267).j({
                            store: n(432428).V
                        })
                    }, []);
                return (0, i.jsx)(O, {
                    open: e,
                    onDismiss: t
                })
            }
            let eA = (0, n(815048)._h)(new(n(815048)).O2("NotionCalendarAuthorization", () => n.e(67801).then(n.bind(n, 544644))), e => e.NotionCalendarAuthorization),
                eI = (0, n(815048)._h)(new(n(815048)).O2("ConfirmUnsubscribePage", () => n.e(75417).then(n.bind(n, 799306))), e => e.ConfirmUnsubscribePage),
                ex = (0, n(815048)._h)(new(n(815048)).O2("InitiateExternalAuthentication", () => n.e(35287).then(n.bind(n, 832878))), e => e.default),
                eP = (0, n(815048)._h)(new(n(815048)).O2("InitiateExternalAuthenticationFromDesktop", () => n.e(42945).then(n.bind(n, 21648))), e => e.default),
                ek = new(n(815048)).O2("desktopEmailConfirmPage", () => n.e(32568).then(n.bind(n, 691330))),
                eC = (0, n(815048)._h)(ek, e => e.default);

            function e_(e) {
                let {
                    preventFrontRedirect: t
                } = e, r = (0, n(533992).v3)(), {
                    pathname: o,
                    search: a,
                    hash: s
                } = window.location;
                if (!t && (0, n(752120).D8)(r, o)) {
                    let e = a.length > 0 ? `${a}&${n(12951).Kr}=1` : `?${n(12951).Kr}=1`;
                    return (0, n(318620).Y)(o + e + s), null
                }
                return (0, i.jsx)(n(901240).C6, {
                    isSignup: !r.currentUser.isLoggedIn()
                })
            }(0, n(815048)._h)(new(n(815048)).O2("ExportPreview", () => n.e(62927).then(n.bind(n, 250698))), e => e.ExportPreview);
            let ej = new(n(815048)).O2("LocalizedTemplates", async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e(75134), n.e(9773), n.e(55373), n.e(36192), n.e(96346), n.e(37353), n.e(96527), n.e(74728), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(43444), n.e(23979), n.e(64696), n.e(93430), n.e(39726), n.e(4779), n.e(82538), n.e(60262), n.e(81603), n.e(91100), n.e(4287), n.e(47302), n.e(91636), n.e(88004), n.e(9914), n.e(15975), n.e(42709), n.e(9806), n.e(53157), n.e(74856), n.e(26816), n.e(79239)]).then(n.bind(n, 133986));
                    return {
                        LocalizedTemplates: e
                    }
                }),
                eT = (0, n(815048)._h)(ej, e => e.LocalizedTemplates),
                eE = {
                    AddAnotherAccountLoginPage: new(n(815048)).O2("AddAnotherAccountLoginPage", async () => await Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(35837), n.e(33503), n.e(18406), n.e(97615), n.e(3079), n.e(20488)]).then(n.bind(n, 941816)))
                },
                eR = (0, n(815048)._h)(eE.AddAnotherAccountLoginPage, e => e.default),
                eM = (0, n(815048)._h)(new(n(815048)).O2("AddPasskeyRedirectPage", () => n.e(67045).then(n.bind(n, 819946))), e => e.AddPasskeyRedirectPage),
                eL = (0, n(815048)._h)(new(n(815048)).O2("VerifyPasskeyRedirectPage", () => n.e(38101).then(n.bind(n, 142100))), e => e.VerifyPasskeyRedirectPage),
                eO = new(n(815048)).O2("meetingNotification", () => Promise.all([n.e(49806), n.e(79974), n.e(45414), n.e(50354), n.e(62411), n.e(58427)]).then(n.bind(n, 741892))),
                eD = (0, n(815048)._h)(eO, e => e.MeetingNotificationRoute);
            (0, n(815048)._h)(new(n(815048)).O2("MinimalPage", () => n.e(26097).then(n.bind(n, 51869))), e => e.MinimalPage);
            let eU = new(n(815048)).O2("NboPage", () => Promise.all([n.e(75134), n.e(28556), n.e(9773), n.e(55373), n.e(36192), n.e(96346), n.e(49806), n.e(79974), n.e(45414), n.e(71562), n.e(26361), n.e(16471), n.e(37353), n.e(18965), n.e(53923), n.e(48787), n.e(25952), n.e(25102), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(54951), n.e(43444), n.e(23979), n.e(17250), n.e(26997), n.e(73259), n.e(93430), n.e(88268), n.e(12001), n.e(40198), n.e(39726), n.e(31243), n.e(42534), n.e(86662), n.e(14886), n.e(39225), n.e(6212), n.e(2626), n.e(64453), n.e(4779), n.e(28482), n.e(14369), n.e(74145), n.e(56308), n.e(58360), n.e(82538), n.e(72805), n.e(18416), n.e(50354), n.e(38814), n.e(34157), n.e(95364), n.e(72075)]).then(n.bind(n, 149572))),
                eB = (0, n(815048)._h)(eU, e => e.NboPage),
                eN = new(n(815048)).O2("NboOutreachOAuthCallback", async () => await n.e(51829).then(n.bind(n, 764815))),
                eW = (0, n(815048)._h)(eN, e => e.NboOutreachOAuthCallback),
                eq = new(n(815048)).O2("noseyDesktop", () => Promise.all([n.e(75134), n.e(9773), n.e(55373), n.e(36192), n.e(96346), n.e(49806), n.e(79974), n.e(45414), n.e(71562), n.e(16471), n.e(37353), n.e(18965), n.e(85142), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(54951), n.e(43444), n.e(23979), n.e(26997), n.e(73259), n.e(93430), n.e(88268), n.e(39726), n.e(42534), n.e(86662), n.e(6212), n.e(28482), n.e(14369), n.e(60262), n.e(91100), n.e(4287), n.e(91636), n.e(44903), n.e(3456), n.e(17341)]).then(n.bind(n, 109112))),
                ez = (0, n(815048)._h)(eq, e => e.NoseyDesktopRoute),
                eF = new(n(815048)).O2("Onboarding", async () => Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(96346), n.e(96527), n.e(22900), n.e(50911), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(43444), n.e(23979), n.e(17250), n.e(73259), n.e(55940), n.e(87971), n.e(21969), n.e(55067), n.e(82538), n.e(2276), n.e(78311), n.e(47302), n.e(83778), n.e(76395), n.e(45016)]).then(n.bind(n, 956300))),
                eV = (0, n(815048)._h)(eF, e => e.Onboarding),
                eK = new(n(815048)).O2("RequiredSamlErrorPage", async () => Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(35837), n.e(33503), n.e(84444), n.e(18406), n.e(97615), n.e(74931), n.e(82628), n.e(40794)]).then(n.bind(n, 85419))),
                e$ = (0, n(815048)._h)(eK, e => e.RequiredSamlErrorPageWrapper),
                eG = new(n(815048)).O2("OauthAuthorization", async () => await Promise.all([n.e(75134), n.e(55373), n.e(36192), n.e(49806), n.e(79974), n.e(45414), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(54951), n.e(17250), n.e(33503), n.e(2626), n.e(56308), n.e(96579), n.e(87539), n.e(14231), n.e(69193), n.e(14877), n.e(59133), n.e(98701), n.e(47431), n.e(83119)]).then(n.bind(n, 761119))),
                eH = (0, n(815048)._h)(eG, e => e.OauthAuthorization),
                eJ = new(n(815048)).O2("McpOAuthCallback", async () => await n.e(51487).then(n.bind(n, 713239))),
                eZ = (0, n(815048)._h)(eJ, e => e.McpOAuthCallback),
                eQ = new(n(815048)).O2("OauthPostLogin", async () => await Promise.all([n.e(75134), n.e(87539), n.e(69193), n.e(59133), n.e(76865)]).then(n.bind(n, 136740))),
                eY = (0, n(815048)._h)(eQ, e => e.default),
                eX = (0, n(815048)._h)(new(n(815048)).O2("QuickSearchRoute", () => n.e(55687).then(n.bind(n, 155850))), e => e.QuickSearchRoute),
                e0 = (0, n(815048)._h)(new(n(815048)).O2("TeamInviteLinkPage", () => n.e(20894).then(n.bind(n, 692551))), e => e.default),
                e5 = (0, n(815048)._h)(new(n(815048)).O2("WorkersCliLoginPage", () => Promise.all([n.e(49806), n.e(79974), n.e(45414), n.e(48432)]).then(n.bind(n, 65566))), e => e.WorkersCliLoginPage);

            function e8({
                url: e,
                clearHistory: t,
                showWeb: r,
                environment: i,
                loadOrigin: o,
                navigate: a
            }) {
                let s = e;
                if (i.device.isMobileNative && i.device.isPhone) {
                    let e = (0, n(758654).bk)(s);
                    e && e.searchParams.has(n(737869).P5) && (e.searchParams.delete(n(737869).P5), s = e.toString())
                }
                let l = n(213858).Q1({
                        url: s,
                        protocol: n(986939).A.protocol,
                        baseUrl: n(986939).A.domainBaseUrl
                    }),
                    d = n(213858).kb({
                        schemeUrl: l,
                        baseUrl: n(986939).A.domainBaseUrl
                    }),
                    c = n(132702).parseRoute({
                        url: d,
                        baseUrl: n(986939).A.domainBaseUrl,
                        publicDomainName: n(986939).A.publicDomainName,
                        isMobile: n(986939).A.isMobile,
                        protocol: n(986939).A.protocol,
                        currentUrl: window.location.href,
                        requestedOnAlternateDomain: (0, n(700473).wasRequestedOnAlternateDomain)()
                    }),
                    u = n(758654).qn(e, n(525644).Sn),
                    p = n(758654).qn(e, n(525644).p2);
                if (n(329464).A.setDesktopLoadContext({
                        loadOrigin: o || u,
                        wasLoadedAtLogin: p
                    }), (i.device.isAndroid || t) && (0, n(389432).z)({
                        currentUserId: i.currentUser.id
                    }), i.mobileNative && i.mobileNative.closeInAppBrowser(), "googleAuthCallback" === c.name || "microsoftAuthCallback" === c.name) {
                    let {
                        didHandle: e
                    } = (0, n(623028).b)(c);
                    if (e) return
                }
                if ("mcpOAuthComplete" === c.name) {
                    let {
                        didHandle: e
                    } = (0, n(84723).H)(c);
                    if (e) return
                }
                "externalAuthCallback" === c.name && n(218744).default.checkGate({
                    gateName: "skip_navigation_for_external_auth_callback"
                }) && window.location.pathname.startsWith("/agent") || ("googleAuthCallback" === c.name || "samlAuthCallback" === c.name || "passkeyAuthCallback" === c.name ? a({
                    environment: i,
                    url: d,
                    redirect: !0
                }) : (t && (0, n(500880).wI)(i.TabbedRouterStore.state, []), a({
                    environment: i,
                    url: d,
                    redirect: t,
                    updateMobileTabbedRouterArgs: {
                        clearNativeRootPageOverride: r
                    },
                    queryId: "page" === c.name ? c.queryId : void 0
                })))
            }
            n(944114);
            let e4 = {
                message: {
                    color: n(632079).Tj.text.primary
                },
                retryLink: {
                    maxWidth: 300,
                    textAlign: "center",
                    textDecoration: "underline",
                    color: n(632079).Tj.text.tertiary
                }
            };

            function e9({
                connectionId: e,
                spaceId: t,
                error: o
            }) {
                let a = (0, n(533992).v3)(),
                    s = function({
                        connectionId: e,
                        spaceId: t,
                        error: r
                    }) {
                        let i = {};
                        return void 0 !== e && (i.connectionId = e), void 0 !== t && (i.spaceId = t), void 0 !== r && (i.error = r), (0, n(758654).Gm)({
                            url: n(168962).JZ.mcpOAuthComplete,
                            query: i
                        })
                    }({
                        connectionId: e,
                        spaceId: t,
                        error: o
                    });
                return (0, r.useEffect)(() => {
                    e3({
                        url: s,
                        environment: a
                    })
                }, [a, s]), (0, i.jsxs)(n(585553).A, {
                    children: [(0, i.jsx)("div", {
                        style: e4.message,
                        children: (0, i.jsx)(n(109939).sA, {
                            id: "webApp.mcpOAuthComplete.redirecting.message",
                            defaultMessage: "Redirecting to your Notion app…"
                        })
                    }), (0, i.jsx)(n(590422).Q, {
                        onClick: () => e3({
                            url: s,
                            environment: a
                        }),
                        style: e4.retryLink,
                        children: (0, i.jsx)(n(109939).sA, {
                            id: "webApp.mcpOAuthComplete.retryLink.message",
                            defaultMessage: "If you weren’t redirected, click here."
                        })
                    })]
                })
            }

            function e3({
                url: e,
                environment: t
            }) {
                (0, n(884015).e)({
                    url: e,
                    environment: t
                })
            }
            let e1 = {
                style0: {
                    color: n(632079).Tj.text.primary
                },
                style1: {
                    maxWidth: 300,
                    textAlign: "center",
                    textDecoration: "underline",
                    color: n(632079).Tj.text.tertiary
                },
                style2: {
                    maxWidth: 300,
                    textAlign: "center",
                    textDecoration: "underline",
                    color: n(632079).oZ.uiGray
                }
            };

            function e7({
                redirect: e,
                callbackType: t
            }) {
                let o = (0, n(533992).v3)();
                return (0, r.useEffect)(() => {
                    e2({
                        redirect: e,
                        environment: o,
                        callbackType: t
                    })
                }, [o, e, t]), (0, i.jsxs)(n(585553).A, {
                    children: [(0, i.jsx)("div", {
                        style: e1.style0,
                        children: "nativemailredirect" === t ? (0, i.jsx)(n(109939).sA, {
                            id: "webApp.redirectingToMailDesktop.message",
                            defaultMessage: "Redirecting to your Notion Mail app…"
                        }) : "nativecalendarredirect" === t ? (0, i.jsx)(n(109939).sA, {
                            id: "webApp.redirectingToCalendarDesktop.message",
                            defaultMessage: "Redirecting to your Notion Calendar app…"
                        }) : (0, i.jsx)(n(109939).sA, {
                            defaultMessage: "Redirecting to your Notion app…",
                            id: "webApp.redirectingToDesktop.message"
                        })
                    }), (0, i.jsx)(n(590422).Q, {
                        onClick: () => e2({
                            redirect: e,
                            environment: o,
                            callbackType: t
                        }),
                        style: e1.style1,
                        children: (0, i.jsx)(n(109939).sA, {
                            defaultMessage: "If you weren’t redirected, click here.",
                            id: "webApp.redirectingToDesktop.directLink.message"
                        })
                    }), (0, i.jsx)(n(590422).Q, {
                        href: e,
                        style: e1.style2,
                        children: (0, i.jsx)(n(109939).sA, {
                            defaultMessage: "Or, continue in your browser",
                            id: "webApp.redirectingToDesktop.continueInBrowser.message"
                        })
                    })]
                })
            }

            function e2({
                redirect: e,
                environment: t,
                callbackType: r
            }) {
                (0, n(884015).e)({
                    url: e,
                    environment: t,
                    callbackType: r
                })
            }

            function e6({
                url: e,
                queryParams: t
            }) {
                let {
                    navigate: o
                } = (0, r.useContext)(n(44894).E), a = (0, n(533992).v3)(), s = (0, r.useRef)(!1);
                return (0, r.useEffect)(() => {
                    s.current || (s.current = !0, t && (0, n(537473).I)({
                        currentUserId: void 0,
                        params: t
                    }), o({
                        environment: a,
                        url: e,
                        redirect: !0
                    }))
                }, [a, t, e, o]), (0, i.jsx)(n(515487).r, {})
            }
            let te = (0, n(815048)._h)(new(n(815048)).O2("OpenExternal", () => n.e(62370).then(n.bind(n, 71325))), e => e.OpenExternal);

            function tt() {
                let {
                    navigate: e
                } = (0, r.useContext)(n(44894).E), t = (0, n(533992).v3)(), o = (0, n(682985).O$)(t.RouterStore), {
                    isStatsigReady: a,
                    isFeatureEnabled: s
                } = (0, n(474299).O)("workers"), {
                    isStatsigReady: l,
                    isFeatureEnabled: d
                } = (0, n(474299).O)("workers_syncs"), {
                    isStatsigReady: c,
                    isFeatureEnabled: u
                } = (0, n(474299).O)("admin_unified_account_view"), {
                    isStatsigReady: p,
                    isFeatureEnabled: m
                } = (0, n(474299).O)("slippery_slope_set_up_section"), {
                    isStatsigReady: b,
                    isFeatureEnabled: w
                } = (0, n(474299).O)("agent_skills_page");
                (0, r.useEffect)(() => {
                    !n(986939).A.isAdminMode && t.currentUser.isLoggedIn() && n(728372).default.waitUntil(() => {
                        let e = n(728372).AppStoreCurrentUserSettingsStore.state,
                            r = (null == e ? void 0 : e.isDefined()) ? ? !1;
                        if (e && r) {
                            let r = e.getSettings(),
                                i = null == r ? void 0 : r.disable_auto_set_timezone;
                            r && !i && n(448137).xw({
                                environment: t,
                                userSettingsStore: e
                            })
                        }
                        return r
                    })
                }, [t]), (0, r.useEffect)(() => {
                    function e() {
                        let {
                            RouterStore: e,
                            currentUser: r
                        } = t, i = r.id;
                        (0, n(249966).z)({
                            scrollAndSelection: (0, n(25483).R)(t),
                            historyId: e.state.id,
                            currentUserId: i
                        }), (0, n(874020).u)(!1)
                    }
                    return window.addEventListener("beforeunload", e), () => window.removeEventListener("beforeunload", e)
                }, [t]), (0, r.useEffect)(() => {
                    function e(e) {
                        var r, i, o;
                        (0, n(977851).a)({
                            currentUserId: null == (r = e.state) ? void 0 : r.currentUserId,
                            id: null == (i = e.state) ? void 0 : i.id,
                            url: null == (o = e.state) ? void 0 : o.url
                        }, t)
                    }
                    return window.addEventListener("popstate", e), () => window.removeEventListener("popstate", e)
                }, [t]), (0, n(383953).l)(() => {
                    var r, i, o, a, s, l;
                    null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (r = n(775657).electronApi.onNavigate) || null == (i = r.addListener) || i.call(r, (r, i) => {
                        if ("string" != typeof i && i.deduplicationID) {
                            let e = i.deduplicationID;
                            if (h === e) return void n(773352).log({
                                level: "warning",
                                from: "electronActions",
                                type: "duplicateOnNavigateObjectDetected"
                            });
                            h = e
                        }(n => (function({
                            url: e,
                            environment: t,
                            navigate: n
                        }) {
                            "string" == typeof e ? e8({
                                url: e,
                                clearHistory: !1,
                                showWeb: !1,
                                environment: t,
                                navigate: n
                            }) : e8({
                                url: e.url,
                                clearHistory: !1,
                                showWeb: !1,
                                environment: t,
                                loadOrigin: e.loadOrigin,
                                navigate: n
                            })
                        })({
                            url: n,
                            environment: t,
                            navigate: e
                        }))(i)
                    }), null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (o = n(775657).electronApi.onOpenSettings) || null == (a = o.addListener) || a.call(o, (e, t) => tn(t)), (0, n(874020).u)(!0), null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (s = n(775657).electronApi.newWindow) || null == (l = s.addListener) || l.call(s, (n, r) => {
                        e({
                            environment: t,
                            url: r,
                            openInNew: "tab"
                        })
                    })
                }), (0, r.useEffect)(() => {
                    t.mobileNative && t.mobileNative.subscribeToOpenLink((n, r, i) => e8({
                        url: n,
                        clearHistory: r,
                        showWeb: i,
                        environment: t,
                        navigate: e
                    }))
                }, [t, e]), (0, r.useEffect)(() => {
                    var e;
                    if ("root" !== o.route.name && "page" !== o.route.name && "space" !== o.route.name) {
                        if ("blank" === o.route.name && (null == (e = o.historyState) ? void 0 : e.index) === 0) {
                            n(989962).isPrewarmedTabLoadSidebarEnabled && n(728372).default.setPageRendered();
                            return
                        }
                        n(266130).setInitialRenderCompleted(), n(728372).default.setPageRendered()
                    }
                }, [o]), (0, r.useEffect)(() => {
                    t.currentUser.isLoggedIn() || "page" === o.route.name || "space" === o.route.name || n(884353).u4({
                        device: t.device,
                        event: {
                            facebook: {
                                eventName: "PageView",
                                data: {
                                    content_name: window.location.href
                                }
                            },
                            google: {
                                eventName: "pageView",
                                path: window.location.pathname
                            }
                        },
                        cookieService: t.cookieService
                    })
                }, [t.cookieService, t.currentUser, t.device, o.route.name]), (0, r.useEffect)(() => {
                    let e = n(728372).AppStoreCurrentUserSettingsStore.state;
                    t.currentUser.isLoggedIn() && e && function(e, t) {
                        let r = (0, n(884353).zD)(),
                            i = (0, n(884353).mS)();
                        if (!r || !i) return;
                        let o = {};
                        i && (o.fbp = i), r && (o.click_ids = r), (0, n(377796).createAndCommit)({
                            userAction: "userSettingsActions.persistAdClick",
                            environment: e,
                            canUndo: !0,
                            cellTarget: "main",
                            perform: e => {
                                e.postSubmitCallbacks.push(e => {
                                    e || ((0, n(884353).uK)(), (0, n(884353).fq)())
                                }), (0, n(862759).m)({
                                    userSettingsStore: t,
                                    data: o,
                                    transaction: e
                                })
                            }
                        })
                    }(t, e)
                }, [t]);
                let S = (0, n(533992).Y0)();
                if (S.isNative && n(132702).L7[o.route.name]) return (0, i.jsx)(te, {});
                if (n(580409).RouteRegistry.isFrameworkRoute(o.route.name)) return (0, i.jsx)(n(970600).H, {
                    fallback: (0, i.jsx)(n(29244).o, {
                        route: {
                            name: "notFound"
                        },
                        publicPageData: void 0
                    }),
                    route: o.route
                });
                if ("front" === o.route.name) return (0, i.jsx)(e_, {
                    preventFrontRedirect: o.route.alreadyRedirected
                });
                if ("root" === o.route.name) return (0, i.jsx)(v, {
                    route: o.route
                });
                if ("nativeRedirect" === o.route.name || "nativeMailRedirect" === o.route.name || "nativeCalendarRedirect" === o.route.name) return (0, i.jsx)(e7, {
                    redirect: o.route.redirect,
                    callbackType: "nativeMailRedirect" === o.route.name ? "nativemailredirect" : "nativeCalendarRedirect" === o.route.name ? "nativecalendarredirect" : "nativeredirect"
                });
                if ("mcpOAuthComplete" === o.route.name) return (0, i.jsx)(e9, {
                    connectionId: o.route.connectionId,
                    spaceId: o.route.spaceId,
                    error: o.route.error
                });
                if ("login" === o.route.name) return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(n(298823).Q, {}), (0, i.jsx)(n(901240).HQ, {
                        isSignup: !1,
                        email: o.route.email,
                        redirectURL: o.route.redirectURL
                    })]
                });
                if ("login/calendar" === o.route.name || "login/mail" === o.route.name || "login/ai" === o.route.name) return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(n(298823).Q, {}), (0, i.jsx)(n(901240).HQ, {
                        isSignup: !1,
                        email: o.route.email,
                        redirectURL: o.route.redirectURL,
                        addAnotherAccount: !!o.route.addAnotherAccount
                    })]
                });
                if ("addAnotherAccount" === o.route.name) return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(n(298823).Q, {}), (0, i.jsx)(eR, {
                        redirectURL: o.route.redirectURL
                    })]
                });
                if ("desktopEmailConfirm" === o.route.name) return (0, i.jsx)(eC, {});
                if ("teamsInvite" === o.route.name) {
                    let {
                        teamId: e
                    } = o.route;
                    return n(649807).WO(t, {
                        teamId: e
                    }), (0, i.jsx)(e0, {
                        teamId: e,
                        renderLoading: () => (new(n(681735)).h(t, {
                            table: n(832375).yKj,
                            id: e
                        }).load(), null)
                    })
                }
                if ("signup" === o.route.name) return (0, i.jsx)(n(901240).HQ, {
                    isSignup: !0,
                    email: o.route.email,
                    referrer: o.route.referrer
                });
                if ("signup/calendar" === o.route.name || "signup/mail" === o.route.name || "signup/ai" === o.route.name) return (0, i.jsx)(n(901240).HQ, {
                    isSignup: !0,
                    email: o.route.email,
                    referrer: o.route.referrer,
                    redirectURL: o.route.redirectURL,
                    addAnotherAccount: !!o.route.addAnotherAccount
                });
                if ("unsubscribe" === o.route.name) {
                    let e = o.route.payload;
                    return (0, i.jsx)(eI, {
                        payload: e
                    })
                }
                if ("onboarding" === o.route.name) return (0, i.jsx)(eV, {});
                if ("upcomingInvoice" === o.route.name || "invoiceById" === o.route.name) return (0, i.jsx)(n(18677).Y, {
                    route: o.route
                });
                if ("settingsConsoleOrganization" === o.route.name)
                    if (t.currentUser.isLoggedIn()) return (0, i.jsx)(n(266004)._, {
                        organizationId: o.route.organizationId,
                        tabRoute: o.route.tabRoute,
                        properties: o.route.properties,
                        params: o.route.params
                    });
                    else {
                        let e = (0, n(269577).re)({
                                organizationId: o.route.organizationId,
                                tabRoute: o.route.tabRoute,
                                properties: o.route.properties,
                                queryParams: o.route.params
                            }),
                            t = n(758654).Gm({
                                url: `${n(986939).A.domainBaseUrl}${n(168962).JZ.login}`,
                                query: {
                                    redirectURL: e
                                }
                            });
                        return (0, i.jsx)(e6, {
                            url: t
                        })
                    }
                if (o.route.name, o.route.name, "admin" === o.route.name && n(986939).A.isAdminMode) return (0, i.jsx)(n(672580).c, {});
                if ("adminSection" === o.route.name && n(986939).A.isAdminMode) {
                    let {
                        section: e
                    } = o.route;
                    return (0, i.jsx)(n(986198).P, {
                        section: e
                    })
                }
                if ("adminSyncsHome" === o.route.name && n(986939).A.isAdminMode) {
                    let {
                        spaceId: e,
                        email: t,
                        syncId: n
                    } = o.route;
                    return (0, i.jsx)(f, {
                        spaceId: e,
                        email: t,
                        syncId: n
                    })
                }
                if ("adminSyncsDetail" === o.route.name && n(986939).A.isAdminMode) {
                    let {
                        spaceId: e,
                        syncId: t
                    } = o.route;
                    return (0, i.jsx)(g, {
                        spaceId: e,
                        syncId: t
                    })
                }
                if ("adminWorkersHome" === o.route.name && n(986939).A.isAdminMode) {
                    let {
                        spaceId: e,
                        email: t
                    } = o.route;
                    return (0, i.jsx)(n(303325).b, {
                        spaceId: e,
                        email: t
                    })
                }
                if ("adminUnifiedAccountView" === o.route.name && n(986939).A.isAdminMode) return c ? u ? (0, i.jsx)(n(459154).F, {}) : (0, i.jsx)(e6, {
                    url: n(168962).JZ.notFound,
                    queryParams: void 0
                }) : (0, i.jsx)(n(515487).r, {});
                if ("adminUnifiedWorkspaceView" === o.route.name && n(986939).A.isAdminMode) return (0, i.jsx)(n(434914).V, {});
                if ("adminWorkersDetail" === o.route.name && n(986939).A.isAdminMode) {
                    let {
                        spaceId: e,
                        workerId: t
                    } = o.route;
                    return (0, i.jsx)(n(463279).r, {
                        spaceId: e,
                        workerId: t
                    })
                }
                if ("adminListData" === o.route.name) {
                    let {
                        category: e
                    } = o.route;
                    if (n(986939).A.isAdminMode) return (0, i.jsx)(n(81185).u, {
                        category: e
                    })
                }
                if ("adminPermissions" === o.route.name && n(986939).A.isAdminMode) return (0, i.jsx)(n(793656).b, {});
                if ("adminSingleRecord" === o.route.name && n(986939).A.isAdminMode) {
                    let {
                        id: e,
                        table: t
                    } = o.route;
                    return (0, i.jsx)(n(368252).f, {
                        table: t,
                        id: e
                    })
                }
                if ("adminObject" === o.route.name && n(986939).A.isAdminMode) {
                    let {
                        id: e
                    } = o.route;
                    return (0, i.jsx)(n(874378).j, {
                        objectId: e
                    })
                }
                if ("oauthAuthorization" === o.route.name) {
                    let {
                        responseType: e,
                        redirectUri: t,
                        integrationId: n,
                        state: r,
                        owner: a,
                        userId: s,
                        spaceId: l
                    } = o.route;
                    return (0, i.jsx)(eH, {
                        responseType: e,
                        redirectUri: t,
                        integrationId: n,
                        state: r,
                        owner: a,
                        userId: s,
                        spaceId: l
                    })
                }
                if ("passkeyAuthVerify" === o.route.name) {
                    let {
                        callbackType: e
                    } = o.route;
                    return (0, i.jsx)(eL, {
                        callbackType: e
                    })
                }
                if ("notionCalendarAuthorization" === o.route.name) {
                    let {
                        csrf: e,
                        calendarCsrf: t,
                        redirectUri: n,
                        spaceId: r,
                        state: a
                    } = o.route;
                    return (0, i.jsx)(eA, {
                        csrf: e,
                        calendarCsrf: t,
                        redirectUri: n,
                        spaceId: r,
                        state: a
                    })
                }
                if ("globalOauthPostLogin" === o.route.name) {
                    let {
                        clientId: e,
                        redirectUri: t,
                        state: n,
                        responseType: r,
                        scope: a
                    } = o.route;
                    return (0, i.jsx)(eY, {
                        clientId: e,
                        redirectUri: t,
                        csrfState: n,
                        responseType: r,
                        scope: a
                    })
                }
                if ("mcpOAuthCallback" === o.route.name) {
                    let {
                        code: e,
                        state: t,
                        error: n,
                        error_description: r,
                        error_uri: a
                    } = o.route;
                    return (0, i.jsx)(eZ, {
                        route: {
                            name: "mcpOAuthCallback",
                            code: e,
                            state: t,
                            error: n,
                            error_description: r,
                            error_uri: a
                        }
                    })
                }
                if ("nboOutreachOAuthCallback" === o.route.name) {
                    let {
                        code: e,
                        state: t,
                        error: n
                    } = o.route;
                    return (0, i.jsx)(eW, {
                        route: {
                            name: "nboOutreachOAuthCallback",
                            code: e,
                            state: t,
                            error: n
                        }
                    })
                }
                if ("passkeyRegistrationVerification" === o.route.name) {
                    let {
                        callbackType: e,
                        csrfToken: n,
                        attemptId: r,
                        options: a
                    } = o.route;
                    return (0, i.jsx)(eM, {
                        environment: t,
                        callbackType: e,
                        csrfToken: n,
                        attemptId: r,
                        options: a
                    })
                }
                if ("initiateExternalAuthentication" === o.route.name) {
                    let {
                        notion_user_id: e,
                        notion_workspace_id: t,
                        notion_last_visited_url: n,
                        notion_authorization_code: r,
                        external_object_instance_block_id: a,
                        callback_type: s,
                        integration_id: l,
                        redirectToAuth: d
                    } = o.route;
                    return (0, i.jsx)(ex, {
                        notion_user_id: e,
                        notion_workspace_id: t,
                        notion_last_visited_url: n,
                        notion_authorization_code: r,
                        external_object_instance_block_id: a,
                        callback_type: s,
                        integration_id: l,
                        redirectToAuth: d
                    })
                }
                if ("initiateExternalAuthenticationFromDesktop" === o.route.name) {
                    let {
                        redirectUri: e
                    } = o.route;
                    if (t.currentUser.isLoggedIn()) return (0, i.jsx)(eP, {
                        redirectUri: e
                    }); {
                        let t = n(758654).Gm({
                                url: `${n(986939).A.domainBaseUrl}${n(168962).JZ.initiateExternalAuthenticationFromDesktop}`,
                                query: {
                                    redirectUri: e
                                }
                            }),
                            r = n(758654).Gm({
                                url: `${n(986939).A.domainBaseUrl}${n(168962).JZ.login}`,
                                query: {
                                    redirectURL: t
                                }
                            });
                        return n(13565).TR(), (0, i.jsx)(e6, {
                            url: r
                        })
                    }
                }
                if ("myIntegrations" === o.route.name) return (0, i.jsx)(e6, {
                    url: `${n(168962).JZ.creatorProfileIntegrations}/public`
                });
                if ("inAppTemplateSubmission" === o.route.name) return (0, i.jsx)(e6, {
                    url: n(168962).JZ.creatorProfileTemplates
                });
                if ("inAppTemplateCreatorSubmission" === o.route.name) return (0, i.jsx)(e6, {
                    url: n(168962).JZ.creatorProfile
                });
                if ("creatorProfile" === o.route.name || "creatorProfileTemplates" === o.route.name || "creatorProfileCustomAgents" === o.route.name || "creatorProfileIntegrations" === o.route.name || "creatorProfilePersonalIntegrations" === o.route.name || "creatorProfileAnalytics" === o.route.name || "creatorProfileCoupons" === o.route.name || "creatorProfileServices" === o.route.name || "creatorProfileLearn" === o.route.name || "creatorProfileSettings" === o.route.name || "creatorProfileInternalIntegrations" === o.route.name || "creatorProfilePublicIntegrationsTemp" === o.route.name)
                    if (t.currentUser.isLoggedIn()) {
                        if ("pointer" in o.route) {
                            let e = "publish" in o.route && !!o.route.publish,
                                t = "lab" in o.route && !!o.route.lab;
                            return (0, i.jsx)(n(660456).q, {
                                publish: e,
                                lab: t,
                                botOrIntegrationPointer: o.route.pointer
                            })
                        }
                        return (0, i.jsx)(n(660456).q, {
                            publish: !1,
                            lab: !1,
                            botOrIntegrationPointer: void 0
                        })
                    } else {
                        let e = n(758654).Gm({
                                url: `${n(168962).JZ[o.route.name]}`
                            }),
                            t = n(758654).Gm({
                                url: `${n(986939).A.domainBaseUrl}${n(168962).JZ.login}`,
                                query: {
                                    redirectURL: e
                                }
                            });
                        return (0, i.jsx)(e6, {
                            url: t
                        })
                    }
                if ("localizedTemplates" === o.route.name)
                    if (t.currentUser.isLoggedIn()) return (0, i.jsx)(eT, {});
                    else {
                        let e = n(758654).Gm({
                                url: `${n(168962).JZ[o.route.name]}`
                            }),
                            t = n(758654).Gm({
                                url: `${n(986939).A.domainBaseUrl}${n(168962).JZ.login}`,
                                query: {
                                    redirectURL: e
                                }
                            });
                        return (0, i.jsx)(e6, {
                            url: t
                        })
                    }
                if ("studentGroupSignup" === o.route.name) return (0, i.jsx)(n(620174).V, {});
                if ("startupsApplication" === o.route.name) return (0, i.jsx)(n(941798).Z, {});
                if ("startupsApplicationForm" === o.route.name) return (0, i.jsx)(n(941798).R, {
                    formType: "startups"
                });
                if ("smbsApplication" === o.route.name) return (0, i.jsx)(n(941798).R, {
                    formType: "smb"
                });
                if ("lennyApplication" === o.route.name) return (0, i.jsx)(n(547664).v, {});
                if ("creatorProgramApplication" === o.route.name) return (0, i.jsx)(n(872381).X, {});
                if ("githubStudentPackHome" === o.route.name) return (0, i.jsx)(n(876808).S, {});
                if ("notFound" === o.route.name) return (0, i.jsx)(n(29244).o, {
                    route: o.route,
                    publicPageData: void 0
                });
                if ("modal" === o.route.name && !t.currentUser.isLoggedIn() && (o.route.templateGalleryItem || o.route.projectManagementLaunch)) {
                    let e = {};
                    return o.route.projectManagementLaunch ? e.tg = "gallery" : o.route.templateGalleryItem && (e.tg = o.route.templateGalleryItem), (0, i.jsx)(e6, {
                        url: n(168962).JZ.login,
                        queryParams: e
                    })
                }
                if ("ekmError" === o.route.name)
                    if (!t.currentUser.isLoggedIn()) return (0, i.jsx)(e6, {
                        url: n(168962).JZ.login
                    });
                    else return (0, i.jsx)(n(29244).o, {
                        route: o.route,
                        publicPageData: void 0
                    });
                if ("requiredSamlError" === o.route.name)
                    if (!t.currentUser.isLoggedIn()) return (0, i.jsx)(e6, {
                        url: n(168962).JZ.login
                    });
                    else return (0, i.jsx)(e$, {});
                if ("chat" === o.route.name && !t.currentUser.isLoggedIn()) {
                    let e = (0, n(366367).X_)(o.route),
                        t = (0, n(758654).Gm)({
                            url: `${n(986939).A.domainBaseUrl}${n(168962).JZ.login}`,
                            query: {
                                redirectURL: e
                            }
                        });
                    return (0, i.jsx)(e6, {
                        url: t
                    })
                }
                if ("meet" === o.route.name && !t.currentUser.isLoggedIn()) {
                    let e = n(168962).JZ.meet,
                        t = (0, n(758654).Gm)({
                            url: `${n(986939).A.domainBaseUrl}${n(168962).JZ.login}`,
                            query: {
                                redirectURL: e
                            }
                        });
                    return (0, i.jsx)(e6, {
                        url: t
                    })
                }
                if ("agent" === o.route.name && !t.currentUser.isLoggedIn()) {
                    let e = (0, n(453573).Lm)({
                            workflowId: o.route.workflowId,
                            params: {
                                workflowViewType: o.route.workflowViewType,
                                workflowViewId: o.route.workflowViewId,
                                workflowPrompt: o.route.workflowPrompt,
                                chatThreadId: o.route.chatThreadId,
                                agentChatThreadId: o.route.agentChatThreadId
                            }
                        }),
                        t = (0, n(758654).Gm)({
                            url: `${n(986939).A.domainBaseUrl}${n(168962).JZ.login}`,
                            query: {
                                redirectURL: e
                            }
                        });
                    return (0, i.jsx)(e6, {
                        url: t
                    })
                }
                if (("marketplace" === o.route.name || "gallery" === o.route.name) && !t.currentUser.isLoggedIn()) {
                    let e = (0, n(78831).YD)(n(986939).A, o.route),
                        t = (0, n(758654).Gm)({
                            url: `${n(986939).A.domainBaseUrl}${n(168962).JZ.login}`,
                            query: {
                                redirectURL: e
                            }
                        });
                    return (0, i.jsx)(e6, {
                        url: t
                    })
                }
                if ("quickSearch" === o.route.name) return (0, i.jsx)(eX, {});
                if ("meetingNotification" === o.route.name) return (0, i.jsx)(eD, {});
                if ("nbo" === o.route.name) return (0, i.jsx)(eB, {});
                if ("desktopNosey" === o.route.name) return (0, i.jsx)(ez, {});
                if ("agent" === o.route.name || "ai" === o.route.name || "setup" === o.route.name || "skills" === o.route.name)
                    if (t.currentUser.isLoggedIn()) {
                        if ("ai" === o.route.name && S.isPhone) {
                            let e = (0, n(758654).Gm)({
                                url: n(168962).JZ.home,
                                query: {
                                    [n(737869).P5]: n(548124).NEW_CHAT_THREAD_ID
                                }
                            });
                            return (0, i.jsx)(e6, {
                                url: e
                            })
                        }
                    } else {
                        let e = "agent" === o.route.name ? n(168962).JZ.login : (0, n(758654).Gm)({
                            url: `${n(986939).A.domainBaseUrl}${n(168962).JZ.login}`,
                            query: {
                                redirectURL: "setup" === o.route.name ? n(168962).JZ.setup : "skills" === o.route.name ? n(168962).JZ.skills : n(168962).JZ.ai
                            }
                        });
                        return (0, i.jsx)(e6, {
                            url: e
                        })
                    }
                if ("setup" === o.route.name) {
                    if (!p) return (0, i.jsx)(n(515487).r, {});
                    if (!m) return (0, i.jsx)(e6, {
                        url: n(168962).JZ.notFound,
                        queryParams: void 0
                    })
                }
                if ("skills" === o.route.name) {
                    if (!b) return (0, i.jsx)(n(515487).r, {});
                    if (!w) return (0, i.jsx)(e6, {
                        url: n(168962).JZ.notFound,
                        queryParams: void 0
                    })
                }
                if (("agent" === o.route.name || "chat" === o.route.name) && "activity" === o.route.workflowViewType) {
                    if ("agent" === o.route.name) {
                        let e = (0, n(453573).Lm)({
                            workflowId: o.route.workflowId,
                            params: {
                                workflowViewType: "chat",
                                workflowViewId: o.route.workflowViewId,
                                workflowPrompt: o.route.workflowPrompt,
                                chatThreadId: o.route.chatThreadId,
                                agentChatThreadId: o.route.agentChatThreadId
                            }
                        });
                        return (0, i.jsx)(e6, {
                            url: e
                        })
                    }
                    let e = {};
                    o.route.threadId && (e[n(737869).P5] = (0, n(4962).Xw)(o.route.threadId));
                    let t = (0, n(758654).Gm)({
                        url: "/chat",
                        query: e
                    });
                    return (0, i.jsx)(e6, {
                        url: t
                    })
                }
                if ("workers" === o.route.name || "worker" === o.route.name)
                    if (t.currentUser.isLoggedIn()) {
                        if (a && !s || l && !d) return (0, i.jsx)(e6, {
                            url: "notFound",
                            queryParams: void 0
                        })
                    } else {
                        let e = n(758654).Gm({
                                url: window.location.pathname + window.location.search
                            }),
                            t = n(758654).Gm({
                                url: `${n(986939).A.domainBaseUrl}${n(168962).JZ.login}`,
                                query: {
                                    redirectURL: e
                                }
                            });
                        return (0, i.jsx)(e6, {
                            url: t
                        })
                    }
                if ("workersCliLogin" === o.route.name) {
                    if (!t.currentUser.isLoggedIn()) {
                        let e = n(758654).Gm({
                                url: window.location.pathname + window.location.search
                            }),
                            t = n(758654).Gm({
                                url: `${n(986939).A.domainBaseUrl}${n(168962).JZ.login}`,
                                query: {
                                    redirectURL: e
                                }
                            });
                        return (0, i.jsx)(e6, {
                            url: t
                        })
                    }
                    let {
                        verificationCode: e
                    } = o.route;
                    return (0, i.jsx)(e5, {
                        verificationCode: e
                    })
                }
                return (o.route.name, "page" === o.route.name || "space" === o.route.name || "nativeTab" === o.route.name || "modal" === o.route.name || "chat" === o.route.name || "meet" === o.route.name || "agent" === o.route.name || "ai" === o.route.name || "setup" === o.route.name || "skills" === o.route.name || "marketplace" === o.route.name || "library" === o.route.name || "blank" === o.route.name || "workers" === o.route.name || "worker" === o.route.name || "softwareFactory" === o.route.name || "factory" === o.route.name || "onboardingAgentDebug" === o.route.name || "sharedChat" === o.route.name) ? (0, i.jsx)(eb, {
                    routerState: o
                }) : (0, i.jsx)(n(515487).r, {})
            }

            function tn(e) {
                n(599754).Ow({
                    currentPage: e
                })
            }
            let tr = (0, n(815048)._h)(new(n(815048)).O2("AppError", () => n.e(27326).then(n.bind(n, 219866))), e => e.AppError);

            function ti(e) {
                let {
                    children: t
                } = e, o = (0, n(533992).v3)(), a = (0, r.useCallback)(() => {
                    var e;
                    e = o, (0, n(471e3).I)({
                        environment: e
                    })
                }, [o]), s = (0, r.useMemo)(() => ({
                    clearSelection: a
                }), [a]);
                return (0, i.jsx)(n(766101).j.Provider, {
                    value: s,
                    children: t
                })
            }

            function to(e) {
                let {
                    children: t
                } = e, r = (0, n(682985).O$)(n(395364).A);
                return (0, i.jsx)(n(321958).j.Provider, {
                    value: r,
                    children: t
                })
            }

            function ta(e) {
                let {
                    children: t
                } = e, r = (0, n(533992).v3)(), o = (0, n(682985).K8)(() => (0, n(849584).y)(r, n(707785).A.state.estimatedKeyboardWebViewOverlap, n(707785).A.state.nativeBottomBarHeight), [r]);
                return (0, i.jsx)(n(571354).r.Provider, {
                    value: o,
                    children: t
                })
            }
            let ts = {
                display: "block",
                position: "fixed",
                visibility: "hidden",
                overflowY: "scroll",
                width: 20,
                height: 20
            };

            function tl(e) {
                let {
                    children: t
                } = e, [o, a] = (0, r.useState)(0), s = (0, r.useRef)(null), l = (0, n(960253).e)();
                return (0, r.useEffect)(() => {
                    let e = s.current;
                    if (!e) return;
                    let t = new ResizeObserver(e => {
                        let [t] = e, r = 20 - t.contentRect.width;
                        a(r), r !== n(190159).A.state && (n(190159).A.setState(r), n(997524).u7(l))
                    });
                    return t.observe(e), () => {
                        t.unobserve(e)
                    }
                }, [l]), (0, i.jsxs)(n(953075).w.Provider, {
                    value: o,
                    children: [t, (0, i.jsx)("div", {
                        style: ts,
                        ref: s
                    })]
                })
            }

            function td(e) {
                let {
                    children: t
                } = e, o = (0, n(533992).v3)(), a = (0, r.useCallback)(e => (function(e, t) {
                    if (n(707785).A.state.phase === n(707785).i.hidden && !(0, n(907620).T)("supportsNativeBottomBarOverlappingWebView")) return;
                    let {
                        WindowSizeStore: r
                    } = e, i = t.state.clientRect;
                    if (!i) return;
                    let o = t.state.elementRef.current;
                    if (o) {
                        let e = window.getComputedStyle(o).overflowY;
                        if ("auto" !== e && "scroll" !== e && "overlay" !== e) return
                    }
                    let a = r.state.height,
                        s = a - (0, n(849584).y)(e, n(707785).A.state.estimatedKeyboardWebViewOverlap, n(707785).A.state.nativeBottomBarHeight),
                        l = (0, n(435002).T)(t.state.elementRef) && (0, n(889351).z)(e) ? i.height : 0,
                        d = n(651748).A.getSize() > 0 && n(651748).A.find(e => e.isShown()) ? n(247800).j + 16 : 0;
                    return Math.max(Math.min(i.bottom, a) - s, l, 0) + d
                })(o, e), [o]);
                return (0, i.jsx)(n(396085).f.Provider, {
                    value: a,
                    children: t
                })
            }
            n(672577);
            let tc = {
                height: "100%"
            };

            function tu() {
                let e = (0, n(682985).O$)(n(83470).A);
                return (0, i.jsx)(n(556809).a, {
                    open: e.open,
                    overlayZIndex: 9999,
                    children: (0, i.jsx)(tp, {})
                })
            }

            function tp() {
                let e = (0, n(682985).O$)(n(83470).A),
                    {
                        targetRecordId: t
                    } = e,
                    r = (0, n(682985).K8)(() => void 0 !== t && !!n(817525).A.state[t], [t]);
                return e.open ? (0, i.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: 180,
                        padding: "18px 24px 20px",
                        textAlign: "center",
                        maxWidth: n(986939).A.isMobile ? "300px" : "100%"
                    },
                    children: [(0, i.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            fontSize: 14,
                            color: n(632079).Tj.text.secondary
                        },
                        children: [e.message, (0, i.jsx)(n(517334).k, {
                            style: {
                                marginInlineStart: 6
                            }
                        })]
                    }), r && t ? (0, i.jsx)(n(891160).A, {
                        targetRecordId: t,
                        style: {
                            marginTop: 10
                        }
                    }) : void 0]
                }) : null
            }

            function tm({
                children: e
            }) {
                let t = (0, n(533992).v3)(),
                    o = (0, n(960253).e)();
                (0, r.useEffect)(() => {
                    let {
                        mobileNative: e
                    } = t;
                    null == e || e.markTransitionReady({
                        environment: t,
                        type: "mount"
                    })
                }, [t]);
                let a = "light" === o ? n(828432).fRh : n(828432).Rsl,
                    s = (0, n(80384).kg)(),
                    l = (0, n(80384).n_)(),
                    d = (0, n(80384).lC)(),
                    c = (0, n(682985).K8)(() => {
                        var e;
                        let r = t.RouterStore.state.route;
                        return !!(null == (e = n(584257).A.state.preferences) ? void 0 : e.isVibrancyEnabled) || (0, n(411529).Em)(r.name)
                    }, [t]),
                    u = (0, n(682985).K8)(() => !n(986939).A.isMobile && n(561599).A.state.openModals.size > 0, []),
                    p = (0, n(960253).I)(() => ({
                        root: { ...(0, n(57461).xH)(n(849917).locale),
                            color: n(632079).Tj.text.primary,
                            WebkitFontSmoothing: "auto",
                            backgroundColor: c ? "rgba(0, 0, 0, 0)" : n(632079).Tj.background.primary,
                            transition: "height 0.1s ease",
                            ...s && l && d && {
                                height: `calc(100% - ${n(398879).ls}px)`
                            }
                        }
                    }), [s, l, d, c]);
                return (0, i.jsx)("div", {
                    style: p.root,
                    className: ["notion-app-inner", a].join(" "),
                    children: (0, i.jsx)(n(420793).y, {
                        children: (0, i.jsx)(ti, {
                            children: (0, i.jsx)(td, {
                                children: (0, i.jsx)(ta, {
                                    children: (0, i.jsx)(tl, {
                                        children: (0, i.jsx)(to, {
                                            children: (0, i.jsxs)(n(545028)._b, {
                                                children: [(0, i.jsx)("div", {
                                                    style: tc,
                                                    inert: u ? "true" : null,
                                                    children: e
                                                }), (0, i.jsx)(n(455852).A, {}), (0, i.jsx)(tu, {}), (0, i.jsx)(n(280996).b, {})]
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }
            let th = window.matchMedia("(prefers-contrast: more)");

            function tg(e) {
                return th.addEventListener("change", e), () => {
                    th.removeEventListener("change", e)
                }
            }

            function tf() {
                return th.matches
            }

            function tb(e) {
                return (0, n(83208).X)("nds_high_contrast_mode") ? (0, i.jsx)(tv, {
                    children: e.children
                }) : (0, i.jsx)(n(3755).N.Provider, {
                    value: "standard",
                    children: e.children
                })
            }

            function tv(e) {
                let t = (0, n(533992).v3)(),
                    {
                        preference: o,
                        isSettingsReady: a
                    } = (0, n(682985).K8)(() => ({
                        preference: (0, n(961489).Wu)(t),
                        isSettingsReady: (0, n(961489).rD)(t)
                    }), [t]),
                    s = (0, n(682985).K8)(() => n(584257).A.state.osHighContrastEnabled, []),
                    l = (0, r.useSyncExternalStore)(tg, tf),
                    d = function(e, t) {
                        switch (e) {
                            case "high":
                                return "high";
                            case "standard":
                                return "standard";
                            case "auto":
                                return t ? "high" : "standard"
                        }
                    }(o, s ? ? l);
                return (0, r.useEffect)(() => (document.body.setAttribute("data-contrast", d), "high" === d && n.e(76353).then(n.bind(n, 488074)), () => {
                    document.body.removeAttribute("data-contrast")
                }), [d]), (0, r.useEffect)(() => {
                    var e;
                    a && (null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (e = n(775657).electronApi.setContrastMode) || e.call(n(775657).electronApi, d))
                }, [d, a]), (0, i.jsx)(n(3755).N.Provider, {
                    value: d,
                    children: e.children
                })
            }
            let tw = {
                navigate: n(79266).navigate,
                navigateToExternalUrl: n(624621).L
            };

            function tS({
                environment: e,
                onMount: t
            }) {
                var s;
                let l, d = (0, r.useRef)(!1);
                (0, r.useEffect)(() => {
                    d.current || (d.current = !0, null == t || t())
                }, [t]), (0, r.useEffect)(() => {
                    n(986939).A.isAdminMode || console.log(`%c
	nnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
	nnnn                         nnnn
	nnnnnnn                          nnnn
	nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
	nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
	nnnnnnnn                           nnn
	nnnnnnnn    nnnnnnnn     nnnnnnn   nnn
	nnnnnnnn      nnnnnnn      nnn     nnn
	nnnnnnnn      nnnnnnnn     nnn     nnn
	nnnnnnnn      nnnnnnnnnn   nnn     nnn
	nnnnnnnn      nnn nnnnnnn  nnn     nnn
	nnnnnnnn      nnn  nnnnnnnnnnn     nnn
	nnnnnnnn      nnn   nnnnnnnnnn     nnn
	nnnnnnnn      nnn     nnnnnnnn     nnn
	nnnnnnnn      nnn      nnnnnnn     nnn
	nnnnnnnn    nnnnnnnn    nnnnnn     nnn
	  nnnnnn                           nnn
		nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn		We're hiring!
		  nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn		notion.so/careers

	“yeah, I would probably eat a lemon for one hundred dollars” -- Ivan Zhao (2023-07-14)
				 `, "font-family: monospace")
                }, []);
                let u = r.Fragment,
                    p = (0, i.jsx)(tt, {});
                return (0, i.jsx)(u, {
                    children: (0, i.jsx)(n(826863).aw, {
                        value: e,
                        children: (0, i.jsx)(n(694220).k, {
                            children: (0, i.jsx)(n(858897).V, {
                                children: (0, i.jsxs)(tb, {
                                    children: [(0, i.jsx)(n(109939).Dk, {
                                        defaultLocale: "en-US",
                                        locale: n(849917).locale,
                                        messages: n(849917).D,
                                        children: (0, i.jsx)(c, {
                                            children: (0, i.jsx)(n(44894).a, {
                                                value: tw,
                                                children: (0, i.jsx)(a, { ...(s = e.device, l = n(986939).A.isMobile ? 10 : 50, s.ramSizeInGB && (l = Math.floor(2 * s.ramSizeInGB)), {
                                                        maxPreferredIFrames: l
                                                    }),
                                                    children: (0, i.jsx)(n(337336).K, {
                                                        fallback: e => (0, i.jsx)(tr, { ...e
                                                        }),
                                                        from: "Router",
                                                        type: "AppCrash",
                                                        children: (0, i.jsxs)(o, {
                                                            id: "app",
                                                            targetRenderPhase: "mount",
                                                            children: [(0, i.jsx)(n(164305).T, {}), (0, i.jsx)(tm, {
                                                                children: p
                                                            })]
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }), (0, i.jsx)(m, {})]
                                })
                            })
                        })
                    })
                })
            }
        },
        694693: (e, t, n) => {
            n.r(t), n.d(t, {
                initCurrentPageProviders: () => r
            });

            function r() {
                (0, n(138375).cL)({
                    getMainEditorBlockStore: () => n(728372).AppStoreMainEditorCurrentBlockStore.state,
                    getPeekOverrideBlockStore() {
                        let e = n(475097).default.state;
                        if (e.open && n(447036).m3()) return e.targetStore
                    }
                })
            }
        },
        733561: (e, t, n) => {
            n.r(t), n.d(t, {
                setDefaultEventPropertiesFetcher: () => i
            }), n(944114), n(898992), n(354520), n(672577), n(581454), n(737550);
            let r = new(n(815048)).O2("isTemplate", async () => await n.e(6993).then(n.bind(n, 835808)));

            function i(e) {
                n(700511).h.setDefaultEventPropertiesFetcher((t, n) => o(e, t, n))
            }
            async function o(e, t, r) {
                let i, o, l = await (0, n(119324).w)(e),
                    {
                        preboot: p,
                        dontWait: m
                    } = r || {},
                    h = "currentUser" in e;
                m || p || !h || await a(e);
                let g = !m && h ? await (0, n(468673).J)(e) : void 0,
                    f = (0, n(450808).e)(),
                    b = n(728372).AppStoreCurrentUserStore.state,
                    v = n(728372).AppStoreSidebarSpaceStore.state,
                    w = (0, n(663250).getMobileNativeDeviceInfo)(),
                    S = (0, n(8814).getMobileNativeSessionInfo)(),
                    y = await (0, n(70977).getDesktopDeviceInfo)(),
                    A = await c(e, t),
                    I = await s(),
                    x = await u(e),
                    P = null == g ? void 0 : g.space_id;
                return {
                    data: { ...(i = n(728372).AppStoreSidebarSpaceViewStore.state) && i.isDefined() ? {
                            notify_desktop: i.getNotifyDesktop(),
                            notify_email: i.getNotifyEmail(),
                            notify_mobile: i.getNotifyMobile(),
                            notify_email_digest: i.getNotifyEmailDigest()
                        } : {},
                        ...l,
                        ...g,
                        ...I,
                        ...(0, n(937324).U)(),
                        ... function() {
                            let e = n(728372).AppStoreMainEditorCurrentBlockStore.state;
                            if (e) {
                                let t = (0, n(297311).U)(e);
                                if (t) return {
                                    team_id: (0, n(4962).Xw)(t.id)
                                }
                            }
                            return {}
                        }(),
                        ... function() {
                            let e = n(728372).AppStoreSidebarSpaceViewStore.state;
                            if (!e || !e.isDefined()) return {};
                            let t = (0, n(828560).XM)(e);
                            return "not-ready" === t ? {} : {
                                is_slippery_slope_sidebar_enabled: t
                            }
                        }(),
                        ... function() {
                            let e = n(41901).A.state;
                            if (e) return {
                                queryId: e.queryId
                            }
                        }(),
                        client_initialization_id: n(810452).d,
                        ... function(e) {
                            let {
                                userId: t,
                                spaceId: r
                            } = e;
                            if (!t || !r) return;
                            let i = (0, n(601952).g)({
                                userId: t,
                                spaceId: r
                            });
                            if (i) return {
                                notion_session_id: i.id,
                                notion_session_start_ts: i.sessionStartTime,
                                tab_id: (0, n(13565).x0)(),
                                tab_count: (0, n(677147).D)()
                            }
                        }({
                            userId: null == b ? void 0 : b.id,
                            spaceId: null == v ? void 0 : v.id
                        }),
                        ...y,
                        ...w,
                        ...S,
                        ...f,
                        ...A,
                        ...(n(218744).default.state.isLoaded && (o = n(218744).default.getStatsigExperimentsMap()), {
                            experiments: o,
                            experimentStoreLoaded: n(218744).default.state.isLoaded
                        }),
                        ...{
                            unique_event_marker: function(e) {
                                let {
                                    spaceId: t,
                                    userId: r,
                                    deviceId: i,
                                    eventName: o
                                } = e, a = (0, n(4962).gB)(`${t}:${r}:${i}:${o}`), s = d[a], l = Date.now();
                                if (!s) return d[a] = l, !0;
                                let c = new Date(s),
                                    u = new Date(l);
                                if (c.getUTCDate() !== u.getUTCDate()) return d[a] = l, !0
                            }({
                                spaceId: P,
                                userId: (0, n(89006).m)(),
                                deviceId: l.device_id,
                                eventName: t
                            })
                        },
                        ... function() {
                            if (navigator.connection) return {
                                net_downlink: navigator.connection.downlink,
                                net_effective_type: navigator.connection.effectiveType,
                                net_rtt: navigator.connection.rtt,
                                net_save_data: navigator.connection.saveData
                            }
                        }(),
                        ...{
                            hardware_concurrency: navigator.hardwareConcurrency,
                            hardware_memory: navigator.deviceMemory
                        },
                        ...x,
                        default_event_properties_initialized: !0
                    },
                    spaceId: P
                }
            }
            async function a(e) {
                e.currentUser.isLoggedIn() && n(728372).AppStoreMainEditorCurrentBlockStore.state && (0, n(328765).S)() && await n(105692).subscriptionDataStoreInstance.waitUntilLoaded(), n(453997).default.shouldRefresh(e.currentUser.id) && await (0, n(56994).E)(e)
            }
            async function s() {
                let e = n(475097).default.state,
                    t = n(447036).m3(),
                    i = (0, n(330870).a)();
                if (i) {
                    let o, a = n(862085).i0(i).map(({
                            permissionItem: e
                        }) => e),
                        s = a.find(e => "public_permission" === e.type),
                        d = a.find(e => "space_permission" === e.type),
                        c = a.filter(e => p(e) && (0, n(642157).h9)(e.role)),
                        u = a.filter(e => p(e) && (0, n(642157).p2)(e.role)),
                        m = await l(i),
                        h = !!m && m.length > 0,
                        g = e.open ? void 0 : n(728372).default.state.currentCollectionViewStore,
                        {
                            publicPageData: f
                        } = n(686494).A.state,
                        b = await r.load(),
                        v = i.getCopiedFromPointer();
                    return o = a.some(n(642157).Ny) ? "deleted_from_trash" : i.pathIsDead() ? "in_trash" : "live", {
                        page_id: i.id,
                        page_public_role: s ? s.role : n(152848).v,
                        page_space_role: d ? d.role : n(152848).v,
                        page_all_collaborator_count: u.length + c.length,
                        page_editor_collaborator_count: u.length,
                        page_read_only_collaborator_count: c.length,
                        page_content_count: i.getContentLength(),
                        page_current_user_role: i.getRole(),
                        page_is_peek: t,
                        page_copied_from: v ? (0, n(4962).ot)(v.id) : void 0,
                        page_is_notion_template: !!v && b.isTemplate(v),
                        page_is_public_share_link: s ? s.is_public_share_link : void 0,
                        page_is_site: s ? s.is_site : void 0,
                        page_is_template: i.isTemplate(),
                        page_is_prepopulated: h,
                        page_prepopulated_template_ids: m,
                        page_is_database: i.isCollectionView(),
                        page_view_type: g ? g.getType() : void 0,
                        page_user_has_explicit_access: f ? f.userHasExplicitAccess : n(152848).v,
                        page_deletion_status: o
                    }
                }
            }
            async function l(e) {
                let t = await r.load(),
                    i = (0, n(399348).f)(e, {
                        includeTeamHomeFeed: !1,
                        includeDataSources: !1
                    }),
                    o = [];
                return n(381453).Bq(i.map(e => {
                    if (!(e instanceof n(970831).B)) return;
                    let r = e.getCopiedFromPointer();
                    return r && t.isTemplate(r) && o.push(r.id), o
                }).filter(n(722371).O9))
            }
            let d = {};
            async function c(e, t) {
                return {
                    is_user_consent_to_track: await (0, n(128190).hasPermissionForThirdPartyService)("amplitude", e),
                    tid: (0, n(41225).B6)(t)
                }
            }
            async function u(e) {
                return function({
                    id: e,
                    cookie_value: t
                }) {
                    return {
                        experiment_device: {
                            id: e,
                            cookie_value: t
                        }
                    }
                }({
                    id: await (0, n(128190).getExperimentDeviceId)(e),
                    cookie_value: await (0, n(128190).getCookie)(e, "notion_experiment_device_id")
                })
            }

            function p(e) {
                return "user_permission" === e.type
            }
        },
        754518: (e, t, n) => {
            n.r(t), n.d(t, {
                initFeatureAvailability: () => r
            });

            function r() {
                (0, n(544978).a)({
                    computeFeatureData: n(312462).Y$,
                    featureDataLoaders: n(197691).L,
                    performanceMark: e => n(680007).default.mark(e),
                    performanceMeasure: (e, t) => n(680007).default.measure(e, t)
                })
            }
        },
        754687: (e, t, n) => {
            n.d(t, {
                A: () => i
            }), n(296540);
            var r = n(474848);

            function i({
                children: e
            }) {
                let t = (0, n(533992).v3)(),
                    o = (0, n(682985).K8)(() => {
                        var e;
                        let r = n(728372).AppStoreMainEditorCurrentBlockStore.state,
                            i = (0, n(933062).lU)(r),
                            o = t.device.isPhone;
                        return {
                            width: "100vw",
                            height: "100%",
                            position: "relative",
                            display: "flex",
                            flex: 1,
                            background: (null == (e = n(584257).A.state.preferences) ? void 0 : e.isVibrancyEnabled) || (0, n(411529).Em)(t.RouterStore.state.route.name) ? "rgba(0, 0, 0, 0)" : i ? (0, n(681693).Lu)({
                                isPhone: o
                            }) : n(632079).Tj.background.primary
                        }
                    }, [t]);
                return (0, r.jsx)(n(373510).A, {
                    style: o,
                    children: e
                })
            }
        },
        763927: (e, t, n) => {
            n.d(t, {
                A: () => s,
                e: () => o
            });
            var r, i = () => n(546605);
            let o = ((r = {}).IN_APP_CALLOUT_CONFLICT = "in-app callout conflict", r.DARK_MODE = "not shown in dark mode", r);
            class a extends i().Store {
                getInitialState() {
                    return {
                        isVisible: !1,
                        suppressReason: void 0
                    }
                }
            }
            let s = new a
        },
        766101: (e, t, n) => {
            n.d(t, {
                g: () => o,
                j: () => i
            });
            var r = n(296540);
            let i = (0, r.createContext)({
                clearSelection: () => {}
            });

            function o() {
                return (0, r.useContext)(i)
            }
            i.displayName = "ClearSelectionContext"
        },
        793656: (e, t, n) => {
            n.d(t, {
                b: () => r
            });
            let r = (0, n(815048)._h)(new(n(815048)).O2("AdminPermissionsPage", () => Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(45414), n.e(64038), n.e(67430), n.e(57042), n.e(33503), n.e(56809), n.e(30532), n.e(23644), n.e(22841), n.e(12801), n.e(49340), n.e(85782), n.e(91029), n.e(19884)]).then(n.bind(n, 182365))), e => e.AdminPermissionsPage)
        },
        801818: (e, t, n) => {
            n.r(t), n.d(t, {
                initSubscriptionActions: () => i
            });
            let r = new(n(815048)).O2("subscriptionActionsLazyDeps", async () => await Promise.all([n.e(75134), n.e(33503), n.e(19541)]).then(n.bind(n, 897525)));

            function i() {
                (0, n(336613).NK)({
                    displayLoading: e => n(262058).m(e),
                    closeLoading: () => n(262058).V(),
                    clearFrameBanners: () => (0, n(474329).Re)({
                        bannerStore: n(465361).A
                    }),
                    openSettings: e => (0, n(599754).Ow)({
                        currentPage: e.currentPage
                    }),
                    getSpaceSettingsState: () => ({
                        open: n(227947).A.state.open,
                        currentPage: n(227947).A.state.currentPage
                    }),
                    updateSpaceSettingsState: e => n(227947).A.setState({ ...n(227947).A.state,
                        ...e
                    }),
                    setUserSimilarityState: e => n(148344).k.setState(e),
                    setShouldUseEdgeCache: e => (0, n(908032).O)(e),
                    drainTransactionQueue: async () => {
                        await n(941701).transactionQueue.drain()
                    },
                    isProfessionalTeamUser: () => (0, n(904434).YD)(),
                    getCurrentUserDomainType: () => (0, n(904434).FX)(),
                    getDeviceIdForAnalytics: e => (0, n(647439).T)(e),
                    trackGTMEvent: (e, t) => (0, n(378414).W)(e, t),
                    promptToCreatePassword: e => (0, n(98669).r)(e)
                }), (0, n(336613).NS)(async () => r.load())
            }
        },
        810737: (e, t, n) => {
            n.d(t, {
                t: () => r
            });

            function r() {
                if (n(986939).A.isMobile) return !1;
                let e = n(728372).AppStoreCurrentUserSettingsStore.state;
                if (!e) return !1;
                let t = (0, n(996903).i)(e);
                return ("number" != typeof t || !(t > 7)) && "on" === n(218744).default.getEligibleGroup({
                    experimentId: "slash_menu_tooltip",
                    defaultGroup: "control"
                })
            }
        },
        811558: (e, t, n) => {
            var r = n(746518),
                i = n(439928),
                o = n(225397),
                a = Array;
            r({
                target: "Array",
                proto: !0
            }, {
                with: function(e, t) {
                    return i(o(this), a, e, t)
                }
            })
        },
        858778: (e, t, n) => {
            n.d(t, {
                H: () => i,
                k: () => o
            });
            var r = n(296540);
            let i = r.createContext(!1);

            function o() {
                return r.useContext(i)
            }
            i.displayName = "BreadcrumbBrowserContext"
        },
        863318: (e, t, n) => {
            n.r(t), n.d(t, {
                provideDependencies: () => r
            });

            function r(e) {
                (0, n(363244).e6)(e.defaultStableParentStore)
            }
        },
        868458: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n(296540),
                i = n(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 1.95 14.91 15.65",
                    svg: (0, i.jsx)("path", {
                        d: "M11.92 5.43a3.48 3.48 0 0 1 6.96 0v2.095a.625.625 0 1 1-1.25 0V5.43a2.23 2.23 0 1 0-4.46 0v1.92h.43a2.425 2.425 0 0 1 2.425 2.425v5.4A2.425 2.425 0 0 1 13.6 17.6H6.4a2.425 2.425 0 0 1-2.425-2.425v-5.4A2.425 2.425 0 0 1 6.4 7.35h5.52zm-1.357 7.373a1.35 1.35 0 1 0-1.126 0v1.247a.563.563 0 0 0 1.126 0z"
                    })
                },
                a = (0, n(104509).wt)("lockOpenFill", o, "fill");

            function s(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "edit_lock_toggle",
                        eventProperties: t
                    }
                })
            }
            let l = function({
                store: e,
                disableTooltip: t,
                hideText: r,
                isInlineCollection: o,
                buttonStyle: a
            }) {
                return n(986939).A.isMobile ? (0, i.jsx)(f, {
                    store: e,
                    hideText: r
                }) : (0, i.jsx)(g, {
                    store: e,
                    disableTooltip: t,
                    hideText: r,
                    isInlineCollection: o,
                    buttonStyle: a
                })
            };

            function d(e, t) {
                return {
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    gap: 4,
                    fontSize: n(986939).A.isMobile ? 12 : 14,
                    borderRadius: 4,
                    padding: "0 6px",
                    marginInlineEnd: 2,
                    height: 24,
                    marginTop: +!!n(986939).A.isMobile,
                    marginInlineStart: n(986939).A.isMobile ? 0 : -5,
                    ...e && {
                        marginInlineStart: n(986939).A.isMobile ? 8 : 12,
                        marginInlineEnd: 0
                    },
                    ...t
                }
            }
            let c = {
                style0: {
                    color: n(632079).Tj.text.inverseSecondary
                }
            };

            function u({
                store: e
            }) {
                let t = (0, n(682985).K8)(() => e.getFormat().block_locked_by, [e]),
                    r = (0, n(109939).tz)(),
                    o = (0, n(682985).K8)(() => t && (0, n(413818).c6)(r, n(807825).L.createChildStore(e, {
                        table: n(832375).oo9,
                        id: t
                    }).getModel()), [t, r, e]);
                return t ? (0, i.jsx)("div", {
                    children: (0, i.jsx)(n(109939).sA, {
                        defaultMessage: "Locked by {lockedByPerson}{br}to prevent accidental editing.{br}<prompttext>Click to unlock</prompttext>",
                        id: "pageLockIndicator.lockedTooltip",
                        values: {
                            lockedByPerson: (0, i.jsx)("b", {
                                children: o
                            }),
                            br: (0, i.jsx)("br", {}),
                            prompttext: e => (0, i.jsx)("span", {
                                style: c.style0,
                                children: e
                            })
                        }
                    })
                }) : null
            }

            function p(e, t) {
                n(996050).$.relockBlock({
                    userId: t.userId,
                    blockId: t.id
                });
                let r = t.getType();
                if (r) {
                    let {
                        collectionId: i,
                        ownedCollectionCount: o,
                        linkedCollectionCount: a
                    } = (0, n(633171).P)(t, {
                        skipPages: !0
                    });
                    s(e, {
                        from: "topbar",
                        block_type: r,
                        locked: !0,
                        collection_id: i,
                        owned_collection_count: o,
                        linked_collection_count: a
                    })
                }
            }

            function m({
                store: e,
                close: t
            }) {
                let o = (0, n(533992).v3)(),
                    a = (0, r.useCallback)(() => {
                        ! function(e, t) {
                            n(996050).$.temporarilyUnlockBlock({
                                userId: t.userId,
                                blockId: t.id
                            });
                            let r = t.getType();
                            if (r) {
                                let {
                                    collectionId: i,
                                    ownedCollectionCount: o,
                                    linkedCollectionCount: a
                                } = (0, n(633171).P)(t, {
                                    skipPages: !0
                                });
                                s(e, {
                                    from: "topbar",
                                    block_type: r,
                                    locked: !1,
                                    collection_id: i,
                                    owned_collection_count: o,
                                    linked_collection_count: a
                                })
                            }
                        }(o, e), t()
                    }, [o, e, t]),
                    l = (0, r.useCallback)(() => {
                        ! function(e, t) {
                            let r = t.pointer.spaceId;
                            (0, n(377796).createAndCommit)({
                                userAction: "PageLockTopbarIndicator.handlePermanentUnlockClick",
                                environment: e,
                                canUndo: !0,
                                cellTarget: r ? {
                                    spaceWithId: r
                                } : void 0,
                                perform: r => {
                                    (0, n(578825)._)({
                                        environment: e,
                                        store: t,
                                        isLocked: !1,
                                        transaction: r
                                    })
                                }
                            });
                            let i = t.getType();
                            if (i) {
                                let {
                                    collectionId: r,
                                    ownedCollectionCount: o,
                                    linkedCollectionCount: a
                                } = (0, n(633171).P)(t, {
                                    skipPages: !0
                                });
                                s(e, {
                                    from: "topbar",
                                    block_type: i,
                                    locked: !1,
                                    collection_id: r,
                                    owned_collection_count: o,
                                    linked_collection_count: a
                                })
                            }
                        }(o, e), t()
                    }, [o, e, t]),
                    d = [{
                        key: "temp_unlock",
                        render: e => (0, i.jsx)(n(860287).A, { ...e,
                            svg: n(636).pencilLineIcon,
                            title: (0, i.jsx)(n(109939).sA, {
                                defaultMessage: "Unlock for me",
                                id: "pageLockIndicator.temporaryUnlockOption.label"
                            })
                        }),
                        action: () => {
                            a()
                        }
                    }, {
                        key: "perm_unlock",
                        render: e => (0, i.jsx)(n(860287).A, { ...e,
                            svg: n(454736).p,
                            title: (0, i.jsx)(n(109939).sA, {
                                defaultMessage: "Unlock for everyone",
                                id: "pageLockIndicator.permanentUnlockOption.label"
                            })
                        }),
                        action: () => {
                            l()
                        }
                    }];
                return (0, i.jsx)(n(747369).A, {
                    menuType: n(649476).gu.Popup,
                    children: (0, i.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        onAccept: t,
                        sections: [{
                            key: "unlock_options",
                            items: d
                        }],
                        initialFocus: void 0
                    })
                })
            }
            let h = {
                style1: {
                    background: n(632079).Tj.blue.background.primaryTranslucent
                },
                style2: {
                    background: n(632079).Tj.blue.background.secondaryTranslucent
                },
                style3: {
                    lineHeight: 1
                }
            };

            function g({
                store: e,
                disableTooltip: t,
                hideText: o,
                isInlineCollection: s,
                buttonStyle: l
            }) {
                let c = (0, n(533992).v3)(),
                    f = (0, r.useCallback)(() => p(c, e), [c, e]),
                    b = (0, n(682985).K8)(() => e.isLockedForAllUsers(), [e]),
                    v = (0, n(682985).K8)(() => n(996050).$.isTemporarilyUnlocked({
                        userId: e.userId,
                        blockId: e.id
                    }), [e.id, e.userId]),
                    w = (0, n(682985).K8)(() => n(475097).default.state.open && n(475097).default.state.targetStore.id === e.id, [e.id]);
                if (b)
                    if (!v) return (0, i.jsx)(n(51831).m, {
                        content: () => (0, i.jsx)(u, {
                            store: e
                        }),
                        disableTooltip: t,
                        children: t => (0, i.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            children: [w ? (0, i.jsx)(n(48542).A, {}) : void 0, (0, i.jsx)(n(656252).A, {
                                popupType: n(423291).n.Popup,
                                content: ({
                                    close: t
                                }) => (0, i.jsx)(m, {
                                    store: e,
                                    close: t
                                }),
                                children: ({
                                    onClick: e
                                }) => (0, i.jsxs)(n(64960).Ay, {
                                    style: { ...d(s, l),
                                        color: n(632079).Tj.text.tertiary,
                                        fill: n(632079).Tj.icon.tertiary
                                    },
                                    onClick: e,
                                    ...t,
                                    children: [(0, i.jsx)(n(16275).I, {
                                        icon: n(269298).lockFillIcon
                                    }), o ? void 0 : (0, i.jsx)("div", {
                                        style: h.style3,
                                        children: (0, i.jsx)(n(109939).sA, {
                                            defaultMessage: "Locked",
                                            id: "pageLockIndicator.lockedButton.label"
                                        })
                                    })]
                                })
                            })]
                        })
                    });
                    else return (0, i.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        children: [w ? (0, i.jsx)(n(48542).A, {}) : void 0, (0, i.jsxs)(n(64960).Ay, {
                            style: { ...d(s, l),
                                paddingInlineStart: 5,
                                border: `1px solid ${n(632079).Tj.blue.border.accentPrimary}`,
                                color: n(632079).Tj.blue.text.accentPrimary,
                                fill: n(632079).Tj.blue.icon.accentPrimary
                            },
                            onClick: f,
                            hoveredStyle: h.style1,
                            pressedStyle: h.style2,
                            children: [(0, i.jsx)(n(16275).I, {
                                icon: a
                            }), o ? void 0 : (0, i.jsx)("div", {
                                style: h.style3,
                                children: (0, i.jsx)(n(109939).sA, {
                                    defaultMessage: "Re-lock",
                                    id: "pageLockIndicator.relockButton.label"
                                })
                            })]
                        })]
                    });
                return null
            }

            function f({
                store: e,
                hideText: t
            }) {
                let o = (0, n(533992).v3)(),
                    s = (0, r.useCallback)(() => p(o, e), [o, e]),
                    l = (0, n(682985).K8)(() => e.isLockedForAllUsers(), [e]),
                    d = (0, n(682985).K8)(() => n(996050).$.isTemporarilyUnlocked({
                        userId: e.userId,
                        blockId: e.id
                    }), [e.id, e.userId]),
                    c = (0, n(616844).Y5)("left", 10),
                    u = (0, n(616844).Y5)("right", 14);
                if (l)
                    if (d) return (0, i.jsxs)(n(64960).Ay, {
                        onClick: s,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            gap: 6,
                            paddingInlineStart: c,
                            paddingInlineEnd: u,
                            color: n(632079).Tj.blue.text.accentPrimary,
                            fill: n(632079).Tj.blue.icon.accentPrimary
                        },
                        children: [(0, i.jsx)(n(16275).I, {
                            icon: a
                        }), t ? void 0 : (0, i.jsx)("div", {
                            children: (0, i.jsx)(n(109939).sA, {
                                defaultMessage: "Re-lock",
                                id: "pageLockIndicator.mobileRelockButton.label"
                            })
                        })]
                    });
                    else return (0, i.jsx)(n(656252).A, {
                        popupType: n(423291).n.Popup,
                        content: ({
                            close: t
                        }) => (0, i.jsx)(m, {
                            store: e,
                            close: t
                        }),
                        children: ({
                            onClick: e
                        }) => (0, i.jsxs)(n(64960).Ay, {
                            onClick: e,
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                height: "100%",
                                paddingInlineStart: c,
                                paddingInlineEnd: u
                            },
                            children: [(0, i.jsx)(n(16275).I, {
                                icon: n(269298).lockFillIcon
                            }), t ? void 0 : (0, i.jsx)("div", {
                                children: (0, i.jsx)(n(109939).sA, {
                                    defaultMessage: "Locked",
                                    id: "pageLockIndicator.mobileLockedButton.label"
                                })
                            })]
                        })
                    });
                return null
            }
        },
        872381: (e, t, n) => {
            n.d(t, {
                X: () => i
            });
            let r = {
                    CreatorProgram: new(n(815048)).O2("CreatorProgram", () => Promise.all([n.e(75134), n.e(56809), n.e(87539), n.e(21753), n.e(6456), n.e(35032), n.e(58251)]).then(n.bind(n, 970999)))
                },
                i = (0, n(815048)._h)(r.CreatorProgram, e => e.CreatorProgram)
        },
        874020: (e, t, n) => {
            n.d(t, {
                u: () => r
            });

            function r(e) {
                n(775657).electronApi && n(775657).electronApi.navigationReady && n(775657).electronApi.navigationReady(e)
            }
        },
        874378: (e, t, n) => {
            n.d(t, {
                j: () => r
            });
            let r = (0, n(815048)._h)(new(n(815048)).O2("AdminObjectRedirect", () => Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(45414), n.e(64038), n.e(67430), n.e(57042), n.e(33503), n.e(56809), n.e(30532), n.e(23644), n.e(22841), n.e(12801), n.e(49340), n.e(85782), n.e(91029), n.e(19884)]).then(n.bind(n, 834670))), e => e.AdminObjectRedirect)
        },
        876808: (e, t, n) => {
            n.d(t, {
                S: () => i
            });
            let r = new(n(815048)).O2("githubStudentPack", () => Promise.all([n.e(75134), n.e(56809), n.e(87539), n.e(21753), n.e(6456), n.e(35032), n.e(54564)]).then(n.bind(n, 755365))),
                i = (0, n(815048)._h)(r, e => e.default)
        },
        901240: (e, t, n) => {
            n.d(t, {
                C6: () => o,
                HQ: () => i,
                Yo: () => a
            });
            let r = new(n(815048)).O2("login", async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e(49806), n.e(79974), n.e(35837), n.e(18406), n.e(97615), n.e(3079), n.e(96966)]).then(n.bind(n, 622207)), {
                        default: t
                    } = await Promise.all([n.e(49806), n.e(79974), n.e(35837), n.e(18406), n.e(97615), n.e(3079), n.e(96966)]).then(n.bind(n, 949204)), {
                        LoginMobileNative: r
                    } = await Promise.all([n.e(49806), n.e(79974), n.e(35837), n.e(18406), n.e(97615), n.e(3079), n.e(96966)]).then(n.bind(n, 210909)), {
                        default: i
                    } = await Promise.all([n.e(49806), n.e(79974), n.e(35837), n.e(18406), n.e(97615), n.e(3079), n.e(96966)]).then(n.bind(n, 555348)), {
                        default: o
                    } = await Promise.all([n.e(49806), n.e(79974), n.e(35837), n.e(18406), n.e(97615), n.e(3079), n.e(96966)]).then(n.bind(n, 352668));
                    return {
                        LoginPage: e,
                        LoginDesktop: t,
                        LoginMobileNative: r,
                        FrontLoginPage: i,
                        LoginModalContent: o
                    }
                }),
                i = (0, n(815048)._h)(r, e => e.LoginPage),
                o = (0, n(815048)._h)(r, e => e.FrontLoginPage),
                a = (0, n(815048)._h)(r, e => e.LoginModalContent)
        },
        903443: (e, t, n) => {
            n.d(t, {
                Yk: () => l,
                Qj: () => d,
                Ct: () => p
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(581454);
            let r = "1.4.0";
            class i {
                storageKeyPrefix = "notion-sidebar-";
                store = new(n(274919)).Ay({
                    namespace: n(274919).Bq,
                    important: !1,
                    trackingType: "performance"
                });
                loggingEnabled = Math.random() < n(218744).default.getConfigKey("sidebar_cache_logging_config", "sample_rate");
                constructor(e) {
                    this.environment = e
                }
                async get(e) {
                    try {
                        await this.store.waitUntilReady();
                        let t = this.storageKeyPrefix + e,
                            {
                                duration: n,
                                result: i
                            } = o(() => this.store.get(t));
                        if (!i) return void this.logRead({
                            duration: n,
                            status: "missing"
                        });
                        if (i.version === r) return this.logRead({
                            duration: n,
                            status: "success",
                            result: i
                        }), i;
                        this.logRead({
                            duration: n,
                            status: "stale",
                            result: i
                        }), this.clear(e);
                        return
                    } catch (e) {
                        this.logRead({
                            status: "failure"
                        });
                        return
                    }
                }
                set(e, t) {
                    try {
                        let n = this.storageKeyPrefix + e,
                            {
                                duration: r
                            } = o(() => this.store.set(n, t));
                        this.logWrite({
                            duration: r,
                            status: "success",
                            result: t
                        })
                    } catch (e) {
                        this.logWrite({
                            status: "failure",
                            result: t
                        })
                    }
                }
                clear(e) {
                    try {
                        let t = this.storageKeyPrefix + e;
                        this.store.remove(t)
                    } catch (e) {}
                }
                logRead({
                    duration: e,
                    status: t,
                    result: r
                }) {
                    this.loggingEnabled && (0, n(104310).u)({
                        event: {
                            eventName: "sidebar.cache_access_attempt",
                            eventProperties: {
                                time: e,
                                type: "read",
                                status: t,
                                size_kb: r && "object" == typeof r ? this.calculateSizeKb(r) : 0,
                                source: "local_storage"
                            }
                        }
                    })
                }
                logWrite({
                    duration: e,
                    status: t,
                    result: r
                }) {
                    this.loggingEnabled && (0, n(104310).u)({
                        event: {
                            eventName: "sidebar.cache_access_attempt",
                            eventProperties: {
                                time: e,
                                type: "write",
                                status: t,
                                size_kb: this.calculateSizeKb(r),
                                source: "local_storage"
                            }
                        }
                    })
                }
                calculateSizeKb(e) {
                    try {
                        let t = JSON.stringify(e),
                            n = new Blob([t]).size;
                        return Math.round(n / 1024)
                    } catch {
                        return 0
                    }
                }
            }

            function o(e) {
                let t = performance.now(),
                    n = e();
                return {
                    duration: Math.round(performance.now() - t),
                    result: n
                }
            }
            class a {
                cache;
                pendingResults = new Map;
                results = new Map;
                cachedThisSession = new Set;
                disabledCacheKeys = new Set;
                getCache(e) {
                    return this.cache || (this.cache = new i(e)), this.cache
                }
                getCachedSidebarStateResult(e, t) {
                    let n = `${e}:${t}`;
                    if (!this.disabledCacheKeys.has(n)) return this.results.get(n)
                }
                async getCachedSidebarState(e, t, n) {
                    let r = `${e}:${t}`;
                    if (this.disabledCacheKeys.has(r)) return;
                    if (this.results.has(r)) return this.results.get(r);
                    if (this.pendingResults.has(r)) return this.pendingResults.get(r);
                    let i = this.readFromStorage(e, t, n).then(e => {
                        if (!this.disabledCacheKeys.has(r)) return this.results.set(r, e), e
                    }).catch(() => {});
                    return this.pendingResults.set(r, i), i
                }
                async readFromStorage(e, t, r) {
                    let i = s(e, t),
                        o = await this.getCache(r).get(i);
                    if (o) try {
                        var a, d;
                        return a = o, d = r, {
                            isCached: !0,
                            spaceViewId: a.spaceViewId,
                            spaceId: a.spaceId,
                            spaceName: a.spaceName,
                            userId: a.userId,
                            isMember: a.isMember,
                            isPersonalSpace: a.isPersonalSpace,
                            showBookmarksSection: a.showBookmarksSection,
                            showWorkspaceSection: a.showWorkspaceSection,
                            showSharedSection: a.showSharedSection,
                            showPrivateSection: a.showPrivateSection,
                            showChatsSection: a.showChatsSection,
                            showSharedOverflowButton: a.showSharedOverflowButton,
                            showPrivateOverflowButton: a.showPrivateOverflowButton,
                            showOnlyPrivateSection: a.showOnlyPrivateSection,
                            shownSidebarSectionCount: a.shownSidebarSectionCount,
                            showTeamsOverflowButton: a.showTeamsOverflowButton,
                            stickTemplateItemsToBottom: a.stickTemplateItemsToBottom,
                            showTeamSection: a.showTeamSection,
                            showCrossWorkspaceGuestPagesPrototype: a.showCrossWorkspaceGuestPagesPrototype,
                            showEmptySharedSection: a.showEmptySharedSection,
                            showNotionAppsSection: a.showNotionAppsSection,
                            showMeetingsTodaySection: a.showMeetingsTodaySection,
                            showMeetingsSection: a.showMeetingsSection,
                            showRecentsSection: a.showRecentsSection,
                            allSharedPagesStores: [],
                            allPrivatePagesStores: [],
                            userJoinedTeamsStores: [],
                            visibleNotionApps: a.visibleNotionApps,
                            visibleSharedPagesStores: a.visibleSharedPagesStores.map(e => l(e, d)),
                            visiblePrivatePagesStores: a.visiblePrivatePagesStores.map(e => l(e, d)),
                            bookmarkedPagesStores: a.bookmarkedPagesStores.map(e => l(e, d)),
                            workspacePagesStores: a.workspacePagesStores.map(e => l(e, d)),
                            visibleTeamsStores: a.visibleTeamsStores.map(e => {
                                var t, r;
                                let i;
                                return t = e, r = d, i = new(n(681735)).h(r, t.pointer), void 0 !== t.name || void 0 !== t.icon || t.pages.length > 0 ? (0, n(9722).x)({
                                    store: i,
                                    environment: r,
                                    name: t.name ? ? "",
                                    icon: t.icon,
                                    cachedTeamPagesStores: t.pages.map(e => l(e, r))
                                }) : i
                            }),
                            visibleWorkflowStores: a.visibleWorkflowStores.map(e => {
                                var t, r;
                                let i;
                                return t = e, r = d, i = new(n(360851)).N(r, t.pointer), void 0 !== t.title || void 0 !== t.icon ? (0, n(595850).J)({
                                    store: i,
                                    environment: r,
                                    name: t.title ? ? "",
                                    icon: t.icon
                                }) : i
                            }),
                            allSidebarWorkflowStores: [],
                            isTeamContentReady: !0,
                            userSharedPagesForSpaceHasLoaded: !0,
                            sidebarOrder: a.sidebarOrder
                        }
                    } catch (e) {
                        this.getCache(r).clear(i);
                        return
                    }
                }
                cacheSidebarState({
                    spaceId: e,
                    userId: t,
                    sidebarState: n,
                    environment: i
                }) {
                    let o = s(e, t),
                        a = `${e}:${t}`;
                    if (!this.cachedThisSession.has(a)) try {
                        var l;
                        let e = {
                            spaceViewId: (l = n).spaceViewId,
                            spaceId: l.spaceId,
                            spaceName: l.spaceName,
                            userId: l.userId,
                            isMember: l.isMember,
                            isPersonalSpace: l.isPersonalSpace,
                            showBookmarksSection: l.showBookmarksSection,
                            showWorkspaceSection: l.showWorkspaceSection,
                            showSharedSection: l.showSharedSection,
                            showPrivateSection: l.showPrivateSection,
                            showChatsSection: l.showChatsSection,
                            showSharedOverflowButton: l.showSharedOverflowButton,
                            showPrivateOverflowButton: l.showPrivateOverflowButton,
                            showOnlyPrivateSection: l.showOnlyPrivateSection,
                            shownSidebarSectionCount: l.shownSidebarSectionCount,
                            showTeamsOverflowButton: l.showTeamsOverflowButton,
                            stickTemplateItemsToBottom: l.stickTemplateItemsToBottom,
                            showTeamSection: l.showTeamSection,
                            showCrossWorkspaceGuestPagesPrototype: l.showCrossWorkspaceGuestPagesPrototype,
                            showEmptySharedSection: l.showEmptySharedSection,
                            showNotionAppsSection: l.showNotionAppsSection,
                            showMeetingsTodaySection: l.showMeetingsTodaySection,
                            showMeetingsSection: l.showMeetingsSection,
                            showRecentsSection: l.showRecentsSection,
                            visibleNotionApps: l.visibleNotionApps,
                            visibleSharedPagesStores: l.visibleSharedPagesStores.map(d),
                            visiblePrivatePagesStores: l.visiblePrivatePagesStores.map(d),
                            bookmarkedPagesStores: l.bookmarkedPagesStores.map(d),
                            workspacePagesStores: l.workspacePagesStores.map(d),
                            visibleTeamsStores: l.visibleTeamsStores.map(c),
                            visibleWorkflowStores: l.visibleWorkflowStores.map(u),
                            sidebarOrder: l.sidebarOrder,
                            cachedAt: Date.now(),
                            version: r
                        };
                        this.getCache(i).set(o, e), this.cachedThisSession.add(a)
                    } catch (e) {}
                }
                disableCache({
                    spaceId: e,
                    userId: t
                }) {
                    let n = `${e}:${t}`;
                    this.disabledCacheKeys.has(n) || (this.disabledCacheKeys.add(n), this.pendingResults.delete(n), this.results.delete(n))
                }
                isCacheDisabled(e, t) {
                    let n = `${e}:${t}`;
                    return this.disabledCacheKeys.has(n)
                }
                clearCachedSidebarState({
                    spaceId: e,
                    userId: t,
                    environment: n
                }) {
                    let r = s(e, t),
                        i = `${e}:${t}`;
                    this.getCache(n).clear(r), this.pendingResults.delete(i), this.results.delete(i)
                }
            }

            function s(e, t) {
                return `sidebar-state-${e}-${t}`
            }

            function l(e, t) {
                let r = new(n(970831)).B(t, e.pointer);
                return void 0 !== e.title || void 0 !== e.icon ? r.createFastRenderBlockStore(e.title ? ? [], e.icon) : r
            }

            function d(e) {
                let t = e.isDefined() ? e.getTitleValue() : [],
                    n = e.isDefined() ? e.getIcon() : void 0,
                    r = null == n ? void 0 : n.icon;
                return {
                    pointer: e.pointer,
                    title: t,
                    icon: r
                }
            }

            function c(e) {
                let t = e.isDefined() ? e.getName() : "",
                    r = e.isDefined() ? e.getRawIcon() : void 0,
                    i = e.isDefined() ? (0, n(709633).O)({
                        teamStore: e
                    }) : [];
                return {
                    pointer: e.pointer,
                    name: t,
                    icon: r,
                    pages: i.map(d)
                }
            }

            function u(e) {
                let t = e.isDefined() ? e.getData() : void 0,
                    n = null == t ? void 0 : t.name,
                    r = null == t ? void 0 : t.icon;
                return {
                    pointer: e.pointer,
                    title: n,
                    icon: r
                }
            }
            let p = new a
        },
        917441: (e, t, n) => {
            n.d(t, {
                Lp: () => a,
                Rx: () => l,
                a$: () => s
            });
            var r = n(296540),
                i = n(474848);
            let o = (0, r.createContext)(null);

            function a({
                children: e
            }) {
                let t = (0, n(533992).v3)(),
                    s = (0, n(804011).r)(t),
                    l = (0, n(119965).V)(),
                    {
                        deferSidebarLoadingWhenCollapsed: d
                    } = (0, n(42491).b8)(t.currentUser.id),
                    c = !(0, n(682985).K8)(() => (0, n(712358).K)(t), [t]) && d && l,
                    [u, p] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    let e = setTimeout(() => {
                        p(!0)
                    }, 2e4);
                    return () => {
                        clearTimeout(e)
                    }
                }, []);
                let {
                    currentUserId: m,
                    spaceId: h,
                    isFreshStateReady: g
                } = (0, n(682985).K8)(() => {
                    var e, t, r, i;
                    null != (e = n(728372).AppStoreCurrentUserStore.state) && e.id && null != (t = (0, n(328765).S)()) && t.id && (0, n(635339).yd)("user_and_space_stores_loaded");
                    let o = null == (r = n(728372).AppStoreCurrentUserStore.state) ? void 0 : r.id,
                        a = null == (i = (0, n(328765).S)()) ? void 0 : i.id;
                    if (c) return {
                        currentUserId: o,
                        spaceId: a,
                        isFreshStateReady: !1
                    };
                    let l = s.state,
                        d = n(329464).A.state.initialRenderCompleted;
                    return {
                        currentUserId: o,
                        spaceId: a,
                        isFreshStateReady: (0, n(982853).XA)({
                            sidebarState: l,
                            userId: o,
                            spaceId: a,
                            isInitialPageRenderCompleted: d
                        })
                    }
                }, [s, c]), f = (0, n(83208).X)("enable_greedy_sidebar_initial_render"), b = (0, n(168814).X)(), v = (0, n(982853).cT)({
                    isFreshStateReady: g,
                    userId: m,
                    spaceId: h
                }), w = !!((0, n(682985).K8)(() => {
                    let e = null == v ? void 0 : v.state;
                    return m === (null == e ? void 0 : e.userId) && h === (null == e ? void 0 : e.spaceId)
                }, [v, m, h]) && (b || f) && !g && !u);
                return (0, i.jsx)(o.Provider, {
                    value: w ? v : s,
                    children: e
                })
            }

            function s() {
                let e = (0, r.useContext)(o),
                    t = (0, n(533992).v3)(),
                    i = (0, n(804011).r)(t);
                return e ? ? i
            }

            function l() {
                return (0, n(682985).O$)(s())
            }
            o.displayName = "SidebarStateContext"
        },
        935339: (e, t, n) => {
            n.r(t), n.d(t, {
                initUpgradeActions: () => i
            });
            let r = new(n(815048)).O2("upgradeSystemActions", async () => await Promise.all([n.e(75134), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(15389), n.e(33503), n.e(82861), n.e(15711)]).then(n.bind(n, 293598)));

            function i() {
                (0, n(555676).w)(async () => r.load())
            }
        },
        941798: (e, t, n) => {
            n.d(t, {
                R: () => o,
                Z: () => a
            });
            let r = new(n(815048)).O2("StartupsApplication", async () => Promise.all([n.e(75134), n.e(56809), n.e(87539), n.e(21753), n.e(6456), n.e(35032), n.e(47057)]).then(n.bind(n, 386050))),
                i = new(n(815048)).O2("StartupsApplicationLoading", async () => n.e(52055).then(n.bind(n, 313070))),
                o = (0, n(815048)._h)(r, e => e.default),
                a = (0, n(815048)._h)(i, e => e.StartupsApplicationLoading)
        },
        970600: (e, t, n) => {
            n.d(t, {
                H: () => o
            });
            var r = n(296540);
            let i = new(n(815048)).O2("RouteWrapper", async () => n.e(95728).then(n.bind(n, 590210))),
                o = (0, n(815048)._h)(i, e => e.RouteWrapper, {
                    renderLoading: () => r.createElement(n(515487).r)
                })
        },
        976800: (e, t, n) => {
            n.d(t, {
                o: () => l
            });
            var r = n(296540),
                i = n(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.87 3.47 16.26 12.66",
                    directional: !0,
                    svg: (0, i.jsx)("path", {
                        d: "M12.231 4.969A.875.875 0 1 1 13.47 3.73l4.4 4.4a.875.875 0 0 1 0 1.238l-4.4 4.4a.875.875 0 1 1-1.238-1.238l2.906-2.906H6a2.375 2.375 0 1 0 0 4.75h1.42a.875.875 0 0 1 0 1.75H6a4.125 4.125 0 1 1 0-8.25h9.138z"
                    })
                },
                a = (0, n(104509).wt)("arrowUTurnUpRightFill", o, "fill"),
                s = {
                    skipLink: {
                        position: "absolute",
                        insetInlineStart: 12,
                        top: 12,
                        width: 200,
                        height: 48,
                        overflow: "hidden",
                        zIndex: 9999,
                        padding: 12,
                        background: n(632079).Tj.blue.background.accentPrimary,
                        color: "white",
                        textAlign: "center",
                        textDecoration: "none",
                        borderRadius: 16
                    },
                    buttonHoveredStyle: {
                        background: n(632079).Tj.blueButtonHoveredBackground
                    },
                    buttonPressedStyle: {
                        background: n(632079).Tj.blueButtonPressedBackground
                    },
                    style1: {
                        width: "auto"
                    }
                };

            function l({
                sidebarAware: e = !0
            }) {
                let t = (0, n(533992).v3)(),
                    o = (0, n(682985).O$)(n(984858).sidebarWidthStore),
                    d = e ? o : void 0,
                    c = (0, n(682985).K8)(() => !!e && (0, n(712358).K)(t), [t, e]),
                    [u, p] = (0, r.useState)(!1),
                    m = (0, r.useRef)(null),
                    h = (0, n(960253).e)(),
                    g = (0, n(960253).I)(() => ({
                        container: {
                            background: c ? "light" === h ? n(632079).Tj.background.secondary : n(632079).Tj.background.elevated : void 0,
                            height: 68,
                            position: "fixed",
                            top: 0,
                            insetInlineStart: 0,
                            insetInlineEnd: 0,
                            bottom: 0,
                            zIndex: 1e3
                        }
                    }), [c, h]);
                return (0, i.jsx)(n(654979).A, {
                    tag: "div",
                    animate: { ...void 0 !== d && {
                            width: d
                        },
                        translateY: u ? 0 : -100
                    },
                    style: { ...g.container,
                        ...void 0 === d && s.style1
                    },
                    className: "notion-print-ignore",
                    children: (0, i.jsx)(n(64960).Ay, {
                        style: s.skipLink,
                        hoveredStyle: s.buttonHoveredStyle,
                        pressedStyle: s.buttonPressedStyle,
                        href: "#main",
                        id: "skip-to-content",
                        ref: m,
                        onClick: e => {
                            let t = 0 === e.detail || 0 === e.screenX && 0 === e.screenY,
                                r = document.getElementById("main");
                            if (r) {
                                let e = (0, n(949054).Kr)(r);
                                e.length > 0 && e[0].focus()
                            }
                            p(!1), (0, n(104310).u)({
                                event: {
                                    eventName: "skip_to_content_click",
                                    eventProperties: {
                                        user_navigation_type: t ? "keyboard" : "mouse"
                                    }
                                }
                            })
                        },
                        onFocus: () => {
                            p(!0)
                        },
                        onBlur: () => {
                            p(!1)
                        },
                        children: (0, i.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            children: [(0, i.jsx)(n(109939).sA, {
                                defaultMessage: "Skip to content",
                                id: "skipToContent.skipToContent"
                            }), (0, i.jsx)(n(16275).I, {
                                icon: a
                            })]
                        })
                    })
                })
            }
        },
        982853: (e, t, n) => {
            n.d(t, {
                Jf: () => a,
                XA: () => i,
                cT: () => o
            }), n(898992), n(823215);
            var r = n(296540);

            function i({
                sidebarState: e,
                userId: t,
                spaceId: n,
                isInitialPageRenderCompleted: r
            }) {
                return !!e && !!t && !!n && !e.isCached && !!e.visiblePrivatePagesStores.every(e => {
                    var t;
                    return e.isReady() && ((null == (t = e.getTitleStore()) ? void 0 : t.isReady()) ? ? !0)
                }) && !!e.visibleSharedPagesStores.every(e => {
                    var t;
                    return e.isReady() && ((null == (t = e.getTitleStore()) ? void 0 : t.isReady()) ? ? !0)
                }) && !!e.bookmarkedPagesStores.slice(0, 10).every(e => {
                    var t;
                    return e.isReady() && ((null == (t = e.getTitleStore()) ? void 0 : t.isReady()) ? ? !0)
                }) && !!e.visibleWorkflowStores.every(e => e.isReady()) && !!e.isTeamContentReady && !!r && !0
            }

            function o({
                isFreshStateReady: e,
                userId: t,
                spaceId: i
            }) {
                let {
                    enableSidebarStateCache: a
                } = (0, n(42491).b8)(t), [s] = (0, r.useState)(() => n(546605).Store.createValue(a && t && i ? n(903443).Ct.getCachedSidebarStateResult(i, t) : void 0, {
                    name: "cachedSidebarStateStore"
                }));
                (0, r.useEffect)(() => {
                    a && e && t && i && n(903443).Ct.disableCache({
                        spaceId: i,
                        userId: t
                    })
                }, [a, e, t, i]);
                let l = (0, n(533992).v3)();
                return (0, r.useEffect)(() => {
                    a && t && i && !n(903443).Ct.isCacheDisabled(i, t) && n(903443).Ct.getCachedSidebarState(i, t, l).then(e => s.setState(e))
                }, [t, i, l, a, s]), s
            }

            function a({
                sidebarState: e
            }) {
                let t = (0, n(533992).v3)(),
                    {
                        userId: o,
                        spaceId: s,
                        isInitialPageRenderCompleted: l
                    } = (0, n(682985).K8)(() => {
                        var e, t;
                        return {
                            userId: null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.id,
                            spaceId: null == (t = (0, n(328765).S)()) ? void 0 : t.id,
                            isInitialPageRenderCompleted: n(329464).A.state.initialRenderCompleted
                        }
                    }, []),
                    {
                        enableSidebarStateCache: d
                    } = (0, n(42491).b8)(o);
                (0, r.useEffect)(() => {
                    !i({
                        sidebarState: e,
                        userId: o,
                        spaceId: s,
                        isInitialPageRenderCompleted: l
                    }) || o && s && e && (d ? n(903443).Ct.cacheSidebarState({
                        spaceId: s,
                        userId: o,
                        sidebarState: e,
                        environment: t
                    }) : n(903443).Ct.clearCachedSidebarState({
                        spaceId: s,
                        userId: o,
                        environment: t
                    }))
                }, [o, s, l, e, d, t])
            }
        },
        986198: (e, t, n) => {
            n.d(t, {
                P: () => r
            });
            let r = (0, n(815048)._h)(new(n(815048)).O2("AdminSectionPage", () => Promise.all([n.e(75134), n.e(49806), n.e(79974), n.e(45414), n.e(64038), n.e(67430), n.e(57042), n.e(33503), n.e(56809), n.e(30532), n.e(23644), n.e(22841), n.e(12801), n.e(49340), n.e(85782), n.e(91029), n.e(19884)]).then(n.bind(n, 400704))), e => e.AdminSectionPage)
        },
        996985: (e, t, n) => {
            async function r(e) {
                let t = e.device.desktopAppVersion;
                if (!t) return;
                let r = (0, n(355981).parseVersion)(t);
                if (!r) return;
                let i = await n(884972).Zq.get(),
                    o = null == i ? void 0 : i.preferences;
                o && ((0, n(521622).o)(r) ? !1 === o.isUniversalLinksEnabled && (n(884972).Zq.setPreference("isUniversalLinksEnabled", !0), n(884972).Zq.setPreference("isUniversalLinksEnabledBackup", !1)) : !1 === o.isUniversalLinksEnabledBackup && (n(884972).Zq.setPreference("isUniversalLinksEnabledBackup", void 0), n(884972).Zq.setPreference("isUniversalLinksEnabled", !1)))
            }
            async function i(e) {
                var t, i, o;
                let {
                    device: a,
                    electronSqlite: s,
                    routerStore: l
                } = e;
                if (!n(775657).electronApi) return;
                await (0, n(168179).getAndCacheDesktopVersionAsync)();
                let d = await (0, n(470604).a)();
                if (/WantsServiceWorker/i.test(navigator.userAgent) && "serviceWorker" in navigator) {
                    if (null == (i = n(775657).electronApi.isEphemeralSession) ? void 0 : i.call(n(775657).electronApi)) {
                        let e = await navigator.serviceWorker.getRegistration();
                        e && await e.unregister();
                        return
                    }
                    d && navigator.serviceWorker.register(`${window.location.origin}/sw.js`, {
                        type: "classic",
                        scope: "/"
                    }).catch(async e => {
                        if (await n(975162).nQ(2e3, l.waitUntil(() => {
                                var e;
                                return (null == l || null == (e = l.state) || null == (e = e.route) ? void 0 : e.name) !== void 0 && "root" !== l.state.route.name
                            })), "login" !== l.state.route.name)
                            if (null !== n(775657).electronApi && void 0 !== n(775657).electronApi && n(775657).electronApi.logErrorForOffline) {
                                var t;
                                let r = "blank" === l.state.route.name ? "prewarmedTab" : "quickSearch" === l.state.route.name ? "quickSearchWindow" : "page";
                                null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (t = n(775657).electronApi.logErrorForOffline) || t.call(n(775657).electronApi, {
                                    level: "error",
                                    from: "electronActions",
                                    type: `${r}ServiceWorkerRegistrationError`,
                                    error: (0, n(416607).convertErrorToLog)(e)
                                })
                            } else n(773352).log({
                                level: "error",
                                from: "electronActions",
                                type: "serviceWorkerRegistrationError",
                                error: (0, n(416607).convertErrorToLog)(e)
                            })
                    }), navigator.serviceWorker.addEventListener("controllerchange", () => {
                        let e = new URL(window.location.href);
                        e.searchParams.set(n(525644).Sn, "service_worker_change"), window.location.replace(e.toString())
                    }), null !== n(775657).electronApi && void 0 !== n(775657).electronApi && null != (o = n(775657).electronApi.relayMessageToServiceWorker) && o.addListener && n(775657).electronApi.relayMessageToServiceWorker.addListener((e, t) => {
                        "serviceWorker" in navigator && navigator.serviceWorker.ready.then(e => {
                            var n;
                            null == (n = e.active) || n.postMessage(t)
                        })
                    }), n(775657).electronApi.relayMessageFromServiceWorker && navigator.serviceWorker.addEventListener("message", e => {
                        n(775657).electronApi && n(775657).electronApi.relayMessageFromServiceWorker && n(775657).electronApi.relayMessageFromServiceWorker(e.data)
                    })
                }
                if (null != (t = n(775657).electronApi.zoom) && t.get && await n(775657).electronApi.zoom.get(), s && s.sqliteConnection && (s.sqliteConnection.ensureMigrated().catch(e => {
                        n(773352).log({
                            level: "error",
                            from: "electronActions",
                            type: "sqliteConnectionEnsureMigratedError",
                            error: (0, n(416607).convertErrorToLog)(e),
                            data: (0, n(65364).CS)(e, {
                                isBrowser: !1
                            })
                        })
                    }), s.sqliteConnection.optimize().catch(e => {
                        n(773352).log({
                            level: "error",
                            from: "electronActions",
                            type: "sqliteConnectionOptimizeError",
                            error: (0, n(416607).convertErrorToLog)(e),
                            data: (0, n(65364).CS)(e, {
                                isBrowser: !1
                            })
                        })
                    })), n(775657).electronApi.getSubstitutions && a.isElectronMac) {
                    let e = await n(775657).electronApi.getSubstitutions();
                    (0, n(884972).zu)(e.filter(e => e.replace !== e.with).map(e => ({
                        length: e.replace.length,
                        replace: RegExp(`\\b${n(381453).Nt(e.replace)} $`),
                        with: `${e.with} `
                    })))
                }
                a.isElectronMac && (function(e = navigator.userAgent) {
                    let t = function(e) {
                        let t = e.match(/Mac OS X (\d+_\d+)/);
                        if (t) return t[1].split("_").map(e => parseInt(e, 10))
                    }(e);
                    return !!t && 10 === t[0] && !!(t[1] < 15)
                }() && n(884972).Zq.setPreference("isAutoUpdaterDisabled", !0), await r(e)), n(775657).electronApi.setLocale && n(775657).electronApi.setLocale(n(849917).locale)
            }
            n.d(t, {
                initializeElectron: () => i
            }), n(811558), n(898992), n(354520), n(581454), n(814603), n(147566), n(198721)
        },
        999773: (e, t, n) => {
            function r() {
                let e = n(358377).default.state;
                if ("editing" === e.mode) {
                    let t = (0, n(778758).H)(e.multiSelection);
                    if (t && (0, n(247438).gER)(t.selection)) {
                        let e = t.store,
                            r = n(521595).n.findEditableWithStore(e);
                        if (r) return e.getValue() ? void 0 : r
                    }
                }
            }

            function i() {
                return (0, n(682985).K8)(r, [])
            }

            function o(e) {
                let t = n(728372).AppStoreCurrentUserSettingsStore.state;
                t && (0, n(377796).createAndCommit)({
                    userAction: "educationTooltipsActions.completePressSlashTooltip",
                    environment: e,
                    cellTarget: "main",
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: t,
                            transaction: e,
                            data: {
                                pressed_slash_tooltip: !0
                            }
                        })
                    },
                    canUndo: !0,
                    userId: t.id
                })
            }
            n.d(t, {
                P: () => o,
                U: () => i
            })
        }
    }
]);