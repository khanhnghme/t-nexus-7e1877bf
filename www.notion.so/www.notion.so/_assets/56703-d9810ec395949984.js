"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [56703], {
        920861: (e, t, n) => {
            n.d(t, {
                O: () => p,
                Q: () => i
            }), n(410838), n(944114), n(898992), n(354520), n(672577), n(803949), n(581454), n(737550);
            var a = n(296540),
                r = n(474848);
            let i = (0, n(109939).YK)({
                    thinking: {
                        id: "ResearchModePlanningStep.action.thinking",
                        defaultMessage: "Thinking"
                    },
                    browsing: {
                        id: "ResearchModePlanningStep.action.browsing",
                        defaultMessage: "Browsing web"
                    },
                    searching: {
                        id: "ResearchModePlanningStep.action.searching",
                        defaultMessage: "Search"
                    },
                    loading: {
                        id: "ResearchModePlanningStep.action.loading",
                        defaultMessage: "Loading"
                    },
                    querying: {
                        id: "ResearchModePlanningStep.action.querying",
                        defaultMessage: "Querying"
                    },
                    reading: {
                        id: "ResearchModePlanningStep.action.reading",
                        defaultMessage: "Reading"
                    },
                    readingDatabasePages: {
                        id: "ResearchModePlanningStep.action.readingDatabasePages",
                        defaultMessage: "Reading Database Pages"
                    }
                }),
                l = (0, n(109939).YK)({
                    researchComplete: {
                        id: "ResearchModePlanningStep.status.researchComplete",
                        defaultMessage: "Research complete"
                    },
                    startingResearch: {
                        id: "ResearchModePlanningStep.status.startingResearch",
                        defaultMessage: "Starting research"
                    },
                    researchTimeInfo: {
                        id: "ResearchModePlanningStep.status.researchTimeInfo",
                        defaultMessage: "This will take 3 to 5 minutes"
                    },
                    researchInProgress: {
                        id: "ResearchModePlanningStep.status.researchInProgress",
                        defaultMessage: "Researching"
                    }
                }),
                s = {
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        padding: "18px 16px",
                        borderBottom: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`
                    },
                    iconContainer: {
                        width: 20,
                        height: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: n(632079).Tj.blue.icon.accentPrimary
                    },
                    style0: {
                        fill: n(632079).Tj.blue.icon.accentPrimary
                    }
                };

            function o({
                stepGroup: e,
                playIntroAnimation: t
            }) {
                let [i, u] = (0, a.useState)("starting");
                (0, a.useEffect)(() => {
                    let e = setTimeout(() => {
                            u("time-info")
                        }, 2500),
                        t = setTimeout(() => {
                            u("researching")
                        }, 5e3);
                    return () => {
                        clearTimeout(e), clearTimeout(t)
                    }
                }, []);
                let d = (0, a.useMemo)(() => "done" === e.value.status ? "researchComplete" : t ? "starting" === i ? "startingResearch" : "time-info" === i ? "researchTimeInfo" : "researchInProgress" : "in-progress" === e.value.status ? "researchInProgress" : "researchComplete", [t, e.value.status, i]),
                    p = (0, a.useMemo)(() => "done" === e.value.status ? (0, r.jsx)(n(16275).I, {
                        icon: n(93042).checkmarkCircleFillIcon,
                        size: "lg",
                        style: s.style0
                    }) : (0, r.jsx)(n(517334).k, {
                        size: 16
                    }), [e.value.status]);
                return (0, r.jsx)("div", {
                    style: s.container,
                    children: (0, r.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 12,
                        children: [(0, r.jsx)("div", {
                            style: s.iconContainer,
                            children: p
                        }), (0, r.jsx)(n(203066).N, {
                            mode: "wait",
                            children: (0, r.jsx)(n(153321).P.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: .3,
                                    ease: "easeInOut"
                                },
                                children: (0, r.jsx)(n(111010).D, {
                                    styleKey: "bodyMedium",
                                    colorVariant: "primary",
                                    children: (0, r.jsx)(n(109939).sA, { ...l[d]
                                    })
                                })
                            }, d)
                        })]
                    })
                })
            }
            let u = {
                    display: "flex",
                    flexDirection: "column",
                    paddingInlineStart: 16,
                    paddingInlineEnd: 48,
                    flex: 1,
                    overflow: "auto"
                },
                d = {
                    marginTop: 18,
                    display: "flex",
                    alignItems: "center",
                    gap: 12
                };

            function p({
                stepGroup: e
            }) {
                let t = e.value.isFollowUpResearcherAgentStep ? ? !1,
                    l = (0, n(960253).e)(),
                    s = (0, n(960253).I)(() => ({
                        container: {
                            display: "flex",
                            flexDirection: "column",
                            background: n(632079).Tj.background.elevated,
                            borderRadius: 8,
                            maxHeight: 500,
                            overflow: "hidden",
                            ...(0, n(418676).nl)({
                                width: 1,
                                color: "dark" === l ? n(632079).Tj.palette.gray[400] : n(632079).Tj.palette.gray[100]
                            })
                        }
                    }), [l]),
                    c = e.value.thinkingRounds.length > 0 ? e.value.thinkingRounds[e.value.thinkingRounds.length - 1] : void 0,
                    h = (0, a.useMemo)(() => {
                        if (!c || !c.thinkingStep.output) return "";
                        let e = Array.isArray(c.thinkingStep.output) && c.thinkingStep.output.find(e => "thinking" === e.type);
                        return e && e.content
                    }, [c]),
                    g = h && h.length > 0,
                    f = e.value.thinkingRounds,
                    y = (0, a.useRef)(null),
                    v = (0, a.useMemo)(() => {
                        let t = [];
                        for (let e of f) t.push({
                            type: "thinking",
                            step: e.thinkingStep
                        }), e.agentSteps.forEach(e => {
                            t.push({
                                type: "agent",
                                step: e
                            })
                        });
                        let n = t.filter(e => "thinking" !== e.type || void 0 !== e.step.output);
                        return n.length > 0 && "thinking" !== n[n.length - 1].type && "in-progress" === e.value.status && n.push({
                            type: "thinking",
                            step: {
                                id: "thinking-placeholder",
                                type: "researcher-next-steps",
                                value: {
                                    nextSteps: []
                                },
                                done: !1
                            }
                        }), n
                    }, [f, e.value.status]),
                    m = (0, a.useMemo)(() => v.some(e => "agent" === e.type), [v]),
                    [x, I] = (0, a.useState)(!1),
                    [j, S] = (0, a.useState)(!0),
                    [k, w] = (0, a.useState)(1),
                    b = (0, a.useCallback)(() => {
                        if (y.current) {
                            let e = y.current;
                            e.scrollTo({
                                top: e.scrollHeight,
                                behavior: "smooth"
                            })
                        }
                    }, []),
                    [R, T] = (0, a.useState)(!1),
                    C = (0, a.useRef)(!1);
                (0, a.useEffect)(() => {
                    if (!R) {
                        let e = v.length > 0 ? v[v.length - 1] : void 0;
                        e && "thinking" === e.type && !e.step.output ? w(v.length - 1) : w(v.length), T(!0), v.filter(e => "thinking" === e.type).length <= 1 && !t && E(!0)
                    }
                }, [v, R, t]), (0, a.useEffect)(() => {
                    if (k < v.length) {
                        let e = v[k],
                            t = e && "thinking" === e.type;
                        if (t && v.slice(0, k).filter(e => "agent" === e.type).some(e => "in-progress" === e.step.value.status)) return;
                        let n = setTimeout(() => {
                            C.current = !0, w(e => Math.min(e + 1, v.length))
                        }, t ? 2e3 : 100);
                        return () => clearTimeout(n)
                    }
                }, [k, v.length, v]);
                let A = (0, a.useMemo)(() => {
                        var e, t;
                        let n = null == (e = v.findLast(e => "thinking" === e.type)) ? void 0 : e.step;
                        return null != n && n.output ? (Array.isArray(n.output) ? null == (t = n.output.find(e => "thinking" === e.type)) ? void 0 : t.content : null) ? ? null : null
                    }, [v]),
                    [M, P] = (0, a.useState)(!1),
                    D = (0, a.useCallback)(() => {
                        if (!y.current) return !0;
                        let e = y.current;
                        return e.scrollHeight - e.scrollTop - e.clientHeight <= 5
                    }, []);
                (0, a.useEffect)(() => {
                    let e = y.current;
                    if (!e) return;
                    let t = () => {
                        x || (D() ? S(!0) : S(!1))
                    };
                    return e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
                }, [D, x]), (0, a.useEffect)(() => {
                    if (M && j && C.current) {
                        I(!0), b();
                        let e = setTimeout(() => {
                            I(!1), P(!1)
                        }, 500);
                        return () => clearTimeout(e)
                    }
                }, [M, b, j]), (0, a.useEffect)(() => {
                    if (j && C.current) {
                        I(!0), b();
                        let e = setTimeout(() => {
                            I(!1)
                        }, 500);
                        return () => clearTimeout(e)
                    }
                }, [A, b, j]);
                let [V, E] = (0, a.useState)(!1);
                return "loading" === e.value.status ? null : g && (!t || m) && R ? (0, r.jsxs)("div", {
                    style: s.container,
                    children: [(0, r.jsx)(o, {
                        stepGroup: e,
                        playIntroAnimation: V
                    }), (0, r.jsx)(n(203066).N, {
                        children: (0, r.jsx)(n(153321).P.div, {
                            style: { ...u,
                                overflowY: x ? "hidden" : "auto"
                            },
                            ref: y,
                            initial: {
                                paddingBottom: 0
                            },
                            animate: {
                                paddingBottom: "26px"
                            },
                            exit: {
                                paddingBottom: 0
                            },
                            children: (0, r.jsx)(n(203066).N, {
                                children: v.slice(0, k).map((e, t) => "thinking" === e.type ? (0, r.jsx)(n(153321).P.div, {
                                    initial: {
                                        opacity: 0,
                                        paddingTop: 0
                                    },
                                    animate: {
                                        opacity: 1,
                                        paddingTop: 18
                                    },
                                    exit: {
                                        opacity: 0,
                                        paddingTop: 0
                                    },
                                    transition: {
                                        duration: .3,
                                        ease: "easeOut"
                                    },
                                    children: (0, r.jsx)(n(925035).Ps, {
                                        thinkingStep: e.step,
                                        onExpandCompleteCallback: () => P(!0)
                                    })
                                }, t) : (0, r.jsx)(n(153321).P.div, {
                                    initial: {
                                        opacity: 0,
                                        paddingTop: 0
                                    },
                                    animate: {
                                        opacity: 1,
                                        paddingTop: 18
                                    },
                                    exit: {
                                        opacity: 0,
                                        paddingTop: 0
                                    },
                                    transition: {
                                        duration: .3,
                                        ease: "easeOut"
                                    },
                                    children: (0, r.jsx)(n(925035).eS, {
                                        agentStep: e.step,
                                        onExpandCompleteCallback: () => {
                                            v.length > t + 1 && "thinking" === v[t + 1].type && P(!0)
                                        }
                                    })
                                }, t))
                            })
                        })
                    })]
                }) : (0, r.jsxs)("div", {
                    style: d,
                    children: [(0, r.jsx)(n(448734).jh, {
                        sizeVariant: "plans"
                    }), (0, r.jsxs)(n(4458).fI, {
                        gap: 4,
                        alignItems: "flex-end",
                        children: [(0, r.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            colorVariant: "secondary",
                            children: (0, r.jsx)(n(109939).sA, { ...i.thinking
                            })
                        }), (0, r.jsx)(n(118845).A, {
                            isTriColored: !0
                        })]
                    })]
                })
            }
        },
        925035: (e, t, n) => {
            n.d(t, {
                eS: () => d,
                Qc: () => s,
                Ps: () => u,
                Cw: () => l
            }), n(898992), n(354520), n(672577), n(430670), n(581454);
            var a = n(296540),
                r = n(474848);

            function i(e) {
                let {
                    agentStepInput: t,
                    emptySearchResultFallback: i,
                    resultWrapperRef: s
                } = e, o = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore), u = (0, n(682985).uB)(void 0, n(931030).D), d = (0, n(682985).K8)(() => {
                    if (!o || t.agent !== n(180139).iC && t.agent !== n(180139).cZ) return;
                    let e = t.args.databaseId;
                    if (e) return l(e, o) || e
                }, [t, o]), p = (0, a.useMemo)(() => {
                    if (d && o) return {
                        type: "notion",
                        citationLevel: "page",
                        store: n(970831).B.createChildStore(o, {
                            table: n(832375).evP,
                            id: d,
                            spaceId: o.id
                        }),
                        id: d,
                        pageId: d,
                        title: "",
                        path: "",
                        text: "",
                        lastEdited: ""
                    }
                }, [d, o]);
                if (!p) {
                    let e = i;
                    return t.agent === n(180139).iC ? "run-sql-on-database" === t.args.taskType ? e = `Database (ID: ${t.args.databaseId})` : "preview-database-schema" === t.args.taskType && (e = `Database Info (ID: ${t.args.databaseId})`) : t.agent === n(180139).cZ && (e = `Database content (ID: ${t.args.databaseId})`), (0, r.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        children: e
                    })
                }
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(n(809930).K, {
                        result: p,
                        position: 0,
                        onMouseEnter: e => {
                            u.setState({
                                type: "list",
                                node: e.currentTarget,
                                citationType: "notion",
                                pageId: p.pageId,
                                blockIds: []
                            })
                        },
                        onMouseLeave: () => {
                            u.reset()
                        },
                        compact: !0,
                        hideArrowOnHover: !0
                    }, p.id), o ? (0, r.jsx)(n(417115).cE, {
                        containerRef: s,
                        hoverStore: u,
                        parentStore: o
                    }) : void 0]
                })
            }

            function l(e, t) {
                try {
                    let a = n(356912).m.createChildStore(t, {
                            table: n(832375).VlP,
                            id: e,
                            spaceId: t.id
                        }),
                        r = (0, n(73396).D)(a, e => !0, 0);
                    if (r && r instanceof n(970831).B) return r.id;
                    return
                } catch (e) {
                    return
                }
            }

            function s(e) {
                return (0, r.jsx)(n(4458).VP, {
                    className: "autolayout-fill-height autolayout-fill-width",
                    style: o.positionRelative,
                    children: (0, r.jsx)("div", {
                        children: "Research mode side panel"
                    })
                })
            }
            let o = {
                container: {
                    marginTop: 12,
                    marginBottom: 12
                },
                thinkingTextContainer: {
                    marginInlineStart: 32,
                    userSelect: "text"
                },
                thinkingAnimationContainer: {
                    display: "flex",
                    gap: 12
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function u(e) {
                let {
                    thinkingStep: t,
                    onExpandCompleteCallback: i
                } = e, l = (0, a.useMemo)(() => {
                    if (!t.output) return null;
                    let e = Array.isArray(t.output) && t.output.find(e => "thinking" === e.type);
                    return e && e.content || null
                }, [t.output]);
                return (0, r.jsx)(n(203066).N, {
                    children: (0, r.jsx)(n(153321).P.div, {
                        initial: {
                            opacity: 0,
                            minHeight: 0,
                            overflow: "hidden"
                        },
                        animate: {
                            opacity: 1,
                            minHeight: "30px",
                            overflow: "auto"
                        },
                        exit: {
                            opacity: 0,
                            minHeight: 0,
                            overflow: "hidden"
                        },
                        style: o.container,
                        children: (0, r.jsx)(n(203066).N, {
                            children: l ? (0, r.jsx)(n(153321).P.div, {
                                initial: {
                                    opacity: 0,
                                    height: 0,
                                    overflow: "hidden"
                                },
                                animate: {
                                    opacity: 1,
                                    height: "auto",
                                    overflow: "auto"
                                },
                                exit: {
                                    opacity: 0,
                                    height: 0,
                                    overflow: "hidden"
                                },
                                style: o.thinkingTextContainer,
                                children: (0, r.jsx)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "secondary",
                                    children: l
                                })
                            }, "markdown") : (0, r.jsxs)(n(153321).P.div, {
                                initial: {
                                    opacity: 0,
                                    height: 0,
                                    overflow: "hidden"
                                },
                                animate: {
                                    opacity: 1,
                                    height: "auto",
                                    overflow: "auto"
                                },
                                exit: {
                                    opacity: 0,
                                    height: 0,
                                    overflow: "hidden"
                                },
                                onAnimationComplete: () => {
                                    null == i || i()
                                },
                                style: o.thinkingAnimationContainer,
                                children: [(0, r.jsx)(n(448734).jh, {
                                    sizeVariant: "plans"
                                }), (0, r.jsxs)(n(4458).fI, {
                                    gap: 4,
                                    alignItems: "flex-end",
                                    children: [(0, r.jsx)(n(111010).D, {
                                        styleKey: "bodyMedium",
                                        colorVariant: "secondary",
                                        children: (0, r.jsx)(n(109939).sA, { ...n(920861).Q.thinking
                                        })
                                    }), (0, r.jsx)(n(118845).A, {
                                        isTriColored: !0
                                    })]
                                })]
                            }, "loading")
                        })
                    })
                })
            }

            function d(e) {
                let {
                    agentStep: t,
                    onExpandCompleteCallback: n
                } = e;
                if ("readingAgent" === t.value.input.agent) return (0, r.jsx)(h, {
                    agentStep: t,
                    onExpandCompleteCallback: n
                });
                if ("searchAgent" === t.value.input.agent)
                    if ("internal" === t.value.input.searchType) return (0, r.jsx)(x, {
                        agentStep: t,
                        searchType: "internal",
                        onExpandCompleteCallback: n
                    });
                    else if ("web" === t.value.input.searchType) return (0, r.jsx)(x, {
                    agentStep: t,
                    searchType: "web",
                    onExpandCompleteCallback: n
                });
                else return (0, r.jsx)("div", {
                    children: `Unknown search type: ${t.value.input.searchType}`
                });
                if ("taskAgent" === t.value.input.agent) return (0, r.jsx)("div", {
                    children: `Unknown task type: ${t.value.input.taskType}`
                });
                if ("databaseAgent" === t.value.input.agent) return (0, r.jsx)(k, {
                    agentStep: t,
                    onExpandCompleteCallback: n
                });
                if ("databaseBulkReadContentAgent" === t.value.input.agent) return (0, r.jsx)(T, {
                    agentStep: t,
                    onExpandCompleteCallback: n
                });
                else return (0, r.jsx)("div", {
                    children: `Unknown agent type: ${t.value.input.agent}`
                })
            }
            let p = {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                    width: "100%"
                },
                c = {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    flexShrink: 1,
                    flexGrow: 0
                };

            function h(e) {
                let {
                    agentStep: t,
                    onExpandCompleteCallback: i
                } = e, l = (0, a.useRef)(null), s = (0, n(682985).uB)(void 0, n(931030).D), o = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore), u = (0, n(682985).K8)(() => {
                    if (!o || "readingAgent" !== t.value.input.agent) return;
                    let e = t.value.input.artifact;
                    return "notion" === e.citationType ? {
                        type: "notion",
                        citationLevel: "page",
                        store: n(970831).B.createChildStore(o, {
                            table: n(832375).evP,
                            id: e.pageId,
                            spaceId: o.id
                        }),
                        id: e.pageId,
                        pageId: e.pageId,
                        title: "",
                        path: "",
                        text: "",
                        lastEdited: ""
                    } : "universal_search" === e.citationType && e.url ? (0, n(983617).my)(e) : void 0
                }, [t.value.input, o]);
                return (0, r.jsx)(n(203066).N, {
                    children: (0, r.jsxs)(n(153321).P.div, {
                        style: p,
                        ref: l,
                        initial: {
                            opacity: 0,
                            height: 0,
                            overflow: "hidden"
                        },
                        animate: {
                            opacity: 1,
                            height: "auto",
                            overflow: "auto"
                        },
                        exit: {
                            opacity: 0,
                            height: 0,
                            overflow: "hidden"
                        },
                        onAnimationComplete: () => {
                            null == i || i()
                        },
                        children: [(0, r.jsx)(n(16275).I, {
                            icon: n(712802).bookIcon
                        }), (0, r.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            minWidth: 0,
                            flexShrink: 1,
                            flexGrow: 0,
                            children: [(0, r.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "primary",
                                children: (0, r.jsx)(n(109939).sA, { ...n(920861).Q.reading
                                })
                            }), (0, r.jsx)("div", {
                                style: c,
                                children: u ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(n(809930).K, {
                                        result: u,
                                        position: 0,
                                        onMouseEnter: e => {
                                            "notion" === u.type ? s.setState({
                                                type: "list",
                                                node: e.currentTarget,
                                                citationType: "notion",
                                                pageId: u.pageId,
                                                blockIds: []
                                            }) : s.setState({
                                                type: "list",
                                                node: e.currentTarget,
                                                citationType: "universal_search",
                                                href: (0, n(281708).Ve)(u.href)
                                            })
                                        },
                                        onMouseLeave: () => {
                                            s.reset()
                                        },
                                        compact: !0,
                                        hideArrowOnHover: !0
                                    }, u.id), o ? (0, r.jsx)(n(417115).cE, {
                                        containerRef: l,
                                        hoverStore: s,
                                        parentStore: o
                                    }) : void 0]
                                }) : "Page"
                            })]
                        })]
                    })
                })
            }
            let g = {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12
                },
                f = {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    overflow: "hidden",
                    flexShrink: 1
                },
                y = {
                    display: "flex",
                    flexDirection: "column",
                    marginInlineStart: 32
                },
                v = {
                    minHeight: 30,
                    display: "flex",
                    alignItems: "center"
                },
                m = {
                    minHeight: 30,
                    display: "flex",
                    alignItems: "center"
                };

            function x(e) {
                let {
                    agentStep: t,
                    onExpandCompleteCallback: i
                } = e, l = (0, a.useRef)(null), s = (0, n(682985).uB)(void 0, n(931030).D), o = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore), u = (0, a.useMemo)(() => {
                    if (!o) return [];
                    if (t.value.output && "artifacts" in t.value.output) {
                        var e;
                        return (null == (e = t.value.output) || null == (e = e.artifacts) || null == (e = e.flatMap(e => (0, n(983617).g3)({
                            artifact: e,
                            spaceStore: o
                        }))) ? void 0 : e.filter(e => void 0 !== e)) ? ? []
                    }
                    return []
                }, [t.value.output, o]), d = (0, a.useMemo)(() => u.slice(0, 3), [u]), p = (0, a.useMemo)(() => "done" === t.value.status, [t.value.status]), c = "failed" === t.value.status;
                return (0, r.jsxs)(n(4458).VP, {
                    gap: 4,
                    children: [(0, r.jsx)(n(203066).N, {
                        children: (0, r.jsxs)(n(153321).P.div, {
                            style: g,
                            initial: {
                                opacity: 0,
                                height: 0,
                                overflow: "hidden"
                            },
                            animate: {
                                opacity: 1,
                                height: "auto",
                                overflow: "auto"
                            },
                            exit: {
                                opacity: 0,
                                height: 0,
                                overflow: "hidden"
                            },
                            onAnimationComplete: () => {
                                null == i || i()
                            },
                            children: [(0, r.jsx)(n(16275).I, {
                                icon: "internal" === e.searchType ? n(330274).magnifyingGlassIcon : n(515388).globeIcon
                            }), (0, r.jsx)("div", {
                                style: f,
                                children: (0, r.jsx)(n(861510).N, {
                                    text: t.value.input.displayName ? ? t.value.input.question,
                                    styleKey: "bodyMedium",
                                    lineClamp: 1,
                                    animate: !p && !c
                                })
                            })]
                        })
                    }), (0, r.jsx)(n(203066).N, {
                        children: p ? (0, r.jsxs)(n(153321).P.div, {
                            ref: l,
                            style: y,
                            initial: {
                                opacity: 0,
                                height: 0,
                                overflow: "hidden"
                            },
                            animate: {
                                opacity: 1,
                                height: "auto",
                                overflow: "auto",
                                maxHeight: 90,
                                transition: {
                                    height: {
                                        duration: .4,
                                        ease: "easeInOut"
                                    },
                                    opacity: {
                                        duration: .3,
                                        ease: "easeIn"
                                    },
                                    staggerChildren: .5
                                }
                            },
                            exit: {
                                opacity: 0,
                                height: 0,
                                overflow: "hidden",
                                transition: {
                                    height: {
                                        duration: .3,
                                        ease: "easeInOut"
                                    },
                                    opacity: {
                                        duration: .2,
                                        ease: "easeOut"
                                    },
                                    when: "afterChildren"
                                }
                            },
                            children: [d.map((e, t) => (0, r.jsx)(n(153321).P.div, {
                                style: v,
                                initial: {
                                    opacity: 0,
                                    x: -10
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                exit: {
                                    opacity: 0,
                                    x: -20
                                },
                                transition: {
                                    duration: .5,
                                    ease: "easeOut"
                                },
                                children: (0, r.jsx)(n(809930).K, {
                                    result: e,
                                    position: t,
                                    onMouseEnter: t => {
                                        "notion" === e.type ? s.setState({
                                            type: "list",
                                            node: t.currentTarget,
                                            citationType: "notion",
                                            pageId: e.pageId,
                                            blockIds: []
                                        }) : s.setState({
                                            type: "list",
                                            node: t.currentTarget,
                                            citationType: "universal_search",
                                            href: (0, n(281708).Ve)(e.href)
                                        })
                                    },
                                    onMouseLeave: () => {
                                        s.reset()
                                    },
                                    compact: !0
                                }, e.id)
                            }, t)), 0 === u.length ? (0, r.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                style: m,
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "ResearchModeSidePanel.AgentInternalOrWebSearchStep.noResults",
                                    defaultMessage: "No results"
                                })
                            }, "no-results") : void 0, o ? (0, r.jsx)(n(417115).cE, {
                                containerRef: l,
                                hoverStore: s,
                                parentStore: o,
                                getPayloadDataForHref: e => d.filter(e => "notion" !== e.type).find(t => t.href === e),
                                useCompactWebPreview: !0
                            }) : void 0]
                        }) : void 0
                    })]
                })
            }
            let I = {
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                },
                j = {
                    marginInlineStart: 32
                },
                S = {
                    whiteSpace: "nowrap"
                };

            function k(e) {
                let {
                    agentStep: t,
                    onExpandCompleteCallback: l
                } = e, s = (0, a.useRef)(null), o = t.value.input.agent === n(180139).iC ? t.value.input.displayName : void 0, u = t.value.input.agent === n(180139).iC && "run-sql-on-database" === t.value.input.args.taskType ? n(920861).Q.querying : n(920861).Q.loading;
                return (0, r.jsx)(n(203066).N, {
                    children: (0, r.jsxs)(n(153321).P.div, {
                        style: I,
                        ref: s,
                        initial: {
                            opacity: 0,
                            height: 0,
                            overflow: "hidden"
                        },
                        animate: {
                            opacity: 1,
                            height: "auto",
                            overflow: "auto"
                        },
                        exit: {
                            opacity: 0,
                            height: 0,
                            overflow: "hidden"
                        },
                        onAnimationComplete: () => {
                            null == l || l()
                        },
                        children: [(0, r.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 12,
                            children: [(0, r.jsx)(n(16275).I, {
                                icon: n(334015).c
                            }), (0, r.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                gap: 4,
                                children: [(0, r.jsx)(n(111010).D, {
                                    styleKey: "bodyMedium",
                                    colorVariant: "primary",
                                    style: S,
                                    children: (0, r.jsx)(n(109939).sA, { ...u
                                    })
                                }), (0, r.jsx)(n(4458).fI, {
                                    alignItems: "center",
                                    gap: 4,
                                    children: (0, r.jsx)(i, {
                                        agentStepInput: t.value.input,
                                        emptySearchResultFallback: "Database",
                                        resultWrapperRef: s
                                    })
                                })]
                            })]
                        }), o ? (0, r.jsx)("div", {
                            style: j,
                            children: (0, r.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: o
                            })
                        }) : void 0]
                    })
                })
            }
            let w = {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12
                },
                b = {
                    marginInlineStart: 32
                },
                R = {
                    whiteSpace: "nowrap"
                };

            function T(e) {
                let {
                    agentStep: t,
                    onExpandCompleteCallback: l
                } = e, s = (0, a.useRef)(null), o = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore), u = (0, n(682985).K8)(() => {
                    if (!o) return [];
                    if (t.value.output && "artifacts" in t.value.output) {
                        var e;
                        return null == (e = t.value.output) || null == (e = e.artifacts) ? void 0 : e.map(e => {
                            if (e.citationInfo && "pageId" in e.citationInfo) return {
                                type: "notion",
                                citationLevel: "page",
                                store: n(970831).B.createChildStore(o, {
                                    table: n(832375).evP,
                                    id: e.citationInfo.pageId,
                                    spaceId: o.id
                                }),
                                id: e.citationInfo.pageId,
                                pageId: e.citationInfo.pageId,
                                title: "",
                                path: "",
                                text: "",
                                lastEdited: ""
                            }
                        })
                    }
                    return []
                }, [t.value.output, o]), d = "done" === t.value.status, p = "failed" === t.value.status, c = (0, a.useMemo)(() => !!p || !!d && 0 === u.length, [p, d, u]);
                return (0, r.jsxs)(n(4458).VP, {
                    gap: 4,
                    ref: s,
                    children: [(0, r.jsx)(n(203066).N, {
                        children: (0, r.jsxs)(n(153321).P.div, {
                            style: w,
                            initial: {
                                opacity: 0,
                                height: 0,
                                overflow: "hidden"
                            },
                            animate: {
                                opacity: 1,
                                height: "auto",
                                overflow: "auto"
                            },
                            exit: {
                                opacity: 0,
                                height: 0,
                                overflow: "hidden"
                            },
                            onAnimationComplete: () => {
                                null == l || l()
                            },
                            children: [(0, r.jsx)(n(16275).I, {
                                icon: n(334015).c
                            }), (0, r.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                gap: 4,
                                children: [(0, r.jsx)(n(111010).D, {
                                    styleKey: "bodyMedium",
                                    colorVariant: "primary",
                                    style: R,
                                    children: (0, r.jsx)(n(109939).sA, { ...n(920861).Q.readingDatabasePages
                                    })
                                }), (0, r.jsx)(n(4458).fI, {
                                    alignItems: "center",
                                    gap: 4,
                                    children: (0, r.jsx)(i, {
                                        agentStepInput: t.value.input,
                                        emptySearchResultFallback: "Database content",
                                        resultWrapperRef: s
                                    })
                                })]
                            })]
                        })
                    }), (0, r.jsx)(n(203066).N, {
                        children: c ? void 0 : (0, r.jsxs)(n(153321).P.div, {
                            initial: {
                                opacity: 0,
                                minHeight: 0,
                                overflow: "hidden"
                            },
                            animate: {
                                opacity: 1,
                                minHeight: "30px",
                                overflow: "auto"
                            },
                            exit: {
                                opacity: 0,
                                minHeight: 0,
                                overflow: "hidden"
                            },
                            children: [(0, r.jsx)(n(203066).N, {
                                children: d ? (0, r.jsx)(n(153321).P.div, {
                                    initial: {
                                        opacity: 0,
                                        height: 0,
                                        overflow: "hidden"
                                    },
                                    animate: {
                                        opacity: 1,
                                        height: 30,
                                        overflow: "auto"
                                    },
                                    exit: {
                                        opacity: 0,
                                        height: 0,
                                        overflow: "hidden"
                                    },
                                    children: (0, r.jsx)(n(111010).D, {
                                        styleKey: "bodyRegular",
                                        colorVariant: "secondary",
                                        style: b,
                                        children: (0, r.jsx)(n(109939).sA, {
                                            id: "ResearchModeSidePanel.AgentDatabaseBulkReadContentStep.resultCount",
                                            defaultMessage: "Read {count} pages",
                                            values: {
                                                count: u.length
                                            }
                                        })
                                    }, "more-results")
                                }) : void 0
                            }), (0, r.jsx)(n(203066).N, {
                                children: d ? void 0 : (0, r.jsx)(n(153321).P.div, {
                                    style: b,
                                    initial: {
                                        opacity: 0,
                                        height: 0,
                                        overflow: "hidden"
                                    },
                                    animate: {
                                        opacity: 1,
                                        height: 30,
                                        overflow: "auto",
                                        transition: {
                                            duration: .2,
                                            ease: "easeInOut",
                                            delay: 1
                                        }
                                    },
                                    exit: {
                                        opacity: 0,
                                        height: 0,
                                        overflow: "hidden",
                                        transition: {
                                            duration: 0,
                                            ease: "easeInOut",
                                            delay: 0
                                        }
                                    },
                                    children: (0, r.jsx)(n(118845).A, {
                                        isTriColored: !0
                                    })
                                })
                            })]
                        })
                    })]
                })
            }
        },
        983617: (e, t, n) => {
            function a(e) {
                var t;
                return (null == (t = e.find(e => "config" === e.type)) ? void 0 : t.value.type) === "researcher"
            }

            function r(e) {
                let {
                    transcript: t,
                    threadId: a,
                    preserveNonResearcherSteps: r = !1
                } = e, i = t, l = e => "researcher-agent" === e.type && e.value.agent !== n(180139).RD || "researcher-report" === e.type || "researcher-agent-group" === e.type || "researcher-next-steps" === e.type, s = t.findIndex(l);
                if (t.some(e => "premium-feature-unavailable" === e.type) && -1 === s) return [...t];
                if (-1 === s) {
                    let e = {
                        id: "empty-researcher-agent-group",
                        type: "researcher-agent-group",
                        value: {
                            thinkingRounds: [],
                            status: 0 === t.length ? "loading" : "in-progress",
                            writing: "not-started"
                        }
                    };
                    return r ? [...t, e] : [e]
                }
                let o = r ? t.slice(0, s) : [];
                i = t.slice(s);
                let u = [],
                    d = null,
                    p = [],
                    c = [];
                i.forEach(e => {
                    "researcher-next-steps" === e.type ? (d && (c.push({
                        thinkingStep: d,
                        agentSteps: [...p]
                    }), p = []), d = e) : "researcher-agent" === e.type ? p.push(e) : "user" === e.type || "researcher-report" === e.type || "markdown-chat" === e.type ? (d && c.push({
                        thinkingStep: d,
                        agentSteps: [...p]
                    }), c.length > 0 && u.push({
                        id: `grouped-researcher-agent-${c[0].thinkingStep.id}`,
                        type: "researcher-agent-group",
                        value: {
                            thinkingRounds: c,
                            status: "done",
                            writing: "not-started"
                        }
                    }), d = null, p = [], c = [], u.push(e)) : "error" === e.type || u.push(e)
                }), d && c.push({
                    thinkingStep: d,
                    agentSteps: [...p]
                }), c.length > 0 && u.push({
                    id: `grouped-researcher-agent-${c[0].thinkingStep.id}`,
                    type: "researcher-agent-group",
                    value: {
                        thinkingRounds: c,
                        status: "in-progress",
                        writing: "not-started"
                    }
                });
                let h = a && n(57168).defaultClientAIChatStore.getOrCreateClientAIChatThreadStore(a).state.loading,
                    g = !1,
                    f = !1;
                for (let e = u.length - 1; e >= 0; e--) {
                    let t = u[e];
                    if ("researcher-agent-group" === t.type) {
                        let e = f && !h || g ? "done" : !g && f && h ? "in-progress" : "not-started";
                        t.value.writing = e, "in-progress" === e && (t.value.status = "in-progress")
                    } else "researcher-report" === t.type ? f = !0 : g = !0
                }
                for (let e = u.length - 1; e >= 0; e--) {
                    let t = u[e];
                    "researcher-report" === t.type && (e < u.length - 1 || !h) && (u[e] = { ...t,
                        finished: !0
                    })
                }
                if (0 === u.length || !l(u[u.length - 1])) {
                    let e = {
                        id: "empty-researcher-agent-group",
                        type: "researcher-agent-group",
                        value: {
                            thinkingRounds: [],
                            status: 0 === t.length ? "loading" : "in-progress",
                            writing: "not-started"
                        }
                    };
                    u.push(e)
                }
                let y = !1;
                for (let e = 0; e < u.length; e++) {
                    let t = u[e];
                    "researcher-agent-group" === t.type && (y ? u[e] = { ...t,
                        value: { ...t.value,
                            isFollowUpResearcherAgentStep: !0
                        }
                    } : y = !0)
                }
                return [...o, ...u.filter(e => "researcher-agent-group" !== e.type || !(e.value.isFollowUpResearcherAgentStep && "done" === e.value.status && e.value.thinkingRounds.length > 0 && 0 === e.value.thinkingRounds[0].agentSteps.length))]
            }

            function i(e) {
                let {
                    transcript: t,
                    threadId: a
                } = e, r = [...t], i = a && n(57168).defaultClientAIChatStore.getOrCreateClientAIChatThreadStore(a).state.loading;
                for (let e = r.length - 1; e >= 0; e--) {
                    let t = r[e];
                    "researcher-report" === t.type && (e < r.length - 1 || !i) && (r[e] = { ...t,
                        finished: !0
                    })
                }
                return r
            }

            function l(e) {
                let {
                    transcript: t,
                    runningInference: a
                } = e, r = e => "researcher-agent" === e.type && e.value.agent !== n(180139).RD || "researcher-report" === e.type || "researcher-agent-group" === e.type || "researcher-next-steps" === e.type, i = t.findIndex(r);
                if (t.some(e => "premium-feature-unavailable" === e.type) && -1 === i) return [...t];
                let l = t.slice(0, -1 === i ? t.length : i),
                    s = -1 === i ? [] : t.slice(i),
                    o = [],
                    u = null,
                    d = [],
                    p = [],
                    c = () => {
                        u && (p.push({
                            thinkingStep: u,
                            agentSteps: [...d]
                        }), d = [])
                    },
                    h = e => {
                        p.length > 0 && (o.push({
                            id: `grouped-researcher-agent-${p[0].thinkingStep.id}`,
                            type: "researcher-agent-group",
                            value: {
                                thinkingRounds: [...p],
                                status: e
                            }
                        }), p = [])
                    };
                s.forEach(e => {
                    switch (e.type) {
                        case "researcher-next-steps":
                            c(), u = e;
                            break;
                        case "researcher-agent":
                            d.push(e);
                            break;
                        case "user":
                        case "researcher-report":
                        case "markdown-chat":
                        case "error":
                            c(), h("done"), u = null, o.push(e);
                            break;
                        default:
                            o.push(e)
                    }
                }), c(), p.length > 0 && h("in-progress");
                let g = !1,
                    f = !1;
                for (let e = o.length - 1; e >= 0; e--) {
                    let t = o[e];
                    "researcher-agent-group" === t.type ? t.value.status = f || g ? "done" : "in-progress" : "researcher-report" === t.type ? ((e < o.length - 1 || !a) && (t.finished = !0), f = !0) : g = !0
                }
                if (0 === o.length || !r(o[o.length - 1])) {
                    let e = t.findLastIndex(e => "user" === e.type);
                    (e >= 0 ? t.slice(e).some(e => "error" === e.type) : t.some(e => "error" === e.type)) || o.push({
                        id: "empty-researcher-agent-group",
                        type: "researcher-agent-group",
                        value: {
                            thinkingRounds: [],
                            status: 0 === t.length ? "loading" : "in-progress",
                            writing: "not-started"
                        }
                    })
                }
                let y = !1;
                for (let e = 0; e < o.length; e++) {
                    let t = o[e];
                    "researcher-agent-group" === t.type && (y ? o[e] = { ...t,
                        value: { ...t.value,
                            isFollowUpResearcherAgentStep: !0
                        }
                    } : y = !0)
                }
                return [...l, ...o.filter(e => "researcher-agent-group" !== e.type || !("researcher-agent-group" === e.type && e.value.isFollowUpResearcherAgentStep && "done" === e.value.status && e.value.thinkingRounds.length > 0 && 0 === e.value.thinkingRounds[0].agentSteps.length))]
            }

            function s(e) {
                let {
                    artifact: t,
                    spaceStore: a
                } = e, r = null == t ? void 0 : t.citationInfo;
                if (!r) return;
                let i = r.citationType;
                if ("notion" === i || "universal_search" === i) {
                    var l;
                    let e = null == (l = r.searchResultWithExtraInfo) ? void 0 : l.searchResult;
                    if (!e || "title" in e && !e.title) return;
                    return (0, n(730127).SF)(e, a)
                }
            }

            function o(e) {
                let t = {
                    id: e.url || "",
                    lastEdited: "",
                    title: e.title || e.url || "",
                    text: e.text || ""
                };
                switch (e.target) {
                    case "slack":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            domain: e.domain || "",
                            baseUrl: e.baseUrl || "",
                            channelId: e.channelId || "",
                            messageId: e.messageId || "",
                            threadTs: e.threadTs || "",
                            type: "slack"
                        };
                    case "webpage":
                        return { ...t,
                            href: (0, n(281708).RW)(e.href),
                            url: e.url || "",
                            domain: e.domain || "",
                            type: "webpage"
                        };
                    case "microsoft-teams":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "microsoft-teams",
                            channelId: e.channelId || "",
                            messageId: e.messageId || "",
                            threadTs: e.threadTs || "",
                            messageType: e.messageType || "channel"
                        };
                    case "helpdoc":
                        return { ...t,
                            href: (0, n(281708).h5)(e.href),
                            url: e.url || "",
                            type: "helpdocs"
                        };
                    case "githubCode":
                    case "github":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "github"
                        };
                    case "google-drive":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "google-drive"
                        };
                    case "jira":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "jira"
                        };
                    case "sharepoint":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "sharepoint"
                        };
                    case "gmail":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "gmail",
                            emailAddress: ""
                        };
                    case "linear":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "linear"
                        };
                    case "outlook":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "outlook",
                            emailAddress: ""
                        };
                    case "notion-mail":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "notion-mail",
                            emailAddress: ""
                        };
                    case "google-calendar":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "google-calendar",
                            emailAddress: ""
                        };
                    case "notion-calendar":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "notion-calendar",
                            emailAddress: ""
                        };
                    case "salesforce":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "salesforce"
                        };
                    case "discord":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "discord",
                            channelId: e.channelId || "",
                            messageId: e.messageId || "",
                            guildId: e.guildId || "",
                            threadHref: e.href || ""
                        };
                    case "box":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "box"
                        };
                    case "asana":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "asana"
                        };
                    case "confluence":
                        return { ...t,
                            href: (0, n(281708).V9)(e.href),
                            url: e.url || "",
                            type: "confluence"
                        };
                    case "custom":
                        return { ...t,
                            href: (0, n(281708).RW)(e.href),
                            url: e.url || "",
                            domain: e.url ? new URL(e.url).hostname : "",
                            type: "webpage"
                        };
                    default:
                        (0, n(722371).HB)(e.target)
                }
            }

            function u(e, t) {
                return e.find(e => e.href === t || (e.messages ? e.messages.find(e => e.messageId === t) : void 0))
            }
            n.d(t, {
                BI: () => i,
                Dd: () => u,
                an: () => r,
                dC: () => a,
                g3: () => s,
                my: () => o,
                nL: () => l
            }), n(813451), n(944114), n(898992), n(672577), n(803949), n(737550), n(814603), n(147566), n(198721)
        }
    }
]);