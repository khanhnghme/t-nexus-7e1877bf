"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [15021, 31190, 60858, 95737, 95969], {
        8779: (e, t, a) => {
            e.exports = a.p + "95f76471471a22df.png"
        },
        14561: (e, t, a) => {
            a.d(t, {
                b: () => r
            }), a(296540);
            var o = a(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.57 0.22 10.86 13.41",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M8.422.408a.625.625 0 0 0-.884 0l-2 2a.625.625 0 1 0 .884.884l.953-.953V8.8a.625.625 0 1 0 1.25 0V2.379l.913.913a.625.625 0 0 0 .884-.884z"
                        }), (0, o.jsx)("path", {
                            d: "M4.4 3.975A1.825 1.825 0 0 0 2.575 5.8v6c0 1.008.817 1.825 1.825 1.825h7.2a1.825 1.825 0 0 0 1.825-1.825v-6A1.825 1.825 0 0 0 11.6 3.975H9.525v1.25H11.6c.318 0 .575.257.575.575v6a.575.575 0 0 1-.575.575H4.4a.575.575 0 0 1-.575-.575v-6c0-.318.257-.575.575-.575h2.075v-1.25z"
                        })]
                    })
                },
                r = (0, a(104509).wt)("squareAndArrowUpSmall", n, "small")
        },
        15021: (e, t, a) => {
            a.d(t, {
                d: () => g
            });
            var o = a(296540);
            let n = "images",
                r = "page-covers",
                i = {
                    [`/${n}/${r}/usda_apple.png`]: 1.6,
                    [`/${n}/${r}/usda_pear.png`]: 1.6
                },
                s = new(a(815048)).O2("AnimatedCoverImageActionBar", async () => Promise.all([a.e(75134), a.e(36556), a.e(55373), a.e(36192), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(87539), a.e(49340), a.e(40454)]).then(a.bind(a, 312446))),
                l = (0, a(815048)._h)(s, e => e.AnimatedCoverImageActionBar);
            var c = a(474848);

            function d({
                src: e,
                placeholderSrc: t,
                placeholderBehavior: n,
                imageStyle: r,
                containerStyle: i,
                onLoadComplete: s,
                testId: l
            }) {
                let g, [u, p] = (0, o.useState)(!0);
                switch (n) {
                    case "force-show-placeholder":
                        g = !0;
                        break;
                    case "show-placeholder-if-loading-src":
                        g = !!t && (u || void 0 === e);
                        break;
                    default:
                        (0, a(722371).HB)(n)
                }
                let h = (0, a(960253).I)(() => {
                    let e = {
                        gridColumn: 1,
                        gridRow: 1
                    };
                    return {
                        container: {
                            display: "grid",
                            ...i
                        },
                        srcWrapper: { ...g && {
                                display: "none"
                            },
                            ...e
                        },
                        placeholderWrapper: {
                            pointerEvents: "none",
                            ...e
                        }
                    }
                }, [i, g]);
                (0, o.useEffect)(() => {
                    void 0 !== e && p(!0)
                }, [e]);
                let f = (0, o.useCallback)(e => {
                    p(!1), null == s || s()
                }, [s]);
                return (0, c.jsxs)("div", {
                    style: h.container,
                    children: [(0, c.jsx)(a(989059).A, {
                        src: e,
                        onLoad: f,
                        style: r,
                        placeholderStyle: h.srcWrapper,
                        placeholderLoadedStyle: h.srcWrapper,
                        testId: l
                    }), t ? (0, c.jsx)(a(989059).A, {
                        src: t,
                        style: r,
                        placeholderStyle: h.placeholderWrapper,
                        placeholderLoadedStyle: h.placeholderWrapper
                    }) : void 0]
                })
            }

            function g(e) {
                let {
                    store: t,
                    disabled: n,
                    paddingRight: r,
                    paddingLeft: s,
                    height: g,
                    proxyWidth: p
                } = e, h = (0, a(109939).tz)(), f = (0, a(533992).v3)(), m = (0, a(533992).Y0)(), b = (0, a(682985).uB)(void 0, a(184332).A), y = (0, a(682985).K8)(() => n || "suggest" === a(708929).Uv.getMode(t) || (0, a(355301).aD)(m), [n, t, m]), v = (0, a(682985).K8)(() => t.getCover(), [t]), k = (0, a(682985).O$)(a(275015).M), {
                    isLoading: C
                } = (0, a(587578).q)(t.id), [x, w] = (0, o.useState)(void 0);
                if (!v) return null;
                let S = k.loadingMode !== a(151525).pF && k.loadingMode !== a(151525).Wc;
                return (0, c.jsx)(a(125374).A, {
                    mouseStore: b,
                    onFlushTemporaryPosition: e => (function(e, t, o) {
                        let {
                            imagePosition: n,
                            reset: r
                        } = e, i = t.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "PageCover.handleFlushTemporaryPosition",
                            environment: o,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                (0, a(217135).y)({
                                    store: t,
                                    coverPosition: n,
                                    transaction: e
                                }), r()
                            }
                        })
                    })(e, t, f),
                    renderControl: ({
                        handleRepositionClick: e,
                        handleSavePositionClick: a,
                        handleCancelClick: o,
                        isVisible: n,
                        isRepositioning: i
                    }) => y ? null : (0, c.jsx)(l, {
                        store: t,
                        mouseStore: b,
                        imageUrl: x,
                        handleRepositionClick: e,
                        handleSavePositionClick: a,
                        handleCancelClick: o,
                        visible: n || C,
                        isRepositioning: i,
                        paddingLeft: s,
                        paddingRight: r
                    }),
                    source: "page",
                    store: t,
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: g,
                        maxHeight: 280,
                        cursor: "default"
                    },
                    preventClickPropagation: !0,
                    render: e => (0, c.jsxs)(o.Fragment, {
                        children: [(0, c.jsx)(a(738251).A, {
                            url: v.cover,
                            isAuthenticated: !0,
                            permissionRecord: v.pointer,
                            width: p,
                            onFinishedLoadingProxyUrl: w,
                            render: (t, a) => {
                                let o = i[v.cover] ? ? 1,
                                    n = (1 - (e.imagePosition || 0)) * 100,
                                    r = {
                                        width: "100%",
                                        height: g,
                                        maxHeight: 280,
                                        objectFit: "cover",
                                        opacity: S ? .5 : 1,
                                        objectPosition: `center ${n}%`,
                                        borderRadius: 0,
                                        ...1 !== o && {
                                            transform: `scale(${o})`,
                                            transformOrigin: `center ${n}%`
                                        }
                                    };
                                return (0, c.jsx)(d, {
                                    src: a,
                                    placeholderSrc: S ? k.dataURL : void 0,
                                    placeholderBehavior: S ? "force-show-placeholder" : "show-placeholder-if-loading-src",
                                    containerStyle: {
                                        width: "100%",
                                        height: g,
                                        maxHeight: 280,
                                        overflow: "hidden"
                                    },
                                    imageStyle: r,
                                    onLoadComplete: u,
                                    testId: "pageCover"
                                })
                            }
                        }, v.pointer.id), S ? (0, c.jsx)(a(252691).X, {
                            variant: "spinner",
                            percentage: k.uploadProgress,
                            text: void 0 !== k.uploadProgress ? void 0 : k.progressText
                        }) : C ? (0, c.jsx)(a(252691).X, {
                            variant: "dots",
                            text: h.formatMessage({
                                id: "CoverImageActionBar.generatingCover",
                                defaultMessage: "Generating..."
                            })
                        }) : (0, c.jsx)(a(893818).A, {
                            blockId: t.id
                        })]
                    })
                })
            }

            function u() {
                a(275015).M.reset()
            }
        },
        31461: (e, t, a) => {
            e.exports = a.p + "868a886d40b596cd.png"
        },
        36663: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowChevronSingleDownFillIcon: () => n,
                iconDefinition: () => o
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.72 6.72 12.56 7.16",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M9.38 13.619a.875.875 0 0 0 1.238 0l5.4-5.4a.875.875 0 0 0-1.237-1.238L10 11.763 5.218 6.98a.875.875 0 1 0-1.237 1.24z"
                    })
                },
                n = (0, a(104509).wt)("arrowChevronSingleDownFill", o, "fill")
        },
        49396: (e, t, a) => {
            e.exports = a.p + "3385d40630727f40.png"
        },
        56281: (e, t, a) => {
            function o(e, t) {
                return t ? t.percent_off ? {
                    amount: e * t.percent_off / 100,
                    monthsRemaining: t.duration_in_months
                } : t.amount_off ? {
                    amount: t.amount_off
                } : {
                    amount: 0
                } : {
                    amount: 0
                }
            }

            function n(e) {
                return "personal" !== e && a(126365).tX.find(t => t === e)
            }
            a.d(t, {
                VV: () => i,
                _6: () => n,
                _q: () => r,
                ex: () => o
            }), a(16280), a(944114), a(898992), a(672577);
            let r = ["kr_card", "kakao_pay", "naver_pay"];

            function i(e) {
                let {
                    currency: t
                } = e, a = ["card", "link"];
                return "EUR" === t && a.push("sepa_debit"), "KRW" === t && a.push(...r), a
            }
        },
        58344: (e, t, a) => {
            e.exports = a.p + "056c81859ba06119.png"
        },
        70703: (e, t, a) => {
            a.d(t, {
                p: () => r
            });
            var o = a(296540);
            let n = {
                isRepositioning: !1
            };

            function r(e) {
                let {
                    currentPosition: t,
                    imageUrl: r,
                    onSavePosition: i,
                    onPositionChange: s,
                    rootRef: l,
                    environment: c
                } = e, [d, g] = (0, o.useState)(n), {
                    isRepositioning: u
                } = d, p = (0, o.useCallback)(() => {
                    g(n)
                }, []), h = (0, o.useMemo)(() => void 0 !== d.temporaryPosition ? d.temporaryPosition : t, [d.temporaryPosition, t]);
                (0, o.useEffect)(() => {
                    s && s(h)
                }, [h, s]);
                let f = (0, o.useCallback)(e => {
                        (0, a(471e3).I)({
                            environment: c
                        });
                        let t = new Image;
                        t.onload = () => {
                            g(e => ({ ...e,
                                isRepositioning: !0,
                                image: t
                            }))
                        };
                        let o = e || r;
                        o && (t.src = o)
                    }, [c, r]),
                    m = (0, o.useCallback)(() => {
                        i(h), p()
                    }, [i, h, p]),
                    b = (0, o.useCallback)(() => {
                        p()
                    }, [p]);
                (0, o.useEffect)(() => {
                    let e = e => {
                        let t = l.current;
                        t && e.target instanceof Node && !t.contains(e.target) && u && m()
                    };
                    return u && window.addEventListener("mousedown", e), () => {
                        window.removeEventListener("mousedown", e)
                    }
                }, [u, m, l]);
                let y = (0, o.useCallback)(e => {
                        let {
                            image: t
                        } = d;
                        if (!t || !u) return;
                        let a = l.current;
                        if (a && a instanceof Element) {
                            let e = a.getBoundingClientRect().width / t.width * t.height;
                            g(t => ({ ...t,
                                startDragImageScreenHeight: e,
                                startDragRenderedPosition: h
                            }))
                        }
                    }, [d, u, h, l]),
                    v = (0, o.useCallback)(e => {
                        if (!u) return;
                        let {
                            startDragImageScreenHeight: t,
                            startDragRenderedPosition: o
                        } = d, n = e.diffY / (t || 0) + (o || 0);
                        g(e => ({ ...e,
                            temporaryPosition: (0, a(381453).LI)((0, a(752239).A)({
                                num: n,
                                min: 0,
                                max: 1
                            }), 4)
                        }))
                    }, [u, d]),
                    k = (0, o.useCallback)(() => {
                        g(e => ({ ...e,
                            startDragImageScreenHeight: void 0,
                            startDragRenderedPosition: void 0
                        }))
                    }, []),
                    C = u ? "ns-resize" : "default";
                return {
                    isRepositioning: u,
                    currentImagePosition: h,
                    handleDragStart: y,
                    handleDragMove: v,
                    handleDragEnd: k,
                    handleStartReposition: f,
                    handleSavePosition: m,
                    handleCancelReposition: b,
                    repositioningCursor: C
                }
            }
        },
        75170: (e, t, a) => {
            a.d(t, {
                A: () => s
            });
            var o = () => a(546605);
            let n = [];
            class r extends o().Store {
                getInitialState() {
                    return {
                        open: !1,
                        createOrUpdateMenuState: void 0,
                        tabSpacesState: {
                            tabSpaces: {},
                            orderedTabSpaceIds: n,
                            ungroupedTabCount: 0,
                            activeTabSectionId: "ungrouped"
                        }
                    }
                }
            }
            let i = new r;
            (0, a(202146).exposeDebugValue)("ElectronTabSpacesMenuStore", i);
            let s = i
        },
        94021: (e, t, a) => {
            a.d(t, {
                A: () => n
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.27 2.85 17.64 14.57",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M1.293 6.583A2.125 2.125 0 0 1 3.12 4.195l9.912-1.321A2.125 2.125 0 0 1 15.418 4.7l.264 1.975h1.103c1.174 0 2.125.951 2.125 2.125v6.5a2.125 2.125 0 0 1-2.125 2.125h-10A2.125 2.125 0 0 1 4.66 15.3v-.465l-.12.016a2.125 2.125 0 0 1-2.388-1.825zm3.367 6.991V8.8c0-1.174.952-2.125 2.125-2.125h7.636l-.242-1.81a.875.875 0 0 0-.983-.752L3.284 5.434a.875.875 0 0 0-.752.983l.86 6.443a.875.875 0 0 0 .982.752zM5.91 8.8v6.5c0 .483.392.875.875.875h10a.875.875 0 0 0 .875-.875V8.8a.875.875 0 0 0-.875-.875h-10a.875.875 0 0 0-.875.875"
                    })
                },
                n = (0, a(104509).wt)("rectangleOnRectangleTilt", o, "default")
        },
        96351: (e, t, a) => {
            a.d(t, {
                B: () => o
            });

            function o({
                openInNew: e,
                url: t,
                makeTabActive: n,
                position: r,
                isNewPage: i,
                environment: s
            }) {
                "tab" === e && n ? (0, a(266527).x)(s, {
                    url: t,
                    position: r,
                    makeTabActive: n,
                    isNewPage: i
                }) : "tab" !== e || n ? "window" === e && (0, a(714770).E)(t) : (0, a(380839).x)(s, {
                    url: t,
                    position: r
                })
            }
        },
        97143: (e, t, a) => {
            a.d(t, {
                L: () => o
            });
            let o = 700
        },
        98303: (e, t, a) => {
            e.exports = a.p + "7a736746212f0f46.png"
        },
        104455: (e, t, a) => {
            e.exports = a.p + "1fac3e057348c509.png"
        },
        113174: (e, t, a) => {
            e.exports = a.p + "5a7ce521ec824981.png"
        },
        121421: (e, t, a) => {
            e.exports = a.p + "6ddab14ae1911792.png"
        },
        124394: (e, t, a) => {
            e.exports = a.p + "e02c2b36d656a621.png"
        },
        125374: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var o = a(296540),
                n = a(474848);
            let r = {
                    position: "relative",
                    width: "100%",
                    zIndex: 1
                },
                i = function(e) {
                    let t = (0, o.useRef)(null),
                        i = (0, a(533992).v3)(),
                        {
                            renderControl: l,
                            onFlushTemporaryPosition: c,
                            style: d,
                            source: g,
                            store: u
                        } = e,
                        p = (0, a(682985).K8)(() => 0 === a(584265).default.state.stores.length, []),
                        [h, f] = (0, o.useState)(!1),
                        m = (0, a(682985).uB)(e.mouseStore, a(184332).A),
                        b = (0, a(682985).K8)(() => m.state.mouseEntered, [m]),
                        y = (0, a(682985).K8)(() => (function(e, t) {
                            if ("gallery" === e || "board" === e) {
                                let e = t.getFormat().card_cover_position;
                                if ((0, a(763230).Et)(e)) return e
                            }
                            if ((0, a(909212).V)()) {
                                var o;
                                return (null == (o = t.getCover()) ? void 0 : o.cover_position) ? ? .5
                            }
                            if (t.isCollectionView()) {
                                let e = t.getCollectionStoreIfSingleSource();
                                if (e) {
                                    let t = e.getFormat().collection_cover_position;
                                    return (0, a(627179).pN)(t) ? .5 : t
                                }
                            }
                            let n = t.getFormat().page_cover_position;
                            return (0, a(763230).Et)(n) ? n : .5
                        })(g, u), [g, u]),
                        {
                            isRepositioning: v,
                            currentImagePosition: k,
                            handleDragStart: C,
                            handleDragMove: x,
                            handleDragEnd: w,
                            handleStartReposition: S,
                            handleSavePosition: M,
                            handleCancelReposition: A,
                            repositioningCursor: I
                        } = (0, a(70703).p)({
                            currentPosition: y,
                            onSavePosition: e => {
                                c({
                                    imagePosition: e,
                                    reset: () => {
                                        m.reset()
                                    }
                                })
                            },
                            rootRef: t,
                            environment: i
                        }),
                        T = (0, a(960253).I)(() => ({
                            dragContainer: {
                                width: "100%",
                                cursor: I
                            }
                        }), [I]);
                    v && !p && A();
                    let _ = (0, o.useMemo)(() => (0, a(381453).nF)(e => {
                            m.setState({ ...m.state,
                                mouseEntered: !0
                            })
                        }, 100), [m]),
                        B = (0, o.useMemo)(() => (0, a(381453).sg)(e => {
                            m.setState({ ...m.state,
                                mouseEntered: !1
                            })
                        }, 100), [m]),
                        j = (0, o.useCallback)((e, t) => {
                            S(t)
                        }, [S]),
                        L = (0, o.useCallback)(e => {
                            M()
                        }, [M]),
                        P = (0, o.useCallback)(e => {
                            let t = e.target;
                            void 0 !== t && t instanceof HTMLElement && (0, a(768397).p)(t) && f(!0)
                        }, []),
                        D = (0, o.useCallback)(() => {
                            f(!0)
                        }, []),
                        W = (0, a(682985).K8)(() => l({
                            handleRepositionClick: j,
                            handleSavePositionClick: L,
                            handleCancelClick: A,
                            isVisible: b || h || v,
                            isRepositioning: v
                        }), [j, L, A, h, v, b, l]),
                        R = (0, a(463846).A)(!!e.preventClickPropagation);
                    return (0, n.jsxs)("div", {
                        ref: t,
                        onFocus: P,
                        onBlur: D,
                        onMouseEnter: _,
                        onMouseMove: _,
                        onMouseLeave: B,
                        ...R,
                        ...(0, a(762507).ow)(r, d),
                        children: [(0, n.jsx)(a(245483).A, {
                            onDraggableDragStart: C,
                            onDraggableDragMove: x,
                            onDraggableDragEnd: w,
                            onDraggableDragCancel: w,
                            disabled: !v,
                            render: t => (0, n.jsx)("div", {
                                style: T.dragContainer,
                                ...t,
                                children: e.render({
                                    imagePosition: k,
                                    isRepositioning: v
                                })
                            })
                        }), (0, n.jsx)(s, {
                            small: e.small,
                            isRepositioning: v
                        }), W]
                    })
                };

            function s({
                small: e,
                isRepositioning: t
            }) {
                if (e) return null;
                let o = {
                    background: "rgba(0, 0, 0, 0.4)",
                    borderRadius: 4,
                    color: a(632079).oZ.white,
                    fontSize: 12,
                    fontFamily: (0, a(699422).vc)(a(849917).locale).sans,
                    width: 180,
                    insetInlineStart: "calc(50% - 90px)",
                    padding: "0.3em 1.5em 0.3em",
                    pointerEvents: "none",
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    textAlign: "center"
                };
                return (0, n.jsx)(a(654979).A, {
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
                    style: o,
                    children: (0, n.jsx)(a(109939).sA, {
                        defaultMessage: "Drag image to reposition",
                        id: "withImageRepositioning.dragImage.text"
                    })
                })
            }
        },
        128743: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowStraightLeftIcon: () => n,
                iconDefinition: () => o
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.97 15.26 12.06",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M2.411 9.79a.6.6 0 0 1 .147-.232l5.4-5.4a.625.625 0 1 1 .884.884L4.509 9.375H17a.625.625 0 1 1 0 1.25H4.509l4.333 4.333a.625.625 0 1 1-.884.884l-5.4-5.4a.62.62 0 0 1-.147-.651"
                    })
                },
                n = (0, a(104509).wt)("arrowStraightLeft", o, "default")
        },
        146535: (e, t, a) => {
            e.exports = a.p + "d96dbdbbe0581121.gif"
        },
        151525: (e, t, a) => {
            a.d(t, {
                Ay: () => c,
                Gi: () => i,
                Wc: () => n,
                pF: () => s,
                vS: () => r
            });
            var o = () => a(546605);
            let n = "loadingLocalImage",
                r = "uploading",
                i = "downloading",
                s = "loaded";
            class l extends o().Store {
                getInitialState() {
                    return {
                        loadingMode: s
                    }
                }
            }
            let c = l
        },
        154457: (e, t, a) => {
            a.d(t, {
                h: () => o
            });
            let o = (0, a(104509).xh)("plus", {
                default: {
                    loader: () => a.e(8881).then(a.bind(a, 581923))
                },
                small: {
                    loader: () => a.e(8881).then(a.bind(a, 638501))
                },
                fill: {
                    loader: () => a.e(8881).then(a.bind(a, 223759))
                },
                fillSmall: {
                    loader: () => a.e(8881).then(a.bind(a, 550246))
                }
            }, ["plus", "add", "new", "create", "increase"])
        },
        161412: (e, t, a) => {
            e.exports = a.p + "e81e609390254b2a.png"
        },
        189760: (e, t, a) => {
            a.d(t, {
                B: () => o,
                r: () => n
            });
            let o = {
                dog: (0, a(109939).YK)({
                    loyalWoof: {
                        id: "dogAccessory.speechBubble.loyalWoof",
                        defaultMessage: "Woof! I’m here to help!"
                    },
                    goodBoyOnDuty: {
                        id: "dogAccessory.speechBubble.goodBoyOnDuty",
                        defaultMessage: "Good boy on duty"
                    },
                    tailWags: {
                        id: "dogAccessory.speechBubble.tailWags",
                        defaultMessage: "*tail wags*"
                    },
                    barkBark: {
                        id: "dogAccessory.speechBubble.barkBark",
                        defaultMessage: "Bark bark! (That means hello)"
                    },
                    fetchedResults: {
                        id: "dogAccessory.speechBubble.fetchedResults",
                        defaultMessage: "I fetched your results!"
                    },
                    goodAI: {
                        id: "dogAccessory.speechBubble.goodAI",
                        defaultMessage: "Who’s a good AI? I’m a good AI."
                    },
                    sitStaySearch: {
                        id: "dogAccessory.speechBubble.sitStaySearch",
                        defaultMessage: "Sit. Stay. Search. Good boy."
                    },
                    willWorkForTreats: {
                        id: "dogAccessory.speechBubble.willWorkForTreats",
                        defaultMessage: "Will work for treats"
                    },
                    loyalSidekick: {
                        id: "dogAccessory.speechBubble.loyalSidekick",
                        defaultMessage: "Your loyal sidekick"
                    },
                    happyPanting: {
                        id: "dogAccessory.speechBubble.happyPanting",
                        defaultMessage: "*happy panting noises*"
                    },
                    sniffingAnswers: {
                        id: "dogAccessory.speechBubble.sniffingAnswers",
                        defaultMessage: "Sniffing out answers for you…"
                    },
                    alwaysByYourSide: {
                        id: "dogAccessory.speechBubble.alwaysByYourSide",
                        defaultMessage: "Always by your side"
                    },
                    dataRetriever: {
                        id: "dogAccessory.speechBubble.dataRetriever",
                        defaultMessage: "Data retriever at your service"
                    },
                    pawsitively: {
                        id: "dogAccessory.speechBubble.pawsitively",
                        defaultMessage: "Pawsitively ready to help"
                    },
                    digIntoThis: {
                        id: "dogAccessory.speechBubble.digIntoThis",
                        defaultMessage: "Let’s dig into this together"
                    },
                    noRuffDays: {
                        id: "dogAccessory.speechBubble.noRuffDays",
                        defaultMessage: "No ruff days on my watch"
                    },
                    boop: {
                        id: "dogAccessory.speechBubble.boop",
                        defaultMessage: "Boop!"
                    },
                    nuzzle: {
                        id: "dogAccessory.speechBubble.nuzzle",
                        defaultMessage: "*nuzzle*"
                    },
                    henloFren: {
                        id: "dogAccessory.speechBubble.henloFren",
                        defaultMessage: "Henlo fren"
                    },
                    arfArf: {
                        id: "dogAccessory.speechBubble.arfArf",
                        defaultMessage: "arf arf"
                    },
                    everyPageNeedsAGoodDog: {
                        id: "dogAccessory.speechBubble.everyPageNeedsAGoodDog",
                        defaultMessage: "Every page needs a good dog"
                    },
                    organizingWorkspace: {
                        id: "dogAccessory.speechBubble.organizingWorkspace",
                        defaultMessage: "Organizing your workspace, one bark at a time"
                    },
                    sidebarRentFree: {
                        id: "dogAccessory.speechBubble.sidebarRentFree",
                        defaultMessage: "I live in your sidebar rent-free"
                    },
                    goodestBoy: {
                        id: "dogAccessory.speechBubble.goodestBoy",
                        defaultMessage: "Notion’s goodest boy"
                    },
                    aiZoomies: {
                        id: "dogAccessory.speechBubble.aiZoomies",
                        defaultMessage: "AI-powered zoomies"
                    },
                    largeLanguageLabrador: {
                        id: "dogAccessory.speechBubble.largeLanguageLabrador",
                        defaultMessage: "Large Language Labrador at your service"
                    },
                    bellyRubsAndDatabases: {
                        id: "dogAccessory.speechBubble.bellyRubsAndDatabases",
                        defaultMessage: "Trained on belly rubs and databases"
                    },
                    neuralPetwork: {
                        id: "dogAccessory.speechBubble.neuralPetwork",
                        defaultMessage: "Neural network? I prefer neural *pet*work"
                    },
                    machineLearning: {
                        id: "dogAccessory.speechBubble.machineLearning",
                        defaultMessage: "Machine learning? I already know sit and stay"
                    },
                    goldenRetrieverModel: {
                        id: "dogAccessory.speechBubble.goldenRetrieverModel",
                        defaultMessage: "I’m basically a golden *retriever* model"
                    },
                    fetchingActionItems: {
                        id: "dogAccessory.speechBubble.fetchingActionItems",
                        defaultMessage: "Fetching your action items…"
                    },
                    sniffingThroughDocs: {
                        id: "dogAccessory.speechBubble.sniffingThroughDocs",
                        defaultMessage: "Sniffing through your docs for answers"
                    },
                    neverLoseTrack: {
                        id: "dogAccessory.speechBubble.neverLoseTrack",
                        defaultMessage: "I never lose track of a page. Or a bone."
                    },
                    toChews: {
                        id: "dogAccessory.speechBubble.toChews",
                        defaultMessage: "Your to-dos are my to-chews"
                    },
                    automatingTailWags: {
                        id: "dogAccessory.speechBubble.automatingTailWags",
                        defaultMessage: "Automating tail wags since 2026"
                    },
                    assistantsAssistant: {
                        id: "dogAccessory.speechBubble.assistantsAssistant",
                        defaultMessage: "I’m the AI assistant’s assistant"
                    },
                    accessorySlot: {
                        id: "dogAccessory.speechBubble.accessorySlot",
                        defaultMessage: "They gave me a whole accessory slot!"
                    },
                    smarterThanILook: {
                        id: "dogAccessory.speechBubble.smarterThanILook",
                        defaultMessage: "Smarter than I look. Cuter than you’d expect."
                    },
                    cuteCommand: {
                        id: "dogAccessory.speechBubble.cuteCommand",
                        defaultMessage: "/ command? More like /cute command"
                    },
                    syncedPup: {
                        id: "dogAccessory.speechBubble.syncedPup",
                        defaultMessage: "Synced pup"
                    },
                    linkedDogtabase: {
                        id: "dogAccessory.speechBubble.linkedDogtabase",
                        defaultMessage: "Linked dog-tabase"
                    },
                    dogEnteredChat: {
                        id: "dogAccessory.speechBubble.dogEnteredChat",
                        defaultMessage: "@dog has entered the chat"
                    },
                    teachNewTricks: {
                        id: "dogAccessory.speechBubble.teachNewTricks",
                        defaultMessage: "You can teach me new tricks!"
                    }
                })
            };

            function n(e) {
                return null != e && e in o
            }
        },
        190462: (e, t, a) => {
            e.exports = a.p + "46e91f58a3919e25.png"
        },
        202151: (e, t, a) => {
            e.exports = a.p + "f6041c6bf8f9f53e.png"
        },
        251861: (e, t, a) => {
            e.exports = a.p + "4166d500779ec2a7.png"
        },
        258527: (e, t, a) => {
            e.exports = a.p + "281f47e883097642.png"
        },
        269515: (e, t, a) => {
            e.exports = a.p + "c6b766e6d181c27f.png"
        },
        275015: (e, t, a) => {
            a.d(t, {
                M: () => o
            });
            let o = new(a(151525)).Ay
        },
        279206: (e, t, a) => {
            e.exports = a.p + "c07b23b03f31c7d0.png"
        },
        279728: (e, t, a) => {
            e.exports = a.p + "134453730e6e0d66.png"
        },
        303626: (e, t, a) => {
            e.exports = a.p + "d6b5a7d3fa534ce3.png"
        },
        313669: (e, t, a) => {
            e.exports = a.p + "c37502124fe50080.png"
        },
        325336: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowUTurnUpLeftIcon: () => n,
                iconDefinition: () => o
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.72 15.76 12.16",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M7.592 4.792a.625.625 0 1 0-.884-.884l-4.4 4.4a.625.625 0 0 0 0 .884l4.4 4.4a.625.625 0 1 0 .884-.884L4.259 9.375H14a2.625 2.625 0 0 1 0 5.25h-1.42a.625.625 0 1 0 0 1.25H14a3.875 3.875 0 0 0 0-7.75H4.259z"
                    })
                },
                n = (0, a(104509).wt)("arrowUTurnUpLeft", o, "default")
        },
        327785: (e, t, a) => {
            a.d(t, {
                D: () => o
            }), a(944114);

            function o() {
                let e = (0, a(972740).L)(),
                    t = (0, a(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    o = (0, a(192159).TB)(t),
                    n = (0, a(682985).K8)(() => o && (0, a(717274).tL)({
                        disableExposureLogging: !0
                    }), [o]),
                    {
                        progress: r
                    } = (0, a(555583).n)({
                        useRedesigned: n
                    }),
                    i = (0, a(262166).HO)((0, a(192159).AI)(t));
                return (0, a(682985).K8)(() => {
                    if (!(0, a(717274).sw)()) return [];
                    let e = [];
                    return i && !o ? e.push("dog") : i && n && r >= 1 && e.push("dog"), e
                }, [i, o, n, r])
            }
        },
        330602: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            let o = a(546605).Store.createValue(!1)
        },
        340916: (e, t, a) => {
            e.exports = a.p + "8cc12fd49d607b13.png"
        },
        348295: (e, t, a) => {
            a.d(t, {
                $: () => o
            });
            let o = a(381453).Bj(e => new(a(345426)).ComputedStore(() => {
                let t = a(728372).AppStoreMainEditorCurrentBlockStore.state,
                    o = t && t.isCollectionView(),
                    n = (0, a(548124).getChatPanelState)(e),
                    r = (null == n ? void 0 : n.isOpen) ? ? !1;
                return a(200083).A.state.isKeyboardMode && !a(330602).A.state && !a(11446).A.isActive() && !o && !a(930179).default.state.open && !a(847591).Ay.state.open && !(0, a(659262).y)() && 0 === a(465361).A.state.banners.length && !a(585823).gZ.state && !a(75170).A.state.open && !r
            }, {
                debugName: "appHelpers.shouldHideTopbarStore"
            }))
        },
        368733: (e, t, a) => {
            e.exports = a.p + "6fd3d43e1320e88a.png"
        },
        386194: (e, t, a) => {
            e.exports = a.p + "6847e3eeb9ba8341.png"
        },
        390123: (e, t, a) => {
            e.exports = a.p + "e67d8b05e7c8adcb.png"
        },
        397900: (e, t, a) => {
            a.r(t), a.d(t, {
                ellipsisIcon: () => n,
                iconDefinition: () => o
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 8.62 14.76 2.76",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"
                    })
                },
                n = (0, a(104509).wt)("ellipsis", o, "default")
        },
        411106: (e, t, a) => {
            a.d(t, {
                L: () => i,
                p: () => r
            });
            let o = ["aiMeetingNotes", "meetAgent", "academy", "consultants"],
                n = ["aiMeetingNotes", "meetAgent", "database", "academy"],
                r = ["aiMeetingNotes", "mailAndCalendar", "aiSearch", "meetAgent"];

            function i(e, t) {
                return e ? "en-US" === t ? o : ["aiMeetingNotes", "meetAgent", "academy", "connectedApps"] : n
            }
        },
        422550: (e, t, a) => {
            e.exports = a.p + "31299301d549e6d5.png"
        },
        441892: (e, t, a) => {
            e.exports = a.p + "46e349aec1d78e16.png"
        },
        445872: (e, t, a) => {
            e.exports = a.p + "58cc418a06d8c43b.png"
        },
        448734: (e, t, a) => {
            a.d(t, {
                jh: () => m,
                wV: () => f,
                Ax: () => b
            });
            var o = a(296540);
            let n = a.p + "f3a1c2555bc7b26c.gif",
                r = a.p + "8ab52115da3e3fbd.gif",
                i = a.p + "160f5613d44c23ea.gif",
                s = a.p + "b68268645067ada1.gif",
                l = a.p + "fce2247087f1d227.gif",
                c = a.p + "896e2255367f2b04.gif";
            var d = a(474848);
            let g = {
                    dark: [a(146535), i, l],
                    light: [a(737497), s, c]
                },
                u = {
                    dark: [i, l],
                    light: [s, c]
                },
                p = new(a(839621)).O(1);

            function h({
                isDarkMode: e,
                onAssetChange: t,
                animationMode: o
            }) {
                let n = "minimal" === o ? u[e ? "dark" : "light"] : g[e ? "dark" : "light"],
                    r = Math.floor(Math.random() * n.length);
                p.enqueue(async () => {
                    t({
                        type: "animated",
                        asset: n[r]
                    }), await new Promise(e => setTimeout(e, 7e3)), t({
                        type: "static",
                        asset: a(200424)
                    })
                }).catch(e => {
                    console.error(`Error showing animated asset: ${e}`)
                })
            }

            function f(e) {
                let {
                    sizeVariant: t,
                    onMouseEnter: i,
                    animationMode: s = "normal"
                } = e, l = (0, a(960253).I)(() => {
                    let e = (0, a(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: a(632079).Tj.assistantCornerButtonBackground,
                            overflow: "hidden",
                            transform: "scaleX(var(--direction, 1))"
                        },
                        faceImg: {
                            height: e,
                            width: e,
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            WebkitTouchCallout: "none",
                            WebkitUserDrag: "none"
                        }
                    }
                }, [t]), [c, g] = (0, a(848135).B)(), u = function(e, t) {
                    let [i, s] = (0, o.useState)({
                        type: "static",
                        asset: a(200424)
                    }), l = "dark" === (0, a(960253).e)();
                    (0, o.useEffect)(() => {
                        let e = setInterval(() => {
                            h({
                                isDarkMode: l,
                                onAssetChange: s,
                                animationMode: t
                            })
                        }, 3e4);
                        return () => {
                            clearInterval(e), p.cancel()
                        }
                    }, [l, t]);
                    let c = (0, o.useMemo)(() => l ? n : r, [l]);
                    return (0, o.useMemo)(() => "animated" === i.type ? i.asset : e && "minimal" !== t && .1 >= Math.random() ? c : (e && h({
                        isDarkMode: l,
                        onAssetChange: s,
                        animationMode: t
                    }), i.asset), [c, i, l, e, t])
                }(g, s);
                return (0, d.jsx)("div", {
                    ref: c,
                    style: l.faceImgWrap,
                    onMouseEnter: i,
                    children: (0, d.jsx)("img", {
                        style: l.faceImg,
                        src: u,
                        alt: "Notion AI face"
                    })
                })
            }

            function m(e) {
                let {
                    sizeVariant: t
                } = e, o = (0, a(960253).I)(() => {
                    let e = (0, a(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: a(632079).Tj.assistantCornerButtonBackground,
                            overflow: "hidden",
                            transform: "scaleX(var(--direction, 1))",
                            WebkitUserDrag: "none"
                        },
                        faceImg: {
                            height: e,
                            width: e
                        }
                    }
                }, [t]), n = g["dark" === (0, a(960253).e)() ? "dark" : "light"][0];
                return (0, d.jsx)("div", {
                    style: o.faceImgWrap,
                    children: (0, d.jsx)("img", {
                        style: o.faceImg,
                        src: n,
                        alt: "Notion AI face"
                    })
                })
            }

            function b(e) {
                let {
                    variant: t,
                    shadowVariant: o = "strong",
                    cursorStyle: n,
                    ...r
                } = e, i = (0, a(960253).e)(), s = (0, a(960253).I)(() => {
                    let e = (0, a(445283).N)(t),
                        r = "dark" === i ? [a(632079).Tj.shadow.base.sm, `0 0 0 1px ${a(632079).Tj.border.secondaryTranslucent}`, "0 0.5px 0 0 rgba(255, 255, 255, 0.20) inset"] : [a(632079).Tj.shadow.base.md, `0 0 0 1px ${a(632079).Tj.border.secondaryTranslucent}`];
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: a(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === o && {
                                boxShadow: e >= 90 ? a(632079).Tj.shadowMDThickerOutline : a(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === o && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? a(632079).Tj.shadowSMThickerOutline : a(632079).Tj.shadow.outline.md
                            },
                            ..."notification" === o && {
                                boxShadow: r.join(", ")
                            },
                            overflow: "hidden",
                            ...n && {
                                cursor: n
                            },
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            WebkitTouchCallout: "none"
                        }
                    }
                }, [t, o, n, i]);
                return (0, d.jsx)("div", {
                    style: s.faceImgWrap,
                    children: (0, d.jsx)(f, {
                        sizeVariant: t,
                        ...r
                    })
                })
            }
        },
        458364: (e, t, a) => {
            a.d(t, {
                x: () => i
            }), a(296540);
            var o = a(474848);
            let n = {
                    "baseball-cap": a(584758),
                    bow: a(313669),
                    cat: a(641085),
                    cherry: a(941670),
                    cowboy: a(161412),
                    crown: a(722784),
                    dog: a(965967),
                    duck: a(190462),
                    firefighter: a(124394),
                    flower: a(784836),
                    glasses: a(31461),
                    headphone: a(202151),
                    leaf: a(938989),
                    magician: a(550122),
                    mustache: a(546579),
                    paprika: a(368733),
                    pencil: a(303626),
                    propeller: a(58344),
                    "safety-hat": a(682759),
                    scarf: a(832338),
                    "seasonal-bat": a(8779),
                    "seasonal-demon": a(269515),
                    "seasonal-frankenstein": a(441892),
                    "seasonal-pumpkin": a(113174),
                    "seasonal-santa-hat": a(970878),
                    "seasonal-new-year": a(465707)
                },
                r = {
                    "baseball-cap": a(340916),
                    bow: a(279206),
                    cat: a(422550),
                    cherry: a(580899),
                    cowboy: a(251861),
                    crown: a(121421),
                    dog: a(528440),
                    duck: a(104455),
                    firefighter: a(498667),
                    flower: a(733785),
                    glasses: a(701743),
                    headphone: a(665008),
                    leaf: a(620842),
                    magician: a(625031),
                    mustache: a(445872),
                    paprika: a(386194),
                    pencil: a(390123),
                    propeller: a(783925),
                    "safety-hat": a(702404),
                    scarf: a(98303),
                    "seasonal-bat": a(688220),
                    "seasonal-demon": a(279728),
                    "seasonal-frankenstein": a(879817),
                    "seasonal-pumpkin": a(258527),
                    "seasonal-santa-hat": a(667115),
                    "seasonal-new-year": a(49396)
                };

            function i({
                accessory: e,
                variant: t = "large",
                shadowVariant: s,
                smallerFace: l,
                accessorySpeechBubblePlacement: c = "none",
                speechBubbleTextOverride: d,
                speechBubbleVerticalOffsetPx: g,
                speechBubbleHorizontalOffsetPx: u,
                animateDogAccessory: p = !0,
                speechBubbleTailCircleTop: h,
                speechBubbleTailCircleInsetInlineStartPx: f,
                ...m
            }) {
                let b = "dark" === (0, a(960253).e)(),
                    y = (0, a(445283).N)(t),
                    v = Math.round(1.5625 * y),
                    k = (0, a(960253).I)(() => ({
                        container: {
                            position: "relative",
                            width: y,
                            height: y,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        faceWrapper: {
                            transform: l ? "scale(0.85)" : void 0
                        },
                        accessoryOverlay: {
                            position: "absolute",
                            width: v,
                            height: v,
                            objectFit: "contain",
                            pointerEvents: "none",
                            top: "50%",
                            transform: "translate(calc(var(--direction, 1) * -50%), -50%) scaleX(var(--direction, 1))",
                            insetInlineStart: "50%"
                        }
                    }), [y, v, l]),
                    C = e ? (b ? r : n)[e] : null;
                return (0, o.jsx)("div", { ...m,
                    children: (0, o.jsxs)("div", {
                        style: k.container,
                        children: [(0, o.jsx)("div", {
                            style: k.faceWrapper,
                            children: (0, o.jsx)(a(448734).Ax, {
                                variant: t,
                                animationMode: e ? "minimal" : "normal",
                                shadowVariant: s
                            })
                        }), "dog" === e ? (0, o.jsx)("div", {
                            style: k.accessoryOverlay,
                            children: (0, o.jsx)(a(503681).z, {
                                size: v,
                                speechBubblePlacement: c,
                                speechBubbleTextOverride: d,
                                speechBubbleVerticalOffsetPx: g,
                                speechBubbleHorizontalOffsetPx: u,
                                speechBubbleTailCircleTop: h,
                                speechBubbleTailCircleInsetInlineStartPx: f,
                                animated: p
                            })
                        }) : C ? (0, o.jsx)("img", {
                            src: C,
                            alt: `${e} accessory`,
                            style: k.accessoryOverlay
                        }) : void 0]
                    })
                })
            }
        },
        463226: (e, t, a) => {
            a.d(t, {
                DV: () => d,
                EQ: () => s,
                Mu: () => l,
                Nr: () => c,
                cP: () => n,
                m0: () => i,
                m2: () => o,
                s8: () => r
            }), a(898992), a(354520);
            let o = {
                "baseball-cap": "permanent",
                bow: "permanent",
                cat: "permanent",
                cherry: "permanent",
                cowboy: "permanent",
                crown: "permanent",
                dog: "unlockable",
                duck: "permanent",
                firefighter: "permanent",
                flower: "permanent",
                glasses: "permanent",
                headphone: "permanent",
                leaf: "permanent",
                magician: "permanent",
                mustache: "permanent",
                paprika: "permanent",
                pencil: "permanent",
                propeller: "permanent",
                "safety-hat": "permanent",
                scarf: "permanent",
                "seasonal-bat": "october25",
                "seasonal-demon": "october25",
                "seasonal-frankenstein": "october25",
                "seasonal-pumpkin": "october25",
                "seasonal-santa-hat": "december25",
                "seasonal-new-year": "january26"
            };

            function n(e) {
                let {
                    store: t,
                    from: o
                } = e;
                if (t.update(e => ({ ...e,
                        isOpen: !0,
                        openCount: e.openCount + 1,
                        from: o || "unknown"
                    })), e.shouldSetSeenPersonalizationSettingsModal) {
                    let t = a(728372).AppStoreSidebarSpaceViewStore.state;
                    t && (0, a(377796).createAndCommit)({
                        environment: e.environment,
                        cellTarget: {
                            spaceWithId: t.getSpaceId()
                        },
                        userAction: "AgentPersonalizationSettings.markSeen",
                        canUndo: !1,
                        perform: e => {
                            let o = t.getSettings() || {},
                                n = { ...o,
                                    agent_personalization_settings: { ...o.agent_personalization_settings || {},
                                        has_already_seen_personalization_settings_modal: !0
                                    }
                                };
                            a(380762).AG(t, e, n)
                        }
                    })
                }
            }

            function r(e) {
                let {
                    store: t
                } = e;
                t.update(e => ({ ...e,
                    isOpen: !1
                }))
            }

            function i(e) {
                let {
                    store: t
                } = e;
                return t.state.isOpen
            }

            function s(e) {
                let {
                    store: t
                } = e;
                return t.state.from || "unknown"
            }

            function l(e) {
                var t;
                let {
                    environment: o,
                    agentName: n,
                    customizationItems: r,
                    newPageIdToAdd: i,
                    contextPageId: s
                } = e, l = a(728372).AppStoreSidebarSpaceViewStore.state;
                if (!l) return;
                let c = null == (t = l.getSettings()) ? void 0 : t.agent_personalization_settings,
                    d = (null == c ? void 0 : c.recently_used_pages) || [];
                i && ((d = d.filter(e => e.page_id !== i)).unshift({
                    page_id: i,
                    used_at: Date.now()
                }), d = d.slice(0, 10));
                let g = {
                    name: n,
                    customization_items: r,
                    context_page_id: s,
                    recently_used_pages: d.length > 0 ? d : void 0,
                    has_already_seen_personalization_settings_modal: (null == c ? void 0 : c.has_already_seen_personalization_settings_modal) || !0
                };
                (0, a(795676).A)(g, c) || (0, a(377796).createAndCommit)({
                    environment: o,
                    cellTarget: {
                        spaceWithId: l.getSpaceId()
                    },
                    userAction: "AgentPersonalizationSettings.save",
                    canUndo: !0,
                    perform: e => {
                        let t = l.getSettings() || {},
                            n = { ...t,
                                agent_personalization_settings: { ...t.agent_personalization_settings || {},
                                    ...g
                                }
                            };
                        a(380762).AG(l, e, n);
                        let r = null == c ? void 0 : c.context_page_id;
                        if (void 0 !== r && r !== s) {
                            let t = new(a(970831)).B(o, {
                                table: a(832375).evP,
                                id: r
                            }).getPromptStore();
                            null != t && t.isDefined() && (0, a(173157).z)({
                                store: t,
                                data: {
                                    alive: !1
                                },
                                transaction: e
                            })
                        }
                        void 0 !== s && (t => {
                            let n = new(a(970831)).B(o, {
                                    table: a(832375).evP,
                                    id: t
                                }),
                                r = n.getSpaceId();
                            if (!r) return;
                            let i = n.getPromptStore();
                            if (i) {
                                if (i.isDefined()) return (0, a(173157).z)({
                                    store: i,
                                    data: {
                                        alive: !0,
                                        prompt_type: "instruction"
                                    },
                                    transaction: e
                                });
                                a(124937).vt({
                                    environment: o,
                                    table: a(832375).dod,
                                    args: {
                                        id: (0, a(986339).yW)(n.id),
                                        space_id: r,
                                        parent_id: n.id,
                                        parent_table: a(832375).evP,
                                        prompt_type: "instruction"
                                    },
                                    inMemoryRecordCache: n.inMemoryRecordCache,
                                    transaction: e
                                })
                            }
                        })(s)
                    }
                })
            }

            function c() {
                let e = (0, a(327785).D)();
                return (0, a(682985).K8)(() => {
                    let t = a(218744).default.getConfigKey("agent_seasonal_accessories", "batch"),
                        n = a(218744).default.getConfigKey("agent_seasonal_accessories", "batch_expiration_time"),
                        r = n && new Date(n) < new Date;
                    return a(485890).sy.filter(a => {
                        let n = o[a];
                        return "permanent" === n || ("unlockable" === n ? e.includes(a) : n === t && !r)
                    })
                }, [e])
            }

            function d(e) {
                let t = c();
                return (0, a(682985).K8)(() => {
                    var o;
                    let n = null == e ? void 0 : e.getSettings();
                    if (!n) return;
                    let r = n.agent_personalization_settings;
                    if (null != r && null != (o = r.customization_items) && o[0]) {
                        let e = r.customization_items[0];
                        if (t.includes(e)) return e
                    }
                    if (null == r ? void 0 : r.has_already_seen_personalization_settings_modal) return;
                    let i = a(218744).default.checkGate({
                            gateName: "adoption_enable_agent_personalization_phase_one",
                            disableExposureLogging: !0
                        }),
                        s = a(218744).default.checkGate({
                            gateName: "adoption_enable_agent_personalization_phase_two",
                            disableExposureLogging: !0
                        });
                    if (i) {
                        let e = a(218744).default.getEligibleGroup({
                            experimentId: "adoption_agent_random_personalization_bandit",
                            defaultGroup: "control"
                        });
                        if (!e) return;
                        let t = function(e) {
                            let {
                                variant: t
                            } = e, o = g[t];
                            if (!o) return;
                            let n = a(218744).default.getEligibleGroup({
                                experimentId: o
                            });
                            if (n && "control" !== n && n && a(485890).sy.includes(n)) return n
                        }({
                            variant: e
                        });
                        if (t) return t
                    } else if (s) {
                        let {
                            accessory: e
                        } = function() {
                            let e, t = a(218744).default.getEligibleGroup({
                                experimentId: "adoption_agent_long_running_bandit",
                                defaultGroup: "ineligible"
                            });
                            if ("test" === t) {
                                let t = a(218744).default.getEligibleGroup({
                                    experimentId: "adoption_agent_personalization_phase_two_long_running"
                                });
                                t && "control" !== t && (e = t)
                            }
                            return {
                                accessory: e,
                                variant: t
                            }
                        }();
                        if (e) return e
                    }
                }, [e, t])
            }
            let g = {
                control: void 0,
                group_one: "adoption_agent_personalization_phase_one_group_one",
                group_two: "adoption_agent_personalization_phase_one_group_two",
                group_three: "adoption_agent_personalization_phase_one_group_three",
                group_four: "adoption_agent_personalization_phase_one_group_four"
            }
        },
        465707: (e, t, a) => {
            e.exports = a.p + "c64bedded659e18d.png"
        },
        476743: (e, t, a) => {
            a.d(t, {
                a: () => o
            });

            function o() {
                return (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore)
            }
        },
        479854: (e, t, a) => {
            a.d(t, {
                b: () => i
            });
            var o = a(296540),
                n = a(474848);
            let r = {
                text: {
                    minWidth: 0,
                    flexShrink: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                },
                content: {
                    cursor: "auto",
                    marginTop: 12
                },
                icon: {
                    width: 16,
                    height: 16,
                    fill: a(632079).Tj.icon.primary
                },
                style0: {
                    flexGrow: 1
                }
            };

            function i(e) {
                var t;
                let [i, s] = o.useState(e.defaultOpen ? ? !1), l = (0, a(960253).I)(() => ({
                    wrap: {
                        cursor: "pointer",
                        ...e.style
                    },
                    header: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        ...!1 === e.isToggleEnabled ? {
                            whiteSpace: "nowrap",
                            height: 28,
                            paddingInlineStart: 8,
                            paddingInlineEnd: 8
                        } : {},
                        ...e.headerStyle
                    },
                    chevronDownIcon: {
                        transition: "transform 0.2s ease-in-out",
                        transformOrigin: "center",
                        transform: i ? "rotate(0deg)" : "rotate(calc(var(--direction, 1) * -90deg))"
                    }
                }), [e.style, e.headerStyle, i, e.isToggleEnabled]), c = (0, o.useCallback)(() => s(!i), [i]), d = (0, n.jsxs)(n.Fragment, {
                    children: [e.left, null == (t = e.icon) ? void 0 : t.call(e, { ...r.icon,
                        ...e.iconStyle
                    }), (0, n.jsx)("span", {
                        style: r.text,
                        children: e.label
                    }), (0, n.jsx)("div", {
                        style: r.style0
                    }), e.right]
                });
                return !1 === e.isToggleEnabled ? (0, n.jsx)("div", {
                    style: e.style,
                    children: (0, n.jsx)("div", {
                        style: l.header,
                        children: d
                    })
                }) : (0, n.jsxs)("div", {
                    style: l.wrap,
                    children: [(0, n.jsxs)(a(406910).p, {
                        onClick: c,
                        style: l.header,
                        children: [d, (0, n.jsx)(a(16275).I, {
                            icon: a(87963).arrowChevronSingleDownIcon,
                            size: "sm",
                            colorVariant: "secondary",
                            style: l.chevronDownIcon
                        })]
                    }), i ? (0, n.jsx)("div", {
                        style: r.content,
                        children: e.children
                    }) : void 0]
                })
            }
        },
        498667: (e, t, a) => {
            e.exports = a.p + "ebbfc682ffb9183b.png"
        },
        503681: (e, t, a) => {
            a.d(t, {
                z: () => k
            });
            var o = a(296540);
            a(581454);
            var n = a(474848);
            let r = `
	animation-duration: 2s;
	animation-direction: alternate;
	animation-iteration-count: infinite;
	animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
`,
                i = "M84.2513 81.7395C88.977 82.4048 90.6717 77.9739 90.8562 75.5247C91.1236 73.7435 93.5045 77.4968 90.1838 81.7561C88.1114 84.4142 84.495 84.3517 82.7126 83.226C82.1051 82.9047 81.0102 81.2832 84.2513 81.7395Z",
                s = "M70.5719 72.9453C69.9099 76.0342 66.8682 80.1714 66.3343 81.996C66.193 82.4788 65.8919 84.6494 67.5925 85.3012C68.6496 85.7063 70.0486 85.2456 71.0672 83.8076C71.9661 82.5385 73.2389 80.3849 73.7254 78.8907",
                l = "M81.3674 80.6071C80.0096 80.6071 75.6271 81.1468 75.3813 83.6491C75.3069 84.406 75.897 85.2639 76.991 85.2639C80.7189 85.2639 83.586 85.2878 83.9051 85.2639C86.1871 85.093 86.7281 83.2789 86.6934 81.7783C86.634 79.2117 85.903 77.1869 84.9662 75.5C83.2121 72.3413 80.7365 70.3673 80.5986 68.2393",
                c = "M81.8804 67.393L82.5295 65.5811C83.4844 62.2994 81.8804 57.7899 80.228 55.9816C79.6109 55.3062 77.9062 53.833 75.3259 53.833C73.4755 53.833 71.7706 54.8378 70.9613 55.6264C69.6193 56.934 69.1684 58.8522 68.4948 60.2513C67.4927 62.3325 65.1729 61.6477 64.0865 63.9062C63.5091 64.9101 63.3667 67.0446 64.0868 68.3343C64.807 69.624 66.6161 70.4021 68.4948 70.7995C70.264 71.1737 71.5432 71.2337 72.9333 71.2337C73.7944 71.2252 75.5588 71.0894 77.3272 70.4021",
                d = "M66.9294 64.6895C66.9001 65.1717 66.656 65.5492 65.662 65.4888C64.668 65.4285 64.4714 65.0242 64.5007 64.542C64.53 64.0598 65.0974 63.702 65.768 63.7427C66.4387 63.7834 66.9586 64.2073 66.9294 64.6895Z",
                g = "M79.6816 66.979C79.6816 64.529 80.4154 60.3832 81.1518 57.416C83.6256 60.95 86.3042 66.884 83.3275 68.6685C81.504 69.7617 79.6816 69.0329 79.6816 66.979Z",
                u = "M72.2065 59.658C71.7961 59.6024 71.5075 59.231 71.5817 58.6829C71.6559 58.1348 72.0328 57.8536 72.4433 57.9091C72.8538 57.9647 73.1335 58.4013 73.0681 58.8842C73.0028 59.3671 72.617 59.7135 72.2065 59.658Z",
                p = "M75.7954 59.8435C75.3849 59.7879 75.0964 59.4166 75.1706 58.8685C75.2448 58.3204 75.6217 58.0391 76.0322 58.0947C76.4426 58.1503 76.7224 58.5868 76.657 59.0697C76.5916 59.5526 76.2059 59.8991 75.7954 59.8435Z",
                h = "M73.062 79.4326 C71.7367 81.3275 71.5151 81.617 71.1477 83.1804 C70.8243 84.5568 71.8802 85.8228 73.738 85.2791 C75.5959 84.7353 77.938 81.4043 77.938 79.4327 C77.938 79.4327 77.938 79.4327 77.938 79.4327",
                f = "M72.4372 80.6925C68.0273 84 73.4246 85.323 76.0274 84.4997C78.874 83.5992 81.1506 81.6677 81.1448 79.1513C81.1423 78.0631 80.9619 76.9652 80.9368 76.7693L72.5612 74.2937C72.4563 77.7978 72.5212 79.1973 72.4372 80.6925Z",
                m = "M80.9666 77.4694C80.4498 79.3203 80.3912 80.6835 80.4498 81.2046C80.7488 83.8633 78.4457 84.1225 74.5339 84.5623C70.1565 85.0545 69.7203 82.221 72.7191 80.4413C71.6821 78.44 72.4056 75.8018 72.9875 74.8239",
                b = `
	#agent-acc-dog-left-leg-fill {
		animation-name: agent-acc-dog-left-leg-fill;
		${r}
	}
	@keyframes agent-acc-dog-left-leg-fill {
		0%, 40% { d: path("M72.4372 80.6925C68.0273 84 73.4246 85.323 76.0274 84.4997C78.874 83.5992 81.1506 81.6677 81.1448 79.1513C81.1423 78.0631 80.9619 76.9652 80.9368 76.7693L72.5612 74.2937C72.4563 77.7978 72.5212 79.1973 72.4372 80.6925Z"); }
		60%, 100% { d: path("M67.4372 81.6925C63.0273 85 68.4246 86.323 71.0274 85.4997C73.874 84.5992 76.1506 82.6677 76.1448 80.1513C76.1423 79.0631 75.9619 77.9652 75.9368 77.7693L67.5612 75.2937C67.4563 78.7978 67.5212 80.1973 67.4372 81.6925Z"); }
	}

	#agent-acc-dog-left-leg-stroke {
		animation-name: agent-acc-dog-left-leg-stroke;
		${r}
	}
	@keyframes agent-acc-dog-left-leg-stroke {
		0%, 40% { d: path("M80.9666 77.4694C80.4498 79.3203 80.3912 80.6835 80.4498 81.2046C80.7488 83.8633 78.4457 84.1225 74.5339 84.5623C70.1565 85.0545 69.7203 82.221 72.7191 80.4413C71.6821 78.44 72.4056 75.8018 72.9875 74.8239"); }
		60%, 100% { d: path("M75.9666 78.4694C75.4498 80.3203 75.3912 81.6835 75.4498 82.2046C75.7488 84.8633 73.4457 85.1225 69.5339 85.5623C65.1565 86.0545 64.7203 83.221 67.7191 81.4413C66.6821 79.44 67.4056 76.8018 67.9875 75.8239"); }
	}

	#agent-acc-dog-body-fill {
		animation-name: agent-acc-dog-body-fill;
		${r}
	}
	@keyframes agent-acc-dog-body-fill {
		0%, 40% { d: path("M68.5167 78.823C69.8415 76.5999 69.839 74.928 70.6031 73.1034C71.1234 70.4713 72.2666 69.7739 71.7436 67.9773C71.2207 66.1807 77.0344 65.2132 80.0066 64.9541C79.9864 66.4045 80.3439 69.6312 81.9353 70.9346C83.4208 73.1034 86.8612 75.7498 86.6665 82.0341C86.62 83.5343 86.2068 84.9953 84.4783 85.2635C84.1621 85.3126 80.7189 85.2635 76.9909 85.2635C75.8969 85.2635 75.3068 84.4056 75.3812 83.6487L72.4044 82.6585C72.1072 83.286 71.0647 84.3211 70.5806 84.7602C69.2791 86.036 67.2704 85.6107 66.9509 84.2668C66.5687 82.6594 67.7553 80.1008 68.5167 78.823Z"); }
		60%, 100% { d: path("M81.0632 70.0344C77.2518 69.1088 71.6576 71.5318 71.3769 71.6722L64.9737 70.7318L64.8825 81.0367C62.5186 81.446 61.5576 81.9423 61.3013 84.2131C61.0669 86.2894 61.8662 87.6019 67.3859 87.1218C69.259 86.7053 72.5358 86.0087 74.566 85.6664C76.4228 86.1123 79.5177 85.6581 82.8882 85.1022C86.5194 84.5032 87.63 79.9392 87.474 78.1766C87.3805 74.6202 84.3388 70.8299 81.0632 70.0344Z"); }
	}

	#agent-acc-dog-left-hand-fill {
		animation-name: agent-acc-dog-left-hand-fill;
		${r}
	}
	@keyframes agent-acc-dog-left-hand-fill {
		0%, 40% { d: path("M70.6026 72.8877C70.0746 74.8362 69.6915 76.4536 68.3667 78.6767C67.6053 79.9545 65.9049 82.533 66.4449 84.2665C66.8557 85.5853 68.7731 86.0357 70.0746 84.7599C70.5587 84.3208 71.6012 83.2856 71.8984 82.6582Z"); }
		60%, 100% { d: path("M54.3039 83.5936C54.6481 80.5445 59.7873 79.9305 61.9469 79.7188C65.9916 80.4513 73.3327 82.3533 70.3394 84.1016C69.628 83.9999 64.1182 85.1602 61.4523 85.7531C55.6035 86.7059 54.0695 85.6699 54.3039 83.5936Z"); }
	}

	#agent-acc-dog-left-hand-stroke {
		animation-name: agent-acc-dog-left-hand-stroke;
		${r}
	}
	@keyframes agent-acc-dog-left-hand-stroke {
		0%, 40% { d: path("M70.5719 72.9453C69.9099 76.0342 66.8682 80.1714 66.3343 81.996C66.193 82.4788 65.8919 84.6494 67.5925 85.3012C68.6496 85.7063 70.0486 85.2456 71.0672 83.8076C71.9661 82.5385 73.2389 80.3849 73.7254 78.8907"); }
		60%, 100% { d: path("M65.3076 78.1101C62.2783 79.3049 58.5688 79.9167 56.2894 81.0063C55.4092 81.4271 53.5897 83.2138 54.3842 84.8525C54.9456 86.0103 56.4324 86.1452 58.1945 86.1452C59.8961 86.1452 63.4693 85.3624 65.7494 84.6478"); }
	}

	#agent-acc-dog-tail {
		animation-name: agent-acc-dog-tail;
		${r}
	}
	@keyframes agent-acc-dog-tail {
		0%, 40% { d: path("M84.2513 81.7395C88.977 82.4048 90.6717 77.9739 90.8562 75.5247C91.1236 73.7435 93.5045 77.4968 90.1838 81.7561C88.1114 84.4142 84.495 84.3517 82.7126 83.226C82.1051 82.9047 81.0102 81.2832 84.2513 81.7395Z"); }
		60%, 80%, 100% { d: path("M85.2796 79.255C90.0172 78.6799 90.5127 73.9619 90.0597 71.5479C89.8591 69.7579 93.1268 72.7709 91.016 77.7421C89.6987 80.8444 86.1884 81.7162 84.176 81.0879C83.5063 80.934 82.0305 79.6494 85.2796 79.255Z"); }
		70%, 90% { d: path("M85.7386 77.9554C90.0132 80.0775 93.0191 76.4074 93.9668 74.1415C94.7825 72.5356 95.8577 76.8483 91.363 79.8426C88.5579 81.7112 85.1459 80.5111 83.8096 78.8806C83.3345 78.3841 82.807 76.5 85.7386 77.9554Z"); }
	}

	#agent-acc-dog-right-hand-fill {
		animation-name: agent-acc-dog-right-hand-fill;
		${r}
	}
	@keyframes agent-acc-dog-right-hand-fill {
		0%, 40% { d: path("M71.1477 83.1804 C71.5151 81.6169 71.7367 81.3274 73.062 79.4325 L77.938 79.4326 C77.938 81.4043 75.5959 84.7353 73.738 85.2791 C71.8802 85.8228 70.8243 84.5568 71.1477 83.1804 C71.1477 83.1804 71.1477 83.1804 71.1477 83.1804"); }
		60%, 100% { d: path("M68.7864 80.4014 C68.5973 80.4149 67.5291 80.4608 66.5068 80.6378 C64.1429 81.047 61.3414 82.1238 61.0851 84.3946 C60.8507 86.4708 62.3848 87.5069 68.2335 86.5541 C69.6201 86.2457 71.776 85.7839 73.6259 85.4259 C73.6259 85.4259 73.6259 85.4259 73.6259 85.4259"); }
	}

	#agent-acc-dog-right-hand-stroke {
		animation-name: agent-acc-dog-right-hand-stroke;
		${r}
	}
	@keyframes agent-acc-dog-right-hand-stroke {
		0%, 40% { d: path("M72.7738 77.2686C71.6065 78.9254 70.1924 81.5438 69.9469 82.3827C69.7863 82.9317 69.6719 84.857 71.6065 85.2869C72.9594 85.5875 74.7942 85.2229 75.9524 83.5878C76.9746 82.1448 78.4219 79.6959 78.9751 77.9969"); }
		60%, 100% { d: path("M68.7492 80.3111C65.1668 80.5556 63.4526 81.3209 62.2581 82.3619C61.2976 83.199 60.324 85.0797 61.6154 86.2501C62.5184 87.0686 65.4128 86.9896 67.1572 86.7404C69.3004 86.4343 71.5259 85.8499 73.5463 85.084"); }
	}

	#agent-acc-dog-back-stroke {
		animation-name: agent-acc-dog-back-stroke;
		${r}
	}
	@keyframes agent-acc-dog-back-stroke {
		0%, 40% { d: path("M81.3674 80.6071C80.0096 80.6071 75.6271 81.1468 75.3813 83.6491C75.3069 84.406 75.897 85.2639 76.991 85.2639C80.7189 85.2639 83.586 85.2878 83.9051 85.2639C86.1871 85.093 86.7281 83.2789 86.6934 81.7783C86.634 79.2117 85.903 77.1869 84.9662 75.5C83.2121 72.3413 80.7365 70.3673 80.5986 68.2393"); }
		60%, 100% { d: path("M80,75C78.1223,75.4266 76.8976,78.4574 76.8976,80.5163C74.5984,81.1775 72,83.5 74,85.5C75.3503,86.8503 79.5168,85.6581 82.8873,85.1022C86.5185,84.5032 87.6291,79.9392 87.4731,78.1766C87.3795,74.6202 84.3379,70.8299 81.0623,70.0344C77.2509,69.1088 71.6567,71.5318 71.376,71.6722"); }
	}

	#agent-acc-dog-head-stroke {
		animation-name: agent-acc-dog-head-stroke;
		${r}
	}
	@keyframes agent-acc-dog-head-stroke {
		0%, 40% { d: path("M81.8804 67.393L82.5295 65.5811C83.4844 62.2994 81.8804 57.7899 80.228 55.9816C79.6109 55.3062 77.9062 53.833 75.3259 53.833C73.4755 53.833 71.7706 54.8378 70.9613 55.6264C69.6193 56.934 69.1684 58.8522 68.4948 60.2513C67.4927 62.3325 65.1729 61.6477 64.0865 63.9062C63.5091 64.9101 63.3667 67.0446 64.0868 68.3343C64.807 69.624 66.6161 70.4021 68.4948 70.7995C70.264 71.1737 71.5432 71.2337 72.9333 71.2337C73.7944 71.2252 75.5588 71.0894 77.3272 70.4021"); }
		60%, 100% { d: path("M72.9796 76.7831L73.4539 74.9874C74.1006 71.7533 72.1856 67.5504 70.4473 65.9484C69.7982 65.3501 68.0374 64.0747 65.5566 64.2881C63.7775 64.4411 62.2214 65.5481 61.5084 66.3732C60.3263 67.7413 60.0514 69.6228 59.5194 71.0237C58.7281 73.1075 56.441 72.6409 55.5832 74.9021C55.1111 75.9151 55.1507 77.979 55.9497 79.1594C56.7487 80.3398 58.5525 80.9383 60.3916 81.165C62.1236 81.3785 63.3584 81.3304 64.695 81.2154C65.2965 81.1577 66.3518 80.9958 67.5148 80.6013"); }
	}

	#agent-acc-dog-nose {
		animation-name: agent-acc-dog-nose;
		${r}
	}
	@keyframes agent-acc-dog-nose {
		0%, 40% { d: path("M66.9294 64.6895C66.9001 65.1717 66.656 65.5492 65.662 65.4888C64.668 65.4285 64.4714 65.0242 64.5007 64.542C64.53 64.0598 65.0974 63.702 65.768 63.7427C66.4387 63.7834 66.9586 64.2073 66.9294 64.6895Z"); }
		60%, 100% { d: path("M58.5402 76.2138C58.4739 76.628 58.1564 76.9215 56.9668 76.7309C55.7772 76.5402 55.5673 76.1622 55.6337 75.748C55.7001 75.3338 56.4046 75.1023 57.2072 75.231C58.0098 75.3596 58.6066 75.7996 58.5402 76.2138Z"); }
	}

	#agent-acc-dog-right-ear {
		animation-name: agent-acc-dog-right-ear;
		${r}
	}
	@keyframes agent-acc-dog-right-ear {
		0%, 40% { d: path("M79.6816 66.979C79.6816 64.529 80.4154 60.3832 81.1518 57.416C83.6256 60.95 86.3042 66.884 83.3275 68.6685C81.504 69.7617 79.6816 69.0329 79.6816 66.979Z"); }
		60%, 100% { d: path("M70.8327 76.5672C70.6302 74.2117 70.9928 70.1651 71.4555 67.2515C74.1262 70.4446 77.1922 75.9282 74.4778 77.89C72.815 79.0918 71.0026 78.5418 70.8327 76.5672Z"); }
	}

	#agent-acc-dog-left-eye {
		animation-name: agent-acc-dog-left-eye;
		${r}
	}
	@keyframes agent-acc-dog-left-eye {
		0%, 40% { d: path("M72.2065 59.658C71.7961 59.6024 71.5075 59.231 71.5817 58.6829C71.6559 58.1348 72.0328 57.8536 72.4433 57.9091C72.8538 57.9647 73.1335 58.4013 73.0681 58.8842C73.0028 59.3671 72.617 59.7135 72.2065 59.658Z"); }
		60%, 100% { d: path("M63.1777 70.9001C62.6811 70.8759 62.2995 70.4261 62.3347 69.7036C62.37 68.981 62.7936 68.5705 63.2902 68.5948C63.7869 68.619 64.1643 69.1547 64.1332 69.7913C64.1021 70.4279 63.6743 70.9244 63.1777 70.9001Z"); }
	}

	#agent-acc-dog-right-eye {
		animation-name: agent-acc-dog-right-eye;
		${r}
	}
	@keyframes agent-acc-dog-right-eye {
		0%, 40% { d: path("M75.7954 59.8435C75.3849 59.7879 75.0964 59.4166 75.1706 58.8685C75.2448 58.3204 75.6217 58.0391 76.0322 58.0947C76.4426 58.1503 76.7224 58.5868 76.657 59.0697C76.5916 59.5526 76.2059 59.8991 75.7954 59.8435Z"); }
		60%, 100% { d: path("M66.6933 71.2234C66.1967 71.1991 65.8151 70.7493 65.8504 70.0268C65.8856 69.3043 66.3092 68.8938 66.8059 68.918C67.3025 68.9423 67.6799 69.478 67.6488 70.1146C67.6177 70.7512 67.19 71.2476 66.6933 71.2234Z"); }
	}

	/* Dark-mode outline duplicates */
	#agent-acc-dog-tail-outline {
		animation-name: agent-acc-dog-tail;
		${r}
	}
	#agent-acc-dog-left-hand-stroke-outline {
		animation-name: agent-acc-dog-left-hand-stroke;
		${r}
	}
	#agent-acc-dog-back-stroke-outline {
		animation-name: agent-acc-dog-back-stroke;
		${r}
	}
	#agent-acc-dog-head-stroke-outline {
		animation-name: agent-acc-dog-head-stroke;
		${r}
	}
	#agent-acc-dog-nose-outline {
		animation-name: agent-acc-dog-nose;
		${r}
	}
	#agent-acc-dog-right-ear-outline {
		animation-name: agent-acc-dog-right-ear;
		${r}
	}
	#agent-acc-dog-left-eye-outline {
		animation-name: agent-acc-dog-left-eye;
		${r}
	}
	#agent-acc-dog-right-eye-outline {
		animation-name: agent-acc-dog-right-eye;
		${r}
	}
	#agent-acc-dog-right-hand-stroke-outline {
		animation-name: agent-acc-dog-right-hand-stroke;
		${r}
	}
	#agent-acc-dog-left-leg-fill-outline {
		animation-name: agent-acc-dog-left-leg-fill;
		${r}
	}
	#agent-acc-dog-left-leg-stroke-outline {
		animation-name: agent-acc-dog-left-leg-stroke;
		${r}
	}
`,
                y = {
                    position: "relative",
                    pointerEvents: "none"
                },
                v = {
                    pointerEvents: "visiblePainted"
                };

            function k({
                size: e,
                speechBubblePlacement: t,
                speechBubbleTextOverride: r,
                speechBubbleVerticalOffsetPx: C = 20,
                speechBubbleHorizontalOffsetPx: x = 12,
                speechBubbleTailCircleTop: w,
                speechBubbleTailCircleInsetInlineStartPx: S,
                animated: M = !0
            }) {
                let A = "dark" === (0, a(960253).e)() ? "#d3d3d3" : "white",
                    {
                        showBubble: I,
                        isHiding: T,
                        currentPhrase: _,
                        handleMouseEnter: B,
                        handleMouseLeave: j
                    } = function(e, t) {
                        let n = (0, a(109939).tz)(),
                            r = a(189760).B.dog,
                            i = n.locale.startsWith("en"),
                            s = "none" !== e && !!r && i,
                            l = (0, o.useMemo)(() => t ? [t] : r ? (0, a(763230).k4)(Object.values(r).map(e => n.formatMessage(e))) : [], [n, r, t]),
                            [c, d] = (0, o.useState)(!1),
                            [g, u] = (0, o.useState)(!1),
                            p = (0, o.useRef)(0),
                            [h, f] = (0, o.useState)(""),
                            m = (0, o.useRef)(),
                            b = (0, o.useCallback)(() => {
                                s && 0 !== l.length && (clearTimeout(m.current), f(l[p.current % l.length]), p.current++, u(!1), d(!0))
                            }, [l, s]),
                            y = (0, o.useCallback)(() => {
                                s && (u(!0), m.current = setTimeout(() => {
                                    d(!1), u(!1)
                                }, 150))
                            }, [s]);
                        return {
                            showBubble: s && (c || g),
                            isHiding: g,
                            currentPhrase: h,
                            handleMouseEnter: s ? b : void 0,
                            handleMouseLeave: s ? y : void 0
                        }
                    }(t, r),
                    L = "none" !== t ? t : "topRight";
                return (0, n.jsxs)("div", {
                    style: y,
                    children: [I ? (0, n.jsx)(a(679416).P, {
                        placement: L,
                        animated: M,
                        isHiding: T,
                        verticalOffsetPx: C,
                        horizontalOffsetPx: x,
                        tailCircleTop: w,
                        tailCircleInsetInlineStartPx: S,
                        children: _
                    }) : void 0, M ? (0, n.jsx)("style", {
                        children: b
                    }) : void 0, (0, n.jsxs)("svg", {
                        width: e,
                        height: e,
                        viewBox: "0 0 100 100",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: v,
                        onMouseEnter: B,
                        onMouseLeave: j,
                        children: [(0, n.jsxs)("g", {
                            children: [(0, n.jsx)("path", {
                                id: "agent-acc-dog-tail-outline",
                                d: i,
                                stroke: A,
                                strokeWidth: "4"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-left-leg-fill-outline",
                                d: f,
                                stroke: A,
                                strokeWidth: "4"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-left-leg-stroke-outline",
                                d: m,
                                stroke: A,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-left-hand-stroke-outline",
                                d: s,
                                stroke: A,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-back-stroke-outline",
                                d: l,
                                stroke: A,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-head-stroke-outline",
                                d: c,
                                stroke: A,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-nose-outline",
                                d: d,
                                stroke: A,
                                strokeWidth: "3"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-right-ear-outline",
                                d: g,
                                stroke: A,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-left-eye-outline",
                                d: u,
                                stroke: A,
                                strokeWidth: "3"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-right-eye-outline",
                                d: p,
                                stroke: A,
                                strokeWidth: "3"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-right-hand-stroke-outline",
                                d: h,
                                stroke: A,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            })]
                        }), (0, n.jsxs)("g", {
                            children: [(0, n.jsx)("path", {
                                id: "agent-acc-dog-tail",
                                d: i,
                                fill: "black"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-left-leg-fill",
                                d: f,
                                fill: "white"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-left-leg-stroke",
                                d: m,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-body-fill",
                                d: "M68.5167 78.823C69.8415 76.5999 69.839 74.928 70.6031 73.1034C71.1234 70.4713 72.2666 69.7739 71.7436 67.9773C71.2207 66.1807 77.0344 65.2132 80.0066 64.9541C79.9864 66.4045 80.3439 69.6312 81.9353 70.9346C83.4208 73.1034 86.8612 75.7498 86.6665 82.0341C86.62 83.5343 86.2068 84.9953 84.4783 85.2635C84.1621 85.3126 80.7189 85.2635 76.9909 85.2635C75.8969 85.2635 75.3068 84.4056 75.3812 83.6487L72.4044 82.6585C72.1072 83.286 71.0647 84.3211 70.5806 84.7602C69.2791 86.036 67.2704 85.6107 66.9509 84.2668C66.5687 82.6594 67.7553 80.1008 68.5167 78.823Z",
                                fill: "white"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-left-hand-stroke",
                                d: s,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                fill: "white"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-back-stroke",
                                d: l,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-head-stroke",
                                d: c,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                fill: "white"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-nose",
                                d: d,
                                fill: "black",
                                stroke: "black"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-right-ear",
                                d: g,
                                fill: "black",
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-left-eye",
                                d: u,
                                fill: "black",
                                stroke: "black",
                                strokeWidth: "0.5"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-right-eye",
                                d: p,
                                fill: "black",
                                stroke: "black",
                                strokeWidth: "0.5"
                            }), (0, n.jsx)("path", {
                                id: "agent-acc-dog-right-hand-stroke",
                                d: h,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                fill: "white"
                            })]
                        })]
                    })]
                })
            }
        },
        522259: (e, t, a) => {
            a.d(t, {
                Ou: () => s,
                VZ: () => c,
                WB: () => i,
                Wd: () => l,
                qA: () => r,
                wm: () => d
            }), a(16280), a(944114), a(581454);
            var o = () => a(647095),
                n = () => a(258024);
            async function r(e) {
                let {
                    environment: t,
                    threadId: a,
                    spaceId: o,
                    inferenceId: n,
                    traceId: r
                } = e, i = await t.api.callApi({
                    eventName: "getInferenceTranscriptInferences",
                    environment: t,
                    data: {
                        threadId: a,
                        spaceId: o,
                        ...n ? {
                            inferenceId: n
                        } : {},
                        ...r ? {
                            traceId: r
                        } : {}
                    }
                });
                return "failed" === i.type ? {
                    inferenceOptions: [],
                    allTraces: []
                } : i.data
            }

            function i(e) {
                let {
                    environment: t,
                    feedbackType: o,
                    userComment: n,
                    spaceId: r,
                    traceId: i,
                    type: s,
                    threadId: l,
                    stepId: c,
                    config: d,
                    promptKey: g
                } = e, u = (0, a(220800).kM)(d), p = {
                    type: s,
                    traceId: i,
                    spaceId: r,
                    feedbackType: o,
                    userComment: n,
                    threadId: l,
                    stepId: c,
                    model: (0, a(426048).R5)(u) ? u : void 0,
                    promptKey: g
                };
                t.api.callCellCompatibleApi({
                    eventName: "saveInferenceTranscriptFeedback",
                    environment: t,
                    data: p,
                    cellNavigation: {
                        spaceId: r
                    }
                })
            }
            async function s(e) {
                let {
                    environment: t,
                    clientStore: o,
                    inference: r,
                    threadId: i
                } = e, s = o.getOrCreateClientAIChatThreadStore(i), l = s.state.inferenceKeysToAnnotations[r.key], c = o.state.model ? ? "default", d = (0, a(328765).S)();
                if (!d) throw Error("No current space store");
                let g = await t.api.callStreamApi({
                    eventName: "runInferenceTranscript",
                    environment: t,
                    data: {
                        transcript: [{
                            id: (0, a(295447).Z1)({
                                environment: t,
                                table: a(832375).mSw,
                                spaceId: d.id
                            }),
                            type: "config",
                            value: {
                                type: "debug-inference",
                                inference: { ...r.value,
                                    input: { ...r.value.input,
                                        ...l ? {
                                            annotation: l
                                        } : void 0
                                    }
                                },
                                model: c
                            }
                        }],
                        traceId: (0, a(4962).Ay)(),
                        spaceId: d.id,
                        generateTitle: !1,
                        isUserInAnySalesAssistedSpace: (0, a(598132).h0)(t),
                        isSpaceSalesAssisted: (0, a(598132).lM)(t, d.id)
                    },
                    headers: (0, a(115118).WS)({
                        spaceId: d.id
                    })
                });
                if ("failed" === g.type) throw g.error;
                let u = [];
                if (a(331653).hS.is(g.data)) {
                    for await (let e of g.data) if ("debug-inference" === e.type) u.push(e.value), s.setState({ ...s.state,
                        inferences: s.state.inferences.map(e => e.key === r.key ? { ...e,
                            value: { ...e.value,
                                expected: (0, n().Zl)(u)
                            }
                        } : e)
                    });
                    else if ("error" === e.type) throw e.message
                }
            }
            async function l(e) {
                let {
                    environment: t,
                    request: n,
                    memory: r,
                    onChange: i,
                    clientStore: s
                } = e, l = s.state.model ? ? "default", c = (0, a(328765).S)();
                if (!c) throw Error("No current space store");
                if (!r.feedback) return void o().rG({
                    message: "No feedback found"
                });
                let d = await t.api.callStreamApi({
                    eventName: "runInferenceTranscript",
                    environment: t,
                    data: {
                        transcript: [{
                            id: (0, a(295447).Z1)({
                                environment: t,
                                table: a(832375).mSw,
                                spaceId: c.id
                            }),
                            type: "config",
                            value: {
                                type: "memory-agent",
                                request: n,
                                feedback: r.feedback,
                                model: l
                            }
                        }],
                        traceId: (0, a(4962).Ay)(),
                        spaceId: c.id,
                        generateTitle: !1,
                        isUserInAnySalesAssistedSpace: (0, a(598132).h0)(t),
                        isSpaceSalesAssisted: (0, a(598132).lM)(t, c.id)
                    },
                    headers: (0, a(115118).WS)({
                        spaceId: c.id
                    })
                });
                if ("failed" === d.type) return void o().Qg(d);
                if (a(331653).hS.is(d.data))
                    for await (let e of d.data)
                "memory-agent" === e.type ? i(e.value) : "error" === e.type && o().rG({
                    message: e.message
                })
            }
            async function c(e) {
                let {
                    environment: t,
                    request: n,
                    memory: r,
                    onChange: i,
                    clientStore: s
                } = e, l = s.state.model ? ? "default", c = (0, a(328765).S)();
                if (!c) throw Error("No current space store");
                let d = await t.api.callStreamApi({
                    eventName: "runInferenceTranscript",
                    environment: t,
                    data: {
                        transcript: [{
                            id: (0, a(295447).Z1)({
                                environment: t,
                                table: a(832375).mSw,
                                spaceId: c.id
                            }),
                            type: "config",
                            value: {
                                type: "memory-agent",
                                request: n,
                                memory: r,
                                model: l,
                                testOnly: !0
                            }
                        }],
                        traceId: (0, a(4962).Ay)(),
                        spaceId: c.id,
                        generateTitle: !1,
                        isUserInAnySalesAssistedSpace: (0, a(598132).h0)(t),
                        isSpaceSalesAssisted: (0, a(598132).lM)(t, c.id)
                    },
                    headers: (0, a(115118).WS)({
                        spaceId: c.id
                    })
                });
                if ("failed" === d.type) return void o().Qg(d);
                if (a(331653).hS.is(d.data))
                    for await (let e of d.data)
                "memory-agent" === e.type ? i(e.value) : "error" === e.type && o().rG({
                    message: e.message
                })
            }
            async function d(e) {
                let {
                    environment: t,
                    inference: a,
                    project: n,
                    dataset: r
                } = e;
                await t.api.callApi({
                    eventName: "insertIntoBraintrustDataset",
                    environment: t,
                    data: {
                        project: n,
                        dataset: r,
                        value: a
                    }
                }), o().rG({
                    message: `Saved to project: ${n}, dataset: ${r}`
                })
            }
        },
        528440: (e, t, a) => {
            e.exports = a.p + "d15ce47ef6ddf83d.png"
        },
        546579: (e, t, a) => {
            e.exports = a.p + "a5098827bba61d4d.png"
        },
        550122: (e, t, a) => {
            e.exports = a.p + "176441c5ba020951.png"
        },
        555583: (e, t, a) => {
            a.d(t, {
                n: () => n
            }), a(898992), a(354520);
            var o = a(296540);

            function n({
                useRedesigned: e
            } = {
                useRedesigned: !1
            }) {
                let t = (0, a(109939).tz)(),
                    r = (0, a(599412).H)(t),
                    i = (0, a(972740).L)(),
                    s = (0, a(682985).K8)(() => (null == i ? void 0 : i.canAdmin()) ? ? !1, [i]),
                    l = (0, a(871086).w)(),
                    c = (0, o.useMemo)(() => e ? a(411106).p : (0, a(411106).L)(s, r), [s, r, e]),
                    d = (0, o.useMemo)(() => Object.entries(l ? ? {}).filter(([e]) => (0, a(722371).Xk)(c, e)).length, [l, c]),
                    g = c.length,
                    u = g > 0 ? d / g : 0,
                    p = (0, o.useMemo)(() => new Intl.NumberFormat(r, {
                        style: "percent"
                    }).format(u), [u, r]);
                return {
                    progress: u,
                    progressDisplay: p,
                    completedCount: d,
                    totalCount: g,
                    completedItems: l ? ? {}
                }
            }
        },
        580899: (e, t, a) => {
            e.exports = a.p + "7afb74ab9eed1a81.png"
        },
        584758: (e, t, a) => {
            e.exports = a.p + "8cc12fd49d607b13.png"
        },
        595413: (e, t, a) => {
            a.d(t, {
                f: () => n
            }), a(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.95 1.94 12.1 11.57",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M8 1.95c-.27 0-.51.174-.594.431l-1.14 3.51H2.574a.625.625 0 0 0-.367 1.13l2.985 2.17-1.14 3.509a.625.625 0 0 0 .962.699L8 11.229l2.986 2.17a.625.625 0 0 0 .961-.699l-1.14-3.51 2.985-2.169a.625.625 0 0 0-.367-1.13h-3.69l-1.14-3.51A.625.625 0 0 0 8 1.95m-.686 4.759L8 4.597l.686 2.112a.625.625 0 0 0 .595.432h2.22L9.705 8.446a.625.625 0 0 0-.227.699l.686 2.112-1.797-1.305a.625.625 0 0 0-.734 0l-1.797 1.305.686-2.112a.625.625 0 0 0-.227-.699L4.5 7.141h2.22a.63.63 0 0 0 .595-.432"
                    })
                },
                n = (0, a(104509).wt)("starSmall", o, "small")
        },
        620842: (e, t, a) => {
            e.exports = a.p + "14d5b1e86af73b85.png"
        },
        625031: (e, t, a) => {
            e.exports = a.p + "db48f4d686b63eb9.png"
        },
        641085: (e, t, a) => {
            e.exports = a.p + "85fb8ca2230ff394.png"
        },
        652134: (e, t, a) => {
            a.r(t), a.d(t, {
                aiFaceSmallIcon: () => r,
                iconDefinition: () => n
            }), a(296540);
            var o = a(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.89 1.43 11.63 12.81",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M7.204 1.93a3.47 3.47 0 0 0-4.097.39.625.625 0 1 0 .834.931 2.22 2.22 0 0 1 3.16.202.625.625 0 0 0 .944-.818 3.5 3.5 0 0 0-.84-.705m6.018.976A3.47 3.47 0 0 0 8.463 4.1l-5.077 8.476a.625.625 0 0 0 .437.938l4.41.715a.625.625 0 0 0 .2-1.234l-3.5-.568 4.602-7.685a2.22 2.22 0 0 1 3.822.02.625.625 0 1 0 1.08-.63 3.46 3.46 0 0 0-1.214-1.226m-7.83 2.105a1.094 1.094 0 1 0-.35 2.159 1.094 1.094 0 0 0 .35-2.159"
                        }), (0, o.jsx)("path", {
                            d: "M10.762 5.881a1.093 1.093 0 1 0-.35 2.159 1.093 1.093 0 0 0 .35-2.159"
                        })]
                    })
                },
                r = (0, a(104509).wt)("aiFaceSmall", n, "small")
        },
        659262: (e, t, a) => {
            a.d(t, {
                L: () => n,
                y: () => r
            });
            let o = Number(a(627179).Xb);

            function n() {
                var e, t;
                if (a(205885).A.state.online) {
                    if (null != (e = a(420153).A.state.connectionError) && e.startTime && Date.now() - (null == (t = a(420153).A.state.connectionError) ? void 0 : t.startTime) < o) return;
                    return a(420153).A.state.connectionError
                }
            }

            function r() {
                return !!n()
            }
        },
        665008: (e, t, a) => {
            e.exports = a.p + "937ee299d2468780.png"
        },
        667115: (e, t, a) => {
            e.exports = a.p + "a95f553bf5241102.png"
        },
        679416: (e, t, a) => {
            a.d(t, {
                P: () => g
            }), a(296540);
            var o = a(474848);
            let n = `
	@keyframes accessory-speech-bubble-in {
		0% { opacity: 0; transform: scale(0.85); }
		100% { opacity: 1; transform: scale(1); }
	}
	@keyframes accessory-speech-bubble-out {
		0% { opacity: 1; transform: scale(1); }
		100% { opacity: 0; transform: scale(0.85); }
	}
`,
                r = (0, a(51831).n)(!0),
                i = `1.5px solid ${a(632079).Tj.border.secondary}`,
                s = {
                    container: {
                        position: "absolute",
                        zIndex: 2,
                        pointerEvents: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "max-content"
                    },
                    bubble: { ...r,
                        position: "relative",
                        whiteSpace: "normal",
                        maxWidth: 220,
                        color: a(632079).Tj.text.secondary,
                        fontWeight: a(699422).Wy.medium,
                        border: i,
                        boxShadow: "none",
                        borderRadius: 12,
                        padding: "6px 12px",
                        fontSize: 12
                    },
                    tailCircle: {
                        position: "absolute",
                        width: 8,
                        height: 8,
                        borderRadius: 999,
                        background: a(632079).Tj.background.primary,
                        border: i,
                        boxShadow: "none"
                    }
                },
                l = {
                    topLeft: {
                        container: {
                            bottom: "86%",
                            insetInlineEnd: "88%",
                            transformOrigin: "right bottom",
                            alignItems: "flex-end"
                        },
                        tailCircle: {
                            top: "calc(100% + 8px)",
                            insetInlineEnd: -10
                        }
                    },
                    topRight: {
                        container: {
                            bottom: "86%",
                            insetInlineStart: "88%",
                            transformOrigin: "left bottom",
                            alignItems: "flex-start"
                        },
                        tailCircle: {
                            top: "calc(100% + 8px)",
                            insetInlineStart: -6
                        }
                    }
                },
                c = {
                    animationName: "accessory-speech-bubble-in",
                    animationDuration: "150ms",
                    animationTimingFunction: "ease-out",
                    animationFillMode: "forwards"
                },
                d = {
                    animationName: "accessory-speech-bubble-out",
                    animationDuration: "150ms",
                    animationTimingFunction: "ease-in",
                    animationFillMode: "forwards"
                };

            function g({
                placement: e,
                children: t,
                animated: a = !1,
                isHiding: r = !1,
                verticalOffsetPx: i = 0,
                horizontalOffsetPx: u = 0,
                tailCircleTop: p,
                tailCircleInsetInlineStartPx: h
            }) {
                let f = function(e, t, a) {
                    let {
                        container: {
                            bottom: o,
                            insetInlineStart: n,
                            insetInlineEnd: r,
                            ...i
                        },
                        tailCircle: s
                    } = l[e], c = 0 !== t && void 0 !== o ? `calc(${String(o)} - ${t}px)` : o;
                    if ("topRight" === e) {
                        let e = 0 !== a && void 0 !== n ? `calc(${String(n)} + ${a}px)` : n;
                        return {
                            container: { ...i,
                                insetInlineStart: e,
                                bottom: c
                            },
                            tailCircle: s
                        }
                    }
                    let d = 0 !== a && void 0 !== r ? `calc(${String(r)} - ${a}px)` : r;
                    return {
                        container: { ...i,
                            insetInlineEnd: d,
                            bottom: c
                        },
                        tailCircle: s
                    }
                }(e, i, u);
                return (0, o.jsxs)(o.Fragment, {
                    children: [a ? (0, o.jsx)("style", {
                        children: n
                    }) : void 0, (0, o.jsxs)("div", {
                        style: { ...s.container,
                            ...f.container,
                            ...a ? r ? d : c : void 0
                        },
                        children: [(0, o.jsx)("div", {
                            style: s.bubble,
                            children: t
                        }), (0, o.jsx)("div", {
                            style: { ...s.tailCircle,
                                ...f.tailCircle,
                                ...void 0 !== p && {
                                    top: p
                                },
                                ...void 0 !== h && {
                                    insetInlineStart: h
                                }
                            }
                        })]
                    })]
                })
            }
        },
        682759: (e, t, a) => {
            e.exports = a.p + "d43593c297dd4340.png"
        },
        688220: (e, t, a) => {
            e.exports = a.p + "0fb564b08de74e8f.png"
        },
        701743: (e, t, a) => {
            e.exports = a.p + "868a886d40b596cd.png"
        },
        702404: (e, t, a) => {
            e.exports = a.p + "c8cb309f04348e5a.png"
        },
        722784: (e, t, a) => {
            e.exports = a.p + "6ddab14ae1911792.png"
        },
        733785: (e, t, a) => {
            e.exports = a.p + "451ac07fab6898ec.png"
        },
        737497: (e, t, a) => {
            e.exports = a.p + "5c61be7d1ab58977.gif"
        },
        770408: (e, t, a) => {
            a.d(t, {
                s: () => n
            }), a(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.56 0.68 12.88 12.7",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M9.8.788a1.65 1.65 0 0 0-2.013.73l-.274.563c-.143.237-.29.53-.427.802v.002l-.103.203c-.178.35-.336.639-.483.833L4.823 5.709H2.914c-.746 0-1.352.605-1.352 1.351v4.181c0 .747.606 1.352 1.352 1.352h2.657l.945.324.01.005h.001c.598.3 1.252.454 1.923.454h3.425a1.594 1.594 0 0 0 1.562-1.912c.432-.286.714-.779.714-1.333 0-.213-.044-.413-.119-.593.251-.278.406-.645.406-1.058a1.56 1.56 0 0 0-.284-.901c.12-.218.19-.47.19-.742 0-.88-.713-1.593-1.593-1.593H9.94q.05-.106.11-.225l.002-.004c.11-.222.243-.491.338-.817v-.002l.403-1.41A1.65 1.65 0 0 0 9.808.791zM8.623 2.655l.27-.556a.4.4 0 0 1 .464-.141.4.4 0 0 1 .235.483L9.19 3.85a3.5 3.5 0 0 1-.26.612l-.011.025c-.106.214-.236.475-.33.787a.946.946 0 0 0 .907 1.219h3.255c.19 0 .344.154.344.343 0 .1-.052.198-.157.266a.625.625 0 0 0 .066 1.087.32.32 0 0 1 .184.29.33.33 0 0 1-.231.317.625.625 0 0 0-.192 1.073.34.34 0 0 1 .136.261.34.34 0 0 1-.336.344.625.625 0 0 0-.452 1.057.344.344 0 0 1-.238.594H8.45c-.45 0-.886-.097-1.29-.286a.6.6 0 0 0-.151-.076l-1.131-.387a.6.6 0 0 0-.203-.034h-.006V6.634l1.764-1.88.037-.043c.236-.302.449-.705.627-1.057l.117-.232a10 10 0 0 1 .41-.767M2.812 7.06c0-.056.046-.101.102-.101H4.52v4.384H2.914a.1.1 0 0 1-.102-.102z"
                    })
                },
                n = (0, a(104509).wt)("handThumbsUpSmall", o, "small")
        },
        783925: (e, t, a) => {
            e.exports = a.p + "fc556f4d021cf665.png"
        },
        784836: (e, t, a) => {
            e.exports = a.p + "96fa7f82dea60fb2.png"
        },
        832338: (e, t, a) => {
            e.exports = a.p + "4d1ffa233a574cb5.png"
        },
        851062: (e, t, a) => {
            a.d(t, {
                Pz: () => i,
                SZ: () => r,
                Tn: () => n,
                U3: () => d,
                ey: () => u,
                jm: () => s,
                og: () => g,
                p9: () => p,
                yu: () => c
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520);
            let o = new Set(["personal-agent", "personal"]);

            function n(e) {
                if (!e) return;
                let t = e.trim();
                return t.startsWith("{{") && t.endsWith("}}") ? t.slice(2, -2) : t
            }

            function r(e) {
                let t = n(e);
                if (!t) return !1;
                let a = t.trim().toLowerCase();
                if (o.has(a)) return !0;
                if (!a.startsWith("agent://")) return !1;
                let [, r] = a.split("agent://"), i = (null == r ? void 0 : r.split("/")) ? ? [], s = i[i.length - 1];
                return !!s && o.has(s)
            }

            function i(e) {
                let t, a = /^\s*<<<\s*([A-Z0-9_]+)\s+START\s*>>>\s*\n([\s\S]*?)\n\s*<<<\s*\1\s+END\s*>>>\s*$/gm,
                    o = {};
                for (; null !== (t = a.exec(e));) {
                    let e = t[1],
                        a = t[2];
                    o[e] = a
                }
                let n = Object.keys(o);
                if (0 === n.length) return;
                let r = e.replace(a, "").trim();
                for (let e of n) {
                    let t = JSON.stringify(o[e]),
                        a = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                        n = RegExp(`"<${a}>"|<${a}>`, "g");
                    r = r.replace(n, () => t)
                }
                return r
            }

            function s(e) {
                return !!((null == e ? void 0 : e.insufficientPermissions) || (null == e ? void 0 : e.unclearInstructions) || (null == e ? void 0 : e.missingCapabilities) || (null == e ? void 0 : e.missingSelectOptions) || (null == e ? void 0 : e.other))
            }
            let l = ["fs.readDir", "fs.readFiles", "images.generate", "calendar.fetchPlaybook", "calendar.listCalendars", "calendar.listEvents", "calendar.listCoworkersEvents", "calendar.createEvents", "calendar.updateEvents", "calendar.cancelEvents", "calendar.suggestMeetingTimes", "calendar.listCalendarResources", "marketplace.installTemplate", "marketplace.searchTemplates", "mail.runTool", "mail.listTools", "mail.getPrompt", "mail.searchEmails", "mail.searchOutlookEmails", "mail.viewThreadContent", "mail.readAttachment", "mail.createMailBlock", "mail.listMailboxViews", "mail.getMailbox", "mail.listStatusProperties", "mail.healthCheck", "mail.listGmailFilters", "mail.setReadStatus", "mail.createLabel", "mail.listLabels", "mail.updateLabel", "mail.deleteLabel", "mail.applyUserLabelsWithLazyCreate", "mail.removeUserLabels", "mail.archiveThreadsById", "mail.archiveThreadsByQuery", "mail.trashThread", "mail.markThreadSpam", "mail.moveThreadToInbox", "mail.starThread", "mail.createStatusColumn", "mail.updateStatus", "mail.setReminder", "mail.unsetReminder", "mail.blockSender", "mail.unblockSender", "mail.unsubscribeSender", "mail.createGmailFilter", "mail.deleteGmailFilter", "mail.updateGmailFilter", "mail.listOutlookCategories", "mail.createOutlookCategory", "mail.applyOutlookCategories", "mail.removeOutlookCategories", "mail.listOutlookFolders", "mail.createOutlookFolder", "mail.moveToOutlookFolder", "mail.createOrUpdateDraft", "mail.createOrUpdateGmailDraft", "mail.createOrUpdateOutlookDraft", "mail.createOrUpdateDraftAllClients", "mail.sendNewEmail", "mail.sendExistingDraft", "claude.startRun", "claude.archiveRun", "claude.getRunStatus", "claude.listSessionEvents", "claude.sendUserMessage", "cursor.createAgent", "cursor.addFollowup", "cursor.getAgent", "cursor.listRepositories", "boxy.createBox", "boxy.getBox", "boxy.sendBoxThread", "boxy.streamMessageToThread", "files.getFileContent", "files.getFileName", "computer.listMachines", "computer.listSecrets", "computer.createMachine", "computer.destroyMachine", "computer.setSecret", "computer.terminal", "computer.browser", "computer.getJobStatus", "computer.getJobLogs", "computer.viewFileUrl", "computer.getMachine", "computer.poll", "computer.wait", "computer.readFile", "computer.writeFile", "computer.uploadFile", "computer.downloadFile", "computer.listDir", "computer.mkdir", "computer.rm", "computer.getTags", "computer.setTags", "computer.deleteSecret", "computer.tunnels", "files.getFileUrl", "mcpServer.getPrompt", "mcpServer.listPrompts", "mcpServer.listResources", "mcpServer.listTools", "mcpServer.readResource", "mcpServer.runTool", "security.searchAuditLogs", "security.getAuditLogEntry", "system.wait", "test.getState", "notion.createDatabase", "notion.createTwoWayRelation", "notion.updateDatabase", "notion.createAgent", "notion.createDatabaseAgent", "notion.loadAgent", "notion.loadUser", "notion.search", "notion.searchUsers", "notion.updateAgent", "notion.loadDatabase", "notion.loadDataSource", "notion.loadPage", "notion.loadMeetingNoteTranscript", "notion.viewFileUrl", "notion.createPage", "notion.createFactoryTask", "notion.updatePage", "notion.deletePages", "notion.archivePages", "notion.unarchivePages", "notion.deleteDatabases", "notion.querySql", "notion.queryDataSource", "notion.queryView", "notion.queryMeetings", "notion.queryThreads", "notion.investigateThread", "notion.createAndRunThread", "notion.spawnSubagent", "notion.wideResearch", "notion.getFormulaValue", "notion.getUserEngagementAnalytics", "notion.getContentEngagementAnalytics", "notion.getDailyUsersAnalytics", "notion.listUsersAnalytics", "notion.listContentAnalytics", "notion.getPageAnalyticsTimeSeries", "notion.getPageVisitors", "notion.listTeamspaces", "notion.getTeamspaceTopLevelPagesAndDatabases", "notion.addCommentToDiscussion", "notion.getPageDiscussions", "notion.sendNotification", "notion.getUserActivity", "notion.loadPermissions", "notion.updatePermission", "notion.listUserConnections", "notion.createUserConnection", "slack.addReactionToMessage", "slack.createThreadInChannel", "slack.createThreadInDirectMessage", "slack.findUserByEmail", "slack.getThreadsInChannelSince", "slack.getUser", "slack.getUserMessages", "slack.loadMessage", "slack.parseSlackUriOrUrl", "slack.viewFileUrl", "slack.queryChannels", "slack.removeReactionFromMessage", "slack.replyInThread", "slack.search", "slack.updateMessage", "asana.loadTask", "asana.search", "box.search", "box.loadFile", "box.findSharedItem", "confluence.search", "confluence.cqlQuery", "confluence.loadPage", "browser.run", "discord.search", "discord.sendMessageToChannel", "discord.updateMessage", "discord.addReaction", "discord.removeReaction", "discord.listChannels", "discord.getRecentChannelMessages", "github.loadPR", "github.loadIssue", "github.loadCommit", "github.loadFile", "github.grepCode", "github.lsDirectory", "github.search", "googleDrive.loadFile", "googleDrive.getFileComments", "googleDrive.lsFolder", "googleDrive.loadZipFile", "googleDrive.grepFiles", "googleDrive.search", "gmail.loadThread", "gmail.search", "gmail.query", "googleCalendar.search", "googleCalendar.query", "jira.loadIssue", "jira.search", "linear.loadIssue", "linear.search", "microsoftTeams.viewChannel", "microsoftTeams.viewChat", "microsoftTeams.loadMessage", "microsoftTeams.search", "microsoftTeams.getUserMessages", "outlook.loadMessage", "outlook.loadThread", "outlook.search", "outlook.query", "salesforce.search", "salesforce.soqlQuery", "salesforce.getSample", "salesforce.findUserIds", "salesforce.loadRecord", "sharepoint.loadFile", "sharepoint.search", "search.search", "helpdocs.search", "search.unifiedSearch", "web.search", "web.loadPage", "worker.listTools", "worker.runTool", "workers.list"],
                c = ["search", "queryCalendar", "queryMail", "view", "view-version-history", "view-notifications", "view-database-files", "view-channel", "view-slack-channel", "view-code-repo", "create-database", "update-database", "update-database-data-sources", "update-database-views", "query-data-sources", "update-database-triggers", "error", "create-pages", "update-page", "update-page-v2", "delete-pages", "update-todos", "markSessionFailed", "result", "edit-json", "query-agent-threads", "investigate-agent-thread", "run-agent", "enter-setup-mode", "exit-setup-mode", "create-agent", "create-agent-v2", "update-agent", "update-agent-v2", "delete-agent", "query-salesforce-tool", "list-machines", "create-machine", "destroy-machine", "terminal", "browser", "callFunction", "runScript", "remote-coding-agent-tool", "external-agent-tool", "summarize-meeting-note", "wait", "escalate", "generate-image", "status", "ask-survey", "generate-plan", ...l];

            function d(e) {
                if ("string" != typeof e) return !1;
                for (let t of c)
                    if (e === t) return !0;
                return !!g(e)
            }

            function g(e) {
                return !!(0, a(722371).Xk)(l, e)
            }

            function u(e) {
                return e.filter(e => "agent-tool-result" === e.type).filter(e => (0, a(780899).I6)(e))
            }
            let p = "Action rejected by user."
        },
        871086: (e, t, a) => {
            a.d(t, {
                w: () => o
            });

            function o() {
                let e = (0, a(476743).a)();
                return (0, a(682985).K8)(() => {
                    var t;
                    return (null == e || null == (t = e.getSettings()) ? void 0 : t.business_trial_items_completed) ? ? {}
                }, [e])
            }
        },
        879817: (e, t, a) => {
            e.exports = a.p + "1ff0049b43405408.png"
        },
        889503: (e, t, a) => {
            a.r(t), a.d(t, {
                getStripe: () => r,
                getStripeAppearance: () => c,
                optionalPaymentMethodIdGivenPaymentData: () => g,
                stripeElementLocaleGivenNotionLocale: () => i,
                translateStripeError: () => l,
                useElementsOptions: () => s
            });
            var o = a(296540);
            let n = null;
            async function r() {
                return n || (a(37458).loadStripe.setLoadParameters({
                    advancedFraudSignals: !1
                }), n = (0, a(37458).loadStripe)(a(986939).A.stripe.key)), n
            }

            function i(e) {
                switch (e) {
                    case "en-US":
                        return "en";
                    case "ko-KR":
                        return "ko";
                    case "ja-JP":
                        return "ja";
                    case "fr-FR":
                        return "fr-FR";
                    case "de-DE":
                        return "de";
                    case "es-ES":
                        return "es-ES";
                    case "es-LA":
                        return "es-419";
                    case "pt-BR":
                        return "pt-BR";
                    case "zh-CN":
                        return "zh";
                    case "zh-TW":
                        return "zh-TW";
                    case "da-DK":
                        return "da";
                    case "nl-NL":
                        return "nl";
                    case "fi-FI":
                        return "fi";
                    case "nb-NO":
                        return "nb";
                    case "sv-SE":
                        return "sv";
                    default:
                        return "auto"
                }
            }

            function s(e) {
                let t = (0, a(960253).e)(),
                    n = (0, a(632079).O4)({
                        theme: t
                    }),
                    {
                        type: r
                    } = e,
                    s = "setup" === r || "subscription" === r ? e.currency : void 0,
                    l = "subscription" === r ? e.amount : void 0,
                    d = (0, a(682985).K8)(() => {
                        var e;
                        return (null == (e = a(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.preferred_locale) || a(599412).q
                    }, []);
                return (0, o.useMemo)(() => {
                    let e = {
                            appearance: c(n, t),
                            locale: i(d)
                        },
                        o = {
                            paymentMethodTypes: (0, a(56281).VV)({
                                currency: s
                            })
                        };
                    switch (r) {
                        case "address":
                            return e;
                        case "setup":
                            return { ...e,
                                ...o,
                                currency: null == s ? void 0 : s.toLowerCase(),
                                mode: "setup",
                                paymentMethodCreation: "manual"
                            };
                        case "subscription":
                            return { ...e,
                                ...o,
                                amount: l,
                                currency: null == s ? void 0 : s.toLowerCase(),
                                mode: "subscription",
                                paymentMethodCreation: "manual",
                                setupFutureUsage: "off_session",
                                loader: "never"
                            };
                        default:
                            (0, a(722371).HB)(r)
                    }
                }, [n, t, d, s, r, l])
            }

            function l(e, t) {
                if (!t.code) return t.message || "";
                switch (t.code) {
                    case "invalid_expiry_year_past":
                        return e.formatMessage({
                            id: "stripeHelpers.invalidExpiryYear.error.message",
                            defaultMessage: "Your card's expiration year is in the past."
                        });
                    case "invalid_cvc":
                        return e.formatMessage({
                            id: "stripeHelpers.invalidCVC.error.message",
                            defaultMessage: "Your card's security code is invalid."
                        });
                    case "invalid_number":
                        return e.formatMessage({
                            id: "stripeHelpers.invalidNumber.error.message",
                            defaultMessage: "Your card number is not a valid credit card number."
                        });
                    case "card_declined":
                        var a = e,
                            o = t.decline_code;
                        switch (o) {
                            case "expired_card":
                                return a.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.expiredCard",
                                    defaultMessage: "Your card was declined because it is an expired card."
                                });
                            case "incorrect_number":
                                return a.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.incorrectNumber",
                                    defaultMessage: "Your card was declined because you input an incorrect number."
                                });
                            case "insufficient_funds":
                                return a.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.declinedFunds",
                                    defaultMessage: "Your card was declined because of insufficient funds."
                                });
                            case "invalid_cvc":
                                return a.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.invalidCvc",
                                    defaultMessage: "Your card was declined because you input an invalid CVC number"
                                });
                            case "invalid_amount":
                                return a.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.invalidAmount",
                                    defaultMessage: "Your card was declined because payment amount exceeds the amount that's allowed."
                                });
                            default:
                                return a.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message",
                                    defaultMessage: "Your card was declined."
                                })
                        }
                    default:
                        return t.message || ""
                }
            }

            function c(e, t) {
                let o = d(e.text.primary),
                    n = d(e.text.secondary),
                    r = d(e.text.tertiary),
                    i = d(e.red.text.accentPrimary),
                    s = d(e.blue.text.accentPrimary);
                return {
                    labels: "above",
                    theme: "dark" === t ? "night" : "stripe",
                    variables: {
                        spacingGridRow: "12px",
                        spacingGridColumn: "12px",
                        spacingUnit: "4px",
                        spacingTab: "6px",
                        colorPrimary: o,
                        colorPrimaryText: o,
                        colorText: o,
                        colorTextSecondary: n,
                        colorTextPlaceholder: r,
                        colorIcon: o,
                        colorIconCheckmark: d(e.icon.inversePrimary),
                        colorDanger: i,
                        colorBackground: d(e.whiteButtonBackground),
                        colorIconTabHover: o,
                        colorIconTabSelected: s,
                        colorIconChevronDown: o,
                        fontFamily: a(699422).Tf.sans,
                        fontWeightLight: `${a(699422).Wy.light}`,
                        fontWeightNormal: `${a(699422).Wy.regular}`,
                        fontWeightMedium: `${a(699422).Wy.medium}`,
                        fontWeightBold: `${a(699422).Wy.medium}`,
                        fontSizeBase: "14px",
                        fontSizeSm: "12px",
                        colorLogo: t,
                        colorLogoBlock: t,
                        colorLogoTab: t,
                        colorLogoTabSelected: t,
                        borderRadius: "6px"
                    },
                    rules: {
                        ".Tab": {
                            padding: "10px 16px 10px 10px",
                            fontSize: "13px",
                            fontWeight: "500",
                            lineHeight: "16px",
                            color: o,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            backgroundColor: e.whiteButtonBackground
                        },
                        ".Tab:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground
                        },
                        ".Tab:focus": {
                            boxShadow: e.buttonBlueFocusRing
                        },
                        ".Tab--selected, .Tab--selected:active": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.blue.border.accentPrimary}`,
                            color: o,
                            boxShadow: "none",
                            outline: "none"
                        },
                        ".Tab--selected:hover": {
                            backgroundColor: e.whiteButtonBackground,
                            color: o
                        },
                        ".Tab--selected:focus": {
                            border: `1px solid ${e.blue.border.accentPrimary}`,
                            boxShadow: e.buttonBlueFocusRing
                        },
                        ".Input": {
                            fontSize: "14px",
                            lineHeight: "18px",
                            padding: "7px 8px",
                            backgroundColor: e.background.secondary,
                            boxShadow: `0 0 0 1px ${e.border.primary}`,
                            border: "none",
                            color: o
                        },
                        ".Input--invalid": {
                            color: o,
                            boxShadow: e.inputRedFocusRing
                        },
                        ".Input:focus": {
                            color: o,
                            boxShadow: e.inputBlueFocusRing
                        },
                        ".Label": {
                            fontSize: "12px",
                            lineHeight: "15px",
                            fontWeight: "500",
                            color: n,
                            marginBottom: "8px"
                        },
                        ".Error": {
                            fontSize: "12px",
                            fontWeight: "400",
                            lineHeight: "15px",
                            color: i
                        },
                        ".CodeInput": {
                            backgroundColor: e.background.secondary,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none"
                        },
                        ".PickerItem, .PickerItem--selected": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            color: o
                        },
                        ".PickerItem:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground,
                            color: o,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none"
                        },
                        ".PickerItem--selected:hover": {
                            boxShadow: "none"
                        },
                        ".PickerItem--new": {
                            fontSize: "14px",
                            fontWeight: "500",
                            lineHeight: "18px",
                            color: o
                        },
                        ".PickerItem--highlight, .PickerItem--highlight:hover": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.blue.border.accentPrimary}`,
                            boxShadow: "none"
                        },
                        ".PickerItem--highlight:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground
                        },
                        ".TermsText": {
                            color: n,
                            fontSize: "10px",
                            fontWeight: "400",
                            lineHeight: "13px",
                            letterSpacing: "0.12px"
                        },
                        ".CheckboxLabel": {
                            color: o,
                            fontSize: "12px",
                            fontWeight: "500",
                            lineHeight: "15px"
                        },
                        ".Action, .MenuAction": {
                            color: o,
                            fontWeight: "400",
                            padding: "4px 8px"
                        },
                        ".Action:hover, .MenuAction:hover": {
                            backgroundColor: e.buttonHoveredBackground
                        },
                        ".BlockAction:focus, .CodeInput:focus, .Input:focus,.CheckboxInput:focus, .PickerItem:focus, .PickerAction:focus,.MenuAction:focus, .Action:focus, .SecondaryLink:focus": {
                            boxShadow: e.buttonBlueFocusRing
                        },
                        ".MenuIcon, .MenuIcon:hover": {
                            fill: o
                        },
                        ".Block": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            padding: "16px"
                        },
                        ".Icon": {
                            fill: o
                        }
                    }
                }
            }

            function d(e) {
                let [t, a, o, n] = e.match(/[\d.]+/g) ? ? [];
                return t && a && o && n && 1 === parseInt(n) ? `rgb(${t}, ${a}, ${o})` : e
            }

            function g(e) {
                return (null == e ? void 0 : e.type) === "paymentMethodId" ? e.value : void 0
            }
        },
        898378: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => o,
                notionTintableIcon: () => n
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.76 1.39 16.47 17.17",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M12.32 1.437c1.17-.1 1.47-.032 2.205.501l3.039 2.136c.5.367.668.467.668.867v11.715c0 .734-.267 1.168-1.202 1.234l-11.055.667c-.702.034-1.036-.066-1.404-.533L2.333 15.12c-.4-.534-.567-.934-.567-1.401V3.306c0-.6.267-1.101 1.035-1.168zm4.241 3.871-10.854.634c-.4.034-.534.235-.534.668v9.945c0 .535.267.735.868.702l10.388-.601c.6-.033.668-.401.668-.835V5.942c0-.433-.167-.667-.536-.634m-1.134 1.836c.066.3 0 .601-.301.635l-.501.1v7.342c-.434.233-.835.367-1.169.367-.534 0-.668-.168-1.068-.668L9.113 9.78v4.973l1.036.233c0 .008-.005.6-.836.6l-2.303.135c-.067-.134 0-.468.233-.535l.602-.167V8.446L7.01 8.38c-.067-.3.1-.734.567-.768l2.472-.166 3.407 5.206V8.046l-.868-.1c-.067-.367.2-.635.534-.668zm-2.705-4.772-9.153.668c-.333.033-.4.2-.267.333l1.303 1.035c.534.433.735.4 1.737.333l9.452-.567c.2 0 .034-.2-.033-.233l-1.57-1.136c-.301-.233-.702-.5-1.47-.433"
                    })
                },
                n = (0, a(104509).wt)("notionTintable", o, "tintable")
        },
        938989: (e, t, a) => {
            e.exports = a.p + "f134ff16443ed5ec.png"
        },
        941670: (e, t, a) => {
            e.exports = a.p + "e1d65fd069908905.png"
        },
        965967: (e, t, a) => {
            e.exports = a.p + "d15ce47ef6ddf83d.png"
        },
        970878: (e, t, a) => {
            e.exports = a.p + "082999214c472fe4.png"
        },
        998884: (e, t, a) => {
            function o(e) {
                return `${e.environmentName}-${e.suffix}`
            }

            function n(e) {
                let {
                    environmentName: t,
                    projectSuffix: n,
                    traceId: r
                } = e, i = o({
                    environmentName: t,
                    suffix: n
                });
                return function(e) {
                    let {
                        projectName: t,
                        rootSpanId: a,
                        spanId: o
                    } = e, n = `https://www.braintrust.dev/app/Notion/p/${t}/logs`, r = o ? `r=${a}&s=${o}&fs=1` : `r=${a}&fs=1`;
                    return `${n}?${r}`
                }({
                    projectName: i,
                    rootSpanId: (0, a(4962).gB)(`feedback_${r}`),
                    spanId: (0, a(4962).gB)(r)
                })
            }
            a.d(t, {
                WY: () => o,
                s0: () => n
            })
        }
    }
]);