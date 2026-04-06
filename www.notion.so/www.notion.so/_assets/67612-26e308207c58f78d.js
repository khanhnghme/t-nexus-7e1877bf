"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [15021, 67612], {
        15021: (e, t, i) => {
            i.d(t, {
                d: () => u
            });
            var n = i(296540);
            let o = "images",
                l = "page-covers",
                r = {
                    [`/${o}/${l}/usda_apple.png`]: 1.6,
                    [`/${o}/${l}/usda_pear.png`]: 1.6
                },
                a = new(i(815048)).O2("AnimatedCoverImageActionBar", async () => Promise.all([i.e(75134), i.e(36556), i.e(55373), i.e(36192), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(87539), i.e(49340), i.e(40454)]).then(i.bind(i, 312446))),
                s = (0, i(815048)._h)(a, e => e.AnimatedCoverImageActionBar);
            var d = i(474848);

            function c({
                src: e,
                placeholderSrc: t,
                placeholderBehavior: o,
                imageStyle: l,
                containerStyle: r,
                onLoadComplete: a,
                testId: s
            }) {
                let u, [p, g] = (0, n.useState)(!0);
                switch (o) {
                    case "force-show-placeholder":
                        u = !0;
                        break;
                    case "show-placeholder-if-loading-src":
                        u = !!t && (p || void 0 === e);
                        break;
                    default:
                        (0, i(722371).HB)(o)
                }
                let m = (0, i(960253).I)(() => {
                    let e = {
                        gridColumn: 1,
                        gridRow: 1
                    };
                    return {
                        container: {
                            display: "grid",
                            ...r
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
                }, [r, u]);
                (0, n.useEffect)(() => {
                    void 0 !== e && g(!0)
                }, [e]);
                let x = (0, n.useCallback)(e => {
                    g(!1), null == a || a()
                }, [a]);
                return (0, d.jsxs)("div", {
                    style: m.container,
                    children: [(0, d.jsx)(i(989059).A, {
                        src: e,
                        onLoad: x,
                        style: l,
                        placeholderStyle: m.srcWrapper,
                        placeholderLoadedStyle: m.srcWrapper,
                        testId: s
                    }), t ? (0, d.jsx)(i(989059).A, {
                        src: t,
                        style: l,
                        placeholderStyle: m.placeholderWrapper,
                        placeholderLoadedStyle: m.placeholderWrapper
                    }) : void 0]
                })
            }

            function u(e) {
                let {
                    store: t,
                    disabled: o,
                    paddingRight: l,
                    paddingLeft: a,
                    height: u,
                    proxyWidth: g
                } = e, m = (0, i(109939).tz)(), x = (0, i(533992).v3)(), h = (0, i(533992).Y0)(), y = (0, i(682985).uB)(void 0, i(184332).A), v = (0, i(682985).K8)(() => o || "suggest" === i(708929).Uv.getMode(t) || (0, i(355301).aD)(h), [o, t, h]), f = (0, i(682985).K8)(() => t.getCover(), [t]), S = (0, i(682985).O$)(i(275015).M), {
                    isLoading: b
                } = (0, i(587578).q)(t.id), [j, k] = (0, n.useState)(void 0);
                if (!f) return null;
                let A = S.loadingMode !== i(151525).pF && S.loadingMode !== i(151525).Wc;
                return (0, d.jsx)(i(125374).A, {
                    mouseStore: y,
                    onFlushTemporaryPosition: e => (function(e, t, n) {
                        let {
                            imagePosition: o,
                            reset: l
                        } = e, r = t.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "PageCover.handleFlushTemporaryPosition",
                            environment: n,
                            cellTarget: r ? {
                                spaceWithId: r
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                (0, i(217135).y)({
                                    store: t,
                                    coverPosition: o,
                                    transaction: e
                                }), l()
                            }
                        })
                    })(e, t, x),
                    renderControl: ({
                        handleRepositionClick: e,
                        handleSavePositionClick: i,
                        handleCancelClick: n,
                        isVisible: o,
                        isRepositioning: r
                    }) => v ? null : (0, d.jsx)(s, {
                        store: t,
                        mouseStore: y,
                        imageUrl: j,
                        handleRepositionClick: e,
                        handleSavePositionClick: i,
                        handleCancelClick: n,
                        visible: o || b,
                        isRepositioning: r,
                        paddingLeft: a,
                        paddingRight: l
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
                    render: e => (0, d.jsxs)(n.Fragment, {
                        children: [(0, d.jsx)(i(738251).A, {
                            url: f.cover,
                            isAuthenticated: !0,
                            permissionRecord: f.pointer,
                            width: g,
                            onFinishedLoadingProxyUrl: k,
                            render: (t, i) => {
                                let n = r[f.cover] ? ? 1,
                                    o = (1 - (e.imagePosition || 0)) * 100,
                                    l = {
                                        width: "100%",
                                        height: u,
                                        maxHeight: 280,
                                        objectFit: "cover",
                                        opacity: A ? .5 : 1,
                                        objectPosition: `center ${o}%`,
                                        borderRadius: 0,
                                        ...1 !== n && {
                                            transform: `scale(${n})`,
                                            transformOrigin: `center ${o}%`
                                        }
                                    };
                                return (0, d.jsx)(c, {
                                    src: i,
                                    placeholderSrc: A ? S.dataURL : void 0,
                                    placeholderBehavior: A ? "force-show-placeholder" : "show-placeholder-if-loading-src",
                                    containerStyle: {
                                        width: "100%",
                                        height: u,
                                        maxHeight: 280,
                                        overflow: "hidden"
                                    },
                                    imageStyle: l,
                                    onLoadComplete: p,
                                    testId: "pageCover"
                                })
                            }
                        }, f.pointer.id), A ? (0, d.jsx)(i(252691).X, {
                            variant: "spinner",
                            percentage: S.uploadProgress,
                            text: void 0 !== S.uploadProgress ? void 0 : S.progressText
                        }) : b ? (0, d.jsx)(i(252691).X, {
                            variant: "dots",
                            text: m.formatMessage({
                                id: "CoverImageActionBar.generatingCover",
                                defaultMessage: "Generating..."
                            })
                        }) : (0, d.jsx)(i(893818).A, {
                            blockId: t.id
                        })]
                    })
                })
            }

            function p() {
                i(275015).M.reset()
            }
        },
        70703: (e, t, i) => {
            i.d(t, {
                p: () => l
            });
            var n = i(296540);
            let o = {
                isRepositioning: !1
            };

            function l(e) {
                let {
                    currentPosition: t,
                    imageUrl: l,
                    onSavePosition: r,
                    onPositionChange: a,
                    rootRef: s,
                    environment: d
                } = e, [c, u] = (0, n.useState)(o), {
                    isRepositioning: p
                } = c, g = (0, n.useCallback)(() => {
                    u(o)
                }, []), m = (0, n.useMemo)(() => void 0 !== c.temporaryPosition ? c.temporaryPosition : t, [c.temporaryPosition, t]);
                (0, n.useEffect)(() => {
                    a && a(m)
                }, [m, a]);
                let x = (0, n.useCallback)(e => {
                        (0, i(471e3).I)({
                            environment: d
                        });
                        let t = new Image;
                        t.onload = () => {
                            u(e => ({ ...e,
                                isRepositioning: !0,
                                image: t
                            }))
                        };
                        let n = e || l;
                        n && (t.src = n)
                    }, [d, l]),
                    h = (0, n.useCallback)(() => {
                        r(m), g()
                    }, [r, m, g]),
                    y = (0, n.useCallback)(() => {
                        g()
                    }, [g]);
                (0, n.useEffect)(() => {
                    let e = e => {
                        let t = s.current;
                        t && e.target instanceof Node && !t.contains(e.target) && p && h()
                    };
                    return p && window.addEventListener("mousedown", e), () => {
                        window.removeEventListener("mousedown", e)
                    }
                }, [p, h, s]);
                let v = (0, n.useCallback)(e => {
                        let {
                            image: t
                        } = c;
                        if (!t || !p) return;
                        let i = s.current;
                        if (i && i instanceof Element) {
                            let e = i.getBoundingClientRect().width / t.width * t.height;
                            u(t => ({ ...t,
                                startDragImageScreenHeight: e,
                                startDragRenderedPosition: m
                            }))
                        }
                    }, [c, p, m, s]),
                    f = (0, n.useCallback)(e => {
                        if (!p) return;
                        let {
                            startDragImageScreenHeight: t,
                            startDragRenderedPosition: n
                        } = c, o = e.diffY / (t || 0) + (n || 0);
                        u(e => ({ ...e,
                            temporaryPosition: (0, i(381453).LI)((0, i(752239).A)({
                                num: o,
                                min: 0,
                                max: 1
                            }), 4)
                        }))
                    }, [p, c]),
                    S = (0, n.useCallback)(() => {
                        u(e => ({ ...e,
                            startDragImageScreenHeight: void 0,
                            startDragRenderedPosition: void 0
                        }))
                    }, []),
                    b = p ? "ns-resize" : "default";
                return {
                    isRepositioning: p,
                    currentImagePosition: m,
                    handleDragStart: v,
                    handleDragMove: f,
                    handleDragEnd: S,
                    handleStartReposition: x,
                    handleSavePosition: h,
                    handleCancelReposition: y,
                    repositioningCursor: b
                }
            }
        },
        125374: (e, t, i) => {
            i.d(t, {
                A: () => r
            });
            var n = i(296540),
                o = i(474848);
            let l = {
                    position: "relative",
                    width: "100%",
                    zIndex: 1
                },
                r = function(e) {
                    let t = (0, n.useRef)(null),
                        r = (0, i(533992).v3)(),
                        {
                            renderControl: s,
                            onFlushTemporaryPosition: d,
                            style: c,
                            source: u,
                            store: p
                        } = e,
                        g = (0, i(682985).K8)(() => 0 === i(584265).default.state.stores.length, []),
                        [m, x] = (0, n.useState)(!1),
                        h = (0, i(682985).uB)(e.mouseStore, i(184332).A),
                        y = (0, i(682985).K8)(() => h.state.mouseEntered, [h]),
                        v = (0, i(682985).K8)(() => (function(e, t) {
                            if ("gallery" === e || "board" === e) {
                                let e = t.getFormat().card_cover_position;
                                if ((0, i(763230).Et)(e)) return e
                            }
                            if ((0, i(909212).V)()) {
                                var n;
                                return (null == (n = t.getCover()) ? void 0 : n.cover_position) ? ? .5
                            }
                            if (t.isCollectionView()) {
                                let e = t.getCollectionStoreIfSingleSource();
                                if (e) {
                                    let t = e.getFormat().collection_cover_position;
                                    return (0, i(627179).pN)(t) ? .5 : t
                                }
                            }
                            let o = t.getFormat().page_cover_position;
                            return (0, i(763230).Et)(o) ? o : .5
                        })(u, p), [u, p]),
                        {
                            isRepositioning: f,
                            currentImagePosition: S,
                            handleDragStart: b,
                            handleDragMove: j,
                            handleDragEnd: k,
                            handleStartReposition: A,
                            handleSavePosition: w,
                            handleCancelReposition: I,
                            repositioningCursor: C
                        } = (0, i(70703).p)({
                            currentPosition: v,
                            onSavePosition: e => {
                                d({
                                    imagePosition: e,
                                    reset: () => {
                                        h.reset()
                                    }
                                })
                            },
                            rootRef: t,
                            environment: r
                        }),
                        M = (0, i(960253).I)(() => ({
                            dragContainer: {
                                width: "100%",
                                cursor: C
                            }
                        }), [C]);
                    f && !g && I();
                    let T = (0, n.useMemo)(() => (0, i(381453).nF)(e => {
                            h.setState({ ...h.state,
                                mouseEntered: !0
                            })
                        }, 100), [h]),
                        P = (0, n.useMemo)(() => (0, i(381453).sg)(e => {
                            h.setState({ ...h.state,
                                mouseEntered: !1
                            })
                        }, 100), [h]),
                        B = (0, n.useCallback)((e, t) => {
                            A(t)
                        }, [A]),
                        L = (0, n.useCallback)(e => {
                            w()
                        }, [w]),
                        _ = (0, n.useCallback)(e => {
                            let t = e.target;
                            void 0 !== t && t instanceof HTMLElement && (0, i(768397).p)(t) && x(!0)
                        }, []),
                        D = (0, n.useCallback)(() => {
                            x(!0)
                        }, []),
                        E = (0, i(682985).K8)(() => s({
                            handleRepositionClick: B,
                            handleSavePositionClick: L,
                            handleCancelClick: I,
                            isVisible: y || m || f,
                            isRepositioning: f
                        }), [B, L, I, m, f, y, s]),
                        R = (0, i(463846).A)(!!e.preventClickPropagation);
                    return (0, o.jsxs)("div", {
                        ref: t,
                        onFocus: _,
                        onBlur: D,
                        onMouseEnter: T,
                        onMouseMove: T,
                        onMouseLeave: P,
                        ...R,
                        ...(0, i(762507).ow)(l, c),
                        children: [(0, o.jsx)(i(245483).A, {
                            onDraggableDragStart: b,
                            onDraggableDragMove: j,
                            onDraggableDragEnd: k,
                            onDraggableDragCancel: k,
                            disabled: !f,
                            render: t => (0, o.jsx)("div", {
                                style: M.dragContainer,
                                ...t,
                                children: e.render({
                                    imagePosition: S,
                                    isRepositioning: f
                                })
                            })
                        }), (0, o.jsx)(a, {
                            small: e.small,
                            isRepositioning: f
                        }), E]
                    })
                };

            function a({
                small: e,
                isRepositioning: t
            }) {
                if (e) return null;
                let n = {
                    background: "rgba(0, 0, 0, 0.4)",
                    borderRadius: 4,
                    color: i(632079).oZ.white,
                    fontSize: 12,
                    fontFamily: (0, i(699422).vc)(i(849917).locale).sans,
                    width: 180,
                    insetInlineStart: "calc(50% - 90px)",
                    padding: "0.3em 1.5em 0.3em",
                    pointerEvents: "none",
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    textAlign: "center"
                };
                return (0, o.jsx)(i(654979).A, {
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
                    style: n,
                    children: (0, o.jsx)(i(109939).sA, {
                        defaultMessage: "Drag image to reposition",
                        id: "withImageRepositioning.dragImage.text"
                    })
                })
            }
        },
        127322: (e, t, i) => {
            i.d(t, {
                A: () => a
            }), i(581454);
            var n = i(296540),
                o = () => i(546605);
            class l extends o().Store {
                getInitialState() {
                    return {}
                }
            }
            var r = i(474848);
            let a = n.forwardRef(function({
                isMenuItem: e,
                style: t,
                labelStyle: o,
                alignmentToOrigin: a,
                renderMenuSections: c,
                label: u,
                selectedTitle: p,
                focused: g,
                disabled: m,
                innerButtonStyle: x,
                buttonPopupStore: h,
                buttonVariant: y,
                buttonProps: v,
                menuWidth: f,
                menuMaxHeight: S,
                menuTitle: b,
                menuShowDone: j
            }, k) {
                let A = (0, i(682985).uB)(void 0, l),
                    w = (0, i(682985).uB)(h, i(510969).A),
                    I = (0, i(960253).I)(() => ({
                        wrapper: {
                            alignItems: "center",
                            display: "flex",
                            ...t
                        },
                        label: {
                            color: i(632079).Tj.text.tertiary,
                            fontSize: 14,
                            marginInlineEnd: "auto",
                            ...o
                        }
                    }), [o, t]);
                return ((0, n.useImperativeHandle)(k, () => ({
                    closeMenu: () => {
                        w.setState({ ...w.state,
                            open: !1
                        })
                    }
                }), [w]), e) ? (0, r.jsx)(d, {
                    alignmentToOrigin: a,
                    isMenuItem: e,
                    renderMenuSections: c,
                    buttonPopupStore: w,
                    selectButtonStore: A,
                    menuWidth: f,
                    menuMaxHeight: S,
                    menuTitle: b,
                    menuShowDone: j,
                    children: i => (0, r.jsx)(s, {
                        events: i,
                        style: t,
                        isMenuItem: e,
                        label: u,
                        selectedTitle: p,
                        focused: g,
                        disabled: m
                    })
                }) : (0, r.jsxs)("div", {
                    style: I.wrapper,
                    children: [u ? (0, r.jsx)("div", {
                        style: I.label,
                        children: u
                    }) : void 0, (0, r.jsx)(d, {
                        alignmentToOrigin: a,
                        isMenuItem: e,
                        renderMenuSections: c,
                        buttonPopupStore: w,
                        selectButtonStore: A,
                        menuWidth: f,
                        menuMaxHeight: S,
                        menuTitle: b,
                        menuShowDone: j,
                        children: e => {
                            if (y) {
                                let t = (0, i(586880).x)(y);
                                return (0, r.jsx)(t, {
                                    disabled: m,
                                    style: x,
                                    iconTrailing: {
                                        icon: i(595453).arrowChevronSingleDownSmallIcon,
                                        size: "xs",
                                        colorVariant: m ? "disabled" : "secondary"
                                    },
                                    ...v,
                                    ...e,
                                    children: p
                                })
                            }
                            return (0, r.jsx)(i(988022).p, {
                                disabled: m,
                                disabledFeedback: !0,
                                style: {
                                    marginInlineEnd: -6,
                                    ...x
                                },
                                iconTrailing: {
                                    icon: i(595453).arrowChevronSingleDownSmallIcon,
                                    size: "xs",
                                    colorVariant: m ? "disabled" : "secondary"
                                },
                                ...e,
                                children: p
                            })
                        }
                    })]
                })
            });

            function s({
                events: e,
                style: t,
                isMenuItem: n,
                label: o,
                selectedTitle: l,
                focused: a,
                disabled: d
            }) {
                return n ? (0, r.jsx)(i(338798)._, { ...e,
                    focused: !!a,
                    disabled: d,
                    style: t,
                    ...o ? {
                        title: o,
                        right: l
                    } : {
                        title: l
                    }
                }) : null
            }

            function d({
                children: e,
                alignmentToOrigin: t,
                isMenuItem: n,
                renderMenuSections: o,
                buttonPopupStore: l,
                selectButtonStore: a,
                menuWidth: s,
                menuMaxHeight: c,
                menuTitle: u,
                menuShowDone: p
            }) {
                let g = (0, i(682985).K8)(() => a.state.selectedKey, [a]);
                return (0, r.jsx)(i(656252).A, {
                    popupType: i(986939).A.isMobile ? i(656252).z.BottomSheet : i(656252).z.Popup,
                    buttonPopupStore: l,
                    alignmentToOrigin: void 0 !== t ? t : "end",
                    placementToOrigin: n ? "right" : "bottom",
                    originGap: n ? void 0 : 4,
                    content: e => {
                        let {
                            focusedIndex: t,
                            menuSections: n
                        } = function(e) {
                            let t, {
                                    parent: i,
                                    renderMenuSections: n,
                                    selectButtonStore: o,
                                    selectedKey: l
                                } = e,
                                r = 0;
                            return {
                                menuSections: n(i).map(e => ({ ...e,
                                    items: e.items.map(e => (l && e.key === l && (t = r), r++, { ...e,
                                        action: t => {
                                            var i;
                                            e.action(t), i = e.key, o.setState({
                                                selectedKey: i
                                            })
                                        }
                                    }))
                                })),
                                focusedIndex: t
                            }
                        }({
                            parent: e,
                            renderMenuSections: o,
                            selectButtonStore: a,
                            selectedKey: g
                        }), l = (0, r.jsx)(i(558045).A, {
                            type: i(558045).O.Vertical,
                            initialFocus: t,
                            sections: n
                        });
                        return i(986939).A.isMobile ? (0, r.jsx)(i(747369).A, {
                            menuType: i(649476).gu.Modal,
                            title: u,
                            right: p ? (0, r.jsx)(i(109939).sA, {
                                defaultMessage: "Done",
                                id: "selectButton.mobileModal.done.label"
                            }) : void 0,
                            onClickRight: p ? e.close : void 0,
                            children: l
                        }) : (0, r.jsx)(i(747369).A, {
                            menuType: i(649476).gu.Popup,
                            width: s,
                            maxHeight: c,
                            children: l
                        })
                    },
                    children: e
                })
            }
        },
        151525: (e, t, i) => {
            i.d(t, {
                Ay: () => d,
                Gi: () => r,
                Wc: () => o,
                pF: () => a,
                vS: () => l
            });
            var n = () => i(546605);
            let o = "loadingLocalImage",
                l = "uploading",
                r = "downloading",
                a = "loaded";
            class s extends n().Store {
                getInitialState() {
                    return {
                        loadingMode: a
                    }
                }
            }
            let d = s
        },
        227045: (e, t, i) => {
            i.d(t, {
                A: () => r
            }), i(944114), i(296540);
            var n = i(474848);
            let o = {
                    paddingTop: 0,
                    paddingBottom: 0
                },
                l = {
                    paddingTop: 3,
                    paddingBottom: 3
                };

            function r(e) {
                let {
                    store: t,
                    parentBlockStore: r,
                    onAccept: a,
                    token: s,
                    href: d,
                    hoverData: c
                } = e, u = (0, i(533992).v3)(), p = [];
                return p.push({
                    key: 0,
                    render: e => (0, n.jsx)(i(844565).A, { ...e,
                        style: o
                    }),
                    items: [{
                        key: "copy link",
                        render: e => (0, n.jsx)(i(860287).A, { ...e,
                            title: (0, n.jsx)(i(109939).sA, {
                                id: "linkMention.copyLink",
                                defaultMessage: "Copy link"
                            }),
                            svg: i(588739).linkIcon
                        }),
                        action: async () => {
                            if (!t || !s) return;
                            let [e, n] = await Promise.all([(0, i(161333).r)(), (0, i(969899).jd)()]);
                            n({
                                environment: u,
                                stringValue: d,
                                copiedMessage: e.copiedLinkToClipboard
                            })
                        }
                    }]
                }), p.push({
                    key: 1,
                    render: e => (0, n.jsx)(i(844565).A, { ...e,
                        style: o
                    }),
                    items: [{
                        key: "convert to bookmark",
                        render: e => (0, n.jsx)(i(860287).A, { ...e,
                            title: (0, n.jsx)(i(109939).sA, {
                                id: "linkMention.convertToBookmark",
                                defaultMessage: "Turn into preview"
                            }),
                            svg: i(194123).a
                        }),
                        action: () => {
                            if (!t || !s) return;
                            let e = t.pointer.spaceId;
                            (0, i(377796).createAndCommit)({
                                userAction: "LinkMentionMenu.convertToBookmark",
                                environment: u,
                                cellTarget: e ? {
                                    spaceWithId: e
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    if (c) {
                                        let n = i(124937).Wv({
                                            environment: u,
                                            type: i(955630).xd.bookmark,
                                            inMemoryRecordCache: t.inMemoryRecordCache,
                                            properties: {
                                                title: c && c.title ? i(247438).x9d(c.title) : i(247438).x9d(d),
                                                link: i(247438).x9d(d),
                                                description: c && c.description ? i(247438).x9d(c.description) : void 0
                                            },
                                            format: {
                                                bookmark_cover: c.thumbnail_url,
                                                bookmark_icon: c.favicon_url ? c.favicon_url : c.icon_url
                                            },
                                            transaction: e,
                                            spaceId: t.pointer.spaceId
                                        });
                                        i(673477).ed({
                                            environment: u,
                                            parentBlockStore: r,
                                            blockStore: n,
                                            token: s,
                                            transaction: e
                                        })
                                    } else {
                                        let n = i(124937).Wv({
                                            environment: u,
                                            type: i(955630).xd.bookmark,
                                            inMemoryRecordCache: t.inMemoryRecordCache,
                                            properties: {
                                                title: i(247438).x9d(d),
                                                link: i(247438).x9d(d)
                                            },
                                            transaction: e,
                                            spaceId: t.pointer.spaceId
                                        });
                                        i(673477).ed({
                                            environment: u,
                                            parentBlockStore: r,
                                            blockStore: n,
                                            token: s,
                                            transaction: e
                                        })
                                    }
                                }
                            })
                        }
                    }]
                }), (0, n.jsx)(i(747369).A, {
                    menuType: i(649476).gu.Popup,
                    children: (0, n.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        initialFocus: void 0,
                        onAccept: a,
                        sections: p,
                        style: l
                    })
                })
            }
        },
        275015: (e, t, i) => {
            i.d(t, {
                M: () => n
            });
            let n = new(i(151525)).Ay
        },
        301690: (e, t, i) => {
            i.d(t, {
                p: () => r
            });
            var n = i(296540),
                o = i(474848);
            let l = {
                content: {
                    width: 340,
                    height: "100%",
                    aspectRatio: "auto",
                    position: "relative"
                },
                container: {
                    width: 340,
                    maxHeight: 420,
                    flexDirection: "column",
                    alignItems: "flex-start"
                },
                buttonStyle: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 24,
                    height: 24,
                    borderRadius: 4,
                    fill: i(632079).Tj.icon.tertiary,
                    background: i(494295).xA
                },
                style0: {
                    position: "absolute",
                    top: 8,
                    insetInlineEnd: 8,
                    zIndex: 1
                },
                style1: {
                    position: "absolute",
                    top: 8,
                    insetInlineEnd: 8,
                    zIndex: 2
                }
            };

            function r(e) {
                let {
                    height: t,
                    padding: r,
                    padding_top: a,
                    iframe_url: s,
                    hoverData: d,
                    store: c,
                    token: u,
                    href: p,
                    onDismiss: g
                } = e, m = (0, i(109939).YK)({
                    editLink: {
                        defaultMessage: "Edit link",
                        id: "hoverPreviewOverlay.editLink"
                    }
                }), x = (0, i(109939).tz)(), h = (0, n.useRef)(null), y = c && c.recordStoreUIParentStore && c.recordStoreUIParentStore instanceof i(970831).B ? c.recordStoreUIParentStore : c instanceof i(970831).B ? c : void 0;
                return (0, o.jsxs)("div", {
                    style: l.container,
                    children: [e.showEditButton ? (0, o.jsx)(i(374533).A, {
                        onClick: e.handleEditClick,
                        icon: i(636).pencilLineIcon,
                        colorVariant: "primary",
                        ariaLabel: x.formatMessage(m.editLink),
                        hasBackground: !0,
                        style: l.style0
                    }) : void 0, u && y && d ? (0, o.jsx)("div", {
                        style: l.style1,
                        children: (0, o.jsx)(i(656252).A, {
                            popupType: i(656252).z.Popup,
                            placementToOrigin: "right",
                            alignmentToOrigin: "start",
                            originGap: 4,
                            onClose: () => {
                                let e = !1,
                                    t = h.current;
                                t && (e = (0, i(195304).ux)(t.getBoundingClientRect(), i(398902).$C.x, i(398902).$C.y)), e || null == g || g()
                            },
                            content: e => (0, o.jsx)(i(227045).A, {
                                parentBlockStore: y,
                                store: c,
                                token: u,
                                href: p,
                                hoverData: d,
                                onAccept: () => e.close()
                            }),
                            children: e => (0, o.jsx)(i(64960).Ay, {
                                style: l.buttonStyle,
                                ...e,
                                children: (0, o.jsx)(i(16275).I, {
                                    icon: i(397900).ellipsisIcon,
                                    colorVariant: "inversePrimary"
                                })
                            })
                        })
                    }) : void 0, (0, o.jsx)(i(671777).A, {
                        source: s,
                        style: l.content,
                        preserveScale: !!t && t < 1 || !!r,
                        background: !1,
                        height: t && t > 0 ? t : void 0,
                        aspectRatio: r ? r / 100 : .75,
                        paddingTop: a || void 0
                    })]
                })
            }
        },
        338798: (e, t, i) => {
            i.d(t, {
                _: () => a
            });
            var n = i(296540),
                o = i(474848);
            let l = {
                    krdFHd: "x1i5p2am",
                    kfmiAY: "x1whfx0g",
                    kT0f0o: "xr2y4jy",
                    kVL7Gh: "x1ihp6rs",
                    $$css: !0
                },
                r = {
                    kzqmXN: "xh8yej3",
                    $$css: !0
                };

            function a(e) {
                let t = (0, n.useMemo)(() => [r, !i(986939).A.isMobile && l, e.buttonStyle], [e.buttonStyle]);
                return (0, o.jsx)(i(64960).Ay, {
                    onClick: e.onClick,
                    hovered: e.focused,
                    disabled: e.disabled,
                    style: t,
                    hoveredStyle: e.hoveredButtonStyle,
                    pressedStyle: e.pressedButtonStyle,
                    children: (0, o.jsx)(i(636518).Ay, { ...e,
                        dontShrinkTitle: !0,
                        right: (0, o.jsxs)("div", { ...{
                                className: "x78zum5 x6s0dn4 xuxw1ft x1r0jzty x17zd0t2"
                            },
                            children: [e.right ? (0, o.jsx)(i(324489).V, {
                                isSecondaryColor: !0,
                                children: e.right
                            }) : void 0, i(986939).A.isMobile ? void 0 : (0, o.jsx)("div", { ...{
                                    0: {
                                        className: "x2lah0s x1jaox4c"
                                    },
                                    1: {
                                        className: "x2lah0s x1jaox4c x182y5vf"
                                    }
                                }["right" === e.chevronType | 0],
                                children: (0, o.jsx)(i(16275).I, {
                                    icon: i(595453).arrowChevronSingleDownSmallIcon,
                                    size: "xs",
                                    colorVariant: "tertiary"
                                })
                            })]
                        })
                    })
                })
            }
        },
        348400: (e, t, i) => {
            i.d(t, {
                R: () => r
            });
            var n = i(296540),
                o = i(474848);
            let l = {
                linkTitle: { ...(0, i(418676).pA)(2),
                    fontStyle: "normal",
                    fontWeight: i(699422).Wy.semibold,
                    fontSize: 14,
                    lineHeight: "143%",
                    fontFeatureSettings: "'case' on",
                    textOverflow: "ellipsis",
                    color: i(632079).Tj.text.primary
                },
                newDescription: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: 0,
                    ...(0, i(418676).pA)(3),
                    textOverflow: "ellipsis",
                    width: 248
                },
                newText: {
                    fontSize: 12,
                    fontWeight: i(699422).Wy.regular,
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    color: i(632079).Tj.text.primary
                },
                iconBoxImageStyle: {
                    margin: 1
                },
                style0: {
                    position: "absolute",
                    top: 8,
                    insetInlineEnd: 8
                },
                style1: {
                    position: "absolute",
                    top: 8,
                    insetInlineEnd: 35
                },
                style2: {
                    position: "absolute",
                    top: 8,
                    insetInlineEnd: 8,
                    zIndex: 1
                },
                style3: {
                    width: "100%",
                    height: "100%",
                    insetInlineStart: 0,
                    top: "calc(50% - 280px/2)"
                },
                style5: {
                    flexGrow: 0,
                    fontWeight: i(699422).Wy.medium,
                    color: "#787774",
                    fontSize: 12,
                    ...i(699422).RC
                },
                style6: {
                    width: 200,
                    height: 16
                }
            };

            function r(e) {
                let t = (0, i(533992).v3)(),
                    {
                        hoverData: r,
                        href: a,
                        handleEditClick: s,
                        showEditButton: d,
                        loading: c,
                        store: u,
                        token: p,
                        onDismiss: g
                    } = e,
                    m = (0, i(960253).e)(),
                    x = (0, i(960253).I)(() => ({
                        buttonStyle: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 24,
                            height: 24,
                            borderRadius: 4,
                            fill: i(632079).Tj.icon.tertiary,
                            background: r ? i(494295).xA : "dark" === m ? i(632079).Tj.palette.gray[100] : i(632079).Tj.background.elevated,
                            border: r ? void 0 : "1px solid rgba(227, 226, 224, 0.5)"
                        }
                    }), [r, m]),
                    h = (0, i(109939).tz)(),
                    y = (0, n.useRef)(null),
                    v = (0, i(109939).YK)({
                        copyLink: {
                            defaultMessage: "Copy link",
                            id: "hoverPreviewOverlay.copyLink"
                        },
                        editLink: {
                            defaultMessage: "Edit link",
                            id: "hoverPreviewOverlay.editLink"
                        }
                    }),
                    f = (0, n.useCallback)(async () => {
                        await i(374176).default.afterNextFlush();
                        let [e, n] = await Promise.all([(0, i(161333).r)(), (0, i(969899).jd)()]);
                        n({
                            environment: t,
                            stringValue: a,
                            copiedMessage: e.copiedLinkToClipboard
                        })
                    }, [t, a]),
                    S = u && u.recordStoreUIParentStore && u.recordStoreUIParentStore instanceof i(970831).B ? u.recordStoreUIParentStore : u instanceof i(970831).B ? u : void 0,
                    b = (null == r ? void 0 : r.thumbnail_url) ? ? ((null == r ? void 0 : r.images) && r.images.length > 0 && r.images[0].url);
                return (0, o.jsxs)(i(4458).VP, {
                    gap: 0,
                    width: 280,
                    alignItems: "flex-start",
                    children: [d ? (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(i(374533).A, {
                            onClick: f,
                            icon: i(802942).k,
                            colorVariant: "primary",
                            ariaLabel: h.formatMessage(v.copyLink),
                            hasBackground: !0,
                            style: l.style0
                        }), (0, o.jsx)(i(374533).A, {
                            onClick: s,
                            icon: i(753114).pencilLineSmallIcon,
                            colorVariant: "primary",
                            ariaLabel: h.formatMessage(v.editLink),
                            hasBackground: !0,
                            style: l.style1
                        })]
                    }) : void 0, p && S && !d ? (0, o.jsx)("div", {
                        style: l.style2,
                        children: (0, o.jsx)(i(656252).A, {
                            popupType: i(656252).z.Popup,
                            placementToOrigin: "right",
                            alignmentToOrigin: "start",
                            originGap: 4,
                            onClose: () => {
                                let e = !1,
                                    t = y.current;
                                t && (e = (0, i(195304).ux)(t.getBoundingClientRect(), i(398902).$C.x, i(398902).$C.y)), e || null == g || g()
                            },
                            content: e => (0, o.jsx)(i(227045).A, {
                                parentBlockStore: S,
                                store: u,
                                token: p,
                                href: a,
                                hoverData: r,
                                onAccept: () => e.close()
                            }),
                            children: e => (0, o.jsx)(i(64960).Ay, {
                                style: x.buttonStyle,
                                ...e,
                                children: (0, o.jsx)(i(16275).I, {
                                    icon: i(361226).ellipsisSmallIcon,
                                    size: "sm",
                                    style: {
                                        fill: r ? i(632079).oZ.white : i(632079).oZ.uiGray
                                    }
                                })
                            })
                        })
                    }) : void 0, b ? (0, o.jsx)(i(4458).fI, {
                        gap: 0,
                        width: 280,
                        height: 120,
                        children: (0, o.jsx)(i(989059).A, {
                            src: b,
                            style: l.style3
                        })
                    }) : void 0, (0, o.jsxs)(i(4458).VP, {
                        gap: 12,
                        width: 280,
                        alignItems: "flex-start",
                        paddingBlock: 12,
                        paddingInline: 16,
                        children: [null != r && r.title || null != r && r.description ? (0, o.jsxs)(i(4458).VP, {
                            gap: 2,
                            width: 248,
                            alignItems: "flex-start",
                            children: [null != r && r.title ? (0, o.jsx)(i(4458).fI, {
                                gap: 2,
                                children: (0, o.jsx)("div", {
                                    style: l.linkTitle,
                                    children: null == r ? void 0 : r.title
                                })
                            }) : void 0, null != r && r.description ? (0, o.jsx)(i(4458).fI, {
                                gap: 2,
                                children: (0, o.jsx)("div", {
                                    style: l.newDescription,
                                    children: (0, o.jsx)("div", {
                                        spellCheck: !1,
                                        style: l.newText,
                                        children: (0, o.jsx)("div", {
                                            children: null == r ? void 0 : r.description
                                        })
                                    })
                                })
                            }) : void 0]
                        }) : void 0, c ? (0, o.jsx)(i(795830).P, {
                            style: l.style6
                        }) : (0, o.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            width: 205,
                            height: 16,
                            children: [null != r && r.favicon_url ? (0, o.jsx)(i(392392).A, {
                                type: "image_url",
                                imageURL: null == r ? void 0 : r.favicon_url,
                                size: 16,
                                style: l.iconBoxImageStyle
                            }) : null != r && r.icon_url ? (0, o.jsx)(i(392392).A, {
                                type: "image_url",
                                imageURL: null == r ? void 0 : r.icon_url,
                                size: 16,
                                style: l.iconBoxImageStyle
                            }) : (0, o.jsx)(i(16275).I, {
                                icon: i(748869).linkSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            }), (0, o.jsx)("div", {
                                style: l.style5,
                                children: (null == r ? void 0 : r.provider_name) || (null == r ? void 0 : r.link_provider) || a
                            })]
                        })]
                    })]
                })
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
        391374: (e, t, i) => {
            i.d(t, {
                o: () => l
            });
            var n = i(296540),
                o = i(474848);
            let l = n.forwardRef(function({
                color: e = "primary",
                ...t
            }, n) {
                let l = (0, i(960253).I)(() => {
                        let n = "blue" === e ? i(632079).Tj.blue.text.accentPrimary : "secondary" === e ? i(632079).Tj.text.secondary : i(632079).Tj.text.primary;
                        return {
                            title: {
                                color: n,
                                fill: n
                            },
                            icon: {
                                fill: "blue" === e ? i(632079).Tj.blue.text.accentPrimary : void 0
                            },
                            buttonMenuItem: { ...t.style,
                                ...t.disabled ? {
                                    cursor: "not-allowed"
                                } : {}
                            }
                        }
                    }, [t.disabled, e, t.style]),
                    r = "blue" !== e ? e : void 0;
                return (0, o.jsx)(i(95582).A, {
                    ref: n,
                    ...t,
                    title: (0, o.jsx)("div", {
                        style: l.title,
                        children: t.title
                    }),
                    icon: (0, o.jsx)(i(16275).I, {
                        icon: i(581923).plusIcon,
                        style: l.icon,
                        colorVariant: r
                    }),
                    style: l.buttonMenuItem
                })
            })
        },
        397900: (e, t, i) => {
            i.r(t), i.d(t, {
                ellipsisIcon: () => o,
                iconDefinition: () => n
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 8.62 14.76 2.76",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M4 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"
                    })
                },
                o = (0, i(104509).wt)("ellipsis", n, "default")
        },
        437188: (e, t, i) => {
            i.d(t, {
                A: () => o
            }), i(296540);
            var n = i(474848);
            let o = function({
                collectionViewName: e,
                collectionViewType: t
            }) {
                return e ? (0, n.jsx)(i(93594).A, {
                    children: e
                }) : "page" === t ? (0, n.jsx)(i(109939).sA, {
                    id: "database.collectionView.untitledName.untitled",
                    defaultMessage: "Untitled"
                }) : (0, n.jsx)(i(109939).sA, { ...i(4587).X[t]
                })
            }
        },
        448988: (e, t, i) => {
            i.d(t, {
                Wx: () => l,
                fM: () => n,
                sM: () => o
            });
            let n = new(i(815048)).O2("framer-motion", async () => await Promise.all([i.e(49806), i.e(79974), i.e(45414), i.e(37043)]).then(i.bind(i, 301716)));

            function o(e) {
                return e.useAnimation()
            }

            function l(e, ...t) {
                return e.useInView(...t)
            }
        },
        455319: (e, t, i) => {
            i.d(t, {
                u: () => l
            }), i(296540);
            var n = i(474848);
            let o = {
                maxWidth: 500
            };

            function l({
                subscriptionTier: e,
                mobileStyle: t,
                desktopStyle: r,
                analyticsName: a,
                onClick: s,
                disableTooltip: d,
                tooltipContent: c,
                spaceStore: u
            }) {
                let p, g = (0, i(960253).e)(),
                    m = (0, i(533992).v3)(),
                    {
                        device: x
                    } = m,
                    h = (0, i(682985).K8)(() => null == u ? void 0 : u.canAdmin(), [u]),
                    y = (0, i(682985).K8)(() => (function(e, t) {
                        switch (e) {
                            case "plus":
                            case "business":
                            case "enterprise":
                                return {
                                    color: i(632079).Tj.blue.text.accentPrimary,
                                    background: "light" === t ? i(632079).oZ.diffBackground : "rgba(35, 131, 226, 0.2)",
                                    fontWeight: i(699422).Wy.medium
                                };
                            default:
                                return {}
                        }
                    })(e, g), [e, g]);
                return x.isMobileNative ? null : ("personal" === e ? p = (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Personal Pro",
                    id: "upgradeButton.personal.text"
                }) : (0, i(262166).$P)(e) ? p = (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Plus ↗",
                    id: "upgradeButton.plus.textWithArrow"
                }) : (0, i(262166).tL)(e) ? p = (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Business ↗",
                    id: "upgradeButton.business.textWithArrow"
                }) : (0, i(262166).OX)(e) ? p = (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Enterprise ↗",
                    id: "upgradeButton.enterprise.textWithArrow"
                }) : (0, i(722371).HB)(e), i(986939).A.isMobile || !h) ? (0, n.jsx)(i(731512).A, {
                    mobileStyle: t,
                    children: p
                }) : (0, n.jsx)(i(51831).m, {
                    delayThreshold: 120,
                    disableTooltip: d,
                    placement: "bottom",
                    content: () => (0, n.jsx)("div", {
                        style: o,
                        children: c ? (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "{tooltipText}",
                            id: "upgradeButton.upgrade.custom.tooltip",
                            values: {
                                tooltipText: c
                            }
                        }) : (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Upgrade to use this feature.",
                            id: "upgradeButton.upgrade.tooltip"
                        })
                    }),
                    originGap: 6,
                    children: t => (0, n.jsx)(i(731512).A, {
                        desktopStyle: r,
                        innerStyle: y,
                        onClick: t => {
                            var n, o, l, r, d, c;
                            return n = t, o = a, l = e, r = m, d = u, c = s, void(i(907063).K(r, {
                                from: o,
                                upsell: {
                                    type: "product",
                                    product: l,
                                    limit: {
                                        type: "none"
                                    },
                                    trialability: "none"
                                },
                                spaceStore: d
                            }), c && c(n))
                        },
                        ...t,
                        children: p
                    })
                })
            }
        },
        497857: (e, t, i) => {
            i.d(t, {
                h: () => o
            }), i(296540);
            var n = i(474848);

            function o() {
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
                xMarkFillSmallIcon: () => o
            }), i(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.03 3.03 9.94 9.94",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M12.73 4.33a.75.75 0 1 0-1.06-1.06L8 6.94 4.33 3.27a.75.75 0 1 0-1.06 1.06L6.94 8l-3.67 3.67a.75.75 0 1 0 1.06 1.06L8 9.06l3.67 3.67a.75.75 0 0 0 1.06-1.06L9.06 8z"
                    })
                },
                o = (0, i(104509).wt)("xMarkFillSmall", n, "fillSmall")
        },
        527722: (e, t, i) => {
            i.d(t, {
                a: () => r
            });
            var n = i(296540),
                o = i(474848);
            let l = {
                    margin: 0
                },
                r = n.forwardRef((e, t) => {
                    let n = (0, i(83208).X)("polish_publish_menu") && !i(986939).A.isMobile,
                        r = (0, i(960253).I)(() => ({
                            buttonStyle: {
                                paddingInlineStart: n ? 2 : 8,
                                paddingInlineEnd: n ? 2 : 8,
                                paddingTop: 2,
                                paddingBottom: 2,
                                width: "100%",
                                marginInlineStart: 0,
                                background: "transparent",
                                ...e.buttonStyle
                            },
                            menuItemStyle: {
                                gap: 6,
                                background: "transparent",
                                ...e.style
                            },
                            innerContainer: {
                                marginInlineStart: 0,
                                paddingInlineStart: 0,
                                minWidth: 0,
                                color: e.disabled ? i(632079).Tj.text.secondary : void 0,
                                background: "transparent"
                            },
                            rightStyle: {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                color: i(632079).Tj.text.secondary,
                                margin: 0,
                                ...e.rightStyle
                            }
                        }), [n, e.buttonStyle, e.style, e.disabled, e.rightStyle]);
                    return (0, o.jsx)(i(95582).A, {
                        role: "button",
                        ...e,
                        ref: t,
                        style: r.menuItemStyle,
                        buttonStyle: r.buttonStyle,
                        textWrapperStyle: r.innerContainer,
                        desktopIconStyle: l,
                        rightStyle: r.rightStyle
                    })
                });
            r.displayName = "SiteSettingButtonMenuItem"
        },
        721234: (e, t, i) => {
            i.d(t, {
                A: () => l
            });
            var n = () => i(546605);
            class o extends n().Store {
                getInitialState() {
                    return {
                        automationActionStore: void 0,
                        automationStore: void 0,
                        contextType: void 0,
                        typecheckResult: void 0
                    }
                }
                blur(e) {
                    void 0 !== this.state.automationStore && (void 0 === e || (0, i(795676).A)(this.state, e)) && this.setState({
                        automationActionStore: void 0,
                        automationStore: void 0,
                        contextType: void 0,
                        typecheckResult: void 0
                    })
                }
                focus(e) {
                    (0, i(795676).A)(this.instanceState, e) || this.setState(e)
                }
            }
            let l = new o;
            (0, i(202146).exposeDebugValue)("AutomationFocusStore", o)
        },
        746204: (e, t, i) => {
            i.d(t, {
                w: () => o
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.87 3.72 7.16 12.56",
                    directional: !0,
                    svg: (0, i(474848).jsx)("path", {
                        d: "M6.131 9.381a.875.875 0 0 0 0 1.238l5.4 5.4a.875.875 0 1 0 1.238-1.238L7.987 10l4.782-4.781A.875.875 0 0 0 11.53 3.98z"
                    })
                },
                o = (0, i(104509).wt)("arrowChevronSingleLeftFill", n, "fill")
        },
        748869: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => o,
                linkSmallIcon: () => l
            }), i(296540);
            var n = i(474848);
            let o = {
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
                l = (0, i(104509).wt)("linkSmall", o, "small")
        },
        884877: (e, t, i) => {
            i.d(t, {
                A: () => o
            }), i(296540);
            var n = i(474848);

            function o(e) {
                let t = {
                    display: "inline-block",
                    minWidth: e.size,
                    minHeight: e.size
                };
                return "x" === e.axis ? t.minHeight = 1 : "y" === e.axis && (t.minWidth = 1), (0, n.jsx)("div", {
                    style: t
                })
            }
        },
        886868: (e, t, i) => {
            i.d(t, {
                A: () => u
            }), i(944114), i(581454);
            var n = i(296540),
                o = i(474848);
            let l = {
                container: {
                    color: i(632079).Tj.text.secondary
                }
            };

            function r(e) {
                let {
                    permissionItem: t
                } = e, n = (0, i(109939).tz)();
                if (!t.expiration_timestamp || (0, i(642157).OA)(t)) return (0, o.jsx)(i(324489).V, {
                    style: l.container,
                    children: (0, o.jsx)(i(109939).sA, {
                        defaultMessage: "Never",
                        id: "publishSiteSettings.linkExpiration.never"
                    })
                });
                let r = i(850640).jE(t.expiration_timestamp, i(849917).locale, n);
                return (0, o.jsx)(i(324489).V, {
                    style: l.container,
                    children: r
                })
            }
            let a = {
                disabledText: {
                    color: i(632079).Tj.text.tertiary
                },
                style0: {
                    paddingTop: 10,
                    paddingInlineEnd: 10,
                    paddingBottom: 4,
                    paddingInlineStart: 10
                }
            };

            function s(e) {
                let t, l, r, s, {
                        value: d,
                        onChange: u,
                        onClose: p,
                        spaceStore: g
                    } = e,
                    m = (0, i(533992).v3)(),
                    x = (0, i(83208).X)("upgrade_system_sharing"),
                    h = (0, i(682985).K8)(() => !(0, i(216260).y4)(), []),
                    y = (0, i(682985).K8)(() => (0, i(426901).S)(m), [m]),
                    v = (0, n.useCallback)(e => {
                        void 0 !== e && e <= new Date().getTime() || (u(e), p())
                    }, [u, p]),
                    f = (0, i(345776).T)(),
                    S = (0, i(217844)._)({
                        spaceId: null == g ? void 0 : g.id,
                        userId: f,
                        name: "link_expiration"
                    }),
                    {
                        handleClick: b
                    } = (0, i(79268).C)({
                        upsell: null == S ? void 0 : S.upsell,
                        source: "public_permission_item_expiration",
                        spaceStore: g
                    }),
                    j = [{
                        key: "predefined-expiration",
                        items: (l = (t = Date.now()) + i(627179).pT, r = t + i(627179).nD, s = t + 7 * i(627179).nD, [{
                            key: "none",
                            time: void 0,
                            title: (0, o.jsx)(i(109939).sA, {
                                defaultMessage: "Never",
                                id: "publishSiteSettings.linkExpiration.never"
                            })
                        }, {
                            key: "hour",
                            time: l,
                            title: (0, o.jsx)(i(109939).sA, {
                                defaultMessage: "In an hour",
                                id: "publishSiteSettings.linkExpiration.oneHour"
                            }),
                            caption: new Intl.DateTimeFormat(i(849917).locale, {
                                hour: "numeric",
                                minute: "numeric"
                            }).format(l)
                        }, {
                            key: "day",
                            time: r,
                            title: (0, o.jsx)(i(109939).sA, {
                                defaultMessage: "In a day",
                                id: "publishSiteSettings.linkExpiration.oneDay"
                            }),
                            caption: new Intl.DateTimeFormat(i(849917).locale, {
                                day: "numeric",
                                month: "long",
                                hour: "numeric",
                                minute: "numeric"
                            }).format(r)
                        }, {
                            key: "week",
                            time: s,
                            title: (0, o.jsx)(i(109939).sA, {
                                defaultMessage: "In a week",
                                id: "publishSiteSettings.linkExpiration.oneWeek"
                            }),
                            caption: new Intl.DateTimeFormat(i(849917).locale, {
                                day: "numeric",
                                month: "long",
                                hour: "numeric",
                                minute: "numeric"
                            }).format(s)
                        }]).map(e => ({
                            key: e.key,
                            action: () => {
                                v(e.time)
                            },
                            render: t => (0, o.jsx)(i(95582).A, { ...t,
                                title: e.title,
                                titleStyle: h ? a.disabledText : {},
                                caption: e.caption,
                                captionStyle: h ? a.disabledText : {},
                                disabled: h
                            })
                        }))
                    }, {
                        key: "custom-expiration",
                        render: e => (0, o.jsx)(i(844565).A, { ...e,
                            topBorder: !0
                        }),
                        items: [function(e, t, n, l = {}) {
                            return {
                                key: "custom",
                                action: () => {
                                    window.parent.close()
                                },
                                render: (r, a) => (0, o.jsx)(i(816231).A, { ...r,
                                    onFocus: a.onFocus,
                                    disableDefaultClick: !0,
                                    renderExtension: (i, l) => (0, o.jsx)(c, {
                                        events: i,
                                        extensionParent: l,
                                        onChange: e,
                                        value: t,
                                        disabled: n
                                    }),
                                    children: e => (0, o.jsx)(i(95582).A, { ...e,
                                        disabled: n,
                                        title: (0, o.jsx)(i(109939).sA, {
                                            id: "publicPermissionItem.expiration.chooseDate",
                                            defaultMessage: "Choose date"
                                        }),
                                        titleStyle: n ? l : {}
                                    })
                                })
                            }
                        }(v, d, h, a.disabledText)]
                    }];
                return y && h && !x && j.push({
                    key: "upgrade-for-expiration",
                    render: e => (0, o.jsx)(i(844565).A, { ...e,
                        topBorder: !0
                    }),
                    items: [{
                        key: "upsell",
                        action: () => b(),
                        render: e => (0, o.jsx)(i(95582).A, { ...e,
                            focused: e.focused,
                            title: (0, o.jsxs)(i(4458).fI, {
                                gap: 6,
                                children: [(0, o.jsx)(i(109939).sA, {
                                    defaultMessage: "Unlock link expiration",
                                    id: "publishSiteSettings.linkExpiration.upgrade"
                                }), (0, o.jsx)(i(455319).u, {
                                    spaceStore: g,
                                    subscriptionTier: y,
                                    analyticsName: "public_permission_item_expiration"
                                })]
                            })
                        })
                    }]
                }), (0, o.jsxs)(i(747369).A, {
                    menuType: i(986939).A.isMobile ? i(649476).gu.ActionSheet : i(649476).gu.Popup,
                    width: 271,
                    children: [x && h && (0, i(811656).wy)(null == S ? void 0 : S.upsell) ? (0, o.jsx)("div", {
                        style: a.style0,
                        children: (0, o.jsx)(i(754951).UpgradeButton, {
                            source: "public_permission_item_expiration",
                            display: "button",
                            upsell: S.upsell,
                            spaceStore: g
                        })
                    }) : void 0, (0, o.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        initialFocus: void 0,
                        sections: j
                    })]
                })
            }
            let d = {
                padding: "18px 14px 14px"
            };

            function c(e) {
                let {
                    events: t,
                    extensionParent: n,
                    onChange: l,
                    value: r,
                    disabled: a
                } = e, s = (0, i(682985).O$)(i(97892).X);
                return (0, o.jsx)("div", {
                    style: d,
                    children: (0, o.jsx)(i(151012).A, { ...t,
                        firstDayOfWeek: s,
                        value: r || Date.now(),
                        onChange: e => {
                            l(e), n.close()
                        },
                        disabledDays: a || {
                            before: new Date
                        }
                    })
                })
            }
            let u = n.forwardRef(function(e, t) {
                let {
                    permissionItem: n,
                    hideIcon: l,
                    onChange: a,
                    buttonStyle: d
                } = e, {
                    spaceStore: c,
                    ...u
                } = e;
                return (0, o.jsx)(i(785267).A, { ...u,
                    popupType: i(986939).A.isMobile ? i(656252).z.SlideUp : i(656252).z.Popup,
                    alignmentToOrigin: "end",
                    placementToOrigin: "bottom",
                    content: e => (0, o.jsx)(s, {
                        spaceStore: c,
                        value: n.expiration_timestamp,
                        onChange: a,
                        onClose: () => {
                            e.close()
                        }
                    }),
                    children: e => (0, o.jsx)(i(527722).a, { ...(0, i(63390).A)(u, e),
                        ref: t,
                        title: (0, o.jsx)(i(109939).sA, {
                            defaultMessage: "Link expires",
                            id: "publishSiteSettings.linkExpiration.settingTitle"
                        }),
                        icon: !l && (0, o.jsx)(i(16275).I, {
                            icon: i(772683).clockIcon,
                            colorVariant: "secondary"
                        }),
                        right: (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(r, {
                                permissionItem: n
                            }), (0, o.jsx)(i(16275).I, {
                                icon: i(595453).arrowChevronSingleDownSmallIcon,
                                size: "sm",
                                colorVariant: "tertiary"
                            })]
                        }),
                        buttonStyle: d
                    })
                })
            })
        }
    }
]);