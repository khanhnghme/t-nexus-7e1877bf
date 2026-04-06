"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [31190, 48486, 50659, 64696, 76135, 81241, 87539, 95737], {
        8779: (e, t, n) => {
            e.exports = n.p + "95f76471471a22df.png"
        },
        31461: (e, t, n) => {
            e.exports = n.p + "868a886d40b596cd.png"
        },
        33918: (e, t, n) => {
            n.d(t, {
                G: () => o
            });

            function o(e, t) {
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
                u: () => i
            }), n(296540);
            var o = n(474848);

            function a(e) {
                let t, {
                        context: a,
                        extensionMenuParent: i,
                        actionMenuListParent: r,
                        popupEvents: l,
                        displayName: s,
                        width: c,
                        initialFocus: d,
                        subActions: u
                    } = e,
                    {
                        isPhone: p
                    } = (0, n(533992).Y0)(),
                    f = (0, n(649476).Tf)();
                t = p ? f ? {
                    menuType: n(649476).gu.Modal,
                    onClickLeft: i.close,
                    left: (0, o.jsx)(n(497857).h, {}),
                    enableMobileRefresh: f,
                    paddingTop: 10,
                    title: (0, o.jsx)(n(109939).sA, { ...s
                    }),
                    ...l
                } : {
                    menuType: n(649476).gu.Modal,
                    right: (0, o.jsx)(n(109939).sA, { ...n(789722).W.done
                    }),
                    onClickRight: i.close,
                    ...l
                } : {
                    menuType: n(649476).gu.Popup,
                    width: c ? ? 220,
                    ...l
                };
                let g = (0, n(682985).K8)(() => u(a), [a, u]);
                return (0, o.jsx)(n(747369).A, { ...t,
                    children: (0, o.jsx)(n(530500).A, {
                        initialFocus: d ? ? 0,
                        context: a,
                        sections: g,
                        onAccept: r.onAccept
                    })
                })
            }

            function i(e) {
                let {
                    key: t,
                    displayName: a,
                    displayNameInterpolatedValues: i,
                    analyticsName: l,
                    validators: s,
                    subActions: c,
                    collapseSubActionsIntoParent: d,
                    hideSubActions: u,
                    clientSkill: p,
                    fuzzySearchKeywordsArray: f,
                    disabled: g
                } = e, m = (0, n(233319).Ls)({
                    clientSkill: p,
                    key: `extension ${t}`,
                    displayName: a,
                    displayNameInterpolatedValues: i,
                    analyticsName: l,
                    validators: s,
                    subActions: c,
                    collapseSubActionsIntoParent: d,
                    hideSubActions: u,
                    fuzzySearchKeywordsArray: f,
                    closeParentMenu: !0,
                    disabled: g,
                    action: () => {},
                    render: (t, n, a) => (0, o.jsx)(r, {
                        actionDisplayName: m.displayName,
                        args: e,
                        props: t,
                        context: n,
                        actionMenuListParent: a
                    })
                });
                return m
            }

            function r({
                actionDisplayName: e,
                args: t,
                props: i,
                context: l,
                actionMenuListParent: s
            }) {
                let {
                    displayName: c,
                    subTitle: d,
                    renderTooltip: u,
                    tooltipPlacement: p,
                    svg: f,
                    icon: g,
                    right: m,
                    rightStyle: h,
                    dontShrinkTitle: y,
                    width: b,
                    initialFocus: v,
                    subActions: _,
                    bottomSheetInitialState: x,
                    disableDefaultClick: k
                } = t, {
                    disabled: C,
                    disableTooltip: w
                } = (0, n(682985).K8)(() => {
                    var e, n;
                    return {
                        disabled: (null == (e = t.disabled) ? void 0 : e.call(t, l)) || !1,
                        disableTooltip: !u || (null == (n = t.disableTooltip) ? void 0 : n.call(t, l))
                    }
                }, [t, l, u]), I = null == d ? void 0 : d(l);
                return (0, o.jsx)(n(51831).m, {
                    content: () => (0, o.jsx)("div", {
                        style: n(233319).FG,
                        children: null == u ? void 0 : u({
                            context: l,
                            title: e
                        })
                    }),
                    disableTooltip: w,
                    placement: p,
                    children: t => (0, o.jsx)(n(816231).A, { ...i,
                        disabled: C,
                        disabledFeedback: C,
                        disableDefaultClick: k,
                        onFocus: s.onFocus,
                        renderExtension: (e, t) => (0, o.jsx)(a, {
                            context: l,
                            extensionMenuParent: t,
                            actionMenuListParent: s,
                            popupEvents: e,
                            displayName: c,
                            width: b,
                            initialFocus: v,
                            subActions: _
                        }),
                        bottomSheetInitialState: x,
                        children: (a, i) => {
                            let r = { ...(0, n(63390).A)(a, t),
                                title: I ? (0, o.jsx)(n(233319).fh, {
                                    subTitle: I,
                                    children: e
                                }) : e,
                                right: m,
                                rightStyle: h,
                                dontShrinkTitle: y
                            };
                            return f ? (0, o.jsx)(n(860287).A, { ...r,
                                svg: f,
                                ref: i
                            }) : (0, o.jsx)(n(95582).A, { ...r,
                                icon: g,
                                ref: i
                            })
                        }
                    })
                })
            }
        },
        36663: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowChevronSingleDownFillIcon: () => a,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.72 6.72 12.56 7.16",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M9.38 13.619a.875.875 0 0 0 1.238 0l5.4-5.4a.875.875 0 0 0-1.237-1.238L10 11.763 5.218 6.98a.875.875 0 1 0-1.237 1.24z"
                    })
                },
                a = (0, n(104509).wt)("arrowChevronSingleDownFill", o, "fill")
        },
        49396: (e, t, n) => {
            e.exports = n.p + "3385d40630727f40.png"
        },
        56281: (e, t, n) => {
            function o(e, t) {
                return t ? t.percent_off ? {
                    amount: e * t.percent_off / 100,
                    monthsRemaining: t.duration_in_months
                } : t.amount_off ? {
                    amount: t.amount_off
                } : {
                    amount: 0
                } : {
                    amount: 0
                }
            }

            function a(e) {
                return "personal" !== e && n(126365).tX.find(t => t === e)
            }
            n.d(t, {
                VV: () => r,
                _6: () => a,
                _q: () => i,
                ex: () => o
            }), n(16280), n(944114), n(898992), n(672577);
            let i = ["kr_card", "kakao_pay", "naver_pay"];

            function r(e) {
                let {
                    currency: t
                } = e, n = ["card", "link"];
                return "EUR" === t && n.push("sepa_debit"), "KRW" === t && n.push(...i), n
            }
        },
        58344: (e, t, n) => {
            e.exports = n.p + "056c81859ba06119.png"
        },
        94021: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.27 2.85 17.64 14.57",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M1.293 6.583A2.125 2.125 0 0 1 3.12 4.195l9.912-1.321A2.125 2.125 0 0 1 15.418 4.7l.264 1.975h1.103c1.174 0 2.125.951 2.125 2.125v6.5a2.125 2.125 0 0 1-2.125 2.125h-10A2.125 2.125 0 0 1 4.66 15.3v-.465l-.12.016a2.125 2.125 0 0 1-2.388-1.825zm3.367 6.991V8.8c0-1.174.952-2.125 2.125-2.125h7.636l-.242-1.81a.875.875 0 0 0-.983-.752L3.284 5.434a.875.875 0 0 0-.752.983l.86 6.443a.875.875 0 0 0 .982.752zM5.91 8.8v6.5c0 .483.392.875.875.875h10a.875.875 0 0 0 .875-.875V8.8a.875.875 0 0 0-.875-.875h-10a.875.875 0 0 0-.875.875"
                    })
                },
                a = (0, n(104509).wt)("rectangleOnRectangleTilt", o, "default")
        },
        97726: (e, t, n) => {
            n.d(t, {
                n: () => r
            });
            var o = n(296540),
                a = n(474848);
            let i = {
                diffDot: {
                    position: "absolute",
                    top: -2,
                    insetInlineEnd: -2,
                    background: n(632079).Tj.orange.icon.accentPrimary,
                    border: `1px solid ${n(632079).Tj.background.primary}`,
                    width: 9,
                    height: 9,
                    borderRadius: 9
                }
            };

            function r(e) {
                let {
                    icon: t,
                    title: r,
                    on: l,
                    disabled: s,
                    hasDiff: c,
                    wrapStyle: d,
                    innerStyle: u,
                    hideChevron: p
                } = e, f = (0, n(107332).P)({
                    variant: "tint",
                    colorPalette: "blue",
                    colorVariant: "accentPrimary"
                }), g = (0, n(107332).P)({
                    variant: "plain",
                    colorVariant: "secondary"
                }), m = (0, n(960253).I)(() => {
                    let e = l || s ? f : g;
                    return {
                        container: {
                            borderRadius: 14,
                            display: "inline-flex",
                            ...c && {
                                position: "relative"
                            },
                            ...d
                        },
                        filterPill: {
                            fontSize: 14,
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                            whiteSpace: "nowrap",
                            borderRadius: 32,
                            height: n(986939).A.isMobile ? 28 : 24,
                            lineHeight: n(986939).A.isMobile ? "28px" : "24px",
                            padding: "0 8px",
                            ...e.resting,
                            ...u
                        },
                        hovered: { ...e.hovered
                        },
                        pressed: { ...e.pressed
                        }
                    }
                }, [c, d, l, s, u, f, g]), h = (0, o.useCallback)(e => {
                    "Escape" === e.key && e.currentTarget.blur()
                }, []);
                return (0, a.jsxs)("div", {
                    style: m.container,
                    children: [(0, a.jsxs)(n(64960).Ay, {
                        disabled: s,
                        disabledFeedback: !0,
                        style: m.filterPill,
                        hoveredStyle: m.hovered,
                        pressedStyle: m.pressed,
                        onMouseEnter: e.onMouseEnter,
                        onMouseLeave: e.onMouseLeave,
                        onClick: e.onClick,
                        onDoubleClick: e.onDoubleClick,
                        onKeyDown: h,
                        children: [t, r, p ? void 0 : (0, a.jsx)(n(16275).I, {
                            icon: n(595453).arrowChevronSingleDownSmallIcon,
                            size: "xs",
                            fitToViewBox: "horizontal"
                        })]
                    }), c ? (0, a.jsx)("div", {
                        style: i.diffDot
                    }) : void 0]
                })
            }
        },
        98303: (e, t, n) => {
            e.exports = n.p + "7a736746212f0f46.png"
        },
        104455: (e, t, n) => {
            e.exports = n.p + "1fac3e057348c509.png"
        },
        113174: (e, t, n) => {
            e.exports = n.p + "5a7ce521ec824981.png"
        },
        121421: (e, t, n) => {
            e.exports = n.p + "6ddab14ae1911792.png"
        },
        124394: (e, t, n) => {
            e.exports = n.p + "e02c2b36d656a621.png"
        },
        146535: (e, t, n) => {
            e.exports = n.p + "d96dbdbbe0581121.gif"
        },
        152931: (e, t, n) => {
            n.d(t, {
                m: () => a
            }), n(898992), n(672577), n(737550);
            var o = n(296540);

            function a(e) {
                var t, a;
                let {
                    workflowStore: i
                } = e, r = "on" === (0, n(604306).r)("ai_model_cost_validate_permissions", {
                    disableExposureLogging: !0
                }), {
                    workflowValue: l
                } = (0, n(867587).N)(i, !0), s = (0, n(758360).K7)("custom_agent").supportsWebSearch("workflow"), {
                    instructionUrls: c
                } = (0, n(115688).M)({
                    workflowStore: i
                }), d = null == (t = l.modules) ? void 0 : t.find(e => "notion" === e.type), u = (null == d ? void 0 : d.type) === "notion" ? d : void 0, p = null == (a = l.modules) ? void 0 : a.find(e => "slack" === e.type), f = (null == p ? void 0 : p.type) === "slack" ? p : void 0, {
                    autoGrantMissingPermissions: g,
                    dependencyMissingPermissions: m
                } = (0, n(728285).T)({
                    moduleValue: u,
                    store: i,
                    workflow: l
                }), h = (0, n(19321).s)({
                    moduleValue: f,
                    store: i
                }), y = (0, o.useMemo)(() => c.some(({
                    parsed: e
                }) => "webpage" === e.type), [c]), b = !!(s && y && !(0, n(445568).isWebAccessEnabled)(null == u ? void 0 : u.permissions)), v = {
                    notionMissingCount: g.length + m.length,
                    slackMissingCount: h.length,
                    missingWebAccess: b
                };
                return {
                    hasRequiredPermissions: !r || 0 === v.notionMissingCount && 0 === v.slackMissingCount && !v.missingWebAccess,
                    shouldHighlightWebAccess: r && b,
                    isPermissionValidationEnabled: r,
                    missingRequirements: v
                }
            }
        },
        154457: (e, t, n) => {
            n.d(t, {
                h: () => o
            });
            let o = (0, n(104509).xh)("plus", {
                default: {
                    loader: () => n.e(8881).then(n.bind(n, 581923))
                },
                small: {
                    loader: () => n.e(8881).then(n.bind(n, 638501))
                },
                fill: {
                    loader: () => n.e(8881).then(n.bind(n, 223759))
                },
                fillSmall: {
                    loader: () => n.e(8881).then(n.bind(n, 550246))
                }
            }, ["plus", "add", "new", "create", "increase"])
        },
        161412: (e, t, n) => {
            e.exports = n.p + "e81e609390254b2a.png"
        },
        173231: (e, t, n) => {
            n.d(t, {
                hS: () => d,
                o2: () => u,
                js: () => r,
                Oe: () => l,
                Le: () => c,
                F6: () => p
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(823215), n(354520), n(430670), n(581454), n(296540);
            var o = n(474848);
            let a = (0, n(109939).YK)({
                    moreOptions: {
                        id: "action.moreOptions",
                        defaultMessage: "More options"
                    }
                }),
                i = (0, n(109939).YK)({
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
                        shouldShowBlockTypeTitle: c
                    } = e,
                    d = s.trim().toLowerCase();
                d.startsWith("/") && (d = d.slice(1));
                let f = u(r, l).map((e, r) => {
                    var s, d;
                    let {
                        actions: u,
                        title: p
                    } = e, f = u.length - 5;
                    if (e.shouldShowMoreOptions && f > 1) {
                        let e = (s = u.slice(5), (0, n(35370).u)({
                            key: "more options",
                            displayName: a.moreOptions,
                            analyticsName: a.moreOptions.defaultMessage,
                            svg: n(397900).ellipsisIcon,
                            validators: [],
                            subActions: () => [{
                                key: 0,
                                title: void 0,
                                render: e => (0, o.jsx)(n(844565).A, { ...e
                                }),
                                actions: s
                            }]
                        }));
                        u = [...u.slice(0, 5), e]
                    }
                    let g = l.blocks[0];
                    if (g) {
                        let e = g.getType();
                        if (c && e && 0 === r) {
                            let o = l.blocks.every(t => t.getType() === e) ? (0, n(495734).Z)(e) : i.mixedBlocks;
                            if (o) {
                                p = t.formatMessage(o, {
                                    count: l.blocks.length
                                });
                                let e = null == (d = n(496704).K.findCollectionViewBlockFromStore(g)) ? void 0 : d.collectionContextStore.getViewType();
                                if (e) {
                                    let t = n(799514).to[e];
                                    t && (p += ` \xb7 ${t}`)
                                }
                            }
                        }
                    }
                    return { ...e,
                        actions: u,
                        title: p
                    }
                });
                if (!d) {
                    let e = new Map;
                    for (let t of f)
                        for (let n of t.actions) e.set(n, t);
                    return {
                        groupedSections: f,
                        rankedActions: f.flatMap(e => e.actions),
                        actionSectionMap: e
                    }
                }
                let g = (function(e, t) {
                        let n = [];
                        for (let o of e) {
                            let e = { ...o,
                                actions: []
                            };
                            for (let a of o.actions)
                                if (p(a, t))
                                    if (a.subActions) {
                                        let i = u(a.subActions(t), t);
                                        if (a.hideSubActions) {
                                            e.actions.push(a);
                                            continue
                                        }
                                        if (a.collapseSubActionsIntoParent) {
                                            for (let t of i)
                                                for (let n of t.actions) e.actions.push(n);
                                            continue
                                        }
                                        for (let e of i.map(e => ({ ...e,
                                                key: `${o.key} ${a.key} ${e.key}`,
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
                                o = [n, e.searchTitle || e.title || "", n].join(" ");
                            return { ...t,
                                searchName: o
                            }
                        })
                    })),
                    m = [],
                    h = new Map;
                for (let e of g)
                    for (let t of e.actions) h.set(t, e), m.push(t);
                let y = (0, n(821048).Ay)(d, m, e => e.searchName || "", {
                        minScore: 25,
                        getSortScore: e => -e.score * (e.original.sortScoreMultiplier ? ? 1)
                    }),
                    b = new Set(y),
                    v = m.filter(e => !!e.alwaysShowInSearch && !b.has(e)),
                    _ = [...v.filter(e => "start" === e.alwaysShowInSearch), ...y, ...v.filter(e => "end" === e.alwaysShowInSearch)],
                    x = n(381453).$z(_, e => {
                        let t = h.get(e);
                        if (t) return t.title
                    }),
                    k = [];
                for (let e of Object.keys(x)) {
                    let t = x[e],
                        n = h.get(t[0]);
                    n && k.push({ ...n,
                        actions: t
                    })
                }
                return {
                    groupedSections: k,
                    rankedActions: _,
                    actionSectionMap: h
                }
            }

            function c(e, t) {
                if (!t) return e;
                let n = 0,
                    o = [];
                for (let a of e) {
                    if (n >= t) break;
                    let e = a.actions.slice(0, t - n);
                    e.length > 0 && (n += e.length, o.push({ ...a,
                        actions: e
                    }))
                }
                return o
            }

            function d(e, t) {
                let n = [];
                for (let o of e) {
                    let e = o.actions.filter(t);
                    e.length > 0 && n.push({ ...o,
                        actions: e
                    })
                }
                return n
            }

            function u(e, t) {
                return d(e, e => p(e, t))
            }

            function p(e, t) {
                return null != e && (!e.validators || e.validators.every(e => e(t)))
            }
        },
        189760: (e, t, n) => {
            n.d(t, {
                B: () => o,
                r: () => a
            });
            let o = {
                dog: (0, n(109939).YK)({
                    loyalWoof: {
                        id: "dogAccessory.speechBubble.loyalWoof",
                        defaultMessage: "Woof! I’m here to help!"
                    },
                    goodBoyOnDuty: {
                        id: "dogAccessory.speechBubble.goodBoyOnDuty",
                        defaultMessage: "Good boy on duty"
                    },
                    tailWags: {
                        id: "dogAccessory.speechBubble.tailWags",
                        defaultMessage: "*tail wags*"
                    },
                    barkBark: {
                        id: "dogAccessory.speechBubble.barkBark",
                        defaultMessage: "Bark bark! (That means hello)"
                    },
                    fetchedResults: {
                        id: "dogAccessory.speechBubble.fetchedResults",
                        defaultMessage: "I fetched your results!"
                    },
                    goodAI: {
                        id: "dogAccessory.speechBubble.goodAI",
                        defaultMessage: "Who’s a good AI? I’m a good AI."
                    },
                    sitStaySearch: {
                        id: "dogAccessory.speechBubble.sitStaySearch",
                        defaultMessage: "Sit. Stay. Search. Good boy."
                    },
                    willWorkForTreats: {
                        id: "dogAccessory.speechBubble.willWorkForTreats",
                        defaultMessage: "Will work for treats"
                    },
                    loyalSidekick: {
                        id: "dogAccessory.speechBubble.loyalSidekick",
                        defaultMessage: "Your loyal sidekick"
                    },
                    happyPanting: {
                        id: "dogAccessory.speechBubble.happyPanting",
                        defaultMessage: "*happy panting noises*"
                    },
                    sniffingAnswers: {
                        id: "dogAccessory.speechBubble.sniffingAnswers",
                        defaultMessage: "Sniffing out answers for you…"
                    },
                    alwaysByYourSide: {
                        id: "dogAccessory.speechBubble.alwaysByYourSide",
                        defaultMessage: "Always by your side"
                    },
                    dataRetriever: {
                        id: "dogAccessory.speechBubble.dataRetriever",
                        defaultMessage: "Data retriever at your service"
                    },
                    pawsitively: {
                        id: "dogAccessory.speechBubble.pawsitively",
                        defaultMessage: "Pawsitively ready to help"
                    },
                    digIntoThis: {
                        id: "dogAccessory.speechBubble.digIntoThis",
                        defaultMessage: "Let’s dig into this together"
                    },
                    noRuffDays: {
                        id: "dogAccessory.speechBubble.noRuffDays",
                        defaultMessage: "No ruff days on my watch"
                    },
                    boop: {
                        id: "dogAccessory.speechBubble.boop",
                        defaultMessage: "Boop!"
                    },
                    nuzzle: {
                        id: "dogAccessory.speechBubble.nuzzle",
                        defaultMessage: "*nuzzle*"
                    },
                    henloFren: {
                        id: "dogAccessory.speechBubble.henloFren",
                        defaultMessage: "Henlo fren"
                    },
                    arfArf: {
                        id: "dogAccessory.speechBubble.arfArf",
                        defaultMessage: "arf arf"
                    },
                    everyPageNeedsAGoodDog: {
                        id: "dogAccessory.speechBubble.everyPageNeedsAGoodDog",
                        defaultMessage: "Every page needs a good dog"
                    },
                    organizingWorkspace: {
                        id: "dogAccessory.speechBubble.organizingWorkspace",
                        defaultMessage: "Organizing your workspace, one bark at a time"
                    },
                    sidebarRentFree: {
                        id: "dogAccessory.speechBubble.sidebarRentFree",
                        defaultMessage: "I live in your sidebar rent-free"
                    },
                    goodestBoy: {
                        id: "dogAccessory.speechBubble.goodestBoy",
                        defaultMessage: "Notion’s goodest boy"
                    },
                    aiZoomies: {
                        id: "dogAccessory.speechBubble.aiZoomies",
                        defaultMessage: "AI-powered zoomies"
                    },
                    largeLanguageLabrador: {
                        id: "dogAccessory.speechBubble.largeLanguageLabrador",
                        defaultMessage: "Large Language Labrador at your service"
                    },
                    bellyRubsAndDatabases: {
                        id: "dogAccessory.speechBubble.bellyRubsAndDatabases",
                        defaultMessage: "Trained on belly rubs and databases"
                    },
                    neuralPetwork: {
                        id: "dogAccessory.speechBubble.neuralPetwork",
                        defaultMessage: "Neural network? I prefer neural *pet*work"
                    },
                    machineLearning: {
                        id: "dogAccessory.speechBubble.machineLearning",
                        defaultMessage: "Machine learning? I already know sit and stay"
                    },
                    goldenRetrieverModel: {
                        id: "dogAccessory.speechBubble.goldenRetrieverModel",
                        defaultMessage: "I’m basically a golden *retriever* model"
                    },
                    fetchingActionItems: {
                        id: "dogAccessory.speechBubble.fetchingActionItems",
                        defaultMessage: "Fetching your action items…"
                    },
                    sniffingThroughDocs: {
                        id: "dogAccessory.speechBubble.sniffingThroughDocs",
                        defaultMessage: "Sniffing through your docs for answers"
                    },
                    neverLoseTrack: {
                        id: "dogAccessory.speechBubble.neverLoseTrack",
                        defaultMessage: "I never lose track of a page. Or a bone."
                    },
                    toChews: {
                        id: "dogAccessory.speechBubble.toChews",
                        defaultMessage: "Your to-dos are my to-chews"
                    },
                    automatingTailWags: {
                        id: "dogAccessory.speechBubble.automatingTailWags",
                        defaultMessage: "Automating tail wags since 2026"
                    },
                    assistantsAssistant: {
                        id: "dogAccessory.speechBubble.assistantsAssistant",
                        defaultMessage: "I’m the AI assistant’s assistant"
                    },
                    accessorySlot: {
                        id: "dogAccessory.speechBubble.accessorySlot",
                        defaultMessage: "They gave me a whole accessory slot!"
                    },
                    smarterThanILook: {
                        id: "dogAccessory.speechBubble.smarterThanILook",
                        defaultMessage: "Smarter than I look. Cuter than you’d expect."
                    },
                    cuteCommand: {
                        id: "dogAccessory.speechBubble.cuteCommand",
                        defaultMessage: "/ command? More like /cute command"
                    },
                    syncedPup: {
                        id: "dogAccessory.speechBubble.syncedPup",
                        defaultMessage: "Synced pup"
                    },
                    linkedDogtabase: {
                        id: "dogAccessory.speechBubble.linkedDogtabase",
                        defaultMessage: "Linked dog-tabase"
                    },
                    dogEnteredChat: {
                        id: "dogAccessory.speechBubble.dogEnteredChat",
                        defaultMessage: "@dog has entered the chat"
                    },
                    teachNewTricks: {
                        id: "dogAccessory.speechBubble.teachNewTricks",
                        defaultMessage: "You can teach me new tricks!"
                    }
                })
            };

            function a(e) {
                return null != e && e in o
            }
        },
        190462: (e, t, n) => {
            e.exports = n.p + "46e91f58a3919e25.png"
        },
        200424: (e, t, n) => {
            e.exports = n.p + "9ade71d75a1c0e93.png"
        },
        202151: (e, t, n) => {
            e.exports = n.p + "f6041c6bf8f9f53e.png"
        },
        213458: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowUpRightSquareIcon: () => i,
                iconDefinition: () => a
            }), n(296540);
            var o = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M7.875 7c0-.345.28-.625.625-.625H13c.345 0 .625.28.625.625v4.5a.625.625 0 1 1-1.25 0V8.509l-5.12 5.12a.625.625 0 1 1-.884-.883l5.12-5.121H8.5A.625.625 0 0 1 7.875 7"
                        }), (0, o.jsx)("path", {
                            d: "M3.125 5.25c0-1.174.951-2.125 2.125-2.125h9.5c1.174 0 2.125.951 2.125 2.125v9.5a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125zm2.125-.875a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875v-9.5a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                i = (0, n(104509).wt)("arrowUpRightSquare", a, "default")
        },
        225900: (e, t, n) => {
            n.d(t, {
                N: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    transcript: a,
                    parentPointer: i,
                    threadId: r,
                    workflowId: l,
                    createdSource: s,
                    agentMessageKey: c,
                    debugOverrides: d
                } = e, u = r ? ? (0, n(295447).Z1)({
                    environment: t,
                    table: n(298085).T,
                    spaceId: o.id
                });
                return (0, n(757688).WE)({
                    environment: t,
                    clientStore: n(57168).defaultClientAIChatStore,
                    threadStore: void 0,
                    createThreadArgs: {
                        id: u,
                        transcript: a,
                        workflowId: l,
                        parentPointer: i || {
                            table: n(213003).NX,
                            id: o.id,
                            spaceId: o.id
                        },
                        createdSource: s,
                        agentMessageKey: c
                    },
                    additionalDebugOverrides: d,
                    sendPatchResponse: !0
                }), n(174148).E.createChildStore(o, {
                    id: u,
                    spaceId: o.id,
                    table: n(298085).T
                })
            }
        },
        245102: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowLineDownIcon: () => a,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.52 2.39 12.95 15.21",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M10 2.4c.345 0 .625.28.625.625v9.966l3.333-3.333a.625.625 0 1 1 .884.884l-4.4 4.4a.625.625 0 0 1-.884 0l-4.4-4.4a.625.625 0 0 1 .884-.884l3.333 3.333V3.025c0-.345.28-.625.625-.625M4.15 16.35a.625.625 0 1 0 0 1.25h11.7a.625.625 0 0 0 0-1.25z"
                    })
                },
                a = (0, n(104509).wt)("arrowLineDown", o, "default")
        },
        251861: (e, t, n) => {
            e.exports = n.p + "4166d500779ec2a7.png"
        },
        258527: (e, t, n) => {
            e.exports = n.p + "281f47e883097642.png"
        },
        269515: (e, t, n) => {
            e.exports = n.p + "c6b766e6d181c27f.png"
        },
        279206: (e, t, n) => {
            e.exports = n.p + "c07b23b03f31c7d0.png"
        },
        279728: (e, t, n) => {
            e.exports = n.p + "134453730e6e0d66.png"
        },
        285482: (e, t, n) => {
            n.d(t, {
                A: () => o
            });

            function o(e, t) {
                if ((0, n(101787).pA8)(t)) {
                    let o = (0, n(115964).$)(t.clientData);
                    if (o) return "messageValues" in t.clientData ? e.formatMessage(o, t.clientData.messageValues) : e.formatMessage(o)
                }
                return e.formatMessage(n(683646).k.generic_error)
            }
        },
        303626: (e, t, n) => {
            e.exports = n.p + "d6b5a7d3fa534ce3.png"
        },
        310324: (e, t, n) => {
            n.d(t, {
                Ay: () => f,
                KF: () => p,
                LG: () => l,
                Zf: () => c,
                yD: () => s
            });
            var o = n(296540),
                a = n(474848);
            let i = {
                    paddingTop: 4,
                    paddingBottom: 4
                },
                r = o.forwardRef(function({
                    preventCaptureArrowShortcuts: e,
                    preventCaptureDeleteWhenEmpty: t,
                    preventCaptureClipboardShortcuts: r,
                    preventCaptureSpacebarWhenEmpty: l,
                    ...s
                }, c) {
                    let {
                        left: d,
                        right: u,
                        inputLeft: p,
                        inputRight: f,
                        inputRightStyle: g,
                        disableInput: m,
                        inputOuterStyle: y,
                        rightMobileEditLabel: v,
                        mobileKeyboardOnDismiss: _,
                        style: x,
                        value: k,
                        onChange: C,
                        autosize: w,
                        autosizeMinHeight: I,
                        autosizeMaxHeight: S,
                        customElementAttributes: M,
                        disabled: A,
                        format: j,
                        id: T,
                        placeholder: B,
                        type: D,
                        autoFocus: E,
                        focus: L,
                        focusInitial: P,
                        focusAfterAnimation: V,
                        forceShowClearButton: z,
                        ignoreKeyboardMode: N,
                        inputElementAttributes: R,
                        inputStyle: O,
                        isRightLastElementOfInput: F,
                        maxlength: W,
                        min: $,
                        max: H,
                        selectAll: G,
                        showClearButton: Z,
                        suppressFocusRing: q,
                        textarea: U,
                        textareaSubmitOnEnter: K,
                        onBlur: Y,
                        onCancel: X,
                        onClearButtonClick: Q,
                        onClick: J,
                        onFocus: ee,
                        onKeyDown: et,
                        onSubmit: en,
                        ...eo
                    } = s, [ea, ei] = (0, o.useState)(() => !!(L || P));
                    (0, o.useEffect)(() => {
                        void 0 !== L && ei(L)
                    }, [L]);
                    let er = e ? void 0 : n(763230).D_,
                        el = !t || k.length > 0 ? n(763230).D_ : void 0,
                        es = r ? void 0 : n(763230).D_,
                        ec = !l || k.length > 0 ? n(763230).D_ : void 0,
                        ed = (0, n(649476).Tf)(),
                        eu = (0, o.useContext)(n(649476).xu),
                        ep = (0, o.useRef)(null),
                        ef = {
                            value: k,
                            onChange: C,
                            autosize: w,
                            autosizeMinHeight: I,
                            autosizeMaxHeight: S,
                            customElementAttributes: M,
                            disabled: A,
                            format: j,
                            id: T,
                            placeholder: B,
                            type: D,
                            autoFocus: E,
                            focus: L,
                            focusInitial: P,
                            focusAfterAnimation: V,
                            forceShowClearButton: z,
                            ignoreKeyboardMode: N,
                            inputElementAttributes: R,
                            inputStyle: O,
                            isRightLastElementOfInput: F,
                            maxlength: W,
                            min: $,
                            max: H,
                            selectAll: G,
                            showClearButton: Z,
                            suppressFocusRing: q,
                            textarea: U,
                            textareaSubmitOnEnter: K,
                            onBlur: Y,
                            onCancel: X,
                            onClearButtonClick: Q,
                            onClick: J,
                            onFocus: ee,
                            onKeyDown: et,
                            onSubmit: en
                        };
                    return (0, a.jsx)(n(369064).N, {
                        debugName: "InputMenuItem",
                        capture: !0,
                        onUntab: n(763230).D_,
                        onTab: n(763230).D_,
                        onSelectAll: n(763230).D_,
                        onRedo: n(763230).D_,
                        onUndo: n(763230).D_,
                        onToggleBold: n(763230).D_,
                        onToggleItalics: n(763230).D_,
                        onToggleCode: n(763230).D_,
                        onCut: es,
                        onCopy: es,
                        onPaste: es,
                        onKeypress: n(763230).D_,
                        onLeft: er,
                        onRight: er,
                        onDelete: el,
                        onBackspace: el,
                        onSpace: ec,
                        children: n(986939).A.isMobile ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(n(636518).Ay, {
                                ref: c,
                                ...eo,
                                itemMarginLeft: ed ? 8 : void 0,
                                style: x,
                                title: (0, a.jsx)(b, {
                                    ref: ep,
                                    left: d,
                                    right: u,
                                    inputLeft: p,
                                    inputRight: f,
                                    inputRightStyle: g,
                                    disableInput: m,
                                    inputOuterStyle: y,
                                    rightMobileEditLabel: v,
                                    isFocused: ea,
                                    setIsFocused: ei,
                                    ...ef
                                })
                            }), (0, a.jsx)(n(368678).P, {
                                show: ea && eu.menuType !== n(649476).gu.ActionSheet,
                                onDismiss: _,
                                inputRef: ep
                            })]
                        }) : (0, a.jsx)(n(636518).Ay, {
                            ref: c,
                            ...eo,
                            left: d,
                            right: u,
                            isTokenTitle: !0,
                            title: (0, a.jsx)(h, {
                                ref: ep,
                                disableInput: m,
                                inputOuterStyle: y,
                                inputRight: f,
                                inputRightStyle: g,
                                inputLeft: p,
                                ...ef
                            }),
                            style: { ...i,
                                ...x
                            }
                        })
                    })
                }),
                l = 30,
                s = 28;

            function c(e) {
                let {
                    icon: t
                } = e;
                return t({
                    fill: n(632079).Tj.icon.secondary,
                    width: n(104509).Ev.sm,
                    height: n(104509).Ev.sm,
                    flexGrow: 0,
                    flexShrink: 0
                })
            }
            let d = {
                    outlineButtonHovered: {
                        background: n(632079).Tj.background.secondary
                    }
                },
                u = (0, n(64960)._S)({
                    color: n(632079).Tj.background.primary
                });

            function p(e) {
                let t = (0, n(533992).WS)(),
                    o = (0, n(960253).I)(() => ({
                        outlineButton: { ...(0, n(64960).qq)({
                                shape: "default",
                                size: "sm",
                                hasIconOnly: !0,
                                isButtonGapEnabled: !0
                            }),
                            fontWeight: n(699422).Wy.medium,
                            lineHeight: 1.2,
                            border: `1px solid ${n(632079).Tj.border.primaryTranslucent}`,
                            background: e.hasBackground ? n(632079).Tj.background.primary : void 0
                        },
                        outlineButtonPressed: {
                            background: u.pressed
                        }
                    }), [e.hasBackground]);
                return (0, a.jsx)(n(374533).A, {
                    size: "xs",
                    colorVariant: "primary",
                    ...e,
                    ariaLabel: e.ariaLabel,
                    style: { ...o.outlineButton,
                        ...e.style,
                        height: t ? l : s,
                        width: t ? l : s
                    },
                    hoveredStyle: d.outlineButtonHovered,
                    pressedStyle: o.outlineButtonPressed
                })
            }
            let f = r,
                g = {
                    style0: {
                        color: n(632079).Tj.text.secondary
                    }
                };

            function m({
                rightMobileEditLabel: e,
                inputRef: t
            }) {
                let i = (0, n(533992).v3)(),
                    r = (0, o.useCallback)(e => {
                        e.preventDefault();
                        let o = t.current;
                        o && (0, n(862215).G)(i, o)
                    }, [i, t]);
                return (0, a.jsx)(n(64960).Ay, {
                    onClick: r,
                    style: g.style0,
                    children: e
                })
            }
            let h = o.forwardRef(function(e, t) {
                    let {
                        disabled: o,
                        disableInput: i,
                        inputOuterStyle: r,
                        inputRight: l,
                        inputRightStyle: s,
                        inputLeft: c,
                        min: d,
                        textarea: u,
                        ...p
                    } = e;
                    return (0, a.jsx)(n(36481).p, { ...p,
                        ref: t,
                        disabled: o || i,
                        style: {
                            height: u ? void 0 : 28,
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            ...r
                        },
                        left: c,
                        right: l,
                        rightStyle: s,
                        min: d,
                        textarea: u
                    })
                }),
                y = {
                    fontSize: 16
                },
                b = o.forwardRef(function(e, t) {
                    let {
                        left: i,
                        right: r,
                        inputLeft: l,
                        inputRight: s,
                        inputRightStyle: c,
                        disableInput: d,
                        inputOuterStyle: u,
                        rightMobileEditLabel: p,
                        isFocused: f,
                        setIsFocused: g,
                        disabled: h,
                        showClearButton: b,
                        onBlur: v,
                        onFocus: _,
                        ...x
                    } = e, k = (0, o.useCallback)(e => {
                        g(!1), v && v(e)
                    }, [v, g]), C = (0, o.useCallback)(e => {
                        g(!0), _ && _(e)
                    }, [_, g]), w = (0, o.useRef)(null), I = (0, n(421573).A)(w, t), S = p && !f ? (0, a.jsx)(m, {
                        rightMobileEditLabel: p,
                        inputRef: w
                    }) : null;
                    return (0, a.jsx)(n(36481).p, { ...x,
                        ref: I,
                        format: "transparent",
                        style: { ...y,
                            ...u
                        },
                        onFocus: C,
                        onBlur: k,
                        showClearButton: !1 !== b,
                        disabled: h || d,
                        left: l || i,
                        right: S || s || r,
                        rightStyle: c
                    })
                })
        },
        313669: (e, t, n) => {
            e.exports = n.p + "c37502124fe50080.png"
        },
        325336: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowUTurnUpLeftIcon: () => a,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.72 15.76 12.16",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.592 4.792a.625.625 0 1 0-.884-.884l-4.4 4.4a.625.625 0 0 0 0 .884l4.4 4.4a.625.625 0 1 0 .884-.884L4.259 9.375H14a2.625 2.625 0 0 1 0 5.25h-1.42a.625.625 0 1 0 0 1.25H14a3.875 3.875 0 0 0 0-7.75H4.259z"
                    })
                },
                a = (0, n(104509).wt)("arrowUTurnUpLeft", o, "default")
        },
        327785: (e, t, n) => {
            n.d(t, {
                D: () => o
            }), n(944114);

            function o() {
                let e = (0, n(972740).L)(),
                    t = (0, n(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    o = (0, n(192159).TB)(t),
                    a = (0, n(682985).K8)(() => o && (0, n(717274).tL)({
                        disableExposureLogging: !0
                    }), [o]),
                    {
                        progress: i
                    } = (0, n(555583).n)({
                        useRedesigned: a
                    }),
                    r = (0, n(262166).HO)((0, n(192159).AI)(t));
                return (0, n(682985).K8)(() => {
                    if (!(0, n(717274).sw)()) return [];
                    let e = [];
                    return r && !o ? e.push("dog") : r && a && i >= 1 && e.push("dog"), e
                }, [r, o, a, i])
            }
        },
        328590: (e, t, n) => {
            n.d(t, {
                b: () => r
            });
            var o = () => n(546605);

            function a() {
                return {
                    currentScreen: "none",
                    onConfirm: void 0,
                    loginHint: void 0,
                    authAction: void 0,
                    from: "agentSetup"
                }
            }
            class i extends o().Store {
                getInitialState() {
                    return a()
                }
                open(e, t) {
                    this.setState({
                        currentScreen: "introduction",
                        onConfirm: e,
                        loginHint: null == t ? void 0 : t.loginHint,
                        authAction: null == t ? void 0 : t.authAction,
                        from: (null == t ? void 0 : t.from) ? ? "agentSetup"
                    })
                }
                close() {
                    this.setState(a())
                }
                setScreen(e) {
                    this.setState({ ...this.state,
                        currentScreen: e
                    })
                }
            }
            let r = new i;
            (0, n(202146).exposeDebugValue)("notionMailAccountRequiredModalStore", r)
        },
        340916: (e, t, n) => {
            e.exports = n.p + "8cc12fd49d607b13.png"
        },
        357709: (e, t, n) => {
            function o(e, t) {
                let o = (0, n(462391).h2)(t.callout_key);
                o && (t.placement_key = (0, n(462391).t9)(o)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_show",
                        eventProperties: { ...t,
                            callout_src: o ? "static" : "cio"
                        }
                    }
                })
            }

            function a(e, t) {
                let o = (0, n(462391).h2)(t.callout_key);
                o && (t.placement_key = (0, n(462391).t9)(o)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_click",
                        eventProperties: { ...t,
                            callout_src: o ? "static" : "cio"
                        }
                    }
                }), t.callout_key && n(409725).l.trackEvent("callout_click", {
                    callout_key: t.callout_key,
                    click_type: t.click_type,
                    placement_key: t.placement_key
                })
            }

            function i(e, t) {
                let o = (0, n(462391).h2)(t.callout_key);
                o && (t.placement_key = (0, n(462391).t9)(o)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_dismiss",
                        eventProperties: { ...t,
                            callout_src: o ? "static" : "cio"
                        }
                    }
                })
            }

            function r(e, t) {
                let o = (0, n(462391).h2)(t.callout_key);
                o && (t.placement_key = (0, n(462391).t9)(o)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_engagement",
                        eventProperties: { ...t,
                            callout_src: o ? "static" : "cio"
                        }
                    }
                })
            }

            function l(e, t) {
                let {
                    eligible_callouts: o,
                    required_arg_timeout: a,
                    required_args_run_duration: i,
                    eligibility_timeouts: r,
                    blocklist: l
                } = t;
                (0, n(104310).u)({
                    event: {
                        eventName: "callout_coordinator_resolved",
                        eventProperties: {
                            eligible_callouts: o,
                            required_arg_timeout: a,
                            required_args_run_duration: i,
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

            function c(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "callout_skipped",
                        eventProperties: t
                    }
                })
            }

            function d(e, t) {
                let o = (0, n(462391).h2)(t.callout_key);
                o && (t.placement_key = (0, n(462391).t9)(o)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_not_shown",
                        eventProperties: { ...t,
                            callout_src: o ? "static" : "cio"
                        }
                    }
                })
            }
            n.d(t, {
                Ak: () => d,
                Cu: () => c,
                DL: () => o,
                Jb: () => r,
                Sq: () => i,
                Y5: () => a,
                gc: () => s,
                wo: () => l
            })
        },
        368678: (e, t, n) => {
            n.d(t, {
                P: () => r
            });
            var o = n(296540),
                a = n(474848);
            let i = {
                style0: {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 16,
                    color: n(632079).Tj.blue.text.accentPrimary,
                    fontWeight: n(699422).Wy.semibold
                }
            };

            function r(e) {
                let {
                    onDismiss: t,
                    inputRef: r
                } = e, l = (0, n(533992).Y0)(), s = (0, o.useRef)(null), c = l.isMobileNative && l.isIOS, d = c && e.show;
                (0, n(336494).b)(n(651748).A, () => ({
                    getNode: () => s.current,
                    isShown: () => d
                }), [d]);
                let u = (0, n(571354).n)(),
                    p = (0, o.useCallback)(() => {
                        var e;
                        null == r || null == (e = r.current) || e.focus(), t && t();
                        let n = document.activeElement;
                        n instanceof HTMLElement && n.blur()
                    }, [r, t]);
                if (!c) return null;
                let f = d ? -(n(247800).j + u) : 0;
                return (0, a.jsx)(n(114596).O, {
                    open: !0,
                    children: (0, a.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: "100vh",
                            width: "100%",
                            height: n(247800).j,
                            display: d ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            backgroundColor: n(632079).Tj.keyboardDoneBarBackground,
                            transform: `translateY(${f}px)`,
                            transition: d ? "ease-out" : "ease-in",
                            boxShadow: d ? `
								0 -1px 0 ${n(632079).Tj.border.primaryTranslucent}
							` : void 0
                        },
                        ref: s,
                        children: (0, a.jsx)(n(64960).Ay, {
                            style: i.style0,
                            onTouchEnd: () => {
                                p()
                            },
                            children: (0, a.jsx)(n(109939).sA, {
                                defaultMessage: "Done",
                                id: "mobile.dismissKeyboardBar.button.label"
                            })
                        })
                    })
                })
            }
        },
        368733: (e, t, n) => {
            e.exports = n.p + "6fd3d43e1320e88a.png"
        },
        386194: (e, t, n) => {
            e.exports = n.p + "6847e3eeb9ba8341.png"
        },
        388400: (e, t, n) => {
            n.d(t, {
                Bu: () => d,
                I8: () => c,
                qw: () => s
            }), n(898992), n(354520), n(803949);
            let o = /[\u4E00-\u9FA5]/g,
                a = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/g,
                i = /[\u3041-\u3096\u30A0-\u30FF\u31F0-\u31FF\u3220-\u3243\u3280-\u337F]/g,
                r = /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g,
                l = /[-./\\()"'''""，。、·～；,;<>~!@#$%^&*|+=[\]{}`~?:\s]/u;

            function s(e) {
                return (0, n(381453).oE)(e.split(l))
            }

            function c(e) {
                return "none" === d(e) ? s(e).length : e.length
            }

            function d(e, t) {
                let n = !!e.match(r);
                return e.match(o) || e.match(a) || n ? n ? "ko" : e.match(i) || "ja-JP" === t ? "ja" : "zh" : "none"
            }
        },
        388647: (e, t, n) => {
            function o(e) {
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
                return (0, n(682985).K8)(() => o({
                    environment: t,
                    disableExposureLogging: e.disableExposureLogging
                }), [t, e.disableExposureLogging])
            }
            n.d(t, {
                k: () => a,
                p: () => o
            })
        },
        390123: (e, t, n) => {
            e.exports = n.p + "e67d8b05e7c8adcb.png"
        },
        411106: (e, t, n) => {
            n.d(t, {
                L: () => r,
                p: () => i
            });
            let o = ["aiMeetingNotes", "meetAgent", "academy", "consultants"],
                a = ["aiMeetingNotes", "meetAgent", "database", "academy"],
                i = ["aiMeetingNotes", "mailAndCalendar", "aiSearch", "meetAgent"];

            function r(e, t) {
                return e ? "en-US" === t ? o : ["aiMeetingNotes", "meetAgent", "academy", "connectedApps"] : a
            }
        },
        422550: (e, t, n) => {
            e.exports = n.p + "31299301d549e6d5.png"
        },
        431666: (e, t, n) => {
            n.d(t, {
                i: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    collectionStore: o,
                    collectionViewStore: a,
                    property_type: i,
                    from: r,
                    property: l
                } = e;
                (0, n(33918).G)(t, {
                    property: l,
                    property_type: i,
                    from: r,
                    collection_id: null == o ? void 0 : o.id,
                    collection_view_id: null == a ? void 0 : a.id
                })
            }
        },
        432155: (e, t, n) => {
            n.d(t, {
                Af: () => x,
                Bw: () => C,
                Cs: () => g,
                Oq: () => c,
                Re: () => u,
                X4: () => d,
                YJ: () => v,
                Yc: () => l,
                ZB: () => _,
                Zd: () => k,
                d2: () => p,
                dd: () => h,
                gg: () => s,
                in: () => f,
                kQ: () => b
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(581454), n(737550);
            var o = () => n(180139),
                a = () => n(697006),
                i = () => n(832375),
                r = () => n(247438);
            let l = "reset_user_selected_model";

            function s(e) {
                let {
                    userChatPreference: t,
                    isStatsigInitialized: n,
                    shouldResetUserSelectedModel: o
                } = e;
                if (!((t.version ? ? 0) >= 1) && n) return { ...o && void 0 !== t.model ? {
                        model: void 0
                    } : {},
                    version: 1
                }
            }

            function c(e, t) {
                let o = n(57168).UserChatPreferenceLocalStorageStore.getState();
                n(57168).UserChatPreferenceLocalStorageStore.setState({ ...o,
                    [e]: { ...null == o ? void 0 : o[e],
                        ...t
                    }
                })
            }

            function d(e) {
                return e.some(e => "in_progress" === e.status)
            }

            function u(e) {
                return e.some(e => "complete" === e.status && "risky" === e.attachmentRisk)
            }

            function p(e, t) {
                let n = r().w9s(e),
                    o = ((null == t ? void 0 : t.length) ? ? 0) > 0;
                return !n || o
            }

            function f(e) {
                let t = g({
                    config: e,
                    includeWeb: !1
                });
                return 1 === t.length ? t[0] : void 0
            }

            function g(e) {
                let {
                    config: t,
                    includeWeb: o
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
                return o && t.useWebSearch && a.push({
                    type: "web"
                }), a
            }

            function m(e) {
                let {
                    botId: t,
                    spaceStore: o
                } = e, a = (0, n(203462).zf)(o.environment).getData(o.environment, {
                    spaceId: o.id
                });
                if (a)
                    for (let e of a.agents) {
                        var i;
                        let n = e.getDraftData();
                        if ((null == n || null == (i = n.runtime_actor_pointer) ? void 0 : i.table) === "bot" && n.runtime_actor_pointer.id === t) return e.id
                    }
            }

            function h(e, t, l) {
                if (!e) return [];
                let s = r().moK(e),
                    c = r().Fbh(e).map(e => ({
                        table: i().oo9,
                        id: e
                    })),
                    d = r().jgW(e);
                return [...s, ...c, ...t && l ? d.map(e => {
                    if ((0, a().ut)(e)) return {
                        table: i().C0E,
                        id: o().Lj,
                        spaceId: t.id
                    };
                    let n = m({
                        spaceStore: t,
                        botId: e
                    });
                    if (n) return {
                        table: i().C0E,
                        id: n,
                        spaceId: t.id
                    }
                }).filter(n(722371).O9) : []]
            }

            function y(e, t) {
                let o = new Set(e.map(e => n(496282).L3.toIdTableKey(e))),
                    a = new Set(t.map(e => n(496282).L3.toIdTableKey(e))),
                    i = t.filter(e => !o.has(n(496282).L3.toIdTableKey(e)));
                return {
                    added: i,
                    removed: e.filter(e => !a.has(n(496282).L3.toIdTableKey(e))),
                    unchanged: e.filter(e => a.has(n(496282).L3.toIdTableKey(e)))
                }
            }

            function b(e) {
                let t, o, {
                        currentTextMentionPointers: a,
                        inputMentionPointers: i,
                        allMentionPointers: r
                    } = e,
                    {
                        added: l
                    } = y(Array.from(r), a),
                    {
                        removed: s,
                        unchanged: c
                    } = y(i, a),
                    d = l.length > 0,
                    u = s.length > 0;
                if (d || u) {
                    let e = Array.from(r);
                    if (u) {
                        let t = new Set(s.map(e => n(496282).L3.toIdTableKey(e)));
                        e = e.filter(e => !t.has(n(496282).L3.toIdTableKey(e)))
                    }
                    d && (e = [...e, ...l]), t = e, o = [...c, ...l]
                }
                return {
                    newMentionPointers: t,
                    newInputMentionPointers: o
                }
            }

            function v(e, t) {
                return (0, n(381453).n4)(e, t)
            }

            function _(e) {
                return !!e && ("workspace" === e.type || "teamspace" === e.type || "collection" === e.type || "page" === e.type)
            }

            function x(e) {
                let {
                    currentScopes: t,
                    scope: n,
                    isMultiScopeEnabled: o
                } = e, a = [];
                if ("everything" === n.type) a = [{
                    type: "everything"
                }];
                else if (o) {
                    let e = t.filter(e => "everything" !== e.type);
                    a = e.some(e => v(e, n)) ? e.filter(e => !v(e, n)) : "notion" === n.type ? [...e.filter(e => !_(e)), n] : _(n) ? [...e.filter(e => "notion" !== e.type), n] : [...e, n]
                } else a = [n];
                return 0 === a.length ? [{
                    type: "everything"
                }] : a
            }

            function k(e, t) {
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

            function C(e) {
                let {
                    token: t,
                    pointer: n,
                    spaceStore: l,
                    userStore: s
                } = e;
                if (!r().qXl(t)) return !1;
                for (let e of r().uPN(t))
                    if (n.table === i().oo9 && r().rie(e)) {
                        if (r().NcG(e) === n.id) return !0
                    } else if (n.table === i().evP && r().jIt(e)) {
                    let t = r().i$F(e);
                    if (t && t.id === n.id) return !0
                } else if (n.table === i().C0E && r().XkZ(e)) {
                    let t = r().vjW(e);
                    if (t && (0, a().ut)(t) && n.id === o().Lj || t && l && s && m({
                            spaceStore: l,
                            botId: t
                        }) === n.id) return !0
                }
                return !1
            }
        },
        441892: (e, t, n) => {
            e.exports = n.p + "46e349aec1d78e16.png"
        },
        445283: (e, t, n) => {
            n.d(t, {
                N: () => o
            });

            function o(e) {
                if ("avatar" === e) return n(616922).eQ;
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
                else return (0, n(722371).HB)(e)
            }
        },
        445872: (e, t, n) => {
            e.exports = n.p + "58cc418a06d8c43b.png"
        },
        448734: (e, t, n) => {
            n.d(t, {
                jh: () => h,
                wV: () => m,
                Ax: () => y
            });
            var o = n(296540);
            let a = n.p + "f3a1c2555bc7b26c.gif",
                i = n.p + "8ab52115da3e3fbd.gif",
                r = n.p + "160f5613d44c23ea.gif",
                l = n.p + "b68268645067ada1.gif",
                s = n.p + "fce2247087f1d227.gif",
                c = n.p + "896e2255367f2b04.gif";
            var d = n(474848);
            let u = {
                    dark: [n(146535), r, s],
                    light: [n(737497), l, c]
                },
                p = {
                    dark: [r, s],
                    light: [l, c]
                },
                f = new(n(839621)).O(1);

            function g({
                isDarkMode: e,
                onAssetChange: t,
                animationMode: o
            }) {
                let a = "minimal" === o ? p[e ? "dark" : "light"] : u[e ? "dark" : "light"],
                    i = Math.floor(Math.random() * a.length);
                f.enqueue(async () => {
                    t({
                        type: "animated",
                        asset: a[i]
                    }), await new Promise(e => setTimeout(e, 7e3)), t({
                        type: "static",
                        asset: n(200424)
                    })
                }).catch(e => {
                    console.error(`Error showing animated asset: ${e}`)
                })
            }

            function m(e) {
                let {
                    sizeVariant: t,
                    onMouseEnter: r,
                    animationMode: l = "normal"
                } = e, s = (0, n(960253).I)(() => {
                    let e = (0, n(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: n(632079).Tj.assistantCornerButtonBackground,
                            overflow: "hidden",
                            transform: "scaleX(var(--direction, 1))"
                        },
                        faceImg: {
                            height: e,
                            width: e,
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            WebkitTouchCallout: "none",
                            WebkitUserDrag: "none"
                        }
                    }
                }, [t]), [c, u] = (0, n(848135).B)(), p = function(e, t) {
                    let [r, l] = (0, o.useState)({
                        type: "static",
                        asset: n(200424)
                    }), s = "dark" === (0, n(960253).e)();
                    (0, o.useEffect)(() => {
                        let e = setInterval(() => {
                            g({
                                isDarkMode: s,
                                onAssetChange: l,
                                animationMode: t
                            })
                        }, 3e4);
                        return () => {
                            clearInterval(e), f.cancel()
                        }
                    }, [s, t]);
                    let c = (0, o.useMemo)(() => s ? a : i, [s]);
                    return (0, o.useMemo)(() => "animated" === r.type ? r.asset : e && "minimal" !== t && .1 >= Math.random() ? c : (e && g({
                        isDarkMode: s,
                        onAssetChange: l,
                        animationMode: t
                    }), r.asset), [c, r, s, e, t])
                }(u, l);
                return (0, d.jsx)("div", {
                    ref: c,
                    style: s.faceImgWrap,
                    onMouseEnter: r,
                    children: (0, d.jsx)("img", {
                        style: s.faceImg,
                        src: p,
                        alt: "Notion AI face"
                    })
                })
            }

            function h(e) {
                let {
                    sizeVariant: t
                } = e, o = (0, n(960253).I)(() => {
                    let e = (0, n(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: n(632079).Tj.assistantCornerButtonBackground,
                            overflow: "hidden",
                            transform: "scaleX(var(--direction, 1))",
                            WebkitUserDrag: "none"
                        },
                        faceImg: {
                            height: e,
                            width: e
                        }
                    }
                }, [t]), a = u["dark" === (0, n(960253).e)() ? "dark" : "light"][0];
                return (0, d.jsx)("div", {
                    style: o.faceImgWrap,
                    children: (0, d.jsx)("img", {
                        style: o.faceImg,
                        src: a,
                        alt: "Notion AI face"
                    })
                })
            }

            function y(e) {
                let {
                    variant: t,
                    shadowVariant: o = "strong",
                    cursorStyle: a,
                    ...i
                } = e, r = (0, n(960253).e)(), l = (0, n(960253).I)(() => {
                    let e = (0, n(445283).N)(t),
                        i = "dark" === r ? [n(632079).Tj.shadow.base.sm, `0 0 0 1px ${n(632079).Tj.border.secondaryTranslucent}`, "0 0.5px 0 0 rgba(255, 255, 255, 0.20) inset"] : [n(632079).Tj.shadow.base.md, `0 0 0 1px ${n(632079).Tj.border.secondaryTranslucent}`];
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: n(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === o && {
                                boxShadow: e >= 90 ? n(632079).Tj.shadowMDThickerOutline : n(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === o && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? n(632079).Tj.shadowSMThickerOutline : n(632079).Tj.shadow.outline.md
                            },
                            ..."notification" === o && {
                                boxShadow: i.join(", ")
                            },
                            overflow: "hidden",
                            ...a && {
                                cursor: a
                            },
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            WebkitTouchCallout: "none"
                        }
                    }
                }, [t, o, a, r]);
                return (0, d.jsx)("div", {
                    style: l.faceImgWrap,
                    children: (0, d.jsx)(m, {
                        sizeVariant: t,
                        ...i
                    })
                })
            }
        },
        448988: (e, t, n) => {
            n.d(t, {
                Wx: () => i,
                fM: () => o,
                sM: () => a
            });
            let o = new(n(815048)).O2("framer-motion", async () => await Promise.all([n.e(49806), n.e(79974), n.e(45414), n.e(37043)]).then(n.bind(n, 301716)));

            function a(e) {
                return e.useAnimation()
            }

            function i(e, ...t) {
                return e.useInView(...t)
            }
        },
        458364: (e, t, n) => {
            n.d(t, {
                x: () => r
            }), n(296540);
            var o = n(474848);
            let a = {
                    "baseball-cap": n(584758),
                    bow: n(313669),
                    cat: n(641085),
                    cherry: n(941670),
                    cowboy: n(161412),
                    crown: n(722784),
                    dog: n(965967),
                    duck: n(190462),
                    firefighter: n(124394),
                    flower: n(784836),
                    glasses: n(31461),
                    headphone: n(202151),
                    leaf: n(938989),
                    magician: n(550122),
                    mustache: n(546579),
                    paprika: n(368733),
                    pencil: n(303626),
                    propeller: n(58344),
                    "safety-hat": n(682759),
                    scarf: n(832338),
                    "seasonal-bat": n(8779),
                    "seasonal-demon": n(269515),
                    "seasonal-frankenstein": n(441892),
                    "seasonal-pumpkin": n(113174),
                    "seasonal-santa-hat": n(970878),
                    "seasonal-new-year": n(465707)
                },
                i = {
                    "baseball-cap": n(340916),
                    bow: n(279206),
                    cat: n(422550),
                    cherry: n(580899),
                    cowboy: n(251861),
                    crown: n(121421),
                    dog: n(528440),
                    duck: n(104455),
                    firefighter: n(498667),
                    flower: n(733785),
                    glasses: n(701743),
                    headphone: n(665008),
                    leaf: n(620842),
                    magician: n(625031),
                    mustache: n(445872),
                    paprika: n(386194),
                    pencil: n(390123),
                    propeller: n(783925),
                    "safety-hat": n(702404),
                    scarf: n(98303),
                    "seasonal-bat": n(688220),
                    "seasonal-demon": n(279728),
                    "seasonal-frankenstein": n(879817),
                    "seasonal-pumpkin": n(258527),
                    "seasonal-santa-hat": n(667115),
                    "seasonal-new-year": n(49396)
                };

            function r({
                accessory: e,
                variant: t = "large",
                shadowVariant: l,
                smallerFace: s,
                accessorySpeechBubblePlacement: c = "none",
                speechBubbleTextOverride: d,
                speechBubbleVerticalOffsetPx: u,
                speechBubbleHorizontalOffsetPx: p,
                animateDogAccessory: f = !0,
                speechBubbleTailCircleTop: g,
                speechBubbleTailCircleInsetInlineStartPx: m,
                ...h
            }) {
                let y = "dark" === (0, n(960253).e)(),
                    b = (0, n(445283).N)(t),
                    v = Math.round(1.5625 * b),
                    _ = (0, n(960253).I)(() => ({
                        container: {
                            position: "relative",
                            width: b,
                            height: b,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        faceWrapper: {
                            transform: s ? "scale(0.85)" : void 0
                        },
                        accessoryOverlay: {
                            position: "absolute",
                            width: v,
                            height: v,
                            objectFit: "contain",
                            pointerEvents: "none",
                            top: "50%",
                            transform: "translate(calc(var(--direction, 1) * -50%), -50%) scaleX(var(--direction, 1))",
                            insetInlineStart: "50%"
                        }
                    }), [b, v, s]),
                    x = e ? (y ? i : a)[e] : null;
                return (0, o.jsx)("div", { ...h,
                    children: (0, o.jsxs)("div", {
                        style: _.container,
                        children: [(0, o.jsx)("div", {
                            style: _.faceWrapper,
                            children: (0, o.jsx)(n(448734).Ax, {
                                variant: t,
                                animationMode: e ? "minimal" : "normal",
                                shadowVariant: l
                            })
                        }), "dog" === e ? (0, o.jsx)("div", {
                            style: _.accessoryOverlay,
                            children: (0, o.jsx)(n(503681).z, {
                                size: v,
                                speechBubblePlacement: c,
                                speechBubbleTextOverride: d,
                                speechBubbleVerticalOffsetPx: u,
                                speechBubbleHorizontalOffsetPx: p,
                                speechBubbleTailCircleTop: g,
                                speechBubbleTailCircleInsetInlineStartPx: m,
                                animated: f
                            })
                        }) : x ? (0, o.jsx)("img", {
                            src: x,
                            alt: `${e} accessory`,
                            style: _.accessoryOverlay
                        }) : void 0]
                    })
                })
            }
        },
        463226: (e, t, n) => {
            n.d(t, {
                DV: () => d,
                EQ: () => l,
                Mu: () => s,
                Nr: () => c,
                cP: () => a,
                m0: () => r,
                m2: () => o,
                s8: () => i
            }), n(898992), n(354520);
            let o = {
                "baseball-cap": "permanent",
                bow: "permanent",
                cat: "permanent",
                cherry: "permanent",
                cowboy: "permanent",
                crown: "permanent",
                dog: "unlockable",
                duck: "permanent",
                firefighter: "permanent",
                flower: "permanent",
                glasses: "permanent",
                headphone: "permanent",
                leaf: "permanent",
                magician: "permanent",
                mustache: "permanent",
                paprika: "permanent",
                pencil: "permanent",
                propeller: "permanent",
                "safety-hat": "permanent",
                scarf: "permanent",
                "seasonal-bat": "october25",
                "seasonal-demon": "october25",
                "seasonal-frankenstein": "october25",
                "seasonal-pumpkin": "october25",
                "seasonal-santa-hat": "december25",
                "seasonal-new-year": "january26"
            };

            function a(e) {
                let {
                    store: t,
                    from: o
                } = e;
                if (t.update(e => ({ ...e,
                        isOpen: !0,
                        openCount: e.openCount + 1,
                        from: o || "unknown"
                    })), e.shouldSetSeenPersonalizationSettingsModal) {
                    let t = n(728372).AppStoreSidebarSpaceViewStore.state;
                    t && (0, n(377796).createAndCommit)({
                        environment: e.environment,
                        cellTarget: {
                            spaceWithId: t.getSpaceId()
                        },
                        userAction: "AgentPersonalizationSettings.markSeen",
                        canUndo: !1,
                        perform: e => {
                            let o = t.getSettings() || {},
                                a = { ...o,
                                    agent_personalization_settings: { ...o.agent_personalization_settings || {},
                                        has_already_seen_personalization_settings_modal: !0
                                    }
                                };
                            n(380762).AG(t, e, a)
                        }
                    })
                }
            }

            function i(e) {
                let {
                    store: t
                } = e;
                t.update(e => ({ ...e,
                    isOpen: !1
                }))
            }

            function r(e) {
                let {
                    store: t
                } = e;
                return t.state.isOpen
            }

            function l(e) {
                let {
                    store: t
                } = e;
                return t.state.from || "unknown"
            }

            function s(e) {
                var t;
                let {
                    environment: o,
                    agentName: a,
                    customizationItems: i,
                    newPageIdToAdd: r,
                    contextPageId: l
                } = e, s = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!s) return;
                let c = null == (t = s.getSettings()) ? void 0 : t.agent_personalization_settings,
                    d = (null == c ? void 0 : c.recently_used_pages) || [];
                r && ((d = d.filter(e => e.page_id !== r)).unshift({
                    page_id: r,
                    used_at: Date.now()
                }), d = d.slice(0, 10));
                let u = {
                    name: a,
                    customization_items: i,
                    context_page_id: l,
                    recently_used_pages: d.length > 0 ? d : void 0,
                    has_already_seen_personalization_settings_modal: (null == c ? void 0 : c.has_already_seen_personalization_settings_modal) || !0
                };
                (0, n(795676).A)(u, c) || (0, n(377796).createAndCommit)({
                    environment: o,
                    cellTarget: {
                        spaceWithId: s.getSpaceId()
                    },
                    userAction: "AgentPersonalizationSettings.save",
                    canUndo: !0,
                    perform: e => {
                        let t = s.getSettings() || {},
                            a = { ...t,
                                agent_personalization_settings: { ...t.agent_personalization_settings || {},
                                    ...u
                                }
                            };
                        n(380762).AG(s, e, a);
                        let i = null == c ? void 0 : c.context_page_id;
                        if (void 0 !== i && i !== l) {
                            let t = new(n(970831)).B(o, {
                                table: n(832375).evP,
                                id: i
                            }).getPromptStore();
                            null != t && t.isDefined() && (0, n(173157).z)({
                                store: t,
                                data: {
                                    alive: !1
                                },
                                transaction: e
                            })
                        }
                        void 0 !== l && (t => {
                            let a = new(n(970831)).B(o, {
                                    table: n(832375).evP,
                                    id: t
                                }),
                                i = a.getSpaceId();
                            if (!i) return;
                            let r = a.getPromptStore();
                            if (r) {
                                if (r.isDefined()) return (0, n(173157).z)({
                                    store: r,
                                    data: {
                                        alive: !0,
                                        prompt_type: "instruction"
                                    },
                                    transaction: e
                                });
                                n(124937).vt({
                                    environment: o,
                                    table: n(832375).dod,
                                    args: {
                                        id: (0, n(986339).yW)(a.id),
                                        space_id: i,
                                        parent_id: a.id,
                                        parent_table: n(832375).evP,
                                        prompt_type: "instruction"
                                    },
                                    inMemoryRecordCache: a.inMemoryRecordCache,
                                    transaction: e
                                })
                            }
                        })(l)
                    }
                })
            }

            function c() {
                let e = (0, n(327785).D)();
                return (0, n(682985).K8)(() => {
                    let t = n(218744).default.getConfigKey("agent_seasonal_accessories", "batch"),
                        a = n(218744).default.getConfigKey("agent_seasonal_accessories", "batch_expiration_time"),
                        i = a && new Date(a) < new Date;
                    return n(485890).sy.filter(n => {
                        let a = o[n];
                        return "permanent" === a || ("unlockable" === a ? e.includes(n) : a === t && !i)
                    })
                }, [e])
            }

            function d(e) {
                let t = c();
                return (0, n(682985).K8)(() => {
                    var o;
                    let a = null == e ? void 0 : e.getSettings();
                    if (!a) return;
                    let i = a.agent_personalization_settings;
                    if (null != i && null != (o = i.customization_items) && o[0]) {
                        let e = i.customization_items[0];
                        if (t.includes(e)) return e
                    }
                    if (null == i ? void 0 : i.has_already_seen_personalization_settings_modal) return;
                    let r = n(218744).default.checkGate({
                            gateName: "adoption_enable_agent_personalization_phase_one",
                            disableExposureLogging: !0
                        }),
                        l = n(218744).default.checkGate({
                            gateName: "adoption_enable_agent_personalization_phase_two",
                            disableExposureLogging: !0
                        });
                    if (r) {
                        let e = n(218744).default.getEligibleGroup({
                            experimentId: "adoption_agent_random_personalization_bandit",
                            defaultGroup: "control"
                        });
                        if (!e) return;
                        let t = function(e) {
                            let {
                                variant: t
                            } = e, o = u[t];
                            if (!o) return;
                            let a = n(218744).default.getEligibleGroup({
                                experimentId: o
                            });
                            if (a && "control" !== a && a && n(485890).sy.includes(a)) return a
                        }({
                            variant: e
                        });
                        if (t) return t
                    } else if (l) {
                        let {
                            accessory: e
                        } = function() {
                            let e, t = n(218744).default.getEligibleGroup({
                                experimentId: "adoption_agent_long_running_bandit",
                                defaultGroup: "ineligible"
                            });
                            if ("test" === t) {
                                let t = n(218744).default.getEligibleGroup({
                                    experimentId: "adoption_agent_personalization_phase_two_long_running"
                                });
                                t && "control" !== t && (e = t)
                            }
                            return {
                                accessory: e,
                                variant: t
                            }
                        }();
                        if (e) return e
                    }
                }, [e, t])
            }
            let u = {
                control: void 0,
                group_one: "adoption_agent_personalization_phase_one_group_one",
                group_two: "adoption_agent_personalization_phase_one_group_two",
                group_three: "adoption_agent_personalization_phase_one_group_three",
                group_four: "adoption_agent_personalization_phase_one_group_four"
            }
        },
        465707: (e, t, n) => {
            e.exports = n.p + "c64bedded659e18d.png"
        },
        476743: (e, t, n) => {
            n.d(t, {
                a: () => o
            });

            function o() {
                return (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore)
            }
        },
        480916: (e, t, n) => {
            n.d(t, {
                j: () => i
            });
            var o = () => n(546605);
            class a extends o().Store {
                getInitialState() {
                    return {}
                }
            }
            let i = new a
        },
        485129: (e, t, n) => {
            n.d(t, {
                d: () => o
            }), n(581454);

            function o(e) {
                let {
                    teams: t
                } = e, o = e.spaceStore;
                return o ? t.map(({
                    id: e,
                    type: t,
                    membershipSummary: a
                }) => ({
                    store: n(681735).h.createChildStore(o, {
                        table: n(832375).yKj,
                        id: e
                    }),
                    type: t,
                    membershipSummary: a
                })) : []
            }
        },
        498667: (e, t, n) => {
            e.exports = n.p + "ebbfc682ffb9183b.png"
        },
        503473: (e, t, n) => {
            n.d(t, {
                j: () => r
            });
            var o = n(296540),
                a = n(474848);
            let i = {
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
                    tooltipStyle: c
                } = e, {
                    isSafari: d
                } = (0, n(533992).Y0)(), u = (0, o.useRef)(null), p = function(e) {
                    let [t, n] = (0, o.useState)(!1);
                    return (0, o.useEffect)(() => {
                        let {
                            current: t
                        } = e;
                        if (!t) return void n(!1);
                        let o = "ResizeObserver" in window ? new ResizeObserver(([e]) => {
                            n(e.target.scrollWidth > e.target.clientWidth)
                        }) : void 0;
                        return null == o || o.observe(t), () => null == o ? void 0 : o.unobserve(t)
                    }, []), t
                }(u);
                return (0, a.jsx)(n(51831).m, {
                    delayThreshold: 500,
                    placement: s,
                    textWrap: !0,
                    style: c,
                    overlayContainerZIndex: l,
                    forceVisibleState: !!p && void 0,
                    disableTooltip: d,
                    content: () => p ? t : void 0,
                    children: e => (0, a.jsx)("div", {
                        ref: u,
                        ...n(952687).A.props(i, r),
                        ...e,
                        children: t
                    })
                })
            }
        },
        503681: (e, t, n) => {
            n.d(t, {
                z: () => _
            });
            var o = n(296540);
            n(581454);
            var a = n(474848);
            let i = `
	animation-duration: 2s;
	animation-direction: alternate;
	animation-iteration-count: infinite;
	animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
`,
                r = "M84.2513 81.7395C88.977 82.4048 90.6717 77.9739 90.8562 75.5247C91.1236 73.7435 93.5045 77.4968 90.1838 81.7561C88.1114 84.4142 84.495 84.3517 82.7126 83.226C82.1051 82.9047 81.0102 81.2832 84.2513 81.7395Z",
                l = "M70.5719 72.9453C69.9099 76.0342 66.8682 80.1714 66.3343 81.996C66.193 82.4788 65.8919 84.6494 67.5925 85.3012C68.6496 85.7063 70.0486 85.2456 71.0672 83.8076C71.9661 82.5385 73.2389 80.3849 73.7254 78.8907",
                s = "M81.3674 80.6071C80.0096 80.6071 75.6271 81.1468 75.3813 83.6491C75.3069 84.406 75.897 85.2639 76.991 85.2639C80.7189 85.2639 83.586 85.2878 83.9051 85.2639C86.1871 85.093 86.7281 83.2789 86.6934 81.7783C86.634 79.2117 85.903 77.1869 84.9662 75.5C83.2121 72.3413 80.7365 70.3673 80.5986 68.2393",
                c = "M81.8804 67.393L82.5295 65.5811C83.4844 62.2994 81.8804 57.7899 80.228 55.9816C79.6109 55.3062 77.9062 53.833 75.3259 53.833C73.4755 53.833 71.7706 54.8378 70.9613 55.6264C69.6193 56.934 69.1684 58.8522 68.4948 60.2513C67.4927 62.3325 65.1729 61.6477 64.0865 63.9062C63.5091 64.9101 63.3667 67.0446 64.0868 68.3343C64.807 69.624 66.6161 70.4021 68.4948 70.7995C70.264 71.1737 71.5432 71.2337 72.9333 71.2337C73.7944 71.2252 75.5588 71.0894 77.3272 70.4021",
                d = "M66.9294 64.6895C66.9001 65.1717 66.656 65.5492 65.662 65.4888C64.668 65.4285 64.4714 65.0242 64.5007 64.542C64.53 64.0598 65.0974 63.702 65.768 63.7427C66.4387 63.7834 66.9586 64.2073 66.9294 64.6895Z",
                u = "M79.6816 66.979C79.6816 64.529 80.4154 60.3832 81.1518 57.416C83.6256 60.95 86.3042 66.884 83.3275 68.6685C81.504 69.7617 79.6816 69.0329 79.6816 66.979Z",
                p = "M72.2065 59.658C71.7961 59.6024 71.5075 59.231 71.5817 58.6829C71.6559 58.1348 72.0328 57.8536 72.4433 57.9091C72.8538 57.9647 73.1335 58.4013 73.0681 58.8842C73.0028 59.3671 72.617 59.7135 72.2065 59.658Z",
                f = "M75.7954 59.8435C75.3849 59.7879 75.0964 59.4166 75.1706 58.8685C75.2448 58.3204 75.6217 58.0391 76.0322 58.0947C76.4426 58.1503 76.7224 58.5868 76.657 59.0697C76.5916 59.5526 76.2059 59.8991 75.7954 59.8435Z",
                g = "M73.062 79.4326 C71.7367 81.3275 71.5151 81.617 71.1477 83.1804 C70.8243 84.5568 71.8802 85.8228 73.738 85.2791 C75.5959 84.7353 77.938 81.4043 77.938 79.4327 C77.938 79.4327 77.938 79.4327 77.938 79.4327",
                m = "M72.4372 80.6925C68.0273 84 73.4246 85.323 76.0274 84.4997C78.874 83.5992 81.1506 81.6677 81.1448 79.1513C81.1423 78.0631 80.9619 76.9652 80.9368 76.7693L72.5612 74.2937C72.4563 77.7978 72.5212 79.1973 72.4372 80.6925Z",
                h = "M80.9666 77.4694C80.4498 79.3203 80.3912 80.6835 80.4498 81.2046C80.7488 83.8633 78.4457 84.1225 74.5339 84.5623C70.1565 85.0545 69.7203 82.221 72.7191 80.4413C71.6821 78.44 72.4056 75.8018 72.9875 74.8239",
                y = `
	#agent-acc-dog-left-leg-fill {
		animation-name: agent-acc-dog-left-leg-fill;
		${i}
	}
	@keyframes agent-acc-dog-left-leg-fill {
		0%, 40% { d: path("M72.4372 80.6925C68.0273 84 73.4246 85.323 76.0274 84.4997C78.874 83.5992 81.1506 81.6677 81.1448 79.1513C81.1423 78.0631 80.9619 76.9652 80.9368 76.7693L72.5612 74.2937C72.4563 77.7978 72.5212 79.1973 72.4372 80.6925Z"); }
		60%, 100% { d: path("M67.4372 81.6925C63.0273 85 68.4246 86.323 71.0274 85.4997C73.874 84.5992 76.1506 82.6677 76.1448 80.1513C76.1423 79.0631 75.9619 77.9652 75.9368 77.7693L67.5612 75.2937C67.4563 78.7978 67.5212 80.1973 67.4372 81.6925Z"); }
	}

	#agent-acc-dog-left-leg-stroke {
		animation-name: agent-acc-dog-left-leg-stroke;
		${i}
	}
	@keyframes agent-acc-dog-left-leg-stroke {
		0%, 40% { d: path("M80.9666 77.4694C80.4498 79.3203 80.3912 80.6835 80.4498 81.2046C80.7488 83.8633 78.4457 84.1225 74.5339 84.5623C70.1565 85.0545 69.7203 82.221 72.7191 80.4413C71.6821 78.44 72.4056 75.8018 72.9875 74.8239"); }
		60%, 100% { d: path("M75.9666 78.4694C75.4498 80.3203 75.3912 81.6835 75.4498 82.2046C75.7488 84.8633 73.4457 85.1225 69.5339 85.5623C65.1565 86.0545 64.7203 83.221 67.7191 81.4413C66.6821 79.44 67.4056 76.8018 67.9875 75.8239"); }
	}

	#agent-acc-dog-body-fill {
		animation-name: agent-acc-dog-body-fill;
		${i}
	}
	@keyframes agent-acc-dog-body-fill {
		0%, 40% { d: path("M68.5167 78.823C69.8415 76.5999 69.839 74.928 70.6031 73.1034C71.1234 70.4713 72.2666 69.7739 71.7436 67.9773C71.2207 66.1807 77.0344 65.2132 80.0066 64.9541C79.9864 66.4045 80.3439 69.6312 81.9353 70.9346C83.4208 73.1034 86.8612 75.7498 86.6665 82.0341C86.62 83.5343 86.2068 84.9953 84.4783 85.2635C84.1621 85.3126 80.7189 85.2635 76.9909 85.2635C75.8969 85.2635 75.3068 84.4056 75.3812 83.6487L72.4044 82.6585C72.1072 83.286 71.0647 84.3211 70.5806 84.7602C69.2791 86.036 67.2704 85.6107 66.9509 84.2668C66.5687 82.6594 67.7553 80.1008 68.5167 78.823Z"); }
		60%, 100% { d: path("M81.0632 70.0344C77.2518 69.1088 71.6576 71.5318 71.3769 71.6722L64.9737 70.7318L64.8825 81.0367C62.5186 81.446 61.5576 81.9423 61.3013 84.2131C61.0669 86.2894 61.8662 87.6019 67.3859 87.1218C69.259 86.7053 72.5358 86.0087 74.566 85.6664C76.4228 86.1123 79.5177 85.6581 82.8882 85.1022C86.5194 84.5032 87.63 79.9392 87.474 78.1766C87.3805 74.6202 84.3388 70.8299 81.0632 70.0344Z"); }
	}

	#agent-acc-dog-left-hand-fill {
		animation-name: agent-acc-dog-left-hand-fill;
		${i}
	}
	@keyframes agent-acc-dog-left-hand-fill {
		0%, 40% { d: path("M70.6026 72.8877C70.0746 74.8362 69.6915 76.4536 68.3667 78.6767C67.6053 79.9545 65.9049 82.533 66.4449 84.2665C66.8557 85.5853 68.7731 86.0357 70.0746 84.7599C70.5587 84.3208 71.6012 83.2856 71.8984 82.6582Z"); }
		60%, 100% { d: path("M54.3039 83.5936C54.6481 80.5445 59.7873 79.9305 61.9469 79.7188C65.9916 80.4513 73.3327 82.3533 70.3394 84.1016C69.628 83.9999 64.1182 85.1602 61.4523 85.7531C55.6035 86.7059 54.0695 85.6699 54.3039 83.5936Z"); }
	}

	#agent-acc-dog-left-hand-stroke {
		animation-name: agent-acc-dog-left-hand-stroke;
		${i}
	}
	@keyframes agent-acc-dog-left-hand-stroke {
		0%, 40% { d: path("M70.5719 72.9453C69.9099 76.0342 66.8682 80.1714 66.3343 81.996C66.193 82.4788 65.8919 84.6494 67.5925 85.3012C68.6496 85.7063 70.0486 85.2456 71.0672 83.8076C71.9661 82.5385 73.2389 80.3849 73.7254 78.8907"); }
		60%, 100% { d: path("M65.3076 78.1101C62.2783 79.3049 58.5688 79.9167 56.2894 81.0063C55.4092 81.4271 53.5897 83.2138 54.3842 84.8525C54.9456 86.0103 56.4324 86.1452 58.1945 86.1452C59.8961 86.1452 63.4693 85.3624 65.7494 84.6478"); }
	}

	#agent-acc-dog-tail {
		animation-name: agent-acc-dog-tail;
		${i}
	}
	@keyframes agent-acc-dog-tail {
		0%, 40% { d: path("M84.2513 81.7395C88.977 82.4048 90.6717 77.9739 90.8562 75.5247C91.1236 73.7435 93.5045 77.4968 90.1838 81.7561C88.1114 84.4142 84.495 84.3517 82.7126 83.226C82.1051 82.9047 81.0102 81.2832 84.2513 81.7395Z"); }
		60%, 80%, 100% { d: path("M85.2796 79.255C90.0172 78.6799 90.5127 73.9619 90.0597 71.5479C89.8591 69.7579 93.1268 72.7709 91.016 77.7421C89.6987 80.8444 86.1884 81.7162 84.176 81.0879C83.5063 80.934 82.0305 79.6494 85.2796 79.255Z"); }
		70%, 90% { d: path("M85.7386 77.9554C90.0132 80.0775 93.0191 76.4074 93.9668 74.1415C94.7825 72.5356 95.8577 76.8483 91.363 79.8426C88.5579 81.7112 85.1459 80.5111 83.8096 78.8806C83.3345 78.3841 82.807 76.5 85.7386 77.9554Z"); }
	}

	#agent-acc-dog-right-hand-fill {
		animation-name: agent-acc-dog-right-hand-fill;
		${i}
	}
	@keyframes agent-acc-dog-right-hand-fill {
		0%, 40% { d: path("M71.1477 83.1804 C71.5151 81.6169 71.7367 81.3274 73.062 79.4325 L77.938 79.4326 C77.938 81.4043 75.5959 84.7353 73.738 85.2791 C71.8802 85.8228 70.8243 84.5568 71.1477 83.1804 C71.1477 83.1804 71.1477 83.1804 71.1477 83.1804"); }
		60%, 100% { d: path("M68.7864 80.4014 C68.5973 80.4149 67.5291 80.4608 66.5068 80.6378 C64.1429 81.047 61.3414 82.1238 61.0851 84.3946 C60.8507 86.4708 62.3848 87.5069 68.2335 86.5541 C69.6201 86.2457 71.776 85.7839 73.6259 85.4259 C73.6259 85.4259 73.6259 85.4259 73.6259 85.4259"); }
	}

	#agent-acc-dog-right-hand-stroke {
		animation-name: agent-acc-dog-right-hand-stroke;
		${i}
	}
	@keyframes agent-acc-dog-right-hand-stroke {
		0%, 40% { d: path("M72.7738 77.2686C71.6065 78.9254 70.1924 81.5438 69.9469 82.3827C69.7863 82.9317 69.6719 84.857 71.6065 85.2869C72.9594 85.5875 74.7942 85.2229 75.9524 83.5878C76.9746 82.1448 78.4219 79.6959 78.9751 77.9969"); }
		60%, 100% { d: path("M68.7492 80.3111C65.1668 80.5556 63.4526 81.3209 62.2581 82.3619C61.2976 83.199 60.324 85.0797 61.6154 86.2501C62.5184 87.0686 65.4128 86.9896 67.1572 86.7404C69.3004 86.4343 71.5259 85.8499 73.5463 85.084"); }
	}

	#agent-acc-dog-back-stroke {
		animation-name: agent-acc-dog-back-stroke;
		${i}
	}
	@keyframes agent-acc-dog-back-stroke {
		0%, 40% { d: path("M81.3674 80.6071C80.0096 80.6071 75.6271 81.1468 75.3813 83.6491C75.3069 84.406 75.897 85.2639 76.991 85.2639C80.7189 85.2639 83.586 85.2878 83.9051 85.2639C86.1871 85.093 86.7281 83.2789 86.6934 81.7783C86.634 79.2117 85.903 77.1869 84.9662 75.5C83.2121 72.3413 80.7365 70.3673 80.5986 68.2393"); }
		60%, 100% { d: path("M80,75C78.1223,75.4266 76.8976,78.4574 76.8976,80.5163C74.5984,81.1775 72,83.5 74,85.5C75.3503,86.8503 79.5168,85.6581 82.8873,85.1022C86.5185,84.5032 87.6291,79.9392 87.4731,78.1766C87.3795,74.6202 84.3379,70.8299 81.0623,70.0344C77.2509,69.1088 71.6567,71.5318 71.376,71.6722"); }
	}

	#agent-acc-dog-head-stroke {
		animation-name: agent-acc-dog-head-stroke;
		${i}
	}
	@keyframes agent-acc-dog-head-stroke {
		0%, 40% { d: path("M81.8804 67.393L82.5295 65.5811C83.4844 62.2994 81.8804 57.7899 80.228 55.9816C79.6109 55.3062 77.9062 53.833 75.3259 53.833C73.4755 53.833 71.7706 54.8378 70.9613 55.6264C69.6193 56.934 69.1684 58.8522 68.4948 60.2513C67.4927 62.3325 65.1729 61.6477 64.0865 63.9062C63.5091 64.9101 63.3667 67.0446 64.0868 68.3343C64.807 69.624 66.6161 70.4021 68.4948 70.7995C70.264 71.1737 71.5432 71.2337 72.9333 71.2337C73.7944 71.2252 75.5588 71.0894 77.3272 70.4021"); }
		60%, 100% { d: path("M72.9796 76.7831L73.4539 74.9874C74.1006 71.7533 72.1856 67.5504 70.4473 65.9484C69.7982 65.3501 68.0374 64.0747 65.5566 64.2881C63.7775 64.4411 62.2214 65.5481 61.5084 66.3732C60.3263 67.7413 60.0514 69.6228 59.5194 71.0237C58.7281 73.1075 56.441 72.6409 55.5832 74.9021C55.1111 75.9151 55.1507 77.979 55.9497 79.1594C56.7487 80.3398 58.5525 80.9383 60.3916 81.165C62.1236 81.3785 63.3584 81.3304 64.695 81.2154C65.2965 81.1577 66.3518 80.9958 67.5148 80.6013"); }
	}

	#agent-acc-dog-nose {
		animation-name: agent-acc-dog-nose;
		${i}
	}
	@keyframes agent-acc-dog-nose {
		0%, 40% { d: path("M66.9294 64.6895C66.9001 65.1717 66.656 65.5492 65.662 65.4888C64.668 65.4285 64.4714 65.0242 64.5007 64.542C64.53 64.0598 65.0974 63.702 65.768 63.7427C66.4387 63.7834 66.9586 64.2073 66.9294 64.6895Z"); }
		60%, 100% { d: path("M58.5402 76.2138C58.4739 76.628 58.1564 76.9215 56.9668 76.7309C55.7772 76.5402 55.5673 76.1622 55.6337 75.748C55.7001 75.3338 56.4046 75.1023 57.2072 75.231C58.0098 75.3596 58.6066 75.7996 58.5402 76.2138Z"); }
	}

	#agent-acc-dog-right-ear {
		animation-name: agent-acc-dog-right-ear;
		${i}
	}
	@keyframes agent-acc-dog-right-ear {
		0%, 40% { d: path("M79.6816 66.979C79.6816 64.529 80.4154 60.3832 81.1518 57.416C83.6256 60.95 86.3042 66.884 83.3275 68.6685C81.504 69.7617 79.6816 69.0329 79.6816 66.979Z"); }
		60%, 100% { d: path("M70.8327 76.5672C70.6302 74.2117 70.9928 70.1651 71.4555 67.2515C74.1262 70.4446 77.1922 75.9282 74.4778 77.89C72.815 79.0918 71.0026 78.5418 70.8327 76.5672Z"); }
	}

	#agent-acc-dog-left-eye {
		animation-name: agent-acc-dog-left-eye;
		${i}
	}
	@keyframes agent-acc-dog-left-eye {
		0%, 40% { d: path("M72.2065 59.658C71.7961 59.6024 71.5075 59.231 71.5817 58.6829C71.6559 58.1348 72.0328 57.8536 72.4433 57.9091C72.8538 57.9647 73.1335 58.4013 73.0681 58.8842C73.0028 59.3671 72.617 59.7135 72.2065 59.658Z"); }
		60%, 100% { d: path("M63.1777 70.9001C62.6811 70.8759 62.2995 70.4261 62.3347 69.7036C62.37 68.981 62.7936 68.5705 63.2902 68.5948C63.7869 68.619 64.1643 69.1547 64.1332 69.7913C64.1021 70.4279 63.6743 70.9244 63.1777 70.9001Z"); }
	}

	#agent-acc-dog-right-eye {
		animation-name: agent-acc-dog-right-eye;
		${i}
	}
	@keyframes agent-acc-dog-right-eye {
		0%, 40% { d: path("M75.7954 59.8435C75.3849 59.7879 75.0964 59.4166 75.1706 58.8685C75.2448 58.3204 75.6217 58.0391 76.0322 58.0947C76.4426 58.1503 76.7224 58.5868 76.657 59.0697C76.5916 59.5526 76.2059 59.8991 75.7954 59.8435Z"); }
		60%, 100% { d: path("M66.6933 71.2234C66.1967 71.1991 65.8151 70.7493 65.8504 70.0268C65.8856 69.3043 66.3092 68.8938 66.8059 68.918C67.3025 68.9423 67.6799 69.478 67.6488 70.1146C67.6177 70.7512 67.19 71.2476 66.6933 71.2234Z"); }
	}

	/* Dark-mode outline duplicates */
	#agent-acc-dog-tail-outline {
		animation-name: agent-acc-dog-tail;
		${i}
	}
	#agent-acc-dog-left-hand-stroke-outline {
		animation-name: agent-acc-dog-left-hand-stroke;
		${i}
	}
	#agent-acc-dog-back-stroke-outline {
		animation-name: agent-acc-dog-back-stroke;
		${i}
	}
	#agent-acc-dog-head-stroke-outline {
		animation-name: agent-acc-dog-head-stroke;
		${i}
	}
	#agent-acc-dog-nose-outline {
		animation-name: agent-acc-dog-nose;
		${i}
	}
	#agent-acc-dog-right-ear-outline {
		animation-name: agent-acc-dog-right-ear;
		${i}
	}
	#agent-acc-dog-left-eye-outline {
		animation-name: agent-acc-dog-left-eye;
		${i}
	}
	#agent-acc-dog-right-eye-outline {
		animation-name: agent-acc-dog-right-eye;
		${i}
	}
	#agent-acc-dog-right-hand-stroke-outline {
		animation-name: agent-acc-dog-right-hand-stroke;
		${i}
	}
	#agent-acc-dog-left-leg-fill-outline {
		animation-name: agent-acc-dog-left-leg-fill;
		${i}
	}
	#agent-acc-dog-left-leg-stroke-outline {
		animation-name: agent-acc-dog-left-leg-stroke;
		${i}
	}
`,
                b = {
                    position: "relative",
                    pointerEvents: "none"
                },
                v = {
                    pointerEvents: "visiblePainted"
                };

            function _({
                size: e,
                speechBubblePlacement: t,
                speechBubbleTextOverride: i,
                speechBubbleVerticalOffsetPx: x = 20,
                speechBubbleHorizontalOffsetPx: k = 12,
                speechBubbleTailCircleTop: C,
                speechBubbleTailCircleInsetInlineStartPx: w,
                animated: I = !0
            }) {
                let S = "dark" === (0, n(960253).e)() ? "#d3d3d3" : "white",
                    {
                        showBubble: M,
                        isHiding: A,
                        currentPhrase: j,
                        handleMouseEnter: T,
                        handleMouseLeave: B
                    } = function(e, t) {
                        let a = (0, n(109939).tz)(),
                            i = n(189760).B.dog,
                            r = a.locale.startsWith("en"),
                            l = "none" !== e && !!i && r,
                            s = (0, o.useMemo)(() => t ? [t] : i ? (0, n(763230).k4)(Object.values(i).map(e => a.formatMessage(e))) : [], [a, i, t]),
                            [c, d] = (0, o.useState)(!1),
                            [u, p] = (0, o.useState)(!1),
                            f = (0, o.useRef)(0),
                            [g, m] = (0, o.useState)(""),
                            h = (0, o.useRef)(),
                            y = (0, o.useCallback)(() => {
                                l && 0 !== s.length && (clearTimeout(h.current), m(s[f.current % s.length]), f.current++, p(!1), d(!0))
                            }, [s, l]),
                            b = (0, o.useCallback)(() => {
                                l && (p(!0), h.current = setTimeout(() => {
                                    d(!1), p(!1)
                                }, 150))
                            }, [l]);
                        return {
                            showBubble: l && (c || u),
                            isHiding: u,
                            currentPhrase: g,
                            handleMouseEnter: l ? y : void 0,
                            handleMouseLeave: l ? b : void 0
                        }
                    }(t, i),
                    D = "none" !== t ? t : "topRight";
                return (0, a.jsxs)("div", {
                    style: b,
                    children: [M ? (0, a.jsx)(n(679416).P, {
                        placement: D,
                        animated: I,
                        isHiding: A,
                        verticalOffsetPx: x,
                        horizontalOffsetPx: k,
                        tailCircleTop: C,
                        tailCircleInsetInlineStartPx: w,
                        children: j
                    }) : void 0, I ? (0, a.jsx)("style", {
                        children: y
                    }) : void 0, (0, a.jsxs)("svg", {
                        width: e,
                        height: e,
                        viewBox: "0 0 100 100",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: v,
                        onMouseEnter: T,
                        onMouseLeave: B,
                        children: [(0, a.jsxs)("g", {
                            children: [(0, a.jsx)("path", {
                                id: "agent-acc-dog-tail-outline",
                                d: r,
                                stroke: S,
                                strokeWidth: "4"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-left-leg-fill-outline",
                                d: m,
                                stroke: S,
                                strokeWidth: "4"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-left-leg-stroke-outline",
                                d: h,
                                stroke: S,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-left-hand-stroke-outline",
                                d: l,
                                stroke: S,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-back-stroke-outline",
                                d: s,
                                stroke: S,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-head-stroke-outline",
                                d: c,
                                stroke: S,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-nose-outline",
                                d: d,
                                stroke: S,
                                strokeWidth: "3"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-right-ear-outline",
                                d: u,
                                stroke: S,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-left-eye-outline",
                                d: p,
                                stroke: S,
                                strokeWidth: "3"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-right-eye-outline",
                                d: f,
                                stroke: S,
                                strokeWidth: "3"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-right-hand-stroke-outline",
                                d: g,
                                stroke: S,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            })]
                        }), (0, a.jsxs)("g", {
                            children: [(0, a.jsx)("path", {
                                id: "agent-acc-dog-tail",
                                d: r,
                                fill: "black"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-left-leg-fill",
                                d: m,
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-left-leg-stroke",
                                d: h,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-body-fill",
                                d: "M68.5167 78.823C69.8415 76.5999 69.839 74.928 70.6031 73.1034C71.1234 70.4713 72.2666 69.7739 71.7436 67.9773C71.2207 66.1807 77.0344 65.2132 80.0066 64.9541C79.9864 66.4045 80.3439 69.6312 81.9353 70.9346C83.4208 73.1034 86.8612 75.7498 86.6665 82.0341C86.62 83.5343 86.2068 84.9953 84.4783 85.2635C84.1621 85.3126 80.7189 85.2635 76.9909 85.2635C75.8969 85.2635 75.3068 84.4056 75.3812 83.6487L72.4044 82.6585C72.1072 83.286 71.0647 84.3211 70.5806 84.7602C69.2791 86.036 67.2704 85.6107 66.9509 84.2668C66.5687 82.6594 67.7553 80.1008 68.5167 78.823Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-left-hand-stroke",
                                d: l,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-back-stroke",
                                d: s,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-head-stroke",
                                d: c,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-nose",
                                d: d,
                                fill: "black",
                                stroke: "black"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-right-ear",
                                d: u,
                                fill: "black",
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-left-eye",
                                d: p,
                                fill: "black",
                                stroke: "black",
                                strokeWidth: "0.5"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-right-eye",
                                d: f,
                                fill: "black",
                                stroke: "black",
                                strokeWidth: "0.5"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-right-hand-stroke",
                                d: g,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                fill: "white"
                            })]
                        })]
                    })]
                })
            }
        },
        528440: (e, t, n) => {
            e.exports = n.p + "d15ce47ef6ddf83d.png"
        },
        530500: (e, t, n) => {
            n.d(t, {
                A: () => s
            }), n(898992), n(354520), n(581454);
            var o = n(296540),
                a = () => n(124858),
                i = n(474848);

            function r(e) {
                return (0, i.jsx)(n(844565).A, { ...e
                })
            }
            let l = n(546605).Store.createClass(25, {
                name: "limitStore"
            });

            function s({
                topBorder: e,
                context: t,
                onAccept: c,
                onFocus: d,
                empty: u,
                keyboardPriority: p,
                disableKeyboard: f,
                initialFocus: g,
                onEmptyEnter: m,
                comboboxProps: h,
                useLimit: y,
                filter: b,
                sections: v,
                menuListStore: _,
                resetInitialFocusOnSectionChangeAlways: x,
                resetFocusOnMouseOut: k,
                role: C,
                showNoResultsMessage: w,
                onFooterEnter: I,
                filterSections: S,
                flattenSectionsOnSearch: M,
                renderItemStyles: A,
                shouldShowBlockTypeTitle: j
            }) {
                let T = (0, n(682985).uB)(void 0, l),
                    B = (0, n(682985).uB)(_, n(419110).$),
                    D = !!(M && b),
                    {
                        visibleActionSections: E,
                        actionsCount: L,
                        allActionSections: P,
                        flatActions: V
                    } = (0, n(682985).K8)(() => {
                        let e = b && S ? S : v;
                        if (D) {
                            let o = (0, n(173231).Oe)({
                                sections: e,
                                context: t,
                                query: b || "",
                                shouldShowBlockTypeTitle: j
                            });
                            return {
                                visibleActionSections: [],
                                actionsCount: o.length,
                                allActionSections: [],
                                flatActions: y ? o.slice(0, T.state) : o
                            }
                        }
                        let o = (0, n(173231).js)({
                                sections: e,
                                context: t,
                                query: b || "",
                                shouldShowBlockTypeTitle: j
                            }),
                            a = 0;
                        for (let e of o) a += e.actions.length;
                        return {
                            visibleActionSections: y ? (0, n(173231).Le)(o, T.state) : o,
                            actionsCount: a,
                            allActionSections: o,
                            flatActions: void 0
                        }
                    }, [v, t, b, y, T, S, j, D]);
                (0, o.useEffect)(() => {
                    n(764615).Ay.state.open && n(764615).rA.setState(0 === L)
                }, [L]);
                let z = (0, o.useRef)(b),
                    N = (0, o.useCallback)(e => {
                        e < 200 && T.state < L && T.setState(T.state + 25)
                    }, [T, L]),
                    R = (0, o.useMemo)(() => {
                        let e = new Map;
                        for (let t of P)
                            if (t.key !== a().IZ)
                                for (let n of t.actions) e.set(n.key, t.title);
                        return e
                    }, [P]),
                    {
                        menuItemActionMap: O,
                        menuItemSectionKeyMap: F,
                        menuListSections: W
                    } = (0, o.useMemo)(() => {
                        let o = new Map,
                            l = new Map;

                        function s(e, i) {
                            let r = null == i ? void 0 : i.key.toString();
                            e.lazyDependencyKeys && (0, n(968864).G)(...e.lazyDependencyKeys);
                            let s = {
                                key: e.key,
                                render: (n, o) => {
                                    let l = (null == i ? void 0 : i.key) === a().IZ ? R.get(e.key) : null == i ? void 0 : i.title,
                                        s = D || (null == i ? void 0 : i.key) === a().IZ;
                                    return e.render(n, t, {
                                        onAccept: (e, t, n) => {
                                            null == c || c(e, t, n, r)
                                        },
                                        onFocus: o.onFocus,
                                        sectionTitle: l,
                                        extendItemTitle: s,
                                        styles: A
                                    })
                                },
                                action: ({
                                    event: n
                                }) => {
                                    e.action(t, n)
                                }
                            };
                            return o.set(s, e), l.set(s, r), s
                        }
                        return D ? {
                            menuItemActionMap: o,
                            menuItemSectionKeyMap: l,
                            menuListSections: [{
                                key: "flat",
                                render: e => (0, i.jsx)(n(844565).A, { ...e,
                                    topBorder: !1,
                                    hideTitle: !0
                                }),
                                items: (null == V ? void 0 : V.map(e => s(e.action, e.section))) ? ? []
                            }]
                        } : {
                            menuItemActionMap: o,
                            menuItemSectionKeyMap: l,
                            menuListSections: E.map(t => {
                                let n = t.render ? ? r;
                                return {
                                    key: t.key,
                                    render: o => n({ ...o,
                                        topBorder: 0 !== o.index || !!e,
                                        title: t.title
                                    }),
                                    items: t.actions.map(e => s(e, t))
                                }
                            })
                        }
                    }, [E, D, e, R, t, A, c, V]);
                (0, o.useEffect)(() => {
                    if (b !== z.current && 0 === g) {
                        if (z.current = b, I && 0 === L) return n(163657).rd({
                            store: B
                        });
                        B.setState({ ...B.state,
                            focus: {
                                section: 0,
                                indexLocal: 0,
                                indexGlobal: 0,
                                footerFocused: !1
                            }
                        })
                    }
                }, [b, g, L, B, I]);
                let $ = (0, o.useCallback)((e, n) => {
                        if (c) {
                            let a = O.get(e),
                                i = F.get(e);
                            if (a) {
                                var o;
                                if (null != (o = a.isDisabled) && o.call(a, t)) return;
                                c(a, t, n.event, i, n.index)
                            }
                        }
                    }, [c, t, O, F]),
                    H = (0, o.useCallback)(e => {
                        let o;
                        if (e.indexLocal && (o = n(130711).SG(e.indexLocal, W)), e.indexGlobal) {
                            var a;
                            o = null == (a = n(130711).e7(e.indexGlobal, W)) ? void 0 : a.item
                        }
                        if (!o) return;
                        let i = O.get(o),
                            r = F.get(o);
                        i && (null == d || d(i, t, r))
                    }, [O, F, d, W, t]),
                    G = L > 0;
                return (0, i.jsxs)(i.Fragment, {
                    children: [w && !G ? (0, i.jsx)(n(844565).A, {
                        children: (0, i.jsx)(n(498341).u, {
                            title: u || (0, i.jsx)(n(109939).sA, {
                                id: "action.search.noResults",
                                defaultMessage: "No results"
                            })
                        })
                    }) : void 0, (0, i.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        role: C,
                        priority: p,
                        store: B,
                        disableKeyboard: f,
                        sections: W,
                        initialFocus: g,
                        onEmptyEnter: m,
                        onAccept: $,
                        onFocus: H,
                        comboboxProps: h,
                        resetInitialFocusOnSectionChangeAlways: x,
                        resetFocusOnMouseOut: k,
                        onFooterEnter: I
                    }), y ? (0, i.jsx)(n(636255).A, {
                        onChange: N
                    }) : void 0]
                })
            }
        },
        540336: (e, t, n) => {
            n.d(t, {
                Jy: () => h,
                LZ: () => y,
                vU: () => m
            }), n(581454);
            var o = n(296540),
                a = n(474848);
            let i = {
                    kORKVm: "xryxfnj",
                    kXHlph: "xw2csxc",
                    k1xSpc: "x78zum5",
                    kzqmXN: "xh8yej3",
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                r = {
                    kGVxlE: "xx4f2qb",
                    $$css: !0
                },
                l = {
                    kGuDYH: "xif65rj",
                    kZCmMZ: "xmzvs34",
                    kwRFfy: "xf159sx",
                    kY2c9j: "x1vjfegm",
                    $$css: !0
                },
                s = {
                    kGuDYH: "x1j61zf2",
                    kLKAdn: "x1nn3v0j",
                    kY2c9j: "xhtitgo",
                    kZKoxP: "xn3w4p2",
                    kC7eKd: "x1mmz80m",
                    $$css: !0
                },
                c = {
                    kZCmMZ: "xf7dkkf",
                    kwRFfy: "xv54qhq",
                    $$css: !0
                },
                d = {
                    kLKAdn: "x1yrsyyn",
                    kGO01o: "x10b6aqq",
                    khDVqt: "xuxw1ft",
                    k7Eaqz: "xeuugli",
                    kmuXW: "x2lah0s",
                    kMwMTN: "x1b8rd1j",
                    $$css: !0
                },
                u = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                p = {
                    k4EQJz: "xkaiwgt",
                    kVAEAm: "x10l6tqk",
                    krVfgx: "x1ey2m1c",
                    kLqNvP: "xrotz4w",
                    kt4wiu: "x11dcrhx",
                    $$css: !0
                },
                f = {
                    k1xSpc: "x78zum5",
                    kzQI83: "x1iyjqo2",
                    $$css: !0
                },
                g = {
                    selectedTab: {
                        color: n(632079).Tj.text.primary
                    }
                };

            function m(e, t) {
                if (e) return `${e}-tab-${t}`
            }

            function h(e, t) {
                if (e) return `${e}-tabpanel-${t}`
            }
            let y = o.memo(function({
                tabs: e,
                selectedIndex: t,
                onChange: y,
                right: b,
                style: v,
                tabStyle: _,
                tabTitleStyle: x,
                selectedTabTitleStyle: k,
                tabBorderStyle: C,
                selectedTabStyle: w,
                readOnly: I,
                hideTabBorder: S,
                idPrefix: M
            }) {
                let A = (0, o.useContext)(n(649476).xu),
                    j = (0, n(616844).Y5)("left", 16),
                    T = (0, n(616844).Y5)("right", 16),
                    B = A.menuType === n(649476).gu.Popup;
                return (0, a.jsxs)("div", { ...n(952687).A.props(i, !S && r, n(986939).A.isMobile ? [s, B ? c : ((e, t) => [{
                        kZCmMZ: null != e ? "xnvo3vl" : e,
                        kwRFfy: null != t ? "x120eax6" : t,
                        $$css: !0
                    }, {
                        "--x-paddingInlineStart": "number" == typeof e ? e + "px" : null != e ? e : void 0,
                        "--x-paddingInlineEnd": "number" == typeof t ? t + "px" : null != t ? t : void 0
                    }])(j, T)] : l, v, {
                        $$css: !0,
                        className: "hide-scrollbar"
                    }),
                    children: [(0, a.jsx)("div", {
                        role: "tablist",
                        ...n(952687).A.props(f, "object" == typeof v && v && "flexDirection" in v && {
                            flexDirection: v.flexDirection
                        }),
                        children: e.map((e, i) => {
                            let r = i === t;
                            return (0, a.jsx)(o.Fragment, {
                                children: (0, a.jsxs)("div", { ...n(952687).A.props(d, _, r && u, r && g.selectedTab, r && w),
                                    children: [(0, a.jsx)(n(988022).p, {
                                        role: "tab",
                                        style: [x, r && k],
                                        onClick: () => y(i),
                                        disabled: I,
                                        "aria-selected": r,
                                        id: m(M, i),
                                        "aria-controls": h(M, i),
                                        colorPalette: r ? void 0 : "gray",
                                        children: e
                                    }), r ? (0, a.jsx)("div", { ...n(952687).A.props(p, C)
                                    }) : void 0]
                                }, `tabButton-${i}`)
                            }, i)
                        })
                    }), b ? (0, a.jsx)("div", {
                        className: "x1iyjqo2 x78zum5 x6s0dn4 x13a6bvl x1b8rd1j",
                        children: b
                    }) : void 0]
                })
            })
        },
        543588: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(296540);
            var o = n(474848);
            let a = function(e) {
                let t = {
                        marginBottom: 4
                    },
                    {
                        title: a,
                        marginAfter: i,
                        desktopStyle: r,
                        desktopTitleStyle: l,
                        ...s
                    } = e,
                    c = (i || r) && { ...i && {
                            marginBottom: 16
                        },
                        ...r
                    },
                    d = l ? { ...t,
                        ...l
                    } : t;
                return (0, o.jsx)(n(844565).A, {
                    disableDesktopPadding: !0,
                    enableActionSheetTitle: !0,
                    desktopStyle: c,
                    desktopTitleStyle: d,
                    shouldShowBottomDivider: !1,
                    title: a,
                    ...s
                })
            }
        },
        546579: (e, t, n) => {
            e.exports = n.p + "a5098827bba61d4d.png"
        },
        550122: (e, t, n) => {
            e.exports = n.p + "176441c5ba020951.png"
        },
        555583: (e, t, n) => {
            n.d(t, {
                n: () => a
            }), n(898992), n(354520);
            var o = n(296540);

            function a({
                useRedesigned: e
            } = {
                useRedesigned: !1
            }) {
                let t = (0, n(109939).tz)(),
                    i = (0, n(599412).H)(t),
                    r = (0, n(972740).L)(),
                    l = (0, n(682985).K8)(() => (null == r ? void 0 : r.canAdmin()) ? ? !1, [r]),
                    s = (0, n(871086).w)(),
                    c = (0, o.useMemo)(() => e ? n(411106).p : (0, n(411106).L)(l, i), [l, i, e]),
                    d = (0, o.useMemo)(() => Object.entries(s ? ? {}).filter(([e]) => (0, n(722371).Xk)(c, e)).length, [s, c]),
                    u = c.length,
                    p = u > 0 ? d / u : 0,
                    f = (0, o.useMemo)(() => new Intl.NumberFormat(i, {
                        style: "percent"
                    }).format(p), [p, i]);
                return {
                    progress: p,
                    progressDisplay: f,
                    completedCount: d,
                    totalCount: u,
                    completedItems: s ? ? {}
                }
            }
        },
        559096: (e, t, n) => {
            n.r(t), n.d(t, {
                loadLocalSubtree: () => l
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(803949), n(581454);
            var o = () => n(986939),
                a = () => n(430733),
                i = () => n(832375),
                r = () => n(247438);

            function l(e) {
                let {
                    environment: t,
                    blockId: l,
                    inMemoryRecordCache: s,
                    options: c
                } = e, d = t.currentUser.id, u = n(412951).RecordMap.create(), p = new Set, f = [{
                    pointer: {
                        table: i().evP,
                        id: l
                    },
                    parentId: "doesn't matter"
                }];
                for (; f.length > 0;) {
                    let e = f.shift();
                    if (!e || p.has(e.pointer.id)) continue;
                    let t = l === e.pointer.id,
                        g = function(e) {
                            let t, {
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: c,
                                currentUserId: d,
                                cursors: u,
                                cursor: p,
                                options: f,
                                isRootRequest: g
                            } = e;
                            return (0, n(496282).Yt)(l, i().evP) ? t = function(e) {
                                var t, l, s, c, d, u, p, f;
                                let {
                                    pointer: g,
                                    recordMap: m,
                                    inMemoryRecordCache: h,
                                    currentUserId: y,
                                    cursors: b,
                                    cursor: v,
                                    options: _,
                                    isRootRequest: x
                                } = e, k = h.getRecord({
                                    pointer: g,
                                    userId: y
                                }), C = null == k ? void 0 : k.value;
                                if (!C) return _.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: g
                                } : void 0;
                                let w = _.excludeCrdtData ? n(877308).ir(C) : C;
                                if (_.includeLegacyTransclusionBlockValues) {
                                    if (!x && w.parent_id !== v.parentId && !v.isBlockContentChild) return
                                } else if (!x && w.parent_id !== v.parentId) return;
                                if (w.type === n(955630).xd.externalObjectInstance && !_.allowCopyExternalObjectInstances) return {
                                    type: "error",
                                    reason: "encountered_external_object_instance",
                                    pointer: g
                                };
                                if (m.setValue(g, w), !_.skipNavigableChildren) {
                                    for (let e of n(993189).Bj6.fromBlock(w).getCollectionPointers()) {
                                        let t = h.getRecord({
                                            pointer: e,
                                            userId: y
                                        });
                                        if (t) {
                                            if ((null == (d = t.value) ? void 0 : d.parent_table) !== i().evP || (null == (u = t.value) ? void 0 : u.parent_id) !== w.id) continue
                                        } else {
                                            if (_.requireFullSubtree) return {
                                                type: "error",
                                                reason: "missing_record",
                                                pointer: e
                                            };
                                            continue
                                        }
                                        b.push({
                                            pointer: e,
                                            parentId: w.id
                                        })
                                    }
                                    if (w.view_ids)
                                        for (let e of w.view_ids) b.push({
                                            pointer: {
                                                table: i().Gy1,
                                                id: e,
                                                spaceId: w.space_id
                                            },
                                            parentId: w.id
                                        })
                                }
                                if (!_.skipBlockContent && (!_.skipTransclusionContainerChildren || "transclusion_container" !== w.type) && (!_.skipNavigableChildren || !(0, n(955630).$I)(w.type)))
                                    for (let e of n(993189).Bj6.fromBlock(w).getRenderableContentIds()) b.push({
                                        pointer: {
                                            table: i().evP,
                                            id: e
                                        },
                                        parentId: w.id,
                                        isBlockContentChild: !0
                                    });
                                for (let e of n(993189).Bj6.fromBlock(w).getNonContentChildren()) b.push({
                                    pointer: {
                                        table: i().evP,
                                        id: e
                                    },
                                    parentId: w.id,
                                    isBlockContentChild: !0
                                });
                                if (w.type === n(955630).xd.externalObjectInstance)
                                    for (let e of (null == (p = w.format) ? void 0 : p.related_external_object_uris_to_instance_ids) && Object.values(null == (f = w.format) ? void 0 : f.related_external_object_uris_to_instance_ids) || []) b.push({
                                        pointer: {
                                            table: i().evP,
                                            id: e,
                                            spaceId: w.space_id
                                        },
                                        parentId: w.id
                                    });
                                if (!_.skipNavigableChildren && w.properties)
                                    for (let e of Object.values(w.properties).filter(n(722371).O9))
                                        for (let t of e)
                                            for (let e of r().uPN(t)) {
                                                if (r().jIt(e)) {
                                                    let t = r().v55(e);
                                                    b.push({
                                                        pointer: {
                                                            table: i().evP,
                                                            id: t
                                                        },
                                                        parentId: w.id
                                                    })
                                                }
                                                if (r().sh$(e)) {
                                                    let t = r().cQR(e),
                                                        n = (0, a().lX)({
                                                            url: t,
                                                            baseUrl: o().A.domainBaseUrl,
                                                            publicDomainName: o().A.publicDomainName
                                                        });
                                                    n && b.push({
                                                        pointer: {
                                                            table: i().evP,
                                                            id: n
                                                        },
                                                        parentId: w.id
                                                    })
                                                }
                                                if (r().N53(e)) {
                                                    let t = r().T$c(e);
                                                    t && b.push({
                                                        pointer: {
                                                            table: i().evP,
                                                            id: t,
                                                            spaceId: w.space_id
                                                        },
                                                        parentId: w.id
                                                    })
                                                }
                                            }
                                if ("form" === w.type && null != (t = w.format) && t.form_layout_pointer && b.push({
                                        pointer: w.format.form_layout_pointer,
                                        parentId: w.id
                                    }), null != (l = w.format) && l.automation_id && b.push({
                                        pointer: {
                                            table: i().yBS,
                                            id: w.format.automation_id,
                                            spaceId: w.space_id
                                        },
                                        parentId: w.id
                                    }), null != (s = w.format) && s.workflow_id && b.push({
                                        pointer: {
                                            table: i().C0E,
                                            id: w.format.workflow_id,
                                            spaceId: w.space_id
                                        },
                                        parentId: w.id
                                    }), w.format && "database_agent_ids" in w.format && Array.isArray(w.format.database_agent_ids))
                                    for (let e of w.format.database_agent_ids) b.push({
                                        pointer: {
                                            table: i().C0E,
                                            id: e,
                                            spaceId: w.space_id
                                        },
                                        parentId: w.id
                                    });
                                null != (c = w.format) && c.ai_instructions_page_pointer && b.push({
                                    pointer: w.format.ai_instructions_page_pointer,
                                    parentId: w.id
                                })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: c,
                                currentUserId: d,
                                cursors: u,
                                cursor: p,
                                options: f,
                                isRootRequest: g
                            }) : (0, n(496282).Yt)(l, i().VlP) ? t = function(e) {
                                var t, n;
                                let {
                                    pointer: o,
                                    recordMap: a,
                                    inMemoryRecordCache: r,
                                    currentUserId: l,
                                    cursors: s,
                                    cursor: c,
                                    options: d
                                } = e;
                                if (!d.allowCopyCollections) return {
                                    type: "error",
                                    reason: "encountered_collection",
                                    pointer: o
                                };
                                let u = r.getRecord({
                                    pointer: o,
                                    userId: l
                                });
                                if (!(null != u && u.value)) return d.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: o
                                } : void 0;
                                if (u.value.parent_id !== c.parentId) return;
                                let p = u.value;
                                for (let e of (a.setValue(o, p), r.forEachRecord({
                                        userId: l,
                                        fn: ({
                                            model: e
                                        }) => {
                                            e.table === i().evP && e && e.parent_id === o.id && e.alive && s.push({
                                                pointer: e.pointer,
                                                parentId: o.id
                                            })
                                        }
                                    }), (null == (t = p.format) ? void 0 : t.automation_ids) ? ? [])) s.push({
                                    pointer: {
                                        table: i().yBS,
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
                                            table: i().yBS
                                        },
                                        parentId: p.id
                                    })
                                }), Object.values(p.schema).forEach(e => {
                                    if (null != e && e.default_workflow_id) {
                                        let t = e.default_workflow_id;
                                        s.push({
                                            pointer: {
                                                table: i().C0E,
                                                id: t,
                                                spaceId: p.space_id
                                            },
                                            parentId: c.parentId
                                        })
                                    }
                                })), null != (n = p.format) && n.layout_pointer && s.push({
                                    pointer: p.format.layout_pointer,
                                    parentId: p.id
                                })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: c,
                                currentUserId: d,
                                cursors: u,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, i().Gy1) ? t = function(e) {
                                var t, n;
                                let {
                                    pointer: o,
                                    recordMap: a,
                                    inMemoryRecordCache: i,
                                    currentUserId: r,
                                    cursors: l,
                                    cursor: s,
                                    options: c
                                } = e, d = i.getRecord({
                                    pointer: o,
                                    userId: r
                                });
                                if (!(null != d && d.value)) return c.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: o
                                } : void 0;
                                (d.value.parent_id === s.parentId || s.skipParentIdCheck) && ("form_editor" === d.value.type && null != (t = d.value.format) && t.form_block_pointer && l.push({
                                    pointer: d.value.format.form_block_pointer,
                                    parentId: d.value.id
                                }), null != (n = d.value.format) && n.dashboard_layout_pointer && l.push({
                                    pointer: d.value.format.dashboard_layout_pointer,
                                    parentId: d.value.id
                                }), a.setValue(o, d.value))
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: c,
                                currentUserId: d,
                                cursors: u,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, i().yBS) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: o,
                                    currentUserId: a,
                                    cursors: r,
                                    cursor: l,
                                    options: s
                                } = e, c = o.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != c && c.value)) return s.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                if (c.value.parent_id === l.parentId)
                                    for (let e of (n.setValue(t, c.value), c.value.action_ids ? ? [])) r.push({
                                        pointer: {
                                            table: i().SC1,
                                            id: e,
                                            spaceId: c.value.space_id
                                        },
                                        parentId: c.value.id
                                    })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: c,
                                currentUserId: d,
                                cursors: u,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, i().SC1) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: o,
                                    currentUserId: a,
                                    cursors: r,
                                    cursor: l,
                                    options: s
                                } = e, c = o.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != c && c.value)) return s.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: l.pointer
                                } : void 0;
                                if (c.value.parent_id === l.parentId)
                                    for (let e of (n.setValue(t, c.value), c.value.blocks ? ? [])) r.push({
                                        pointer: {
                                            table: i().evP,
                                            id: e,
                                            spaceId: c.value.space_id
                                        },
                                        parentId: c.value.id
                                    })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: c,
                                currentUserId: d,
                                cursors: u,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, i().C0E) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: o,
                                    currentUserId: a,
                                    cursor: i,
                                    options: r
                                } = e, l = o.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != l && l.value)) return r.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i.pointer
                                } : void 0;
                                l.value.parent_id === i.parentId && n.setValue(t, l.value)
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: c,
                                currentUserId: d,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, i().zx0) ? t = function(e) {
                                var t;
                                let {
                                    pointer: o,
                                    recordMap: a,
                                    inMemoryRecordCache: r,
                                    currentUserId: l,
                                    cursors: s,
                                    options: c
                                } = e, d = r.getRecord({
                                    pointer: o,
                                    userId: l
                                }), u = null == d ? void 0 : d.value;
                                if (!u) return c.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: o
                                } : void 0;
                                let p = u.parent_id !== e.cursor.parentId ? { ...u,
                                        parent_id: e.cursor.parentId
                                    } : u,
                                    f = ((null == (t = p.modules) || null == (t = t.dashboard_layout_schema) ? void 0 : t.filter(e => "row" === e.type)) ? ? []).map(e => ({ ...e,
                                        modules: e.modules.filter(e => {
                                            var t;
                                            let o = r.getRecord({
                                                pointer: (0, n(17520).Q)({
                                                    collectionViewId: e.collection_view_id,
                                                    spaceId: p.space_id
                                                }),
                                                userId: l
                                            });
                                            return (null == o || null == (t = o.value) ? void 0 : t.type) !== "dashboard"
                                        })
                                    })).filter(e => e.modules.length > 0);
                                for (let e of (p = { ...p,
                                        modules: { ...p.modules,
                                            dashboard_layout_schema: f
                                        }
                                    }, a.setValue(o, p), n(993189).Bj6.fromValue(i().zx0, p).getBlockChildrenPointers())) s.push({
                                    pointer: e,
                                    parentId: o.id
                                });
                                let g = e => {
                                    let t = {
                                        id: e.collection_view_id,
                                        table: i().Gy1,
                                        spaceId: p.space_id
                                    };
                                    return s.push({
                                        pointer: t,
                                        parentId: o.id,
                                        skipParentIdCheck: !0
                                    }), e
                                };
                                (0, n(322268).E)(p.modules, e => {
                                    if ("formQuestion" === e.type) {
                                        let t = {
                                            id: e.formQuestionId,
                                            table: i().lo9,
                                            spaceId: p.space_id
                                        };
                                        s.push({
                                            pointer: t,
                                            parentId: o.id
                                        })
                                    } else if ("view" === e.type) g(e);
                                    else if ("row" === e.type)
                                        for (let t of e.modules) "view" === t.type && g(t)
                                })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: c,
                                currentUserId: d,
                                cursors: u,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, i().lo9) && (t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: o,
                                    currentUserId: a,
                                    options: i
                                } = e, r = o.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != r && r.value)) return i.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                n.setValue(t, r.value)
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: c,
                                currentUserId: d,
                                cursors: u,
                                cursor: p,
                                options: f
                            })), t
                        }({
                            pointer: e.pointer,
                            recordMap: u,
                            inMemoryRecordCache: s,
                            currentUserId: d,
                            cursors: f,
                            cursor: e,
                            options: c,
                            isRootRequest: t
                        });
                    if (g) return g;
                    p.add(e.pointer.id)
                }
                return {
                    type: "success",
                    recordMap: u
                }
            }
        },
        580899: (e, t, n) => {
            e.exports = n.p + "7afb74ab9eed1a81.png"
        },
        584758: (e, t, n) => {
            e.exports = n.p + "8cc12fd49d607b13.png"
        },
        588222: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowChevronSingleRightFillSmallIcon: () => a,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "5.54 2.94 5.81 10.11",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M11.13 8.53a.75.75 0 0 0 0-1.06L6.81 3.15a.75.75 0 0 0-1.06 1.06L9.54 8l-3.79 3.79a.75.75 0 0 0 1.06 1.06z"
                    })
                },
                a = (0, n(104509).wt)("arrowChevronSingleRightFillSmall", o, "fillSmall")
        },
        589563: (e, t, n) => {
            n.d(t, {
                Ah: () => c,
                Dk: () => r,
                Iv: () => s,
                SF: () => l,
                YO: () => p,
                _f: () => g,
                c_: () => a,
                dW: () => u,
                gW: () => i,
                sp: () => m,
                vN: () => d
            }), n(16280), n(944114), n(898992), n(354520), n(803949), n(581454), n(737550);
            var o = () => n(722371);

            function a(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "add_automation_step",
                    properties: t
                })
            }

            function i(e, t) {
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

            function c(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_enable",
                    properties: t
                })
            }

            function d(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_disable",
                    properties: t
                })
            }

            function u(e, t) {
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
                    formulaTypecheckContextValues: i,
                    getRecordModel: r,
                    spaceId: l,
                    value: s,
                    featureGates: c
                } = e;
                if ("formula" === s.type) {
                    if (!(0, o().O9)(s.value)) return;
                    let e = n(300441).Q.unwrapOr(a.parseFormulaInputToAst(s.value), void 0);
                    if (e) {
                        let o = a.addTypesToFormulaAST(e, {
                            handleDataRequest: (0, n(297493).zg)(r),
                            spaceId: l,
                            valueTypes: i,
                            featureGates: c
                        });
                        return { ...t.getFormulaAnalytics(e, {
                                getRecordModel: r,
                                typecheckContextValues: i
                            }),
                            formula_return_type: o.node.type,
                            redacted_formula: t.getRedactedFormulaAsStringSync(e, {
                                getRecordModel: r,
                                typecheckContextValues: i
                            })
                        }
                    }
                } else if ("simple" === s.type) {
                    if (!(0, o().O9)(s.value)) return;
                    return t.getSimpleFormulaAnalytics(s.value, {
                        getRecordModel: r,
                        typecheckContextValues: i
                    })
                } else(0, o().HB)(s.type)
            }

            function g(e) {
                let {
                    automationActionModel: t,
                    automationActionModels: a,
                    formulaAnalyticsModule: i,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: c,
                    simpleFormulasModule: d
                } = e;
                return t.isType("complete_sprint") ? {
                    automation_action_id: t.pointer.id,
                    type: "complete_sprint"
                } : t.isType("create_page") ? function(e) {
                    let t, {
                            automationActionModel: n,
                            formulaAnalyticsModule: a,
                            formulasModule: i,
                            formulaTypecheckContextValues: r,
                            getRecordModel: l,
                            featureGates: s
                        } = e,
                        c = n.getConfig(),
                        d = [],
                        u = null == c ? void 0 : c.collection,
                        p = null == c ? void 0 : c.properties;
                    if ((0, o().O9)(u) && (0, o().O9)(p) && p.length > 0) {
                        let e = l(u),
                            m = null == e ? void 0 : e.getNormalizedSchema(l);
                        (0, o().O9)(m) && (d = p.map(e => {
                            var t;
                            return (null == (t = m[e]) ? void 0 : t.type) ? ? "unknown"
                        }));
                        let h = null == c ? void 0 : c.values;
                        if (i && (0, o().O9)(h))
                            for (let e of (t = [], p)) {
                                var g;
                                let o = null == (g = h[e]) ? void 0 : g.value;
                                if (!o) continue;
                                let c = f({
                                    formulaAnalyticsModule: a,
                                    formulasModule: i,
                                    getRecordModel: l,
                                    formulaTypecheckContextValues: r,
                                    spaceId: n.spaceId,
                                    value: o,
                                    featureGates: s
                                });
                                c && t.push(c)
                            }
                    }
                    return {
                        automation_action_id: n.pointer.id,
                        property_formula_stats: t,
                        property_types: d,
                        type: "create_page"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: c
                }) : t.isType("duplicate_blocks") ? {
                    automation_action_id: t.pointer.id,
                    type: "duplicate_blocks"
                } : t.isType("modal_confirmation") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: n,
                        formulasModule: a,
                        formulaTypecheckContextValues: i,
                        getRecordModel: r,
                        featureGates: l
                    } = e, s = t.getConfig(), c = [];
                    if (a && (0, o().O9)(s) && s.text) {
                        let e = f({
                            formulasModule: a,
                            formulaAnalyticsModule: n,
                            getRecordModel: r,
                            formulaTypecheckContextValues: i,
                            spaceId: t.spaceId,
                            value: s.text,
                            featureGates: l
                        });
                        e && c.push(e)
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        formula_stats: c,
                        type: "modal_confirmation"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: c
                }) : t.isType("open_page") ? {
                    automation_action_id: t.pointer.id,
                    type: "open_page"
                } : t.isType("query_collection") ? {
                    automation_action_id: t.pointer.id,
                    type: "query_collection"
                } : t.isType("send_in_app_notification") ? function(e) {
                    var t, a;
                    let {
                        automationActionModel: i,
                        formulaAnalyticsModule: r,
                        formulasModule: l,
                        formulaTypecheckContextValues: s,
                        getRecordModel: c,
                        featureGates: d,
                        simpleFormulasModule: u
                    } = e, p = {
                        automation_action_id: i.pointer.id,
                        messageCharacterCount: 0,
                        type: "send_in_app_notification"
                    }, g = i.getConfig();
                    if (!(0, o().O9)(g)) return p;
                    if ((0, o().O9)(g.target)) {
                        if ("formula" === g.target.type && (0, o().O9)(g.target.value)) {
                            if (p.targetData = {
                                    type: "formula",
                                    numUserFormulaTargets: (0, n(247438).Fbh)(g.target.value.value).length,
                                    numFormulaContextTargets: u.getReferencedContextValueIds(g.target.value).length
                                }, l) {
                                let e = f({
                                    formulasModule: l,
                                    formulaAnalyticsModule: r,
                                    getRecordModel: c,
                                    formulaTypecheckContextValues: s,
                                    spaceId: i.spaceId,
                                    value: g.target.value,
                                    featureGates: d
                                });
                                e && (p.formula_stats ? ? = [], p.formula_stats.push(e))
                            }
                        } else if ("property" === g.target.type && (0, o().O9)(g.target.propertyId) && (0, o().O9)(g.target.collectionPointer)) {
                            let e = c(g.target.collectionPointer),
                                t = null == e ? void 0 : e.getSchema();
                            (0, o().O9)(t) && (p.targetData = {
                                type: "property",
                                propertyType: null == (a = t[g.target.propertyId]) ? void 0 : a.type
                            })
                        }
                    }
                    if ((0, o().O9)(null == (t = g.notification_message) ? void 0 : t.value) && (p.messageCharacterCount = (0, n(247438).FAw)(g.notification_message.value), l)) {
                        let e = f({
                            formulasModule: l,
                            formulaAnalyticsModule: r,
                            getRecordModel: c,
                            formulaTypecheckContextValues: s,
                            spaceId: i.spaceId,
                            value: g.notification_message,
                            featureGates: d
                        });
                        e && (p.formula_stats ? ? = [], p.formula_stats.push(e))
                    }
                    return p
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: c,
                    simpleFormulasModule: d
                }) : t.isType("send_gmail_notification") ? function(e) {
                    var t, a, i, r, l, s, c;
                    let {
                        automationActionModel: d,
                        formulaAnalyticsModule: u,
                        formulasModule: p,
                        formulaTypecheckContextValues: g,
                        getRecordModel: m,
                        featureGates: h
                    } = e, y = d.getConfig();
                    if (!(0, o().O9)(y)) return {
                        automation_action_id: d.pointer.id,
                        fields: {},
                        recipient_domains: {},
                        type: "send_gmail_notification"
                    };
                    let b = Object.fromEntries(Object.entries(y || {}).map(([e, t]) => {
                            if ((null == t ? void 0 : t.type) === "formula") {
                                var n;
                                return [e, !!(null == t || null == (n = t.value) ? void 0 : n.value)]
                            }
                            return (null == t ? void 0 : t.type) === "simple" ? [e, !!(null == t ? void 0 : t.value)] : [e, !!t]
                        })),
                        {
                            to: v,
                            cc: _,
                            bcc: x
                        } = y,
                        k = [...(null == v || null == (t = v.value) ? void 0 : t.value) || [], ...(null == _ || null == (a = _.value) ? void 0 : a.value) || [], ...(null == x || null == (i = x.value) ? void 0 : i.value) || []],
                        C = [...(0, n(247438).Fbh)(k).map(e => m({
                            table: n(514214).oo,
                            id: e
                        })).map(e => null == e ? void 0 : e.email).filter(o().O9), ...(0, n(801109).C3)((0, n(247438).k4p)(k))],
                        w = (0, n(763230).Tr)(C.map(e => e.split("@")[1])),
                        I = [null == (r = y.to) ? void 0 : r.value, null == (l = y.cc) ? void 0 : l.value, null == (s = y.bcc) ? void 0 : s.value, null == (c = y.reply_to) ? void 0 : c.value, y.from_name, y.email_subject, y.email_body].map(e => {
                            if (p && (0, o().O9)(e)) return f({
                                formulaAnalyticsModule: u,
                                formulasModule: p,
                                getRecordModel: m,
                                formulaTypecheckContextValues: g,
                                spaceId: d.spaceId,
                                value: e,
                                featureGates: h
                            })
                        }).filter(o().O9);
                    return {
                        automation_action_id: d.pointer.id,
                        fields: b,
                        formula_stats: I,
                        recipient_domains: w,
                        type: "send_gmail_notification"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: c
                }) : t.isType("slack_notification") ? {
                    automation_action_id: t.pointer.id,
                    type: "slack_notification"
                } : t.isType("update_pages") ? function(e) {
                    let {
                        automationActionModel: t,
                        automationActionModels: a,
                        formulaAnalyticsModule: i,
                        formulasModule: r,
                        formulaTypecheckContextValues: l,
                        getRecordModel: s,
                        featureGates: c
                    } = e, d = t.getConfig(), u = [], p = [], g = [];
                    if ((0, o().O9)(d) && (0, o().O9)(d.target) && (0, o().O9)(d.properties) && d.properties.length > 0) {
                        let e;
                        if ("variable" === d.target.type) {
                            let t = (0, n(297493).y5)(d.target.id);
                            if ("action" === t.source) {
                                let t = (0, n(33529).y)({
                                    actionModels: a,
                                    id: d.target.id
                                }).collectionPointer;
                                if ((0, o().O9)(t)) {
                                    let n = s(t);
                                    e = null == n ? void 0 : n.getNormalizedSchema(s)
                                }
                            } else if ("global" === t.source && "button_page" === t.global) {
                                let t = (0, n(297493).IV)(l, d.target.id);
                                if ((null == t ? void 0 : t.type.type) === "block" && (0, o().O9)(t.type.collection)) {
                                    let n = s(t.type.collection);
                                    e = null == n ? void 0 : n.getNormalizedSchema(s)
                                }
                            } else throw Error("Failed loading property schema")
                        } else if ("collection" === d.target.type) {
                            let t = s(d.target.collection);
                            e = null == t ? void 0 : t.getNormalizedSchema(s)
                        }(0, o().O9)(e) && d.properties.forEach(n => {
                            let a = e[n];
                            if ((0, o().O9)(a) && (u.push(a.type), r && (0, o().O9)(d.values))) {
                                let e = d.values[n];
                                if ((0, o().O9)(e) && (p.push({
                                        type: a.type,
                                        operator: e.action
                                    }), e.value)) {
                                    let n = f({
                                        formulasModule: r,
                                        formulaAnalyticsModule: i,
                                        getRecordModel: s,
                                        formulaTypecheckContextValues: l,
                                        spaceId: t.spaceId,
                                        value: e.value,
                                        featureGates: c
                                    });
                                    n && g.push(n)
                                }
                            }
                        })
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        property_configs: p,
                        property_formula_stats: g,
                        property_types: u,
                        type: "update_pages"
                    }
                }({
                    automationActionModel: t,
                    automationActionModels: a,
                    formulaAnalyticsModule: i,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: c
                }) : t.isType("define_variables") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: n,
                        formulasModule: a,
                        formulaTypecheckContextValues: i,
                        getRecordModel: r,
                        featureGates: l
                    } = e, s = t.getConfig(), c = [];
                    if (a && (0, o().O9)(s) && s.values) {
                        for (let e of Object.values(s.values))
                            if (e.value) {
                                let o = f({
                                    formulasModule: a,
                                    formulaAnalyticsModule: n,
                                    getRecordModel: r,
                                    formulaTypecheckContextValues: i,
                                    spaceId: t.spaceId,
                                    value: e.value,
                                    featureGates: l
                                });
                                o && c.push(o)
                            }
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        formula_stats: c,
                        type: "define_variables"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: c
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
                } : void(0, o().HB)(t)
            }

            function m(e) {
                var t, a;
                let i, r, l, {
                        automationModel: s,
                        builderType: c = "sidebar",
                        formulaAnalyticsModule: d,
                        formulasModule: u,
                        formulaTypecheckContextValues: p,
                        getRecordModel: f,
                        featureGates: m,
                        simpleFormulasModule: h,
                        source: y
                    } = e,
                    b = [],
                    v = s.getActionPointers().map(e => f(e)).filter(o().O9);
                for (let e of s.getActionPointers()) {
                    let t = f(e);
                    (0, o().O9)(t) && b.push(g({
                        automationActionModel: t,
                        automationActionModels: v,
                        formulaAnalyticsModule: d,
                        formulasModule: u,
                        formulaTypecheckContextValues: p,
                        getRecordModel: f,
                        featureGates: m,
                        simpleFormulasModule: h
                    }))
                }
                let _ = [];
                if (s.isEventType()) {
                    let e = s.getEventConfiguration(),
                        a = f(s.getParentPointer());
                    i = s.getParentId();
                    let c = s.getEventConfiguration();
                    if ((null == (t = c.source) ? void 0 : t.type) === "collection_view") {
                        let e = f(c.source.pointer);
                        (null == e ? void 0 : e.parent_table) === n(682956).ev && (l = null == e ? void 0 : e.parent_id), r = null == c ? void 0 : c.source.pointer.id
                    }
                    let d = null == a ? void 0 : a.getNormalizedSchema(f);
                    if ((0, o().O9)(d)) {
                        let {
                            pagesAdded: t,
                            pagePropertiesEdited: n
                        } = e;
                        if (t && _.push({
                                type: "page"
                            }), "any" === n.type) _.push({
                            condition: "any",
                            type: "property"
                        });
                        else if ("none" === n.type) _.push({
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
                                let i = null == (n = d[e.property]) ? void 0 : n.type;
                                (0, o().O9)(i) && (t.push({
                                    type: i,
                                    operator: e.filter.operator
                                }), a.push(i))
                            }), _.push({
                                condition: n.type,
                                property_configs: t,
                                property_types: a,
                                type: "property"
                            })
                        }
                    }
                } else s.isButtonType() ? _.push({
                    type: "button"
                }) : s.isRecurrenceType() ? _.push({
                    type: "recurrence",
                    frequency: null == (a = s.getTrigger().recurrence) ? void 0 : a.frequency
                }) : (0, o().HB)(s);
                return {
                    automation_actions: b,
                    automation_id: s.id,
                    automation_triggers: _,
                    collection_id: i,
                    collection_view_id: r,
                    collection_view_block_id: l,
                    builder_type: c,
                    source: y
                }
            }
        },
        595413: (e, t, n) => {
            n.d(t, {
                f: () => a
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.95 1.94 12.1 11.57",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 1.95c-.27 0-.51.174-.594.431l-1.14 3.51H2.574a.625.625 0 0 0-.367 1.13l2.985 2.17-1.14 3.509a.625.625 0 0 0 .962.699L8 11.229l2.986 2.17a.625.625 0 0 0 .961-.699l-1.14-3.51 2.985-2.169a.625.625 0 0 0-.367-1.13h-3.69l-1.14-3.51A.625.625 0 0 0 8 1.95m-.686 4.759L8 4.597l.686 2.112a.625.625 0 0 0 .595.432h2.22L9.705 8.446a.625.625 0 0 0-.227.699l.686 2.112-1.797-1.305a.625.625 0 0 0-.734 0l-1.797 1.305.686-2.112a.625.625 0 0 0-.227-.699L4.5 7.141h2.22a.63.63 0 0 0 .595-.432"
                    })
                },
                a = (0, n(104509).wt)("starSmall", o, "small")
        },
        620842: (e, t, n) => {
            e.exports = n.p + "14d5b1e86af73b85.png"
        },
        625031: (e, t, n) => {
            e.exports = n.p + "db48f4d686b63eb9.png"
        },
        638501: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => o,
                plusSmallIcon: () => a
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.74 2.74 10.52 10.52",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 2.74a.66.66 0 0 1 .66.66v3.94h3.94a.66.66 0 0 1 0 1.32H8.66v3.94a.66.66 0 0 1-1.32 0V8.66H3.4a.66.66 0 0 1 0-1.32h3.94V3.4A.66.66 0 0 1 8 2.74"
                    })
                },
                a = (0, n(104509).wt)("plusSmall", o, "small")
        },
        641085: (e, t, n) => {
            e.exports = n.p + "85fb8ca2230ff394.png"
        },
        652134: (e, t, n) => {
            n.r(t), n.d(t, {
                aiFaceSmallIcon: () => i,
                iconDefinition: () => a
            }), n(296540);
            var o = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.89 1.43 11.63 12.81",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M7.204 1.93a3.47 3.47 0 0 0-4.097.39.625.625 0 1 0 .834.931 2.22 2.22 0 0 1 3.16.202.625.625 0 0 0 .944-.818 3.5 3.5 0 0 0-.84-.705m6.018.976A3.47 3.47 0 0 0 8.463 4.1l-5.077 8.476a.625.625 0 0 0 .437.938l4.41.715a.625.625 0 0 0 .2-1.234l-3.5-.568 4.602-7.685a2.22 2.22 0 0 1 3.822.02.625.625 0 1 0 1.08-.63 3.46 3.46 0 0 0-1.214-1.226m-7.83 2.105a1.094 1.094 0 1 0-.35 2.159 1.094 1.094 0 0 0 .35-2.159"
                        }), (0, o.jsx)("path", {
                            d: "M10.762 5.881a1.093 1.093 0 1 0-.35 2.159 1.093 1.093 0 0 0 .35-2.159"
                        })]
                    })
                },
                i = (0, n(104509).wt)("aiFaceSmall", a, "small")
        },
        665008: (e, t, n) => {
            e.exports = n.p + "937ee299d2468780.png"
        },
        667115: (e, t, n) => {
            e.exports = n.p + "a95f553bf5241102.png"
        },
        674880: (e, t, n) => {
            n.d(t, {
                BX: () => f,
                Jv: () => p,
                Kf: () => s,
                WM: () => i,
                Xd: () => g,
                Xw: () => m,
                defaultInferenceContextStore: () => o,
                fd: () => d,
                i6: () => l,
                uP: () => c
            }), n(944114), n(898992), n(354520), n(803949), n(581454), n(737550);
            let o = new(n(345426)).ComputedStore(() => {
                let e = n(728372).AppStoreSidebarSpaceStore.state,
                    t = n(728372).AppStoreCurrentUserStore.state,
                    o = n(728372).AppStoreSidebarSpaceViewStore.state,
                    a = n(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (e && t && o) return {
                    spaceStore: e,
                    userStore: t,
                    spaceViewStore: o,
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
                    let o = (0, n(444610).U)(e),
                        a = null == o ? void 0 : o.collectionViewStore();
                    a && (t[e.id] = a.id)
                } else e.getContentStores().forEach(e => {
                    if (e.isCollectionView()) {
                        let o = (0, n(444610).U)(e),
                            a = null == o ? void 0 : o.collectionViewStore();
                        a && (t[e.id] = a.id)
                    }
                });
                return t
            }

            function i(e) {
                let {
                    environment: t,
                    surface: o,
                    inferenceContext: i,
                    config: r,
                    invokedFromBlockId: l,
                    checklistId: s,
                    checklistStepId: c
                } = e, {
                    userStore: d,
                    spaceStore: u,
                    spaceViewStore: p,
                    blockStore: f,
                    peekStore: g,
                    workflowStore: m
                } = i, h = (0, n(295447).Z1)({
                    environment: t,
                    table: n(832375).mSw,
                    spaceId: u.id
                }), y = "meet" === t.RouterStore.state.route.name, b = { ...f && f.isCollectionView() ? {
                        collectionViewBlockId: f.id,
                        visibleCollectionViewIds: a(f)
                    } : void 0,
                    ...f && !f.isCollectionView() && "personal_home_page" !== f.getType() && "daily_brief_reminder" !== o ? {
                        blockId: f.id,
                        visibleCollectionViewIds: a(f)
                    } : void 0,
                    ...g ? {
                        peekBlockId: g.id,
                        visibleCollectionViewIds: a(g)
                    } : void 0,
                    ...m ? {
                        workflowId: m.id
                    } : void 0,
                    ...y ? function(e) {
                        if (!n(218744).default.checkGate({
                                gateName: "agent_in_meetings_route"
                            })) return;
                        let {
                            environment: t,
                            spaceId: o,
                            userId: a
                        } = e, i = t.idCreator.getSpaceIdCreatorSync(o), r = (0, n(413388).sX)(a, i);
                        return {
                            collectionViewBlockId: r,
                            visibleCollectionViewIds: {
                                [r]: (0, n(413388).X$)(a, i)
                            }
                        }
                    }({
                        environment: t,
                        spaceId: u.id,
                        userId: d.id
                    }) : void 0
                }, v = {};
                if ("workflow" !== r.type || !r.isCustomAgent) {
                    let e = p.getSettings(),
                        t = null == e ? void 0 : e.agent_personalization_settings;
                    if (t) {
                        var _;
                        t.name && (v.agentName = t.name), null != (_ = t.customization_items) && _[0] && (v.agentAccessory = t.customization_items[0]), t.context_page_id && (v.context_page_id = t.context_page_id)
                    }
                }
                let x = function(e) {
                    var t, o, a;
                    let {
                        config: i,
                        workflowStore: r
                    } = e;
                    if ("workflow" !== i.type || !i.isCustomAgent || !r) return;
                    let l = !0 === i.useCustomAgentDraft || !0 === i.use_draft_actor_pointer ? (null == (t = r.getDraftData()) ? void 0 : t.instructions) ? ? (null == (o = r.getData()) ? void 0 : o.instructions) : null == (a = r.getPublishedArtifactStore()) || null == (a = a.getData()) ? void 0 : a.instructions;
                    if ((0, n(886883).ap)(l)) return l.id
                }({
                    config: r,
                    workflowStore: m
                });
                if (x && (v.context_page_id = x), n(218744).default.checkGate({
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
                        spaceId: u.id,
                        spaceViewId: p.id,
                        currentDatetime: "2024-01-01T00:00:00.000Z",
                        surface: o,
                        ...b,
                        invokedFromBlockId: l,
                        ..."onboarding_checklist" === o && s && c ? {
                            checklistId: s,
                            checklistStepId: c
                        } : {},
                        ...v
                    }
                };
                let k = n(218744).default.checkGate({
                    gateName: "agent_user_session_context"
                }) ? function(e) {
                    let {
                        spaceId: t,
                        limit: o = 10
                    } = e;
                    return n(420156).A.getWithoutSubscribing(t).map(({
                        pageId: e,
                        visitedAt: t
                    }) => ({
                        pageId: e,
                        visitedAt: t
                    })).slice(0, o)
                }({
                    spaceId: u.id
                }) : void 0;
                return {
                    id: h,
                    type: "context",
                    value: {
                        timezone: (0, n(714350).P)(),
                        userName: d.getName(),
                        userId: d.id,
                        userEmail: d.getEmail(),
                        spaceName: u.getName(),
                        spaceId: u.id,
                        spaceViewId: p.id,
                        currentDatetime: n(906745).DateTime.now().toISO(),
                        surface: o,
                        ...b,
                        invokedFromBlockId: l,
                        ..."onboarding_checklist" === o && s && c ? {
                            checklistId: s,
                            checklistStepId: c
                        } : {},
                        ...v,
                        recentPageVisits: k
                    }
                }
            }

            function r(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    config: a
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: o.id
                    }),
                    type: "config",
                    value: a
                }
            }

            function l(e) {
                let {
                    existingTranscript: t,
                    environment: n,
                    spaceStore: o,
                    config: a
                } = e;
                if (!t.some(e => "config" === e.type)) return r({
                    environment: n,
                    spaceStore: o,
                    config: a
                })
            }

            function s(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    value: a,
                    userStore: i
                } = e, r = u(a);
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: o.id
                    }),
                    type: "user",
                    value: r,
                    userId: i.id,
                    createdAt: n(906745).DateTime.now().toISO()
                }
            }

            function c(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    actualMessage: a,
                    displayMessage: i,
                    userStore: r,
                    surveyStepId: l,
                    sourceStepId: s
                } = e, c = u(a) ? ? [], d = u(i);
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: o.id
                    }),
                    type: "user-injected",
                    actualMessage: c,
                    displayMessage: d,
                    userId: r.id,
                    createdAt: n(906745).DateTime.now().toISO(),
                    surveyStepId: l,
                    sourceStepId: s
                }
            }

            function d(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    agentMessageKey: a,
                    instructions: i
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: o.id
                    }),
                    type: "proactive-message",
                    agentMessageKey: a,
                    instructions: i
                }
            }

            function u(e) {
                if (e) return (0, n(247438).bBR)((0, n(247438).ooo)(e))
            }

            function p({
                environment: e,
                spaceStore: t,
                userStore: o,
                promptType: a,
                value: i,
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
                    userId: o.id,
                    createdAt: Date.now(),
                    value: i,
                    locale: r,
                    isEdited: !1,
                    args: l
                }
            }

            function f(e) {
                let t, o, {
                    environment: a,
                    spaceId: i,
                    pointers: r,
                    selectedBlockStores: l,
                    textSelection: s,
                    blockSelectionContext: c,
                    textSelectionContext: d
                } = e;
                if (c) t = c;
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
                if (d) o = d;
                else if (s && s.start.store.pointer.table === n(832375).evP && s.end.store.pointer.table === n(832375).evP) {
                    let e = (0, n(250943).E)({
                            mode: "editing",
                            multiSelection: s,
                            forceExtendAnnotations: {}
                        }),
                        t = e.slice(0, 1200),
                        a = e.length > 1200;
                    o = {
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
                if (0 !== r.length || t || o) return {
                    id: (0, n(295447).Z1)({
                        environment: a,
                        table: n(832375).mSw,
                        spaceId: i
                    }),
                    type: "user-specified-context",
                    value: {
                        pointers: r,
                        blockSelection: t,
                        textSelection: o
                    }
                }
            }

            function g(e) {
                let {
                    environment: t,
                    inferenceContext: o,
                    config: a,
                    addSteps: l,
                    surface: s,
                    invokedFromBlockId: c,
                    checklistId: d,
                    checklistStepId: u
                } = e, p = [r({
                    environment: t,
                    spaceStore: o.spaceStore,
                    config: a
                }), i({
                    environment: t,
                    inferenceContext: o,
                    surface: s,
                    config: a,
                    invokedFromBlockId: c,
                    checklistId: d,
                    checklistStepId: u
                })];
                return l && p.push(...l), p.filter(n(722371).O9)
            }

            function m(e) {
                let {
                    environment: t,
                    spaceId: o,
                    message: a,
                    notificationType: i = "info",
                    metadata: r
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: o
                    }),
                    type: "system-notification",
                    message: a,
                    notificationType: i,
                    metadata: r
                }
            }
        },
        679416: (e, t, n) => {
            n.d(t, {
                P: () => u
            }), n(296540);
            var o = n(474848);
            let a = `
	@keyframes accessory-speech-bubble-in {
		0% { opacity: 0; transform: scale(0.85); }
		100% { opacity: 1; transform: scale(1); }
	}
	@keyframes accessory-speech-bubble-out {
		0% { opacity: 1; transform: scale(1); }
		100% { opacity: 0; transform: scale(0.85); }
	}
`,
                i = (0, n(51831).n)(!0),
                r = `1.5px solid ${n(632079).Tj.border.secondary}`,
                l = {
                    container: {
                        position: "absolute",
                        zIndex: 2,
                        pointerEvents: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "max-content"
                    },
                    bubble: { ...i,
                        position: "relative",
                        whiteSpace: "normal",
                        maxWidth: 220,
                        color: n(632079).Tj.text.secondary,
                        fontWeight: n(699422).Wy.medium,
                        border: r,
                        boxShadow: "none",
                        borderRadius: 12,
                        padding: "6px 12px",
                        fontSize: 12
                    },
                    tailCircle: {
                        position: "absolute",
                        width: 8,
                        height: 8,
                        borderRadius: 999,
                        background: n(632079).Tj.background.primary,
                        border: r,
                        boxShadow: "none"
                    }
                },
                s = {
                    topLeft: {
                        container: {
                            bottom: "86%",
                            insetInlineEnd: "88%",
                            transformOrigin: "right bottom",
                            alignItems: "flex-end"
                        },
                        tailCircle: {
                            top: "calc(100% + 8px)",
                            insetInlineEnd: -10
                        }
                    },
                    topRight: {
                        container: {
                            bottom: "86%",
                            insetInlineStart: "88%",
                            transformOrigin: "left bottom",
                            alignItems: "flex-start"
                        },
                        tailCircle: {
                            top: "calc(100% + 8px)",
                            insetInlineStart: -6
                        }
                    }
                },
                c = {
                    animationName: "accessory-speech-bubble-in",
                    animationDuration: "150ms",
                    animationTimingFunction: "ease-out",
                    animationFillMode: "forwards"
                },
                d = {
                    animationName: "accessory-speech-bubble-out",
                    animationDuration: "150ms",
                    animationTimingFunction: "ease-in",
                    animationFillMode: "forwards"
                };

            function u({
                placement: e,
                children: t,
                animated: n = !1,
                isHiding: i = !1,
                verticalOffsetPx: r = 0,
                horizontalOffsetPx: p = 0,
                tailCircleTop: f,
                tailCircleInsetInlineStartPx: g
            }) {
                let m = function(e, t, n) {
                    let {
                        container: {
                            bottom: o,
                            insetInlineStart: a,
                            insetInlineEnd: i,
                            ...r
                        },
                        tailCircle: l
                    } = s[e], c = 0 !== t && void 0 !== o ? `calc(${String(o)} - ${t}px)` : o;
                    if ("topRight" === e) {
                        let e = 0 !== n && void 0 !== a ? `calc(${String(a)} + ${n}px)` : a;
                        return {
                            container: { ...r,
                                insetInlineStart: e,
                                bottom: c
                            },
                            tailCircle: l
                        }
                    }
                    let d = 0 !== n && void 0 !== i ? `calc(${String(i)} - ${n}px)` : i;
                    return {
                        container: { ...r,
                            insetInlineEnd: d,
                            bottom: c
                        },
                        tailCircle: l
                    }
                }(e, r, p);
                return (0, o.jsxs)(o.Fragment, {
                    children: [n ? (0, o.jsx)("style", {
                        children: a
                    }) : void 0, (0, o.jsxs)("div", {
                        style: { ...l.container,
                            ...m.container,
                            ...n ? i ? d : c : void 0
                        },
                        children: [(0, o.jsx)("div", {
                            style: l.bubble,
                            children: t
                        }), (0, o.jsx)("div", {
                            style: { ...l.tailCircle,
                                ...m.tailCircle,
                                ...void 0 !== f && {
                                    top: f
                                },
                                ...void 0 !== g && {
                                    insetInlineStart: g
                                }
                            }
                        })]
                    })]
                })
            }
        },
        682006: (e, t, n) => {
            n.d(t, {
                a: () => a
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.37 1.37 13.25 13.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.25 1.375c-1.036 0-1.875.84-1.875 1.875v6c0 1.036.84 1.875 1.875 1.875h1.625v1.625c0 1.036.84 1.875 1.875 1.875h6c1.036 0 1.875-.84 1.875-1.875v-6c0-1.036-.84-1.875-1.875-1.875h-1.625V3.25c0-1.036-.84-1.875-1.875-1.875zM2.625 3.25c0-.345.28-.625.625-.625h6c.345 0 .625.28.625.625v1.625H6.75c-1.036 0-1.875.84-1.875 1.875v3.125H3.25a.625.625 0 0 1-.625-.625zm3.5 3.5c0-.345.28-.625.625-.625h6c.345 0 .625.28.625.625v6c0 .345-.28.625-.625.625h-6a.625.625 0 0 1-.625-.625z"
                    })
                },
                a = (0, n(104509).wt)("duplicateSmall", o, "small")
        },
        682759: (e, t, n) => {
            e.exports = n.p + "d43593c297dd4340.png"
        },
        688220: (e, t, n) => {
            e.exports = n.p + "0fb564b08de74e8f.png"
        },
        691509: (e, t, n) => {
            n.d(t, {
                A: () => i
            }), n(944114), n(898992), n(803949), n(581454);
            var o = n(296540),
                a = n(474848);
            let i = function({
                children: e,
                onClick: t,
                items: o,
                getKey: i,
                renderItem: r,
                selectedItem: s,
                onSelect: c,
                dontCloseParentOnSelect: d,
                menuTypeOverride: u,
                menuTitle: p,
                width: f,
                minWidth: g,
                disabled: m,
                originGap: h,
                originRectTransform: y,
                buttonPopupStore: b,
                sameWidthAsOrigin: v
            }) {
                let _ = (0, n(682985).uB)(b, n(510969).A),
                    x = u ? ? (n(986939).A.isMobile ? n(649476).gu.Modal : n(649476).gu.Popup);
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
                    }(x),
                    bottomSheetInitialState: "half",
                    buttonPopupStore: _,
                    placementToOrigin: "bottom",
                    onClick: t,
                    content: e => (0, a.jsx)(l, {
                        parent: e,
                        items: o,
                        getKey: i,
                        renderItem: r,
                        selectedItem: s,
                        onSelect: c,
                        dontCloseParentOnSelect: d,
                        menuType: x,
                        menuTitle: p,
                        width: f,
                        minWidth: g
                    }),
                    disabled: m,
                    originGap: h,
                    originRectTransform: y,
                    sameWidthAsOrigin: v,
                    children: e
                })
            };

            function r(e, t, a, i, r, l, s, c) {
                return {
                    key: 0,
                    render: e => (0, o.createElement)(n(844565).A, { ...e,
                        key: t,
                        topBorder: t > 0
                    }),
                    items: e.map(e => ({
                        key: i(e),
                        render: t => r({ ...t,
                            value: e,
                            key: i(e),
                            selectedItem: l
                        }),
                        action: () => {
                            l !== e && s(e), c || a.close()
                        }
                    }))
                }
            }

            function l({
                parent: e,
                items: t,
                getKey: o,
                renderItem: i,
                selectedItem: s,
                onSelect: c,
                dontCloseParentOnSelect: d,
                menuType: u,
                menuTitle: p,
                width: f,
                minWidth: g
            }) {
                let m, h = [];
                if (t.length > 0 && t[0] instanceof Array) t.forEach((t, n) => {
                    let a = r(t, n, e, o, i, s, c, d);
                    h.push(a)
                });
                else {
                    let n = r(t, 0, e, o, i, s, c, d);
                    h.push(n)
                }
                let y = (0, a.jsx)(n(558045).A, {
                    type: n(558045).O.Vertical,
                    initialFocus: n(381453).SL(n(381453).Bq(t), e => n(381453).n4(e, s)),
                    sections: h
                });
                switch (u) {
                    case n(649476).gu.ActionSheet:
                        m = {
                            menuType: n(649476).gu.ActionSheet
                        };
                        break;
                    case n(649476).gu.Modal:
                        m = {
                            menuType: n(649476).gu.Modal,
                            title: p,
                            right: (0, a.jsx)(n(109939).sA, { ...n(789722).W.done
                            }),
                            onClickRight: e.close
                        };
                        break;
                    case n(649476).gu.Popup:
                        m = {
                            menuType: n(649476).gu.Popup,
                            width: f || 160,
                            minWidth: g
                        };
                        break;
                    default:
                        (0, n(722371).HB)(u)
                }
                return (0, a.jsx)(n(747369).A, { ...m,
                    children: y
                })
            }
        },
        695142: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowDiagonalUpRightFillIcon: () => a,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.16 4.17 11.67 11.67",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.825 5.05a.875.875 0 0 0-.875-.875H7.313a.875.875 0 1 0 0 1.75h5.524L4.393 14.37c-.32.32-.303.857.039 1.198.341.342.878.36 1.198.039l8.445-8.444v5.524a.875.875 0 1 0 1.75 0z"
                    })
                },
                a = (0, n(104509).wt)("arrowDiagonalUpRightFill", o, "fill")
        },
        701743: (e, t, n) => {
            e.exports = n.p + "868a886d40b596cd.png"
        },
        702404: (e, t, n) => {
            e.exports = n.p + "c8cb309f04348e5a.png"
        },
        722784: (e, t, n) => {
            e.exports = n.p + "6ddab14ae1911792.png"
        },
        727832: (e, t, n) => {
            n.d(t, {
                R: () => o
            }), n(16280);
            async function o(e) {
                let {
                    environment: t,
                    workflowStore: o
                } = e, a = o.getSpaceId();
                if (!a) throw Error("Cannot publish workflow without space ID");
                let i = o.getDraftData();
                if (!i) throw Error("Workflow has no data");
                let r = (0, n(548161).Cu)(i);
                return n(300441).Q.isFail(r) ? r : (await t.api.callApi({
                    eventName: "publishCustomAgentVersion",
                    environment: t,
                    data: {
                        workflowId: o.id,
                        spaceId: a
                    }
                }), await (0, n(192883).s)({
                    environment: t,
                    inMemoryRecordCache: o.inMemoryRecordCache,
                    pointer: o.pointer,
                    userId: void 0,
                    isPendingTransactionForRecord: n(941701).transactionQueue.isPendingTransactionForRecord.bind(n(941701).transactionQueue)
                }), n(300441).Q.success(void 0))
            }
        },
        733785: (e, t, n) => {
            e.exports = n.p + "451ac07fab6898ec.png"
        },
        737497: (e, t, n) => {
            e.exports = n.p + "5c61be7d1ab58977.gif"
        },
        748356: (e, t, n) => {
            n.d(t, {
                f: () => d,
                l: () => h
            }), n(581454), n(296540);
            var o = n(474848);
            let a = (0, n(109939).YK)({
                learnMore: {
                    id: "banner.learnMore",
                    defaultMessage: "Learn more"
                },
                dismiss: {
                    id: "banner.dismiss",
                    defaultMessage: "Dismiss"
                }
            });

            function i(e, t) {
                return (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: n(632079).Tj[e].background.secondary,
                        padding: "8px 12px",
                        minHeight: 44,
                        flexShrink: 0
                    },
                    icon: {
                        width: n(986939).A.isMobile ? n(104509).Ev.default : n(104509).Ev.sm,
                        height: n(986939).A.isMobile ? n(104509).Ev.default : n(104509).Ev.sm,
                        fill: t ? n(632079).Tj[t].icon.accentPrimary : n(632079).Tj[e].icon.secondary
                    },
                    content: {
                        color: n(632079).Tj[e].text.secondary
                    },
                    contentAutoLayout: {
                        position: "relative",
                        color: n(632079).Tj[e].text.secondary
                    },
                    learnMoreIcon: {
                        fill: n(632079).Tj[e].icon.secondary
                    },
                    titleIcon: {
                        marginInlineEnd: 8
                    }
                }), [e, t])
            }

            function r(e) {
                let {
                    onDismiss: t
                } = e, i = (0, n(109939).tz)();
                return t ? (0, o.jsx)(n(374533).A, {
                    size: "xs",
                    onClick: t,
                    icon: n(25094).xMarkSmallIcon,
                    colorVariant: "primary",
                    ariaLabel: i.formatMessage(a.dismiss)
                }) : (0, o.jsx)("div", {})
            }

            function l(e) {
                let {
                    tint: t,
                    iconGroup: a,
                    style: i
                } = e;
                return a ? (0, o.jsx)(n(708966).Q, {
                    iconGroup: a,
                    variantName: "small",
                    colorPalette: t,
                    colorVariant: "secondary",
                    style: i
                }) : null
            }
            let s = {
                    k1xSpc: "x78zum5",
                    kXwgrk: "x1q0g3np",
                    kGNEyG: "x6s0dn4",
                    $$css: !0
                },
                c = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                };

            function d(e) {
                let {
                    tint: t,
                    action: a
                } = e, {
                    label: i,
                    onClick: r,
                    icon: l
                } = a, c = (0, n(960253).I)(() => ({
                    button: {
                        color: "gray" === t ? n(632079).Tj.text.primary : n(632079).Tj[t].text.secondary,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: n(632079).Tj[t].border.strongTranslucent
                    },
                    buttonHovered: {
                        backgroundColor: n(632079).Tj[t].background.secondaryTranslucent
                    },
                    buttonPressed: {
                        backgroundColor: n(632079).Tj[t].background.tertiaryTranslucent
                    }
                }), [t]);
                return (0, o.jsx)(n(548436).A, {
                    iconLeading: l ? {
                        icon: l,
                        size: "sm"
                    } : void 0,
                    onClick: r,
                    style: c.button,
                    hoveredStyle: c.buttonHovered,
                    pressedStyle: c.buttonPressed,
                    children: (0, o.jsx)(n(111010).D, {
                        styleKey: "bodyMedium",
                        style: s,
                        children: i
                    })
                })
            }

            function u(e) {
                let {
                    label: t,
                    iconGroup: s,
                    tint: u,
                    onDismiss: p,
                    actions: f,
                    onLearnMoreClick: g
                } = e, m = i(u), h = (0, n(109939).tz)();
                return (0, o.jsxs)(n(4458).fI, {
                    style: m.container,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [(0, o.jsxs)(n(4458).fI, {
                        style: m.contentAutoLayout,
                        alignItems: "center",
                        justifyContent: "center",
                        children: [(0, o.jsx)(l, {
                            tint: u,
                            iconGroup: s,
                            style: m.titleIcon
                        }), (0, o.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            children: t
                        }), g ? (0, o.jsx)(n(374533).A, {
                            onClick: g,
                            icon: () => (0, o.jsx)(n(708966).Q, {
                                iconGroup: n(799472).u,
                                variantName: "default",
                                colorPalette: u,
                                colorVariant: "secondary"
                            }),
                            ariaLabel: h.formatMessage(a.learnMore)
                        }) : void 0]
                    }), (0, o.jsxs)(n(4458).fI, {
                        gap: 12,
                        alignItems: "center",
                        justifyContent: "flex-end",
                        style: c,
                        flex: "1 1 0",
                        children: [(0, o.jsx)(n(4458).fI, {
                            gap: 8,
                            alignItems: "center",
                            justifyContent: "center",
                            style: c,
                            children: null == f ? void 0 : f.map((e, t) => e.isCustom ? e.render() : (0, o.jsx)(d, {
                                tint: u,
                                action: e
                            }, t))
                        }), (0, o.jsx)(r, {
                            onDismiss: p
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    label: t,
                    iconGroup: s,
                    staticIcon: u,
                    iconColor: p,
                    tint: f,
                    onDismiss: g,
                    actions: m,
                    onLearnMoreClick: h,
                    alignment: y = "center"
                } = e, b = i(f, p), v = (0, n(109939).tz)(), _ = s ? (0, o.jsx)(l, {
                    tint: f,
                    iconGroup: s,
                    style: b.titleIcon
                }) : u ? u({ ...b.icon,
                    ...b.titleIcon
                }) : null;
                return (0, o.jsxs)(n(4458).fI, {
                    style: b.container,
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    gap: 8,
                    children: [(0, o.jsxs)(n(4458).fI, {
                        style: b.contentAutoLayout,
                        gap: 24,
                        flexGrow: 1,
                        alignItems: "center",
                        justifyContent: "start" === y ? "space-between" : "center",
                        children: [(0, o.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            style: c,
                            children: [_, (0, o.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                children: t
                            }), h ? (0, o.jsx)(n(51831).m, {
                                content: () => v.formatMessage(a.learnMore),
                                children: e => (0, o.jsx)(n(374533).A, {
                                    onClick: h,
                                    icon: () => (0, o.jsx)(n(708966).Q, {
                                        iconGroup: n(799472).u,
                                        variantName: "default",
                                        colorPalette: f,
                                        colorVariant: "secondary"
                                    }),
                                    ariaLabel: v.formatMessage(a.learnMore),
                                    ...e
                                })
                            }) : void 0]
                        }), m ? (0, o.jsx)(n(4458).fI, {
                            gap: 8,
                            style: c,
                            children: null == m ? void 0 : m.map((e, t) => e.isCustom ? e.render() : (0, o.jsx)(d, {
                                tint: f,
                                action: e
                            }, t))
                        }) : null]
                    }), (0, o.jsx)(r, {
                        onDismiss: g
                    })]
                })
            }

            function f(e) {
                let {
                    label: t,
                    description: a,
                    iconGroup: s,
                    staticIcon: u,
                    iconColor: p,
                    tint: f,
                    onDismiss: g,
                    actions: m,
                    noRoundedCorners: h
                } = e, y = i(f, p), b = (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: n(632079).Tj[f].background.secondary,
                        padding: 16,
                        borderRadius: 8 * !h,
                        minHeight: 44,
                        flexShrink: 0
                    }
                }), [f, h]), v = s ? (0, o.jsx)(l, {
                    tint: f,
                    iconGroup: s
                }) : u ? u(y.icon) : null;
                return (0, o.jsxs)(n(4458).fI, {
                    style: b.container,
                    gap: 8,
                    width: "100%",
                    children: [v ? (0, o.jsx)(n(4458).fI, {
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        children: v
                    }) : null, (0, o.jsxs)(n(4458).VP, {
                        style: y.content,
                        gap: 8,
                        flex: "1 1 0",
                        children: [(0, o.jsxs)(n(4458).VP, {
                            gap: 4,
                            style: c,
                            children: [(0, o.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "gray" === f ? "primary" : void 0,
                                children: t
                            }), a ? (0, o.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                children: a
                            }) : null]
                        }), m ? (0, o.jsx)(n(4458).fI, {
                            gap: 8,
                            style: c,
                            children: null == m ? void 0 : m.map((e, t) => e.isCustom ? e.render() : (0, o.jsx)(d, {
                                tint: f,
                                action: e
                            }, t))
                        }) : null]
                    }), (0, o.jsx)(r, {
                        onDismiss: g
                    })]
                })
            }

            function g(e) {
                let {
                    label: t,
                    staticIcon: a,
                    tint: l,
                    iconColor: s,
                    onDismiss: u,
                    actions: p
                } = e, f = i(l, s), g = (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: n(632079).Tj[l].background.secondary,
                        paddingTop: 8,
                        paddingInlineEnd: 8,
                        paddingBottom: 8,
                        paddingInlineStart: 12,
                        borderRadius: 8,
                        minHeight: 44,
                        flexShrink: 0
                    }
                }), [l]);
                return (0, o.jsxs)(n(4458).fI, {
                    style: g.container,
                    gap: 8,
                    alignItems: p ? "center" : void 0,
                    justifyContent: p ? "center" : void 0,
                    width: "100%",
                    children: [a ? (0, o.jsx)(n(4458).fI, {
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        children: a(f.icon)
                    }) : null, (0, o.jsxs)(n(4458).fI, {
                        style: f.content,
                        alignItems: "center",
                        justifyContent: "space-between",
                        flex: "1 1 0",
                        children: [(0, o.jsx)(n(4458).VP, {
                            gap: 4,
                            style: c,
                            flex: "1 1 0",
                            children: (0, o.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                children: t
                            })
                        }), p ? (0, o.jsx)(n(4458).fI, {
                            gap: 8,
                            style: c,
                            children: null == p ? void 0 : p.map((e, t) => e.isCustom ? e.render() : (0, o.jsx)(d, {
                                tint: l,
                                action: e
                            }, t))
                        }) : null]
                    }), (0, o.jsx)(r, {
                        onDismiss: u
                    })]
                })
            }

            function m(e) {
                let {
                    tint: t,
                    onDismiss: a,
                    content: l,
                    alignment: s = "center",
                    verticalAlignment: c = "center"
                } = e, d = i(t);
                return (0, o.jsxs)(n(4458).fI, {
                    style: d.container,
                    gap: 8,
                    alignItems: c,
                    justifyContent: "space-between",
                    width: "100%",
                    children: [(0, o.jsx)(n(4458).fI, {
                        style: d.content,
                        flexGrow: 1,
                        justifyContent: s,
                        children: l
                    }), (0, o.jsx)(r, {
                        onDismiss: a
                    })]
                })
            }

            function h(e) {
                let {
                    display: t
                } = e;
                switch (t) {
                    case "inline":
                        return (0, o.jsx)(f, { ...e
                        });
                    case "full-width":
                        if (n(986939).A.isMobile) return (0, o.jsx)(u, { ...e
                        });
                        return (0, o.jsx)(p, { ...e
                        });
                    case "full-width-no-content":
                        return (0, o.jsx)(m, { ...e
                        });
                    case "inline-compact":
                        return (0, o.jsx)(g, { ...e
                        })
                }
                return (0, o.jsx)(o.Fragment, {})
            }
        },
        752533: (e, t, n) => {
            function o(e, t) {
                let o = n(25825).C6.notionDateTimeToLuxon(e, t.locale);
                return (0, n(850640).eV)({
                    value: o,
                    preset: "medium_with_time"
                })
            }
            n.d(t, {
                t: () => i
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

            function i(e, t, r = n(943003).vz) {
                let l = "",
                    s = "";
                return (e.starting && (l = "date" === e.starting.type ? (0, n(348582).Y)(e.starting, t, r) : o(e.starting, t)), e.ending && (s = "date" === e.ending.type ? (0, n(348582).Y)(e.ending, t, r) : o(e.ending, t)), l && s) ? t.formatMessage(a.startAndEnd, {
                    startDate: l,
                    endDate: s
                }) : l ? t.formatMessage(a.afterStart, {
                    startDate: l
                }) : t.formatMessage(a.beforeEnd, {
                    endDate: s
                })
            }
        },
        770408: (e, t, n) => {
            n.d(t, {
                s: () => a
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.56 0.68 12.88 12.7",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M9.8.788a1.65 1.65 0 0 0-2.013.73l-.274.563c-.143.237-.29.53-.427.802v.002l-.103.203c-.178.35-.336.639-.483.833L4.823 5.709H2.914c-.746 0-1.352.605-1.352 1.351v4.181c0 .747.606 1.352 1.352 1.352h2.657l.945.324.01.005h.001c.598.3 1.252.454 1.923.454h3.425a1.594 1.594 0 0 0 1.562-1.912c.432-.286.714-.779.714-1.333 0-.213-.044-.413-.119-.593.251-.278.406-.645.406-1.058a1.56 1.56 0 0 0-.284-.901c.12-.218.19-.47.19-.742 0-.88-.713-1.593-1.593-1.593H9.94q.05-.106.11-.225l.002-.004c.11-.222.243-.491.338-.817v-.002l.403-1.41A1.65 1.65 0 0 0 9.808.791zM8.623 2.655l.27-.556a.4.4 0 0 1 .464-.141.4.4 0 0 1 .235.483L9.19 3.85a3.5 3.5 0 0 1-.26.612l-.011.025c-.106.214-.236.475-.33.787a.946.946 0 0 0 .907 1.219h3.255c.19 0 .344.154.344.343 0 .1-.052.198-.157.266a.625.625 0 0 0 .066 1.087.32.32 0 0 1 .184.29.33.33 0 0 1-.231.317.625.625 0 0 0-.192 1.073.34.34 0 0 1 .136.261.34.34 0 0 1-.336.344.625.625 0 0 0-.452 1.057.344.344 0 0 1-.238.594H8.45c-.45 0-.886-.097-1.29-.286a.6.6 0 0 0-.151-.076l-1.131-.387a.6.6 0 0 0-.203-.034h-.006V6.634l1.764-1.88.037-.043c.236-.302.449-.705.627-1.057l.117-.232a10 10 0 0 1 .41-.767M2.812 7.06c0-.056.046-.101.102-.101H4.52v4.384H2.914a.1.1 0 0 1-.102-.102z"
                    })
                },
                a = (0, n(104509).wt)("handThumbsUpSmall", o, "small")
        },
        783925: (e, t, n) => {
            e.exports = n.p + "fc556f4d021cf665.png"
        },
        784626: (e, t, n) => {
            n.d(t, {
                a: () => o
            });

            function o(e) {
                return !!(e.target && e.target instanceof HTMLElement && e.target.classList.contains("rdp-day"))
            }
        },
        784836: (e, t, n) => {
            e.exports = n.p + "96fa7f82dea60fb2.png"
        },
        786221: (e, t, n) => {
            n.d(t, {
                HL: () => u,
                L5: () => d,
                Pl: () => P,
                parseCSV: () => L,
                ph: () => c
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(823215), n(354520), n(672577), n(430670), n(803949), n(581454), n(908872), n(737550);
            var o = () => n(627179),
                a = () => n(773352),
                i = () => n(247438);
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

            function c(e) {
                let {
                    table: t,
                    deps: {
                        intl: o,
                        randomShortID: a,
                        isPhoneNumber: r
                    },
                    options: {
                        useCsvAdaptiveSchema: l,
                        addHeadersToCollectionEnabled: c
                    }
                } = e, d = function(e, t, o, a, i = !1, r, l, c) {
                    var d;
                    let g = (e = e.filter(e => e.some(e => !!(e.text || "").trim()))).length > 0 ? e[0].length : 0,
                        m = e.map((e, t) => ({
                            row: e,
                            rowIndex: t
                        })).filter(({
                            row: e
                        }) => e.length !== g);
                    if (m.length > 0) {
                        let e = m[0];
                        throw new(n(101787)).yI4("CsvImportError", {
                            data: {},
                            clientData: {
                                type: "csv_import_inconsistent_columns",
                                messageValues: {
                                    numTitleColumns: g,
                                    numBadRows: m.length,
                                    firstBadRowIndex: e.rowIndex + 1,
                                    firstBadRow: JSON.stringify(e.row.map(e => e.text)),
                                    firstBadRowLength: e.row.length
                                }
                            }
                        })
                    }
                    let h = null == (d = e[0]) ? void 0 : d.length;
                    null == r || r.set("ColumnCategory", function(e) {
                        if (e < 50) return "lessthan50";
                        if (e < 100) return "lessthan100";
                        if (e < 500) return "lessthan500";
                        if (e < 1e3) return "lessthan1000";
                        if (e < 5e3) return "lessthan5000";
                        else return "greaterthan5000"
                    }(h));
                    let y = null == l ? void 0 : l.columnHeaders,
                        v = void 0 !== y && y.length > 0,
                        x = [];
                    v ? (x = y.flatMap(e => e.doNotImport ? [] : [e.headerName]), null != l && l.useFirstRowAsHeaders && e.shift()) : 1 === e.length || c ? x = e[0].map((e, n) => t.formatMessage(s.genericColumnName, {
                        columnNumber: n + 1
                    })) : e.length > 1 && (x = e[0].map(e => e.text), e.shift());
                    let k = e,
                        {
                            types: w,
                            schema: I,
                            pages: S
                        } = v && y ? function(e) {
                            let {
                                body: t,
                                intl: o,
                                randomShortID: a,
                                headerTitles: i,
                                headersMetadata: r,
                                isPreTypedCSV: l,
                                csvEvalContext: s
                            } = e, c = performance.now(), {
                                types: d,
                                notToImportColumnIndex: u
                            } = function(e) {
                                let {
                                    intl: t,
                                    columns: o,
                                    randomShortID: a
                                } = e, i = [];
                                return {
                                    types: o.flatMap((e, o) => {
                                        if (e.doNotImport) return i.push(o), [];
                                        let r = n(763230).D_;
                                        return "checkbox" === e.propertyType ? r = e => b(e) : "number" === e.propertyType ? r = e => _(e) : "date" === e.propertyType && "format" in e ? r = n => C(n, t, e.format) : "date" === e.propertyType && (r = e => C(e, t)), [{
                                            id: "title" === e.propertyType ? "title" : a(),
                                            schema: {
                                                name: e.headerName,
                                                type: e.propertyType
                                            },
                                            coerce: r
                                        }]
                                    }),
                                    notToImportColumnIndex: i
                                }
                            }({
                                intl: o,
                                columns: r,
                                randomShortID: a
                            }), g = performance.now() - c;
                            null == s || s.set("columnTypeInferenceTimeTakenMS", g);
                            let {
                                pages: m,
                                selectPropertyOptions: h
                            } = f({
                                body: t,
                                types: d,
                                isPreTypedCSV: l,
                                notToImportColumnIndex: u
                            });
                            if (h)
                                for (let e of d) h[e.id] && ("select" === e.schema.type || "multi_select" === e.schema.type) && (e.schema.options = function(e) {
                                    let {
                                        randomShortID: t,
                                        optionValues: o,
                                        propertyType: a
                                    } = e;
                                    return ("multi_select" === a ? o.flatMap(e => e.split(",").map(e => e.trim()).filter(e => e.length > 0)) : o.map(e => e.trim()).filter(e => e.length > 0)).filter((e, t, n) => n.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t).map(e => ({
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
                                schema: y
                            } = p({
                                body: t,
                                intl: o,
                                randomShortID: a,
                                headers: i,
                                types: d,
                                isPreTypedCSV: l
                            });
                            return {
                                types: d,
                                schema: y,
                                pages: m
                            }
                        }({
                            body: k,
                            intl: t,
                            randomShortID: o,
                            headerTitles: x,
                            headersMetadata: y,
                            isPreTypedCSV: v,
                            csvEvalContext: r
                        }) : function(e) {
                            let {
                                body: t,
                                intl: n,
                                randomShortID: o,
                                isPhoneNumber: a,
                                useCsvAdaptiveSchema: i,
                                headers: r,
                                isPreTypedCSV: l,
                                csvEvalContext: s
                            } = e, c = performance.now(), {
                                types: d
                            } = u({
                                body: t,
                                intl: n,
                                randomShortID: o,
                                isPhoneNumber: a,
                                useCsvAdaptiveSchema: i,
                                csvEvalContext: s
                            }), g = performance.now() - c;
                            null == s || s.set("columnTypeInferenceTimeTakenMS", g);
                            let {
                                schema: m
                            } = p({
                                body: t,
                                intl: n,
                                randomShortID: o,
                                headers: r,
                                types: d,
                                isPreTypedCSV: l
                            }), {
                                pages: h
                            } = f({
                                body: t,
                                types: d,
                                isPreTypedCSV: l
                            });
                            return {
                                types: d,
                                schema: m,
                                pages: h
                            }
                        }({
                            body: k,
                            intl: t,
                            randomShortID: o,
                            isPhoneNumber: a,
                            useCsvAdaptiveSchema: i,
                            headers: x,
                            isPreTypedCSV: v,
                            csvEvalContext: r
                        });
                    return {
                        schema: I,
                        types: w,
                        pages: S
                    }
                }(t, o, a, r, l, e.csvEvalContext, e.metadata, c);
                return function(e) {
                    let {
                        actor: t,
                        blockType: o,
                        root: a,
                        parent: r,
                        name: l,
                        format: s,
                        deps: {
                            randomID: c,
                            spaceIdCreator: d,
                            addFileIdsToBlock: u,
                            createCollectionAsyncWithStatusLabel: p
                        },
                        options: {
                            ignoreBlockCount: f,
                            legacyNonCrdt: g
                        },
                        pages: m,
                        schema: h,
                        columnIds: y
                    } = e, b = e.collectionId ? ? (null == d ? void 0 : d.idInSavedSpace(n(46241).V)) ? ? c(), v = e.collectionViewId ? ? (null == d ? void 0 : d.idInSavedSpace(n(435544).G)) ? ? c(), _ = [], x = [], k = [], {
                        operations: C
                    } = n(993189).WBy.create({
                        id: b,
                        parent: a.existing ? a.record.pointer : {
                            id: a.id,
                            table: n(682956).ev,
                            spaceId: r.spaceId
                        },
                        space_id: r.spaceId,
                        name: i().x9d(l),
                        schema: h,
                        format: {
                            collection_page_properties: n(381453).oE(y.map(e => {
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
                    _.push(...C);
                    let w = {
                            id: a.existing ? a.record.id : a.id,
                            type: o,
                            collection_id: b,
                            format: {
                                collection_pointer: {
                                    table: n(46241).V,
                                    id: b,
                                    spaceId: r.spaceId
                                }
                            },
                            view_ids: [v],
                            createdBy: t,
                            parentPointer: r,
                            space_id: r.spaceId
                        },
                        {
                            createOrUpdateBlockOperations: I
                        } = n(877308).Rf({
                            blockModelArgs: w,
                            existingBlock: a.existing ? a.record : void 0,
                            legacyNonCrdt: g
                        });
                    if (_.push(...I), p) {
                        let {
                            operations: e
                        } = n(993189).lqf.create({
                            id: v,
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
                                    collectionId: b,
                                    spaceId: r.spaceId
                                }),
                                table_properties: n(381453).oE(y.map(e => {
                                    if (e) return {
                                        visible: !0,
                                        property: e
                                    }
                                })),
                                ...s
                            },
                            createdBy: t
                        });
                        _.push(...e)
                    }
                    let S = function(e) {
                        let {
                            actor: t,
                            collectionId: o,
                            spaceId: a,
                            pages: i,
                            randomID: r,
                            spaceIdCreator: l,
                            options: s
                        } = e;
                        return i.map(i => {
                            let c = (null == l ? void 0 : l.idInSavedSpace(n(682956).ev)) ? ? r(),
                                {
                                    model: d,
                                    operations: u
                                } = n(993189).zgg.create({
                                    id: c,
                                    parentPointer: {
                                        id: o,
                                        table: n(46241).V,
                                        spaceId: a
                                    },
                                    space_id: a,
                                    type: n(955630).xd.page,
                                    createdBy: t,
                                    properties: i,
                                    ...s.ignoreBlockCount ? {
                                        ignore_block_count: !0
                                    } : void 0
                                }),
                                p = [...u];
                            if (e.addFileIdsToBlock) {
                                let e = (0, n(781539).c)(d, "", "").fileIds;
                                e.length > 0 && p.push(n(488307).op.update({
                                    pointer: d.pointer,
                                    path: [],
                                    args: {
                                        file_ids: e.map(e => e.id)
                                    }
                                }))
                            }
                            return {
                                id: c,
                                operations: p
                            }
                        })
                    }({
                        actor: t,
                        collectionId: b,
                        addFileIdsToBlock: u,
                        spaceId: r.spaceId,
                        pages: m,
                        randomID: c,
                        spaceIdCreator: d,
                        options: {
                            ignoreBlockCount: f
                        }
                    });
                    for (let {
                            operations: e
                        } of S) x.push(...e);
                    let {
                        operations: M
                    } = n(993189).lqf.create({
                        id: v,
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
                                collectionId: b,
                                spaceId: r.spaceId
                            }),
                            table_properties: n(381453).oE(y.map(e => {
                                if (e) return {
                                    visible: !0,
                                    property: e
                                }
                            })),
                            ...s
                        },
                        page_sort: S.map(e => e.id).slice(0, n(9247).WF),
                        createdBy: t
                    });
                    if (x.push(...M), !p) return {
                        operations: [..._, ...x]
                    }; {
                        let e = {
                                table: n(46241).V,
                                id: b,
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
                        return k.push(t), {
                            operations: x,
                            createCollectionOperations: _,
                            collectionFinishedOperations: k
                        }
                    }
                }({ ...d,
                    columnIds: d.types.map(e => e.id),
                    ...e
                })
            }

            function d(e) {
                let {
                    table: t,
                    actor: o,
                    parent: a,
                    tableId: i,
                    deps: {
                        randomID: r,
                        spaceIdCreator: l,
                        randomShortID: s
                    },
                    options: {
                        legacyNonCrdt: c,
                        ignoreBlockCount: d,
                        hasHeaderRow: u,
                        hasHeaderColumn: p
                    }
                } = e, f = [], g = t.length ? t[0].map(e => s()) : [], m = t.map(e => (null == l ? void 0 : l.idInSavedSpace(n(682956).ev)) ? ? r());
                return f.push(...n(993189).zgg.create({
                    id: i,
                    type: n(955630).xd.table,
                    content: m,
                    format: {
                        table_block_column_order: g,
                        ...u ? {
                            table_block_column_header: !0
                        } : {},
                        ...p ? {
                            table_block_row_header: !0
                        } : {}
                    },
                    properties: {},
                    parentPointer: a,
                    space_id: a.spaceId,
                    createdBy: o,
                    ignore_block_count: !!d || void 0,
                    legacyNonCrdt: c
                }).operations), f.push(...m.flatMap((e, r) => {
                    let l = (0, n(722371).MU)(g.flatMap((e, n) => {
                        var o;
                        let a = null == (o = t[r]) || null == (o = o[n]) ? void 0 : o.textValue;
                        return a ? [
                            [e, a]
                        ] : []
                    }));
                    return n(993189).zgg.create({
                        id: e,
                        type: n(955630).xd.tableRow,
                        parentPointer: {
                            id: i,
                            table: n(682956).ev,
                            spaceId: a.spaceId
                        },
                        space_id: a.spaceId,
                        properties: l,
                        createdBy: o,
                        legacyNonCrdt: c
                    }).operations
                })), {
                    operations: f
                }
            }

            function u(e) {
                let {
                    body: t,
                    intl: i,
                    randomShortID: s,
                    isPhoneNumber: c,
                    useCsvAdaptiveSchema: d,
                    csvEvalContext: u
                } = e, p = [{
                    test: T.bind(null, c),
                    sampledSchemaIsComplete: !0
                }, {
                    test: x,
                    sampledSchemaIsComplete: !0
                }, {
                    test: S,
                    sampledSchemaIsComplete: !0
                }, {
                    test: A,
                    sampledSchemaIsComplete: !0
                }, {
                    test: w,
                    sampledSchemaIsComplete: !0
                }, {
                    test: v,
                    sampledSchemaIsComplete: !1
                }, {
                    test: B,
                    sampledSchemaIsComplete: !1
                }, {
                    test: D,
                    sampledSchemaIsComplete: !1
                }, {
                    test: E,
                    sampledSchemaIsComplete: !0
                }];
                return {
                    types: n(381453).oE(n(381453).$1(t).map(e => e.length && e[0].columnType ? e[0].columnType : function(e, t, i, s, c, d) {
                        let u = t.filter(e => !!e);
                        if (0 === u.length) return E(e, u);
                        if (c) {
                            let n = u.length > 1e3 ? function(e) {
                                let t = e.length,
                                    n = [];
                                for (let o = 0; o < 1e3; o++) {
                                    let o = Math.floor(Math.random() * t);
                                    n.push(e[o])
                                }
                                return n
                            }(u) : u;
                            for (let c of s) {
                                let s = c.test(e, n, i);
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
                                        }), n = E(e, t);
                                        let i = (null == d ? void 0 : d.get(r)) || 0;
                                        (0, o().Et)(i) && (null == d || d.set(r, i + 1))
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
                                    let i = (null == d ? void 0 : d.get(l)) || 0;
                                    return (0, o().Et)(i) && (null == d || d.set(l, i + 1)), n
                                }
                            }
                        } else {
                            let t = u.filter(e => !n(381453).Im(e)).slice(0, 100);
                            for (let n of s) {
                                let s = n.test(e, t, i);
                                if (s) {
                                    let c = n.sampledSchemaIsComplete || t.length === u.length ? s : n.test(e, u, i);
                                    if (c) {
                                        if (!1 === c.isFullMatch) {
                                            a().log({
                                                level: "info",
                                                from: "csvHelper",
                                                type: "csvColumnTypes",
                                                data: {
                                                    message: "Partial column type match detected, Potential data loss due to parsing failures",
                                                    columnType: c.schema.type,
                                                    matchType: "Partial"
                                                }
                                            });
                                            let e = (null == d ? void 0 : d.get(r)) || 0;
                                            (0, o().Et)(e) && (null == d || d.set(r, e + 1))
                                        } else {
                                            let e = (null == d ? void 0 : d.get(l)) || 0;
                                            (0, o().Et)(e) && (null == d || d.set(l, e + 1))
                                        }
                                        return c
                                    }
                                }
                            }
                        }
                        return E(e, [])
                    }(i, e.map(e => null == e ? void 0 : e.text), s, p, d, u)))
                }
            }

            function p(e) {
                let {
                    body: t,
                    intl: n,
                    randomShortID: o,
                    headers: a,
                    types: r,
                    isPreTypedCSV: l
                } = e, c = a.map(() => !1);
                if (!l) {
                    for (let e = 0; e < a.length; e++)
                        if ("text" === r[e].schema.type)
                            for (let n = 0; n < t.length; n++) {
                                let o = t[n][e].textValue;
                                if (o) {
                                    for (let a of o)
                                        if (i().BEe(a)) {
                                            c[e] = !0, n = t.length;
                                            break
                                        }
                                }
                            }
                }
                let d = !0,
                    u = {
                        title: {
                            type: "title",
                            name: n.formatMessage(s.titleColumnName)
                        }
                    };
                return a.forEach((e, t) => {
                    let n = r[t];
                    if (n)
                        if ("text" !== n.schema.type || !d || c[t] || l)
                            if (l && "title" === n.schema.type) {
                                let t = u.title;
                                t && (t.name = e)
                            } else {
                                let t = n.id ? ? o();
                                n.id || (n.id = t), u[t] = { ...n.schema,
                                    name: e
                                }
                            }
                    else {
                        d = !1, n.id = "title", n.schema = {
                            type: "title",
                            name: e
                        };
                        let t = u.title;
                        t && (t.name = e)
                    }
                }), {
                    schema: u
                }
            }

            function f(e) {
                let {
                    body: t,
                    types: o,
                    isPreTypedCSV: a,
                    notToImportColumnIndex: r
                } = e, l = {};
                return {
                    pages: t.map(e => {
                        null != r && r.length && (e = e.filter((e, t) => !r.includes(t)));
                        let t = {};
                        return o.forEach((o, r) => {
                            if (o) {
                                let {
                                    id: s,
                                    schema: c,
                                    coerce: d
                                } = o, {
                                    type: u
                                } = c;
                                if (s) {
                                    let o = e[r] || "";
                                    if ("url" === u) t[s] = n(561872).jw(o.text);
                                    else if ("date" === u) t[s] = n(561872).m5(d(o.text));
                                    else if ("text" === u) t[s] = o.textValue || i().x9d(d(o.text));
                                    else if ("file" === u) t[s] = o.textValue || [];
                                    else if ("select" === u || "multi_select" === u) {
                                        let e = [];
                                        if (e = "multi_select" === u ? o.text.split(",").map(e => e.trim()).filter(e => e.length > 0).filter((e, t, n) => n.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t) : o.text.trim() ? [o.text.trim()] : [], a)
                                            for (let t of e) {
                                                if (!t || !t.trim()) continue;
                                                let e = t.trim();
                                                l[s] || (l[s] = []), l[s].find(t => t.toLowerCase() === e.toLowerCase()) || l[s].push(e)
                                            }
                                        t[s] = i().x9d(d(o.text))
                                    } else t[s] = i().x9d(d(o.text))
                                }
                            }
                        }), t
                    }),
                    selectPropertyOptions: a ? l : void 0
                }
            }
            let g = ["yes", "Yes", "true", "True", "checked"],
                m = ["no", "No", "false", "False", "unchecked"];

            function h(e) {
                return g.some(t => e === t) || m.some(t => e === t)
            }

            function y(e, t) {
                return e.length === t.length
            }

            function b(e) {
                return g.some(t => e === t) ? n(745680).I1 : n(745680).oP
            }

            function v(e, t) {
                if (t.every(h)) return {
                    schema: {
                        type: "checkbox"
                    },
                    validate: h,
                    coerce: e => b(e)
                }
            }

            function _(e) {
                let t = n(700369).sA(e);
                return `${t?t.value:void 0}`
            }

            function x(e, t) {
                let a = t.map(n(700369).sA),
                    i = a[0];
                if (i && a.every(e => !!(e && e.format === i.format))) return {
                    schema: {
                        type: "number",
                        number_format: i.format
                    },
                    validate(e) {
                        let t = n(700369).sA(e);
                        return !o().pN(t) && t.format === i.format
                    },
                    coerce: e => _(e)
                }
            }

            function k(e, t) {
                return (!parseInt(t) || !(t.length <= 6)) && !!n(629518).JC(t, e)
            }

            function C(e, t, o) {
                let a = e.includes("→");
                return n(629518).JC(e, t, a ? void 0 : o)
            }

            function w(e, t) {
                let n = t.filter(t => k(e, t));
                if (n.length >= t.length / 2) return {
                    schema: {
                        type: "date"
                    },
                    validate: t => k(e, t),
                    coerce: t => C(t, e),
                    isFullMatch: y(t, n)
                }
            }

            function I(e) {
                return e.length < 320 && e.includes("@") && n(159523).t6(e, "email")
            }

            function S(e, t) {
                let o = t.filter(I);
                if (o.length >= t.length / 2) return {
                    schema: {
                        type: "email"
                    },
                    validate: I,
                    coerce: n(763230).D_,
                    isFullMatch: y(t, o)
                }
            }

            function M(e) {
                return e.length < 320 && n(159523).t6(e, "url")
            }

            function A(e, t) {
                let o = t.filter(M);
                if (o.length >= t.length / 2) return {
                    schema: {
                        type: "url"
                    },
                    validate: M,
                    coerce: n(763230).D_,
                    isFullMatch: y(t, o)
                }
            }

            function j(e, t) {
                return !String(t).match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/) && e(String(t))
            }

            function T(e, t, o) {
                let a = j.bind(null, e),
                    i = o.filter(a);
                if (i.length >= o.length / 2) return {
                    schema: {
                        type: "phone_number"
                    },
                    validate: a,
                    coerce: n(763230).D_,
                    isFullMatch: y(o, i)
                }
            }

            function B(e, t, o) {
                var a, i, r, l;
                let s = [];
                t.forEach(e => e.split(",").forEach(e => s.push(e.trim())));
                let c = n(561872).ki(s),
                    d = new Set(c);
                if (a = c.length, (i = s.length) > t.length && (r = a, l = i, r > 0 && r ** 2 < l)) return {
                    schema: {
                        type: "multi_select",
                        options: c.map((e, t) => ({
                            id: o(),
                            value: e,
                            color: (0, n(326044).Z)([])
                        }))
                    },
                    validate: e => d.has(e),
                    coerce: n(763230).D_
                }
            }

            function D(e, t, o) {
                var a, i;
                let r = n(561872).ki(t),
                    l = new Set(r);
                if (a = r.length, i = t.length, a > 0 && a ** 2 < i) return {
                    schema: {
                        type: "select",
                        options: r.map((e, t) => ({
                            id: o(),
                            value: e,
                            color: (0, n(326044).Z)([])
                        }))
                    },
                    validate: e => l.has(e),
                    coerce: n(763230).D_
                }
            }

            function E(e, t) {
                return {
                    schema: {
                        type: "text"
                    },
                    validate: () => !0,
                    coerce: n(763230).D_
                }
            }

            function L(e, t) {
                t || (t = function(e, t) {
                    let n = ",",
                        o = 0,
                        a = e.split(/\r?\n/).slice(0, 10).join("\n");
                    for (let e of t) {
                        let t = function(e, t) {
                            let n = [],
                                o = [],
                                a = "",
                                i = !1;
                            for (let r = 0; r < e.length; r++) {
                                let l = e[r],
                                    s = e[r + 1];
                                '"' === l ? i && '"' === s ? (a += '"', r++) : i = !i : l !== t || i ? "\n" !== l && "\r" !== l || i ? a += l : (o.push(a), o.length > 0 && n.push(o), o = [], a = "", "\r" === l && "\n" === s && r++) : (o.push(a), a = "")
                            }
                            return (a || o.length > 0) && (o.push(a), n.push(o)), n.filter(e => e.length > 0 && e.some(e => e.trim()))
                        }(a, e);
                        if (t.length <= 1) continue;
                        let i = t.map(e => e.length),
                            r = function(e) {
                                var t;
                                return Number((null == (t = Object.entries(e.reduce((e, t) => (e[t] = (e[t] || 0) + 1, e), {})).sort((e, t) => t[1] - e[1])[0]) ? void 0 : t[0]) || 0)
                            }(i),
                            l = i.filter(e => e === r).length / i.length,
                            s = r >= 6 ? .6 : .7;
                        if (r <= 1 || l < s) continue;
                        let c = t.flat().filter(t => t.includes(e)).length / (t.length * r),
                            d = 100 * l + 10 * r - 50 * c;
                        d > o && (o = d, n = e)
                    }
                    return n
                }(e, [",", ";", "	", "|"]));
                let n = [],
                    o = [],
                    a = "",
                    i = !1;
                for (let r = 0; r < e.length; r++) {
                    let l = e[r],
                        s = e[r + 1];
                    if ('"' === l) i && '"' === s ? (a += '"', r++) : i = !i;
                    else if (l !== t || i)
                        if ("\n" !== l && ("\r" !== l || "\n" === s) || i) {
                            if ("\r" === l && "\n" === s && !i) continue;
                            a += l
                        } else o.push(a), n.push(o), o = [], a = "";
                    else o.push(a), a = ""
                }
                return (a || o.length > 0) && (o.push(a), n.push(o)), n
            }
            let P = [{
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
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.87 3.62 16.25 12.75",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6.303 3.625c-.71 0-1.374.355-1.768.946L2.232 8.025c-.233.35-.357.76-.357 1.18v5.045c0 1.174.951 2.125 2.125 2.125h12a2.125 2.125 0 0 0 2.125-2.125V9.204c0-.42-.124-.83-.357-1.179l-2.303-3.454a2.13 2.13 0 0 0-1.768-.946zm-.728 1.64a.88.88 0 0 1 .728-.39h7.394c.293 0 .566.146.728.39l2.303 3.454a1 1 0 0 1 .083.156h-4.702a.625.625 0 0 0-.625.625v.476a1.484 1.484 0 0 1-2.968 0V9.5a.625.625 0 0 0-.625-.625H3.189a1 1 0 0 1 .083-.156zm-2.45 4.86H7.27a2.734 2.734 0 0 0 5.46 0h4.145v4.125a.875.875 0 0 1-.875.875H4a.875.875 0 0 1-.875-.875z"
                    })
                },
                a = (0, n(104509).wt)("inbox", o, "default")
        },
        799891: (e, t, n) => {
            n.d(t, {
                y: () => a
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.81 2.39 16.38 15.08",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M16.938 9.353c0-2.97-2.539-5.54-6.545-5.697L10 3.648c-4.232 0-6.938 2.639-6.938 5.705 0 1.438.583 2.752 1.617 3.76a.63.63 0 0 1 .18.546 7.3 7.3 0 0 1-.89 2.528c1.108-.13 2.12-.614 3.01-1.344l.063-.044a.63.63 0 0 1 .505-.073 9 9 0 0 0 2.454.333l.392-.007c4.006-.158 6.545-2.728 6.545-5.699m1.25 0c0 3.803-3.234 6.766-7.747 6.948l-.44.008a10.2 10.2 0 0 1-2.485-.299c-1.349 1.022-2.985 1.62-4.826 1.428a.625.625 0 0 1-.406-1.033c.712-.817 1.096-1.737 1.284-2.642-1.116-1.197-1.756-2.733-1.756-4.41 0-3.925 3.447-6.955 8.189-6.955l.44.009c4.512.181 7.747 3.143 7.747 6.946"
                    })
                },
                a = (0, n(104509).wt)("chatBubble", o, "default")
        },
        832248: (e, t, n) => {
            n.d(t, {
                S7: () => l,
                fF: () => v,
                es: () => b,
                LE: () => h,
                zs: () => m,
                HE: () => g,
                yg: () => y,
                QH: () => f,
                kn: () => p,
                mB: () => s,
                L$: () => c,
                X3: () => d,
                jX: () => u
            }), n(898992), n(354520), n(581454), n(944114);
            var o = () => n(896346);
            class a extends o().p3 {
                constructor(e, t) {
                    super(e, t)
                }
                after(e, t) {
                    return super.after(e, t)
                }
            }
            let i = (0, n(109939).YK)({
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

            function c(e) {
                return (0, n(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 999
            }

            function d(e) {
                let {
                    start_date: t,
                    frequency: o,
                    interval: i,
                    weekdays: s,
                    timezone: c,
                    hour: d,
                    minute: u
                } = e, p = (0, n(943003).eU)(t);
                "hour" === o && p.setUTCHours(d ? ? 0, u ? ? 0, 0, 0);
                let f = "week" === o && s ? s.map(e => l[e]) : void 0,
                    g = {};
                return (0, n(722371).O9)(e.end_condition) && ("date" === e.end_condition.type ? g.until = (0, n(943003).eU)(e.end_condition.end_at) : "number" === e.end_condition.type ? g.count = e.end_condition.number_of_occurrences : (0, n(722371).HB)(e.end_condition)), "month" === e.frequency && (0, n(722371).O9)(e.monthly_restriction) && ("monthdays" === e.monthly_restriction.type ? g.bymonthday = e.monthly_restriction.monthdays : "weekdays_in_month" === e.monthly_restriction.type ? g.byweekday = (function e(t, ...n) {
                    if (0 === n.length) return t.map(e => [e]);
                    let o = [];
                    for (let a of t) o.push(...e(n[0], ...n.slice(1)).map(e => [a, ...e]));
                    return o
                })(e.monthly_restriction.weekdays, e.monthly_restriction.week_numbers).map(([e, t]) => l[e].nth(t)) : (0, n(722371).HB)(e.monthly_restriction)), new a({
                    freq: r[o],
                    dtstart: p,
                    interval: i,
                    byweekday: f,
                    tzid: "hour" === o ? void 0 : c,
                    ..."hour" === o ? {} : {
                        byhour: d ? ? 0,
                        byminute: u ? ? 0,
                        bysecond: 0
                    },
                    ...g
                })
            }

            function u(e) {
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
                    o = e.length,
                    a = null == (t = e[0].getRecurrence()) ? void 0 : t.frequency,
                    i = o > 1,
                    r = n.length >= 1;
                return {
                    violatesConstraint: i || r,
                    templateNestingExceedsMaxDepth: i,
                    ancestorHasDailyTemplate: r,
                    nestedDepthOfAutomationAncestors: o,
                    immediateAncestorRecurrenceType: a
                }
            }

            function p(e) {
                return 0 === e.hour || 1 === e.hour || 2 === e.hour
            }

            function f(e) {
                return d(e).after((0, n(943003).eU)((0, n(943003).Rz)())) || void 0
            }

            function g(e) {
                let {
                    recurrence: t,
                    intl: o
                } = e, a = "hour" === t.frequency ? function(e) {
                    let t = n(906745).DateTime.now();
                    if (n(906745).DateTime.fromMillis(e.start_date) > t) return e;
                    let o = t.startOf("hour");
                    return { ...e,
                        start_date: o.toMillis(),
                        hour: o.hour,
                        minute: o.minute
                    }
                }(t) : t, r = f(b(a));
                if (!r) return;
                let l = n(906745).DateTime.fromJSDate(r).toUTC().setZone("local", {
                    keepLocalTime: !0
                }).setLocale((0, n(599412).H)(o));
                "hour" !== a.frequency && (l = l.setZone(a.timezone));
                let s = "hour" !== t.frequency && p(t),
                    c = (0, n(850640).Yq)({
                        date: l,
                        dateFormat: "relative",
                        allowRelativeDates: !0,
                        intl: o,
                        shortenDate: !0
                    });
                if (s) return o.formatMessage(i.dateBetweenMidnightAnd3AM, {
                    date: c
                }); {
                    let e = l.toLocaleString(n(906745).DateTime.TIME_SIMPLE);
                    return t.timezone !== (0, n(714350).P)() && (e += ` ${l.toFormat("ZZZZ")}`), o.formatMessage(i.dateAtTime, {
                        date: c,
                        time: e
                    })
                }
            }

            function m(e, t) {
                return (0, n(722371).O9)(e) ? "number" === e.type ? t.formatMessage(i.numberEndConditionDescription, {
                    number: e.number_of_occurrences
                }) : "date" === e.type ? (0, n(850640).Yq)({
                    date: n(906745).DateTime.fromMillis(e.end_at),
                    dateFormat: "relative",
                    allowRelativeDates: !0,
                    intl: t,
                    shortenDate: !0
                }) : void(0, n(722371).HB)(e) : t.formatMessage(i.noEndCondition)
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

            function y(e, t, n) {
                return e.plus(n - t)
            }

            function b(e) {
                var t;
                let o;
                return { ...e,
                    start_date: (0, n(943003).Rz)(new Date(e.start_date)),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? (t = e.end_condition, o = n(906745).DateTime.fromMillis(t.end_at).set({
                        hour: e.hour ? ? 0,
                        minute: e.minute ? ? 0
                    }), {
                        type: "date",
                        end_at: (0, n(943003).Rz)(o.toJSDate())
                    }) : (0, n(722371).HB)(e.end_condition) : void 0
                }
            }

            function v(e, t) {
                let o = n(381453).fN(e, e => void 0 !== e),
                    a = n(381453).fN(t, e => void 0 !== e);
                return n(381453).n4(o, a)
            }
        },
        832338: (e, t, n) => {
            e.exports = n.p + "4d1ffa233a574cb5.png"
        },
        862215: (e, t, n) => {
            n.d(t, {
                G: () => o
            });

            function o(e, t) {
                let {
                    device: n
                } = e;
                n.isAndroid && t.focus(), t.select()
            }
        },
        871086: (e, t, n) => {
            n.d(t, {
                w: () => o
            });

            function o() {
                let e = (0, n(476743).a)();
                return (0, n(682985).K8)(() => {
                    var t;
                    return (null == e || null == (t = e.getSettings()) ? void 0 : t.business_trial_items_completed) ? ? {}
                }, [e])
            }
        },
        876252: (e, t, n) => {
            n.d(t, {
                $: () => o
            });

            function o() {
                return (0, n(682985).O$)(n(728372).AppStoreCurrentUserStore)
            }
        },
        877163: (e, t, n) => {
            n.d(t, {
                m: () => a
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.62 1.77 10.75 15.98",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M11.633 1.812c.263.096.43.354.41.632l-.392 5.51h3.099a.625.625 0 0 1 .506.992l-6.18 8.54a.625.625 0 0 1-1.13-.412l.402-5.5H5.25a.625.625 0 0 1-.507-.99l6.17-8.55a.625.625 0 0 1 .72-.222m-5.161 8.513H9.02a.625.625 0 0 1 .623.67l-.29 3.976 4.173-5.766H10.98a.625.625 0 0 1-.623-.67l.284-3.987z"
                    })
                },
                a = (0, n(104509).wt)("lightning", o, "default")
        },
        879817: (e, t, n) => {
            e.exports = n.p + "1ff0049b43405408.png"
        },
        884877: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(296540);
            var o = n(474848);

            function a(e) {
                let t = {
                    display: "inline-block",
                    minWidth: e.size,
                    minHeight: e.size
                };
                return "x" === e.axis ? t.minHeight = 1 : "y" === e.axis && (t.minWidth = 1), (0, o.jsx)("div", {
                    style: t
                })
            }
        },
        889503: (e, t, n) => {
            n.r(t), n.d(t, {
                getStripe: () => i,
                getStripeAppearance: () => c,
                optionalPaymentMethodIdGivenPaymentData: () => u,
                stripeElementLocaleGivenNotionLocale: () => r,
                translateStripeError: () => s,
                useElementsOptions: () => l
            });
            var o = n(296540);
            let a = null;
            async function i() {
                return a || (n(37458).loadStripe.setLoadParameters({
                    advancedFraudSignals: !1
                }), a = (0, n(37458).loadStripe)(n(986939).A.stripe.key)), a
            }

            function r(e) {
                switch (e) {
                    case "en-US":
                        return "en";
                    case "ko-KR":
                        return "ko";
                    case "ja-JP":
                        return "ja";
                    case "fr-FR":
                        return "fr-FR";
                    case "de-DE":
                        return "de";
                    case "es-ES":
                        return "es-ES";
                    case "es-LA":
                        return "es-419";
                    case "pt-BR":
                        return "pt-BR";
                    case "zh-CN":
                        return "zh";
                    case "zh-TW":
                        return "zh-TW";
                    case "da-DK":
                        return "da";
                    case "nl-NL":
                        return "nl";
                    case "fi-FI":
                        return "fi";
                    case "nb-NO":
                        return "nb";
                    case "sv-SE":
                        return "sv";
                    default:
                        return "auto"
                }
            }

            function l(e) {
                let t = (0, n(960253).e)(),
                    a = (0, n(632079).O4)({
                        theme: t
                    }),
                    {
                        type: i
                    } = e,
                    l = "setup" === i || "subscription" === i ? e.currency : void 0,
                    s = "subscription" === i ? e.amount : void 0,
                    d = (0, n(682985).K8)(() => {
                        var e;
                        return (null == (e = n(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.preferred_locale) || n(599412).q
                    }, []);
                return (0, o.useMemo)(() => {
                    let e = {
                            appearance: c(a, t),
                            locale: r(d)
                        },
                        o = {
                            paymentMethodTypes: (0, n(56281).VV)({
                                currency: l
                            })
                        };
                    switch (i) {
                        case "address":
                            return e;
                        case "setup":
                            return { ...e,
                                ...o,
                                currency: null == l ? void 0 : l.toLowerCase(),
                                mode: "setup",
                                paymentMethodCreation: "manual"
                            };
                        case "subscription":
                            return { ...e,
                                ...o,
                                amount: s,
                                currency: null == l ? void 0 : l.toLowerCase(),
                                mode: "subscription",
                                paymentMethodCreation: "manual",
                                setupFutureUsage: "off_session",
                                loader: "never"
                            };
                        default:
                            (0, n(722371).HB)(i)
                    }
                }, [a, t, d, l, i, s])
            }

            function s(e, t) {
                if (!t.code) return t.message || "";
                switch (t.code) {
                    case "invalid_expiry_year_past":
                        return e.formatMessage({
                            id: "stripeHelpers.invalidExpiryYear.error.message",
                            defaultMessage: "Your card's expiration year is in the past."
                        });
                    case "invalid_cvc":
                        return e.formatMessage({
                            id: "stripeHelpers.invalidCVC.error.message",
                            defaultMessage: "Your card's security code is invalid."
                        });
                    case "invalid_number":
                        return e.formatMessage({
                            id: "stripeHelpers.invalidNumber.error.message",
                            defaultMessage: "Your card number is not a valid credit card number."
                        });
                    case "card_declined":
                        var n = e,
                            o = t.decline_code;
                        switch (o) {
                            case "expired_card":
                                return n.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.expiredCard",
                                    defaultMessage: "Your card was declined because it is an expired card."
                                });
                            case "incorrect_number":
                                return n.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.incorrectNumber",
                                    defaultMessage: "Your card was declined because you input an incorrect number."
                                });
                            case "insufficient_funds":
                                return n.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.declinedFunds",
                                    defaultMessage: "Your card was declined because of insufficient funds."
                                });
                            case "invalid_cvc":
                                return n.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.invalidCvc",
                                    defaultMessage: "Your card was declined because you input an invalid CVC number"
                                });
                            case "invalid_amount":
                                return n.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.invalidAmount",
                                    defaultMessage: "Your card was declined because payment amount exceeds the amount that's allowed."
                                });
                            default:
                                return n.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message",
                                    defaultMessage: "Your card was declined."
                                })
                        }
                    default:
                        return t.message || ""
                }
            }

            function c(e, t) {
                let o = d(e.text.primary),
                    a = d(e.text.secondary),
                    i = d(e.text.tertiary),
                    r = d(e.red.text.accentPrimary),
                    l = d(e.blue.text.accentPrimary);
                return {
                    labels: "above",
                    theme: "dark" === t ? "night" : "stripe",
                    variables: {
                        spacingGridRow: "12px",
                        spacingGridColumn: "12px",
                        spacingUnit: "4px",
                        spacingTab: "6px",
                        colorPrimary: o,
                        colorPrimaryText: o,
                        colorText: o,
                        colorTextSecondary: a,
                        colorTextPlaceholder: i,
                        colorIcon: o,
                        colorIconCheckmark: d(e.icon.inversePrimary),
                        colorDanger: r,
                        colorBackground: d(e.whiteButtonBackground),
                        colorIconTabHover: o,
                        colorIconTabSelected: l,
                        colorIconChevronDown: o,
                        fontFamily: n(699422).Tf.sans,
                        fontWeightLight: `${n(699422).Wy.light}`,
                        fontWeightNormal: `${n(699422).Wy.regular}`,
                        fontWeightMedium: `${n(699422).Wy.medium}`,
                        fontWeightBold: `${n(699422).Wy.medium}`,
                        fontSizeBase: "14px",
                        fontSizeSm: "12px",
                        colorLogo: t,
                        colorLogoBlock: t,
                        colorLogoTab: t,
                        colorLogoTabSelected: t,
                        borderRadius: "6px"
                    },
                    rules: {
                        ".Tab": {
                            padding: "10px 16px 10px 10px",
                            fontSize: "13px",
                            fontWeight: "500",
                            lineHeight: "16px",
                            color: o,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            backgroundColor: e.whiteButtonBackground
                        },
                        ".Tab:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground
                        },
                        ".Tab:focus": {
                            boxShadow: e.buttonBlueFocusRing
                        },
                        ".Tab--selected, .Tab--selected:active": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.blue.border.accentPrimary}`,
                            color: o,
                            boxShadow: "none",
                            outline: "none"
                        },
                        ".Tab--selected:hover": {
                            backgroundColor: e.whiteButtonBackground,
                            color: o
                        },
                        ".Tab--selected:focus": {
                            border: `1px solid ${e.blue.border.accentPrimary}`,
                            boxShadow: e.buttonBlueFocusRing
                        },
                        ".Input": {
                            fontSize: "14px",
                            lineHeight: "18px",
                            padding: "7px 8px",
                            backgroundColor: e.background.secondary,
                            boxShadow: `0 0 0 1px ${e.border.primary}`,
                            border: "none",
                            color: o
                        },
                        ".Input--invalid": {
                            color: o,
                            boxShadow: e.inputRedFocusRing
                        },
                        ".Input:focus": {
                            color: o,
                            boxShadow: e.inputBlueFocusRing
                        },
                        ".Label": {
                            fontSize: "12px",
                            lineHeight: "15px",
                            fontWeight: "500",
                            color: a,
                            marginBottom: "8px"
                        },
                        ".Error": {
                            fontSize: "12px",
                            fontWeight: "400",
                            lineHeight: "15px",
                            color: r
                        },
                        ".CodeInput": {
                            backgroundColor: e.background.secondary,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none"
                        },
                        ".PickerItem, .PickerItem--selected": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            color: o
                        },
                        ".PickerItem:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground,
                            color: o,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none"
                        },
                        ".PickerItem--selected:hover": {
                            boxShadow: "none"
                        },
                        ".PickerItem--new": {
                            fontSize: "14px",
                            fontWeight: "500",
                            lineHeight: "18px",
                            color: o
                        },
                        ".PickerItem--highlight, .PickerItem--highlight:hover": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.blue.border.accentPrimary}`,
                            boxShadow: "none"
                        },
                        ".PickerItem--highlight:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground
                        },
                        ".TermsText": {
                            color: a,
                            fontSize: "10px",
                            fontWeight: "400",
                            lineHeight: "13px",
                            letterSpacing: "0.12px"
                        },
                        ".CheckboxLabel": {
                            color: o,
                            fontSize: "12px",
                            fontWeight: "500",
                            lineHeight: "15px"
                        },
                        ".Action, .MenuAction": {
                            color: o,
                            fontWeight: "400",
                            padding: "4px 8px"
                        },
                        ".Action:hover, .MenuAction:hover": {
                            backgroundColor: e.buttonHoveredBackground
                        },
                        ".BlockAction:focus, .CodeInput:focus, .Input:focus,.CheckboxInput:focus, .PickerItem:focus, .PickerAction:focus,.MenuAction:focus, .Action:focus, .SecondaryLink:focus": {
                            boxShadow: e.buttonBlueFocusRing
                        },
                        ".MenuIcon, .MenuIcon:hover": {
                            fill: o
                        },
                        ".Block": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            padding: "16px"
                        },
                        ".Icon": {
                            fill: o
                        }
                    }
                }
            }

            function d(e) {
                let [t, n, o, a] = e.match(/[\d.]+/g) ? ? [];
                return t && n && o && a && 1 === parseInt(a) ? `rgb(${t}, ${n}, ${o})` : e
            }

            function u(e) {
                return (null == e ? void 0 : e.type) === "paymentMethodId" ? e.value : void 0
            }
        },
        894658: (e, t, n) => {
            n.d(t, {
                e1: () => i,
                hC: () => l,
                vd: () => s
            }), n(581454);
            var o = n(296540),
                a = n(474848);

            function i(e) {
                let t = { ...n(44183).G,
                    ...n(456308).V
                };
                return "notion" === e ? n(539694)._ : t[e]
            }
            let r = {
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
                justifyContent: "flex-end",
                marginInlineStart: 5
            };

            function l(e) {
                let {
                    connectors: t,
                    maxBubbles: l,
                    iconSize: s,
                    bubbleStyles: c,
                    disableNumericalEllipsis: d
                } = e, u = (0, o.useMemo)(() => [...t.slice(0, l)].reverse(), [t, l]), p = Math.max(0, t.length - l), f = (0, n(960253).I)(() => ({
                    bubble: {
                        boxShadow: `${n(632079).Tj.border.secondaryTranslucent} 0 0 0 1px`,
                        borderRadius: "100%",
                        width: 20,
                        height: 20,
                        backgroundColor: n(632079).Tj.whiteButtonBackground,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginInlineStart: -5,
                        fontSize: 9,
                        fontWeight: n(699422).Wy.medium,
                        color: n(632079).Tj.text.tertiary,
                        ...c
                    }
                }), [c]);
                return 0 === t.length ? null : (0, a.jsxs)("div", {
                    style: r,
                    children: [!d && p > 0 ? (0, a.jsx)("div", {
                        style: f.bubble,
                        children: (0, a.jsx)("div", {
                            children: `+${p}`
                        })
                    }) : void 0, u.map((e, t) => (0, a.jsx)("div", {
                        style: f.bubble,
                        children: (0, a.jsx)(n(708966).Q, {
                            iconGroup: i(e),
                            style: {
                                width: s,
                                height: s
                            },
                            variantName: "default"
                        })
                    }, `${e}-${t}`))]
                })
            }

            function s(e) {
                if ("notion" === e.type) return "notion";
                if ((0, n(281708).SC)(e.type)) return e.type;
                if ("everything" !== e.type && "universal-workspace" !== e.type && "workspace" !== e.type && "page" !== e.type && "collection" !== e.type && "teamspace" !== e.type && "site" !== e.type && "notion-none" !== e.type && "ai-knowledge" !== e.type && "helpdocs" !== e.type && "web" !== e.type && "universal-none" !== e.type && "slackbot" !== e.type && "labeler" !== e.type) return (0, n(722371).HB)(e.type)
            }
        },
        920976: (e, t, n) => {
            n.d(t, {
                F: () => i
            }), n(296540);
            var o = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.26 1.98 16.32 17.52",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M15.825 12a3.75 3.75 0 1 1-.001 7.501 3.75 3.75 0 0 1 0-7.501m0 1.325a.55.55 0 0 0-.55.55V15.2H13.95a.55.55 0 0 0-.001 1.1h1.326v1.325a.55.55 0 0 0 1.1 0V16.3h1.324a.55.55 0 0 0 0-1.1h-1.325v-1.325a.55.55 0 0 0-.55-.55M9.702 5.022a3.918 3.918 0 0 1 6.742.036.626.626 0 0 1-1.08.63 2.667 2.667 0 0 0-4.59-.023L5.376 14.68l4.19.678a.626.626 0 0 1-.2 1.235l-5.1-.827a.625.625 0 0 1-.437-.938z"
                        }), (0, o.jsx)("path", {
                            d: "M10.912 8.094a1.178 1.178 0 1 1 2.326.377 1.178 1.178 0 0 1-2.326-.377M4.7 7.087a1.178 1.178 0 1 1 2.327.377A1.178 1.178 0 0 1 4.7 7.087M3.488 2.985a3.92 3.92 0 0 1 5.572.357.625.625 0 0 1-.944.818 2.67 2.67 0 0 0-3.796-.243.625.625 0 1 1-.832-.932"
                        })]
                    })
                },
                i = (0, n(104509).wt)("aiFacePlus", a, "default")
        },
        922900: (e, t, n) => {
            n.d(t, {
                getWorkflowAgentConfig: () => a
            }), n(898992), n(430670), n(737550);
            let o = new(n(245541)).R({
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
                        useComputer: c,
                        yoloMode: d,
                        useReadOnlyMode: u,
                        model: p,
                        isCustomAgent: f,
                        isCustomAgentBuilder: g,
                        workflowId: m,
                        modelFromUser: h,
                        writerMode: y,
                        useRulePrioritization: b,
                        useCustomAgentDraft: v,
                        useDraftActorPointer: _,
                        ephemeralInstructions: x,
                        databaseAgentConfigMode: k,
                        environment: C,
                        spaceId: w,
                        spaceStore: I
                    } = e,
                    S = n(886556).z.isZeroRetentionEnabled(),
                    M = (0, n(612608).MI)((0, n(612608).VD)("custom_agents"), i),
                    A = (0, n(612608).MI)((0, n(612608).VD)("agent_automations"), i),
                    j = (0, n(612608).MI)((0, n(612608).VD)("agent_integrations"), i),
                    T = (0, n(612608).MI)((0, n(612608).VD)("experimental_integrations"), i),
                    B = (0, n(612608).MI)((0, n(612608).VD)("database_agents"), i),
                    D = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_advanced"), i),
                    E = (0, n(388647).p)({
                        environment: C
                    }),
                    L = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_search_connectors"), i),
                    P = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_google_drive"), i),
                    V = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_slack"), i),
                    z = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_mcp_servers"), i),
                    N = (0, n(612608).MI)((0, n(612608).VD)("script_agent_mail_module_available"), i),
                    R = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_custom_tool_calling"), i),
                    O = i("agent_enable_create_thread"),
                    F = i("software_factory_page"),
                    W = i("enable_script_agent_writer"),
                    $ = i("database_agents_on_script_agent"),
                    H = (!k || $) && (!y || W),
                    G = (0, n(612608).MI)((0, n(612608).VD)("agent_user_session_context"), i),
                    Z = i("agent_crdt_operations"),
                    q = (0, n(612608).MI)((0, n(612608).VD)("agent_card_customization"), i),
                    U = (0, n(612608).MI)((0, n(612608).VD)("agent_system_prompt_as_page"), i),
                    K = (0, n(612608).MI)((0, n(612608).VD)("agent_view_notifications_tool_enabled"), i),
                    Y = (0, n(328765).S)(),
                    X = I ? ? (void 0 === w || (null == Y ? void 0 : Y.id) === w ? Y : void 0),
                    Q = i("sams_specials"),
                    J = i("ai_image_generation") && !Q && ((null == X ? void 0 : X.isAiImageGenerationEnabledOnSpace()) ? ? !0),
                    ee = (0, n(612608).MI)((0, n(612608).VD)("agent_diffs"), i),
                    et = (0, n(612608).MI)((0, n(612608).VD)("agent_update_page_patch"), i),
                    en = (0, n(612608).MI)((0, n(612608).VD)("agent_create_db_template"), i),
                    eo = i("agent_search_tool_v2"),
                    ea = i("agent_update_page_autofixer"),
                    ei = i("agent_markdown_vnext"),
                    er = i("agent_update_page_order_updates"),
                    el = i("agent_support_property_reorder"),
                    es = i("agent_short_update_page_result"),
                    ec = n(218744).default.getConfig({
                        configName: "agent_writer_model_config"
                    }).defaultModel,
                    ed = o.getState(),
                    eu = null == ed ? void 0 : ed.pageId,
                    ep = y || f ? void 0 : function() {
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
                    eg = (0, n(876688).wd)(),
                    em = eg.some(e => (0, n(281708).yY)(e)),
                    eh = i("mail_explicit_tool_calls"),
                    ey = i("outlook_custom_agent_email_connector"),
                    eb = i("agent_query_calendar_tool") && em,
                    ev = eg.some(e => (0, n(281708).Xs)(e) && "outlook" !== e),
                    e_ = i("agent_query_mail_tool") && ev,
                    ex = (0, n(828294).a)("agent_rule_priority_hierarchy"),
                    ek = i("agent_ask_survey");
                return t = !m && (u ? ? !1), {
                    type: "workflow",
                    enableAgentAutomations: A,
                    enableAgentIntegrations: j,
                    enableCustomAgents: M,
                    enableExperimentalIntegrations: T,
                    enableAgentViewNotificationsTool: K,
                    enableAgentDiffs: ee,
                    enableAgentUpdatePagePatch: et,
                    enableAgentCreateDbTemplate: en,
                    enableCsvAttachmentSupport: !0,
                    enableDatabaseAgents: B,
                    enableAgentThreadTools: !1,
                    enableRunAgentTool: !1,
                    enableCrdtOperations: Z,
                    enableAgentCardCustomization: q,
                    enableSystemPromptAsPage: U,
                    enableUserSessionContext: G,
                    enableScriptAgentAdvanced: !!H && D,
                    enableScriptAgent: !!H && E,
                    enableScriptAgentSearchConnectorsInCustomAgent: !!H && !!f && L,
                    enableScriptAgentGoogleDriveInCustomAgent: !!H && !!f && P,
                    enableScriptAgentSlack: !!H && V,
                    enableScriptAgentMcpServers: !!H && z,
                    enableScriptAgentMail: !!H && N,
                    enableScriptAgentCalendar: !!H && E,
                    enableScriptAgentCustomToolCalling: !!H && R,
                    enableCreateAndRunThread: O,
                    enableSoftwareFactoryPage: F,
                    ...f ? {} : {
                        enableAgentGenerateImage: J
                    },
                    agentFollowupVariation: ep,
                    enableSpeculativeSearch: ef,
                    enableQueryCalendar: eb,
                    enableQueryMail: e_,
                    enableMailExplicitToolCalls: eh,
                    enableMailAgentMultiProviderSupport: ey,
                    useRulePrioritization: b ? ? ex,
                    memoryDatabasePageId: eu,
                    workflowId: m,
                    availableConnectors: eg,
                    customConnectorInfo: n(501761).qu.state.customConnectors.flatMap(e => "active" === e.status && e.displayName ? [{
                        name: e.displayName,
                        thirdPartyId: e.thirdPartyId,
                        description: e.description
                    }] : []),
                    searchScopes: y ? [] : r ? ? n(425749).R2,
                    useSearchToolV2: eo,
                    useWebSearch: !y && !S && (void 0 === s || s),
                    useComputer: c ? ? !0,
                    yoloMode: d ? ? !1,
                    useReadOnlyMode: t,
                    writerMode: !!y,
                    model: y ? ec : p,
                    searchSessionId: l,
                    modelFromUser: !y && (h ? ? void 0 !== p),
                    isCustomAgent: !!f,
                    isCustomAgentBuilder: !!g,
                    useCustomAgentDraft: !!v,
                    use_draft_actor_pointer: !!_,
                    enableUpdatePageAutofixer: ea,
                    enableMarkdownVNext: ei,
                    enableUpdatePageOrderUpdates: er,
                    enableAgentSupportPropertyReorder: el,
                    agentShortUpdatePageResult: es,
                    ephemeralInstructions: x,
                    ...y || a || null !== e.onboardingAgentVersion ? {} : {
                        enableAgentAskSurvey: ek
                    },
                    databaseAgentConfigMode: !!k,
                    isOnboardingAgent: !!a,
                    onboardingAgentVersion: e.onboardingAgentVersion,
                    isMobile: n(986939).A.isMobile
                }
            }

            function i(e) {
                return n(218744).default.checkGate({
                    gateName: e
                })
            }
        },
        937776: (e, t, n) => {
            n.d(t, {
                B: () => i
            }), n(296540);
            var o = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, o.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                i = (0, n(104509).wt)("archiveBox", a, "default")
        },
        938989: (e, t, n) => {
            e.exports = n.p + "f134ff16443ed5ec.png"
        },
        941670: (e, t, n) => {
            e.exports = n.p + "e1d65fd069908905.png"
        },
        965967: (e, t, n) => {
            e.exports = n.p + "d15ce47ef6ddf83d.png"
        },
        966559: (e, t, n) => {
            n.r(t), n.d(t, {
                exclamationMarkCircleSmallIcon: () => i,
                iconDefinition: () => a
            }), n(296540);
            var o = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M7.9 4.875a.625.625 0 0 0-.625.625V8a.625.625 0 1 0 1.25 0V5.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, o.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                i = (0, n(104509).wt)("exclamationMarkCircleSmall", a, "small")
        },
        968864: (e, t, n) => {
            n.d(t, {
                Y: () => i,
                G: () => a
            });
            let o = {
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
                for (let t of e) o[t].load()
            }

            function i(e) {
                let t = o[e].getLoadingState();
                if ("idle" === t.status) a(e);
                else if ("pending" === t.status || "rejected" === t.status);
                else {
                    if ("resolved" === t.status) return t.value;
                    (0, n(722371).HB)(t)
                }
            }
        },
        970878: (e, t, n) => {
            e.exports = n.p + "082999214c472fe4.png"
        },
        979479: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(296540);
            var o = n(474848);

            function a(e) {
                return n(986939).A.isMobile ? (0, o.jsx)(n(182718).zD, {
                    ariaLabel: e.ariaLabel,
                    open: e.isOpen,
                    popupType: n(423291).n.SlideUp,
                    onDismiss: e.onDismiss,
                    content: e.content,
                    style: e.style,
                    children: e.children
                }) : (0, o.jsx)(n(556809).a, {
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
                A: () => i
            }), n(296540);
            var o = n(474848);
            let a = {
                    style0: { ...n(699422).RC
                    }
                },
                i = function(e) {
                    let t = {
                            marginInlineEnd: e.avatarMarginRight ? ? 6,
                            alignSelf: "center"
                        },
                        i = {
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
                            avatarSize: c,
                            hasTooltip: d,
                            tooltipHeader: u,
                            hasPersonHoverCard: p,
                            spaceStore: f
                        } = e,
                        g = (0, n(109939).tz)(),
                        m = (0, n(682985).K8)(() => null == l ? void 0 : l.getDisplayName(g), [l, g]),
                        h = (0, o.jsxs)("div", {
                            style: i,
                            children: [(0, o.jsx)("div", {
                                style: r,
                                children: (0, o.jsx)(n(321753).A, {
                                    userStore: l,
                                    avatarShouldShowShadow: s,
                                    size: c,
                                    hasTooltip: d && !p,
                                    hasPersonHoverCard: !1,
                                    tooltipHeader: u
                                })
                            }), (0, o.jsx)("div", {
                                className: "notranslate",
                                style: a.style0,
                                children: m
                            })]
                        });
                    return p ? (0, o.jsx)(n(532755).D, {
                        userStore: l,
                        spaceStore: f,
                        from: e.personHoverCardEntrypoint,
                        children: h
                    }) : h
                }
        },
        996712: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var o = n(296540),
                a = n(474848);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.86 2.3 12.06 11.39",
                    svg: (0, a.jsx)("path", {
                        d: "M11.268 2.681 9.325 3.874a6.5 6.5 0 0 1-1.47.666v5.324a6.5 6.5 0 0 1 1.47.665l1.943 1.194zm1 9.413h.056a1.59 1.59 0 0 0 1.59-1.59V3.9a1.59 1.59 0 0 0-1.646-1.59zm-5.413-7.33q-.45.065-.91.065H3.381c-.84 0-1.52.68-1.52 1.52v1.706c0 .674.439 1.246 1.047 1.445h3.947zm-2.223 8.145L3.906 10.5h2.949v2.431a1.1 1.1 0 0 1-1.047.76h-.123a1.1 1.1 0 0 1-1.053-.782"
                    })
                },
                r = (0, n(104509).wt)("megaphoneFillSmall", i, "fillSmall"),
                l = o.forwardRef(function(e, t) {
                    let {
                        teamStore: o,
                        renderAsEveryoneMention: i
                    } = e, l = (0, n(682985).K8)(() => o.getName(), [o]);
                    return (0, a.jsx)(n(95582).A, { ...e,
                        icon: i ? (0, a.jsx)(n(16275).I, {
                            icon: r,
                            size: "sm"
                        }) : (0, a.jsx)(n(729746).x, {
                            size: 14,
                            store: o,
                            disabled: !0
                        }),
                        title: i ? (0, a.jsx)(n(109939).sA, {
                            id: "posts.teamMenuItem.everyoneMention",
                            defaultMessage: "@everyone"
                        }) : l,
                        ref: t,
                        inline: !0,
                        caption: i ? (0, a.jsx)(n(109939).sA, {
                            id: "posts.teamMenuItem.caption",
                            defaultMessage: "Notifies everyone in the teamspace"
                        }) : void 0
                    })
                })
        }
    }
]);