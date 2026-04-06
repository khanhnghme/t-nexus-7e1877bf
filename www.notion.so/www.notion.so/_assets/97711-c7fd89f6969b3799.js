"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [97711], {
        317606: (e, t, o) => {
            o.d(t, {
                BU: () => s,
                _y: () => u,
                getAvailableWorkflowAgentModels: () => f
            }), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(354520), o(803949), o(581454);
            let n = (0, o(109939).YK)({
                    model: {
                        id: "aiInferenceTranscript.model",
                        defaultMessage: "{modelName}"
                    }
                }),
                i = (0, o(109939).YK)({
                    search: {
                        id: "AIModePicker.askMode.search",
                        defaultMessage: "Notion AI"
                    },
                    defaultModel: {
                        id: "AIModePicker.askMode.defaultModel",
                        defaultMessage: "Auto"
                    },
                    includesContextTitle: {
                        id: "AIModePicker.askMode.includesContextTitle",
                        defaultMessage: "Get answers about your workspace"
                    },
                    excludesContextTitle: {
                        id: "AIModePicker.askMode.excludesContextTitle",
                        defaultMessage: "Chat directly with models"
                    },
                    smallOrOpenSectionTitle: {
                        id: "AIModePicker.askMode.openSourceSectionTitle",
                        defaultMessage: "(Experimental) Small & Open Models"
                    }
                }),
                r = ["anthropic-haiku-4.5", "gingerbread"];

            function a(e) {
                let {
                    items: t,
                    getModelType: o,
                    shouldSkipSorting: n,
                    getFamily: i
                } = e;
                return t.map((e, t) => ({
                    item: e,
                    originalIndex: t
                })).sort((e, t) => {
                    if (!i) return e.originalIndex - t.originalIndex;
                    if (null != n && n(e.item) || null != n && n(t.item)) return 0;
                    let r = o(e.item),
                        a = o(t.item),
                        l = i(r),
                        s = i(a);
                    if (l !== s) {
                        if (void 0 === l && void 0 !== s) return 1;
                        if (void 0 === s && void 0 !== l) return -1;
                        if (void 0 !== l && void 0 !== s) return l.localeCompare(s)
                    }
                    return e.originalIndex - t.originalIndex
                }).map(({
                    item: e
                }) => e)
            }

            function l(e, t) {
                if (void 0 !== e && void 0 !== t && void 0 !== o(295206).P.getData(e, {
                        spaceId: t
                    })) return n => {
                    if (n) return o(295206).P.getModelFamily(e, t, n)
                }
            }

            function s(e, t, o) {
                return a({
                    items: e,
                    getModelType: e => e,
                    getSecondaryKey: e => e,
                    getFamily: l(t, o)
                })
            }

            function d(e, t, o) {
                return a({
                    items: e,
                    getModelType: e => "default" === e.askMode ? void 0 : e.askMode,
                    getSecondaryKey: e => e.title,
                    shouldSkipSorting: e => "default" === e.askMode,
                    getFamily: l(t, o)
                })
            }

            function c(e, t) {
                return t ? {
                    askMode: "default",
                    title: e.formatMessage(i.defaultModel),
                    config: {
                        type: "workflow"
                    }
                } : {
                    askMode: "default",
                    title: e.formatMessage(i.search),
                    config: {
                        type: "search",
                        scopeForNextSearch: {
                            type: "everything"
                        }
                    }
                }
            }

            function u(e) {
                let {
                    intl: t,
                    isAgentEnabled: a,
                    environment: l,
                    spaceId: s,
                    hideWorkspaceSectionTitle: u = !1,
                    workflowMode: f = "workflow"
                } = e, m = [], g = [], h = [], k = a ? "workflow" : "search", w = p(l, s);
                if (void 0 === w) return [{
                    id: "workspace-context",
                    sectionTitle: i.includesContextTitle,
                    items: [c(t, a)],
                    configType: k,
                    isLoading: !0
                }, {
                    id: "workspace-context-excludes",
                    sectionTitle: i.excludesContextTitle,
                    items: [],
                    configType: "markdown-chat"
                }];
                w.forEach(e => {
                    let {
                        clientModel: i,
                        modelMessage: a,
                        modelFamily: l,
                        markdownChat: s,
                        workflow: d,
                        customAgent: c,
                        isDisabled: u
                    } = e, p = "custom_agent" === f ? c : d;
                    if (s && h.push({
                            askMode: i,
                            title: t.formatMessage(n.model, {
                                modelName: a
                            }),
                            config: {
                                type: "markdown-chat",
                                model: i
                            },
                            beta: s.beta,
                            isDisabled: u
                        }), "workflow" === k && void 0 !== p) {
                        let e = {
                            askMode: p.finalModelName,
                            title: t.formatMessage(n.model, {
                                modelName: a
                            }),
                            config: {
                                type: "workflow",
                                model: p.finalModelName,
                                modelFromUser: !0
                            },
                            beta: p.beta,
                            isDisabled: u
                        };
                        "mystery" === l || (0, o(722371).Xk)(r, i) ? g.push(e) : m.push(e)
                    }
                });
                let v = [{
                    id: "workspace-context",
                    sectionTitle: u ? void 0 : i.includesContextTitle,
                    items: [c(t, a), ...d(m, l, s)],
                    configType: k
                }];
                return g.length > 0 && v.push({
                    id: "small-open-experimental",
                    sectionTitle: i.smallOrOpenSectionTitle,
                    items: d(g, l, s),
                    configType: k
                }), v.push({
                    id: "workspace-context-excludes",
                    sectionTitle: i.excludesContextTitle,
                    items: d(h, l, s),
                    configType: "markdown-chat"
                }), v
            }

            function f(e, t) {
                let n = p(e, t);
                if (void 0 !== n) return new Set(n.map(e => {
                    var t;
                    return null == (t = e.workflow) ? void 0 : t.finalModelName
                }).filter(o(722371).O9))
            }

            function p(e, t) {
                if (e && t) {
                    let n = o(295206).P.getData(e, {
                        spaceId: t
                    });
                    if (!n) return;
                    let i = [];
                    return n.forEach(e => {
                        let {
                            model: t,
                            modelMessage: n,
                            modelFamily: r,
                            markdownChat: a,
                            workflow: l,
                            customAgent: s,
                            isDisabled: d
                        } = e;
                        if (!a && !l && !s) return;
                        let c = {
                            clientModel: t,
                            modelMessage: n,
                            modelFamily: (0, o(443037).jb)(r) ? r : void 0,
                            isDisabled: d
                        };
                        if (a && (c.markdownChat = {
                                beta: a.beta
                            }), l) {
                            let e = l.finalModelName;
                            (0, o(722371).Xk)(o(426048).AGENT_MODEL_TYPES, e) && (c.workflow = {
                                finalModelName: e,
                                beta: l.beta
                            })
                        }
                        if (s) {
                            let e = s.finalModelName;
                            (0, o(722371).Xk)(o(426048).AGENT_MODEL_TYPES, e) && (c.customAgent = {
                                finalModelName: e,
                                beta: s.beta
                            })
                        }
                        i.push(c)
                    }), i
                }
                return []
            }
        },
        549253: (e, t, o) => {
            o.d(t, {
                A: () => r
            });
            var n = o(296540),
                i = o(474848);
            let r = function({
                onChange: e,
                onMenuDismiss: t,
                showButtons: n,
                title: r,
                value: a,
                disabled: l,
                dateFormat: s,
                icon: d,
                mode: c,
                focused: u
            }) {
                let p = (0, o(682985).uB)(void 0, o(560600).A);
                return (0, o(383953).l)(() => {
                    f({
                        value: a
                    }, p)
                }), o(986939).A.isMobile ? (0, i.jsx)(T, {
                    onChange: e,
                    onMenuDismiss: t,
                    showButtons: n,
                    title: r,
                    value: a,
                    disabled: l,
                    dateFormat: s,
                    icon: d,
                    mode: c,
                    store: p
                }) : (0, i.jsx)(S, {
                    onChange: e,
                    onMenuDismiss: t,
                    showButtons: n,
                    title: r,
                    value: a,
                    disabled: l,
                    dateFormat: s,
                    focused: u,
                    icon: d,
                    mode: c,
                    store: p
                })
            };

            function a() {
                return {
                    buttonMenuItem: {
                        color: o(632079).Tj.text.secondary
                    },
                    activeMenuItem: {
                        color: o(632079).Tj.text.primary
                    }
                }
            }

            function l(e) {
                e.preventDefault && e.preventDefault()
            }

            function s(e) {
                e({
                    starting: void 0,
                    ending: void 0
                })
            }

            function d() {
                return {
                    menuItem: {
                        minHeight: "initial",
                        paddingTop: o(986939).A.isMobile ? 12 : 4,
                        paddingBottom: o(986939).A.isMobile ? 12 : 4
                    },
                    icon: {
                        height: o(104509).Ev.sm,
                        width: o(104509).Ev.sm,
                        fill: "currentColor"
                    },
                    iconActiveDesktop: {
                        fill: "currentColor",
                        alignSelf: "flex-start",
                        marginTop: 2,
                        marginInlineEnd: 2
                    },
                    iconActiveDesktopWrapper: {
                        marginTop: 0
                    },
                    iconActiveMobile: {
                        fill: "currentColor",
                        marginTop: 1,
                        marginInlineEnd: 6
                    },
                    popup: {
                        paddingTop: 12,
                        paddingBottom: 8
                    },
                    menuItemTitleDesktop: {
                        width: "100%"
                    },
                    sectionMenuItem: {
                        display: "flex"
                    },
                    summary: {
                        display: "inline-flex"
                    }
                }
            }

            function c(e, t) {
                t || e.setState({ ...e.state,
                    isOpen: !0,
                    focus: "starting"
                })
            }

            function u(e, t, n, i, r) {
                let {
                    temporaryDateRange: a
                } = n.state;
                !(0, o(784626).a)(e) && (r || t(a), n.setState({ ...n.state,
                    isOpen: !1,
                    temporaryDateRange: {
                        starting: void 0,
                        ending: void 0
                    }
                }), i && i())
            }

            function f(e, t) {
                if (!e.error) return t.setState({ ...t.state,
                    temporaryDateRange: { ...t.state.temporaryDateRange,
                        ...e.value
                    }
                })
            }

            function p({
                disabled: e,
                icon: t,
                title: r,
                store: a
            }) {
                let l = (0, n.useCallback)(() => c(a, e), [a, e]);
                return (0, i.jsx)(o(95582).A, {
                    disabled: e,
                    focused: !1,
                    icon: (0, i.jsx)(o(16275).I, {
                        icon: t
                    }),
                    title: r,
                    onClick: l
                })
            }

            function m({
                disabled: e,
                title: t,
                value: r,
                dateFormat: a,
                onChange: l,
                store: u
            }) {
                let f = (0, o(109939).tz)(),
                    p = (0, n.useCallback)(() => c(u, e), [u, e]),
                    g = d(),
                    h = (0, i.jsxs)("div", {
                        style: g.summary,
                        children: [(0, i.jsx)(o(16275).I, {
                            icon: o(428602).Y,
                            size: "sm",
                            style: g.iconActiveMobile
                        }), (0, o(752533).t)(r, f, a)]
                    });
                return (0, i.jsx)(o(835187).A, {
                    disabled: e,
                    onClick: p,
                    onClickClear: () => s(l),
                    label: t,
                    title: h
                })
            }

            function g({
                disabled: e,
                value: t,
                dateFormat: r,
                focused: l,
                onChange: u,
                store: f
            }) {
                let p = (0, o(109939).tz)(),
                    m = (0, n.useCallback)(() => c(f, e), [f, e]),
                    h = d(),
                    k = a(),
                    w = { ...h.menuItem,
                        ...k.activeMenuItem
                    },
                    v = (0, o(752533).t)(t, p, r),
                    y = (0, i.jsx)(o(706893).A, {
                        onClick: () => s(u),
                        disabled: e
                    });
                return (0, i.jsx)(o(95582).A, {
                    focused: l,
                    disabled: e,
                    icon: (0, i.jsx)(o(16275).I, {
                        icon: o(428602).Y,
                        size: "sm",
                        style: h.iconActiveDesktop
                    }),
                    title: v,
                    right: y,
                    isTokenTitle: !0,
                    alignIconTop: !0,
                    onClick: m,
                    desktopTitleStyle: h.menuItemTitleDesktop,
                    desktopIconStyle: h.iconActiveDesktopWrapper,
                    style: w
                })
            }

            function h({
                disabled: e,
                title: t,
                icon: r,
                focused: l,
                mode: s,
                store: u
            }) {
                let f = (0, n.useCallback)(() => c(u, e), [u, e]),
                    p = d(),
                    m = a(),
                    g = { ...p.menuItem,
                        ...m.buttonMenuItem,
                        ...s === o(454860).C.Pill ? {
                            width: "fit-content",
                            border: "solid 1px",
                            paddingInlineStart: 0,
                            paddingInlineEnd: 0,
                            borderRadius: 20,
                            fontSize: 12
                        } : {}
                    };
                return (0, i.jsx)(o(95582).A, {
                    focused: l,
                    disabled: e,
                    icon: (0, i.jsx)(o(16275).I, {
                        icon: r
                    }),
                    title: t,
                    onClick: f,
                    style: g
                })
            }
            let k = {
                fill: "currentColor"
            };

            function w({
                disabled: e,
                value: t,
                title: r,
                store: a
            }) {
                let l = (0, n.useCallback)(() => c(a, e), [a, e]);
                return (0, i.jsx)(o(97726).n, {
                    on: !!(t.starting || t.ending),
                    icon: (0, i.jsx)(o(16275).I, {
                        icon: o(428602).Y,
                        size: "sm",
                        style: k
                    }),
                    title: (0, i.jsx)("span", {
                        children: r
                    }),
                    onClick: l
                })
            }
            let v = {
                marginInlineStart: "auto",
                marginInlineEnd: 8
            };

            function y({
                onChange: e,
                onMenuDismiss: t,
                showButtons: r,
                title: a,
                value: l,
                store: s
            }) {
                let d = (0, n.useCallback)(o => u(o, e, s, t, r), [e, s, t, r]),
                    c = (0, n.useCallback)(e => f(e, s), [s]),
                    p = (0, o(682985).K8)(() => (function(e, t) {
                        let {
                            temporaryDateRange: o
                        } = t.state;
                        return { ...e,
                            ...o
                        }
                    })(l, s), [s, l]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o(102870).A, {
                        title: a,
                        value: p,
                        onUpdate: c,
                        store: s,
                        onDismiss: d
                    }), r ? (0, i.jsxs)(o(4458).fI, {
                        justifyContent: "space-between",
                        width: "100%",
                        paddingInline: 10,
                        children: [(0, i.jsx)(o(988022).p, {
                            colorPalette: "gray",
                            style: v,
                            onClick: d,
                            children: (0, i.jsx)(o(109939).sA, {
                                defaultMessage: "Cancel",
                                id: "searchDateFilter.cancelButton.label"
                            })
                        }), (0, i.jsx)(o(912946).A, {
                            colorPalette: "blue",
                            onClick: () => e(s.state.temporaryDateRange),
                            children: (0, i.jsx)(o(109939).sA, {
                                defaultMessage: "Accept",
                                id: "searchDateFilter.acceptButton.label"
                            })
                        })]
                    }) : void 0]
                })
            }

            function S({
                mode: e,
                onChange: t,
                onMenuDismiss: r,
                showButtons: a,
                title: s,
                value: c,
                disabled: f,
                dateFormat: p,
                focused: m,
                icon: k,
                store: v
            }) {
                let T = (0, n.useCallback)(e => u(e, t, v, r, a), [t, v, r, a]),
                    I = (0, n.useCallback)(() => (0, i.jsx)(y, {
                        onChange: t,
                        onMenuDismiss: r,
                        showButtons: a,
                        title: s,
                        value: c,
                        store: v
                    }), [t, r, a, s, c, v]),
                    C = d(),
                    b = e === o(454860).C.Section,
                    M = b ? s : void 0,
                    x = e === o(454860).C.Section ? (0, i.jsx)(g, {
                        disabled: f,
                        value: c,
                        dateFormat: p,
                        focused: m,
                        onChange: t,
                        store: v
                    }) : e === o(454860).C.Button ? (0, i.jsx)(h, {
                        disabled: f,
                        title: s,
                        icon: k,
                        focused: m,
                        mode: e,
                        store: v
                    }) : e === o(454860).C.Pill ? (0, i.jsx)(w, {
                        disabled: f,
                        value: c,
                        title: s,
                        store: v
                    }) : void(0, o(722371).HB)(e),
                    A = (0, o(682985).K8)(() => v.state.isOpen, [v]);
                return (0, i.jsx)(o(543588).A, {
                    title: M,
                    marginAfter: b,
                    children: (0, i.jsx)(o(369064).N, {
                        debugName: "SearchDateFilter",
                        capture: A,
                        onUp: l,
                        onDown: l,
                        onEnter: l,
                        children: (0, i.jsx)(o(182718).zD, {
                            popupType: o(986939).A.isMobile ? o(423291).n.SlideUp : o(423291).n.Popup,
                            open: A,
                            content: I,
                            onDismiss: T,
                            placementToOrigin: "bottom",
                            alignmentToOrigin: "start",
                            keepFocus: !0,
                            style: C.popup,
                            children: x
                        })
                    })
                })
            }

            function T({
                mode: e,
                onChange: t,
                onMenuDismiss: r,
                showButtons: a,
                title: l,
                value: s,
                disabled: d,
                dateFormat: c,
                icon: f,
                store: g
            }) {
                let h = (0, o(682985).K8)(() => g.state.isOpen, [g]),
                    k = (0, n.useCallback)(e => u(e, t, g, r, a), [t, g, r, a]),
                    w = (0, n.useCallback)(() => (0, i.jsx)(y, {
                        onChange: t,
                        onMenuDismiss: r,
                        showButtons: a,
                        title: l,
                        value: s,
                        store: g
                    }), [t, r, a, l, s, g]),
                    v = e === o(454860).C.Section ? (0, i.jsx)(m, {
                        disabled: d,
                        title: l,
                        value: s,
                        dateFormat: c,
                        onChange: t,
                        store: g
                    }) : (0, i.jsx)(p, {
                        disabled: d,
                        icon: f,
                        title: l,
                        store: g
                    });
                return (0, i.jsx)(o(182718).zD, {
                    popupType: o(423291).n.SlideUp,
                    open: h,
                    content: w,
                    onDismiss: k,
                    preventScaleTransition: !0,
                    children: v
                })
            }
        },
        862451: (e, t, o) => {
            function n(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    clientStore: i,
                    userStore: r,
                    transcript: a,
                    threadId: l,
                    initialAgentActions: s,
                    analyticsArgs: d
                } = e, c = (0, o(330942).f_)(a), {
                    serverCommitResult: u,
                    performResult: f
                } = (0, o(377796).createAndCommit)({
                    userAction: "WorkflowActions.addTranscriptToNewThreadAndRun",
                    environment: t,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: n.id
                    },
                    perform: e => (0, o(757688).aP)({
                        environment: t,
                        spaceStore: n,
                        userStore: r,
                        transaction: e,
                        transcript: a,
                        threadId: l,
                        threadType: (null == c ? void 0 : c.type) ? ? "workflow"
                    })
                });
                return (0, o(757688).WE)({
                    environment: t,
                    clientStore: i,
                    threadStore: f,
                    waitBeforeSending: u,
                    analyticsArgs: d,
                    sendPatchResponse: !1,
                    initialAgentActions: s
                }), f
            }
            async function i(e) {
                let {
                    environment: t,
                    parentStore: n,
                    userStep: i,
                    onThreadChange: r
                } = e, a = o(674880).defaultInferenceContextStore.state;
                if (!a) throw Error("No inference context");
                let {
                    spaceStore: l
                } = a, {
                    performResult: s,
                    serverCommitResult: d
                } = (0, o(377796).createAndCommit)({
                    userAction: "SetupGenerator.handlePromptSubmit",
                    environment: t,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: l.id
                    },
                    perform: e => (function(e) {
                        let {
                            environment: t,
                            transaction: n,
                            parentStore: i
                        } = e, r = o(728372).AppStoreSidebarSpaceStore.state, a = o(728372).AppStoreSidebarSpaceViewStore.state;
                        if (!r || !a) throw Error("No current space");
                        let l = o(124937).Wv({
                            environment: t,
                            type: "collection_view_page",
                            transaction: n,
                            inMemoryRecordCache: r.inMemoryRecordCache
                        });
                        return (0, o(351418).Ls)({
                            environment: t,
                            parentStore: i ? ? r,
                            collectionViewBlockStore: l,
                            transaction: n,
                            appendOrPrepend: "append",
                            spaceViewStore: a
                        }), {
                            workflowStore: function(e) {
                                let {
                                    environment: t,
                                    store: n,
                                    transaction: i
                                } = e;
                                return function(e) {
                                    let {
                                        environment: t,
                                        store: n,
                                        transaction: i,
                                        workflowData: r
                                    } = e, a = o(124937).vt({
                                        environment: t,
                                        table: o(43296).C,
                                        args: {
                                            id: (0, o(295447).Z1)({
                                                environment: t,
                                                table: o(43296).C,
                                                spaceId: n.getSpaceId()
                                            }),
                                            data: r,
                                            parentPointer: {
                                                table: o(682956).ev,
                                                id: n.id
                                            },
                                            space_id: n.getSpaceId()
                                        },
                                        inMemoryRecordCache: n.inMemoryRecordCache,
                                        transaction: i
                                    });
                                    return (0, o(715144).z)({
                                        stores: [n],
                                        update: {
                                            workflow_id: a.id
                                        },
                                        transaction: i
                                    }), a
                                }({
                                    environment: t,
                                    transaction: i,
                                    store: n,
                                    workflowData: {
                                        modules: []
                                    }
                                })
                            }({
                                environment: t,
                                store: l,
                                transaction: n
                            }),
                            collectionViewBlockStore: l
                        }
                    })({
                        environment: t,
                        transaction: e,
                        parentStore: n
                    })
                });
                await d;
                let {
                    collectionViewBlockStore: c
                } = s, u = function(e) {
                    let {
                        environment: t,
                        inferenceContext: n,
                        addSteps: i = [],
                        config: r
                    } = e;
                    return (0, o(674880).Xd)({
                        environment: t,
                        inferenceContext: n,
                        config: r && "workflow" !== r.type ? r : (0, o(922900).getWorkflowAgentConfig)({
                            environment: t,
                            ...r
                        }),
                        addSteps: i,
                        surface: "workflows"
                    })
                }({
                    environment: t,
                    inferenceContext: a,
                    store: c,
                    addSteps: [i]
                }), f = (0, o(225900).N)({
                    environment: t,
                    spaceStore: l,
                    transcript: u
                });
                null == r || r(f)
            }
            async function r(e) {
                let {
                    environment: t,
                    clientStore: n,
                    message: i,
                    configs: r
                } = e, a = (0, o(328765).S)();
                if (!a) throw Error("No current space store");
                let l = t.currentUser.id;
                if (!l) throw Error("No current user");
                if ((0, o(247438).q4_)(i).trim().length < 6) return;
                let s = r.filter(e => o(180139)._z.includes(e.type)),
                    d = await t.api.callStreamApi({
                        eventName: "runInferenceTranscript",
                        environment: t,
                        data: {
                            transcript: [{
                                id: (0, o(295447).Z1)({
                                    environment: t,
                                    table: o(832375).mSw,
                                    spaceId: a.id
                                }),
                                type: "config",
                                value: {
                                    type: "route-inference-transcript",
                                    configs: s
                                }
                            }, {
                                id: (0, o(295447).Z1)({
                                    environment: t,
                                    table: o(832375).mSw,
                                    spaceId: a.id
                                }),
                                type: "user",
                                value: i,
                                userId: l
                            }],
                            traceId: (0, o(4962).Ay)(),
                            spaceId: a.id,
                            generateTitle: !1,
                            isUserInAnySalesAssistedSpace: (0, o(598132).h0)(t),
                            isSpaceSalesAssisted: (0, o(598132).lM)(t, a.id)
                        },
                        headers: (0, o(115118).WS)({
                            spaceId: a.id
                        })
                    });
                if ("failed" === d.type) throw d.error;
                if (o(331653).hS.is(d.data)) {
                    for await (let e of d.data) if ("config" === e.type) n.state.userSelectedConfig || n.setState({ ...n.state,
                        configForNewTranscripts: e.value
                    });
                    else if ("error" === e.type) throw e.message
                }
            }

            function a(e) {
                var t;
                let {
                    environment: n,
                    oldThreadStore: i,
                    newThreadStore: r,
                    openUsingQuickSearchHandler: a,
                    openInNewTab: l,
                    createdSource: s,
                    resetLocalThreadStore: d,
                    isAgent: u,
                    initialAgentActions: f
                } = e, p = (null == r ? void 0 : r.id) || (u ? o(548124).NEW_CHAT_THREAD_ID : void 0), m = null == r ? void 0 : r.getConfig(), g = (0, o(330942).sQ)(m);
                (null == m ? void 0 : m.type) === "search" ? (0, o(850552).By)({
                    sessionId: void 0,
                    searchSessionId: g,
                    threadId: p,
                    environment: n,
                    createdSource: s,
                    isAgent: !1
                }) : (null == m ? void 0 : m.type) === "workflow" && null != f && f.includes("injectSearchTool") && (0, o(850552).By)({
                    sessionId: void 0,
                    searchSessionId: g,
                    threadId: p,
                    environment: n,
                    createdSource: s,
                    isAgent: !0
                }), p && (null == m ? void 0 : m.type) === "researcher" && ((null == r ? void 0 : r.getTranscript()) || []).some(e => "researcher-report" === e.type) && o(274498).MU({
                    environment: n,
                    researchModeThreadId: p,
                    source: "chat_history"
                });
                let h = n.device.isElectron,
                    k = n.RouterStore.state.route,
                    w = "chat" === k.name && k.peekViewBlockId && ("settings" === k.workflowViewType || "activity" === k.workflowViewType) ? {
                        workflowViewType: k.workflowViewType,
                        peekViewBlockId: k.peekViewBlockId,
                        peekMode: k.peekMode
                    } : void 0,
                    v = "chat" === k.name && o(273061).S.state.open && o(273061).S.state.agentId && o(273061).S.state.mode ? {
                        workflowViewType: o(273061).S.state.mode,
                        peekViewBlockId: o(273061).S.state.agentId,
                        peekMode: k.peekMode
                    } : void 0,
                    y = w ? ? v,
                    S = c({
                        environment: n,
                        threadId: p,
                        spaceId: null == (t = o(728372).AppStoreSidebarSpaceStore.state) ? void 0 : t.id,
                        config: null == i ? void 0 : i.getConfig(),
                        additionalQueryParams: y ? {
                            [o(737869).CS]: y.workflowViewType,
                            [o(737869).ZI]: (0, o(4962).Xw)(y.peekViewBlockId),
                            ...y.peekMode ? {
                                [o(737869).fT]: y.peekMode
                            } : {}
                        } : void 0
                    });
                if ("chat" !== k.name && "ai" !== k.name && o(562733).zI.setState({ ...o(562733).zI.state,
                        fullPageChatSourceUrl: window.location.href
                    }), h && (null == d || d()), a && h) return void(0, o(916187).N)(S);
                if (l && h) {
                    (0, o(96351).B)({
                        makeTabActive: !0,
                        url: S,
                        position: "end",
                        openInNew: "tab",
                        environment: n
                    }), o(635257).st({
                        reset: !1
                    });
                    return
                }(0, o(79266).navigate)({
                    environment: n,
                    url: S,
                    ...l ? {
                        openInNew: "tab",
                        makeTabActive: !1
                    } : {}
                })
            }

            function l(e) {
                let {
                    environment: t,
                    query: r,
                    clientStore: l,
                    config: s,
                    additionalSteps: d = [],
                    openInNewTab: u,
                    openUsingQuickSearchHandler: f,
                    surface: p,
                    suggestedPrompt: m,
                    initialAgentActions: g
                } = e, h = o(674880).defaultInferenceContextStore.state;
                if (!h) throw Error("No inference context");
                let {
                    spaceStore: k,
                    userStore: w
                } = h;
                (0, o(757688).Wq)({
                    clientStore: l,
                    environment: t
                });
                let v = s.type;
                if (u && ("search" === v || "workflow" === v)) return void
                function(e) {
                    var t;
                    let {
                        environment: n,
                        config: i,
                        query: r,
                        openUsingQuickSearchHandler: a,
                        initialAgentActions: l
                    } = e, s = n.device.isElectron, d = c({
                        environment: n,
                        threadId: void 0,
                        spaceId: null == (t = o(728372).AppStoreSidebarSpaceStore.state) ? void 0 : t.id,
                        config: i,
                        query: r,
                        forceRouteToChat: !0,
                        initialAgentActions: l
                    });
                    if (a && s) return (0, o(916187).N)(d);
                    if (s) {
                        (0, o(96351).B)({
                            makeTabActive: !0,
                            url: d,
                            position: "end",
                            openInNew: "tab",
                            environment: n
                        }), o(635257).st({
                            reset: !1
                        });
                        return
                    }(0, o(79266).navigate)({
                        environment: n,
                        url: d,
                        openInNew: "tab",
                        makeTabActive: !1
                    })
                }({
                    environment: t,
                    config: s,
                    query: r,
                    openUsingQuickSearchHandler: f,
                    initialAgentActions: g
                });
                let y = (0, o(674880).Kf)({
                        environment: t,
                        spaceStore: k,
                        userStore: w,
                        value: r
                    }),
                    S = (0, o(909212).re)();
                if ("workflow" !== s.type || S) {
                    let e = (0, o(674880).Xd)({
                            environment: t,
                            config: s,
                            inferenceContext: h,
                            addSteps: [...d, y],
                            surface: p
                        }),
                        i = n({
                            environment: t,
                            spaceStore: k,
                            clientStore: l,
                            userStore: w,
                            transcript: e,
                            initialAgentActions: g,
                            analyticsArgs: {
                                suggestedPrompt: m
                            }
                        });
                    return a({
                        environment: t,
                        oldThreadStore: void 0,
                        newThreadStore: i,
                        openInNewTab: u,
                        openUsingQuickSearchHandler: f,
                        initialAgentActions: g
                    }), i
                }
                i({
                    environment: t,
                    parentStore: k,
                    userStep: y
                })
            }

            function s(e) {
                return (0, o(909212).re)() ? d(e) : {
                    type: "search",
                    scopeForNextSearch: {
                        type: "everything"
                    }
                }
            }

            function d(e) {
                var t;
                let {
                    spaceId: n,
                    searchScopes: i,
                    environment: r
                } = e, a = n ? (null == (t = o(57168).UserChatPreferenceLocalStorageStore.getState()) ? void 0 : t[n]) ? ? {} : {};
                if (n && a.model) {
                    let e = o(218744).default.isStatsigEnabledAndInitialized(),
                        t = "on" === o(218744).default.getEligibleGroup({
                            experimentId: o(432155).Yc,
                            defaultGroup: "control"
                        }),
                        i = (0, o(432155).gg)({
                            userChatPreference: a,
                            isStatsigInitialized: e,
                            shouldResetUserSelectedModel: t
                        });
                    i && ((0, o(432155).Oq)(n, i), a = { ...a,
                        ...i
                    })
                }
                let {
                    webEnabled: l,
                    computerEnabled: s,
                    yoloModeEnabled: d,
                    model: c,
                    readOnlyModeEnabled: u
                } = a, f = c && (0, o(722371).Xk)(o(426048).AGENT_MODEL_TYPES, c) ? c : void 0;
                if (n && f && !o(218744).default.checkGate({
                        gateName: "agent_model_picker"
                    })) {
                    let e = (0, o(317606).getAvailableWorkflowAgentModels)(r, n);
                    e && !e.has(f) && ((0, o(432155).Oq)(n, {
                        model: void 0
                    }), f = void 0)
                }
                return (0, o(922900).getWorkflowAgentConfig)({
                    searchScopes: i,
                    ...void 0 !== l && {
                        useWebSearch: l
                    },
                    ...void 0 !== s && {
                        useComputer: s
                    },
                    ...void 0 !== d && {
                        yoloMode: d
                    },
                    ...void 0 !== u && {
                        useReadOnlyMode: u
                    },
                    model: f,
                    environment: r,
                    spaceId: n
                })
            }

            function c(e) {
                let {
                    environment: t,
                    threadId: n,
                    spaceId: i,
                    config: r,
                    query: a,
                    forceRouteToChat: l,
                    initialAgentActions: d,
                    additionalQueryParams: c
                } = e, u = t.device.isElectron, f = {};
                n && (f[o(737869).P5] = (0, o(4962).Xw)(n)), u && i && (f.spaceId = i), a && (f[o(737869).ah] = encodeURIComponent(JSON.stringify(a))), d && d.length > 0 && (f[o(737869).U] = d.join(","));
                let p = n && n !== o(548124).NEW_CHAT_THREAD_ID;
                if (!p) {
                    let e = s({
                        spaceId: i,
                        environment: t
                    });
                    r && (0, o(271452).bD)(r.type) && (e = r), f[o(737869).q8] = encodeURIComponent(JSON.stringify(e))
                }
                if (!p && !l) return (0, o(758654).Gm)({
                    url: o(168962).JZ.ai,
                    query: f
                });
                if (c)
                    for (let [e, t] of Object.entries(c)) void 0 !== t && (f[e] = t);
                return (0, o(758654).Gm)({
                    url: o(168962).JZ.chat,
                    query: f
                })
            }

            function u(e) {
                let {
                    environment: t,
                    config: i,
                    query: r,
                    surface: l = "search_modal",
                    initialAgentActions: s
                } = e, d = o(674880).defaultInferenceContextStore.state;
                if (!d) throw Error("No inference context");
                let {
                    spaceStore: c,
                    userStore: u
                } = d, f = (0, o(674880).Kf)({
                    environment: t,
                    spaceStore: c,
                    userStore: u,
                    value: r
                }), p = (0, o(674880).Xd)({
                    environment: t,
                    inferenceContext: d,
                    config: i,
                    addSteps: [f],
                    surface: l
                }), m = n({
                    environment: t,
                    spaceStore: c,
                    clientStore: o(57168).defaultClientAIChatStore,
                    userStore: u,
                    transcript: p,
                    initialAgentActions: s
                });
                a({
                    environment: t,
                    newThreadStore: m,
                    oldThreadStore: void 0
                })
            }
            o.r(t), o.d(t, {
                createAndNavigateToInferenceTranscriptWithConfig: () => u,
                createDefaultNewThreadConfigFromUserPreference: () => d,
                createInferenceTranscriptChatRoute: () => c,
                getDefaultNewThreadConfigFromUserPreference: () => s,
                isConfigTransferable: () => p,
                navigateAndStartInferenceTranscript: () => l,
                navigateToInferenceTranscriptRoute: () => a,
                routeInferenceTranscript: () => r
            }), o(16280), o(898992), o(354520), o(737550);
            let f = ["workflow", "researcher", "markdown-chat"];

            function p(e) {
                var t;
                let {
                    config: n,
                    agentEnabled: i
                } = e;
                return !n || !i || (t = n.type, (0, o(722371).Xk)(f, t))
            }
        }
    }
]);