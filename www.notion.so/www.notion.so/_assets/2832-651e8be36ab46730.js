"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [2832], {
        79289: (e, t, n) => {
            n.d(t, {
                x: () => i
            }), n(296540);
            var o = n(474848);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.2 3.45 11.61 9.11",
                    directional: !0,
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M8 5.55a.25.25 0 0 1 .25-.25h3.45a.25.25 0 0 1 .25.25v4.9a.25.25 0 0 1-.25.25H8.25a.25.25 0 0 1-.25-.25z"
                        }), (0, o.jsx)("path", {
                            d: "M2.2 5.25A1.8 1.8 0 0 1 4 3.45h8a1.8 1.8 0 0 1 1.8 1.8v5.5a1.8 1.8 0 0 1-1.8 1.8H4a1.8 1.8 0 0 1-1.8-1.8zm1.8-.7a.7.7 0 0 0-.7.7v5.5a.7.7 0 0 0 .7.7h8a.7.7 0 0 0 .7-.7v-5.5a.7.7 0 0 0-.7-.7z"
                        })]
                    })
                },
                i = (0, n(104509).wt)("peekSideSmall", r, "small")
        },
        128363: (e, t, n) => {
            n.d(t, {
                K: () => r
            }), n(898992), n(354520);
            var o = () => n(546605);
            class r extends o().Store {
                getInitialState() {
                    return {
                        missingFields: []
                    }
                }
                setMissingFields(e) {
                    this.setState({
                        missingFields: e
                    })
                }
                clearErrors() {
                    this.setState({
                        missingFields: []
                    })
                }
                hasError(e) {
                    return this.state.missingFields.includes(e)
                }
                clearError(e) {
                    this.setState({
                        missingFields: this.state.missingFields.filter(t => t !== e)
                    })
                }
            }
        },
        168814: (e, t, n) => {
            n.d(t, {
                X: () => o
            });

            function o() {
                return (0, n(682985).K8)(() => n(329464).A.state.initialRenderCompleted, [])
            }
        },
        416065: (e, t, n) => {
            n.d(t, {
                G: () => u
            });
            var o = n(296540),
                r = n(474848);
            let i = {
                opacity: 1,
                cursor: "text"
            };

            function s(e) {
                let {
                    store: t,
                    placeholder: s,
                    style: a,
                    minHeight: l,
                    footer: d,
                    disabled: c = !1,
                    onChange: u,
                    onFocus: p,
                    onBlur: g
                } = e, f = (0, n(533992).v3)(), m = (0, n(49768).Q7)({
                    textStore: t,
                    initialFocus: !1
                }), b = (0, n(960253).e)(), h = (0, n(960253).I)(() => ({
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        minHeight: l ? ? 56,
                        cursor: "text",
                        borderRadius: (null == a ? void 0 : a.borderRadius) ? ? 12,
                        border: (null == a ? void 0 : a.border) ? ? (m.isFocused ? `1px solid ${n(632079).Tj.border.primary}` : `1px solid ${n(632079).Tj.border.secondary}`),
                        backgroundColor: (null == a ? void 0 : a.backgroundColor) ? ? ("dark" === b ? n(632079).Tj.background.elevated : n(632079).Tj.background.primary),
                        transition: "border-color 0.2s ease-in-out, min-height 0.3s ease-in-out"
                    },
                    textContainer: {
                        padding: (null == a ? void 0 : a.padding) ? ? 12,
                        maxHeight: 240,
                        overflow: "auto",
                        fontSize: 14
                    }
                }), [m.isFocused, a, l, b]), v = (0, o.useCallback)(e => {
                    var o;
                    null == (o = e.preventDefault) || o.call(e);
                    let r = n(358377).default.state;
                    if ("editing" === r.mode) {
                        let e = t.pointer.spaceId;
                        (0, n(377796).createAndCommit)({
                            userAction: "InlineTextInput.handleEnter",
                            environment: f,
                            canUndo: !0,
                            cellTarget: e ? {
                                spaceWithId: e
                            } : void 0,
                            perform: e => {
                                n(41403).$D({
                                    environment: f,
                                    editorMode: "default",
                                    string: "\n",
                                    multiSelection: r.multiSelection,
                                    disableMentions: !0,
                                    disableSlashCommands: !0,
                                    disableEmojiCommands: !0,
                                    transaction: e
                                })
                            }
                        })
                    }
                }, [f, t]), k = (0, o.useRef)(null), y = (0, o.useCallback)(e => {
                    e.target === k.current && m.focus()
                }, [m]), C = (0, o.useCallback)(() => {
                    m.focus(), null == p || p()
                }, [p, m]), x = (0, o.useCallback)(() => {
                    m.blur(), null == g || g()
                }, [g, m]);
                return (0, r.jsxs)("div", {
                    style: h.container,
                    role: "textbox",
                    ref: k,
                    onPointerDown: y,
                    children: [(0, r.jsx)(n(53373).A, {
                        style: h.textContainer,
                        placeholder: s,
                        disabled: c,
                        onChange: u,
                        store: t,
                        placeholderStyle: i,
                        pasteBehavior: "inline",
                        disableSlashCommands: !0,
                        disableEmbedMenu: !0,
                        disableEmojiCommands: !1,
                        disableComment: !0,
                        disableSelectAllBlocks: !0,
                        disableSelectionDrag: !0,
                        disableEnter: !1,
                        onEnter: v,
                        onTab: () => !0,
                        onUntab: () => !0,
                        onFocus: C,
                        onBlur: x,
                        disableMobileActionBar: !0,
                        disableStyleAnnotations: !1,
                        disableInsertedDeletedAnnotations: !0,
                        disableSuggestEdit: !0,
                        inPageFind: n(831719).Os.none,
                        usePopupForMentionOnMobile: !0,
                        disableMentions: !1,
                        disabledMentionTypes: n(86484).md
                    }), d]
                })
            }
            let a = {
                position: "absolute",
                insetInlineEnd: 20,
                top: 80,
                height: 28,
                width: 28,
                marginTop: -4,
                pointerEvents: "auto",
                zIndex: 10,
                opacity: 1,
                transition: "opacity 150ms ease"
            };

            function l(e) {
                let {
                    onConvertToPage: t,
                    isConverting: i = !1
                } = e, s = (0, n(533992).v3)(), l = (0, n(109939).tz)(), {
                    navigate: d
                } = (0, o.useContext)(n(44894).E), c = (0, o.useCallback)(e => {
                    let {
                        pageStore: t,
                        ...o
                    } = e;
                    d({
                        environment: s,
                        url: (0, n(483227).Ay)({
                            store: t,
                            pageVisitSource: n(254656).y8.LinkInPage,
                            ...o
                        })
                    })
                }, [d, s]), u = (0, o.useCallback)(async e => {
                    let n = await t();
                    n && c({
                        pageStore: n,
                        ...e
                    })
                }, [t, c]);
                return (0, r.jsx)(n(656252).A, {
                    popupType: n(182718).nl.Popup,
                    content: e => {
                        let t = [{
                            key: "side-peek",
                            render: e => (0, r.jsx)(n(95582).A, { ...e,
                                icon: (0, r.jsx)(n(16275).I, {
                                    icon: n(357055).A,
                                    colorVariant: "secondary"
                                }),
                                title: l.formatMessage({
                                    id: "workflow.agent.instructions.convertAndOpenInSidePeek",
                                    defaultMessage: "Side peek"
                                })
                            }),
                            action: async () => {
                                await u({
                                    openInSidePeek: !0
                                }), e.close()
                            }
                        }, {
                            key: "center-peek",
                            render: e => (0, r.jsx)(n(95582).A, { ...e,
                                icon: (0, r.jsx)(n(16275).I, {
                                    icon: n(748229).q,
                                    colorVariant: "secondary"
                                }),
                                title: l.formatMessage({
                                    id: "workflow.agent.instructions.convertAndOpenInCenterPeek",
                                    defaultMessage: "Center peek"
                                })
                            }),
                            action: async () => {
                                await u({
                                    openInCenterPeek: !0
                                }), e.close()
                            }
                        }, {
                            key: "full-page",
                            render: e => (0, r.jsx)(n(95582).A, { ...e,
                                icon: (0, r.jsx)(n(16275).I, {
                                    icon: n(89873).o,
                                    colorVariant: "secondary"
                                }),
                                title: l.formatMessage({
                                    id: "workflow.agent.instructions.convertAndOpenFullPage",
                                    defaultMessage: "Full page"
                                })
                            }),
                            action: async () => {
                                await u({}), e.close()
                            }
                        }];
                        return (0, r.jsx)(n(747369).A, {
                            menuType: n(649476).gu.Popup,
                            width: 200,
                            children: (0, r.jsx)(n(558045).A, {
                                type: n(558045).O.Vertical,
                                initialFocus: void 0,
                                sections: [{
                                    key: "open-options",
                                    items: t
                                }]
                            })
                        })
                    },
                    children: e => (0, r.jsx)(n(51831).m, {
                        content: () => l.formatMessage({
                            id: "workflow.agent.instructions.convertAndPeekTooltip",
                            defaultMessage: "Edit in page"
                        }),
                        children: t => (0, r.jsx)(n(374533).A, { ...(0, n(63390).A)(e, t),
                            style: a,
                            ariaLabel: l.formatMessage({
                                id: "workflow.agent.instructions.convertAndPeekMenu",
                                defaultMessage: "Edit in page"
                            }),
                            icon: n(357055).A,
                            size: "lg",
                            colorVariant: "tertiary",
                            disabled: i
                        })
                    })
                })
            }
            let d = (0, n(109939).YK)({
                instructionsPlaceholder: {
                    id: "workflow.agent.instructions.placeholder",
                    defaultMessage: "What does your agent do?"
                },
                instructionsPageTitle: {
                    id: "workflow.agent.instructions.pageTitle",
                    defaultMessage: "Instructions"
                }
            });

            function c(e, t) {
                switch (t.type) {
                    case "request":
                        if ("idle" !== e.status) return e;
                        return {
                            status: "requested",
                            requestId: t.requestId,
                            draftInstructions: t.draftInstructions
                        };
                    case "start":
                        if ("requested" !== e.status || e.requestId !== t.requestId) return e;
                        return {
                            status: "running",
                            requestId: e.requestId,
                            draftInstructions: e.draftInstructions
                        };
                    case "finish":
                        if ("idle" === e.status || e.requestId !== t.requestId) return e;
                        return {
                            status: "idle"
                        };
                    default:
                        (0, n(722371).HB)(t)
                }
            }

            function u(e) {
                let {
                    disableCollapsing: t,
                    disabled: i,
                    isCompact: a,
                    minHeight: u = n(650795).h,
                    onHandlePeek: p,
                    showInstructionsPeekButton: g = !0,
                    workflowStore: f,
                    workflowValidationErrorStore: m
                } = e, b = (0, n(109939).tz)(), h = (0, n(533992).v3)(), [v, k] = (0, o.useReducer)(c, {
                    status: "idle"
                }), y = (0, o.useRef)(0), C = (0, o.useRef)(void 0), x = (0, o.useRef)(!1), S = (0, n(682985).K8)(() => {
                    var e, t, o;
                    return f.table !== n(43296).C ? null == (o = f.getData()) ? void 0 : o.instructions : (null == (e = f.getDraftData()) ? void 0 : e.instructions) ? ? (null == (t = f.getData()) ? void 0 : t.instructions)
                }, [f]), I = (0, o.useMemo)(() => f.table === n(581654).U6 ? (0, n(886883).Zv)(S) ? f.getDataStore().getKeyStore("instructions") : void 0 : f.table === n(43296).C ? void 0 === S || (0, n(886883).Zv)(S) ? f.getDataStore().getKeyStore("instructions") : void 0 : void(0, n(722371).HB)(f), [f, S]), w = (0, n(682985).K8)(() => !!I && (0, n(49768).eo)(I), [I]), A = (0, o.useMemo)(() => {
                    if ((0, n(886883).ap)(S)) return n(970831).B.createChildStore(f, S)
                }, [S, f]), M = (0, o.useMemo)(() => (0, n(886883).ap)(S) ? "" : (0, n(247438).q4_)((0, n(886883).rr)(S)), [S]), j = (0, o.useMemo)(() => A || M.length > 0 || w ? u ? ? 175 : 0, [A, M.length, w, u]), T = (0, o.useMemo)(() => {
                    let e, t, o, r;
                    return e = 14 * !a, t = 2 * !!a + e + 2 + n(57461).CC.paddingTop, o = (a ? 4 : 14) + n(57461).CC.paddingInlineStart, r = 2 * !!a + e + 1 + n(57461).CC.paddingBottom, `${t}px ${o}px ${r}px`
                }, [a]), E = (0, n(960253).I)(() => ({
                    instructionsInput: {
                        backgroundColor: "transparent",
                        padding: T,
                        border: "none"
                    },
                    readOnlyContainer: {
                        minHeight: j,
                        padding: T,
                        borderRadius: 12,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: n(632079).Tj.border.secondary,
                        backgroundColor: n(632079).Tj.background.primary
                    }
                }), [j, T]), P = (0, o.useCallback)(() => {
                    m.clearError("instructions")
                }, [m]);
                (0, o.useEffect)(() => {
                    if (f.table !== n(43296).C || "requested" !== v.status) return;
                    let {
                        requestId: e,
                        draftInstructions: t
                    } = v;
                    k({
                        type: "start",
                        requestId: e
                    }), (0, n(171270).J)({
                        workflowStore: f,
                        environment: h,
                        title: b.formatMessage(d.instructionsPageTitle),
                        draftInstructions: t
                    }).then(t => {
                        var n;
                        P(), (null == (n = C.current) ? void 0 : n.requestId) === e && (C.current.resolve(t), C.current = void 0), k({
                            type: "finish",
                            requestId: e
                        })
                    }).catch(t => {
                        var n;
                        (null == (n = C.current) ? void 0 : n.requestId) === e && (C.current.reject(t), C.current = void 0), k({
                            type: "finish",
                            requestId: e
                        })
                    })
                }, [P, v, h, b, f]);
                let B = (0, o.useCallback)(() => {
                        if (f.table !== n(43296).C || x.current) return;
                        x.current = !0;
                        let e = f.getData();
                        (0, n(599231).VB)({
                            workflowId: f.id,
                            isDatabaseAgent: (0, n(445568).isWorkflowDataDatabaseAgent)(e)
                        })
                    }, [f]),
                    _ = (0, o.useCallback)(() => {
                        P(), B()
                    }, [P, B]),
                    R = f.table === n(43296).C && !i && !!I,
                    D = "idle" !== v.status,
                    K = b.formatMessage(d.instructionsPlaceholder),
                    F = (0, o.useCallback)(async () => {
                        if (f.table !== n(43296).C || !R || "idle" !== v.status) return;
                        let e = null == I ? void 0 : I.getValue();
                        I && (0, n(49768).q8)({
                            environment: h,
                            textStore: I
                        });
                        let t = y.current + 1;
                        return y.current = t, await new Promise((n, o) => {
                            C.current = {
                                requestId: t,
                                resolve: n,
                                reject: o
                            }, k({
                                type: "request",
                                requestId: t,
                                draftInstructions: e
                            })
                        })
                    }, [R, v.status, h, I, f]),
                    q = (0, n(682985).K8)(() => (0, n(445568).isWorkflowDataDatabaseAgent)(f.getData()), [f]);
                return A ? (0, r.jsx)(n(533919).Q, {
                    disableCollapsing: t,
                    disabled: i,
                    instructionsPageStore: A,
                    isCompact: a,
                    isDatabaseAgent: q,
                    onHandlePeek: p,
                    showPeekButton: g,
                    titlePlaceholder: K,
                    workflowId: f.table === n(43296).C ? f.id : void 0
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [I && !D ? (0, r.jsx)(s, {
                        placeholder: K,
                        store: I,
                        onChange: _,
                        style: E.instructionsInput,
                        disabled: i,
                        minHeight: j
                    }) : (0, r.jsx)("div", {
                        style: E.readOnlyContainer,
                        children: (0, r.jsx)(n(111010).D, {
                            children: M || K
                        })
                    }), R ? (0, r.jsx)(l, {
                        isConverting: D,
                        onConvertToPage: F
                    }) : void 0]
                })
            }
        },
        432428: (e, t, n) => {
            n.d(t, {
                V: () => i
            });
            var o = () => n(546605);
            class r extends o().Store {
                getInitialState() {
                    return {
                        isKeyboardShortcutsOpen: !1,
                        toggleSource: void 0,
                        openCount: 0
                    }
                }
            }
            let i = new r;
            (0, n(202146).exposeDebugValue)("keyboardShortcutsModalStore", i)
        },
        499267: (e, t, n) => {
            function o(e) {
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

            function r(e) {
                let {
                    store: t
                } = e;
                return t.state.isKeyboardShortcutsOpen
            }
            n.d(t, {
                W: () => r,
                j: () => o
            })
        },
        533919: (e, t, n) => {
            n.d(t, {
                Q: () => d
            }), n(898992), n(737550);
            var o = n(296540),
                r = () => n(970831),
                i = n(474848);
            let s = (n(650795).h - 29) / 2;

            function a(e) {
                let {
                    instructionsPageStore: t,
                    showButton: r,
                    isCompact: a = !1,
                    onHandlePeek: l
                } = e, d = (0, n(533992).v3)(), c = (0, n(109939).tz)(), {
                    navigate: u
                } = (0, o.useContext)(n(44894).E), p = (0, n(960253).I)(() => ({
                    actionBarWrapper: {
                        position: "absolute",
                        insetInlineEnd: a ? 8 : s,
                        top: a ? 4 : s,
                        pointerEvents: r ? "auto" : "none",
                        zIndex: 10,
                        opacity: +!!r,
                        transition: "opacity 150ms ease"
                    }
                }), [r, a]), g = (0, o.useCallback)(e => {
                    u({
                        environment: d,
                        url: (0, n(483227).Ay)({
                            store: t,
                            pageVisitSource: n(254656).y8.LinkInPage,
                            ...e
                        })
                    }), null == l || l()
                }, [t, u, d, l]);
                return (0, i.jsx)("div", {
                    style: p.actionBarWrapper,
                    children: (0, i.jsx)(n(330116).E, {
                        "aria-label": c.formatMessage({
                            id: "workflow.agent.instructions.actionBar",
                            defaultMessage: "Instructions actions"
                        }),
                        size: "sm",
                        children: (0, i.jsx)(n(517352).e, {
                            onClick: () => g({
                                openInSidePeek: !0
                            }),
                            "aria-label": c.formatMessage({
                                id: "workflow.agent.instructions.openInSidePeek",
                                defaultMessage: "Open in side peek"
                            }),
                            iconLeading: n(79289).x,
                            tooltip: c.formatMessage({
                                id: "workflow.agent.instructions.openInSidePeekTooltip",
                                defaultMessage: "Open in side peek"
                            })
                        })
                    })
                })
            }
            let l = {
                pointerEvents: "auto"
            };

            function d(e) {
                let {
                    disableCollapsing: t = !1,
                    disabled: s = !1,
                    instructionsPageStore: d,
                    isCompact: u = !1,
                    isDatabaseAgent: p,
                    onHandlePeek: g,
                    showPeekButton: f = !0,
                    showSelectableHoverMenuOverlay: m = !1,
                    titlePlaceholder: b,
                    workflowId: h
                } = e, v = (0, n(533992).v3)(), {
                    navigate: k
                } = (0, o.useContext)(n(44894).E), [y, C] = (0, o.useState)(!1), x = (0, n(682985).K8)(() => (0, n(576348).ZE)(void 0, d), [d]), S = (0, n(682985).O$)(n(358377).default), I = (0, n(682985).O$)(n(584265).default), w = (0, n(682985).uB)(void 0, n(593423).A), A = (0, n(682985).uB)(void 0, n(422526).A);
                (0, n(117931).A)({
                    pageStore: d,
                    pageVisitStore: A
                });
                let M = (0, n(682985).K8)(() => {
                        if ("editing" === S.mode) {
                            var e;
                            let t = S.multiSelection.start.store,
                                n = t.getRecordStoreUIRoot();
                            if (!(n instanceof r().B)) {
                                let e, o = t.getRecordStoreUIParent();
                                for (; null != o;) o instanceof r().B && (e = o), o = o.getRecordStoreUIParent();
                                e && (n = e)
                            }
                            if ((null == (e = n) ? void 0 : e.id) === d.id) return !0
                        }
                        return !!(I.stores.length > 0 && I.stores.some(e => {
                            var t;
                            let n = e.getRecordStoreUIRoot();
                            if (!(n instanceof r().B)) {
                                let t, o = e.getRecordStoreUIParent();
                                for (; null != o;) o instanceof r().B && (t = o), o = o.getRecordStoreUIParent();
                                t && (n = t)
                            }
                            return (null == (t = n) ? void 0 : t.id) === d.id
                        })) || !1
                    }, [S, I, d]),
                    j = (0, n(682985).K8)(() => "editing" !== S.mode && I.stores.length > 0 && I.stores.some(e => {
                        var t;
                        let n = e.getRecordStoreUIRoot();
                        if (!(n instanceof r().B)) {
                            let t, o = e.getRecordStoreUIParent();
                            for (; null != o;) o instanceof r().B && (t = o), o = o.getRecordStoreUIParent();
                            t && (n = t)
                        }
                        return (null == (t = n) ? void 0 : t.id) === d.id
                    }), [S, I, d]),
                    {
                        pageInstructionsLastEditedTime: T,
                        isLastAuthorThisUser: E
                    } = (0, n(682985).K8)(() => ({
                        pageInstructionsLastEditedTime: d.getLastEditedTime(),
                        isLastAuthorThisUser: d.getLastEditedById() === v.currentUser.id
                    }), [d, v.currentUser.id]),
                    P = (0, o.useRef)(void 0),
                    B = (0, o.useRef)(!1),
                    _ = (0, o.useRef)(!1);
                (0, o.useEffect)(() => {
                    M && !_.current && (B.current = !1), _.current = M
                }, [M]), (0, o.useEffect)(() => {
                    B.current = !1
                }, [h]), (0, o.useEffect)(() => {
                    let e = P.current;
                    if (void 0 === e) {
                        P.current = T;
                        return
                    }
                    T <= e || (P.current = T, void 0 !== h && !B.current && E && ((0, n(599231).VB)({
                        workflowId: h,
                        isDatabaseAgent: p
                    }), B.current = !0))
                }, [M, p, T, h, E]);
                let R = (0, n(682985).K8)(() => {
                        let e = d.getContentStores();
                        if (e.length > 1) return !0;
                        if (1 === e.length) {
                            let t = e[0].getTitleValue();
                            return t.length > 0 && t.some(e => "" !== e[0].trim())
                        }
                        return !1
                    }, [d]),
                    D = M || R || t,
                    K = (0, o.useCallback)(() => C(!0), []),
                    F = (0, o.useCallback)(() => C(!1), []),
                    q = (0, o.useCallback)(async e => {
                        var t;
                        if (e.target !== e.currentTarget) return;
                        let o = d.getContentStores(),
                            r = o.length > 0 ? o[o.length - 1] : void 0;
                        if (r && (t = r.getType()) && !0 === c[t]) {
                            let e = d.pointer.spaceId,
                                t = (0, n(377796).createAndCommit)({
                                    userAction: "InstructionsComposer.handleContainerClick.ensureEmptyBlock",
                                    environment: v,
                                    canUndo: !0,
                                    cellTarget: e ? {
                                        spaceWithId: e
                                    } : void 0,
                                    perform: e => {
                                        let t = n(124937).Wv({
                                            environment: v,
                                            type: "text",
                                            inMemoryRecordCache: d.inMemoryRecordCache,
                                            transaction: e,
                                            spaceId: d.pointer.spaceId
                                        });
                                        return (0, n(135674).B)({
                                            parentStore: d.getContentStore(),
                                            appendStore: t,
                                            transaction: e
                                        }).childStore
                                    }
                                }).performResult;
                            await n(374176).default.afterNextFlush(), (0, n(182553).h)({
                                environment: v,
                                store: t
                            }), (0, n(940763).e)({
                                store: t.getBlockTitleStore()
                            });
                            return
                        }
                        let {
                            clientX: i,
                            clientY: s,
                            target: a
                        } = e;
                        if (!(a instanceof Element)) return;
                        let l = (0, n(576590).E)(i, s, a);
                        if (l && l.selectable.props.onEditText) {
                            let e = s <= l.rect.top,
                                t = d.pointer.spaceId;
                            (0, n(377796).createAndCommit)({
                                userAction: "InstructionsComposer.handleContainerClick.editText",
                                environment: v,
                                canUndo: !0,
                                cellTarget: t ? {
                                    spaceWithId: t
                                } : void 0,
                                perform: t => {
                                    var n, o;
                                    null == (n = (o = l.selectable.props).onEditText) || n.call(o, {
                                        isAtStartOfLine: i <= l.rect.left,
                                        isAtStartOfContainer: e,
                                        isClick: !0,
                                        transaction: t
                                    })
                                }
                            })
                        } else {
                            let e = o[0];
                            if (!e) return;
                            (0, n(182553).h)({
                                environment: v,
                                store: e
                            }), await n(374176).default.afterNextFlush();
                            let t = e.getBlockTitleStore();
                            if (!t) return;
                            (0, n(940763).e)({
                                store: t
                            })
                        }
                    }, [v, d]),
                    O = 2 * !!u,
                    U = 2 * !!u,
                    H = u ? 4 : 14,
                    V = 14 * !u,
                    W = (0, n(960253).I)(() => ({
                        composerContainer: {
                            paddingTop: O,
                            paddingInlineStart: H,
                            paddingBottom: U,
                            paddingInlineEnd: H,
                            maxHeight: D ? n(650795).$ : n(650795).h,
                            minHeight: n(650795).h,
                            overflow: D ? "hidden" : "visible",
                            position: "relative",
                            transition: "max-height 300ms ease"
                        },
                        scroller: {
                            pointerEvents: "none",
                            marginTop: 0,
                            marginBottom: 0,
                            marginInline: -H,
                            paddingBlock: V,
                            paddingInline: H,
                            maxHeight: D ? n(650795).$ - O - U : n(650795).h - O - U,
                            transition: "max-height 300ms ease"
                        }
                    }), [O, H, U, V, D]),
                    z = (0, o.useCallback)(e => {
                        k({
                            environment: v,
                            url: (0, n(933267).q)(e)
                        })
                    }, [v, k]),
                    L = (0, o.useCallback)(e => {
                        M && e.preventDefault && e.preventDefault()
                    }, [M]);
                return (0, i.jsx)(n(440411).B, {
                    value: z,
                    children: (0, i.jsxs)("div", {
                        style: W.composerContainer,
                        onClick: q,
                        onMouseMove: K,
                        onMouseLeave: F,
                        children: [f ? (0, i.jsx)(a, {
                            instructionsPageStore: d,
                            isCompact: u,
                            onHandlePeek: g,
                            showButton: y
                        }) : void 0, (0, i.jsxs)(n(369064).N, {
                            debugName: "InstructionsComposer",
                            capture: M,
                            onSelectAll: L,
                            children: [(0, i.jsx)(n(318981).A, {
                                store: d,
                                isDefaultContainer: !0,
                                isRootContainer: !0,
                                disableRectangularSelection: !0,
                                render: ({
                                    selectableEvents: e,
                                    selectableHoverMenuOverlay: t
                                }) => (0, i.jsxs)(n(126767).H, {
                                    type: n(644154).A.Y,
                                    style: W.scroller,
                                    store: w,
                                    ...e,
                                    children: [m ? t : void 0, (0, i.jsx)("div", {
                                        style: l,
                                        children: (0, i.jsx)(n(865594).AT, {
                                            context: n(166654).R.WorkflowInstructionsInInlineComposer,
                                            store: d,
                                            paddingBottom: 20,
                                            disabled: s,
                                            disableTopControls: !0,
                                            titlePlaceholder: b,
                                            forceSelectTitleOnMount: !1
                                        })
                                    }), x ? (0, i.jsx)(n(712155).H7, {
                                        scrollerStore: w
                                    }) : void 0]
                                })
                            }), (0, i.jsx)(n(683078).A, {
                                debugName: "InstructionsComposer",
                                capture: j
                            })]
                        })]
                    })
                })
            }
            let c = {
                page: !0,
                collection_view: !0,
                collection_view_page: !0,
                external_object_instance_page: !0,
                form: !0,
                workflow: !0,
                code: !0,
                callout: !0,
                quote: !0,
                image: !0,
                video: !0,
                audio: !0,
                file: !0,
                pdf: !0,
                embed: !0,
                bookmark: !0,
                tweet: !0,
                drive: !0,
                gist: !0,
                invision: !0,
                mixpanel: !0,
                framer: !0,
                maps: !0,
                figma: !0,
                loom: !0,
                typeform: !0,
                codepen: !0,
                whimsical: !0,
                miro: !0,
                abstract: !0,
                sketch: !0,
                excalidraw: !0,
                replit: !0,
                hex: !0,
                deepnote: !0,
                drawing: !0,
                divider: !0,
                equation: !0,
                table_of_contents: !0,
                link_to_page: !0,
                link_to_collection: !0,
                breadcrumb: !0,
                ai_block: !0,
                transcription: !0
            }
        },
        650795: (e, t, n) => {
            n.d(t, {
                $: () => o,
                h: () => r
            });
            let o = 256,
                r = 66
        },
        683078: (e, t, n) => {
            n.d(t, {
                A: () => s
            }), n(898992), n(672577), n(737550);
            var o = n(296540),
                r = () => n(968864),
                i = n(474848);

            function s(e) {
                let t = (0, n(533992).v3)(),
                    [s, a] = (0, o.useState)([]),
                    l = (0, n(168814).X)();
                (0, o.useEffect)(() => {
                    (async () => {
                        l && a((await Promise.all([n.e(15389), n.e(97732), n.e(53050), n.e(87353), n.e(5721), n.e(57688), n.e(64696), n.e(76135), n.e(81241), n.e(15498)]).then(n.bind(n, 154798))).lowPriActionsWithKeyboardShortcuts)
                    })()
                }, [l]);
                let d = (0, n(67499).S)(),
                    c = (0, o.useRef)(),
                    u = (0, o.useRef)();
                (0, o.useEffect)(() => {
                    function e(e) {
                        (e.clientX !== c.current || e.clientY !== u.current) && (c.current = e.clientX, u.current = e.clientY, n(200083).A.setKeyboardMode(!1))
                    }
                    return window.addEventListener("mousemove", e), () => {
                        window.removeEventListener("mousemove", e)
                    }
                }, []);
                let p = (0, n(682985).K8)(() => [...(0, n(868366).bD)(), ...s], [s]),
                    g = (0, o.useMemo)(() => (function(e, t, o) {
                        let i = {};
                        for (let s of t)
                            for (let a of (s.lazyDependencyKeys && (0, r().G)(...s.lazyDependencyKeys), s.shortcuts)) i[a] = r => (function({
                                eventKeyboardShortcut: e,
                                e: t,
                                environment: o,
                                actionsWithKeyboardShortcuts: r,
                                pageContext: i
                            }) {
                                let s;
                                if (!(!((s = document.querySelector("#intercom-container")) && s.contains(document.activeElement)) && (!n(52169).A.state.isActive || n(218744).default.checkGate({
                                        gateName: "block_menu_shortcut_fix"
                                    })))) return;
                                let a = n(584265).default.state.stores,
                                    l = n(584265).default.state.pivot || a[0],
                                    d = l && n(240414).T.getRectFromStore(l),
                                    c = r.find(t => !!t.shortcuts.some(t => t === e) && n(173231).F6(t, {
                                        environment: o,
                                        blocks: a,
                                        originRect: d,
                                        publicEditMode: void 0,
                                        pageContext: i
                                    }));
                                if (c) {
                                    var u;
                                    let e, r, s;
                                    "keydown" === t.type && t.preventDefault && t.preventDefault();
                                    let l = n(52169).A.state.isActive;
                                    c.action({
                                        environment: o,
                                        blocks: a,
                                        originRect: d,
                                        publicEditMode: void 0,
                                        analyticsFrom: "keyboard_shortcut",
                                        pageContext: i
                                    }, t);
                                    let p = a[0];
                                    p && (r = (e = p.getType()) ? (0, n(955630).Yt)(e, p.getFormat()) : void 0, s = p.getParentCollectionIdUpToTwoLevels());
                                    let {
                                        collectionId: g,
                                        ownedCollectionCount: f,
                                        linkedCollectionCount: m
                                    } = (0, n(633171).P)(p, {
                                        skipPages: !0
                                    });
                                    (0, n(658024).N)(o, {
                                        analyticsName: c.analyticsName,
                                        action_type: c.analyticsActionType,
                                        from: "keyboard_shortcut",
                                        block_id: null == p ? void 0 : p.id,
                                        block_type: e,
                                        is_toggleable: r,
                                        collection_id: g,
                                        owned_collection_count: f,
                                        linked_collection_count: m,
                                        parent_collection_id: s
                                    }), u = {
                                        resetBlockMenuStore: l
                                    }, n(200083).A.setKeyboardMode(!0), n(183056).default.reset(), n(218744).default.checkGate({
                                        gateName: "block_menu_shortcut_fix"
                                    }) && u.resetBlockMenuStore && n(52169).A.reset()
                                }
                            })({
                                eventKeyboardShortcut: a,
                                e: r,
                                environment: e,
                                actionsWithKeyboardShortcuts: t,
                                pageContext: o
                            });
                        return i
                    })(t, p, d), [t, p, d]);
                return (0, i.jsx)(n(281023).k, {
                    debugName: e.debugName,
                    priority: e.priority,
                    enable: e.capture,
                    shortcuts: g
                })
            }
        }
    }
]);