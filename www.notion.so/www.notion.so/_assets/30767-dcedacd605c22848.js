"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [30767], {
        30767: (e, t, r) => {
            r.r(t), r.d(t, {
                AgentThreadHistoryMenu: () => y
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(803949), r(581454), r(737550);
            var a = r(296540),
                i = () => r(174148),
                n = () => r(832375),
                d = () => r(552923);
            class s extends d().u {
                monitoringInterval = null;
                transcripts;
                constructor() {
                    super({
                        getInitialState: () => ({
                            completedThreads: new Set,
                            userStartedThreads: new Set,
                            threadInferenceIds: new Map,
                            threadInferenceLeaseExpirations: new Map,
                            currentThreadId: void 0
                        }),
                        effect: () => (this.startMonitoring(), () => {
                            this.stopMonitoring()
                        }),
                        debugName: "ThreadGeneratingIndicatorStore"
                    })
                }
                startMonitoring() {
                    this.monitoringInterval || (this.checkForCompletions(), this.monitoringInterval = setInterval(() => {
                        this.checkForCompletions()
                    }, 1e3))
                }
                stopMonitoring() {
                    this.monitoringInterval && (clearInterval(this.monitoringInterval), this.monitoringInterval = null)
                }
                checkForCompletions() {
                    r(363256).e.withListenerIgnored(() => {
                        let e = (0, r(328765).S)();
                        if (!e || !this.transcripts) return;
                        let t = new Map,
                            a = new Map,
                            d = new Set(this.state.userStartedThreads);
                        this.transcripts.forEach(r => {
                            let s = i().E.createChildStore(e, {
                                    table: n().Toz,
                                    id: r.id,
                                    spaceId: e.id
                                }),
                                l = s.getCurrentInferenceId(),
                                o = s.getCurrentInferenceLeaseExpiration();
                            t.set(r.id, l), a.set(r.id, o ? ? void 0);
                            let u = this.state.threadInferenceIds.get(r.id);
                            void 0 !== l && void 0 === u && d.add(r.id), void 0 !== u && void 0 === l && this.markThreadCompleted(r.id)
                        }), this.setState({ ...this.state,
                            threadInferenceIds: t,
                            threadInferenceLeaseExpirations: a,
                            userStartedThreads: d
                        })
                    })
                }
                setMonitoringData(e) {
                    this.transcripts = e, this.monitoringInterval && this.checkForCompletions()
                }
                markThreadCompleted(e) {
                    if (this.state.userStartedThreads.has(e) && e !== this.state.currentThreadId) {
                        let t = new Set(this.state.completedThreads);
                        t.add(e), this.setState({ ...this.state,
                            completedThreads: t
                        })
                    }
                }
                markThreadVisited(e) {
                    let t = new Set(this.state.completedThreads);
                    t.delete(e), this.setState({ ...this.state,
                        completedThreads: t
                    })
                }
                setCurrentThreadId(e) {
                    let t = new Set(this.state.completedThreads);
                    e && t.delete(e), this.setState({ ...this.state,
                        currentThreadId: e,
                        completedThreads: t
                    })
                }
                isThreadGenerating(e) {
                    if (void 0 === this.state.threadInferenceIds.get(e)) return !1;
                    let t = this.state.threadInferenceLeaseExpirations.get(e);
                    return void 0 !== t && Date.now() < t
                }
                hasThreadCompleted(e) {
                    return this.state.completedThreads.has(e)
                }
                getCompletedThreadIds() {
                    return Array.from(this.state.completedThreads)
                }
            }
            let l = new s;
            (0, r(202146).exposeDebugValue)("threadGeneratingIndicatorStore", l);
            var o = r(474848);
            let u = {
                display: "inline-flex",
                alignItems: "center"
            };

            function h() {
                return (0, o.jsx)(r(654979).A, {
                    initial: {
                        scale: 0,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    config: {
                        duration: 300,
                        timingFunction: "ease-out"
                    },
                    style: u,
                    children: (0, o.jsx)(r(16275).I, {
                        icon: r(724336).K,
                        colorVariant: "accentPrimary",
                        colorPalette: "blue"
                    })
                })
            }
            let c = {
                scrollingSquiggle: {
                    width: 14,
                    height: 16 / 24 * 14,
                    opacity: "0.4",
                    transform: "scale(1.5)"
                },
                dotIcon: {
                    transform: "scale(2)"
                }
            };

            function p(e) {
                let {
                    chatItem: t,
                    isThreadGenerating: a,
                    isCurrentThread: i,
                    isNotCurrentThreadAndHasFinishedGenerating: n
                } = e, d = (0, r(83208).X)("agent_conversation_list_generation_status");
                switch ((0, r(682985).K8)(() => "thread" !== t.type ? "none" : i(t.id) ? "isCurrentThread" : d ? a(t.id) ? "threadGenerating" : n(t.id) ? "threadCompleted" : "none" : "none", [t.id, t.type, a, i, n, d])) {
                    case "isCurrentThread":
                        return (0, o.jsx)(r(16275).I, {
                            icon: r(98702).checkmarkFillIcon,
                            size: "xs"
                        });
                    case "threadGenerating":
                        return (0, o.jsx)(r(265035).ScrollingSquiggle, {
                            style: c.scrollingSquiggle
                        });
                    case "threadCompleted":
                        return (0, o.jsx)(r(16275).I, {
                            icon: r(724336).K,
                            colorVariant: "accentPrimary",
                            colorPalette: "blue",
                            size: "xs",
                            style: c.dotIcon
                        });
                    default:
                        return null
                }
            }
            let g = (0, r(109939).YK)({
                    new_chat_title: {
                        id: "WorkflowEditorTranscript.historyDropdown.newChatTitle",
                        defaultMessage: "New AI chat"
                    },
                    previousChats: {
                        id: "AgentThreadHistoryMenu.previousChats",
                        defaultMessage: "Previous chats"
                    },
                    enableWriterDebug: {
                        id: "AgentThreadHistoryMenu.enableWriterDebug",
                        defaultMessage: "Show Writer chats"
                    },
                    disableWriterDebug: {
                        id: "AgentThreadHistoryMenu.disableWriterDebug",
                        defaultMessage: "Hide Writer chats"
                    }
                }),
                f = {
                    loadingStateContainer: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        gap: 8,
                        padding: 32
                    },
                    clockIcon: {
                        opacity: .2
                    },
                    threadTitleInDropdown: {
                        maxWidth: "250px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        flexShrink: 1,
                        minWidth: 0
                    },
                    writerIcon: {
                        fill: r(632079).Tj.icon.secondary,
                        width: 14,
                        height: 14
                    },
                    writerIconEnabled: {
                        fill: r(632079).Tj.yellow.icon.primary,
                        width: 14,
                        height: 14
                    },
                    titleText: {
                        minWidth: 0
                    }
                },
                y = (0, a.memo)(function(e) {
                    let {
                        buttonShape: t = "roundrect",
                        workflowId: d,
                        onThreadChange: s,
                        parentStore: u,
                        threadStore: c,
                        threadStoreState: y,
                        types: m,
                        aiChatFeatureController: v
                    } = e, T = (0, r(109939).tz)(), I = (0, r(533992).v3)(), w = (0, r(533992).Y0)(), C = (0, r(876252).$)(), [S, x] = a.useState(!1), [b, M] = a.useState(!1), k = (0, r(83208).X)("agent_conversation_list_generation_status"), j = (0, r(682985).K8)(() => {
                        var e;
                        if ("new" === y) return T.formatMessage(g.new_chat_title);
                        let t = null == c || null == (e = c.getData()) ? void 0 : e.title;
                        return t || T.formatMessage(g.new_chat_title)
                    }, [T, c, y]), _ = "pill" === t, A = (0, r(682985).K8)(() => (0, r(966980).Yu)(u) ? u : (0, r(974410).f)(u), [u]), {
                        status: D,
                        value: N,
                        isLoadingMore: K,
                        loadMore: P,
                        hasMore: B
                    } = (0, r(352118).s)({
                        parentStore: u,
                        threadStore: c,
                        workflowId: d,
                        enableInfiniteScroll: !0,
                        pageSize: 50,
                        userId: null == C ? void 0 : C.id,
                        types: m,
                        shouldListenForNewThreads: !0,
                        includeWriterChats: S
                    }), E = function(e) {
                        let {
                            transcripts: t,
                            currentSessionId: i
                        } = e;
                        (0, a.useEffect)(() => {
                            l.setMonitoringData(t)
                        }, [t]), (0, a.useEffect)(() => {
                            l.setCurrentThreadId(i)
                        }, [i]);
                        let n = (0, r(682985).K8)(() => e => l.isThreadGenerating(e), []),
                            d = (0, a.useCallback)(e => i === e, [i]);
                        return {
                            isThreadGenerating: n,
                            isCurrentThread: d,
                            hasThreadCompletedAndIsNotCurrent: (0, r(682985).K8)(() => e => !!(i && i !== e && l.hasThreadCompleted(e)), [i]),
                            areAnyThreadsCompletedAndNotCurrent: (0, r(682985).K8)(() => !!i && l.getCompletedThreadIds().some(e => e !== i), [i])
                        }
                    }({
                        transcripts: N,
                        currentSessionId: null != c && c.id ? c.id : void 0
                    }), z = (0, r(960253).I)(() => ({
                        chevronDownIcon: {
                            width: (null == v ? void 0 : v.supportsTallChatHeader) ? r(104509).lD.sm : r(104509).Ev.sm,
                            height: (null == v ? void 0 : v.supportsTallChatHeader) ? r(104509).lD.sm : r(104509).Ev.sm,
                            marginInlineStart: 6 * !E.areAnyThreadsCompletedAndNotCurrent,
                            flexShrink: 0
                        },
                        threadTitleButton: {
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            ..._ ? {
                                borderRadius: 50,
                                paddingInline: 8
                            } : {
                                paddingInline: 6
                            }
                        }
                    }), [_, null == v ? void 0 : v.supportsTallChatHeader, E.areAnyThreadsCompletedAndNotCurrent]), W = (0, a.useCallback)(() => (0, o.jsx)("div", {
                        style: f.loadingStateContainer,
                        children: (0, o.jsx)(r(517334).k, {})
                    }), []), H = (0, a.useCallback)(() => (0, o.jsx)("div", {
                        style: f.loadingStateContainer,
                        children: (0, o.jsx)(r(16275).I, {
                            icon: r(772683).clockIcon,
                            size: 24,
                            style: f.clockIcon
                        })
                    }), []), V = (0, a.useCallback)(() => {
                        x(e => !e)
                    }, []), L = (0, r(682985).K8)(() => {
                        if (!A || !(null != N && N.length)) return new Set;
                        let e = new Set;
                        for (let t of N) "writer" === i().E.createChildStore(A, {
                            table: n().Toz,
                            id: t.id,
                            spaceId: A.id
                        }).getCreatedSource() && e.add(t.id);
                        return e
                    }, [A, N]), F = S ? T.formatMessage(g.disableWriterDebug) : T.formatMessage(g.enableWriterDebug), q = a.useMemo(() => !!(null != N && N.length) && (!!S || N.some(e => !L.has(e.id))), [S, N, L]);
                    a.useEffect(() => {
                        d && !S && "pending" !== D && null != N && N.length && !q && P && B && !K && P()
                    }, [d, S, D, N, q, P, B, K]);
                    let G = (0, a.useCallback)(e => {
                            if ("pending" === D) return [{
                                key: "loading",
                                render: e => (0, o.jsx)(r(844565).A, { ...e,
                                    title: T.formatMessage(g.previousChats),
                                    shouldShowBottomDivider: !1,
                                    extraPadding: !0,
                                    topBorder: !1
                                }),
                                items: [{
                                    key: "loading-item",
                                    action: () => {},
                                    render: () => (0, o.jsx)(W, {})
                                }]
                            }];
                            let t = [];
                            if (N && N.forEach(e => {
                                    t.push({
                                        id: e.id,
                                        title: e.title || T.formatMessage(g.new_chat_title),
                                        createdTime: new Date(e.created_at).getTime(),
                                        updatedTime: e.updated_at ? new Date(e.updated_at).getTime() : void 0,
                                        type: "thread",
                                        threadType: e.type
                                    })
                                }), t.sort((e, t) => (0, r(960270).X)(e, t)), 0 === t.length) return [{
                                key: "empty",
                                render: e => (0, o.jsx)(r(844565).A, { ...e,
                                    title: T.formatMessage(g.previousChats),
                                    extraPadding: !0,
                                    topBorder: !1
                                }),
                                items: [{
                                    key: "empty-item",
                                    action: () => {},
                                    render: () => (0, o.jsx)(H, {})
                                }]
                            }];
                            let a = [],
                                d = !0,
                                u = t.reduce((e, t) => {
                                    let a, i = new Date((0, r(960270).m)({
                                            createdTime: t.createdTime,
                                            updatedTime: t.updatedTime
                                        })),
                                        n = new Date;
                                    n.setHours(0, 0, 0, 0);
                                    let d = new Date(n);
                                    d.setDate(d.getDate() - 1);
                                    let s = new Date(n);
                                    s.setDate(s.getDate() - 7);
                                    let l = new Date(n);
                                    return l.setDate(l.getDate() - 30), e[a = i >= n ? "today" : i >= d ? "yesterday" : i >= s ? "previous7days" : i >= l ? "previous30days" : "older"] || (e[a] = []), e[a].push(t), e
                                }, {});
                            return [{
                                key: "today",
                                label: T.formatMessage({
                                    id: "aiInferenceTranscript.today",
                                    defaultMessage: "Today"
                                })
                            }, {
                                key: "yesterday",
                                label: T.formatMessage({
                                    id: "aiInferenceTranscript.yesterday",
                                    defaultMessage: "Yesterday"
                                })
                            }, {
                                key: "previous7days",
                                label: T.formatMessage({
                                    id: "aiInferenceTranscript.previous7days",
                                    defaultMessage: "Previous 7 days"
                                })
                            }, {
                                key: "previous30days",
                                label: T.formatMessage({
                                    id: "aiInferenceTranscript.previous30days",
                                    defaultMessage: "Previous 30 days"
                                })
                            }, {
                                key: "older",
                                label: T.formatMessage({
                                    id: "aiInferenceTranscript.older",
                                    defaultMessage: "Older"
                                })
                            }].forEach(({
                                key: t,
                                label: h
                            }) => {
                                let c = u[t];
                                if (!(null != c && c.length)) return;
                                let y = S ? c : c.filter(e => "thread" !== e.type || !L.has(e.id));
                                if (0 === y.length) return;
                                let m = !d;
                                d = !1, a.push({
                                    key: `history-${t}`,
                                    render: e => (0, o.jsx)(r(844565).A, { ...e,
                                        title: h,
                                        right: void 0,
                                        topBorder: m,
                                        extraPadding: !0
                                    }),
                                    items: y.map(t => ({
                                        key: t.id,
                                        action: () => {
                                            if (A && "thread" === t.type) {
                                                l.markThreadVisited(t.id), r(305721).trackAgentChatHistoryItemClicked({
                                                    threadId: t.id,
                                                    from: "agent_chat"
                                                });
                                                let a = i().E.createChildStore(A, {
                                                    table: n().Toz,
                                                    id: t.id,
                                                    spaceId: A.id
                                                });
                                                "workflow" === t.threadType || (0, r(627179).pN)(t.threadType) || w.isPhone ? (s({
                                                    newThreadStore: a
                                                }), e.close()) : (0, r(862451).navigateToInferenceTranscriptRoute)({
                                                    environment: I,
                                                    oldThreadStore: void 0,
                                                    newThreadStore: a
                                                })
                                            }
                                        },
                                        render: e => {
                                            let a = "string" == typeof t.title ? t.title : T.formatMessage(g.new_chat_title),
                                                i = "thread" === t.type && L.has(t.id);
                                            return (0, o.jsx)(r(95582).A, { ...e,
                                                title: i ? (0, o.jsxs)(r(4458).fI, {
                                                    alignItems: "center",
                                                    gap: 6,
                                                    minWidth: 0,
                                                    children: [(0, o.jsx)(r(111010).D, {
                                                        styleKey: "bodyMedium",
                                                        style: f.titleText,
                                                        children: a
                                                    }), (0, o.jsx)(r(746434).E, {
                                                        content: "Writer",
                                                        color: "gray"
                                                    })]
                                                }) : a,
                                                right: (0, o.jsx)(p, {
                                                    chatItem: t,
                                                    isThreadGenerating: E.isThreadGenerating,
                                                    isCurrentThread: E.isCurrentThread,
                                                    isNotCurrentThreadAndHasFinishedGenerating: E.hasThreadCompletedAndIsNotCurrent
                                                })
                                            })
                                        }
                                    }))
                                })
                            }), a
                        }, [D, N, A, W, H, !1, S, L, V, b, F, s, T, I, w.isPhone, E]),
                        X = (0, a.useCallback)(() => {
                            P && B && !K && P()
                        }, [P, B, K]),
                        O = (0, a.useCallback)(() => {
                            (0, r(471e3).I)({
                                environment: I
                            })
                        }, [I]);
                    return j ? (0, o.jsx)(r(656252).A, {
                        popupType: (null == v ? void 0 : v.adaptiveMenuPopupType) ? ? r(423291).n.Popup,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        bottomSheetDisableDrag: !1,
                        content: e => (0, o.jsxs)(r(747369).A, {
                            menuType: (null == v ? void 0 : v.adaptiveMenuType) ? ? r(649476).gu.Popup,
                            hideMobileTopbar: !0,
                            width: (null == v ? void 0 : v.adaptiveMenuType) === r(649476).gu.Modal ? void 0 : 300,
                            children: [(0, o.jsx)(r(558045).A, {
                                type: r(558045).O.Vertical,
                                initialFocus: void 0,
                                sections: G(e)
                            }), K ? (0, o.jsx)("div", {
                                style: f.loadingStateContainer,
                                children: (0, o.jsx)(r(517334).k, {
                                    size: "default"
                                })
                            }) : void 0, (0, o.jsx)(r(775070).A, {
                                onLoadMore: X,
                                loading: !!K,
                                loadMoreOffsetThreshold: 100
                            })]
                        }),
                        children: e => (0, o.jsxs)(r(988022).p, {
                            "aria-label": "history",
                            ...e,
                            onClick: t => {
                                var r;
                                O(), null == (r = e.onClick) || r.call(e, t)
                            },
                            size: "md",
                            style: z.threadTitleButton,
                            children: [(0, o.jsx)(r(111010).D, {
                                styleKey: "bodyRegular",
                                style: f.threadTitleInDropdown,
                                children: j
                            }), k && E.areAnyThreadsCompletedAndNotCurrent ? (0, o.jsx)(h, {}) : void 0, (0, o.jsx)(r(16275).I, {
                                icon: r(595453).arrowChevronSingleDownSmallIcon,
                                style: z.chevronDownIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            })]
                        })
                    }) : null
                }, (e, t) => e.workflowId === t.workflowId && e.parentStore === t.parentStore && e.threadStore === t.threadStore && e.threadStoreState === t.threadStoreState && e.buttonShape === t.buttonShape && (0, r(795676).A)(e.types ? ? [], t.types ? ? []))
        },
        44079: (e, t, r) => {
            r.d(t, {
                H: () => n
            }), r(296540);
            var a = r(474848);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.17 1.77 12.03 12.46",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M11 1.774c1.008 0 1.825.819 1.825 1.827v.934l-.235.236-1.015 1.011V3.601A.575.575 0 0 0 11 3.025H5a.576.576 0 0 0-.575.576v8.8c0 .317.258.575.575.575h6a.576.576 0 0 0 .575-.576v-2.19l1.25-1.25v3.44A1.826 1.826 0 0 1 11 14.226H5A1.826 1.826 0 0 1 3.175 12.4V3.6c0-1.007.817-1.825 1.825-1.826z"
                        }), (0, a.jsx)("path", {
                            d: "m14.095 6.277-4.908 4.906a.64.64 0 0 1-.283.17l-.67.207c-.133.048-.265-.084-.227-.226l.208-.67a.8.8 0 0 1 .17-.284l4.91-4.901zm-5.813.054a.55.55 0 0 1 0 1.078l-.11.01H6A.55.55 0 1 1 6 6.32h2.172zm5.961-1.798a.565.565 0 0 1 .794 0 .564.564 0 0 1 0 .793v.01l-.424.424-.798-.8zM10 4.32a.55.55 0 1 1 0 1.1H6a.55.55 0 1 1 0-1.1z"
                        })]
                    })
                },
                n = (0, r(104509).wt)("formSmall", i, "small")
        },
        352118: (e, t, r) => {
            r.d(t, {
                s: () => l
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(581454);
            var a = r(296540),
                i = () => r(174148),
                n = () => r(832375);
            let d = new(r(277637)).G(() => 0);
            async function s(e) {
                var t, a;
                let {
                    environment: i,
                    parentStore: d,
                    workflowId: s,
                    limit: l,
                    cursor: o,
                    types: u,
                    userId: h,
                    filter: c,
                    includeWriterChats: p
                } = e;
                if (!r(205885).A.state.online) return;
                let g = d.table === n().NXh ? d.id : d.getSpaceId();
                if (s) {
                    let e = await i.api.callCellCompatibleApi({
                        eventName: "getInferenceTranscriptsForWorkflow",
                        environment: i,
                        cellNavigation: {
                            spaceId: g
                        },
                        data: {
                            workflowId: s,
                            spaceId: g,
                            userId: h,
                            limit: l,
                            cursor: o,
                            filter: c
                        }
                    });
                    if ("failed" === e.type) return;
                    return {
                        threadIds: e.data.threadIds ? ? (null == (t = e.data.transcripts) ? void 0 : t.map(e => e.id)) ? ? [],
                        nextCursor: e.data.nextCursor,
                        isPausedByNotion: e.data.isPausedByNotion
                    }
                } {
                    let e = d.table === n().NXh ? {
                            table: n().NXh,
                            id: d.id,
                            spaceId: d.id
                        } : d.getSpaceShardedPointer(),
                        t = await i.api.callCellCompatibleApi({
                            eventName: "getInferenceTranscriptsForUser",
                            environment: i,
                            cellNavigation: {
                                spaceId: g
                            },
                            data: {
                                threadParentPointer: e,
                                limit: l,
                                cursor: o,
                                types: u,
                                includeWriterChats: p
                            }
                        });
                    if ("failed" === t.type) return;
                    return {
                        threadIds: t.data.threadIds ? ? (null == (a = t.data.transcripts) ? void 0 : a.map(e => e.id)) ? ? [],
                        nextCursor: t.data.nextCursor
                    }
                }
            }

            function l(e) {
                let {
                    parentStore: t,
                    threadStore: l,
                    workflowId: o,
                    enableInfiniteScroll: u = !1,
                    pageSize: h,
                    types: c,
                    userId: p,
                    filter: g,
                    shouldListenForNewThreads: f = !1,
                    includeWriterChats: y = !1
                } = e, m = e.isEnabled ? ? !0, v = !o && f, T = (0, r(533992).v3)(), I = (0, r(109939).tz)(), w = (0, a.useMemo)(() => [t ? t.table === n().NXh ? t.id : t.getSpaceId() : void 0, o ? ? "personal", v ? "exclude_workflow_owned" : "all_owned", p, c ? c.join(",") : "", g ? JSON.stringify(g) : "", u ? "infinite" : "finite", h, m ? "enabled" : "disabled", y ? "withWriter" : "noWriter"].join("|"), [u, g, m, h, t, v, c, p, o, y]), [C, S] = (0, a.useState)(() => ({
                    queryKey: w,
                    loadedThreadIds: [],
                    cursor: void 0,
                    isLoadingMore: !1,
                    isPausedByNotion: void 0
                })), x = C.loadedThreadIds, b = C.cursor, M = C.isLoadingMore, [k, j] = (0, a.useState)(() => new Set);
                (0, a.useEffect)(() => {
                    S(e => e.queryKey === w ? e : {
                        queryKey: w,
                        loadedThreadIds: [],
                        cursor: void 0,
                        isLoadingMore: !1,
                        isPausedByNotion: void 0
                    })
                }, [w]);
                let _ = (0, r(682985).K8)(() => {
                        if (t) return t.table === n().NXh ? t : (0, r(974410).f)(t)
                    }, [t]),
                    [A, D] = (0, r(97668).Yb)(async () => {
                        if (!m || !t) return;
                        let e = await s({
                            environment: T,
                            parentStore: t,
                            workflowId: o,
                            limit: u ? h : void 0,
                            types: c,
                            userId: p,
                            filter: g,
                            includeWriterChats: y
                        });
                        if (!e) return;
                        let {
                            threadIds: r,
                            nextCursor: a,
                            isPausedByNotion: i
                        } = e;
                        return {
                            threadIds: r ? ? [],
                            nextCursor: a,
                            isPausedByNotion: i
                        }
                    }, [t, T, m, o, u, h, c, p, g, y]);
                (0, a.useEffect)(() => {
                    if ("resolved" !== A.status || !A.value) return;
                    let {
                        threadIds: e,
                        nextCursor: t,
                        isPausedByNotion: r
                    } = A.value;
                    S(a => {
                        if (a.queryKey !== w) return a;
                        let i = u ? function(e, t) {
                            let r = new Set(e),
                                a = [...e];
                            for (let e of t) r.has(e) || (r.add(e), a.push(e));
                            return a
                        }(e, a.loadedThreadIds) : e;
                        return { ...a,
                            loadedThreadIds: i,
                            cursor: u ? t : a.cursor,
                            isPausedByNotion: r
                        }
                    })
                }, [A.status, A.value, u, w]);
                let N = (0, r(84235).Y)(() => {
                    z()
                }, 500);
                (0, a.useEffect)(() => {
                    if (!o || "resolved" !== A.status || !A.value) return;
                    let e = d.get(o),
                        t = x.length;
                    e !== t && (r(707964).u4({
                        name: "thread_history_loaded",
                        args: {
                            count: t
                        }
                    }), d.set(o, t))
                }, [o, x.length, A.status, A.value]), (0, a.useEffect)(() => {
                    if (!m || !o || !f) return;
                    let e = r(48091).Ay.addListener({
                        key: (0, r(568479).y3)({
                            workflowId: o
                        }),
                        authorizationToken: void 0,
                        listener: N,
                        subscriptionId: void 0
                    });
                    return () => {
                        e && r(48091).Ay.removeListener(e), N.cancel()
                    }
                }, [T, m, o, N, f]), (0, a.useEffect)(() => {
                    null != l && l.id && j(e => {
                        if (e.has(l.id)) return e;
                        let t = new Set(e);
                        return t.add(l.id), t
                    })
                }, [null == l ? void 0 : l.id]);
                let K = (0, a.useCallback)(async () => {
                        if (C.queryKey !== w || !t || !u || !b || C.isLoadingMore) return;
                        let e = C.queryKey;
                        S(t => t.queryKey !== e ? t : { ...t,
                            isLoadingMore: !0
                        });
                        try {
                            let r = await s({
                                environment: T,
                                parentStore: t,
                                workflowId: o,
                                limit: h,
                                cursor: b,
                                types: c,
                                userId: p,
                                filter: g,
                                includeWriterChats: y
                            });
                            if (r) {
                                let {
                                    threadIds: t,
                                    nextCursor: a
                                } = r, i = t ? ? [];
                                S(t => {
                                    if (t.queryKey !== e) return t;
                                    let r = new Set(t.loadedThreadIds),
                                        n = [...t.loadedThreadIds];
                                    for (let e of i) r.has(e) || (r.add(e), n.push(e));
                                    return { ...t,
                                        loadedThreadIds: n,
                                        cursor: a
                                    }
                                })
                            }
                        } finally {
                            S(t => t.queryKey !== e ? t : { ...t,
                                isLoadingMore: !1
                            })
                        }
                    }, [t, T, o, u, b, w, h, c, p, g, y, C.isLoadingMore, C.queryKey]),
                    P = (0, a.useMemo)(() => {
                        let e = [...x];
                        for (let t of k) e.includes(t) || e.push(t);
                        return e.join(",")
                    }, [x, k]),
                    B = (0, r(682985).K8)(() => {
                        if (!_) return [];
                        let e = P ? P.split(",") : [],
                            t = new Map;
                        for (let r = 0; r < e.length; r++) t.set(e[r], r);
                        let a = [];
                        for (let t of e) {
                            var d;
                            let e = (null == l ? void 0 : l.id) === t ? l : i().E.createChildStore(_, {
                                table: n().Toz,
                                id: t,
                                spaceId: _.id
                            });
                            if (!1 === e.getAlive()) continue;
                            let r = null == (d = e.getData()) ? void 0 : d.workflow_id,
                                s = e.getParentTable(),
                                u = e.getParentId(),
                                h = "workflow" === s || void 0 !== r;
                            (!o || r === o || "workflow" === s && u === o) && (!o && v && h || a.push(function(e) {
                                let {
                                    threadStore: t,
                                    intl: r
                                } = e, a = t.getDataStore(), i = t.getCreatedByStore();
                                return {
                                    id: t.id,
                                    title: a.getKeyStore("title").getValue(),
                                    created_at: t.getCreatedTime(),
                                    updated_at: t.getUpdatedTime(),
                                    created_by_display_name: null == i ? void 0 : i.getDisplayName(r),
                                    trigger_id: a.getKeyStore("trigger_id").getValue(),
                                    run_id: a.getKeyStore("run_id").getValue(),
                                    type: t.getType()
                                }
                            }({
                                threadStore: e,
                                intl: I
                            })))
                        }
                        return a.sort((e, a) => {
                            let i = (0, r(960270).X)({
                                createdTime: e.created_at,
                                updatedTime: e.updated_at
                            }, {
                                createdTime: a.created_at,
                                updatedTime: a.updated_at
                            });
                            return 0 !== i ? i : (t.get(e.id) ? ? 0) - (t.get(a.id) ? ? 0)
                        })
                    }, [_, P, I, l, o, v]),
                    E = (0, a.useCallback)(e => {
                        S(t => ({ ...t,
                            loadedThreadIds: t.loadedThreadIds.filter(t => !e.includes(t))
                        })), j(t => {
                            let r = !1,
                                a = new Set(t);
                            for (let t of e) a.delete(t) && (r = !0);
                            return r ? a : t
                        })
                    }, []),
                    z = (0, a.useCallback)(async () => {
                        await D()
                    }, [D]);
                return (0, a.useMemo)(() => {
                    let e = !!b && C.queryKey === w,
                        t = x.length > 0 && C.queryKey === w;
                    switch (A.status) {
                        case "pending":
                        case "idle":
                            return { ...A,
                                refetch: z,
                                value: t ? B : void 0,
                                isPausedByNotion: C.isPausedByNotion,
                                ...u ? {
                                    loadMore: K,
                                    hasMore: e,
                                    isLoadingMore: M
                                } : {},
                                removeFromCache: E
                            };
                        case "rejected":
                            return { ...A,
                                refetch: z,
                                isPausedByNotion: C.isPausedByNotion,
                                ...u ? {
                                    loadMore: K,
                                    hasMore: e,
                                    isLoadingMore: M
                                } : {},
                                removeFromCache: E
                            };
                        case "resolved":
                            return { ...A,
                                refetch: z,
                                value: B,
                                isPausedByNotion: C.isPausedByNotion,
                                ...u ? {
                                    loadMore: K,
                                    hasMore: e,
                                    isLoadingMore: M
                                } : {},
                                removeFromCache: E
                            };
                        default:
                            (0, r(722371).HB)(A)
                    }
                }, [A, u, b, K, x.length, B, E, z, w, C.queryKey, C.isPausedByNotion, M])
            }
        },
        478244: (e, t, r) => {
            r.d(t, {
                k: () => n
            }), r(296540);
            var a = r(474848);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.17 1.77 12.03 12.46",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M11 1.774c1.008 0 1.825.819 1.825 1.827v.934l-.235.236-4.912 4.9a1.8 1.8 0 0 0-.404.65l-.007.023-.007.023-.208.67-.012.04c-.212.794.509 1.753 1.488 1.436l.001.003.671-.208v-.001c.276-.082.508-.231.695-.417l2.93-2.931V12.4A1.826 1.826 0 0 1 11 14.226H5A1.826 1.826 0 0 1 3.175 12.4V3.6c0-1.007.817-1.825 1.825-1.826zM6 6.32a.55.55 0 1 0 0 1.1h2.172l.11-.01a.55.55 0 0 0 0-1.079l-.11-.01zm0-2a.55.55 0 1 0 0 1.1h4a.55.55 0 1 0 0-1.1z"
                        }), (0, a.jsx)("path", {
                            d: "m14.095 6.277-4.908 4.906a.64.64 0 0 1-.283.17l-.67.207c-.133.048-.265-.084-.227-.226l.208-.67a.8.8 0 0 1 .17-.284l4.91-4.901zm.148-1.744a.565.565 0 0 1 .794 0 .564.564 0 0 1 0 .793v.01l-.424.424-.798-.8z"
                        })]
                    })
                },
                n = (0, r(104509).wt)("formFillSmall", i, "fillSmall")
        },
        724336: (e, t, r) => {
            r.d(t, {
                K: () => i
            }), r(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "7 7 6 6",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                    })
                },
                i = (0, r(104509).wt)("dotFill", a, "fill")
        },
        960270: (e, t, r) => {
            function a(e) {
                return e.updatedTime ? ? e.createdTime
            }

            function i(e, t) {
                return a(t) - a(e)
            }
            r.d(t, {
                X: () => i,
                m: () => a
            })
        }
    }
]);