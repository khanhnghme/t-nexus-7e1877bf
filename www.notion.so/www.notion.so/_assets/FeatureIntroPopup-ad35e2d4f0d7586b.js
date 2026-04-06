"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [53147], {
        257995: (t, e, o) => {
            o.r(e), o.d(e, {
                FeatureIntroPopup: () => u,
                default: () => c
            }), o(581454);
            var n = o(296540),
                i = o(474848);
            let r = {
                    content: {
                        padding: "0 24px",
                        height: 90
                    },
                    title: {
                        fontSize: o(699422).J.UIRegular.desktop,
                        fontWeight: o(699422).Wy.semibold,
                        marginBottom: 5,
                        marginTop: 16
                    },
                    subtitle: {
                        fontSize: o(699422).J.UIRegular.desktop,
                        color: o(632079).Tj.text.secondary
                    },
                    image: {
                        display: "flex",
                        margin: "auto"
                    },
                    imageWrapper: {
                        borderBottom: `1px solid ${o(632079).Tj.border.secondaryTranslucent}`,
                        display: "flex"
                    }
                },
                l = function(t) {
                    let {
                        imageSrc: e,
                        imageStyles: o,
                        title: n,
                        subtitle: l
                    } = t;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            style: r.imageWrapper,
                            children: (0, i.jsx)("img", {
                                style: { ...r.image,
                                    ...o
                                },
                                src: e
                            }, e)
                        }), (0, i.jsxs)("div", {
                            style: r.content,
                            children: [(0, i.jsx)("div", {
                                style: r.title,
                                children: n
                            }), (0, i.jsx)("div", {
                                style: r.subtitle,
                                children: l
                            })]
                        })]
                    })
                },
                a = {
                    headerText: {
                        fontWeight: o(699422).Wy.medium
                    },
                    description: {
                        fontSize: 14,
                        color: o(632079).Tj.text.secondary,
                        marginBottom: 16,
                        textAlign: "center"
                    }
                },
                s = function(t) {
                    return (0, i.jsxs)(i.Fragment, {
                        children: [t.icon ? (0, i.jsx)(o(4458).fI, {
                            justifyContent: "center",
                            children: t.icon ? (0, i.jsx)(o(16275).I, {
                                icon: t.icon,
                                size: "xl",
                                colorVariant: "secondary"
                            }) : void 0
                        }) : void 0, (0, i.jsx)(o(4458).fI, {
                            marginTop: 12,
                            marginBottom: 8,
                            justifyContent: "center",
                            children: (0, i.jsx)("div", {
                                style: a.headerText,
                                children: t.header
                            })
                        }), (0, i.jsx)("div", {
                            style: a.description,
                            children: t.description
                        })]
                    })
                },
                d = {
                    button: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    dismissButton: {
                        marginTop: 10
                    },
                    closeButton: {
                        position: "absolute",
                        top: 10,
                        insetInlineEnd: 10,
                        padding: 0,
                        borderRadius: "50%",
                        height: 24,
                        width: 24,
                        background: o(632079).Tj.buttonHoveredBackground
                    },
                    closeButtonHoveredStyle: {
                        backgroundColor: o(632079).Tj.buttonPressedBackground
                    },
                    backButton: {
                        marginInlineEnd: 8,
                        fontWeight: o(699422).Wy.medium
                    },
                    nextButton: {
                        fontWeight: o(699422).Wy.medium
                    },
                    style1: {
                        marginInlineStart: "auto"
                    }
                };

            function u(t) {
                let {
                    initialPromo: e,
                    steps: r,
                    isUserEligible: a = !0,
                    seenFeatureUserSetting: u,
                    userSettingsStore: c,
                    allowExternalMouseEvents: g,
                    onDismiss: p,
                    onTryFeatureClick: f,
                    onPopupSeen: h,
                    onLearnMore: m,
                    ctaMessage: x,
                    calloutId: y
                } = t, j = (0, o(109939).tz)(), b = (0, o(960253).e)(), v = (0, o(960253).I)(() => ({
                    popupContainer: {
                        background: "light" === b ? o(632079).Tj.background.primary : o(632079).Tj.background.secondary,
                        borderRadius: 8,
                        width: 320,
                        padding: "20px 20px 16px",
                        boxShadow: o(632079).Tj.shadow.outline.lg
                    },
                    closeButtonIcon: {
                        width: o(104509).Ev.sm,
                        height: o(104509).Ev.sm,
                        fill: "light" === b ? o(713101).$.light.gray[400] : o(713101).$.dark.translucentGray[600]
                    }
                }), [b]), S = (0, o(739726).L)(), I = (0, o(718012).V)(), [B, k] = (0, n.useState)(0), C = (0, n.useCallback)(() => {
                    let t = null == c ? void 0 : c.getSettings();
                    return !t || !0 === t[u]
                }, [u, c]), T = (0, o(682985).K8)(() => !C() && a && (null == I ? void 0 : I.getCalloutVisibility(y).canShow) || !!t.forceShow, [y, C, a, t.forceShow, I]), P = (0, n.useCallback)(() => {
                    k(B + 1), null == m || m()
                }, [B, m]), w = (0, o(668745).ZC)(T);
                (0, n.useEffect)(() => {
                    T && !w && (null == h || h())
                }, [T, h, w]);
                let A = (0, o(682985).K8)(() => {
                        var t;
                        return null == (t = o(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.id
                    }, []),
                    R = (0, o(668745).ZC)(A);
                return (0, n.useEffect)(() => {
                    T && void 0 !== R && A !== R && p()
                }, [T, A, R, p]), (0, i.jsx)(o(182718).zD, {
                    popupType: o(423291).n.Popup,
                    open: T,
                    placementToOrigin: "top",
                    alignmentToOrigin: "center",
                    originGap: 15,
                    disableMouseCapture: g,
                    content: () => {
                        let t = 0 === B,
                            n = t ? (0, i.jsx)(s, { ...e
                            }) : (0, i.jsx)(l, { ...r[B - 1]
                            }),
                            a = t ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(o(912946).A, {
                                    colorPalette: "blue",
                                    style: d.button,
                                    onClick: P,
                                    size: "lg",
                                    children: x || (0, i.jsx)(o(109939).sA, {
                                        id: "FeatureIntroPopup.learnMore.text",
                                        defaultMessage: "Learn more"
                                    })
                                }), (0, i.jsx)(o(988022).p, {
                                    onClick: p,
                                    colorVariant: "tertiary",
                                    style: { ...d.button,
                                        ...d.dismissButton
                                    },
                                    children: (0, i.jsx)(o(109939).sA, {
                                        id: "FeatureIntroPopup.dismissButton.text",
                                        defaultMessage: "Dismiss"
                                    })
                                })]
                            }) : (0, i.jsxs)(o(4458).fI, {
                                marginInlineStart: 24,
                                marginInlineEnd: 24,
                                marginBottom: 16,
                                marginTop: 8,
                                alignItems: "center",
                                height: 28,
                                children: [(0, i.jsx)(o(4458).fI, {
                                    gap: 8,
                                    children: [...Array(r.length)].map((t, e) => (0, i.jsx)(o(16275).I, {
                                        icon: o(724336).K,
                                        colorVariant: e === B - 1 ? void 0 : "tertiary",
                                        fitToViewBox: "horizontal"
                                    }, `intro-step-${e}`))
                                }), (0, i.jsxs)("div", {
                                    style: { ...d.button,
                                        ...d.style1
                                    },
                                    children: [B > 1 ? (0, i.jsx)(o(988022).p, {
                                        onClick: () => k(B - 1),
                                        style: d.backButton,
                                        colorPalette: "gray",
                                        children: (0, i.jsx)(o(109939).sA, {
                                            id: "FeatureIntroPopup.backButton",
                                            defaultMessage: "Back"
                                        })
                                    }) : void 0, B < r.length ? (0, i.jsx)(o(988022).p, {
                                        onClick: () => k(B + 1),
                                        style: d.nextButton,
                                        colorPalette: "blue",
                                        children: (0, i.jsx)(o(109939).sA, {
                                            id: "FeatureIntroPopup.nextButton",
                                            defaultMessage: "Next"
                                        })
                                    }) : void 0, B === r.length ? (0, i.jsx)(o(912946).A, {
                                        colorPalette: "blue",
                                        onClick: f,
                                        children: (0, i.jsx)(o(109939).sA, {
                                            id: "FeatureIntroPopup.tryItOut.button",
                                            defaultMessage: "Try it out"
                                        })
                                    }) : void 0]
                                })]
                            });
                        return (0, i.jsxs)(o(397732).U, {
                            calloutId: y,
                            inAppCalloutStore: I,
                            children: [n, (0, i.jsx)(o(374533).A, {
                                icon: o(25094).xMarkSmallIcon,
                                style: d.closeButton,
                                hoveredStyle: d.closeButtonHoveredStyle,
                                iconStyle: v.closeButtonIcon,
                                disableBackground: !0,
                                onClick: p,
                                ariaLabel: j.formatMessage({
                                    id: "FeatureIntroPopup.closeButton.ariaLabel",
                                    defaultMessage: "Close"
                                })
                            }), a]
                        })
                    },
                    style: 0 === B ? v.popupContainer : { ...v.popupContainer,
                        padding: void 0
                    },
                    children: (0, i.jsx)("div", {
                        style: {
                            position: "absolute",
                            bottom: S + 52,
                            insetInlineEnd: 0
                        }
                    })
                })
            }
            let c = u
        },
        420459: (t, e, o) => {
            o.d(e, {
                G4: () => l,
                gu: () => i,
                rs: () => r
            }), o(18107), o(967357);
            var n = () => o(970831);

            function i(t) {
                let e = t ? ? ("editing" === o(358377).default.state.mode ? o(358377).default.state.multiSelection : void 0);
                if (!e) return;
                let i = e.start.store,
                    r = i.getRecordStoreUIRoot(),
                    l = o(521595).n.findNodeFromStore(i),
                    a = (0, o(534012).T)(i),
                    s = null == a ? void 0 : a.getRecordStoreUIParent(),
                    d = (0, o(730994).K3)(r),
                    u = a && a instanceof n().B && a !== r ? a : void 0,
                    c = u ? ? l;
                if (r && r instanceof n().B && c) return {
                    type: "cursor",
                    textSelection: e,
                    currentPage: r,
                    currentBlock: u,
                    origin: c,
                    currentParent: s,
                    scrollerStore: d,
                    isPageTitle: r.id === i.id
                }
            }

            function r() {
                let {
                    stores: t
                } = o(584265).default.state, e = o(358377).default.state, i = "empty" !== e.mode ? e.multiSelection : void 0, r = "empty" !== e.mode ? e.multiSelection.start.store : void 0, l = r ? r.getRecordStoreUIRoot() : void 0;
                if (!(l instanceof n().B)) {
                    let t, e = null == r ? void 0 : r.getRecordStoreUIParent();
                    for (; null != e;) e instanceof n().B && (t = e), e = e.getRecordStoreUIParent();
                    t && (l = t)
                }
                if (i && l && l instanceof n().B) {
                    let e = (0, o(534012).T)(i.end.store),
                        n = null == e ? void 0 : e.getRecordStoreUIParent(),
                        r = (0, o(730994).K3)(l);
                    if (e && n) return {
                        type: "textSelection",
                        stores: t,
                        textSelection: i,
                        currentPage: l,
                        origin: e,
                        endBlock: e,
                        endBlockParent: n,
                        scrollerStore: r
                    }
                }
            }

            function l() {
                if (o(584265).default.state.stores.length > 0) {
                    let t = o(358377).default.state;
                    if ("empty" === t.mode) {
                        let t = function() {
                            if (1 !== o(584265).default.state.stores.length) return;
                            let t = o(584265).default.state.stores[0];
                            if (!(t instanceof n().B)) return;
                            let e = t.getTitleStore();
                            if (e) return {
                                start: {
                                    store: e,
                                    index: 0
                                },
                                end: {
                                    store: e,
                                    index: 0
                                }
                            }
                        }();
                        return t ? i(t) : function() {
                            let {
                                stores: t
                            } = o(584265).default.state, e = t[0], i = t.at(-1), r = e ? e.getRecordStoreUIRoot() : void 0;
                            if (r && r instanceof n().B && i) {
                                let e = (0, o(730994).K3)(r);
                                return {
                                    type: "blockSelection",
                                    stores: t,
                                    currentPage: r,
                                    origin: i,
                                    scrollerStore: e
                                }
                            }
                        }()
                    }
                    return (0, o(971541).k)(t.multiSelection) ? i() : r()
                }
            }
        },
        476081: (t, e, o) => {
            o.d(e, {
                l: () => n
            });
            async function n(t) {
                var e;
                let {
                    environment: n,
                    blockStore: i,
                    rect: r,
                    property_id: l,
                    from: a
                } = t;
                if (o(332190).A.hasContent()) return void(0, o(58931)._y)({
                    environment: n,
                    reason: "starting_new"
                });
                let s = o(496704).K.getRect(i);
                if (!s) return;
                let d = new(o(478597)).A(n, (0, o(226221).e)(i.pointer.spaceId)),
                    u = s.width,
                    c = s.height,
                    g = s.right - u;
                o(332190).A.setState({
                    open: !0,
                    rect: r || new DOMRect(g, s.top, u, c),
                    type: "block",
                    content: "comment",
                    blockStore: i,
                    blockId: i.id,
                    discussionInputStore: d,
                    property_id: l,
                    lastKnownBlockStore: i,
                    from: a
                }), (0, o(661767).V)({
                    element: null == (e = o(862921).A.UpdateSidebarCommentScroller) ? void 0 : e.getNode(),
                    environment: n,
                    options: {
                        top: 0,
                        behavior: "smooth"
                    }
                }), o(827862).A.setActiveWithSource("text_annotation"), await (0, o(745990).M)({
                    discussionInputStore: d,
                    environment: n
                }), o(65255).j4(n, {
                    from: a
                })
            }
        },
        724336: (t, e, o) => {
            o.d(e, {
                K: () => i
            }), o(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "7 7 6 6",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                    })
                },
                i = (0, o(104509).wt)("dotFill", n, "fill")
        }
    }
]);