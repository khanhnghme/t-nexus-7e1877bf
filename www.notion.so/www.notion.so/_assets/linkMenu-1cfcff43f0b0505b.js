"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [4586], {
        349525: (e, t, n) => {
            n.r(t), n.d(t, {
                SelectionLinkMenu: () => l
            });
            var o = n(296540),
                i = n(474848);

            function l(e) {
                let {
                    onClose: t,
                    originRef: l
                } = e, r = (0, o.useRef)(null), s = (0, n(682985).K8)(() => {
                    let e = n(68119).A.state;
                    if (e.open && e.disablePopup) return e
                }, []), a = !!s;
                return ((0, o.useEffect)(() => {
                    if (a) return window.addEventListener("mousedown", e), () => window.removeEventListener("mousedown", e);

                    function e(e) {
                        var o;
                        if (r.current && e.target instanceof Node && !r.current.contains(e.target) && !(null != (o = l.current) && o.contains(e.target))) {
                            let {
                                clientX: o,
                                clientY: i
                            } = e;
                            requestAnimationFrame(() => {
                                n(280546).d(), t(), requestAnimationFrame(() => {
                                    let e = document.caretPositionFromPoint(o, i);
                                    if (e) {
                                        let t = window.getSelection();
                                        null == t || t.collapse(e.offsetNode, e.offset)
                                    }
                                })
                            })
                        }
                    }
                }, [a, l, t]), s) ? (0, i.jsx)(n(792652).P, {
                    ref: r,
                    state: s,
                    onClose: t,
                    onUnlink: n(280546).sp
                }) : null
            }
        },
        418148: (e, t, n) => {
            n.r(t), n.d(t, {
                LinkMenuPopup: () => r
            });
            var o = n(296540),
                i = n(474848);
            let l = {
                popup: {
                    width: n(785596).aU
                }
            };

            function r() {
                let e = (0, n(682985).K8)(() => (0, n(785596).t4)(), []),
                    t = (0, n(533992).Y0)(),
                    r = null == e ? void 0 : e.trapFocus,
                    s = (0, n(682985).K8)(() => !e || n(871552).GC(e), [e]);
                if ((0, o.useEffect)(() => {
                        e && s && n(871552).oV(e.type)
                    }, [s, e]), !e || "text" === e.type && e.disablePopup) return null;
                let {
                    onClose: a,
                    onUnlink: u
                } = n(871552).uW(e);
                return (0, i.jsx)(n(182718).zD, {
                    popupType: n(986939).A.isMobile ? t.isTablet ? n(423291).n.Popup : n(423291).n.BottomSheet : n(423291).n.Popup,
                    style: l.popup,
                    keepFocus: t.isPhone,
                    open: e.open,
                    originRect: e.open ? e.selectionRect : void 0,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "center",
                    originGap: 8,
                    disableContentScroll: !0,
                    onDismiss: a,
                    content: () => e.open ? (0, i.jsx)(n(792652).P, {
                        state: e,
                        onClose: a,
                        onUnlink: u
                    }) : void 0,
                    preventBlockRenderQueueOnEnter: !n(986939).A.isMobile,
                    trapFocus: r
                })
            }
        },
        792652: (e, t, n) => {
            n.d(t, {
                P: () => m
            });
            var o = n(296540),
                i = n(474848);

            function l(e) {
                let {
                    state: t,
                    focusInitial: o,
                    defaultValue: l,
                    onBlur: s,
                    onKeyDown: a,
                    style: u,
                    inputComboboxProps: c
                } = e, d = (0, n(533992).WS)(), p = (0, n(109939).tz)(), f = p.formatMessage({
                    defaultMessage: "Paste link or search pages",
                    id: "selectionLinkButton.search.createNewLinkPlaceholder"
                }), k = p.formatMessage({
                    defaultMessage: "Edit link or search pages",
                    id: "selectionLinkButton.search.editLinkPlaceholder"
                }), g = d ? void 0 : t.focusLinkInput, m = (0, n(785596).lR)(t) ? k : f;
                return (0, i.jsx)(n(310324).Ay, {
                    onFocus: n(785596).Nd,
                    placeholder: m,
                    value: l || t.url,
                    onChange: r,
                    onBlur: s,
                    onKeyDown: a,
                    focus: g,
                    focusInitial: o,
                    focusAfterAnimation: !0,
                    preventCaptureArrowShortcuts: !0,
                    inputElementAttributes: {
                        "aria-label": m
                    },
                    style: u,
                    ...c
                })
            }

            function r(e) {
                let t = (0, n(785596).t4)();
                t && n(871552).wv(t, e)
            }
            let s = {
                container: {
                    display: "flex",
                    alignItems: "center",
                    padding: "4px 6px",
                    marginInlineStart: 12,
                    marginInlineEnd: 12,
                    borderRadius: 6,
                    boxShadow: `${n(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                    background: n(632079).Tj.background.secondaryTranslucent,
                    height: 28,
                    fontSize: 14,
                    lineHeight: "120%"
                },
                phoneContainer: {
                    display: "flex",
                    alignItems: "center",
                    padding: "4px 16px",
                    boxShadow: `${n(632079).Tj.border.secondaryTranslucent} 0px 1px 0px`,
                    background: n(632079).Tj.background.elevated,
                    height: 46
                },
                style0: {
                    marginInlineEnd: 4
                }
            };

            function a(e) {
                let {
                    store: t,
                    onClick: o
                } = e, l = (0, n(533992).WS)(), r = (0, n(682985).K8)(() => t.getIcon(), [t]), a = (0, n(682985).K8)(() => t instanceof n(970831).B && t.isEmptyPage(), [t]), u = (0, n(682985).K8)(() => (0, n(569553).Te)(t), [t]);
                return (0, i.jsxs)(n(64960).Ay, {
                    style: l ? s.phoneContainer : s.container,
                    onClick: o,
                    children: [(0, i.jsx)(n(569553).B6, {
                        disabled: !0,
                        icon: r,
                        iconRecordCategory: u,
                        isEmptyPage: a,
                        size: n(986939).A.isMobile ? 24 : 20,
                        style: s.style0
                    }), (0, i.jsx)(n(627918).A, {
                        store: t
                    })]
                })
            }

            function u(e) {
                let {
                    state: t,
                    showPreview: o,
                    store: r,
                    inputComboboxProps: s
                } = e, u = (0, n(533992).WS)(), d = (0, n(785596).Hx)(t), p = (0, n(785596).lR)(t);
                return o && r ? (0, i.jsx)(a, {
                    store: r,
                    onClick: n(785596).Nd
                }) : (0, i.jsx)(l, {
                    state: t,
                    onBlur: n(785596).gZ,
                    onKeyDown: c,
                    defaultValue: o ? d : void 0,
                    style: p ? void 0 : {
                        marginTop: 6
                    },
                    focusInitial: !p || u && "text" === t.type && !t.focusTitleInput,
                    inputComboboxProps: s
                })
            }

            function c(e) {
                "Escape" === e.key && (e.stopPropagation(), (0, n(785596).OY)())
            }
            let d = {
                paddingBottom: 8
            };

            function p(e) {
                let {
                    title: t,
                    focus: l,
                    defaultTitle: r
                } = e, s = (0, n(533992).v3)(), a = (0, n(533992).WS)(), [u, c] = (0, o.useState)(), p = (0, o.useRef)(!1), m = (0, o.useMemo)(() => ({
                    environment: s,
                    defaultTitle: r,
                    setPlaceholder: c,
                    hasTitleChanged: p
                }), [r, s]);
                return (0, o.useEffect)(() => {
                    let e = p.current;
                    return () => {
                        e && n(691968).st()
                    }
                }, [p, s]), (0, i.jsx)(n(310324).Ay, {
                    focus: l,
                    focusInitial: a,
                    onFocus: k,
                    onBlur: () => g(m),
                    onChange: e => {
                        var t, n;
                        return t = e, n = m, void f(t.target.value, n)
                    },
                    onKeyDown: e => {
                        var t, n;
                        return t = e, n = m, void(("Enter" === t.key || "Escape" === t.key) && (t.stopPropagation(), g(n)))
                    },
                    value: u ? "" : t,
                    placeholder: u,
                    preventCaptureArrowShortcuts: !0,
                    style: d
                })
            }

            function f(e, t) {
                let o = n(68119).A.state;
                if (!o.open) return;
                let {
                    editingToken: i,
                    savedTextSelectionState: l
                } = o;
                if (!i) return;
                if (!e) return void n(68119).A.setState({ ...o,
                    title: ""
                });
                let {
                    environment: r,
                    setPlaceholder: s,
                    hasTitleChanged: a
                } = t, u = l.multiSelection.start.store.pointer.spaceId;
                (0, n(377796).createAndCommit)({
                    userAction: "LinkMenu.updateTitle",
                    environment: r,
                    cellTarget: u ? {
                        spaceWithId: u
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        let u = n(280546).ar({
                            environment: r,
                            title: e,
                            transaction: t,
                            editingToken: i,
                            savedTextSelectionState: l
                        });
                        u && n(68119).A.setState({ ...o,
                            ...u,
                            title: e
                        }), s(void 0), a.current = !0
                    }
                })
            }

            function k() {
                (0, n(785596).zE)(!0)
            }

            function g(e) {
                (function(e) {
                    let t = n(68119).A.state;
                    if (!t.open) return;
                    let {
                        defaultTitle: o,
                        setPlaceholder: i
                    } = e;
                    t.title || (f(o, e), i(o))
                })(e), (0, n(785596).zE)(!1)
            }
            n(898992), n(581454), n(737550);
            let m = o.forwardRef(function(e, t) {
                let l, {
                        state: r,
                        onClose: s,
                        onUnlink: a
                    } = e,
                    u = (0, n(533992).WS)(),
                    [c, d] = (0, o.useState)(!0);
                (0, o.useEffect)(() => d(!1), []);
                let p = (0, o.useRef)(null);
                (0, o.useEffect)(() => (p.current = document.createElement("input"), p.current.style.position = "fixed", p.current.style.top = "-9999px", p.current.style.left = "-9999px", document.body.appendChild(p.current), () => {
                    p.current && document.body.removeChild(p.current)
                }), []);
                let f = u && r.focusLinkInput && ("text" !== r.type || !r.focusTitleInput);
                (0, o.useEffect)(() => {
                    f && n(374176).default.afterNextFlush(() => {
                        p.current && p.current.focus()
                    })
                }, [f]);
                let k = (0, o.useCallback)(() => {
                    n(374176).default.afterNextFlush(() => {
                        p.current && document.activeElement === p.current && p.current.blur()
                    })
                }, []);
                return (0, n(805469).A)({
                    shouldPreserveTextSelection: f,
                    shouldPreserveBlockSelection: !0,
                    shouldRestoreSelection: !0,
                    onClearSelection: k
                }), l = u ? {
                    menuType: n(649476).gu.Modal,
                    title: (0, i.jsx)(n(109939).sA, {
                        defaultMessage: "Link",
                        id: "selectionLinkButton.mobile.title"
                    }),
                    right: (0, i.jsx)(n(109939).sA, { ...n(789722).W.cancel
                    }),
                    onClickRight: s
                } : {
                    menuType: n(649476).gu.Popup
                }, (0, i.jsxs)(n(519451).A, {
                    debugName: "LinkMenu",
                    capture: r.open && (c || r.focusLinkInput || "text" === r.type && r.focusTitleInput),
                    allowEsc: !0,
                    children: [(0, i.jsx)(n(747369).A, {
                        ref: t,
                        ...l,
                        children: (0, i.jsx)(x, {
                            state: r,
                            onUnlink: a,
                            onClose: s
                        })
                    }), (0, i.jsx)(n(369064).N, {
                        debugName: "LinkMenu",
                        capture: !0,
                        onCommandSlash: n(785596).Nd
                    })]
                })
            });

            function x(e) {
                let {
                    state: t,
                    onUnlink: l,
                    onClose: r
                } = e, {
                    initialFocus: s,
                    sections: a,
                    comboboxProps: c
                } = function(e) {
                    let t, l, {
                            state: r,
                            onUnlink: s,
                            onClose: a
                        } = e,
                        [c, d] = (0, n(739271).s)(),
                        f = (0, o.useMemo)(() => (0, n(785596).V8)(r), [r]),
                        k = (0, o.useMemo)(() => (0, n(785596).KX)(f), [f]),
                        g = function(e) {
                            let {
                                state: t,
                                inputUrl: l,
                                query: r,
                                onClose: s
                            } = e, {
                                url: a
                            } = t, u = (0, n(533992).v3)(), c = (0, n(533992).WS)(), d = (0, n(682985).O$)(n(205885).e), p = !!a;
                            return (0, o.useMemo)(() => {
                                let e, o = !1;
                                if (!l && p) e = (0, i.jsx)(n(109939).sA, {
                                    defaultMessage: "Type a complete URL to link",
                                    id: "selectionLinkButton.invalidUrl"
                                }), o = !0;
                                else {
                                    if (!l || "notion" === l.type && d) return;
                                    "web" === l.type ? e = (0, i.jsx)(n(109939).sA, {
                                        id: "selectionLinkButton.linkToWebPage",
                                        defaultMessage: "Link to web page"
                                    }) : "notion" === l.type ? e = (0, i.jsx)(n(109939).sA, {
                                        id: "selectionLinkButton.linkToPage",
                                        defaultMessage: "Link to page"
                                    }) : "other" === l.type ? e = (0, i.jsx)(n(109939).sA, {
                                        id: "selectionLinkButton.linkToURL",
                                        defaultMessage: "Link to URL"
                                    }) : (0, n(722371).HB)(l.type)
                                }
                                return {
                                    key: "link to url",
                                    action: () => (0, n(871552).Ts)({
                                        environment: u,
                                        state: t,
                                        unsanitizedUrl: r,
                                        isPhone: c,
                                        onClose: s
                                    }),
                                    render: t => (0, i.jsx)(n(95582).A, { ...t,
                                        title: a,
                                        caption: e,
                                        icon: (0, i.jsx)(n(16275).I, {
                                            icon: n(515388).globeIcon
                                        }),
                                        disabled: o
                                    })
                                }
                            }, [t, r, u, c, d, l, p, a, s])
                        }({
                            state: r,
                            inputUrl: k,
                            query: f,
                            onClose: a
                        }),
                        m = function(e) {
                            let {
                                state: t,
                                inputUrl: l,
                                query: r,
                                additionalItem: s,
                                onClose: a
                            } = e, u = "text" === t.type ? t.editingToken : t.imageHyperlink, c = (0, n(785596).lR)(t), d = function(e) {
                                let {
                                    state: t,
                                    inputUrl: l,
                                    query: r,
                                    disableEmptyQueryResults: s,
                                    onClose: a
                                } = e, u = (0, n(533992).v3)(), c = (0, n(533992).WS)(), [{
                                    online: d
                                }] = (0, n(682985).$y)(n(205885).A), p = (0, o.useMemo)(() => {
                                    var e;
                                    let o = "text" === t.type ? null == (e = (0, n(778758).H)(t.savedTextSelectionState.multiSelection)) ? void 0 : e.store : t.store;
                                    if (o && o instanceof n(970831).B) return o
                                }, [t]), f = (0, n(815048).fJ)(n(308825).T.searchActions), [{
                                    value: k,
                                    status: g
                                }] = (0, n(97668).Yb)(async () => {
                                    if (!d || "resolved" !== f.status) return [];
                                    if (!r) return s ? [] : n(601860).NK.state.map(e => e.pageId);
                                    let e = f.value;
                                    return (await e.searchMentionablePages({
                                        nearBlock: p,
                                        environment: u,
                                        query: r,
                                        source: "mention_menu",
                                        limit: 10
                                    })).map(e => e.id)
                                }, [r, p, u, d, s, f.status, f.value]), m = (0, n(934877).A)({
                                    visibility: "resolved" === g,
                                    delayShow: 300,
                                    delayHold: 300
                                }), x = (0, o.useMemo)(() => {
                                    if (l && "notion" === l.type) {
                                        let e = "page" === l.notionPage.name ? l.notionPage.blockId : l.notionPage.peekViewBlockId;
                                        return [l, ...k ? n(381453).FF(k, e) : []]
                                    }
                                    return k
                                }, [k, l]);
                                return (0, o.useMemo)(() => {
                                    if (!x || 0 === x.length || l && "web" === l.type && l.url === r) return;
                                    let e = n(363256).e.withListenerIgnored(n(385941).Z);
                                    if (!e) return;
                                    let o = t.url ? 5 : 3,
                                        s = (0, i.jsx)(n(109939).sA, {
                                            id: "selectionLinkButton.linkToPage.linkToBlock",
                                            defaultMessage: "Link to block"
                                        }),
                                        d = (0, i.jsx)(n(109939).sA, {
                                            defaultMessage: "Link to page",
                                            id: "selectionLinkButton.linkToPageSection.title"
                                        });
                                    return {
                                        items: (0, n(381453).oE)(x.map((o, l) => {
                                            let {
                                                pageId: r,
                                                peekViewBlockId: d,
                                                scrollToBlockId: p,
                                                discussionId: f,
                                                collectionViewId: k
                                            } = "object" == typeof o ? {
                                                pageId: "page" === o.notionPage.name ? o.notionPage.blockId : o.notionPage.peekViewBlockId,
                                                ..."page" === o.notionPage.name ? {
                                                    scrollToBlockId: o.notionPage.scrollToBlockId,
                                                    peekViewBlockId: o.notionPage.peekViewBlockId,
                                                    discussionId: o.notionPage.discussionId,
                                                    collectionViewId: o.notionPage.collectionViewId
                                                } : {
                                                    scrollToBlockId: void 0,
                                                    peekViewBlockId: void 0,
                                                    discussionId: void 0,
                                                    collectionViewId: void 0
                                                }
                                            } : {
                                                pageId: o,
                                                peekViewBlockId: void 0,
                                                scrollToBlockId: void 0,
                                                discussionId: void 0,
                                                collectionViewId: void 0
                                            };
                                            if (!r) return;
                                            let g = n(970831).B.createChildStore(e, {
                                                table: n(832375).evP,
                                                id: r
                                            });
                                            return {
                                                key: l,
                                                action: () => {
                                                    if ("object" == typeof o) {
                                                        let e = (0, n(430733).wv)({
                                                            pageId: r,
                                                            peekViewBlockId: d,
                                                            peekMode: o.notionPage.peekMode,
                                                            discussionId: f,
                                                            collectionViewId: k,
                                                            scrollToBlockId: p
                                                        });
                                                        (0, n(871552).Ts)({
                                                            environment: u,
                                                            state: t,
                                                            unsanitizedUrl: e,
                                                            isPhone: c,
                                                            blockStore: g,
                                                            onClose: a
                                                        })
                                                    } else(0, n(871552).Ts)({
                                                        environment: u,
                                                        state: t,
                                                        unsanitizedUrl: (0, n(430733).wv)({
                                                            pageId: r
                                                        }),
                                                        isPhone: c,
                                                        blockStore: g,
                                                        onClose: a
                                                    })
                                                },
                                                render: e => {
                                                    let t = "object" == typeof o && p;
                                                    return (0, i.jsx)(n(103558).A, { ...e,
                                                        store: g,
                                                        caption: t ? s : void 0,
                                                        placeholder: m ? (0, i.jsx)(n(109939).sA, {
                                                            id: "selectionLinkButton.linkToPage.unknownBlock",
                                                            defaultMessage: "Unknown block"
                                                        }) : (0, i.jsx)(n(109939).sA, {
                                                            id: "selectionLinkButton.linkToPage.loading",
                                                            defaultMessage: "Loading…"
                                                        })
                                                    })
                                                }
                                            }
                                        })).slice(0, o),
                                        title: x.some(e => !!("object" == typeof e && "page" === e.notionPage.name && e.notionPage.scrollToBlockId)) ? s : d
                                    }
                                }, [x, t, u, c, r, l, m, a])
                            }({
                                state: t,
                                inputUrl: l,
                                query: r,
                                disableEmptyQueryResults: c,
                                onClose: a
                            });
                            return (0, o.useMemo)(() => {
                                if (d || s) return {
                                    key: "results",
                                    items: n(381453).oE([...(null == d ? void 0 : d.items) || [], s]),
                                    render: e => (0, i.jsx)(n(844565).A, { ...e,
                                        title: u || r ? void 0 : (0, i.jsx)(n(109939).sA, {
                                            id: "selectionLinkButton.recents.title",
                                            defaultMessage: "Recents"
                                        })
                                    })
                                }
                            }, [d, s, u, r])
                        }({
                            state: r,
                            inputUrl: k,
                            query: f,
                            additionalItem: g,
                            onClose: a
                        }),
                        x = (0, n(785596).Hx)(r),
                        y = x && (0, n(430733).lX)({
                            url: x,
                            baseUrl: n(986939).A.domainBaseUrl,
                            publicDomainName: n(986939).A.publicDomainName
                        }),
                        v = (0, n(682985).K8)(() => {
                            if (!y) return;
                            let e = (0, n(385941).Z)();
                            if (e) return n(970831).B.createChildStore(e, {
                                table: n(832375).evP,
                                id: y
                            })
                        }, [y]),
                        b = function(e) {
                            let {
                                state: t,
                                url: l,
                                isEmptyResults: r,
                                pageStore: s,
                                inputComboboxProps: a
                            } = e;
                            return (0, o.useMemo)(() => {
                                let e, o = (0, i.jsx)(n(109939).sA, {
                                        defaultMessage: "Page or URL",
                                        id: "selectionLinkButton.currentInfo.pageOrUrl"
                                    }),
                                    c = !t.focusLinkInput && r;
                                return s ? e = {
                                    key: "link to page",
                                    action: () => {},
                                    render: () => (0, i.jsx)(u, {
                                        state: t,
                                        showPreview: c,
                                        store: s,
                                        inputComboboxProps: a
                                    })
                                } : l ? e = {
                                    key: "link to web",
                                    action: () => {},
                                    render: () => (0, i.jsx)(u, {
                                        state: t,
                                        showPreview: !0,
                                        inputComboboxProps: a
                                    })
                                } : (o = void 0, e = {
                                    key: "create link",
                                    action: () => {},
                                    render: () => (0, i.jsx)(u, {
                                        state: t,
                                        showPreview: c,
                                        inputComboboxProps: a
                                    })
                                }), {
                                    key: "page or url",
                                    render: e => (0, i.jsx)(n(844565).A, {
                                        title: o,
                                        ...e
                                    }),
                                    items: [e]
                                }
                            }, [t, l, r, s, a])
                        }({
                            state: r,
                            url: x,
                            isEmptyResults: !m,
                            pageStore: v,
                            inputComboboxProps: c
                        }),
                        h = function(e) {
                            let {
                                state: t,
                                url: l,
                                pageStore: r
                            } = e, s = (0, n(682985).K8)(() => r ? n(247438).q4_(r.getTitleValue()) : void 0, [r]);
                            return (0, o.useMemo)(() => {
                                if ("text" !== t.type) return;
                                let {
                                    editingToken: e,
                                    title: o,
                                    focusTitleInput: r
                                } = t;
                                if (e) return {
                                    key: "link title",
                                    render: e => (0, i.jsx)(n(844565).A, {
                                        title: (0, i.jsx)(n(109939).sA, {
                                            defaultMessage: "Link title",
                                            id: "selectionLinkButton.currentInfo.linkTitle"
                                        }),
                                        ...e
                                    }),
                                    items: [{
                                        key: "update title",
                                        action: () => {},
                                        render: () => (0, i.jsx)(p, {
                                            title: o,
                                            defaultTitle: s ? ? l,
                                            focus: r
                                        })
                                    }]
                                }
                            }, [t, l, s])
                        }({
                            state: r,
                            url: x,
                            pageStore: v
                        }),
                        I = function(e) {
                            let {
                                state: t,
                                onUnlink: l,
                                onClose: r
                            } = e, s = function(e) {
                                let {
                                    state: t,
                                    onUnlink: l,
                                    onClose: r
                                } = e, s = (0, n(533992).v3)();
                                return (0, o.useMemo)(() => {
                                    if ((0, n(785596).lR)(t)) return {
                                        key: "unlink",
                                        action: () => {
                                            l(s), r();
                                            let e = (0, n(785596).Hx)(t);
                                            switch (t.type) {
                                                case "text":
                                                    n(691968).Mi({
                                                        type: "remove_link",
                                                        url: e
                                                    });
                                                    break;
                                                case "image":
                                                    let o = e ? (0, n(758654).bk)(e) : void 0;
                                                    (0, n(104310).u)({
                                                        event: {
                                                            eventName: "image_hyperlink_action",
                                                            eventProperties: {
                                                                action: "remove_link",
                                                                url_type: null != o && o.hostname ? "external" : "notion"
                                                            }
                                                        }
                                                    });
                                                    break;
                                                default:
                                                    (0, n(722371).HB)(t)
                                            }
                                        },
                                        render: e => (0, i.jsx)(n(95582).A, { ...e,
                                            title: (0, i.jsx)(n(109939).sA, {
                                                id: "selectionLinkButton.removeLink",
                                                defaultMessage: "Remove link"
                                            }),
                                            icon: (0, i.jsx)(n(16275).I, {
                                                icon: n(968411).trashIcon
                                            })
                                        })
                                    }
                                }, [l, r, t, s])
                            }({
                                state: t,
                                onUnlink: l,
                                onClose: r
                            });
                            return (0, o.useMemo)(() => {
                                let e = n(381453).oE([s]);
                                if (0 !== e.length) return {
                                    key: "link actions",
                                    render: e => (0, i.jsx)(n(844565).A, {
                                        topBorder: !0,
                                        ...e
                                    }),
                                    items: e
                                }
                            }, [s])
                        }({
                            state: r,
                            onUnlink: s,
                            onClose: a
                        });
                    return m ? (l = 1, t = n(381453).oE([b, m])) : (l = void 0, t = n(381453).oE([b, h, I])), {
                        initialFocus: l,
                        sections: t,
                        comboboxProps: d
                    }
                }({
                    state: t,
                    onUnlink: l,
                    onClose: r
                });
                return (0, i.jsx)(n(558045).A, {
                    type: n(558045).O.Vertical,
                    initialFocus: s,
                    sections: a,
                    comboboxProps: c
                })
            }
        },
        871552: (e, t, n) => {
            function o(e) {
                switch (e.type) {
                    case "text":
                        return n(280546).GC();
                    case "image":
                        return !e.open;
                    default:
                        (0, n(722371).HB)(e)
                }
            }

            function i(e) {
                switch (e.type) {
                    case "text":
                        return {
                            onClose: n(280546).d,
                            onUnlink: n(280546).sp
                        };
                    case "image":
                        return {
                            onClose: n(869782).J6,
                            onUnlink: n(869782).PA
                        };
                    default:
                        (0, n(722371).HB)(e)
                }
            }

            function l(e) {
                switch (e) {
                    case "text":
                        n(280546).d();
                        return;
                    case "image":
                        n(869782).J6();
                        return;
                    default:
                        (0, n(722371).HB)(e)
                }
            }

            function r(e) {
                let {
                    environment: t,
                    state: o,
                    unsanitizedUrl: i,
                    isPhone: l,
                    blockStore: r,
                    onClose: s
                } = e, a = (0, n(701631).l)(i);
                if (!a) return;
                let u = (0, n(785596).Hx)(o),
                    c = null == r ? void 0 : r.getSpaceId();
                if ((0, n(377796).createAndCommit)({
                        userAction: "LinkMenu.handleLinkSelection",
                        environment: t,
                        cellTarget: c ? {
                            spaceWithId: c
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            switch (o.type) {
                                case "text":
                                    let {
                                        editingToken: i,
                                        savedTextSelectionState: u,
                                        title: c
                                    } = o;
                                    (0, n(971541).k)(u.multiSelection) && (r ? n(41403).Gf({
                                        environment: t,
                                        editorMode: "default",
                                        store: u.multiSelection.start.store,
                                        selection: {
                                            startIndex: u.multiSelection.start.index,
                                            endIndex: u.multiSelection.end.index
                                        },
                                        annotation: n(247438).ld4(r.id, r.getSpaceId()),
                                        transaction: e,
                                        analyticsFrom: "block"
                                    }) : n(41403).yr({
                                        environment: t,
                                        store: u.multiSelection.start.store,
                                        tokens: [
                                            [a, [
                                                ["a", a]
                                            ]]
                                        ],
                                        index: u.multiSelection.start.index,
                                        transaction: e
                                    }));
                                    let d = n(280546).BK({
                                        environment: t,
                                        transaction: e,
                                        url: a,
                                        title: c,
                                        editingToken: i,
                                        savedTextSelectionState: u
                                    });
                                    d ? (n(691968).Mi({
                                        type: "edit_link",
                                        url: a
                                    }), n(68119).A.setState({ ...o,
                                        ...d,
                                        url: "",
                                        focusLinkInput: !1,
                                        focusTitleInput: !!l
                                    })) : (n(691968).Mi({
                                        type: "create_link",
                                        url: a
                                    }), s());
                                    break;
                                case "image":
                                    n(869782).Uc({
                                        url: a,
                                        transaction: e
                                    }), s()
                            }
                        }
                    }), "image" === o.type) {
                    var d;
                    let e = null != (d = (0, n(758654).bk)(a)) && d.hostname ? "external" : "notion";
                    (0, n(104310).u)({
                        event: {
                            eventName: "image_hyperlink_action",
                            eventProperties: {
                                action: u ? "edit_link" : "create_link",
                                url_type: e
                            }
                        }
                    })
                }
            }

            function s(e, t) {
                switch (e.type) {
                    case "text":
                        n(68119).A.setState({ ...e,
                            url: t.target.value,
                            focusLinkInput: !0
                        });
                        return;
                    case "image":
                        n(504835).A.setState({ ...e,
                            url: t.target.value,
                            focusLinkInput: !0
                        });
                        return;
                    default:
                        (0, n(722371).HB)(e)
                }
            }
            n.d(t, {
                GC: () => o,
                Ts: () => r,
                oV: () => l,
                uW: () => i,
                wv: () => s
            })
        }
    }
]);