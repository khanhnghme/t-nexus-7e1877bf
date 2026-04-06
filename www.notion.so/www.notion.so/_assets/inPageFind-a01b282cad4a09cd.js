"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [28958, 37342, 75215, 87196], {
        29557: (e, t, u) => {
            u.r(t), u.d(t, {
                InPageFind: () => d
            }), u(898992), u(672577), u(430670);
            var a = u(296540);

            function i() {
                u(847591).Ay.update(e => ({ ...e,
                    showReplaceInput: !e.showReplaceInput,
                    focused: e.showReplaceInput
                }))
            }

            function n(e) {
                let {
                    environment: t,
                    matches: a,
                    replace: i,
                    find: n,
                    intl: r,
                    editorViewEditorModeMap: D
                } = e, {
                    pageDetails: {
                        activePageDetails: o,
                        secondaryPageDetails: l
                    }
                } = e, s = i.length - n.length, d = a.filter(u(722371).O9).filter(e => (0, u(831719).M5)({
                    environment: t,
                    match: e,
                    pageStore: e.view === o.view ? o.store : null == l ? void 0 : l.store
                })), c = {
                    id: "",
                    columnId: void 0,
                    offset: 0
                };
                0 === d.length ? u(436555).D6({
                    label: r.formatMessage({
                        id: "inPageFind.replaceAll.noMatches",
                        defaultMessage: "No matches replaced"
                    })
                }) : (d.length > 1 && u(945949).V({
                    clearQuery: !1
                }), u(381453).iv(d, 200).forEach(e => {
                    let a = e[0],
                        o = a && "blockStore" in a ? a.blockStore.getSpaceId() : void 0;
                    (0, u(377796).createAndCommit)({
                        userAction: "findAndReplaceInstance",
                        environment: t,
                        canUndo: !0,
                        cellTarget: o ? {
                            spaceWithId: o
                        } : void 0,
                        perform: a => {
                            e.forEach(e => {
                                if (!e.allowReplace) return;
                                let {
                                    blockStore: r,
                                    selection: o
                                } = e, l = "block" === e.type, d = l ? e.propertyType : e.propertyId, p = r.getPropertyStore(d);
                                if (!p) return;
                                let f = e.blockStore.id,
                                    g = l ? void 0 : e.propertyId;
                                c.id !== f || c.columnId !== g ? (c.id = f, c.columnId = g, c.offset = 0) : c.offset += s;
                                let F = o.startIndex + c.offset,
                                    C = o.endIndex + c.offset,
                                    h = ("main" === e.view ? D.main : D.side_peek) ? ? "default",
                                    m = (0, u(485568).D)({
                                        startIndex: F,
                                        endIndex: C
                                    }, p, h).toArray().filter(u(247438).Ta1);
                                if ("suggest" === h) {
                                    let i = (0, u(714577).R)(t, a, e.blockStore);
                                    (0, u(133803).r)({
                                        environment: t,
                                        multiSelection: {
                                            start: {
                                                store: p,
                                                index: F
                                            },
                                            end: {
                                                store: p,
                                                index: C
                                            }
                                        },
                                        transaction: a,
                                        discussionStore: i
                                    }), c.offset += n.length
                                } else u(41403).jQ({
                                    environment: t,
                                    selection: {
                                        startIndex: F,
                                        endIndex: C
                                    },
                                    store: p,
                                    transaction: a
                                });
                                let y = m.length > 0 ? [i, m] : [i];
                                u(41403).yr({
                                    environment: t,
                                    index: "default" === h ? F : F + n.length,
                                    store: p,
                                    tokens: [y],
                                    transaction: a,
                                    editorMode: h
                                })
                            })
                        }
                    }), (0, u(562033).r)({
                        item: {
                            label: r.formatMessage({
                                id: "inPageFind.replaceAll.snackbarCopy",
                                defaultMessage: "{numMatches, plural, one {Replaced {numMatches} match} other {Replaced {numMatches} matches}}"
                            }, {
                                numMatches: e.length
                            })
                        },
                        undoFunc: () => {
                            (0, u(462446).t)({
                                environment: t,
                                preventSelectText: !0
                            }), u(847591).Ay.update(e => ({ ...e,
                                open: !0,
                                showReplaceInput: !0
                            }))
                        }
                    })
                }))
            }
            async function r(e) {
                var t;
                let {
                    match: a,
                    pagePropertiesStore: i,
                    pageStore: n,
                    environment: r
                } = e;
                if (!n) return;

                function o({
                    isPeek: e
                }) {
                    let t = e ? "peek" : "mainPage";
                    "popup" === u(82702).A.getPanelState(t).displayStyle && (0, u(127789).F)({
                        environment: r,
                        from: "search",
                        panelLocation: t,
                        layoutStore: void 0
                    })
                }
                let l = "main" !== a.view;
                switch (a.type) {
                    case "block":
                    case "simple_table_cell":
                        await u(807635).NH({
                            environment: r,
                            pageStore: n,
                            scrollToBlockIds: [a.blockStore.id]
                        }), o({
                            isPeek: l
                        });
                        break;
                    case "page_property_name":
                    case "page_property_value":
                        let s = n.getAssociatedCollectionStore(),
                            d = null == s || null == (t = s.getNormalizedPropertyGroups()) ? void 0 : t.find(({
                                propertyIds: e
                            }) => null == e ? void 0 : e.includes(a.propertyId));
                        if (a.visible || !i || i.state.forceShowProperties || i.update(e => ({ ...e,
                                forceShowProperties: !0
                            })), !(null == s ? void 0 : s.getLayoutStore())) break;
                        a.isMatchInLayoutPageDetails ? (0, u(127789).j)({
                            environment: r,
                            from: "search",
                            panelLocation: l ? "peek" : "mainPage",
                            layoutStore: void 0
                        }) : o({
                            isPeek: l
                        }), a.isPropertyInGroup && d && u(424007).A.setPropertyGroupExpandedOverride({
                            groupId: d.id,
                            override: "open"
                        });
                        break;
                    case "comment":
                        o({
                            isPeek: l
                        }), await u(807635).NH({
                            environment: r,
                            pageStore: n,
                            scrollToBlockIds: [a.blockStore.id]
                        });
                        let c = u(115995).A.find(e => e.getStore().id === a.discussionId),
                            p = null == c ? void 0 : c.getNode();
                        if (!p || !(p instanceof Element)) return;
                        let f = p.getBoundingClientRect();
                        await u(821243).B4({
                            analyticsFrom: "in_page_find",
                            blockStore: a.blockStore,
                            environment: r,
                            shouldFocusDiscussion: !1,
                            recursivelyLoadAllDiscussions: !1,
                            rect: f
                        }), await u(374176).default.afterNextFlush(() => {
                            let e = null == c ? void 0 : c.getMarginDiscussionScrollContainer();
                            if (e) {
                                let t = e.getNode();
                                t && (0, u(661767).V)({
                                    element: t,
                                    environment: r,
                                    options: {
                                        top: t.scrollHeight,
                                        behavior: "smooth"
                                    }
                                })
                            }
                        })
                }("page_property_name" === a.type || "page_property_value" === a.type) && a.isMatchInLayoutPageDetails || await D(a, r)
            }
            async function D(e, t) {
                await u(374176).default.afterNextFlush();
                let a = document.getElementsByClassName(u(728069).wT).item(0);
                if (!a) return;
                let i = "main" === e.view ? u(862921).A.PageScroller : u(862921).A.PeekViewScroller;
                i && (0, u(341471).h)({
                    element: a,
                    environment: t,
                    scrollerContext: {
                        verticalScroller: i,
                        horizontalScroller: void 0
                    },
                    vertical: {
                        reveal: "closest"
                    },
                    horizontal: void 0,
                    animate: !1
                })
            }

            function o(e, t) {
                var a;
                if ("page_property_name" !== t.type && "page_property_value" !== t.type) return;
                let i = t.propertyId,
                    n = e.getAssociatedCollectionStore(),
                    r = null == n || null == (a = n.getNormalizedPropertyGroups()) ? void 0 : a.find(({
                        propertyIds: e
                    }) => null == e ? void 0 : e.includes(i));
                return (0, u(120025).es)(null == r ? void 0 : r.id)
            }
            u(354520), u(803949), u(941795);
            let l = (0, u(109939).YK)({
                inputPlaceHolder: {
                    id: "inPageFind.find.inputPlaceholder",
                    defaultMessage: "Find, replace, ask…"
                },
                replaceInputPlaceHolder: {
                    id: "inPageFind.replace.inputPlaceHolder",
                    defaultMessage: "Replace with…"
                },
                close: {
                    id: "inPageFind.close",
                    defaultMessage: "Close"
                },
                previousMatch: {
                    id: "inPageFind.navigation.previousMatch",
                    defaultMessage: "Previous match"
                },
                nextMatch: {
                    id: "inPageFind.navigation.nextMatch",
                    defaultMessage: "Next match"
                },
                toggleReplace: {
                    id: "inPageFind.navigation.replaceToggle",
                    defaultMessage: "Replace"
                },
                replaceAll: {
                    id: "inPageFind.matches.replaceAll",
                    defaultMessage: "Replace all"
                },
                replace: {
                    id: "inPageFind.matches.individualReplace",
                    defaultMessage: "Replace"
                },
                noMatches: {
                    id: "inPageFind.noMatches",
                    defaultMessage: "Not found"
                },
                askAi: {
                    id: "inPageFind.askAi",
                    defaultMessage: "Ask AI"
                },
                ofSpacer: {
                    id: "inPageFind.ofSpacer",
                    defaultMessage: "of"
                },
                lockedPage: {
                    id: "inPageFind.lockedPage",
                    defaultMessage: "Page is locked"
                }
            });
            var s = u(474848);

            function d() {
                let {
                    activePageDetails: e,
                    secondaryPageDetails: t
                } = function() {
                    let {
                        mainPageDetails: e,
                        peekPageDetails: t
                    } = (0, u(682985).K8)(() => {
                        let e = u(728372).AppStoreMainEditorCurrentBlockStore.state,
                            t = u(475097).default.peekTargetStore.state;
                        return {
                            mainPageDetails: e ? {
                                store: e,
                                view: "main"
                            } : void 0,
                            peekPageDetails: t ? {
                                store: t,
                                view: u(475097).default.state.mode
                            } : void 0
                        }
                    }, [], {
                        equalityFn: u(381453).n4
                    }), a = (0, u(682985).K8)(() => {
                        var e;
                        return !!(null == (e = u(584265).default.getCurrentDefaultContainer()) ? void 0 : e.isPeekRenderer())
                    }, []);
                    return {
                        activePageDetails: a ? t : e,
                        secondaryPageDetails: a ? e : t
                    }
                }();
                return e ? (0, s.jsx)(p, {
                    activePageDetails: e,
                    secondaryPageDetails: t
                }) : null
            }
            let c = {
                container: {
                    boxShadow: u(632079).Tj.shadow.outline.lg,
                    position: "absolute",
                    top: 0,
                    insetInlineEnd: u(682115).d,
                    zIndex: 1e3,
                    backgroundColor: u(632079).Tj.background.elevated,
                    borderRadius: 12,
                    width: 280,
                    outline: `3px solid ${u(632079).Tj.blue.border.secondaryTranslucent}`
                },
                inputContainer: {
                    boxShadow: "none",
                    border: "none",
                    outline: "none",
                    flexGrow: 1
                },
                findInput: {
                    paddingTop: 10,
                    paddingBottom: 10
                },
                input: {
                    fontSize: 14
                }
            };

            function p(e) {
                let t, n, D, d, {
                        activePageDetails: p,
                        secondaryPageDetails: f
                    } = e,
                    [F, m] = (0, a.useState)(-1),
                    [v, S] = (0, a.useState)(""),
                    B = (0, a.useRef)(void 0),
                    w = (0, a.useRef)(null),
                    x = (0, a.useRef)(null),
                    I = (0, u(533992).v3)(),
                    b = (0, u(109939).tz)(),
                    {
                        focused: A,
                        findQuery: k,
                        showReplaceInput: T,
                        open: j,
                        textSelectionOnOpen: M
                    } = (0, u(682985).O$)(u(847591).Ay),
                    _ = (0, u(668745).ZC)(k),
                    P = (0, u(668745).ZC)(M),
                    R = (0, u(668745).ZC)(F),
                    U = k === _,
                    V = p.store.id,
                    z = (0, u(668745).ZC)(V),
                    N = (0, a.useRef)();
                (0, a.useEffect)(() => {
                    z === V || f || (u(945949).V({
                        clearQuery: !0
                    }), B.current = void 0)
                }, [V, z, f]), (0, u(251454).L)({
                    active: j,
                    closeHandler: () => {
                        u(945949).V({
                            clearQuery: !1
                        })
                    },
                    ref: w,
                    ignoreKeydown: !0,
                    excludedSelectors: [`.${u(828432).OO1}`, `.${u(828432).rgg}`]
                });
                let L = (0, u(682985).K8)(() => {
                        if (!j) return !1;
                        B.current = void 0;
                        let e = null == M ? void 0 : M.multiSelection,
                            t = !(0, u(524966).OH)(e, null == P ? void 0 : P.multiSelection),
                            a = !!e && (0, u(689461).K)(e) && e.start.index !== e.end.index;
                        return t && a
                    }, [j, null == P ? void 0 : P.multiSelection, null == M ? void 0 : M.multiSelection]),
                    $ = (0, u(682985).K8)(() => u(475097).default.state.open, []),
                    O = (0, a.useCallback)(async e => {
                        var t;
                        let a = null == (t = [p, f].find(t => (null == t ? void 0 : t.view) === (null == e ? void 0 : e.view))) ? void 0 : t.store;
                        if (!e || !a) return void u(847591).wb.setState(void 0);
                        let i = o(a, e),
                            n = "comment" === N.current && (!e || "comment" !== e.type),
                            D = i && i.state.forceShowProperties && ("page_property_name" === N.current || "page_property_value" === N.current) && (!e || "page_property_name" !== e.type && "page_property_value" !== e.type);
                        if (n ? u(821243).xl() : D && i.reset(), "block" === e.type) u(847591).wb.setState({
                            type: "block",
                            id: e.blockStore.id,
                            selection: e.selection
                        });
                        else if ("page_property_name" === e.type) {
                            let t = e.propertyId;
                            u(847591).wb.setState({
                                type: "page_property_name",
                                propertyId: t
                            })
                        } else "page_property_value" === e.type ? u(847591).wb.setState({
                            type: "page_property_value",
                            id: e.blockStore.id,
                            inlineCollectionId: e.inlineCollectionId,
                            inlineCollectionViewId: e.inlineCollectionViewId,
                            propertyId: e.propertyId,
                            selection: e.selection
                        }) : "comment" === e.type ? u(847591).wb.setState({
                            type: "comment",
                            id: e.commentId,
                            selection: e.selection
                        }) : "simple_table_cell" === e.type && u(847591).wb.setState({
                            type: "simple_table_cell",
                            id: e.blockStore.id,
                            propertyId: e.propertyId,
                            selection: e.selection
                        });
                        N.current = e.type, U && F === R || await r({
                            environment: I,
                            match: e,
                            pageStore: a,
                            pagePropertiesStore: i
                        })
                    }, [p, f, U, F, R, I]),
                    W = (0, u(682985).K8)(() => j && 0 !== k.length ? u(381453).oE([p, f]).flatMap(e => (0, u(831719).OM)({
                        pageDetails: e,
                        find: k,
                        intl: b
                    })) : [], [j, k, p, f, b]),
                    K = W.length;
                (0, a.useEffect)(() => {
                    L ? m(Math.max(W.findIndex(e => {
                        let t = null == M ? void 0 : M.multiSelection;
                        if ("block" !== e.type || !t || e.blockStore.id !== t.start.store.id) return !1;
                        let {
                            startIndex: u,
                            endIndex: a
                        } = e.selection;
                        return u === t.start.index && a === t.end.index
                    }), 0)) : F >= W.length && !U && m(0), O(W[F])
                }, [F, W, U, L, null == M ? void 0 : M.multiSelection, O]);
                let H = -1 !== F ? W[F] : void 0,
                    Q = function({
                        activePageDetails: e,
                        find: t
                    }) {
                        let i = (0, u(682985).K8)(() => u(886556).z.isInPageFindQnaOptionEnabledForUser(), []),
                            {
                                value: n
                            } = (0, u(815048).fJ)(u(310639).assistantDependency),
                            r = (0, u(533992).v3)(),
                            D = (0, a.useCallback)(async a => {
                                if (!n) return;
                                let i = await n.assistantActions.resetAndInitializeAssistantSession({
                                    environment: r,
                                    makeActiveSession: !0
                                });
                                if (!i) return;
                                let D = u(838448).default.getSessionContext(i.sessionId);
                                D && (D.assistantConfigurationStore.setSearchScope({
                                    pageId: e.store.id,
                                    type: "page"
                                }), u(945949).V({
                                    clearQuery: !1
                                }), n.assistantMenuStore.setState({
                                    open: !0,
                                    currentView: "chat",
                                    from: "find_and_replace",
                                    isAssistantInputEmpty: n.assistantMenuStore.state.isAssistantInputEmpty
                                }), a && a.length > 0 && await n.handleSubmitNewQuestion({
                                    currentClientSkillWithSettings: void 0,
                                    newValue: (0, u(247438).x9d)(t),
                                    environment: r,
                                    shouldForceStartNewSession: !1,
                                    source: "in_page_find",
                                    assistantSurfaceType: "corner"
                                }))
                            }, [n, r, e.store.id, t]);
                        return i ? D : void 0
                    }({
                        activePageDetails: p,
                        find: k
                    }),
                    G = (t = (0, u(533992).v3)(), n = (0, u(909212).i7)(), D = (0, u(682985).O$)(u(674880).defaultInferenceContextStore), d = (0, a.useCallback)(e => {
                        if (!D || !D.blockStore || !e || 0 === e.length) return;
                        u(945949).V({
                            clearQuery: !1
                        });
                        let a = (0, u(674880).Kf)({
                                environment: t,
                                spaceStore: D.spaceStore,
                                userStore: D.userStore,
                                value: (0, u(247438).x9d)(e)
                            }),
                            i = (0, u(674880).Xd)({
                                environment: t,
                                inferenceContext: D,
                                addSteps: [a],
                                surface: "find_and_replace",
                                config: {
                                    type: "workflow"
                                }
                            }),
                            n = (0, u(225900).N)({
                                environment: t,
                                spaceStore: D.spaceStore,
                                transcript: i
                            });
                        (0, u(358667).openChatPanel)({
                            environment: t,
                            store: D.blockStore,
                            chatPanelState: {
                                isOpen: !0,
                                threadId: n.id
                            }
                        })
                    }, [t, D]), (n ? d : void 0) ? ? Q),
                    Z = (0, u(84235).Y)(e => {
                        u(847591).Ay.update(t => ({ ...t,
                            findQuery: e
                        }))
                    }, 300),
                    X = (0, a.useCallback)(async e => {
                        var t, u;
                        let {
                            location: a
                        } = e;
                        if (0 === K) return;
                        if (1 === K) {
                            let e = null == (u = [p, f].find(e => (null == e ? void 0 : e.view) === W[0].view)) ? void 0 : u.store;
                            if (!e) return;
                            let t = o(e, W[0]);
                            await r({
                                environment: I,
                                match: W[0],
                                pagePropertiesStore: t,
                                pageStore: e
                            });
                            return
                        }
                        let i = F + ("next" === a ? 1 : -1),
                            n = i >= 0 && i < K ? i : "next" === a ? 0 : K - 1,
                            D = W[n];
                        m(n);
                        let l = null == (t = [p, f].find(e => (null == e ? void 0 : e.view) === D.view)) ? void 0 : t.store;
                        if (!l) return;
                        let s = o(l, D);
                        s && await r({
                            environment: I,
                            match: D,
                            pagePropertiesStore: s,
                            pageStore: l
                        })
                    }, [W, K, F, p, f, I]),
                    q = (0, u(682985).K8)(() => j ? {
                        main: u(708929).Uv.getMode(p.store),
                        side_peek: f ? u(708929).Uv.getMode(f.store) : void 0
                    } : {
                        main: void 0,
                        side_peek: void 0
                    }, [p, j, f]),
                    Y = (0, u(682985).K8)(() => p.store.isLocked() && (!f || f.store.isLocked()), [p.store, f]),
                    J = I.device.isElectron,
                    ee = (0, u(682985).K8)(() => (0, u(348295).$)(I).state ? 0 : (0, u(801113).ek)(I.device.isElectronMac), [I]),
                    et = (0, u(682985).K8)(() => (0, u(921001).z)(I, $), [I, $]),
                    eu = (0, a.useCallback)(() => {
                        let e = H && ("block" === H.type || "simple_table_cell" === H.type) && H.blockStore.getTitleStore(),
                            t = e ? H.blockStore.getTitleStore() : void 0,
                            a = e && t ? {
                                start: {
                                    store: t,
                                    index: H.selection.startIndex
                                },
                                end: {
                                    store: t,
                                    index: H.selection.endIndex
                                }
                            } : void 0;
                        u(945949).V({
                            clearQuery: !1,
                            overridePreviousTextSelection: a
                        })
                    }, [H]),
                    ea = (0, a.useCallback)(e => {
                        e.preventDefault && e.preventDefault();
                        let t = x.current;
                        t && (0, u(862215).G)(I, t)
                    }, [I, x]);
                return (0, s.jsxs)(u(654979).A, {
                    visible: j,
                    initial: {
                        opacity: 0,
                        translateY: 0,
                        translateX: -et
                    },
                    animate: {
                        opacity: 1,
                        translateY: ee + u(682115).d,
                        translateX: -et
                    },
                    config: {
                        duration: 150
                    },
                    exit: {
                        translateY: ee,
                        opacity: 0,
                        translateX: -et
                    },
                    style: c.container,
                    ref: w,
                    children: [(0, s.jsx)(u(4458).fI, {
                        alignItems: "center",
                        gap: 10,
                        paddingInline: 10,
                        children: (0, s.jsx)(u(519451).A, {
                            debugName: "FindAndReplace",
                            capture: !0,
                            allowSearch: !0,
                            allowOpenLinkMenu: !0,
                            children: (0, s.jsxs)(u(369064).N, {
                                debugName: "FindAndReplace",
                                capture: !0,
                                onShiftEnter: () => X({
                                    location: "previous"
                                }),
                                onUp: () => X({
                                    location: "previous"
                                }),
                                onDown: () => X({
                                    location: "next"
                                }),
                                onGroup: e => {
                                    e.preventDefault && e.preventDefault(), X({
                                        location: "next"
                                    })
                                },
                                onUngroup: e => {
                                    e.preventDefault && e.preventDefault(), X({
                                        location: "previous"
                                    })
                                },
                                onEsc: () => eu(),
                                onCommandJ: () => null == G ? void 0 : G(),
                                onCommandEnter: () => null == G ? void 0 : G(k),
                                onSearch: e => ea(e),
                                onToggleInPageFindReplace: () => {
                                    J && !Y && (0 !== k.length || T) && (!(k.length > 0) || 0 !== K || T) && i()
                                },
                                children: [(0, s.jsx)(u(36481).p, {
                                    value: B.current ? ? k,
                                    onChange: e => {
                                        let t = e.target.value;
                                        if (B.current = t.length > 0 ? t : void 0, Z.cancel(), B.current && B.current.length > 0) {
                                            Z(B.current), m(0);
                                            return
                                        }
                                        u(847591).Ay.update(e => ({ ...e,
                                            findQuery: ""
                                        })), u(847591).wb.setState(void 0)
                                    },
                                    format: "transparent",
                                    placeholder: b.formatMessage(l.inputPlaceHolder),
                                    selectAll: !0,
                                    focus: A,
                                    onFocus: () => void(!u(847591).Ay.state.focused && u(847591).Ay.update(e => ({ ...e,
                                        focused: !0
                                    }))),
                                    focusInitial: !0,
                                    onSubmit: () => X({
                                        location: "next"
                                    }),
                                    inputStyle: { ...c.input,
                                        ...c.findInput
                                    },
                                    style: c.inputContainer,
                                    ref: x
                                }, "find-input-element"), 0 === K ? (0, s.jsx)(C, {
                                    hasQuery: k.length > 0,
                                    isQnaEnabled: !!G,
                                    onClick: () => null == G ? void 0 : G(k),
                                    isShowingReplaceInput: T
                                }) : (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)(E, {
                                        currentSelectionIndex: F,
                                        numberOfMatches: K
                                    }), (0, s.jsx)(h, {
                                        jumpToBlockFn: X,
                                        numberOfMatches: K,
                                        isShowingReplaceInput: T,
                                        onReplaceIconClick: () => {
                                            Y || i()
                                        },
                                        hasFindQuery: k.length > 0,
                                        isPageLocked: Y
                                    })]
                                }), (0, s.jsx)(y, {
                                    onClick: () => u(945949).V({
                                        clearQuery: !1
                                    }),
                                    icon: u(25094).xMarkSmallIcon,
                                    shortcut: "esc",
                                    caption: l.close,
                                    active: !1
                                })]
                            })
                        })
                    }), (0, s.jsx)(g, {
                        currentSelectedMatchIndex: F,
                        findInput: k,
                        replaceInput: v,
                        setReplaceInput: S,
                        highlightMatches: W,
                        shouldShow: T,
                        editorViewEditorModeMap: q,
                        pageDetails: {
                            activePageDetails: p,
                            secondaryPageDetails: f
                        }
                    })]
                })
            }
            let f = {
                divider: {
                    height: 1,
                    backgroundColor: u(632079).Tj.background.tertiaryTranslucent
                },
                replaceButton: {
                    fontSize: 13,
                    display: "flex",
                    borderRadius: 8,
                    height: "initial",
                    paddingTop: 7,
                    paddingBottom: 7
                },
                replaceAll: {
                    fontWeight: u(699422).Wy.regular,
                    color: u(632079).Tj.text.secondary
                },
                replaceInputContainer: {
                    display: "flex",
                    padding: 10,
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 3
                },
                inputContainer: {
                    boxShadow: "none",
                    border: "none",
                    outline: "none",
                    flexGrow: 1
                },
                input: {
                    fontSize: 14
                },
                style0: {
                    overflowY: "hidden"
                }
            };

            function g(e) {
                let {
                    findInput: t,
                    replaceInput: a,
                    setReplaceInput: i,
                    highlightMatches: r,
                    currentSelectedMatchIndex: D,
                    shouldShow: o,
                    editorViewEditorModeMap: d,
                    pageDetails: {
                        activePageDetails: c,
                        secondaryPageDetails: p
                    }
                } = e, g = (0, u(109939).tz)(), F = (0, u(533992).v3)(), C = t === a, h = -1 !== D ? r[D] : void 0, m = (0, u(682985).K8)(() => {
                    if (0 === t.length || C || !h) return !1;
                    let e = h.view === c.view ? c.store : (null == p ? void 0 : p.store) ? ? void 0;
                    return (0, u(831719).M5)({
                        environment: F,
                        match: h,
                        pageStore: e
                    })
                }, [c.store, c.view, h, F, t.length, C, p]), {
                    value: y
                } = (0, u(815048).fJ)(u(448988).fM);
                if (!y) return null;
                let {
                    AnimatePresence: v,
                    motion: E
                } = y;
                return (0, s.jsx)(v, {
                    children: o ? (0, s.jsxs)(E.div, {
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: "auto"
                        },
                        exit: {
                            height: 0
                        },
                        style: f.style0,
                        transition: {
                            duration: .1
                        },
                        children: [(0, s.jsx)("div", {
                            style: f.divider
                        }), (0, s.jsxs)("div", {
                            style: f.replaceInputContainer,
                            children: [(0, s.jsx)(u(36481).p, {
                                value: a,
                                onChange: e => {
                                    i(e.target.value)
                                },
                                format: "transparent",
                                placeholder: g.formatMessage(l.replaceInputPlaceHolder),
                                inputStyle: f.input,
                                style: f.inputContainer,
                                focusInitial: !0,
                                onSubmit: () => {
                                    m && h && n({
                                        matches: [h],
                                        environment: F,
                                        replace: a,
                                        find: t,
                                        intl: g,
                                        editorViewEditorModeMap: d,
                                        pageDetails: e.pageDetails
                                    })
                                }
                            }, "replace-input-element"), (0, s.jsxs)(u(4458).fI, {
                                gap: 4,
                                children: [(0, s.jsx)(u(406910).p, {
                                    onClick: () => n({
                                        matches: r,
                                        environment: F,
                                        replace: a,
                                        find: t,
                                        intl: g,
                                        editorViewEditorModeMap: d,
                                        pageDetails: e.pageDetails
                                    }),
                                    style: { ...f.replaceButton,
                                        ...f.replaceAll
                                    },
                                    disabled: 0 === t.length || C,
                                    ...0 === t.length || C ? {
                                        colorVariant: "tertiary"
                                    } : {},
                                    children: g.formatMessage(l.replaceAll)
                                }), (0, s.jsx)(u(912946).A, {
                                    colorPalette: "blue",
                                    onClick: () => {
                                        h && n({
                                            matches: [h],
                                            environment: F,
                                            replace: a,
                                            find: t,
                                            intl: g,
                                            editorViewEditorModeMap: d,
                                            pageDetails: e.pageDetails
                                        })
                                    },
                                    style: { ...f.replaceButton,
                                        cursor: m ? "pointer" : "not-allowed"
                                    },
                                    disabled: !m,
                                    children: (0, s.jsxs)(u(4458).fI, {
                                        gap: 4,
                                        alignItems: "center",
                                        children: [g.formatMessage(l.replace), (0, s.jsx)(u(16275).I, {
                                            icon: u(750748).arrowTurnDownLeftSmallIcon,
                                            size: "sm"
                                        })]
                                    })
                                })]
                            })]
                        })]
                    }) : void 0
                })
            }
            let F = {
                container: {
                    fontSize: 13,
                    display: "flex",
                    borderRadius: 8,
                    height: "initial",
                    paddingTop: 7,
                    paddingBottom: 7
                },
                notFound: {
                    whiteSpace: "nowrap",
                    fontSize: 12,
                    color: u(632079).Tj.text.tertiary
                }
            };

            function C(e) {
                let {
                    hasQuery: t,
                    isQnaEnabled: a,
                    onClick: i,
                    isShowingReplaceInput: n
                } = e, r = (0, u(109939).tz)();
                return t ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("span", {
                        style: F.notFound,
                        children: r.formatMessage(l.noMatches)
                    }), a && !n ? (0, s.jsx)(u(51831).m, {
                        placement: "bottom",
                        originGap: 18,
                        content: () => (0, s.jsx)(u(693592).A, {
                            name: "commandEnter"
                        }),
                        allowHover: !1,
                        children: e => (0, s.jsx)(u(912946).A, {
                            colorPalette: "blue",
                            style: F.container,
                            ...e,
                            onClick: i,
                            children: r.formatMessage(l.askAi)
                        })
                    }) : null]
                }) : null
            }

            function h(e) {
                let {
                    jumpToBlockFn: t,
                    isShowingReplaceInput: a,
                    onReplaceIconClick: i,
                    isPageLocked: n
                } = e, r = (0, u(533992).Y0)().isElectron;
                return (0, s.jsxs)(u(4458).fI, {
                    alignItems: "center",
                    gap: 2,
                    children: [(0, s.jsx)(y, {
                        active: !1,
                        caption: l.previousMatch,
                        icon: u(464913).arrowStraightUpSmallIcon,
                        onClick: () => t({
                            location: "previous"
                        }),
                        shortcut: "shiftEnter"
                    }), (0, s.jsx)(y, {
                        active: !1,
                        caption: l.nextMatch,
                        icon: u(242912).arrowStraightDownSmallIcon,
                        onClick: () => t({
                            location: "next"
                        }),
                        shortcut: "enter"
                    }), (0, s.jsx)(y, {
                        active: a,
                        icon: u(63974).o,
                        onClick: i,
                        caption: n ? l.lockedPage : l.toggleReplace,
                        shortcut: r ? "toggleInPageFindReplace" : void 0,
                        disable: n
                    })]
                })
            }
            let m = {
                description: {
                    color: u(632079).Tj.text.inverseSecondary
                },
                active: {}
            };

            function y(e) {
                let {
                    onClick: t,
                    caption: a,
                    icon: i,
                    active: n,
                    shortcut: r,
                    disable: D
                } = e, o = (0, u(109939).tz)(), l = (0, u(960253).I)(() => ({
                    icon: {
                        width: u(104509).Ev.sm,
                        height: u(104509).Ev.sm,
                        color: n ? u(632079).Tj.blue.icon.accentPrimary : u(632079).Tj.icon.secondary
                    },
                    iconWrapper: {
                        padding: 3,
                        width: void 0,
                        height: void 0,
                        cursor: D ? "not-allowed" : "pointer"
                    },
                    hoveredBackground: {
                        background: u(632079).Tj[n ? "blue" : "gray"].background.secondaryTranslucent
                    }
                }), [n, D]);
                return (0, s.jsx)(u(51831).m, {
                    placement: "bottom",
                    originGap: 18,
                    content: e => (0, s.jsxs)("div", { ...e,
                        children: [(0, s.jsx)("div", {
                            children: o.formatMessage(a)
                        }), !D && r ? (0, s.jsx)("div", {
                            style: m.description,
                            children: (0, s.jsx)(u(693592).A, {
                                name: r
                            })
                        }) : null]
                    }),
                    allowHover: !1,
                    children: e => (0, s.jsx)(u(374533).A, { ...e,
                        icon: e => i({ ...l.icon,
                            ...m.active
                        }),
                        ariaLabel: o.formatMessage(a),
                        hoveredStyle: l.hoveredBackground,
                        onClick: () => t(),
                        style: l.iconWrapper,
                        disabled: D
                    })
                })
            }
            let v = {
                container: {
                    fontSize: ".8rem",
                    color: u(632079).Tj.text.tertiary,
                    userSelect: "none",
                    cursor: "default"
                }
            };

            function E(e) {
                let {
                    numberOfMatches: t,
                    currentSelectionIndex: a
                } = e, i = (0, u(109939).tz)();
                return 0 === t ? null : (0, s.jsx)("div", {
                    style: v.container,
                    children: (0, s.jsxs)(u(4458).fI, {
                        gap: 4,
                        alignItems: "center",
                        children: [(0, s.jsx)("span", {
                            children: a + 1
                        }), i.formatMessage(l.ofSpacer), (0, s.jsx)("span", {
                            children: t
                        })]
                    })
                })
            }
        },
        43371: e => {
            e.exports = function() {
                return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFE])|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC3B\u200D\u2744|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDF])\u200D[\u2640\u2642])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g
            }
        },
        57168: (e, t, u) => {
            u.r(t), u.d(t, {
                ClientAIChatStore: () => l,
                UserChatPreferenceLocalStorageStore: () => D,
                defaultClientAIChatStore: () => s,
                defaultLegacyThreadConfig: () => o
            });
            var a = () => u(546605);
            u(898992), u(354520), u(430670), u(803949);
            let i = "confirmed_safe_by_user",
                n = {
                    acceptedInferenceKeys: [],
                    inferenceKeysToAnnotations: {},
                    inferenceKeysToMemories: {},
                    tags: [],
                    abortController: void 0,
                    stopInferencePromise: void 0,
                    temporarySteps: [],
                    inferences: [],
                    traceId: void 0,
                    draftTraceId: void 0,
                    wasForceStoppedByUser: !1,
                    requestInfo: void 0,
                    loading: !1,
                    currentUserInitiatedRunningInference: !1,
                    stagedData: {},
                    agentSearchResultsByToolResultStepId: {},
                    pendingStop: !1
                };
            class r extends a().Store {
                getInitialState() {
                    return n
                }
                resetState() {
                    var e;
                    null == (e = this.state.abortController) || e.abort(), this.setState(n)
                }
                getOrCreateTraceId() {
                    let e = this.state.traceId ? ? (0, u(4962).Ay)();
                    return this.state.traceId || this.setState({ ...this.state,
                        traceId: e
                    }), e
                }
                clearTraceId() {
                    this.setState({ ...this.state,
                        traceId: void 0
                    })
                }
                getOrCreateDraftTraceId() {
                    let e = this.state.draftTraceId ? ? (0, u(4962).Ay)();
                    return this.state.draftTraceId || this.setState({ ...this.state,
                        draftTraceId: e
                    }), e
                }
                setAgentSearchResultsForTool(e) {
                    let {
                        agentStepId: t,
                        toolCallId: u,
                        toolResultStepId: a,
                        results: i
                    } = e;
                    this.setState({ ...this.state,
                        agentSearchResultsByToolResultStepId: { ...this.state.agentSearchResultsByToolResultStepId,
                            [a]: {
                                agentStepId: t,
                                toolCallId: u,
                                results: i
                            }
                        }
                    })
                }
                getTemporaryAttachmentStagedDataOrInstantiate() {
                    let e = this.state.stagedData;
                    if (null != e && e.attachmentStagedData) return e.attachmentStagedData;
                    let t = {
                        stagedAttachmentUploadStore: new(u(729849)).Gi,
                        stagedClientSteps: [],
                        stagedEngineSteps: [],
                        stagedInferenceTranscriptSteps: []
                    };
                    return this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: t
                        }
                    }), t
                }
                getStagedAttachmentUploadStoreIfExists() {
                    var e;
                    let t = this.state.stagedData;
                    return null == t || null == (e = t.attachmentStagedData) ? void 0 : e.stagedAttachmentUploadStore
                }
                stageAttachmentInferenceTranscriptStep(e) {
                    let {
                        step: t
                    } = e, u = this.getTemporaryAttachmentStagedDataOrInstantiate(), a = { ...u,
                        stagedInferenceTranscriptSteps: [...u.stagedInferenceTranscriptSteps, t]
                    };
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: a
                        }
                    })
                }
                unstageAttachmentInferenceTranscriptStep(e) {
                    var t;
                    let {
                        fileId: u
                    } = e, a = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!a) return;
                    let i = a.stagedInferenceTranscriptSteps.filter(e => "attachment" !== e.type && "computer-file" !== e.type || e.fileUrl !== u);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...a,
                                stagedInferenceTranscriptSteps: i
                            }
                        }
                    })
                }
                clearStagedComputerFileSteps() {
                    var e;
                    let t = null == (e = this.state.stagedData) ? void 0 : e.attachmentStagedData;
                    if (!t) return;
                    let u = t.stagedInferenceTranscriptSteps.flatMap(e => "computer-file" === e.type ? [e.fileUrl] : []);
                    if (0 === u.length) return;
                    let a = t.stagedAttachmentUploadStore;
                    u.forEach(e => {
                        a.onDeleteFileUpload(e)
                    });
                    let i = t.stagedInferenceTranscriptSteps.filter(e => "computer-file" !== e.type);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...t,
                                stagedInferenceTranscriptSteps: i
                            }
                        }
                    })
                }
                markStagedAttachmentInferenceTranscriptStepAsSafe(e) {
                    var t, u;
                    let {
                        fileUrl: a
                    } = e, n = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!n) return;
                    let r = n.stagedInferenceTranscriptSteps.findIndex(e => "attachment" === e.type && e.fileUrl === a);
                    if (r < 0) return;
                    let D = n.stagedInferenceTranscriptSteps[r];
                    if ("attachment" !== D.type) return;
                    let o = null != (u = D.metadata) && u.guardrail ? { ...D.metadata.guardrail,
                            attachmentRisk: i
                        } : {
                            attachmentRisk: i
                        },
                        l = { ...D,
                            metadata: { ...D.metadata ? ? {},
                                guardrail : o
                            }
                        },
                        s = [...n.stagedInferenceTranscriptSteps];
                    s[r] = l, this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...n,
                                stagedInferenceTranscriptSteps: s
                            }
                        }
                    })
                }
                getAndClearStagedAssistantAttachmentSteps() {
                    var e;
                    let t = null == (e = this.state.stagedData) ? void 0 : e.attachmentStagedData;
                    if (!t) return;
                    let {
                        stagedInferenceTranscriptSteps: u
                    } = t;
                    return this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: void 0
                        }
                    }), u
                }
                getStagedMentionPointers() {
                    let {
                        mentionStagedData: e
                    } = this.state.stagedData;
                    return e ? [...e] : []
                }
                updateMentionedStagedData(e) {
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            mentionStagedData: new(u(227318)).d(e)
                        }
                    })
                }
            }
            let D = new(u(245541)).R({
                    key: "spacedScopedUserChatPreference",
                    namespace: u(274919).Bq,
                    important: !0,
                    trackingType: "preference"
                }),
                o = {
                    type: "search",
                    scopeForNextSearch: {
                        type: "everything"
                    }
                };
            class l extends a().Store {
                getInitialState() {
                    return {
                        showHistory: !1,
                        showDebug: !1,
                        loading: !1,
                        configForNewTranscripts: o,
                        userSelectedConfig: void 0,
                        model: void 0,
                        debugOverrides: {
                            usePromptCache: u(363256).e.withListenerIgnored(() => u(218744).default.checkGate({
                                gateName: "workflows_inference_replay"
                            })) ? "s3" : void 0,
                            emitAgentSearchExtractedResults: !0
                        },
                        threadRegistry: {},
                        isAIChatTranscriptSidePanelVisible: !1,
                        threadToStagedData: {},
                        primeInput: void 0
                    }
                }
                getOrCreateClientAIChatThreadStore(e) {
                    if (!this.state.threadRegistry[e]) {
                        let t = new r;
                        return this.setState({ ...this.state,
                            threadRegistry: { ...this.state.threadRegistry,
                                [e]: t
                            }
                        }), t
                    }
                    return this.state.threadRegistry[e]
                }
                getExistingClientAIChatThreadStore(e) {
                    return this.state.threadRegistry[e]
                }
                removeClientAIChatThreadStore(e) {
                    let {
                        threadRegistry: t
                    } = this.state, u = { ...t
                    };
                    delete u[e], this.setState({ ...this.state,
                        threadRegistry: u
                    })
                }
            }
            let s = new l;
            (0, u(202146).exposeDebugValue)("clientAiChatStore", s)
        },
        63974: (e, t, u) => {
            u.d(t, {
                o: () => i
            }), u(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.77 1.79 12.45 12.42",
                    svg: (0, u(474848).jsx)("path", {
                        d: "M8.708 1.978a.625.625 0 0 0-.884.884l.914.913H3.84c-1.14 0-2.065.925-2.065 2.065v4.78a.625.625 0 0 0 1.25 0V5.84c0-.45.365-.815.815-.815h4.898l-.914.913a.625.625 0 0 0 .884.884l1.98-1.98a.625.625 0 0 0 0-.884zM13.6 4.755a.625.625 0 0 0-.625.625v4.78c0 .45-.365.815-.815.815H7.263l.913-.913a.625.625 0 0 0-.884-.884l-1.98 1.98a.625.625 0 0 0 0 .884l1.98 1.98a.625.625 0 1 0 .884-.884l-.913-.913h4.897c1.14 0 2.065-.924 2.065-2.065V5.38a.625.625 0 0 0-.625-.625"
                    })
                },
                i = (0, u(104509).wt)("arrowSquareLeftRightSmall", a, "small")
        },
        85071: (e, t, u) => {
            u.r(t), u.d(t, {
                iconDefinition: () => a,
                integrationIcon: () => i
            }), u(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, u(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                i = (0, u(104509).wt)("integration", a, "default")
        },
        177861: (e, t, u) => {
            function a(e) {
                let t = 1;
                return e.replace(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g, (e, u, a, i) => {
                    let n = encodeURIComponent(u),
                        r = encodeURIComponent(a),
                        D = encodeURIComponent(i),
                        o = encodeURIComponent(",");
                    return `[**[${t++}]**](#citation:${n}${o}${r}${o}${D})`
                })
            }

            function i(e, t) {
                let u = {
                    stepCitations: { ...e.stepCitations
                    }
                };
                for (let [e, a] of Object.entries(t.stepCitations)) {
                    if (!u.stepCitations[e]) {
                        u.stepCitations[e] = {
                            claims: [...a.claims],
                            artifacts: [...a.artifacts]
                        };
                        continue
                    }
                    let t = new Set(u.stepCitations[e].claims.map(e => e.id));
                    for (let i of a.claims) t.has(i.id) || u.stepCitations[e].claims.push(i);
                    let i = new Set(u.stepCitations[e].artifacts.map(e => e.id));
                    for (let t of a.artifacts) i.has(t.id) || u.stepCitations[e].artifacts.push(t)
                }
                return u
            }

            function n(e) {
                try {
                    let t = [];
                    for (let u in e.stepCitations)
                        for (let a of e.stepCitations[u].artifacts || []) a.citationInfo && t.push(a.citationInfo);
                    let u = t.length,
                        a = {};
                    for (let e of t) {
                        if (!e) continue;
                        let t = "unknown";
                        "notion" === e.citationType ? t = "notion" : "universal_search" === e.citationType && (t = e.target || "unknown"), a[t] = (a[t] || 0) + 1
                    }
                    return {
                        allArtifacts: t,
                        resultsBySource: a,
                        numSearchResults: u
                    }
                } catch (e) {
                    return {
                        allArtifacts: [],
                        resultsBySource: {},
                        numSearchResults: 0
                    }
                }
            }

            function r(e, t) {
                try {
                    let D = function(e) {
                            let t = [];
                            for (let u of e.matchAll(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g)) {
                                let [, e, a, i] = u;
                                ("claim" === a || "artifact" === a) && t.push({
                                    planKey: e,
                                    citationType: a,
                                    resourceId: i
                                })
                            }
                            return t
                        }(e),
                        o = {},
                        l = new Set;
                    for (let e of D) {
                        let {
                            planKey: D,
                            citationType: s,
                            resourceId: d
                        } = e;
                        try {
                            var u, a, i, n, r;
                            let e;
                            if (!D || !s || !d) continue;
                            let c = t.stepCitations[D];
                            if (!c) continue;
                            if ("claim" === s) {
                                let t = null == (a = c.claims) ? void 0 : a.find(e => e.id === d);
                                null != t && null != (i = t.supportingArtifactIds) && i[0] && (e = null == (n = c.artifacts) ? void 0 : n.find(e => e.id === t.supportingArtifactIds[0]))
                            } else "artifact" === s && (e = null == (r = c.artifacts) ? void 0 : r.find(e => e.id === d));
                            if (null != (u = e) && u.citationInfo) {
                                let t = "unknown";
                                "notion" === e.citationInfo.citationType ? (t = "notion", l.add(e.citationInfo.pageId)) : "universal_search" === e.citationInfo.citationType && (t = e.citationInfo.target || "unknown"), o[t] = (o[t] || 0) + 1
                            }
                        } catch (e) {
                            continue
                        }
                    }
                    let s = Object.values(o).reduce((e, t) => e + t, 0);
                    return {
                        citationsBySource: o,
                        numCitationsShown: s,
                        citationPageIds: Array.from(l)
                    }
                } catch (e) {
                    return {
                        citationsBySource: {},
                        numCitationsShown: 0,
                        citationPageIds: []
                    }
                }
            }

            function D(e) {
                let t = e.findLast(e => "researcher-report" === e.type);
                return {
                    citationInfo: t && t.citationInfo ? t.citationInfo : {
                        stepCitations: {}
                    },
                    reportContent: (null == t ? void 0 : t.value) || ""
                }
            }
            u.d(t, {
                Mi: () => i,
                VJ: () => D,
                W6: () => n,
                y5: () => a,
                ye: () => r
            }), u(410838), u(944114), u(517642), u(658004), u(733853), u(845876), u(432475), u(515024), u(731698), u(898992), u(354520), u(672577), u(581454), u(908872), u(737550)
        },
        200424: (e, t, u) => {
            e.exports = u.p + "9ade71d75a1c0e93.png"
        },
        225900: (e, t, u) => {
            u.d(t, {
                N: () => a
            });

            function a(e) {
                let {
                    environment: t,
                    spaceStore: a,
                    transcript: i,
                    parentPointer: n,
                    threadId: r,
                    workflowId: D,
                    createdSource: o,
                    agentMessageKey: l,
                    debugOverrides: s
                } = e, d = r ? ? (0, u(295447).Z1)({
                    environment: t,
                    table: u(298085).T,
                    spaceId: a.id
                });
                return (0, u(757688).WE)({
                    environment: t,
                    clientStore: u(57168).defaultClientAIChatStore,
                    threadStore: void 0,
                    createThreadArgs: {
                        id: d,
                        transcript: i,
                        workflowId: D,
                        parentPointer: n || {
                            table: u(213003).NX,
                            id: a.id,
                            spaceId: a.id
                        },
                        createdSource: o,
                        agentMessageKey: l
                    },
                    additionalDebugOverrides: s,
                    sendPatchResponse: !0
                }), u(174148).E.createChildStore(a, {
                    id: d,
                    spaceId: a.id,
                    table: u(298085).T
                })
            }
        },
        242912: (e, t, u) => {
            u.r(t), u.d(t, {
                arrowStraightDownSmallIcon: () => i,
                iconDefinition: () => a
            }), u(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.05 2.12 9.9 11.76",
                    svg: (0, u(474848).jsx)("path", {
                        d: "M8 2.125a.61.61 0 0 0-.625.599v9.017L4.122 8.488a.625.625 0 1 0-.884.884l4.32 4.32c.244.244.64.244.884 0l4.32-4.32a.625.625 0 0 0-.884-.884l-3.253 3.253V2.724A.61.61 0 0 0 8 2.125"
                    })
                },
                i = (0, u(104509).wt)("arrowStraightDownSmall", a, "small")
        },
        250943: (e, t, u) => {
            u.d(t, {
                E: () => a
            }), u(581454);

            function a(e) {
                let {
                    multiSelection: t
                } = e;
                return (0, u(58512).$)(t).map(({
                    store: e,
                    selection: t
                }) => {
                    let a = (0, u(247438).RQ)(e.getValue()),
                        i = (0, u(247438).xbM)(a, t),
                        {
                            tokensInsideRange: n
                        } = (0, u(247438).AI5)(a, i.startIndex, i.endIndex);
                    return (0, u(536614).r4)(n, e)
                }).join("\n\n")
            }
        },
        330942: (e, t, u) => {
            u.d(t, {
                Mt: () => s,
                RM: () => o,
                dC: () => n,
                f_: () => a().f_,
                ie: () => D,
                q1: () => i,
                sQ: () => d,
                uF: () => l
            }), u(813451), u(944114), u(898992), u(354520), u(737550);
            var a = () => u(706968);

            function i(e) {
                return e.some(e => "config" === e.type && "workflow" === e.value.type)
            }

            function n(e) {
                return e.some(e => "config" === e.type && "researcher" === e.value.type)
            }
            let r = /<lang\s+.*?>\s*/g;

            function D(e) {
                if ("string" == typeof e.value) return { ...e,
                    value: e.value.replace(r, "")
                };
                if (Array.isArray(e.value)) {
                    let t = e.value.findIndex(e => "text" === e.type);
                    if (-1 === t) return e;
                    let u = "";
                    for (let a of e.value.slice(t))
                        if ("text" === a.type) u += a.content;
                        else break;
                    if (!r.exec(u)) return e;
                    let a = "",
                        i = t;
                    for (; i < e.value.length; i++) {
                        let t = e.value[i];
                        if ("text" === t.type) a += t.content;
                        else break
                    }
                    let n = [...e.value.slice(0, t), {
                        type: "text",
                        content: a.replace(r, "")
                    }, ...e.value.slice(i)];
                    return "text" === n[0].type && 0 === n[0].content.length && n.shift(), { ...e,
                        value: n
                    }
                }
                return e
            }

            function o(e, t) {
                let a = {};
                for (let t of e) "registered-tool-grouping" === t.type && (a[t.toolCallId] = t);
                let i = [...e];
                if ("agent-transcript-summary" === t.type) {
                    let e = i.findLastIndex(e => "agent-transcript-summary" === e.type && e.lastStepId === t.lastStepId);
                    if (-1 !== e) {
                        let u = i[e];
                        if ("agent-transcript-summary" === u.type) {
                            let a = u.summary.trim().length > 0,
                                n = t.summary.trim().length > 0;
                            return a && !n || (i[e] = t), i
                        }
                    }
                    return i.push({ ...t
                    }), i
                }
                if ("user" === t.type || "user-injected" === t.type || "error" === t.type || "premium-feature-unavailable" === t.type || "context" === t.type || "title" === t.type || "retry" === t.type || "search-observation" === t.type || "researcher-text-observation" === t.type || "debug-inference" === t.type || "wait" === t.type || "agent-search-query-generation" === t.type || "fast-researcher-plan" === t.type || "fast-researcher-search-results" === t.type || "memory-agent" === t.type || "summarize-transcript" === t.type || "summarize-transcript-record-map" === t.type || "summarize-transcript-error" === t.type || "record-pointers-updated" === t.type || (0, u(548161).P0)(t) || "researcher-agent-group" === t.type || "agent-debug-error" === t.type || "eval-result" === t.type || "attachment" === t.type || "activate-transcript-compaction" === t.type || "pi-compaction" === t.type || "agent-records-updated" === t.type || "agent-turn-start" === t.type || "agent-record-map" === t.type || "user-specified-context" === t.type || "mention" === t.type || "agent-integration" === t.type || "aiBlockResponse" === t.type || "system-notification" === t.type || "agent-trigger" === t.type || "agent-prebuilt-prompt" === t.type || "agent-instruction-state" === t.type || "agent-route-trigger" === t.type || "workflow-effect-calling" === t.type || "workflow-effect-called" === t.type || "workflow-effect-error" === t.type) i.push({ ...t
                });
                else if ("agent-turn-full-record-map" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "agent-turn-full-record-map" === i[e].type) {
                        let u = i[e];
                        i[e] = { ...u,
                            agentRecordMap: t.agentRecordMap,
                            threadRecordMap: t.threadRecordMap,
                            recordVersions: t.recordVersions
                        }
                    } else i.push({ ...t
                    })
                } else if ("search" === t.type) i = [...i.filter(e => e.id !== t.id), { ...t
                }];
                else if ("agent-inference" === t.type || "agent-tool-result" === t.type || "config" === t.type || "updated-config" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id); - 1 !== e ? i[e] = t : i.push({ ...t
                    })
                } else if ("markdown-chat" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "markdown-chat" === i[e].type) {
                        let u = i[e];
                        i[e] = { ...u,
                            value: `${u.value}${t.value}`
                        }
                    } else i.push({ ...t
                    })
                } else if ("search-chat" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "search-chat" === i[e].type) {
                        let u = i[e];
                        i[e] = { ...u,
                            value: `${u.value}${t.value}`
                        }
                    } else i.push({ ...t
                    })
                } else if ("fast-researcher-chat" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "fast-researcher-chat" === i[e].type) {
                        let u = i[e];
                        i[e] = { ...u,
                            value: `${u.value}${t.value}`
                        }
                    } else i.push({ ...t
                    })
                } else if ("setup" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id); - 1 !== e && "setup" === i[e].type ? i[e] = t : i.push({ ...t
                    })
                } else if ("researcher-report" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "researcher-report" === i[e].type) {
                        let a = i[e];
                        i[e] = { ...a,
                            value: `${a.value}${t.value}`,
                            citationInfo: (0, u(177861).Mi)(a.citationInfo, t.citationInfo)
                        }
                    } else i.push({ ...t
                    })
                } else if ("researcher-agent" === t.type) {
                    let e = i.findIndex(e => e.id === t.id); - 1 !== e && "researcher-agent" === i[e].type ? i[e] = { ...i[e],
                        value: Object.assign(i[e].value, t.value),
                        updatedAt: t.updatedAt
                    } : i.push({ ...t
                    })
                } else if ("researcher-next-steps" === t.type) {
                    let e = i.findIndex(e => e.id === t.id); - 1 !== e ? i[e] = { ...t
                    } : i.push({ ...t
                    })
                } else if ("registered-tool-call" === t.type || "registered-tool-output" === t.type || "registered-tool-error" === t.type) {
                    let e = a[t.toolCallId];
                    e || (e = {
                        id: t.toolCallId,
                        type: "registered-tool-grouping",
                        toolName: t.toolName,
                        toolCallId: t.toolCallId,
                        steps: []
                    }, a[t.toolCallId] = e, i.push(e));
                    let u = { ...t
                    };
                    e.steps.push(u)
                } else if ("registered-tool-grouping" === t.type) a[t.toolCallId] || (a[t.toolCallId] = t, i.push({ ...t
                }));
                else if ("setup-operations" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id),
                        u = i[e];
                    (null == u ? void 0 : u.type) === t.type ? i[e] = { ...u,
                        operations: [...u.operations, ...t.operations]
                    } : i.push({ ...t
                    })
                } else if ("generate-formula" === t.type) {
                    let e = i.findLastIndex(e => e.id === t.id); - 1 !== e && "generate-formula" === i[e].type ? i[e] = { ...i[e],
                        value: t.value
                    } : i.push({ ...t
                    })
                } else "database-agent-setup" === t.type || "agent-message" === t.type || "proactive-message" === t.type || "survey" === t.type || "computer-file" === t.type || "plan-mode" === t.type ? i.push({ ...t
                }) : (0, u(722371).HB)(t);
                return i
            }
            let l = "inferenceTranscript";

            function s(e) {
                return "object" == typeof e && null !== e && "transcript" in e
            }

            function d(e) {
                if (e && ("search" === e.type || "workflow" === e.type)) return e.searchSessionId
            }
        },
        344177: (e, t, u) => {
            u.d(t, {
                $: () => i,
                S: () => n
            });
            var a = u(296540);

            function i(e) {
                let {
                    environment: t,
                    rightEdgeDistance: i,
                    isInPeekRenderer: r
                } = e, D = e.width ? ? 36, o = (0, a.useContext)(u(953075).w), l = (0, u(682985).K8)(() => (0, u(921001).z)(t, r) - (0, u(493739).Q)(t), [t, r]), s = (0, u(682985).K8)(() => n(t, 16 + o), [t, o]), d = i + o, c = (0, u(682985).K8)(() => +!(0, u(348295).$)(t).state, [t]);
                return (0, u(960253).I)(() => ({
                    buttonPositionStyle: {
                        display: "flex",
                        position: "absolute",
                        bottom: s,
                        insetInlineEnd: d,
                        opacity: c,
                        transform: `translateX(${(0,u(619157).A1)()?"":"-"}${l}px) translateZ(0)`,
                        transition: `
					opacity ${u(97143).L}ms,
					color ${u(97143).L}ms,
					transform 200ms
				`,
                        alignItems: "center",
                        flexDirection: "row",
                        gap: 8
                    },
                    roundButtonStyle: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: u(632079).Tj.whiteButtonBackground,
                        width: D,
                        height: D,
                        borderRadius: "100%",
                        fontSize: 20,
                        boxShadow: u(632079).Tj.shadow.outline.md
                    }
                }), [l, s, d, D, c])
            }

            function n(e, t) {
                return (0, u(616844).Y5)("bottom", t + (e.device.isTablet ? -12 : 0))
            }
        },
        346596: (e, t, u) => {
            u.d(t, {
                L: () => i,
                k: () => n
            });
            var a = u(296540);

            function i(e) {
                let {
                    workflowIdFromRoute: t,
                    spaceStore: i
                } = (0, u(682985).K8)(() => ({
                    workflowIdFromRoute: "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    spaceStore: u(728372).AppStoreSidebarSpaceStore.state
                }), [e]);
                return (0, a.useMemo)(() => {
                    if (t && i) return u(360851).N.createChildStore(i, {
                        table: u(43296).C,
                        id: t,
                        spaceId: i.id
                    })
                }, [t, i])
            }

            function n(e) {
                let t = "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    a = u(728372).AppStoreSidebarSpaceStore.state;
                if (t && a) return u(360851).N.createChildStore(a, {
                    table: u(43296).C,
                    id: t,
                    spaceId: a.id
                })
            }
        },
        358667: (e, t, u) => {
            u.r(t), u.d(t, {
                openChatPanel: () => a
            }), u(16280), u(814603), u(147566), u(198721);

            function a(e) {
                var t;
                let a, {
                        environment: i,
                        store: n,
                        chatPanelState: r,
                        source: D = "button"
                    } = e,
                    o = u(680007).default.mark("agent_time_to_render"),
                    l = (0, u(420459).G4)();
                u(562733).zI.setState({ ...u(562733).zI.state,
                    agentTimeToRenderMetric: o,
                    openSource: D,
                    completionContext: l
                });
                let s = r ? ? {},
                    d = s.isNewThread,
                    c = "threadId" in s && !!s.threadId;
                !d && !c && u(973240).L.threadId && u(973240).L.updatedAt && u(973240).L.updatedAt + 6e5 > Date.now() && (s = { ...s,
                    threadId: u(973240).L.threadId
                }), (0, u(487246).a)();
                let p = (0, u(548124).getMergedChatSidebarRouteData)({
                        environment: i,
                        update: s
                    }),
                    f = (0, u(548124).routeArgsGivenChatSidebarRouteData)(p),
                    g = i.RouterStore.state.route;
                if (n)
                    if ((null == n ? void 0 : n.table) === u(832375).evP) a = (0, u(483227).Ef)({
                        environment: i,
                        updates: { ...f,
                            scrollToBlockId: void 0,
                            store: n
                        }
                    });
                    else if ((null == n ? void 0 : n.table) === u(832375).C0E) {
                    let e = {};
                    "agent" === g.name && (e = {
                        workflowViewType: g.workflowViewType,
                        workflowViewId: g.workflowViewId,
                        workflowPrompt: g.workflowPrompt,
                        agentChatThreadId: g.agentChatThreadId
                    }), a = (0, u(453573).Lm)({
                        workflowId: n.id,
                        params: {
                            workflowViewType: "agent",
                            ...f,
                            ...e
                        }
                    })
                } else(0, u(722371).HB)(n);
                else if (!n && (0, u(548124).shouldAllowOpeningAgentOnSpecifiedRoute)(g)) {
                    let e = new URL(window.location.href);
                    f.chatThreadId && e.searchParams.set(u(737869).P5, f.chatThreadId), a = e.toString()
                }
                if (!a) throw Error(`Cannot open chat panel on route ${g.name} without a store`);
                let F = u(728372).AppStoreMainEditorCurrentBlockStore.state !== n;
                (0, u(79266).navigate)({
                    environment: i,
                    url: a,
                    redirect: !F
                });
                let C = (0, u(828560).hw)(),
                    h = u(562733).zI.state.chatPanelMode;
                C || (C && "sidebar" === h ? (0, u(16822).h)({
                    environment: i,
                    isExpanded: !0,
                    from: "slippery_slope_experiment",
                    saveDetailsSidebarPreference: !1
                }) : function(e) {
                    let {
                        environment: t
                    } = e;
                    !(0, u(712358).K)(t) || (0, u(548124).getIsChatPanelOpen)(t) || (u(984858).sidebarExpandedStore.setState(!1), u(475097).default.setSidebarExpandedStoreState(!1), u(562733).zI.setState({ ...u(562733).zI.state,
                        reopenMainSidebarOnClose: !0
                    }))
                }({
                    environment: i
                }));
                let m = null == (t = (0, u(328765).S)()) ? void 0 : t.id;
                m && (i.api.callApi({
                    eventName: "warmSearchCache",
                    environment: i,
                    data: {
                        spaceId: m
                    }
                }), i.api.callCellCompatibleApi({
                    eventName: "warmVectorDBCache",
                    environment: i,
                    data: {
                        spaceId: m
                    },
                    cellNavigation: {
                        spaceId: m
                    }
                })), (async () => {
                    try {
                        (await Promise.all([u.e(36556), u.e(55373), u.e(36192), u.e(40994), u.e(57042), u.e(54280), u.e(16712), u.e(93186), u.e(80139), u.e(67542), u.e(15389), u.e(97732), u.e(53050), u.e(87353), u.e(5721), u.e(64696), u.e(94495)]).then(u.bind(u, 305721))).trackAgentOpened({
                            environment: i,
                            from: D,
                            leftNotionSidebarOpenState: u(984858).sidebarExpandedStore.state
                        })
                    } catch (e) {}
                })()
            }
        },
        420459: (e, t, u) => {
            u.d(t, {
                G4: () => r,
                gu: () => i,
                rs: () => n
            }), u(18107), u(967357);
            var a = () => u(970831);

            function i(e) {
                let t = e ? ? ("editing" === u(358377).default.state.mode ? u(358377).default.state.multiSelection : void 0);
                if (!t) return;
                let i = t.start.store,
                    n = i.getRecordStoreUIRoot(),
                    r = u(521595).n.findNodeFromStore(i),
                    D = (0, u(534012).T)(i),
                    o = null == D ? void 0 : D.getRecordStoreUIParent(),
                    l = (0, u(730994).K3)(n),
                    s = D && D instanceof a().B && D !== n ? D : void 0,
                    d = s ? ? r;
                if (n && n instanceof a().B && d) return {
                    type: "cursor",
                    textSelection: t,
                    currentPage: n,
                    currentBlock: s,
                    origin: d,
                    currentParent: o,
                    scrollerStore: l,
                    isPageTitle: n.id === i.id
                }
            }

            function n() {
                let {
                    stores: e
                } = u(584265).default.state, t = u(358377).default.state, i = "empty" !== t.mode ? t.multiSelection : void 0, n = "empty" !== t.mode ? t.multiSelection.start.store : void 0, r = n ? n.getRecordStoreUIRoot() : void 0;
                if (!(r instanceof a().B)) {
                    let e, t = null == n ? void 0 : n.getRecordStoreUIParent();
                    for (; null != t;) t instanceof a().B && (e = t), t = t.getRecordStoreUIParent();
                    e && (r = e)
                }
                if (i && r && r instanceof a().B) {
                    let t = (0, u(534012).T)(i.end.store),
                        a = null == t ? void 0 : t.getRecordStoreUIParent(),
                        n = (0, u(730994).K3)(r);
                    if (t && a) return {
                        type: "textSelection",
                        stores: e,
                        textSelection: i,
                        currentPage: r,
                        origin: t,
                        endBlock: t,
                        endBlockParent: a,
                        scrollerStore: n
                    }
                }
            }

            function r() {
                if (u(584265).default.state.stores.length > 0) {
                    let e = u(358377).default.state;
                    if ("empty" === e.mode) {
                        let e = function() {
                            if (1 !== u(584265).default.state.stores.length) return;
                            let e = u(584265).default.state.stores[0];
                            if (!(e instanceof a().B)) return;
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
                        return e ? i(e) : function() {
                            let {
                                stores: e
                            } = u(584265).default.state, t = e[0], i = e.at(-1), n = t ? t.getRecordStoreUIRoot() : void 0;
                            if (n && n instanceof a().B && i) {
                                let t = (0, u(730994).K3)(n);
                                return {
                                    type: "blockSelection",
                                    stores: e,
                                    currentPage: n,
                                    origin: i,
                                    scrollerStore: t
                                }
                            }
                        }()
                    }
                    return (0, u(971541).k)(e.multiSelection) ? i() : n()
                }
            }
        },
        425749: (e, t, u) => {
            u.d(t, {
                I$: () => r,
                R2: () => l,
                WF: () => o,
                bZ: () => D,
                cE: () => i,
                jX: () => n,
                rz: () => s
            });
            var a = () => u(381453);

            function i(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let n = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function r(e) {
                return !!(void 0 !== e && (0, u(722371).Xk)(n, e))
            }

            function D() {
                let e = (0, u(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: u(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, u(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function o(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let l = [{
                type: "everything"
            }];

            function s(e) {
                for (let t of l)
                    if (a().n4(e, t)) return !0;
                return !1
            }
        },
        445283: (e, t, u) => {
            u.d(t, {
                N: () => a
            });

            function a(e) {
                if ("avatar" === e) return u(616922).eQ;
                if ("xsmall" === e) return 18;
                if ("xsmall_plus" === e) return 24;
                if ("small" === e) return 28;
                if ("small_plus" === e) return 32;
                else if ("medium" === e) return 36;
                else if ("medium_sidebar_button" === e) return 40;
                else if ("medium_plus" === e) return 44;
                else if ("medium_large" === e) return 48;
                else if ("large" === e) return 50;
                else if ("large_plus" === e) return 64;
                else if ("xlarge" === e) return 94;
                else if ("plans" === e) return 20;
                else if ("deep_dive" === e) return 16;
                else if ("upsell_banner" === e) return 74;
                else if ("personalization_modal" === e) return 96;
                else return (0, u(722371).HB)(e)
            }
        },
        448988: (e, t, u) => {
            u.d(t, {
                Wx: () => n,
                fM: () => a,
                sM: () => i
            });
            let a = new(u(815048)).O2("framer-motion", async () => await Promise.all([u.e(49806), u.e(79974), u.e(45414), u.e(37043)]).then(u.bind(u, 301716)));

            function i(e) {
                return e.useAnimation()
            }

            function n(e, ...t) {
                return e.useInView(...t)
            }
        },
        464913: (e, t, u) => {
            u.r(t), u.d(t, {
                arrowStraightUpSmallIcon: () => i,
                iconDefinition: () => a
            }), u(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.05 2.12 9.9 11.76",
                    svg: (0, u(474848).jsx)("path", {
                        d: "M8.442 2.308a.625.625 0 0 0-.884 0l-4.32 4.32a.625.625 0 0 0 .884.884l3.253-3.253v9.017c0 .334.283.599.625.599a.61.61 0 0 0 .625-.599V4.26l3.253 3.253a.625.625 0 0 0 .884-.884z"
                    })
                },
                i = (0, u(104509).wt)("arrowStraightUpSmall", a, "small")
        },
        497736: (e, t, u) => {
            u.d(t, {
                vF: () => f,
                Su: () => F,
                cG: () => o,
                UY: () => h,
                T5: () => s
            });
            var a = u(296540);
            let i = u.p + "edfba4a6d1ff7acd.png",
                n = u.p + "c9223887dcb57b7d.gif",
                r = u.p + "7e9cbd56b1eca7b9.gif";
            var D = u(474848);

            function o(e) {
                let {
                    variant: t,
                    style: a = {}
                } = e;
                return (0, D.jsx)("div", {
                    style: a,
                    children: (0, D.jsx)(u(4458).fI, {
                        alignItems: "center",
                        children: (0, D.jsx)(u(971375).x, {
                            variant: t,
                            shadowVariant: "light"
                        })
                    })
                })
            }
            let l = {
                marginInlineEnd: 8
            };

            function s(e) {
                let {
                    variant: t
                } = e;
                return (0, D.jsx)("div", {
                    style: l,
                    children: (0, D.jsx)(c, {
                        variant: t
                    })
                })
            }
            let d = {
                marginInlineStart: 8
            };

            function c(e) {
                let {
                    variant: t
                } = e, i = "dark" === (0, u(960253).e)(), [o, l] = (0, a.useState)(!0);
                (0, a.useEffect)(() => {
                    setTimeout(() => {
                        l(!1)
                    }, 6e3)
                }, []);
                let s = (0, a.useMemo)(() => {
                    if (o) return i ? n : r
                }, [i, o]);
                return (0, D.jsx)("div", {
                    style: d,
                    children: (0, D.jsx)(u(971375).x, {
                        variant: t,
                        shadowVariant: "light",
                        imgSource: s
                    })
                })
            }
            let p = {
                faceImgStyles: {
                    width: 20,
                    height: 20,
                    background: u(632079).Tj.assistantCornerButtonBackground,
                    borderRadius: "50%",
                    border: `1px solid ${u(632079).Tj.border.primary}`
                }
            };

            function f() {
                return (0, D.jsx)("img", {
                    style: p.faceImgStyles,
                    src: i,
                    role: "presentation",
                    alt: "Notion AI Face"
                })
            }
            let g = {
                faceImgStyles: {
                    width: 20,
                    height: 20,
                    background: u(632079).Tj.assistantCornerButtonBackground,
                    borderRadius: "50%",
                    border: `1px solid ${u(632079).Tj.border.primary}`
                }
            };

            function F() {
                return (0, D.jsx)("img", {
                    style: g.faceImgStyles,
                    src: i,
                    role: "presentation",
                    alt: "Notion AI Face"
                })
            }
            let C = {
                faceImgStyles: {
                    width: 20,
                    height: 20,
                    background: u(632079).Tj.assistantCornerButtonBackground,
                    borderRadius: "50%",
                    border: `1px solid ${u(632079).Tj.border.primary}`,
                    marginInlineStart: -2,
                    marginInlineEnd: 2
                }
            };

            function h() {
                return (0, D.jsx)("img", {
                    style: C.faceImgStyles,
                    src: i,
                    role: "presentation",
                    alt: "Notion AI Face"
                })
            }
        },
        562033: (e, t, u) => {
            u.d(t, {
                r: () => i
            }), u(296540);
            var a = u(474848);

            function i(e) {
                let {
                    item: t,
                    undoFunc: i
                } = e;
                u(436555).D6({ ...t,
                    right: (0, a.jsx)(u(531119).q6, {
                        onUndo: i
                    })
                })
            }
        },
        588222: (e, t, u) => {
            u.r(t), u.d(t, {
                arrowChevronSingleRightFillSmallIcon: () => i,
                iconDefinition: () => a
            }), u(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "5.54 2.94 5.81 10.11",
                    directional: !0,
                    svg: (0, u(474848).jsx)("path", {
                        d: "M11.13 8.53a.75.75 0 0 0 0-1.06L6.81 3.15a.75.75 0 0 0-1.06 1.06L9.54 8l-3.79 3.79a.75.75 0 0 0 1.06 1.06z"
                    })
                },
                i = (0, u(104509).wt)("arrowChevronSingleRightFillSmall", a, "fillSmall")
        },
        598132: (e, t, u) => {
            function a(e) {
                let t = u(728372).AppStoreCurrentUserRootStore.state;
                if (!t) return !1;
                let a = t.getSpaceViewStores();
                return (0, u(381453).oE)(null == a ? void 0 : a.map(e => e.getSpaceId())).map(t => u(949830).A.getData(e, {
                    spaceId: t,
                    userId: e.currentUser.id
                })).some(e => n(e))
            }

            function i(e, t) {
                return n(u(949830).A.getData(e, {
                    spaceId: t,
                    userId: e.currentUser.id
                }))
            }

            function n(e) {
                switch (null == e ? void 0 : e.membershipType) {
                    case void 0:
                    case "none":
                    case "page_guest":
                        return !1;
                    case "restricted_member":
                    case "member":
                    case "membership_admin":
                    case "owner":
                        return !0 === e.is_sales_assisted;
                    default:
                        (0, u(722371).HB)(e)
                }
            }
            u.d(t, {
                h0: () => a,
                lM: () => i
            }), u(898992), u(581454), u(737550)
        },
        674880: (e, t, u) => {
            u.d(t, {
                BX: () => p,
                Jv: () => c,
                Kf: () => o,
                WM: () => n,
                Xd: () => f,
                Xw: () => g,
                defaultInferenceContextStore: () => a,
                fd: () => s,
                i6: () => D,
                uP: () => l
            }), u(944114), u(898992), u(354520), u(803949), u(581454), u(737550);
            let a = new(u(345426)).ComputedStore(() => {
                let e = u(728372).AppStoreSidebarSpaceStore.state,
                    t = u(728372).AppStoreCurrentUserStore.state,
                    a = u(728372).AppStoreSidebarSpaceViewStore.state,
                    i = u(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (e && t && a) return {
                    spaceStore: e,
                    userStore: t,
                    spaceViewStore: a,
                    blockStore: i,
                    peekStore: u(475097).default.state.open ? u(475097).default.state.targetStore : void 0,
                    workflowStore: (0, u(346596).k)(e.environment)
                }
            }, {
                debugName: "defaultInferenceContextStore"
            });

            function i(e) {
                let t = {};
                if (e.isCollectionView()) {
                    let a = (0, u(444610).U)(e),
                        i = null == a ? void 0 : a.collectionViewStore();
                    i && (t[e.id] = i.id)
                } else e.getContentStores().forEach(e => {
                    if (e.isCollectionView()) {
                        let a = (0, u(444610).U)(e),
                            i = null == a ? void 0 : a.collectionViewStore();
                        i && (t[e.id] = i.id)
                    }
                });
                return t
            }

            function n(e) {
                let {
                    environment: t,
                    surface: a,
                    inferenceContext: n,
                    config: r,
                    invokedFromBlockId: D,
                    checklistId: o,
                    checklistStepId: l
                } = e, {
                    userStore: s,
                    spaceStore: d,
                    spaceViewStore: c,
                    blockStore: p,
                    peekStore: f,
                    workflowStore: g
                } = n, F = (0, u(295447).Z1)({
                    environment: t,
                    table: u(832375).mSw,
                    spaceId: d.id
                }), C = "meet" === t.RouterStore.state.route.name, h = { ...p && p.isCollectionView() ? {
                        collectionViewBlockId: p.id,
                        visibleCollectionViewIds: i(p)
                    } : void 0,
                    ...p && !p.isCollectionView() && "personal_home_page" !== p.getType() && "daily_brief_reminder" !== a ? {
                        blockId: p.id,
                        visibleCollectionViewIds: i(p)
                    } : void 0,
                    ...f ? {
                        peekBlockId: f.id,
                        visibleCollectionViewIds: i(f)
                    } : void 0,
                    ...g ? {
                        workflowId: g.id
                    } : void 0,
                    ...C ? function(e) {
                        if (!u(218744).default.checkGate({
                                gateName: "agent_in_meetings_route"
                            })) return;
                        let {
                            environment: t,
                            spaceId: a,
                            userId: i
                        } = e, n = t.idCreator.getSpaceIdCreatorSync(a), r = (0, u(413388).sX)(i, n);
                        return {
                            collectionViewBlockId: r,
                            visibleCollectionViewIds: {
                                [r]: (0, u(413388).X$)(i, n)
                            }
                        }
                    }({
                        environment: t,
                        spaceId: d.id,
                        userId: s.id
                    }) : void 0
                }, m = {};
                if ("workflow" !== r.type || !r.isCustomAgent) {
                    let e = c.getSettings(),
                        t = null == e ? void 0 : e.agent_personalization_settings;
                    if (t) {
                        var y;
                        t.name && (m.agentName = t.name), null != (y = t.customization_items) && y[0] && (m.agentAccessory = t.customization_items[0]), t.context_page_id && (m.context_page_id = t.context_page_id)
                    }
                }
                let v = function(e) {
                    var t, a, i;
                    let {
                        config: n,
                        workflowStore: r
                    } = e;
                    if ("workflow" !== n.type || !n.isCustomAgent || !r) return;
                    let D = !0 === n.useCustomAgentDraft || !0 === n.use_draft_actor_pointer ? (null == (t = r.getDraftData()) ? void 0 : t.instructions) ? ? (null == (a = r.getData()) ? void 0 : a.instructions) : null == (i = r.getPublishedArtifactStore()) || null == (i = i.getData()) ? void 0 : i.instructions;
                    if ((0, u(886883).ap)(D)) return D.id
                }({
                    config: r,
                    workflowStore: g
                });
                if (v && (m.context_page_id = v), u(218744).default.checkGate({
                        gateName: "workflows_inference_replay"
                    })) return {
                    id: F,
                    type: "context",
                    value: {
                        timezone: "America/Los_Angeles",
                        userName: "Test User",
                        userEmail: "test@example.com",
                        userId: "test-user-id",
                        spaceName: "Test Space",
                        spaceId: d.id,
                        spaceViewId: c.id,
                        currentDatetime: "2024-01-01T00:00:00.000Z",
                        surface: a,
                        ...h,
                        invokedFromBlockId: D,
                        ..."onboarding_checklist" === a && o && l ? {
                            checklistId: o,
                            checklistStepId: l
                        } : {},
                        ...m
                    }
                };
                let E = u(218744).default.checkGate({
                    gateName: "agent_user_session_context"
                }) ? function(e) {
                    let {
                        spaceId: t,
                        limit: a = 10
                    } = e;
                    return u(420156).A.getWithoutSubscribing(t).map(({
                        pageId: e,
                        visitedAt: t
                    }) => ({
                        pageId: e,
                        visitedAt: t
                    })).slice(0, a)
                }({
                    spaceId: d.id
                }) : void 0;
                return {
                    id: F,
                    type: "context",
                    value: {
                        timezone: (0, u(714350).P)(),
                        userName: s.getName(),
                        userId: s.id,
                        userEmail: s.getEmail(),
                        spaceName: d.getName(),
                        spaceId: d.id,
                        spaceViewId: c.id,
                        currentDatetime: u(906745).DateTime.now().toISO(),
                        surface: a,
                        ...h,
                        invokedFromBlockId: D,
                        ..."onboarding_checklist" === a && o && l ? {
                            checklistId: o,
                            checklistStepId: l
                        } : {},
                        ...m,
                        recentPageVisits: E
                    }
                }
            }

            function r(e) {
                let {
                    environment: t,
                    spaceStore: a,
                    config: i
                } = e;
                return {
                    id: (0, u(295447).Z1)({
                        environment: t,
                        table: u(832375).mSw,
                        spaceId: a.id
                    }),
                    type: "config",
                    value: i
                }
            }

            function D(e) {
                let {
                    existingTranscript: t,
                    environment: u,
                    spaceStore: a,
                    config: i
                } = e;
                if (!t.some(e => "config" === e.type)) return r({
                    environment: u,
                    spaceStore: a,
                    config: i
                })
            }

            function o(e) {
                let {
                    environment: t,
                    spaceStore: a,
                    value: i,
                    userStore: n
                } = e, r = d(i);
                return {
                    id: (0, u(295447).Z1)({
                        environment: t,
                        table: u(832375).mSw,
                        spaceId: a.id
                    }),
                    type: "user",
                    value: r,
                    userId: n.id,
                    createdAt: u(906745).DateTime.now().toISO()
                }
            }

            function l(e) {
                let {
                    environment: t,
                    spaceStore: a,
                    actualMessage: i,
                    displayMessage: n,
                    userStore: r,
                    surveyStepId: D,
                    sourceStepId: o
                } = e, l = d(i) ? ? [], s = d(n);
                return {
                    id: (0, u(295447).Z1)({
                        environment: t,
                        table: u(832375).mSw,
                        spaceId: a.id
                    }),
                    type: "user-injected",
                    actualMessage: l,
                    displayMessage: s,
                    userId: r.id,
                    createdAt: u(906745).DateTime.now().toISO(),
                    surveyStepId: D,
                    sourceStepId: o
                }
            }

            function s(e) {
                let {
                    environment: t,
                    spaceStore: a,
                    agentMessageKey: i,
                    instructions: n
                } = e;
                return {
                    id: (0, u(295447).Z1)({
                        environment: t,
                        table: u(832375).mSw,
                        spaceId: a.id
                    }),
                    type: "proactive-message",
                    agentMessageKey: i,
                    instructions: n
                }
            }

            function d(e) {
                if (e) return (0, u(247438).bBR)((0, u(247438).ooo)(e))
            }

            function c({
                environment: e,
                spaceStore: t,
                userStore: a,
                promptType: i,
                value: n,
                locale: r,
                args: D
            }) {
                return {
                    id: (0, u(295447).Z1)({
                        environment: e,
                        table: u(832375).mSw,
                        spaceId: t.id
                    }),
                    type: "agent-prebuilt-prompt",
                    promptType: i,
                    userId: a.id,
                    createdAt: Date.now(),
                    value: n,
                    locale: r,
                    isEdited: !1,
                    args: D
                }
            }

            function p(e) {
                let t, a, {
                    environment: i,
                    spaceId: n,
                    pointers: r,
                    selectedBlockStores: D,
                    textSelection: o,
                    blockSelectionContext: l,
                    textSelectionContext: s
                } = e;
                if (l) t = l;
                else if (D && D.length > 0) {
                    let e = (0, u(685745).B)(D);
                    e && (t = {
                        type: "blocks",
                        value: D.map(e => e.pointer),
                        text: (0, u(250943).E)({
                            mode: "editing",
                            multiSelection: e,
                            forceExtendAnnotations: {}
                        }).slice(0, 1200)
                    })
                }
                if (s) a = s;
                else if (o && o.start.store.pointer.table === u(832375).evP && o.end.store.pointer.table === u(832375).evP) {
                    let e = (0, u(250943).E)({
                            mode: "editing",
                            multiSelection: o,
                            forceExtendAnnotations: {}
                        }),
                        t = e.slice(0, 1200),
                        i = e.length > 1200;
                    a = {
                        type: "text",
                        value: {
                            start: {
                                pointer: o.start.store.pointer,
                                index: o.start.index
                            },
                            end: {
                                pointer: o.end.store.pointer,
                                index: o.end.index
                            }
                        },
                        text: t,
                        ...i ? {
                            isPreviewTruncated: !0
                        } : {}
                    }
                }
                if (0 !== r.length || t || a) return {
                    id: (0, u(295447).Z1)({
                        environment: i,
                        table: u(832375).mSw,
                        spaceId: n
                    }),
                    type: "user-specified-context",
                    value: {
                        pointers: r,
                        blockSelection: t,
                        textSelection: a
                    }
                }
            }

            function f(e) {
                let {
                    environment: t,
                    inferenceContext: a,
                    config: i,
                    addSteps: D,
                    surface: o,
                    invokedFromBlockId: l,
                    checklistId: s,
                    checklistStepId: d
                } = e, c = [r({
                    environment: t,
                    spaceStore: a.spaceStore,
                    config: i
                }), n({
                    environment: t,
                    inferenceContext: a,
                    surface: o,
                    config: i,
                    invokedFromBlockId: l,
                    checklistId: s,
                    checklistStepId: d
                })];
                return D && c.push(...D), c.filter(u(722371).O9)
            }

            function g(e) {
                let {
                    environment: t,
                    spaceId: a,
                    message: i,
                    notificationType: n = "info",
                    metadata: r
                } = e;
                return {
                    id: (0, u(295447).Z1)({
                        environment: t,
                        table: u(832375).mSw,
                        spaceId: a
                    }),
                    type: "system-notification",
                    message: i,
                    notificationType: n,
                    metadata: r
                }
            }
        },
        682115: (e, t, u) => {
            u.d(t, {
                d: () => d,
                A: () => s
            });
            var a = u(296540),
                i = u(474848);

            function n(e) {
                return (0, i.jsxs)("svg", {
                    width: "10",
                    height: "10",
                    viewBox: "0 0 10 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, i.jsx)("circle", {
                        cx: "4.99976",
                        cy: "5",
                        r: "2",
                        fill: "#D8A32F"
                    }), (0, i.jsx)("rect", {
                        x: "4.37476",
                        width: "1.25",
                        height: "2",
                        rx: "0.625",
                        fill: "#D8A32F"
                    }), (0, i.jsx)("rect", {
                        x: "4.37476",
                        y: "8",
                        width: "1.25",
                        height: "2",
                        rx: "0.625",
                        fill: "#D8A32F"
                    }), (0, i.jsx)("rect", {
                        x: "8.09375",
                        y: "1.02246",
                        width: "1.25",
                        height: "2",
                        rx: "0.625",
                        transform: "rotate(45 8.09375 1.02246)",
                        fill: "#D8A32F"
                    }), (0, i.jsx)("rect", {
                        x: "2.43677",
                        y: "6.6792",
                        width: "1.25",
                        height: "2",
                        rx: "0.625",
                        transform: "rotate(45 2.43677 6.6792)",
                        fill: "#D8A32F"
                    }), (0, i.jsx)("rect", {
                        x: "10.0002",
                        y: "4.375",
                        width: "1.25",
                        height: "2",
                        rx: "0.625",
                        transform: "rotate(90 10.0002 4.375)",
                        fill: "#D8A32F"
                    }), (0, i.jsx)("rect", {
                        x: "2.00024",
                        y: "4.375",
                        width: "1.25",
                        height: "2",
                        rx: "0.625",
                        transform: "rotate(90 2.00024 4.375)",
                        fill: "#D8A32F"
                    }), (0, i.jsx)("rect", {
                        x: "8.97729",
                        y: "8.09375",
                        width: "1.25",
                        height: "2",
                        rx: "0.625",
                        transform: "rotate(135 8.97729 8.09375)",
                        fill: "#D8A32F"
                    }), (0, i.jsx)("rect", {
                        x: "3.32031",
                        y: "2.43701",
                        width: "1.25",
                        height: "2",
                        rx: "0.625",
                        transform: "rotate(135 3.32031 2.43701)",
                        fill: "#D8A32F"
                    })]
                })
            }
            let r = {
                iconContainer: {
                    position: "relative",
                    display: "flex",
                    height: 28,
                    width: 28,
                    overflow: "hidden",
                    borderRadius: "50%",
                    border: `1px solid ${u(632079).Tj.yellow.border.secondary}`,
                    background: u(632079).Tj.yellow.background.primary
                },
                iconMotionWrapper: {
                    position: "absolute",
                    top: 6,
                    insetInlineStart: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                backgroundBlob: {
                    position: "absolute",
                    insetInlineEnd: -16,
                    bottom: -20,
                    height: 32,
                    width: 32,
                    borderRadius: "50%",
                    background: u(632079).Tj.yellow.background.tertiary,
                    opacity: .5
                },
                style0: {
                    transform: "scale(1.2)"
                }
            };

            function D({
                style: e,
                ...t
            }) {
                let {
                    value: a
                } = (0, u(815048).fJ)(u(448988).fM);
                if (!a) return null;
                let {
                    motion: o
                } = a;
                return (0, i.jsxs)("div", {
                    style: e ? { ...r.iconContainer,
                        ...e
                    } : r.iconContainer,
                    ...t,
                    children: [(0, i.jsx)(o.div, {
                        style: r.iconMotionWrapper,
                        animate: {
                            rotate: 360
                        },
                        transition: {
                            duration: 4,
                            repeat: 1 / 0,
                            ease: "linear"
                        },
                        children: (0, i.jsx)(n, {
                            style: r.style0
                        })
                    }), (0, i.jsx)("div", {
                        style: r.backgroundBlob
                    })]
                })
            }

            function o(e) {
                let {
                    rightEdgeDistance: t,
                    environment: i,
                    isInPeekRenderer: n,
                    alwaysVisible: r,
                    bottomEdgeDistance: D,
                    overrides: o
                } = e, l = (0, a.useContext)(u(953075).w), s = (0, u(682985).K8)(() => (0, u(921001).z)(i, n) - (0, u(493739).Q)(i), [i, n]), d = t + l, c = (0, u(682985).K8)(() => (0, u(344177).S)(i, (D ? ? 16) + l), [D, i, l]), p = (0, u(682985).K8)(() => (0, u(348295).$)(i).state && !r ? 0 : 1, [r, i]), {
                    ovalButtonStyle: f
                } = (0, u(960253).I)(() => ({
                    ovalButtonStyle: {
                        position: "absolute",
                        bottom: c,
                        insetInlineEnd: d,
                        borderRadius: 100,
                        fontSize: 20,
                        boxShadow: u(632079).Tj.shadow.outline.md,
                        zIndex: 111,
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        backgroundBlendMode: "overlay, normal",
                        opacity: p,
                        transform: `translateX(-${s}px) translateZ(0)`,
                        transition: `
				opacity ${u(97143).L}ms,
				color ${u(97143).L}ms,
				transform 200ms
			`,
                        ...null == o ? void 0 : o()
                    }
                }), [s, d, c, p, o]);
                return f
            }
            let l = {
                closeButton: {
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "100%",
                    width: 20,
                    height: 20,
                    padding: 4
                },
                closeButtonHover: {
                    background: u(632079).Tj.buttonPressedBackground
                },
                style0: {
                    marginInlineEnd: 8
                }
            };

            function s(e) {
                let {
                    onClick: t,
                    children: n,
                    onClose: r,
                    disableShimmerAnimation: s,
                    variant: c
                } = e, p = (0, u(533992).v3)(), f = (0, u(109939).tz)(), [g, F] = (0, a.useState)(!1), [C, h] = (0, a.useState)(!1), m = (0, a.useCallback)(() => {
                    F(!1), h(!1)
                }, []), y = (0, a.useCallback)(() => {
                    m(), window.removeEventListener("mouseup", y)
                }, [m]), v = (0, a.useCallback)(() => {
                    F(!0)
                }, []), E = (0, a.useCallback)(() => {
                    F(C), h(!1)
                }, [C]), S = (0, a.useCallback)(() => {
                    h(!0), window.addEventListener("mouseup", y)
                }, [y]), B = (0, a.useCallback)(() => {
                    h(!1)
                }, []), w = function(e) {
                    let {
                        environment: t,
                        isHovered: i,
                        isPressed: n,
                        shouldDisableShimmerAnimation: r,
                        variant: D
                    } = e, l = o({
                        rightEdgeDistance: d,
                        isInPeekRenderer: !1,
                        environment: t,
                        alwaysVisible: !0,
                        overrides: () => ({
                            width: void 0,
                            height: 45,
                            background: u(632079).Tj.whiteButtonBackground
                        })
                    }), [s, c] = (0, a.useState)(!1);
                    (0, a.useEffect)(() => {
                        r || setTimeout(() => {
                            c(!0)
                        }, 2e3)
                    }, [r]);
                    let p = (0, u(960253).e)();
                    return (0, u(960253).I)(() => ({
                        buttonStyle: { ...l,
                            cursor: "pointer",
                            overflow: "hidden",
                            userSelect: "none",
                            display: "flex",
                            alignItems: "center"
                        },
                        shimmerButtonStyle: {
                            paddingInlineEnd: 10,
                            paddingTop: 10,
                            paddingBottom: 10,
                            paddingInlineStart: "dailyBrief" === D || "assign_task_cta" === D ? 8 : void 0,
                            display: "flex",
                            alignItems: "center",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundImage: "dark" === p ? "linear-gradient(270deg, rgba(255, 255, 255, 0.4) 13.84%, rgba(255, 255, 255, 1) 59.7%, rgba(255, 255, 255, 0.4) 93.89%)" : "linear-gradient(270deg, rgba(0, 0, 0, 0.4) 13.84%, rgba(0, 0, 0, 1) 59.7%, rgba(0, 0, 0, 0.4) 93.89%)",
                            backgroundSize: "200% 100%",
                            backgroundRepeat: "no-repeat",
                            ...!s && {
                                background: void 0,
                                backgroundImage: void 0,
                                backgroundSize: void 0,
                                backgroundClip: void 0,
                                WebkitBackgroundClip: void 0,
                                WebkitTextFillColor: void 0
                            },
                            ...i && {
                                background: u(632079).Tj.whiteButtonHoveredBackground,
                                backgroundImage: void 0,
                                backgroundSize: void 0,
                                backgroundClip: void 0,
                                WebkitBackgroundClip: void 0,
                                WebkitTextFillColor: void 0
                            },
                            ...n && {
                                background: u(632079).Tj.whiteButtonPressedBackground,
                                backgroundImage: void 0,
                                backgroundSize: void 0,
                                backgroundClip: void 0,
                                WebkitBackgroundClip: void 0,
                                WebkitTextFillColor: void 0
                            }
                        },
                        sparklesIcon: {
                            height: 22,
                            width: 22,
                            padding: "4px 4px"
                        },
                        iconContainer: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 28,
                            width: 28
                        },
                        inner: {
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "nowrap"
                        },
                        chevronIcon: {
                            marginInlineStart: 8
                        },
                        message: {
                            fontSize: u(699422).J.UIRegular.desktop,
                            textWrap: "nowrap",
                            fontWeight: u(699422).Wy.medium
                        }
                    }), [i, n, s, l, D, p])
                }({
                    environment: p,
                    isHovered: g,
                    isPressed: C,
                    shouldDisableShimmerAnimation: s,
                    variant: c
                }), x = o({
                    rightEdgeDistance: 16,
                    bottomEdgeDistance: 65,
                    isInPeekRenderer: !1,
                    environment: p,
                    alwaysVisible: !0,
                    overrides: () => ({
                        width: void 0,
                        height: 20,
                        background: u(632079).Tj.whiteButtonBackground
                    })
                }), I = (0, u(960253).I)(() => ({
                    closeButtonContainer: { ...x
                    }
                }), [x]), {
                    value: b
                } = (0, u(815048).fJ)(u(448988).fM);
                if (!b) return null;
                let {
                    motion: A
                } = b;
                return (0, i.jsxs)(i.Fragment, {
                    children: [r ? (0, i.jsx)("div", {
                        style: I.closeButtonContainer,
                        children: (0, i.jsx)(u(374533).A, {
                            ariaLabel: f.formatMessage({
                                id: "assistantAnimatedNudgeElement.closeButton.ariaLabel",
                                defaultMessage: "Close"
                            }),
                            onClick: r,
                            style: l.closeButton,
                            hoveredStyle: l.closeButtonHover,
                            icon: u(25094).xMarkSmallIcon,
                            colorVariant: "tertiary"
                        })
                    }) : void 0, (0, i.jsx)(A.div, {
                        style: w.buttonStyle,
                        variants: {
                            initial: {
                                width: 36
                            },
                            animate: {
                                width: "auto",
                                transition: {
                                    ease: [.87, 0, .13, 1],
                                    type: "spring",
                                    stiffness: 90,
                                    damping: 16,
                                    mass: 1
                                }
                            }
                        },
                        initial: "initial",
                        animate: "animate",
                        onMouseMove: v,
                        onMouseLeave: E,
                        onMouseDown: S,
                        onMouseUp: B,
                        onClick: t,
                        className: u(828432).E4Q,
                        children: (0, i.jsxs)(A.div, {
                            style: w.shimmerButtonStyle,
                            animate: {
                                backgroundPosition: ["150% 0", "-50% 0"]
                            },
                            transition: {
                                ease: "easeInOut",
                                duration: 1.5,
                                repeat: 1 / 0
                            },
                            children: ["dailyBrief" === c ? (0, i.jsx)(D, {
                                style: l.style0
                            }) : "assign_task_cta" === c ? (0, i.jsx)("div", {
                                style: w.iconContainer,
                                children: (0, i.jsx)(u(16275).I, {
                                    icon: u(931701).a,
                                    size: "sm"
                                })
                            }) : (0, i.jsx)(u(497736).T5, {
                                variant: "small"
                            }), (0, i.jsxs)("div", {
                                style: w.inner,
                                children: [(0, i.jsx)(A.div, {
                                    style: w.message,
                                    variants: {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            transition: {
                                                ease: [.16, 1, .3, 1],
                                                duration: .75
                                            }
                                        }
                                    },
                                    initial: "initial",
                                    animate: "animate",
                                    children: n
                                }), (0, i.jsx)("span", {
                                    style: w.chevronIcon,
                                    children: (0, i.jsx)(u(16275).I, {
                                        icon: u(588222).arrowChevronSingleRightFillSmallIcon,
                                        size: "sm",
                                        colorVariant: "tertiary"
                                    })
                                })]
                            })]
                        })
                    })]
                })
            }
            let d = 16
        },
        685745: (e, t, u) => {
            u.d(t, {
                B: () => r
            });
            var a = () => u(129499),
                i = () => u(955630);

            function n(e) {
                for (let t of e) {
                    let e = function(e) {
                        let t = e.getTitleStore();
                        if (t && u(521595).n.findNodeFromStore(t)) return t
                    }(t);
                    if (e && t.getType() !== i().xd.code) return {
                        blockStore: t,
                        titleStore: e
                    }
                }
            }

            function r(e) {
                let t, i = n(e);
                if (!i) return;
                let r = n([...e].reverse());
                if (!r) return;
                let D = (0, u(787926).Ag)({
                    includeNonSelectableListContainer: !1,
                    rootStore: i.blockStore.getHighestContentBlockUIAncestor()
                });
                if (!D) return;
                let o = (0, u(787926).mP)(r.blockStore, D);
                if (o) {
                    for (let e of (0, u(827049).Y_)(o)) {
                        let u = e.value.store.getTitleStore();
                        if (u) {
                            let e = (0, a().s)(u);
                            e && (t = {
                                store: u,
                                index: e.endIndex
                            })
                        }
                    }
                    if (t) return {
                        start: {
                            store: i.titleStore,
                            index: 0
                        },
                        end: t
                    }
                }
            }
        },
        706968: (e, t, u) => {
            function a(e) {
                return D({
                    transcript: e
                })
            }

            function i(e) {
                let t = a(e);
                return (null == t ? void 0 : t.type) === "workflow" && !0 === t.isCustomAgent
            }

            function n(e) {
                let t = a(e);
                return (null == t ? void 0 : t.type) === "workflow" && !0 === t.isCustomAgent ? t.workflowId : void 0
            }

            function r(e) {
                let {
                    transcript: t,
                    fallback: u
                } = e, a = u;
                for (let e of t) {
                    if ("config" === e.type && "workflow" === e.value.type) {
                        a = e.value;
                        continue
                    }
                    if ("updated-config" === e.type && a) {
                        if (null === e.value || "object" != typeof e.value || Array.isArray(e.value)) continue;
                        a = { ...a,
                            ...e.value
                        }
                    }
                }
                return a
            }

            function D(e) {
                var t;
                let {
                    transcript: u
                } = e, a = null == (t = u.findLast(e => "config" === e.type)) ? void 0 : t.value;
                if (a) return "workflow" !== a.type ? a : r({
                    transcript: u
                }) ? ? a
            }
            u.d(t, {
                TU: () => D,
                f_: () => a,
                p0: () => i,
                py: () => r,
                zB: () => n
            }), u(410838)
        },
        729849: (e, t, u) => {
            u.d(t, {
                Gi: () => r,
                yB: () => n
            }), u(898992), u(354520), u(803949);
            var a = () => u(546605);

            function i() {
                return u(218744).default.getConfigKey("agent_max_attachments", "value")
            }

            function n() {
                return (0, u(682985).K8)(() => i(), [])
            }
            class r extends a().Store {
                getInitialState() {
                    return {
                        originalFileUrlToSuccessfullyUploadedFiles: new Map,
                        inProgressUploadFileIdsToProgress: new Map
                    }
                }
                setValueForUploadedFile(e, t) {
                    this.setState({ ...this.state,
                        originalFileUrlToSuccessfullyUploadedFiles: new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles).set(e, t)
                    })
                }
                markUploadedFilesAsSafe(e) {
                    let t = new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles);
                    e.forEach(e => {
                        var u;
                        let a = t.get(e);
                        a && t.set(e, { ...a,
                            metadata: { ...a.metadata,
                                guardrail: { ...null == (u = a.metadata) ? void 0 : u.guardrail,
                                    attachmentRisk: "confirmed_safe_by_user"
                                }
                            }
                        })
                    }), this.setState({ ...this.state,
                        originalFileUrlToSuccessfullyUploadedFiles: t
                    })
                }
                setValueForUploadingFile(e, t) {
                    let u = new Map(this.state.inProgressUploadFileIdsToProgress),
                        a = u.get(e);
                    u.set(e, { ...t,
                        timeUploaded: (null == a ? void 0 : a.timeUploaded) ? ? Date.now()
                    }), this.setState({ ...this.state,
                        inProgressUploadFileIdsToProgress: u
                    })
                }
                getTimeUploadedForUploadingFile(e) {
                    let t = new Map(this.state.inProgressUploadFileIdsToProgress).get(e);
                    return (null == t ? void 0 : t.timeUploaded) ? ? Date.now()
                }
                getTimeUploadedForUploadedFile(e) {
                    let t = new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles).get(e);
                    return (null == t ? void 0 : t.timeUploaded) ? ? Date.now()
                }
                deleteValueForUploadingFile(e) {
                    let t = new Map(this.state.inProgressUploadFileIdsToProgress);
                    t.delete(e), this.setState({ ...this.state,
                        inProgressUploadFileIdsToProgress: t
                    })
                }
                deleteValueForUploadedFile(e) {
                    let t = new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles);
                    t.delete(e), this.setState({ ...this.state,
                        originalFileUrlToSuccessfullyUploadedFiles: t
                    })
                }
                onFileUploadPercentageChanged(e) {
                    let {
                        fileId: t,
                        fileName: u,
                        percentage: a,
                        contentType: i
                    } = e;
                    this.setValueForUploadingFile(t, {
                        type: "uploading",
                        fileName: u,
                        progress: a,
                        contentType: i
                    })
                }
                onFileUploadFailed(e) {
                    let {
                        error: t
                    } = e, {
                        files: u
                    } = t;
                    u.forEach(({
                        fileId: e,
                        fileName: u
                    }) => {
                        this.setValueForUploadingFile(e, {
                            type: "error",
                            error: t,
                            fileName: u
                        })
                    })
                }
                onFileUploadCompleted(e, t) {
                    let u = this.getTimeUploadedForUploadingFile(e);
                    this.deleteValueForUploadingFile(e), this.setValueForUploadedFile(t.originalFileUrl, { ...t,
                        timeUploaded: u
                    })
                }
                onComputerFileUploadCompleted(e, t) {
                    let a = this.getTimeUploadedForUploadingFile(e);
                    this.deleteValueForUploadingFile(e), this.setValueForUploadedFile(t.originalFileUrl, {
                        originalFileUrl: t.originalFileUrl,
                        fileName: t.fileName,
                        contentType: "application/pdf",
                        base64EncodedFileUrl: "",
                        attachmentSource: "user_upload",
                        assistantSessionId: (0, u(818963).pg)(t.assistantSessionId),
                        timeUploaded: a
                    })
                }
                setCompletedFileForRetry(e) {
                    let t = this.getTimeUploadedForUploadedFile(e.originalFileUrl);
                    this.setValueForUploadedFile(e.originalFileUrl, { ...e,
                        timeUploaded: t
                    })
                }
                onDeleteFileUpload(e) {
                    this.deleteValueForUploadedFile(e)
                }
                isUploadInProgress() {
                    return Array.from(this.state.inProgressUploadFileIdsToProgress.values()).filter(e => "error" !== e.type).length > 0
                }
                hasTooManyAttachments() {
                    return this.isUploadInProgress() || this.state.originalFileUrlToSuccessfullyUploadedFiles.size > i()
                }
            }
        },
        775451: (e, t, u) => {
            u.d(t, {
                W: () => n
            }), u(296540);
            var a = u(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 2.06 14.57 16.51",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "m16.949 3.47-.618.619-1.164-1.165.625-.624a.823.823 0 0 1 1.157 0 .823.823 0 0 1 0 1.157zm-8.526 8.527 7.153-7.153-1.165-1.165-7.16 7.147a1.1 1.1 0 0 0-.247.414l-.303.978c-.055.206.137.4.33.33l.978-.303a.9.9 0 0 0 .414-.248"
                        }), (0, a.jsx)("path", {
                            d: "M9.578 5.438q.617 0 1.197.126l1.051-1.004a6.9 6.9 0 0 0-2.248-.372h-.35a6.603 6.603 0 0 0-6.603 6.602v.257c0 1.254.371 2.48 1.067 3.524a9.25 9.25 0 0 0 5.455 3.844l.514.129a.625.625 0 1 0 .303-1.213l-.513-.128a8 8 0 0 1-4.719-3.325 5.1 5.1 0 0 1-.857-2.831v-.257a5.353 5.353 0 0 1 5.353-5.352z"
                        }), (0, a.jsx)("path", {
                            d: "M12.444 15.748a6.47 6.47 0 0 1-5.471-1.878l1.387-.433a5.22 5.22 0 0 0 3.92 1.072l.08-.01a3.37 3.37 0 0 0 2.921-3.345 5.7 5.7 0 0 0-1.011-3.248l.904-.885a6.94 6.94 0 0 1 1.357 4.133 4.624 4.624 0 0 1-4.006 4.584z"
                        })]
                    })
                },
                n = (0, u(104509).wt)("pencilAndOutline", i, "default")
        },
        789701: (e, t, u) => {
            u.d(t, {
                y: () => i
            }), u(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.87 3.62 16.25 12.75",
                    svg: (0, u(474848).jsx)("path", {
                        d: "M6.303 3.625c-.71 0-1.374.355-1.768.946L2.232 8.025c-.233.35-.357.76-.357 1.18v5.045c0 1.174.951 2.125 2.125 2.125h12a2.125 2.125 0 0 0 2.125-2.125V9.204c0-.42-.124-.83-.357-1.179l-2.303-3.454a2.13 2.13 0 0 0-1.768-.946zm-.728 1.64a.88.88 0 0 1 .728-.39h7.394c.293 0 .566.146.728.39l2.303 3.454a1 1 0 0 1 .083.156h-4.702a.625.625 0 0 0-.625.625v.476a1.484 1.484 0 0 1-2.968 0V9.5a.625.625 0 0 0-.625-.625H3.189a1 1 0 0 1 .083-.156zm-2.45 4.86H7.27a2.734 2.734 0 0 0 5.46 0h4.145v4.125a.875.875 0 0 1-.875.875H4a.875.875 0 0 1-.875-.875z"
                    })
                },
                i = (0, u(104509).wt)("inbox", a, "default")
        },
        799891: (e, t, u) => {
            u.d(t, {
                y: () => i
            }), u(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.81 2.39 16.38 15.08",
                    svg: (0, u(474848).jsx)("path", {
                        d: "M16.938 9.353c0-2.97-2.539-5.54-6.545-5.697L10 3.648c-4.232 0-6.938 2.639-6.938 5.705 0 1.438.583 2.752 1.617 3.76a.63.63 0 0 1 .18.546 7.3 7.3 0 0 1-.89 2.528c1.108-.13 2.12-.614 3.01-1.344l.063-.044a.63.63 0 0 1 .505-.073 9 9 0 0 0 2.454.333l.392-.007c4.006-.158 6.545-2.728 6.545-5.699m1.25 0c0 3.803-3.234 6.766-7.747 6.948l-.44.008a10.2 10.2 0 0 1-2.485-.299c-1.349 1.022-2.985 1.62-4.826 1.428a.625.625 0 0 1-.406-1.033c.712-.817 1.096-1.737 1.284-2.642-1.116-1.197-1.756-2.733-1.756-4.41 0-3.925 3.447-6.955 8.189-6.955l.44.009c4.512.181 7.747 3.143 7.747 6.946"
                    })
                },
                i = (0, u(104509).wt)("chatBubble", a, "default")
        },
        850563: (e, t, u) => {
            u.d(t, {
                G1: () => D,
                Ll: () => r,
                Pn: () => s,
                TU: () => a().TU,
                Vf: () => i,
                kQ: () => l,
                py: () => a().py,
                yD: () => n
            }), u(410838), u(813451), u(944114), u(898992), u(354520), u(672577), u(803949), u(581454), u(737550);
            var a = () => u(706968);

            function i(e) {
                return "inference" !== e.type && "queue-handoff" !== e.type && "reenqueue-with-delay" !== e.type && "record-map" !== e.type && "patch-start" !== e.type && "patch" !== e.type && "agent-search-extracted-results" !== e.type
            }

            function n(e) {
                return "patch" === e.type || "patch-start" === e.type
            }

            function r(e) {
                return "user-injected" === e.type && void 0 === e.displayMessage
            }

            function D(e) {
                let t;
                return (null == (t = e.find(e => "context" === e.type)) ? void 0 : t.value.surface) === "daily_brief_reminder" && 1 >= e.filter(e => "user" === e.type || "user-injected" === e.type && !r(e)).length
            }

            function o(e) {
                return "context" === e.type
            }

            function l(e) {
                let t = e.find(o);
                return null == t ? void 0 : t.value.surface
            }

            function s(e) {
                let t = 0,
                    u = e.findLastIndex(e => "user" === e.type);
                return -1 !== u && (t = u + 1), e.slice(t)
            }
        },
        853160: (e, t, u) => {
            u.r(t), u.d(t, {
                checkmarkCircleIcon: () => n,
                iconDefinition: () => i
            }), u(296540);
            var a = u(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M12.876 7.982a.625.625 0 1 0-1.072-.644L9.25 11.595 7.815 9.92a.625.625 0 0 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                        }), (0, a.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0"
                        })]
                    })
                },
                n = (0, u(104509).wt)("checkmarkCircle", i, "default")
        },
        862215: (e, t, u) => {
            u.d(t, {
                G: () => a
            });

            function a(e, t) {
                let {
                    device: u
                } = e;
                u.isAndroid && t.focus(), t.select()
            }
        },
        877163: (e, t, u) => {
            u.d(t, {
                m: () => i
            }), u(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.62 1.77 10.75 15.98",
                    svg: (0, u(474848).jsx)("path", {
                        d: "M11.633 1.812c.263.096.43.354.41.632l-.392 5.51h3.099a.625.625 0 0 1 .506.992l-6.18 8.54a.625.625 0 0 1-1.13-.412l.402-5.5H5.25a.625.625 0 0 1-.507-.99l6.17-8.55a.625.625 0 0 1 .72-.222m-5.161 8.513H9.02a.625.625 0 0 1 .623.67l-.29 3.976 4.173-5.766H10.98a.625.625 0 0 1-.623-.67l.284-3.987z"
                    })
                },
                i = (0, u(104509).wt)("lightning", a, "default")
        },
        895105: (e, t, u) => {
            u.r(t), u.d(t, {
                filterIcon: () => i,
                iconDefinition: () => a
            }), u(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.87 15.25 10.25",
                    svg: (0, u(474848).jsx)("path", {
                        d: "M3 4.875a.625.625 0 1 0 0 1.25h14a.625.625 0 1 0 0-1.25zm2.125 5.742h9.75a.625.625 0 1 0 0-1.25h-9.75a.625.625 0 1 0 0 1.25m1.5 3.883c0-.345.28-.625.625-.625h5.5a.625.625 0 1 1 0 1.25h-5.5a.625.625 0 0 1-.625-.625"
                    })
                },
                i = (0, u(104509).wt)("filter", a, "default")
        },
        920976: (e, t, u) => {
            u.d(t, {
                F: () => n
            }), u(296540);
            var a = u(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.26 1.98 16.32 17.52",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M15.825 12a3.75 3.75 0 1 1-.001 7.501 3.75 3.75 0 0 1 0-7.501m0 1.325a.55.55 0 0 0-.55.55V15.2H13.95a.55.55 0 0 0-.001 1.1h1.326v1.325a.55.55 0 0 0 1.1 0V16.3h1.324a.55.55 0 0 0 0-1.1h-1.325v-1.325a.55.55 0 0 0-.55-.55M9.702 5.022a3.918 3.918 0 0 1 6.742.036.626.626 0 0 1-1.08.63 2.667 2.667 0 0 0-4.59-.023L5.376 14.68l4.19.678a.626.626 0 0 1-.2 1.235l-5.1-.827a.625.625 0 0 1-.437-.938z"
                        }), (0, a.jsx)("path", {
                            d: "M10.912 8.094a1.178 1.178 0 1 1 2.326.377 1.178 1.178 0 0 1-2.326-.377M4.7 7.087a1.178 1.178 0 1 1 2.327.377A1.178 1.178 0 0 1 4.7 7.087M3.488 2.985a3.92 3.92 0 0 1 5.572.357.625.625 0 0 1-.944.818 2.67 2.67 0 0 0-3.796-.243.625.625 0 1 1-.832-.932"
                        })]
                    })
                },
                n = (0, u(104509).wt)("aiFacePlus", i, "default")
        },
        937776: (e, t, u) => {
            u.d(t, {
                B: () => n
            }), u(296540);
            var a = u(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, a.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                n = (0, u(104509).wt)("archiveBox", i, "default")
        },
        971375: (e, t, u) => {
            u.d(t, {
                o: () => n,
                x: () => i
            }), u(296540);
            var a = u(474848);

            function i(e) {
                let {
                    variant: t,
                    imgSource: i,
                    tintColor: r,
                    faceStyle: D,
                    shadowVariant: o = "strong",
                    style: l,
                    ...s
                } = e, d = (0, u(960253).I)(() => {
                    let e = (0, u(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: u(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === o && {
                                boxShadow: e >= 90 ? u(632079).Tj.shadowMDThickerOutline : u(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === o && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? u(632079).Tj.shadowSMThickerOutline : u(632079).Tj.shadow.outline.md
                            },
                            overflow: "hidden",
                            ...l
                        }
                    }
                }, [t, o, l]);
                return (0, a.jsx)("div", { ...s,
                    children: (0, a.jsx)("div", {
                        style: d.faceImgWrap,
                        children: (0, a.jsx)(n, {
                            imgSource: i,
                            variant: t,
                            tintColor: r,
                            style: D
                        })
                    })
                })
            }

            function n(e) {
                let {
                    imgSource: t,
                    variant: i,
                    tintColor: n,
                    style: r,
                    alt: D,
                    ...o
                } = e, l = (0, u(445283).N)(i), s = t ? ? u(200424), d = D ? ? "Notion AI face", c = (0, u(960253).I)(() => ({
                    faceImg: {
                        height: l,
                        width: l,
                        transform: "scaleX(var(--direction, 1))",
                        ...r
                    },
                    tintedFace: {
                        height: l,
                        width: l,
                        transform: "scaleX(var(--direction, 1))",
                        backgroundColor: n,
                        WebkitMaskImage: `url(${s})`,
                        maskImage: `url(${s})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        ...r
                    }
                }), [l, r, n, s]);
                return void 0 !== n ? (0, a.jsx)("div", {
                    style: c.tintedFace,
                    role: "img",
                    "aria-label": d
                }) : (0, a.jsx)("img", { ...o,
                    style: c.faceImg,
                    src: s,
                    alt: d
                })
            }
        }
    }
]);