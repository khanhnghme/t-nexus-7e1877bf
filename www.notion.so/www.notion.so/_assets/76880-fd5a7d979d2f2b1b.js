"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [43239, 76880], {
        1536: (e, t, r) => {
            r.d(t, {
                l: () => n
            });

            function n(e, t = {
                redirectType: "immediate",
                redirectUrl: r(168962).JZ.notFound
            }) {
                return {
                    name: `requireBootFeatureGate(${e})`,
                    check: () => r(218744).default.isStatsigReady() ? !!r(218744).default.checkGate({
                        gateName: e
                    }) || t : !!(0, r(826711).DG)(e) || t
                }
            }
        },
        5967: (e, t, r) => {
            r.d(t, {
                V: () => n
            });

            function n(e) {
                let {
                    spaceStore: t
                } = e, n = (0, r(993077).nB)(t);
                return (0, r(682985).K8)(() => (0, r(924448).MU)({
                    spaceStore: t,
                    actorRole: n
                }), [t, n])
            }
        },
        18274: (e, t, r) => {
            r.d(t, {
                A: () => i
            }), r(296540);
            var n = r(474848);

            function i(e) {
                return (0, n.jsx)(r(746434).E, {
                    style: e.style,
                    content: (0, n.jsx)(r(109939).sA, {
                        id: "betaBadgeComponent.label",
                        defaultMessage: "Beta"
                    })
                })
            }
        },
        52628: (e, t, r) => {
            r.d(t, {
                w: () => n
            });

            function n(e) {
                return (0, r(545504).w)({
                    url: e,
                    config: { ...r(986939).A,
                        requestedOnAlternateDomain: (0, r(700473).wasRequestedOnAlternateDomain)()
                    }
                })
            }
        },
        77868: (e, t, r) => {
            r.d(t, {
                J: () => n
            });

            function n(e) {
                return (0, r(682985).K8)(() => !!e && (0, r(648334).x)(e), [e])
            }
        },
        88221: (e, t, r) => {
            r.d(t, {
                S: () => n
            });

            function n(e) {
                let {
                    spaceStore: t,
                    shouldCreateTeamStores: n
                } = e, i = (0, r(83208).X)("virtualize_team_browser"), a = (0, r(533992).v3)(), {
                    teams: o,
                    metadata: s
                } = (0, r(413630).LN)({
                    spaceStore: t,
                    shouldCreateTeamStores: n
                }), {
                    teams: l
                } = (0, r(413630).Qh)({
                    spaceStore: t,
                    canTruncateRecordMap: i
                }), {
                    teams: d
                } = (0, r(874048).jG)({
                    userId: a.currentUser.id,
                    spaceId: null == t ? void 0 : t.id,
                    teams: l
                });
                return {
                    joinedTeamsMetadata: s,
                    joinedTeamStores: o,
                    sortedUnjoinedTeamsMetadata: d
                }
            }
        },
        92049: (e, t, r) => {
            r.d(t, {
                G: () => n
            });

            function n(e) {
                let t = e.RouterStore.state.route.name;
                if ("agent" === t) return (0, r(346596).k)(e);
                if ("meet" === t) {
                    var n;
                    let t = (0, r(328765).S)(),
                        i = null == (n = e.currentUser) ? void 0 : n.id;
                    if (!t || !i || !r(218744).default.checkGate({
                            gateName: "agent_in_meetings_route"
                        })) return;
                    let a = e.idCreator.getSpaceIdCreatorSync(t.id),
                        o = (0, r(413388).sX)(i, a);
                    return new(r(970831)).B(e, {
                        id: o,
                        table: r(832375).evP,
                        spaceId: t.id
                    })
                }
                return (0, r(330870).a)()
            }
        },
        102292: (e, t, r) => {
            r.d(t, {
                V: () => n
            });

            function n(e) {
                return (0, r(83208).X)("handle_invalid_workflow_name", {
                    disableExposureLogging: !0
                }) ? (0, r(166788).O)(e) : "string" == typeof e ? e : ""
            }
        },
        166788: (e, t, r) => {
            r.d(t, {
                O: () => n
            });

            function n(e) {
                return "string" == typeof e ? e : "Agent with invalid name"
            }
        },
        171929: (e, t, r) => {
            r.d(t, {
                G: () => n
            });

            function n({
                historyId: e,
                currentUserId: t
            }) {
                return r(255482).K.get({
                    userId: t,
                    key: e
                })
            }
        },
        191627: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var n = r(296540),
                i = r(474848);

            function a({
                badgeConfig: e
            }) {
                let {
                    badge_type: t,
                    badge_click_url: o,
                    standard_badge_click_url: l
                } = e, d = (0, n.useMemo)(() => null != l && l.length ? l : null != o && o.length ? o : void 0, [o, l]);
                switch (t) {
                    case "alpha":
                        return d ? (0, i.jsx)(r(331700).m, {
                            href: d,
                            type: "alpha"
                        }) : null;
                    case "beta":
                        return (0, i.jsx)(s, {
                            href: d
                        });
                    default:
                        return null
                }
            }
            let o = {
                bold: {
                    fontWeight: r(699422).Wy.semibold
                }
            };

            function s({
                href: e
            }) {
                let [t, a] = (0, n.useState)(!1), {
                    state: l,
                    pinPopup: d,
                    unpinPopup: c
                } = (0, r(473234).v)({
                    immediateState: t || void 0
                }), u = (0, n.useMemo)(() => ({
                    onMouseEnter: () => a(!0),
                    onMouseLeave: () => a(!1)
                }), []);
                return (0, i.jsx)(r(182718).zD, {
                    disableMouseCapture: !0,
                    preventCaptureEsc: !0,
                    preventScaleTransition: !0,
                    preventOpacityTransition: !0,
                    originGap: 6,
                    open: !!l,
                    popupType: r(182718).nl.Popup,
                    alignmentToOrigin: "start",
                    placementToOrigin: "bottom",
                    trapFocus: !1,
                    content: () => (0, i.jsxs)(r(4458).VP, {
                        width: 212,
                        alignItems: "flex-start",
                        gap: 8,
                        padding: 12,
                        onMouseEnter: d,
                        onMouseLeave: c,
                        children: [(0, i.jsx)(r(908975).W, {}), (0, i.jsx)(r(111010).D, {
                            styleKey: "bodyRegular",
                            children: (0, i.jsx)(r(109939).sA, {
                                id: "customAgentsRolloutBadge.beta.popupText",
                                defaultMessage: "<b>Custom Agents are free to try during beta.</b> Starting May 4, they use Notion credits, which workspace admins can purchase as an add-on to your plan.",
                                values: {
                                    b: e => (0, i.jsx)("span", {
                                        style: o.bold,
                                        children: e
                                    })
                                }
                            })
                        }), e ? (0, i.jsx)(r(548436).A, {
                            href: e,
                            external: !0,
                            children: (0, i.jsx)(r(109939).sA, {
                                id: "customAgentsRolloutBadge.learnMore",
                                defaultMessage: "Learn more"
                            })
                        }) : null]
                    }),
                    children: (0, i.jsx)("div", { ...u,
                        children: e ? (0, i.jsx)(r(331700).m, {
                            href: e,
                            type: "beta"
                        }) : (0, i.jsx)(r(18274).A, {})
                    })
                })
            }
        },
        225455: (e, t, r) => {
            r.d(t, {
                i: () => n
            });
            async function n(e) {
                let {
                    environment: t,
                    currentUserId: n,
                    teamStore: i,
                    spaceId: a,
                    from: o,
                    andNavigateToTeamHome: s
                } = e;
                if (!n) return !1;
                let l = await t.api.callApi({
                    eventName: "updateTeamMembers",
                    environment: t,
                    data: {
                        spaceId: a,
                        teamId: i.id,
                        newMembersToAdd: [{
                            type: "member",
                            entity_type: "user",
                            user_id: n
                        }]
                    }
                });
                return "failed" === l.type ? ((0, r(21731).O)(l), !1) : ((0, r(558389).s)({
                    environment: t,
                    teamStore: i,
                    spaceId: a,
                    from: o,
                    newRole: "member",
                    usingAdminPrivileges: !1,
                    andNavigateToTeamHome: s
                }), !0)
            }
        },
        233032: (e, t, r) => {
            r.d(t, {
                J: () => eV,
                default: () => eW
            }), r(16280);
            var n = r(296540),
                i = () => r(970831),
                a = () => r(832375);

            function o(e) {
                let t = (0, r(67499).S)();
                return (0, r(682985).K8)(() => {
                    let n = (0, r(888).$)(t) || r(728372).AppStoreMainEditorCurrentBlockStore.state;
                    if (n && "page" === e.name && e.blockId) return i().B.createChildStore(n, {
                        table: a().evP,
                        id: e.blockId,
                        spaceId: e.spaceId
                    })
                }, [e, t])
            }
            var s = r(474848);
            let l = {
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                    marginInlineEnd: 6,
                    paddingInlineStart: 2,
                    paddingInlineEnd: 4
                },
                d = {
                    padding: 0,
                    boxShadow: "none",
                    background: "none"
                },
                c = {
                    padding: 0
                };

            function u({
                workflowStore: e,
                onClose: t
            }) {
                let i, a = (0, r(533992).v3)(),
                    o = (0, r(109939).tz)(),
                    g = (0, r(682985).K8)(() => (0, r(575422).m)(e, o), [e, o]),
                    p = (0, r(682985).K8)(() => e.canEdit(), [e]),
                    [m, f] = (0, n.useState)(g.name);
                (0, n.useEffect)(() => {
                    f(g.name)
                }, [g.name]);
                let h = (0, n.useCallback)(e => {
                        f(e.target.value)
                    }, []),
                    v = (0, n.useCallback)(() => {
                        if (!e || !p) return;
                        let n = m.trim();
                        n && n !== g.name && (0, r(795326).X)({
                            workflowStore: e,
                            name: n,
                            environment: a
                        }), t()
                    }, [e, p, m, g.name, t, a]);
                return i = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal
                } : {
                    menuType: r(649476).gu.Popup,
                    width: 380
                }, (0, s.jsx)(r(747369).A, { ...i,
                    children: (0, s.jsxs)("div", {
                        style: r(791923).R.wrapper,
                        children: [(0, s.jsx)("span", {
                            style: l,
                            children: (0, s.jsx)(r(651790).AgentIcon, {
                                agentIcon: g.icon,
                                workflowStore: e,
                                size: 18
                            })
                        }), (0, s.jsx)(r(310324).Ay, {
                            focusInitial: !0,
                            selectAll: !r(986939).A.isMobile,
                            value: m,
                            onChange: h,
                            onSubmit: v,
                            onBlur: v,
                            onCancel: t,
                            disabled: !p,
                            showClearButton: !1,
                            suppressFocusRing: !0,
                            inputStyle: r(791923).R.input,
                            inputOuterStyle: d,
                            style: c
                        })]
                    })
                })
            }
            let g = (0, r(109939).YK)({
                    agentFallbackName: {
                        id: "breadcrumb.agent.agentFallbackName",
                        defaultMessage: "Agent"
                    }
                }),
                p = {
                    padding: "4px 8px",
                    minWidth: 0,
                    maxWidth: 400,
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 1,
                    gap: 6
                },
                m = {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                };

            function f({
                route: e
            }) {
                let t = (0, r(682985).K8)(() => {
                        let t = (0, r(328765).S)();
                        if (t && e.workflowId) return r(360851).N.createChildStore(t, {
                            table: a().C0E,
                            id: e.workflowId,
                            spaceId: t.id
                        })
                    }, [e.workflowId]),
                    n = (0, r(109939).tz)(),
                    i = n.formatMessage(g.agentFallbackName),
                    o = (0, r(682985).K8)(() => t ? (0, r(575422).m)(t, n, i) : {
                        name: i,
                        icon: ""
                    }, [t, n, i]),
                    l = (0, r(102292).V)(o.name),
                    d = (0, r(682985).K8)(() => (null == t ? void 0 : t.canEdit()) ? ? !1, [t]);
                return t && d ? (0, s.jsx)(r(656252).A, {
                    popupType: r(986939).A.isMobile ? r(182718).nl.BottomSheet : r(182718).nl.Popup,
                    content: ({
                        close: e
                    }) => (0, s.jsx)(u, {
                        workflowStore: t,
                        onClose: e
                    }),
                    bottomSheetInitialState: "half",
                    alignmentToOrigin: "center",
                    originGap: 4,
                    children: e => (0, s.jsxs)(r(988022).p, { ...e,
                        shouldShrink: !0,
                        size: "sm",
                        disabled: !d,
                        style: p,
                        children: [(0, s.jsx)(r(651790).AgentIcon, {
                            agentIcon: o.icon,
                            workflowStore: t,
                            size: 16
                        }), (0, s.jsx)("span", {
                            style: m,
                            children: l
                        })]
                    })
                }) : (0, s.jsxs)("span", {
                    style: p,
                    children: [t ? (0, s.jsx)(r(651790).AgentIcon, {
                        agentIcon: o.icon,
                        workflowStore: t,
                        size: 16
                    }) : void 0, (0, s.jsx)("span", {
                        style: m,
                        children: l
                    })]
                })
            }

            function h({
                route: e,
                config: t
            }) {
                let {
                    navigate: i
                } = (0, n.useContext)(r(44894).E), o = (0, r(533992).v3)(), l = (0, r(972740).L)(), d = (0, r(682985).K8)(() => {
                    if (l && e.agentChatThreadId) return r(174148).E.createChildStore(l, {
                        table: a().Toz,
                        id: e.agentChatThreadId,
                        spaceId: l.id
                    })
                }, [e.agentChatThreadId, l]), c = (0, r(682985).K8)(() => d ? d.isReady() ? "ready" : "loading" : "new", [d]), u = n.useCallback(({
                    newThreadStore: t
                }) => {
                    e.workflowId && null != t && t.id && i({
                        environment: o,
                        url: (0, r(453573).Lm)({
                            workflowId: e.workflowId,
                            params: {
                                agentChatThreadId: t.id
                            }
                        })
                    })
                }, [e.workflowId, o, i]);
                return l ? (0, s.jsx)(r(4458).fI, {
                    alignItems: "center",
                    flexShrink: 1,
                    children: (0, s.jsx)(r(656592).He, {
                        threadStore: d,
                        threadStoreState: c,
                        onThreadChange: u,
                        parentStore: l,
                        workflowId: (0, r(16712).BI)(t)
                    })
                }) : null
            }
            r(898992), r(354520), r(581454);
            let v = {
                    marginInlineStart: 8,
                    marginInlineEnd: 8
                },
                x = function(e) {
                    let {
                        stores: t,
                        disabled: n
                    } = e, i = (0, r(533992).v3)(), a = {
                        display: "flex",
                        alignItems: "center",
                        flexShrink: 0
                    };
                    return (0, s.jsx)(r(656252).A, {
                        disabled: n,
                        popupType: r(986939).A.isMobile ? r(656252).z.SlideUp : r(656252).z.Popup,
                        content: e => {
                            let n;
                            return n = r(986939).A.isMobile ? {
                                menuType: r(649476).gu.Modal,
                                title: (0, s.jsx)(r(109939).sA, {
                                    defaultMessage: "Breadcrumb",
                                    id: "breadcrumb.mobileBreadcrumbMenu.title"
                                }),
                                right: (0, s.jsx)(r(109939).sA, { ...r(789722).W.done
                                }),
                                onClickRight: e.close
                            } : {
                                menuType: r(649476).gu.Popup,
                                width: 240
                            }, (0, s.jsx)(r(747369).A, { ...n,
                                children: (0, s.jsx)(r(558045).A, {
                                    type: r(558045).O.Vertical,
                                    onAccept: e.close,
                                    initialFocus: void 0,
                                    sections: (0, r(874218).Y)({
                                        environment: i,
                                        stores: t
                                    })
                                })
                            })
                        },
                        children: e => r(986939).A.isMobile ? (0, s.jsxs)(r(64960).Ay, {
                            style: { ...a
                            },
                            disabled: n,
                            ...e,
                            children: [(0, s.jsx)(r(29305).f, {}), (0, s.jsx)("div", {
                                style: v,
                                children: "..."
                            }), (0, s.jsx)(r(29305).f, {})]
                        }) : (0, s.jsxs)("div", {
                            style: a,
                            children: [(0, s.jsx)(r(988022).p, {
                                size: "sm",
                                disabled: n,
                                ...e,
                                children: "..."
                            }), (0, s.jsx)(r(29305).f, {})]
                        })
                    })
                };
            r(944114);
            var b = () => r(531353);
            let S = (0, r(109939).YK)({
                newDatabasePlaceholder: {
                    id: "collectionBreadcrumbHelpers.newDatabasePlaceholder",
                    defaultMessage: "New database"
                }
            });
            async function y(e) {
                let {
                    collectionId: t,
                    spaceId: n,
                    environment: i
                } = e;
                try {
                    let e = await r(308825).T.searchActions.load(),
                        {
                            results: a
                        } = await e.searchPagesInCollection({
                            environment: i,
                            query: "",
                            collectionId: t,
                            limit: 7,
                            spaceId: n,
                            excludeTemplates: !0,
                            source: "breadcrumb_browser",
                            includePublicPagesWithoutExplicitAccess: !1,
                            boostRecentlyViewedPages: !0,
                            ignoresHighlight: !0
                        });
                    return {
                        blockIds: a,
                        spaceId: n
                    }
                } catch (e) {
                    (0, r(222024).t)().error({
                        from: "breadcrumbBrowser",
                        type: "fetchCollectionSiblings",
                        error: e
                    });
                    return
                }
            }

            function j(e) {
                return e.canRead() && e.isNavigableBlock()
            }
            async function w(e, t, r) {
                let n = t.getCollectionStoreIfSingleSource();
                if (!n) return;
                let o = n.getSpaceId();
                if (!o) return;
                let s = await y({
                    collectionId: n.id,
                    spaceId: o,
                    environment: r
                });
                if (!s) return;
                let l = [];
                for (let t of s.blockIds) {
                    if (t === e.id) continue;
                    let r = i().B.createChildStore(e, {
                        table: a().evP,
                        id: t,
                        spaceId: o
                    });
                    j(r) && l.push(r)
                }
                return {
                    pages: l
                }
            }

            function I({
                store: e,
                pageVisitSource: t
            }) {
                var n, i;
                return (0, r(506069).C)({
                    collectionId: e.id,
                    spaceId: e.getSpaceId(),
                    spaceDomain: null == (n = e.getSpaceStore()) ? void 0 : n.getEditDomain(),
                    parentCvbId: null == (i = e.getParentPointer()) ? void 0 : i.id,
                    pageVisitSource: t,
                    swapDsPrefix: (0, r(904715).pX)()
                })
            }
            r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            var T = () => r(195304);
            let k = n.createContext(null);

            function A(e) {
                return null !== e && window.clearTimeout(e), null
            }

            function C(e) {
                let t = (0, n.useRef)({
                        panels: new Set,
                        triggers: new Map,
                        activeTriggerId: null,
                        closeTimer: null
                    }),
                    [r, i] = (0, n.useState)(!1),
                    a = (0, n.useCallback)(() => {
                        let e = t.current;
                        e.closeTimer = A(e.closeTimer)
                    }, []),
                    o = (0, n.useCallback)(() => {
                        let e = t.current,
                            r = e.activeTriggerId ? e.triggers.get(e.activeTriggerId) : void 0;
                        null == r || r.close()
                    }, []),
                    l = (0, n.useCallback)(() => {
                        let e = t.current;
                        null === e.closeTimer && (e.closeTimer = window.setTimeout(() => {
                            e.closeTimer = null, o()
                        }, 200))
                    }, [o]),
                    d = (0, n.useCallback)((e, r) => {
                        let n = t.current,
                            i = n.activeTriggerId;
                        if (i) {
                            var a;
                            let t = (null == (a = n.triggers.get(i)) ? void 0 : a.getButtonRect()) ? ? null;
                            if (t && (0, T().ux)(t, e, r)) return !0
                        }
                        for (let t of n.panels)
                            if ((0, T().ux)(t.getBoundingClientRect(), e, r)) return !0;
                        return !1
                    }, []),
                    c = (0, n.useMemo)(() => ({
                        registerPanel: e => t.current.panels.add(e),
                        unregisterPanel: e => t.current.panels.delete(e),
                        registerTrigger: (e, r) => t.current.triggers.set(e, r),
                        unregisterTrigger: e => {
                            let r = t.current;
                            r.triggers.delete(e), r.activeTriggerId === e && (a(), r.activeTriggerId = null, i(!1))
                        },
                        setActiveTrigger: e => {
                            let r = t.current;
                            for (let [t, n] of (a(), r.triggers)) t !== e && n.close();
                            r.activeTriggerId = e, i(!0)
                        },
                        clearActiveTrigger: e => {
                            let r = t.current;
                            r.activeTriggerId === e && (a(), r.activeTriggerId = null, i(!1))
                        }
                    }), [a]);
                return (0, n.useEffect)(() => {
                    if (r) return document.addEventListener("mousemove", e, !0), document.documentElement.addEventListener("mouseleave", t), () => {
                        document.removeEventListener("mousemove", e, !0), document.documentElement.removeEventListener("mouseleave", t), a()
                    };

                    function e(e) {
                        d(e.clientX, e.clientY) ? a() : l()
                    }

                    function t() {
                        l()
                    }
                }, [r, d, l, a]), (0, s.jsx)(k.Provider, {
                    value: c,
                    children: e.children
                })
            }
            k.displayName = "BreadcrumbMenuRootContext";
            let M = n.createContext(null);

            function P(e) {
                let [t, r] = (0, n.useState)(null), i = (0, n.useRef)(null), a = (0, n.useCallback)(e => {
                    i.current && window.clearTimeout(i.current), i.current = window.setTimeout(() => {
                        i.current = null, r(e)
                    }, 100)
                }, []), o = (0, n.useCallback)(() => {
                    i.current && window.clearTimeout(i.current), i.current = window.setTimeout(() => {
                        i.current = null, r(null)
                    }, 200)
                }, []), l = (0, n.useMemo)(() => ({
                    expandedSubmenuId: t,
                    expandSubmenu: a,
                    collapseSubmenu: o
                }), [t, a, o]);
                return (0, s.jsx)(M.Provider, {
                    value: l,
                    children: e.children
                })
            }

            function B() {
                return (0, n.useContext)(M) ? ? void 0
            }

            function R(e) {
                let {
                    isOpen: t,
                    originRect: n,
                    placementToOrigin: i,
                    originGap: a,
                    onDismiss: o,
                    children: l
                } = e;
                return t && n ? (0, s.jsx)(r(182718).zD, {
                    popupType: r(423291).n.Popup,
                    open: !0,
                    originRect: n,
                    placementToOrigin: i,
                    alignmentToOrigin: "start",
                    originGap: a,
                    disableMouseCapture: !0,
                    preventBlockRenderQueueOnEnter: !0,
                    preventScaleTransition: !0,
                    preventCaptureEsc: !0,
                    trapFocus: !1,
                    content: () => (0, s.jsx)(E, {
                        children: l
                    }),
                    style: r(394337).CL.popupOverflow,
                    onDismiss: o
                }) : null
            }

            function E(e) {
                let t = (0, n.useRef)(null),
                    r = (0, n.useContext)(k);
                return (0, n.useEffect)(() => {
                    let e = t.current;
                    if (e && r) return r.registerPanel(e), () => r.unregisterPanel(e)
                }, [r]), (0, s.jsx)("div", {
                    ref: t,
                    children: (0, s.jsx)(P, {
                        children: e.children
                    })
                })
            }

            function K(e) {
                let {
                    isOpen: t,
                    originRect: r,
                    parent: n,
                    children: i
                } = e;
                return (0, s.jsx)(R, {
                    isOpen: t,
                    originRect: r,
                    placementToOrigin: "bottom",
                    originGap: 0,
                    onDismiss: n.close,
                    children: i
                })
            }

            function L(e) {
                let {
                    id: t,
                    canOpen: r
                } = e, i = (0, n.useContext)(k), [a, o] = (0, n.useState)(!1), [s, l] = (0, n.useState)(void 0), d = (0, n.useRef)(null), c = (0, n.useRef)(null), u = (0, n.useCallback)(() => {
                    c.current = A(c.current)
                }, []), g = (0, n.useRef)(() => {});
                g.current = () => {
                    u(), o(!1), null == i || i.clearActiveTrigger(t)
                }, (0, n.useEffect)(() => (null == i || i.registerTrigger(t, {
                    getButtonRect: () => {
                        var e;
                        return (null == (e = d.current) ? void 0 : e.getBoundingClientRect()) ? ? null
                    },
                    close: () => g.current()
                }), () => {
                    c.current = A(c.current), g.current(), null == i || i.unregisterTrigger(t)
                }), [i, t]);
                let p = (0, n.useCallback)(() => {
                    r && null === c.current && (c.current = window.setTimeout(() => {
                        c.current = null, null == i || i.setActiveTrigger(t), d.current && l(d.current.getBoundingClientRect()), o(!0)
                    }, 100))
                }, [r, i, t]);
                return {
                    isOpen: a,
                    originRect: s,
                    buttonRef: d,
                    parent: (0, n.useMemo)(() => ({
                        close: () => g.current()
                    }), []),
                    handleOpen: p,
                    handleCancelOpen: u
                }
            }

            function O(e) {
                let {
                    storeId: t,
                    triggerId: i,
                    canOpen: a,
                    showDivider: o,
                    disabled: l,
                    href: d,
                    buttonContent: c,
                    renderPopupContent: u
                } = e, {
                    isOpen: g,
                    originRect: p,
                    buttonRef: m,
                    parent: f,
                    handleOpen: h,
                    handleCancelOpen: v
                } = L({
                    id: i,
                    canOpen: !l && a
                });
                return (0, s.jsxs)(n.Fragment, {
                    children: [(0, s.jsx)(r(988022).p, {
                        ref: m,
                        ...void 0 !== d ? {
                            href: d,
                            external: !1
                        } : {},
                        style: r(394337).CL.button,
                        hoveredStyle: r(394337).CL.buttonHovered,
                        size: "sm",
                        shouldShrink: !0,
                        disabled: l,
                        onMouseEnter: h,
                        onMouseLeave: v,
                        children: c
                    }), (0, s.jsx)(K, {
                        isOpen: g,
                        originRect: p,
                        parent: f,
                        children: u(f)
                    }), o ? (0, s.jsx)(r(29305).f, {}) : void 0]
                }, t)
            }

            function V(e) {
                let {
                    viewStore: t,
                    ...n
                } = e, i = (0, r(682985).K8)(() => ({
                    name: t.getName(),
                    type: t.getType(),
                    icon: t.getFormat().collection_view_icon
                }), [t]);
                return (0, s.jsx)(r(95582).A, { ...n,
                    icon: (0, s.jsx)(r(647905).hy, {
                        color: "regular",
                        viewIcon: i.icon,
                        viewType: i.type,
                        size: 16
                    }),
                    title: (0, s.jsx)(r(437188).A, {
                        collectionViewName: i.name,
                        collectionViewType: i.type ? ? "table"
                    }),
                    className: "notranslate"
                })
            }

            function N(e) {
                let {
                    store: t,
                    showDivider: n,
                    maxWidth: i,
                    iconSize: a,
                    disabled: o
                } = e, l = (0, r(682985).K8)(() => I({
                    store: t,
                    pageVisitSource: r(254656).y8.Breadcrumb
                }), [t]), d = (0, r(682985).K8)(() => t.getParentCollectionViewBlockStore(), [t]), c = (0, r(682985).K8)(() => d ? d.getCollectionViewStores().filter(e => {
                    var r;
                    return (null == (r = e.getCollectionStore()) ? void 0 : r.id) === t.id
                }) : [], [d, t]), u = c.length > 0;
                return (0, s.jsx)(O, {
                    storeId: t.id,
                    triggerId: `datasource-${t.id}`,
                    canOpen: u,
                    showDivider: n,
                    disabled: o,
                    href: l,
                    buttonContent: (0, s.jsx)(r(373001).A, {
                        store: t,
                        maxWidth: i,
                        iconSize: a,
                        disableHoverTooltip: !0
                    }),
                    renderPopupContent: e => d ? (0, s.jsx)(_, {
                        collectionStore: t,
                        parentCvbStore: d,
                        viewStores: c,
                        parent: e
                    }) : null
                })
            }

            function _(e) {
                let {
                    parentCvbStore: t,
                    viewStores: n,
                    parent: i
                } = e, a = (0, r(533992).v3)(), o = n.map(e => ({
                    key: e.id,
                    render: t => (0, s.jsx)(V, {
                        viewStore: e,
                        ...t
                    }),
                    action: n => {
                        let o = (0, r(7029).V)(n.event);
                        (0, r(545586).navigateToBlock)({
                            environment: a,
                            store: t,
                            collectionViewId: e.id,
                            openInNew: o,
                            pageVisitSource: r(254656).y8.Breadcrumb
                        }), o || i.close()
                    }
                }));
                return (0, s.jsx)(r(747369).A, {
                    menuType: r(649476).gu.Popup,
                    width: r(394337).M2,
                    children: (0, s.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        initialFocus: void 0,
                        suppressFocusRing_PLEASE_USE_SPARINGLY: !0,
                        resetFocusOnMouseOut: !0,
                        sections: [{
                            key: "views",
                            items: o,
                            render: e => (0, s.jsx)(r(844565).A, { ...e,
                                title: (0, s.jsx)(r(109939).sA, {
                                    defaultMessage: "Views",
                                    id: "DataSourceViewsPopup.viewsLabel"
                                }),
                                children: e.children
                            })
                        }]
                    })
                })
            }
            M.displayName = "BreadcrumbMenuLevelContext";
            let D = {
                    display: "flex",
                    alignItems: "center",
                    minWidth: 0
                },
                F = {
                    display: "flex",
                    minWidth: 0,
                    fontSize: "inherit",
                    paddingTop: 2,
                    paddingBottom: 2,
                    paddingInlineStart: 6,
                    paddingInlineEnd: 6
                };

            function U(e) {
                let {
                    store: t,
                    showDivider: i,
                    maxWidth: a,
                    iconSize: o,
                    emojiSize: l,
                    highlighter: d,
                    disabled: c
                } = e, u = (0, r(533992).v3)(), g = (0, r(682985).K8)(() => t.getParentCollectionViewBlockStore(), [t]), {
                    url: p,
                    canEdit: m
                } = (0, r(682985).K8)(() => ({
                    url: I({
                        store: t,
                        pageVisitSource: r(254656).y8.Breadcrumb
                    }),
                    canEdit: t.canEdit()
                }), [t]), {
                    value: f
                } = (0, r(815048).fJ)(r(411648).VI.duplicateActions), h = (0, r(682985).K8)(() => t.getSpaceId(), [t]), v = (0, n.useCallback)(e => {
                    (0, r(377796).createAndCommit)({
                        userAction: "BreadcrumbDataSourceButton.onDrop",
                        environment: u,
                        cellTarget: h ? {
                            spaceWithId: h
                        } : void 0,
                        canUndo: !0,
                        perform: n => {
                            let {
                                droppedDirection: i,
                                droppedStores: a,
                                duplicate: o
                            } = e;
                            i === r(966225).bH.Onto && r(880902).MS({
                                environment: u,
                                targetStore: t,
                                droppedDirection: i,
                                droppedStores: a,
                                duplicate: o,
                                transaction: n,
                                duplicateActions: f
                            })
                        }
                    })
                }, [u, t, f, h]);
                if (!g) return null;
                let x = (0, s.jsx)(r(373001).A, {
                    store: t,
                    maxWidth: a,
                    iconSize: o,
                    emojiSize: l,
                    highlighter: d
                });
                return (0, s.jsxs)(n.Fragment, {
                    children: [(0, s.jsx)(r(611752).Ay, {
                        store: g,
                        canDropOnto: m,
                        onSelectableDrop: v,
                        style: D,
                        analyticsName: "breadcrumb",
                        shouldShowDropZone: !0,
                        children: (0, s.jsx)(r(988022).p, {
                            href: p,
                            external: !1,
                            style: F,
                            size: "sm",
                            shouldShrink: !0,
                            disabled: c,
                            children: x
                        })
                    }), i ? (0, s.jsx)(r(29305).f, {}) : void 0]
                }, t.id)
            }
            r(737550);
            let z = {
                morePagesCaption: {
                    fontSize: 14,
                    color: r(632079).Tj.text.secondary,
                    marginTop: 0,
                    marginBottom: 0
                }
            };

            function W(e, t) {
                return e > 5 && !t && e - 5 > 1
            }

            function G(e) {
                let {
                    allItems: t,
                    currentPageId: r,
                    showAllPages: n
                } = e;
                return W(t.length, n) ? r ? {
                    visibleItems: function(e) {
                        let {
                            allItems: t,
                            currentPageId: r,
                            limit: n
                        } = e, i = t.findIndex(e => e.id === r);
                        return i < 0 || i < n ? t.slice(0, n) : [t[i], ...t.filter(e => e.id !== r).slice(0, n - 1)]
                    }({
                        allItems: t,
                        currentPageId: r,
                        limit: 5
                    }),
                    extraCount: t.length - 5
                } : {
                    visibleItems: t.slice(0, 5),
                    extraCount: t.length - 5
                } : {
                    visibleItems: t,
                    extraCount: 0
                }
            }

            function H(e) {
                let {
                    extraCount: t,
                    setShowAllItems: n,
                    menuLevel: i
                } = e;
                return {
                    key: "more-items-toggle-button",
                    render: e => (0, s.jsx)(r(95582).A, { ...e,
                        style: z.morePagesCaption,
                        title: (0, s.jsx)(r(109939).sA, {
                            defaultMessage: "{extraPages} more",
                            values: {
                                extraPages: t
                            },
                            id: "PageBreadcrumbPopup.moreChildren"
                        }),
                        onClick: () => n(e => !e),
                        onMouseEnter: t => {
                            null == i || i.collapseSubmenu(), e.onMouseEnter(t)
                        },
                        className: "notranslate"
                    }),
                    action: () => {}
                }
            }

            function q(e) {
                let {
                    items: t,
                    sectionLabel: n
                } = e;
                return (0, s.jsx)(r(747369).A, {
                    menuType: r(649476).gu.Popup,
                    width: 240,
                    children: (0, s.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        initialFocus: void 0,
                        suppressFocusRing_PLEASE_USE_SPARINGLY: !0,
                        resetFocusOnMouseOut: !0,
                        sections: [{
                            key: "pages",
                            items: t,
                            render: e => (0, s.jsx)(r(844565).A, { ...e,
                                title: n ? (0, s.jsx)(J, {
                                    sectionLabel: n
                                }) : void 0,
                                children: e.children
                            })
                        }]
                    })
                })
            }

            function J(e) {
                let {
                    sectionLabel: t
                } = e;
                if ("object" == typeof t) return (0, s.jsx)(r(109939).sA, {
                    defaultMessage: "Other pages in {name}",
                    values: {
                        name: t.collectionName
                    },
                    id: "PageBreadcrumbPopup.collectionSiblingsLabel"
                });
                switch (t) {
                    case "views":
                        return (0, s.jsx)(r(109939).sA, {
                            defaultMessage: "Views",
                            id: "PageBreadcrumbPopup.viewsLabel"
                        });
                    case "private":
                        return (0, s.jsx)(r(109939).sA, {
                            defaultMessage: "Private",
                            id: "PageBreadcrumbPopup.privateLabel"
                        });
                    case "shared":
                        return (0, s.jsx)(r(109939).sA, {
                            defaultMessage: "Shared",
                            id: "PageBreadcrumbPopup.sharedLabel"
                        })
                }(0, r(722371).HB)(t)
            }

            function $(e) {
                var t;
                let {
                    isOpen: r,
                    originRef: n,
                    onDismiss: i,
                    children: a
                } = e;
                return (0, s.jsx)(R, {
                    isOpen: r,
                    originRect: null == (t = n.current) ? void 0 : t.getBoundingClientRect(),
                    placementToOrigin: "right",
                    originGap: 4,
                    onDismiss: i,
                    children: a
                })
            }
            let Y = {
                currentPage: {
                    background: r(632079).Tj.blue.background.secondaryTranslucent
                },
                triggerPage: {
                    background: r(632079).Tj.background.secondary
                }
            };

            function Q(e) {
                let {
                    pageStore: t,
                    parentPopup: i,
                    isSubpage: a,
                    triggerPageId: o,
                    ...l
                } = e, d = (0, n.useRef)(null), c = B(), u = (null == c ? void 0 : c.expandedSubmenuId) === t.id, g = () => null == c ? void 0 : c.collapseSubmenu(), p = (0, r(682985).K8)(() => {
                    let e = r(728372).AppStoreMainEditorCurrentBlockStore.state;
                    return e && t.id === e.id ? Y.currentPage : o && t.id === o ? Y.triggerPage : void 0
                }, [t, o]);
                return (0, r(682985).K8)(() => (0, b().Mr)({
                    store: t
                }).length > 0 || t.isCollectionView() && t.getCollectionViewStores().length > 0, [t]) ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        ref: d,
                        onMouseOver: () => null == c ? void 0 : c.expandSubmenu(t.id),
                        children: (0, s.jsx)(r(103558).A, { ...l,
                            store: t,
                            hidePath: !0,
                            isSubpage: a,
                            buttonStyle: p,
                            right: (0, s.jsx)(r(16275).I, {
                                icon: r(491469).arrowChevronSingleRightSmallIcon,
                                size: "sm",
                                colorVariant: "disabled"
                            })
                        })
                    }), (0, s.jsx)($, {
                        isOpen: u,
                        originRef: d,
                        onDismiss: g,
                        children: (0, s.jsx)(er, {
                            store: t,
                            parent: i,
                            displayedPages: "children"
                        })
                    })]
                }) : (0, s.jsx)("div", {
                    onMouseOver: g,
                    children: (0, s.jsx)(r(103558).A, { ...l,
                        store: t,
                        hidePath: !0,
                        isSubpage: a,
                        buttonStyle: p
                    })
                })
            }
            let X = {
                morePagesCaption: {
                    fontSize: 14,
                    color: r(632079).Tj.text.secondary,
                    marginTop: 0,
                    marginBottom: 0
                },
                shimmerRow: {
                    display: "flex",
                    alignItems: "center",
                    paddingTop: 4,
                    paddingBottom: 4,
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8
                },
                shimmerIcon: {
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                    flexShrink: 0,
                    marginInlineEnd: 8
                },
                shimmerText: {
                    width: 120,
                    height: 20,
                    borderRadius: 4
                }
            };

            function Z(e) {
                let {
                    store: t,
                    parent: a,
                    navigableParentStore: o
                } = e, l = (0, r(533992).v3)(), d = (0, r(109939).tz)(), [c, u] = (0, n.useState)(!1), g = B(), {
                    siblings: p,
                    isLoading: m
                } = function(e) {
                    let {
                        store: t,
                        navigableParentStore: a
                    } = e, o = (0, r(533992).v3)(), [s, l] = (0, n.useState)(null), [d, c] = (0, n.useState)(!1), [u, g] = (0, n.useState)(""), p = `${t.id}:${a.id}`;
                    return (0, n.useEffect)(() => {
                        if (p === u) return;
                        let e = function(e) {
                            if (e.getCollectionStoreIfSingleSource())
                                for (let t of e.getCollectionViewStores()) {
                                    let r = t.getFormat().page_pointer;
                                    if (r) {
                                        let t = i().B.createChildStore(e, {
                                                table: r.table,
                                                id: r.id
                                            }),
                                            n = (0, b().Mr)({
                                                store: t
                                            });
                                        if (n.length > 0) return {
                                            pages: n
                                        }
                                    }
                                }
                        }(a);
                        if (e) {
                            l(e), c(!1);
                            return
                        }
                        c(!0);
                        let r = !1;
                        return w(t, a, o).then(e => {
                            r || (e && l(e), c(!1), g(p))
                        }), () => {
                            r = !0
                        }
                    }, [a, t, o, p, u]), {
                        siblings: s,
                        isLoading: d
                    }
                }({
                    store: t,
                    navigableParentStore: o
                }), {
                    pages: f,
                    sectionLabel: h,
                    morePagesTarget: v
                } = (0, r(682985).K8)(() => (function(e) {
                    let {
                        store: t,
                        navigableParentStore: n,
                        searchOrWikiResults: i,
                        intl: a
                    } = e, o = n.getCollectionStoreIfSingleSource(), s = (0, r(247438).q4_)(null == o ? void 0 : o.getName()) || a.formatMessage(S.newDatabasePlaceholder), l = ((null == i ? void 0 : i.pages) ? ? []).filter(e => e.id !== t.id), d = l.length > 5;
                    return {
                        pages: [t, ...l.slice(0, d ? 4 : 5)].filter(j),
                        sectionLabel: {
                            collectionName: s
                        },
                        morePagesTarget: d ? {
                            blockStore: n
                        } : void 0
                    }
                })({
                    store: t,
                    navigableParentStore: o,
                    searchOrWikiResults: p,
                    intl: d
                }), [t, o, p, d]), {
                    visibleItems: x,
                    extraCount: y
                } = G({
                    allItems: f,
                    currentPageId: (0, r(682985).K8)(() => {
                        var e;
                        return (null == (e = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.id) ? ? ""
                    }, []),
                    showAllPages: c
                }), I = x.map(e => ({
                    key: e.id,
                    render: r => (0, s.jsx)(Q, {
                        pageStore: e,
                        parentPopup: a,
                        triggerPageId: t.id,
                        ...r
                    }),
                    action: t => {
                        let n = (0, r(7029).V)(t.event);
                        (0, r(545586).navigateToBlock)({
                            environment: l,
                            store: e,
                            openInNew: n,
                            pageVisitSource: r(254656).y8.Breadcrumb
                        }), n || a.close()
                    }
                }));
                return y > 0 && I.push(H({
                    extraCount: y,
                    setShowAllItems: u,
                    menuLevel: g
                })), m && I.push(...Array.from({
                    length: Math.max(0, 5 - I.length)
                }, (e, t) => ({
                    key: `shimmer-${t}`,
                    render: () => (0, s.jsx)(ee, {}),
                    action: () => {}
                }))), v && I.push(function(e) {
                    let {
                        target: t,
                        environment: n,
                        menuLevel: i,
                        onClose: a
                    } = e;
                    return {
                        key: "more-pages-link",
                        render: e => (0, s.jsx)(r(95582).A, { ...e,
                            style: X.morePagesCaption,
                            title: (0, s.jsx)(r(109939).sA, {
                                defaultMessage: "More pages",
                                id: "PageBreadcrumbPopup.morePagesLink"
                            }),
                            onMouseEnter: t => {
                                null == i || i.collapseSubmenu(), e.onMouseEnter(t)
                            }
                        }),
                        action: e => {
                            let i = (0, r(7029).V)(e.event);
                            (0, r(545586).navigateToBlock)({
                                environment: n,
                                store: t.blockStore,
                                openInNew: i,
                                pageVisitSource: r(254656).y8.Breadcrumb
                            }), i || a()
                        }
                    }
                }({
                    target: v,
                    environment: l,
                    menuLevel: g,
                    onClose: () => a.close()
                })), (0, s.jsx)(q, {
                    items: I,
                    sectionLabel: h
                })
            }

            function ee() {
                return (0, s.jsxs)("div", {
                    style: X.shimmerRow,
                    children: [(0, s.jsx)(r(795830).P, {
                        style: X.shimmerIcon
                    }), (0, s.jsx)(r(795830).P, {
                        style: X.shimmerText
                    })]
                })
            }

            function et(e) {
                let {
                    store: t,
                    parent: a,
                    displayedPages: o,
                    navigableParentStore: l
                } = e, d = (0, r(533992).v3)(), [c, u] = (0, n.useState)(!1), g = B(), {
                    pages: p,
                    sectionLabel: m
                } = (0, r(682985).K8)(() => "siblings" === o ? function(e) {
                    let {
                        store: t,
                        navigableParentStore: n,
                        environment: a
                    } = e;
                    if (n instanceof i().B) return {
                        pages: (0, b().Mr)({
                            store: n
                        }),
                        sectionLabel: void 0
                    };
                    if (n instanceof r(681735).h) return {
                        pages: (0, r(709633).O)({
                            teamStore: n
                        }).filter(e => e.canRead() && e.isNavigableBlock()),
                        sectionLabel: void 0
                    };
                    let o = function(e) {
                        let {
                            store: t,
                            environment: n
                        } = e, i = t.getSpaceStore();
                        if (!i) return;
                        let a = (0, r(593303).k)(i.id);
                        if (!a) return;
                        if ((0, r(528991).K)(t)) {
                            var o;
                            let e = null == (o = (0, r(275619).I)({
                                environment: n,
                                spaceViewStore: a
                            })) ? void 0 : o.filter(e => !e.isArchived());
                            if (e && e.length > 0) return {
                                pages: e,
                                section: "private"
                            }
                        }
                        let s = (0, r(335751).c)({
                            environment: n,
                            spaceViewStore: a,
                            userSettingsStore: void 0
                        }).filter(e => !e.isArchived());
                        if (s.some(e => e.id === t.id)) return {
                            pages: s,
                            section: "shared"
                        }
                    }({
                        store: t,
                        environment: a
                    });
                    return o ? {
                        pages: o.pages,
                        sectionLabel: o.section
                    } : {
                        pages: [t].filter(e => e.canRead() && e.isNavigableBlock()),
                        sectionLabel: void 0
                    }
                }({
                    store: t,
                    navigableParentStore: l,
                    environment: d
                }) : {
                    pages: (0, b().Mr)({
                        store: t
                    }),
                    sectionLabel: void 0
                }, [o, t, l, d]), {
                    visibleItems: f,
                    extraCount: h
                } = G({
                    allItems: p,
                    currentPageId: (0, r(682985).K8)(() => {
                        var e;
                        return (null == (e = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.id) ? ? ""
                    }, []),
                    showAllPages: c
                }), v = f.map(e => ({
                    key: e.id,
                    render: r => (0, s.jsx)(Q, {
                        pageStore: e,
                        parentPopup: a,
                        triggerPageId: "siblings" === o ? t.id : void 0,
                        ...r
                    }),
                    action: t => {
                        let n = (0, r(7029).V)(t.event);
                        (0, r(545586).navigateToBlock)({
                            environment: d,
                            store: e,
                            openInNew: n,
                            pageVisitSource: r(254656).y8.Breadcrumb
                        }), n || a.close()
                    }
                }));
                return h > 0 && v.push(H({
                    extraCount: h,
                    setShowAllItems: u,
                    menuLevel: g
                })), (0, s.jsx)(q, {
                    items: v,
                    sectionLabel: m
                })
            }

            function er(e) {
                let {
                    store: t,
                    parent: n,
                    displayedPages: i
                } = e, a = (0, r(682985).K8)(() => t.isCollectionView(), [t]), o = (0, r(682985).K8)(() => a ? t.getCollectionViewStores() : [], [t, a]);
                return a && "children" === i ? (0, s.jsx)(en, {
                    store: t,
                    parent: n,
                    viewStores: o
                }) : (0, s.jsx)(ei, {
                    store: t,
                    parent: n,
                    displayedPages: i
                })
            }

            function en(e) {
                let {
                    store: t,
                    parent: i,
                    viewStores: a
                } = e, o = (0, r(533992).v3)(), [l, d] = (0, n.useState)(!1), c = B(), {
                    visibleItems: u,
                    extraCount: g
                } = function(e) {
                    let {
                        allItems: t,
                        showAllViews: r
                    } = e;
                    return W(t.length, r) ? {
                        visibleItems: t.slice(0, 5),
                        extraCount: t.length - 5
                    } : {
                        visibleItems: t,
                        extraCount: 0
                    }
                }({
                    allItems: a,
                    showAllViews: l
                }), p = u.map(e => ({
                    key: e.id,
                    render: t => (0, s.jsx)(V, {
                        viewStore: e,
                        ...t
                    }),
                    action: n => {
                        let a = (0, r(7029).V)(n.event);
                        (0, r(545586).navigateToBlock)({
                            environment: o,
                            store: t,
                            collectionViewId: e.id,
                            openInNew: a,
                            pageVisitSource: r(254656).y8.Breadcrumb
                        }), a || i.close()
                    }
                }));
                return g > 0 && p.push(H({
                    extraCount: g,
                    setShowAllItems: d,
                    menuLevel: c
                })), (0, s.jsx)(q, {
                    items: p,
                    sectionLabel: "views"
                })
            }

            function ei(e) {
                let {
                    store: t,
                    displayedPages: n
                } = e, a = (0, r(682985).K8)(() => {
                    if ("children" === n) return;
                    let e = (0, r(399348).f)(t, {
                        includeTeamHomeFeed: !1,
                        includeDataSources: !1
                    }).filter(e => !(e instanceof r(678703).NU));
                    if (!(e.length < 2)) return e[1]
                }, [t, n]);
                return (0, r(682985).K8)(() => a instanceof i().B && !!a.getCollectionStoreIfSingleSource(), [a]) && a instanceof i().B ? (0, s.jsx)(Z, { ...e,
                    navigableParentStore: a
                }) : (0, s.jsx)(et, { ...e,
                    navigableParentStore: a
                })
            }

            function ea(e) {
                let {
                    store: t,
                    showDivider: n,
                    maxWidth: i,
                    iconSize: a,
                    disabled: o
                } = e, l = (0, r(533992).v3)(), d = (0, r(682985).K8)(() => (0, r(483227).Ay)({
                    store: t,
                    fullyQualified: !1,
                    pageVisitSource: r(254656).y8.Breadcrumb
                }), [t]), c = (0, r(682985).K8)(() => (function(e) {
                    let {
                        store: t,
                        displayedPages: n
                    } = e;
                    return "siblings" === n || ("children" === n ? (0, b().Mr)({
                        store: t
                    }).length > 0 || t.isCollectionView() && t.getCollectionViewStores().length > 0 : ((0, r(722371).HB)(n), !1))
                })({
                    store: t,
                    environment: l,
                    displayedPages: "siblings"
                }), [t, l]);
                return (0, s.jsx)(O, {
                    storeId: t.id,
                    triggerId: `page-${t.id}`,
                    canOpen: c,
                    showDivider: n,
                    disabled: o,
                    href: d,
                    buttonContent: (0, s.jsx)(r(373001).A, {
                        store: t,
                        maxWidth: i,
                        iconSize: a,
                        disableHoverTooltip: !0
                    }),
                    renderPopupContent: e => (0, s.jsx)(er, {
                        store: t,
                        parent: e,
                        displayedPages: "siblings"
                    })
                })
            }
            let eo = {
                joinButton: {
                    color: r(632079).Tj.blue.text.accentPrimary,
                    fontWeight: r(699422).Wy.medium,
                    fontSize: 12,
                    flexShrink: 0,
                    marginInlineStart: 2,
                    height: "auto",
                    paddingBlock: 4,
                    lineHeight: 1,
                    borderRadius: 6
                },
                triggerTeam: {
                    background: r(632079).Tj.background.secondary
                },
                teamLabel: {
                    fontWeight: r(699422).Wy.regular,
                    color: r(632079).Tj.text.primary
                },
                emptyState: {
                    padding: "8px 14px",
                    fontSize: 14,
                    color: r(632079).Tj.text.secondary
                }
            };

            function es(e) {
                let {
                    teamMetadata: t,
                    parentPopup: i,
                    isUnjoined: o,
                    triggerTeamId: l,
                    existingTeamStore: d,
                    ...c
                } = e, u = d ? d.id : t.id, g = (0, n.useRef)(null), p = B(), m = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore), f = (null == p ? void 0 : p.expandedSubmenuId) === u, [h, v] = (0, n.useState)(void 0), x = d ? ? h, b = (0, n.useCallback)(() => {
                    null == p || p.expandSubmenu(u), !x && m && v(r(681735).h.createChildStore(m, {
                        table: a().yKj,
                        id: u
                    }))
                }, [p, u, m, x]), S = l && u === l ? eo.triggerTeam : void 0, y = (0, r(77868).J)(d), j = o && d && !y ? (0, s.jsx)(r(328987).A, {
                    teamStore: d,
                    from: "breadcrumb_browser",
                    navigateToTeamHomeOnJoin: !1,
                    style: eo.joinButton
                }) : void 0;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        ref: g,
                        onMouseOver: b,
                        children: (0, s.jsx)(r(95582).A, { ...c,
                            buttonStyle: S,
                            badge: j,
                            icon: d ? (0, s.jsx)(r(729746).x, {
                                store: d,
                                parentSpaceStore: m,
                                size: 20,
                                disabled: !0
                            }) : (0, s.jsx)(r(729746).x, {
                                teamMetadata: t,
                                parentSpaceStore: m,
                                size: 20,
                                disabled: !0
                            }),
                            title: d ? (0, s.jsx)(r(541341).j, {
                                type: "teamStore",
                                teamStore: d,
                                style: eo.teamLabel
                            }) : (0, s.jsx)(r(541341).j, {
                                type: "teamMetadata",
                                teamMetadata: t,
                                style: eo.teamLabel
                            }),
                            right: (0, s.jsx)(r(16275).I, {
                                icon: r(491469).arrowChevronSingleRightSmallIcon,
                                size: "sm",
                                colorVariant: "disabled"
                            })
                        })
                    }), (0, s.jsx)($, {
                        isOpen: f,
                        originRef: g,
                        onDismiss: () => null == p ? void 0 : p.collapseSubmenu(),
                        children: (0, s.jsx)(el, {
                            teamStore: x,
                            parent: i
                        })
                    })]
                })
            }

            function el(e) {
                let {
                    teamStore: t,
                    parent: i
                } = e, a = (0, r(533992).v3)(), [o, l] = (0, n.useState)(!1), d = B(), {
                    visibleItems: c,
                    extraCount: u
                } = G({
                    allItems: (0, r(682985).K8)(() => t ? (0, r(709633).O)({
                        teamStore: t
                    }).filter(e => e.canRead() && e.isNavigableBlock()) : [], [t]),
                    currentPageId: (0, r(682985).K8)(() => {
                        var e;
                        return null == (e = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.id
                    }, []),
                    showAllPages: o
                }), g = c.map(e => ({
                    key: e.id,
                    render: t => (0, s.jsx)(Q, {
                        pageStore: e,
                        parentPopup: i,
                        ...t
                    }),
                    action: t => {
                        let n = (0, r(7029).V)(t.event);
                        (0, r(545586).navigateToBlock)({
                            environment: a,
                            store: e,
                            openInNew: n,
                            pageVisitSource: r(254656).y8.Breadcrumb
                        }), n || i.close()
                    }
                }));
                return (u > 0 && g.push(H({
                    extraCount: u,
                    setShowAllItems: l,
                    menuLevel: d
                })), 0 === g.length) ? (0, s.jsx)(r(747369).A, {
                    menuType: r(649476).gu.Popup,
                    width: r(394337).M2,
                    children: (0, s.jsx)("div", {
                        style: eo.emptyState,
                        children: (0, s.jsx)(r(109939).sA, {
                            defaultMessage: "No pages inside",
                            id: "TeamChildPagesPopup.emptyState"
                        })
                    })
                }) : (0, s.jsx)(r(747369).A, {
                    menuType: r(649476).gu.Popup,
                    width: r(394337).M2,
                    children: (0, s.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        initialFocus: void 0,
                        suppressFocusRing_PLEASE_USE_SPARINGLY: !0,
                        sections: [{
                            key: "teamspace-pages",
                            items: g,
                            render: e => (0, s.jsx)(r(844565).A, { ...e,
                                children: e.children
                            })
                        }]
                    })
                })
            }

            function ed(e) {
                let {
                    teamStore: t,
                    parent: i
                } = e, [a, o] = (0, n.useState)(!1), l = B(), d = (0, r(682985).K8)(() => t.getSpaceStore(), [t]), {
                    joinedTeamsMetadata: c
                } = (0, r(88221).S)({
                    spaceStore: d,
                    shouldCreateTeamStores: !1
                }), u = t.id, g = !c.some(e => e.id === u), {
                    visibleItems: p,
                    extraCount: m
                } = function(e) {
                    let {
                        allItems: t,
                        currentTeamId: r,
                        showAllTeams: n
                    } = e;
                    if (!W(t.length, n)) return {
                        visibleItems: t,
                        extraCount: 0
                    };
                    let i = t.findIndex(e => e.id === r);
                    return {
                        visibleItems: i < 0 || i < 5 ? t.slice(0, 5) : [t[i], ...t.filter(e => e.id !== r).slice(0, 4)],
                        extraCount: t.length - 5
                    }
                }({
                    allItems: c,
                    currentTeamId: u,
                    showAllTeams: a
                }), f = [];
                for (let e of (g && f.push({
                        key: u,
                        render: e => (0, s.jsx)(es, {
                            existingTeamStore: t,
                            parentPopup: i,
                            isUnjoined: !0,
                            triggerTeamId: u,
                            ...e
                        }),
                        action: () => {}
                    }), p)) {
                    let r = e.id === u;
                    f.push({
                        key: e.id,
                        render: n => (0, s.jsx)(es, {
                            teamMetadata: e,
                            parentPopup: i,
                            isUnjoined: !1,
                            triggerTeamId: u,
                            existingTeamStore: r ? t : void 0,
                            ...n
                        }),
                        action: () => {}
                    })
                }
                return m > 0 && f.push(H({
                    extraCount: m,
                    setShowAllItems: o,
                    menuLevel: l
                })), (0, s.jsx)(r(747369).A, {
                    menuType: r(649476).gu.Popup,
                    width: r(394337).M2,
                    children: (0, s.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        initialFocus: void 0,
                        suppressFocusRing_PLEASE_USE_SPARINGLY: !0,
                        resetFocusOnMouseOut: !0,
                        sections: [{
                            key: "teamspaces",
                            items: f,
                            render: e => (0, s.jsx)(r(844565).A, { ...e,
                                title: (0, s.jsx)(r(109939).sA, {
                                    defaultMessage: "Teamspaces",
                                    id: "TeamBreadcrumbBrowserPopup.sectionTitle"
                                }),
                                children: e.children
                            })
                        }]
                    })
                })
            }

            function ec(e) {
                let {
                    store: t,
                    showDivider: i,
                    maxWidth: a,
                    disabled: o
                } = e, l = (0, r(682985).K8)(() => t.isDefined(), [t]), {
                    isOpen: d,
                    originRect: c,
                    buttonRef: u,
                    parent: g,
                    handleOpen: p,
                    handleCancelOpen: m
                } = L({
                    id: `team-${t.id}`,
                    canOpen: !o
                });
                return l ? (0, s.jsxs)(n.Fragment, {
                    children: [(0, s.jsx)(r(656252).A, {
                        originGap: 4,
                        popupType: r(656252).z.Popup,
                        content: e => (0, s.jsx)(r(219210).dX, {
                            renderLoading: e => (0, s.jsx)(r(4458).fI, {
                                width: r(394337)._M,
                                paddingTop: 8,
                                paddingBottom: 8,
                                justifyContent: "center",
                                children: e ? (0, s.jsx)(r(517334).k, {}) : void 0
                            }),
                            teamStore: t,
                            parent: e
                        }),
                        onOpen: g.close,
                        disabled: o,
                        children: e => (0, s.jsx)(r(988022).p, {
                            ref: u,
                            style: r(394337).CL.button,
                            hoveredStyle: r(394337).CL.buttonHovered,
                            size: "sm",
                            shouldShrink: !0,
                            disabled: o,
                            onMouseEnter: p,
                            onMouseLeave: m,
                            ...e,
                            children: (0, s.jsx)(r(373001).A, {
                                store: t,
                                maxWidth: a,
                                disableHoverTooltip: !0
                            })
                        })
                    }), (0, s.jsx)(K, {
                        isOpen: d,
                        originRect: c,
                        parent: g,
                        children: (0, s.jsx)(ed, {
                            teamStore: t,
                            parent: g
                        })
                    }), i ? (0, s.jsx)(r(29305).f, {}) : void 0]
                }, t.id) : null
            }
            let eu = (0, r(109939).YK)({
                    agentFallbackName: {
                        id: "breadcrumb.workflowButton.agentFallbackName",
                        defaultMessage: "Agent"
                    }
                }),
                eg = {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    minWidth: 0
                },
                ep = {
                    flexShrink: 0
                };

            function em(e) {
                let {
                    store: t,
                    showDivider: n,
                    maxWidth: i,
                    disabled: a
                } = e, o = (0, r(960253).I)(() => ({
                    item: {
                        cursor: a ? "default" : "pointer",
                        opacity: 1,
                        textDecoration: "none",
                        padding: "4px 8px",
                        borderRadius: 6,
                        minWidth: 0,
                        maxWidth: i,
                        display: "flex",
                        alignItems: "center",
                        flexShrink: 0,
                        gap: 6
                    }
                }), [a, i]), l = (0, r(109939).tz)(), d = (0, r(682985).K8)(() => (0, r(575422).m)(t, l, l.formatMessage(eu.agentFallbackName)), [t, l]), c = (0, r(453573).Lm)({
                    workflowId: t.id,
                    params: {
                        workflowViewType: "chat"
                    }
                }), u = (0, r(682985).K8)(() => r(218744).default.getConfig({
                    configName: "custom_agent_rollout_badge"
                }), []);
                return (0, s.jsxs)(s.Fragment, {
                    children: [a ? (0, s.jsxs)("span", {
                        style: o.item,
                        children: [(0, s.jsx)(r(651790).AgentIcon, {
                            agentIcon: d.icon,
                            workflowStore: t,
                            size: 16
                        }), (0, s.jsx)("span", {
                            style: eg,
                            children: d.name
                        }), (0, s.jsx)("span", {
                            style: ep,
                            children: (0, s.jsx)(r(191627).A, {
                                badgeConfig: u
                            })
                        })]
                    }) : (0, s.jsxs)(r(590422).Q, {
                        href: c,
                        style: o.item,
                        children: [(0, s.jsx)(r(651790).AgentIcon, {
                            agentIcon: d.icon,
                            workflowStore: t,
                            size: 16
                        }), (0, s.jsx)("span", {
                            style: eg,
                            children: d.name
                        }), (0, s.jsx)("span", {
                            style: ep,
                            children: (0, s.jsx)(r(191627).A, {
                                badgeConfig: u
                            })
                        })]
                    }), n ? (0, s.jsx)(r(29305).f, {}) : void 0]
                })
            }

            function ef(e) {
                let {
                    ancestorMaxWidth: t,
                    showDivider: n,
                    store: a,
                    disabled: o
                } = e, l = (0, r(858778).k)();
                if (a instanceof r(681735).h) {
                    let e = l ? ec : r(611343).A;
                    return (0, s.jsx)(e, {
                        store: a,
                        showDivider: n,
                        maxWidth: t,
                        disabled: o
                    })
                }
                if (a instanceof i().B) {
                    let e = l ? ea : r(245257).A;
                    return (0, s.jsx)(e, {
                        store: a,
                        showDivider: n,
                        maxWidth: t,
                        disabled: o
                    })
                }
                if (a instanceof r(356912).m) return (0, s.jsx)(l ? N : U, {
                    store: a,
                    showDivider: n,
                    maxWidth: t,
                    disabled: o
                });
                if (a instanceof r(360851).N) return (0, s.jsx)(em, {
                    store: a,
                    showDivider: n,
                    maxWidth: t,
                    disabled: o
                });
                (0, r(722371).HB)(a)
            }

            function eh(e) {
                let {
                    ancestorMaxWidth: t,
                    homeStore: n,
                    route: a,
                    maxAncestorCount: l,
                    disabled: d
                } = e, c = o(a), u = (0, r(83208).X)("team_feed_as_any_other_db"), [g, p] = (0, r(682985).K8)(() => {
                    if (!c) return [
                        [],
                        []
                    ];
                    let e = (0, r(399348).f)(c, {
                        includeTeamHomeFeed: u,
                        includeDataSources: !0
                    });
                    e.reverse();
                    let t = c.isNavigableBlock() ? e.slice(0, -1) : [...e];
                    return c.isTeamPage() ? [
                        [],
                        []
                    ] : [t, e]
                }, [c, u], {
                    equalityFn: r(381453).n4
                }), m = (0, r(682985).K8)(() => c && (0, r(933062).Nh)(c.id), [c]), f = (0, r(682985).K8)(() => (0, r(350277).z)({
                    spaceStore: null == c ? void 0 : c.getSpaceStore()
                }) > 0, [c]);
                if (m && void 0 !== n) return (0, s.jsx)(ef, {
                    ancestorMaxWidth: t,
                    showDivider: g.length > 0,
                    store: n,
                    disabled: d
                }, n.id);
                if (!(g.length > l)) return (0, s.jsx)(s.Fragment, {
                    children: g.map(e => (0, s.jsx)(ef, {
                        ancestorMaxWidth: t,
                        showDivider: !0,
                        store: e,
                        disabled: d
                    }, `${e.table}-${e.id}`))
                }); {
                    let [e, n, a] = [g[0], g.slice(1, g.length - l + 1), g.slice(g.length - l + 1)];
                    if (f) return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(ef, {
                            ancestorMaxWidth: t,
                            showDivider: !r(986939).A.isMobile,
                            store: e,
                            disabled: d
                        }, e.id), (0, s.jsx)(x, {
                            stores: r(986939).A.isMobile ? p : n,
                            disabled: d
                        }, "pages-popup"), a.map(e => (0, s.jsx)(ef, {
                            store: e,
                            showDivider: !0,
                            ancestorMaxWidth: t,
                            disabled: d
                        }, e.id))]
                    }); {
                        let e = g.filter(e => e instanceof i().B || e instanceof r(356912).m || e instanceof r(360851).N),
                            n = g.filter(e => e instanceof i().B || e instanceof r(356912).m || e instanceof r(360851).N);
                        return (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(ef, {
                                store: e[0],
                                showDivider: !r(986939).A.isMobile,
                                ancestorMaxWidth: t,
                                disabled: d
                            }, e[0].id), (0, s.jsx)(x, {
                                stores: r(986939).A.isMobile ? n : e.slice(1, e.length - l + 1),
                                disabled: d
                            }, "pages-popup"), e.slice(e.length - l + 1).map(e => (0, s.jsx)(ef, {
                                store: e,
                                showDivider: !0,
                                ancestorMaxWidth: t,
                                disabled: d
                            }, e.id))]
                        })
                    }
                }
            }
            let ev = function(e) {
                let {
                    ancestorMaxWidth: t,
                    ignoreMaxLength: n,
                    showDivider: i,
                    store: a,
                    marginLeft: o,
                    disableHoverTooltip: l
                } = e, d = (0, r(960253).I)(() => ({
                    wrapper: {
                        display: "flex",
                        alignItems: "center",
                        flexShrink: 1,
                        marginInlineStart: o,
                        minWidth: 0,
                        maxWidth: n ? void 0 : "100%"
                    }
                }), [n, o]);
                return (0, s.jsxs)("div", {
                    style: d.wrapper,
                    children: [(0, s.jsx)(r(373001).A, {
                        store: a,
                        maxWidth: t,
                        ignoreMaxLength: n,
                        disableHoverTooltip: l
                    }), i ? (0, s.jsx)(r(29305).f, {}) : void 0]
                })
            };

            function ex(e) {
                let {
                    environment: t,
                    currentPageRef: n,
                    store: i,
                    disabled: a
                } = e;
                return (0, r(682985).K8)(() => {
                    if (!i) return !0;
                    let e = i.canEdit(),
                        o = (0, r(444285).S)(i),
                        s = i.getCollectionStoreIfSingleSource(),
                        l = null == s ? void 0 : s.isSyncedCollection(),
                        d = i.isExternalObjectInstancePageBlockStore(),
                        c = (0, r(335818).fc)(i);
                    return a || (0, r(933062).Nh)(i.id) || i.isPersonProfile() || r(986939).A.isMobile || (0, r(59406).w)(t) || r(475097).default.isCenterPeekOpen() || !n || !e || o || d || l || c
                }, [t, n, i, a])
            }

            function eb(e) {
                let {
                    environment: t,
                    currentPageRef: i,
                    store: a
                } = e;
                return (0, n.useCallback)(() => {
                    if (!a) return;
                    let e = r(475097).default.isCenterPeekOpen() ? r(862921).A.PeekViewScroller : r(862921).A.PageScroller;
                    if (e) {
                        let n = e.getNode();
                        if (n && !(10 > Math.abs(n.scrollTop))) {
                            (0, r(661767).V)({
                                element: n,
                                environment: t,
                                options: {
                                    top: 0,
                                    behavior: "smooth"
                                }
                            }), (0, r(104310).u)({
                                event: {
                                    eventName: "click_breadcrumb_current_page_scroll_to_top",
                                    eventProperties: {}
                                }
                            });
                            return
                        }
                    }
                    let n = i.current;
                    if (!n || !(n instanceof Element)) return;
                    let o = n.getBoundingClientRect();
                    r(777772).U({
                        blockStore: a,
                        originRect: o
                    }), (0, r(104310).u)({
                        event: {
                            eventName: "open_breadcrumb_current_page_menu",
                            eventProperties: {}
                        }
                    })
                }, [t, i, a])
            }
            let eS = {
                    marginInlineEnd: 6
                },
                ey = {
                    maxWidth: "100%"
                },
                ej = (0, n.forwardRef)(function(e, t) {
                    let {
                        currentPageMaxWidth: n,
                        currentPageRef: i,
                        route: a
                    } = e, l = (0, r(533992).v3)(), d = o(a), c = (0, r(858778).k)(), u = ex({
                        environment: l,
                        currentPageRef: i,
                        store: d,
                        disabled: e.disabled
                    }), g = (0, r(682985).K8)(() => (null == d ? void 0 : d.isEmptyPage()) ? ? !1, [d]), p = (0, r(682985).K8)(() => d ? (0, r(569553).Te)(d) : void 0, [d]), m = (0, r(682985).K8)(() => null == d ? void 0 : d.getIcon(), [d]), f = r(986939).A.isMobile ? 24 : 20, h = eb({
                        environment: l,
                        currentPageRef: i,
                        store: d
                    });
                    return d ? (0, s.jsxs)(r(988022).p, {
                        shouldShrink: !0,
                        onClick: h,
                        size: "sm",
                        ref: t,
                        disabled: u,
                        children: [m && p ? (0, s.jsx)(r(569553).B6, {
                            disabled: !0,
                            icon: m,
                            iconRecordCategory: p,
                            isEmptyPage: g,
                            size: f,
                            style: eS,
                            largeIcon: !0
                        }) : void 0, (0, s.jsx)(r(627918).A, {
                            store: d,
                            style: {
                                maxWidth: n
                            },
                            enableHover: !c
                        })]
                    }) : null
                }),
                ew = {
                    fontSize: "inherit"
                };

            function eI(e) {
                let {
                    ancestorMaxWidth: t,
                    currentPageRef: n,
                    route: i,
                    marginLeft: a
                } = e, l = (0, r(533992).v3)(), d = o(i), c = (0, r(858778).k)(), {
                    mobileNative: u
                } = l, g = (0, r(682985).K8)(() => d && (0, r(933062).lU)(d), [d]), p = ex({
                    environment: l,
                    currentPageRef: n,
                    store: d,
                    disabled: e.disabled
                }), m = eb({
                    environment: l,
                    currentPageRef: n,
                    store: d
                }), f = (0, r(682985).K8)(() => {
                    if (!d) return !1;
                    let e = (0, r(399348).f)(d, {
                        includeTeamHomeFeed: !1,
                        includeDataSources: !0
                    });
                    return 0 === (d.isNavigableBlock() ? e.slice(1) : [...e]).length
                }, [d]);
                return !d || g ? null : r(986939).A.isMobile ? (0, s.jsx)(r(988022).p, {
                    disabled: p,
                    shouldShrink: !0,
                    onClick: m,
                    size: "sm",
                    style: null != u && u.supportsNativeHomeOnPhone() ? {
                        paddingInlineStart: 0
                    } : void 0,
                    children: (0, s.jsx)(ev, {
                        store: d,
                        showDivider: !1,
                        ignoreMaxLength: f,
                        ancestorMaxWidth: t,
                        marginLeft: a,
                        disableHoverTooltip: c
                    })
                }) : (0, s.jsx)(r(988022).p, {
                    disabled: p,
                    shouldShrink: !0,
                    onClick: m,
                    style: ew,
                    children: (0, s.jsx)(ev, {
                        store: d,
                        showDivider: !1,
                        ancestorMaxWidth: t,
                        marginLeft: a,
                        disableHoverTooltip: c
                    })
                })
            }

            function eT(e) {
                let {
                    route: t,
                    ancestorMaxWidth: n,
                    marginLeft: i
                } = e, a = o(t);
                if (!a) return null;
                let l = {
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0
                };
                return (0, s.jsx)(ek, {
                    store: a,
                    children: e => (0, s.jsx)(r(64960).Ay, {
                        style: { ...l,
                            ...ey
                        },
                        ...e,
                        children: (0, s.jsx)(ev, {
                            store: a,
                            showDivider: !1,
                            ignoreMaxLength: !0,
                            ancestorMaxWidth: n,
                            marginLeft: i
                        })
                    })
                })
            }

            function ek(e) {
                let {
                    store: t,
                    children: i
                } = e, a = (0, r(533992).v3)(), o = (0, r(682985).K8)(() => {
                    let e = (0, r(399348).f)(t, {
                        includeTeamHomeFeed: !1,
                        includeDataSources: !0
                    });
                    return e.reverse(), e
                }, [t]), l = (0, n.useCallback)(() => {
                    (0, r(104310).u)({
                        event: {
                            eventName: "topbar_breadcrumb_menu_click",
                            eventProperties: {
                                has_parent_pages: o.length > 1
                            }
                        }
                    })
                }, [o]), d = (0, n.useCallback)(e => {
                    if (a.device.isMobileNative) {
                        let t = void 0 !== e.collectionId;
                        (0, r(104310).u)({
                            event: {
                                eventName: "topbar_breadcrumb_page_click",
                                eventProperties: {
                                    page_id: e.pageId,
                                    is_data_source: t
                                }
                            }
                        })
                    }
                }, [a]);
                return (0, s.jsx)(r(656252).A, {
                    popupType: r(656252).z.BottomSheet,
                    bottomSheetInitialState: "half",
                    onClick: l,
                    content: e => (0, s.jsx)(r(747369).A, {
                        menuType: r(649476).gu.Modal,
                        title: (0, s.jsx)(r(109939).sA, {
                            defaultMessage: "Breadcrumb",
                            id: "breadcrumb.mobileBreadcrumbMenu.title"
                        }),
                        children: (0, s.jsx)(r(558045).A, {
                            type: r(558045).O.Vertical,
                            onAccept: e.close,
                            initialFocus: void 0,
                            sections: (0, r(874218).Y)({
                                environment: a,
                                stores: o,
                                onPageClick: d
                            })
                        })
                    }),
                    children: i
                }, "pages-popup")
            }

            function eA(e) {
                let {
                    store: t,
                    children: r
                } = e, {
                    isOpen: i,
                    originRect: a,
                    buttonRef: o,
                    parent: l,
                    handleOpen: d,
                    handleCancelOpen: c
                } = L({
                    id: `current-${t.id}`,
                    canOpen: !0
                }), u = l.close;
                return (0, n.useEffect)(() => {
                    let e = o.current;
                    if (e) return e.addEventListener("click", u), () => e.removeEventListener("click", u)
                }, [o, u]), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("span", {
                        ref: o,
                        onMouseEnter: d,
                        onMouseLeave: c,
                        children: r
                    }), (0, s.jsx)(K, {
                        isOpen: i,
                        originRect: a,
                        parent: l,
                        children: (0, s.jsx)(er, {
                            store: t,
                            parent: l,
                            displayedPages: "siblings"
                        })
                    })]
                })
            }
            r(823215);
            var eC = r(440961);
            let eM = {
                style0: {
                    color: r(632079).Tj.text.inverseSecondary
                },
                style1: {
                    color: r(632079).Tj.text.tertiary,
                    marginInlineStart: 4,
                    marginInlineEnd: 5
                }
            };

            function eP(e) {
                let {
                    route: t
                } = e, i = (0, r(533992).v3)(), a = o(t), l = (0, r(682985).K8)(() => {
                    if (!a) return !1;
                    let e = r(728372).AppStoreSidebarSpaceViewStore.state,
                        t = e ? (0, r(275619).I)({
                            environment: i,
                            spaceViewStore: e
                        }) ? ? [] : [];
                    return null == t ? void 0 : t.some(e => e.id === a.id)
                }, [i, a]), d = (0, r(682985).K8)(() => {
                    if (!a) return !1;
                    let e = i.currentUser.id;
                    return a.getPermissionItems().every(t => (0, r(642157).B2)(t) && e === t.user_id)
                }, [i, a]), c = (0, n.useRef)(null), u = (0, n.useCallback)(() => {
                    if (!c || !a) return;
                    let e = eC.findDOMNode(c.current);
                    if (!e || !(e instanceof Element)) return;
                    let t = e.getBoundingClientRect(),
                        n = new DOMRect(t.x, t.y, t.width, t.height + 5);
                    r(278947).D3(i), r(351198).ho({
                        environment: i,
                        blocks: [a],
                        originRect: n,
                        moveToContext: "topbar_breadcrumb"
                    })
                }, [i, c, a]);
                return l && d && a ? (0, s.jsx)(r(51831).m, {
                    placement: "right",
                    content: e => (0, s.jsxs)("div", {
                        children: [(0, s.jsx)("div", {
                            children: (0, s.jsx)(r(109939).sA, {
                                defaultMessage: "Only you have access",
                                id: "breadcrumb.moveTo.hasPermission.title"
                            })
                        }), (0, s.jsx)("div", {
                            style: eM.style0,
                            children: (0, s.jsx)(r(109939).sA, {
                                defaultMessage: "Click to move",
                                id: "breadcrumb.moveTo.hasPermission.subtitle"
                            })
                        })]
                    }),
                    children: e => (0, s.jsxs)(r(988022).p, {
                        size: "sm",
                        disabled: !1,
                        onClick: u,
                        ref: c,
                        ...e,
                        children: [(0, s.jsx)(r(16275).I, {
                            icon: r(269298).lockFillIcon,
                            size: "sm",
                            colorVariant: "tertiary"
                        }), (0, s.jsx)("span", {
                            style: eM.style1,
                            children: (0, s.jsx)(r(109939).sA, {
                                defaultMessage: "Private",
                                id: "breadcrumb.moveTo.privatePages"
                            })
                        }), (0, s.jsx)(r(16275).I, {
                            icon: r(36663).arrowChevronSingleDownFillIcon,
                            size: 11,
                            colorVariant: "tertiary"
                        })]
                    })
                }) : null
            }
            let eB = {
                opacity: 1,
                textDecoration: "none",
                padding: "4px 8px",
                borderRadius: 6,
                flexShrink: 0
            };

            function eR() {
                return (0, s.jsx)("div", {
                    style: eB,
                    children: (0, s.jsx)(r(109939).sA, {
                        id: "breadcrumb.notionAi",
                        defaultMessage: "Notion AI"
                    })
                })
            }
            let eE = {
                style0: {
                    color: r(632079).Tj.text.tertiary,
                    marginInlineStart: 4,
                    marginInlineEnd: 5
                }
            };

            function eK() {
                let e = (0, r(533992).v3)(),
                    t = (0, r(682985).K8)(() => (0, r(92049).G)(e), [e]);
                return (0, r(682985).K8)(() => {
                    if (!t) return !1;
                    let n = e.currentUser.id;
                    return t.getPermissionItems().every(e => (0, r(642157).B2)(e) && n === e.user_id)
                }, [e.currentUser.id, t]) ? (0, s.jsx)(r(51831).m, {
                    placement: "right",
                    content: e => (0, s.jsx)("div", {
                        children: (0, s.jsx)("div", {
                            children: (0, s.jsx)(r(109939).sA, {
                                defaultMessage: "Only you have access",
                                id: "breadcrumb.private.hasPermission.title"
                            })
                        })
                    }),
                    children: e => (0, s.jsxs)(r(988022).p, {
                        size: "sm",
                        disabled: !0,
                        ...e,
                        children: [(0, s.jsx)(r(16275).I, {
                            icon: r(269298).lockFillIcon,
                            size: "sm",
                            colorVariant: "tertiary"
                        }), (0, s.jsx)("span", {
                            style: eE.style0,
                            children: (0, s.jsx)(r(109939).sA, {
                                defaultMessage: "Private",
                                id: "breadcrumb.moveTo.privatePages"
                            })
                        })]
                    })
                }) : null
            }
            let eL = {
                cursor: "pointer",
                opacity: 1,
                textDecoration: "none",
                padding: "4px 8px",
                borderRadius: 6,
                flexShrink: 0
            };

            function eO() {
                return (0, s.jsx)(r(590422).Q, {
                    href: "/workers",
                    style: eL,
                    children: (0, s.jsx)(r(109939).sA, {
                        id: "breadcrumb.workers",
                        defaultMessage: "Workers"
                    })
                })
            }
            let eV = 6,
                eN = {
                    flexShrink: 0,
                    marginInlineStart: 4,
                    marginInlineEnd: 4
                },
                e_ = {
                    maxWidth: "100%"
                },
                eD = {
                    paddingBlock: 4,
                    paddingInline: 8,
                    borderRadius: 6,
                    maxWidth: 220,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                eF = (0, r(109939).YK)({
                    analytics: {
                        id: "breadcrumb.agent.analytics",
                        defaultMessage: "Analytics"
                    }
                });

            function eU(e) {
                return (0, r(858778).k)() ? (0, s.jsx)(C, {
                    children: e.children
                }) : e.children
            }

            function ez(e) {
                return (0, r(858778).k)() ? (0, s.jsx)(eA, {
                    store: e.store,
                    children: e.children
                }) : e.children
            }
            let eW = function(e) {
                let {
                    ancestorMaxWidth: t,
                    maxAncestorCount: i,
                    currentPageMaxWidth: a,
                    showCurrentPageControls: l,
                    style: d,
                    route: c,
                    config: u
                } = e, g = (0, n.useRef)(null), p = (0, r(533992).v3)(), m = o(c), v = (0, r(960253).I)(() => ({
                    container: {
                        display: "flex",
                        alignItems: "center",
                        lineHeight: 1.2,
                        fontSize: r(418676).vQ,
                        ...d
                    },
                    workerCrumb: {
                        padding: "4px 8px",
                        borderRadius: 6,
                        maxWidth: a,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }
                }), [a, d]), x = (0, r(109939).tz)(), b = "worker" === c.name ? c.workerId : void 0, {
                    worker: S,
                    isLoading: y
                } = (0, r(930225).r)(b), j = (0, r(682985).K8)(() => {
                    var e;
                    return !!(null == m || null == (e = m.getTitleStore()) ? void 0 : e.isReady())
                }, [m]), {
                    spaceStore: w,
                    spaceViewStore: I
                } = (0, r(682985).K8)(() => {
                    let e = (0, r(974410).f)(m);
                    if (!e) return {
                        spaceStore: void 0,
                        spaceViewStore: void 0
                    };
                    let t = (0, r(593303).k)(e.id);
                    return {
                        spaceStore: e,
                        spaceViewStore: t
                    }
                }, [m]), T = (0, r(682985).K8)(() => {
                    let e;
                    return I && I.isReady() && (e = (0, r(933062).x$)(I)), e
                }, [I]), k = (0, r(682985).K8)(() => (null == m ? void 0 : m.isPersonProfile()) ? ? !1, [m]), A = (0, r(682985).K8)(() => m && !(0, r(933062).lU)(m) && !k && l && m.isReady(), [l, m, k]), C = (0, r(5967).V)({
                    spaceStore: w
                }), M = !k || C, P = (0, r(682985).K8)(() => {
                    var e;
                    return p.device.isPhone || (null == (e = p.mobileNative) ? void 0 : e.supportsNativeHomeOnPhone())
                }, [p]), B = (0, r(682985).K8)(() => {
                    var e;
                    if (!m || (0, r(321543).x3)(p)) return !1;
                    let t = r(891711).GN(m),
                        n = p.RouterStore.state.route;
                    return !!(0, r(132702).bh)(n) && (null == t ? void 0 : t.id) === m.id || (null == t || null == (e = t.getSiteStore()) || null == (e = e.getHeader()) ? void 0 : e.hideBreadcrumbs)
                }, [p, m]), R = (0, r(682985).K8)(() => r(218744).default.getConfig({
                    configName: "custom_agent_rollout_badge"
                }), []), E = (0, r(682985).K8)(() => !!m && (0, r(843641).Es)({
                    blockStore: m
                }), [m]);
                if (B) return null;
                let K = (0, r(634832).uR)(c);
                if (K && (0, r(634832).Zx)(c)) {
                    if (!u) throw Error("config is required");
                    return (0, s.jsxs)("div", {
                        style: v.container,
                        children: [(0, s.jsx)(f, {
                            route: c
                        }), "none" === R.badge_type ? void 0 : (0, s.jsx)("div", {
                            style: eN,
                            children: (0, s.jsx)(r(191627).A, {
                                badgeConfig: R
                            })
                        }), "agent-thread" === K.type ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(r(29305).f, {}), (0, s.jsx)(h, {
                                route: c,
                                config: u
                            })]
                        }) : void 0, "analytics" === c.workflowViewType ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(r(29305).f, {}), (0, s.jsx)("div", {
                                style: eD,
                                children: x.formatMessage(eF.analytics)
                            })]
                        }) : void 0, (0, s.jsx)(eK, {})]
                    })
                }
                if (K && "ai" === c.name) return (0, s.jsx)("div", {
                    style: v.container,
                    children: (0, s.jsx)(eR, {})
                });
                if ("workers" === c.name) return (0, s.jsx)("div", {
                    style: v.container,
                    children: (0, s.jsx)(eO, {})
                });
                if ("worker" === c.name) {
                    let e = y ? x.formatMessage({
                        id: "workers.detail.loadingLabel",
                        defaultMessage: "Loading..."
                    }) : (null == S ? void 0 : S.name) ? ? x.formatMessage({
                        id: "workers.detail.unknown",
                        defaultMessage: "Unknown worker"
                    });
                    return (0, s.jsxs)("div", {
                        style: v.container,
                        children: [(0, s.jsx)(eO, {}), (0, s.jsx)(r(29305).f, {}), (0, s.jsx)("div", {
                            style: v.workerCrumb,
                            children: e
                        })]
                    })
                }
                if (!m || !j) return null;
                let L = !!e.disabled;
                return P ? (0, s.jsx)("div", {
                    style: { ...v.container,
                        ...e_
                    },
                    className: "notranslate",
                    children: (0, s.jsx)(eT, {
                        route: c,
                        ancestorMaxWidth: t,
                        marginLeft: eV,
                        disabled: L
                    })
                }) : (0, s.jsx)(eU, {
                    children: (0, s.jsxs)("div", {
                        style: v.container,
                        className: "notranslate shadow-cursor-breadcrumb",
                        children: [M ? (0, s.jsx)(eh, {
                            ancestorMaxWidth: t,
                            maxAncestorCount: i,
                            homeStore: T,
                            route: c,
                            disabled: L
                        }) : void 0, A ? (0, s.jsx)(ez, {
                            store: m,
                            children: (0, s.jsx)(ej, {
                                currentPageMaxWidth: a,
                                currentPageRef: g,
                                ref: g,
                                route: c,
                                marginLeft: eV,
                                disabled: L
                            })
                        }) : (0, s.jsx)(ez, {
                            store: m,
                            children: (0, s.jsx)(eI, {
                                ancestorMaxWidth: t,
                                currentPageRef: g,
                                route: c,
                                marginLeft: eV,
                                disabled: L
                            })
                        }), E && m ? (0, s.jsx)(r(509364).YC, {
                            blockStore: m
                        }) : void 0, (0, s.jsx)(eP, {
                            route: c
                        })]
                    })
                })
            }
        },
        328987: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var n = r(296540),
                i = r(474848);
            let a = function(e) {
                let {
                    teamStore: t,
                    from: a,
                    navigateToTeamHomeOnJoin: o,
                    style: s,
                    hoveredStyle: l,
                    icon: d,
                    isRed: c
                } = e, u = (0, r(533992).v3)(), g = (0, r(682985).K8)(() => {
                    var e;
                    return null == (e = t.getSpaceStore()) ? void 0 : e.id
                }, [t]), p = (0, r(345776).T)(), m = (0, n.useCallback)(async () => {
                    g && p && await (0, r(225455).i)({
                        environment: u,
                        currentUserId: p,
                        teamStore: t,
                        spaceId: g,
                        from: a,
                        andNavigateToTeamHome: o ? ? !1
                    })
                }, [p, g, u, t, a, o]);
                return (0, i.jsxs)(r(988022).p, {
                    style: s,
                    hoveredStyle: l,
                    onClick: m,
                    colorPalette: c ? "red" : void 0,
                    children: [d ? d() : void 0, (0, i.jsx)(r(109939).sA, {
                        id: "outlinerTeamToggleButton.joinTeamButton",
                        defaultMessage: "Join"
                    })]
                })
            }
        },
        331700: (e, t, r) => {
            r.d(t, {
                m: () => o
            }), r(296540);
            var n = r(474848);
            let i = (0, r(109939).YK)({
                    alpha: {
                        id: "linkBadge.alpha",
                        defaultMessage: "Alpha"
                    },
                    beta: {
                        id: "linkBadge.beta",
                        defaultMessage: "Beta"
                    }
                }),
                a = {
                    borderRadius: 4
                };

            function o({
                href: e,
                type: t
            }) {
                return (0, n.jsx)(r(64960).Ay, {
                    href: e,
                    style: a,
                    external: !0,
                    children: (0, n.jsx)(r(746434).E, {
                        content: (0, n.jsx)(r(109939).sA, { ...i[t]
                        })
                    })
                })
            }
        },
        346596: (e, t, r) => {
            r.d(t, {
                L: () => i,
                k: () => a
            });
            var n = r(296540);

            function i(e) {
                let {
                    workflowIdFromRoute: t,
                    spaceStore: i
                } = (0, r(682985).K8)(() => ({
                    workflowIdFromRoute: "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    spaceStore: r(728372).AppStoreSidebarSpaceStore.state
                }), [e]);
                return (0, n.useMemo)(() => {
                    if (t && i) return r(360851).N.createChildStore(i, {
                        table: r(43296).C,
                        id: t,
                        spaceId: i.id
                    })
                }, [t, i])
            }

            function a(e) {
                let t = "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    n = r(728372).AppStoreSidebarSpaceStore.state;
                if (t && n) return r(360851).N.createChildStore(n, {
                    table: r(43296).C,
                    id: t,
                    spaceId: n.id
                })
            }
        },
        374376: (e, t, r) => {
            r.d(t, {
                L: () => n
            });

            function n(e, t = {
                redirectType: "immediate",
                redirectUrl: r(168962).JZ.notFound
            }) {
                return {
                    name: `requireEnvironment(${e.join(", ")})`,
                    check: () => !!e.includes("production") || t
                }
            }
        },
        387641: (e, t, r) => {
            function n(e) {
                r(399704).o.setState({ ...e,
                    status: "pending"
                })
            }

            function i(e) {
                let t = r(399704).o.state,
                    n = e.navigationId;
                "idle" !== t.status && t.navigationId === n && r(399704).o.setState({ ...e,
                    status: "error"
                })
            }

            function a(e) {
                let t = r(399704).o.state,
                    n = e.navigationId;
                "idle" !== t.status && t.navigationId === n && r(399704).o.setState({ ...e,
                    status: "redirecting"
                })
            }

            function o(e) {
                let t = r(399704).o.state;
                "idle" !== t.status && t.navigationId === e && r(399704).o.setState({
                    status: "idle"
                })
            }
            r.r(t), r.d(t, {
                markNavigationCompleted: () => o,
                markNavigationErrored: () => i,
                markNavigationPending: () => n,
                markNavigationRedirecting: () => a
            })
        },
        389432: (e, t, r) => {
            r.d(t, {
                T: () => i,
                z: () => a
            }), r(944114);
            var n = () => r(255482);

            function i({
                RouterStore: e,
                currentUserId: t
            }) {
                let r = e.state.id;
                n().K.remove({
                    userId: t,
                    key: r
                })
            }

            function a({
                currentUserId: e
            }) {
                let t = `${e||"guest"}:`,
                    r = [];
                for (let i of (n().K.scan((e, n) => {
                        var i;
                        e.startsWith(t) && "object" == typeof(i = n) && null !== i && "scrollTop" in i && "blockIds" in i && "index" in i && r.push(e.slice(t.length))
                    }), r)) n().K.remove({
                    userId: e,
                    key: i
                })
            }
        },
        399704: (e, t, r) => {
            r.d(t, {
                o: () => a
            });
            var n = () => r(546605);
            class i extends n().Store {
                getInitialState() {
                    return {
                        status: "idle"
                    }
                }
            }
            let a = new i
        },
        402916: (e, t, r) => {
            r.d(t, {
                F: () => n
            });

            function n() {
                let e = (0, r(533992).v3)();
                return (0, r(682985).K8)(() => {
                    var t;
                    let n;
                    return t = e.RouterStore.state.id, "idle" === (n = r(399704).o.state).status || t === n.navigationId ? n : {
                        status: "idle"
                    }
                }, [e.RouterStore])
            }
        },
        413630: (e, t, r) => {
            r.d(t, {
                LN: () => m,
                Qh: () => l,
                Qs: () => c,
                gc: () => f,
                hL: () => o,
                m: () => p,
                rV: () => g
            }), r(57145), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(581454);
            var n = r(296540);
            let i = new Set(["Joined"]);

            function a(e) {
                let {
                    teamTypes: t
                } = e, i = (0, r(533992).v3)(), a = (0, r(682985).K8)(() => {
                    var t;
                    return e.userId ? ? (null == (t = r(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id)
                }, [e.userId]), o = (0, r(682985).K8)(() => e.spaceStore ? ? (0, r(328765).S)(), [e.spaceStore]);
                return (0, n.useEffect)(() => {
                    void 0 !== a && void 0 !== o && (0, r(455205).fetchUnfetchedTeams)({
                        userId: a,
                        spaceId: o.id,
                        teamTypes: t,
                        environment: i,
                        canTruncateRecordMap: null == e ? void 0 : e.canTruncateRecordMap,
                        sort: null == e ? void 0 : e.sort
                    })
                }, [a, o, t, i, null == e ? void 0 : e.canTruncateRecordMap, null == e ? void 0 : e.sort]), (0, r(682985).K8)(() => {
                    if (void 0 === a || void 0 === o) return {
                        teams: [],
                        isLoading: !0,
                        isError: !1
                    };
                    let {
                        teams: e,
                        isLoading: n,
                        isError: i
                    } = r(988752).E.readTeams(a, o.id, t);
                    return {
                        teams: e,
                        isLoading: n,
                        isError: i
                    }
                }, [a, o, t], {
                    equalityFn: r(795676).k
                })
            }

            function o(e) {
                let {
                    userId: t,
                    spaceStore: r
                } = e || {};
                return a({
                    userId: t,
                    spaceStore: r,
                    teamTypes: i
                })
            }
            let s = new Set(["UnjoinedActive"]);

            function l(e) {
                let {
                    userId: t,
                    spaceStore: r
                } = e || {};
                return a({
                    userId: t,
                    spaceStore: r,
                    teamTypes: s,
                    canTruncateRecordMap: null == e ? void 0 : e.canTruncateRecordMap,
                    sort: null == e ? void 0 : e.sort
                })
            }
            let d = new Set(["Joined", "UnjoinedActive"]);

            function c(e) {
                let {
                    userId: t,
                    spaceStore: r
                } = e || {};
                return a({
                    userId: t,
                    spaceStore: r,
                    teamTypes: d
                })
            }
            let u = new Set(["Joined", "UnjoinedActive", "Archived"]);

            function g(e) {
                let {
                    userId: t,
                    spaceStore: r
                } = e || {};
                return a({
                    userId: t,
                    spaceStore: r,
                    teamTypes: u
                })
            }

            function p(e) {
                let {
                    userId: t,
                    spaceStore: i
                } = e, {
                    teams: a,
                    isLoading: s,
                    isError: l
                } = o({
                    userId: t,
                    spaceStore: i
                }), d = (0, r(682985).K8)(() => {
                    var e;
                    return new Map(((null == (e = r(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.getJoinedTeams()) ? ? []).map((e, t) => [e, t]))
                }, []);
                return {
                    teams: (0, n.useMemo)(() => a.toSorted((e, t) => (d.get(e.id) ? ? 1 / 0) - (d.get(t.id) ? ? 1 / 0)), [a, d]),
                    isLoading: s,
                    isError: l
                }
            }

            function m(e) {
                let {
                    spaceStore: t,
                    shouldCreateTeamStores: n
                } = e, {
                    teams: i
                } = p(e);
                return {
                    teams: (0, r(682985).K8)(() => t && n ? i.map(e => (0, r(455205).getTeamStore)({
                        teamId: e.id,
                        spaceStore: t
                    })) : [], [i, t, n]),
                    metadata: i
                }
            }

            function f(e) {
                let {
                    teams: t
                } = e, n = (0, r(682985).K8)(() => e.spaceStore ? ? (0, r(328765).S)(), [e.spaceStore]);
                return n ? t.map(({
                    id: e,
                    type: t,
                    membershipSummary: i
                }) => ({
                    store: (0, r(455205).getTeamStore)({
                        teamId: e,
                        spaceStore: n
                    }),
                    type: t,
                    membershipSummary: i
                })) : []
            }
        },
        425749: (e, t, r) => {
            r.d(t, {
                I$: () => o,
                R2: () => d,
                WF: () => l,
                bZ: () => s,
                cE: () => i,
                jX: () => a,
                rz: () => c
            });
            var n = () => r(381453);

            function i(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let a = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function o(e) {
                return !!(void 0 !== e && (0, r(722371).Xk)(a, e))
            }

            function s() {
                let e = (0, r(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: r(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, r(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function l(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let d = [{
                type: "everything"
            }];

            function c(e) {
                for (let t of d)
                    if (n().n4(e, t)) return !0;
                return !1
            }
        },
        455205: (e, t, r) => {
            r.r(t), r.d(t, {
                FETCHABLE_TEAM_TYPES: () => o,
                fetchUnfetchedTeams: () => l,
                fetchUnfetchedTeamsFromLocalStorage: () => c,
                getActiveTeamsMetadataForUserInSpace: () => g,
                getAllTeamsMetadataForUserInSpace: () => p,
                getTeamMetadataFromStore: () => f,
                getTeamStore: () => m,
                refetchTeams: () => d
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520);
            var n = () => r(988752);
            async function i(e) {
                let {
                    actorUserId: t,
                    targetUserId: n,
                    spaceId: i,
                    teamTypes: a,
                    teamIds: o,
                    environment: s
                } = e;
                if (!(0, r(422280).GL)({
                        actorUserId: t,
                        targetUserId: n,
                        teamTypes: a
                    })) throw new(r(101787)).qQk("User does not have permission to fetch teams for another user.");
                let l = await s.api.callCellCompatibleApi({
                    eventName: "getTeamsV2",
                    environment: s,
                    data: {
                        spaceId: i,
                        teamTypes: Array.from(a),
                        teamIds: "all" === o ? void 0 : Array.from(o),
                        sort: e.sort,
                        canTruncateRecordMap: e.canTruncateRecordMap,
                        includeMembershipSummary: !(0, r(958692).X7)() && void 0,
                        targetUserId: n
                    },
                    userId: t,
                    cellNavigation: {
                        cellId: void 0,
                        recordId: void 0,
                        spaceId: i
                    }
                });
                if ("failed" === l.type) throw l.error;
                let {
                    teams: d,
                    hasUnjoinedActiveTeams: c
                } = l.data;
                return {
                    teams: d,
                    ...void 0 !== c && {
                        hasUnjoinedActiveTeams: c
                    }
                }
            }
            let a = new(r(245541)).R({
                    key: "localStorageTeams",
                    namespace: r(274919).Bq,
                    important: !1,
                    trackingType: "preference"
                }),
                o = ["Joined", "UnjoinedActive", "Archived"];
            async function s(e) {
                let {
                    userId: t,
                    spaceId: o,
                    teamTypesToUpdate: s,
                    teamIdsToUpdate: l,
                    environment: d,
                    canTruncateRecordMap: c,
                    sort: u
                } = e, g = n().E.getOrCreateUnit(t, o);
                if (0 === s.size || "all" !== l && 0 === l.size) return void await g.pendingUpdates;
                let p = i({
                    actorUserId: t,
                    targetUserId: t,
                    spaceId: o,
                    teamTypes: s,
                    teamIds: l,
                    environment: d,
                    canTruncateRecordMap: c,
                    sort: u
                });
                n().E.queueUpdateForSpaceUser({
                        userId: t,
                        spaceId: o,
                        fetchedTeamsPromise: p,
                        fetchedTeamsSource: "server",
                        teamTypesToUpdate: s,
                        teamIdsToUpdate: l
                    }), await g.pendingUpdates,
                    function(e) {
                        let {
                            userId: t,
                            spaceId: n,
                            teamsResponse: i
                        } = e;
                        if (!r(218744).default.checkGate({
                                gateName: "teams_local_storage_write"
                            })) return;
                        let {
                            teams: o
                        } = i, s = o.filter(e => "Joined" === e.type), l = o.filter(e => "UnjoinedActive" === e.type), d = o.filter(e => "Archived" === e.type), c = s.concat(l, d).slice(0, 1e3);
                        a.update(e => ({ ...e ? ? {},
                            [t] : { ...(null == e ? void 0 : e[t]) ? ? {},
                                [n] : { ...i,
                                    teams: c
                                }
                            }
                        }))
                    }({
                        userId: t,
                        spaceId: o,
                        teamsResponse: {
                            teams: Object.values(g.teams),
                            hasUnjoinedActiveTeams: g.hasUnjoinedActiveTeams
                        }
                    })
            }
            async function l(e) {
                let {
                    userId: t,
                    spaceId: r,
                    teamTypes: i,
                    environment: a,
                    canTruncateRecordMap: o,
                    sort: l
                } = e, d = n().E.getOrCreateUnit(t, r), c = new Set(Array.from(i.values()).filter(e => "server" !== d.lastFetchSourceOfTeamType[e]));
                await s({
                    userId: t,
                    spaceId: r,
                    teamTypesToUpdate: c,
                    teamIdsToUpdate: "all",
                    environment: a,
                    canTruncateRecordMap: o,
                    sort: l
                })
            }
            async function d(e) {
                let {
                    userId: t,
                    spaceId: r,
                    teamIds: i,
                    environment: a
                } = e, l = n().E.getOrCreateUnit(t, r), d = new Set(o.filter(e => "server" === l.lastFetchSourceOfTeamType[e]));
                await s({
                    userId: t,
                    spaceId: r,
                    teamTypesToUpdate: d,
                    teamIdsToUpdate: i,
                    environment: a
                })
            }

            function c() {
                let e = a.getState();
                for (let t in e)
                    for (let r in e[t]) {
                        let i = n().E.getOrCreateUnit(t, r),
                            a = new Set(o.filter(e => "none" === i.lastFetchSourceOfTeamType[e]));
                        0 !== a.size && n().E.queueUpdateForSpaceUser({
                            userId: t,
                            spaceId: r,
                            fetchedTeamsPromise: Promise.resolve(e[t][r]),
                            fetchedTeamsSource: "local",
                            teamTypesToUpdate: a,
                            teamIdsToUpdate: "all"
                        })
                    }
            }
            async function u(e) {
                let {
                    userId: t,
                    spaceStore: r,
                    teamTypes: i,
                    environment: a
                } = e;
                return await l({
                    userId: t,
                    spaceId: r.id,
                    teamTypes: i,
                    environment: a
                }), n().E.readTeams(t, r.id, i).teams
            }
            async function g(e) {
                let {
                    userId: t,
                    spaceStore: r,
                    environment: n
                } = e;
                return await u({
                    userId: t,
                    spaceStore: r,
                    teamTypes: new Set(["Joined", "UnjoinedActive"]),
                    environment: n
                })
            }
            async function p(e) {
                let {
                    userId: t,
                    spaceStore: r,
                    environment: n
                } = e;
                return await u({
                    userId: t,
                    spaceStore: r,
                    teamTypes: new Set(["Joined", "UnjoinedActive", "Archived"]),
                    environment: n
                })
            }

            function m(e) {
                let {
                    teamId: t,
                    spaceStore: n
                } = e;
                return r(681735).h.createChildStore(n, {
                    table: r(832375).yKj,
                    id: t
                })
            }

            function f(e) {
                var t;
                let {
                    teamStore: i,
                    userId: a,
                    spaceStore: o
                } = e, s = n().E.readMembershipCount({
                    userId: a,
                    spaceId: o.id,
                    teamId: i.id
                }), l = i.getArchivedBy() ? "Archived" : (0, r(220530).f)({
                    userId: a,
                    teamStore: i,
                    userPermissionGroups: r(68809).f.getSpacePermissionGroupIds({
                        spaceId: o.id
                    })
                }) ? "Joined" : "UnjoinedActive", d = (0, r(228091).a)({
                    teamStore: i,
                    userId: a,
                    userPermissionGroups: r(68809).f.getSpacePermissionGroupIds({
                        spaceId: o.id
                    })
                }) ? ? "none";
                return {
                    id: i.id,
                    title: i.getName() ? ? "",
                    icon: null == (t = i.getIcon()) ? void 0 : t.icon,
                    type: l,
                    membershipSummary: s,
                    lastEditedTime: 0 === i.getLastEditedTime() ? void 0 : i.getLastEditedTime(),
                    securitySettings: {
                        disablePublicAccess: i.getDisablePublicAccess(),
                        disableGuests: i.getDisableGuests(),
                        disableExport: i.getDisableExport()
                    },
                    teamRole: d,
                    isDefaultTeam: i.isDefault(),
                    accessLevel: i.getTeamAccessLevel(),
                    description: i.getDescription()
                }
            }
        },
        473234: (e, t, r) => {
            r.d(t, {
                v: () => i
            });
            var n = r(296540);

            function i(e) {
                let {
                    immediateState: t,
                    isEqual: r = Object.is,
                    openDelayMs: i = 400,
                    closeDelayMs: a = 150
                } = e, [o, s] = (0, n.useState)(!1), [l, d] = (0, n.useState)(void 0), c = !!(l && !r(t, l));
                (0, n.useEffect)(() => {
                    if (c) {
                        let e = setTimeout(() => {
                            d(void 0)
                        }, a);
                        return () => clearTimeout(e)
                    }
                }, [c, a]);
                let u = !!(t && !r(t, l));
                (0, n.useEffect)(() => {
                    if (t && u) {
                        let e = setTimeout(() => {
                            d(t)
                        }, i);
                        return () => clearTimeout(e)
                    }
                }, [t, u, i]);
                let [g, p] = (0, n.useState)(void 0), m = g ? ? (o ? void 0 : l), f = (0, n.useCallback)(() => {
                    p(m)
                }, [m]), h = (0, n.useCallback)(() => {
                    p(void 0)
                }, []), v = (0, n.useCallback)(() => {
                    h(), s(!0)
                }, [h]);
                return (0, n.useEffect)(() => {
                    s(!1)
                }, [l]), {
                    state: m,
                    pinPopup: f,
                    unpinPopup: h,
                    hasBeenHovering: !!(t && r(t, m)),
                    isPinned: !!g,
                    dismissPopup: v
                }
            }
        },
        515487: (e, t, r) => {
            r.d(t, {
                r: () => a
            });
            var n = r(296540),
                i = r(474848);

            function a({
                loadingMessage: e
            }) {
                let t = (0, r(934877).A)({
                    visibility: !0,
                    delayShow: 400
                });
                return (0, i.jsx)(r(4458).fI, {
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    children: t ? (0, i.jsxs)(n.Fragment, {
                        children: [(0, i.jsx)(r(517334).k, {}), e ? (0, i.jsx)("div", {
                            className: "x13fj5qh x1b8rd1j",
                            children: e
                        }) : void 0]
                    }) : void 0
                })
            }
        },
        541341: (e, t, r) => {
            r.d(t, {
                j: () => a
            }), r(296540);
            var n = r(474848);
            let i = {
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                gap: 6
            };

            function a(e) {
                let {
                    type: t,
                    withSelectedStyle: a,
                    style: o,
                    shouldUseStyledText: s,
                    shouldAlwaysShowAccessLevelTooltip: l
                } = e, {
                    teamName: d,
                    accessLevel: c
                } = (0, r(682985).K8)(() => {
                    if ("teamStore" === t) {
                        var n;
                        let t = e.teamStore,
                            i = null == (n = t.getSettingsStore()) ? void 0 : n.getValue();
                        return {
                            teamName: t.getName() ? ? "",
                            accessLevel: i ? (0, r(422280).MA)(i) : void 0
                        }
                    }
                    if ("teamMetadata" === t) {
                        let t = e.teamMetadata;
                        return {
                            teamName: t.title,
                            accessLevel: t.accessLevel
                        }
                    }(0, r(722371).HB)(t)
                }, [t, e.teamStore, e.teamMetadata]), u = (0, r(960253).I)(() => ({
                    labelText: { ...r(699422).RC,
                        color: a ? r(632079).Tj.text.primary : r(632079).Tj.text.accentPrimary,
                        fontWeight: r(699422).Wy.medium,
                        fontSize: r(418676).vQ,
                        ...o
                    }
                }), [a, o]);
                return (0, n.jsxs)("div", {
                    style: i,
                    children: [s ? (0, n.jsx)(r(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "primary",
                        children: d
                    }) : (0, n.jsx)("div", {
                        style: u.labelText,
                        children: d
                    }), "private" === c || l ? (0, r(729869).Q)(c) : void 0]
                })
            }
        },
        545504: (e, t, r) => {
            r.d(t, {
                w: () => n
            });

            function n({
                url: e,
                config: t
            }) {
                let i = (0, r(132702).parseRoute)({
                    url: e,
                    baseUrl: t.domainBaseUrl,
                    publicDomainName: t.publicDomainName,
                    isMobile: !1,
                    protocol: t.protocol,
                    currentUrl: void 0,
                    requestedOnAlternateDomain: t.requestedOnAlternateDomain
                });
                if ("page" === i.name) return i.blockId
            }
        },
        558389: (e, t, r) => {
            r.d(t, {
                s: () => n
            }), r(898992), r(354520), r(581454);

            function n({
                environment: e,
                teamStore: t,
                spaceId: i,
                from: a,
                newRole: o,
                usingAdminPrivileges: s,
                andNavigateToTeamHome: l
            }) {
                let d = e.currentUser.id,
                    c = r(728372).AppStoreSidebarSpaceViewStore.state;
                if (!d || !c) return !1;
                ! function(e) {
                    var t;
                    let {
                        environment: n,
                        teamId: i,
                        spaceViewStore: a
                    } = e, o = null == (t = (0, r(804011).r)(n).state) ? void 0 : t.userJoinedTeamsStores;
                    if (!o) return;
                    let s = [...o.map(({
                        id: e
                    }) => e).filter(e => e !== i), i];
                    r(89739).br({
                        environment: n,
                        spaceViewStore: a,
                        orderedTeamIds: s,
                        userAction: "TeamBrowserOutliner",
                        isExplicitUserAction: !1
                    })
                }({
                    environment: e,
                    spaceViewStore: c,
                    teamId: t.id
                }), r(649807).vo(e, {
                    store: t,
                    joined_role: o,
                    from: a
                }), r(905717).Z({
                    environment: e,
                    userId: d,
                    spaceId: i
                });
                let u = t.getName();
                l ? ((0, r(189498).L)({
                    environment: e,
                    teamStore: t,
                    shouldScroll: !1
                }), u && new Promise(e => setTimeout(e, 500)).then(() => {
                    (0, r(356164).VV)({
                        teamName: u,
                        usingAdminPrivileges: s
                    })
                })) : u && (0, r(356164).VV)({
                    teamName: u,
                    usingAdminPrivileges: s
                })
            }
        },
        572305: (e, t, r) => {
            r.d(t, {
                G: () => n
            });

            function n(e = {
                redirectType: "immediate",
                redirectUrl: r(168962).JZ.root
            }) {
                return {
                    name: "requireAdminMode",
                    check: () => !!r(986939).A.isAdminMode || e
                }
            }
        },
        590210: (e, t, r) => {
            r.r(t), r.d(t, {
                RouteWrapper: () => i
            }), r(296540);
            var n = r(474848);

            function i({
                fallback: e,
                route: t
            }) {
                let a = (0, r(533992).v3)(),
                    o = (0, r(402916).F)(),
                    s = r(580409).RouteRegistry.get(t.name);
                return "error" === o.status ? (0, n.jsx)(n.Fragment, {
                    children: e
                }) : "pending" !== o.status && "redirecting" !== o.status && s && void 0 !== s.render ? (0, n.jsx)(r(337336).K, {
                    fallback: () => e,
                    from: `ClientRouting.render.${t.name}`,
                    team: "web-infra",
                    children: s.render({
                        environment: a,
                        route: t
                    })
                }) : (0, n.jsx)(r(515487).r, {})
            }
        },
        634832: (e, t, r) => {
            function n(e) {
                return "ai" === e.name ? {
                    type: "agents"
                } : "agent" === e.name ? e.workflowViewType ? {
                    type: "agent-settings"
                } : e.agentChatThreadId && "new" !== e.agentChatThreadId ? {
                    type: "agent-thread"
                } : {
                    type: "agent"
                } : null
            }

            function i(e) {
                return "agent" === e.name
            }

            function a(e) {
                return "name" in e && "agent" === e.name
            }
            r.d(t, {
                Ar: () => a,
                Zx: () => i,
                uR: () => n
            })
        },
        647421: (e, t, r) => {
            r.r(t), r.d(t, {
                evaluateGuardrails: () => a
            });
            var n = () => r(168962),
                i = () => r(116924);

            function a(e, t = []) {
                for (let r of t) try {
                    let t = r.check(e);
                    if (!0 !== t) return t
                } catch (t) {
                    return (0, i().reportClientRoutingError)({
                        from: "ClientRouting.evaluateGuardrails",
                        type: "ClientRouteConfigEvaluateGuardrailError",
                        error: t,
                        data: {
                            routeName: e.route.name,
                            guardrailName: r.name
                        },
                        team: "web-infra"
                    }), {
                        redirectType: "immediate",
                        redirectUrl: n().JZ.notFound
                    }
                }
                return !0
            }
        },
        729869: (e, t, r) => {
            r.d(t, {
                Q: () => i
            }), r(296540);
            var n = r(474848);

            function i(e) {
                if (!e) return !1;
                switch (e) {
                    case "private":
                    case "closed":
                        return (0, n.jsx)(s, {
                            accessLevel: e
                        });
                    case "open":
                        return null;
                    default:
                        (0, r(722371).HB)(e)
                }
            }
            let a = {
                    width: 210
                },
                o = {
                    alignContent: "center"
                };

            function s({
                accessLevel: e
            }) {
                let t = (0, r(422280).UN)(e);
                return (0, n.jsx)(r(51831).m, {
                    textWrap: !0,
                    style: a,
                    placement: "bottom",
                    content: () => {
                        switch (e) {
                            case "private":
                                return (0, n.jsx)(r(109939).sA, {
                                    id: "teamLockIcon.tooltip",
                                    defaultMessage: "Private teamspaces can only be accessed or joined by invitation"
                                });
                            case "closed":
                                return (0, n.jsx)(r(109939).sA, {
                                    id: "teamClosedIcon.tooltip",
                                    defaultMessage: "Closed teamspaces require approval to join"
                                });
                            default:
                                (0, r(722371).HB)(e)
                        }
                    },
                    children: e => (0, n.jsx)("div", { ...e,
                        style: o,
                        children: (0, n.jsx)(r(708966).Q, {
                            iconGroup: t,
                            variantName: "small",
                            size: "sm",
                            colorVariant: "secondary"
                        })
                    })
                })
            }
        },
        791923: (e, t, r) => {
            r.d(t, {
                A: () => l,
                R: () => o
            });
            var n = r(296540),
                i = r(474848);
            let a = {
                    property: !0
                },
                o = {
                    wrapper: {
                        display: "flex",
                        alignItems: "center",
                        color: r(632079).Tj.text.primary,
                        fontSize: "13px",
                        padding: "4px 8px"
                    },
                    input: {
                        display: "block",
                        flexGrow: 1,
                        fontSize: 14,
                        lineHeight: "20px",
                        paddingTop: 4,
                        paddingBottom: 4,
                        paddingInlineStart: 10,
                        paddingInlineEnd: 10,
                        width: "100%",
                        borderRadius: 4,
                        boxShadow: `${r(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                        background: r(632079).Tj.background.secondaryTranslucent,
                        cursor: "text",
                        position: "relative"
                    }
                };

            function s(e) {
                let t, s = (0, r(109939).tz)(),
                    l = (0, r(533992).v3)(),
                    d = (0, r(682985).K8)(() => r(11446).A.state.clonedBlockStore, []),
                    u = (0, r(682985).K8)(() => null == d ? void 0 : d.getTitleStore(), [d]),
                    p = (0, r(682985).K8)(() => (null == d ? void 0 : d.canEdit()) ? ? !1, [d]),
                    m = (0, r(682985).K8)(() => {
                        var e;
                        if (d) return null == (e = d.getModel()) ? void 0 : e.getEmptyTitlePlaceholder({
                            getRecordModel: d.getRecordModel,
                            userTimeZone: (0, r(714350).P)(),
                            intl: s
                        })
                    }, [d, s]);
                if ((0, n.useEffect)(() => {
                        if (!d) return;
                        let e = d.getTitleStore();
                        e && (0, r(492368).x)({
                            environment: l,
                            store: e,
                            canSelectAllBlocks: !1
                        })
                    }, [d, l]), !d || !u) return null;
                let {
                    renderDelete: f
                } = e;
                return t = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.ActionSheet
                } : {
                    menuType: r(649476).gu.Popup,
                    width: 380
                }, (0, i.jsx)(r(747369).A, { ...t,
                    children: (0, i.jsxs)("div", {
                        style: o.wrapper,
                        children: [(0, i.jsx)(g, {
                            blockStore: d
                        }), (0, i.jsx)(r(53373).A, {
                            store: u,
                            disabled: !p,
                            onEsc: () => r(777772).V(l),
                            onEnter: () => r(777772).V(l),
                            onTab: () => !0,
                            disableSlashCommands: !0,
                            disableEmojiCommands: !0,
                            disableSelectAllBlocks: !0,
                            disableSelectionDrag: !0,
                            disableStyleAnnotations: !0,
                            disableInsertedDeletedAnnotations: !0,
                            placeholder: m,
                            style: o.input,
                            pasteBehavior: "inline",
                            inPageFind: r(831719).Os.none,
                            disabledMentionTypes: a
                        }), f && p ? (0, i.jsx)(c, {}) : void 0]
                    })
                })
            }
            let l = function() {
                    let e = (0, r(533992).v3)(),
                        {
                            clonedBlockStore: t,
                            originRect: n
                        } = (0, r(682985).K8)(() => {
                            let {
                                clonedBlockStore: e,
                                originRect: t
                            } = r(11446).A.state;
                            return {
                                clonedBlockStore: e,
                                originRect: t
                            }
                        }, []);
                    return (0, i.jsx)(r(182718).zD, {
                        popupType: r(986939).A.isMobile ? r(423291).n.SlideUp : r(423291).n.Popup,
                        open: !!t,
                        originRect: n,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "center",
                        originGap: 4,
                        onDismiss: () => r(777772).V(e),
                        content: () => (0, i.jsx)(u, {}),
                        trapFocus: !0
                    })
                },
                d = {
                    marginInlineStart: 6
                };

            function c() {
                let e = (0, r(533992).v3)(),
                    t = (0, r(109939).tz)();
                return (0, i.jsx)(r(374533).A, {
                    ariaLabel: t.formatMessage({
                        id: "renamePageMenu.deleteButton.ariaLabel",
                        defaultMessage: "Delete"
                    }),
                    icon: e => (0, i.jsx)(r(16275).I, {
                        icon: r(968411).trashIcon,
                        style: { ...e
                        }
                    }),
                    style: d,
                    hasBackground: !0,
                    colorVariant: "primary",
                    showShadow: !0,
                    onClick: async () => {
                        let {
                            originalBlockStore: t
                        } = r(11446).A.state;
                        t && await (0, r(660262).A)({
                            environment: e,
                            blocks: [t],
                            shouldCheckSuggestEdit: !0
                        }), r(777772).V(e)
                    }
                })
            }

            function u() {
                let e = (0, r(682985).K8)(() => r(11446).A.state.renderDelete, []);
                return (0, i.jsx)(s, {
                    renderDelete: !!e
                })
            }

            function g({
                blockStore: e
            }) {
                let t = (0, r(533992).v3)(),
                    n = {
                        width: 28,
                        height: 28,
                        marginInlineEnd: 6,
                        flexShrink: 0,
                        flexGrow: 0,
                        boxShadow: `inset 0 0 0 1px ${r(632079).Tj.border.primaryTranslucent}`
                    },
                    a = (0, r(682985).K8)(() => e.canEdit(), [e]),
                    o = (0, r(682985).K8)(() => e.getIconStore(), [e]),
                    s = null == o ? void 0 : o.table,
                    l = null == o ? void 0 : o.id,
                    d = (0, r(682985).K8)(() => e.getIcon(), [e]),
                    c = (0, r(682985).K8)(() => e.isEmptyPage(), [e]),
                    u = (0, r(682985).K8)(() => e.getType(), [e]),
                    p = (0, r(682985).K8)(() => (0, r(569553).Te)(e), [e]);
                return a ? (0, i.jsx)(r(569553).B6, {
                    disabled: !1,
                    bucket: "secure",
                    store: e,
                    icon: d,
                    iconRecordCategory: p,
                    isEmptyPage: c,
                    size: 18,
                    style: n,
                    iconLoggingData: {
                        recordTable: s,
                        source: "breadcrumb",
                        block_type: u,
                        collection_id: "collection" === s ? l : void 0
                    },
                    onChange: e => (function(e, t) {
                        let {
                            clonedBlockStore: n
                        } = r(11446).A.state;
                        if (n) {
                            let i = n.getIconStore();
                            if (i) {
                                let a = n.getSpaceId();
                                (0, r(377796).createAndCommit)({
                                    userAction: "RenamePageMenuPopup.handleRecordIconChange",
                                    environment: t,
                                    canUndo: !0,
                                    cellTarget: a ? {
                                        spaceWithId: a
                                    } : void 0,
                                    perform: t => {
                                        (0, r(368198).K)({
                                            store: i,
                                            value: e,
                                            transaction: t
                                        })
                                    }
                                })
                            }
                        }
                    })(e, t)
                }) : (0, i.jsx)(r(569553).B6, {
                    disabled: !0,
                    icon: d,
                    iconRecordCategory: p,
                    isEmptyPage: c,
                    size: 18,
                    style: n
                })
            }
        },
        795326: (e, t, r) => {
            r.d(t, {
                X: () => n
            });

            function n(e) {
                let {
                    name: t,
                    workflowStore: n
                } = e;
                (0, r(377796).createAndCommit)({
                    userAction: "WorkflowActions.saveName",
                    environment: e.environment,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: n.pointer.spaceId
                    },
                    perform: e => {
                        (0, r(421439).y4)({
                            store: n,
                            operation: r(861988).i({
                                pointer: n.pointer,
                                name: t
                            }),
                            transaction: e
                        })
                    }
                })
            }
        },
        839032: (e, t, r) => {
            r.d(t, {
                M: () => n
            });

            function n(e) {
                let {
                    TabbedRouterStore: t,
                    RouterStore: n
                } = e;
                return (0, r(318355).A)(e) ? t.canGoForward() : e.device.isElectron ? r(219040).H.canGoForward() : n.canGoForward()
            }
        },
        858778: (e, t, r) => {
            r.d(t, {
                H: () => i,
                k: () => a
            });
            var n = r(296540);
            let i = n.createContext(!1);

            function a() {
                return n.useContext(i)
            }
            i.displayName = "BreadcrumbBrowserContext"
        },
        874048: (e, t, r) => {
            r.d(t, {
                fj: () => i,
                jG: () => a,
                qO: () => o
            }), r(581454);
            var n = r(296540);

            function i(e) {
                let t = (0, r(533992).v3)(),
                    {
                        userId: n,
                        spaceId: i,
                        teamIds: a
                    } = e;
                return (0, r(682985).K8)(() => (0, r(958692).z5)({
                    environment: t,
                    userId: n,
                    spaceId: i,
                    teamIds: a
                }), [t, n, i, a])
            }

            function a(e) {
                let {
                    userId: t,
                    spaceId: a,
                    teams: o
                } = e, {
                    countsByTeamId: s,
                    isLoading: l
                } = i({
                    userId: t,
                    spaceId: a,
                    teamIds: (0, n.useMemo)(() => o.map(e => e.id), [o])
                });
                return {
                    teams: (0, n.useMemo)(() => (0, r(140289).z_)({
                        teams: o,
                        countsByTeamId: s
                    }), [o, s]),
                    countsByTeamId: s,
                    isLoading: l
                }
            }

            function o(e) {
                let {
                    userId: t,
                    spaceId: r,
                    teamId: a
                } = e, {
                    countsByTeamId: o,
                    isLoading: s
                } = i({
                    userId: t,
                    spaceId: r,
                    teamIds: (0, n.useMemo)(() => a ? [a] : [], [a])
                });
                return {
                    counts: a ? o.get(a) : void 0,
                    isLoading: s
                }
            }
        },
        874218: (e, t, r) => {
            r.d(t, {
                Y: () => i
            }), r(581454), r(296540);
            var n = r(474848);

            function i(e) {
                let {
                    environment: t,
                    stores: i,
                    onPageClick: a,
                    showVerifiedPageBadge: o
                } = e;
                return [{
                    key: "results",
                    items: i.map((e, i) => ({
                        key: e.id,
                        render: t => (0, n.jsx)(r(103558).A, { ...t,
                            isSubpage: 0 !== i,
                            store: e,
                            hidePath: !0,
                            showTooltipOnOverflow: !0,
                            showVerifiedPageBadge: o
                        }),
                        action: ({
                            event: n
                        }) => {
                            let i = (0, r(7029).V)(n);
                            if (e instanceof r(970831).B) a && a({
                                pageId: e.id,
                                collectionId: void 0
                            }), (0, r(545586).navigateToBlock)({
                                environment: t,
                                store: e,
                                openInNew: i,
                                visitType: r(981324).ig.Link,
                                pageVisitSource: r(254656).y8.Breadcrumb
                            });
                            else if (e instanceof r(356912).m) {
                                let n = e.getParentCollectionViewBlockStore();
                                if (!n) return;
                                a && a({
                                    pageId: n.id,
                                    collectionId: e.id
                                });
                                let o = (0, r(901881).V5)({
                                    collectionViewBlockStore: n,
                                    collectionStore: e
                                });
                                (0, r(545586).navigateToBlock)({
                                    environment: t,
                                    store: n,
                                    collectionViewId: null == o ? void 0 : o.id,
                                    openInNew: i,
                                    visitType: r(981324).ig.Link,
                                    pageVisitSource: r(254656).y8.Breadcrumb
                                })
                            } else if (e instanceof r(360851).N) {
                                let n = (0, r(453573).Lm)({
                                    workflowId: e.id,
                                    params: {
                                        workflowViewType: "chat"
                                    }
                                });
                                (0, r(79266).navigate)({
                                    environment: t,
                                    url: n,
                                    openInNew: i
                                })
                            }
                        }
                    }))
                }]
            }
        },
        904715: (e, t, r) => {
            r.d(t, {
                pX: () => i().wasRequestedOnAlternateDomain,
                xS: () => n().x
            });
            var n = () => r(442564),
                i = () => r(700473)
        },
        908975: (e, t, r) => {
            r.d(t, {
                W: () => a
            }), r(296540);
            var n = r(474848);
            let i = {
                container: {
                    width: 80,
                    height: 52,
                    display: "flex",
                    alignItems: "center",
                    position: "relative"
                },
                avatarLeft: {
                    width: 28,
                    height: 28,
                    position: "absolute",
                    insetInlineStart: 0
                },
                avatarRight: {
                    width: 28,
                    height: 28,
                    position: "absolute",
                    insetInlineEnd: 0
                },
                avatarCenter: {
                    width: 40,
                    height: 40,
                    position: "absolute",
                    insetInlineStart: 0,
                    insetInlineEnd: 0,
                    margin: "0 auto",
                    zIndex: 1,
                    boxShadow: r(632079).Tj.shadow.base.sm,
                    borderRadius: "50%"
                }
            };

            function a() {
                return (0, n.jsxs)("div", {
                    style: i.container,
                    children: [(0, n.jsx)("img", {
                        src: r(896221).A.images.customAgentAvatars.appleRedPng,
                        style: i.avatarLeft,
                        alt: ""
                    }), (0, n.jsx)("img", {
                        src: r(896221).A.images.customAgentAvatars.bookBluePng,
                        style: i.avatarCenter,
                        alt: ""
                    }), (0, n.jsx)("img", {
                        src: r(896221).A.images.customAgentAvatars.bulbYellowPng,
                        style: i.avatarRight,
                        alt: ""
                    })]
                })
            }
        },
        930225: (e, t, r) => {
            r.d(t, {
                r: () => n
            }), r(898992), r(672577), r(296540);

            function n(e) {
                let t = (0, r(109939).tz)(),
                    n = (0, r(533992).v3)(),
                    i = (0, r(972740).L)(),
                    a = (0, r(345776).T)(),
                    o = null == i ? void 0 : i.id,
                    s = (0, r(611285).P)({
                        name: "workers",
                        spaceId: o,
                        userId: a
                    }),
                    [l, d] = (0, r(97668).Yb)(async () => {
                        var i, a, l;
                        if (!o || !e || !s) return;
                        let d = await n.api.callApi({
                            eventName: "getWorkers",
                            environment: n,
                            data: {
                                spaceId: o
                            }
                        });
                        if ("success" === d.type) return d.data.workers.find(t => t.workerId === e);
                        if ("failed" !== (i = d).type || (null == (a = i.body) ? void 0 : a.name) !== "AbortedError" && (null == (l = i.body) || null == (l = l.clientData) ? void 0 : l.type) !== "aborted") {
                            r(436555).D6({
                                label: t.formatMessage({
                                    id: "workers.form.getWorkersFailed",
                                    defaultMessage: "Failed to get workers"
                                })
                            });
                            let i = (0, r(201790).V4)(d);
                            r(773352).log({
                                level: "error",
                                from: "useWorkerDetail",
                                type: "failedToFetchWorker",
                                data: {
                                    message: "Unexpected error fetching worker",
                                    miscDataToConvertToString: {
                                        response: d,
                                        errorMessage: i,
                                        userId: n.currentUser.id,
                                        spaceId: o,
                                        workerId: e
                                    }
                                }
                            })
                        }
                    }, [n, t, o, e, s], {
                        debugName: "useWorkerDetail"
                    });
                return {
                    worker: l.value,
                    isLoading: "pending" === l.status,
                    refresh: d
                }
            }
        },
        970600: (e, t, r) => {
            r.d(t, {
                H: () => a
            });
            var n = r(296540);
            let i = new(r(815048)).O2("RouteWrapper", async () => r.e(95728).then(r.bind(r, 590210))),
                a = (0, r(815048)._h)(i, e => e.RouteWrapper, {
                    renderLoading: () => n.createElement(r(515487).r)
                })
        }
    }
]);