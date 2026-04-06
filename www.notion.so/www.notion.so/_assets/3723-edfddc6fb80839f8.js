"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [3723, 43239, 48486, 64696, 76135, 81241, 87539], {
        33918: (e, t, n) => {
            n.d(t, {
                G: () => i
            });

            function i(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "delete_property",
                        eventProperties: t
                    }
                })
            }
        },
        35370: (e, t, n) => {
            n.d(t, {
                u: () => o
            }), n(296540);
            var i = n(474848);

            function a(e) {
                let t, {
                        context: a,
                        extensionMenuParent: o,
                        actionMenuListParent: r,
                        popupEvents: l,
                        displayName: s,
                        width: u,
                        initialFocus: c,
                        subActions: d
                    } = e,
                    {
                        isPhone: p
                    } = (0, n(533992).Y0)(),
                    f = (0, n(649476).Tf)();
                t = p ? f ? {
                    menuType: n(649476).gu.Modal,
                    onClickLeft: o.close,
                    left: (0, i.jsx)(n(497857).h, {}),
                    enableMobileRefresh: f,
                    paddingTop: 10,
                    title: (0, i.jsx)(n(109939).sA, { ...s
                    }),
                    ...l
                } : {
                    menuType: n(649476).gu.Modal,
                    right: (0, i.jsx)(n(109939).sA, { ...n(789722).W.done
                    }),
                    onClickRight: o.close,
                    ...l
                } : {
                    menuType: n(649476).gu.Popup,
                    width: u ? ? 220,
                    ...l
                };
                let m = (0, n(682985).K8)(() => d(a), [a, d]);
                return (0, i.jsx)(n(747369).A, { ...t,
                    children: (0, i.jsx)(n(530500).A, {
                        initialFocus: c ? ? 0,
                        context: a,
                        sections: m,
                        onAccept: r.onAccept
                    })
                })
            }

            function o(e) {
                let {
                    key: t,
                    displayName: a,
                    displayNameInterpolatedValues: o,
                    analyticsName: l,
                    validators: s,
                    subActions: u,
                    collapseSubActionsIntoParent: c,
                    hideSubActions: d,
                    clientSkill: p,
                    fuzzySearchKeywordsArray: f,
                    disabled: m
                } = e, g = (0, n(233319).Ls)({
                    clientSkill: p,
                    key: `extension ${t}`,
                    displayName: a,
                    displayNameInterpolatedValues: o,
                    analyticsName: l,
                    validators: s,
                    subActions: u,
                    collapseSubActionsIntoParent: c,
                    hideSubActions: d,
                    fuzzySearchKeywordsArray: f,
                    closeParentMenu: !0,
                    disabled: m,
                    action: () => {},
                    render: (t, n, a) => (0, i.jsx)(r, {
                        actionDisplayName: g.displayName,
                        args: e,
                        props: t,
                        context: n,
                        actionMenuListParent: a
                    })
                });
                return g
            }

            function r({
                actionDisplayName: e,
                args: t,
                props: o,
                context: l,
                actionMenuListParent: s
            }) {
                let {
                    displayName: u,
                    subTitle: c,
                    renderTooltip: d,
                    tooltipPlacement: p,
                    svg: f,
                    icon: m,
                    right: g,
                    rightStyle: h,
                    dontShrinkTitle: v,
                    width: _,
                    initialFocus: y,
                    subActions: b,
                    bottomSheetInitialState: S,
                    disableDefaultClick: I
                } = t, {
                    disabled: w,
                    disableTooltip: x
                } = (0, n(682985).K8)(() => {
                    var e, n;
                    return {
                        disabled: (null == (e = t.disabled) ? void 0 : e.call(t, l)) || !1,
                        disableTooltip: !d || (null == (n = t.disableTooltip) ? void 0 : n.call(t, l))
                    }
                }, [t, l, d]), k = null == c ? void 0 : c(l);
                return (0, i.jsx)(n(51831).m, {
                    content: () => (0, i.jsx)("div", {
                        style: n(233319).FG,
                        children: null == d ? void 0 : d({
                            context: l,
                            title: e
                        })
                    }),
                    disableTooltip: x,
                    placement: p,
                    children: t => (0, i.jsx)(n(816231).A, { ...o,
                        disabled: w,
                        disabledFeedback: w,
                        disableDefaultClick: I,
                        onFocus: s.onFocus,
                        renderExtension: (e, t) => (0, i.jsx)(a, {
                            context: l,
                            extensionMenuParent: t,
                            actionMenuListParent: s,
                            popupEvents: e,
                            displayName: u,
                            width: _,
                            initialFocus: y,
                            subActions: b
                        }),
                        bottomSheetInitialState: S,
                        children: (a, o) => {
                            let r = { ...(0, n(63390).A)(a, t),
                                title: k ? (0, i.jsx)(n(233319).fh, {
                                    subTitle: k,
                                    children: e
                                }) : e,
                                right: g,
                                rightStyle: h,
                                dontShrinkTitle: v
                            };
                            return f ? (0, i.jsx)(n(860287).A, { ...r,
                                svg: f,
                                ref: o
                            }) : (0, i.jsx)(n(95582).A, { ...r,
                                icon: m,
                                ref: o
                            })
                        }
                    })
                })
            }
        },
        59579: (e, t, n) => {
            n.d(t, {
                a: () => i
            });

            function i(e, t) {
                let i = {
                    id: "",
                    key: t,
                    type: "static",
                    category: n(292609).lU[t].category,
                    props: {}
                };
                (0, n(466290).K)(e, i)
            }
        },
        173231: (e, t, n) => {
            n.d(t, {
                hS: () => c,
                o2: () => d,
                js: () => r,
                Oe: () => l,
                Le: () => u,
                F6: () => p
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(823215), n(354520), n(430670), n(581454), n(296540);
            var i = n(474848);
            let a = (0, n(109939).YK)({
                    moreOptions: {
                        id: "action.moreOptions",
                        defaultMessage: "More options"
                    }
                }),
                o = (0, n(109939).YK)({
                    mixedBlocks: {
                        id: "actionMenuHelpers.mixedBlocks.title",
                        defaultMessage: "{count, plural, one {{count} block} other {{count} blocks}}"
                    }
                });

            function r(e) {
                return s(e).groupedSections
            }

            function l(e) {
                let t = s(e);
                return t.rankedActions.map(e => ({
                    action: e,
                    section: t.actionSectionMap.get(e)
                }))
            }

            function s(e) {
                let t = n(962299).A.getIntl(),
                    {
                        sections: r,
                        context: l,
                        query: s,
                        shouldShowBlockTypeTitle: u
                    } = e,
                    c = s.trim().toLowerCase();
                c.startsWith("/") && (c = c.slice(1));
                let f = d(r, l).map((e, r) => {
                    var s, c;
                    let {
                        actions: d,
                        title: p
                    } = e, f = d.length - 5;
                    if (e.shouldShowMoreOptions && f > 1) {
                        let e = (s = d.slice(5), (0, n(35370).u)({
                            key: "more options",
                            displayName: a.moreOptions,
                            analyticsName: a.moreOptions.defaultMessage,
                            svg: n(397900).ellipsisIcon,
                            validators: [],
                            subActions: () => [{
                                key: 0,
                                title: void 0,
                                render: e => (0, i.jsx)(n(844565).A, { ...e
                                }),
                                actions: s
                            }]
                        }));
                        d = [...d.slice(0, 5), e]
                    }
                    let m = l.blocks[0];
                    if (m) {
                        let e = m.getType();
                        if (u && e && 0 === r) {
                            let i = l.blocks.every(t => t.getType() === e) ? (0, n(495734).Z)(e) : o.mixedBlocks;
                            if (i) {
                                p = t.formatMessage(i, {
                                    count: l.blocks.length
                                });
                                let e = null == (c = n(496704).K.findCollectionViewBlockFromStore(m)) ? void 0 : c.collectionContextStore.getViewType();
                                if (e) {
                                    let t = n(799514).to[e];
                                    t && (p += ` \xb7 ${t}`)
                                }
                            }
                        }
                    }
                    return { ...e,
                        actions: d,
                        title: p
                    }
                });
                if (!c) {
                    let e = new Map;
                    for (let t of f)
                        for (let n of t.actions) e.set(n, t);
                    return {
                        groupedSections: f,
                        rankedActions: f.flatMap(e => e.actions),
                        actionSectionMap: e
                    }
                }
                let m = (function(e, t) {
                        let n = [];
                        for (let i of e) {
                            let e = { ...i,
                                actions: []
                            };
                            for (let a of i.actions)
                                if (p(a, t))
                                    if (a.subActions) {
                                        let o = d(a.subActions(t), t);
                                        if (a.hideSubActions) {
                                            e.actions.push(a);
                                            continue
                                        }
                                        if (a.collapseSubActionsIntoParent) {
                                            for (let t of o)
                                                for (let n of t.actions) e.actions.push(n);
                                            continue
                                        }
                                        for (let e of o.map(e => ({ ...e,
                                                key: `${i.key} ${a.key} ${e.key}`,
                                                title: e.title || a.displayName,
                                                searchTitle: [a.searchName || a.displayName, e.searchTitle || e.title].filter(Boolean).join(" ")
                                            }))) n.push(e)
                                    } else e.actions.push(a);
                            e.actions.length && n.push(e)
                        }
                        return n
                    })(r, l).map(e => ({ ...e,
                        actions: e.actions.map(t => {
                            let n = t.searchName || t.displayName || "",
                                i = [n, e.searchTitle || e.title || "", n].join(" ");
                            return { ...t,
                                searchName: i
                            }
                        })
                    })),
                    g = [],
                    h = new Map;
                for (let e of m)
                    for (let t of e.actions) h.set(t, e), g.push(t);
                let v = (0, n(821048).Ay)(c, g, e => e.searchName || "", {
                        minScore: 25,
                        getSortScore: e => -e.score * (e.original.sortScoreMultiplier ? ? 1)
                    }),
                    _ = new Set(v),
                    y = g.filter(e => !!e.alwaysShowInSearch && !_.has(e)),
                    b = [...y.filter(e => "start" === e.alwaysShowInSearch), ...v, ...y.filter(e => "end" === e.alwaysShowInSearch)],
                    S = n(381453).$z(b, e => {
                        let t = h.get(e);
                        if (t) return t.title
                    }),
                    I = [];
                for (let e of Object.keys(S)) {
                    let t = S[e],
                        n = h.get(t[0]);
                    n && I.push({ ...n,
                        actions: t
                    })
                }
                return {
                    groupedSections: I,
                    rankedActions: b,
                    actionSectionMap: h
                }
            }

            function u(e, t) {
                if (!t) return e;
                let n = 0,
                    i = [];
                for (let a of e) {
                    if (n >= t) break;
                    let e = a.actions.slice(0, t - n);
                    e.length > 0 && (n += e.length, i.push({ ...a,
                        actions: e
                    }))
                }
                return i
            }

            function c(e, t) {
                let n = [];
                for (let i of e) {
                    let e = i.actions.filter(t);
                    e.length > 0 && n.push({ ...i,
                        actions: e
                    })
                }
                return n
            }

            function d(e, t) {
                return c(e, e => p(e, t))
            }

            function p(e, t) {
                return null != e && (!e.validators || e.validators.every(e => e(t)))
            }
        },
        225900: (e, t, n) => {
            n.d(t, {
                N: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    transcript: a,
                    parentPointer: o,
                    threadId: r,
                    workflowId: l,
                    createdSource: s,
                    agentMessageKey: u,
                    debugOverrides: c
                } = e, d = r ? ? (0, n(295447).Z1)({
                    environment: t,
                    table: n(298085).T,
                    spaceId: i.id
                });
                return (0, n(757688).WE)({
                    environment: t,
                    clientStore: n(57168).defaultClientAIChatStore,
                    threadStore: void 0,
                    createThreadArgs: {
                        id: d,
                        transcript: a,
                        workflowId: l,
                        parentPointer: o || {
                            table: n(213003).NX,
                            id: i.id,
                            spaceId: i.id
                        },
                        createdSource: s,
                        agentMessageKey: u
                    },
                    additionalDebugOverrides: c,
                    sendPatchResponse: !0
                }), n(174148).E.createChildStore(i, {
                    id: d,
                    spaceId: i.id,
                    table: n(298085).T
                })
            }
        },
        285482: (e, t, n) => {
            n.d(t, {
                A: () => i
            });

            function i(e, t) {
                if ((0, n(101787).pA8)(t)) {
                    let i = (0, n(115964).$)(t.clientData);
                    if (i) return "messageValues" in t.clientData ? e.formatMessage(i, t.clientData.messageValues) : e.formatMessage(i)
                }
                return e.formatMessage(n(683646).k.generic_error)
            }
        },
        357709: (e, t, n) => {
            function i(e, t) {
                let i = (0, n(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, n(462391).t9)(i)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_show",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }

            function a(e, t) {
                let i = (0, n(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, n(462391).t9)(i)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_click",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                }), t.callout_key && n(409725).l.trackEvent("callout_click", {
                    callout_key: t.callout_key,
                    click_type: t.click_type,
                    placement_key: t.placement_key
                })
            }

            function o(e, t) {
                let i = (0, n(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, n(462391).t9)(i)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_dismiss",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }

            function r(e, t) {
                let i = (0, n(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, n(462391).t9)(i)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_engagement",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }

            function l(e, t) {
                let {
                    eligible_callouts: i,
                    required_arg_timeout: a,
                    required_args_run_duration: o,
                    eligibility_timeouts: r,
                    blocklist: l
                } = t;
                (0, n(104310).u)({
                    event: {
                        eventName: "callout_coordinator_resolved",
                        eventProperties: {
                            eligible_callouts: i,
                            required_arg_timeout: a,
                            required_args_run_duration: o,
                            eligibility_timeouts: r,
                            blocklist: l
                        }
                    }
                })
            }

            function s(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "callout_feature_interaction",
                        eventProperties: t
                    }
                })
            }

            function u(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "callout_skipped",
                        eventProperties: t
                    }
                })
            }

            function c(e, t) {
                let i = (0, n(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, n(462391).t9)(i)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_not_shown",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }
            n.d(t, {
                Ak: () => c,
                Cu: () => u,
                DL: () => i,
                Jb: () => r,
                Sq: () => o,
                Y5: () => a,
                gc: () => s,
                wo: () => l
            })
        },
        388400: (e, t, n) => {
            n.d(t, {
                Bu: () => c,
                I8: () => u,
                qw: () => s
            }), n(898992), n(354520), n(803949);
            let i = /[\u4E00-\u9FA5]/g,
                a = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/g,
                o = /[\u3041-\u3096\u30A0-\u30FF\u31F0-\u31FF\u3220-\u3243\u3280-\u337F]/g,
                r = /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g,
                l = /[-./\\()"'''""，。、·～；,;<>~!@#$%^&*|+=[\]{}`~?:\s]/u;

            function s(e) {
                return (0, n(381453).oE)(e.split(l))
            }

            function u(e) {
                return "none" === c(e) ? s(e).length : e.length
            }

            function c(e, t) {
                let n = !!e.match(r);
                return e.match(i) || e.match(a) || n ? n ? "ko" : e.match(o) || "ja-JP" === t ? "ja" : "zh" : "none"
            }
        },
        388647: (e, t, n) => {
            function i(e) {
                return "on" === function(e) {
                    let {
                        disableExposureLogging: t
                    } = e;
                    return n(218744).default.checkGate({
                        gateName: "force_enable_script_agent",
                        disableExposureLogging: t
                    }) ? "on" : n(218744).default.getEligibleGroup({
                        experimentId: "ai_product_retention_script_agent",
                        defaultGroup: "control",
                        disableExposureLogging: t,
                        enableEventTrailLogging: !0
                    })
                }(e)
            }

            function a(e = {}) {
                let t = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => i({
                    environment: t,
                    disableExposureLogging: e.disableExposureLogging
                }), [t, e.disableExposureLogging])
            }
            n.d(t, {
                k: () => a,
                p: () => i
            })
        },
        428602: (e, t, n) => {
            n.d(t, {
                Y: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 2.37 11.25 11.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.053 6.407a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.893 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286M5.159 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M7.053 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M8.947 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M10.84 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286m-5.681 1.894a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286"
                        }), (0, i.jsx)("path", {
                            d: "M4.25 2.375c-1.036 0-1.875.84-1.875 1.875v7.5c0 1.036.84 1.875 1.875 1.875h7.5c1.036 0 1.875-.84 1.875-1.875v-7.5c0-1.036-.84-1.875-1.875-1.875zm-.625 9.375V5.632h8.75v6.118c0 .345-.28.625-.625.625h-7.5a.625.625 0 0 1-.625-.625"
                        })]
                    })
                },
                o = (0, n(104509).wt)("viewCalendarSmall", a, "small")
        },
        431666: (e, t, n) => {
            n.d(t, {
                i: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    collectionStore: i,
                    collectionViewStore: a,
                    property_type: o,
                    from: r,
                    property: l
                } = e;
                (0, n(33918).G)(t, {
                    property: l,
                    property_type: o,
                    from: r,
                    collection_id: null == i ? void 0 : i.id,
                    collection_view_id: null == a ? void 0 : a.id
                })
            }
        },
        432155: (e, t, n) => {
            n.d(t, {
                Af: () => S,
                Bw: () => w,
                Cs: () => m,
                Oq: () => u,
                Re: () => d,
                X4: () => c,
                YJ: () => y,
                Yc: () => l,
                ZB: () => b,
                Zd: () => I,
                d2: () => p,
                dd: () => h,
                gg: () => s,
                in: () => f,
                kQ: () => _
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(581454), n(737550);
            var i = () => n(180139),
                a = () => n(697006),
                o = () => n(832375),
                r = () => n(247438);
            let l = "reset_user_selected_model";

            function s(e) {
                let {
                    userChatPreference: t,
                    isStatsigInitialized: n,
                    shouldResetUserSelectedModel: i
                } = e;
                if (!((t.version ? ? 0) >= 1) && n) return { ...i && void 0 !== t.model ? {
                        model: void 0
                    } : {},
                    version: 1
                }
            }

            function u(e, t) {
                let i = n(57168).UserChatPreferenceLocalStorageStore.getState();
                n(57168).UserChatPreferenceLocalStorageStore.setState({ ...i,
                    [e]: { ...null == i ? void 0 : i[e],
                        ...t
                    }
                })
            }

            function c(e) {
                return e.some(e => "in_progress" === e.status)
            }

            function d(e) {
                return e.some(e => "complete" === e.status && "risky" === e.attachmentRisk)
            }

            function p(e, t) {
                let n = r().w9s(e),
                    i = ((null == t ? void 0 : t.length) ? ? 0) > 0;
                return !n || i
            }

            function f(e) {
                let t = m({
                    config: e,
                    includeWeb: !1
                });
                return 1 === t.length ? t[0] : void 0
            }

            function m(e) {
                let {
                    config: t,
                    includeWeb: i
                } = e, a = [];
                if ("search" === t.type) a.push(t.scopeForNextSearch);
                else if ("researcher" === t.type && t.searchScope) a.push(t.searchScope);
                else {
                    if ("workflow" !== t.type) return [];
                    a.push(...(0, n(548161).n_)({
                        config: t,
                        modules: []
                    }) ? ? [])
                }
                return i && t.useWebSearch && a.push({
                    type: "web"
                }), a
            }

            function g(e) {
                let {
                    botId: t,
                    spaceStore: i
                } = e, a = (0, n(203462).zf)(i.environment).getData(i.environment, {
                    spaceId: i.id
                });
                if (a)
                    for (let e of a.agents) {
                        var o;
                        let n = e.getDraftData();
                        if ((null == n || null == (o = n.runtime_actor_pointer) ? void 0 : o.table) === "bot" && n.runtime_actor_pointer.id === t) return e.id
                    }
            }

            function h(e, t, l) {
                if (!e) return [];
                let s = r().moK(e),
                    u = r().Fbh(e).map(e => ({
                        table: o().oo9,
                        id: e
                    })),
                    c = r().jgW(e);
                return [...s, ...u, ...t && l ? c.map(e => {
                    if ((0, a().ut)(e)) return {
                        table: o().C0E,
                        id: i().Lj,
                        spaceId: t.id
                    };
                    let n = g({
                        spaceStore: t,
                        botId: e
                    });
                    if (n) return {
                        table: o().C0E,
                        id: n,
                        spaceId: t.id
                    }
                }).filter(n(722371).O9) : []]
            }

            function v(e, t) {
                let i = new Set(e.map(e => n(496282).L3.toIdTableKey(e))),
                    a = new Set(t.map(e => n(496282).L3.toIdTableKey(e))),
                    o = t.filter(e => !i.has(n(496282).L3.toIdTableKey(e)));
                return {
                    added: o,
                    removed: e.filter(e => !a.has(n(496282).L3.toIdTableKey(e))),
                    unchanged: e.filter(e => a.has(n(496282).L3.toIdTableKey(e)))
                }
            }

            function _(e) {
                let t, i, {
                        currentTextMentionPointers: a,
                        inputMentionPointers: o,
                        allMentionPointers: r
                    } = e,
                    {
                        added: l
                    } = v(Array.from(r), a),
                    {
                        removed: s,
                        unchanged: u
                    } = v(o, a),
                    c = l.length > 0,
                    d = s.length > 0;
                if (c || d) {
                    let e = Array.from(r);
                    if (d) {
                        let t = new Set(s.map(e => n(496282).L3.toIdTableKey(e)));
                        e = e.filter(e => !t.has(n(496282).L3.toIdTableKey(e)))
                    }
                    c && (e = [...e, ...l]), t = e, i = [...u, ...l]
                }
                return {
                    newMentionPointers: t,
                    newInputMentionPointers: i
                }
            }

            function y(e, t) {
                return (0, n(381453).n4)(e, t)
            }

            function b(e) {
                return !!e && ("workspace" === e.type || "teamspace" === e.type || "collection" === e.type || "page" === e.type)
            }

            function S(e) {
                let {
                    currentScopes: t,
                    scope: n,
                    isMultiScopeEnabled: i
                } = e, a = [];
                if ("everything" === n.type) a = [{
                    type: "everything"
                }];
                else if (i) {
                    let e = t.filter(e => "everything" !== e.type);
                    a = e.some(e => y(e, n)) ? e.filter(e => !y(e, n)) : "notion" === n.type ? [...e.filter(e => !b(e)), n] : b(n) ? [...e.filter(e => "notion" !== e.type), n] : [...e, n]
                } else a = [n];
                return 0 === a.length ? [{
                    type: "everything"
                }] : a
            }

            function I(e, t) {
                switch (e.type) {
                    case "workflow":
                        return { ...e,
                            searchScopes: t
                        };
                    case "search":
                        return { ...e,
                            scopeForNextSearch: t[0]
                        };
                    case "researcher":
                        return { ...e,
                            searchScope: t[0]
                        };
                    default:
                        return e
                }
            }

            function w(e) {
                let {
                    token: t,
                    pointer: n,
                    spaceStore: l,
                    userStore: s
                } = e;
                if (!r().qXl(t)) return !1;
                for (let e of r().uPN(t))
                    if (n.table === o().oo9 && r().rie(e)) {
                        if (r().NcG(e) === n.id) return !0
                    } else if (n.table === o().evP && r().jIt(e)) {
                    let t = r().i$F(e);
                    if (t && t.id === n.id) return !0
                } else if (n.table === o().C0E && r().XkZ(e)) {
                    let t = r().vjW(e);
                    if (t && (0, a().ut)(t) && n.id === i().Lj || t && l && s && g({
                            spaceStore: l,
                            botId: t
                        }) === n.id) return !0
                }
                return !1
            }
        },
        455205: (e, t, n) => {
            n.r(t), n.d(t, {
                FETCHABLE_TEAM_TYPES: () => r,
                fetchUnfetchedTeams: () => s,
                fetchUnfetchedTeamsFromLocalStorage: () => c,
                getActiveTeamsMetadataForUserInSpace: () => p,
                getAllTeamsMetadataForUserInSpace: () => f,
                getTeamMetadataFromStore: () => g,
                getTeamStore: () => m,
                refetchTeams: () => u
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520);
            var i = () => n(988752);
            async function a(e) {
                let {
                    actorUserId: t,
                    targetUserId: i,
                    spaceId: a,
                    teamTypes: o,
                    teamIds: r,
                    environment: l
                } = e;
                if (!(0, n(422280).GL)({
                        actorUserId: t,
                        targetUserId: i,
                        teamTypes: o
                    })) throw new(n(101787)).qQk("User does not have permission to fetch teams for another user.");
                let s = await l.api.callCellCompatibleApi({
                    eventName: "getTeamsV2",
                    environment: l,
                    data: {
                        spaceId: a,
                        teamTypes: Array.from(o),
                        teamIds: "all" === r ? void 0 : Array.from(r),
                        sort: e.sort,
                        canTruncateRecordMap: e.canTruncateRecordMap,
                        includeMembershipSummary: !(0, n(958692).X7)() && void 0,
                        targetUserId: i
                    },
                    userId: t,
                    cellNavigation: {
                        cellId: void 0,
                        recordId: void 0,
                        spaceId: a
                    }
                });
                if ("failed" === s.type) throw s.error;
                let {
                    teams: u,
                    hasUnjoinedActiveTeams: c
                } = s.data;
                return {
                    teams: u,
                    ...void 0 !== c && {
                        hasUnjoinedActiveTeams: c
                    }
                }
            }
            let o = new(n(245541)).R({
                    key: "localStorageTeams",
                    namespace: n(274919).Bq,
                    important: !1,
                    trackingType: "preference"
                }),
                r = ["Joined", "UnjoinedActive", "Archived"];
            async function l(e) {
                let {
                    userId: t,
                    spaceId: r,
                    teamTypesToUpdate: l,
                    teamIdsToUpdate: s,
                    environment: u,
                    canTruncateRecordMap: c,
                    sort: d
                } = e, p = i().E.getOrCreateUnit(t, r);
                if (0 === l.size || "all" !== s && 0 === s.size) return void await p.pendingUpdates;
                let f = a({
                    actorUserId: t,
                    targetUserId: t,
                    spaceId: r,
                    teamTypes: l,
                    teamIds: s,
                    environment: u,
                    canTruncateRecordMap: c,
                    sort: d
                });
                i().E.queueUpdateForSpaceUser({
                        userId: t,
                        spaceId: r,
                        fetchedTeamsPromise: f,
                        fetchedTeamsSource: "server",
                        teamTypesToUpdate: l,
                        teamIdsToUpdate: s
                    }), await p.pendingUpdates,
                    function(e) {
                        let {
                            userId: t,
                            spaceId: i,
                            teamsResponse: a
                        } = e;
                        if (!n(218744).default.checkGate({
                                gateName: "teams_local_storage_write"
                            })) return;
                        let {
                            teams: r
                        } = a, l = r.filter(e => "Joined" === e.type), s = r.filter(e => "UnjoinedActive" === e.type), u = r.filter(e => "Archived" === e.type), c = l.concat(s, u).slice(0, 1e3);
                        o.update(e => ({ ...e ? ? {},
                            [t] : { ...(null == e ? void 0 : e[t]) ? ? {},
                                [i] : { ...a,
                                    teams: c
                                }
                            }
                        }))
                    }({
                        userId: t,
                        spaceId: r,
                        teamsResponse: {
                            teams: Object.values(p.teams),
                            hasUnjoinedActiveTeams: p.hasUnjoinedActiveTeams
                        }
                    })
            }
            async function s(e) {
                let {
                    userId: t,
                    spaceId: n,
                    teamTypes: a,
                    environment: o,
                    canTruncateRecordMap: r,
                    sort: s
                } = e, u = i().E.getOrCreateUnit(t, n), c = new Set(Array.from(a.values()).filter(e => "server" !== u.lastFetchSourceOfTeamType[e]));
                await l({
                    userId: t,
                    spaceId: n,
                    teamTypesToUpdate: c,
                    teamIdsToUpdate: "all",
                    environment: o,
                    canTruncateRecordMap: r,
                    sort: s
                })
            }
            async function u(e) {
                let {
                    userId: t,
                    spaceId: n,
                    teamIds: a,
                    environment: o
                } = e, s = i().E.getOrCreateUnit(t, n), u = new Set(r.filter(e => "server" === s.lastFetchSourceOfTeamType[e]));
                await l({
                    userId: t,
                    spaceId: n,
                    teamTypesToUpdate: u,
                    teamIdsToUpdate: a,
                    environment: o
                })
            }

            function c() {
                let e = o.getState();
                for (let t in e)
                    for (let n in e[t]) {
                        let a = i().E.getOrCreateUnit(t, n),
                            o = new Set(r.filter(e => "none" === a.lastFetchSourceOfTeamType[e]));
                        0 !== o.size && i().E.queueUpdateForSpaceUser({
                            userId: t,
                            spaceId: n,
                            fetchedTeamsPromise: Promise.resolve(e[t][n]),
                            fetchedTeamsSource: "local",
                            teamTypesToUpdate: o,
                            teamIdsToUpdate: "all"
                        })
                    }
            }
            async function d(e) {
                let {
                    userId: t,
                    spaceStore: n,
                    teamTypes: a,
                    environment: o
                } = e;
                return await s({
                    userId: t,
                    spaceId: n.id,
                    teamTypes: a,
                    environment: o
                }), i().E.readTeams(t, n.id, a).teams
            }
            async function p(e) {
                let {
                    userId: t,
                    spaceStore: n,
                    environment: i
                } = e;
                return await d({
                    userId: t,
                    spaceStore: n,
                    teamTypes: new Set(["Joined", "UnjoinedActive"]),
                    environment: i
                })
            }
            async function f(e) {
                let {
                    userId: t,
                    spaceStore: n,
                    environment: i
                } = e;
                return await d({
                    userId: t,
                    spaceStore: n,
                    teamTypes: new Set(["Joined", "UnjoinedActive", "Archived"]),
                    environment: i
                })
            }

            function m(e) {
                let {
                    teamId: t,
                    spaceStore: i
                } = e;
                return n(681735).h.createChildStore(i, {
                    table: n(832375).yKj,
                    id: t
                })
            }

            function g(e) {
                var t;
                let {
                    teamStore: a,
                    userId: o,
                    spaceStore: r
                } = e, l = i().E.readMembershipCount({
                    userId: o,
                    spaceId: r.id,
                    teamId: a.id
                }), s = a.getArchivedBy() ? "Archived" : (0, n(220530).f)({
                    userId: o,
                    teamStore: a,
                    userPermissionGroups: n(68809).f.getSpacePermissionGroupIds({
                        spaceId: r.id
                    })
                }) ? "Joined" : "UnjoinedActive", u = (0, n(228091).a)({
                    teamStore: a,
                    userId: o,
                    userPermissionGroups: n(68809).f.getSpacePermissionGroupIds({
                        spaceId: r.id
                    })
                }) ? ? "none";
                return {
                    id: a.id,
                    title: a.getName() ? ? "",
                    icon: null == (t = a.getIcon()) ? void 0 : t.icon,
                    type: s,
                    membershipSummary: l,
                    lastEditedTime: 0 === a.getLastEditedTime() ? void 0 : a.getLastEditedTime(),
                    securitySettings: {
                        disablePublicAccess: a.getDisablePublicAccess(),
                        disableGuests: a.getDisableGuests(),
                        disableExport: a.getDisableExport()
                    },
                    teamRole: u,
                    isDefaultTeam: a.isDefault(),
                    accessLevel: a.getTeamAccessLevel(),
                    description: a.getDescription()
                }
            }
        },
        466290: (e, t, n) => {
            n.d(t, {
                K: () => a
            });
            var i = () => n(906745);

            function a(e, t) {
                n(696190).default.isVisible(t.key) && (n(696190).default.removeMessage(t.key), n(986939).A.isAdminMode || (! function(e, t) {
                    let a = n(728372).AppStoreCurrentUserSettingsStore.state,
                        o = null == a ? void 0 : a.getSettings();
                    if (!o || !a) return;
                    let r = new(n(543346)).GO(o.callout_placement_exposures);
                    for (let e of t) r.add(e, i().DateTime.now().toMillis());
                    (0, n(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addPlacementExposures",
                        cellTarget: "main",
                        canUndo: !0,
                        perform: e => {
                            (0, n(862759).m)({
                                userSettingsStore: a,
                                transaction: e,
                                data: {
                                    callout_placement_exposures: r.exportUserSetting()
                                }
                            })
                        }
                    })
                }(e, [(0, n(125542).Q3)(t)]), (0, n(476114).q)(e, t), n(728372).AppStoreInAppCalloutStore.state.updateCalloutStatus({
                    calloutId: t.key,
                    visible: !1
                }), (0, n(819416).Z)(e, t.key)), n(696190).default.isPendingDynamicMessage(t.key) && (0, n(740063).G)(t.key))
            }
        },
        476114: (e, t, n) => {
            function i({
                environment: e,
                message: t,
                overwrite: a = !1
            }) {
                let o = n(728372).AppStoreCurrentUserSettingsStore.state,
                    r = null == o ? void 0 : o.getSettings();
                if (!o || !r) return;
                let l = new Map((r.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                (!l.has(t.key) || a) && l.set(t.key, {
                    name: t.key,
                    timestamp: n(906745).DateTime.now().toMillis()
                }), (0, n(377796).createAndCommit)({
                    environment: e,
                    userAction: "messageActions.addUserSettingsDismissal",
                    cellTarget: "main",
                    canUndo: !0,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: o,
                            transaction: e,
                            data: {
                                callout_dismissal_timestamps: Array.from(l.values())
                            }
                        })
                    }
                })
            }

            function a(e, t) {
                let a = (0, n(125542).K0)(t);
                "once_per_user" === a ? i({
                    environment: e,
                    message: t
                }) : "once_per_space" === a && function({
                    environment: e,
                    message: t,
                    overwrite: i = !1
                }) {
                    let a = n(728372).AppStoreSidebarSpaceViewStore.state,
                        o = null == a ? void 0 : a.getSettings();
                    if (!a || !o) return;
                    let r = a.getSpaceId(),
                        l = new Map((o.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                    (!l.has(t.key) || i) && l.set(t.key, {
                        name: t.key,
                        timestamp: n(906745).DateTime.now().toMillis()
                    }), (0, n(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addSpaceViewDismissal",
                        canUndo: !0,
                        cellTarget: r ? {
                            spaceWithId: r
                        } : void 0,
                        perform: e => {
                            n(380762).AG(a, e, {
                                callout_dismissal_timestamps: Array.from(l.values())
                            })
                        }
                    })
                }({
                    environment: e,
                    message: t
                })
            }
            n.d(t, {
                q: () => a,
                H: () => i
            }), n(581454)
        },
        485129: (e, t, n) => {
            n.d(t, {
                d: () => i
            }), n(581454);

            function i(e) {
                let {
                    teams: t
                } = e, i = e.spaceStore;
                return i ? t.map(({
                    id: e,
                    type: t,
                    membershipSummary: a
                }) => ({
                    store: n(681735).h.createChildStore(i, {
                        table: n(832375).yKj,
                        id: e
                    }),
                    type: t,
                    membershipSummary: a
                })) : []
            }
        },
        503473: (e, t, n) => {
            n.d(t, {
                j: () => r
            });
            var i = n(296540),
                a = n(474848);
            let o = {
                khDVqt: "xuxw1ft",
                kXHlph: "x6ikm8r",
                kORKVm: "x10wlt62",
                kg5iWk: "xlyipyv",
                $$css: !0
            };

            function r(e) {
                let {
                    children: t,
                    style: r,
                    overlayContainerZIndex: l,
                    placement: s = "bottom",
                    tooltipStyle: u
                } = e, {
                    isSafari: c
                } = (0, n(533992).Y0)(), d = (0, i.useRef)(null), p = function(e) {
                    let [t, n] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        let {
                            current: t
                        } = e;
                        if (!t) return void n(!1);
                        let i = "ResizeObserver" in window ? new ResizeObserver(([e]) => {
                            n(e.target.scrollWidth > e.target.clientWidth)
                        }) : void 0;
                        return null == i || i.observe(t), () => null == i ? void 0 : i.unobserve(t)
                    }, []), t
                }(d);
                return (0, a.jsx)(n(51831).m, {
                    delayThreshold: 500,
                    placement: s,
                    textWrap: !0,
                    style: u,
                    overlayContainerZIndex: l,
                    forceVisibleState: !!p && void 0,
                    disableTooltip: c,
                    content: () => p ? t : void 0,
                    children: e => (0, a.jsx)("div", {
                        ref: d,
                        ...n(952687).A.props(o, r),
                        ...e,
                        children: t
                    })
                })
            }
        },
        530500: (e, t, n) => {
            n.d(t, {
                A: () => s
            }), n(898992), n(354520), n(581454);
            var i = n(296540),
                a = () => n(124858),
                o = n(474848);

            function r(e) {
                return (0, o.jsx)(n(844565).A, { ...e
                })
            }
            let l = n(546605).Store.createClass(25, {
                name: "limitStore"
            });

            function s({
                topBorder: e,
                context: t,
                onAccept: u,
                onFocus: c,
                empty: d,
                keyboardPriority: p,
                disableKeyboard: f,
                initialFocus: m,
                onEmptyEnter: g,
                comboboxProps: h,
                useLimit: v,
                filter: _,
                sections: y,
                menuListStore: b,
                resetInitialFocusOnSectionChangeAlways: S,
                resetFocusOnMouseOut: I,
                role: w,
                showNoResultsMessage: x,
                onFooterEnter: k,
                filterSections: A,
                flattenSectionsOnSearch: C,
                renderItemStyles: T,
                shouldShowBlockTypeTitle: M
            }) {
                let E = (0, n(682985).uB)(void 0, l),
                    D = (0, n(682985).uB)(b, n(419110).$),
                    j = !!(C && _),
                    {
                        visibleActionSections: O,
                        actionsCount: B,
                        allActionSections: N,
                        flatActions: V
                    } = (0, n(682985).K8)(() => {
                        let e = _ && A ? A : y;
                        if (j) {
                            let i = (0, n(173231).Oe)({
                                sections: e,
                                context: t,
                                query: _ || "",
                                shouldShowBlockTypeTitle: M
                            });
                            return {
                                visibleActionSections: [],
                                actionsCount: i.length,
                                allActionSections: [],
                                flatActions: v ? i.slice(0, E.state) : i
                            }
                        }
                        let i = (0, n(173231).js)({
                                sections: e,
                                context: t,
                                query: _ || "",
                                shouldShowBlockTypeTitle: M
                            }),
                            a = 0;
                        for (let e of i) a += e.actions.length;
                        return {
                            visibleActionSections: v ? (0, n(173231).Le)(i, E.state) : i,
                            actionsCount: a,
                            allActionSections: i,
                            flatActions: void 0
                        }
                    }, [y, t, _, v, E, A, M, j]);
                (0, i.useEffect)(() => {
                    n(764615).Ay.state.open && n(764615).rA.setState(0 === B)
                }, [B]);
                let P = (0, i.useRef)(_),
                    F = (0, i.useCallback)(e => {
                        e < 200 && E.state < B && E.setState(E.state + 25)
                    }, [E, B]),
                    L = (0, i.useMemo)(() => {
                        let e = new Map;
                        for (let t of N)
                            if (t.key !== a().IZ)
                                for (let n of t.actions) e.set(n.key, t.title);
                        return e
                    }, [N]),
                    {
                        menuItemActionMap: R,
                        menuItemSectionKeyMap: z,
                        menuListSections: U
                    } = (0, i.useMemo)(() => {
                        let i = new Map,
                            l = new Map;

                        function s(e, o) {
                            let r = null == o ? void 0 : o.key.toString();
                            e.lazyDependencyKeys && (0, n(968864).G)(...e.lazyDependencyKeys);
                            let s = {
                                key: e.key,
                                render: (n, i) => {
                                    let l = (null == o ? void 0 : o.key) === a().IZ ? L.get(e.key) : null == o ? void 0 : o.title,
                                        s = j || (null == o ? void 0 : o.key) === a().IZ;
                                    return e.render(n, t, {
                                        onAccept: (e, t, n) => {
                                            null == u || u(e, t, n, r)
                                        },
                                        onFocus: i.onFocus,
                                        sectionTitle: l,
                                        extendItemTitle: s,
                                        styles: T
                                    })
                                },
                                action: ({
                                    event: n
                                }) => {
                                    e.action(t, n)
                                }
                            };
                            return i.set(s, e), l.set(s, r), s
                        }
                        return j ? {
                            menuItemActionMap: i,
                            menuItemSectionKeyMap: l,
                            menuListSections: [{
                                key: "flat",
                                render: e => (0, o.jsx)(n(844565).A, { ...e,
                                    topBorder: !1,
                                    hideTitle: !0
                                }),
                                items: (null == V ? void 0 : V.map(e => s(e.action, e.section))) ? ? []
                            }]
                        } : {
                            menuItemActionMap: i,
                            menuItemSectionKeyMap: l,
                            menuListSections: O.map(t => {
                                let n = t.render ? ? r;
                                return {
                                    key: t.key,
                                    render: i => n({ ...i,
                                        topBorder: 0 !== i.index || !!e,
                                        title: t.title
                                    }),
                                    items: t.actions.map(e => s(e, t))
                                }
                            })
                        }
                    }, [O, j, e, L, t, T, u, V]);
                (0, i.useEffect)(() => {
                    if (_ !== P.current && 0 === m) {
                        if (P.current = _, k && 0 === B) return n(163657).rd({
                            store: D
                        });
                        D.setState({ ...D.state,
                            focus: {
                                section: 0,
                                indexLocal: 0,
                                indexGlobal: 0,
                                footerFocused: !1
                            }
                        })
                    }
                }, [_, m, B, D, k]);
                let H = (0, i.useCallback)((e, n) => {
                        if (u) {
                            let a = R.get(e),
                                o = z.get(e);
                            if (a) {
                                var i;
                                if (null != (i = a.isDisabled) && i.call(a, t)) return;
                                u(a, t, n.event, o, n.index)
                            }
                        }
                    }, [u, t, R, z]),
                    q = (0, i.useCallback)(e => {
                        let i;
                        if (e.indexLocal && (i = n(130711).SG(e.indexLocal, U)), e.indexGlobal) {
                            var a;
                            i = null == (a = n(130711).e7(e.indexGlobal, U)) ? void 0 : a.item
                        }
                        if (!i) return;
                        let o = R.get(i),
                            r = z.get(i);
                        o && (null == c || c(o, t, r))
                    }, [R, z, c, U, t]),
                    G = B > 0;
                return (0, o.jsxs)(o.Fragment, {
                    children: [x && !G ? (0, o.jsx)(n(844565).A, {
                        children: (0, o.jsx)(n(498341).u, {
                            title: d || (0, o.jsx)(n(109939).sA, {
                                id: "action.search.noResults",
                                defaultMessage: "No results"
                            })
                        })
                    }) : void 0, (0, o.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        role: w,
                        priority: p,
                        store: D,
                        disableKeyboard: f,
                        sections: U,
                        initialFocus: m,
                        onEmptyEnter: g,
                        onAccept: H,
                        onFocus: q,
                        comboboxProps: h,
                        resetInitialFocusOnSectionChangeAlways: S,
                        resetFocusOnMouseOut: I,
                        onFooterEnter: k
                    }), v ? (0, o.jsx)(n(636255).A, {
                        onChange: F
                    }) : void 0]
                })
            }
        },
        559096: (e, t, n) => {
            n.r(t), n.d(t, {
                loadLocalSubtree: () => l
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(803949), n(581454);
            var i = () => n(986939),
                a = () => n(430733),
                o = () => n(832375),
                r = () => n(247438);

            function l(e) {
                let {
                    environment: t,
                    blockId: l,
                    inMemoryRecordCache: s,
                    options: u
                } = e, c = t.currentUser.id, d = n(412951).RecordMap.create(), p = new Set, f = [{
                    pointer: {
                        table: o().evP,
                        id: l
                    },
                    parentId: "doesn't matter"
                }];
                for (; f.length > 0;) {
                    let e = f.shift();
                    if (!e || p.has(e.pointer.id)) continue;
                    let t = l === e.pointer.id,
                        m = function(e) {
                            let t, {
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f,
                                isRootRequest: m
                            } = e;
                            return (0, n(496282).Yt)(l, o().evP) ? t = function(e) {
                                var t, l, s, u, c, d, p, f;
                                let {
                                    pointer: m,
                                    recordMap: g,
                                    inMemoryRecordCache: h,
                                    currentUserId: v,
                                    cursors: _,
                                    cursor: y,
                                    options: b,
                                    isRootRequest: S
                                } = e, I = h.getRecord({
                                    pointer: m,
                                    userId: v
                                }), w = null == I ? void 0 : I.value;
                                if (!w) return b.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: m
                                } : void 0;
                                let x = b.excludeCrdtData ? n(877308).ir(w) : w;
                                if (b.includeLegacyTransclusionBlockValues) {
                                    if (!S && x.parent_id !== y.parentId && !y.isBlockContentChild) return
                                } else if (!S && x.parent_id !== y.parentId) return;
                                if (x.type === n(955630).xd.externalObjectInstance && !b.allowCopyExternalObjectInstances) return {
                                    type: "error",
                                    reason: "encountered_external_object_instance",
                                    pointer: m
                                };
                                if (g.setValue(m, x), !b.skipNavigableChildren) {
                                    for (let e of n(993189).Bj6.fromBlock(x).getCollectionPointers()) {
                                        let t = h.getRecord({
                                            pointer: e,
                                            userId: v
                                        });
                                        if (t) {
                                            if ((null == (c = t.value) ? void 0 : c.parent_table) !== o().evP || (null == (d = t.value) ? void 0 : d.parent_id) !== x.id) continue
                                        } else {
                                            if (b.requireFullSubtree) return {
                                                type: "error",
                                                reason: "missing_record",
                                                pointer: e
                                            };
                                            continue
                                        }
                                        _.push({
                                            pointer: e,
                                            parentId: x.id
                                        })
                                    }
                                    if (x.view_ids)
                                        for (let e of x.view_ids) _.push({
                                            pointer: {
                                                table: o().Gy1,
                                                id: e,
                                                spaceId: x.space_id
                                            },
                                            parentId: x.id
                                        })
                                }
                                if (!b.skipBlockContent && (!b.skipTransclusionContainerChildren || "transclusion_container" !== x.type) && (!b.skipNavigableChildren || !(0, n(955630).$I)(x.type)))
                                    for (let e of n(993189).Bj6.fromBlock(x).getRenderableContentIds()) _.push({
                                        pointer: {
                                            table: o().evP,
                                            id: e
                                        },
                                        parentId: x.id,
                                        isBlockContentChild: !0
                                    });
                                for (let e of n(993189).Bj6.fromBlock(x).getNonContentChildren()) _.push({
                                    pointer: {
                                        table: o().evP,
                                        id: e
                                    },
                                    parentId: x.id,
                                    isBlockContentChild: !0
                                });
                                if (x.type === n(955630).xd.externalObjectInstance)
                                    for (let e of (null == (p = x.format) ? void 0 : p.related_external_object_uris_to_instance_ids) && Object.values(null == (f = x.format) ? void 0 : f.related_external_object_uris_to_instance_ids) || []) _.push({
                                        pointer: {
                                            table: o().evP,
                                            id: e,
                                            spaceId: x.space_id
                                        },
                                        parentId: x.id
                                    });
                                if (!b.skipNavigableChildren && x.properties)
                                    for (let e of Object.values(x.properties).filter(n(722371).O9))
                                        for (let t of e)
                                            for (let e of r().uPN(t)) {
                                                if (r().jIt(e)) {
                                                    let t = r().v55(e);
                                                    _.push({
                                                        pointer: {
                                                            table: o().evP,
                                                            id: t
                                                        },
                                                        parentId: x.id
                                                    })
                                                }
                                                if (r().sh$(e)) {
                                                    let t = r().cQR(e),
                                                        n = (0, a().lX)({
                                                            url: t,
                                                            baseUrl: i().A.domainBaseUrl,
                                                            publicDomainName: i().A.publicDomainName
                                                        });
                                                    n && _.push({
                                                        pointer: {
                                                            table: o().evP,
                                                            id: n
                                                        },
                                                        parentId: x.id
                                                    })
                                                }
                                                if (r().N53(e)) {
                                                    let t = r().T$c(e);
                                                    t && _.push({
                                                        pointer: {
                                                            table: o().evP,
                                                            id: t,
                                                            spaceId: x.space_id
                                                        },
                                                        parentId: x.id
                                                    })
                                                }
                                            }
                                if ("form" === x.type && null != (t = x.format) && t.form_layout_pointer && _.push({
                                        pointer: x.format.form_layout_pointer,
                                        parentId: x.id
                                    }), null != (l = x.format) && l.automation_id && _.push({
                                        pointer: {
                                            table: o().yBS,
                                            id: x.format.automation_id,
                                            spaceId: x.space_id
                                        },
                                        parentId: x.id
                                    }), null != (s = x.format) && s.workflow_id && _.push({
                                        pointer: {
                                            table: o().C0E,
                                            id: x.format.workflow_id,
                                            spaceId: x.space_id
                                        },
                                        parentId: x.id
                                    }), x.format && "database_agent_ids" in x.format && Array.isArray(x.format.database_agent_ids))
                                    for (let e of x.format.database_agent_ids) _.push({
                                        pointer: {
                                            table: o().C0E,
                                            id: e,
                                            spaceId: x.space_id
                                        },
                                        parentId: x.id
                                    });
                                null != (u = x.format) && u.ai_instructions_page_pointer && _.push({
                                    pointer: x.format.ai_instructions_page_pointer,
                                    parentId: x.id
                                })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f,
                                isRootRequest: m
                            }) : (0, n(496282).Yt)(l, o().VlP) ? t = function(e) {
                                var t, n;
                                let {
                                    pointer: i,
                                    recordMap: a,
                                    inMemoryRecordCache: r,
                                    currentUserId: l,
                                    cursors: s,
                                    cursor: u,
                                    options: c
                                } = e;
                                if (!c.allowCopyCollections) return {
                                    type: "error",
                                    reason: "encountered_collection",
                                    pointer: i
                                };
                                let d = r.getRecord({
                                    pointer: i,
                                    userId: l
                                });
                                if (!(null != d && d.value)) return c.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i
                                } : void 0;
                                if (d.value.parent_id !== u.parentId) return;
                                let p = d.value;
                                for (let e of (a.setValue(i, p), r.forEachRecord({
                                        userId: l,
                                        fn: ({
                                            model: e
                                        }) => {
                                            e.table === o().evP && e && e.parent_id === i.id && e.alive && s.push({
                                                pointer: e.pointer,
                                                parentId: i.id
                                            })
                                        }
                                    }), (null == (t = p.format) ? void 0 : t.automation_ids) ? ? [])) s.push({
                                    pointer: {
                                        table: o().yBS,
                                        id: e,
                                        spaceId: p.space_id
                                    },
                                    parentId: p.id
                                });
                                p.schema && (Object.values(p.schema).forEach(e => {
                                    e && "button" === e.type && e.automation_id && s.push({
                                        pointer: {
                                            id: e.automation_id,
                                            spaceId: p.space_id,
                                            table: o().yBS
                                        },
                                        parentId: p.id
                                    })
                                }), Object.values(p.schema).forEach(e => {
                                    if (null != e && e.default_workflow_id) {
                                        let t = e.default_workflow_id;
                                        s.push({
                                            pointer: {
                                                table: o().C0E,
                                                id: t,
                                                spaceId: p.space_id
                                            },
                                            parentId: u.parentId
                                        })
                                    }
                                })), null != (n = p.format) && n.layout_pointer && s.push({
                                    pointer: p.format.layout_pointer,
                                    parentId: p.id
                                })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, o().Gy1) ? t = function(e) {
                                var t, n;
                                let {
                                    pointer: i,
                                    recordMap: a,
                                    inMemoryRecordCache: o,
                                    currentUserId: r,
                                    cursors: l,
                                    cursor: s,
                                    options: u
                                } = e, c = o.getRecord({
                                    pointer: i,
                                    userId: r
                                });
                                if (!(null != c && c.value)) return u.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i
                                } : void 0;
                                (c.value.parent_id === s.parentId || s.skipParentIdCheck) && ("form_editor" === c.value.type && null != (t = c.value.format) && t.form_block_pointer && l.push({
                                    pointer: c.value.format.form_block_pointer,
                                    parentId: c.value.id
                                }), null != (n = c.value.format) && n.dashboard_layout_pointer && l.push({
                                    pointer: c.value.format.dashboard_layout_pointer,
                                    parentId: c.value.id
                                }), a.setValue(i, c.value))
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, o().yBS) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: i,
                                    currentUserId: a,
                                    cursors: r,
                                    cursor: l,
                                    options: s
                                } = e, u = i.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != u && u.value)) return s.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                if (u.value.parent_id === l.parentId)
                                    for (let e of (n.setValue(t, u.value), u.value.action_ids ? ? [])) r.push({
                                        pointer: {
                                            table: o().SC1,
                                            id: e,
                                            spaceId: u.value.space_id
                                        },
                                        parentId: u.value.id
                                    })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, o().SC1) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: i,
                                    currentUserId: a,
                                    cursors: r,
                                    cursor: l,
                                    options: s
                                } = e, u = i.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != u && u.value)) return s.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: l.pointer
                                } : void 0;
                                if (u.value.parent_id === l.parentId)
                                    for (let e of (n.setValue(t, u.value), u.value.blocks ? ? [])) r.push({
                                        pointer: {
                                            table: o().evP,
                                            id: e,
                                            spaceId: u.value.space_id
                                        },
                                        parentId: u.value.id
                                    })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, o().C0E) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: i,
                                    currentUserId: a,
                                    cursor: o,
                                    options: r
                                } = e, l = i.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != l && l.value)) return r.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: o.pointer
                                } : void 0;
                                l.value.parent_id === o.parentId && n.setValue(t, l.value)
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, o().zx0) ? t = function(e) {
                                var t;
                                let {
                                    pointer: i,
                                    recordMap: a,
                                    inMemoryRecordCache: r,
                                    currentUserId: l,
                                    cursors: s,
                                    options: u
                                } = e, c = r.getRecord({
                                    pointer: i,
                                    userId: l
                                }), d = null == c ? void 0 : c.value;
                                if (!d) return u.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i
                                } : void 0;
                                let p = d.parent_id !== e.cursor.parentId ? { ...d,
                                        parent_id: e.cursor.parentId
                                    } : d,
                                    f = ((null == (t = p.modules) || null == (t = t.dashboard_layout_schema) ? void 0 : t.filter(e => "row" === e.type)) ? ? []).map(e => ({ ...e,
                                        modules: e.modules.filter(e => {
                                            var t;
                                            let i = r.getRecord({
                                                pointer: (0, n(17520).Q)({
                                                    collectionViewId: e.collection_view_id,
                                                    spaceId: p.space_id
                                                }),
                                                userId: l
                                            });
                                            return (null == i || null == (t = i.value) ? void 0 : t.type) !== "dashboard"
                                        })
                                    })).filter(e => e.modules.length > 0);
                                for (let e of (p = { ...p,
                                        modules: { ...p.modules,
                                            dashboard_layout_schema: f
                                        }
                                    }, a.setValue(i, p), n(993189).Bj6.fromValue(o().zx0, p).getBlockChildrenPointers())) s.push({
                                    pointer: e,
                                    parentId: i.id
                                });
                                let m = e => {
                                    let t = {
                                        id: e.collection_view_id,
                                        table: o().Gy1,
                                        spaceId: p.space_id
                                    };
                                    return s.push({
                                        pointer: t,
                                        parentId: i.id,
                                        skipParentIdCheck: !0
                                    }), e
                                };
                                (0, n(322268).E)(p.modules, e => {
                                    if ("formQuestion" === e.type) {
                                        let t = {
                                            id: e.formQuestionId,
                                            table: o().lo9,
                                            spaceId: p.space_id
                                        };
                                        s.push({
                                            pointer: t,
                                            parentId: i.id
                                        })
                                    } else if ("view" === e.type) m(e);
                                    else if ("row" === e.type)
                                        for (let t of e.modules) "view" === t.type && m(t)
                                })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, o().lo9) && (t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: i,
                                    currentUserId: a,
                                    options: o
                                } = e, r = i.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != r && r.value)) return o.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                n.setValue(t, r.value)
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f
                            })), t
                        }({
                            pointer: e.pointer,
                            recordMap: d,
                            inMemoryRecordCache: s,
                            currentUserId: c,
                            cursors: f,
                            cursor: e,
                            options: u,
                            isRootRequest: t
                        });
                    if (m) return m;
                    p.add(e.pointer.id)
                }
                return {
                    type: "success",
                    recordMap: d
                }
            }
        },
        588222: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowChevronSingleRightFillSmallIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "5.54 2.94 5.81 10.11",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M11.13 8.53a.75.75 0 0 0 0-1.06L6.81 3.15a.75.75 0 0 0-1.06 1.06L9.54 8l-3.79 3.79a.75.75 0 0 0 1.06 1.06z"
                    })
                },
                a = (0, n(104509).wt)("arrowChevronSingleRightFillSmall", i, "fillSmall")
        },
        589563: (e, t, n) => {
            n.d(t, {
                Ah: () => u,
                Dk: () => r,
                Iv: () => s,
                SF: () => l,
                YO: () => p,
                _f: () => m,
                c_: () => a,
                dW: () => d,
                gW: () => o,
                sp: () => g,
                vN: () => c
            }), n(16280), n(944114), n(898992), n(354520), n(803949), n(581454), n(737550);
            var i = () => n(722371);

            function a(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "add_automation_step",
                    properties: t
                })
            }

            function o(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "delete_automation_step",
                    properties: t
                })
            }

            function r(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_create",
                    properties: t
                })
            }

            function l(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_update",
                    properties: t
                })
            }

            function s(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_delete",
                    properties: t
                })
            }

            function u(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_enable",
                    properties: t
                })
            }

            function c(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_disable",
                    properties: t
                })
            }

            function d(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_action_create",
                    properties: t
                })
            }

            function p(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_action_delete",
                    properties: t
                })
            }

            function f(e) {
                let {
                    formulaAnalyticsModule: t,
                    formulasModule: a,
                    formulaTypecheckContextValues: o,
                    getRecordModel: r,
                    spaceId: l,
                    value: s,
                    featureGates: u
                } = e;
                if ("formula" === s.type) {
                    if (!(0, i().O9)(s.value)) return;
                    let e = n(300441).Q.unwrapOr(a.parseFormulaInputToAst(s.value), void 0);
                    if (e) {
                        let i = a.addTypesToFormulaAST(e, {
                            handleDataRequest: (0, n(297493).zg)(r),
                            spaceId: l,
                            valueTypes: o,
                            featureGates: u
                        });
                        return { ...t.getFormulaAnalytics(e, {
                                getRecordModel: r,
                                typecheckContextValues: o
                            }),
                            formula_return_type: i.node.type,
                            redacted_formula: t.getRedactedFormulaAsStringSync(e, {
                                getRecordModel: r,
                                typecheckContextValues: o
                            })
                        }
                    }
                } else if ("simple" === s.type) {
                    if (!(0, i().O9)(s.value)) return;
                    return t.getSimpleFormulaAnalytics(s.value, {
                        getRecordModel: r,
                        typecheckContextValues: o
                    })
                } else(0, i().HB)(s.type)
            }

            function m(e) {
                let {
                    automationActionModel: t,
                    automationActionModels: a,
                    formulaAnalyticsModule: o,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: u,
                    simpleFormulasModule: c
                } = e;
                return t.isType("complete_sprint") ? {
                    automation_action_id: t.pointer.id,
                    type: "complete_sprint"
                } : t.isType("create_page") ? function(e) {
                    let t, {
                            automationActionModel: n,
                            formulaAnalyticsModule: a,
                            formulasModule: o,
                            formulaTypecheckContextValues: r,
                            getRecordModel: l,
                            featureGates: s
                        } = e,
                        u = n.getConfig(),
                        c = [],
                        d = null == u ? void 0 : u.collection,
                        p = null == u ? void 0 : u.properties;
                    if ((0, i().O9)(d) && (0, i().O9)(p) && p.length > 0) {
                        let e = l(d),
                            g = null == e ? void 0 : e.getNormalizedSchema(l);
                        (0, i().O9)(g) && (c = p.map(e => {
                            var t;
                            return (null == (t = g[e]) ? void 0 : t.type) ? ? "unknown"
                        }));
                        let h = null == u ? void 0 : u.values;
                        if (o && (0, i().O9)(h))
                            for (let e of (t = [], p)) {
                                var m;
                                let i = null == (m = h[e]) ? void 0 : m.value;
                                if (!i) continue;
                                let u = f({
                                    formulaAnalyticsModule: a,
                                    formulasModule: o,
                                    getRecordModel: l,
                                    formulaTypecheckContextValues: r,
                                    spaceId: n.spaceId,
                                    value: i,
                                    featureGates: s
                                });
                                u && t.push(u)
                            }
                    }
                    return {
                        automation_action_id: n.pointer.id,
                        property_formula_stats: t,
                        property_types: c,
                        type: "create_page"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: o,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: u
                }) : t.isType("duplicate_blocks") ? {
                    automation_action_id: t.pointer.id,
                    type: "duplicate_blocks"
                } : t.isType("modal_confirmation") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: n,
                        formulasModule: a,
                        formulaTypecheckContextValues: o,
                        getRecordModel: r,
                        featureGates: l
                    } = e, s = t.getConfig(), u = [];
                    if (a && (0, i().O9)(s) && s.text) {
                        let e = f({
                            formulasModule: a,
                            formulaAnalyticsModule: n,
                            getRecordModel: r,
                            formulaTypecheckContextValues: o,
                            spaceId: t.spaceId,
                            value: s.text,
                            featureGates: l
                        });
                        e && u.push(e)
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        formula_stats: u,
                        type: "modal_confirmation"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: o,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: u
                }) : t.isType("open_page") ? {
                    automation_action_id: t.pointer.id,
                    type: "open_page"
                } : t.isType("query_collection") ? {
                    automation_action_id: t.pointer.id,
                    type: "query_collection"
                } : t.isType("send_in_app_notification") ? function(e) {
                    var t, a;
                    let {
                        automationActionModel: o,
                        formulaAnalyticsModule: r,
                        formulasModule: l,
                        formulaTypecheckContextValues: s,
                        getRecordModel: u,
                        featureGates: c,
                        simpleFormulasModule: d
                    } = e, p = {
                        automation_action_id: o.pointer.id,
                        messageCharacterCount: 0,
                        type: "send_in_app_notification"
                    }, m = o.getConfig();
                    if (!(0, i().O9)(m)) return p;
                    if ((0, i().O9)(m.target)) {
                        if ("formula" === m.target.type && (0, i().O9)(m.target.value)) {
                            if (p.targetData = {
                                    type: "formula",
                                    numUserFormulaTargets: (0, n(247438).Fbh)(m.target.value.value).length,
                                    numFormulaContextTargets: d.getReferencedContextValueIds(m.target.value).length
                                }, l) {
                                let e = f({
                                    formulasModule: l,
                                    formulaAnalyticsModule: r,
                                    getRecordModel: u,
                                    formulaTypecheckContextValues: s,
                                    spaceId: o.spaceId,
                                    value: m.target.value,
                                    featureGates: c
                                });
                                e && (p.formula_stats ? ? = [], p.formula_stats.push(e))
                            }
                        } else if ("property" === m.target.type && (0, i().O9)(m.target.propertyId) && (0, i().O9)(m.target.collectionPointer)) {
                            let e = u(m.target.collectionPointer),
                                t = null == e ? void 0 : e.getSchema();
                            (0, i().O9)(t) && (p.targetData = {
                                type: "property",
                                propertyType: null == (a = t[m.target.propertyId]) ? void 0 : a.type
                            })
                        }
                    }
                    if ((0, i().O9)(null == (t = m.notification_message) ? void 0 : t.value) && (p.messageCharacterCount = (0, n(247438).FAw)(m.notification_message.value), l)) {
                        let e = f({
                            formulasModule: l,
                            formulaAnalyticsModule: r,
                            getRecordModel: u,
                            formulaTypecheckContextValues: s,
                            spaceId: o.spaceId,
                            value: m.notification_message,
                            featureGates: c
                        });
                        e && (p.formula_stats ? ? = [], p.formula_stats.push(e))
                    }
                    return p
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: o,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: u,
                    simpleFormulasModule: c
                }) : t.isType("send_gmail_notification") ? function(e) {
                    var t, a, o, r, l, s, u;
                    let {
                        automationActionModel: c,
                        formulaAnalyticsModule: d,
                        formulasModule: p,
                        formulaTypecheckContextValues: m,
                        getRecordModel: g,
                        featureGates: h
                    } = e, v = c.getConfig();
                    if (!(0, i().O9)(v)) return {
                        automation_action_id: c.pointer.id,
                        fields: {},
                        recipient_domains: {},
                        type: "send_gmail_notification"
                    };
                    let _ = Object.fromEntries(Object.entries(v || {}).map(([e, t]) => {
                            if ((null == t ? void 0 : t.type) === "formula") {
                                var n;
                                return [e, !!(null == t || null == (n = t.value) ? void 0 : n.value)]
                            }
                            return (null == t ? void 0 : t.type) === "simple" ? [e, !!(null == t ? void 0 : t.value)] : [e, !!t]
                        })),
                        {
                            to: y,
                            cc: b,
                            bcc: S
                        } = v,
                        I = [...(null == y || null == (t = y.value) ? void 0 : t.value) || [], ...(null == b || null == (a = b.value) ? void 0 : a.value) || [], ...(null == S || null == (o = S.value) ? void 0 : o.value) || []],
                        w = [...(0, n(247438).Fbh)(I).map(e => g({
                            table: n(514214).oo,
                            id: e
                        })).map(e => null == e ? void 0 : e.email).filter(i().O9), ...(0, n(801109).C3)((0, n(247438).k4p)(I))],
                        x = (0, n(763230).Tr)(w.map(e => e.split("@")[1])),
                        k = [null == (r = v.to) ? void 0 : r.value, null == (l = v.cc) ? void 0 : l.value, null == (s = v.bcc) ? void 0 : s.value, null == (u = v.reply_to) ? void 0 : u.value, v.from_name, v.email_subject, v.email_body].map(e => {
                            if (p && (0, i().O9)(e)) return f({
                                formulaAnalyticsModule: d,
                                formulasModule: p,
                                getRecordModel: g,
                                formulaTypecheckContextValues: m,
                                spaceId: c.spaceId,
                                value: e,
                                featureGates: h
                            })
                        }).filter(i().O9);
                    return {
                        automation_action_id: c.pointer.id,
                        fields: _,
                        formula_stats: k,
                        recipient_domains: x,
                        type: "send_gmail_notification"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: o,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: u
                }) : t.isType("slack_notification") ? {
                    automation_action_id: t.pointer.id,
                    type: "slack_notification"
                } : t.isType("update_pages") ? function(e) {
                    let {
                        automationActionModel: t,
                        automationActionModels: a,
                        formulaAnalyticsModule: o,
                        formulasModule: r,
                        formulaTypecheckContextValues: l,
                        getRecordModel: s,
                        featureGates: u
                    } = e, c = t.getConfig(), d = [], p = [], m = [];
                    if ((0, i().O9)(c) && (0, i().O9)(c.target) && (0, i().O9)(c.properties) && c.properties.length > 0) {
                        let e;
                        if ("variable" === c.target.type) {
                            let t = (0, n(297493).y5)(c.target.id);
                            if ("action" === t.source) {
                                let t = (0, n(33529).y)({
                                    actionModels: a,
                                    id: c.target.id
                                }).collectionPointer;
                                if ((0, i().O9)(t)) {
                                    let n = s(t);
                                    e = null == n ? void 0 : n.getNormalizedSchema(s)
                                }
                            } else if ("global" === t.source && "button_page" === t.global) {
                                let t = (0, n(297493).IV)(l, c.target.id);
                                if ((null == t ? void 0 : t.type.type) === "block" && (0, i().O9)(t.type.collection)) {
                                    let n = s(t.type.collection);
                                    e = null == n ? void 0 : n.getNormalizedSchema(s)
                                }
                            } else throw Error("Failed loading property schema")
                        } else if ("collection" === c.target.type) {
                            let t = s(c.target.collection);
                            e = null == t ? void 0 : t.getNormalizedSchema(s)
                        }(0, i().O9)(e) && c.properties.forEach(n => {
                            let a = e[n];
                            if ((0, i().O9)(a) && (d.push(a.type), r && (0, i().O9)(c.values))) {
                                let e = c.values[n];
                                if ((0, i().O9)(e) && (p.push({
                                        type: a.type,
                                        operator: e.action
                                    }), e.value)) {
                                    let n = f({
                                        formulasModule: r,
                                        formulaAnalyticsModule: o,
                                        getRecordModel: s,
                                        formulaTypecheckContextValues: l,
                                        spaceId: t.spaceId,
                                        value: e.value,
                                        featureGates: u
                                    });
                                    n && m.push(n)
                                }
                            }
                        })
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        property_configs: p,
                        property_formula_stats: m,
                        property_types: d,
                        type: "update_pages"
                    }
                }({
                    automationActionModel: t,
                    automationActionModels: a,
                    formulaAnalyticsModule: o,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: u
                }) : t.isType("define_variables") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: n,
                        formulasModule: a,
                        formulaTypecheckContextValues: o,
                        getRecordModel: r,
                        featureGates: l
                    } = e, s = t.getConfig(), u = [];
                    if (a && (0, i().O9)(s) && s.values) {
                        for (let e of Object.values(s.values))
                            if (e.value) {
                                let i = f({
                                    formulasModule: a,
                                    formulaAnalyticsModule: n,
                                    getRecordModel: r,
                                    formulaTypecheckContextValues: o,
                                    spaceId: t.spaceId,
                                    value: e.value,
                                    featureGates: l
                                });
                                i && u.push(i)
                            }
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        formula_stats: u,
                        type: "define_variables"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: o,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: u
                }) : t.isType("http_request") ? {
                    automation_action_id: t.pointer.id,
                    type: "http_request"
                } : t.isType("publish_site") ? {
                    automation_action_id: t.pointer.id,
                    type: "publish_site"
                } : t.isType("worker") ? {
                    automation_action_id: t.pointer.id,
                    type: "worker"
                } : t.isType("archive_pages") ? {
                    automation_action_id: t.pointer.id,
                    type: "archive_pages"
                } : void(0, i().HB)(t)
            }

            function g(e) {
                var t, a;
                let o, r, l, {
                        automationModel: s,
                        builderType: u = "sidebar",
                        formulaAnalyticsModule: c,
                        formulasModule: d,
                        formulaTypecheckContextValues: p,
                        getRecordModel: f,
                        featureGates: g,
                        simpleFormulasModule: h,
                        source: v
                    } = e,
                    _ = [],
                    y = s.getActionPointers().map(e => f(e)).filter(i().O9);
                for (let e of s.getActionPointers()) {
                    let t = f(e);
                    (0, i().O9)(t) && _.push(m({
                        automationActionModel: t,
                        automationActionModels: y,
                        formulaAnalyticsModule: c,
                        formulasModule: d,
                        formulaTypecheckContextValues: p,
                        getRecordModel: f,
                        featureGates: g,
                        simpleFormulasModule: h
                    }))
                }
                let b = [];
                if (s.isEventType()) {
                    let e = s.getEventConfiguration(),
                        a = f(s.getParentPointer());
                    o = s.getParentId();
                    let u = s.getEventConfiguration();
                    if ((null == (t = u.source) ? void 0 : t.type) === "collection_view") {
                        let e = f(u.source.pointer);
                        (null == e ? void 0 : e.parent_table) === n(682956).ev && (l = null == e ? void 0 : e.parent_id), r = null == u ? void 0 : u.source.pointer.id
                    }
                    let c = null == a ? void 0 : a.getNormalizedSchema(f);
                    if ((0, i().O9)(c)) {
                        let {
                            pagesAdded: t,
                            pagePropertiesEdited: n
                        } = e;
                        if (t && b.push({
                                type: "page"
                            }), "any" === n.type) b.push({
                            condition: "any",
                            type: "property"
                        });
                        else if ("none" === n.type) b.push({
                            condition: "none",
                            type: "property"
                        });
                        else {
                            let e = [];
                            "some" === n.type ? e = n.some ? ? [] : "all" === n.type && (e = n.all ? ? []);
                            let t = [],
                                a = [];
                            e.forEach(e => {
                                var n;
                                let o = null == (n = c[e.property]) ? void 0 : n.type;
                                (0, i().O9)(o) && (t.push({
                                    type: o,
                                    operator: e.filter.operator
                                }), a.push(o))
                            }), b.push({
                                condition: n.type,
                                property_configs: t,
                                property_types: a,
                                type: "property"
                            })
                        }
                    }
                } else s.isButtonType() ? b.push({
                    type: "button"
                }) : s.isRecurrenceType() ? b.push({
                    type: "recurrence",
                    frequency: null == (a = s.getTrigger().recurrence) ? void 0 : a.frequency
                }) : (0, i().HB)(s);
                return {
                    automation_actions: _,
                    automation_id: s.id,
                    automation_triggers: b,
                    collection_id: o,
                    collection_view_id: r,
                    collection_view_block_id: l,
                    builder_type: u,
                    source: v
                }
            }
        },
        621942: (e, t, n) => {
            function i() {
                let e = (0, n(960253).e)();
                return (0, n(960253).I)(() => ({
                    badge: {
                        background: "light" === e ? n(632079).Tj.palette.blue[30] : n(632079).Tj.palette.blue[200],
                        display: "inline-flex",
                        alignItems: "center",
                        whiteSpace: "nowrap"
                    },
                    badgeContent: {
                        display: "flex",
                        alignItems: "center",
                        width: "100%"
                    },
                    badgeCaption: {
                        marginInlineStart: 2,
                        color: n(632079).Tj.blue.text.accentPrimary
                    },
                    verifiedBadgeIcon: {
                        width: 10,
                        height: 10,
                        fill: n(632079).Tj.blue.icon.accentPrimary
                    },
                    grayedOutBadgeCaption: {
                        marginInlineStart: 1
                    }
                }), [e])
            }
            n.d(t, {
                FN: () => o,
                se: () => r,
                Kg: () => l,
                Wn: () => s,
                cF: () => u,
                rx: () => c,
                iY: () => d,
                oj: () => p
            }), n(296540);
            var a = n(474848);

            function o() {
                let e = i();
                return (0, a.jsx)(n(746434).E, {
                    content: (0, a.jsx)("div", {
                        style: e.grayedOutBadgeCaption,
                        children: (0, a.jsx)(n(109939).sA, {
                            id: "search.result.current.page.badge.text",
                            defaultMessage: "Current Page"
                        })
                    })
                })
            }

            function r() {
                let e = i();
                return (0, a.jsx)(n(746434).E, {
                    content: (0, a.jsx)("div", {
                        style: e.grayedOutBadgeCaption,
                        children: (0, a.jsx)(n(109939).sA, {
                            id: "search.result.database.badge.text",
                            defaultMessage: "Database"
                        })
                    })
                })
            }

            function l() {
                let e = (0, n(109939).tz)(),
                    t = i();
                return (0, a.jsx)(n(746434).E, {
                    content: (0, a.jsx)("div", {
                        style: t.grayedOutBadgeCaption,
                        children: e.formatMessage(n(821603).Nz.agent)
                    })
                })
            }

            function s() {
                let e = (0, n(109939).tz)(),
                    t = i();
                return (0, a.jsx)(n(746434).E, {
                    content: (0, a.jsx)("div", {
                        style: t.grayedOutBadgeCaption,
                        children: e.formatMessage(n(821603).Nz.aiSkill)
                    })
                })
            }

            function u() {
                let e = i();
                return (0, a.jsx)(n(746434).E, {
                    content: (0, a.jsx)("div", {
                        style: e.grayedOutBadgeCaption,
                        children: (0, a.jsx)(n(109939).sA, {
                            id: "search.result.teamArchived.badge.text",
                            defaultMessage: "Archived"
                        })
                    })
                })
            }

            function c() {
                let e = (0, n(109939).tz)(),
                    t = i();
                return (0, a.jsx)(n(746434).E, {
                    content: (0, a.jsx)("div", {
                        style: t.grayedOutBadgeCaption,
                        children: e.formatMessage(n(821603).Nz.template)
                    })
                })
            }

            function d() {
                let e = (0, n(109939).tz)(),
                    t = i();
                return (0, a.jsx)(n(746434).E, {
                    style: t.badge,
                    content: (0, a.jsx)("div", {
                        style: t.badgeCaption,
                        children: e.formatMessage(n(821603).Nz.mostViewed)
                    })
                })
            }

            function p() {
                let e = (0, n(109939).tz)(),
                    t = i();
                return (0, a.jsx)(n(746434).E, {
                    style: t.badge,
                    content: (0, a.jsx)("div", {
                        style: t.badgeCaption,
                        children: e.formatMessage(n(821603).Nz.popularThisWeek)
                    })
                })
            }
        },
        638501: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                plusSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.74 2.74 10.52 10.52",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 2.74a.66.66 0 0 1 .66.66v3.94h3.94a.66.66 0 0 1 0 1.32H8.66v3.94a.66.66 0 0 1-1.32 0V8.66H3.4a.66.66 0 0 1 0-1.32h3.94V3.4A.66.66 0 0 1 8 2.74"
                    })
                },
                a = (0, n(104509).wt)("plusSmall", i, "small")
        },
        674880: (e, t, n) => {
            n.d(t, {
                BX: () => f,
                Jv: () => p,
                Kf: () => s,
                WM: () => o,
                Xd: () => m,
                Xw: () => g,
                defaultInferenceContextStore: () => i,
                fd: () => c,
                i6: () => l,
                uP: () => u
            }), n(944114), n(898992), n(354520), n(803949), n(581454), n(737550);
            let i = new(n(345426)).ComputedStore(() => {
                let e = n(728372).AppStoreSidebarSpaceStore.state,
                    t = n(728372).AppStoreCurrentUserStore.state,
                    i = n(728372).AppStoreSidebarSpaceViewStore.state,
                    a = n(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (e && t && i) return {
                    spaceStore: e,
                    userStore: t,
                    spaceViewStore: i,
                    blockStore: a,
                    peekStore: n(475097).default.state.open ? n(475097).default.state.targetStore : void 0,
                    workflowStore: (0, n(346596).k)(e.environment)
                }
            }, {
                debugName: "defaultInferenceContextStore"
            });

            function a(e) {
                let t = {};
                if (e.isCollectionView()) {
                    let i = (0, n(444610).U)(e),
                        a = null == i ? void 0 : i.collectionViewStore();
                    a && (t[e.id] = a.id)
                } else e.getContentStores().forEach(e => {
                    if (e.isCollectionView()) {
                        let i = (0, n(444610).U)(e),
                            a = null == i ? void 0 : i.collectionViewStore();
                        a && (t[e.id] = a.id)
                    }
                });
                return t
            }

            function o(e) {
                let {
                    environment: t,
                    surface: i,
                    inferenceContext: o,
                    config: r,
                    invokedFromBlockId: l,
                    checklistId: s,
                    checklistStepId: u
                } = e, {
                    userStore: c,
                    spaceStore: d,
                    spaceViewStore: p,
                    blockStore: f,
                    peekStore: m,
                    workflowStore: g
                } = o, h = (0, n(295447).Z1)({
                    environment: t,
                    table: n(832375).mSw,
                    spaceId: d.id
                }), v = "meet" === t.RouterStore.state.route.name, _ = { ...f && f.isCollectionView() ? {
                        collectionViewBlockId: f.id,
                        visibleCollectionViewIds: a(f)
                    } : void 0,
                    ...f && !f.isCollectionView() && "personal_home_page" !== f.getType() && "daily_brief_reminder" !== i ? {
                        blockId: f.id,
                        visibleCollectionViewIds: a(f)
                    } : void 0,
                    ...m ? {
                        peekBlockId: m.id,
                        visibleCollectionViewIds: a(m)
                    } : void 0,
                    ...g ? {
                        workflowId: g.id
                    } : void 0,
                    ...v ? function(e) {
                        if (!n(218744).default.checkGate({
                                gateName: "agent_in_meetings_route"
                            })) return;
                        let {
                            environment: t,
                            spaceId: i,
                            userId: a
                        } = e, o = t.idCreator.getSpaceIdCreatorSync(i), r = (0, n(413388).sX)(a, o);
                        return {
                            collectionViewBlockId: r,
                            visibleCollectionViewIds: {
                                [r]: (0, n(413388).X$)(a, o)
                            }
                        }
                    }({
                        environment: t,
                        spaceId: d.id,
                        userId: c.id
                    }) : void 0
                }, y = {};
                if ("workflow" !== r.type || !r.isCustomAgent) {
                    let e = p.getSettings(),
                        t = null == e ? void 0 : e.agent_personalization_settings;
                    if (t) {
                        var b;
                        t.name && (y.agentName = t.name), null != (b = t.customization_items) && b[0] && (y.agentAccessory = t.customization_items[0]), t.context_page_id && (y.context_page_id = t.context_page_id)
                    }
                }
                let S = function(e) {
                    var t, i, a;
                    let {
                        config: o,
                        workflowStore: r
                    } = e;
                    if ("workflow" !== o.type || !o.isCustomAgent || !r) return;
                    let l = !0 === o.useCustomAgentDraft || !0 === o.use_draft_actor_pointer ? (null == (t = r.getDraftData()) ? void 0 : t.instructions) ? ? (null == (i = r.getData()) ? void 0 : i.instructions) : null == (a = r.getPublishedArtifactStore()) || null == (a = a.getData()) ? void 0 : a.instructions;
                    if ((0, n(886883).ap)(l)) return l.id
                }({
                    config: r,
                    workflowStore: g
                });
                if (S && (y.context_page_id = S), n(218744).default.checkGate({
                        gateName: "workflows_inference_replay"
                    })) return {
                    id: h,
                    type: "context",
                    value: {
                        timezone: "America/Los_Angeles",
                        userName: "Test User",
                        userEmail: "test@example.com",
                        userId: "test-user-id",
                        spaceName: "Test Space",
                        spaceId: d.id,
                        spaceViewId: p.id,
                        currentDatetime: "2024-01-01T00:00:00.000Z",
                        surface: i,
                        ..._,
                        invokedFromBlockId: l,
                        ..."onboarding_checklist" === i && s && u ? {
                            checklistId: s,
                            checklistStepId: u
                        } : {},
                        ...y
                    }
                };
                let I = n(218744).default.checkGate({
                    gateName: "agent_user_session_context"
                }) ? function(e) {
                    let {
                        spaceId: t,
                        limit: i = 10
                    } = e;
                    return n(420156).A.getWithoutSubscribing(t).map(({
                        pageId: e,
                        visitedAt: t
                    }) => ({
                        pageId: e,
                        visitedAt: t
                    })).slice(0, i)
                }({
                    spaceId: d.id
                }) : void 0;
                return {
                    id: h,
                    type: "context",
                    value: {
                        timezone: (0, n(714350).P)(),
                        userName: c.getName(),
                        userId: c.id,
                        userEmail: c.getEmail(),
                        spaceName: d.getName(),
                        spaceId: d.id,
                        spaceViewId: p.id,
                        currentDatetime: n(906745).DateTime.now().toISO(),
                        surface: i,
                        ..._,
                        invokedFromBlockId: l,
                        ..."onboarding_checklist" === i && s && u ? {
                            checklistId: s,
                            checklistStepId: u
                        } : {},
                        ...y,
                        recentPageVisits: I
                    }
                }
            }

            function r(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    config: a
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "config",
                    value: a
                }
            }

            function l(e) {
                let {
                    existingTranscript: t,
                    environment: n,
                    spaceStore: i,
                    config: a
                } = e;
                if (!t.some(e => "config" === e.type)) return r({
                    environment: n,
                    spaceStore: i,
                    config: a
                })
            }

            function s(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    value: a,
                    userStore: o
                } = e, r = d(a);
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "user",
                    value: r,
                    userId: o.id,
                    createdAt: n(906745).DateTime.now().toISO()
                }
            }

            function u(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    actualMessage: a,
                    displayMessage: o,
                    userStore: r,
                    surveyStepId: l,
                    sourceStepId: s
                } = e, u = d(a) ? ? [], c = d(o);
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "user-injected",
                    actualMessage: u,
                    displayMessage: c,
                    userId: r.id,
                    createdAt: n(906745).DateTime.now().toISO(),
                    surveyStepId: l,
                    sourceStepId: s
                }
            }

            function c(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    agentMessageKey: a,
                    instructions: o
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "proactive-message",
                    agentMessageKey: a,
                    instructions: o
                }
            }

            function d(e) {
                if (e) return (0, n(247438).bBR)((0, n(247438).ooo)(e))
            }

            function p({
                environment: e,
                spaceStore: t,
                userStore: i,
                promptType: a,
                value: o,
                locale: r,
                args: l
            }) {
                return {
                    id: (0, n(295447).Z1)({
                        environment: e,
                        table: n(832375).mSw,
                        spaceId: t.id
                    }),
                    type: "agent-prebuilt-prompt",
                    promptType: a,
                    userId: i.id,
                    createdAt: Date.now(),
                    value: o,
                    locale: r,
                    isEdited: !1,
                    args: l
                }
            }

            function f(e) {
                let t, i, {
                    environment: a,
                    spaceId: o,
                    pointers: r,
                    selectedBlockStores: l,
                    textSelection: s,
                    blockSelectionContext: u,
                    textSelectionContext: c
                } = e;
                if (u) t = u;
                else if (l && l.length > 0) {
                    let e = (0, n(685745).B)(l);
                    e && (t = {
                        type: "blocks",
                        value: l.map(e => e.pointer),
                        text: (0, n(250943).E)({
                            mode: "editing",
                            multiSelection: e,
                            forceExtendAnnotations: {}
                        }).slice(0, 1200)
                    })
                }
                if (c) i = c;
                else if (s && s.start.store.pointer.table === n(832375).evP && s.end.store.pointer.table === n(832375).evP) {
                    let e = (0, n(250943).E)({
                            mode: "editing",
                            multiSelection: s,
                            forceExtendAnnotations: {}
                        }),
                        t = e.slice(0, 1200),
                        a = e.length > 1200;
                    i = {
                        type: "text",
                        value: {
                            start: {
                                pointer: s.start.store.pointer,
                                index: s.start.index
                            },
                            end: {
                                pointer: s.end.store.pointer,
                                index: s.end.index
                            }
                        },
                        text: t,
                        ...a ? {
                            isPreviewTruncated: !0
                        } : {}
                    }
                }
                if (0 !== r.length || t || i) return {
                    id: (0, n(295447).Z1)({
                        environment: a,
                        table: n(832375).mSw,
                        spaceId: o
                    }),
                    type: "user-specified-context",
                    value: {
                        pointers: r,
                        blockSelection: t,
                        textSelection: i
                    }
                }
            }

            function m(e) {
                let {
                    environment: t,
                    inferenceContext: i,
                    config: a,
                    addSteps: l,
                    surface: s,
                    invokedFromBlockId: u,
                    checklistId: c,
                    checklistStepId: d
                } = e, p = [r({
                    environment: t,
                    spaceStore: i.spaceStore,
                    config: a
                }), o({
                    environment: t,
                    inferenceContext: i,
                    surface: s,
                    config: a,
                    invokedFromBlockId: u,
                    checklistId: c,
                    checklistStepId: d
                })];
                return l && p.push(...l), p.filter(n(722371).O9)
            }

            function g(e) {
                let {
                    environment: t,
                    spaceId: i,
                    message: a,
                    notificationType: o = "info",
                    metadata: r
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i
                    }),
                    type: "system-notification",
                    message: a,
                    notificationType: o,
                    metadata: r
                }
            }
        },
        682006: (e, t, n) => {
            n.d(t, {
                a: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.37 1.37 13.25 13.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.25 1.375c-1.036 0-1.875.84-1.875 1.875v6c0 1.036.84 1.875 1.875 1.875h1.625v1.625c0 1.036.84 1.875 1.875 1.875h6c1.036 0 1.875-.84 1.875-1.875v-6c0-1.036-.84-1.875-1.875-1.875h-1.625V3.25c0-1.036-.84-1.875-1.875-1.875zM2.625 3.25c0-.345.28-.625.625-.625h6c.345 0 .625.28.625.625v1.625H6.75c-1.036 0-1.875.84-1.875 1.875v3.125H3.25a.625.625 0 0 1-.625-.625zm3.5 3.5c0-.345.28-.625.625-.625h6c.345 0 .625.28.625.625v6c0 .345-.28.625-.625.625h-6a.625.625 0 0 1-.625-.625z"
                    })
                },
                a = (0, n(104509).wt)("duplicateSmall", i, "small")
        },
        691509: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(944114), n(898992), n(803949), n(581454);
            var i = n(296540),
                a = n(474848);
            let o = function({
                children: e,
                onClick: t,
                items: i,
                getKey: o,
                renderItem: r,
                selectedItem: s,
                onSelect: u,
                dontCloseParentOnSelect: c,
                menuTypeOverride: d,
                menuTitle: p,
                width: f,
                minWidth: m,
                disabled: g,
                originGap: h,
                originRectTransform: v,
                buttonPopupStore: _,
                sameWidthAsOrigin: y
            }) {
                let b = (0, n(682985).uB)(_, n(510969).A),
                    S = d ? ? (n(986939).A.isMobile ? n(649476).gu.Modal : n(649476).gu.Popup);
                return (0, a.jsx)(n(656252).A, {
                    popupType: function(e) {
                        switch (e) {
                            case n(649476).gu.ActionSheet:
                                return n(423291).n.SlideUp;
                            case n(649476).gu.Modal:
                                return n(423291).n.BottomSheet;
                            case n(649476).gu.Popup:
                                return n(423291).n.Popup
                        }
                    }(S),
                    bottomSheetInitialState: "half",
                    buttonPopupStore: b,
                    placementToOrigin: "bottom",
                    onClick: t,
                    content: e => (0, a.jsx)(l, {
                        parent: e,
                        items: i,
                        getKey: o,
                        renderItem: r,
                        selectedItem: s,
                        onSelect: u,
                        dontCloseParentOnSelect: c,
                        menuType: S,
                        menuTitle: p,
                        width: f,
                        minWidth: m
                    }),
                    disabled: g,
                    originGap: h,
                    originRectTransform: v,
                    sameWidthAsOrigin: y,
                    children: e
                })
            };

            function r(e, t, a, o, r, l, s, u) {
                return {
                    key: 0,
                    render: e => (0, i.createElement)(n(844565).A, { ...e,
                        key: t,
                        topBorder: t > 0
                    }),
                    items: e.map(e => ({
                        key: o(e),
                        render: t => r({ ...t,
                            value: e,
                            key: o(e),
                            selectedItem: l
                        }),
                        action: () => {
                            l !== e && s(e), u || a.close()
                        }
                    }))
                }
            }

            function l({
                parent: e,
                items: t,
                getKey: i,
                renderItem: o,
                selectedItem: s,
                onSelect: u,
                dontCloseParentOnSelect: c,
                menuType: d,
                menuTitle: p,
                width: f,
                minWidth: m
            }) {
                let g, h = [];
                if (t.length > 0 && t[0] instanceof Array) t.forEach((t, n) => {
                    let a = r(t, n, e, i, o, s, u, c);
                    h.push(a)
                });
                else {
                    let n = r(t, 0, e, i, o, s, u, c);
                    h.push(n)
                }
                let v = (0, a.jsx)(n(558045).A, {
                    type: n(558045).O.Vertical,
                    initialFocus: n(381453).SL(n(381453).Bq(t), e => n(381453).n4(e, s)),
                    sections: h
                });
                switch (d) {
                    case n(649476).gu.ActionSheet:
                        g = {
                            menuType: n(649476).gu.ActionSheet
                        };
                        break;
                    case n(649476).gu.Modal:
                        g = {
                            menuType: n(649476).gu.Modal,
                            title: p,
                            right: (0, a.jsx)(n(109939).sA, { ...n(789722).W.done
                            }),
                            onClickRight: e.close
                        };
                        break;
                    case n(649476).gu.Popup:
                        g = {
                            menuType: n(649476).gu.Popup,
                            width: f || 160,
                            minWidth: m
                        };
                        break;
                    default:
                        (0, n(722371).HB)(d)
                }
                return (0, a.jsx)(n(747369).A, { ...g,
                    children: v
                })
            }
        },
        745452: (e, t, n) => {
            n.d(t, {
                p: () => i
            });

            function i() {
                var e, t, i, a, o, r, l, s, u, c, d, p, f, m;
                let g = n(728372).AppStoreSidebarSpaceStore.state,
                    h = n(728372).AppStoreSidebarSpaceViewStore.state,
                    v = null == g ? void 0 : g.getSpaceSurveyData(),
                    _ = null == h ? void 0 : h.getUserSurveyData();
                return {
                    function: null != _ && null != (e = _.function) && e.value ? (0, n(88917).Tj)(null == _ || null == (t = _.function) ? void 0 : t.value) : void 0,
                    role: null != _ && null != (i = _.role) && i.value ? (0, n(88917).t_)(null == _ || null == (a = _.role) ? void 0 : a.value) : void 0,
                    educationRole: null == _ || null == (o = _.education_role) ? void 0 : o.value,
                    educationLevel: null == _ || null == (r = _.education_level) ? void 0 : r.value,
                    useCases: null != v && null != (l = v.use_cases) && l.value ? (0, n(88917).h0)(null == v || null == (s = v.use_cases) ? void 0 : s.value) : void 0,
                    companySize: null != v && null != (u = v.company_size) && u.value ? (0, n(88917).JE)(null == v || null == (c = v.company_size) ? void 0 : c.value) : void 0,
                    intent: null != v && null != (d = v.intent) && d.value ? (0, n(88917).j9)(null == v || null == (p = v.intent) ? void 0 : p.value) : void 0,
                    categories: null == _ || null == (f = _.categories) ? void 0 : f.value,
                    collaborativeIntent: null == v || null == (m = v.collaborative_intent) ? void 0 : m.value
                }
            }
        },
        752533: (e, t, n) => {
            function i(e, t) {
                let i = n(25825).C6.notionDateTimeToLuxon(e, t.locale);
                return (0, n(850640).eV)({
                    value: i,
                    preset: "medium_with_time"
                })
            }
            n.d(t, {
                t: () => o
            });
            let a = (0, n(109939).YK)({
                startAndEnd: {
                    defaultMessage: "{startDate} - {endDate}",
                    id: "searchHelpers.betweenStartAndEndDates"
                },
                afterStart: {
                    defaultMessage: "After {startDate}",
                    id: "searchHelpers.afterStartDate"
                },
                beforeEnd: {
                    defaultMessage: "Before {endDate}",
                    id: "searchHelpers.beforeEndDate"
                }
            });

            function o(e, t, r = n(943003).vz) {
                let l = "",
                    s = "";
                return (e.starting && (l = "date" === e.starting.type ? (0, n(348582).Y)(e.starting, t, r) : i(e.starting, t)), e.ending && (s = "date" === e.ending.type ? (0, n(348582).Y)(e.ending, t, r) : i(e.ending, t)), l && s) ? t.formatMessage(a.startAndEnd, {
                    startDate: l,
                    endDate: s
                }) : l ? t.formatMessage(a.afterStart, {
                    startDate: l
                }) : t.formatMessage(a.beforeEnd, {
                    endDate: s
                })
            }
        },
        784626: (e, t, n) => {
            n.d(t, {
                a: () => i
            });

            function i(e) {
                return !!(e.target && e.target instanceof HTMLElement && e.target.classList.contains("rdp-day"))
            }
        },
        785267: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var i = n(296540),
                a = n(474848);
            let o = i.forwardRef(function(e, t) {
                let {
                    onClose: o,
                    persistOnClose: s,
                    content: u,
                    stopClickPropagation: c,
                    onClick: d,
                    disablePopup: p,
                    disabled: f,
                    forceInitialInbound: m,
                    children: g,
                    originGap: h,
                    borderRadius: v,
                    popupWrapStyle: _
                } = e, y = (0, n(682985).uB)(e.buttonPopupStore, n(510969).A);
                (0, i.useEffect)(() => () => {
                    y.setState({
                        open: !1
                    })
                }, [y]);
                let b = (0, i.useCallback)(() => r(o, s, y), [o, s, y]),
                    S = (0, i.useCallback)(() => (0, a.jsx)(l, {
                        onClose: o,
                        persistOnClose: s,
                        content: u,
                        buttonPopupStore: y
                    }), [o, s, u, y]),
                    I = (0, i.useCallback)(e => {
                        var t, i, a, o, r;
                        return t = e, i = c, a = d, o = p, r = y, void(i && (null == t || t.stopPropagation()), !(t && (0, n(85520).V)(t)) && (a && a(t), o || r.setState({ ...r.state,
                            open: !0
                        })))
                    }, [c, d, p, y]),
                    w = g ? g({ ...e,
                        onClick: f ? n(763230).D_ : I
                    }) : null,
                    x = (0, n(682985).K8)(() => y.state.open, [y]);
                return (0, a.jsx)(n(182718).zD, {
                    ref: t,
                    ...e,
                    forceInitialInbound: !!m,
                    content: S,
                    open: x,
                    onDismiss: b,
                    originGap: h,
                    borderRadius: v,
                    popupWrapStyle: _,
                    trapFocus: !0,
                    children: w
                })
            });

            function r(e, t, n) {
                e && e(), t || n.reset()
            }

            function l({
                onClose: e,
                persistOnClose: t,
                content: o,
                buttonPopupStore: s
            }) {
                let u = (0, i.useCallback)(() => r(e, t, s), [e, t, s]),
                    c = (0, n(682985).K8)(() => o({
                        close: u
                    }), [o, u], {
                        silenceRerenderDefender: !0
                    });
                return (0, a.jsx)(a.Fragment, {
                    children: c
                })
            }
        },
        786221: (e, t, n) => {
            n.d(t, {
                HL: () => d,
                L5: () => c,
                Pl: () => N,
                parseCSV: () => B,
                ph: () => u
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(823215), n(354520), n(672577), n(430670), n(803949), n(581454), n(908872), n(737550);
            var i = () => n(627179),
                a = () => n(773352),
                o = () => n(247438);
            let r = "PartialMatch",
                l = "FullMatch",
                s = (0, n(109939).YK)({
                    titleColumnName: {
                        id: "database.titleColumn.name",
                        defaultMessage: "Title"
                    },
                    genericColumnName: {
                        id: "database.genericColumn.name",
                        defaultMessage: "Column {columnNumber}"
                    }
                });

            function u(e) {
                let {
                    table: t,
                    deps: {
                        intl: i,
                        randomShortID: a,
                        isPhoneNumber: r
                    },
                    options: {
                        useCsvAdaptiveSchema: l,
                        addHeadersToCollectionEnabled: u
                    }
                } = e, c = function(e, t, i, a, o = !1, r, l, u) {
                    var c;
                    let m = (e = e.filter(e => e.some(e => !!(e.text || "").trim()))).length > 0 ? e[0].length : 0,
                        g = e.map((e, t) => ({
                            row: e,
                            rowIndex: t
                        })).filter(({
                            row: e
                        }) => e.length !== m);
                    if (g.length > 0) {
                        let e = g[0];
                        throw new(n(101787)).yI4("CsvImportError", {
                            data: {},
                            clientData: {
                                type: "csv_import_inconsistent_columns",
                                messageValues: {
                                    numTitleColumns: m,
                                    numBadRows: g.length,
                                    firstBadRowIndex: e.rowIndex + 1,
                                    firstBadRow: JSON.stringify(e.row.map(e => e.text)),
                                    firstBadRowLength: e.row.length
                                }
                            }
                        })
                    }
                    let h = null == (c = e[0]) ? void 0 : c.length;
                    null == r || r.set("ColumnCategory", function(e) {
                        if (e < 50) return "lessthan50";
                        if (e < 100) return "lessthan100";
                        if (e < 500) return "lessthan500";
                        if (e < 1e3) return "lessthan1000";
                        if (e < 5e3) return "lessthan5000";
                        else return "greaterthan5000"
                    }(h));
                    let v = null == l ? void 0 : l.columnHeaders,
                        y = void 0 !== v && v.length > 0,
                        S = [];
                    y ? (S = v.flatMap(e => e.doNotImport ? [] : [e.headerName]), null != l && l.useFirstRowAsHeaders && e.shift()) : 1 === e.length || u ? S = e[0].map((e, n) => t.formatMessage(s.genericColumnName, {
                        columnNumber: n + 1
                    })) : e.length > 1 && (S = e[0].map(e => e.text), e.shift());
                    let I = e,
                        {
                            types: x,
                            schema: k,
                            pages: A
                        } = y && v ? function(e) {
                            let {
                                body: t,
                                intl: i,
                                randomShortID: a,
                                headerTitles: o,
                                headersMetadata: r,
                                isPreTypedCSV: l,
                                csvEvalContext: s
                            } = e, u = performance.now(), {
                                types: c,
                                notToImportColumnIndex: d
                            } = function(e) {
                                let {
                                    intl: t,
                                    columns: i,
                                    randomShortID: a
                                } = e, o = [];
                                return {
                                    types: i.flatMap((e, i) => {
                                        if (e.doNotImport) return o.push(i), [];
                                        let r = n(763230).D_;
                                        return "checkbox" === e.propertyType ? r = e => _(e) : "number" === e.propertyType ? r = e => b(e) : "date" === e.propertyType && "format" in e ? r = n => w(n, t, e.format) : "date" === e.propertyType && (r = e => w(e, t)), [{
                                            id: "title" === e.propertyType ? "title" : a(),
                                            schema: {
                                                name: e.headerName,
                                                type: e.propertyType
                                            },
                                            coerce: r
                                        }]
                                    }),
                                    notToImportColumnIndex: o
                                }
                            }({
                                intl: i,
                                columns: r,
                                randomShortID: a
                            }), m = performance.now() - u;
                            null == s || s.set("columnTypeInferenceTimeTakenMS", m);
                            let {
                                pages: g,
                                selectPropertyOptions: h
                            } = f({
                                body: t,
                                types: c,
                                isPreTypedCSV: l,
                                notToImportColumnIndex: d
                            });
                            if (h)
                                for (let e of c) h[e.id] && ("select" === e.schema.type || "multi_select" === e.schema.type) && (e.schema.options = function(e) {
                                    let {
                                        randomShortID: t,
                                        optionValues: i,
                                        propertyType: a
                                    } = e;
                                    return ("multi_select" === a ? i.flatMap(e => e.split(",").map(e => e.trim()).filter(e => e.length > 0)) : i.map(e => e.trim()).filter(e => e.length > 0)).filter((e, t, n) => n.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t).map(e => ({
                                        id: t(),
                                        value: e,
                                        color: (0, n(326044).Z)([])
                                    }))
                                }({
                                    randomShortID: a,
                                    optionValues: h[e.id],
                                    propertyType: e.schema.type
                                }));
                            let {
                                schema: v
                            } = p({
                                body: t,
                                intl: i,
                                randomShortID: a,
                                headers: o,
                                types: c,
                                isPreTypedCSV: l
                            });
                            return {
                                types: c,
                                schema: v,
                                pages: g
                            }
                        }({
                            body: I,
                            intl: t,
                            randomShortID: i,
                            headerTitles: S,
                            headersMetadata: v,
                            isPreTypedCSV: y,
                            csvEvalContext: r
                        }) : function(e) {
                            let {
                                body: t,
                                intl: n,
                                randomShortID: i,
                                isPhoneNumber: a,
                                useCsvAdaptiveSchema: o,
                                headers: r,
                                isPreTypedCSV: l,
                                csvEvalContext: s
                            } = e, u = performance.now(), {
                                types: c
                            } = d({
                                body: t,
                                intl: n,
                                randomShortID: i,
                                isPhoneNumber: a,
                                useCsvAdaptiveSchema: o,
                                csvEvalContext: s
                            }), m = performance.now() - u;
                            null == s || s.set("columnTypeInferenceTimeTakenMS", m);
                            let {
                                schema: g
                            } = p({
                                body: t,
                                intl: n,
                                randomShortID: i,
                                headers: r,
                                types: c,
                                isPreTypedCSV: l
                            }), {
                                pages: h
                            } = f({
                                body: t,
                                types: c,
                                isPreTypedCSV: l
                            });
                            return {
                                types: c,
                                schema: g,
                                pages: h
                            }
                        }({
                            body: I,
                            intl: t,
                            randomShortID: i,
                            isPhoneNumber: a,
                            useCsvAdaptiveSchema: o,
                            headers: S,
                            isPreTypedCSV: y,
                            csvEvalContext: r
                        });
                    return {
                        schema: k,
                        types: x,
                        pages: A
                    }
                }(t, i, a, r, l, e.csvEvalContext, e.metadata, u);
                return function(e) {
                    let {
                        actor: t,
                        blockType: i,
                        root: a,
                        parent: r,
                        name: l,
                        format: s,
                        deps: {
                            randomID: u,
                            spaceIdCreator: c,
                            addFileIdsToBlock: d,
                            createCollectionAsyncWithStatusLabel: p
                        },
                        options: {
                            ignoreBlockCount: f,
                            legacyNonCrdt: m
                        },
                        pages: g,
                        schema: h,
                        columnIds: v
                    } = e, _ = e.collectionId ? ? (null == c ? void 0 : c.idInSavedSpace(n(46241).V)) ? ? u(), y = e.collectionViewId ? ? (null == c ? void 0 : c.idInSavedSpace(n(435544).G)) ? ? u(), b = [], S = [], I = [], {
                        operations: w
                    } = n(993189).WBy.create({
                        id: _,
                        parent: a.existing ? a.record.pointer : {
                            id: a.id,
                            table: n(682956).ev,
                            spaceId: r.spaceId
                        },
                        space_id: r.spaceId,
                        name: o().x9d(l),
                        schema: h,
                        format: {
                            collection_page_properties: n(381453).oE(v.map(e => {
                                if (e) return {
                                    visible: !0,
                                    property: e
                                }
                            })),
                            ...p && {
                                sync_state: {
                                    syncing: !0,
                                    last_synced_at: Date.now()
                                },
                                static_import_collection_type: n(565546).IE.CsvImport
                            }
                        },
                        createdBy: t
                    });
                    b.push(...w);
                    let x = {
                            id: a.existing ? a.record.id : a.id,
                            type: i,
                            collection_id: _,
                            format: {
                                collection_pointer: {
                                    table: n(46241).V,
                                    id: _,
                                    spaceId: r.spaceId
                                }
                            },
                            view_ids: [y],
                            createdBy: t,
                            parentPointer: r,
                            space_id: r.spaceId
                        },
                        {
                            createOrUpdateBlockOperations: k
                        } = n(877308).Rf({
                            blockModelArgs: x,
                            existingBlock: a.existing ? a.record : void 0,
                            legacyNonCrdt: m
                        });
                    if (b.push(...k), p) {
                        let {
                            operations: e
                        } = n(993189).lqf.create({
                            id: y,
                            type: "table",
                            name: "Show All",
                            parent: a.existing ? a.record.pointer : {
                                id: a.id,
                                table: n(682956).ev,
                                spaceId: r.spaceId
                            },
                            space_id: r.spaceId,
                            format: {
                                collection_pointer: (0, n(9247).Z8)({
                                    collectionId: _,
                                    spaceId: r.spaceId
                                }),
                                table_properties: n(381453).oE(v.map(e => {
                                    if (e) return {
                                        visible: !0,
                                        property: e
                                    }
                                })),
                                ...s
                            },
                            createdBy: t
                        });
                        b.push(...e)
                    }
                    let A = function(e) {
                        let {
                            actor: t,
                            collectionId: i,
                            spaceId: a,
                            pages: o,
                            randomID: r,
                            spaceIdCreator: l,
                            options: s
                        } = e;
                        return o.map(o => {
                            let u = (null == l ? void 0 : l.idInSavedSpace(n(682956).ev)) ? ? r(),
                                {
                                    model: c,
                                    operations: d
                                } = n(993189).zgg.create({
                                    id: u,
                                    parentPointer: {
                                        id: i,
                                        table: n(46241).V,
                                        spaceId: a
                                    },
                                    space_id: a,
                                    type: n(955630).xd.page,
                                    createdBy: t,
                                    properties: o,
                                    ...s.ignoreBlockCount ? {
                                        ignore_block_count: !0
                                    } : void 0
                                }),
                                p = [...d];
                            if (e.addFileIdsToBlock) {
                                let e = (0, n(781539).c)(c, "", "").fileIds;
                                e.length > 0 && p.push(n(488307).op.update({
                                    pointer: c.pointer,
                                    path: [],
                                    args: {
                                        file_ids: e.map(e => e.id)
                                    }
                                }))
                            }
                            return {
                                id: u,
                                operations: p
                            }
                        })
                    }({
                        actor: t,
                        collectionId: _,
                        addFileIdsToBlock: d,
                        spaceId: r.spaceId,
                        pages: g,
                        randomID: u,
                        spaceIdCreator: c,
                        options: {
                            ignoreBlockCount: f
                        }
                    });
                    for (let {
                            operations: e
                        } of A) S.push(...e);
                    let {
                        operations: C
                    } = n(993189).lqf.create({
                        id: y,
                        type: "table",
                        name: "Show All",
                        parent: a.existing ? a.record.pointer : {
                            id: a.id,
                            table: n(682956).ev,
                            spaceId: r.spaceId
                        },
                        space_id: r.spaceId,
                        format: {
                            collection_pointer: (0, n(9247).Z8)({
                                collectionId: _,
                                spaceId: r.spaceId
                            }),
                            table_properties: n(381453).oE(v.map(e => {
                                if (e) return {
                                    visible: !0,
                                    property: e
                                }
                            })),
                            ...s
                        },
                        page_sort: A.map(e => e.id).slice(0, n(9247).WF),
                        createdBy: t
                    });
                    if (S.push(...C), !p) return {
                        operations: [...b, ...S]
                    }; {
                        let e = {
                                table: n(46241).V,
                                id: _,
                                spaceId: r.spaceId
                            },
                            t = n(488307).op.update({
                                pointer: e,
                                path: ["format", "sync_state"],
                                args: {
                                    syncing: !1,
                                    last_synced_at: Date.now()
                                }
                            });
                        return I.push(t), {
                            operations: S,
                            createCollectionOperations: b,
                            collectionFinishedOperations: I
                        }
                    }
                }({ ...c,
                    columnIds: c.types.map(e => e.id),
                    ...e
                })
            }

            function c(e) {
                let {
                    table: t,
                    actor: i,
                    parent: a,
                    tableId: o,
                    deps: {
                        randomID: r,
                        spaceIdCreator: l,
                        randomShortID: s
                    },
                    options: {
                        legacyNonCrdt: u,
                        ignoreBlockCount: c,
                        hasHeaderRow: d,
                        hasHeaderColumn: p
                    }
                } = e, f = [], m = t.length ? t[0].map(e => s()) : [], g = t.map(e => (null == l ? void 0 : l.idInSavedSpace(n(682956).ev)) ? ? r());
                return f.push(...n(993189).zgg.create({
                    id: o,
                    type: n(955630).xd.table,
                    content: g,
                    format: {
                        table_block_column_order: m,
                        ...d ? {
                            table_block_column_header: !0
                        } : {},
                        ...p ? {
                            table_block_row_header: !0
                        } : {}
                    },
                    properties: {},
                    parentPointer: a,
                    space_id: a.spaceId,
                    createdBy: i,
                    ignore_block_count: !!c || void 0,
                    legacyNonCrdt: u
                }).operations), f.push(...g.flatMap((e, r) => {
                    let l = (0, n(722371).MU)(m.flatMap((e, n) => {
                        var i;
                        let a = null == (i = t[r]) || null == (i = i[n]) ? void 0 : i.textValue;
                        return a ? [
                            [e, a]
                        ] : []
                    }));
                    return n(993189).zgg.create({
                        id: e,
                        type: n(955630).xd.tableRow,
                        parentPointer: {
                            id: o,
                            table: n(682956).ev,
                            spaceId: a.spaceId
                        },
                        space_id: a.spaceId,
                        properties: l,
                        createdBy: i,
                        legacyNonCrdt: u
                    }).operations
                })), {
                    operations: f
                }
            }

            function d(e) {
                let {
                    body: t,
                    intl: o,
                    randomShortID: s,
                    isPhoneNumber: u,
                    useCsvAdaptiveSchema: c,
                    csvEvalContext: d
                } = e, p = [{
                    test: E.bind(null, u),
                    sampledSchemaIsComplete: !0
                }, {
                    test: S,
                    sampledSchemaIsComplete: !0
                }, {
                    test: A,
                    sampledSchemaIsComplete: !0
                }, {
                    test: T,
                    sampledSchemaIsComplete: !0
                }, {
                    test: x,
                    sampledSchemaIsComplete: !0
                }, {
                    test: y,
                    sampledSchemaIsComplete: !1
                }, {
                    test: D,
                    sampledSchemaIsComplete: !1
                }, {
                    test: j,
                    sampledSchemaIsComplete: !1
                }, {
                    test: O,
                    sampledSchemaIsComplete: !0
                }];
                return {
                    types: n(381453).oE(n(381453).$1(t).map(e => e.length && e[0].columnType ? e[0].columnType : function(e, t, o, s, u, c) {
                        let d = t.filter(e => !!e);
                        if (0 === d.length) return O(e, d);
                        if (u) {
                            let n = d.length > 1e3 ? function(e) {
                                let t = e.length,
                                    n = [];
                                for (let i = 0; i < 1e3; i++) {
                                    let i = Math.floor(Math.random() * t);
                                    n.push(e[i])
                                }
                                return n
                            }(d) : d;
                            for (let u of s) {
                                let s = u.test(e, n, o);
                                if (s) {
                                    let n = s;
                                    if (!1 === s.isFullMatch) {
                                        a().log({
                                            level: "info",
                                            from: "csvHelper",
                                            type: "csvColumnTypes",
                                            data: {
                                                message: "Partial column type match detected, setting data type as string",
                                                columnType: s.schema.type,
                                                matchType: "Partial"
                                            }
                                        }), n = O(e, t);
                                        let o = (null == c ? void 0 : c.get(r)) || 0;
                                        (0, i().Et)(o) && (null == c || c.set(r, o + 1))
                                    } else a().log({
                                        level: "info",
                                        from: "csvHelper",
                                        type: "csvColumnTypes",
                                        data: {
                                            message: "Complete column type match detected",
                                            columnType: s.schema.type,
                                            matchType: "Full"
                                        }
                                    });
                                    let o = (null == c ? void 0 : c.get(l)) || 0;
                                    return (0, i().Et)(o) && (null == c || c.set(l, o + 1)), n
                                }
                            }
                        } else {
                            let t = d.filter(e => !n(381453).Im(e)).slice(0, 100);
                            for (let n of s) {
                                let s = n.test(e, t, o);
                                if (s) {
                                    let u = n.sampledSchemaIsComplete || t.length === d.length ? s : n.test(e, d, o);
                                    if (u) {
                                        if (!1 === u.isFullMatch) {
                                            a().log({
                                                level: "info",
                                                from: "csvHelper",
                                                type: "csvColumnTypes",
                                                data: {
                                                    message: "Partial column type match detected, Potential data loss due to parsing failures",
                                                    columnType: u.schema.type,
                                                    matchType: "Partial"
                                                }
                                            });
                                            let e = (null == c ? void 0 : c.get(r)) || 0;
                                            (0, i().Et)(e) && (null == c || c.set(r, e + 1))
                                        } else {
                                            let e = (null == c ? void 0 : c.get(l)) || 0;
                                            (0, i().Et)(e) && (null == c || c.set(l, e + 1))
                                        }
                                        return u
                                    }
                                }
                            }
                        }
                        return O(e, [])
                    }(o, e.map(e => null == e ? void 0 : e.text), s, p, c, d)))
                }
            }

            function p(e) {
                let {
                    body: t,
                    intl: n,
                    randomShortID: i,
                    headers: a,
                    types: r,
                    isPreTypedCSV: l
                } = e, u = a.map(() => !1);
                if (!l) {
                    for (let e = 0; e < a.length; e++)
                        if ("text" === r[e].schema.type)
                            for (let n = 0; n < t.length; n++) {
                                let i = t[n][e].textValue;
                                if (i) {
                                    for (let a of i)
                                        if (o().BEe(a)) {
                                            u[e] = !0, n = t.length;
                                            break
                                        }
                                }
                            }
                }
                let c = !0,
                    d = {
                        title: {
                            type: "title",
                            name: n.formatMessage(s.titleColumnName)
                        }
                    };
                return a.forEach((e, t) => {
                    let n = r[t];
                    if (n)
                        if ("text" !== n.schema.type || !c || u[t] || l)
                            if (l && "title" === n.schema.type) {
                                let t = d.title;
                                t && (t.name = e)
                            } else {
                                let t = n.id ? ? i();
                                n.id || (n.id = t), d[t] = { ...n.schema,
                                    name: e
                                }
                            }
                    else {
                        c = !1, n.id = "title", n.schema = {
                            type: "title",
                            name: e
                        };
                        let t = d.title;
                        t && (t.name = e)
                    }
                }), {
                    schema: d
                }
            }

            function f(e) {
                let {
                    body: t,
                    types: i,
                    isPreTypedCSV: a,
                    notToImportColumnIndex: r
                } = e, l = {};
                return {
                    pages: t.map(e => {
                        null != r && r.length && (e = e.filter((e, t) => !r.includes(t)));
                        let t = {};
                        return i.forEach((i, r) => {
                            if (i) {
                                let {
                                    id: s,
                                    schema: u,
                                    coerce: c
                                } = i, {
                                    type: d
                                } = u;
                                if (s) {
                                    let i = e[r] || "";
                                    if ("url" === d) t[s] = n(561872).jw(i.text);
                                    else if ("date" === d) t[s] = n(561872).m5(c(i.text));
                                    else if ("text" === d) t[s] = i.textValue || o().x9d(c(i.text));
                                    else if ("file" === d) t[s] = i.textValue || [];
                                    else if ("select" === d || "multi_select" === d) {
                                        let e = [];
                                        if (e = "multi_select" === d ? i.text.split(",").map(e => e.trim()).filter(e => e.length > 0).filter((e, t, n) => n.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t) : i.text.trim() ? [i.text.trim()] : [], a)
                                            for (let t of e) {
                                                if (!t || !t.trim()) continue;
                                                let e = t.trim();
                                                l[s] || (l[s] = []), l[s].find(t => t.toLowerCase() === e.toLowerCase()) || l[s].push(e)
                                            }
                                        t[s] = o().x9d(c(i.text))
                                    } else t[s] = o().x9d(c(i.text))
                                }
                            }
                        }), t
                    }),
                    selectPropertyOptions: a ? l : void 0
                }
            }
            let m = ["yes", "Yes", "true", "True", "checked"],
                g = ["no", "No", "false", "False", "unchecked"];

            function h(e) {
                return m.some(t => e === t) || g.some(t => e === t)
            }

            function v(e, t) {
                return e.length === t.length
            }

            function _(e) {
                return m.some(t => e === t) ? n(745680).I1 : n(745680).oP
            }

            function y(e, t) {
                if (t.every(h)) return {
                    schema: {
                        type: "checkbox"
                    },
                    validate: h,
                    coerce: e => _(e)
                }
            }

            function b(e) {
                let t = n(700369).sA(e);
                return `${t?t.value:void 0}`
            }

            function S(e, t) {
                let a = t.map(n(700369).sA),
                    o = a[0];
                if (o && a.every(e => !!(e && e.format === o.format))) return {
                    schema: {
                        type: "number",
                        number_format: o.format
                    },
                    validate(e) {
                        let t = n(700369).sA(e);
                        return !i().pN(t) && t.format === o.format
                    },
                    coerce: e => b(e)
                }
            }

            function I(e, t) {
                return (!parseInt(t) || !(t.length <= 6)) && !!n(629518).JC(t, e)
            }

            function w(e, t, i) {
                let a = e.includes("→");
                return n(629518).JC(e, t, a ? void 0 : i)
            }

            function x(e, t) {
                let n = t.filter(t => I(e, t));
                if (n.length >= t.length / 2) return {
                    schema: {
                        type: "date"
                    },
                    validate: t => I(e, t),
                    coerce: t => w(t, e),
                    isFullMatch: v(t, n)
                }
            }

            function k(e) {
                return e.length < 320 && e.includes("@") && n(159523).t6(e, "email")
            }

            function A(e, t) {
                let i = t.filter(k);
                if (i.length >= t.length / 2) return {
                    schema: {
                        type: "email"
                    },
                    validate: k,
                    coerce: n(763230).D_,
                    isFullMatch: v(t, i)
                }
            }

            function C(e) {
                return e.length < 320 && n(159523).t6(e, "url")
            }

            function T(e, t) {
                let i = t.filter(C);
                if (i.length >= t.length / 2) return {
                    schema: {
                        type: "url"
                    },
                    validate: C,
                    coerce: n(763230).D_,
                    isFullMatch: v(t, i)
                }
            }

            function M(e, t) {
                return !String(t).match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/) && e(String(t))
            }

            function E(e, t, i) {
                let a = M.bind(null, e),
                    o = i.filter(a);
                if (o.length >= i.length / 2) return {
                    schema: {
                        type: "phone_number"
                    },
                    validate: a,
                    coerce: n(763230).D_,
                    isFullMatch: v(i, o)
                }
            }

            function D(e, t, i) {
                var a, o, r, l;
                let s = [];
                t.forEach(e => e.split(",").forEach(e => s.push(e.trim())));
                let u = n(561872).ki(s),
                    c = new Set(u);
                if (a = u.length, (o = s.length) > t.length && (r = a, l = o, r > 0 && r ** 2 < l)) return {
                    schema: {
                        type: "multi_select",
                        options: u.map((e, t) => ({
                            id: i(),
                            value: e,
                            color: (0, n(326044).Z)([])
                        }))
                    },
                    validate: e => c.has(e),
                    coerce: n(763230).D_
                }
            }

            function j(e, t, i) {
                var a, o;
                let r = n(561872).ki(t),
                    l = new Set(r);
                if (a = r.length, o = t.length, a > 0 && a ** 2 < o) return {
                    schema: {
                        type: "select",
                        options: r.map((e, t) => ({
                            id: i(),
                            value: e,
                            color: (0, n(326044).Z)([])
                        }))
                    },
                    validate: e => l.has(e),
                    coerce: n(763230).D_
                }
            }

            function O(e, t) {
                return {
                    schema: {
                        type: "text"
                    },
                    validate: () => !0,
                    coerce: n(763230).D_
                }
            }

            function B(e, t) {
                t || (t = function(e, t) {
                    let n = ",",
                        i = 0,
                        a = e.split(/\r?\n/).slice(0, 10).join("\n");
                    for (let e of t) {
                        let t = function(e, t) {
                            let n = [],
                                i = [],
                                a = "",
                                o = !1;
                            for (let r = 0; r < e.length; r++) {
                                let l = e[r],
                                    s = e[r + 1];
                                '"' === l ? o && '"' === s ? (a += '"', r++) : o = !o : l !== t || o ? "\n" !== l && "\r" !== l || o ? a += l : (i.push(a), i.length > 0 && n.push(i), i = [], a = "", "\r" === l && "\n" === s && r++) : (i.push(a), a = "")
                            }
                            return (a || i.length > 0) && (i.push(a), n.push(i)), n.filter(e => e.length > 0 && e.some(e => e.trim()))
                        }(a, e);
                        if (t.length <= 1) continue;
                        let o = t.map(e => e.length),
                            r = function(e) {
                                var t;
                                return Number((null == (t = Object.entries(e.reduce((e, t) => (e[t] = (e[t] || 0) + 1, e), {})).sort((e, t) => t[1] - e[1])[0]) ? void 0 : t[0]) || 0)
                            }(o),
                            l = o.filter(e => e === r).length / o.length,
                            s = r >= 6 ? .6 : .7;
                        if (r <= 1 || l < s) continue;
                        let u = t.flat().filter(t => t.includes(e)).length / (t.length * r),
                            c = 100 * l + 10 * r - 50 * u;
                        c > i && (i = c, n = e)
                    }
                    return n
                }(e, [",", ";", "	", "|"]));
                let n = [],
                    i = [],
                    a = "",
                    o = !1;
                for (let r = 0; r < e.length; r++) {
                    let l = e[r],
                        s = e[r + 1];
                    if ('"' === l) o && '"' === s ? (a += '"', r++) : o = !o;
                    else if (l !== t || o)
                        if ("\n" !== l && ("\r" !== l || "\n" === s) || o) {
                            if ("\r" === l && "\n" === s && !o) continue;
                            a += l
                        } else i.push(a), n.push(i), i = [], a = "";
                    else i.push(a), a = ""
                }
                return (a || i.length > 0) && (i.push(a), n.push(i)), n
            }
            let N = [{
                type: "title",
                name: "Title"
            }, {
                type: "text",
                name: "Text"
            }, {
                type: "number",
                name: "Number"
            }, {
                type: "select",
                name: "Select"
            }, {
                type: "multi_select",
                name: "Multi-select"
            }, {
                type: "status",
                name: "Status"
            }, {
                type: "date",
                name: "Date"
            }, {
                type: "checkbox",
                name: "Checkbox"
            }, {
                type: "url",
                name: "URL"
            }, {
                type: "email",
                name: "Email"
            }, {
                type: "phone_number",
                name: "Phone Number"
            }, {
                type: "person",
                name: "Person"
            }, {
                type: "dont_import",
                name: "Don't import"
            }]
        },
        789701: (e, t, n) => {
            n.d(t, {
                y: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.87 3.62 16.25 12.75",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6.303 3.625c-.71 0-1.374.355-1.768.946L2.232 8.025c-.233.35-.357.76-.357 1.18v5.045c0 1.174.951 2.125 2.125 2.125h12a2.125 2.125 0 0 0 2.125-2.125V9.204c0-.42-.124-.83-.357-1.179l-2.303-3.454a2.13 2.13 0 0 0-1.768-.946zm-.728 1.64a.88.88 0 0 1 .728-.39h7.394c.293 0 .566.146.728.39l2.303 3.454a1 1 0 0 1 .083.156h-4.702a.625.625 0 0 0-.625.625v.476a1.484 1.484 0 0 1-2.968 0V9.5a.625.625 0 0 0-.625-.625H3.189a1 1 0 0 1 .083-.156zm-2.45 4.86H7.27a2.734 2.734 0 0 0 5.46 0h4.145v4.125a.875.875 0 0 1-.875.875H4a.875.875 0 0 1-.875-.875z"
                    })
                },
                a = (0, n(104509).wt)("inbox", i, "default")
        },
        790022: (e, t, n) => {
            n.d(t, {
                H: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.12 2.37 11.75 15.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M9.134 5.001c-.236-.667-1.18-.667-1.415 0L6.28 9.084a.5.5 0 1 0 .943.332l.276-.784h1.857l.276.784a.5.5 0 0 0 .944-.332zm-.708 1.001.576 1.63h-1.15zM10.75 5a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1zm.313 3a.5.5 0 0 1 .5-.5h1.687a.5.5 0 0 1 0 1h-1.687a.5.5 0 0 1-.5-.5M6.75 10.708a.5.5 0 0 0-.5.5v3.715a.5.5 0 0 0 .845.362l1.101-1.05a.25.25 0 0 1 .347.003l.675.657a.5.5 0 0 0 .734-.038l1.189-1.435a.25.25 0 0 1 .375-.01l1.368 1.467a.5.5 0 0 0 .866-.341v-3.33a.5.5 0 0 0-.5-.5zm2.554 2.435a.696.696 0 1 1 0-1.393.696.696 0 0 1 0 1.393"
                        }), (0, i.jsx)("path", {
                            d: "M6.25 2.375A2.125 2.125 0 0 0 4.125 4.5v11c0 1.174.951 2.125 2.125 2.125h7.5a2.125 2.125 0 0 0 2.125-2.125v-11a2.125 2.125 0 0 0-2.125-2.125zM5.375 4.5c0-.483.392-.875.875-.875h7.5c.483 0 .875.392.875.875v11a.875.875 0 0 1-.875.875h-7.5a.875.875 0 0 1-.875-.875z"
                        })]
                    })
                },
                o = (0, n(104509).wt)("docRichText", a, "default")
        },
        799891: (e, t, n) => {
            n.d(t, {
                y: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.81 2.39 16.38 15.08",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M16.938 9.353c0-2.97-2.539-5.54-6.545-5.697L10 3.648c-4.232 0-6.938 2.639-6.938 5.705 0 1.438.583 2.752 1.617 3.76a.63.63 0 0 1 .18.546 7.3 7.3 0 0 1-.89 2.528c1.108-.13 2.12-.614 3.01-1.344l.063-.044a.63.63 0 0 1 .505-.073 9 9 0 0 0 2.454.333l.392-.007c4.006-.158 6.545-2.728 6.545-5.699m1.25 0c0 3.803-3.234 6.766-7.747 6.948l-.44.008a10.2 10.2 0 0 1-2.485-.299c-1.349 1.022-2.985 1.62-4.826 1.428a.625.625 0 0 1-.406-1.033c.712-.817 1.096-1.737 1.284-2.642-1.116-1.197-1.756-2.733-1.756-4.41 0-3.925 3.447-6.955 8.189-6.955l.44.009c4.512.181 7.747 3.143 7.747 6.946"
                    })
                },
                a = (0, n(104509).wt)("chatBubble", i, "default")
        },
        832248: (e, t, n) => {
            n.d(t, {
                S7: () => l,
                fF: () => y,
                es: () => _,
                LE: () => h,
                zs: () => g,
                HE: () => m,
                yg: () => v,
                QH: () => f,
                kn: () => p,
                mB: () => s,
                L$: () => u,
                X3: () => c,
                jX: () => d
            }), n(898992), n(354520), n(581454), n(944114);
            var i = () => n(896346);
            class a extends i().p3 {
                constructor(e, t) {
                    super(e, t)
                }
                after(e, t) {
                    return super.after(e, t)
                }
            }
            let o = (0, n(109939).YK)({
                    dateAtTime: {
                        id: "automations.recurrenceHelpers.dateAtTime",
                        defaultMessage: "{date} at {time}"
                    },
                    dateBetweenMidnightAnd3AM: {
                        id: "automations.recurrenceHelpers.dateBetweenMidnightAnd3AM",
                        defaultMessage: "{date} between 12–3 AM"
                    },
                    numberEndConditionDescription: {
                        id: "automations.recurrenceHelpers.numberEndConditionDescription",
                        defaultMessage: "{number, plural, one {After {number} run} other {After {number} runs}}"
                    },
                    noEndCondition: {
                        id: "automations.recurrenceHelpers.noEndCondition",
                        defaultMessage: "Never"
                    }
                }),
                r = {
                    hour: a.HOURLY,
                    day: a.DAILY,
                    week: a.WEEKLY,
                    month: a.MONTHLY,
                    year: a.YEARLY
                },
                l = {
                    MO: a.MO,
                    TU: a.TU,
                    WE: a.WE,
                    TH: a.TH,
                    FR: a.FR,
                    SA: a.SA,
                    SU: a.SU
                };

            function s(e) {
                return (0, n(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 99
            }

            function u(e) {
                return (0, n(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 999
            }

            function c(e) {
                let {
                    start_date: t,
                    frequency: i,
                    interval: o,
                    weekdays: s,
                    timezone: u,
                    hour: c,
                    minute: d
                } = e, p = (0, n(943003).eU)(t);
                "hour" === i && p.setUTCHours(c ? ? 0, d ? ? 0, 0, 0);
                let f = "week" === i && s ? s.map(e => l[e]) : void 0,
                    m = {};
                return (0, n(722371).O9)(e.end_condition) && ("date" === e.end_condition.type ? m.until = (0, n(943003).eU)(e.end_condition.end_at) : "number" === e.end_condition.type ? m.count = e.end_condition.number_of_occurrences : (0, n(722371).HB)(e.end_condition)), "month" === e.frequency && (0, n(722371).O9)(e.monthly_restriction) && ("monthdays" === e.monthly_restriction.type ? m.bymonthday = e.monthly_restriction.monthdays : "weekdays_in_month" === e.monthly_restriction.type ? m.byweekday = (function e(t, ...n) {
                    if (0 === n.length) return t.map(e => [e]);
                    let i = [];
                    for (let a of t) i.push(...e(n[0], ...n.slice(1)).map(e => [a, ...e]));
                    return i
                })(e.monthly_restriction.weekdays, e.monthly_restriction.week_numbers).map(([e, t]) => l[e].nth(t)) : (0, n(722371).HB)(e.monthly_restriction)), new a({
                    freq: r[i],
                    dtstart: p,
                    interval: o,
                    byweekday: f,
                    tzid: "hour" === i ? void 0 : u,
                    ..."hour" === i ? {} : {
                        byhour: c ? ? 0,
                        byminute: d ? ? 0,
                        bysecond: 0
                    },
                    ...m
                })
            }

            function d(e) {
                var t;
                if (0 === e.length) return {
                    violatesConstraint: !1,
                    templateNestingExceedsMaxDepth: !1,
                    ancestorHasDailyTemplate: !1,
                    nestedDepthOfAutomationAncestors: void 0,
                    immediateAncestorRecurrenceType: void 0
                };
                let n = e.filter(e => {
                        var t;
                        return (null == (t = e.getRecurrence()) ? void 0 : t.frequency) === "day"
                    }),
                    i = e.length,
                    a = null == (t = e[0].getRecurrence()) ? void 0 : t.frequency,
                    o = i > 1,
                    r = n.length >= 1;
                return {
                    violatesConstraint: o || r,
                    templateNestingExceedsMaxDepth: o,
                    ancestorHasDailyTemplate: r,
                    nestedDepthOfAutomationAncestors: i,
                    immediateAncestorRecurrenceType: a
                }
            }

            function p(e) {
                return 0 === e.hour || 1 === e.hour || 2 === e.hour
            }

            function f(e) {
                return c(e).after((0, n(943003).eU)((0, n(943003).Rz)())) || void 0
            }

            function m(e) {
                let {
                    recurrence: t,
                    intl: i
                } = e, a = "hour" === t.frequency ? function(e) {
                    let t = n(906745).DateTime.now();
                    if (n(906745).DateTime.fromMillis(e.start_date) > t) return e;
                    let i = t.startOf("hour");
                    return { ...e,
                        start_date: i.toMillis(),
                        hour: i.hour,
                        minute: i.minute
                    }
                }(t) : t, r = f(_(a));
                if (!r) return;
                let l = n(906745).DateTime.fromJSDate(r).toUTC().setZone("local", {
                    keepLocalTime: !0
                }).setLocale((0, n(599412).H)(i));
                "hour" !== a.frequency && (l = l.setZone(a.timezone));
                let s = "hour" !== t.frequency && p(t),
                    u = (0, n(850640).Yq)({
                        date: l,
                        dateFormat: "relative",
                        allowRelativeDates: !0,
                        intl: i,
                        shortenDate: !0
                    });
                if (s) return i.formatMessage(o.dateBetweenMidnightAnd3AM, {
                    date: u
                }); {
                    let e = l.toLocaleString(n(906745).DateTime.TIME_SIMPLE);
                    return t.timezone !== (0, n(714350).P)() && (e += ` ${l.toFormat("ZZZZ")}`), i.formatMessage(o.dateAtTime, {
                        date: u,
                        time: e
                    })
                }
            }

            function g(e, t) {
                return (0, n(722371).O9)(e) ? "number" === e.type ? t.formatMessage(o.numberEndConditionDescription, {
                    number: e.number_of_occurrences
                }) : "date" === e.type ? (0, n(850640).Yq)({
                    date: n(906745).DateTime.fromMillis(e.end_at),
                    dateFormat: "relative",
                    allowRelativeDates: !0,
                    intl: t,
                    shortenDate: !0
                }) : void(0, n(722371).HB)(e) : t.formatMessage(o.noEndCondition)
            }

            function h(e) {
                return { ...e,
                    start_date: (0, n(943003).l1)(e.start_date),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? {
                        type: "date",
                        end_at: (0, n(943003).l1)(e.end_condition.end_at)
                    } : (0, n(722371).HB)(e.end_condition) : void 0
                }
            }

            function v(e, t, n) {
                return e.plus(n - t)
            }

            function _(e) {
                var t;
                let i;
                return { ...e,
                    start_date: (0, n(943003).Rz)(new Date(e.start_date)),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? (t = e.end_condition, i = n(906745).DateTime.fromMillis(t.end_at).set({
                        hour: e.hour ? ? 0,
                        minute: e.minute ? ? 0
                    }), {
                        type: "date",
                        end_at: (0, n(943003).Rz)(i.toJSDate())
                    }) : (0, n(722371).HB)(e.end_condition) : void 0
                }
            }

            function y(e, t) {
                let i = n(381453).fN(e, e => void 0 !== e),
                    a = n(381453).fN(t, e => void 0 !== e);
                return n(381453).n4(i, a)
            }
        },
        855361: (e, t, n) => {
            n.d(t, {
                S: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    spaceId: i
                } = e;
                return (0, n(682985).K8)(() => {
                    if (i) return (0, n(616579).j)({
                        environment: t,
                        spaceId: i
                    })
                }, [t, i])
            }
        },
        877163: (e, t, n) => {
            n.d(t, {
                m: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.62 1.77 10.75 15.98",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M11.633 1.812c.263.096.43.354.41.632l-.392 5.51h3.099a.625.625 0 0 1 .506.992l-6.18 8.54a.625.625 0 0 1-1.13-.412l.402-5.5H5.25a.625.625 0 0 1-.507-.99l6.17-8.55a.625.625 0 0 1 .72-.222m-5.161 8.513H9.02a.625.625 0 0 1 .623.67l-.29 3.976 4.173-5.766H10.98a.625.625 0 0 1-.623-.67l.284-3.987z"
                    })
                },
                a = (0, n(104509).wt)("lightning", i, "default")
        },
        920906: (e, t, n) => {
            n.r(t), n.d(t, {
                eyeFillIcon: () => o,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.96 4.19 18.07 11.62",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M10 8.894a1.104 1.104 0 1 1-.003 2.207A1.104 1.104 0 0 1 10 8.894"
                        }), (0, i.jsx)("path", {
                            d: "M10 4.194c3.878 0 7.26 2.075 8.862 5.127l.073.163c.126.333.126.7 0 1.033l-.073.163c-1.602 3.052-4.984 5.126-8.862 5.126-3.757 0-7.049-1.946-8.707-4.843l-.156-.283a1.46 1.46 0 0 1 0-1.359l.156-.283C2.95 6.141 6.243 4.194 10 4.194m0 2.496a3.307 3.307 0 0 0-3.306 3.307l.004.17A3.307 3.307 0 0 0 9.83 13.3l.17.004a3.305 3.305 0 0 0 3.3-3.137l.005-.17a3.307 3.307 0 0 0-3.135-3.303z"
                        })]
                    })
                },
                o = (0, n(104509).wt)("eyeFill", a, "fill")
        },
        920976: (e, t, n) => {
            n.d(t, {
                F: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.26 1.98 16.32 17.52",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M15.825 12a3.75 3.75 0 1 1-.001 7.501 3.75 3.75 0 0 1 0-7.501m0 1.325a.55.55 0 0 0-.55.55V15.2H13.95a.55.55 0 0 0-.001 1.1h1.326v1.325a.55.55 0 0 0 1.1 0V16.3h1.324a.55.55 0 0 0 0-1.1h-1.325v-1.325a.55.55 0 0 0-.55-.55M9.702 5.022a3.918 3.918 0 0 1 6.742.036.626.626 0 0 1-1.08.63 2.667 2.667 0 0 0-4.59-.023L5.376 14.68l4.19.678a.626.626 0 0 1-.2 1.235l-5.1-.827a.625.625 0 0 1-.437-.938z"
                        }), (0, i.jsx)("path", {
                            d: "M10.912 8.094a1.178 1.178 0 1 1 2.326.377 1.178 1.178 0 0 1-2.326-.377M4.7 7.087a1.178 1.178 0 1 1 2.327.377A1.178 1.178 0 0 1 4.7 7.087M3.488 2.985a3.92 3.92 0 0 1 5.572.357.625.625 0 0 1-.944.818 2.67 2.67 0 0 0-3.796-.243.625.625 0 1 1-.832-.932"
                        })]
                    })
                },
                o = (0, n(104509).wt)("aiFacePlus", a, "default")
        },
        922900: (e, t, n) => {
            n.d(t, {
                getWorkflowAgentConfig: () => a
            }), n(898992), n(430670), n(737550);
            let i = new(n(245541)).R({
                key: "agent_memory_database_page",
                namespace: n(274919).Bq,
                important: !0,
                trackingType: "preference"
            });

            function a(e) {
                let t, {
                        isOnboardingAgent: a,
                        searchScopes: r,
                        searchSessionId: l,
                        useWebSearch: s,
                        useComputer: u,
                        yoloMode: c,
                        useReadOnlyMode: d,
                        model: p,
                        isCustomAgent: f,
                        isCustomAgentBuilder: m,
                        workflowId: g,
                        modelFromUser: h,
                        writerMode: v,
                        useRulePrioritization: _,
                        useCustomAgentDraft: y,
                        useDraftActorPointer: b,
                        ephemeralInstructions: S,
                        databaseAgentConfigMode: I,
                        environment: w,
                        spaceId: x,
                        spaceStore: k
                    } = e,
                    A = n(886556).z.isZeroRetentionEnabled(),
                    C = (0, n(612608).MI)((0, n(612608).VD)("custom_agents"), o),
                    T = (0, n(612608).MI)((0, n(612608).VD)("agent_automations"), o),
                    M = (0, n(612608).MI)((0, n(612608).VD)("agent_integrations"), o),
                    E = (0, n(612608).MI)((0, n(612608).VD)("experimental_integrations"), o),
                    D = (0, n(612608).MI)((0, n(612608).VD)("database_agents"), o),
                    j = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_advanced"), o),
                    O = (0, n(388647).p)({
                        environment: w
                    }),
                    B = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_search_connectors"), o),
                    N = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_google_drive"), o),
                    V = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_slack"), o),
                    P = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_mcp_servers"), o),
                    F = (0, n(612608).MI)((0, n(612608).VD)("script_agent_mail_module_available"), o),
                    L = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_custom_tool_calling"), o),
                    R = o("agent_enable_create_thread"),
                    z = o("software_factory_page"),
                    U = o("enable_script_agent_writer"),
                    H = o("database_agents_on_script_agent"),
                    q = (!I || H) && (!v || U),
                    G = (0, n(612608).MI)((0, n(612608).VD)("agent_user_session_context"), o),
                    K = o("agent_crdt_operations"),
                    Y = (0, n(612608).MI)((0, n(612608).VD)("agent_card_customization"), o),
                    W = (0, n(612608).MI)((0, n(612608).VD)("agent_system_prompt_as_page"), o),
                    Z = (0, n(612608).MI)((0, n(612608).VD)("agent_view_notifications_tool_enabled"), o),
                    $ = (0, n(328765).S)(),
                    J = k ? ? (void 0 === x || (null == $ ? void 0 : $.id) === x ? $ : void 0),
                    X = o("sams_specials"),
                    Q = o("ai_image_generation") && !X && ((null == J ? void 0 : J.isAiImageGenerationEnabledOnSpace()) ? ? !0),
                    ee = (0, n(612608).MI)((0, n(612608).VD)("agent_diffs"), o),
                    et = (0, n(612608).MI)((0, n(612608).VD)("agent_update_page_patch"), o),
                    en = (0, n(612608).MI)((0, n(612608).VD)("agent_create_db_template"), o),
                    ei = o("agent_search_tool_v2"),
                    ea = o("agent_update_page_autofixer"),
                    eo = o("agent_markdown_vnext"),
                    er = o("agent_update_page_order_updates"),
                    el = o("agent_support_property_reorder"),
                    es = o("agent_short_update_page_result"),
                    eu = n(218744).default.getConfig({
                        configName: "agent_writer_model_config"
                    }).defaultModel,
                    ec = i.getState(),
                    ed = null == ec ? void 0 : ec.pageId,
                    ep = v || f ? void 0 : function() {
                        switch (n(218744).default.getEligibleGroup({
                            experimentId: "ai_product_retention_agent_follow_ups",
                            defaultGroup: "control"
                        })) {
                            case "button_nudge":
                                return ["button", "nudge"];
                            case "button_control":
                                return ["button", "default"];
                            case "nudge":
                                return ["nudge"];
                            default:
                                return
                        }
                    }(),
                    ef = "on" === n(218744).default.getEligibleGroup({
                        experimentId: "ai_product_retention_agent_speculative_search",
                        defaultGroup: "control"
                    }),
                    em = (0, n(876688).wd)(),
                    eg = em.some(e => (0, n(281708).yY)(e)),
                    eh = o("mail_explicit_tool_calls"),
                    ev = o("outlook_custom_agent_email_connector"),
                    e_ = o("agent_query_calendar_tool") && eg,
                    ey = em.some(e => (0, n(281708).Xs)(e) && "outlook" !== e),
                    eb = o("agent_query_mail_tool") && ey,
                    eS = (0, n(828294).a)("agent_rule_priority_hierarchy"),
                    eI = o("agent_ask_survey");
                return t = !g && (d ? ? !1), {
                    type: "workflow",
                    enableAgentAutomations: T,
                    enableAgentIntegrations: M,
                    enableCustomAgents: C,
                    enableExperimentalIntegrations: E,
                    enableAgentViewNotificationsTool: Z,
                    enableAgentDiffs: ee,
                    enableAgentUpdatePagePatch: et,
                    enableAgentCreateDbTemplate: en,
                    enableCsvAttachmentSupport: !0,
                    enableDatabaseAgents: D,
                    enableAgentThreadTools: !1,
                    enableRunAgentTool: !1,
                    enableCrdtOperations: K,
                    enableAgentCardCustomization: Y,
                    enableSystemPromptAsPage: W,
                    enableUserSessionContext: G,
                    enableScriptAgentAdvanced: !!q && j,
                    enableScriptAgent: !!q && O,
                    enableScriptAgentSearchConnectorsInCustomAgent: !!q && !!f && B,
                    enableScriptAgentGoogleDriveInCustomAgent: !!q && !!f && N,
                    enableScriptAgentSlack: !!q && V,
                    enableScriptAgentMcpServers: !!q && P,
                    enableScriptAgentMail: !!q && F,
                    enableScriptAgentCalendar: !!q && O,
                    enableScriptAgentCustomToolCalling: !!q && L,
                    enableCreateAndRunThread: R,
                    enableSoftwareFactoryPage: z,
                    ...f ? {} : {
                        enableAgentGenerateImage: Q
                    },
                    agentFollowupVariation: ep,
                    enableSpeculativeSearch: ef,
                    enableQueryCalendar: e_,
                    enableQueryMail: eb,
                    enableMailExplicitToolCalls: eh,
                    enableMailAgentMultiProviderSupport: ev,
                    useRulePrioritization: _ ? ? eS,
                    memoryDatabasePageId: ed,
                    workflowId: g,
                    availableConnectors: em,
                    customConnectorInfo: n(501761).qu.state.customConnectors.flatMap(e => "active" === e.status && e.displayName ? [{
                        name: e.displayName,
                        thirdPartyId: e.thirdPartyId,
                        description: e.description
                    }] : []),
                    searchScopes: v ? [] : r ? ? n(425749).R2,
                    useSearchToolV2: ei,
                    useWebSearch: !v && !A && (void 0 === s || s),
                    useComputer: u ? ? !0,
                    yoloMode: c ? ? !1,
                    useReadOnlyMode: t,
                    writerMode: !!v,
                    model: v ? eu : p,
                    searchSessionId: l,
                    modelFromUser: !v && (h ? ? void 0 !== p),
                    isCustomAgent: !!f,
                    isCustomAgentBuilder: !!m,
                    useCustomAgentDraft: !!y,
                    use_draft_actor_pointer: !!b,
                    enableUpdatePageAutofixer: ea,
                    enableMarkdownVNext: eo,
                    enableUpdatePageOrderUpdates: er,
                    enableAgentSupportPropertyReorder: el,
                    agentShortUpdatePageResult: es,
                    ephemeralInstructions: S,
                    ...v || a || null !== e.onboardingAgentVersion ? {} : {
                        enableAgentAskSurvey: eI
                    },
                    databaseAgentConfigMode: !!I,
                    isOnboardingAgent: !!a,
                    onboardingAgentVersion: e.onboardingAgentVersion,
                    isMobile: n(986939).A.isMobile
                }
            }

            function o(e) {
                return n(218744).default.checkGate({
                    gateName: e
                })
            }
        },
        966559: (e, t, n) => {
            n.r(t), n.d(t, {
                exclamationMarkCircleSmallIcon: () => o,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.9 4.875a.625.625 0 0 0-.625.625V8a.625.625 0 1 0 1.25 0V5.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, i.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                o = (0, n(104509).wt)("exclamationMarkCircleSmall", a, "small")
        },
        968864: (e, t, n) => {
            n.d(t, {
                Y: () => o,
                G: () => a
            });
            let i = {
                clipboardActions: n(235645).R.clipboardActions,
                duplicationActions: n(411648).VI.duplicateActions,
                formulasModule: n(864850).T.formulas,
                insertBlockActions: n(162865).H,
                katex: n(406921).V,
                markdownLinkifyIt: n(94386).g,
                pagePresentationActions: n(590943).e,
                tinyMceMicrosoftWordPasteFilter: n(393771).S
            };

            function a(...e) {
                for (let t of e) i[t].load()
            }

            function o(e) {
                let t = i[e].getLoadingState();
                if ("idle" === t.status) a(e);
                else if ("pending" === t.status || "rejected" === t.status);
                else {
                    if ("resolved" === t.status) return t.value;
                    (0, n(722371).HB)(t)
                }
            }
        },
        979479: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(296540);
            var i = n(474848);

            function a(e) {
                return n(986939).A.isMobile ? (0, i.jsx)(n(182718).zD, {
                    ariaLabel: e.ariaLabel,
                    open: e.isOpen,
                    popupType: n(423291).n.SlideUp,
                    onDismiss: e.onDismiss,
                    content: e.content,
                    style: e.style,
                    children: e.children
                }) : (0, i.jsx)(n(556809).a, {
                    ariaLabel: e.ariaLabel,
                    open: e.isOpen,
                    preventHideChildrenWhileOpening: !0,
                    onDismiss: e.onDismiss,
                    style: e.style,
                    innerStyle: e.innerStyle,
                    showCloseIcon: e.showCloseIcon,
                    children: e.content()
                })
            }
        },
        980494: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                    style0: { ...n(699422).RC
                    }
                },
                o = function(e) {
                    let t = {
                            marginInlineEnd: e.avatarMarginRight ? ? 6,
                            alignSelf: "center"
                        },
                        o = {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...e.style
                        },
                        r = e.inline ? { ...t,
                            width: "none",
                            minHeight: "none"
                        } : t,
                        {
                            userStore: l,
                            avatarShouldShowShadow: s,
                            avatarSize: u,
                            hasTooltip: c,
                            tooltipHeader: d,
                            hasPersonHoverCard: p,
                            spaceStore: f
                        } = e,
                        m = (0, n(109939).tz)(),
                        g = (0, n(682985).K8)(() => null == l ? void 0 : l.getDisplayName(m), [l, m]),
                        h = (0, i.jsxs)("div", {
                            style: o,
                            children: [(0, i.jsx)("div", {
                                style: r,
                                children: (0, i.jsx)(n(321753).A, {
                                    userStore: l,
                                    avatarShouldShowShadow: s,
                                    size: u,
                                    hasTooltip: c && !p,
                                    hasPersonHoverCard: !1,
                                    tooltipHeader: d
                                })
                            }), (0, i.jsx)("div", {
                                className: "notranslate",
                                style: a.style0,
                                children: g
                            })]
                        });
                    return p ? (0, i.jsx)(n(532755).D, {
                        userStore: l,
                        spaceStore: f,
                        from: e.personHoverCardEntrypoint,
                        children: h
                    }) : h
                }
        }
    }
]);