"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [20491], {
        10681: (e, t, o) => {
            o.d(t, {
                k: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    workflowName: r,
                    workflowIcon: a,
                    sourceWorkflowPointer: n,
                    parentPointer: s
                } = e, l = t.currentUser.id, d = null == i ? void 0 : i.id;
                if (!l || !d) return;
                let c = (0, o(295447).Z1)({
                        environment: t,
                        table: o(43296).C,
                        spaceId: d
                    }),
                    u = s ? ? i.pointer,
                    {
                        performResult: g,
                        serverCommitResult: f
                    } = (0, o(377796).createAndCommit)({
                        environment: t,
                        userAction: "duplicateWorkflow.createPlaceholder",
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: d
                        },
                        perform: e => {
                            let s = { ...(0, o(425749).bZ)(),
                                    name: r,
                                    icon: a,
                                    duplication_status: {
                                        type: "duplicating",
                                        source_workflow_pointer: n,
                                        started_at: Date.now(),
                                        user_id: l
                                    }
                                },
                                g = o(124937).vt({
                                    environment: t,
                                    table: o(43296).C,
                                    args: {
                                        id: c,
                                        parentPointer: u,
                                        space_id: d,
                                        data: s,
                                        createdByPointer: {
                                            table: o(514214).oo,
                                            id: l
                                        },
                                        permissions: [{
                                            type: "user_permission",
                                            role: "editor",
                                            user_id: l
                                        }]
                                    },
                                    inMemoryRecordCache: i.inMemoryRecordCache,
                                    transaction: e
                                }),
                                f = (0, o(295447).Z1)({
                                    environment: t,
                                    table: o(682956).ev,
                                    spaceId: d
                                }),
                                p = o(124937).Wv({
                                    environment: t,
                                    id: f,
                                    type: "page",
                                    spaceId: d,
                                    transaction: e,
                                    inMemoryRecordCache: i.inMemoryRecordCache,
                                    createdByTable: o(514214).oo,
                                    createdById: l
                                }),
                                w = (0, o(295447).Z1)({
                                    environment: t,
                                    table: o(682956).ev,
                                    spaceId: d
                                }),
                                m = o(124937).Wv({
                                    environment: t,
                                    id: w,
                                    type: "text",
                                    spaceId: d,
                                    transaction: e,
                                    inMemoryRecordCache: i.inMemoryRecordCache,
                                    createdByTable: o(514214).oo,
                                    createdById: l
                                });
                            return o(579695).NI({
                                parentStore: p.getContentStore(),
                                childStore: m,
                                transaction: e
                            }), o(161606).b({
                                transaction: e,
                                childStore: p,
                                parentStore: g,
                                alive: !0
                            }), (0, o(421439).y4)({
                                store: g,
                                operation: {
                                    pointer: g.pointer,
                                    command: "set",
                                    path: ["data", "instructions"],
                                    args: {
                                        table: o(682956).ev,
                                        id: f,
                                        spaceId: d
                                    }
                                },
                                transaction: e
                            }), g
                        }
                    });
                return {
                    workflowStore: g,
                    serverCommitResult: f
                }
            }
        },
        100246: (e, t, o) => {
            o.d(t, {
                g: () => r
            }), o(296540);
            var i = o(474848);

            function r(e) {
                let t = (0, o(533992).v3)();
                return (0, i.jsx)(o(95582).A, {
                    focused: !1,
                    href: e.href,
                    external: !0,
                    onClick: () => (0, o(150782).F)(t, {
                        from: e.analyticsFrom
                    }),
                    icon: (0, i.jsx)(o(16275).I, {
                        icon: o(80094).questionMarkCircleIcon,
                        colorVariant: "secondary"
                    }),
                    title: (0, i.jsx)(o(111010).D, {
                        colorPalette: "gray",
                        colorVariant: "secondary",
                        children: e.title
                    }),
                    style: o(699422).RC
                })
            }
        },
        102292: (e, t, o) => {
            o.d(t, {
                V: () => i
            });

            function i(e) {
                return (0, o(83208).X)("handle_invalid_workflow_name", {
                    disableExposureLogging: !0
                }) ? (0, o(166788).O)(e) : "string" == typeof e ? e : ""
            }
        },
        139780: (e, t, o) => {
            o.d(t, {
                d: () => r
            }), o(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.4 2.39 15.2 15.86",
                    svg: (0, o(474848).jsx)("path", {
                        d: "m4.897 3.085-.122-.142a.625.625 0 0 0-.95.814l3.18 3.71h-3.98a.625.625 0 0 0-.367 1.13L6.6 11.462l-1.506 4.636a.625.625 0 0 0 .962.699L10 13.932l3.943 2.865a.625.625 0 0 0 .903-.183l1.215 1.418a.625.625 0 1 0 .95-.814l-.495-.576a.6.6 0 0 1-.127-.113l-11.4-13.3a.6.6 0 0 1-.093-.144m.051 5.632h3.129l5.018 5.853.027.085-2.755-2.001a.625.625 0 0 0-.734 0l-2.755 2 1.052-3.237a.625.625 0 0 0-.227-.7zm8.633 2.613 3.762-2.733a.625.625 0 0 0-.367-1.13H12.1L10.594 2.83a.625.625 0 0 0-1.188 0L8.55 5.463l.953 1.112L10 5.046l1.052 3.239a.625.625 0 0 0 .595.432h3.404l-2.287 1.662z"
                    })
                },
                r = (0, o(104509).wt)("starSlash", i, "default")
        },
        166788: (e, t, o) => {
            o.d(t, {
                O: () => i
            });

            function i(e) {
                return "string" == typeof e ? e : "Agent with invalid name"
            }
        },
        280772: (e, t, o) => {
            function i({
                environment: e,
                workflowId: t,
                from: o
            }) {
                a({
                    environment: e,
                    workflowIds: [t],
                    from: o,
                    userAction: "sidebarWorkflowsActions.addSidebarWorkflow"
                })
            }

            function r({
                environment: e,
                workflowIds: t,
                from: o
            }) {
                a({
                    environment: e,
                    workflowIds: t,
                    from: o,
                    userAction: "sidebarWorkflowsActions.bulkAddSidebarWorkflow"
                })
            }

            function a({
                environment: e,
                workflowIds: t,
                from: i,
                userAction: r
            }) {
                var n;
                let s = o(728372).AppStoreSidebarSpaceViewStore.state;
                if (!s) return;
                let l = (null == (n = s.getSettings()) ? void 0 : n.sidebar_workflow_ids) || [],
                    d = new Set(l),
                    c = t.filter(e => !d.has(e));
                0 !== c.length && ((0, o(377796).createAndCommit)({
                    userAction: r,
                    environment: e,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        let t = [...c, ...l];
                        o(380762).AG(s, e, { ...s.getSettings(),
                            sidebar_workflow_ids: t
                        })
                    }
                }), (0, o(104310).u)({
                    event: {
                        eventName: "sidebar_workflow_added",
                        eventProperties: {
                            from: i,
                            num_agents: c.length
                        }
                    }
                }))
            }

            function n({
                environment: e,
                workflowId: t,
                from: o
            }) {
                l({
                    environment: e,
                    workflowIds: [t],
                    from: o,
                    userAction: "sidebarWorkflowsActions.removeSidebarWorkflow"
                })
            }

            function s({
                environment: e,
                workflowIds: t,
                from: o
            }) {
                l({
                    environment: e,
                    workflowIds: t,
                    from: o,
                    userAction: "sidebarWorkflowsActions.bulkRemoveSidebarWorkflow"
                })
            }

            function l({
                environment: e,
                workflowIds: t,
                from: i,
                userAction: r
            }) {
                var a;
                let n = o(728372).AppStoreSidebarSpaceViewStore.state;
                if (!n) return;
                let s = (null == (a = n.getSettings()) ? void 0 : a.sidebar_workflow_ids) || [],
                    d = new Set(t),
                    c = s.filter(e => !d.has(e));
                if (c.length === s.length) return;
                (0, o(377796).createAndCommit)({
                    userAction: r,
                    environment: e,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        o(380762).AG(n, e, { ...n.getSettings(),
                            sidebar_workflow_ids: c
                        })
                    }
                });
                let u = s.length - c.length;
                (0, o(104310).u)({
                    event: {
                        eventName: "sidebar_workflow_removed",
                        eventProperties: {
                            from: i,
                            num_agents: u
                        }
                    }
                })
            }

            function d({
                environment: e,
                workflowIds: t,
                from: i
            }) {
                let r = o(728372).AppStoreSidebarSpaceViewStore.state;
                r && ((0, o(377796).createAndCommit)({
                    userAction: "sidebarWorkflowsActions.setSidebarWorkflowIds",
                    environment: e,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        o(380762).AG(r, e, { ...r.getSettings(),
                            sidebar_workflow_ids: t
                        })
                    }
                }), (0, o(104310).u)({
                    event: {
                        eventName: "sidebar_workflow_reordered",
                        eventProperties: {
                            from: i,
                            num_agents: t.length
                        }
                    }
                }))
            }
            o.d(t, {
                GL: () => r,
                Iq: () => n,
                Oj: () => d,
                jg: () => s,
                xG: () => i
            }), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(354520)
        },
        442219: (e, t, o) => {
            o.d(t, {
                w: () => a
            }), o(296540);
            var i = o(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.12 2.37 17.51 15.26",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M3.442 13.102a.625.625 0 0 1-.884 0L.304 10.848a.625.625 0 0 1 .884-.884l1.187 1.187V10a7.625 7.625 0 1 1 2.303 5.46.625.625 0 1 1 .872-.895A6.375 6.375 0 1 0 3.625 10v1.151l1.187-1.187a.625.625 0 1 1 .884.884z"
                        }), (0, i.jsx)("path", {
                            d: "M9.375 5.725a.625.625 0 0 1 1.25 0v3.65H13.6a.625.625 0 0 1 0 1.25H10A.625.625 0 0 1 9.375 10z"
                        })]
                    })
                },
                a = (0, o(104509).wt)("clockArrowBack", r, "default")
        },
        575422: (e, t, o) => {
            o.d(t, {
                m: () => r
            });
            let i = (0, o(109939).YK)({
                untitledAgent: {
                    id: "workflow.emptyWorkflowTitle",
                    defaultMessage: "Untitled agent"
                }
            });

            function r(e, t, o) {
                var r;
                return {
                    name: e.getName() || o || t.formatMessage(i.untitledAgent),
                    icon: e.getRawIcon() || "",
                    isLite: (null == (r = e.getData()) ? void 0 : r.isLite) ? ? !1
                }
            }
        },
        620491: (e, t, o) => {
            o.d(t, {
                z: () => s
            });
            var i = o(296540),
                r = o(474848);
            let a = {
                    unicodeBidi: "plaintext",
                    textAlign: (0, o(619157).A1)() ? "right" : "left"
                },
                n = {
                    agentName: {
                        fontWeight: o(699422).Wy.medium,
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    },
                    agentDescription: {
                        fontSize: 12,
                        color: o(632079).Tj.text.secondary,
                        ...o(699422).RC
                    },
                    agentAuthor: {
                        fontSize: 12,
                        color: o(632079).Tj.text.tertiary
                    },
                    agentNameShimmer: {
                        width: "80%",
                        height: 10,
                        borderRadius: 10
                    },
                    hovered: {
                        background: o(632079).Tj.sidebarItemSelectedBackground
                    }
                };

            function s(e) {
                let {
                    workflowStore: t,
                    isDraggableListItem: s,
                    showDescription: l = !1,
                    showAuthor: c = !1,
                    onInteraction: u
                } = e, g = (0, o(533992).v3)(), f = (0, o(109939).tz)(), p = (0, o(665002).g)(), [w, m] = (0, i.useState)(!1), [k, v] = (0, i.useState)(!1), h = (0, o(682985).uB)(void 0, o(510969).A), [y, b] = (0, i.useState)(void 0), A = (0, o(682985).K8)(() => !t.isReady(), [t]), x = !s, S = l || c, I = (w || k) && !y || o(986939).A.isMobile, j = !I, M = (0, o(682985).K8)(() => !!x && !t.getPublishedArtifactStore(), [t, x]), C = (0, o(682985).K8)(() => (0, o(739185).iZ)({
                    workflowId: t.id,
                    params: x && M ? {
                        workflowViewType: "agent"
                    } : {}
                }), [t.id, x, M]), _ = (0, o(972740).L)(), T = (0, o(682985).K8)(() => {
                    if (!_ || !l) return;
                    let e = (0, o(203462).zf)(g).getData(g, {
                        spaceId: _.id
                    });
                    if (!e) return;
                    let i = e.mostRecentThreads[t.id];
                    if (i) return (0, o(799843).nl)(i.getCreatedTime(), {
                        useUltraCompactFormat: !0
                    })
                }, [t.id, _, l, g]), {
                    name: L,
                    icon: P,
                    description: B,
                    createdByName: W,
                    publishedArtifactStore: z
                } = (0, o(682985).K8)(() => {
                    var e;
                    let i = t.getCreatedByPointer(),
                        r = i && i.table === o(832375).oo9 ? o(807825).L.createChildStore(t, i) : void 0,
                        {
                            name: a,
                            icon: n
                        } = (0, o(575422).m)(t, f, f.formatMessage({
                            id: "workflows.agentCard.untitledAgent",
                            defaultMessage: "New agent"
                        })),
                        l = s ? t.getPublishedArtifactStore() : void 0;
                    return {
                        name: a,
                        icon: n,
                        description: null == (e = t.getData()) ? void 0 : e.description,
                        createdByName: (null == r ? void 0 : r.getFullName(f)) ? ? "",
                        publishedArtifactStore: l
                    }
                }, [f, t, s]), D = (0, o(102292).V)(L), R = (0, i.useCallback)(() => {
                    null == u || u(), (0, o(599231).qt)({
                        action: "open_agent",
                        workflowId: t.id
                    })
                }, [u, t.id]), V = (0, i.useCallback)(() => {
                    o(400198).A.state.isDragging || (m(!0), b(void 0))
                }, []), F = (0, i.useCallback)(() => {
                    o(400198).A.state.isDragging || m(!0)
                }, []), E = (0, i.useCallback)(() => m(!1), []), N = (0, i.useCallback)(() => v(!0), []), K = (0, i.useCallback)(() => v(!1), []), U = (0, o(682985).K8)(() => {
                    var e;
                    return (null == (e = (0, o(346596).k)(g)) ? void 0 : e.id) === t.id
                }, [t, g]), G = (0, i.useMemo)(() => p ? { ...o(153262).hG,
                    transition: "none"
                } : o(153262).hG, [p]), q = (0, o(960253).I)(() => ({
                    linkBox: {
                        borderRadius: 6,
                        transition: p ? "none" : s ? void 0 : "background 150ms ease",
                        ...s && {
                            display: "flex",
                            width: "100%"
                        }
                    },
                    sidebarItem: { ...U && o(132261).DX.currentSelectedSidebarItem,
                        ...!o(986939).A.isMobile && (0, o(153262).Jg)(),
                        position: "relative",
                        ...S && {
                            height: "unset"
                        },
                        alignItems: S ? "start" : "center",
                        ...!s && {
                            paddingTop: 6,
                            paddingBottom: 6,
                            transition: p ? "none" : `background ${o(153262).bM}`
                        }
                    },
                    agentIcon: {
                        marginTop: 2 * !!S
                    },
                    threadTime: {
                        position: "absolute",
                        fontSize: 12,
                        color: o(632079).Tj.text.tertiary,
                        insetInlineEnd: 8,
                        transition: p ? "none" : `opacity ${o(153262).bM}`,
                        ...I && {
                            opacity: 0
                        }
                    },
                    rightIconsBase: {
                        display: "flex",
                        alignItems: "center",
                        pointerEvents: I ? "auto" : "none"
                    },
                    rightIconDraggableListItem: {
                        paddingInlineStart: 3,
                        position: "relative",
                        ...j && { ...o(69916).Qg,
                            display: "block"
                        },
                        ...I && {
                            opacity: 1
                        }
                    },
                    rightIconForDetailedLayout: {
                        position: I ? "relative" : "absolute",
                        ...j && {
                            top: 6,
                            insetInlineEnd: 8,
                            opacity: 0
                        },
                        ...I && {
                            position: "relative",
                            justifyContent: "center",
                            opacity: 1
                        },
                        transition: p ? "none" : `opacity ${o(153262).bM}`
                    },
                    rightIconSimpleLayout: {
                        position: "relative",
                        opacity: +!!I,
                        ...!o(986939).A.isMobile && {
                            transition: p ? "none" : `opacity ${o(153262).bM}`
                        }
                    }
                }), [j, I, s, S, U, p]), O = (0, i.useCallback)(e => {
                    e.preventDefault(), b(new DOMRect(e.clientX, e.clientY)), h.setState({
                        open: !0
                    })
                }, [h]);
                return (0, r.jsx)(o(590422).Q, {
                    style: q.linkBox,
                    href: C,
                    onClick: A ? void 0 : R,
                    onContextMenu: A ? void 0 : O,
                    onMouseEnter: V,
                    onMouseLeave: E,
                    onMouseMove: F,
                    disabled: A,
                    onFocus: N,
                    onBlur: K,
                    ...s && {
                        hoveredStyle: n.hovered,
                        innerStyle: G
                    },
                    children: (0, r.jsx)(o(380559).u, {
                        style: q.sidebarItem,
                        icon: (0, r.jsx)("div", {
                            style: q.agentIcon,
                            children: (0, r.jsx)(o(651790).AgentIcon, {
                                agentIcon: P,
                                workflowStore: z || t,
                                size: 20
                            })
                        }),
                        right: A ? void 0 : (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("div", {
                                style: q.threadTime,
                                children: T ? (0, r.jsx)("span", {
                                    children: T
                                }) : void 0
                            }), (0, r.jsx)("div", {
                                style: { ...q.rightIconsBase,
                                    ...s ? q.rightIconDraggableListItem : S ? q.rightIconForDetailedLayout : q.rightIconSimpleLayout
                                },
                                children: (0, r.jsx)(d, {
                                    buttonPopupStore: h,
                                    context: s ? "sidebar-draggable" : "sidebar-static",
                                    workflowStore: t,
                                    originRect: y
                                })
                            })]
                        }),
                        children: (0, r.jsxs)(o(4458).VP, {
                            flex: 1,
                            minWidth: 0,
                            gap: 2,
                            children: [(0, r.jsx)("div", {
                                style: { ...n.agentName,
                                    ...a
                                },
                                children: A ? (0, r.jsx)(o(795830).P, {
                                    style: n.agentNameShimmer,
                                    emphasized: !0
                                }) : D
                            }), l && B ? (0, r.jsx)("div", {
                                style: n.agentDescription,
                                children: B
                            }) : void 0, c ? (0, r.jsx)("div", {
                                style: n.agentAuthor,
                                children: W
                            }) : void 0]
                        })
                    })
                })
            }
            let l = {
                button: o(986939).A.isMobile ? {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: 4,
                    marginInlineStart: 0
                } : {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                    marginInlineStart: 4
                }
            };

            function d(e) {
                let {
                    buttonPopupStore: t,
                    context: i,
                    workflowStore: a,
                    originRect: n
                } = e, s = (0, o(109939).tz)().formatMessage({
                    defaultMessage: "Agent menu",
                    id: "agents.AgentSidebarItem.more"
                });
                return (0, r.jsx)(o(656252).A, {
                    buttonPopupStore: t,
                    popupType: o(986939).A.isMobile ? o(656252).z.BottomSheet : o(656252).z.Popup,
                    originGap: 4,
                    originRect: n,
                    content: e => (0, r.jsx)(o(957768)._, {
                        workflowStore: a,
                        context: i,
                        dismiss: e.close
                    }),
                    children: e => (0, r.jsx)(o(64960).Ay, {
                        ariaLabel: s,
                        style: l.button,
                        ...e,
                        children: (0, r.jsx)(o(16275).I, {
                            icon: o(361226).ellipsisSmallIcon,
                            size: "sm",
                            colorVariant: "secondary"
                        })
                    })
                })
            }
        },
        651790: (e, t, o) => {
            o.r(t), o.d(t, {
                AgentIcon: () => a,
                DefaultAgentIcon: () => s
            });
            var i = o(296540),
                r = o(474848);

            function a(e) {
                let {
                    agentIcon: t,
                    workflowStore: a,
                    size: n,
                    animated: s = !1
                } = e, l = (0, o(83208).X)("animated_custom_agent_faces"), d = (0, i.useMemo)(() => (0, o(514827).D)({
                    workflowStore: a,
                    workflowIcon: t,
                    size: n,
                    animated: s && l
                }), [t, a, n, s, l]);
                return (0, r.jsx)(o(569553).B6, {
                    icon: d,
                    iconRecordCategory: "workflow",
                    isEmptyPage: !1,
                    size: n,
                    disabled: !0
                })
            }
            let n = {
                cursor: "default"
            };

            function s(e) {
                let t = (0, i.useCallback)(() => {
                    if (e.size < 22) return "xsmall";
                    if (e.size < 28) return "avatar";
                    if (e.size < 36) return "small";
                    if (e.size < 42) return "medium";
                    if (e.size < 48) return "medium_plus";
                    else if (e.size < 50) return "medium_large";
                    else if (e.size < 94) return "large";
                    else return "xlarge"
                }, [e.size]);
                return (0, r.jsx)(o(971375).x, {
                    variant: t(),
                    style: n
                })
            }
        },
        703465: (e, t, o) => {
            o.d(t, {
                k: () => n
            }), o(16280);
            var i = () => o(773352),
                r = () => o(300441);
            let a = (0, o(477465).Dv)("duplicateAgent");
            async function n(e) {
                let {
                    environment: t,
                    sourceWorkflowPointer: n,
                    targetWorkflowId: s,
                    spaceId: l,
                    deferred: d
                } = e;
                (0, o(963580).Ur)(s);
                try {
                    for await (let e of (0, o(259242).UT)({
                        environment: t,
                        eventName: a,
                        request: {
                            workflowPointer: n,
                            targetSpaceId: l,
                            targetWorkflowId: s,
                            addToFavorites: !1
                        },
                        multiCellRouting: {
                            spaceIds: [n.spaceId, l]
                        }
                    })) {
                        if (r().Q.isFail(e)) {
                            let t = e.error ? ? Error("Failed to duplicate agent");
                            i().log({
                                level: "warning",
                                from: "duplicateAgentInBackground",
                                type: "optimisticDuplicationFailed",
                                data: {
                                    workflowId: s,
                                    miscDataToConvertToString: {
                                        error: t instanceof Error ? t.message : String(t)
                                    }
                                }
                            }), d.reject(t);
                            return
                        }
                        if ("success" === e.value.status) return void d.resolve();
                        if ("failure" === e.value.status) {
                            let t = Error(e.value.error ? ? "Failed to duplicate agent");
                            i().log({
                                level: "warning",
                                from: "duplicateAgentInBackground",
                                type: "optimisticDuplicationFailed",
                                data: {
                                    workflowId: s,
                                    miscDataToConvertToString: {
                                        error: t.message
                                    }
                                }
                            }), d.reject(t);
                            return
                        }
                    }
                    let e = Error("Task completed without success status");
                    d.reject(e)
                } finally {
                    (0, o(963580).Lr)(s)
                }
            }
        },
        761615: (e, t, o) => {
            o.d(t, {
                U: () => i
            }), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698);

            function i() {
                return (0, o(682985).K8)(() => {
                    var e;
                    let t = o(728372).AppStoreSidebarSpaceViewStore.state;
                    return t ? Array.from(new Set((null == (e = t.getSettings()) ? void 0 : e.sidebar_workflow_ids) ? ? [])) : []
                }, [])
            }
        },
        957768: (e, t, o) => {
            o.d(t, {
                _: () => g
            }), o(814603), o(147566), o(198721);
            var i = o(296540);
            async function r(e) {
                let {
                    environment: t,
                    workflowPointer: i,
                    spaceStore: r,
                    addToFavorites: a = !0
                } = e, n = function(e) {
                    let {
                        environment: t,
                        spaceStore: i,
                        sourceWorkflowPointer: r
                    } = e, a = o(360851).N.createChildStore(i, r), n = a.getData(), s = (null == n ? void 0 : n.name) ? ? "Untitled Agent", l = null == n ? void 0 : n.icon, d = a.getParentPointer(), c = (0, o(441998).Q)(s);
                    return (0, o(10681).k)({
                        environment: t,
                        spaceStore: i,
                        workflowName: c,
                        workflowIcon: l,
                        sourceWorkflowPointer: r,
                        parentPointer: d
                    })
                }({
                    environment: t,
                    spaceStore: r,
                    sourceWorkflowPointer: i
                });
                if (!n) throw Error("Failed to create placeholder workflow");
                await n.serverCommitResult, a && o(280772).xG({
                    environment: t,
                    workflowId: n.workflowStore.id,
                    from: "duplicate_workflow"
                });
                let s = o(975162).yX();
                return (0, o(703465).k)({
                    environment: t,
                    sourceWorkflowPointer: i,
                    targetWorkflowId: n.workflowStore.id,
                    spaceId: r.id,
                    deferred: s
                }), {
                    workflowStore: n.workflowStore,
                    onComplete: s.promise
                }
            }
            async function a(e) {
                let {
                    environment: t,
                    workflowStore: i
                } = e, {
                    serverCommitResult: r
                } = (0, o(377796).createAndCommit)({
                    environment: t,
                    userAction: "workflowActions.softDeleteWorkflow",
                    cellTarget: {
                        spaceWithId: i.pointer.spaceId
                    },
                    perform: e => {
                        (0, o(421439).y4)({
                            store: i,
                            transaction: e,
                            operation: {
                                pointer: i.pointer,
                                command: "set",
                                path: ["alive"],
                                args: !1
                            }
                        });
                        let t = i.getData(),
                            r = (null == t ? void 0 : t.triggers) || [];
                        if (r.length > 0) {
                            let t = r.map(e => ({ ...e,
                                enabled: !1
                            }));
                            (0, o(421439).y4)({
                                store: i,
                                operation: o(861988).IA({
                                    pointer: i.pointer,
                                    triggers: t
                                }),
                                transaction: e
                            })
                        }
                    },
                    canUndo: !0
                });
                o(280772).Iq({
                    environment: t,
                    workflowId: i.id,
                    from: "agent_deletion"
                }), await r
            }
            o(16280), o(581454);
            var n = o(474848);
            let s = {
                    paddingBlock: 8,
                    paddingInline: 12
                },
                l = {
                    marginBottom: 4
                },
                d = {
                    marginBottom: 0
                };

            function c(e) {
                let {
                    store: t
                } = e, i = (0, o(109939).tz)(), r = (0, o(682985).K8)(() => t.canRead(), [t]), a = (0, o(682985).K8)(() => t.getLastEditedByPointer(), [t]), c = (0, o(682985).K8)(() => t.getLastEditedTime(), [t]), u = (0, o(682985).K8)(() => a ? (0, o(935786).vt)({
                    parentStore: t,
                    pointer: a
                }) : void 0, [t, a]), g = (0, o(682985).K8)(() => c ? (0, o(850640).jE)(c, o(849917).locale, i) : "", [c, i]), f = (0, o(682985).K8)(() => null != u && u.asActor ? (0, o(197018).lR)(i, u) : void 0, [u, i]);
                return r && f && g ? (0, n.jsx)(o(844565).A, {
                    topBorder: !0,
                    children: (0, n.jsx)(o(636518).Ay, {
                        shouldWrapTitle: !0,
                        title: (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(o(324489).V, {
                                isSmall: !0,
                                isSecondaryColor: !0,
                                isMultiline: !0,
                                style: l,
                                children: (0, n.jsx)(o(109939).sA, {
                                    id: "workflowMetadataMenuItem.lastEditedBy",
                                    defaultMessage: "Last edited by {author}",
                                    values: {
                                        author: f
                                    }
                                })
                            }), (0, n.jsx)(o(324489).V, {
                                isSmall: !0,
                                isSecondaryColor: !0,
                                style: d,
                                children: g
                            })]
                        }),
                        style: s
                    })
                }) : null
            }
            let u = {
                keyboardShortcut: {
                    color: o(632079).Tj.text.tertiary,
                    fontSize: 12,
                    whiteSpace: "nowrap"
                }
            };

            function g(e) {
                let {
                    navigate: t
                } = (0, i.useContext)(o(44894).E), {
                    workflowStore: s,
                    context: l,
                    onShowVersionHistory: d,
                    dismiss: g
                } = e, p = (0, o(533992).v3)(), w = (0, o(109939).tz)(), m = (0, o(682985).K8)(() => {
                    var e;
                    return null == (e = s.getSpaceStore()) ? void 0 : e.id
                }, [s]), k = (0, o(611285).P)({
                    name: "custom_agents",
                    spaceId: m,
                    userId: p.currentUser.id
                }) ? ? !1, v = (0, o(346596).L)(p), h = (null == v ? void 0 : v.id) === s.id, y = (0, o(682985).K8)(() => s.getName(), [s]), b = (0, o(761615).U)().includes(s.id), A = (0, o(682985).K8)(() => s.canEdit(), [s]), {
                    canCreate: x
                } = (0, o(639938).V)(), S = (0, o(682985).K8)(() => o(218744).default.getConfig({
                    configName: "custom_agent_sub_features"
                }).duplicate_agents, []), I = (0, o(682985).K8)(() => !!o(218744).default.getConfig({
                    configName: "custom_agent_sub_features"
                }).analytics_view && s.canAdmin(), [s]), j = (0, i.useCallback)(async () => {
                    let e = new URL((0, o(453573).Lm)({
                            workflowId: s.id,
                            params: {}
                        }), window.location.origin).href,
                        [t, i] = await Promise.all([(0, o(161333).r)(), (0, o(969899).jd)()]);
                    await i({
                        environment: p,
                        stringValue: e,
                        copiedMessage: t.copiedLinkToClipboard
                    })
                }, [p, s.id]), M = (0, i.useCallback)(() => {
                    o(280772).xG({
                        environment: p,
                        workflowId: s.id,
                        from: "agent_actions_menu"
                    })
                }, [p, s.id]), C = (0, i.useCallback)(() => {
                    o(280772).Iq({
                        environment: p,
                        workflowId: s.id,
                        from: "agent_actions_menu"
                    })
                }, [p, s.id]), _ = (0, i.useCallback)(async () => {
                    try {
                        let e = s.getSpaceStore();
                        if (!e) return;
                        let {
                            workflowStore: i,
                            onComplete: a
                        } = await r({
                            environment: p,
                            workflowPointer: s.pointer,
                            spaceStore: e
                        });
                        (0, o(599231).Ql)({
                            workflowId: i.id,
                            creationMethod: "duplicate",
                            sourceWorkflowId: s.id
                        }), t({
                            environment: p,
                            url: (0, o(453573).Lm)({
                                workflowId: i.id,
                                params: {
                                    workflowViewType: "settings"
                                },
                                peekModeParam: (0, o(475097).getUrlParamFromPeekMode)(o(387722).A),
                                peekViewBlockId: i.id
                            })
                        }), a.catch(() => {
                            o(647095).f1(w.formatMessage({
                                defaultMessage: "Failed to duplicate Agent. Please try again.",
                                id: "workflows.agentTopbar.duplicateError"
                            }))
                        })
                    } catch (e) {
                        o(647095).f1(w.formatMessage({
                            defaultMessage: "Failed to duplicate Agent. Please try again.",
                            id: "workflows.agentTopbar.duplicateError"
                        }))
                    }
                }, [p, s, t, w]), T = (0, i.useCallback)(async () => {
                    let {
                        accept: e
                    } = await o(647095).Gh({
                        message: w.formatMessage({
                            defaultMessage: "Are you sure you want to move {agentName, select, undefined {this Agent} other {{agentName}}} to Trash?",
                            id: "workflows.agentTopbar.deleteConfirmMessage"
                        }, {
                            agentName: (null == y ? void 0 : y.trim()) ? y : void 0
                        }),
                        acceptLabel: w.formatMessage({
                            id: "workflows.agentTopbar.deleteAcceptLabel",
                            defaultMessage: "Move to Trash"
                        })
                    });
                    if (e) try {
                        await a({
                            environment: p,
                            workflowStore: s
                        }), h && t({
                            environment: p,
                            url: "/ai",
                            skipWorkflowCheck: !0
                        })
                    } catch (e) {
                        o(647095).f1(w.formatMessage({
                            defaultMessage: "Failed to move Agent to Trash. Please try again.",
                            id: "workflows.agentTopbar.deleteError"
                        }))
                    }
                }, [w, p, s, h, y, t]), L = (0, i.useCallback)(() => {
                    t({
                        environment: p,
                        url: (0, o(453573).Lm)({
                            workflowId: s.id,
                            params: {
                                workflowViewType: "settings"
                            },
                            peekModeParam: (0, o(475097).getUrlParamFromPeekMode)(o(387722).A),
                            peekViewBlockId: s.id
                        })
                    })
                }, [p, s, t]), P = (0, i.useCallback)(() => {
                    t({
                        environment: p,
                        url: (0, o(453573).Lm)({
                            workflowId: s.id,
                            params: {
                                workflowViewType: "analytics"
                            }
                        })
                    })
                }, [p, s.id, t]), B = [{
                    key: 0,
                    render: e => (0, n.jsx)(o(844565).A, { ...e,
                        topBorder: !1
                    }),
                    items: (0, o(682985).K8)(() => [...l.startsWith("sidebar") ? "sidebar-draggable" === l ? [{
                        key: "remove-favorite",
                        render: e => (0, n.jsx)(o(95582).A, {
                            icon: (0, n.jsx)(o(16275).I, {
                                icon: o(139780).d
                            }),
                            title: (0, n.jsx)(o(109939).sA, {
                                defaultMessage: "Remove from favorites",
                                id: "sidebar.agents.removeFromFavorites"
                            }),
                            ...e
                        }),
                        action: C
                    }] : [{
                        key: "favorite",
                        render: e => (0, n.jsx)(o(95582).A, {
                            icon: (0, n.jsx)(o(16275).I, {
                                icon: b ? o(139780).d : o(150963).w
                            }),
                            title: b ? w.formatMessage({
                                id: "agents.AgentSidebarItem.unstar",
                                defaultMessage: "Remove from favorites"
                            }) : w.formatMessage({
                                id: "agents.AgentSidebarItem.star",
                                defaultMessage: "Add to favorites"
                            }),
                            ...e
                        }),
                        action: () => {
                            b ? C() : M()
                        }
                    }] : [], ...l.startsWith("sidebar") && A ? [{
                        key: "view-settings",
                        render: e => (0, n.jsx)(o(95582).A, {
                            icon: (0, n.jsx)(o(16275).I, {
                                icon: o(213039).M
                            }),
                            title: (0, n.jsx)(o(109939).sA, {
                                defaultMessage: "View settings",
                                id: "sidebar.agents.viewSettings"
                            }),
                            ...e
                        }),
                        action: L
                    }] : [], ...I ? [{
                        key: "view-analytics",
                        render: e => (0, n.jsx)(o(95582).A, {
                            icon: (0, n.jsx)(o(16275).I, {
                                icon: o(947449).o
                            }),
                            title: (0, n.jsx)(o(109939).sA, {
                                defaultMessage: "View analytics",
                                id: "sidebar.agents.viewAnalytics"
                            }),
                            ...e
                        }),
                        action: P
                    }] : [], ...p.device.isElectron ? [{
                        key: "copy-link-electron",
                        render: e => (0, n.jsx)(o(95582).A, {
                            icon: (0, n.jsx)(o(16275).I, {
                                icon: o(588739).linkIcon
                            }),
                            title: (0, n.jsx)(o(109939).sA, {
                                defaultMessage: "Copy link",
                                id: "workflows.agentTopbar.copyLink"
                            }),
                            right: o(986939).A.isMobile ? void 0 : (0, n.jsx)(o(693592).A, {
                                name: "copyLinkToCurrentPage",
                                onlyShowFirst: !0,
                                style: u.keyboardShortcut
                            }),
                            ...e
                        }),
                        action: j
                    }] : [{
                        key: "copy-link-web",
                        render: e => (0, n.jsx)(o(95582).A, {
                            icon: (0, n.jsx)(o(16275).I, {
                                icon: o(588739).linkIcon
                            }),
                            title: (0, n.jsx)(o(109939).sA, {
                                defaultMessage: "Copy link",
                                id: "workflows.agentTopbar.copyLink"
                            }),
                            right: o(986939).A.isMobile ? void 0 : (0, n.jsx)(o(693592).A, {
                                name: "copyCurrentPageLinkifiedBlockTitle",
                                onlyShowFirst: !0,
                                style: u.keyboardShortcut
                            }),
                            ...e
                        }),
                        action: j
                    }], ..."topbar" === l && d && A ? [{
                        key: "version-history",
                        render: e => (0, n.jsx)(o(95582).A, {
                            icon: (0, n.jsx)(o(16275).I, {
                                icon: o(442219).w
                            }),
                            title: (0, n.jsx)(o(109939).sA, {
                                defaultMessage: "Version history",
                                id: "workflows.agentTopbar.versionHistory"
                            }),
                            ...e
                        }),
                        action: () => {
                            null == d || d()
                        }
                    }] : [], ...x && S && k ? [{
                        key: "duplicate",
                        render: e => (0, n.jsx)(o(95582).A, {
                            icon: (0, n.jsx)(o(16275).I, {
                                icon: o(703696).V
                            }),
                            title: (0, n.jsx)(o(109939).sA, {
                                defaultMessage: "Duplicate",
                                id: "workflows.agentTopbar.duplicateAgent"
                            }),
                            ...e
                        }),
                        action: _
                    }] : [], ...A ? [{
                        key: "delete",
                        render: e => (0, n.jsx)(o(860287).A, {
                            isRed: !0,
                            svg: e => (0, n.jsx)(o(16275).I, {
                                icon: o(968411).trashIcon,
                                style: e
                            }),
                            title: (0, n.jsx)(o(109939).sA, {
                                id: "workflows.agentTopbar.deleteAgent",
                                defaultMessage: "Move to Trash"
                            }),
                            ...e
                        }),
                        action: T
                    }] : []], [j, C, L, P, _, T, x, S, I, k, l, A, p.device.isElectron, d, b, w, M])
                }], W = {
                    menuType: o(986939).A.isMobile ? o(649476).gu.Modal : o(649476).gu.Popup,
                    right: o(986939).A.isMobile && "sidebar-static" === l ? (0, n.jsx)(o(109939).sA, { ...o(789722).W.done
                    }) : void 0,
                    ..."topbar" === l && {
                        width: 256
                    }
                };
                return (0, n.jsxs)(o(747369).A, { ...W,
                    children: [(0, n.jsx)(o(558045).A, {
                        type: o(558045).O.Vertical,
                        onAccept: g,
                        initialFocus: void 0,
                        sections: B
                    }), (0, n.jsx)(c, {
                        store: s
                    }), "topbar" === l ? (0, n.jsx)(f, {}) : void 0]
                })
            }

            function f() {
                return (0, n.jsx)(o(844565).A, {
                    topBorder: !0,
                    children: (0, n.jsx)(o(100246).g, {
                        title: (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "Learn about custom agents",
                            id: "workflows.agentTopbar.learnAboutCustomAgents"
                        }),
                        href: (0, o(442564).x)("guides.customAgentsHelp"),
                        analyticsFrom: "custom_agent_actions_menu"
                    })
                })
            }
        },
        963580: (e, t, o) => {
            o.d(t, {
                Lr: () => s,
                PM: () => a,
                Ur: () => n
            }), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698);
            var i = () => o(546605);
            class r extends i().Store {
                getInitialState() {
                    return {
                        duplicatingWorkflowIds: new Set,
                        isDuplicating: !1
                    }
                }
            }
            let a = new r;

            function n(e) {
                a.update(t => {
                    let o = new Set(t.duplicatingWorkflowIds);
                    return o.add(e), {
                        duplicatingWorkflowIds: o,
                        isDuplicating: o.size > 0
                    }
                })
            }

            function s(e) {
                a.update(t => {
                    if (!t.duplicatingWorkflowIds.has(e)) return t;
                    let o = new Set(t.duplicatingWorkflowIds);
                    return o.delete(e), {
                        duplicatingWorkflowIds: o,
                        isDuplicating: o.size > 0
                    }
                })
            }
        }
    }
]);