(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [2709, 14093, 14344, 16922, 21475, 21753, 22197, 23644, 25102, 30085, 31190, 32626, 35191, 36474, 37342, 48486, 52466, 56809, 60858, 62761, 64696, 74847, 75215, 76135, 76298, 78984, 81241, 85142, 87196, 87539, 89563, 92754, 96579], {
        1249: (e, t, n) => {
            "use strict";

            function r(e) {
                return "drag" in e && e.drag ? {
                    WebkitAppRegion: "drag"
                } : "noDrag" in e && e.noDrag ? {
                    WebkitAppRegion: "no-drag"
                } : {}
            }
            n.d(t, {
                g: () => r
            })
        },
        6260: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            }), n(296540);
            var r = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 16.74 14.99",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M4.5 4.125A2.125 2.125 0 0 0 2.375 6.25v7.5c0 1.174.951 2.125 2.125 2.125h5.702a4.7 4.7 0 0 1-.2-1.25H4.5a.875.875 0 0 1-.875-.875V7.5h12.75v2.535a4.7 4.7 0 0 1 1.25.684V6.25A2.125 2.125 0 0 0 15.5 4.125zm.758 1.684a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0m1.375-.625a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25m2.625.625a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0"
                        }), (0, r.jsx)("path", {
                            d: "M17.7 16.607a3.625 3.625 0 1 0-.893.878l1.223 1.427a.625.625 0 0 0 .94-.823zM12.375 14.5a2.375 2.375 0 1 1 4.75 0 2.375 2.375 0 0 1-4.75 0"
                        })]
                    })
                },
                i = (0, n(104509).wt)("browserMagnifyingGlass", a, "default")
        },
        8779: (e, t, n) => {
            "use strict";
            e.exports = n.p + "95f76471471a22df.png"
        },
        9774: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                COMPLETION_THROTTLE: () => o,
                PREVIEW_STEP_DELAY: () => s,
                postProcessAICreatedStores: () => u,
                showCompletionErrorWithCode: () => l,
                wrapTemporaryBlocksInList: () => d
            }), n(18107), n(967357);
            var r = () => n(749560),
                a = () => n(135674),
                i = () => n(173157);
            let o = 300,
                s = 250;

            function l(e) {
                let t = n(962299).A.getIntl();
                return 451 === e ? n(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.moderationError",
                        defaultMessage: "AI does not allow content that is harmful or illegal. Please revise your input and try again. (451)"
                    })
                }) : 413 === e ? n(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.promptOrAttachmentTooLarge",
                        defaultMessage: "Query or attachment is too large. Please revise your input and try again. (413)"
                    })
                }) : 502 === e || 503 === e || 504 === e ? n(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.providerError",
                        defaultMessage: "We’re experiencing issues with our AI provider. Try again in a few minutes. ({errorCode})"
                    }, {
                        errorCode: e
                    })
                }) : void n(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.genericError",
                        defaultMessage: "AI is temporarily unavailable. Try again in a few minutes. ({errorCode})"
                    }, {
                        errorCode: e
                    })
                })
            }

            function u(e, t) {
                for (let n of t) r().In({
                    environment: e,
                    blockStore: n
                })
            }

            function d(e) {
                var t;
                let {
                    environment: r,
                    stores: o,
                    listId: s,
                    inMemoryRecordCache: l,
                    transaction: u
                } = e, d = (null == (t = o.at(0)) ? void 0 : t.getSpaceId()) ? ? u.spaceId, c = new(n(517013)).pm({
                    environment: r,
                    pointer: {
                        table: n(832375).evP,
                        id: s || (0, n(295447).Z1)({
                            environment: r,
                            table: n(832375).evP,
                            spaceId: d
                        }),
                        spaceId: d
                    },
                    recordStoreOptions: {
                        inMemoryRecordCache: l,
                        userId: r.currentUser.id
                    },
                    path: ["content"]
                });
                for (let e of o)(0, a().B)({
                    parentStore: c,
                    appendStore: e,
                    transaction: u
                }), (0, i().z)({
                    store: e,
                    data: {
                        parent_id: c.id,
                        parent_table: c.table,
                        alive: !0
                    },
                    transaction: u
                });
                return c
            }
        },
        11255: (e, t, n) => {
            "use strict";
            n.d(t, {
                qB: () => a,
                sq: () => r
            });
            let r = ["favorite", "edit", "writeInsert", "create", "thinkAskChat", "findSearch", "custom", "notionActions", "recent", "databaseAgent"],
                a = ["improve_writing", "fix_spelling_grammar", "explain_this", "reformat", "create_daily_brief"]
        },
        31461: (e, t, n) => {
            "use strict";
            e.exports = n.p + "868a886d40b596cd.png"
        },
        33529: (e, t, n) => {
            "use strict";

            function r(e) {
                var t;
                let {
                    actionModels: r,
                    id: a
                } = e, i = (0, n(297493).y5)(a), o = "action" === i.source ? r.find(e => e.id === i.action_id) : void 0;
                return {
                    automationValueInfo: i,
                    collectionPointer: (0, n(722371).O9)(o) && o.isType("create_page") ? null == (t = o.getConfig()) ? void 0 : t.collection : void 0,
                    actionModel: o
                }
            }
            n.d(t, {
                y: () => r
            }), n(898992), n(672577)
        },
        33918: (e, t, n) => {
            "use strict";

            function r(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "delete_property",
                        eventProperties: t
                    }
                })
            }
            n.d(t, {
                G: () => r
            })
        },
        35370: (e, t, n) => {
            "use strict";
            n.d(t, {
                u: () => i
            }), n(296540);
            var r = n(474848);

            function a(e) {
                let t, {
                        context: a,
                        extensionMenuParent: i,
                        actionMenuListParent: o,
                        popupEvents: s,
                        displayName: l,
                        width: u,
                        initialFocus: d,
                        subActions: c
                    } = e,
                    {
                        isPhone: p
                    } = (0, n(533992).Y0)(),
                    f = (0, n(649476).Tf)();
                t = p ? f ? {
                    menuType: n(649476).gu.Modal,
                    onClickLeft: i.close,
                    left: (0, r.jsx)(n(497857).h, {}),
                    enableMobileRefresh: f,
                    paddingTop: 10,
                    title: (0, r.jsx)(n(109939).sA, { ...l
                    }),
                    ...s
                } : {
                    menuType: n(649476).gu.Modal,
                    right: (0, r.jsx)(n(109939).sA, { ...n(789722).W.done
                    }),
                    onClickRight: i.close,
                    ...s
                } : {
                    menuType: n(649476).gu.Popup,
                    width: u ? ? 220,
                    ...s
                };
                let m = (0, n(682985).K8)(() => c(a), [a, c]);
                return (0, r.jsx)(n(747369).A, { ...t,
                    children: (0, r.jsx)(n(530500).A, {
                        initialFocus: d ? ? 0,
                        context: a,
                        sections: m,
                        onAccept: o.onAccept
                    })
                })
            }

            function i(e) {
                let {
                    key: t,
                    displayName: a,
                    displayNameInterpolatedValues: i,
                    analyticsName: s,
                    validators: l,
                    subActions: u,
                    collapseSubActionsIntoParent: d,
                    hideSubActions: c,
                    clientSkill: p,
                    fuzzySearchKeywordsArray: f,
                    disabled: m
                } = e, g = (0, n(233319).Ls)({
                    clientSkill: p,
                    key: `extension ${t}`,
                    displayName: a,
                    displayNameInterpolatedValues: i,
                    analyticsName: s,
                    validators: l,
                    subActions: u,
                    collapseSubActionsIntoParent: d,
                    hideSubActions: c,
                    fuzzySearchKeywordsArray: f,
                    closeParentMenu: !0,
                    disabled: m,
                    action: () => {},
                    render: (t, n, a) => (0, r.jsx)(o, {
                        actionDisplayName: g.displayName,
                        args: e,
                        props: t,
                        context: n,
                        actionMenuListParent: a
                    })
                });
                return g
            }

            function o({
                actionDisplayName: e,
                args: t,
                props: i,
                context: s,
                actionMenuListParent: l
            }) {
                let {
                    displayName: u,
                    subTitle: d,
                    renderTooltip: c,
                    tooltipPlacement: p,
                    svg: f,
                    icon: m,
                    right: g,
                    rightStyle: D,
                    dontShrinkTitle: h,
                    width: _,
                    initialFocus: y,
                    subActions: v,
                    bottomSheetInitialState: b,
                    disableDefaultClick: C
                } = t, {
                    disabled: S,
                    disableTooltip: w
                } = (0, n(682985).K8)(() => {
                    var e, n;
                    return {
                        disabled: (null == (e = t.disabled) ? void 0 : e.call(t, s)) || !1,
                        disableTooltip: !c || (null == (n = t.disableTooltip) ? void 0 : n.call(t, s))
                    }
                }, [t, s, c]), k = null == d ? void 0 : d(s);
                return (0, r.jsx)(n(51831).m, {
                    content: () => (0, r.jsx)("div", {
                        style: n(233319).FG,
                        children: null == c ? void 0 : c({
                            context: s,
                            title: e
                        })
                    }),
                    disableTooltip: w,
                    placement: p,
                    children: t => (0, r.jsx)(n(816231).A, { ...i,
                        disabled: S,
                        disabledFeedback: S,
                        disableDefaultClick: C,
                        onFocus: l.onFocus,
                        renderExtension: (e, t) => (0, r.jsx)(a, {
                            context: s,
                            extensionMenuParent: t,
                            actionMenuListParent: l,
                            popupEvents: e,
                            displayName: u,
                            width: _,
                            initialFocus: y,
                            subActions: v
                        }),
                        bottomSheetInitialState: b,
                        children: (a, i) => {
                            let o = { ...(0, n(63390).A)(a, t),
                                title: k ? (0, r.jsx)(n(233319).fh, {
                                    subTitle: k,
                                    children: e
                                }) : e,
                                right: g,
                                rightStyle: D,
                                dontShrinkTitle: h
                            };
                            return f ? (0, r.jsx)(n(860287).A, { ...o,
                                svg: f,
                                ref: i
                            }) : (0, r.jsx)(n(95582).A, { ...o,
                                icon: m,
                                ref: i
                            })
                        }
                    })
                })
            }
        },
        37458: (e, t, n) => {
            e.exports = n(708009)
        },
        43371: e => {
            "use strict";
            e.exports = function() {
                return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFE])|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC3B\u200D\u2744|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDF])\u200D[\u2640\u2642])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g
            }
        },
        44027: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    businessTrialOffer: t,
                    billingTime: r,
                    modalLastShownAt: a,
                    modalShownTimes: i
                } = e;
                return !!(0, n(383378).V9)(t, r) && void 0 !== a && void 0 !== i && (!(a > 0) || !(r.diff(n(906745).DateTime.fromMillis(a), "days").days >= n(118999).ls)) && (i ? ? 0) >= n(118999).TY
            }

            function a(e, t = (0, n(192159).DS)(e)) {
                if (!e) return;
                let r = (0, n(192159).i5)(e);
                if (r) return Math.ceil(r.toUTC().diff(t.toUTC(), "days").days)
            }

            function i(e, t) {
                let r = n(906745).DateTime.fromMillis(e.endDateMs).toUTC();
                return (t ? ? n(906745).DateTime.now()).toUTC().hasSame(r, "day")
            }

            function o(e) {
                let t = (0, n(278662).Jd)(e);
                if (t) return (0, n(875472).Vm)(t)
            }

            function s(e) {
                let t = (0, n(278662).Jd)(e);
                if (t) return (0, n(875472).kd)(t)
            }

            function l(e) {
                let t = n(118999).Tu[e];
                if (void 0 === t) throw Error(`Unknown trial length: ${e}`);
                return t
            }

            function u(e) {
                return Math.round(e / 30)
            }

            function d({
                billingData: e
            }) {
                if (!(0, n(192159).TB)(e)) return !1;
                if ((0, n(192159).HY)(e)) {
                    var t;
                    return (null == e ? void 0 : e.type) === "admin" && (null == (t = e.trial) ? void 0 : t.autoConvert) === !0
                }
                return (null == e ? void 0 : e.type) === "admin" && (0, n(722371).O9)(null == e ? void 0 : e.paymentMethod)
            }

            function c(e) {
                return (0, n(192159).oD)(e) && (0, n(717274).pX)()
            }

            function p(e) {
                return (0, n(722371).Xk)(["multi_search_scope_menu", "ai_workspace_settings_connector_cards", "business_trial_ai_connectors_upsell", "ai_corner_chat_connectors_button"], e)
            }

            function f(e) {
                return (0, n(722371).Xk)(n(90416).K_, e)
            }

            function m(e) {
                return (0, n(722371).Xk)([...n(994234).iE, ...n(994234).wW, ...n(994234).Fh], e)
            }

            function g(e) {
                let {
                    openedFrom: t,
                    campaign: n,
                    isCustomAgentsGateEnabled: r
                } = e;
                return r && (f(t) || "deeplink" === t && m(n))
            }
            n.d(t, {
                F$: () => g,
                IU: () => c,
                J: () => o,
                SF: () => f,
                Tr: () => u,
                UP: () => a,
                XF: () => i,
                cn: () => s,
                dt: () => m,
                od: () => r,
                rE: () => l,
                tY: () => p,
                z2: () => d
            }), n(16280)
        },
        49204: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => r,
                X: () => a
            });
            let r = [function(e) {
                    var t, r;
                    return (0, n(576348).ZE)(e.publicEditMode, (null == (t = e.blocks) ? void 0 : t.length) === 1 ? e.blocks[0] : null == (r = e.pageContext) ? void 0 : r.pageStore)
                }, n(998256).p, (0, n(572251).A)(n(287310).J)],
                a = [...r, (0, n(572251).A)(n(99378).v), (0, n(572251).A)(n(183205).y), function(e) {
                    return e.blocks.length > 0
                }]
        },
        49396: (e, t, n) => {
            "use strict";
            e.exports = n.p + "3385d40630727f40.png"
        },
        51194: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => a
            });
            var r = n(296540);

            function a() {
                let e = (0, r.useRef)(!1);
                return (0, n(525128).E)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
        },
        52628: (e, t, n) => {
            "use strict";

            function r(e) {
                return (0, n(545504).w)({
                    url: e,
                    config: { ...n(986939).A,
                        requestedOnAlternateDomain: (0, n(700473).wasRequestedOnAlternateDomain)()
                    }
                })
            }
            n.d(t, {
                w: () => r
            })
        },
        56281: (e, t, n) => {
            "use strict";

            function r(e, t) {
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
                VV: () => o,
                _6: () => a,
                _q: () => i,
                ex: () => r
            }), n(16280), n(944114), n(898992), n(672577);
            let i = ["kr_card", "kakao_pay", "naver_pay"];

            function o(e) {
                let {
                    currency: t
                } = e, n = ["card", "link"];
                return "EUR" === t && n.push("sepa_debit"), "KRW" === t && n.push(...i), n
            }
        },
        57168: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                ClientAIChatStore: () => u,
                UserChatPreferenceLocalStorageStore: () => s,
                defaultClientAIChatStore: () => d,
                defaultLegacyThreadConfig: () => l
            });
            var r = () => n(546605);
            n(898992), n(354520), n(430670), n(803949);
            let a = "confirmed_safe_by_user",
                i = {
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
            class o extends r().Store {
                getInitialState() {
                    return i
                }
                resetState() {
                    var e;
                    null == (e = this.state.abortController) || e.abort(), this.setState(i)
                }
                getOrCreateTraceId() {
                    let e = this.state.traceId ? ? (0, n(4962).Ay)();
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
                    let e = this.state.draftTraceId ? ? (0, n(4962).Ay)();
                    return this.state.draftTraceId || this.setState({ ...this.state,
                        draftTraceId: e
                    }), e
                }
                setAgentSearchResultsForTool(e) {
                    let {
                        agentStepId: t,
                        toolCallId: n,
                        toolResultStepId: r,
                        results: a
                    } = e;
                    this.setState({ ...this.state,
                        agentSearchResultsByToolResultStepId: { ...this.state.agentSearchResultsByToolResultStepId,
                            [r]: {
                                agentStepId: t,
                                toolCallId: n,
                                results: a
                            }
                        }
                    })
                }
                getTemporaryAttachmentStagedDataOrInstantiate() {
                    let e = this.state.stagedData;
                    if (null != e && e.attachmentStagedData) return e.attachmentStagedData;
                    let t = {
                        stagedAttachmentUploadStore: new(n(729849)).Gi,
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
                    } = e, n = this.getTemporaryAttachmentStagedDataOrInstantiate(), r = { ...n,
                        stagedInferenceTranscriptSteps: [...n.stagedInferenceTranscriptSteps, t]
                    };
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: r
                        }
                    })
                }
                unstageAttachmentInferenceTranscriptStep(e) {
                    var t;
                    let {
                        fileId: n
                    } = e, r = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!r) return;
                    let a = r.stagedInferenceTranscriptSteps.filter(e => "attachment" !== e.type && "computer-file" !== e.type || e.fileUrl !== n);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...r,
                                stagedInferenceTranscriptSteps: a
                            }
                        }
                    })
                }
                clearStagedComputerFileSteps() {
                    var e;
                    let t = null == (e = this.state.stagedData) ? void 0 : e.attachmentStagedData;
                    if (!t) return;
                    let n = t.stagedInferenceTranscriptSteps.flatMap(e => "computer-file" === e.type ? [e.fileUrl] : []);
                    if (0 === n.length) return;
                    let r = t.stagedAttachmentUploadStore;
                    n.forEach(e => {
                        r.onDeleteFileUpload(e)
                    });
                    let a = t.stagedInferenceTranscriptSteps.filter(e => "computer-file" !== e.type);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...t,
                                stagedInferenceTranscriptSteps: a
                            }
                        }
                    })
                }
                markStagedAttachmentInferenceTranscriptStepAsSafe(e) {
                    var t, n;
                    let {
                        fileUrl: r
                    } = e, i = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!i) return;
                    let o = i.stagedInferenceTranscriptSteps.findIndex(e => "attachment" === e.type && e.fileUrl === r);
                    if (o < 0) return;
                    let s = i.stagedInferenceTranscriptSteps[o];
                    if ("attachment" !== s.type) return;
                    let l = null != (n = s.metadata) && n.guardrail ? { ...s.metadata.guardrail,
                            attachmentRisk: a
                        } : {
                            attachmentRisk: a
                        },
                        u = { ...s,
                            metadata: { ...s.metadata ? ? {},
                                guardrail : l
                            }
                        },
                        d = [...i.stagedInferenceTranscriptSteps];
                    d[o] = u, this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...i,
                                stagedInferenceTranscriptSteps: d
                            }
                        }
                    })
                }
                getAndClearStagedAssistantAttachmentSteps() {
                    var e;
                    let t = null == (e = this.state.stagedData) ? void 0 : e.attachmentStagedData;
                    if (!t) return;
                    let {
                        stagedInferenceTranscriptSteps: n
                    } = t;
                    return this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: void 0
                        }
                    }), n
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
                            mentionStagedData: new(n(227318)).d(e)
                        }
                    })
                }
            }
            let s = new(n(245541)).R({
                    key: "spacedScopedUserChatPreference",
                    namespace: n(274919).Bq,
                    important: !0,
                    trackingType: "preference"
                }),
                l = {
                    type: "search",
                    scopeForNextSearch: {
                        type: "everything"
                    }
                };
            class u extends r().Store {
                getInitialState() {
                    return {
                        showHistory: !1,
                        showDebug: !1,
                        loading: !1,
                        configForNewTranscripts: l,
                        userSelectedConfig: void 0,
                        model: void 0,
                        debugOverrides: {
                            usePromptCache: n(363256).e.withListenerIgnored(() => n(218744).default.checkGate({
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
                        let t = new o;
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
                    } = this.state, n = { ...t
                    };
                    delete n[e], this.setState({ ...this.state,
                        threadRegistry: n
                    })
                }
            }
            let d = new u;
            (0, n(202146).exposeDebugValue)("clientAiChatStore", d)
        },
        58344: (e, t, n) => {
            "use strict";
            e.exports = n.p + "056c81859ba06119.png"
        },
        58931: (e, t, n) => {
            "use strict";
            n.d(t, {
                HR: () => a,
                _y: () => i
            });
            let r = (0, n(109939).YK)({
                discardCommentConfirmationPrompt: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.prompt",
                    defaultMessage: "Do you want to discard the comment?"
                },
                discardCommentButtonLabel: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.discardButton.label",
                    defaultMessage: "Discard"
                },
                draftCommentConfirmationPromptTitle: {
                    id: "newDiscussionMenu.draftCommentConfirmationDialogTitle.prompt",
                    defaultMessage: "Finish your draft comment?"
                },
                draftCommentConfirmationStartingNewDescription: {
                    id: "newDiscussionMenu.draftCommentConfirmationStartingNewDescription.prompt",
                    defaultMessage: "You have a draft comment that will be lost if you start a new one"
                },
                draftCommentConfirmationNavigateAwayPromptDescription: {
                    id: "newDiscussionMenu.draftCommentConfirmationNavigateAwayPromptDescription.prompt",
                    defaultMessage: "You have a draft comment that will be lost if you leave the page"
                },
                returnToPageButtonLabel: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.returnToPage.label",
                    defaultMessage: "Return to draft"
                }
            });

            function a(e) {
                let {
                    discussionInputStore: t,
                    environment: a,
                    discussionHelpers: o,
                    reason: s
                } = e;
                n(332190).A.isComposingNewDiscussion() ? i({
                    environment: a,
                    reason: s ? ? "navigating_away"
                }) : o.hasCommentChanged(t) ? (n(65255).yO(a), n(647095).ui({
                    message: n(962299).A.formatMessage(r.discardCommentConfirmationPrompt),
                    showCancel: !0,
                    handleCancel: () => n(65255).Ie(a),
                    keepFocus: !0,
                    items: [{
                        label: n(962299).A.formatMessage(r.discardCommentButtonLabel),
                        color: "red",
                        onAccept: () => {
                            n(65255).QP(a), (0, n(585356).c)()
                        }
                    }]
                })) : (0, n(585356).c)()
            }

            function i(e) {
                let {
                    environment: t
                } = e;
                if (!n(332190).A.isDraftCommentOnValidSelection()) return;
                let a = n(332190).A.getDiscussionInputStore();
                n(65255).yO(t), n(647095).ui({
                    message: n(962299).A.formatMessage(r.draftCommentConfirmationPromptTitle),
                    description: (() => {
                        switch (e.reason) {
                            case "starting_new":
                                return n(962299).A.formatMessage(r.draftCommentConfirmationStartingNewDescription);
                            case "navigating_away":
                                return n(962299).A.formatMessage(r.draftCommentConfirmationNavigateAwayPromptDescription);
                            default:
                                (0, n(722371).HB)(e.reason)
                        }
                    })(),
                    keepFocus: !0,
                    innerStyle: {
                        textAlign: "center"
                    },
                    showCancel: !1,
                    shouldRenderDraftCommentIcon: !0,
                    items: [{
                        label: n(962299).A.formatMessage(r.returnToPageButtonLabel),
                        buttonType: "solid",
                        color: "blue",
                        onAccept: () => {
                            (0, n(758275).x)({
                                currentBlockStore: n(728372).AppStoreMainEditorCurrentBlockStore.state,
                                discussionInputStore: a,
                                environment: t
                            }), n(65255).Ie(t)
                        }
                    }, {
                        label: n(962299).A.formatMessage(r.discardCommentButtonLabel),
                        color: "red",
                        buttonType: "outline",
                        onAccept: () => {
                            n(65255).QP(t), (0, n(585356).c)()
                        }
                    }]
                })
            }
        },
        59579: (e, t, n) => {
            "use strict";

            function r(e, t) {
                let r = {
                    id: "",
                    key: t,
                    type: "static",
                    category: n(292609).lU[t].category,
                    props: {}
                };
                (0, n(466290).K)(e, r)
            }
            n.d(t, {
                a: () => r
            })
        },
        67207: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                iconDefinition: () => r,
                personSlashIcon: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.31 2.31 14.13 16.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.53 2.463a.626.626 0 0 1 .882.067l.032.038q.008.013.018.025l12.687 14.875q.089.101.203.156a.625.625 0 0 1-1.014.72l-.928-1.08a2.4 2.4 0 0 1-1.26.362h-8.3c-.68 0-1.328-.288-1.74-.768-.43-.501-.591-1.217-.23-1.923C4.899 12.945 7.3 11.63 10 11.63q.3 0 .593.021l-1.001-1.166a3.28 3.28 0 0 1-2.267-1.22c-.536-.669-.825-1.532-.886-2.453L3.463 3.345a.626.626 0 0 1 .067-.882M10 12.88c-2.335 0-4.245 1.138-5.007 2.625-.104.203-.071.379.066.54.157.182.449.33.79.33h8.301c.155 0 .3-.032.426-.082l-2.707-3.154a6.8 6.8 0 0 0-1.87-.26M10 2.375c1.137 0 2.055.469 2.675 1.241.607.757.899 1.766.9 2.824 0 1.058-.292 2.067-.9 2.825q-.213.263-.472.477l-.811-.951q.168-.138.307-.309c.392-.487.625-1.2.625-2.042S12.09 4.887 11.7 4.4c-.38-.473-.936-.775-1.7-.775-.762 0-1.32.302-1.7.774a2.4 2.4 0 0 0-.278.44l-.857-1.004q.076-.113.161-.219c.62-.772 1.538-1.241 2.675-1.241"
                    })
                },
                a = (0, n(104509).wt)("personSlash", r, "default")
        },
        72762: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    collectionSettingsStore: t
                } = e;
                t.setState({ ...t.state,
                    open: !1,
                    hideSettingsPopup: void 0,
                    hideSettingsHeader: void 0,
                    stack: [],
                    ref: void 0,
                    hideDuplicatePropertyOption: void 0,
                    closeOnEscape: void 0
                }), n(639675).Ay.setState({ ...n(639675).Ay.state,
                    flowId: void 0
                })
            }
            n.d(t, {
                o: () => r
            })
        },
        75170: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = () => n(546605);
            let a = [];
            class i extends r().Store {
                getInitialState() {
                    return {
                        open: !1,
                        createOrUpdateMenuState: void 0,
                        tabSpacesState: {
                            tabSpaces: {},
                            orderedTabSpaceIds: a,
                            ungroupedTabCount: 0,
                            activeTabSectionId: "ungrouped"
                        }
                    }
                }
            }
            let o = new i;
            (0, n(202146).exposeDebugValue)("ElectronTabSpacesMenuStore", o);
            let s = o
        },
        79268: (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => a
            });
            var r = n(296540);

            function a({
                upsell: e,
                source: t,
                buttonDisplayType: i,
                onClickBeforeUpgradeAction: o,
                postUpgradeCallback: s,
                spaceStore: l
            }) {
                let u = (0, n(533992).v3)(),
                    d = (0, n(855021).q)(),
                    c = (0, n(226309)._3)({
                        spaceId: null == l ? void 0 : l.id
                    }),
                    p = (0, n(345776).T)(),
                    {
                        campaign: f,
                        loading: m
                    } = (0, n(435276).V)(t),
                    [g, D] = function(e) {
                        let {
                            upsell: t
                        } = e, a = (0, n(533992).v3)(), i = (0, n(972740).L)(), o = (0, n(993077).U2)(), s = null == i ? void 0 : i.id, l = (0, n(345776).T)(), u = (0, n(226309).lh)({
                            spaceId: s
                        }), d = (null == t ? void 0 : t.type) === "product" ? t.product : void 0, c = (0, n(682985).K8)(() => {
                            if (s) return n(477870).L.getData(a, {
                                spaceId: s
                            })
                        }, [a, s]), p = (0, n(682985).K8)(() => (0, n(966458).Jg)({
                            product: d,
                            userId: l,
                            billingData: u,
                            spaceStore: i,
                            spaceUserStore: o,
                            existingRequests: c
                        }), [d, l, u, i, o, c]), [f, m] = (0, r.useState)(p);
                        return (0, r.useEffect)(() => {
                            m(p)
                        }, [p]), [f, m]
                    }({
                        upsell: e ? ? {
                            type: "none"
                        }
                    }),
                    h = (0, n(682985).K8)(() => e ? (0, n(96495).a)({
                        environment: u,
                        upsell: e,
                        spaceStore: l,
                        salesStatus: d,
                        campaign: f,
                        requestState: g,
                        billingData: c,
                        source: t,
                        loading: m
                    }) : {
                        status: "not_eligible",
                        reason: "feature_not_upsellable"
                    }, [l, u, e, d, f, g, c, t, m]),
                    _ = (0, r.useCallback)(async () => {
                        if (!e) return;
                        let r = "product" === e.type ? e.product : void 0,
                            a = (0, n(555676).x)();
                        if (!a) return;
                        let [, {
                            getUpgradeSystemAction: d
                        }] = await Promise.all([null == o ? void 0 : o(), a()]), m = d(h);
                        await m({
                            source: t,
                            spaceStore: l,
                            product: r,
                            billingData: c,
                            environment: u,
                            setRequestState: D,
                            userId: p,
                            buttonDisplayType: i,
                            postUpgradeCallback: s,
                            campaign: f,
                            isEligibleForAgentBusinessTrial: "ai_agent" === t && "product" === e.type && "preferred" === e.trialability
                        })
                    }, [e, o, h, t, l, c, u, D, p, i, s, f]);
                return {
                    upgradeEligibility: h,
                    handleClick: _
                }
            }
        },
        85071: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                iconDefinition: () => r,
                integrationIcon: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                a = (0, n(104509).wt)("integration", r, "default")
        },
        90416: (e, t, n) => {
            "use strict";
            n.d(t, {
                CT: () => o,
                K_: () => l,
                Mi: () => r,
                uv: () => i,
                zL: () => s,
                zj: () => a
            });
            let r = ["database_agents", "database_agent_autofill_button", "database_agent_run_dropdown", "database_agent_fill_rows", "database_agent_fill_all", "database_agent_preview_generate", "database_agent_edit_modal_toggle", "database_agent_setup_menu_item"],
                a = ["ai_unified_find_search_modal", "ai_unified_find_chat", "ai_chat_with_model", "ai_assistant_limit_in_app", "ai_autofill_fill_all_pages", "ai_autofill_bulk_fill", "ai_autofill_on_page_edit", "ai_autofill_try_on_view", "ai_limit_in_app", "ai_limit_property_autofill", "ai_limit_sidebar", "ai_limit_settings", "ai_limited_qna_no_results", "ai_limited_qna_upsell_action_button", "ai_qna_waitlist", "ai_qna_limit_in_app", "ai_upsell_notice", "ai_upsell_settings", "ai_page_translation", "ai_plans_page", "ai_formulas"],
                i = ["ai_research_mode"],
                o = ["ai_meeting_notes", "ai_meeting_notes_custom_transcript_retention"],
                s = ["ai_agent"],
                l = ["custom_agent", "custom_agents_sidebar", "new_custom_agents_sidebar", "new_custom_agents_library", "slippery_slope_flyout_menu", "custom_agents_launch_modal", "custom_agents_gift_box", "marketplace_agents"]
        },
        91790: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                iconDefinition: () => r,
                lightBulbBrightIcon: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.96 2 10.08 15.99",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M12.21 13.71c-.34 0-.62-.28-.62-.62 0-1.31.7-2.45 1.32-3.46.12-.2.24-.39.36-.58.34-.58.53-1.3.53-2.06 0-2.06-1.7-3.73-3.79-3.73S6.22 4.93 6.22 6.99c0 .76.18 1.47.53 2.06.11.19.23.39.35.58l.023.037c.614 1 1.307 2.129 1.297 3.423 0 .34-.24.61-.63.62-.35 0-.62-.28-.62-.63 0-.96-.55-1.85-1.14-2.8q-.091-.15-.185-.3-.095-.15-.185-.3c-.46-.78-.7-1.71-.7-2.69 0-2.74 2.26-4.98 5.04-4.98s5.04 2.23 5.04 4.98c0 .98-.24 1.92-.7 2.69-.12.2-.24.4-.37.61-.59.95-1.14 1.84-1.14 2.8 0 .34-.28.62-.62.63zm-1.26 4.28h-1.9c-.35 0-.62-.28-.62-.62s.28-.62.62-.62h1.9c.34 0 .62.28.62.62s-.28.62-.62.62M8.1 15.85h3.8c.34 0 .62-.28.62-.62s-.28-.62-.62-.62H8.1c-.34 0-.62.28-.62.62s.27.62.62.62"
                    })
                },
                a = (0, n(104509).wt)("lightBulbBright", r, "default")
        },
        94021: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.27 2.85 17.64 14.57",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M1.293 6.583A2.125 2.125 0 0 1 3.12 4.195l9.912-1.321A2.125 2.125 0 0 1 15.418 4.7l.264 1.975h1.103c1.174 0 2.125.951 2.125 2.125v6.5a2.125 2.125 0 0 1-2.125 2.125h-10A2.125 2.125 0 0 1 4.66 15.3v-.465l-.12.016a2.125 2.125 0 0 1-2.388-1.825zm3.367 6.991V8.8c0-1.174.952-2.125 2.125-2.125h7.636l-.242-1.81a.875.875 0 0 0-.983-.752L3.284 5.434a.875.875 0 0 0-.752.983l.86 6.443a.875.875 0 0 0 .982.752zM5.91 8.8v6.5c0 .483.392.875.875.875h10a.875.875 0 0 0 .875-.875V8.8a.875.875 0 0 0-.875-.875h-10a.875.875 0 0 0-.875.875"
                    })
                },
                a = (0, n(104509).wt)("rectangleOnRectangleTilt", r, "default")
        },
        95405: (e, t, n) => {
            "use strict";
            n.d(t, {
                $S: () => i,
                I4: () => r,
                IQ: () => a
            }), n(898992), n(354520);

            function r(e, t, r) {
                let i = a(t).slice(),
                    o = i.findIndex(t => e.id === t.id); - 1 === o ? i.unshift(e) : i.splice(o, 1, e), (0, n(862759).m)({
                    userSettingsStore: t,
                    transaction: r,
                    data: {
                        favorite_ai_actions: i
                    }
                })
            }

            function a(e) {
                var t;
                return (null == (t = e.getModel()) || null == (t = t.getSettings()) ? void 0 : t.favorite_ai_actions) ? ? []
            }

            function i(e, t, r) {
                let i = a(t).filter(t => t.id !== e.id);
                (0, n(862759).m)({
                    userSettingsStore: t,
                    transaction: r,
                    data: {
                        favorite_ai_actions: i
                    }
                })
            }
        },
        96351: (e, t, n) => {
            "use strict";

            function r({
                openInNew: e,
                url: t,
                makeTabActive: a,
                position: i,
                isNewPage: o,
                environment: s
            }) {
                "tab" === e && a ? (0, n(266527).x)(s, {
                    url: t,
                    position: i,
                    makeTabActive: a,
                    isNewPage: o
                }) : "tab" !== e || a ? "window" === e && (0, n(714770).E)(t) : (0, n(380839).x)(s, {
                    url: t,
                    position: i
                })
            }
            n.d(t, {
                B: () => r
            })
        },
        96495: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    environment: t,
                    upsell: r,
                    spaceStore: a,
                    salesStatus: i,
                    campaign: o,
                    requestState: s,
                    billingData: l,
                    source: u,
                    loading: d
                } = e;
                if (d) return {
                    status: "loading"
                };
                let c = (0, n(875472).sO)(o);
                if ("none" === r.type) return {
                    status: "not_eligible",
                    reason: "feature_not_upsellable"
                };
                if ((0, n(916804).I)(a)) return {
                    status: "not_eligible",
                    reason: "guest"
                };
                let p = r.product,
                    {
                        addOnFeature: f
                    } = (0, n(269612).p)({
                        billingData: l,
                        product: p
                    });
                if (!(0, n(192159).Gm)(l) && ["block_limit_sidebar", "block_limit_settings", "block_limit_banner", "database_chart_paywall", "delete_blocks_modal", "slash_menu", "out_of_blocks_toast", "forms_increase_file_limit", "forms_notion_branding", "forms_customize_settings"].includes(u) && !f) return {
                    status: "eligible_to_purchase",
                    reason: "plans_page_redirect"
                };
                let m = function(e) {
                    let {
                        product: t,
                        environment: r,
                        spaceStore: a
                    } = e;
                    if ((0, n(832139).A)()) return {
                        status: "not_eligible",
                        reason: "samsung_purchases_not_supported"
                    };
                    let i = (0, n(663842).m)({
                        environment: r
                    }) && ("personal" === t || "ai" === t);
                    return i && a && (0, n(471078).O)({
                        environment: r,
                        spaceId: a.id
                    }) ? {
                        status: "not_eligible",
                        reason: "mobile_multi_member_workspace"
                    } : r.device.isMobileNative ? "ai" !== t || (0, n(907620).T)("supportsAiIAP") ? i ? {
                        status: "eligible_to_purchase",
                        reason: "show_mobile_native_upgrade_modal"
                    } : {
                        status: "not_eligible",
                        reason: "mobile_purchase_not_supported"
                    } : {
                        status: "not_eligible",
                        reason: "mobile_ai_add_on_purchase_not_supported"
                    } : void 0
                }({
                    product: p,
                    environment: t,
                    spaceStore: a
                });
                return m || ((null == l ? void 0 : l.provider) === "app_store" || (null == l ? void 0 : l.provider) === "play_store" ? {
                    status: "not_eligible",
                    reason: "subscribed_via_in_app_purchase"
                } : "unrequested" === s ? {
                    status: "eligible_to_request"
                } : "pending" === s ? {
                    status: "request_pending"
                } : "sales_assisted" === i ? {
                    status: "sales_assisted"
                } : (0, n(262166).h0)(p) && "sales_eligible" === i ? {
                    status: "sales_eligible"
                } : null != a && a.canAdmin() ? (0, n(192159).bO)((0, n(226309).a9)(l)) ? {
                    status: "not_eligible",
                    reason: "unverified_payment"
                } : "preferred" === r.trialability && (null == c ? void 0 : c.type) === "trial" && c.subscriptionTier === r.product ? {
                    status: "eligible_for_trial"
                } : {
                    status: "eligible_to_purchase",
                    reason: "show_upgrade_modal"
                } : {
                    status: "not_eligible",
                    reason: "not_workspace_owner"
                })
            }
            n.d(t, {
                a: () => r
            })
        },
        97143: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => r
            });
            let r = 700
        },
        98303: (e, t, n) => {
            "use strict";
            e.exports = n.p + "7a736746212f0f46.png"
        },
        99378: (e, t, n) => {
            "use strict";

            function r(e) {
                return e.blocks.some(e => {
                    let t = (0, n(330870).a)();
                    return !!(t && (0, n(335818).fc)(t) || (0, n(444285).S)(t) && null != t && t.uiContains(e) && t !== e)
                })
            }
            n.d(t, {
                v: () => r
            }), n(898992), n(737550)
        },
        104455: (e, t, n) => {
            "use strict";
            e.exports = n.p + "1fac3e057348c509.png"
        },
        113174: (e, t, n) => {
            "use strict";
            e.exports = n.p + "5a7ce521ec824981.png"
        },
        118999: (e, t, n) => {
            "use strict";
            n.d(t, {
                Hb: () => m,
                Hu: () => d,
                TY: () => r,
                Tu: () => o,
                U4: () => f,
                U7: () => g,
                WO: () => l,
                XX: () => p,
                c4: () => u,
                ef: () => i,
                ej: () => c,
                hI: () => s,
                ls: () => a
            });
            let r = 2,
                a = 30,
                i = 30,
                o = {
                    365: 5,
                    180: 5,
                    90: 5,
                    30: 5,
                    14: 4
                },
                s = 332,
                l = 852,
                u = 800,
                d = 407,
                c = 24,
                p = 400,
                f = 450,
                m = 524,
                g = 7
        },
        121421: (e, t, n) => {
            "use strict";
            e.exports = n.p + "6ddab14ae1911792.png"
        },
        124094: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => l,
                Z: () => u
            });
            var r = () => n(889089);
            let a = {
                plans_page: ["business_trial_non_conversion", "business_block_limit_coupon", "plus_block_limit_coupon", "aimn", "annual_block_limit", "block_limit", "business_resurrection_offer", "resurrection_offer"],
                checkout_modal: ["business_trial_non_conversion", "business_block_limit_coupon", "plus_block_limit_coupon", "aimn", "annual_block_limit", "block_limit", "business_resurrection_offer", "resurrection_offer"],
                business_trial_verify_pages_upsell: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                verification_settings_centralized_view: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                verification_upsell_item_page_entrypoint: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                verification_upsell_item_collection_entrypoint: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                business_trial_private_teamspaces_upsell: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                business_trial_ai_connectors_upsell: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                upgrade_requests_page: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                ai_workspace_settings_connector_cards: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                multi_search_scope_menu: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                assistant_overflow_menu_add_connectors: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                ai_corner_chat_welcome_connector_action_card: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                ai_chat_connectors_banner: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                post_business_trial_coupon_callout: ["business_trial_non_conversion"],
                resurrection_offer_callout: ["business_resurrection_offer", "resurrection_offer"],
                ai_agent: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d"],
                custom_agent: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                custom_agents_sidebar: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                new_custom_agents_sidebar: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                new_custom_agents_library: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                slippery_slope_flyout_menu: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                custom_agents_launch_modal: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                custom_agents_gift_box: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                marketplace_agents: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"]
            };
            var i = () => n(617995),
                o = () => n(705820);
            async function s(e) {
                var t;
                let {
                    campaign: r,
                    eligibleCampaigns: a
                } = e;
                if (!a.includes(r)) return !1;
                await (0, n(591083).yc)().catch(() => void 0);
                let i = (0, n(591083).v7)(),
                    o = null == i || null == (t = i[r]) ? void 0 : t.statsigDetails;
                return !!o && (await n(218744).default.waitUntilStatsigReadyAsync(), (0, n(134213).l)({
                    experimentService: n(218744).default,
                    statsigDetails: o
                }).isEligible)
            }
            async function l(e, t, n) {
                let l, u = function(e) {
                    if (a.hasOwnProperty(e)) return a[e]
                }(n);
                if (u)
                    for (let n of u) {
                        if ((0, r().w)(n)) {
                            if (l || (l = await o().P.awaitData(e, {
                                    spaceId: t
                                }) ? ? []), await s({
                                    campaign: n,
                                    eligibleCampaigns: l
                                })) return n;
                            continue
                        }
                        let a = await i().I.awaitData(e, {
                            spaceId: t,
                            offerCampaign: n
                        });
                        if ((null == a ? void 0 : a.campaign) === n) return n
                    }
            }

            function u({
                environment: e,
                spaceName: t,
                campaign: r,
                entrypoint: a
            }) {
                if (t) switch (r) {
                    case "resurrection_offer":
                    case "business_resurrection_offer":
                        (0, n(104310).u)({
                            event: {
                                eventName: "offer_viewed",
                                eventProperties: {
                                    offer_campaign: r,
                                    entrypoint: a
                                }
                            }
                        })
                }
            }
        },
        124394: (e, t, n) => {
            "use strict";
            e.exports = n.p + "e02c2b36d656a621.png"
        },
        128743: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                arrowStraightLeftIcon: () => a,
                iconDefinition: () => r
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.97 15.26 12.06",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M2.411 9.79a.6.6 0 0 1 .147-.232l5.4-5.4a.625.625 0 1 1 .884.884L4.509 9.375H17a.625.625 0 1 1 0 1.25H4.509l4.333 4.333a.625.625 0 1 1-.884.884l-5.4-5.4a.62.62 0 0 1-.147-.651"
                    })
                },
                a = (0, n(104509).wt)("arrowStraightLeft", r, "default")
        },
        128817: (e, t, n) => {
            "use strict";

            function r(e, t, r) {
                var a;
                let i = n(728372).AppStoreCurrentUserSettingsStore.state;
                if (!i) return;
                let o = null == (a = i.getSettings()) ? void 0 : a.tutorials;
                r ? (0, n(862759).m)({
                    userSettingsStore: i,
                    transaction: r,
                    data: {
                        tutorials: { ...o,
                            [t]: (0, n(752153).i9)(i, t)
                        }
                    }
                }) : c({
                    userAction: "TutorialActions.nextStep",
                    environment: e,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: i,
                            transaction: e,
                            data: {
                                tutorials: { ...o,
                                    [t]: (0, n(752153).i9)(i, t)
                                }
                            }
                        })
                    },
                    userId: i.id
                })
            }

            function a(e, t) {
                var r;
                let a = n(728372).AppStoreCurrentUserSettingsStore.state;
                if (!a) return;
                let i = null == (r = a.getSettings()) ? void 0 : r.tutorials;
                c({
                    userAction: "TutorialActions.prevStep",
                    environment: e,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: a,
                            transaction: e,
                            data: {
                                tutorials: { ...i,
                                    [t]: (0, n(752153).KD)(a, t)
                                }
                            }
                        })
                    },
                    userId: a.id
                })
            }

            function i(e, t) {
                var r;
                let a = n(728372).AppStoreCurrentUserSettingsStore.state;
                if (!a) return;
                let i = null == (r = a.getSettings()) ? void 0 : r.tutorials;
                (null == i ? void 0 : i[t]) !== n(212169).YD && c({
                    userAction: "TutorialActions.dismissTutorial",
                    environment: e,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: a,
                            transaction: e,
                            data: {
                                tutorials: { ...i,
                                    [t]: n(212169).YD
                                }
                            }
                        })
                    },
                    userId: a.id
                })
            }

            function o(e) {
                let t = n(728372).AppStoreCurrentUserSettingsStore.state;
                t && c({
                    userAction: "TutorialActions.resetTutorialsDebug",
                    environment: e,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: t,
                            transaction: e,
                            data: {
                                tutorials: {}
                            }
                        })
                    },
                    userId: t.id
                })
            }

            function s(e, t, r) {
                var a;
                let i = n(728372).AppStoreCurrentUserSettingsStore.state;
                if (!i || (0, n(752153).x$)(i, t)) return;
                let o = (0, n(752153).gt)(i, t);
                n(212169).c$[t].steps.findIndex(e => e.id === o) >= n(212169).c$[t].steps.findIndex(e => e.id === r) || (0, n(862759).m)({
                    userSettingsStore: i,
                    transaction: e,
                    data: {
                        tutorials: { ...null == (a = i.getSettings()) ? void 0 : a.tutorials,
                            [t]: r
                        }
                    }
                })
            }

            function l(e, t, r) {
                if ((0, n(752153).ll)(r)) return;
                let a = (0, n(752153).tb)(t, r);
                a && s(e, t, a)
            }

            function u(e) {
                var t;
                let {
                    environment: r,
                    tutorialId: a,
                    tutorialStepId: i,
                    transaction: o
                } = e, s = n(728372).AppStoreCurrentUserSettingsStore.state;
                if (!s) return;
                let l = null == (t = s.getSettings()) ? void 0 : t.tutorials;
                o ? (0, n(862759).m)({
                    userSettingsStore: s,
                    transaction: o,
                    data: {
                        tutorials: { ...l,
                            [a]: i
                        }
                    }
                }) : c({
                    userAction: "TutorialActions.nextStep",
                    environment: r,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: s,
                            transaction: e,
                            data: {
                                tutorials: { ...l,
                                    [a]: i
                                }
                            }
                        })
                    },
                    userId: s.id
                })
            }

            function d(e) {
                let t = n(728372).AppStoreCurrentUserSettingsStore.state;
                return !!t && (0, n(752153).x$)(t, e)
            }

            function c(e) {
                return (0, n(377796).createAndCommit)({ ...e,
                    canUndo: !1,
                    cellTarget: "main"
                })
            }
            n.r(t), n.d(t, {
                checkIsTutorialDone: () => d,
                dismissTutorial: () => i,
                resetTutorials: () => o,
                tutorialAdvanceToStep: () => s,
                tutorialAdvanceToStepAfter: () => l,
                tutorialGoToNextStep: () => r,
                tutorialGoToPrevStep: () => a,
                tutorialGoToStep: () => u
            })
        },
        133121: (e, t, n) => {
            "use strict";
            n.d(t, {
                u: () => r
            });
            let r = "return-to-writer-button"
        },
        140758: (e, t, n) => {
            "use strict";
            n.d(t, {
                R: () => i
            }), n(296540);
            var r = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 2.62 15.26 15.26",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M8.875 5.75c.345 0 .625.28.625.625V8.25h1.875a.625.625 0 1 1 0 1.25H9.5v1.875a.625.625 0 1 1-1.25 0V9.5H6.375a.625.625 0 1 1 0-1.25H8.25V6.375c0-.345.28-.625.625-.625"
                        }), (0, r.jsx)("path", {
                            d: "M8.875 2.625a6.25 6.25 0 1 0 3.955 11.09l3.983 3.982a.625.625 0 1 0 .884-.884l-3.983-3.982a6.25 6.25 0 0 0-4.84-10.205m-5 6.25a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
                        })]
                    })
                },
                i = (0, n(104509).wt)("magnifyingGlassPlus", a, "default")
        },
        146535: (e, t, n) => {
            "use strict";
            e.exports = n.p + "d96dbdbbe0581121.gif"
        },
        153262: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jg: () => a,
                bM: () => r,
                hG: () => i,
                ic: () => o
            });
            let r = "150ms ease";

            function a() {
                return {
                    borderRadius: 6
                }
            }
            let i = n(986939).A.isMobile ? {} : { ...a(),
                display: "flex",
                marginInlineStart: 0,
                marginInlineEnd: 0,
                transition: `background ${r}`
            };

            function o() {
                return {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8
                }
            }
        },
        153321: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => a,
                w: () => i
            });
            let r = { ...n(337807).W,
                    ...n(720128).n,
                    ...n(945632).$,
                    ...n(961820).Z
                },
                a = (0, n(6046).H)((e, t) => (0, n(501723).P)(e, t, r, n(104355).J));

            function i(e) {
                return (0, n(698809).G)((0, n(501723).P)(e, {
                    forwardMotionProps: !1
                }, r, n(104355).J))
            }
        },
        154911: (e, t, n) => {
            "use strict";

            function r() {
                return [(0, n(828294).a)("agent_writer") ? "commandAltJ" : "commandJ"]
            }
            n.d(t, {
                K: () => r
            })
        },
        161412: (e, t, n) => {
            "use strict";
            e.exports = n.p + "e81e609390254b2a.png"
        },
        164177: (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => i
            });
            var r = () => n(546605);
            class a extends r().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let i = new a
        },
        173231: (e, t, n) => {
            "use strict";
            n.d(t, {
                hS: () => d,
                o2: () => c,
                js: () => o,
                Oe: () => s,
                Le: () => u,
                F6: () => p
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(823215), n(354520), n(430670), n(581454), n(296540);
            var r = n(474848);
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

            function o(e) {
                return l(e).groupedSections
            }

            function s(e) {
                let t = l(e);
                return t.rankedActions.map(e => ({
                    action: e,
                    section: t.actionSectionMap.get(e)
                }))
            }

            function l(e) {
                let t = n(962299).A.getIntl(),
                    {
                        sections: o,
                        context: s,
                        query: l,
                        shouldShowBlockTypeTitle: u
                    } = e,
                    d = l.trim().toLowerCase();
                d.startsWith("/") && (d = d.slice(1));
                let f = c(o, s).map((e, o) => {
                    var l, d;
                    let {
                        actions: c,
                        title: p
                    } = e, f = c.length - 5;
                    if (e.shouldShowMoreOptions && f > 1) {
                        let e = (l = c.slice(5), (0, n(35370).u)({
                            key: "more options",
                            displayName: a.moreOptions,
                            analyticsName: a.moreOptions.defaultMessage,
                            svg: n(397900).ellipsisIcon,
                            validators: [],
                            subActions: () => [{
                                key: 0,
                                title: void 0,
                                render: e => (0, r.jsx)(n(844565).A, { ...e
                                }),
                                actions: l
                            }]
                        }));
                        c = [...c.slice(0, 5), e]
                    }
                    let m = s.blocks[0];
                    if (m) {
                        let e = m.getType();
                        if (u && e && 0 === o) {
                            let r = s.blocks.every(t => t.getType() === e) ? (0, n(495734).Z)(e) : i.mixedBlocks;
                            if (r) {
                                p = t.formatMessage(r, {
                                    count: s.blocks.length
                                });
                                let e = null == (d = n(496704).K.findCollectionViewBlockFromStore(m)) ? void 0 : d.collectionContextStore.getViewType();
                                if (e) {
                                    let t = n(799514).to[e];
                                    t && (p += ` \xb7 ${t}`)
                                }
                            }
                        }
                    }
                    return { ...e,
                        actions: c,
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
                let m = (function(e, t) {
                        let n = [];
                        for (let r of e) {
                            let e = { ...r,
                                actions: []
                            };
                            for (let a of r.actions)
                                if (p(a, t))
                                    if (a.subActions) {
                                        let i = c(a.subActions(t), t);
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
                                                key: `${r.key} ${a.key} ${e.key}`,
                                                title: e.title || a.displayName,
                                                searchTitle: [a.searchName || a.displayName, e.searchTitle || e.title].filter(Boolean).join(" ")
                                            }))) n.push(e)
                                    } else e.actions.push(a);
                            e.actions.length && n.push(e)
                        }
                        return n
                    })(o, s).map(e => ({ ...e,
                        actions: e.actions.map(t => {
                            let n = t.searchName || t.displayName || "",
                                r = [n, e.searchTitle || e.title || "", n].join(" ");
                            return { ...t,
                                searchName: r
                            }
                        })
                    })),
                    g = [],
                    D = new Map;
                for (let e of m)
                    for (let t of e.actions) D.set(t, e), g.push(t);
                let h = (0, n(821048).Ay)(d, g, e => e.searchName || "", {
                        minScore: 25,
                        getSortScore: e => -e.score * (e.original.sortScoreMultiplier ? ? 1)
                    }),
                    _ = new Set(h),
                    y = g.filter(e => !!e.alwaysShowInSearch && !_.has(e)),
                    v = [...y.filter(e => "start" === e.alwaysShowInSearch), ...h, ...y.filter(e => "end" === e.alwaysShowInSearch)],
                    b = n(381453).$z(v, e => {
                        let t = D.get(e);
                        if (t) return t.title
                    }),
                    C = [];
                for (let e of Object.keys(b)) {
                    let t = b[e],
                        n = D.get(t[0]);
                    n && C.push({ ...n,
                        actions: t
                    })
                }
                return {
                    groupedSections: C,
                    rankedActions: v,
                    actionSectionMap: D
                }
            }

            function u(e, t) {
                if (!t) return e;
                let n = 0,
                    r = [];
                for (let a of e) {
                    if (n >= t) break;
                    let e = a.actions.slice(0, t - n);
                    e.length > 0 && (n += e.length, r.push({ ...a,
                        actions: e
                    }))
                }
                return r
            }

            function d(e, t) {
                let n = [];
                for (let r of e) {
                    let e = r.actions.filter(t);
                    e.length > 0 && n.push({ ...r,
                        actions: e
                    })
                }
                return n
            }

            function c(e, t) {
                return d(e, e => p(e, t))
            }

            function p(e, t) {
                return null != e && (!e.validators || e.validators.every(e => e(t)))
            }
        },
        177861: (e, t, n) => {
            "use strict";

            function r(e) {
                let t = 1;
                return e.replace(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g, (e, n, r, a) => {
                    let i = encodeURIComponent(n),
                        o = encodeURIComponent(r),
                        s = encodeURIComponent(a),
                        l = encodeURIComponent(",");
                    return `[**[${t++}]**](#citation:${i}${l}${o}${l}${s})`
                })
            }

            function a(e, t) {
                let n = {
                    stepCitations: { ...e.stepCitations
                    }
                };
                for (let [e, r] of Object.entries(t.stepCitations)) {
                    if (!n.stepCitations[e]) {
                        n.stepCitations[e] = {
                            claims: [...r.claims],
                            artifacts: [...r.artifacts]
                        };
                        continue
                    }
                    let t = new Set(n.stepCitations[e].claims.map(e => e.id));
                    for (let a of r.claims) t.has(a.id) || n.stepCitations[e].claims.push(a);
                    let a = new Set(n.stepCitations[e].artifacts.map(e => e.id));
                    for (let t of r.artifacts) a.has(t.id) || n.stepCitations[e].artifacts.push(t)
                }
                return n
            }

            function i(e) {
                try {
                    let t = [];
                    for (let n in e.stepCitations)
                        for (let r of e.stepCitations[n].artifacts || []) r.citationInfo && t.push(r.citationInfo);
                    let n = t.length,
                        r = {};
                    for (let e of t) {
                        if (!e) continue;
                        let t = "unknown";
                        "notion" === e.citationType ? t = "notion" : "universal_search" === e.citationType && (t = e.target || "unknown"), r[t] = (r[t] || 0) + 1
                    }
                    return {
                        allArtifacts: t,
                        resultsBySource: r,
                        numSearchResults: n
                    }
                } catch (e) {
                    return {
                        allArtifacts: [],
                        resultsBySource: {},
                        numSearchResults: 0
                    }
                }
            }

            function o(e, t) {
                try {
                    let s = function(e) {
                            let t = [];
                            for (let n of e.matchAll(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g)) {
                                let [, e, r, a] = n;
                                ("claim" === r || "artifact" === r) && t.push({
                                    planKey: e,
                                    citationType: r,
                                    resourceId: a
                                })
                            }
                            return t
                        }(e),
                        l = {},
                        u = new Set;
                    for (let e of s) {
                        let {
                            planKey: s,
                            citationType: d,
                            resourceId: c
                        } = e;
                        try {
                            var n, r, a, i, o;
                            let e;
                            if (!s || !d || !c) continue;
                            let p = t.stepCitations[s];
                            if (!p) continue;
                            if ("claim" === d) {
                                let t = null == (r = p.claims) ? void 0 : r.find(e => e.id === c);
                                null != t && null != (a = t.supportingArtifactIds) && a[0] && (e = null == (i = p.artifacts) ? void 0 : i.find(e => e.id === t.supportingArtifactIds[0]))
                            } else "artifact" === d && (e = null == (o = p.artifacts) ? void 0 : o.find(e => e.id === c));
                            if (null != (n = e) && n.citationInfo) {
                                let t = "unknown";
                                "notion" === e.citationInfo.citationType ? (t = "notion", u.add(e.citationInfo.pageId)) : "universal_search" === e.citationInfo.citationType && (t = e.citationInfo.target || "unknown"), l[t] = (l[t] || 0) + 1
                            }
                        } catch (e) {
                            continue
                        }
                    }
                    let d = Object.values(l).reduce((e, t) => e + t, 0);
                    return {
                        citationsBySource: l,
                        numCitationsShown: d,
                        citationPageIds: Array.from(u)
                    }
                } catch (e) {
                    return {
                        citationsBySource: {},
                        numCitationsShown: 0,
                        citationPageIds: []
                    }
                }
            }

            function s(e) {
                let t = e.findLast(e => "researcher-report" === e.type);
                return {
                    citationInfo: t && t.citationInfo ? t.citationInfo : {
                        stepCitations: {}
                    },
                    reportContent: (null == t ? void 0 : t.value) || ""
                }
            }
            n.d(t, {
                Mi: () => a,
                VJ: () => s,
                W6: () => i,
                y5: () => r,
                ye: () => o
            }), n(410838), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(672577), n(581454), n(908872), n(737550)
        },
        183205: (e, t, n) => {
            "use strict";

            function r(e) {
                return e.blocks.some(n(574676).u)
            }
            n.d(t, {
                y: () => r
            }), n(898992), n(737550)
        },
        187649: (e, t, n) => {
            "use strict";
            let r, a;

            function i(e) {
                r = e
            }
            async function o() {
                return a || (r ? a = await r() : void 0)
            }
            n.d(t, {
                Q: () => i,
                z: () => o
            })
        },
        189760: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => r,
                r: () => a
            });
            let r = {
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
                return null != e && e in r
            }
        },
        190462: (e, t, n) => {
            "use strict";
            e.exports = n.p + "46e91f58a3919e25.png"
        },
        198048: (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => a
            });
            var r = n(296540);

            function a() {
                let e = (0, n(51194).a)(),
                    [t, a] = (0, r.useState)(0),
                    i = (0, r.useCallback)(() => {
                        e.current && a(t + 1)
                    }, [t]);
                return [(0, r.useCallback)(() => n(610104).Gt.postRender(i), [i]), t]
            }
        },
        199894: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    environment: t,
                    selection: r,
                    transaction: a,
                    preventSetSelection: i
                } = e, {
                    blocks: o
                } = e, s = (0, n(385941).Z)();
                if (!s) throw Error("No root store.");
                if (r.length > 0) {
                    let e = r[0],
                        s = n(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!s || !s.props.onInsertAbove) throw Error("No Selectable found.");
                    let l = s.props.onInsertAbove({
                        insertStores: o,
                        transaction: a
                    });
                    return i || (0, n(854924).t)({
                        environment: t,
                        stores: l
                    }), l
                } {
                    let e = s.getContentStore(),
                        r = o.map(t => (0, n(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: a
                        }).childStore);
                    return i || (0, n(854924).t)({
                        environment: t,
                        stores: r
                    }), r
                }
            }
            n.d(t, {
                t: () => r
            }), n(16280), n(898992), n(672577), n(581454)
        },
        200424: (e, t, n) => {
            "use strict";
            e.exports = n.p + "9ade71d75a1c0e93.png"
        },
        202151: (e, t, n) => {
            "use strict";
            e.exports = n.p + "f6041c6bf8f9f53e.png"
        },
        203066: (e, t, n) => {
            "use strict";
            n.d(t, {
                N: () => u
            });
            var r = n(296540);
            class a extends r.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = this.props.sizeRef.current;
                        e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function i({
                children: e,
                isPresent: t
            }) {
                let n = (0, r.useId)(),
                    o = (0, r.useRef)(null),
                    s = (0, r.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return (0, r.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: r,
                        top: a,
                        left: i
                    } = s.current;
                    if (t || !o.current || !e || !r) return;
                    o.current.dataset.motionPopId = n;
                    let l = document.createElement("style");
                    return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${i}px !important;
          }
        `), () => {
                        document.head.removeChild(l)
                    }
                }, [t]), r.createElement(a, {
                    isPresent: t,
                    childRef: o,
                    sizeRef: s
                }, r.cloneElement(e, {
                    ref: o
                }))
            }
            let o = ({
                children: e,
                initial: t,
                isPresent: a,
                onExitComplete: o,
                custom: l,
                presenceAffectsLayout: u,
                mode: d
            }) => {
                let c = (0, n(328601).M)(s),
                    p = (0, r.useId)(),
                    f = (0, r.useMemo)(() => ({
                        id: p,
                        initial: t,
                        isPresent: a,
                        custom: l,
                        onExitComplete: e => {
                            for (let t of (c.set(e, !0), c.values()))
                                if (!t) return;
                            o && o()
                        },
                        register: e => (c.set(e, !1), () => c.delete(e))
                    }), u ? void 0 : [a]);
                return (0, r.useMemo)(() => {
                    c.forEach((e, t) => c.set(t, !1))
                }, [a]), r.useEffect(() => {
                    a || c.size || !o || o()
                }, [a]), "popLayout" === d && (e = r.createElement(i, {
                    isPresent: a
                }, e)), r.createElement(n(786719).t.Provider, {
                    value: f
                }, e)
            };

            function s() {
                return new Map
            }
            let l = e => e.key || "",
                u = ({
                    children: e,
                    custom: t,
                    initial: a = !0,
                    onExitComplete: i,
                    exitBeforeEnter: s,
                    presenceAffectsLayout: u = !0,
                    mode: d = "sync"
                }) => {
                    let c;
                    (0, n(285238).V)(!s, "Replace exitBeforeEnter with mode='wait'");
                    let p = (0, r.useContext)(n(29473).L).forceRender || (0, n(198048).C)()[0],
                        f = (0, n(51194).a)(),
                        m = (c = [], r.Children.forEach(e, e => {
                            (0, r.isValidElement)(e) && c.push(e)
                        }), c),
                        g = m,
                        D = (0, r.useRef)(new Map).current,
                        h = (0, r.useRef)(g),
                        _ = (0, r.useRef)(new Map).current,
                        y = (0, r.useRef)(!0);
                    if ((0, n(525128).E)(() => {
                            y.current = !1, m.forEach(e => {
                                let t = l(e);
                                _.set(t, e)
                            }), h.current = g
                        }), (0, n(757491).l)(() => {
                            y.current = !0, _.clear(), D.clear()
                        }), y.current) return r.createElement(r.Fragment, null, g.map(e => r.createElement(o, {
                        key: l(e),
                        isPresent: !0,
                        initial: !!a && void 0,
                        presenceAffectsLayout: u,
                        mode: d
                    }, e)));
                    g = [...g];
                    let v = h.current.map(l),
                        b = m.map(l),
                        C = v.length;
                    for (let e = 0; e < C; e++) {
                        let t = v[e]; - 1 !== b.indexOf(t) || D.has(t) || D.set(t, void 0)
                    }
                    return "wait" === d && D.size && (g = []), D.forEach((e, n) => {
                        if (-1 !== b.indexOf(n)) return;
                        let a = _.get(n);
                        if (!a) return;
                        let s = v.indexOf(n),
                            c = e;
                        c || (c = r.createElement(o, {
                            key: l(a),
                            isPresent: !1,
                            onExitComplete: () => {
                                D.delete(n);
                                let e = Array.from(_.keys()).filter(e => !b.includes(e));
                                if (e.forEach(e => _.delete(e)), h.current = m.filter(t => {
                                        let r = l(t);
                                        return r === n || e.includes(r)
                                    }), !D.size) {
                                    if (!1 === f.current) return;
                                    p(), i && i()
                                }
                            },
                            custom: t,
                            presenceAffectsLayout: u,
                            mode: d
                        }, a), D.set(n, c)), g.splice(s, 0, c)
                    }), g = g.map(e => {
                        let t = e.key;
                        return D.has(t) ? e : r.createElement(o, {
                            key: l(e),
                            isPresent: !0,
                            presenceAffectsLayout: u,
                            mode: d
                        }, e)
                    }), r.createElement(r.Fragment, null, D.size ? g : g.map(e => (0, r.cloneElement)(e)))
                }
        },
        208117: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    environment: t,
                    externalOrgSummary: r,
                    spaceStore: i,
                    billingData: o
                } = e;
                return a({
                    environment: t,
                    externalOrgSummary: r,
                    spaceStore: i,
                    billingData: o
                }) && !(0, n(192159).N8)(o) && !!(!i || !(0, n(556306).h)(i))
            }

            function a(e) {
                let {
                    environment: t,
                    externalOrgSummary: r,
                    spaceStore: a,
                    billingData: i
                } = e;
                if (i && (0, n(192159).N8)(i)) return !0;
                let o = null == a ? void 0 : a.id;
                return !!o && (!!(((0, n(616579).j)({
                    environment: t,
                    spaceId: o
                }) ? ? 1) > 99 || (0, n(192159).N8)(i)) || !!r && "company_employee_count" in r && parseInt(r.company_employee_count) > 99)
            }
            n.d(t, {
                H: () => a,
                q: () => r
            })
        },
        212169: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ud: () => o,
                YD: () => i,
                c$: () => r,
                q_: () => a
            });
            let r = {
                    "sprints-onboarding": {
                        steps: [{
                            id: "current-sprint-view-tooltip"
                        }, {
                            id: "sprint-task-tooltip"
                        }, {
                            id: "complete-sprint-button-tooltip"
                        }]
                    },
                    "enhanced-qna-onboarding": {
                        steps: [{
                            id: "find-in-tooltip"
                        }, {
                            id: "mention-tooltip"
                        }]
                    },
                    "jira-sync-onboarding": {
                        steps: [{
                            id: "all-projects-tooltip"
                        }, {
                            id: "all-issues-tooltip"
                        }, {
                            id: "database-views-and-filters-tooltip"
                        }, {
                            id: "settings-to-setup-projects-and-issues"
                        }]
                    },
                    "project-management-import-onboarding": {
                        steps: [{
                            id: "your-teamspace-tooltip"
                        }, {
                            id: "all-projects-tooltip"
                        }, {
                            id: "navigate-to-project-tasks-tooltip"
                        }, {
                            id: "project-customization-tooltip"
                        }, {
                            id: "related-tasks-database-views-tooltip"
                        }]
                    },
                    "ai-comment-onboarding": {
                        steps: [{
                            id: "ai-comment-onboarding-tooltip"
                        }]
                    },
                    database_onboarding: {
                        steps: [{
                            id: "database_onboarding_status_property_tooltip"
                        }, {
                            id: "database_onboarding_add_property_tooltip"
                        }, {
                            id: "database_onboarding_database_page_tooltip"
                        }, {
                            id: "database_onboarding_board_view_tooltip"
                        }]
                    },
                    "new-user-home-workspace-tour": {
                        steps: [{
                            id: "teamspaces"
                        }]
                    }
                },
                a = "completed",
                i = "dismissed";

            function o(e, t) {
                return null == t ? void 0 : t[e]
            }
        },
        215746: (e, t, n) => {
            "use strict";
            n.d(t, {
                I: () => r,
                w: () => a
            });
            let r = (e, t) => Math.abs(e - t);

            function a(e, t) {
                return Math.sqrt(r(e.x, t.x) ** 2 + r(e.y, t.y) ** 2)
            }
        },
        216736: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    svgElement: t,
                    padding: n,
                    backgroundColor: r
                } = e, a = t.cloneNode(!0);
                if (!(a instanceof SVGSVGElement)) throw Error("Failed to clone SVG element");
                a.getAttribute("xmlns") || a.setAttribute("xmlns", "http://www.w3.org/2000/svg"), a.getAttribute("xmlns:xlink") || a.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                let i = function(e) {
                        var t;
                        try {
                            let t = e.getBBox();
                            if (t.width > 0 && t.height > 0) return t
                        } catch {}
                        let n = null == (t = e.viewBox) ? void 0 : t.baseVal;
                        if (n && n.width > 0 && n.height > 0) return {
                            x: n.x,
                            y: n.y,
                            width: n.width,
                            height: n.height
                        };
                        let r = e.getBoundingClientRect();
                        return {
                            x: 0,
                            y: 0,
                            width: r.width,
                            height: r.height
                        }
                    }(t),
                    o = i.width,
                    s = i.height,
                    l = o + 2 * n,
                    u = s + 2 * n;
                a.setAttribute("width", l.toString()), a.setAttribute("height", u.toString()), a.setAttribute("viewBox", `${i.x-n} ${i.y-n} ${l} ${u}`);
                let d = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                return d.setAttribute("x", (i.x - n).toString()), d.setAttribute("y", (i.y - n).toString()), d.setAttribute("width", l.toString()), d.setAttribute("height", u.toString()), d.setAttribute("fill", r), a.insertBefore(d, a.firstChild), {
                    svgText: new XMLSerializer().serializeToString(a),
                    width: l,
                    height: u
                }
            }

            function a(e) {
                let t = encodeURIComponent(e);
                return `data:image/svg+xml;charset=utf-8,${t}`
            }

            function i(e) {
                let t = e;
                return (t = (t = (t = t.replace(/@import[^;]+;/g, "")).replace(/url\(\s*(['"]?)(https?:\/\/|\/\/)[^)"']+\1\s*\)/g, 'url("")')).replace(/<image\b[^>]*(?:href|xlink:href)=["'](?:https?:)?\/\/[^"']+["'][^>]*\/?>/gi, "")).replace(/<use\b[^>]*(?:href|xlink:href)=["'](?:https?:)?\/\/[^"']+["'][^>]*\/?>/gi, "")
            }
            async function o(e) {
                let {
                    svgText: t,
                    width: n,
                    height: r,
                    mimeType: a,
                    quality: i,
                    pixelRatio: o,
                    platform: s
                } = e;
                return await new Promise((e, l) => {
                    if (s) {
                        if (!s.createImage || !s.createCanvas) return void l(Error("RasterizePlatform requires createImage and createCanvas"));
                        let u = s.createImage,
                            d = s.createCanvas,
                            c = s.createObjectUrl ? ? (e => URL.createObjectURL(e)),
                            p = s.revokeObjectUrl ? ? (e => URL.revokeObjectURL(e)),
                            f = new Blob([t], {
                                type: "image/svg+xml"
                            }),
                            m = u();
                        m.crossOrigin = "anonymous";
                        let g = c(f);
                        return m.onload = () => {
                            p(g);
                            let t = d(),
                                s = t.getContext("2d");
                            if (!s) return void l(Error("Failed to get canvas context"));
                            let u = o ? ? 1;
                            t.width = Math.max(1, Math.floor(n * u)), t.height = Math.max(1, Math.floor(r * u)), s.setTransform(u, 0, 0, u, 0, 0), s.drawImage(m, 0, 0);
                            try {
                                t.toBlob(n => {
                                    t.remove(), n ? e(n) : l(Error("Failed to rasterize SVG"))
                                }, a, "image/jpeg" === a ? i : void 0)
                            } catch (n) {
                                t.remove();
                                let e = n instanceof Error ? n.message : "Unknown rasterization error";
                                l(Error(`Failed to export image: ${e}`))
                            }
                        }, m.onerror = () => {
                            p(g), l(Error("Failed to load SVG for rasterization"))
                        }, void(m.src = g)
                    }
                    let u = new Image;
                    u.crossOrigin = "anonymous", u.onload = () => {
                        let t = document.createElement("canvas"),
                            s = t.getContext("2d");
                        if (!s) return void l(Error("Failed to get canvas context"));
                        let d = o ? ? 1;
                        t.width = Math.max(1, Math.floor(n * d)), t.height = Math.max(1, Math.floor(r * d)), s.setTransform(d, 0, 0, d, 0, 0), s.drawImage(u, 0, 0);
                        try {
                            t.toBlob(n => {
                                t.remove(), n ? e(n) : l(Error("Failed to rasterize SVG"))
                            }, a, "image/jpeg" === a ? i : void 0)
                        } catch (n) {
                            t.remove();
                            let e = n instanceof Error ? n.message : "Unknown rasterization error";
                            l(Error(`Failed to export image: ${e}`))
                        }
                    }, u.onerror = () => {
                        l(Error("Failed to load SVG for rasterization"))
                    }, u.src = `data:image/svg+xml;charset=utf-8;base64,${btoa(unescape(encodeURIComponent(t)))}`
                })
            }

            function s(e) {
                let {
                    blob: t,
                    filename: n
                } = e, r = URL.createObjectURL(t), a = document.createElement("a");
                a.href = r, a.download = n, a.style.display = "none", document.body.appendChild(a), a.click(), a.remove(), setTimeout(() => URL.revokeObjectURL(r), 0)
            }
            n.d(t, {
                Ep: () => a,
                WN: () => s,
                Zu: () => o,
                l8: () => r,
                r1: () => i
            }), n(16280), n(964979), n(814603), n(147566), n(198721)
        },
        225476: (e, t, n) => {
            "use strict";

            function r(e) {
                if (null != e && e.blockId) return e.blockId
            }

            function a(e, t) {
                let n = e.currentUser.id;
                return t.userId === n || t.present
            }

            function i(e) {
                var t;
                return (null == (t = e.state.rootStore) ? void 0 : t.canEdit()) ? ? !1
            }

            function o(e) {
                let {
                    pageVisitStore: t,
                    presenceStore: r
                } = e, {
                    remotePresenceData: a
                } = r.state, i = [];
                a && (0, n(763230).uk)(a, e => {
                    null != e && e.userId && i.push(e)
                });
                let {
                    pageId: o,
                    lastViewTime: s,
                    lastExitTime: l,
                    totalCount: u,
                    hasMore: d,
                    ...c
                } = t.state;
                return (0, n(763230).uk)(c, e => {
                    e.isDefined() && i.push({
                        userId: e.getUserId(),
                        activityTimestampNearestMinuteMs: (0, n(627179).WY)(e.getVisitedAt()),
                        present: !1
                    })
                }), i = (0, n(381453).hS)(i, e => e.userId), (0, n(381453).Ul)(i, ({
                    activityTimestampNearestMinuteMs: e
                }) => e ? -e : 0)
            }

            function s(e) {
                let {
                    userId: t,
                    theme: r
                } = e;
                return (0, n(514214).MF)(t) ? n(632079).Tj.icon.secondary : (0, n(632079).Nq)(t, r)
            }
            n.d(t, {
                $L: () => s,
                EV: () => r,
                PZ: () => o,
                dp: () => a,
                xm: () => i
            }), n(944114)
        },
        225900: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    transcript: a,
                    parentPointer: i,
                    threadId: o,
                    workflowId: s,
                    createdSource: l,
                    agentMessageKey: u,
                    debugOverrides: d
                } = e, c = o ? ? (0, n(295447).Z1)({
                    environment: t,
                    table: n(298085).T,
                    spaceId: r.id
                });
                return (0, n(757688).WE)({
                    environment: t,
                    clientStore: n(57168).defaultClientAIChatStore,
                    threadStore: void 0,
                    createThreadArgs: {
                        id: c,
                        transcript: a,
                        workflowId: s,
                        parentPointer: i || {
                            table: n(213003).NX,
                            id: r.id,
                            spaceId: r.id
                        },
                        createdSource: l,
                        agentMessageKey: u
                    },
                    additionalDebugOverrides: d,
                    sendPatchResponse: !0
                }), n(174148).E.createChildStore(r, {
                    id: c,
                    spaceId: r.id,
                    table: n(298085).T
                })
            }
            n.d(t, {
                N: () => r
            })
        },
        226512: (e, t, n) => {
            "use strict";
            n.d(t, {
                R: () => i
            });
            var r = n(296540),
                a = n(474848);

            function i(e) {
                var t, i;
                let s, l = (0, n(109939).tz)(),
                    {
                        onClick: u,
                        onDismiss: d,
                        style: c,
                        hoveredStyle: p,
                        showBackground: f = !0
                    } = e,
                    m = (t = c, i = f, s = (0, n(781889).o)(), (0, n(960253).I)(() => ({
                        button: {
                            alignItems: "center",
                            background: i ? n(632079).Tj.buttonHoveredBackground : "none",
                            borderRadius: "100%",
                            display: "flex",
                            height: n(104509).Ev.lg,
                            width: n(104509).Ev.lg,
                            justifyContent: "center",
                            position: "absolute",
                            insetInlineEnd: 10 + s,
                            top: 10,
                            zIndex: 10,
                            ...t
                        },
                        buttonHovered: {
                            background: i ? n(632079).Tj.buttonPressedBackground : n(632079).Tj.buttonHoveredBackground
                        }
                    }), [i, t, s])),
                    g = (0, r.useContext)(n(19187).e),
                    D = function(e) {
                        let {
                            onClick: t,
                            onDismiss: n
                        } = e, a = (0, r.useCallback)(e => {
                            null == t || t(e), null == n || n()
                        }, [t, n]);
                        return t || n ? a : void 0
                    }({
                        onClick: u,
                        onDismiss: d ? ? g
                    });
                return D ? (0, a.jsx)(n(374533).A, {
                    ariaLabel: l.formatMessage(o.dismissModalAriaLabel),
                    icon: n(766970).xMarkFillIcon,
                    onClick: D,
                    style: m.button,
                    hoveredStyle: { ...m.buttonHovered,
                        ...p
                    }
                }) : null
            }
            let o = (0, n(109939).YK)({
                dismissModalAriaLabel: {
                    id: "dismiss.dismissButton.label",
                    defaultMessage: "Dismiss"
                }
            })
        },
        248791: (e, t, n) => {
            "use strict";
            n.d(t, {
                lz: () => a,
                nO: () => r,
                wl: () => i
            });
            let r = {
                    chatSidebar: new(n(815048)).O2("chatSidebar", () => Promise.all([n.e(75134), n.e(9773), n.e(55373), n.e(36192), n.e(96346), n.e(49806), n.e(79974), n.e(45414), n.e(71562), n.e(16471), n.e(37353), n.e(18965), n.e(85142), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(54951), n.e(43444), n.e(23979), n.e(26997), n.e(73259), n.e(28048), n.e(93430), n.e(12560), n.e(88268), n.e(39726), n.e(42534), n.e(86662), n.e(6212), n.e(29663), n.e(28482), n.e(14369), n.e(56308), n.e(75136), n.e(98175), n.e(83490), n.e(58360), n.e(12690), n.e(68583), n.e(35602), n.e(12024), n.e(95969), n.e(22195), n.e(65441), n.e(44903), n.e(3456), n.e(28463), n.e(2703)]).then(n.bind(n, 827778))),
                    chatSidebarActions: new(n(815048)).O2("chatSidebarActions", async () => await n.e(87196).then(n.bind(n, 358667))),
                    chatSidebarHelpers: new(n(815048)).O2("chatSidebarHelpers", async () => await Promise.resolve().then(n.bind(n, 548124))),
                    chatSidebarModeButton: new(n(815048)).O2("chatSidebarModeButton", async () => await Promise.all([n.e(9773), n.e(55373), n.e(36192), n.e(96346), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(43444), n.e(23979), n.e(64696), n.e(48486), n.e(76135), n.e(76298), n.e(23644), n.e(94814)]).then(n.bind(n, 471286))),
                    dockedSidebar: new(n(815048)).O2("dockedSidebar", async () => await Promise.all([n.e(75134), n.e(9773), n.e(55373), n.e(36192), n.e(96346), n.e(49806), n.e(79974), n.e(45414), n.e(71562), n.e(16471), n.e(37353), n.e(18965), n.e(85142), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(53847), n.e(12354), n.e(5721), n.e(57688), n.e(54951), n.e(43444), n.e(23979), n.e(26997), n.e(73259), n.e(28048), n.e(93430), n.e(12560), n.e(88268), n.e(39726), n.e(42534), n.e(86662), n.e(6212), n.e(29663), n.e(28482), n.e(14369), n.e(56308), n.e(75136), n.e(98175), n.e(83490), n.e(58360), n.e(12690), n.e(68583), n.e(35602), n.e(12024), n.e(95969), n.e(22195), n.e(65441), n.e(44903), n.e(3456), n.e(28463)]).then(n.bind(n, 707709)))
                },
                a = (0, n(815048)._h)(r.chatSidebar, e => e.ChatSidebar),
                i = (0, n(815048)._h)(r.chatSidebarModeButton, e => e.ChatSidebarModeButtonPopupContents)
        },
        250943: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    multiSelection: t
                } = e;
                return (0, n(58512).$)(t).map(({
                    store: e,
                    selection: t
                }) => {
                    let r = (0, n(247438).RQ)(e.getValue()),
                        a = (0, n(247438).xbM)(r, t),
                        {
                            tokensInsideRange: i
                        } = (0, n(247438).AI5)(r, a.startIndex, a.endIndex);
                    return (0, n(536614).r4)(i, e)
                }).join("\n\n")
            }
            n.d(t, {
                E: () => r
            }), n(581454)
        },
        251861: (e, t, n) => {
            "use strict";
            e.exports = n.p + "4166d500779ec2a7.png"
        },
        258527: (e, t, n) => {
            "use strict";
            e.exports = n.p + "281f47e883097642.png"
        },
        262401: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                iconDefinition: () => r,
                personSlashSmallIcon: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.81 1.85 11.03 12.84",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.033 2.206a.625.625 0 0 1 .88.066l.1.116q.018.03.04.058l9.61 11.175.03.034a.625.625 0 0 1-.948.815l-.483-.562c-.28.155-.607.242-.942.242H4.68c-.557 0-1.09-.236-1.43-.631a1.405 1.405 0 0 1-.19-1.593C3.883 10.313 5.824 9.254 8 9.254q.135.001.27.008l-.72-.84a2.66 2.66 0 0 1-1.728-.979c-.41-.511-.64-1.162-.708-1.856l-2.148-2.5a.625.625 0 0 1 .067-.881M8 10.354c-1.854 0-3.363.903-3.961 2.073-.073.143-.052.262.046.377a.8.8 0 0 0 .595.247h6.64a1 1 0 0 0 .187-.022l-2.153-2.506A5.4 5.4 0 0 0 8 10.353M8 1.85c.925 0 1.674.383 2.18 1.012.494.617.73 1.436.73 2.291s-.236 1.674-.73 2.29l-.09.105-.73-.848c.28-.377.45-.913.45-1.547 0-.664-.185-1.223-.49-1.602-.293-.366-.724-.6-1.32-.6-.595 0-1.027.233-1.32.6l-.014.017-.726-.843c.5-.548 1.205-.874 2.06-.874"
                    })
                },
                a = (0, n(104509).wt)("personSlashSmall", r, "small")
        },
        269515: (e, t, n) => {
            "use strict";
            e.exports = n.p + "c6b766e6d181c27f.png"
        },
        269612: (e, t, n) => {
            "use strict";

            function r({
                billingData: e,
                product: t
            }) {
                return (0, n(722371).Xk)(n(645040).xm, t) ? {
                    addOnFeature: t,
                    for_subscription_tier: (0, n(192159).AI)(e)
                } : {
                    for_subscription_tier: t
                }
            }
            n.d(t, {
                p: () => r
            })
        },
        272799: (e, t, n) => {
            "use strict";

            function r(e) {
                n(986939).A.isMobile || n(822284).HL.setState({
                    open: !0,
                    ...e
                })
            }

            function a() {
                n(822284).HL.update(e => ({ ...e,
                    open: !1
                }))
            }

            function i(e) {
                n(986939).A.isMobile || n(822284).BusinessTrialEndingModalStore.update(() => ({
                    modalState: "initial",
                    ...e,
                    open: !0
                }))
            }

            function o(e) {
                n(822284).BusinessTrialEndingModalStore.update(t => ({ ...t,
                    modalState: e
                }))
            }

            function s() {
                n(822284).BusinessTrialEndingModalStore.update(e => ({ ...e,
                    open: !1,
                    modalState: "initial"
                }))
            }

            function l(e) {
                n(822284).BS.setState({ ...e,
                    open: !0
                })
            }

            function u() {
                n(822284).BS.update(e => ({ ...e,
                    open: !1
                }))
            }

            function d(e) {
                n(822284).jz.setState({
                    open: !0,
                    ...e
                })
            }

            function c() {
                n(822284).jz.update(e => ({ ...e,
                    open: !1
                }))
            }

            function p(e) {
                n(986939).A.isMobile || n(822284).ZJ.setState({
                    open: !0,
                    ...e
                })
            }

            function f() {
                n(822284).ZJ.update(e => ({ ...e,
                    open: !1
                }))
            }
            async function m(e) {
                var t;
                let {
                    billingData: r,
                    environment: a,
                    spaceStore: i,
                    from: o,
                    memberCount: s,
                    prices: l,
                    offerToApply: u,
                    autoConvert: d,
                    captchaToken: c,
                    sessionId: p
                } = e;
                if (!i || !o || !r || void 0 === s || !u) return {
                    success: !1,
                    error: "Invalid arguments"
                };
                let f = e.nowForTesting ? ? n(906745).DateTime.now(),
                    m = n(653828).H.state.selectedCurrencyCode ? ? "USD",
                    g = (0, n(982473).vk)(l, {
                        product: "business",
                        interval: "month",
                        currency: m
                    }),
                    D = (0, n(982473).vH)({
                        items: (null == (t = r.subscription) ? void 0 : t.items) ? ? [],
                        trialEnd: f.plus({
                            days: (0, n(337592).s1)(u)
                        })
                    }, {
                        price: g,
                        quantity: s
                    }),
                    h = u.campaign;
                try {
                    return await (0, n(129909).n)({
                        environment: a,
                        spaceStore: i,
                        from: o,
                        desiredState: D,
                        trialData: {
                            id: h,
                            from: o,
                            autoConvert: d
                        },
                        captchaToken: c,
                        sessionId: p
                    }), {
                        success: !0,
                        error: void 0
                    }
                } catch (e) {
                    return {
                        success: !1,
                        error: e instanceof Error ? e.message : void 0
                    }
                }
            }
            async function g(e) {
                let {
                    billingData: t,
                    environment: r,
                    spaceStore: a
                } = e, i = a.getSpaceId();
                if (!t || !(0, n(192159).TB)(t) || !a.canAdmin()) return;
                let o = await r.api.callCellCompatibleApi({
                    eventName: "getCustomerOffersReceived",
                    environment: r,
                    data: {
                        spaceId: i
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: i
                    }
                });
                if ("failed" !== o.type) return (0, n(278662).Jd)(o.data)
            }

            function D(e) {
                var t, r;
                let a, {
                    billingData: i,
                    businessTrialOffer: o,
                    modalLastShownAt: s,
                    modalShownTimes: l
                } = e;
                if (!i) return !1;
                let u = (0, n(192159).DS)(i);
                if (t = s, r = u, t && n(906745).DateTime.fromMillis(t).startOf("day").equals(r.startOf("day")) || "business" === (0, n(192159).AW)(i) || "enterprise" === (0, n(192159).AW)(i) || !o || (0, n(44027).od)({
                        businessTrialOffer: o,
                        billingTime: u,
                        modalLastShownAt: s,
                        modalShownTimes: l
                    }) || (0, n(44027).z2)({
                        billingData: i
                    }) || void 0 === o || (0, n(875472).nb)(o)) return !1;
                let d = o.offer.duration.days;
                if (void 0 === d) return !1;
                try {
                    a = (0, n(44027).rE)(d)
                } catch {
                    a = void 0
                }
                return void 0 !== a && (0, n(383378).tz)(o, a, u) || (0, n(44027).XF)(o, u) || (0, n(383378).V9)(o, u)
            }
            n.r(t), n.d(t, {
                closeBusinessTrialCCUpfrontModal: () => f,
                closeBusinessTrialEndingModal: () => s,
                closeBusinessTrialExplorePlanModal: () => c,
                closeBusinessTrialLossAversionModal: () => u,
                closeBusinessTrialStartModal: () => a,
                createBusinessTrial: () => m,
                determineShouldShowTrialEndingModal: () => D,
                getBusinessTrialUsingOffersReceived: () => g,
                openBusinessTrialCCUpfrontModal: () => p,
                openBusinessTrialEndingModal: () => i,
                openBusinessTrialExplorePlanModal: () => d,
                openBusinessTrialLossAversionModal: () => l,
                openBusinessTrialStartModal: () => r,
                updateBusinessTrialEndingModalState: () => o
            }), n(16280)
        },
        279206: (e, t, n) => {
            "use strict";
            e.exports = n.p + "c07b23b03f31c7d0.png"
        },
        279728: (e, t, n) => {
            "use strict";
            e.exports = n.p + "134453730e6e0d66.png"
        },
        285482: (e, t, n) => {
            "use strict";

            function r(e, t) {
                if ((0, n(101787).pA8)(t)) {
                    let r = (0, n(115964).$)(t.clientData);
                    if (r) return "messageValues" in t.clientData ? e.formatMessage(r, t.clientData.messageValues) : e.formatMessage(r)
                }
                return e.formatMessage(n(683646).k.generic_error)
            }
            n.d(t, {
                A: () => r
            })
        },
        289120: (e, t, n) => {
            "use strict";
            n.d(t, {
                tF: () => i,
                xQ: () => a
            });
            var r = n(296540);

            function a() {
                let e = (0, r.useContext)(n(786719).t);
                if (null === e) return [!0, null];
                let {
                    isPresent: t,
                    onExitComplete: a,
                    register: i
                } = e, o = (0, r.useId)();
                return (0, r.useEffect)(() => i(o), []), !t && a ? [!1, () => a && a(o)] : [!0]
            }

            function i() {
                var e;
                return null === (e = (0, r.useContext)(n(786719).t)) || e.isPresent
            }
        },
        295206: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => i
            }), n(16280), n(898992), n(354520);
            var r = () => n(273917);
            class a extends r().U {
                indexCache = new WeakMap;
                isModelAvailable(e, t, n) {
                    return void 0 !== this.getModelEntry(e, t, n)
                }
                isModelDisabled(e, t, n) {
                    let r = this.getModelEntry(e, t, n);
                    return (null == r ? void 0 : r.isDisabled) ? ? !1
                }
                getModelEntry(e, t, n) {
                    let r = this.getData(e, {
                        spaceId: t
                    });
                    if (r) return this.getIndex(r).get(n)
                }
                getModelMessage(e, t, n) {
                    var r;
                    return null == (r = this.getModelEntry(e, t, n)) ? void 0 : r.modelMessage
                }
                getModelFamily(e, t, r) {
                    var a;
                    let i = null == (a = this.getModelEntry(e, t, r)) ? void 0 : a.modelFamily;
                    return (0, n(443037).jb)(i) ? i : void 0
                }
                getModelsForMode(e, t, n) {
                    let r = this.getData(e, {
                        spaceId: t
                    });
                    if (r) return r.filter(e => "markdown-chat" === n ? void 0 !== e.markdownChat : "workflow" === n ? void 0 !== e.workflow : void 0 !== e.customAgent)
                }
                getIndex(e) {
                    let t = this.indexCache.get(e);
                    if (t) return t;
                    let n = new Map;
                    for (let t of e) n.set(t.model, t);
                    return this.indexCache.set(e, n), n
                }
            }
            let i = new a((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }) => {
                let r = e.currentUser.id;
                try {
                    let a = await e.api.callCellCompatibleApi({
                        eventName: "getAvailableModels",
                        environment: e,
                        cellNavigation: {
                            spaceId: t
                        },
                        data: {
                            spaceId: t
                        }
                    });
                    if ("failed" === a.type) {
                        let e = (0, n(201790).V4)(a);
                        n(419750).O8(Error(`Failed to fetch available models: ${e}`), {
                            from: "AvailableModelsStore.fetch",
                            type: "api_failed_response",
                            data: {
                                spaceId: t,
                                userId: r,
                                errorMessage: e
                            }
                        });
                        return
                    }
                    return 0 === a.data.models.length && n(419750).O8(Error("Received empty model list from server"), {
                        from: "AvailableModelsStore.fetch",
                        type: "empty_response",
                        data: {
                            spaceId: t,
                            userId: r
                        }
                    }), a.data.models
                } catch (e) {
                    n(419750).O8(e, {
                        from: "AvailableModelsStore.fetch",
                        type: "error",
                        data: {
                            spaceId: t,
                            userId: r
                        }
                    });
                    return
                }
            }, {
                dontCacheUndefined: !0
            });
            (0, n(202146).exposeDebugValue)("availableAiModelsStore", i)
        },
        303626: (e, t, n) => {
            "use strict";
            e.exports = n.p + "d6b5a7d3fa534ce3.png"
        },
        310324: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => f,
                KF: () => p,
                LG: () => s,
                Zf: () => u,
                yD: () => l
            });
            var r = n(296540),
                a = n(474848);
            let i = {
                    paddingTop: 4,
                    paddingBottom: 4
                },
                o = r.forwardRef(function({
                    preventCaptureArrowShortcuts: e,
                    preventCaptureDeleteWhenEmpty: t,
                    preventCaptureClipboardShortcuts: o,
                    preventCaptureSpacebarWhenEmpty: s,
                    ...l
                }, u) {
                    let {
                        left: d,
                        right: c,
                        inputLeft: p,
                        inputRight: f,
                        inputRightStyle: m,
                        disableInput: g,
                        inputOuterStyle: h,
                        rightMobileEditLabel: y,
                        mobileKeyboardOnDismiss: v,
                        style: b,
                        value: C,
                        onChange: S,
                        autosize: w,
                        autosizeMinHeight: k,
                        autosizeMaxHeight: x,
                        customElementAttributes: F,
                        disabled: I,
                        format: A,
                        id: E,
                        placeholder: M,
                        type: B,
                        autoFocus: T,
                        focus: j,
                        focusInitial: P,
                        focusAfterAnimation: U,
                        forceShowClearButton: O,
                        ignoreKeyboardMode: L,
                        inputElementAttributes: N,
                        inputStyle: R,
                        isRightLastElementOfInput: V,
                        maxlength: z,
                        min: W,
                        max: H,
                        selectAll: $,
                        showClearButton: q,
                        suppressFocusRing: G,
                        textarea: K,
                        textareaSubmitOnEnter: Y,
                        onBlur: Z,
                        onCancel: X,
                        onClearButtonClick: J,
                        onClick: Q,
                        onFocus: ee,
                        onKeyDown: et,
                        onSubmit: en,
                        ...er
                    } = l, [ea, ei] = (0, r.useState)(() => !!(j || P));
                    (0, r.useEffect)(() => {
                        void 0 !== j && ei(j)
                    }, [j]);
                    let eo = e ? void 0 : n(763230).D_,
                        es = !t || C.length > 0 ? n(763230).D_ : void 0,
                        el = o ? void 0 : n(763230).D_,
                        eu = !s || C.length > 0 ? n(763230).D_ : void 0,
                        ed = (0, n(649476).Tf)(),
                        ec = (0, r.useContext)(n(649476).xu),
                        ep = (0, r.useRef)(null),
                        ef = {
                            value: C,
                            onChange: S,
                            autosize: w,
                            autosizeMinHeight: k,
                            autosizeMaxHeight: x,
                            customElementAttributes: F,
                            disabled: I,
                            format: A,
                            id: E,
                            placeholder: M,
                            type: B,
                            autoFocus: T,
                            focus: j,
                            focusInitial: P,
                            focusAfterAnimation: U,
                            forceShowClearButton: O,
                            ignoreKeyboardMode: L,
                            inputElementAttributes: N,
                            inputStyle: R,
                            isRightLastElementOfInput: V,
                            maxlength: z,
                            min: W,
                            max: H,
                            selectAll: $,
                            showClearButton: q,
                            suppressFocusRing: G,
                            textarea: K,
                            textareaSubmitOnEnter: Y,
                            onBlur: Z,
                            onCancel: X,
                            onClearButtonClick: J,
                            onClick: Q,
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
                        onCut: el,
                        onCopy: el,
                        onPaste: el,
                        onKeypress: n(763230).D_,
                        onLeft: eo,
                        onRight: eo,
                        onDelete: es,
                        onBackspace: es,
                        onSpace: eu,
                        children: n(986939).A.isMobile ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(n(636518).Ay, {
                                ref: u,
                                ...er,
                                itemMarginLeft: ed ? 8 : void 0,
                                style: b,
                                title: (0, a.jsx)(_, {
                                    ref: ep,
                                    left: d,
                                    right: c,
                                    inputLeft: p,
                                    inputRight: f,
                                    inputRightStyle: m,
                                    disableInput: g,
                                    inputOuterStyle: h,
                                    rightMobileEditLabel: y,
                                    isFocused: ea,
                                    setIsFocused: ei,
                                    ...ef
                                })
                            }), (0, a.jsx)(n(368678).P, {
                                show: ea && ec.menuType !== n(649476).gu.ActionSheet,
                                onDismiss: v,
                                inputRef: ep
                            })]
                        }) : (0, a.jsx)(n(636518).Ay, {
                            ref: u,
                            ...er,
                            left: d,
                            right: c,
                            isTokenTitle: !0,
                            title: (0, a.jsx)(D, {
                                ref: ep,
                                disableInput: g,
                                inputOuterStyle: h,
                                inputRight: f,
                                inputRightStyle: m,
                                inputLeft: p,
                                ...ef
                            }),
                            style: { ...i,
                                ...b
                            }
                        })
                    })
                }),
                s = 30,
                l = 28;

            function u(e) {
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
                c = (0, n(64960)._S)({
                    color: n(632079).Tj.background.primary
                });

            function p(e) {
                let t = (0, n(533992).WS)(),
                    r = (0, n(960253).I)(() => ({
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
                            background: c.pressed
                        }
                    }), [e.hasBackground]);
                return (0, a.jsx)(n(374533).A, {
                    size: "xs",
                    colorVariant: "primary",
                    ...e,
                    ariaLabel: e.ariaLabel,
                    style: { ...r.outlineButton,
                        ...e.style,
                        height: t ? s : l,
                        width: t ? s : l
                    },
                    hoveredStyle: d.outlineButtonHovered,
                    pressedStyle: r.outlineButtonPressed
                })
            }
            let f = o,
                m = {
                    style0: {
                        color: n(632079).Tj.text.secondary
                    }
                };

            function g({
                rightMobileEditLabel: e,
                inputRef: t
            }) {
                let i = (0, n(533992).v3)(),
                    o = (0, r.useCallback)(e => {
                        e.preventDefault();
                        let r = t.current;
                        r && (0, n(862215).G)(i, r)
                    }, [i, t]);
                return (0, a.jsx)(n(64960).Ay, {
                    onClick: o,
                    style: m.style0,
                    children: e
                })
            }
            let D = r.forwardRef(function(e, t) {
                    let {
                        disabled: r,
                        disableInput: i,
                        inputOuterStyle: o,
                        inputRight: s,
                        inputRightStyle: l,
                        inputLeft: u,
                        min: d,
                        textarea: c,
                        ...p
                    } = e;
                    return (0, a.jsx)(n(36481).p, { ...p,
                        ref: t,
                        disabled: r || i,
                        style: {
                            height: c ? void 0 : 28,
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            ...o
                        },
                        left: u,
                        right: s,
                        rightStyle: l,
                        min: d,
                        textarea: c
                    })
                }),
                h = {
                    fontSize: 16
                },
                _ = r.forwardRef(function(e, t) {
                    let {
                        left: i,
                        right: o,
                        inputLeft: s,
                        inputRight: l,
                        inputRightStyle: u,
                        disableInput: d,
                        inputOuterStyle: c,
                        rightMobileEditLabel: p,
                        isFocused: f,
                        setIsFocused: m,
                        disabled: D,
                        showClearButton: _,
                        onBlur: y,
                        onFocus: v,
                        ...b
                    } = e, C = (0, r.useCallback)(e => {
                        m(!1), y && y(e)
                    }, [y, m]), S = (0, r.useCallback)(e => {
                        m(!0), v && v(e)
                    }, [v, m]), w = (0, r.useRef)(null), k = (0, n(421573).A)(w, t), x = p && !f ? (0, a.jsx)(g, {
                        rightMobileEditLabel: p,
                        inputRef: w
                    }) : null;
                    return (0, a.jsx)(n(36481).p, { ...b,
                        ref: k,
                        format: "transparent",
                        style: { ...h,
                            ...c
                        },
                        onFocus: S,
                        onBlur: C,
                        showClearButton: !1 !== _,
                        disabled: D || d,
                        left: s || i,
                        right: x || l || o,
                        rightStyle: u
                    })
                })
        },
        313669: (e, t, n) => {
            "use strict";
            e.exports = n.p + "c37502124fe50080.png"
        },
        314331: (e, t, n) => {
            "use strict";

            function r(e) {
                return (0, n(682985).K8)(() => n(585823).gZ.state && (null == e ? void 0 : e.id) === n(585823).Di.state, [e])
            }
            n.d(t, {
                n: () => r
            })
        },
        315144: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => a
            });
            let r = new(n(815048)).O2("StopDictationButton", async () => await Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(5410), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(12354), n.e(5721), n.e(57688), n.e(17250), n.e(64696), n.e(39726), n.e(87971), n.e(29663), n.e(74145), n.e(55067), n.e(79349), n.e(90735), n.e(50354), n.e(71136), n.e(86102), n.e(30671), n.e(3101)]).then(n.bind(n, 985993))),
                a = (0, n(815048)._h)(r, e => e.StopDictationButton)
        },
        317606: (e, t, n) => {
            "use strict";
            n.d(t, {
                BU: () => l,
                _y: () => c,
                getAvailableWorkflowAgentModels: () => p
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(803949), n(581454);
            let r = (0, n(109939).YK)({
                    model: {
                        id: "aiInferenceTranscript.model",
                        defaultMessage: "{modelName}"
                    }
                }),
                a = (0, n(109939).YK)({
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
                i = ["anthropic-haiku-4.5", "gingerbread"];

            function o(e) {
                let {
                    items: t,
                    getModelType: n,
                    shouldSkipSorting: r,
                    getFamily: a
                } = e;
                return t.map((e, t) => ({
                    item: e,
                    originalIndex: t
                })).sort((e, t) => {
                    if (!a) return e.originalIndex - t.originalIndex;
                    if (null != r && r(e.item) || null != r && r(t.item)) return 0;
                    let i = n(e.item),
                        o = n(t.item),
                        s = a(i),
                        l = a(o);
                    if (s !== l) {
                        if (void 0 === s && void 0 !== l) return 1;
                        if (void 0 === l && void 0 !== s) return -1;
                        if (void 0 !== s && void 0 !== l) return s.localeCompare(l)
                    }
                    return e.originalIndex - t.originalIndex
                }).map(({
                    item: e
                }) => e)
            }

            function s(e, t) {
                if (void 0 !== e && void 0 !== t && void 0 !== n(295206).P.getData(e, {
                        spaceId: t
                    })) return r => {
                    if (r) return n(295206).P.getModelFamily(e, t, r)
                }
            }

            function l(e, t, n) {
                return o({
                    items: e,
                    getModelType: e => e,
                    getSecondaryKey: e => e,
                    getFamily: s(t, n)
                })
            }

            function u(e, t, n) {
                return o({
                    items: e,
                    getModelType: e => "default" === e.askMode ? void 0 : e.askMode,
                    getSecondaryKey: e => e.title,
                    shouldSkipSorting: e => "default" === e.askMode,
                    getFamily: s(t, n)
                })
            }

            function d(e, t) {
                return t ? {
                    askMode: "default",
                    title: e.formatMessage(a.defaultModel),
                    config: {
                        type: "workflow"
                    }
                } : {
                    askMode: "default",
                    title: e.formatMessage(a.search),
                    config: {
                        type: "search",
                        scopeForNextSearch: {
                            type: "everything"
                        }
                    }
                }
            }

            function c(e) {
                let {
                    intl: t,
                    isAgentEnabled: o,
                    environment: s,
                    spaceId: l,
                    hideWorkspaceSectionTitle: c = !1,
                    workflowMode: p = "workflow"
                } = e, m = [], g = [], D = [], h = o ? "workflow" : "search", _ = f(s, l);
                if (void 0 === _) return [{
                    id: "workspace-context",
                    sectionTitle: a.includesContextTitle,
                    items: [d(t, o)],
                    configType: h,
                    isLoading: !0
                }, {
                    id: "workspace-context-excludes",
                    sectionTitle: a.excludesContextTitle,
                    items: [],
                    configType: "markdown-chat"
                }];
                _.forEach(e => {
                    let {
                        clientModel: a,
                        modelMessage: o,
                        modelFamily: s,
                        markdownChat: l,
                        workflow: u,
                        customAgent: d,
                        isDisabled: c
                    } = e, f = "custom_agent" === p ? d : u;
                    if (l && D.push({
                            askMode: a,
                            title: t.formatMessage(r.model, {
                                modelName: o
                            }),
                            config: {
                                type: "markdown-chat",
                                model: a
                            },
                            beta: l.beta,
                            isDisabled: c
                        }), "workflow" === h && void 0 !== f) {
                        let e = {
                            askMode: f.finalModelName,
                            title: t.formatMessage(r.model, {
                                modelName: o
                            }),
                            config: {
                                type: "workflow",
                                model: f.finalModelName,
                                modelFromUser: !0
                            },
                            beta: f.beta,
                            isDisabled: c
                        };
                        "mystery" === s || (0, n(722371).Xk)(i, a) ? g.push(e) : m.push(e)
                    }
                });
                let y = [{
                    id: "workspace-context",
                    sectionTitle: c ? void 0 : a.includesContextTitle,
                    items: [d(t, o), ...u(m, s, l)],
                    configType: h
                }];
                return g.length > 0 && y.push({
                    id: "small-open-experimental",
                    sectionTitle: a.smallOrOpenSectionTitle,
                    items: u(g, s, l),
                    configType: h
                }), y.push({
                    id: "workspace-context-excludes",
                    sectionTitle: a.excludesContextTitle,
                    items: u(D, s, l),
                    configType: "markdown-chat"
                }), y
            }

            function p(e, t) {
                let r = f(e, t);
                if (void 0 !== r) return new Set(r.map(e => {
                    var t;
                    return null == (t = e.workflow) ? void 0 : t.finalModelName
                }).filter(n(722371).O9))
            }

            function f(e, t) {
                if (e && t) {
                    let r = n(295206).P.getData(e, {
                        spaceId: t
                    });
                    if (!r) return;
                    let a = [];
                    return r.forEach(e => {
                        let {
                            model: t,
                            modelMessage: r,
                            modelFamily: i,
                            markdownChat: o,
                            workflow: s,
                            customAgent: l,
                            isDisabled: u
                        } = e;
                        if (!o && !s && !l) return;
                        let d = {
                            clientModel: t,
                            modelMessage: r,
                            modelFamily: (0, n(443037).jb)(i) ? i : void 0,
                            isDisabled: u
                        };
                        if (o && (d.markdownChat = {
                                beta: o.beta
                            }), s) {
                            let e = s.finalModelName;
                            (0, n(722371).Xk)(n(426048).AGENT_MODEL_TYPES, e) && (d.workflow = {
                                finalModelName: e,
                                beta: s.beta
                            })
                        }
                        if (l) {
                            let e = l.finalModelName;
                            (0, n(722371).Xk)(n(426048).AGENT_MODEL_TYPES, e) && (d.customAgent = {
                                finalModelName: e,
                                beta: l.beta
                            })
                        }
                        a.push(d)
                    }), a
                }
                return []
            }
        },
        321753: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o,
                n: () => i
            });
            var r = n(296540),
                a = n(474848);

            function i(e) {
                return (0, n(960253).I)(() => ({
                    tooltipTextStyle: {
                        color: n(632079).Tj.text.inverseSecondary
                    },
                    tooltipAvatarContainer: {
                        display: "flex",
                        alignItems: "center",
                        marginInlineEnd: 8
                    },
                    tooltipContainer: {
                        display: "flex",
                        flexDirection: "row",
                        padding: "4px 6px",
                        alignItems: "center",
                        ...e
                    },
                    tooltipUserInfoContainer: {
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                }), [e])
            }
            let o = function(e) {
                let {
                    hasTooltip: t,
                    showAvatarInTooltip: o,
                    tooltipHeader: s,
                    style: l,
                    iconStyle: u,
                    isOffline: d,
                    borderStyle: c,
                    avatarShouldShowShadow: p,
                    initialOverrideStyle: f,
                    tooltipOverrideStyle: m,
                    userValue: g,
                    userStore: D,
                    avatar: h,
                    type: _ = "avatar",
                    delayThreshold: y,
                    hasPersonHoverCard: v,
                    personHoverCardEntrypoint: b = "avatar",
                    avatarOutlineOffset: C
                } = e, S = (0, n(109939).tz)(), w = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore), k = (0, n(67499).S)(), x = (0, n(682985).K8)(() => (0, n(888).$)(k) ? ? w, [k, w]), F = e.size ? ? 18, {
                    initialStyle: I,
                    avatarWrapStyle: A,
                    avatarStyle: E,
                    proxiedImageStyle: M,
                    suspendedUserStyle: B,
                    deletedUserStyle: T
                } = (0, n(960253).I)(() => ({
                    initialStyle: {
                        boxSizing: "content-box",
                        borderRadius: "100%",
                        lineHeight: `${F}px`,
                        width: F,
                        height: F,
                        overflow: "hidden",
                        textAlign: "center",
                        fontSize: Math.max(.4375 * F, 11),
                        background: n(632079).Tj.popoverBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: n(632079).Tj.icon.secondary,
                        opacity: d ? .3 : 1,
                        isolation: "auto",
                        ...u,
                        ...f
                    },
                    avatarWrapStyle: {
                        background: n(632079).Tj.background.primary,
                        borderRadius: "100%",
                        boxShadow: p ? n(632079).Tj.avatarBoxShadow : "none",
                        outlineWidth: 1,
                        outlineStyle: c ? ? "solid",
                        outlineColor: n(632079).Tj.border.secondaryTranslucent,
                        outlineOffset: C ? ? -1,
                        ...u
                    },
                    avatarStyle: {
                        borderRadius: "100%",
                        width: F,
                        height: F,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        opacity: d ? .3 : 1,
                        ...u
                    },
                    proxiedImageStyle: {
                        width: F,
                        height: F,
                        ...u
                    },
                    suspendedUserStyle: {
                        boxSizing: "content-box",
                        borderRadius: "100%",
                        width: F - 2,
                        height: F - 2,
                        overflow: "hidden",
                        background: n(632079).Tj.suspendedUIUserAvatarBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: n(632079).Tj.text.primary,
                        opacity: d ? .3 : 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        ...u
                    },
                    deletedUserStyle: {
                        boxSizing: "border-box",
                        borderRadius: "100%",
                        width: F,
                        height: F,
                        overflow: "hidden",
                        background: n(632079).Tj.popoverBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: n(632079).Tj.icon.secondary,
                        opacity: d ? .3 : 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: `1px solid ${n(632079).Tj.border.secondary}`,
                        ...u
                    }
                }), [f, p, c, d, F, u, C]), {
                    tooltipTextStyle: j,
                    tooltipAvatarContainer: P,
                    tooltipContainer: U,
                    tooltipUserInfoContainer: O
                } = i(m), L = (0, r.useMemo)(() => D ? ? (g ? n(993189).Bj6.fromValue(n(832375).oo9, g) : void 0), [D, g]), N = (0, r.useMemo)(() => L instanceof n(807825).L ? L : x && L ? n(807825).L.createChildStore(x, {
                    id: L.id,
                    table: n(832375).oo9
                }) : void 0, [L, x]), R = (0, n(682985).K8)(() => null == L ? void 0 : L.getFullName(S), [L, S]), V = (0, n(682985).K8)(() => null == L ? void 0 : L.getDisplayName(S), [L, S]), z = (0, n(682985).K8)(() => null == L ? void 0 : L.getEmail(), [L]), W = (0, n(682985).K8)(() => null == L ? void 0 : L.getProfilePhoto(), [L]), H = (0, n(682985).K8)(() => null == L ? void 0 : L.getIsSuspended(), [L]), $ = (0, n(682985).K8)(() => null == L ? void 0 : L.getIsDeleted(), [L]), q = (0, n(525272).E)({
                    spaceStore: x,
                    viewedUserId: null == L ? void 0 : L.id
                }) && v, G = () => e.defaultAvatar ? ? (0, a.jsx)(n(16275).I, {
                    icon: n(476719).personFillSmallIcon,
                    size: "sm",
                    colorVariant: "primary"
                }), K = (e, t, r) => {
                    if (!e) return G();
                    let i = {
                        width: "100%",
                        height: "100%",
                        borderRadius: "100%",
                        ...r
                    };
                    return (0, a.jsx)(n(989059).A, {
                        alt: t,
                        src: e,
                        enableLoadingShimmer: !0,
                        style: i,
                        placeholderStyle: i
                    })
                }, Y = e => (0, a.jsxs)("div", {
                    style: U,
                    children: [(0, a.jsx)("div", {
                        style: P,
                        children: X()
                    }), (0, a.jsxs)("div", {
                        style: O,
                        children: [L ? V : null == h ? void 0 : h.name, e ? void 0 : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("br", {}), L ? (0, a.jsx)("span", {
                                style: j,
                                children: z
                            }) : null != h && h.email ? (0, a.jsx)("span", {
                                style: j,
                                children: null == h ? void 0 : h.email
                            }) : null]
                        })]
                    })]
                }), Z = e => {
                    let t = n(871871).PE(e)[0].toUpperCase();
                    return (0, a.jsx)("div", {
                        style: A,
                        children: (0, a.jsx)("div", {
                            style: I,
                            children: (0, a.jsx)("div", {
                                children: t
                            })
                        })
                    })
                }, X = () => {
                    if (H && L) return (0, a.jsx)("div", {
                        style: A,
                        children: (0, a.jsx)("div", {
                            style: B,
                            children: (0, a.jsx)(n(16275).I, {
                                icon: n(67207).personSlashIcon,
                                size: F - 2,
                                colorVariant: "tertiary"
                            })
                        })
                    });
                    if ($) return (0, a.jsx)("div", {
                        style: A,
                        children: (0, a.jsx)("div", {
                            style: T,
                            children: (0, a.jsx)(n(16275).I, {
                                icon: n(262401).personSlashSmallIcon,
                                size: "sm",
                                colorVariant: "tertiary"
                            })
                        })
                    });
                    if (L) {
                        if (W) return (0, a.jsx)("div", {
                            style: E,
                            children: (0, a.jsx)(n(738251).A, {
                                stripGoogleIconQuery: !0,
                                url: W,
                                isAuthenticated: !1,
                                width: Math.max(Number(M.width), 120),
                                render: (e, t) => K(t, R, A)
                            })
                        });
                        else if (R) return Z(R);
                        else if (z) return Z(z)
                    } else if (h) {
                        if (!h.type && h.avatarUrl) return (0, a.jsx)("div", {
                            style: A,
                            children: (0, a.jsx)("div", {
                                style: E,
                                children: K(h.avatarUrl, h.name)
                            })
                        });
                        else if (h.name) return Z(h.name);
                        else if (h.email) return Z(h.email)
                    }
                    return G()
                };
                switch (_) {
                    case "avatar":
                        {
                            let e = (0, a.jsx)("div", {
                                style: l,
                                children: X()
                            });
                            if (q && N && x) return (0, a.jsx)(n(532755).D, {
                                userStore: N,
                                spaceStore: x,
                                from: b,
                                children: e
                            });
                            if (t) return (0, a.jsx)(n(51831).m, {
                                content: () => o ? Y() : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        children: s
                                    }), V, (0, a.jsx)("br", {}), L ? (0, a.jsx)("span", {
                                        style: j,
                                        children: z
                                    }) : void 0]
                                }),
                                placement: "bottom",
                                alignment: "start",
                                delayThreshold: y,
                                children: t => (0, a.jsx)("div", {
                                    style: l,
                                    "aria-label": V,
                                    ...t,
                                    children: e
                                })
                            });
                            return e
                        }
                    case "avatar-name":
                    case "avatar-name-email":
                        return Y("avatar-name" === _);
                    default:
                        (0, n(722371).HB)(_)
                }
            }
        },
        322095: (e, t, n) => {
            "use strict";

            function r(e, t) {
                return e.map(e => a(e, t))
            }

            function a(e, t) {
                var r, a;
                let i, {
                        nameMessage: o,
                        descriptionMessage: s,
                        ...l
                    } = e,
                    {
                        rootId: u,
                        previewRootId: d,
                        spaceId: c
                    } = (r = e, a = t, i = (0, n(599412).H)(a), r.sources[i] || r.sources[n(599412).q]);
                return { ...l,
                    id: o.id,
                    rootId: u,
                    spaceId: c,
                    previewRootId: d,
                    name: t.formatMessage(o),
                    description: s ? t.formatMessage(s) : void 0
                }
            }
            n.d(t, {
                B: () => a,
                o: () => r
            }), n(581454)
        },
        325336: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                arrowUTurnUpLeftIcon: () => a,
                iconDefinition: () => r
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.72 15.76 12.16",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.592 4.792a.625.625 0 1 0-.884-.884l-4.4 4.4a.625.625 0 0 0 0 .884l4.4 4.4a.625.625 0 1 0 .884-.884L4.259 9.375H14a2.625 2.625 0 0 1 0 5.25h-1.42a.625.625 0 1 0 0 1.25H14a3.875 3.875 0 0 0 0-7.75H4.259z"
                    })
                },
                a = (0, n(104509).wt)("arrowUTurnUpLeft", r, "default")
        },
        327785: (e, t, n) => {
            "use strict";

            function r() {
                let e = (0, n(972740).L)(),
                    t = (0, n(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    r = (0, n(192159).TB)(t),
                    a = (0, n(682985).K8)(() => r && (0, n(717274).tL)({
                        disableExposureLogging: !0
                    }), [r]),
                    {
                        progress: i
                    } = (0, n(555583).n)({
                        useRedesigned: a
                    }),
                    o = (0, n(262166).HO)((0, n(192159).AI)(t));
                return (0, n(682985).K8)(() => {
                    if (!(0, n(717274).sw)()) return [];
                    let e = [];
                    return o && !r ? e.push("dog") : o && a && i >= 1 && e.push("dog"), e
                }, [o, r, a, i])
            }
            n.d(t, {
                D: () => r
            }), n(944114)
        },
        330602: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = n(546605).Store.createValue(!1)
        },
        330942: (e, t, n) => {
            "use strict";
            n.d(t, {
                Mt: () => d,
                RM: () => l,
                dC: () => i,
                f_: () => r().f_,
                ie: () => s,
                q1: () => a,
                sQ: () => c,
                uF: () => u
            }), n(813451), n(944114), n(898992), n(354520), n(737550);
            var r = () => n(706968);

            function a(e) {
                return e.some(e => "config" === e.type && "workflow" === e.value.type)
            }

            function i(e) {
                return e.some(e => "config" === e.type && "researcher" === e.value.type)
            }
            let o = /<lang\s+.*?>\s*/g;

            function s(e) {
                if ("string" == typeof e.value) return { ...e,
                    value: e.value.replace(o, "")
                };
                if (Array.isArray(e.value)) {
                    let t = e.value.findIndex(e => "text" === e.type);
                    if (-1 === t) return e;
                    let n = "";
                    for (let r of e.value.slice(t))
                        if ("text" === r.type) n += r.content;
                        else break;
                    if (!o.exec(n)) return e;
                    let r = "",
                        a = t;
                    for (; a < e.value.length; a++) {
                        let t = e.value[a];
                        if ("text" === t.type) r += t.content;
                        else break
                    }
                    let i = [...e.value.slice(0, t), {
                        type: "text",
                        content: r.replace(o, "")
                    }, ...e.value.slice(a)];
                    return "text" === i[0].type && 0 === i[0].content.length && i.shift(), { ...e,
                        value: i
                    }
                }
                return e
            }

            function l(e, t) {
                let r = {};
                for (let t of e) "registered-tool-grouping" === t.type && (r[t.toolCallId] = t);
                let a = [...e];
                if ("agent-transcript-summary" === t.type) {
                    let e = a.findLastIndex(e => "agent-transcript-summary" === e.type && e.lastStepId === t.lastStepId);
                    if (-1 !== e) {
                        let n = a[e];
                        if ("agent-transcript-summary" === n.type) {
                            let r = n.summary.trim().length > 0,
                                i = t.summary.trim().length > 0;
                            return r && !i || (a[e] = t), a
                        }
                    }
                    return a.push({ ...t
                    }), a
                }
                if ("user" === t.type || "user-injected" === t.type || "error" === t.type || "premium-feature-unavailable" === t.type || "context" === t.type || "title" === t.type || "retry" === t.type || "search-observation" === t.type || "researcher-text-observation" === t.type || "debug-inference" === t.type || "wait" === t.type || "agent-search-query-generation" === t.type || "fast-researcher-plan" === t.type || "fast-researcher-search-results" === t.type || "memory-agent" === t.type || "summarize-transcript" === t.type || "summarize-transcript-record-map" === t.type || "summarize-transcript-error" === t.type || "record-pointers-updated" === t.type || (0, n(548161).P0)(t) || "researcher-agent-group" === t.type || "agent-debug-error" === t.type || "eval-result" === t.type || "attachment" === t.type || "activate-transcript-compaction" === t.type || "pi-compaction" === t.type || "agent-records-updated" === t.type || "agent-turn-start" === t.type || "agent-record-map" === t.type || "user-specified-context" === t.type || "mention" === t.type || "agent-integration" === t.type || "aiBlockResponse" === t.type || "system-notification" === t.type || "agent-trigger" === t.type || "agent-prebuilt-prompt" === t.type || "agent-instruction-state" === t.type || "agent-route-trigger" === t.type || "workflow-effect-calling" === t.type || "workflow-effect-called" === t.type || "workflow-effect-error" === t.type) a.push({ ...t
                });
                else if ("agent-turn-full-record-map" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "agent-turn-full-record-map" === a[e].type) {
                        let n = a[e];
                        a[e] = { ...n,
                            agentRecordMap: t.agentRecordMap,
                            threadRecordMap: t.threadRecordMap,
                            recordVersions: t.recordVersions
                        }
                    } else a.push({ ...t
                    })
                } else if ("search" === t.type) a = [...a.filter(e => e.id !== t.id), { ...t
                }];
                else if ("agent-inference" === t.type || "agent-tool-result" === t.type || "config" === t.type || "updated-config" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id); - 1 !== e ? a[e] = t : a.push({ ...t
                    })
                } else if ("markdown-chat" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "markdown-chat" === a[e].type) {
                        let n = a[e];
                        a[e] = { ...n,
                            value: `${n.value}${t.value}`
                        }
                    } else a.push({ ...t
                    })
                } else if ("search-chat" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "search-chat" === a[e].type) {
                        let n = a[e];
                        a[e] = { ...n,
                            value: `${n.value}${t.value}`
                        }
                    } else a.push({ ...t
                    })
                } else if ("fast-researcher-chat" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "fast-researcher-chat" === a[e].type) {
                        let n = a[e];
                        a[e] = { ...n,
                            value: `${n.value}${t.value}`
                        }
                    } else a.push({ ...t
                    })
                } else if ("setup" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id); - 1 !== e && "setup" === a[e].type ? a[e] = t : a.push({ ...t
                    })
                } else if ("researcher-report" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "researcher-report" === a[e].type) {
                        let r = a[e];
                        a[e] = { ...r,
                            value: `${r.value}${t.value}`,
                            citationInfo: (0, n(177861).Mi)(r.citationInfo, t.citationInfo)
                        }
                    } else a.push({ ...t
                    })
                } else if ("researcher-agent" === t.type) {
                    let e = a.findIndex(e => e.id === t.id); - 1 !== e && "researcher-agent" === a[e].type ? a[e] = { ...a[e],
                        value: Object.assign(a[e].value, t.value),
                        updatedAt: t.updatedAt
                    } : a.push({ ...t
                    })
                } else if ("researcher-next-steps" === t.type) {
                    let e = a.findIndex(e => e.id === t.id); - 1 !== e ? a[e] = { ...t
                    } : a.push({ ...t
                    })
                } else if ("registered-tool-call" === t.type || "registered-tool-output" === t.type || "registered-tool-error" === t.type) {
                    let e = r[t.toolCallId];
                    e || (e = {
                        id: t.toolCallId,
                        type: "registered-tool-grouping",
                        toolName: t.toolName,
                        toolCallId: t.toolCallId,
                        steps: []
                    }, r[t.toolCallId] = e, a.push(e));
                    let n = { ...t
                    };
                    e.steps.push(n)
                } else if ("registered-tool-grouping" === t.type) r[t.toolCallId] || (r[t.toolCallId] = t, a.push({ ...t
                }));
                else if ("setup-operations" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id),
                        n = a[e];
                    (null == n ? void 0 : n.type) === t.type ? a[e] = { ...n,
                        operations: [...n.operations, ...t.operations]
                    } : a.push({ ...t
                    })
                } else if ("generate-formula" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id); - 1 !== e && "generate-formula" === a[e].type ? a[e] = { ...a[e],
                        value: t.value
                    } : a.push({ ...t
                    })
                } else "database-agent-setup" === t.type || "agent-message" === t.type || "proactive-message" === t.type || "survey" === t.type || "computer-file" === t.type || "plan-mode" === t.type ? a.push({ ...t
                }) : (0, n(722371).HB)(t);
                return a
            }
            let u = "inferenceTranscript";

            function d(e) {
                return "object" == typeof e && null !== e && "transcript" in e
            }

            function c(e) {
                if (e && ("search" === e.type || "workflow" === e.type)) return e.searchSessionId
            }
        },
        336613: (e, t, n) => {
            "use strict";
            let r, a;

            function i(e) {
                r = e
            }

            function o(e) {
                a = e
            }

            function s() {
                if (!r) throw Error("configureSubscriptionActions() must be called before using subscription actions");
                return r
            }
            async function l() {
                if (!a) throw Error("configureSubscriptionActionsLazyDeps() must be called before loading lazy deps");
                return a()
            }
            n.d(t, {
                N7: () => l,
                NK: () => i,
                NS: () => o,
                XC: () => s
            }), n(16280)
        },
        337592: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ki: () => a,
                d1: () => i,
                j8: () => l,
                s1: () => s,
                yX: () => o
            }), n(898992), n(737550), n(296540);
            var r = n(474848);

            function a(e) {
                if (!e) return;
                let t = (0, n(875472).b_)(e);
                return (0, r.jsx)(n(109939).sA, {
                    id: "coupon.duration.months",
                    defaultMessage: "{formattedMonths} months",
                    values: {
                        formattedMonths: (0, r.jsx)(n(109939).Gr, {
                            value: t.months
                        })
                    }
                })
            }

            function i(e, t, r, a) {
                return a && (0, n(90119).FV)(a, t) ? a : r && e === t && (0, n(90119).FV)(r.campaign, e) ? r.campaign : void 0
            }

            function o(e, t, r) {
                let a, i;
                if (e && (0, n(875472).rM)(e) && (a = (0, n(90119).MN)(e.offer.campaign, t), i = !!r && (0, n(90119).sZ)(e.offer.campaign, r), a && i)) return (0, n(875472).kd)(e)
            }

            function s(e) {
                return (0, n(875472).b_)(e).days
            }
            async function l({
                billingData: e,
                environment: t,
                sidebarSpaceStore: r,
                offerCampaign: a
            }) {
                return !r.id || !e || !r.getSetting("reach_block_limit_time") || (0, n(192159).Gm)(e) ? Promise.resolve(!1) : Promise.resolve(!!await n(617995).I.awaitData(t, {
                    offerCampaign: a,
                    spaceId: r.id
                }))
            }
        },
        340916: (e, t, n) => {
            "use strict";
            e.exports = n.p + "8cc12fd49d607b13.png"
        },
        346596: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => a,
                k: () => i
            });
            var r = n(296540);

            function a(e) {
                let {
                    workflowIdFromRoute: t,
                    spaceStore: a
                } = (0, n(682985).K8)(() => ({
                    workflowIdFromRoute: "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    spaceStore: n(728372).AppStoreSidebarSpaceStore.state
                }), [e]);
                return (0, r.useMemo)(() => {
                    if (t && a) return n(360851).N.createChildStore(a, {
                        table: n(43296).C,
                        id: t,
                        spaceId: a.id
                    })
                }, [t, a])
            }

            function i(e) {
                let t = "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    r = n(728372).AppStoreSidebarSpaceStore.state;
                if (t && r) return n(360851).N.createChildStore(r, {
                    table: n(43296).C,
                    id: t,
                    spaceId: r.id
                })
            }
        },
        346899: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => a
            });
            let r = new(n(815048)).O2("DictationAvatar", async () => await Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(5410), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(12354), n.e(5721), n.e(57688), n.e(17250), n.e(64696), n.e(39726), n.e(87971), n.e(29663), n.e(74145), n.e(55067), n.e(79349), n.e(90735), n.e(50354), n.e(71136), n.e(86102), n.e(30671), n.e(3101)]).then(n.bind(n, 405957))),
                a = (0, n(815048)._h)(r, e => e.DictationAvatar)
        },
        348295: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => r
            });
            let r = n(381453).Bj(e => new(n(345426)).ComputedStore(() => {
                let t = n(728372).AppStoreMainEditorCurrentBlockStore.state,
                    r = t && t.isCollectionView(),
                    a = (0, n(548124).getChatPanelState)(e),
                    i = (null == a ? void 0 : a.isOpen) ? ? !1;
                return n(200083).A.state.isKeyboardMode && !n(330602).A.state && !n(11446).A.isActive() && !r && !n(930179).default.state.open && !n(847591).Ay.state.open && !(0, n(659262).y)() && 0 === n(465361).A.state.banners.length && !n(585823).gZ.state && !n(75170).A.state.open && !i
            }, {
                debugName: "appHelpers.shouldHideTopbarStore"
            }))
        },
        357709: (e, t, n) => {
            "use strict";

            function r(e, t) {
                let r = (0, n(462391).h2)(t.callout_key);
                r && (t.placement_key = (0, n(462391).t9)(r)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_show",
                        eventProperties: { ...t,
                            callout_src: r ? "static" : "cio"
                        }
                    }
                })
            }

            function a(e, t) {
                let r = (0, n(462391).h2)(t.callout_key);
                r && (t.placement_key = (0, n(462391).t9)(r)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_click",
                        eventProperties: { ...t,
                            callout_src: r ? "static" : "cio"
                        }
                    }
                }), t.callout_key && n(409725).l.trackEvent("callout_click", {
                    callout_key: t.callout_key,
                    click_type: t.click_type,
                    placement_key: t.placement_key
                })
            }

            function i(e, t) {
                let r = (0, n(462391).h2)(t.callout_key);
                r && (t.placement_key = (0, n(462391).t9)(r)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_dismiss",
                        eventProperties: { ...t,
                            callout_src: r ? "static" : "cio"
                        }
                    }
                })
            }

            function o(e, t) {
                let r = (0, n(462391).h2)(t.callout_key);
                r && (t.placement_key = (0, n(462391).t9)(r)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_engagement",
                        eventProperties: { ...t,
                            callout_src: r ? "static" : "cio"
                        }
                    }
                })
            }

            function s(e, t) {
                let {
                    eligible_callouts: r,
                    required_arg_timeout: a,
                    required_args_run_duration: i,
                    eligibility_timeouts: o,
                    blocklist: s
                } = t;
                (0, n(104310).u)({
                    event: {
                        eventName: "callout_coordinator_resolved",
                        eventProperties: {
                            eligible_callouts: r,
                            required_arg_timeout: a,
                            required_args_run_duration: i,
                            eligibility_timeouts: o,
                            blocklist: s
                        }
                    }
                })
            }

            function l(e, t) {
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

            function d(e, t) {
                let r = (0, n(462391).h2)(t.callout_key);
                r && (t.placement_key = (0, n(462391).t9)(r)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_not_shown",
                        eventProperties: { ...t,
                            callout_src: r ? "static" : "cio"
                        }
                    }
                })
            }
            n.d(t, {
                Ak: () => d,
                Cu: () => u,
                DL: () => r,
                Jb: () => o,
                Sq: () => i,
                Y5: () => a,
                gc: () => l,
                wo: () => s
            })
        },
        358667: (e, t, n) => {
            "use strict";

            function r(e) {
                var t;
                let r, {
                        environment: a,
                        store: i,
                        chatPanelState: o,
                        source: s = "button"
                    } = e,
                    l = n(680007).default.mark("agent_time_to_render"),
                    u = (0, n(420459).G4)();
                n(562733).zI.setState({ ...n(562733).zI.state,
                    agentTimeToRenderMetric: l,
                    openSource: s,
                    completionContext: u
                });
                let d = o ? ? {},
                    c = d.isNewThread,
                    p = "threadId" in d && !!d.threadId;
                !c && !p && n(973240).L.threadId && n(973240).L.updatedAt && n(973240).L.updatedAt + 6e5 > Date.now() && (d = { ...d,
                    threadId: n(973240).L.threadId
                }), (0, n(487246).a)();
                let f = (0, n(548124).getMergedChatSidebarRouteData)({
                        environment: a,
                        update: d
                    }),
                    m = (0, n(548124).routeArgsGivenChatSidebarRouteData)(f),
                    g = a.RouterStore.state.route;
                if (i)
                    if ((null == i ? void 0 : i.table) === n(832375).evP) r = (0, n(483227).Ef)({
                        environment: a,
                        updates: { ...m,
                            scrollToBlockId: void 0,
                            store: i
                        }
                    });
                    else if ((null == i ? void 0 : i.table) === n(832375).C0E) {
                    let e = {};
                    "agent" === g.name && (e = {
                        workflowViewType: g.workflowViewType,
                        workflowViewId: g.workflowViewId,
                        workflowPrompt: g.workflowPrompt,
                        agentChatThreadId: g.agentChatThreadId
                    }), r = (0, n(453573).Lm)({
                        workflowId: i.id,
                        params: {
                            workflowViewType: "agent",
                            ...m,
                            ...e
                        }
                    })
                } else(0, n(722371).HB)(i);
                else if (!i && (0, n(548124).shouldAllowOpeningAgentOnSpecifiedRoute)(g)) {
                    let e = new URL(window.location.href);
                    m.chatThreadId && e.searchParams.set(n(737869).P5, m.chatThreadId), r = e.toString()
                }
                if (!r) throw Error(`Cannot open chat panel on route ${g.name} without a store`);
                let D = n(728372).AppStoreMainEditorCurrentBlockStore.state !== i;
                (0, n(79266).navigate)({
                    environment: a,
                    url: r,
                    redirect: !D
                });
                let h = (0, n(828560).hw)(),
                    _ = n(562733).zI.state.chatPanelMode;
                h || (h && "sidebar" === _ ? (0, n(16822).h)({
                    environment: a,
                    isExpanded: !0,
                    from: "slippery_slope_experiment",
                    saveDetailsSidebarPreference: !1
                }) : function(e) {
                    let {
                        environment: t
                    } = e;
                    !(0, n(712358).K)(t) || (0, n(548124).getIsChatPanelOpen)(t) || (n(984858).sidebarExpandedStore.setState(!1), n(475097).default.setSidebarExpandedStoreState(!1), n(562733).zI.setState({ ...n(562733).zI.state,
                        reopenMainSidebarOnClose: !0
                    }))
                }({
                    environment: a
                }));
                let y = null == (t = (0, n(328765).S)()) ? void 0 : t.id;
                y && (a.api.callApi({
                    eventName: "warmSearchCache",
                    environment: a,
                    data: {
                        spaceId: y
                    }
                }), a.api.callCellCompatibleApi({
                    eventName: "warmVectorDBCache",
                    environment: a,
                    data: {
                        spaceId: y
                    },
                    cellNavigation: {
                        spaceId: y
                    }
                })), (async () => {
                    try {
                        (await Promise.all([n.e(36556), n.e(55373), n.e(36192), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(53050), n.e(87353), n.e(5721), n.e(64696), n.e(94495)]).then(n.bind(n, 305721))).trackAgentOpened({
                            environment: a,
                            from: s,
                            leftNotionSidebarOpenState: n(984858).sidebarExpandedStore.state
                        })
                    } catch (e) {}
                })()
            }
            n.r(t), n.d(t, {
                openChatPanel: () => r
            }), n(16280), n(814603), n(147566), n(198721)
        },
        368678: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => o
            });
            var r = n(296540),
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

            function o(e) {
                let {
                    onDismiss: t,
                    inputRef: o
                } = e, s = (0, n(533992).Y0)(), l = (0, r.useRef)(null), u = s.isMobileNative && s.isIOS, d = u && e.show;
                (0, n(336494).b)(n(651748).A, () => ({
                    getNode: () => l.current,
                    isShown: () => d
                }), [d]);
                let c = (0, n(571354).n)(),
                    p = (0, r.useCallback)(() => {
                        var e;
                        null == o || null == (e = o.current) || e.focus(), t && t();
                        let n = document.activeElement;
                        n instanceof HTMLElement && n.blur()
                    }, [o, t]);
                if (!u) return null;
                let f = d ? -(n(247800).j + c) : 0;
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
                        ref: l,
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
            "use strict";
            e.exports = n.p + "6fd3d43e1320e88a.png"
        },
        374241: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                arrowStraightLeftSmallIcon: () => a,
                iconDefinition: () => r
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M2.16 8.206q.046.13.148.236l4.32 4.32a.625.625 0 0 0 .884-.884L4.259 8.625h8.991a.625.625 0 1 0 0-1.25H4.259l3.253-3.253a.625.625 0 1 0-.884-.884l-4.32 4.32a.62.62 0 0 0-.148.648"
                    })
                },
                a = (0, n(104509).wt)("arrowStraightLeftSmall", r, "small")
        },
        375592: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => r
            });
            let r = new(n(273917)).U(e => `${e.currentUser.id}`, async e => {
                let t = await e.api.callApi({
                    eventName: "getExternalOrgData",
                    environment: e,
                    data: {}
                });
                return "success" === t.type ? t.data : void 0
            });
            n(202146).exposeDebugValue("ExternalOrgDataStore", r)
        },
        378347: (e, t, n) => {
            "use strict";
            n(746518)({
                target: "Object",
                stat: !0
            }, {
                hasOwn: n(39297)
            })
        },
        383378: (e, t, n) => {
            "use strict";
            n.d(t, {
                $G: () => a,
                Hj: () => i,
                Nh: () => d,
                V9: () => s,
                WL: () => r,
                cv: () => u,
                nS: () => o,
                tz: () => l
            }), n(581454);
            let r = 30,
                a = 5;

            function i(e, t) {
                var n;
                return (null == (n = e.subscription) ? void 0 : n.trialEnd) !== void 0 && "reset_and_invoice" === t.subscription.type
            }

            function o(e, t, r) {
                return e ? (0, n(850640).W_)(e.toMillis(), r ? ? "long", t) : void 0
            }

            function s(e, t) {
                let r = n(906745).DateTime.fromMillis(e.endDateMs);
                return (t ? ? n(906745).DateTime.now()) > r
            }

            function l(e, t, r) {
                let a = n(906745).DateTime.fromMillis(e.endDateMs),
                    i = r ? ? n(906745).DateTime.now();
                return i < a && a.diff(i).as("days") <= t
            }

            function u(e) {
                let {
                    prices: t,
                    products: a,
                    interval: i,
                    memberCount: o,
                    currency: s = "USD",
                    trialLengthDays: l = r,
                    trialStartDate: u = n(906745).DateTime.now()
                } = e;
                return {
                    items: a.map(e => ({
                        price: (0, n(982473).vk)(t, {
                            product: e,
                            interval: i,
                            currency: s
                        }),
                        quantity: o
                    })),
                    trialEnd: u.plus({
                        days: l
                    })
                }
            }

            function d(e) {
                return (0, n(722371).Xk)(e, "plus") && (0, n(722371).Xk)(e, "ai")
            }
        },
        386194: (e, t, n) => {
            "use strict";
            e.exports = n.p + "6847e3eeb9ba8341.png"
        },
        388400: (e, t, n) => {
            "use strict";
            n.d(t, {
                Bu: () => d,
                I8: () => u,
                qw: () => l
            }), n(898992), n(354520), n(803949);
            let r = /[\u4E00-\u9FA5]/g,
                a = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/g,
                i = /[\u3041-\u3096\u30A0-\u30FF\u31F0-\u31FF\u3220-\u3243\u3280-\u337F]/g,
                o = /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g,
                s = /[-./\\()"'''""，。、·～；,;<>~!@#$%^&*|+=[\]{}`~?:\s]/u;

            function l(e) {
                return (0, n(381453).oE)(e.split(s))
            }

            function u(e) {
                return "none" === d(e) ? l(e).length : e.length
            }

            function d(e, t) {
                let n = !!e.match(o);
                return e.match(r) || e.match(a) || n ? n ? "ko" : e.match(i) || "ja-JP" === t ? "ja" : "zh" : "none"
            }
        },
        388647: (e, t, n) => {
            "use strict";

            function r(e) {
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
                return (0, n(682985).K8)(() => r({
                    environment: t,
                    disableExposureLogging: e.disableExposureLogging
                }), [t, e.disableExposureLogging])
            }
            n.d(t, {
                k: () => a,
                p: () => r
            })
        },
        390123: (e, t, n) => {
            "use strict";
            e.exports = n.p + "e67d8b05e7c8adcb.png"
        },
        397900: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                ellipsisIcon: () => a,
                iconDefinition: () => r
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 8.62 14.76 2.76",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"
                    })
                },
                a = (0, n(104509).wt)("ellipsis", r, "default")
        },
        406531: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.03 2.29 11.93 10.46",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M13.165 12.75a.8.8 0 0 0 .69-1.203L8.692 2.693a.8.8 0 0 0-1.382 0l-5.165 8.854a.8.8 0 0 0 .691 1.203z"
                    })
                },
                a = (0, n(104509).wt)("arrowCaretUpFillSmall", r, "fillSmall")
        },
        407998: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    billingData: a,
                    externalOrgSummary: i
                } = e;
                return (0, n(192159).N8)(a) ? "sales_assisted" : r && (0, n(208117).H)({
                    environment: t,
                    externalOrgSummary: i,
                    spaceStore: r,
                    billingData: a
                }) && !(0, n(556306).h)(r) ? "sales_eligible" : "self_serve"
            }
            n.d(t, {
                V: () => r
            })
        },
        408138: (e, t, n) => {
            "use strict";
            n.d(t, {
                X: () => r
            });
            let r = n(546605).Store.createValue({
                shouldReset: !1
            }, {
                name: "MobileAssistantMenuStore"
            })
        },
        411106: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => o,
                p: () => i
            });
            let r = ["aiMeetingNotes", "meetAgent", "academy", "consultants"],
                a = ["aiMeetingNotes", "meetAgent", "database", "academy"],
                i = ["aiMeetingNotes", "mailAndCalendar", "aiSearch", "meetAgent"];

            function o(e, t) {
                return e ? "en-US" === t ? r : ["aiMeetingNotes", "meetAgent", "academy", "connectedApps"] : a
            }
        },
        418001: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    environment: t,
                    blockStore: r,
                    tabToOpen: a,
                    from: i
                } = e, o = n(475097).default.state.open, {
                    currentTab: s
                } = n(449473).B8.state, l = s !== a || s === a && !(0, n(953099).N)(t), u = a === n(449473).tF.Comments && (s !== a || !(0, n(953099).N)(t));
                (0, n(34953).f)(a), u && n(449473).B8.update(e => ({ ...e,
                    timeOpenedComments: Date.now()
                })), o ? ((0, n(545586).navigateToBlock)({
                    environment: t,
                    store: r,
                    pageVisitSource: n(254656).y8.Expand
                }), (0, n(911046).u)({
                    environment: t,
                    isExpanded: !0,
                    from: i,
                    saveDetailsSidebarPreference: !0
                })) : (0, n(911046).u)({
                    environment: t,
                    isExpanded: l,
                    from: i,
                    saveDetailsSidebarPreference: !0
                })
            }
            n.d(t, {
                j: () => r
            })
        },
        420459: (e, t, n) => {
            "use strict";
            n.d(t, {
                G4: () => o,
                gu: () => a,
                rs: () => i
            }), n(18107), n(967357);
            var r = () => n(970831);

            function a(e) {
                let t = e ? ? ("editing" === n(358377).default.state.mode ? n(358377).default.state.multiSelection : void 0);
                if (!t) return;
                let a = t.start.store,
                    i = a.getRecordStoreUIRoot(),
                    o = n(521595).n.findNodeFromStore(a),
                    s = (0, n(534012).T)(a),
                    l = null == s ? void 0 : s.getRecordStoreUIParent(),
                    u = (0, n(730994).K3)(i),
                    d = s && s instanceof r().B && s !== i ? s : void 0,
                    c = d ? ? o;
                if (i && i instanceof r().B && c) return {
                    type: "cursor",
                    textSelection: t,
                    currentPage: i,
                    currentBlock: d,
                    origin: c,
                    currentParent: l,
                    scrollerStore: u,
                    isPageTitle: i.id === a.id
                }
            }

            function i() {
                let {
                    stores: e
                } = n(584265).default.state, t = n(358377).default.state, a = "empty" !== t.mode ? t.multiSelection : void 0, i = "empty" !== t.mode ? t.multiSelection.start.store : void 0, o = i ? i.getRecordStoreUIRoot() : void 0;
                if (!(o instanceof r().B)) {
                    let e, t = null == i ? void 0 : i.getRecordStoreUIParent();
                    for (; null != t;) t instanceof r().B && (e = t), t = t.getRecordStoreUIParent();
                    e && (o = e)
                }
                if (a && o && o instanceof r().B) {
                    let t = (0, n(534012).T)(a.end.store),
                        r = null == t ? void 0 : t.getRecordStoreUIParent(),
                        i = (0, n(730994).K3)(o);
                    if (t && r) return {
                        type: "textSelection",
                        stores: e,
                        textSelection: a,
                        currentPage: o,
                        origin: t,
                        endBlock: t,
                        endBlockParent: r,
                        scrollerStore: i
                    }
                }
            }

            function o() {
                if (n(584265).default.state.stores.length > 0) {
                    let e = n(358377).default.state;
                    if ("empty" === e.mode) {
                        let e = function() {
                            if (1 !== n(584265).default.state.stores.length) return;
                            let e = n(584265).default.state.stores[0];
                            if (!(e instanceof r().B)) return;
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
                        return e ? a(e) : function() {
                            let {
                                stores: e
                            } = n(584265).default.state, t = e[0], a = e.at(-1), i = t ? t.getRecordStoreUIRoot() : void 0;
                            if (i && i instanceof r().B && a) {
                                let t = (0, n(730994).K3)(i);
                                return {
                                    type: "blockSelection",
                                    stores: e,
                                    currentPage: i,
                                    origin: a,
                                    scrollerStore: t
                                }
                            }
                        }()
                    }
                    return (0, n(971541).k)(e.multiSelection) ? a() : i()
                }
            }
        },
        422550: (e, t, n) => {
            "use strict";
            e.exports = n.p + "31299301d549e6d5.png"
        },
        425749: (e, t, n) => {
            "use strict";
            n.d(t, {
                I$: () => o,
                R2: () => u,
                WF: () => l,
                bZ: () => s,
                cE: () => a,
                jX: () => i,
                rz: () => d
            });
            var r = () => n(381453);

            function a(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let i = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function o(e) {
                return !!(void 0 !== e && (0, n(722371).Xk)(i, e))
            }

            function s() {
                let e = (0, n(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: n(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, n(4962).Ay)(),
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
            let u = [{
                type: "everything"
            }];

            function d(e) {
                for (let t of u)
                    if (r().n4(e, t)) return !0;
                return !1
            }
        },
        431666: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    environment: t,
                    collectionStore: r,
                    collectionViewStore: a,
                    property_type: i,
                    from: o,
                    property: s
                } = e;
                (0, n(33918).G)(t, {
                    property: s,
                    property_type: i,
                    from: o,
                    collection_id: null == r ? void 0 : r.id,
                    collection_view_id: null == a ? void 0 : a.id
                })
            }
            n.d(t, {
                i: () => r
            })
        },
        432155: (e, t, n) => {
            "use strict";
            n.d(t, {
                Af: () => b,
                Bw: () => S,
                Cs: () => m,
                Oq: () => u,
                Re: () => c,
                X4: () => d,
                YJ: () => y,
                Yc: () => s,
                ZB: () => v,
                Zd: () => C,
                d2: () => p,
                dd: () => D,
                gg: () => l,
                in: () => f,
                kQ: () => _
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(581454), n(737550);
            var r = () => n(180139),
                a = () => n(697006),
                i = () => n(832375),
                o = () => n(247438);
            let s = "reset_user_selected_model";

            function l(e) {
                let {
                    userChatPreference: t,
                    isStatsigInitialized: n,
                    shouldResetUserSelectedModel: r
                } = e;
                if (!((t.version ? ? 0) >= 1) && n) return { ...r && void 0 !== t.model ? {
                        model: void 0
                    } : {},
                    version: 1
                }
            }

            function u(e, t) {
                let r = n(57168).UserChatPreferenceLocalStorageStore.getState();
                n(57168).UserChatPreferenceLocalStorageStore.setState({ ...r,
                    [e]: { ...null == r ? void 0 : r[e],
                        ...t
                    }
                })
            }

            function d(e) {
                return e.some(e => "in_progress" === e.status)
            }

            function c(e) {
                return e.some(e => "complete" === e.status && "risky" === e.attachmentRisk)
            }

            function p(e, t) {
                let n = o().w9s(e),
                    r = ((null == t ? void 0 : t.length) ? ? 0) > 0;
                return !n || r
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
                    includeWeb: r
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
                return r && t.useWebSearch && a.push({
                    type: "web"
                }), a
            }

            function g(e) {
                let {
                    botId: t,
                    spaceStore: r
                } = e, a = (0, n(203462).zf)(r.environment).getData(r.environment, {
                    spaceId: r.id
                });
                if (a)
                    for (let e of a.agents) {
                        var i;
                        let n = e.getDraftData();
                        if ((null == n || null == (i = n.runtime_actor_pointer) ? void 0 : i.table) === "bot" && n.runtime_actor_pointer.id === t) return e.id
                    }
            }

            function D(e, t, s) {
                if (!e) return [];
                let l = o().moK(e),
                    u = o().Fbh(e).map(e => ({
                        table: i().oo9,
                        id: e
                    })),
                    d = o().jgW(e);
                return [...l, ...u, ...t && s ? d.map(e => {
                    if ((0, a().ut)(e)) return {
                        table: i().C0E,
                        id: r().Lj,
                        spaceId: t.id
                    };
                    let n = g({
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

            function h(e, t) {
                let r = new Set(e.map(e => n(496282).L3.toIdTableKey(e))),
                    a = new Set(t.map(e => n(496282).L3.toIdTableKey(e))),
                    i = t.filter(e => !r.has(n(496282).L3.toIdTableKey(e)));
                return {
                    added: i,
                    removed: e.filter(e => !a.has(n(496282).L3.toIdTableKey(e))),
                    unchanged: e.filter(e => a.has(n(496282).L3.toIdTableKey(e)))
                }
            }

            function _(e) {
                let t, r, {
                        currentTextMentionPointers: a,
                        inputMentionPointers: i,
                        allMentionPointers: o
                    } = e,
                    {
                        added: s
                    } = h(Array.from(o), a),
                    {
                        removed: l,
                        unchanged: u
                    } = h(i, a),
                    d = s.length > 0,
                    c = l.length > 0;
                if (d || c) {
                    let e = Array.from(o);
                    if (c) {
                        let t = new Set(l.map(e => n(496282).L3.toIdTableKey(e)));
                        e = e.filter(e => !t.has(n(496282).L3.toIdTableKey(e)))
                    }
                    d && (e = [...e, ...s]), t = e, r = [...u, ...s]
                }
                return {
                    newMentionPointers: t,
                    newInputMentionPointers: r
                }
            }

            function y(e, t) {
                return (0, n(381453).n4)(e, t)
            }

            function v(e) {
                return !!e && ("workspace" === e.type || "teamspace" === e.type || "collection" === e.type || "page" === e.type)
            }

            function b(e) {
                let {
                    currentScopes: t,
                    scope: n,
                    isMultiScopeEnabled: r
                } = e, a = [];
                if ("everything" === n.type) a = [{
                    type: "everything"
                }];
                else if (r) {
                    let e = t.filter(e => "everything" !== e.type);
                    a = e.some(e => y(e, n)) ? e.filter(e => !y(e, n)) : "notion" === n.type ? [...e.filter(e => !v(e)), n] : v(n) ? [...e.filter(e => "notion" !== e.type), n] : [...e, n]
                } else a = [n];
                return 0 === a.length ? [{
                    type: "everything"
                }] : a
            }

            function C(e, t) {
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

            function S(e) {
                let {
                    token: t,
                    pointer: n,
                    spaceStore: s,
                    userStore: l
                } = e;
                if (!o().qXl(t)) return !1;
                for (let e of o().uPN(t))
                    if (n.table === i().oo9 && o().rie(e)) {
                        if (o().NcG(e) === n.id) return !0
                    } else if (n.table === i().evP && o().jIt(e)) {
                    let t = o().i$F(e);
                    if (t && t.id === n.id) return !0
                } else if (n.table === i().C0E && o().XkZ(e)) {
                    let t = o().vjW(e);
                    if (t && (0, a().ut)(t) && n.id === r().Lj || t && s && l && g({
                            spaceStore: s,
                            botId: t
                        }) === n.id) return !0
                }
                return !1
            }
        },
        432376: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = () => n(546605);
            class a extends r().Store {
                getInitialState() {
                    return {
                        open: !1,
                        openAnimationCompleted: !0,
                        closeAnimationCompleted: !0
                    }
                }
            }
            let i = a
        },
        432705: (e, t, n) => {
            "use strict";

            function r(e) {
                return "event" === e || "recurrence" === e
            }

            function a(e) {
                let t = e.getTrigger();
                return (0, n(722371).O9)(t) && r(t.type)
            }

            function i(e) {
                return "event" === e ? "event" : "recurrence" === e ? "recurrence" : void(0, n(722371).HB)(e)
            }
            n.d(t, {
                $X: () => a,
                H8: () => i,
                x2: () => r
            })
        },
        435276: (e, t, n) => {
            "use strict";

            function r(e) {
                let t = (0, n(533992).v3)(),
                    r = (0, n(972740).L)(),
                    {
                        spaceId: a,
                        spaceName: i
                    } = (0, n(682985).K8)(() => r ? {
                        spaceId: r.getSpaceId(),
                        spaceName: (0, n(742197).G)(t, r)
                    } : {
                        spaceId: void 0,
                        spaceName: void 0
                    }, [t, r]),
                    [{
                        value: o,
                        status: s
                    }] = (0, n(97668).Yb)(async () => {
                        if (!a) return;
                        let r = await (0, n(124094).E)(t, a, e);
                        if (r) return i && (0, n(124094).Z)({
                            environment: t,
                            spaceName: i,
                            campaign: r,
                            entrypoint: e
                        }), r
                    }, [t, a, i, e]);
                return {
                    campaign: o,
                    loading: "pending" === s || "idle" === s
                }
            }
            n.d(t, {
                V: () => r
            })
        },
        441892: (e, t, n) => {
            "use strict";
            e.exports = n.p + "46e349aec1d78e16.png"
        },
        445283: (e, t, n) => {
            "use strict";

            function r(e) {
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
            n.d(t, {
                N: () => r
            })
        },
        445872: (e, t, n) => {
            "use strict";
            e.exports = n.p + "58cc418a06d8c43b.png"
        },
        448734: (e, t, n) => {
            "use strict";
            n.d(t, {
                jh: () => D,
                wV: () => g,
                Ax: () => h
            });
            var r = n(296540);
            let a = n.p + "f3a1c2555bc7b26c.gif",
                i = n.p + "8ab52115da3e3fbd.gif",
                o = n.p + "160f5613d44c23ea.gif",
                s = n.p + "b68268645067ada1.gif",
                l = n.p + "fce2247087f1d227.gif",
                u = n.p + "896e2255367f2b04.gif";
            var d = n(474848);
            let c = {
                    dark: [n(146535), o, l],
                    light: [n(737497), s, u]
                },
                p = {
                    dark: [o, l],
                    light: [s, u]
                },
                f = new(n(839621)).O(1);

            function m({
                isDarkMode: e,
                onAssetChange: t,
                animationMode: r
            }) {
                let a = "minimal" === r ? p[e ? "dark" : "light"] : c[e ? "dark" : "light"],
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

            function g(e) {
                let {
                    sizeVariant: t,
                    onMouseEnter: o,
                    animationMode: s = "normal"
                } = e, l = (0, n(960253).I)(() => {
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
                }, [t]), [u, c] = (0, n(848135).B)(), p = function(e, t) {
                    let [o, s] = (0, r.useState)({
                        type: "static",
                        asset: n(200424)
                    }), l = "dark" === (0, n(960253).e)();
                    (0, r.useEffect)(() => {
                        let e = setInterval(() => {
                            m({
                                isDarkMode: l,
                                onAssetChange: s,
                                animationMode: t
                            })
                        }, 3e4);
                        return () => {
                            clearInterval(e), f.cancel()
                        }
                    }, [l, t]);
                    let u = (0, r.useMemo)(() => l ? a : i, [l]);
                    return (0, r.useMemo)(() => "animated" === o.type ? o.asset : e && "minimal" !== t && .1 >= Math.random() ? u : (e && m({
                        isDarkMode: l,
                        onAssetChange: s,
                        animationMode: t
                    }), o.asset), [u, o, l, e, t])
                }(c, s);
                return (0, d.jsx)("div", {
                    ref: u,
                    style: l.faceImgWrap,
                    onMouseEnter: o,
                    children: (0, d.jsx)("img", {
                        style: l.faceImg,
                        src: p,
                        alt: "Notion AI face"
                    })
                })
            }

            function D(e) {
                let {
                    sizeVariant: t
                } = e, r = (0, n(960253).I)(() => {
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
                }, [t]), a = c["dark" === (0, n(960253).e)() ? "dark" : "light"][0];
                return (0, d.jsx)("div", {
                    style: r.faceImgWrap,
                    children: (0, d.jsx)("img", {
                        style: r.faceImg,
                        src: a,
                        alt: "Notion AI face"
                    })
                })
            }

            function h(e) {
                let {
                    variant: t,
                    shadowVariant: r = "strong",
                    cursorStyle: a,
                    ...i
                } = e, o = (0, n(960253).e)(), s = (0, n(960253).I)(() => {
                    let e = (0, n(445283).N)(t),
                        i = "dark" === o ? [n(632079).Tj.shadow.base.sm, `0 0 0 1px ${n(632079).Tj.border.secondaryTranslucent}`, "0 0.5px 0 0 rgba(255, 255, 255, 0.20) inset"] : [n(632079).Tj.shadow.base.md, `0 0 0 1px ${n(632079).Tj.border.secondaryTranslucent}`];
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: n(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === r && {
                                boxShadow: e >= 90 ? n(632079).Tj.shadowMDThickerOutline : n(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === r && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? n(632079).Tj.shadowSMThickerOutline : n(632079).Tj.shadow.outline.md
                            },
                            ..."notification" === r && {
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
                }, [t, r, a, o]);
                return (0, d.jsx)("div", {
                    style: s.faceImgWrap,
                    children: (0, d.jsx)(g, {
                        sizeVariant: t,
                        ...i
                    })
                })
            }
        },
        448988: (e, t, n) => {
            "use strict";
            n.d(t, {
                Wx: () => i,
                fM: () => r,
                sM: () => a
            });
            let r = new(n(815048)).O2("framer-motion", async () => await Promise.all([n.e(49806), n.e(79974), n.e(45414), n.e(37043)]).then(n.bind(n, 301716)));

            function a(e) {
                return e.useAnimation()
            }

            function i(e, ...t) {
                return e.useInView(...t)
            }
        },
        458364: (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => o
            }), n(296540);
            var r = n(474848);
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

            function o({
                accessory: e,
                variant: t = "large",
                shadowVariant: s,
                smallerFace: l,
                accessorySpeechBubblePlacement: u = "none",
                speechBubbleTextOverride: d,
                speechBubbleVerticalOffsetPx: c,
                speechBubbleHorizontalOffsetPx: p,
                animateDogAccessory: f = !0,
                speechBubbleTailCircleTop: m,
                speechBubbleTailCircleInsetInlineStartPx: g,
                ...D
            }) {
                let h = "dark" === (0, n(960253).e)(),
                    _ = (0, n(445283).N)(t),
                    y = Math.round(1.5625 * _),
                    v = (0, n(960253).I)(() => ({
                        container: {
                            position: "relative",
                            width: _,
                            height: _,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        faceWrapper: {
                            transform: l ? "scale(0.85)" : void 0
                        },
                        accessoryOverlay: {
                            position: "absolute",
                            width: y,
                            height: y,
                            objectFit: "contain",
                            pointerEvents: "none",
                            top: "50%",
                            transform: "translate(calc(var(--direction, 1) * -50%), -50%) scaleX(var(--direction, 1))",
                            insetInlineStart: "50%"
                        }
                    }), [_, y, l]),
                    b = e ? (h ? i : a)[e] : null;
                return (0, r.jsx)("div", { ...D,
                    children: (0, r.jsxs)("div", {
                        style: v.container,
                        children: [(0, r.jsx)("div", {
                            style: v.faceWrapper,
                            children: (0, r.jsx)(n(448734).Ax, {
                                variant: t,
                                animationMode: e ? "minimal" : "normal",
                                shadowVariant: s
                            })
                        }), "dog" === e ? (0, r.jsx)("div", {
                            style: v.accessoryOverlay,
                            children: (0, r.jsx)(n(503681).z, {
                                size: y,
                                speechBubblePlacement: u,
                                speechBubbleTextOverride: d,
                                speechBubbleVerticalOffsetPx: c,
                                speechBubbleHorizontalOffsetPx: p,
                                speechBubbleTailCircleTop: m,
                                speechBubbleTailCircleInsetInlineStartPx: g,
                                animated: f
                            })
                        }) : b ? (0, r.jsx)("img", {
                            src: b,
                            alt: `${e} accessory`,
                            style: v.accessoryOverlay
                        }) : void 0]
                    })
                })
            }
        },
        463226: (e, t, n) => {
            "use strict";
            n.d(t, {
                DV: () => d,
                EQ: () => s,
                Mu: () => l,
                Nr: () => u,
                cP: () => a,
                m0: () => o,
                m2: () => r,
                s8: () => i
            }), n(898992), n(354520);
            let r = {
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
                    from: r
                } = e;
                if (t.update(e => ({ ...e,
                        isOpen: !0,
                        openCount: e.openCount + 1,
                        from: r || "unknown"
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
                            let r = t.getSettings() || {},
                                a = { ...r,
                                    agent_personalization_settings: { ...r.agent_personalization_settings || {},
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

            function o(e) {
                let {
                    store: t
                } = e;
                return t.state.isOpen
            }

            function s(e) {
                let {
                    store: t
                } = e;
                return t.state.from || "unknown"
            }

            function l(e) {
                var t;
                let {
                    environment: r,
                    agentName: a,
                    customizationItems: i,
                    newPageIdToAdd: o,
                    contextPageId: s
                } = e, l = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!l) return;
                let u = null == (t = l.getSettings()) ? void 0 : t.agent_personalization_settings,
                    d = (null == u ? void 0 : u.recently_used_pages) || [];
                o && ((d = d.filter(e => e.page_id !== o)).unshift({
                    page_id: o,
                    used_at: Date.now()
                }), d = d.slice(0, 10));
                let c = {
                    name: a,
                    customization_items: i,
                    context_page_id: s,
                    recently_used_pages: d.length > 0 ? d : void 0,
                    has_already_seen_personalization_settings_modal: (null == u ? void 0 : u.has_already_seen_personalization_settings_modal) || !0
                };
                (0, n(795676).A)(c, u) || (0, n(377796).createAndCommit)({
                    environment: r,
                    cellTarget: {
                        spaceWithId: l.getSpaceId()
                    },
                    userAction: "AgentPersonalizationSettings.save",
                    canUndo: !0,
                    perform: e => {
                        let t = l.getSettings() || {},
                            a = { ...t,
                                agent_personalization_settings: { ...t.agent_personalization_settings || {},
                                    ...c
                                }
                            };
                        n(380762).AG(l, e, a);
                        let i = null == u ? void 0 : u.context_page_id;
                        if (void 0 !== i && i !== s) {
                            let t = new(n(970831)).B(r, {
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
                        void 0 !== s && (t => {
                            let a = new(n(970831)).B(r, {
                                    table: n(832375).evP,
                                    id: t
                                }),
                                i = a.getSpaceId();
                            if (!i) return;
                            let o = a.getPromptStore();
                            if (o) {
                                if (o.isDefined()) return (0, n(173157).z)({
                                    store: o,
                                    data: {
                                        alive: !0,
                                        prompt_type: "instruction"
                                    },
                                    transaction: e
                                });
                                n(124937).vt({
                                    environment: r,
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
                        })(s)
                    }
                })
            }

            function u() {
                let e = (0, n(327785).D)();
                return (0, n(682985).K8)(() => {
                    let t = n(218744).default.getConfigKey("agent_seasonal_accessories", "batch"),
                        a = n(218744).default.getConfigKey("agent_seasonal_accessories", "batch_expiration_time"),
                        i = a && new Date(a) < new Date;
                    return n(485890).sy.filter(n => {
                        let a = r[n];
                        return "permanent" === a || ("unlockable" === a ? e.includes(n) : a === t && !i)
                    })
                }, [e])
            }

            function d(e) {
                let t = u();
                return (0, n(682985).K8)(() => {
                    var r;
                    let a = null == e ? void 0 : e.getSettings();
                    if (!a) return;
                    let i = a.agent_personalization_settings;
                    if (null != i && null != (r = i.customization_items) && r[0]) {
                        let e = i.customization_items[0];
                        if (t.includes(e)) return e
                    }
                    if (null == i ? void 0 : i.has_already_seen_personalization_settings_modal) return;
                    let o = n(218744).default.checkGate({
                            gateName: "adoption_enable_agent_personalization_phase_one",
                            disableExposureLogging: !0
                        }),
                        s = n(218744).default.checkGate({
                            gateName: "adoption_enable_agent_personalization_phase_two",
                            disableExposureLogging: !0
                        });
                    if (o) {
                        let e = n(218744).default.getEligibleGroup({
                            experimentId: "adoption_agent_random_personalization_bandit",
                            defaultGroup: "control"
                        });
                        if (!e) return;
                        let t = function(e) {
                            let {
                                variant: t
                            } = e, r = c[t];
                            if (!r) return;
                            let a = n(218744).default.getEligibleGroup({
                                experimentId: r
                            });
                            if (a && "control" !== a && a && n(485890).sy.includes(a)) return a
                        }({
                            variant: e
                        });
                        if (t) return t
                    } else if (s) {
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
            let c = {
                control: void 0,
                group_one: "adoption_agent_personalization_phase_one_group_one",
                group_two: "adoption_agent_personalization_phase_one_group_two",
                group_three: "adoption_agent_personalization_phase_one_group_three",
                group_four: "adoption_agent_personalization_phase_one_group_four"
            }
        },
        465707: (e, t, n) => {
            "use strict";
            e.exports = n.p + "c64bedded659e18d.png"
        },
        466290: (e, t, n) => {
            "use strict";
            n.d(t, {
                K: () => a
            });
            var r = () => n(906745);

            function a(e, t) {
                n(696190).default.isVisible(t.key) && (n(696190).default.removeMessage(t.key), n(986939).A.isAdminMode || (! function(e, t) {
                    let a = n(728372).AppStoreCurrentUserSettingsStore.state,
                        i = null == a ? void 0 : a.getSettings();
                    if (!i || !a) return;
                    let o = new(n(543346)).GO(i.callout_placement_exposures);
                    for (let e of t) o.add(e, r().DateTime.now().toMillis());
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
                                    callout_placement_exposures: o.exportUserSetting()
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
        469589: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                STORE_MAX_LIMIT: () => o,
                initializePageVisit: () => s,
                updatePageVisits: () => l
            }), n(898992), n(354520), n(581454);
            var r = () => n(726570),
                a = () => n(226221),
                i = () => n(832375);
            let o = 100;
            async function s(e, t) {
                await n(728372).default.waitUntilRendered();
                let {
                    fromPageRefresh: r,
                    blockStore: o,
                    pageVisitStore: s,
                    timestamp: l,
                    type: c
                } = t, p = e.currentUser.id;
                if (void 0 === p || r) return;
                t.blockStore.id !== s.state.pageId && s.setState({ ...s.getInitialState(),
                    pageId: t.blockStore.id
                });
                let f = (0, n(517013).v3)(o, {
                        table: i().F9f,
                        id: (0, n(665619).$5)({
                            parent_id: o.id,
                            user_id: p
                        }),
                        spaceId: (0, a().e)(o.pointer.spaceId)
                    }),
                    m = (0, n(517013).v3)(o, {
                        table: i().ouC,
                        id: (0, n(665619).$5)({
                            parent_id: o.id,
                            user_id: p
                        }),
                        spaceId: (0, a().e)(o.pointer.spaceId)
                    });
                if (await n(941701).transactionQueue.awaitRecordTransaction({
                        table: i().evP,
                        id: o.id
                    }), await (0, n(966980).hS)(o), !o.canRead() || (0, n(142484).q)(e, o, o.getSpaceStore())) return;
                await f.load(), await m.load();
                let g = f.getKeyStore("visited_at").getValue(),
                    D = m.getKeyStore("exited_at").getValue(),
                    h = await d({
                        environment: e,
                        blockStore: o,
                        spaceId: (0, a().e)(o.pointer.spaceId),
                        timestamp: l,
                        type: c
                    });
                if ("skipped" === h.type || "failed" === h.type) return;
                let _ = u({
                    pageVisits: h.data.pageVisits,
                    currentState: s.state,
                    blockStore: o,
                    totalCount: s.state.totalCount,
                    hasMore: void 0
                });
                s.state.pageId === o.id && s.setState({ ..._,
                    lastViewTime: g,
                    lastExitTime: D
                })
            }
            async function l(e, t) {
                let r, i;
                await n(728372).default.waitUntilRendered();
                let s = e.currentUser.id;
                if (void 0 === s) return;
                let {
                    blockStore: l,
                    pageVisitStore: d,
                    incremental: c
                } = t, p = t.limit || 32;
                if (c) {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: a,
                        totalCount: i,
                        hasMore: o,
                        ...l
                    } = d.state, u = Object.entries(l).map(([e, t]) => {
                        if (s === e) return;
                        let n = t.getVisitedAt();
                        if (void 0 !== n) return n + 1
                    });
                    r = (0, n(763230).T9)(u.filter(n(722371).O9))
                }
                let f = await e.api.callApi({
                    eventName: "getPageVisitors",
                    environment: e,
                    data: {
                        block: {
                            id: l.id,
                            spaceId: (0, a().e)(l.pointer.spaceId)
                        },
                        sinceTimestamp: r,
                        limit: p,
                        includeTotalCount: t.includeTotalCount
                    },
                    headers: {
                        recordId: l.id,
                        spaceId: (0, a().e)(l.pointer.spaceId)
                    }
                });
                if ("failed" === f.type) return;
                let m = u({
                    pageVisits: f.data.pageVisits,
                    blockStore: l,
                    currentState: d.state,
                    totalCount: f.data.totalCount,
                    hasMore: f.data.hasMore
                });
                if (Object.keys(m).length <= o) i = m;
                else {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: r,
                        totalCount: a,
                        hasMore: s,
                        ...l
                    } = m, u = (0, n(722371).WP)(l).map(([e, t]) => [e, t.getVisitedAt() ? ? 0]);
                    for (let [t] of (i = {
                            pageId: e,
                            lastViewTime: void 0,
                            lastExitTime: void 0,
                            totalCount: a,
                            hasMore: s
                        }, n(381453).Ul(u, ([, e]) => -e).slice(0, o))) i[t] = m[t]
                }
                d.state.pageId === m.pageId && d.setState(i)
            }

            function u(e) {
                let {
                    blockStore: t,
                    pageVisits: n,
                    currentState: o,
                    totalCount: s,
                    hasMore: l
                } = e, u = { ...o,
                    pageId: t.id,
                    totalCount: s,
                    hasMore: l
                };
                for (let e of n) {
                    let {
                        id: n,
                        user_id: o
                    } = e;
                    o in u || (u[o] = r()._.createChildStore(t, {
                        table: i().F9f,
                        id: n,
                        spaceId: (0, a().e)(t.pointer.spaceId)
                    }))
                }
                return u
            }
            async function d(e) {
                let {
                    environment: t,
                    blockStore: r,
                    spaceId: a,
                    timestamp: o,
                    type: s
                } = e, {
                    id: l
                } = t.currentUser, u = r.id, d = r.getSystemBlockTypeStore().getValue();
                if ((0, n(512845).kR)(d) || r.getParentTable() === i().C0E) return {
                    type: "skipped"
                };
                if (l && "passive" !== s) {
                    var c;
                    null == t || null == (c = t.mobileNative) || c.recordPageVisit(l, {
                        blockId: u,
                        spaceId: a,
                        visitedAt: o
                    }), n(715265).A.recordVisit({
                        id: u,
                        systemBlockType: d,
                        type: n(981324).ig.Default,
                        currentUserId: l
                    })
                }
                return await t.api.callApi({
                    eventName: "recordPageVisit",
                    environment: t,
                    data: {
                        block: {
                            id: u,
                            spaceId: a
                        },
                        timestamp: o,
                        type: s
                    },
                    headers: {
                        recordId: u,
                        spaceId: a
                    }
                })
            }
        },
        476081: (e, t, n) => {
            "use strict";
            async function r(e) {
                var t;
                let {
                    environment: r,
                    blockStore: a,
                    rect: i,
                    property_id: o,
                    from: s
                } = e;
                if (n(332190).A.hasContent()) return void(0, n(58931)._y)({
                    environment: r,
                    reason: "starting_new"
                });
                let l = n(496704).K.getRect(a);
                if (!l) return;
                let u = new(n(478597)).A(r, (0, n(226221).e)(a.pointer.spaceId)),
                    d = l.width,
                    c = l.height,
                    p = l.right - d;
                n(332190).A.setState({
                    open: !0,
                    rect: i || new DOMRect(p, l.top, d, c),
                    type: "block",
                    content: "comment",
                    blockStore: a,
                    blockId: a.id,
                    discussionInputStore: u,
                    property_id: o,
                    lastKnownBlockStore: a,
                    from: s
                }), (0, n(661767).V)({
                    element: null == (t = n(862921).A.UpdateSidebarCommentScroller) ? void 0 : t.getNode(),
                    environment: r,
                    options: {
                        top: 0,
                        behavior: "smooth"
                    }
                }), n(827862).A.setActiveWithSource("text_annotation"), await (0, n(745990).M)({
                    discussionInputStore: u,
                    environment: r
                }), n(65255).j4(r, {
                    from: s
                })
            }
            n.d(t, {
                l: () => r
            })
        },
        476114: (e, t, n) => {
            "use strict";

            function r({
                environment: e,
                message: t,
                overwrite: a = !1
            }) {
                let i = n(728372).AppStoreCurrentUserSettingsStore.state,
                    o = null == i ? void 0 : i.getSettings();
                if (!i || !o) return;
                let s = new Map((o.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                (!s.has(t.key) || a) && s.set(t.key, {
                    name: t.key,
                    timestamp: n(906745).DateTime.now().toMillis()
                }), (0, n(377796).createAndCommit)({
                    environment: e,
                    userAction: "messageActions.addUserSettingsDismissal",
                    cellTarget: "main",
                    canUndo: !0,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: i,
                            transaction: e,
                            data: {
                                callout_dismissal_timestamps: Array.from(s.values())
                            }
                        })
                    }
                })
            }

            function a(e, t) {
                let a = (0, n(125542).K0)(t);
                "once_per_user" === a ? r({
                    environment: e,
                    message: t
                }) : "once_per_space" === a && function({
                    environment: e,
                    message: t,
                    overwrite: r = !1
                }) {
                    let a = n(728372).AppStoreSidebarSpaceViewStore.state,
                        i = null == a ? void 0 : a.getSettings();
                    if (!a || !i) return;
                    let o = a.getSpaceId(),
                        s = new Map((i.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                    (!s.has(t.key) || r) && s.set(t.key, {
                        name: t.key,
                        timestamp: n(906745).DateTime.now().toMillis()
                    }), (0, n(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addSpaceViewDismissal",
                        canUndo: !0,
                        cellTarget: o ? {
                            spaceWithId: o
                        } : void 0,
                        perform: e => {
                            n(380762).AG(a, e, {
                                callout_dismissal_timestamps: Array.from(s.values())
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
                H: () => r
            }), n(581454)
        },
        476719: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                iconDefinition: () => r,
                personFillSmallIcon: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.89 1.85 10.22 12.3",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 1.85c-.925 0-1.673.382-2.179 1.012-.495.617-.73 1.435-.73 2.29 0 .856.235 1.674.73 2.291.506.63 1.255 1.012 2.18 1.012.924 0 1.672-.382 2.178-1.012.495-.617.73-1.435.73-2.29 0-.856-.235-1.674-.73-2.291C9.673 2.232 8.925 1.85 8 1.85m0 7.403c-2.175 0-4.115 1.06-4.94 2.672-.3.585-.165 1.179.19 1.594.34.396.873.63 1.43.63h6.64c.557 0 1.09-.234 1.43-.63.355-.415.49-1.01.19-1.594-.825-1.612-2.765-2.672-4.94-2.672"
                    })
                },
                a = (0, n(104509).wt)("personFillSmall", r, "fillSmall")
        },
        476743: (e, t, n) => {
            "use strict";

            function r() {
                return (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore)
            }
            n.d(t, {
                a: () => r
            })
        },
        477870: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => r
            });
            let r = new(n(227586)).n((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, t) => {
                let r = await e.api.callApi({
                        eventName: "getAllUpgradeRequestsForSpace",
                        environment: e,
                        data: t
                    }),
                    a = [{
                        key: (0, n(568479).VI)(t),
                        version: -1
                    }];
                return "success" === r.type ? {
                    value: r.data.requests,
                    dependencies: r.data.dependencies ? ? a
                } : void 0
            })
        },
        478597: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = () => n(546605);
            class a extends r().Store {
                environment;
                spaceId;
                constructor(e, t) {
                    super(), this.environment = e, this.spaceId = t, this.reset()
                }
                getInitialState() {
                    if (!this.environment) return;
                    let e = new(n(870941)).A({
                        name: "DiscussionInputStore",
                        isTemporaryData: !0
                    });
                    return {
                        textStore: new(n(517013)).pm({
                            environment: this.environment,
                            pointer: (0, n(295447).zP)({
                                environment: this.environment,
                                table: n(832375).SNf,
                                spaceId: this.spaceId
                            }),
                            path: ["text"],
                            recordStoreOptions: {
                                inMemoryRecordCache: e
                            }
                        }),
                        localRecordCache: e,
                        files: [],
                        showAttachFileIntro: !1,
                        renderFileAttachIntro: !1
                    }
                }
                isEmpty() {
                    let e = this.state.textStore.getValue();
                    return !e || 0 === e.length
                }
                hasNewLineCharacter() {
                    let e = this.state.textStore.getValue();
                    return n(247438).q4_(e).includes("\n")
                }
            }
            let i = a
        },
        487016: (e, t, n) => {
            "use strict";
            n.d(t, {
                Bi: () => s,
                My: () => o,
                ZM: () => u,
                _M: () => l,
                navigateToWorkflowTemplateOnboardingModal: () => d
            }), n(16280), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(672577), n(581454);
            var r = () => n(388507),
                a = () => n(715144),
                i = () => n(717673);

            function o({
                transaction: e,
                collectionStore: t,
                propertyTemplates: n
            }) {
                var s, l;
                let u = (null == (s = t.getParentBlockStore()) ? void 0 : s.getCollectionViewStores().filter(e => "table" === e.getType())) ? ? [];
                if (0 === u.length) return;
                let d = [];
                for (let e of n) {
                    let n = (0, i().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    n && d.push({
                        property: n.id,
                        visible: !(0, r().Sz)(e),
                        ...e.tablePropertyFormat
                    })
                }
                if (0 !== d.length)
                    for (let t of u) {
                        let n = (null == (l = t.getPropertyFormatsStore("table_properties")) ? void 0 : l.getValue()) ? ? [],
                            r = new Set(n.map(e => e.property)),
                            i = d.filter(e => !r.has(e.property));
                        0 !== i.length && (0, a().z)({
                            stores: [t],
                            update: {
                                table_properties: [...n, ...i]
                            },
                            transaction: e
                        })
                    }
            }

            function s({
                transaction: e,
                collectionStore: t,
                propertyTemplates: n
            }) {
                let r = [];
                for (let e of n) {
                    let n = (0, i().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    n && r.push({
                        property: n.id,
                        visible: !0
                    })
                }
                let o = t.getFormat().collection_page_properties ? ? [],
                    l = new Set(o.map(e => e.property)),
                    u = r.filter(e => !l.has(e.property));
                u.length && (0, a().z)({
                    stores: [t],
                    update: {
                        collection_page_properties: [...o, ...u]
                    },
                    transaction: e
                })
            }

            function l({
                environment: e,
                newPageStore: t,
                result: r
            }) {
                if ("accepted_template" === r.type || "accepted_empty_collection" === r.type) {
                    let a = t.getSpaceId();
                    (0, n(377796).createAndCommit)({
                        environment: e,
                        canUndo: !1,
                        cellTarget: a ? {
                            spaceWithId: a
                        } : void 0,
                        perform: a => {
                            let i = t.getTitleValue();
                            if ((0, n(173157).z)({
                                    store: t,
                                    transaction: a,
                                    data: {
                                        alive: !1
                                    }
                                }), "accepted_empty_collection" === r.type && !(0, n(247438).w9s)(i)) {
                                let o = n(970831).B.createChildStore(t, {
                                    table: "block",
                                    id: r.blockId
                                }).getTitleStore();
                                o && n(41403).yr({
                                    environment: e,
                                    transaction: a,
                                    tokens: i,
                                    index: 0,
                                    store: o
                                })
                            }
                            let o = t.getParentStore();
                            if ((null == o ? void 0 : o.table) === n(682956).ev) {
                                let e = o.getContentIds();
                                (0, n(173157).z)({
                                    store: o,
                                    transaction: a,
                                    data: {
                                        content: e.filter(e => e !== t.id)
                                    }
                                })
                            }
                        },
                        userAction: "clean_up_empty_new_page"
                    })
                }
            }

            function u({
                environment: e,
                userAction: t,
                result: r,
                existingCollectionViewBlockStore: a,
                existingCollectionStore: i
            }) {
                if ("canceled" !== r.type) {
                    if ("accepted_empty_collection" === r.type && i) {
                        let a = i.getKeyStore("name"),
                            o = (0, n(247438).x9d)(r.newCollectionTitle);
                        if (a) {
                            let r = i.getSpaceId();
                            (0, n(377796).createAndCommit)({
                                userAction: t,
                                environment: e,
                                canUndo: !0,
                                cellTarget: r ? {
                                    spaceWithId: r
                                } : void 0,
                                perform: t => n(41403).R9({
                                    environment: e,
                                    store: a,
                                    transaction: t,
                                    value: o
                                })
                            })
                        }
                    }
                    if (a) {
                        var o;
                        let e = null == (o = (0, n(444610).U)(a)) ? void 0 : o.settingsStore;
                        e && (0, n(72762).o)({
                            collectionSettingsStore: e
                        })
                    }
                    if ("accepted_template" === r.type && null != a && a.isCollectionView() && !(null != a && a.hasSingleSourceAndNoLinkedCollections())) {
                        let t = (0, n(444610).U)(a),
                            i = a.getCollectionViewStores().find(e => {
                                var t;
                                return (null == (t = e.getCollectionStore()) ? void 0 : t.id) === r.collectionId
                            });
                        if (!t || !i) return;
                        (0, n(532013).t)({
                            environment: e,
                            collectionContextStore: t,
                            collectionViewId: i.id,
                            isFullScreen: t.isFullScreenStore.state,
                            isRootChild: t.isRootChildStore.state,
                            isInPeekRenderer: t.isInPeekRendererStore.state
                        })
                    }
                }
            }
            async function d({
                environment: e,
                collectionViewBlockStore: t
            }) {
                let r = t.id;
                if (!t.isDefined()) {
                    let a = await (0, n(389323).$)({
                        environment: e,
                        blockId: r
                    });
                    if (!a) return;
                    e = await n(274662).T({
                        environment: e,
                        newCurrentUserId: a
                    }), t = new(n(970831)).B(e, {
                        table: n(682956).ev,
                        id: r
                    }), await t.load()
                }
                let a = t.getSpaceId();
                if (!a) throw Error("Space ID not found for collection block");
                let i = (0, n(593303).k)(a);
                if (!i) throw Error(`Space view not found for space ID: ${a}`);
                let o = n(728372).AppStoreSidebarSpaceStore.state;
                (null == o ? void 0 : o.id) !== a && await (0, n(269948).y)({
                    environment: e,
                    spaceViewStore: i
                });
                let s = t.getFormat();
                if ((null == s ? void 0 : s.collection_view_sub_type) === "workflow_template_placeholder" && null != s && s.placeholder_workflow_template_id && t.isCollectionView()) {
                    let {
                        getCollectionTemplateFromId: r
                    } = await n(708370).t.load(), a = r(s.placeholder_workflow_template_id);
                    if (!a) throw Error(`Collection template "${s.placeholder_workflow_template_id}" not found`);
                    let {
                        onNavigateToPlaceholderWorkflowTemplateBlock: i
                    } = await n(903673).O.load();
                    i({
                        environment: e,
                        collectionTemplate: a,
                        collectionViewBlockStore: t
                    })
                } else(0, n(545586).navigateToBlock)({
                    environment: e,
                    store: t,
                    pageVisitSource: n(254656).y8.WorkflowTemplatesDeeplink
                })
            }
        },
        489561: (e, t, n) => {
            "use strict";
            n.d(t, {
                CA: () => o
            }), n(16280), n(898992), n(354520), n(581454);
            let r = Symbol("JSON Schema"),
                a = Symbol("JSON Schema Components"),
                i = Symbol("No JSON Schema"),
                o = (0, n(722371).MU)((0, n(722371).WP)({
                    isNull: () => ({
                        type: "null",
                        [a]: {}
                    }),
                    boolean: () => ({
                        type: "boolean",
                        [a]: {}
                    }),
                    number: () => ({
                        type: "number",
                        [a]: {}
                    }),
                    integer: () => ({
                        type: "integer",
                        [a]: {}
                    }),
                    string: () => ({
                        type: "string",
                        [a]: {}
                    }),
                    matchesRegExp: e => ({
                        type: "string",
                        pattern: e.source,
                        [a]: {}
                    }),
                    dateString: () => ({
                        type: "string",
                        format: "date",
                        [a]: {}
                    }),
                    dateTimeString: () => ({
                        type: "string",
                        format: "date-time",
                        [a]: {}
                    }),
                    literal: e => {
                        let t = {
                            const: e,
                            [a]: {}
                        };
                        return "boolean" == typeof e ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof e ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    literals: (...e) => {
                        let t = {
                                enum: e,
                                [a]: {}
                            },
                            n = e[0];
                        return "boolean" == typeof n ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof n ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    uuid: () => ({
                        type: "string",
                        format: "uuid",
                        [a]: {}
                    }),
                    binary: () => ({
                        type: "string",
                        format: "binary",
                        [a]: {}
                    }),
                    uuidWithoutDashes: () => ({
                        type: "string",
                        format: "uuid",
                        [a]: {}
                    }),
                    array: e => ({
                        type: "array",
                        items: e[r],
                        [a]: e[r][a]
                    }),
                    tuple: e => ({
                        type: "tuple",
                        items: !1,
                        prefixItems: e.map(e => e[r]).filter(e => e !== i),
                        [a]: Object.assign({}, ...e.map(e => e[r][a]))
                    }),
                    record: (e, t) => ({
                        type: "object",
                        additionalProperties: t[r],
                        [a]: t[r][a]
                    }),
                    object: ({
                        required: e,
                        optional: t,
                        exact: o
                    }) => ({
                        type: "object",
                        properties: (0, n(722371).MU)(Object.entries({ ...e,
                            ...t
                        }).filter(([e, t]) => t[r] !== i).map(([e, t]) => [e, t[r]])),
                        ...o && {
                            additionalProperties: !1
                        },
                        ...Object.keys(e).length > 0 && {
                            required: Object.keys(e)
                        },
                        [a]: Object.assign({}, ...Object.values({ ...e,
                            ...t
                        }).map(e => e[r][a]))
                    }),
                    union: e => {
                        let t = (0, n(381453).hS)(e.map(e => e[r]).filter(e => e !== i), e => JSON.stringify(e)),
                            o = (0, n(381453).hS)(e.map(e => e[r][a]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [a]: Object.assign({}, ...o)
                        } : {
                            anyOf: t,
                            [a]: Object.assign({}, ...o)
                        }
                    },
                    intersection: e => {
                        let t = (0, n(381453).hS)(e.map(e => e[r]).filter(e => e !== i), e => JSON.stringify(e)),
                            o = (0, n(381453).hS)(e.map(e => e[r][a]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [a]: Object.assign({}, ...o)
                        } : {
                            allOf: t,
                            [a]: Object.assign({}, ...o)
                        }
                    },
                    gte: (e, t) => {
                        let n = e[r];
                        return n !== i ? { ...n,
                            minimum: t
                        } : n
                    },
                    gt: (e, t) => {
                        let n = e[r];
                        return n !== i ? { ...n,
                            exclusiveMinimum: t
                        } : n
                    },
                    lte: (e, t) => {
                        let n = e[r];
                        return n !== i ? { ...n,
                            maximum: t
                        } : n
                    },
                    lt: (e, t) => {
                        let n = e[r];
                        return n !== i ? { ...n,
                            exclusiveMaximum: t
                        } : n
                    },
                    maxLength: (e, t) => {
                        let n = e[r];
                        if (n === i) return n;
                        if ("type" in n) {
                            if ("string" === n.type) return { ...n,
                                maxLength: t
                            };
                            else if ("array" === n.type) return { ...n,
                                maxItems: t
                            }
                        }
                        throw Error("Unknown type for max length.")
                    },
                    minLength: (e, t) => {
                        let n = e[r];
                        if (n === i) return n;
                        if ("type" in n) {
                            if ("string" === n.type) return { ...n,
                                minLength: t
                            };
                            else if ("array" === n.type) return { ...n,
                                minItems: t
                            }
                        }
                        throw Error("Unknown type for min length.")
                    },
                    nonEmpty: e => {
                        let t = e[r];
                        if (t === i) return t;
                        if ("type" in t) {
                            if ("string" === t.type) return { ...t,
                                minLength: 1
                            };
                            else if ("object" === t.type) return { ...t,
                                minProperties: 1
                            };
                            else if ("array" === t.type) return { ...t,
                                minItems: 1
                            }
                        }
                        throw Error("Unknown non-emptyable type.")
                    },
                    nullable: e => {
                        let t = e[r];
                        if (t === i) return t;
                        if ("const" in t) return { ...t,
                            const: void 0,
                            enum: [t.const, null]
                        };
                        if ("type" in t)
                            if (Array.isArray(t.type))
                                if ("null" === t.type[1]) return t;
                                else(0, n(722371).HB)(t.type[1]);
                        else {
                            if ("string" === t.type || "object" === t.type || "array" === t.type || "tuple" === t.type || "boolean" === t.type || "integer" === t.type || "number" === t.type) return { ...t,
                                type: [t.type, "null"]
                            };
                            if ("null" === t.type) return t;
                            (0, n(722371).HB)(t.type)
                        } else if ("enum" in t) {
                            let e = t.enum;
                            return { ...t,
                                enum: Array.isArray(e) ? [...e, null] : [null]
                            }
                        } else {
                            var o;
                            if ("anyOf" in t) return { ...t,
                                anyOf: [...t.anyOf, {
                                    type: "null",
                                    [a]: {}
                                }]
                            };
                            if ("oneOf" in t) return { ...t,
                                oneOf: [...t.oneOf, {
                                    type: "null",
                                    [a]: {}
                                }]
                            };
                            if ("allOf" in t) return { ...t,
                                oneOf: [{
                                    allOf: t.allOf,
                                    [a]: {}
                                }, {
                                    type: "null",
                                    [a]: {}
                                }]
                            };
                            if ("$ref" in t) return {
                                anyOf: [t, {
                                    type: "null",
                                    [a]: {}
                                }],
                                [a]: t[a]
                            };
                            if (o = t, (0, n(722371).Gv)(o) && 0 === Object.keys(o).length) return t;
                            (0, n(722371).HB)(t)
                        }
                    }
                }).map(([e, t]) => [e, (...i) => 1 === i.length && (0, n(722371).Gv)(i[0]) && ("id" in i[0] || "title" in i[0] || "description" in i[0] || "examples" in i[0]) ? (...o) => {
                    let {
                        description: s,
                        examples: l,
                        id: u,
                        title: d
                    } = i[0], c = { ...d && {
                            title: d
                        },
                        description: s,
                        ...l && {
                            examples: l
                        },
                        ...t(...o)
                    };
                    return u && (c = {
                        $ref: `#/components/schemas/${u}`,
                        [a]: { ...c[a],
                            [u]: c
                        }
                    }), {
                        [r]: c,
                        ...n(969475)[e](...o)
                    }
                } : {
                    [r]: t(...i),
                    ...n(969475)[e](...i),
                    describe: t => o[e]({
                        description: t
                    })(...i)
                }]));
            Symbol("Exact empty object ({})"), o.object({
                id: "emptyObject"
            })({
                required: {},
                optional: {},
                exact: !0
            })
        },
        497857: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => a
            }), n(296540);
            var r = n(474848);

            function a() {
                return (0, r.jsx)(n(16275).I, {
                    icon: n(746204).w,
                    size: "lg",
                    colorVariant: "primary"
                })
            }
        },
        498667: (e, t, n) => {
            "use strict";
            e.exports = n.p + "ebbfc682ffb9183b.png"
        },
        503681: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => v
            });
            var r = n(296540);
            n(581454);
            var a = n(474848);
            let i = `
	animation-duration: 2s;
	animation-direction: alternate;
	animation-iteration-count: infinite;
	animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
`,
                o = "M84.2513 81.7395C88.977 82.4048 90.6717 77.9739 90.8562 75.5247C91.1236 73.7435 93.5045 77.4968 90.1838 81.7561C88.1114 84.4142 84.495 84.3517 82.7126 83.226C82.1051 82.9047 81.0102 81.2832 84.2513 81.7395Z",
                s = "M70.5719 72.9453C69.9099 76.0342 66.8682 80.1714 66.3343 81.996C66.193 82.4788 65.8919 84.6494 67.5925 85.3012C68.6496 85.7063 70.0486 85.2456 71.0672 83.8076C71.9661 82.5385 73.2389 80.3849 73.7254 78.8907",
                l = "M81.3674 80.6071C80.0096 80.6071 75.6271 81.1468 75.3813 83.6491C75.3069 84.406 75.897 85.2639 76.991 85.2639C80.7189 85.2639 83.586 85.2878 83.9051 85.2639C86.1871 85.093 86.7281 83.2789 86.6934 81.7783C86.634 79.2117 85.903 77.1869 84.9662 75.5C83.2121 72.3413 80.7365 70.3673 80.5986 68.2393",
                u = "M81.8804 67.393L82.5295 65.5811C83.4844 62.2994 81.8804 57.7899 80.228 55.9816C79.6109 55.3062 77.9062 53.833 75.3259 53.833C73.4755 53.833 71.7706 54.8378 70.9613 55.6264C69.6193 56.934 69.1684 58.8522 68.4948 60.2513C67.4927 62.3325 65.1729 61.6477 64.0865 63.9062C63.5091 64.9101 63.3667 67.0446 64.0868 68.3343C64.807 69.624 66.6161 70.4021 68.4948 70.7995C70.264 71.1737 71.5432 71.2337 72.9333 71.2337C73.7944 71.2252 75.5588 71.0894 77.3272 70.4021",
                d = "M66.9294 64.6895C66.9001 65.1717 66.656 65.5492 65.662 65.4888C64.668 65.4285 64.4714 65.0242 64.5007 64.542C64.53 64.0598 65.0974 63.702 65.768 63.7427C66.4387 63.7834 66.9586 64.2073 66.9294 64.6895Z",
                c = "M79.6816 66.979C79.6816 64.529 80.4154 60.3832 81.1518 57.416C83.6256 60.95 86.3042 66.884 83.3275 68.6685C81.504 69.7617 79.6816 69.0329 79.6816 66.979Z",
                p = "M72.2065 59.658C71.7961 59.6024 71.5075 59.231 71.5817 58.6829C71.6559 58.1348 72.0328 57.8536 72.4433 57.9091C72.8538 57.9647 73.1335 58.4013 73.0681 58.8842C73.0028 59.3671 72.617 59.7135 72.2065 59.658Z",
                f = "M75.7954 59.8435C75.3849 59.7879 75.0964 59.4166 75.1706 58.8685C75.2448 58.3204 75.6217 58.0391 76.0322 58.0947C76.4426 58.1503 76.7224 58.5868 76.657 59.0697C76.5916 59.5526 76.2059 59.8991 75.7954 59.8435Z",
                m = "M73.062 79.4326 C71.7367 81.3275 71.5151 81.617 71.1477 83.1804 C70.8243 84.5568 71.8802 85.8228 73.738 85.2791 C75.5959 84.7353 77.938 81.4043 77.938 79.4327 C77.938 79.4327 77.938 79.4327 77.938 79.4327",
                g = "M72.4372 80.6925C68.0273 84 73.4246 85.323 76.0274 84.4997C78.874 83.5992 81.1506 81.6677 81.1448 79.1513C81.1423 78.0631 80.9619 76.9652 80.9368 76.7693L72.5612 74.2937C72.4563 77.7978 72.5212 79.1973 72.4372 80.6925Z",
                D = "M80.9666 77.4694C80.4498 79.3203 80.3912 80.6835 80.4498 81.2046C80.7488 83.8633 78.4457 84.1225 74.5339 84.5623C70.1565 85.0545 69.7203 82.221 72.7191 80.4413C71.6821 78.44 72.4056 75.8018 72.9875 74.8239",
                h = `
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
                _ = {
                    position: "relative",
                    pointerEvents: "none"
                },
                y = {
                    pointerEvents: "visiblePainted"
                };

            function v({
                size: e,
                speechBubblePlacement: t,
                speechBubbleTextOverride: i,
                speechBubbleVerticalOffsetPx: b = 20,
                speechBubbleHorizontalOffsetPx: C = 12,
                speechBubbleTailCircleTop: S,
                speechBubbleTailCircleInsetInlineStartPx: w,
                animated: k = !0
            }) {
                let x = "dark" === (0, n(960253).e)() ? "#d3d3d3" : "white",
                    {
                        showBubble: F,
                        isHiding: I,
                        currentPhrase: A,
                        handleMouseEnter: E,
                        handleMouseLeave: M
                    } = function(e, t) {
                        let a = (0, n(109939).tz)(),
                            i = n(189760).B.dog,
                            o = a.locale.startsWith("en"),
                            s = "none" !== e && !!i && o,
                            l = (0, r.useMemo)(() => t ? [t] : i ? (0, n(763230).k4)(Object.values(i).map(e => a.formatMessage(e))) : [], [a, i, t]),
                            [u, d] = (0, r.useState)(!1),
                            [c, p] = (0, r.useState)(!1),
                            f = (0, r.useRef)(0),
                            [m, g] = (0, r.useState)(""),
                            D = (0, r.useRef)(),
                            h = (0, r.useCallback)(() => {
                                s && 0 !== l.length && (clearTimeout(D.current), g(l[f.current % l.length]), f.current++, p(!1), d(!0))
                            }, [l, s]),
                            _ = (0, r.useCallback)(() => {
                                s && (p(!0), D.current = setTimeout(() => {
                                    d(!1), p(!1)
                                }, 150))
                            }, [s]);
                        return {
                            showBubble: s && (u || c),
                            isHiding: c,
                            currentPhrase: m,
                            handleMouseEnter: s ? h : void 0,
                            handleMouseLeave: s ? _ : void 0
                        }
                    }(t, i),
                    B = "none" !== t ? t : "topRight";
                return (0, a.jsxs)("div", {
                    style: _,
                    children: [F ? (0, a.jsx)(n(679416).P, {
                        placement: B,
                        animated: k,
                        isHiding: I,
                        verticalOffsetPx: b,
                        horizontalOffsetPx: C,
                        tailCircleTop: S,
                        tailCircleInsetInlineStartPx: w,
                        children: A
                    }) : void 0, k ? (0, a.jsx)("style", {
                        children: h
                    }) : void 0, (0, a.jsxs)("svg", {
                        width: e,
                        height: e,
                        viewBox: "0 0 100 100",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: y,
                        onMouseEnter: E,
                        onMouseLeave: M,
                        children: [(0, a.jsxs)("g", {
                            children: [(0, a.jsx)("path", {
                                id: "agent-acc-dog-tail-outline",
                                d: o,
                                stroke: x,
                                strokeWidth: "4"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-left-leg-fill-outline",
                                d: g,
                                stroke: x,
                                strokeWidth: "4"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-left-leg-stroke-outline",
                                d: D,
                                stroke: x,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-left-hand-stroke-outline",
                                d: s,
                                stroke: x,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-back-stroke-outline",
                                d: l,
                                stroke: x,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-head-stroke-outline",
                                d: u,
                                stroke: x,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-nose-outline",
                                d: d,
                                stroke: x,
                                strokeWidth: "3"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-right-ear-outline",
                                d: c,
                                stroke: x,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-left-eye-outline",
                                d: p,
                                stroke: x,
                                strokeWidth: "3"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-right-eye-outline",
                                d: f,
                                stroke: x,
                                strokeWidth: "3"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-right-hand-stroke-outline",
                                d: m,
                                stroke: x,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            })]
                        }), (0, a.jsxs)("g", {
                            children: [(0, a.jsx)("path", {
                                id: "agent-acc-dog-tail",
                                d: o,
                                fill: "black"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-left-leg-fill",
                                d: g,
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-left-leg-stroke",
                                d: D,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-body-fill",
                                d: "M68.5167 78.823C69.8415 76.5999 69.839 74.928 70.6031 73.1034C71.1234 70.4713 72.2666 69.7739 71.7436 67.9773C71.2207 66.1807 77.0344 65.2132 80.0066 64.9541C79.9864 66.4045 80.3439 69.6312 81.9353 70.9346C83.4208 73.1034 86.8612 75.7498 86.6665 82.0341C86.62 83.5343 86.2068 84.9953 84.4783 85.2635C84.1621 85.3126 80.7189 85.2635 76.9909 85.2635C75.8969 85.2635 75.3068 84.4056 75.3812 83.6487L72.4044 82.6585C72.1072 83.286 71.0647 84.3211 70.5806 84.7602C69.2791 86.036 67.2704 85.6107 66.9509 84.2668C66.5687 82.6594 67.7553 80.1008 68.5167 78.823Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-left-hand-stroke",
                                d: s,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-back-stroke",
                                d: l,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("path", {
                                id: "agent-acc-dog-head-stroke",
                                d: u,
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
                                d: c,
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
                                d: m,
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
        506768: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => a,
                i: () => r
            });
            let r = {
                    current: void 0
                },
                a = (0, n(411784).u0)({
                    measureScroll: e => ({
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }),
                    defaultParent: () => {
                        if (!r.current) {
                            let e = new(n(508656)).B({});
                            e.mount(window), e.setOptions({
                                layoutScroll: !0
                            }), r.current = e
                        }
                        return r.current
                    },
                    resetTransform: (e, t) => {
                        e.style.transform = void 0 !== t ? t : "none"
                    },
                    checkIsScrollRoot: e => "fixed" === window.getComputedStyle(e).position
                })
        },
        511101: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => r
            });
            let r = "notion-modal-underlay"
        },
        512342: (e, t, n) => {
            "use strict";
            n.d(t, {
                LB: () => i,
                VT: () => r,
                vr: () => a
            });
            let r = (0, n(109939).YK)({
                    askAI: {
                        defaultMessage: "Ask AI",
                        id: "id.completions.askAI"
                    },
                    genericHelpMeWrite: {
                        defaultMessage: "{filter}",
                        id: "id.completions.genericHelpMeWrite"
                    },
                    summarize: {
                        defaultMessage: "Summarize",
                        id: "id.completions.summarize"
                    },
                    findActionItems: {
                        defaultMessage: "Find action items",
                        id: "id.completions.findActionItems"
                    },
                    autofillSummary: {
                        defaultMessage: "Summary",
                        id: "id.completions.autofillSummary"
                    },
                    autofillTranslate: {
                        defaultMessage: "Translate",
                        id: "id.completions.autofillTranslate"
                    },
                    autofillExtract: {
                        defaultMessage: "Key info",
                        id: "id.completions.autofillExtract"
                    },
                    autofillCustom: {
                        defaultMessage: "Custom autofill",
                        id: "id.completions.autofillCustom"
                    }
                }),
                a = {
                    text: {
                        summarize: {
                            name: r.autofillSummary,
                            svg: n(636434).P
                        },
                        translate: {
                            name: r.autofillTranslate,
                            svg: n(740902).textTranslateIcon
                        },
                        extract: {
                            name: r.autofillExtract,
                            svg: n(774458).n
                        },
                        custom: {
                            name: r.autofillCustom,
                            svg: n(312528).x
                        }
                    },
                    select: {
                        select: {
                            name: r.autofillCustom,
                            svg: n(312528).x
                        }
                    },
                    multi_select: {
                        select: {
                            name: r.autofillCustom,
                            svg: n(312528).x
                        }
                    }
                };

            function i(e) {
                let {
                    origin: t
                } = e;
                if (t instanceof n(970831).B) {
                    let e = n(240414).T.findNodeFromStore(t);
                    return e ? ("table" === t.getType() && (e = e.querySelector(`.${n(962817).rb}.notion-table-block`) ? ? e), e.getBoundingClientRect()) : void 0
                }
                return t instanceof HTMLElement ? t.getBoundingClientRect() : t
            }
        },
        519529: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                iconDefinition: () => r,
                xMarkFillSmallIcon: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.03 3.03 9.94 9.94",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M12.73 4.33a.75.75 0 1 0-1.06-1.06L8 6.94 4.33 3.27a.75.75 0 1 0-1.06 1.06L6.94 8l-3.67 3.67a.75.75 0 1 0 1.06 1.06L8 9.06l3.67 3.67a.75.75 0 0 0 1.06-1.06L9.06 8z"
                    })
                },
                a = (0, n(104509).wt)("xMarkFillSmall", r, "fillSmall")
        },
        525272: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    spaceStore: t,
                    viewedUserId: r
                } = e, a = (0, n(533992).v3)(), i = (0, n(993077).nB)(t), o = (0, n(993077).V_)({
                    spaceStore: t,
                    userId: r
                }), s = (0, n(682985).K8)(() => {
                    let e = null == t ? void 0 : t.id;
                    return !(0, n(455221).e)(a, e) && "control" !== n(218744).default.getEligibleGroup({
                        experimentId: "show_comment_guest_badge",
                        defaultGroup: "control"
                    })
                }, [a, t]);
                return (0, n(682985).K8)(() => (0, n(62694).V)({
                    spaceStore: t,
                    actorRole: i,
                    viewedRole: o,
                    shouldShowForExternalUsers: s
                }), [t, i, o, s])
            }
            n.d(t, {
                E: () => r
            })
        },
        528440: (e, t, n) => {
            "use strict";
            e.exports = n.p + "d15ce47ef6ddf83d.png"
        },
        530500: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            }), n(898992), n(354520), n(581454);
            var r = n(296540),
                a = () => n(124858),
                i = n(474848);

            function o(e) {
                return (0, i.jsx)(n(844565).A, { ...e
                })
            }
            let s = n(546605).Store.createClass(25, {
                name: "limitStore"
            });

            function l({
                topBorder: e,
                context: t,
                onAccept: u,
                onFocus: d,
                empty: c,
                keyboardPriority: p,
                disableKeyboard: f,
                initialFocus: m,
                onEmptyEnter: g,
                comboboxProps: D,
                useLimit: h,
                filter: _,
                sections: y,
                menuListStore: v,
                resetInitialFocusOnSectionChangeAlways: b,
                resetFocusOnMouseOut: C,
                role: S,
                showNoResultsMessage: w,
                onFooterEnter: k,
                filterSections: x,
                flattenSectionsOnSearch: F,
                renderItemStyles: I,
                shouldShowBlockTypeTitle: A
            }) {
                let E = (0, n(682985).uB)(void 0, s),
                    M = (0, n(682985).uB)(v, n(419110).$),
                    B = !!(F && _),
                    {
                        visibleActionSections: T,
                        actionsCount: j,
                        allActionSections: P,
                        flatActions: U
                    } = (0, n(682985).K8)(() => {
                        let e = _ && x ? x : y;
                        if (B) {
                            let r = (0, n(173231).Oe)({
                                sections: e,
                                context: t,
                                query: _ || "",
                                shouldShowBlockTypeTitle: A
                            });
                            return {
                                visibleActionSections: [],
                                actionsCount: r.length,
                                allActionSections: [],
                                flatActions: h ? r.slice(0, E.state) : r
                            }
                        }
                        let r = (0, n(173231).js)({
                                sections: e,
                                context: t,
                                query: _ || "",
                                shouldShowBlockTypeTitle: A
                            }),
                            a = 0;
                        for (let e of r) a += e.actions.length;
                        return {
                            visibleActionSections: h ? (0, n(173231).Le)(r, E.state) : r,
                            actionsCount: a,
                            allActionSections: r,
                            flatActions: void 0
                        }
                    }, [y, t, _, h, E, x, A, B]);
                (0, r.useEffect)(() => {
                    n(764615).Ay.state.open && n(764615).rA.setState(0 === j)
                }, [j]);
                let O = (0, r.useRef)(_),
                    L = (0, r.useCallback)(e => {
                        e < 200 && E.state < j && E.setState(E.state + 25)
                    }, [E, j]),
                    N = (0, r.useMemo)(() => {
                        let e = new Map;
                        for (let t of P)
                            if (t.key !== a().IZ)
                                for (let n of t.actions) e.set(n.key, t.title);
                        return e
                    }, [P]),
                    {
                        menuItemActionMap: R,
                        menuItemSectionKeyMap: V,
                        menuListSections: z
                    } = (0, r.useMemo)(() => {
                        let r = new Map,
                            s = new Map;

                        function l(e, i) {
                            let o = null == i ? void 0 : i.key.toString();
                            e.lazyDependencyKeys && (0, n(968864).G)(...e.lazyDependencyKeys);
                            let l = {
                                key: e.key,
                                render: (n, r) => {
                                    let s = (null == i ? void 0 : i.key) === a().IZ ? N.get(e.key) : null == i ? void 0 : i.title,
                                        l = B || (null == i ? void 0 : i.key) === a().IZ;
                                    return e.render(n, t, {
                                        onAccept: (e, t, n) => {
                                            null == u || u(e, t, n, o)
                                        },
                                        onFocus: r.onFocus,
                                        sectionTitle: s,
                                        extendItemTitle: l,
                                        styles: I
                                    })
                                },
                                action: ({
                                    event: n
                                }) => {
                                    e.action(t, n)
                                }
                            };
                            return r.set(l, e), s.set(l, o), l
                        }
                        return B ? {
                            menuItemActionMap: r,
                            menuItemSectionKeyMap: s,
                            menuListSections: [{
                                key: "flat",
                                render: e => (0, i.jsx)(n(844565).A, { ...e,
                                    topBorder: !1,
                                    hideTitle: !0
                                }),
                                items: (null == U ? void 0 : U.map(e => l(e.action, e.section))) ? ? []
                            }]
                        } : {
                            menuItemActionMap: r,
                            menuItemSectionKeyMap: s,
                            menuListSections: T.map(t => {
                                let n = t.render ? ? o;
                                return {
                                    key: t.key,
                                    render: r => n({ ...r,
                                        topBorder: 0 !== r.index || !!e,
                                        title: t.title
                                    }),
                                    items: t.actions.map(e => l(e, t))
                                }
                            })
                        }
                    }, [T, B, e, N, t, I, u, U]);
                (0, r.useEffect)(() => {
                    if (_ !== O.current && 0 === m) {
                        if (O.current = _, k && 0 === j) return n(163657).rd({
                            store: M
                        });
                        M.setState({ ...M.state,
                            focus: {
                                section: 0,
                                indexLocal: 0,
                                indexGlobal: 0,
                                footerFocused: !1
                            }
                        })
                    }
                }, [_, m, j, M, k]);
                let W = (0, r.useCallback)((e, n) => {
                        if (u) {
                            let a = R.get(e),
                                i = V.get(e);
                            if (a) {
                                var r;
                                if (null != (r = a.isDisabled) && r.call(a, t)) return;
                                u(a, t, n.event, i, n.index)
                            }
                        }
                    }, [u, t, R, V]),
                    H = (0, r.useCallback)(e => {
                        let r;
                        if (e.indexLocal && (r = n(130711).SG(e.indexLocal, z)), e.indexGlobal) {
                            var a;
                            r = null == (a = n(130711).e7(e.indexGlobal, z)) ? void 0 : a.item
                        }
                        if (!r) return;
                        let i = R.get(r),
                            o = V.get(r);
                        i && (null == d || d(i, t, o))
                    }, [R, V, d, z, t]),
                    $ = j > 0;
                return (0, i.jsxs)(i.Fragment, {
                    children: [w && !$ ? (0, i.jsx)(n(844565).A, {
                        children: (0, i.jsx)(n(498341).u, {
                            title: c || (0, i.jsx)(n(109939).sA, {
                                id: "action.search.noResults",
                                defaultMessage: "No results"
                            })
                        })
                    }) : void 0, (0, i.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        role: S,
                        priority: p,
                        store: M,
                        disableKeyboard: f,
                        sections: z,
                        initialFocus: m,
                        onEmptyEnter: g,
                        onAccept: W,
                        onFocus: H,
                        comboboxProps: D,
                        resetInitialFocusOnSectionChangeAlways: b,
                        resetFocusOnMouseOut: C,
                        onFooterEnter: k
                    }), h ? (0, i.jsx)(n(636255).A, {
                        onChange: L
                    }) : void 0]
                })
            }
        },
        532755: (e, t, n) => {
            "use strict";
            n.d(t, {
                D: () => i
            });
            var r = n(296540),
                a = n(474848);

            function i({
                userStore: e,
                suppressMouse: t,
                children: o,
                spaceStore: s,
                width: l,
                from: u = "unknown"
            }) {
                let d = (0, r.useRef)(null),
                    c = (0, n(525272).E)({
                        spaceStore: s,
                        viewedUserId: null == e ? void 0 : e.id
                    }),
                    p = (0, n(83208).X)("prefetch_extended_user_profiles"),
                    f = c && p,
                    m = (0, n(815048).fJ)(n(554666).u.extendedUserProfileActions, {
                        disabled: !f
                    }),
                    g = (0, n(533992).v3)();
                (0, r.useEffect)(() => {
                    f && "resolved" === m.status && null != e && e.id && s && null != s && s.userId && m.value.prefetchExtendedUserProfiles({
                        spaceStore: s,
                        actorUserId: s.userId,
                        viewedUserIds: [e.id]
                    }, g)
                }, [f, null == e ? void 0 : e.id, s, c, g, m]);
                let D = (0, r.useCallback)(() => {
                        d.current && e && s && !t && n(84300).A.setState({
                            type: "user",
                            store: e,
                            domRect: d.current.getBoundingClientRect(),
                            spaceStore: s,
                            from: u
                        })
                    }, [e, s, t, u]),
                    h = (0, r.useCallback)(() => {
                        n(84300).A.setState(void 0)
                    }, []);
                return e && c ? (0, a.jsx)("div", {
                    ref: d,
                    onMouseEnter: c ? D : void 0,
                    onMouseLeave: c ? h : void 0,
                    style: l ? {
                        width: l
                    } : void 0,
                    children: o
                }) : o
            }
        },
        545504: (e, t, n) => {
            "use strict";

            function r({
                url: e,
                config: t
            }) {
                let a = (0, n(132702).parseRoute)({
                    url: e,
                    baseUrl: t.domainBaseUrl,
                    publicDomainName: t.publicDomainName,
                    isMobile: !1,
                    protocol: t.protocol,
                    currentUrl: void 0,
                    requestedOnAlternateDomain: t.requestedOnAlternateDomain
                });
                if ("page" === a.name) return a.blockId
            }
            n.d(t, {
                w: () => r
            })
        },
        546579: (e, t, n) => {
            "use strict";
            e.exports = n.p + "a5098827bba61d4d.png"
        },
        550122: (e, t, n) => {
            "use strict";
            e.exports = n.p + "176441c5ba020951.png"
        },
        551408: (e, t, n) => {
            "use strict";

            function r() {
                let e = (0, n(83208).X)("database_agents"),
                    t = (0, n(682985).K8)(() => n(886556).z.isAiEnabled(), []);
                return e && t
            }

            function a() {
                return n(218744).default.checkGate({
                    gateName: "database_agents"
                }) && n(886556).z.isAiEnabled()
            }
            n.d(t, {
                A: () => r,
                R: () => a
            })
        },
        554666: (e, t, n) => {
            "use strict";
            n.d(t, {
                i: () => a,
                u: () => r
            });
            let r = {
                    PersonProfileContainer: new(n(815048)).O2("PersonProfileContainer", () => Promise.all([n.e(75134), n.e(21969), n.e(29663), n.e(75136), n.e(98175), n.e(47414), n.e(16922), n.e(65594), n.e(15021), n.e(98821), n.e(77470), n.e(80068), n.e(44632)]).then(n.bind(n, 587386))),
                    extendedUserProfileActions: new(n(815048)).O2("extendedUserProfileActions", () => n.e(63717).then(n.bind(n, 433562)))
                },
                a = (0, n(815048)._h)(r.PersonProfileContainer, e => e.PersonProfileContainer)
        },
        555583: (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => a
            }), n(898992), n(354520);
            var r = n(296540);

            function a({
                useRedesigned: e
            } = {
                useRedesigned: !1
            }) {
                let t = (0, n(109939).tz)(),
                    i = (0, n(599412).H)(t),
                    o = (0, n(972740).L)(),
                    s = (0, n(682985).K8)(() => (null == o ? void 0 : o.canAdmin()) ? ? !1, [o]),
                    l = (0, n(871086).w)(),
                    u = (0, r.useMemo)(() => e ? n(411106).p : (0, n(411106).L)(s, i), [s, i, e]),
                    d = (0, r.useMemo)(() => Object.entries(l ? ? {}).filter(([e]) => (0, n(722371).Xk)(u, e)).length, [l, u]),
                    c = u.length,
                    p = c > 0 ? d / c : 0,
                    f = (0, r.useMemo)(() => new Intl.NumberFormat(i, {
                        style: "percent"
                    }).format(p), [p, i]);
                return {
                    progress: p,
                    progressDisplay: f,
                    completedCount: d,
                    totalCount: c,
                    completedItems: l ? ? {}
                }
            }
        },
        555676: (e, t, n) => {
            "use strict";
            let r;

            function a(e) {
                r = e
            }

            function i() {
                return r
            }
            n.d(t, {
                w: () => a,
                x: () => i
            })
        },
        556306: (e, t, n) => {
            "use strict";

            function r(e) {
                return !!e.getSetting("self_serve_enterprise_eligible")
            }
            n.d(t, {
                h: () => r
            })
        },
        556809: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => o
            });
            var r = n(296540);

            function a(e) {
                n(561599).A.state.openModals.has(e) && (n(561599).A.state.openModals.delete(e), n(561599).A.emit())
            }
            var i = n(474848);

            function o(e) {
                let {
                    open: t,
                    onOpen: o,
                    transitionAppearance: s = "modal"
                } = e, l = (0, r.useRef)();
                void 0 === l.current && (l.current = n(92513).JW());
                let d = l.current,
                    c = (0, n(682985).uB)(e.store, n(432376).A),
                    p = (0, n(682985).K8)(() => c.state.open, [c]),
                    f = (0, r.useRef)(!1),
                    m = function({
                        disableAnimationFromProps: e,
                        isShowingTabBar: t
                    }) {
                        return !!t || e
                    }({
                        disableAnimationFromProps: "none" === s,
                        isShowingTabBar: (0, n(682985).O$)(n(584257).b)
                    }),
                    g = (0, r.useCallback)(() => {
                        if (!f.current && t) c.setState({
                            open: !0,
                            openAnimationCompleted: !1,
                            closeAnimationCompleted: !0
                        }), n(561599).A.state.openModals.has(d) || (n(561599).A.state.openModals.add(d), n(561599).A.emit()), o && o();
                        else f.current && !t && (c.setState({
                            open: !0,
                            openAnimationCompleted: !0,
                            closeAnimationCompleted: !1
                        }), a(d));
                        f.current = t
                    }, [d, c, o, t]);
                return (0, r.useEffect)(() => {
                    g()
                }, [g]), (0, n(637030).X)(() => {
                    a(d)
                }), (0, i.jsx)(n(114596).O, {
                    open: p,
                    zIndex: e.overlayZIndex,
                    origin: e.origin,
                    trapFocus: !0,
                    children: (0, i.jsx)(n(369064).N, {
                        debugName: "Modal",
                        capture: e.open,
                        onEsc: t => {
                            e.onDismiss && e.onDismiss(t)
                        },
                        children: (0, i.jsx)(n(654979).A, {
                            tag: u,
                            visible: e.open,
                            animate: {
                                opacity: 1
                            },
                            initial: {
                                opacity: 0
                            },
                            exit: {
                                opacity: 0
                            },
                            forceCompositeLayer: !0,
                            config: {
                                duration: m ? 0 : void 0
                            },
                            onAnimationEnd: () => {
                                var n, r, a;
                                return n = t, r = c, a = e.onClosed, void(n ? r.setState({
                                    open: !0,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }) : (r.setState({
                                    open: !1,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }), null == a || a()))
                            },
                            open: e.open,
                            keepFocus: e.keepFocus,
                            disableAnimation: m,
                            showCloseIcon: e.showCloseIcon,
                            onDismiss: e.onDismiss,
                            isWaxPaper: e.isWaxPaper,
                            ariaLabel: e.ariaLabel,
                            ariaLabelledBy: e.ariaLabelledBy,
                            ariaDescribedBy: e.ariaDescribedBy,
                            innerStyle: e.innerStyle,
                            children: e.children,
                            preventHideChildrenWhileOpening: e.preventHideChildrenWhileOpening,
                            style: e.style,
                            className: e.className,
                            backgroundStyle: e.backgroundStyle,
                            store: c,
                            isWash: e.isWash,
                            transitionAppearance: s
                        })
                    })
                })
            }

            function s({
                children: e,
                disableAnimation: t,
                preventHideChildrenWhileOpening: r,
                store: a
            }) {
                let o = (0, n(682985).uB)(a, n(432376).A),
                    l = (0, n(682985).K8)(() => o.state.openAnimationCompleted, [o]);
                return t || l || r ? (0, i.jsx)(i.Fragment, {
                    children: e
                }) : null
            }
            let l = r.forwardRef(function({
                    showCloseIcon: e,
                    onDismiss: t,
                    isWaxPaper: r,
                    isWash: a,
                    ariaLabel: o,
                    ariaLabelledBy: l,
                    ariaDescribedBy: u,
                    style: d,
                    children: c,
                    disableAnimation: p,
                    preventHideChildrenWhileOpening: f,
                    store: m
                }, g) {
                    let D = (0, n(682985).uB)(m, n(432376).A),
                        h = (0, n(960253).I)(() => ({
                            dialog: {
                                position: "relative",
                                zIndex: 1,
                                maxHeight: "100%",
                                boxShadow: n(632079).Tj.shadow.outline.scrim,
                                borderRadius: 12,
                                overflow: "hidden",
                                ...d,
                                background: r ? n(632079).Tj.popoverWaxPaperBackground : a ? n(632079).Tj.background.secondary : n(632079).Tj.background.elevated,
                                backdropFilter: r ? "blur(40px)" : "none",
                                WebkitBackdropFilter: r ? "blur(40px)" : "none"
                            }
                        }), [d, r, a]);
                    return (0, i.jsxs)("div", {
                        "aria-modal": !0,
                        role: "dialog",
                        className: "notion-dialog",
                        tabIndex: -1,
                        "aria-label": o,
                        "aria-labelledby": l,
                        "aria-describedby": u,
                        style: h.dialog,
                        ref: g,
                        children: [e ? (0, i.jsx)(n(226512).R, {
                            onClick: t
                        }) : void 0, (0, i.jsx)(s, {
                            children: c,
                            disableAnimation: p,
                            preventHideChildrenWhileOpening: f,
                            store: D
                        })]
                    })
                }),
                u = r.forwardRef(function({
                    open: e,
                    keepFocus: t = !1,
                    disableAnimation: r,
                    showCloseIcon: a,
                    onDismiss: o,
                    isWaxPaper: s,
                    isWash: u,
                    ariaLabel: d,
                    ariaLabelledBy: c,
                    ariaDescribedBy: p,
                    innerStyle: f,
                    children: m,
                    preventHideChildrenWhileOpening: g,
                    style: D,
                    className: h,
                    backgroundStyle: _,
                    transitionAppearance: y,
                    store: v
                }, b) {
                    let C = (0, n(336995).A)(t),
                        S = function(e) {
                            switch (e) {
                                case "none":
                                    return {
                                        animate: {},
                                        initial: {},
                                        exit: {}
                                    };
                                case "modal":
                                    return {
                                        animate: {
                                            scale: 1
                                        },
                                        initial: {
                                            scale: .97
                                        },
                                        exit: {
                                            scale: .97
                                        }
                                    };
                                case "full-screen":
                                    return {
                                        initial: {
                                            translateY: 5,
                                            opacity: 0
                                        },
                                        animate: {
                                            translateY: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        config: {
                                            duration: 650,
                                            timingFunction: "ease-in-out"
                                        }
                                    };
                                default:
                                    (0, n(722371).HB)(e)
                            }
                        }(y),
                        {
                            mobileTopPadding: w,
                            mobileBottomPadding: k
                        } = function() {
                            let {
                                WindowSizeStore: e
                            } = (0, n(533992).v3)();
                            return {
                                mobileTopPadding: (0, n(682985).K8)(() => e.getSafePaddingTopPx(0), [e]),
                                mobileBottomPadding: (0, n(571354).n)()
                            }
                        }();
                    return (0, i.jsxs)("div", {
                        style: {
                            paddingTop: w,
                            paddingBottom: k,
                            width: "100vw",
                            height: "100vh",
                            position: "fixed",
                            top: 0,
                            insetInlineStart: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            pointerEvents: e ? "auto" : "none",
                            ...D
                        },
                        ...C,
                        className: h,
                        ref: b,
                        children: [(0, i.jsx)(n(781036).B, {
                            backgroundStyle: _,
                            onDismiss: o
                        }), (0, i.jsx)(n(654979).A, {
                            tag: l,
                            skip: r,
                            visible: e,
                            ...S,
                            forceCompositeLayer: !0,
                            showCloseIcon: a,
                            onDismiss: o,
                            isWaxPaper: s,
                            isWash: u,
                            ariaLabel: d,
                            ariaLabelledBy: c,
                            ariaDescribedBy: p,
                            style: f,
                            children: m,
                            disableAnimation: r,
                            preventHideChildrenWhileOpening: g,
                            store: v
                        })]
                    })
                })
        },
        559096: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                loadLocalSubtree: () => s
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(803949), n(581454);
            var r = () => n(986939),
                a = () => n(430733),
                i = () => n(832375),
                o = () => n(247438);

            function s(e) {
                let {
                    environment: t,
                    blockId: s,
                    inMemoryRecordCache: l,
                    options: u
                } = e, d = t.currentUser.id, c = n(412951).RecordMap.create(), p = new Set, f = [{
                    pointer: {
                        table: i().evP,
                        id: s
                    },
                    parentId: "doesn't matter"
                }];
                for (; f.length > 0;) {
                    let e = f.shift();
                    if (!e || p.has(e.pointer.id)) continue;
                    let t = s === e.pointer.id,
                        m = function(e) {
                            let t, {
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: u,
                                currentUserId: d,
                                cursors: c,
                                cursor: p,
                                options: f,
                                isRootRequest: m
                            } = e;
                            return (0, n(496282).Yt)(s, i().evP) ? t = function(e) {
                                var t, s, l, u, d, c, p, f;
                                let {
                                    pointer: m,
                                    recordMap: g,
                                    inMemoryRecordCache: D,
                                    currentUserId: h,
                                    cursors: _,
                                    cursor: y,
                                    options: v,
                                    isRootRequest: b
                                } = e, C = D.getRecord({
                                    pointer: m,
                                    userId: h
                                }), S = null == C ? void 0 : C.value;
                                if (!S) return v.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: m
                                } : void 0;
                                let w = v.excludeCrdtData ? n(877308).ir(S) : S;
                                if (v.includeLegacyTransclusionBlockValues) {
                                    if (!b && w.parent_id !== y.parentId && !y.isBlockContentChild) return
                                } else if (!b && w.parent_id !== y.parentId) return;
                                if (w.type === n(955630).xd.externalObjectInstance && !v.allowCopyExternalObjectInstances) return {
                                    type: "error",
                                    reason: "encountered_external_object_instance",
                                    pointer: m
                                };
                                if (g.setValue(m, w), !v.skipNavigableChildren) {
                                    for (let e of n(993189).Bj6.fromBlock(w).getCollectionPointers()) {
                                        let t = D.getRecord({
                                            pointer: e,
                                            userId: h
                                        });
                                        if (t) {
                                            if ((null == (d = t.value) ? void 0 : d.parent_table) !== i().evP || (null == (c = t.value) ? void 0 : c.parent_id) !== w.id) continue
                                        } else {
                                            if (v.requireFullSubtree) return {
                                                type: "error",
                                                reason: "missing_record",
                                                pointer: e
                                            };
                                            continue
                                        }
                                        _.push({
                                            pointer: e,
                                            parentId: w.id
                                        })
                                    }
                                    if (w.view_ids)
                                        for (let e of w.view_ids) _.push({
                                            pointer: {
                                                table: i().Gy1,
                                                id: e,
                                                spaceId: w.space_id
                                            },
                                            parentId: w.id
                                        })
                                }
                                if (!v.skipBlockContent && (!v.skipTransclusionContainerChildren || "transclusion_container" !== w.type) && (!v.skipNavigableChildren || !(0, n(955630).$I)(w.type)))
                                    for (let e of n(993189).Bj6.fromBlock(w).getRenderableContentIds()) _.push({
                                        pointer: {
                                            table: i().evP,
                                            id: e
                                        },
                                        parentId: w.id,
                                        isBlockContentChild: !0
                                    });
                                for (let e of n(993189).Bj6.fromBlock(w).getNonContentChildren()) _.push({
                                    pointer: {
                                        table: i().evP,
                                        id: e
                                    },
                                    parentId: w.id,
                                    isBlockContentChild: !0
                                });
                                if (w.type === n(955630).xd.externalObjectInstance)
                                    for (let e of (null == (p = w.format) ? void 0 : p.related_external_object_uris_to_instance_ids) && Object.values(null == (f = w.format) ? void 0 : f.related_external_object_uris_to_instance_ids) || []) _.push({
                                        pointer: {
                                            table: i().evP,
                                            id: e,
                                            spaceId: w.space_id
                                        },
                                        parentId: w.id
                                    });
                                if (!v.skipNavigableChildren && w.properties)
                                    for (let e of Object.values(w.properties).filter(n(722371).O9))
                                        for (let t of e)
                                            for (let e of o().uPN(t)) {
                                                if (o().jIt(e)) {
                                                    let t = o().v55(e);
                                                    _.push({
                                                        pointer: {
                                                            table: i().evP,
                                                            id: t
                                                        },
                                                        parentId: w.id
                                                    })
                                                }
                                                if (o().sh$(e)) {
                                                    let t = o().cQR(e),
                                                        n = (0, a().lX)({
                                                            url: t,
                                                            baseUrl: r().A.domainBaseUrl,
                                                            publicDomainName: r().A.publicDomainName
                                                        });
                                                    n && _.push({
                                                        pointer: {
                                                            table: i().evP,
                                                            id: n
                                                        },
                                                        parentId: w.id
                                                    })
                                                }
                                                if (o().N53(e)) {
                                                    let t = o().T$c(e);
                                                    t && _.push({
                                                        pointer: {
                                                            table: i().evP,
                                                            id: t,
                                                            spaceId: w.space_id
                                                        },
                                                        parentId: w.id
                                                    })
                                                }
                                            }
                                if ("form" === w.type && null != (t = w.format) && t.form_layout_pointer && _.push({
                                        pointer: w.format.form_layout_pointer,
                                        parentId: w.id
                                    }), null != (s = w.format) && s.automation_id && _.push({
                                        pointer: {
                                            table: i().yBS,
                                            id: w.format.automation_id,
                                            spaceId: w.space_id
                                        },
                                        parentId: w.id
                                    }), null != (l = w.format) && l.workflow_id && _.push({
                                        pointer: {
                                            table: i().C0E,
                                            id: w.format.workflow_id,
                                            spaceId: w.space_id
                                        },
                                        parentId: w.id
                                    }), w.format && "database_agent_ids" in w.format && Array.isArray(w.format.database_agent_ids))
                                    for (let e of w.format.database_agent_ids) _.push({
                                        pointer: {
                                            table: i().C0E,
                                            id: e,
                                            spaceId: w.space_id
                                        },
                                        parentId: w.id
                                    });
                                null != (u = w.format) && u.ai_instructions_page_pointer && _.push({
                                    pointer: w.format.ai_instructions_page_pointer,
                                    parentId: w.id
                                })
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: u,
                                currentUserId: d,
                                cursors: c,
                                cursor: p,
                                options: f,
                                isRootRequest: m
                            }) : (0, n(496282).Yt)(s, i().VlP) ? t = function(e) {
                                var t, n;
                                let {
                                    pointer: r,
                                    recordMap: a,
                                    inMemoryRecordCache: o,
                                    currentUserId: s,
                                    cursors: l,
                                    cursor: u,
                                    options: d
                                } = e;
                                if (!d.allowCopyCollections) return {
                                    type: "error",
                                    reason: "encountered_collection",
                                    pointer: r
                                };
                                let c = o.getRecord({
                                    pointer: r,
                                    userId: s
                                });
                                if (!(null != c && c.value)) return d.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: r
                                } : void 0;
                                if (c.value.parent_id !== u.parentId) return;
                                let p = c.value;
                                for (let e of (a.setValue(r, p), o.forEachRecord({
                                        userId: s,
                                        fn: ({
                                            model: e
                                        }) => {
                                            e.table === i().evP && e && e.parent_id === r.id && e.alive && l.push({
                                                pointer: e.pointer,
                                                parentId: r.id
                                            })
                                        }
                                    }), (null == (t = p.format) ? void 0 : t.automation_ids) ? ? [])) l.push({
                                    pointer: {
                                        table: i().yBS,
                                        id: e,
                                        spaceId: p.space_id
                                    },
                                    parentId: p.id
                                });
                                p.schema && (Object.values(p.schema).forEach(e => {
                                    e && "button" === e.type && e.automation_id && l.push({
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
                                        l.push({
                                            pointer: {
                                                table: i().C0E,
                                                id: t,
                                                spaceId: p.space_id
                                            },
                                            parentId: u.parentId
                                        })
                                    }
                                })), null != (n = p.format) && n.layout_pointer && l.push({
                                    pointer: p.format.layout_pointer,
                                    parentId: p.id
                                })
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: u,
                                currentUserId: d,
                                cursors: c,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(s, i().Gy1) ? t = function(e) {
                                var t, n;
                                let {
                                    pointer: r,
                                    recordMap: a,
                                    inMemoryRecordCache: i,
                                    currentUserId: o,
                                    cursors: s,
                                    cursor: l,
                                    options: u
                                } = e, d = i.getRecord({
                                    pointer: r,
                                    userId: o
                                });
                                if (!(null != d && d.value)) return u.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: r
                                } : void 0;
                                (d.value.parent_id === l.parentId || l.skipParentIdCheck) && ("form_editor" === d.value.type && null != (t = d.value.format) && t.form_block_pointer && s.push({
                                    pointer: d.value.format.form_block_pointer,
                                    parentId: d.value.id
                                }), null != (n = d.value.format) && n.dashboard_layout_pointer && s.push({
                                    pointer: d.value.format.dashboard_layout_pointer,
                                    parentId: d.value.id
                                }), a.setValue(r, d.value))
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: u,
                                currentUserId: d,
                                cursors: c,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(s, i().yBS) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: r,
                                    currentUserId: a,
                                    cursors: o,
                                    cursor: s,
                                    options: l
                                } = e, u = r.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != u && u.value)) return l.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                if (u.value.parent_id === s.parentId)
                                    for (let e of (n.setValue(t, u.value), u.value.action_ids ? ? [])) o.push({
                                        pointer: {
                                            table: i().SC1,
                                            id: e,
                                            spaceId: u.value.space_id
                                        },
                                        parentId: u.value.id
                                    })
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: u,
                                currentUserId: d,
                                cursors: c,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(s, i().SC1) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: r,
                                    currentUserId: a,
                                    cursors: o,
                                    cursor: s,
                                    options: l
                                } = e, u = r.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != u && u.value)) return l.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: s.pointer
                                } : void 0;
                                if (u.value.parent_id === s.parentId)
                                    for (let e of (n.setValue(t, u.value), u.value.blocks ? ? [])) o.push({
                                        pointer: {
                                            table: i().evP,
                                            id: e,
                                            spaceId: u.value.space_id
                                        },
                                        parentId: u.value.id
                                    })
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: u,
                                currentUserId: d,
                                cursors: c,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(s, i().C0E) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: r,
                                    currentUserId: a,
                                    cursor: i,
                                    options: o
                                } = e, s = r.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != s && s.value)) return o.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i.pointer
                                } : void 0;
                                s.value.parent_id === i.parentId && n.setValue(t, s.value)
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: u,
                                currentUserId: d,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(s, i().zx0) ? t = function(e) {
                                var t;
                                let {
                                    pointer: r,
                                    recordMap: a,
                                    inMemoryRecordCache: o,
                                    currentUserId: s,
                                    cursors: l,
                                    options: u
                                } = e, d = o.getRecord({
                                    pointer: r,
                                    userId: s
                                }), c = null == d ? void 0 : d.value;
                                if (!c) return u.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: r
                                } : void 0;
                                let p = c.parent_id !== e.cursor.parentId ? { ...c,
                                        parent_id: e.cursor.parentId
                                    } : c,
                                    f = ((null == (t = p.modules) || null == (t = t.dashboard_layout_schema) ? void 0 : t.filter(e => "row" === e.type)) ? ? []).map(e => ({ ...e,
                                        modules: e.modules.filter(e => {
                                            var t;
                                            let r = o.getRecord({
                                                pointer: (0, n(17520).Q)({
                                                    collectionViewId: e.collection_view_id,
                                                    spaceId: p.space_id
                                                }),
                                                userId: s
                                            });
                                            return (null == r || null == (t = r.value) ? void 0 : t.type) !== "dashboard"
                                        })
                                    })).filter(e => e.modules.length > 0);
                                for (let e of (p = { ...p,
                                        modules: { ...p.modules,
                                            dashboard_layout_schema: f
                                        }
                                    }, a.setValue(r, p), n(993189).Bj6.fromValue(i().zx0, p).getBlockChildrenPointers())) l.push({
                                    pointer: e,
                                    parentId: r.id
                                });
                                let m = e => {
                                    let t = {
                                        id: e.collection_view_id,
                                        table: i().Gy1,
                                        spaceId: p.space_id
                                    };
                                    return l.push({
                                        pointer: t,
                                        parentId: r.id,
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
                                        l.push({
                                            pointer: t,
                                            parentId: r.id
                                        })
                                    } else if ("view" === e.type) m(e);
                                    else if ("row" === e.type)
                                        for (let t of e.modules) "view" === t.type && m(t)
                                })
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: u,
                                currentUserId: d,
                                cursors: c,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(s, i().lo9) && (t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: r,
                                    currentUserId: a,
                                    options: i
                                } = e, o = r.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != o && o.value)) return i.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                n.setValue(t, o.value)
                            }({
                                pointer: s,
                                recordMap: l,
                                inMemoryRecordCache: u,
                                currentUserId: d,
                                cursors: c,
                                cursor: p,
                                options: f
                            })), t
                        }({
                            pointer: e.pointer,
                            recordMap: c,
                            inMemoryRecordCache: l,
                            currentUserId: d,
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
                    recordMap: c
                }
            }
        },
        561599: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            var r = () => n(546605);
            class a extends r().Store {
                getInitialState() {
                    return {
                        openModals: new Set
                    }
                }
            }
            let i = new a,
                o = i;
            (0, n(202146).exposeDebugValue)("GlobalModalStore", i)
        },
        580899: (e, t, n) => {
            "use strict";
            e.exports = n.p + "7afb74ab9eed1a81.png"
        },
        584758: (e, t, n) => {
            "use strict";
            e.exports = n.p + "8cc12fd49d607b13.png"
        },
        588222: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                arrowChevronSingleRightFillSmallIcon: () => a,
                iconDefinition: () => r
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "5.54 2.94 5.81 10.11",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M11.13 8.53a.75.75 0 0 0 0-1.06L6.81 3.15a.75.75 0 0 0-1.06 1.06L9.54 8l-3.79 3.79a.75.75 0 0 0 1.06 1.06z"
                    })
                },
                a = (0, n(104509).wt)("arrowChevronSingleRightFillSmall", r, "fillSmall")
        },
        589563: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ah: () => u,
                Dk: () => o,
                Iv: () => l,
                SF: () => s,
                YO: () => p,
                _f: () => m,
                c_: () => a,
                dW: () => c,
                gW: () => i,
                sp: () => g,
                vN: () => d
            }), n(16280), n(944114), n(898992), n(354520), n(803949), n(581454), n(737550);
            var r = () => n(722371);

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

            function o(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_create",
                    properties: t
                })
            }

            function s(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_update",
                    properties: t
                })
            }

            function l(e, t) {
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

            function d(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_disable",
                    properties: t
                })
            }

            function c(e, t) {
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
                    getRecordModel: o,
                    spaceId: s,
                    value: l,
                    featureGates: u
                } = e;
                if ("formula" === l.type) {
                    if (!(0, r().O9)(l.value)) return;
                    let e = n(300441).Q.unwrapOr(a.parseFormulaInputToAst(l.value), void 0);
                    if (e) {
                        let r = a.addTypesToFormulaAST(e, {
                            handleDataRequest: (0, n(297493).zg)(o),
                            spaceId: s,
                            valueTypes: i,
                            featureGates: u
                        });
                        return { ...t.getFormulaAnalytics(e, {
                                getRecordModel: o,
                                typecheckContextValues: i
                            }),
                            formula_return_type: r.node.type,
                            redacted_formula: t.getRedactedFormulaAsStringSync(e, {
                                getRecordModel: o,
                                typecheckContextValues: i
                            })
                        }
                    }
                } else if ("simple" === l.type) {
                    if (!(0, r().O9)(l.value)) return;
                    return t.getSimpleFormulaAnalytics(l.value, {
                        getRecordModel: o,
                        typecheckContextValues: i
                    })
                } else(0, r().HB)(l.type)
            }

            function m(e) {
                let {
                    automationActionModel: t,
                    automationActionModels: a,
                    formulaAnalyticsModule: i,
                    formulasModule: o,
                    formulaTypecheckContextValues: s,
                    getRecordModel: l,
                    featureGates: u,
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
                            formulaTypecheckContextValues: o,
                            getRecordModel: s,
                            featureGates: l
                        } = e,
                        u = n.getConfig(),
                        d = [],
                        c = null == u ? void 0 : u.collection,
                        p = null == u ? void 0 : u.properties;
                    if ((0, r().O9)(c) && (0, r().O9)(p) && p.length > 0) {
                        let e = s(c),
                            g = null == e ? void 0 : e.getNormalizedSchema(s);
                        (0, r().O9)(g) && (d = p.map(e => {
                            var t;
                            return (null == (t = g[e]) ? void 0 : t.type) ? ? "unknown"
                        }));
                        let D = null == u ? void 0 : u.values;
                        if (i && (0, r().O9)(D))
                            for (let e of (t = [], p)) {
                                var m;
                                let r = null == (m = D[e]) ? void 0 : m.value;
                                if (!r) continue;
                                let u = f({
                                    formulaAnalyticsModule: a,
                                    formulasModule: i,
                                    getRecordModel: s,
                                    formulaTypecheckContextValues: o,
                                    spaceId: n.spaceId,
                                    value: r,
                                    featureGates: l
                                });
                                u && t.push(u)
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
                    formulasModule: o,
                    formulaTypecheckContextValues: s,
                    getRecordModel: l,
                    featureGates: u
                }) : t.isType("duplicate_blocks") ? {
                    automation_action_id: t.pointer.id,
                    type: "duplicate_blocks"
                } : t.isType("modal_confirmation") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: n,
                        formulasModule: a,
                        formulaTypecheckContextValues: i,
                        getRecordModel: o,
                        featureGates: s
                    } = e, l = t.getConfig(), u = [];
                    if (a && (0, r().O9)(l) && l.text) {
                        let e = f({
                            formulasModule: a,
                            formulaAnalyticsModule: n,
                            getRecordModel: o,
                            formulaTypecheckContextValues: i,
                            spaceId: t.spaceId,
                            value: l.text,
                            featureGates: s
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
                    formulaAnalyticsModule: i,
                    formulasModule: o,
                    formulaTypecheckContextValues: s,
                    getRecordModel: l,
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
                        automationActionModel: i,
                        formulaAnalyticsModule: o,
                        formulasModule: s,
                        formulaTypecheckContextValues: l,
                        getRecordModel: u,
                        featureGates: d,
                        simpleFormulasModule: c
                    } = e, p = {
                        automation_action_id: i.pointer.id,
                        messageCharacterCount: 0,
                        type: "send_in_app_notification"
                    }, m = i.getConfig();
                    if (!(0, r().O9)(m)) return p;
                    if ((0, r().O9)(m.target)) {
                        if ("formula" === m.target.type && (0, r().O9)(m.target.value)) {
                            if (p.targetData = {
                                    type: "formula",
                                    numUserFormulaTargets: (0, n(247438).Fbh)(m.target.value.value).length,
                                    numFormulaContextTargets: c.getReferencedContextValueIds(m.target.value).length
                                }, s) {
                                let e = f({
                                    formulasModule: s,
                                    formulaAnalyticsModule: o,
                                    getRecordModel: u,
                                    formulaTypecheckContextValues: l,
                                    spaceId: i.spaceId,
                                    value: m.target.value,
                                    featureGates: d
                                });
                                e && (p.formula_stats ? ? = [], p.formula_stats.push(e))
                            }
                        } else if ("property" === m.target.type && (0, r().O9)(m.target.propertyId) && (0, r().O9)(m.target.collectionPointer)) {
                            let e = u(m.target.collectionPointer),
                                t = null == e ? void 0 : e.getSchema();
                            (0, r().O9)(t) && (p.targetData = {
                                type: "property",
                                propertyType: null == (a = t[m.target.propertyId]) ? void 0 : a.type
                            })
                        }
                    }
                    if ((0, r().O9)(null == (t = m.notification_message) ? void 0 : t.value) && (p.messageCharacterCount = (0, n(247438).FAw)(m.notification_message.value), s)) {
                        let e = f({
                            formulasModule: s,
                            formulaAnalyticsModule: o,
                            getRecordModel: u,
                            formulaTypecheckContextValues: l,
                            spaceId: i.spaceId,
                            value: m.notification_message,
                            featureGates: d
                        });
                        e && (p.formula_stats ? ? = [], p.formula_stats.push(e))
                    }
                    return p
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: o,
                    formulaTypecheckContextValues: s,
                    getRecordModel: l,
                    featureGates: u,
                    simpleFormulasModule: d
                }) : t.isType("send_gmail_notification") ? function(e) {
                    var t, a, i, o, s, l, u;
                    let {
                        automationActionModel: d,
                        formulaAnalyticsModule: c,
                        formulasModule: p,
                        formulaTypecheckContextValues: m,
                        getRecordModel: g,
                        featureGates: D
                    } = e, h = d.getConfig();
                    if (!(0, r().O9)(h)) return {
                        automation_action_id: d.pointer.id,
                        fields: {},
                        recipient_domains: {},
                        type: "send_gmail_notification"
                    };
                    let _ = Object.fromEntries(Object.entries(h || {}).map(([e, t]) => {
                            if ((null == t ? void 0 : t.type) === "formula") {
                                var n;
                                return [e, !!(null == t || null == (n = t.value) ? void 0 : n.value)]
                            }
                            return (null == t ? void 0 : t.type) === "simple" ? [e, !!(null == t ? void 0 : t.value)] : [e, !!t]
                        })),
                        {
                            to: y,
                            cc: v,
                            bcc: b
                        } = h,
                        C = [...(null == y || null == (t = y.value) ? void 0 : t.value) || [], ...(null == v || null == (a = v.value) ? void 0 : a.value) || [], ...(null == b || null == (i = b.value) ? void 0 : i.value) || []],
                        S = [...(0, n(247438).Fbh)(C).map(e => g({
                            table: n(514214).oo,
                            id: e
                        })).map(e => null == e ? void 0 : e.email).filter(r().O9), ...(0, n(801109).C3)((0, n(247438).k4p)(C))],
                        w = (0, n(763230).Tr)(S.map(e => e.split("@")[1])),
                        k = [null == (o = h.to) ? void 0 : o.value, null == (s = h.cc) ? void 0 : s.value, null == (l = h.bcc) ? void 0 : l.value, null == (u = h.reply_to) ? void 0 : u.value, h.from_name, h.email_subject, h.email_body].map(e => {
                            if (p && (0, r().O9)(e)) return f({
                                formulaAnalyticsModule: c,
                                formulasModule: p,
                                getRecordModel: g,
                                formulaTypecheckContextValues: m,
                                spaceId: d.spaceId,
                                value: e,
                                featureGates: D
                            })
                        }).filter(r().O9);
                    return {
                        automation_action_id: d.pointer.id,
                        fields: _,
                        formula_stats: k,
                        recipient_domains: w,
                        type: "send_gmail_notification"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: o,
                    formulaTypecheckContextValues: s,
                    getRecordModel: l,
                    featureGates: u
                }) : t.isType("slack_notification") ? {
                    automation_action_id: t.pointer.id,
                    type: "slack_notification"
                } : t.isType("update_pages") ? function(e) {
                    let {
                        automationActionModel: t,
                        automationActionModels: a,
                        formulaAnalyticsModule: i,
                        formulasModule: o,
                        formulaTypecheckContextValues: s,
                        getRecordModel: l,
                        featureGates: u
                    } = e, d = t.getConfig(), c = [], p = [], m = [];
                    if ((0, r().O9)(d) && (0, r().O9)(d.target) && (0, r().O9)(d.properties) && d.properties.length > 0) {
                        let e;
                        if ("variable" === d.target.type) {
                            let t = (0, n(297493).y5)(d.target.id);
                            if ("action" === t.source) {
                                let t = (0, n(33529).y)({
                                    actionModels: a,
                                    id: d.target.id
                                }).collectionPointer;
                                if ((0, r().O9)(t)) {
                                    let n = l(t);
                                    e = null == n ? void 0 : n.getNormalizedSchema(l)
                                }
                            } else if ("global" === t.source && "button_page" === t.global) {
                                let t = (0, n(297493).IV)(s, d.target.id);
                                if ((null == t ? void 0 : t.type.type) === "block" && (0, r().O9)(t.type.collection)) {
                                    let n = l(t.type.collection);
                                    e = null == n ? void 0 : n.getNormalizedSchema(l)
                                }
                            } else throw Error("Failed loading property schema")
                        } else if ("collection" === d.target.type) {
                            let t = l(d.target.collection);
                            e = null == t ? void 0 : t.getNormalizedSchema(l)
                        }(0, r().O9)(e) && d.properties.forEach(n => {
                            let a = e[n];
                            if ((0, r().O9)(a) && (c.push(a.type), o && (0, r().O9)(d.values))) {
                                let e = d.values[n];
                                if ((0, r().O9)(e) && (p.push({
                                        type: a.type,
                                        operator: e.action
                                    }), e.value)) {
                                    let n = f({
                                        formulasModule: o,
                                        formulaAnalyticsModule: i,
                                        getRecordModel: l,
                                        formulaTypecheckContextValues: s,
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
                        property_types: c,
                        type: "update_pages"
                    }
                }({
                    automationActionModel: t,
                    automationActionModels: a,
                    formulaAnalyticsModule: i,
                    formulasModule: o,
                    formulaTypecheckContextValues: s,
                    getRecordModel: l,
                    featureGates: u
                }) : t.isType("define_variables") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: n,
                        formulasModule: a,
                        formulaTypecheckContextValues: i,
                        getRecordModel: o,
                        featureGates: s
                    } = e, l = t.getConfig(), u = [];
                    if (a && (0, r().O9)(l) && l.values) {
                        for (let e of Object.values(l.values))
                            if (e.value) {
                                let r = f({
                                    formulasModule: a,
                                    formulaAnalyticsModule: n,
                                    getRecordModel: o,
                                    formulaTypecheckContextValues: i,
                                    spaceId: t.spaceId,
                                    value: e.value,
                                    featureGates: s
                                });
                                r && u.push(r)
                            }
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        formula_stats: u,
                        type: "define_variables"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: o,
                    formulaTypecheckContextValues: s,
                    getRecordModel: l,
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
                } : void(0, r().HB)(t)
            }

            function g(e) {
                var t, a;
                let i, o, s, {
                        automationModel: l,
                        builderType: u = "sidebar",
                        formulaAnalyticsModule: d,
                        formulasModule: c,
                        formulaTypecheckContextValues: p,
                        getRecordModel: f,
                        featureGates: g,
                        simpleFormulasModule: D,
                        source: h
                    } = e,
                    _ = [],
                    y = l.getActionPointers().map(e => f(e)).filter(r().O9);
                for (let e of l.getActionPointers()) {
                    let t = f(e);
                    (0, r().O9)(t) && _.push(m({
                        automationActionModel: t,
                        automationActionModels: y,
                        formulaAnalyticsModule: d,
                        formulasModule: c,
                        formulaTypecheckContextValues: p,
                        getRecordModel: f,
                        featureGates: g,
                        simpleFormulasModule: D
                    }))
                }
                let v = [];
                if (l.isEventType()) {
                    let e = l.getEventConfiguration(),
                        a = f(l.getParentPointer());
                    i = l.getParentId();
                    let u = l.getEventConfiguration();
                    if ((null == (t = u.source) ? void 0 : t.type) === "collection_view") {
                        let e = f(u.source.pointer);
                        (null == e ? void 0 : e.parent_table) === n(682956).ev && (s = null == e ? void 0 : e.parent_id), o = null == u ? void 0 : u.source.pointer.id
                    }
                    let d = null == a ? void 0 : a.getNormalizedSchema(f);
                    if ((0, r().O9)(d)) {
                        let {
                            pagesAdded: t,
                            pagePropertiesEdited: n
                        } = e;
                        if (t && v.push({
                                type: "page"
                            }), "any" === n.type) v.push({
                            condition: "any",
                            type: "property"
                        });
                        else if ("none" === n.type) v.push({
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
                                (0, r().O9)(i) && (t.push({
                                    type: i,
                                    operator: e.filter.operator
                                }), a.push(i))
                            }), v.push({
                                condition: n.type,
                                property_configs: t,
                                property_types: a,
                                type: "property"
                            })
                        }
                    }
                } else l.isButtonType() ? v.push({
                    type: "button"
                }) : l.isRecurrenceType() ? v.push({
                    type: "recurrence",
                    frequency: null == (a = l.getTrigger().recurrence) ? void 0 : a.frequency
                }) : (0, r().HB)(l);
                return {
                    automation_actions: _,
                    automation_id: l.id,
                    automation_triggers: v,
                    collection_id: i,
                    collection_view_id: o,
                    collection_view_block_id: s,
                    builder_type: u,
                    source: h
                }
            }
        },
        595413: (e, t, n) => {
            "use strict";
            n.d(t, {
                f: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.95 1.94 12.1 11.57",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 1.95c-.27 0-.51.174-.594.431l-1.14 3.51H2.574a.625.625 0 0 0-.367 1.13l2.985 2.17-1.14 3.509a.625.625 0 0 0 .962.699L8 11.229l2.986 2.17a.625.625 0 0 0 .961-.699l-1.14-3.51 2.985-2.169a.625.625 0 0 0-.367-1.13h-3.69l-1.14-3.51A.625.625 0 0 0 8 1.95m-.686 4.759L8 4.597l.686 2.112a.625.625 0 0 0 .595.432h2.22L9.705 8.446a.625.625 0 0 0-.227.699l.686 2.112-1.797-1.305a.625.625 0 0 0-.734 0l-1.797 1.305.686-2.112a.625.625 0 0 0-.227-.699L4.5 7.141h2.22a.63.63 0 0 0 .595-.432"
                    })
                },
                a = (0, n(104509).wt)("starSmall", r, "small")
        },
        605263: (e, t, n) => {
            "use strict";
            n.d(t, {
                K4: () => l,
                To: () => p,
                fi: () => u,
                q8: () => s,
                u: () => o
            }), n(16280), n(18107), n(967357);
            var r = n(296540),
                a = n(474848);
            let i = (0, r.createContext)({
                ancestors: []
            });

            function o(e) {
                let {
                    automationStore: t,
                    children: o,
                    contextType: s,
                    collectionStore: l,
                    collectionSettingsStore: u,
                    collectionViewBlockStore: p,
                    collectionViewStore: f,
                    enableExistenceGuarantees: m
                } = e, g = (0, n(533992).v3)(), D = (0, n(109939).tz)(), {
                    value: h
                } = (0, n(815048).fJ)(n(864850).T.formulas), {
                    value: _
                } = (0, n(815048).fJ)(n(879267).QV.automationTypecheck), y = (0, n(470569).o)(t), v = (0, n(67499).S)(), b = (0, n(682985).K8)(() => h ? _ ? function(e) {
                    let {
                        environment: t,
                        automationStore: r,
                        automationTypecheckModule: a,
                        contextType: i,
                        formulasModule: o,
                        intl: s,
                        subscriptionInfo: l,
                        pageStore: u,
                        enableExistenceGuarantees: p
                    } = e, f = p ? d.get(r) : d.get(r) ? ? c.get(r);
                    if (f) return f;
                    let m = new(n(345426)).ComputedStore(() => {
                        let e = r.getTriggerType(),
                            d = i;
                        return (0, n(722371).O9)(e) && (0, n(432705).x2)(e) && (d = (0, n(432705).H8)(e)), (0, n(100197).Z)({
                            environment: t,
                            automationStore: r,
                            automationTypecheckModule: a,
                            contextType: d,
                            formulasModule: o,
                            intl: s,
                            subscriptionInfo: l,
                            pageStore: u,
                            enableExistenceGuarantees: p
                        })
                    }, {
                        debugName: "automationContextTypecheckResultCachedStore"
                    });
                    return p && d.set(r, m), c.set(r, m), m
                }({
                    automationStore: t,
                    automationTypecheckModule: _,
                    contextType: s,
                    environment: g,
                    formulasModule: h,
                    intl: D,
                    subscriptionInfo: y,
                    pageStore: "button_block" === s ? null == v ? void 0 : v.pageStore : void 0,
                    enableExistenceGuarantees: m
                }).state : {
                    error: new(n(600005)).N9("Missing automation dependency")
                } : {
                    error: new(n(600005)).N9("Missing formulas dependency")
                }, [g, t, _, s, h, D, y, null == v ? void 0 : v.pageStore, m]), C = (0, r.useContext)(i), S = (0, r.useMemo)(() => 0 === C.ancestors.length ? [{
                    automationStore: t,
                    contextType: s,
                    typecheckResult: b,
                    collectionStore: l,
                    collectionSettingsStore: u,
                    collectionViewBlockStore: p,
                    collectionViewStore: f
                }] : [...C.ancestors, {
                    automationStore: t,
                    contextType: s,
                    typecheckResult: b,
                    collectionStore: l,
                    collectionSettingsStore: u,
                    collectionViewBlockStore: p,
                    collectionViewStore: f
                }], [C, t, s, b, l, u, p, f]), w = (0, r.useMemo)(() => ({
                    ancestors: S,
                    enableExistenceGuarantees: m
                }), [S, m]);
                return (0, a.jsx)(i.Provider, {
                    value: w,
                    children: o
                })
            }

            function s() {
                let e = (0, r.useContext)(i).ancestors.at(-1);
                if (!e) throw Error("No automation context found!");
                return e
            }

            function l() {
                return (0, r.useContext)(i).ancestors.at(-1)
            }

            function u() {
                return (0, r.useContext)(i).enableExistenceGuarantees
            }
            i.displayName = "AutomationContext", i.Consumer;
            let d = new WeakMap,
                c = new WeakMap;

            function p(e) {
                var t;
                return null == (t = d.get(e)) ? void 0 : t.state
            }
        },
        607372: (e, t, n) => {
            "use strict";
            n.d(t, {
                Mc: () => a,
                NM: () => r,
                Nf: () => o,
                dx: () => i
            }), n(16280), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(672577), n(737550);
            let r = new Set(["sites_custom_hostnames_add_on_monthly_usd_4", "sites_custom_hostnames_add_on_yearly_usd_36"]),
                a = ["ai_add_on_employee_discount_monthly", "ai_add_on_employee_discount_yearly"],
                i = ["ai_add_on_standard_sales_assisted", "ai_add_on_standard_sales_assisted_eur", "ai_add_on_standard_sales_assisted_gbp", "ai_add_on_standard_sales_assisted_jpy", "ai_add_on_standard_sales_assisted_krw", "ai_add_on_employee_discount_monthly", "ai_add_on_employee_discount_yearly", "ai_add_on_marketing_discount_monthly", "ai_add_on_marketing_discount_yearly", "sites_custom_hostnames_add_on_sales_assisted_gbp", "sites_custom_hostnames_add_on_sales_assisted_usd", "sites_custom_hostnames_add_on_sales_assisted_eur", "sites_custom_hostnames_add_on_sales_assisted_jpy", "sites_custom_hostnames_add_on_sales_assisted_krw", "ai_add_on_standard_trial_monthly_usd", "ai_add_on_standard_trial_yearly_usd", "ai_add_on_standard_trial_monthly_eur", "ai_add_on_standard_trial_yearly_eur", "ai_add_on_standard_trial_monthly_gbp", "ai_add_on_standard_trial_yearly_gbp", "ai_add_on_standard_trial_monthly_jpy", "ai_add_on_standard_trial_yearly_jpy", "ai_add_on_standard_trial_monthly_krw", "ai_add_on_standard_trial_yearly_krw", "free_ai_credit_pack_100_monthly", "ai_add_on_standard_monthly_10", "ai_add_on_standard_monthly_eur", "ai_add_on_standard_monthly_gbp", "ai_add_on_standard_monthly_jpy", "ai_add_on_standard_monthly_krw", "ai_add_on_standard_yearly_96", "ai_add_on_standard_yearly_eur", "ai_add_on_standard_yearly_gbp", "ai_add_on_standard_yearly_jpy", "ai_add_on_standard_yearly_krw", "sites_custom_hostnames_add_on_monthly_usd", "sites_custom_hostnames_add_on_yearly_usd", "sites_custom_hostnames_add_on_monthly_usd_4", "sites_custom_hostnames_add_on_yearly_usd_36", "sites_custom_hostnames_add_on_monthly_eur", "sites_custom_hostnames_add_on_yearly_eur", "sites_custom_hostnames_add_on_monthly_gbp", "sites_custom_hostnames_add_on_yearly_gbp", "sites_custom_hostnames_add_on_monthly_jpy", "sites_custom_hostnames_add_on_yearly_jpy", "sites_custom_hostnames_add_on_monthly_krw", "sites_custom_hostnames_add_on_yearly_krw", "ai_credit_pack_100_monthly_usd_revised", "ai_credit_pack_100_monthly_eur", "ai_credit_pack_100_monthly_gbp", "ai_credit_pack_100_monthly_jpy", "ai_credit_pack_100_monthly_krw"];

            function o(e) {
                return e === n(101787)._D_
            }
        },
        609328: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => i
            }), n(944114), n(296540);
            var r = n(474848);
            let a = (0, n(109939).YK)({
                errorStacktraceCopied: {
                    defaultMessage: "Stacktrace copied to clipboard",
                    id: "errorLabel.moreInfo.stacktrace.toast.label"
                }
            });

            function i({
                environment: e,
                title: t,
                ...o
            }) {
                var s, l, u;
                let d = [],
                    c = null == (s = o.error) ? void 0 : s.stack;
                if (c) {
                    let t = globalThis.Meticulous;
                    null != t && t.isRunningAsTest && (null == (l = t.replay) || null == (u = l.terminate) || u.call(l)), d.push({
                        label: "Copy stacktrace",
                        ariaLabel: "Copy error stacktrace to clipboard",
                        onClick: async () => {
                            (await (0, n(969899).Nu)())({
                                environment: e,
                                stringValue: c,
                                htmlValue: `<meta charset='utf-8'><pre><code class="language-bash">${c}
		</code></pre>`,
                                copiedMessage: a.errorStacktraceCopied
                            })
                        }
                    })
                }
                d.push({
                    buttonType: "solid",
                    color: "blue",
                    label: (0, r.jsx)(n(109939).sA, { ...n(647095)._0.dismissButtonLabel
                    }),
                    onAccept: n(763230).D_
                }), n(647095).ui({
                    message: t,
                    description: (0, r.jsx)(n(149795).dD, { ...o
                    }),
                    allowCopy: !0,
                    showCancel: !1,
                    keepFocus: !1,
                    mode: "wide",
                    items: d
                })
            }
        },
        616922: (e, t, n) => {
            "use strict";
            n.d(t, {
                eQ: () => f,
                hJ: () => S,
                Ay: () => m,
                Uo: () => h,
                XE: () => b
            }), n(944114), n(898992), n(823215), n(581454);
            var r = n(296540);
            let a = new(n(815048)).O2("AIMNLiveCollabCallout", async () => await n.e(35920).then(n.bind(n, 966085))),
                i = (0, n(815048)._h)(a, e => e.AIMNLiveCollabCallout);
            var o = () => n(225476);
            let s = function(e) {
                    let t = (0, n(533992).v3)(),
                        a = (0, r.useRef)(),
                        i = (0, n(396805).T)(),
                        o = (0, r.useCallback)(async () => {
                            if (await n(941701).transactionQueue.awaitRecordTransaction(e.blockStore.pointer), !i.current) return;
                            let r = (0, n(568479).Ws)(e.blockStore.id);
                            a.current = n(48091).Ay.addListener({
                                key: r,
                                authorizationToken: void 0,
                                listener: n(381453).nF(() => n(469589).updatePageVisits(t, {
                                    blockStore: e.blockStore,
                                    pageVisitStore: e.pageVisitStore,
                                    incremental: !0,
                                    limit: e.limit
                                }), 1e3),
                                subscriptionId: void 0
                            })
                        }, [t, i, e.blockStore, e.limit, e.pageVisitStore]),
                        s = (0, r.useCallback)(() => {
                            a.current && (n(48091).Ay.removeListener(a.current), a.current = void 0)
                        }, []);
                    return (0, r.useEffect)(() => (o(), s), [o, s]), null
                },
                l = new(n(815048)).O2("AvatarHoverCard", async () => await Promise.all([n.e(21969), n.e(47414), n.e(98821), n.e(77470), n.e(6608)]).then(n.bind(n, 691631))),
                u = (0, n(815048)._h)(l, e => e.AvatarHoverCard),
                d = new(n(815048)).O2("MoreViewersHoverCard", async () => await n.e(46118).then(n.bind(n, 479676))),
                c = (0, n(815048)._h)(d, e => e.MoreViewersHoverCard);
            var p = n(474848);
            let f = 22,
                m = function({
                    pageVisitStore: e,
                    presenceStore: t,
                    rootStore: r,
                    maxUsers: a
                }) {
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(n(315144).a, {
                            rootStore: r
                        }), (0, p.jsx)(S, {
                            rootStore: r,
                            pageVisitStore: e,
                            presenceStore: t,
                            maxUsers: a,
                            isShowingInFeed: !1
                        }), (0, p.jsx)(s, {
                            blockStore: r,
                            pageVisitStore: e,
                            limit: 1 + (a ? ? 5) + 25
                        })]
                    })
                };

            function g(e) {
                return n(381453).Ul(e, e => e.activityTimestampNearestMinuteMs)
            }

            function D(e, t) {
                return n(807825).L.createChildStore(t, {
                    table: n(832375).oo9,
                    id: e
                })
            }

            function h(e) {
                let {
                    environment: t,
                    isShowingTabBar: r,
                    isShowingInFeed: a
                } = e;
                return { ...(0, n(1249).g)({
                        noDrag: t.device.isElectron && !r
                    }),
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    flexDirection: "row-reverse",
                    marginInlineStart: 8,
                    paddingInlineEnd: 6,
                    transform: "translateZ(0)",
                    ...a && {
                        maxHeight: 54,
                        paddingBottom: 12
                    }
                }
            }

            function _({
                hiddenUsers: e,
                hiddenUsersCount: t,
                hasMore: n,
                rootStore: r,
                environment: a
            }) {
                return (0, p.jsx)(c, {
                    trigger: (0, p.jsx)(v, {
                        hiddenUsersCount: t,
                        environment: a,
                        rootStore: r
                    }),
                    viewers: e,
                    totalCount: t,
                    rootStore: r
                })
            }
            let y = {
                paddingInline: 8,
                marginInlineStart: 4,
                marginInlineEnd: -10
            };

            function v({
                hiddenUsersCount: e,
                environment: t,
                rootStore: a
            }) {
                let i = (0, r.useCallback)(() => {
                    (0, n(418001).j)({
                        environment: t,
                        blockStore: a,
                        tabToOpen: n(449473).tF.Updates,
                        from: "more_menu"
                    }), n(449473).B8.setState({ ...n(449473).B8.state,
                        updatesSubTab: n(449473).VE.Analytics
                    })
                }, [t, a]);
                return (0, p.jsx)(n(988022).p, {
                    style: y,
                    size: "sm",
                    shape: "pill",
                    colorPalette: "gray",
                    onClick: i,
                    children: (0, p.jsx)(n(109939).sA, {
                        defaultMessage: "{hiddenUsersCount, plural, one {+{hiddenUsersCount}} other {+{hiddenUsersCount}}}",
                        id: "topbar.presenceIndicator.hiddenUsers.otherCount.message",
                        values: {
                            hiddenUsersCount: e
                        }
                    })
                })
            }

            function b(e, t) {
                return (0, n(960253).I)(() => {
                    let r = {
                            width: f,
                            height: f,
                            borderRadius: f
                        },
                        a = e(n(632079).Tj);
                    return {
                        button: {
                            transition: "all 0.2s ease",
                            transform: "scale(1)"
                        },
                        buttonHovered: {
                            transform: "scale(1.15)",
                            background: "none"
                        },
                        buttonPressed: {
                            transform: "scale(0.9)",
                            background: "none"
                        },
                        uiUserAvatarStyles: { ...r
                        },
                        avatarInnerOutline: { ...r,
                            outlineStyle: "solid",
                            outlineColor: n(632079).Tj.UIUserAvatarInnerOutline,
                            outlineWidth: .5,
                            outlineOffset: -.5
                        },
                        avatarBorder: t ? { ...r,
                            outlineStyle: "solid",
                            outlineColor: a,
                            outlineWidth: 1.5,
                            outlineOffset: -.5
                        } : {},
                        avatarOuterOutline: { ...r,
                            outlineStyle: "solid",
                            outlineColor: t ? n(632079).Tj.background.primary : n(632079).Tj.UIUserAvatarIdleOutline,
                            outlineWidth: .5,
                            outlineOffset: +!!t,
                            backgroundColor: n(632079).Tj.background.primary,
                            marginInlineEnd: -6,
                            position: "relative"
                        },
                        initialColor: {
                            color: t ? a : n(632079).Tj.icon.secondary
                        }
                    }
                }, [e, t])
            }

            function C(e) {
                let {
                    userData: t,
                    rootStore: a,
                    isShowingInFeed: i = !1
                } = e, s = (0, n(533992).v3)(), {
                    userId: l
                } = t, d = (0, o().dp)(s, t), c = (0, n(514214).MF)(l), {
                    userStore: m,
                    showAvatar: g
                } = (0, n(682985).K8)(() => {
                    let e = D(l, a);
                    return {
                        userStore: e,
                        showAvatar: (e.isDefined() || c) && !e.getIsSuspended()
                    }
                }, [l, a, c]), h = (0, n(682985).K8)(() => a.getSpaceStore(), [a]), _ = b((0, r.useCallback)(e => (0, n(514214).MF)(l) ? n(632079).Tj.icon.secondary : l === s.currentUser.id ? n(632079).Tj.border.accentPrimary : (0, n(632079).Nq)(l, e), [s.currentUser.id, l]), d);
                if (!g) return null;
                let y = (0, p.jsx)("div", {
                        style: _.avatarOuterOutline,
                        children: (0, p.jsx)("div", {
                            style: _.avatarBorder,
                            children: (0, p.jsx)(n(321753).A, {
                                iconStyle: _.avatarInnerOutline,
                                userStore: c ? n(268033).px : m,
                                style: _.uiUserAvatarStyles,
                                isOffline: !d,
                                size: f,
                                avatarShouldShowShadow: !i,
                                initialOverrideStyle: _.initialColor
                            })
                        })
                    }),
                    v = d && t.blockId ? (0, p.jsx)(n(64960).Ay, {
                        onClick: () => (0, n(250717).B)([t.blockId ? ? ""], !0, s),
                        style: _.button,
                        hoveredStyle: _.buttonHovered,
                        pressedStyle: _.buttonPressed,
                        children: y
                    }) : y;
                if (i || !s.currentUser.id) return v;
                let C = function({
                    userData: e,
                    isPresent: t,
                    currentUserId: r,
                    userId: a,
                    isShowingInFeed: i
                }) {
                    if (r !== a) {
                        if (t) return e.blockId && !i ? (0, p.jsx)(n(109939).sA, {
                            defaultMessage: "Viewing now. Click to see where they are.",
                            id: "topbar.presenceIndicator.viewingNowWithLocation.tooltip"
                        }) : (0, p.jsx)(n(109939).sA, {
                            defaultMessage: "Viewing now",
                            id: "topbar.presenceIndicator.viewingNow.tooltip"
                        });
                        if (e.activityTimestampNearestMinuteMs) return (0, p.jsx)(n(109939).sA, {
                            defaultMessage: "Last viewed {timeFromNow}",
                            id: "topbar.presenceIndicator.lastViewedTime.tooltip",
                            values: {
                                timeFromNow: (0, n(850640).v9)(Math.min(e.activityTimestampNearestMinuteMs, Date.now()), n(849917).locale)
                            }
                        })
                    }
                }({
                    userData: t,
                    isPresent: d,
                    currentUserId: s.currentUser.id,
                    userId: l,
                    isShowingInFeed: i
                });
                return (0, p.jsx)(u, {
                    trigger: v,
                    userStore: m,
                    header: C,
                    spaceStore: h
                })
            }

            function S(e) {
                let {
                    rootStore: t,
                    pageVisitStore: a,
                    presenceStore: s,
                    maxUsers: l,
                    isShowingInFeed: u
                } = e, d = (0, n(533992).v3)(), c = d.currentUser.id, f = (0, n(682985).K8)(() => {
                    let e = d.currentUser.id;
                    if (!e) return;
                    let t = u || (0, o().xm)(s) ? (0, o().PZ)({
                            pageVisitStore: a,
                            presenceStore: s
                        }) : [],
                        n = (null == a ? void 0 : a.state.totalCount) ? ? t.length,
                        r = [],
                        i = [];
                    for (let a of t)
                        if (a.userId === e) {
                            n--;
                            continue
                        } else(0, o().dp)(d, a) ? r.push(a) : i.push(a);
                    let c = [...g(r).reverse(), ...g(i).reverse()],
                        p = (l ? ? 5) - 1;
                    return {
                        visibleUsers: c.slice(0, p),
                        hiddenUsers: c.slice(p),
                        totalCount: n,
                        hasMore: !!(null == a ? void 0 : a.state.hasMore)
                    }
                }, [a, s, d, u, l], {
                    equalityFn: n(381453).n4
                }), {
                    visibleUsers: m,
                    hiddenUsers: y,
                    hiddenUsersCount: v,
                    hasMoreHiddenUsers: b,
                    isEveryUserStoreReady: S
                } = (0, n(682985).K8)(() => {
                    if (!c) return {};
                    let {
                        visibleUsers: e = [],
                        hiddenUsers: r = []
                    } = f ? ? {}, a = [c, ...e.map(e => e.userId), ...r.map(e => e.userId)].map(e => D(e, t));
                    return {
                        visibleUsers: e,
                        hiddenUsers: r,
                        hiddenUsersCount: Number(null == f ? void 0 : f.totalCount) - e.length,
                        hasMoreHiddenUsers: !!(null == f ? void 0 : f.hasMore),
                        isEveryUserStoreReady: a.every(e => e.isReady() || (0, n(514214).MF)(e.id))
                    }
                }, [c, f, t]), w = (0, r.useRef)(null), k = (0, n(682985).K8)(() => n(218744).default.getEligibleGroup({
                    experimentId: "adoption_aimn_live_collab_discovery_nudge_video",
                    disableExposureLogging: !0
                }), []), x = (0, n(682985).O$)(n(584257).b), F = (0, n(314331).n)(t), I = !(0, n(682985).O$)(n(205885).e);
                if (!c || !f || !S || I || c !== t.userId) return null;
                if (0 === m.length && 0 === y.length) return F ? (0, p.jsx)("div", {
                    style: h({
                        environment: d,
                        isShowingTabBar: x,
                        isShowingInFeed: u
                    }),
                    children: (0, p.jsx)(n(346899).h, {
                        enableClickToScroll: !0,
                        rootStore: t
                    })
                }) : null; {
                    let e = [...m];
                    return e.reverse(), (0, p.jsxs)("div", {
                        ref: w,
                        style: h({
                            environment: d,
                            isShowingTabBar: x,
                            isShowingInFeed: u
                        }),
                        children: [v > 0 ? (0, p.jsx)(_, {
                            rootStore: t,
                            hiddenUsers: y,
                            hiddenUsersCount: v,
                            hasMore: b,
                            environment: d
                        }) : void 0, e.map(e => (0, p.jsx)(C, {
                            userData: e,
                            rootStore: t
                        }, e.userId)), u ? void 0 : (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)(C, {
                                rootStore: t,
                                userData: {
                                    userId: c,
                                    present: !0
                                }
                            }), (0, p.jsx)(n(346899).h, {
                                enableClickToScroll: !0,
                                rootStore: t
                            }), void 0 !== k ? (0, p.jsx)(i, {
                                origin: w
                            }) : void 0]
                        })]
                    })
                }
            }
        },
        620842: (e, t, n) => {
            "use strict";
            e.exports = n.p + "14d5b1e86af73b85.png"
        },
        623644: (e, t, n) => {
            "use strict";
            n.d(t, {
                NX: () => a,
                gp: () => o,
                h9: () => i,
                i6: () => l,
                rj: () => s,
                tw: () => r
            }), n(581454);
            let r = ["2021-05-11", "2021-05-13", "2021-08-16", "2022-02-22", "2022-06-28", "2025-09-03", "2026-03-11"],
                a = ["2022-06-28", "2025-09-03", "2026-03-11"],
                i = "2026-03-11",
                o = "2022-06-28",
                s = "2026-03-11";
            n(489561).CA.literals(...r);
            let l = "2025-09-03"
        },
        625031: (e, t, n) => {
            "use strict";
            e.exports = n.p + "db48f4d686b63eb9.png"
        },
        641085: (e, t, n) => {
            "use strict";
            e.exports = n.p + "85fb8ca2230ff394.png"
        },
        652134: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                aiFaceSmallIcon: () => i,
                iconDefinition: () => a
            }), n(296540);
            var r = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.89 1.43 11.63 12.81",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M7.204 1.93a3.47 3.47 0 0 0-4.097.39.625.625 0 1 0 .834.931 2.22 2.22 0 0 1 3.16.202.625.625 0 0 0 .944-.818 3.5 3.5 0 0 0-.84-.705m6.018.976A3.47 3.47 0 0 0 8.463 4.1l-5.077 8.476a.625.625 0 0 0 .437.938l4.41.715a.625.625 0 0 0 .2-1.234l-3.5-.568 4.602-7.685a2.22 2.22 0 0 1 3.822.02.625.625 0 1 0 1.08-.63 3.46 3.46 0 0 0-1.214-1.226m-7.83 2.105a1.094 1.094 0 1 0-.35 2.159 1.094 1.094 0 0 0 .35-2.159"
                        }), (0, r.jsx)("path", {
                            d: "M10.762 5.881a1.093 1.093 0 1 0-.35 2.159 1.093 1.093 0 0 0 .35-2.159"
                        })]
                    })
                },
                i = (0, n(104509).wt)("aiFaceSmall", a, "small")
        },
        659262: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => a,
                y: () => i
            });
            let r = Number(n(627179).Xb);

            function a() {
                var e, t;
                if (n(205885).A.state.online) {
                    if (null != (e = n(420153).A.state.connectionError) && e.startTime && Date.now() - (null == (t = n(420153).A.state.connectionError) ? void 0 : t.startTime) < r) return;
                    return n(420153).A.state.connectionError
                }
            }

            function i() {
                return !!a()
            }
        },
        661044: (e, t, n) => {
            "use strict";

            function r(e, t = !0) {
                t && function(e, t) {
                    if ((0, n(730994).Ku)(e), ("assistantCompletionPopup" === t.type || "agentCompletionPopup" === t.type) && ("results" === t.stage || "initialPrompt" === t.stage) && ("textSelection" === t.context.type || "cursor" === t.context.type)) {
                        let r = t.context.textSelection;
                        n(374176).default.afterNextFlush(() => {
                            (0, n(726923).setMultiSelection)({
                                multiSelection: r
                            }),
                            function(e) {
                                let {
                                    multiSelection: t,
                                    environment: r
                                } = e;
                                if (void 0 === t.start || void 0 === t.end || !Number.isFinite(t.start.index) || !Number.isFinite(t.end.index)) return;
                                let a = n(521595).n.findNodeFromStore(t.start.store),
                                    i = n(521595).n.findNodeFromStore(t.end.store);
                                if (!a || !i) return;
                                let o = (0, n(536614).vA)(a, t.start.index),
                                    s = (0, n(536614).vA)(i, t.end.index),
                                    l = document.createRange();
                                l.setStart(o.container, o.offset), l.setEnd(s.container, s.offset), n(239134).set(l, r.device)
                            }({
                                multiSelection: r,
                                environment: e
                            })
                        })
                    }
                }(e, n(304636).default.state), n(304636).default.setState({
                    type: "closed"
                })
            }
            async function a(e) {
                let {
                    environment: t,
                    from: r,
                    forceAgentWriter: a
                } = e, {
                    context: i,
                    prefilledValue: o,
                    sessionId: s
                } = e, {
                    assistantDependency: l
                } = await Promise.resolve().then(n.bind(n, 310639)), u = await l.load();
                if (!await u.assistantMenuActions.closeAssistantRightHandSideMenu({
                        environment: t
                    })) return;
                let d = {
                    type: "closed"
                };
                if ("closed" === n(304636).default.state.type && (i || (i = (0, n(420459).G4)()), i))
                    if (a || (0, n(828294).a)("agent_writer")) d = {
                        type: "agentCompletionPopup",
                        stage: "initialPrompt",
                        context: i,
                        from: r,
                        prefilledValue: e.prefilledTextValue ? ? (0, n(247438).x9d)(o ? ? ""),
                        pendingSkill: e.agentPrebuiltPromptType,
                        autoSubmit: e.autoSubmit,
                        onAccept: e.onAccept,
                        acceptButtonTooltipOverride: e.acceptButtonTooltipOverride
                    };
                    else {
                        var c;
                        o || (o = ""), s || (s = (0, n(818963).gC)()), d = {
                            type: "assistantCompletionPopup",
                            stage: "initialPrompt",
                            context: i,
                            from: r,
                            prefilledValue: o,
                            sessionId: s,
                            loading: !1,
                            hasErrored: !1
                        };
                        let e = (0, n(974410).f)(null == (c = i) ? void 0 : c.currentPage);
                        e && t.api.callApi({
                            eventName: "publishAiSession",
                            environment: t,
                            data: {
                                inference_type: "writer",
                                spaceId: e.id,
                                id: s,
                                metadata: {
                                    from: r
                                }
                            }
                        })
                    }
                n(304636).default.setState(d),
                    function(e) {
                        let {
                            environment: t,
                            promptForAnalytics: r
                        } = e, {
                            state: a
                        } = n(304636).default;
                        if ("assistantCompletionPopup" === a.type && "results" !== a.stage) {
                            n(218744).default.checkGate({
                                gateName: "mobile_assistant_prevent_clear_selection"
                            }) || (0, n(525779).clear)({
                                environment: t
                            });
                            let e = a.sessionId,
                                i = n(838448).default.getSessionContext(e);
                            n(942806).trackAICompletionPopupOpen(t, {
                                session_id: a.sessionId,
                                prompt_key: (null == r ? void 0 : r.key) ? ? "unknown",
                                from: a.from,
                                sessionContext: i
                            }), (0, n(259413).V)({
                                dismissed: !1,
                                environment: t,
                                trackCreateBlock: n(549960).vH
                            })
                        }
                    }(e)
            }

            function i(e) {
                let {
                    environment: t,
                    prefilledValue: r,
                    from: i
                } = e, o = (0, n(420459).gu)();
                o && a({
                    environment: t,
                    from: i ? ? "page_menu",
                    sessionId: n(92513).JW(),
                    context: o,
                    prefilledValue: r,
                    promptForAnalytics: void 0
                })
            }
            n.r(t), n.d(t, {
                closeInitialPromptAndEndSession: () => r,
                openHelpMeWriteGenericPopup: () => i,
                toggleInitialPrompt: () => a
            })
        },
        665008: (e, t, n) => {
            "use strict";
            e.exports = n.p + "937ee299d2468780.png"
        },
        667115: (e, t, n) => {
            "use strict";
            e.exports = n.p + "a95f553bf5241102.png"
        },
        674880: (e, t, n) => {
            "use strict";
            n.d(t, {
                BX: () => f,
                Jv: () => p,
                Kf: () => l,
                WM: () => i,
                Xd: () => m,
                Xw: () => g,
                defaultInferenceContextStore: () => r,
                fd: () => d,
                i6: () => s,
                uP: () => u
            }), n(944114), n(898992), n(354520), n(803949), n(581454), n(737550);
            let r = new(n(345426)).ComputedStore(() => {
                let e = n(728372).AppStoreSidebarSpaceStore.state,
                    t = n(728372).AppStoreCurrentUserStore.state,
                    r = n(728372).AppStoreSidebarSpaceViewStore.state,
                    a = n(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (e && t && r) return {
                    spaceStore: e,
                    userStore: t,
                    spaceViewStore: r,
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
                    let r = (0, n(444610).U)(e),
                        a = null == r ? void 0 : r.collectionViewStore();
                    a && (t[e.id] = a.id)
                } else e.getContentStores().forEach(e => {
                    if (e.isCollectionView()) {
                        let r = (0, n(444610).U)(e),
                            a = null == r ? void 0 : r.collectionViewStore();
                        a && (t[e.id] = a.id)
                    }
                });
                return t
            }

            function i(e) {
                let {
                    environment: t,
                    surface: r,
                    inferenceContext: i,
                    config: o,
                    invokedFromBlockId: s,
                    checklistId: l,
                    checklistStepId: u
                } = e, {
                    userStore: d,
                    spaceStore: c,
                    spaceViewStore: p,
                    blockStore: f,
                    peekStore: m,
                    workflowStore: g
                } = i, D = (0, n(295447).Z1)({
                    environment: t,
                    table: n(832375).mSw,
                    spaceId: c.id
                }), h = "meet" === t.RouterStore.state.route.name, _ = { ...f && f.isCollectionView() ? {
                        collectionViewBlockId: f.id,
                        visibleCollectionViewIds: a(f)
                    } : void 0,
                    ...f && !f.isCollectionView() && "personal_home_page" !== f.getType() && "daily_brief_reminder" !== r ? {
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
                    ...h ? function(e) {
                        if (!n(218744).default.checkGate({
                                gateName: "agent_in_meetings_route"
                            })) return;
                        let {
                            environment: t,
                            spaceId: r,
                            userId: a
                        } = e, i = t.idCreator.getSpaceIdCreatorSync(r), o = (0, n(413388).sX)(a, i);
                        return {
                            collectionViewBlockId: o,
                            visibleCollectionViewIds: {
                                [o]: (0, n(413388).X$)(a, i)
                            }
                        }
                    }({
                        environment: t,
                        spaceId: c.id,
                        userId: d.id
                    }) : void 0
                }, y = {};
                if ("workflow" !== o.type || !o.isCustomAgent) {
                    let e = p.getSettings(),
                        t = null == e ? void 0 : e.agent_personalization_settings;
                    if (t) {
                        var v;
                        t.name && (y.agentName = t.name), null != (v = t.customization_items) && v[0] && (y.agentAccessory = t.customization_items[0]), t.context_page_id && (y.context_page_id = t.context_page_id)
                    }
                }
                let b = function(e) {
                    var t, r, a;
                    let {
                        config: i,
                        workflowStore: o
                    } = e;
                    if ("workflow" !== i.type || !i.isCustomAgent || !o) return;
                    let s = !0 === i.useCustomAgentDraft || !0 === i.use_draft_actor_pointer ? (null == (t = o.getDraftData()) ? void 0 : t.instructions) ? ? (null == (r = o.getData()) ? void 0 : r.instructions) : null == (a = o.getPublishedArtifactStore()) || null == (a = a.getData()) ? void 0 : a.instructions;
                    if ((0, n(886883).ap)(s)) return s.id
                }({
                    config: o,
                    workflowStore: g
                });
                if (b && (y.context_page_id = b), n(218744).default.checkGate({
                        gateName: "workflows_inference_replay"
                    })) return {
                    id: D,
                    type: "context",
                    value: {
                        timezone: "America/Los_Angeles",
                        userName: "Test User",
                        userEmail: "test@example.com",
                        userId: "test-user-id",
                        spaceName: "Test Space",
                        spaceId: c.id,
                        spaceViewId: p.id,
                        currentDatetime: "2024-01-01T00:00:00.000Z",
                        surface: r,
                        ..._,
                        invokedFromBlockId: s,
                        ..."onboarding_checklist" === r && l && u ? {
                            checklistId: l,
                            checklistStepId: u
                        } : {},
                        ...y
                    }
                };
                let C = n(218744).default.checkGate({
                    gateName: "agent_user_session_context"
                }) ? function(e) {
                    let {
                        spaceId: t,
                        limit: r = 10
                    } = e;
                    return n(420156).A.getWithoutSubscribing(t).map(({
                        pageId: e,
                        visitedAt: t
                    }) => ({
                        pageId: e,
                        visitedAt: t
                    })).slice(0, r)
                }({
                    spaceId: c.id
                }) : void 0;
                return {
                    id: D,
                    type: "context",
                    value: {
                        timezone: (0, n(714350).P)(),
                        userName: d.getName(),
                        userId: d.id,
                        userEmail: d.getEmail(),
                        spaceName: c.getName(),
                        spaceId: c.id,
                        spaceViewId: p.id,
                        currentDatetime: n(906745).DateTime.now().toISO(),
                        surface: r,
                        ..._,
                        invokedFromBlockId: s,
                        ..."onboarding_checklist" === r && l && u ? {
                            checklistId: l,
                            checklistStepId: u
                        } : {},
                        ...y,
                        recentPageVisits: C
                    }
                }
            }

            function o(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    config: a
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: r.id
                    }),
                    type: "config",
                    value: a
                }
            }

            function s(e) {
                let {
                    existingTranscript: t,
                    environment: n,
                    spaceStore: r,
                    config: a
                } = e;
                if (!t.some(e => "config" === e.type)) return o({
                    environment: n,
                    spaceStore: r,
                    config: a
                })
            }

            function l(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    value: a,
                    userStore: i
                } = e, o = c(a);
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: r.id
                    }),
                    type: "user",
                    value: o,
                    userId: i.id,
                    createdAt: n(906745).DateTime.now().toISO()
                }
            }

            function u(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    actualMessage: a,
                    displayMessage: i,
                    userStore: o,
                    surveyStepId: s,
                    sourceStepId: l
                } = e, u = c(a) ? ? [], d = c(i);
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: r.id
                    }),
                    type: "user-injected",
                    actualMessage: u,
                    displayMessage: d,
                    userId: o.id,
                    createdAt: n(906745).DateTime.now().toISO(),
                    surveyStepId: s,
                    sourceStepId: l
                }
            }

            function d(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    agentMessageKey: a,
                    instructions: i
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: r.id
                    }),
                    type: "proactive-message",
                    agentMessageKey: a,
                    instructions: i
                }
            }

            function c(e) {
                if (e) return (0, n(247438).bBR)((0, n(247438).ooo)(e))
            }

            function p({
                environment: e,
                spaceStore: t,
                userStore: r,
                promptType: a,
                value: i,
                locale: o,
                args: s
            }) {
                return {
                    id: (0, n(295447).Z1)({
                        environment: e,
                        table: n(832375).mSw,
                        spaceId: t.id
                    }),
                    type: "agent-prebuilt-prompt",
                    promptType: a,
                    userId: r.id,
                    createdAt: Date.now(),
                    value: i,
                    locale: o,
                    isEdited: !1,
                    args: s
                }
            }

            function f(e) {
                let t, r, {
                    environment: a,
                    spaceId: i,
                    pointers: o,
                    selectedBlockStores: s,
                    textSelection: l,
                    blockSelectionContext: u,
                    textSelectionContext: d
                } = e;
                if (u) t = u;
                else if (s && s.length > 0) {
                    let e = (0, n(685745).B)(s);
                    e && (t = {
                        type: "blocks",
                        value: s.map(e => e.pointer),
                        text: (0, n(250943).E)({
                            mode: "editing",
                            multiSelection: e,
                            forceExtendAnnotations: {}
                        }).slice(0, 1200)
                    })
                }
                if (d) r = d;
                else if (l && l.start.store.pointer.table === n(832375).evP && l.end.store.pointer.table === n(832375).evP) {
                    let e = (0, n(250943).E)({
                            mode: "editing",
                            multiSelection: l,
                            forceExtendAnnotations: {}
                        }),
                        t = e.slice(0, 1200),
                        a = e.length > 1200;
                    r = {
                        type: "text",
                        value: {
                            start: {
                                pointer: l.start.store.pointer,
                                index: l.start.index
                            },
                            end: {
                                pointer: l.end.store.pointer,
                                index: l.end.index
                            }
                        },
                        text: t,
                        ...a ? {
                            isPreviewTruncated: !0
                        } : {}
                    }
                }
                if (0 !== o.length || t || r) return {
                    id: (0, n(295447).Z1)({
                        environment: a,
                        table: n(832375).mSw,
                        spaceId: i
                    }),
                    type: "user-specified-context",
                    value: {
                        pointers: o,
                        blockSelection: t,
                        textSelection: r
                    }
                }
            }

            function m(e) {
                let {
                    environment: t,
                    inferenceContext: r,
                    config: a,
                    addSteps: s,
                    surface: l,
                    invokedFromBlockId: u,
                    checklistId: d,
                    checklistStepId: c
                } = e, p = [o({
                    environment: t,
                    spaceStore: r.spaceStore,
                    config: a
                }), i({
                    environment: t,
                    inferenceContext: r,
                    surface: l,
                    config: a,
                    invokedFromBlockId: u,
                    checklistId: d,
                    checklistStepId: c
                })];
                return s && p.push(...s), p.filter(n(722371).O9)
            }

            function g(e) {
                let {
                    environment: t,
                    spaceId: r,
                    message: a,
                    notificationType: i = "info",
                    metadata: o
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: r
                    }),
                    type: "system-notification",
                    message: a,
                    notificationType: i,
                    metadata: o
                }
            }
        },
        679416: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => c
            }), n(296540);
            var r = n(474848);
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
                o = `1.5px solid ${n(632079).Tj.border.secondary}`,
                s = {
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
                        border: o,
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
                        border: o,
                        boxShadow: "none"
                    }
                },
                l = {
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
                u = {
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

            function c({
                placement: e,
                children: t,
                animated: n = !1,
                isHiding: i = !1,
                verticalOffsetPx: o = 0,
                horizontalOffsetPx: p = 0,
                tailCircleTop: f,
                tailCircleInsetInlineStartPx: m
            }) {
                let g = function(e, t, n) {
                    let {
                        container: {
                            bottom: r,
                            insetInlineStart: a,
                            insetInlineEnd: i,
                            ...o
                        },
                        tailCircle: s
                    } = l[e], u = 0 !== t && void 0 !== r ? `calc(${String(r)} - ${t}px)` : r;
                    if ("topRight" === e) {
                        let e = 0 !== n && void 0 !== a ? `calc(${String(a)} + ${n}px)` : a;
                        return {
                            container: { ...o,
                                insetInlineStart: e,
                                bottom: u
                            },
                            tailCircle: s
                        }
                    }
                    let d = 0 !== n && void 0 !== i ? `calc(${String(i)} - ${n}px)` : i;
                    return {
                        container: { ...o,
                            insetInlineEnd: d,
                            bottom: u
                        },
                        tailCircle: s
                    }
                }(e, o, p);
                return (0, r.jsxs)(r.Fragment, {
                    children: [n ? (0, r.jsx)("style", {
                        children: a
                    }) : void 0, (0, r.jsxs)("div", {
                        style: { ...s.container,
                            ...g.container,
                            ...n ? i ? d : u : void 0
                        },
                        children: [(0, r.jsx)("div", {
                            style: s.bubble,
                            children: t
                        }), (0, r.jsx)("div", {
                            style: { ...s.tailCircle,
                                ...g.tailCircle,
                                ...void 0 !== f && {
                                    top: f
                                },
                                ...void 0 !== m && {
                                    insetInlineStart: m
                                }
                            }
                        })]
                    })]
                })
            }
        },
        682006: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.37 1.37 13.25 13.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.25 1.375c-1.036 0-1.875.84-1.875 1.875v6c0 1.036.84 1.875 1.875 1.875h1.625v1.625c0 1.036.84 1.875 1.875 1.875h6c1.036 0 1.875-.84 1.875-1.875v-6c0-1.036-.84-1.875-1.875-1.875h-1.625V3.25c0-1.036-.84-1.875-1.875-1.875zM2.625 3.25c0-.345.28-.625.625-.625h6c.345 0 .625.28.625.625v1.625H6.75c-1.036 0-1.875.84-1.875 1.875v3.125H3.25a.625.625 0 0 1-.625-.625zm3.5 3.5c0-.345.28-.625.625-.625h6c.345 0 .625.28.625.625v6c0 .345-.28.625-.625.625h-6a.625.625 0 0 1-.625-.625z"
                    })
                },
                a = (0, n(104509).wt)("duplicateSmall", r, "small")
        },
        682759: (e, t, n) => {
            "use strict";
            e.exports = n.p + "d43593c297dd4340.png"
        },
        685745: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => o
            });
            var r = () => n(129499),
                a = () => n(955630);

            function i(e) {
                for (let t of e) {
                    let e = function(e) {
                        let t = e.getTitleStore();
                        if (t && n(521595).n.findNodeFromStore(t)) return t
                    }(t);
                    if (e && t.getType() !== a().xd.code) return {
                        blockStore: t,
                        titleStore: e
                    }
                }
            }

            function o(e) {
                let t, a = i(e);
                if (!a) return;
                let o = i([...e].reverse());
                if (!o) return;
                let s = (0, n(787926).Ag)({
                    includeNonSelectableListContainer: !1,
                    rootStore: a.blockStore.getHighestContentBlockUIAncestor()
                });
                if (!s) return;
                let l = (0, n(787926).mP)(o.blockStore, s);
                if (l) {
                    for (let e of (0, n(827049).Y_)(l)) {
                        let n = e.value.store.getTitleStore();
                        if (n) {
                            let e = (0, r().s)(n);
                            e && (t = {
                                store: n,
                                index: e.endIndex
                            })
                        }
                    }
                    if (t) return {
                        start: {
                            store: a.titleStore,
                            index: 0
                        },
                        end: t
                    }
                }
            }
        },
        688220: (e, t, n) => {
            "use strict";
            e.exports = n.p + "0fb564b08de74e8f.png"
        },
        701743: (e, t, n) => {
            "use strict";
            e.exports = n.p + "868a886d40b596cd.png"
        },
        702404: (e, t, n) => {
            "use strict";
            e.exports = n.p + "c8cb309f04348e5a.png"
        },
        705820: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => r
            });
            let r = new(n(273917)).U((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }) => {
                if (!n(218744).default.checkGate({
                        gateName: "eligible_interval_select_campaigns_fetch"
                    })) return;
                let r = new(n(695906)).SpaceStore(e, {
                    id: t,
                    table: "space"
                });
                if (await r.load(), !r.canAdmin()) return;
                let a = await e.api.callCellCompatibleApi({
                    eventName: "getEligibleIntervalSelectCampaigns",
                    environment: e,
                    data: {
                        spaceId: t
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: t
                    }
                });
                if ("success" === a.type) return a.data.campaigns
            });
            n(202146).exposeDebugValue("EligibleIntervalSelectCampaignsStore", r)
        },
        708009: (e, t) => {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var r, a = "https://js.stripe.com/v3",
                i = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
                o = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
                s = function() {
                    for (var e = document.querySelectorAll('script[src^="'.concat(a, '"]')), t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (i.test(n.src)) return n
                    }
                    return null
                },
                l = function(e) {
                    var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                        n = document.createElement("script");
                    n.src = "".concat(a).concat(t);
                    var r = document.head || document.body;
                    if (!r) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                    return r.appendChild(n), n
                },
                u = function(e, t) {
                    e && e._registerWrapper && e._registerWrapper({
                        name: "stripe-js",
                        version: "1.52.1",
                        startTime: t
                    })
                },
                d = null,
                c = function(e, t, n) {
                    if (null === e) return null;
                    var r = e.apply(void 0, t);
                    return u(r, n), r
                },
                p = function(e) {
                    var t = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e), "\n");
                    if (null === e || "object" !== n(e)) throw Error(t);
                    if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
                    throw Error(t)
                },
                f = !1,
                m = function() {
                    for (var e, t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                    f = !0;
                    var i = Date.now();
                    return (e = r, null !== d ? d : d = new Promise(function(t, n) {
                        if ("u" < typeof window || "u" < typeof document) return void t(null);
                        if (window.Stripe && e && console.warn(o), window.Stripe) return void t(window.Stripe);
                        try {
                            var r = s();
                            r && e ? console.warn(o) : r || (r = l(e)), r.addEventListener("load", function() {
                                window.Stripe ? t(window.Stripe) : n(Error("Stripe.js not available"))
                            }), r.addEventListener("error", function() {
                                n(Error("Failed to load Stripe.js"))
                            })
                        } catch (e) {
                            n(e);
                            return
                        }
                    })).then(function(e) {
                        return c(e, n, i)
                    })
                };
            m.setLoadParameters = function(e) {
                if (!(f && r && Object.keys(p(e)).reduce(function(t, n) {
                        var a;
                        return t && e[n] === (null == (a = r) ? void 0 : a[n])
                    }, !0))) {
                    if (f) throw Error("You cannot change load parameters after calling loadStripe");
                    r = p(e)
                }
            }, t.loadStripe = m
        },
        722784: (e, t, n) => {
            "use strict";
            e.exports = n.p + "6ddab14ae1911792.png"
        },
        726342: (e, t, n) => {
            "use strict";

            function r(e) {
                return e instanceof n(681735).h || e instanceof n(695906).SpaceStore || e instanceof n(970831).B
            }
            n.d(t, {
                u: () => r
            })
        },
        729849: (e, t, n) => {
            "use strict";
            n.d(t, {
                Gi: () => o,
                yB: () => i
            }), n(898992), n(354520), n(803949);
            var r = () => n(546605);

            function a() {
                return n(218744).default.getConfigKey("agent_max_attachments", "value")
            }

            function i() {
                return (0, n(682985).K8)(() => a(), [])
            }
            class o extends r().Store {
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
                        var n;
                        let r = t.get(e);
                        r && t.set(e, { ...r,
                            metadata: { ...r.metadata,
                                guardrail: { ...null == (n = r.metadata) ? void 0 : n.guardrail,
                                    attachmentRisk: "confirmed_safe_by_user"
                                }
                            }
                        })
                    }), this.setState({ ...this.state,
                        originalFileUrlToSuccessfullyUploadedFiles: t
                    })
                }
                setValueForUploadingFile(e, t) {
                    let n = new Map(this.state.inProgressUploadFileIdsToProgress),
                        r = n.get(e);
                    n.set(e, { ...t,
                        timeUploaded: (null == r ? void 0 : r.timeUploaded) ? ? Date.now()
                    }), this.setState({ ...this.state,
                        inProgressUploadFileIdsToProgress: n
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
                        fileName: n,
                        percentage: r,
                        contentType: a
                    } = e;
                    this.setValueForUploadingFile(t, {
                        type: "uploading",
                        fileName: n,
                        progress: r,
                        contentType: a
                    })
                }
                onFileUploadFailed(e) {
                    let {
                        error: t
                    } = e, {
                        files: n
                    } = t;
                    n.forEach(({
                        fileId: e,
                        fileName: n
                    }) => {
                        this.setValueForUploadingFile(e, {
                            type: "error",
                            error: t,
                            fileName: n
                        })
                    })
                }
                onFileUploadCompleted(e, t) {
                    let n = this.getTimeUploadedForUploadingFile(e);
                    this.deleteValueForUploadingFile(e), this.setValueForUploadedFile(t.originalFileUrl, { ...t,
                        timeUploaded: n
                    })
                }
                onComputerFileUploadCompleted(e, t) {
                    let r = this.getTimeUploadedForUploadingFile(e);
                    this.deleteValueForUploadingFile(e), this.setValueForUploadedFile(t.originalFileUrl, {
                        originalFileUrl: t.originalFileUrl,
                        fileName: t.fileName,
                        contentType: "application/pdf",
                        base64EncodedFileUrl: "",
                        attachmentSource: "user_upload",
                        assistantSessionId: (0, n(818963).pg)(t.assistantSessionId),
                        timeUploaded: r
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
                    return this.isUploadInProgress() || this.state.originalFileUrlToSuccessfullyUploadedFiles.size > a()
                }
            }
        },
        733785: (e, t, n) => {
            "use strict";
            e.exports = n.p + "451ac07fab6898ec.png"
        },
        737497: (e, t, n) => {
            "use strict";
            e.exports = n.p + "5c61be7d1ab58977.gif"
        },
        739271: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => a
            });
            var r = n(296540);

            function a() {
                let [e, t] = (0, r.useState)({
                    inputElementAttributes: void 0,
                    suppressFocusRing: !1
                }), [n, a] = (0, r.useState)(!1), [i, o] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    if (n) {
                        function e() {
                            o(!1)
                        }

                        function t(e) {
                            ("ArrowDown" === e.key || "ArrowUp" === e.key) && o(!0)
                        }
                        return window.addEventListener("pointerdown", e), window.addEventListener("keydown", t), () => {
                            window.removeEventListener("pointerdown", e), window.removeEventListener("keydown", t)
                        }
                    }
                }, [n]), [(0, r.useMemo)(() => ({
                    inputElementAttributes: e.inputElementAttributes,
                    suppressFocusRing: e.suppressFocusRing && i,
                    onFocus: () => {
                        a(!0)
                    },
                    onBlur: () => {
                        a(!1)
                    }
                }), [e, i]), (0, r.useMemo)(() => ({
                    setComboboxState: t,
                    isFocusVisible: i,
                    isComboboxFocused: n,
                    onItemHover: () => {
                        o(!1)
                    }
                }), [i, n])]
            }
        },
        745452: (e, t, n) => {
            "use strict";

            function r() {
                var e, t, r, a, i, o, s, l, u, d, c, p, f, m;
                let g = n(728372).AppStoreSidebarSpaceStore.state,
                    D = n(728372).AppStoreSidebarSpaceViewStore.state,
                    h = null == g ? void 0 : g.getSpaceSurveyData(),
                    _ = null == D ? void 0 : D.getUserSurveyData();
                return {
                    function: null != _ && null != (e = _.function) && e.value ? (0, n(88917).Tj)(null == _ || null == (t = _.function) ? void 0 : t.value) : void 0,
                    role: null != _ && null != (r = _.role) && r.value ? (0, n(88917).t_)(null == _ || null == (a = _.role) ? void 0 : a.value) : void 0,
                    educationRole: null == _ || null == (i = _.education_role) ? void 0 : i.value,
                    educationLevel: null == _ || null == (o = _.education_level) ? void 0 : o.value,
                    useCases: null != h && null != (s = h.use_cases) && s.value ? (0, n(88917).h0)(null == h || null == (l = h.use_cases) ? void 0 : l.value) : void 0,
                    companySize: null != h && null != (u = h.company_size) && u.value ? (0, n(88917).JE)(null == h || null == (d = h.company_size) ? void 0 : d.value) : void 0,
                    intent: null != h && null != (c = h.intent) && c.value ? (0, n(88917).j9)(null == h || null == (p = h.intent) ? void 0 : p.value) : void 0,
                    categories: null == _ || null == (f = _.categories) ? void 0 : f.value,
                    collaborativeIntent: null == h || null == (m = h.collaborative_intent) ? void 0 : m.value
                }
            }
            n.d(t, {
                p: () => r
            })
        },
        746204: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.87 3.72 7.16 12.56",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6.131 9.381a.875.875 0 0 0 0 1.238l5.4 5.4a.875.875 0 1 0 1.238-1.238L7.987 10l4.782-4.781A.875.875 0 0 0 11.53 3.98z"
                    })
                },
                a = (0, n(104509).wt)("arrowChevronSingleLeftFill", r, "fill")
        },
        752153: (e, t, n) => {
            "use strict";

            function r(e, t) {
                return a(l(e, t))
            }

            function a(e) {
                return void 0 !== e && (e === n(212169).q_ || e === n(212169).YD)
            }

            function i(e, t) {
                if (a(t)) return;
                let r = n(212169).c$[e],
                    i = r.steps.findIndex(e => e.id === t);
                return -1 === i ? r.steps[0].id : i === r.steps.length - 1 ? n(212169).q_ : r.steps[i + 1].id
            }

            function o(e, t) {
                let n = l(e, t);
                if (!(!n || a(n))) return i(t, n)
            }

            function s(e, t) {
                let r = l(e, t);
                if (r) {
                    var i;
                    let e = n(212169).c$[t];
                    if (a(r)) return null == (i = e.steps.at(-1)) ? void 0 : i.id;
                    let o = e.steps.findIndex(e => e.id === r);
                    return -1 !== o && 0 !== o ? e.steps[o - 1].id : void 0
                }
            }

            function l(e, t) {
                var r;
                if (!e) return;
                let a = ((null == (r = e.getSettings()) ? void 0 : r.tutorials) || {})[t];
                return void 0 === a ? n(212169).c$[t].steps[0].id : a
            }
            n.d(t, {
                KD: () => s,
                gt: () => l,
                i9: () => o,
                ll: () => a,
                tb: () => i,
                x$: () => r
            }), n(18107), n(967357)
        },
        757491: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => a
            });
            var r = n(296540);

            function a(e) {
                return (0, r.useEffect)(() => () => e(), [])
            }
        },
        766970: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                iconDefinition: () => r,
                xMarkFillIcon: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                a = (0, n(104509).wt)("xMarkFill", r, "fill")
        },
        770408: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.56 0.68 12.88 12.7",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M9.8.788a1.65 1.65 0 0 0-2.013.73l-.274.563c-.143.237-.29.53-.427.802v.002l-.103.203c-.178.35-.336.639-.483.833L4.823 5.709H2.914c-.746 0-1.352.605-1.352 1.351v4.181c0 .747.606 1.352 1.352 1.352h2.657l.945.324.01.005h.001c.598.3 1.252.454 1.923.454h3.425a1.594 1.594 0 0 0 1.562-1.912c.432-.286.714-.779.714-1.333 0-.213-.044-.413-.119-.593.251-.278.406-.645.406-1.058a1.56 1.56 0 0 0-.284-.901c.12-.218.19-.47.19-.742 0-.88-.713-1.593-1.593-1.593H9.94q.05-.106.11-.225l.002-.004c.11-.222.243-.491.338-.817v-.002l.403-1.41A1.65 1.65 0 0 0 9.808.791zM8.623 2.655l.27-.556a.4.4 0 0 1 .464-.141.4.4 0 0 1 .235.483L9.19 3.85a3.5 3.5 0 0 1-.26.612l-.011.025c-.106.214-.236.475-.33.787a.946.946 0 0 0 .907 1.219h3.255c.19 0 .344.154.344.343 0 .1-.052.198-.157.266a.625.625 0 0 0 .066 1.087.32.32 0 0 1 .184.29.33.33 0 0 1-.231.317.625.625 0 0 0-.192 1.073.34.34 0 0 1 .136.261.34.34 0 0 1-.336.344.625.625 0 0 0-.452 1.057.344.344 0 0 1-.238.594H8.45c-.45 0-.886-.097-1.29-.286a.6.6 0 0 0-.151-.076l-1.131-.387a.6.6 0 0 0-.203-.034h-.006V6.634l1.764-1.88.037-.043c.236-.302.449-.705.627-1.057l.117-.232a10 10 0 0 1 .41-.767M2.812 7.06c0-.056.046-.101.102-.101H4.52v4.384H2.914a.1.1 0 0 1-.102-.102z"
                    })
                },
                a = (0, n(104509).wt)("handThumbsUpSmall", r, "small")
        },
        775451: (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => i
            }), n(296540);
            var r = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 2.06 14.57 16.51",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "m16.949 3.47-.618.619-1.164-1.165.625-.624a.823.823 0 0 1 1.157 0 .823.823 0 0 1 0 1.157zm-8.526 8.527 7.153-7.153-1.165-1.165-7.16 7.147a1.1 1.1 0 0 0-.247.414l-.303.978c-.055.206.137.4.33.33l.978-.303a.9.9 0 0 0 .414-.248"
                        }), (0, r.jsx)("path", {
                            d: "M9.578 5.438q.617 0 1.197.126l1.051-1.004a6.9 6.9 0 0 0-2.248-.372h-.35a6.603 6.603 0 0 0-6.603 6.602v.257c0 1.254.371 2.48 1.067 3.524a9.25 9.25 0 0 0 5.455 3.844l.514.129a.625.625 0 1 0 .303-1.213l-.513-.128a8 8 0 0 1-4.719-3.325 5.1 5.1 0 0 1-.857-2.831v-.257a5.353 5.353 0 0 1 5.353-5.352z"
                        }), (0, r.jsx)("path", {
                            d: "M12.444 15.748a6.47 6.47 0 0 1-5.471-1.878l1.387-.433a5.22 5.22 0 0 0 3.92 1.072l.08-.01a3.37 3.37 0 0 0 2.921-3.345 5.7 5.7 0 0 0-1.011-3.248l.904-.885a6.94 6.94 0 0 1 1.357 4.133 4.624 4.624 0 0 1-4.006 4.584z"
                        })]
                    })
                },
                i = (0, n(104509).wt)("pencilAndOutline", a, "default")
        },
        781036: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => i
            });
            var r = n(296540),
                a = n(474848);

            function i({
                backgroundStyle: e,
                onDismiss: t
            }) {
                (0, r.useLayoutEffect)(() => {
                    if ((null == e ? void 0 : e.background) !== "transparent") return requestAnimationFrame(() => {
                        (0, n(960831).j)(!0)
                    }), n(164177).j.setState({
                        open: !0
                    }), () => {
                        (0, n(960831).j)(!1), n(164177).j.setState({
                            open: !1
                        })
                    }
                }, [null == e ? void 0 : e.background]);
                let o = (0, n(960253).I)(() => ({
                    underlay: function(e) {
                        let {
                            backgroundStyle: t
                        } = e;
                        return {
                            position: "absolute",
                            top: 0,
                            insetInlineStart: 0,
                            bottom: 0,
                            insetInlineEnd: 0,
                            background: n(632079).Tj.modalUnderlayBackground,
                            ...t
                        }
                    }({
                        backgroundStyle: e
                    })
                }), [e]);
                return (0, a.jsx)("div", {
                    role: "presentation",
                    style: o.underlay,
                    onClick: e => {
                        t && t(e)
                    },
                    className: n(511101).m
                })
            }
        },
        783925: (e, t, n) => {
            "use strict";
            e.exports = n.p + "fc556f4d021cf665.png"
        },
        784836: (e, t, n) => {
            "use strict";
            e.exports = n.p + "96fa7f82dea60fb2.png"
        },
        786221: (e, t, n) => {
            "use strict";
            n.d(t, {
                HL: () => c,
                L5: () => d,
                Pl: () => P,
                parseCSV: () => j,
                ph: () => u
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(823215), n(354520), n(672577), n(430670), n(803949), n(581454), n(908872), n(737550);
            var r = () => n(627179),
                a = () => n(773352),
                i = () => n(247438);
            let o = "PartialMatch",
                s = "FullMatch",
                l = (0, n(109939).YK)({
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
                        intl: r,
                        randomShortID: a,
                        isPhoneNumber: o
                    },
                    options: {
                        useCsvAdaptiveSchema: s,
                        addHeadersToCollectionEnabled: u
                    }
                } = e, d = function(e, t, r, a, i = !1, o, s, u) {
                    var d;
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
                    let D = null == (d = e[0]) ? void 0 : d.length;
                    null == o || o.set("ColumnCategory", function(e) {
                        if (e < 50) return "lessthan50";
                        if (e < 100) return "lessthan100";
                        if (e < 500) return "lessthan500";
                        if (e < 1e3) return "lessthan1000";
                        if (e < 5e3) return "lessthan5000";
                        else return "greaterthan5000"
                    }(D));
                    let h = null == s ? void 0 : s.columnHeaders,
                        y = void 0 !== h && h.length > 0,
                        b = [];
                    y ? (b = h.flatMap(e => e.doNotImport ? [] : [e.headerName]), null != s && s.useFirstRowAsHeaders && e.shift()) : 1 === e.length || u ? b = e[0].map((e, n) => t.formatMessage(l.genericColumnName, {
                        columnNumber: n + 1
                    })) : e.length > 1 && (b = e[0].map(e => e.text), e.shift());
                    let C = e,
                        {
                            types: w,
                            schema: k,
                            pages: x
                        } = y && h ? function(e) {
                            let {
                                body: t,
                                intl: r,
                                randomShortID: a,
                                headerTitles: i,
                                headersMetadata: o,
                                isPreTypedCSV: s,
                                csvEvalContext: l
                            } = e, u = performance.now(), {
                                types: d,
                                notToImportColumnIndex: c
                            } = function(e) {
                                let {
                                    intl: t,
                                    columns: r,
                                    randomShortID: a
                                } = e, i = [];
                                return {
                                    types: r.flatMap((e, r) => {
                                        if (e.doNotImport) return i.push(r), [];
                                        let o = n(763230).D_;
                                        return "checkbox" === e.propertyType ? o = e => _(e) : "number" === e.propertyType ? o = e => v(e) : "date" === e.propertyType && "format" in e ? o = n => S(n, t, e.format) : "date" === e.propertyType && (o = e => S(e, t)), [{
                                            id: "title" === e.propertyType ? "title" : a(),
                                            schema: {
                                                name: e.headerName,
                                                type: e.propertyType
                                            },
                                            coerce: o
                                        }]
                                    }),
                                    notToImportColumnIndex: i
                                }
                            }({
                                intl: r,
                                columns: o,
                                randomShortID: a
                            }), m = performance.now() - u;
                            null == l || l.set("columnTypeInferenceTimeTakenMS", m);
                            let {
                                pages: g,
                                selectPropertyOptions: D
                            } = f({
                                body: t,
                                types: d,
                                isPreTypedCSV: s,
                                notToImportColumnIndex: c
                            });
                            if (D)
                                for (let e of d) D[e.id] && ("select" === e.schema.type || "multi_select" === e.schema.type) && (e.schema.options = function(e) {
                                    let {
                                        randomShortID: t,
                                        optionValues: r,
                                        propertyType: a
                                    } = e;
                                    return ("multi_select" === a ? r.flatMap(e => e.split(",").map(e => e.trim()).filter(e => e.length > 0)) : r.map(e => e.trim()).filter(e => e.length > 0)).filter((e, t, n) => n.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t).map(e => ({
                                        id: t(),
                                        value: e,
                                        color: (0, n(326044).Z)([])
                                    }))
                                }({
                                    randomShortID: a,
                                    optionValues: D[e.id],
                                    propertyType: e.schema.type
                                }));
                            let {
                                schema: h
                            } = p({
                                body: t,
                                intl: r,
                                randomShortID: a,
                                headers: i,
                                types: d,
                                isPreTypedCSV: s
                            });
                            return {
                                types: d,
                                schema: h,
                                pages: g
                            }
                        }({
                            body: C,
                            intl: t,
                            randomShortID: r,
                            headerTitles: b,
                            headersMetadata: h,
                            isPreTypedCSV: y,
                            csvEvalContext: o
                        }) : function(e) {
                            let {
                                body: t,
                                intl: n,
                                randomShortID: r,
                                isPhoneNumber: a,
                                useCsvAdaptiveSchema: i,
                                headers: o,
                                isPreTypedCSV: s,
                                csvEvalContext: l
                            } = e, u = performance.now(), {
                                types: d
                            } = c({
                                body: t,
                                intl: n,
                                randomShortID: r,
                                isPhoneNumber: a,
                                useCsvAdaptiveSchema: i,
                                csvEvalContext: l
                            }), m = performance.now() - u;
                            null == l || l.set("columnTypeInferenceTimeTakenMS", m);
                            let {
                                schema: g
                            } = p({
                                body: t,
                                intl: n,
                                randomShortID: r,
                                headers: o,
                                types: d,
                                isPreTypedCSV: s
                            }), {
                                pages: D
                            } = f({
                                body: t,
                                types: d,
                                isPreTypedCSV: s
                            });
                            return {
                                types: d,
                                schema: g,
                                pages: D
                            }
                        }({
                            body: C,
                            intl: t,
                            randomShortID: r,
                            isPhoneNumber: a,
                            useCsvAdaptiveSchema: i,
                            headers: b,
                            isPreTypedCSV: y,
                            csvEvalContext: o
                        });
                    return {
                        schema: k,
                        types: w,
                        pages: x
                    }
                }(t, r, a, o, s, e.csvEvalContext, e.metadata, u);
                return function(e) {
                    let {
                        actor: t,
                        blockType: r,
                        root: a,
                        parent: o,
                        name: s,
                        format: l,
                        deps: {
                            randomID: u,
                            spaceIdCreator: d,
                            addFileIdsToBlock: c,
                            createCollectionAsyncWithStatusLabel: p
                        },
                        options: {
                            ignoreBlockCount: f,
                            legacyNonCrdt: m
                        },
                        pages: g,
                        schema: D,
                        columnIds: h
                    } = e, _ = e.collectionId ? ? (null == d ? void 0 : d.idInSavedSpace(n(46241).V)) ? ? u(), y = e.collectionViewId ? ? (null == d ? void 0 : d.idInSavedSpace(n(435544).G)) ? ? u(), v = [], b = [], C = [], {
                        operations: S
                    } = n(993189).WBy.create({
                        id: _,
                        parent: a.existing ? a.record.pointer : {
                            id: a.id,
                            table: n(682956).ev,
                            spaceId: o.spaceId
                        },
                        space_id: o.spaceId,
                        name: i().x9d(s),
                        schema: D,
                        format: {
                            collection_page_properties: n(381453).oE(h.map(e => {
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
                    v.push(...S);
                    let w = {
                            id: a.existing ? a.record.id : a.id,
                            type: r,
                            collection_id: _,
                            format: {
                                collection_pointer: {
                                    table: n(46241).V,
                                    id: _,
                                    spaceId: o.spaceId
                                }
                            },
                            view_ids: [y],
                            createdBy: t,
                            parentPointer: o,
                            space_id: o.spaceId
                        },
                        {
                            createOrUpdateBlockOperations: k
                        } = n(877308).Rf({
                            blockModelArgs: w,
                            existingBlock: a.existing ? a.record : void 0,
                            legacyNonCrdt: m
                        });
                    if (v.push(...k), p) {
                        let {
                            operations: e
                        } = n(993189).lqf.create({
                            id: y,
                            type: "table",
                            name: "Show All",
                            parent: a.existing ? a.record.pointer : {
                                id: a.id,
                                table: n(682956).ev,
                                spaceId: o.spaceId
                            },
                            space_id: o.spaceId,
                            format: {
                                collection_pointer: (0, n(9247).Z8)({
                                    collectionId: _,
                                    spaceId: o.spaceId
                                }),
                                table_properties: n(381453).oE(h.map(e => {
                                    if (e) return {
                                        visible: !0,
                                        property: e
                                    }
                                })),
                                ...l
                            },
                            createdBy: t
                        });
                        v.push(...e)
                    }
                    let x = function(e) {
                        let {
                            actor: t,
                            collectionId: r,
                            spaceId: a,
                            pages: i,
                            randomID: o,
                            spaceIdCreator: s,
                            options: l
                        } = e;
                        return i.map(i => {
                            let u = (null == s ? void 0 : s.idInSavedSpace(n(682956).ev)) ? ? o(),
                                {
                                    model: d,
                                    operations: c
                                } = n(993189).zgg.create({
                                    id: u,
                                    parentPointer: {
                                        id: r,
                                        table: n(46241).V,
                                        spaceId: a
                                    },
                                    space_id: a,
                                    type: n(955630).xd.page,
                                    createdBy: t,
                                    properties: i,
                                    ...l.ignoreBlockCount ? {
                                        ignore_block_count: !0
                                    } : void 0
                                }),
                                p = [...c];
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
                                id: u,
                                operations: p
                            }
                        })
                    }({
                        actor: t,
                        collectionId: _,
                        addFileIdsToBlock: c,
                        spaceId: o.spaceId,
                        pages: g,
                        randomID: u,
                        spaceIdCreator: d,
                        options: {
                            ignoreBlockCount: f
                        }
                    });
                    for (let {
                            operations: e
                        } of x) b.push(...e);
                    let {
                        operations: F
                    } = n(993189).lqf.create({
                        id: y,
                        type: "table",
                        name: "Show All",
                        parent: a.existing ? a.record.pointer : {
                            id: a.id,
                            table: n(682956).ev,
                            spaceId: o.spaceId
                        },
                        space_id: o.spaceId,
                        format: {
                            collection_pointer: (0, n(9247).Z8)({
                                collectionId: _,
                                spaceId: o.spaceId
                            }),
                            table_properties: n(381453).oE(h.map(e => {
                                if (e) return {
                                    visible: !0,
                                    property: e
                                }
                            })),
                            ...l
                        },
                        page_sort: x.map(e => e.id).slice(0, n(9247).WF),
                        createdBy: t
                    });
                    if (b.push(...F), !p) return {
                        operations: [...v, ...b]
                    }; {
                        let e = {
                                table: n(46241).V,
                                id: _,
                                spaceId: o.spaceId
                            },
                            t = n(488307).op.update({
                                pointer: e,
                                path: ["format", "sync_state"],
                                args: {
                                    syncing: !1,
                                    last_synced_at: Date.now()
                                }
                            });
                        return C.push(t), {
                            operations: b,
                            createCollectionOperations: v,
                            collectionFinishedOperations: C
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
                    actor: r,
                    parent: a,
                    tableId: i,
                    deps: {
                        randomID: o,
                        spaceIdCreator: s,
                        randomShortID: l
                    },
                    options: {
                        legacyNonCrdt: u,
                        ignoreBlockCount: d,
                        hasHeaderRow: c,
                        hasHeaderColumn: p
                    }
                } = e, f = [], m = t.length ? t[0].map(e => l()) : [], g = t.map(e => (null == s ? void 0 : s.idInSavedSpace(n(682956).ev)) ? ? o());
                return f.push(...n(993189).zgg.create({
                    id: i,
                    type: n(955630).xd.table,
                    content: g,
                    format: {
                        table_block_column_order: m,
                        ...c ? {
                            table_block_column_header: !0
                        } : {},
                        ...p ? {
                            table_block_row_header: !0
                        } : {}
                    },
                    properties: {},
                    parentPointer: a,
                    space_id: a.spaceId,
                    createdBy: r,
                    ignore_block_count: !!d || void 0,
                    legacyNonCrdt: u
                }).operations), f.push(...g.flatMap((e, o) => {
                    let s = (0, n(722371).MU)(m.flatMap((e, n) => {
                        var r;
                        let a = null == (r = t[o]) || null == (r = r[n]) ? void 0 : r.textValue;
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
                        properties: s,
                        createdBy: r,
                        legacyNonCrdt: u
                    }).operations
                })), {
                    operations: f
                }
            }

            function c(e) {
                let {
                    body: t,
                    intl: i,
                    randomShortID: l,
                    isPhoneNumber: u,
                    useCsvAdaptiveSchema: d,
                    csvEvalContext: c
                } = e, p = [{
                    test: E.bind(null, u),
                    sampledSchemaIsComplete: !0
                }, {
                    test: b,
                    sampledSchemaIsComplete: !0
                }, {
                    test: x,
                    sampledSchemaIsComplete: !0
                }, {
                    test: I,
                    sampledSchemaIsComplete: !0
                }, {
                    test: w,
                    sampledSchemaIsComplete: !0
                }, {
                    test: y,
                    sampledSchemaIsComplete: !1
                }, {
                    test: M,
                    sampledSchemaIsComplete: !1
                }, {
                    test: B,
                    sampledSchemaIsComplete: !1
                }, {
                    test: T,
                    sampledSchemaIsComplete: !0
                }];
                return {
                    types: n(381453).oE(n(381453).$1(t).map(e => e.length && e[0].columnType ? e[0].columnType : function(e, t, i, l, u, d) {
                        let c = t.filter(e => !!e);
                        if (0 === c.length) return T(e, c);
                        if (u) {
                            let n = c.length > 1e3 ? function(e) {
                                let t = e.length,
                                    n = [];
                                for (let r = 0; r < 1e3; r++) {
                                    let r = Math.floor(Math.random() * t);
                                    n.push(e[r])
                                }
                                return n
                            }(c) : c;
                            for (let u of l) {
                                let l = u.test(e, n, i);
                                if (l) {
                                    let n = l;
                                    if (!1 === l.isFullMatch) {
                                        a().log({
                                            level: "info",
                                            from: "csvHelper",
                                            type: "csvColumnTypes",
                                            data: {
                                                message: "Partial column type match detected, setting data type as string",
                                                columnType: l.schema.type,
                                                matchType: "Partial"
                                            }
                                        }), n = T(e, t);
                                        let i = (null == d ? void 0 : d.get(o)) || 0;
                                        (0, r().Et)(i) && (null == d || d.set(o, i + 1))
                                    } else a().log({
                                        level: "info",
                                        from: "csvHelper",
                                        type: "csvColumnTypes",
                                        data: {
                                            message: "Complete column type match detected",
                                            columnType: l.schema.type,
                                            matchType: "Full"
                                        }
                                    });
                                    let i = (null == d ? void 0 : d.get(s)) || 0;
                                    return (0, r().Et)(i) && (null == d || d.set(s, i + 1)), n
                                }
                            }
                        } else {
                            let t = c.filter(e => !n(381453).Im(e)).slice(0, 100);
                            for (let n of l) {
                                let l = n.test(e, t, i);
                                if (l) {
                                    let u = n.sampledSchemaIsComplete || t.length === c.length ? l : n.test(e, c, i);
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
                                            let e = (null == d ? void 0 : d.get(o)) || 0;
                                            (0, r().Et)(e) && (null == d || d.set(o, e + 1))
                                        } else {
                                            let e = (null == d ? void 0 : d.get(s)) || 0;
                                            (0, r().Et)(e) && (null == d || d.set(s, e + 1))
                                        }
                                        return u
                                    }
                                }
                            }
                        }
                        return T(e, [])
                    }(i, e.map(e => null == e ? void 0 : e.text), l, p, d, c)))
                }
            }

            function p(e) {
                let {
                    body: t,
                    intl: n,
                    randomShortID: r,
                    headers: a,
                    types: o,
                    isPreTypedCSV: s
                } = e, u = a.map(() => !1);
                if (!s) {
                    for (let e = 0; e < a.length; e++)
                        if ("text" === o[e].schema.type)
                            for (let n = 0; n < t.length; n++) {
                                let r = t[n][e].textValue;
                                if (r) {
                                    for (let a of r)
                                        if (i().BEe(a)) {
                                            u[e] = !0, n = t.length;
                                            break
                                        }
                                }
                            }
                }
                let d = !0,
                    c = {
                        title: {
                            type: "title",
                            name: n.formatMessage(l.titleColumnName)
                        }
                    };
                return a.forEach((e, t) => {
                    let n = o[t];
                    if (n)
                        if ("text" !== n.schema.type || !d || u[t] || s)
                            if (s && "title" === n.schema.type) {
                                let t = c.title;
                                t && (t.name = e)
                            } else {
                                let t = n.id ? ? r();
                                n.id || (n.id = t), c[t] = { ...n.schema,
                                    name: e
                                }
                            }
                    else {
                        d = !1, n.id = "title", n.schema = {
                            type: "title",
                            name: e
                        };
                        let t = c.title;
                        t && (t.name = e)
                    }
                }), {
                    schema: c
                }
            }

            function f(e) {
                let {
                    body: t,
                    types: r,
                    isPreTypedCSV: a,
                    notToImportColumnIndex: o
                } = e, s = {};
                return {
                    pages: t.map(e => {
                        null != o && o.length && (e = e.filter((e, t) => !o.includes(t)));
                        let t = {};
                        return r.forEach((r, o) => {
                            if (r) {
                                let {
                                    id: l,
                                    schema: u,
                                    coerce: d
                                } = r, {
                                    type: c
                                } = u;
                                if (l) {
                                    let r = e[o] || "";
                                    if ("url" === c) t[l] = n(561872).jw(r.text);
                                    else if ("date" === c) t[l] = n(561872).m5(d(r.text));
                                    else if ("text" === c) t[l] = r.textValue || i().x9d(d(r.text));
                                    else if ("file" === c) t[l] = r.textValue || [];
                                    else if ("select" === c || "multi_select" === c) {
                                        let e = [];
                                        if (e = "multi_select" === c ? r.text.split(",").map(e => e.trim()).filter(e => e.length > 0).filter((e, t, n) => n.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t) : r.text.trim() ? [r.text.trim()] : [], a)
                                            for (let t of e) {
                                                if (!t || !t.trim()) continue;
                                                let e = t.trim();
                                                s[l] || (s[l] = []), s[l].find(t => t.toLowerCase() === e.toLowerCase()) || s[l].push(e)
                                            }
                                        t[l] = i().x9d(d(r.text))
                                    } else t[l] = i().x9d(d(r.text))
                                }
                            }
                        }), t
                    }),
                    selectPropertyOptions: a ? s : void 0
                }
            }
            let m = ["yes", "Yes", "true", "True", "checked"],
                g = ["no", "No", "false", "False", "unchecked"];

            function D(e) {
                return m.some(t => e === t) || g.some(t => e === t)
            }

            function h(e, t) {
                return e.length === t.length
            }

            function _(e) {
                return m.some(t => e === t) ? n(745680).I1 : n(745680).oP
            }

            function y(e, t) {
                if (t.every(D)) return {
                    schema: {
                        type: "checkbox"
                    },
                    validate: D,
                    coerce: e => _(e)
                }
            }

            function v(e) {
                let t = n(700369).sA(e);
                return `${t?t.value:void 0}`
            }

            function b(e, t) {
                let a = t.map(n(700369).sA),
                    i = a[0];
                if (i && a.every(e => !!(e && e.format === i.format))) return {
                    schema: {
                        type: "number",
                        number_format: i.format
                    },
                    validate(e) {
                        let t = n(700369).sA(e);
                        return !r().pN(t) && t.format === i.format
                    },
                    coerce: e => v(e)
                }
            }

            function C(e, t) {
                return (!parseInt(t) || !(t.length <= 6)) && !!n(629518).JC(t, e)
            }

            function S(e, t, r) {
                let a = e.includes("→");
                return n(629518).JC(e, t, a ? void 0 : r)
            }

            function w(e, t) {
                let n = t.filter(t => C(e, t));
                if (n.length >= t.length / 2) return {
                    schema: {
                        type: "date"
                    },
                    validate: t => C(e, t),
                    coerce: t => S(t, e),
                    isFullMatch: h(t, n)
                }
            }

            function k(e) {
                return e.length < 320 && e.includes("@") && n(159523).t6(e, "email")
            }

            function x(e, t) {
                let r = t.filter(k);
                if (r.length >= t.length / 2) return {
                    schema: {
                        type: "email"
                    },
                    validate: k,
                    coerce: n(763230).D_,
                    isFullMatch: h(t, r)
                }
            }

            function F(e) {
                return e.length < 320 && n(159523).t6(e, "url")
            }

            function I(e, t) {
                let r = t.filter(F);
                if (r.length >= t.length / 2) return {
                    schema: {
                        type: "url"
                    },
                    validate: F,
                    coerce: n(763230).D_,
                    isFullMatch: h(t, r)
                }
            }

            function A(e, t) {
                return !String(t).match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/) && e(String(t))
            }

            function E(e, t, r) {
                let a = A.bind(null, e),
                    i = r.filter(a);
                if (i.length >= r.length / 2) return {
                    schema: {
                        type: "phone_number"
                    },
                    validate: a,
                    coerce: n(763230).D_,
                    isFullMatch: h(r, i)
                }
            }

            function M(e, t, r) {
                var a, i, o, s;
                let l = [];
                t.forEach(e => e.split(",").forEach(e => l.push(e.trim())));
                let u = n(561872).ki(l),
                    d = new Set(u);
                if (a = u.length, (i = l.length) > t.length && (o = a, s = i, o > 0 && o ** 2 < s)) return {
                    schema: {
                        type: "multi_select",
                        options: u.map((e, t) => ({
                            id: r(),
                            value: e,
                            color: (0, n(326044).Z)([])
                        }))
                    },
                    validate: e => d.has(e),
                    coerce: n(763230).D_
                }
            }

            function B(e, t, r) {
                var a, i;
                let o = n(561872).ki(t),
                    s = new Set(o);
                if (a = o.length, i = t.length, a > 0 && a ** 2 < i) return {
                    schema: {
                        type: "select",
                        options: o.map((e, t) => ({
                            id: r(),
                            value: e,
                            color: (0, n(326044).Z)([])
                        }))
                    },
                    validate: e => s.has(e),
                    coerce: n(763230).D_
                }
            }

            function T(e, t) {
                return {
                    schema: {
                        type: "text"
                    },
                    validate: () => !0,
                    coerce: n(763230).D_
                }
            }

            function j(e, t) {
                t || (t = function(e, t) {
                    let n = ",",
                        r = 0,
                        a = e.split(/\r?\n/).slice(0, 10).join("\n");
                    for (let e of t) {
                        let t = function(e, t) {
                            let n = [],
                                r = [],
                                a = "",
                                i = !1;
                            for (let o = 0; o < e.length; o++) {
                                let s = e[o],
                                    l = e[o + 1];
                                '"' === s ? i && '"' === l ? (a += '"', o++) : i = !i : s !== t || i ? "\n" !== s && "\r" !== s || i ? a += s : (r.push(a), r.length > 0 && n.push(r), r = [], a = "", "\r" === s && "\n" === l && o++) : (r.push(a), a = "")
                            }
                            return (a || r.length > 0) && (r.push(a), n.push(r)), n.filter(e => e.length > 0 && e.some(e => e.trim()))
                        }(a, e);
                        if (t.length <= 1) continue;
                        let i = t.map(e => e.length),
                            o = function(e) {
                                var t;
                                return Number((null == (t = Object.entries(e.reduce((e, t) => (e[t] = (e[t] || 0) + 1, e), {})).sort((e, t) => t[1] - e[1])[0]) ? void 0 : t[0]) || 0)
                            }(i),
                            s = i.filter(e => e === o).length / i.length,
                            l = o >= 6 ? .6 : .7;
                        if (o <= 1 || s < l) continue;
                        let u = t.flat().filter(t => t.includes(e)).length / (t.length * o),
                            d = 100 * s + 10 * o - 50 * u;
                        d > r && (r = d, n = e)
                    }
                    return n
                }(e, [",", ";", "	", "|"]));
                let n = [],
                    r = [],
                    a = "",
                    i = !1;
                for (let o = 0; o < e.length; o++) {
                    let s = e[o],
                        l = e[o + 1];
                    if ('"' === s) i && '"' === l ? (a += '"', o++) : i = !i;
                    else if (s !== t || i)
                        if ("\n" !== s && ("\r" !== s || "\n" === l) || i) {
                            if ("\r" === s && "\n" === l && !i) continue;
                            a += s
                        } else r.push(a), n.push(r), r = [], a = "";
                    else r.push(a), a = ""
                }
                return (a || r.length > 0) && (r.push(a), n.push(r)), n
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
            "use strict";
            n.d(t, {
                y: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.87 3.62 16.25 12.75",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6.303 3.625c-.71 0-1.374.355-1.768.946L2.232 8.025c-.233.35-.357.76-.357 1.18v5.045c0 1.174.951 2.125 2.125 2.125h12a2.125 2.125 0 0 0 2.125-2.125V9.204c0-.42-.124-.83-.357-1.179l-2.303-3.454a2.13 2.13 0 0 0-1.768-.946zm-.728 1.64a.88.88 0 0 1 .728-.39h7.394c.293 0 .566.146.728.39l2.303 3.454a1 1 0 0 1 .083.156h-4.702a.625.625 0 0 0-.625.625v.476a1.484 1.484 0 0 1-2.968 0V9.5a.625.625 0 0 0-.625-.625H3.189a1 1 0 0 1 .083-.156zm-2.45 4.86H7.27a2.734 2.734 0 0 0 5.46 0h4.145v4.125a.875.875 0 0 1-.875.875H4a.875.875 0 0 1-.875-.875z"
                    })
                },
                a = (0, n(104509).wt)("inbox", r, "default")
        },
        789722: (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => r
            });
            let r = (0, n(109939).YK)({
                done: {
                    id: "modal.doneButton",
                    defaultMessage: "Done"
                },
                cancel: {
                    id: "modal.cancelButton",
                    defaultMessage: "Cancel"
                },
                back: {
                    id: "modal.backButton",
                    defaultMessage: "Back"
                }
            })
        },
        799843: (e, t, n) => {
            "use strict";
            n.d(t, {
                DG: () => u,
                OH: () => s,
                nl: () => o,
                x$: () => l
            });
            let r = (0, n(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.year",
                        defaultMessage: "{numYears, plural, one {{numYears} year ago} other {{numYears} years ago}}"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.day",
                        defaultMessage: "{numDays, plural, one {{numDays} day ago} other {{numDays} days ago}}"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.week",
                        defaultMessage: "{numWeeks, plural, one {{numWeeks} week ago} other {{numWeeks} weeks ago}}"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.hour",
                        defaultMessage: "{numHours, plural, one {{numHours} hour ago} other {{numHours} hours ago}}"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.minute",
                        defaultMessage: "{numMinutes, plural, one {{numMinutes} minute ago} other {{numMinutes} minutes ago}}"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.second",
                        defaultMessage: "Just now"
                    }
                }),
                a = (0, n(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.ultraCompactYear",
                        defaultMessage: "{numYears}y"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.ultraCompactDay",
                        defaultMessage: "{numDays}d"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.ultraCompactWeek",
                        defaultMessage: "{numWeeks}w"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.ultraCompactHour",
                        defaultMessage: "{numHours}h"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.ultraCompactMinute",
                        defaultMessage: "{numMinutes}m"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.ultraCompactSeconds",
                        defaultMessage: "Just now"
                    }
                }),
                i = (0, n(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.compactYear",
                        defaultMessage: "{numYears}y ago"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.compactDay",
                        defaultMessage: "{numDays}d ago"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.compactWeek",
                        defaultMessage: "{numWeeks}w ago"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.compactHour",
                        defaultMessage: "{numHours}h ago"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.compactMinute",
                        defaultMessage: "{numMinutes}m ago"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.compactSecond",
                        defaultMessage: "Just now"
                    }
                });

            function o(e, {
                useCompactFormat: t,
                useUltraCompactFormat: s,
                useLowercase: l,
                roundDownYears: u,
                useWeeks: d,
                showDaysToOneWeek: c,
                nowOverrideMs: p = Date.now()
            } = {}) {
                let f = s ? a : t ? i : r,
                    m = new Date(e),
                    g = n(962299).A.getIntl().locale,
                    D = new Date(p),
                    h = Number(D) - e;
                if (h >= n(627179).Gq && u) {
                    let e = Math.floor(h / n(627179).Gq);
                    return n(962299).A.formatMessage(f.year, {
                        numYears: e
                    })
                }
                if (m.getFullYear() !== D.getFullYear()) return m.toLocaleDateString(g, s ? {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                } : {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                let _ = Math.floor(h / n(627179).nD);
                if (_ < 28 && _ > 7 && d || c && 7 === _) {
                    let e = Math.floor(_ / 7);
                    return n(962299).A.formatMessage(f.week, {
                        numWeeks: e
                    })
                }
                if (c && _ > 6 || !c && _ >= 3) return m.toLocaleDateString(g, {
                    month: "short",
                    day: "numeric"
                });
                if (_ >= 1) return n(962299).A.formatMessage(f.day, {
                    numDays: _
                });
                let y = Math.floor(h / n(627179).pT);
                if (y >= 1) return n(962299).A.formatMessage(f.hour, {
                    numHours: y
                });
                let v = Math.floor(h / n(627179).Xb);
                return v >= 1 ? n(962299).A.formatMessage(f.minute, {
                    numMinutes: v
                }) : l ? n(962299).A.formatMessage(f.second).toLocaleLowerCase() : n(962299).A.formatMessage(f.second)
            }

            function s(e, t) {
                let r = t - e,
                    a = Math.floor(r / n(627179).Gq),
                    i = Math.floor(r / n(627179).nD),
                    o = Math.floor(r / n(627179).pT),
                    s = Math.floor(r / n(627179).Xb),
                    l = Math.floor(r / n(627179).TD);
                return a >= 1 ? n(962299).A.formatMessage(n(362008).jX.year, {
                    numYears: a
                }) : i >= 1 ? n(962299).A.formatMessage(n(362008).jX.day, {
                    numDays: i
                }) : o >= 1 ? n(962299).A.formatMessage(n(362008).jX.hour, {
                    numHours: o
                }) : s >= 1 ? n(962299).A.formatMessage(n(362008).jX.minute, {
                    numMinutes: s
                }) : n(962299).A.formatMessage(n(362008).jX.second, {
                    numSeconds: l
                })
            }

            function l(e, t) {
                return new Date(e).toLocaleDateString(n(962299).A.getIntl().locale, {
                    month: "long",
                    year: "numeric",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "2-digit",
                    second: t ? void 0 : "2-digit"
                })
            }

            function u(e) {
                return new Date(e).toLocaleDateString(n(962299).A.getIntl().locale, {
                    month: "short",
                    year: "numeric",
                    day: "numeric"
                })
            }
        },
        799891: (e, t, n) => {
            "use strict";
            n.d(t, {
                y: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.81 2.39 16.38 15.08",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M16.938 9.353c0-2.97-2.539-5.54-6.545-5.697L10 3.648c-4.232 0-6.938 2.639-6.938 5.705 0 1.438.583 2.752 1.617 3.76a.63.63 0 0 1 .18.546 7.3 7.3 0 0 1-.89 2.528c1.108-.13 2.12-.614 3.01-1.344l.063-.044a.63.63 0 0 1 .505-.073 9 9 0 0 0 2.454.333l.392-.007c4.006-.158 6.545-2.728 6.545-5.699m1.25 0c0 3.803-3.234 6.766-7.747 6.948l-.44.008a10.2 10.2 0 0 1-2.485-.299c-1.349 1.022-2.985 1.62-4.826 1.428a.625.625 0 0 1-.406-1.033c.712-.817 1.096-1.737 1.284-2.642-1.116-1.197-1.756-2.733-1.756-4.41 0-3.925 3.447-6.955 8.189-6.955l.44.009c4.512.181 7.747 3.143 7.747 6.946"
                    })
                },
                a = (0, n(104509).wt)("chatBubble", r, "default")
        },
        802942: (e, t, n) => {
            "use strict";
            n.d(t, {
                k: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.18 1.73 11.64 12.54",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.435 1.735c-.875 0-1.585.71-1.585 1.585v.735H3.765c-.875 0-1.585.71-1.585 1.585v7.04c0 .875.71 1.585 1.585 1.585h4.8c.876 0 1.585-.71 1.585-1.585v-.735h2.085c.876 0 1.585-.71 1.585-1.585V5.638c0-.42-.167-.824-.464-1.121l-2.318-2.318a1.6 1.6 0 0 0-1.12-.464zM7.1 3.32c0-.185.15-.335.335-.335H9.58V4.44c0 .848.687 1.535 1.535 1.535h1.455v4.385c0 .185-.15.335-.335.335H10.15V7.958c0-.42-.167-.824-.464-1.121L7.368 4.519a1.6 1.6 0 0 0-.268-.215zm3.63 1.12v-.781l1.166 1.166h-.78a.385.385 0 0 1-.386-.385m-7.3 1.2c0-.185.15-.335.335-.335H5.91V6.76c0 .848.687 1.535 1.535 1.535H8.9v4.385c0 .185-.15.335-.335.335h-4.8a.335.335 0 0 1-.335-.335zm3.63 1.12v-.781l1.166 1.166h-.78a.385.385 0 0 1-.386-.385"
                    })
                },
                a = (0, n(104509).wt)("docOnDocSmall", r, "small")
        },
        811558: (e, t, n) => {
            "use strict";
            var r = n(746518),
                a = n(439928),
                i = n(225397),
                o = Array;
            r({
                target: "Array",
                proto: !0
            }, {
                with: function(e, t) {
                    return a(i(this), o, e, t)
                }
            })
        },
        816231: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(296540),
                a = n(474848);

            function i(e) {
                let t = (0, r.useRef)(null),
                    n = (0, r.useRef)(!1);
                (0, r.useEffect)(() => {
                    let n = t.current;
                    if (!n) return;
                    let r = e.el.getBoundingClientRect();
                    n.style.height = `${r.height}px`;
                    let a = 0,
                        i = e => {
                            cancelAnimationFrame(a), a = requestAnimationFrame(() => {
                                ! function({
                                    div: e,
                                    rect: t,
                                    mouseX: n,
                                    mouseY: r
                                }) {
                                    let {
                                        x: a,
                                        y: i,
                                        height: o,
                                        width: s
                                    } = t;
                                    if (n > a) {
                                        let t = Math.max(n - (a + s), 10);
                                        e.style.insetInlineEnd = `${-t}px`, e.style.insetInlineStart = "", e.style.width = `${t}px`, e.style.clipPath = `polygon(0% 0%, 0% 100%, 100% ${100*(r-i)/o}%)`
                                    } else {
                                        let t = Math.max(a - n, 10);
                                        e.style.insetInlineEnd = "", e.style.insetInlineStart = `${-t}px`, e.style.width = `${t}px`, e.style.clipPath = `polygon(100% 0%, 0% ${100*(r-i)/o}%, 100% 100%)`
                                    }
                                }({
                                    div: n,
                                    rect: r,
                                    mouseX: e.clientX,
                                    mouseY: e.clientY
                                })
                            })
                        };
                    return window.addEventListener("mousemove", i), () => {
                        window.removeEventListener("mousemove", i), cancelAnimationFrame(a)
                    }
                }, [e.el]);
                let i = r.useCallback(e => {
                    if (!n.current && t.current) {
                        t.current.style.pointerEvents = "none";
                        let r = document.elementFromPoint(e.clientX, e.clientY);
                        if (r === t.current && (t.current.style.visibility = "hidden", r = document.elementFromPoint(e.clientX, e.clientY), t.current.style.visibility = ""), r && r !== t.current) {
                            n.current = !0;
                            try {
                                let t = new MouseEvent(e.nativeEvent.type, e.nativeEvent);
                                r.dispatchEvent(t)
                            } finally {
                                n.current = !1
                            }
                        }
                        t.current.style.pointerEvents = "auto"
                    }
                }, []);
                return (0, a.jsx)("div", {
                    ref: t,
                    onClick: i,
                    className: "x1ypdohk x10l6tqk x67bb7w x13vifvy"
                })
            }
            let o = {
                    krdFHd: "x6nl9eh",
                    kfmiAY: "x1a5l9x9",
                    kT0f0o: "x7vuprf",
                    kVL7Gh: "x1mg3h75",
                    kWkggS: "x7nwptm",
                    $$css: !0
                },
                s = {
                    kXHlph: "x1plvlek",
                    kORKVm: "xryxfnj",
                    $$css: !0
                },
                l = r.forwardRef(function({
                    onClick: e,
                    children: t,
                    renderExtension: l,
                    allowOptionalExtensionMenu: u,
                    ...d
                }, c) {
                    let {
                        disabled: p,
                        disableDefaultClick: f,
                        onFocus: m,
                        focused: g,
                        placementToOrigin: D,
                        alignmentToOrigin: h,
                        disableCloseOnEnter: _,
                        bottomSheetInitialState: y,
                        popupTypeOverride: v
                    } = d, b = (0, n(533992).WS)(), C = (0, n(649476).Tf)(), [S, w] = (0, r.useState)(!1), [k, x] = (0, r.useState)(!1), F = (0, r.useRef)(null), I = (0, r.useRef)(null), A = (0, r.useRef)(null), E = (0, r.useRef)(null), M = (0, r.useCallback)(() => {
                        A.current && window.clearTimeout(A.current), E.current && window.clearTimeout(E.current), A.current = null, E.current = null
                    }, []), B = (0, r.useCallback)(() => {
                        M(), p || (w(!0), x(!0))
                    }, [p, M]), T = (0, r.useCallback)(() => {
                        M(), x(!1), w(!1)
                    }, [M]), j = (0, r.useCallback)(e => {
                        M(), S || (e && e.preventDefault && e.preventDefault(), A.current = window.setTimeout(B, 120))
                    }, [S, M, B]), P = (0, r.useCallback)(() => {
                        x(!1), M(), S && (E.current = window.setTimeout(T, 100))
                    }, [S, T, M]), U = (0, r.useCallback)(t => {
                        m(), B(), u && (null == e || e(t), T())
                    }, [m, B, u, e, T]), O = (0, r.useCallback)(() => {
                        b || j()
                    }, [j, b]), L = (0, r.useCallback)(() => {
                        b || (m(), j())
                    }, [m, j, b]), N = (0, r.useCallback)(e => {
                        if (n(986939).A.isMobile) return;
                        let t = F.current;
                        S && t && !t.contains(e.target) && T()
                    }, [S, T]), R = (0, r.useCallback)(e => {
                        13 === e.keyCode && S && !_ && T()
                    }, [S, T, _]);
                    (0, r.useEffect)(() => {
                        if (!f) return window.addEventListener("click", N), () => {
                            window.removeEventListener("click", N)
                        }
                    }, [f, N]), (0, r.useEffect)(() => (window.addEventListener("keydown", R), () => {
                        window.removeEventListener("keydown", R)
                    }), [R]);
                    let V = (0, r.useRef)(g);
                    (0, r.useEffect)(() => {
                        !g && V.current && P(), V.current = g
                    }, [g, P]);
                    let z = { ...(0, n(63390).A)({
                                onMouseEnter: O,
                                onClick: U
                            }, d),
                            showExtensionArrow: !0
                        },
                        W = n(423291).n.Popup;
                    return v ? W = v : b && (W = C ? n(423291).n.BottomSheet : n(423291).n.SlideUp), (0, a.jsx)(n(369064).N, {
                        debugName: "ExtensionMenuItem",
                        capture: g,
                        onEnter: S ? void 0 : j,
                        onRight: j,
                        onLeft: S ? P : void 0,
                        onEsc: S ? P : void 0,
                        children: (0, a.jsx)(n(182718).zD, {
                            popupType: W,
                            bottomSheetInitialState: y,
                            open: S,
                            placementToOrigin: D ? ? "right",
                            alignmentToOrigin: h ? ? "center",
                            originGap: 0,
                            disableMouseCapture: !0,
                            preventBlockRenderQueueOnEnter: !0,
                            preventScaleTransition: !b,
                            preventCaptureEsc: !0,
                            ref: F,
                            content: () => (0, a.jsxs)(a.Fragment, {
                                children: [!b && k && I.current ? (0, a.jsx)(i, {
                                    el: I.current
                                }) : null, (0, a.jsx)("div", {
                                    ref: I,
                                    ...{
                                        className: "x5yr21d"
                                    },
                                    children: l({
                                        onMouseEnter: L
                                    }, {
                                        close: P
                                    })
                                })]
                            }),
                            style: [s, b && o],
                            trapFocus: !0,
                            onDismiss: T,
                            children: null == t ? void 0 : t(z, c)
                        })
                    })
                })
        },
        822284: (e, t, n) => {
            "use strict";
            n.d(t, {
                BS: () => i,
                BusinessTrialEndingModalStore: () => a,
                HL: () => r,
                ZJ: () => s,
                jz: () => o
            });
            let r = n(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    potentialCampaigns: []
                }, {
                    name: "BusinessTrialStartModalStore"
                }),
                a = n(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    recentPageStores: [],
                    verifiedPageStores: [],
                    teamStores: [],
                    workspaceUserStores: [],
                    connectedApps: [],
                    workflowStores: [],
                    numAiMeetingMinutes: 0,
                    modalState: "initial"
                }, {
                    name: "BusinessTrialEndingModalStore"
                }),
                i = n(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    connectedApps: [],
                    teamStores: [],
                    pageStores: [],
                    onSecondaryButtonClick: void 0
                }, {
                    name: "BusinessTrialLossAversionModalStore"
                }),
                o = n(546605).Store.createValue({
                    open: !1,
                    connectedApps: [],
                    teamStores: [],
                    pageStores: []
                }, {
                    name: "BusinessTrialExplorePlanModalStore"
                }),
                s = n(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    trialCampaign: void 0,
                    showBillingIntervalSelect: !1
                }, {
                    name: "BusinessTrialCCUpfrontModalStore"
                })
        },
        828294: (e, t, n) => {
            "use strict";

            function r(e) {
                let t = (0, n(83208).X)(e);
                return "on" === (0, n(604306).r)("agent_writer_custom_skills") || t
            }

            function a(e) {
                return "on" === n(218744).default.getEligibleGroup({
                    experimentId: "agent_writer_custom_skills",
                    defaultGroup: "control"
                }) || n(218744).default.checkGate({
                    gateName: e
                })
            }
            n.d(t, {
                N: () => r,
                a: () => a
            })
        },
        832139: (e, t, n) => {
            "use strict";

            function r() {
                return ((0, n(907620).T)("isSamsungPreload") || (0, n(907620).T)("isInstalledFromSamsungAppStore")) && n(218744).default.checkGate({
                    gateName: "samsung_disable_all_upgrades"
                })
            }
            n.d(t, {
                A: () => r
            })
        },
        832248: (e, t, n) => {
            "use strict";
            n.d(t, {
                S7: () => s,
                fF: () => y,
                es: () => _,
                LE: () => D,
                zs: () => g,
                HE: () => m,
                yg: () => h,
                QH: () => f,
                kn: () => p,
                mB: () => l,
                L$: () => u,
                X3: () => d,
                jX: () => c
            }), n(898992), n(354520), n(581454), n(944114);
            var r = () => n(896346);
            class a extends r().p3 {
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
                o = {
                    hour: a.HOURLY,
                    day: a.DAILY,
                    week: a.WEEKLY,
                    month: a.MONTHLY,
                    year: a.YEARLY
                },
                s = {
                    MO: a.MO,
                    TU: a.TU,
                    WE: a.WE,
                    TH: a.TH,
                    FR: a.FR,
                    SA: a.SA,
                    SU: a.SU
                };

            function l(e) {
                return (0, n(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 99
            }

            function u(e) {
                return (0, n(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 999
            }

            function d(e) {
                let {
                    start_date: t,
                    frequency: r,
                    interval: i,
                    weekdays: l,
                    timezone: u,
                    hour: d,
                    minute: c
                } = e, p = (0, n(943003).eU)(t);
                "hour" === r && p.setUTCHours(d ? ? 0, c ? ? 0, 0, 0);
                let f = "week" === r && l ? l.map(e => s[e]) : void 0,
                    m = {};
                return (0, n(722371).O9)(e.end_condition) && ("date" === e.end_condition.type ? m.until = (0, n(943003).eU)(e.end_condition.end_at) : "number" === e.end_condition.type ? m.count = e.end_condition.number_of_occurrences : (0, n(722371).HB)(e.end_condition)), "month" === e.frequency && (0, n(722371).O9)(e.monthly_restriction) && ("monthdays" === e.monthly_restriction.type ? m.bymonthday = e.monthly_restriction.monthdays : "weekdays_in_month" === e.monthly_restriction.type ? m.byweekday = (function e(t, ...n) {
                    if (0 === n.length) return t.map(e => [e]);
                    let r = [];
                    for (let a of t) r.push(...e(n[0], ...n.slice(1)).map(e => [a, ...e]));
                    return r
                })(e.monthly_restriction.weekdays, e.monthly_restriction.week_numbers).map(([e, t]) => s[e].nth(t)) : (0, n(722371).HB)(e.monthly_restriction)), new a({
                    freq: o[r],
                    dtstart: p,
                    interval: i,
                    byweekday: f,
                    tzid: "hour" === r ? void 0 : u,
                    ..."hour" === r ? {} : {
                        byhour: d ? ? 0,
                        byminute: c ? ? 0,
                        bysecond: 0
                    },
                    ...m
                })
            }

            function c(e) {
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
                    r = e.length,
                    a = null == (t = e[0].getRecurrence()) ? void 0 : t.frequency,
                    i = r > 1,
                    o = n.length >= 1;
                return {
                    violatesConstraint: i || o,
                    templateNestingExceedsMaxDepth: i,
                    ancestorHasDailyTemplate: o,
                    nestedDepthOfAutomationAncestors: r,
                    immediateAncestorRecurrenceType: a
                }
            }

            function p(e) {
                return 0 === e.hour || 1 === e.hour || 2 === e.hour
            }

            function f(e) {
                return d(e).after((0, n(943003).eU)((0, n(943003).Rz)())) || void 0
            }

            function m(e) {
                let {
                    recurrence: t,
                    intl: r
                } = e, a = "hour" === t.frequency ? function(e) {
                    let t = n(906745).DateTime.now();
                    if (n(906745).DateTime.fromMillis(e.start_date) > t) return e;
                    let r = t.startOf("hour");
                    return { ...e,
                        start_date: r.toMillis(),
                        hour: r.hour,
                        minute: r.minute
                    }
                }(t) : t, o = f(_(a));
                if (!o) return;
                let s = n(906745).DateTime.fromJSDate(o).toUTC().setZone("local", {
                    keepLocalTime: !0
                }).setLocale((0, n(599412).H)(r));
                "hour" !== a.frequency && (s = s.setZone(a.timezone));
                let l = "hour" !== t.frequency && p(t),
                    u = (0, n(850640).Yq)({
                        date: s,
                        dateFormat: "relative",
                        allowRelativeDates: !0,
                        intl: r,
                        shortenDate: !0
                    });
                if (l) return r.formatMessage(i.dateBetweenMidnightAnd3AM, {
                    date: u
                }); {
                    let e = s.toLocaleString(n(906745).DateTime.TIME_SIMPLE);
                    return t.timezone !== (0, n(714350).P)() && (e += ` ${s.toFormat("ZZZZ")}`), r.formatMessage(i.dateAtTime, {
                        date: u,
                        time: e
                    })
                }
            }

            function g(e, t) {
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

            function D(e) {
                return { ...e,
                    start_date: (0, n(943003).l1)(e.start_date),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? {
                        type: "date",
                        end_at: (0, n(943003).l1)(e.end_condition.end_at)
                    } : (0, n(722371).HB)(e.end_condition) : void 0
                }
            }

            function h(e, t, n) {
                return e.plus(n - t)
            }

            function _(e) {
                var t;
                let r;
                return { ...e,
                    start_date: (0, n(943003).Rz)(new Date(e.start_date)),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? (t = e.end_condition, r = n(906745).DateTime.fromMillis(t.end_at).set({
                        hour: e.hour ? ? 0,
                        minute: e.minute ? ? 0
                    }), {
                        type: "date",
                        end_at: (0, n(943003).Rz)(r.toJSDate())
                    }) : (0, n(722371).HB)(e.end_condition) : void 0
                }
            }

            function y(e, t) {
                let r = n(381453).fN(e, e => void 0 !== e),
                    a = n(381453).fN(t, e => void 0 !== e);
                return n(381453).n4(r, a)
            }
        },
        832338: (e, t, n) => {
            "use strict";
            e.exports = n.p + "4d1ffa233a574cb5.png"
        },
        848135: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => a
            });
            var r = n(296540);

            function a() {
                let e = (0, r.useRef)(null),
                    [t, n] = (0, r.useState)(!1),
                    a = (0, r.useCallback)(() => {
                        let t = e.current;
                        t && n(t.matches(":hover"))
                    }, []);
                return [(0, r.useCallback)(t => {
                    t ? (t.addEventListener("mouseenter", a), t.addEventListener("mouseleave", a), e.current = t, a()) : e.current && (e.current.removeEventListener("mouseenter", a), e.current.removeEventListener("mouseleave", a), e.current = null)
                }, [a]), t, e]
            }
        },
        852864: (e, t, n) => {
            "use strict";

            function r({
                spaceStore: e,
                userId: t,
                environment: a
            }) {
                let i = new(n(736309)).d(a, {
                    table: n(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return i ? n(994797).SpaceViewStore.createChildStore(e, {
                    id: i.id,
                    table: n(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
            n.d(t, {
                H: () => r
            }), n(898992), n(672577)
        },
        853160: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                checkmarkCircleIcon: () => i,
                iconDefinition: () => a
            }), n(296540);
            var r = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M12.876 7.982a.625.625 0 1 0-1.072-.644L9.25 11.595 7.815 9.92a.625.625 0 0 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                        }), (0, r.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0"
                        })]
                    })
                },
                i = (0, n(104509).wt)("checkmarkCircle", a, "default")
        },
        855021: (e, t, n) => {
            "use strict";

            function r() {
                let e = (0, n(972740).L)(),
                    t = (0, n(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    r = (0, n(533992).v3)(),
                    a = (0, n(682985).K8)(() => n(375592).T.getData(r, {
                        userId: r.currentUser.id || ""
                    }), [r]);
                return (0, n(682985).K8)(() => (0, n(407998).V)({
                    environment: r,
                    spaceStore: e,
                    billingData: t,
                    externalOrgSummary: a
                }), [r, e, t, a])
            }
            n.d(t, {
                q: () => r
            })
        },
        855361: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    environment: t,
                    spaceId: r
                } = e;
                return (0, n(682985).K8)(() => {
                    if (r) return (0, n(616579).j)({
                        environment: t,
                        spaceId: r
                    })
                }, [t, r])
            }
            n.d(t, {
                S: () => r
            })
        },
        862215: (e, t, n) => {
            "use strict";

            function r(e, t) {
                let {
                    device: n
                } = e;
                n.isAndroid && t.focus(), t.select()
            }
            n.d(t, {
                G: () => r
            })
        },
        862451: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    clientStore: a,
                    userStore: i,
                    transcript: o,
                    threadId: s,
                    initialAgentActions: l,
                    analyticsArgs: u
                } = e, d = (0, n(330942).f_)(o), {
                    serverCommitResult: c,
                    performResult: p
                } = (0, n(377796).createAndCommit)({
                    userAction: "WorkflowActions.addTranscriptToNewThreadAndRun",
                    environment: t,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: r.id
                    },
                    perform: e => (0, n(757688).aP)({
                        environment: t,
                        spaceStore: r,
                        userStore: i,
                        transaction: e,
                        transcript: o,
                        threadId: s,
                        threadType: (null == d ? void 0 : d.type) ? ? "workflow"
                    })
                });
                return (0, n(757688).WE)({
                    environment: t,
                    clientStore: a,
                    threadStore: p,
                    waitBeforeSending: c,
                    analyticsArgs: u,
                    sendPatchResponse: !1,
                    initialAgentActions: l
                }), p
            }
            async function a(e) {
                let {
                    environment: t,
                    parentStore: r,
                    userStep: a,
                    onThreadChange: i
                } = e, o = n(674880).defaultInferenceContextStore.state;
                if (!o) throw Error("No inference context");
                let {
                    spaceStore: s
                } = o, {
                    performResult: l,
                    serverCommitResult: u
                } = (0, n(377796).createAndCommit)({
                    userAction: "SetupGenerator.handlePromptSubmit",
                    environment: t,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: s.id
                    },
                    perform: e => (function(e) {
                        let {
                            environment: t,
                            transaction: r,
                            parentStore: a
                        } = e, i = n(728372).AppStoreSidebarSpaceStore.state, o = n(728372).AppStoreSidebarSpaceViewStore.state;
                        if (!i || !o) throw Error("No current space");
                        let s = n(124937).Wv({
                            environment: t,
                            type: "collection_view_page",
                            transaction: r,
                            inMemoryRecordCache: i.inMemoryRecordCache
                        });
                        return (0, n(351418).Ls)({
                            environment: t,
                            parentStore: a ? ? i,
                            collectionViewBlockStore: s,
                            transaction: r,
                            appendOrPrepend: "append",
                            spaceViewStore: o
                        }), {
                            workflowStore: function(e) {
                                let {
                                    environment: t,
                                    store: r,
                                    transaction: a
                                } = e;
                                return function(e) {
                                    let {
                                        environment: t,
                                        store: r,
                                        transaction: a,
                                        workflowData: i
                                    } = e, o = n(124937).vt({
                                        environment: t,
                                        table: n(43296).C,
                                        args: {
                                            id: (0, n(295447).Z1)({
                                                environment: t,
                                                table: n(43296).C,
                                                spaceId: r.getSpaceId()
                                            }),
                                            data: i,
                                            parentPointer: {
                                                table: n(682956).ev,
                                                id: r.id
                                            },
                                            space_id: r.getSpaceId()
                                        },
                                        inMemoryRecordCache: r.inMemoryRecordCache,
                                        transaction: a
                                    });
                                    return (0, n(715144).z)({
                                        stores: [r],
                                        update: {
                                            workflow_id: o.id
                                        },
                                        transaction: a
                                    }), o
                                }({
                                    environment: t,
                                    transaction: a,
                                    store: r,
                                    workflowData: {
                                        modules: []
                                    }
                                })
                            }({
                                environment: t,
                                store: s,
                                transaction: r
                            }),
                            collectionViewBlockStore: s
                        }
                    })({
                        environment: t,
                        transaction: e,
                        parentStore: r
                    })
                });
                await u;
                let {
                    collectionViewBlockStore: d
                } = l, c = function(e) {
                    let {
                        environment: t,
                        inferenceContext: r,
                        addSteps: a = [],
                        config: i
                    } = e;
                    return (0, n(674880).Xd)({
                        environment: t,
                        inferenceContext: r,
                        config: i && "workflow" !== i.type ? i : (0, n(922900).getWorkflowAgentConfig)({
                            environment: t,
                            ...i
                        }),
                        addSteps: a,
                        surface: "workflows"
                    })
                }({
                    environment: t,
                    inferenceContext: o,
                    store: d,
                    addSteps: [a]
                }), p = (0, n(225900).N)({
                    environment: t,
                    spaceStore: s,
                    transcript: c
                });
                null == i || i(p)
            }
            async function i(e) {
                let {
                    environment: t,
                    clientStore: r,
                    message: a,
                    configs: i
                } = e, o = (0, n(328765).S)();
                if (!o) throw Error("No current space store");
                let s = t.currentUser.id;
                if (!s) throw Error("No current user");
                if ((0, n(247438).q4_)(a).trim().length < 6) return;
                let l = i.filter(e => n(180139)._z.includes(e.type)),
                    u = await t.api.callStreamApi({
                        eventName: "runInferenceTranscript",
                        environment: t,
                        data: {
                            transcript: [{
                                id: (0, n(295447).Z1)({
                                    environment: t,
                                    table: n(832375).mSw,
                                    spaceId: o.id
                                }),
                                type: "config",
                                value: {
                                    type: "route-inference-transcript",
                                    configs: l
                                }
                            }, {
                                id: (0, n(295447).Z1)({
                                    environment: t,
                                    table: n(832375).mSw,
                                    spaceId: o.id
                                }),
                                type: "user",
                                value: a,
                                userId: s
                            }],
                            traceId: (0, n(4962).Ay)(),
                            spaceId: o.id,
                            generateTitle: !1,
                            isUserInAnySalesAssistedSpace: (0, n(598132).h0)(t),
                            isSpaceSalesAssisted: (0, n(598132).lM)(t, o.id)
                        },
                        headers: (0, n(115118).WS)({
                            spaceId: o.id
                        })
                    });
                if ("failed" === u.type) throw u.error;
                if (n(331653).hS.is(u.data)) {
                    for await (let e of u.data) if ("config" === e.type) r.state.userSelectedConfig || r.setState({ ...r.state,
                        configForNewTranscripts: e.value
                    });
                    else if ("error" === e.type) throw e.message
                }
            }

            function o(e) {
                var t;
                let {
                    environment: r,
                    oldThreadStore: a,
                    newThreadStore: i,
                    openUsingQuickSearchHandler: o,
                    openInNewTab: s,
                    createdSource: l,
                    resetLocalThreadStore: u,
                    isAgent: c,
                    initialAgentActions: p
                } = e, f = (null == i ? void 0 : i.id) || (c ? n(548124).NEW_CHAT_THREAD_ID : void 0), m = null == i ? void 0 : i.getConfig(), g = (0, n(330942).sQ)(m);
                (null == m ? void 0 : m.type) === "search" ? (0, n(850552).By)({
                    sessionId: void 0,
                    searchSessionId: g,
                    threadId: f,
                    environment: r,
                    createdSource: l,
                    isAgent: !1
                }) : (null == m ? void 0 : m.type) === "workflow" && null != p && p.includes("injectSearchTool") && (0, n(850552).By)({
                    sessionId: void 0,
                    searchSessionId: g,
                    threadId: f,
                    environment: r,
                    createdSource: l,
                    isAgent: !0
                }), f && (null == m ? void 0 : m.type) === "researcher" && ((null == i ? void 0 : i.getTranscript()) || []).some(e => "researcher-report" === e.type) && n(274498).MU({
                    environment: r,
                    researchModeThreadId: f,
                    source: "chat_history"
                });
                let D = r.device.isElectron,
                    h = r.RouterStore.state.route,
                    _ = "chat" === h.name && h.peekViewBlockId && ("settings" === h.workflowViewType || "activity" === h.workflowViewType) ? {
                        workflowViewType: h.workflowViewType,
                        peekViewBlockId: h.peekViewBlockId,
                        peekMode: h.peekMode
                    } : void 0,
                    y = "chat" === h.name && n(273061).S.state.open && n(273061).S.state.agentId && n(273061).S.state.mode ? {
                        workflowViewType: n(273061).S.state.mode,
                        peekViewBlockId: n(273061).S.state.agentId,
                        peekMode: h.peekMode
                    } : void 0,
                    v = _ ? ? y,
                    b = d({
                        environment: r,
                        threadId: f,
                        spaceId: null == (t = n(728372).AppStoreSidebarSpaceStore.state) ? void 0 : t.id,
                        config: null == a ? void 0 : a.getConfig(),
                        additionalQueryParams: v ? {
                            [n(737869).CS]: v.workflowViewType,
                            [n(737869).ZI]: (0, n(4962).Xw)(v.peekViewBlockId),
                            ...v.peekMode ? {
                                [n(737869).fT]: v.peekMode
                            } : {}
                        } : void 0
                    });
                if ("chat" !== h.name && "ai" !== h.name && n(562733).zI.setState({ ...n(562733).zI.state,
                        fullPageChatSourceUrl: window.location.href
                    }), D && (null == u || u()), o && D) return void(0, n(916187).N)(b);
                if (s && D) {
                    (0, n(96351).B)({
                        makeTabActive: !0,
                        url: b,
                        position: "end",
                        openInNew: "tab",
                        environment: r
                    }), n(635257).st({
                        reset: !1
                    });
                    return
                }(0, n(79266).navigate)({
                    environment: r,
                    url: b,
                    ...s ? {
                        openInNew: "tab",
                        makeTabActive: !1
                    } : {}
                })
            }

            function s(e) {
                let {
                    environment: t,
                    query: i,
                    clientStore: s,
                    config: l,
                    additionalSteps: u = [],
                    openInNewTab: c,
                    openUsingQuickSearchHandler: p,
                    surface: f,
                    suggestedPrompt: m,
                    initialAgentActions: g
                } = e, D = n(674880).defaultInferenceContextStore.state;
                if (!D) throw Error("No inference context");
                let {
                    spaceStore: h,
                    userStore: _
                } = D;
                (0, n(757688).Wq)({
                    clientStore: s,
                    environment: t
                });
                let y = l.type;
                if (c && ("search" === y || "workflow" === y)) return void
                function(e) {
                    var t;
                    let {
                        environment: r,
                        config: a,
                        query: i,
                        openUsingQuickSearchHandler: o,
                        initialAgentActions: s
                    } = e, l = r.device.isElectron, u = d({
                        environment: r,
                        threadId: void 0,
                        spaceId: null == (t = n(728372).AppStoreSidebarSpaceStore.state) ? void 0 : t.id,
                        config: a,
                        query: i,
                        forceRouteToChat: !0,
                        initialAgentActions: s
                    });
                    if (o && l) return (0, n(916187).N)(u);
                    if (l) {
                        (0, n(96351).B)({
                            makeTabActive: !0,
                            url: u,
                            position: "end",
                            openInNew: "tab",
                            environment: r
                        }), n(635257).st({
                            reset: !1
                        });
                        return
                    }(0, n(79266).navigate)({
                        environment: r,
                        url: u,
                        openInNew: "tab",
                        makeTabActive: !1
                    })
                }({
                    environment: t,
                    config: l,
                    query: i,
                    openUsingQuickSearchHandler: p,
                    initialAgentActions: g
                });
                let v = (0, n(674880).Kf)({
                        environment: t,
                        spaceStore: h,
                        userStore: _,
                        value: i
                    }),
                    b = (0, n(909212).re)();
                if ("workflow" !== l.type || b) {
                    let e = (0, n(674880).Xd)({
                            environment: t,
                            config: l,
                            inferenceContext: D,
                            addSteps: [...u, v],
                            surface: f
                        }),
                        a = r({
                            environment: t,
                            spaceStore: h,
                            clientStore: s,
                            userStore: _,
                            transcript: e,
                            initialAgentActions: g,
                            analyticsArgs: {
                                suggestedPrompt: m
                            }
                        });
                    return o({
                        environment: t,
                        oldThreadStore: void 0,
                        newThreadStore: a,
                        openInNewTab: c,
                        openUsingQuickSearchHandler: p,
                        initialAgentActions: g
                    }), a
                }
                a({
                    environment: t,
                    parentStore: h,
                    userStep: v
                })
            }

            function l(e) {
                return (0, n(909212).re)() ? u(e) : {
                    type: "search",
                    scopeForNextSearch: {
                        type: "everything"
                    }
                }
            }

            function u(e) {
                var t;
                let {
                    spaceId: r,
                    searchScopes: a,
                    environment: i
                } = e, o = r ? (null == (t = n(57168).UserChatPreferenceLocalStorageStore.getState()) ? void 0 : t[r]) ? ? {} : {};
                if (r && o.model) {
                    let e = n(218744).default.isStatsigEnabledAndInitialized(),
                        t = "on" === n(218744).default.getEligibleGroup({
                            experimentId: n(432155).Yc,
                            defaultGroup: "control"
                        }),
                        a = (0, n(432155).gg)({
                            userChatPreference: o,
                            isStatsigInitialized: e,
                            shouldResetUserSelectedModel: t
                        });
                    a && ((0, n(432155).Oq)(r, a), o = { ...o,
                        ...a
                    })
                }
                let {
                    webEnabled: s,
                    computerEnabled: l,
                    yoloModeEnabled: u,
                    model: d,
                    readOnlyModeEnabled: c
                } = o, p = d && (0, n(722371).Xk)(n(426048).AGENT_MODEL_TYPES, d) ? d : void 0;
                if (r && p && !n(218744).default.checkGate({
                        gateName: "agent_model_picker"
                    })) {
                    let e = (0, n(317606).getAvailableWorkflowAgentModels)(i, r);
                    e && !e.has(p) && ((0, n(432155).Oq)(r, {
                        model: void 0
                    }), p = void 0)
                }
                return (0, n(922900).getWorkflowAgentConfig)({
                    searchScopes: a,
                    ...void 0 !== s && {
                        useWebSearch: s
                    },
                    ...void 0 !== l && {
                        useComputer: l
                    },
                    ...void 0 !== u && {
                        yoloMode: u
                    },
                    ...void 0 !== c && {
                        useReadOnlyMode: c
                    },
                    model: p,
                    environment: i,
                    spaceId: r
                })
            }

            function d(e) {
                let {
                    environment: t,
                    threadId: r,
                    spaceId: a,
                    config: i,
                    query: o,
                    forceRouteToChat: s,
                    initialAgentActions: u,
                    additionalQueryParams: d
                } = e, c = t.device.isElectron, p = {};
                r && (p[n(737869).P5] = (0, n(4962).Xw)(r)), c && a && (p.spaceId = a), o && (p[n(737869).ah] = encodeURIComponent(JSON.stringify(o))), u && u.length > 0 && (p[n(737869).U] = u.join(","));
                let f = r && r !== n(548124).NEW_CHAT_THREAD_ID;
                if (!f) {
                    let e = l({
                        spaceId: a,
                        environment: t
                    });
                    i && (0, n(271452).bD)(i.type) && (e = i), p[n(737869).q8] = encodeURIComponent(JSON.stringify(e))
                }
                if (!f && !s) return (0, n(758654).Gm)({
                    url: n(168962).JZ.ai,
                    query: p
                });
                if (d)
                    for (let [e, t] of Object.entries(d)) void 0 !== t && (p[e] = t);
                return (0, n(758654).Gm)({
                    url: n(168962).JZ.chat,
                    query: p
                })
            }

            function c(e) {
                let {
                    environment: t,
                    config: a,
                    query: i,
                    surface: s = "search_modal",
                    initialAgentActions: l
                } = e, u = n(674880).defaultInferenceContextStore.state;
                if (!u) throw Error("No inference context");
                let {
                    spaceStore: d,
                    userStore: c
                } = u, p = (0, n(674880).Kf)({
                    environment: t,
                    spaceStore: d,
                    userStore: c,
                    value: i
                }), f = (0, n(674880).Xd)({
                    environment: t,
                    inferenceContext: u,
                    config: a,
                    addSteps: [p],
                    surface: s
                }), m = r({
                    environment: t,
                    spaceStore: d,
                    clientStore: n(57168).defaultClientAIChatStore,
                    userStore: c,
                    transcript: f,
                    initialAgentActions: l
                });
                o({
                    environment: t,
                    newThreadStore: m,
                    oldThreadStore: void 0
                })
            }
            n.r(t), n.d(t, {
                createAndNavigateToInferenceTranscriptWithConfig: () => c,
                createDefaultNewThreadConfigFromUserPreference: () => u,
                createInferenceTranscriptChatRoute: () => d,
                getDefaultNewThreadConfigFromUserPreference: () => l,
                isConfigTransferable: () => f,
                navigateAndStartInferenceTranscript: () => s,
                navigateToInferenceTranscriptRoute: () => o,
                routeInferenceTranscript: () => i
            }), n(16280), n(898992), n(354520), n(737550);
            let p = ["workflow", "researcher", "markdown-chat"];

            function f(e) {
                var t;
                let {
                    config: r,
                    agentEnabled: a
                } = e;
                return !r || !a || (t = r.type, (0, n(722371).Xk)(p, t))
            }
        },
        871086: (e, t, n) => {
            "use strict";

            function r() {
                let e = (0, n(476743).a)();
                return (0, n(682985).K8)(() => {
                    var t;
                    return (null == e || null == (t = e.getSettings()) ? void 0 : t.business_trial_items_completed) ? ? {}
                }, [e])
            }
            n.d(t, {
                w: () => r
            })
        },
        877163: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.62 1.77 10.75 15.98",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M11.633 1.812c.263.096.43.354.41.632l-.392 5.51h3.099a.625.625 0 0 1 .506.992l-6.18 8.54a.625.625 0 0 1-1.13-.412l.402-5.5H5.25a.625.625 0 0 1-.507-.99l6.17-8.55a.625.625 0 0 1 .72-.222m-5.161 8.513H9.02a.625.625 0 0 1 .623.67l-.29 3.976 4.173-5.766H10.98a.625.625 0 0 1-.623-.67l.284-3.987z"
                    })
                },
                a = (0, n(104509).wt)("lightning", r, "default")
        },
        879817: (e, t, n) => {
            "use strict";
            e.exports = n.p + "1ff0049b43405408.png"
        },
        889503: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                getStripe: () => i,
                getStripeAppearance: () => u,
                optionalPaymentMethodIdGivenPaymentData: () => c,
                stripeElementLocaleGivenNotionLocale: () => o,
                translateStripeError: () => l,
                useElementsOptions: () => s
            });
            var r = n(296540);
            let a = null;
            async function i() {
                return a || (n(37458).loadStripe.setLoadParameters({
                    advancedFraudSignals: !1
                }), a = (0, n(37458).loadStripe)(n(986939).A.stripe.key)), a
            }

            function o(e) {
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

            function s(e) {
                let t = (0, n(960253).e)(),
                    a = (0, n(632079).O4)({
                        theme: t
                    }),
                    {
                        type: i
                    } = e,
                    s = "setup" === i || "subscription" === i ? e.currency : void 0,
                    l = "subscription" === i ? e.amount : void 0,
                    d = (0, n(682985).K8)(() => {
                        var e;
                        return (null == (e = n(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.preferred_locale) || n(599412).q
                    }, []);
                return (0, r.useMemo)(() => {
                    let e = {
                            appearance: u(a, t),
                            locale: o(d)
                        },
                        r = {
                            paymentMethodTypes: (0, n(56281).VV)({
                                currency: s
                            })
                        };
                    switch (i) {
                        case "address":
                            return e;
                        case "setup":
                            return { ...e,
                                ...r,
                                currency: null == s ? void 0 : s.toLowerCase(),
                                mode: "setup",
                                paymentMethodCreation: "manual"
                            };
                        case "subscription":
                            return { ...e,
                                ...r,
                                amount: l,
                                currency: null == s ? void 0 : s.toLowerCase(),
                                mode: "subscription",
                                paymentMethodCreation: "manual",
                                setupFutureUsage: "off_session",
                                loader: "never"
                            };
                        default:
                            (0, n(722371).HB)(i)
                    }
                }, [a, t, d, s, i, l])
            }

            function l(e, t) {
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
                            r = t.decline_code;
                        switch (r) {
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

            function u(e, t) {
                let r = d(e.text.primary),
                    a = d(e.text.secondary),
                    i = d(e.text.tertiary),
                    o = d(e.red.text.accentPrimary),
                    s = d(e.blue.text.accentPrimary);
                return {
                    labels: "above",
                    theme: "dark" === t ? "night" : "stripe",
                    variables: {
                        spacingGridRow: "12px",
                        spacingGridColumn: "12px",
                        spacingUnit: "4px",
                        spacingTab: "6px",
                        colorPrimary: r,
                        colorPrimaryText: r,
                        colorText: r,
                        colorTextSecondary: a,
                        colorTextPlaceholder: i,
                        colorIcon: r,
                        colorIconCheckmark: d(e.icon.inversePrimary),
                        colorDanger: o,
                        colorBackground: d(e.whiteButtonBackground),
                        colorIconTabHover: r,
                        colorIconTabSelected: s,
                        colorIconChevronDown: r,
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
                            color: r,
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
                            color: r,
                            boxShadow: "none",
                            outline: "none"
                        },
                        ".Tab--selected:hover": {
                            backgroundColor: e.whiteButtonBackground,
                            color: r
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
                            color: r
                        },
                        ".Input--invalid": {
                            color: r,
                            boxShadow: e.inputRedFocusRing
                        },
                        ".Input:focus": {
                            color: r,
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
                            color: o
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
                            color: r
                        },
                        ".PickerItem:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground,
                            color: r,
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
                            color: r
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
                            color: r,
                            fontSize: "12px",
                            fontWeight: "500",
                            lineHeight: "15px"
                        },
                        ".Action, .MenuAction": {
                            color: r,
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
                            fill: r
                        },
                        ".Block": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            padding: "16px"
                        },
                        ".Icon": {
                            fill: r
                        }
                    }
                }
            }

            function d(e) {
                let [t, n, r, a] = e.match(/[\d.]+/g) ? ? [];
                return t && n && r && a && 1 === parseInt(a) ? `rgb(${t}, ${n}, ${r})` : e
            }

            function c(e) {
                return (null == e ? void 0 : e.type) === "paymentMethodId" ? e.value : void 0
            }
        },
        895105: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                filterIcon: () => a,
                iconDefinition: () => r
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.87 15.25 10.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3 4.875a.625.625 0 1 0 0 1.25h14a.625.625 0 1 0 0-1.25zm2.125 5.742h9.75a.625.625 0 1 0 0-1.25h-9.75a.625.625 0 1 0 0 1.25m1.5 3.883c0-.345.28-.625.625-.625h5.5a.625.625 0 1 1 0 1.25h-5.5a.625.625 0 0 1-.625-.625"
                    })
                },
                a = (0, n(104509).wt)("filter", r, "default")
        },
        898378: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                iconDefinition: () => r,
                notionTintableIcon: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.76 1.39 16.47 17.17",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M12.32 1.437c1.17-.1 1.47-.032 2.205.501l3.039 2.136c.5.367.668.467.668.867v11.715c0 .734-.267 1.168-1.202 1.234l-11.055.667c-.702.034-1.036-.066-1.404-.533L2.333 15.12c-.4-.534-.567-.934-.567-1.401V3.306c0-.6.267-1.101 1.035-1.168zm4.241 3.871-10.854.634c-.4.034-.534.235-.534.668v9.945c0 .535.267.735.868.702l10.388-.601c.6-.033.668-.401.668-.835V5.942c0-.433-.167-.667-.536-.634m-1.134 1.836c.066.3 0 .601-.301.635l-.501.1v7.342c-.434.233-.835.367-1.169.367-.534 0-.668-.168-1.068-.668L9.113 9.78v4.973l1.036.233c0 .008-.005.6-.836.6l-2.303.135c-.067-.134 0-.468.233-.535l.602-.167V8.446L7.01 8.38c-.067-.3.1-.734.567-.768l2.472-.166 3.407 5.206V8.046l-.868-.1c-.067-.367.2-.635.534-.668zm-2.705-4.772-9.153.668c-.333.033-.4.2-.267.333l1.303 1.035c.534.433.735.4 1.737.333l9.452-.567c.2 0 .034-.2-.033-.233l-1.57-1.136c-.301-.233-.702-.5-1.47-.433"
                    })
                },
                a = (0, n(104509).wt)("notionTintable", r, "tintable")
        },
        920976: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => i
            }), n(296540);
            var r = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.26 1.98 16.32 17.52",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M15.825 12a3.75 3.75 0 1 1-.001 7.501 3.75 3.75 0 0 1 0-7.501m0 1.325a.55.55 0 0 0-.55.55V15.2H13.95a.55.55 0 0 0-.001 1.1h1.326v1.325a.55.55 0 0 0 1.1 0V16.3h1.324a.55.55 0 0 0 0-1.1h-1.325v-1.325a.55.55 0 0 0-.55-.55M9.702 5.022a3.918 3.918 0 0 1 6.742.036.626.626 0 0 1-1.08.63 2.667 2.667 0 0 0-4.59-.023L5.376 14.68l4.19.678a.626.626 0 0 1-.2 1.235l-5.1-.827a.625.625 0 0 1-.437-.938z"
                        }), (0, r.jsx)("path", {
                            d: "M10.912 8.094a1.178 1.178 0 1 1 2.326.377 1.178 1.178 0 0 1-2.326-.377M4.7 7.087a1.178 1.178 0 1 1 2.327.377A1.178 1.178 0 0 1 4.7 7.087M3.488 2.985a3.92 3.92 0 0 1 5.572.357.625.625 0 0 1-.944.818 2.67 2.67 0 0 0-3.796-.243.625.625 0 1 1-.832-.932"
                        })]
                    })
                },
                i = (0, n(104509).wt)("aiFacePlus", a, "default")
        },
        921048: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                iconDefinition: () => r,
                magnifyingGlassSmallIcon: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.97 1.97 12.46 12.46",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.1 1.975a5.125 5.125 0 1 0 3.155 9.164l3.107 3.107a.625.625 0 1 0 .884-.884l-3.107-3.107A5.125 5.125 0 0 0 7.1 1.975M3.225 7.1a3.875 3.875 0 1 1 7.75 0 3.875 3.875 0 0 1-7.75 0"
                    })
                },
                a = (0, n(104509).wt)("magnifyingGlassSmall", r, "small")
        },
        922900: (e, t, n) => {
            "use strict";
            n.d(t, {
                getWorkflowAgentConfig: () => a
            }), n(898992), n(430670), n(737550);
            let r = new(n(245541)).R({
                key: "agent_memory_database_page",
                namespace: n(274919).Bq,
                important: !0,
                trackingType: "preference"
            });

            function a(e) {
                let t, {
                        isOnboardingAgent: a,
                        searchScopes: o,
                        searchSessionId: s,
                        useWebSearch: l,
                        useComputer: u,
                        yoloMode: d,
                        useReadOnlyMode: c,
                        model: p,
                        isCustomAgent: f,
                        isCustomAgentBuilder: m,
                        workflowId: g,
                        modelFromUser: D,
                        writerMode: h,
                        useRulePrioritization: _,
                        useCustomAgentDraft: y,
                        useDraftActorPointer: v,
                        ephemeralInstructions: b,
                        databaseAgentConfigMode: C,
                        environment: S,
                        spaceId: w,
                        spaceStore: k
                    } = e,
                    x = n(886556).z.isZeroRetentionEnabled(),
                    F = (0, n(612608).MI)((0, n(612608).VD)("custom_agents"), i),
                    I = (0, n(612608).MI)((0, n(612608).VD)("agent_automations"), i),
                    A = (0, n(612608).MI)((0, n(612608).VD)("agent_integrations"), i),
                    E = (0, n(612608).MI)((0, n(612608).VD)("experimental_integrations"), i),
                    M = (0, n(612608).MI)((0, n(612608).VD)("database_agents"), i),
                    B = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_advanced"), i),
                    T = (0, n(388647).p)({
                        environment: S
                    }),
                    j = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_search_connectors"), i),
                    P = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_google_drive"), i),
                    U = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_slack"), i),
                    O = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_mcp_servers"), i),
                    L = (0, n(612608).MI)((0, n(612608).VD)("script_agent_mail_module_available"), i),
                    N = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_custom_tool_calling"), i),
                    R = i("agent_enable_create_thread"),
                    V = i("software_factory_page"),
                    z = i("enable_script_agent_writer"),
                    W = i("database_agents_on_script_agent"),
                    H = (!C || W) && (!h || z),
                    $ = (0, n(612608).MI)((0, n(612608).VD)("agent_user_session_context"), i),
                    q = i("agent_crdt_operations"),
                    G = (0, n(612608).MI)((0, n(612608).VD)("agent_card_customization"), i),
                    K = (0, n(612608).MI)((0, n(612608).VD)("agent_system_prompt_as_page"), i),
                    Y = (0, n(612608).MI)((0, n(612608).VD)("agent_view_notifications_tool_enabled"), i),
                    Z = (0, n(328765).S)(),
                    X = k ? ? (void 0 === w || (null == Z ? void 0 : Z.id) === w ? Z : void 0),
                    J = i("sams_specials"),
                    Q = i("ai_image_generation") && !J && ((null == X ? void 0 : X.isAiImageGenerationEnabledOnSpace()) ? ? !0),
                    ee = (0, n(612608).MI)((0, n(612608).VD)("agent_diffs"), i),
                    et = (0, n(612608).MI)((0, n(612608).VD)("agent_update_page_patch"), i),
                    en = (0, n(612608).MI)((0, n(612608).VD)("agent_create_db_template"), i),
                    er = i("agent_search_tool_v2"),
                    ea = i("agent_update_page_autofixer"),
                    ei = i("agent_markdown_vnext"),
                    eo = i("agent_update_page_order_updates"),
                    es = i("agent_support_property_reorder"),
                    el = i("agent_short_update_page_result"),
                    eu = n(218744).default.getConfig({
                        configName: "agent_writer_model_config"
                    }).defaultModel,
                    ed = r.getState(),
                    ec = null == ed ? void 0 : ed.pageId,
                    ep = h || f ? void 0 : function() {
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
                    eD = i("mail_explicit_tool_calls"),
                    eh = i("outlook_custom_agent_email_connector"),
                    e_ = i("agent_query_calendar_tool") && eg,
                    ey = em.some(e => (0, n(281708).Xs)(e) && "outlook" !== e),
                    ev = i("agent_query_mail_tool") && ey,
                    eb = (0, n(828294).a)("agent_rule_priority_hierarchy"),
                    eC = i("agent_ask_survey");
                return t = !g && (c ? ? !1), {
                    type: "workflow",
                    enableAgentAutomations: I,
                    enableAgentIntegrations: A,
                    enableCustomAgents: F,
                    enableExperimentalIntegrations: E,
                    enableAgentViewNotificationsTool: Y,
                    enableAgentDiffs: ee,
                    enableAgentUpdatePagePatch: et,
                    enableAgentCreateDbTemplate: en,
                    enableCsvAttachmentSupport: !0,
                    enableDatabaseAgents: M,
                    enableAgentThreadTools: !1,
                    enableRunAgentTool: !1,
                    enableCrdtOperations: q,
                    enableAgentCardCustomization: G,
                    enableSystemPromptAsPage: K,
                    enableUserSessionContext: $,
                    enableScriptAgentAdvanced: !!H && B,
                    enableScriptAgent: !!H && T,
                    enableScriptAgentSearchConnectorsInCustomAgent: !!H && !!f && j,
                    enableScriptAgentGoogleDriveInCustomAgent: !!H && !!f && P,
                    enableScriptAgentSlack: !!H && U,
                    enableScriptAgentMcpServers: !!H && O,
                    enableScriptAgentMail: !!H && L,
                    enableScriptAgentCalendar: !!H && T,
                    enableScriptAgentCustomToolCalling: !!H && N,
                    enableCreateAndRunThread: R,
                    enableSoftwareFactoryPage: V,
                    ...f ? {} : {
                        enableAgentGenerateImage: Q
                    },
                    agentFollowupVariation: ep,
                    enableSpeculativeSearch: ef,
                    enableQueryCalendar: e_,
                    enableQueryMail: ev,
                    enableMailExplicitToolCalls: eD,
                    enableMailAgentMultiProviderSupport: eh,
                    useRulePrioritization: _ ? ? eb,
                    memoryDatabasePageId: ec,
                    workflowId: g,
                    availableConnectors: em,
                    customConnectorInfo: n(501761).qu.state.customConnectors.flatMap(e => "active" === e.status && e.displayName ? [{
                        name: e.displayName,
                        thirdPartyId: e.thirdPartyId,
                        description: e.description
                    }] : []),
                    searchScopes: h ? [] : o ? ? n(425749).R2,
                    useSearchToolV2: er,
                    useWebSearch: !h && !x && (void 0 === l || l),
                    useComputer: u ? ? !0,
                    yoloMode: d ? ? !1,
                    useReadOnlyMode: t,
                    writerMode: !!h,
                    model: h ? eu : p,
                    searchSessionId: s,
                    modelFromUser: !h && (D ? ? void 0 !== p),
                    isCustomAgent: !!f,
                    isCustomAgentBuilder: !!m,
                    useCustomAgentDraft: !!y,
                    use_draft_actor_pointer: !!v,
                    enableUpdatePageAutofixer: ea,
                    enableMarkdownVNext: ei,
                    enableUpdatePageOrderUpdates: eo,
                    enableAgentSupportPropertyReorder: es,
                    agentShortUpdatePageResult: el,
                    ephemeralInstructions: b,
                    ...h || a || null !== e.onboardingAgentVersion ? {} : {
                        enableAgentAskSurvey: eC
                    },
                    databaseAgentConfigMode: !!C,
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
            "use strict";
            n.d(t, {
                B: () => i
            }), n(296540);
            var r = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, r.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                i = (0, n(104509).wt)("archiveBox", a, "default")
        },
        938989: (e, t, n) => {
            "use strict";
            e.exports = n.p + "f134ff16443ed5ec.png"
        },
        941670: (e, t, n) => {
            "use strict";
            e.exports = n.p + "e1d65fd069908905.png"
        },
        942806: (e, t, n) => {
            "use strict";

            function r(e, t) {
                let {
                    user_comment: r,
                    ...a
                } = t;
                (0, n(104310).u)({
                    event: {
                        eventName: "ai_action",
                        eventProperties: a
                    }
                })
            }

            function a(e, t, r) {
                let a = {
                    site: "client",
                    ...r
                };
                (0, n(195857).DO_NOT_USE_trackLegacy)(t, a)
            }

            function i(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "ai_favorite_action",
                        eventProperties: t
                    }
                })
            }

            function o(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "ai_autofill_action",
                        eventProperties: t
                    }
                })
            }

            function s(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "ai_autofill_settings_action",
                        eventProperties: t
                    }
                })
            }

            function l(e, t) {
                if (n(886556).z.isXMLAssistantEnabled()) {
                    var r;
                    let a = (null == (r = t.sessionContext) ? void 0 : r.evaluatorFromStoreState.getTranscript()) ? ? [];
                    n(310639).assistantDependency.load().then(({
                        assistantAnalyticsActions: n
                    }) => {
                        n.trackAssistantOpened(e, {
                            from: t.from,
                            sessionId: t.session_id,
                            isReminder: !1,
                            reminderType: void 0,
                            startTimestamp: Date.now(),
                            transcript: a,
                            hasQuery: !1,
                            searchSessionId: void 0
                        })
                    })
                } else(0, n(104310).u)({
                    event: {
                        eventName: "ai_completion_popup_open",
                        eventProperties: {
                            session_id: t.session_id,
                            prompt_key: t.prompt_key,
                            from: t.from
                        }
                    }
                })
            }

            function u(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "ai_completion_popup_close",
                        eventProperties: t
                    }
                })
            }

            function d(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "ai_assistant_error",
                        eventProperties: t
                    }
                })
            }
            n.r(t), n.d(t, {
                trackAIAction: () => r,
                trackAIAssistantEngineError: () => d,
                trackAICompletionPopupClose: () => u,
                trackAICompletionPopupOpen: () => l,
                trackAIFavoriteAction: () => i,
                trackAiAutofillAction: () => o,
                trackAiAutofillSettingsAction: () => s,
                trackUserFlow: () => a
            })
        },
        960831: (e, t, n) => {
            "use strict";

            function r(e) {
                var t;
                return null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (t = n(775657).electronApi.setOverlay) ? void 0 : t.call(n(775657).electronApi, e)
            }
            n.d(t, {
                j: () => r
            })
        },
        965967: (e, t, n) => {
            "use strict";
            e.exports = n.p + "d15ce47ef6ddf83d.png"
        },
        966458: (e, t, n) => {
            "use strict";

            function r(e) {
                var t;
                let {
                    product: r,
                    userId: a,
                    billingData: i,
                    spaceUserStore: o,
                    spaceStore: s,
                    existingRequests: l
                } = e;
                if (!r || !(null != s && s.id) || !a) return "not_eligible";
                if ((0, n(192159).eh)(i, r) && "ai_credit_pack" !== r) return "product_already_available";
                let u = (0, n(880280).rU)(r),
                    d = function(e) {
                        let {
                            billingData: t,
                            spaceUserStore: r,
                            spaceStore: a
                        } = e;
                        if (!a || !r || !t) return !1;
                        let i = a.getDisableMemberUpgradeRequests();
                        return !(n(986939).A.isMobile || i || !(0, n(262166).jR)((0, n(192159).AI)(t)) || (0, n(192159).et)(t)) && !!(r.isMember() && !r.isWorkspaceOwner())
                    }({
                        billingData: i,
                        spaceUserStore: o,
                        spaceStore: s
                    });
                if (!(u && d) || void 0 === l) return "not_eligible";
                let c = null == (t = l[r]) ? void 0 : t.find(e => e.created_by_id === a);
                return (null == c ? void 0 : c.request_status) || "unrequested"
            }
            n.d(t, {
                Jg: () => r
            }), n(898992), n(672577)
        },
        966559: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                exclamationMarkCircleSmallIcon: () => i,
                iconDefinition: () => a
            }), n(296540);
            var r = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M7.9 4.875a.625.625 0 0 0-.625.625V8a.625.625 0 1 0 1.25 0V5.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, r.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                i = (0, n(104509).wt)("exclamationMarkCircleSmall", a, "small")
        },
        968864: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => i,
                G: () => a
            });
            let r = {
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
                for (let t of e) r[t].load()
            }

            function i(e) {
                let t = r[e].getLoadingState();
                if ("idle" === t.status) a(e);
                else if ("pending" === t.status || "rejected" === t.status);
                else {
                    if ("resolved" === t.status) return t.value;
                    (0, n(722371).HB)(t)
                }
            }
        },
        970878: (e, t, n) => {
            "use strict";
            e.exports = n.p + "082999214c472fe4.png"
        },
        971375: (e, t, n) => {
            "use strict";
            n.d(t, {
                o: () => i,
                x: () => a
            }), n(296540);
            var r = n(474848);

            function a(e) {
                let {
                    variant: t,
                    imgSource: a,
                    tintColor: o,
                    faceStyle: s,
                    shadowVariant: l = "strong",
                    style: u,
                    ...d
                } = e, c = (0, n(960253).I)(() => {
                    let e = (0, n(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: n(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === l && {
                                boxShadow: e >= 90 ? n(632079).Tj.shadowMDThickerOutline : n(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === l && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? n(632079).Tj.shadowSMThickerOutline : n(632079).Tj.shadow.outline.md
                            },
                            overflow: "hidden",
                            ...u
                        }
                    }
                }, [t, l, u]);
                return (0, r.jsx)("div", { ...d,
                    children: (0, r.jsx)("div", {
                        style: c.faceImgWrap,
                        children: (0, r.jsx)(i, {
                            imgSource: a,
                            variant: t,
                            tintColor: o,
                            style: s
                        })
                    })
                })
            }

            function i(e) {
                let {
                    imgSource: t,
                    variant: a,
                    tintColor: i,
                    style: o,
                    alt: s,
                    ...l
                } = e, u = (0, n(445283).N)(a), d = t ? ? n(200424), c = s ? ? "Notion AI face", p = (0, n(960253).I)(() => ({
                    faceImg: {
                        height: u,
                        width: u,
                        transform: "scaleX(var(--direction, 1))",
                        ...o
                    },
                    tintedFace: {
                        height: u,
                        width: u,
                        transform: "scaleX(var(--direction, 1))",
                        backgroundColor: i,
                        WebkitMaskImage: `url(${d})`,
                        maskImage: `url(${d})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        ...o
                    }
                }), [u, o, i, d]);
                return void 0 !== i ? (0, r.jsx)("div", {
                    style: p.tintedFace,
                    role: "img",
                    "aria-label": c
                }) : (0, r.jsx)("img", { ...l,
                    style: p.faceImg,
                    src: d,
                    alt: c
                })
            }
        },
        976298: (e, t, n) => {
            "use strict";
            n.d(t, {
                $0: () => d,
                Fx: () => h,
                Ge: () => s,
                I3: () => i,
                Kj: () => g,
                PP: () => _,
                TK: () => y,
                Yy: () => a,
                aE: () => v,
                cQ: () => D,
                kH: () => l,
                m7: () => o,
                nq: () => f,
                nv: () => c,
                tj: () => u
            }), n(898992), n(354520), n(737550);
            let r = {
                    checkbox: !0,
                    date: !0,
                    email: !0,
                    multi_select: !0,
                    number: !0,
                    person: !0,
                    phone_number: !0,
                    relation: !0,
                    select: !0,
                    status: !0,
                    text: !0,
                    title: !0,
                    url: !0,
                    auto_increment_id: !1,
                    button: !1,
                    created_by: !1,
                    created_time: !1,
                    file: !1,
                    formula: !1,
                    last_edited_by: !1,
                    last_edited_time: !1,
                    last_visited_time: !1,
                    location: !1,
                    rollup: !1,
                    verification: !1,
                    place: !1
                },
                a = {
                    checkbox: [{
                        type: "checkbox"
                    }, {
                        type: "undefined"
                    }],
                    date: [{
                        type: "date"
                    }, {
                        type: "undefined"
                    }],
                    email: [{
                        type: "text"
                    }, {
                        type: "undefined"
                    }],
                    multi_select: [{
                        type: "text"
                    }, { of: {
                            type: "text"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    number: [{
                        type: "number"
                    }, {
                        type: "undefined"
                    }],
                    person: [{
                        type: "person"
                    }, { of: {
                            type: "person"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    phone_number: [{
                        type: "text"
                    }, {
                        type: "undefined"
                    }],
                    relation: [{
                        type: "block"
                    }, { of: {
                            type: "block"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    select: [{
                        type: "text"
                    }, { of: {
                            type: "text"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    status: [{
                        type: "text"
                    }, { of: {
                            type: "text"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    text: void 0,
                    title: void 0,
                    url: [{
                        type: "text"
                    }, {
                        type: "undefined"
                    }]
                };

            function i(e) {
                return !!(r[e.type] && !(0, n(425985).U)(e) && (!(0, n(9247).$M)(e) || void 0 === (0, n(9247).om)(e)))
            }

            function o(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: r,
                    filter: a,
                    sort: o,
                    sourcePropertyIds: s
                } = e, l = (s ? ? (0, n(722371).objectKeys)(r)).filter((t, o, s) => {
                    let l = r[t];
                    return !(!l || !i(l) || "relation" === l.type && e.restrictCrossSpace && (0, n(226989).o)(e.spaceId, l)) && (!a || a([t, l], o, r))
                });
                if (0 === l.length) return [];
                if (!t || !1 === o) return l;
                let u = (0, n(944940).L)(t, r, void 0, n(565546).jf.Page).collection_page_properties || [];
                return n(381453).Ul(l, e => u.findIndex(t => t.property === e))
            }

            function s(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: r,
                    sort: a
                } = e, i = (0, n(722371).objectKeys)(r).filter((e, t, a) => {
                    let i = r[e];
                    return !!i && !!(0, n(568249).J)(i)
                });
                if (0 === i.length) return [];
                if (!t || !1 === a) return i;
                let o = (0, n(944940).L)(t, r, void 0, n(565546).jf.Page).collection_page_properties || [];
                return n(381453).Ul(i, e => o.findIndex(t => t.property === e))
            }

            function l(e) {
                if (e.type === n(944897).M9.InvalidCharacter) return {
                    type: e.type,
                    character: e.character
                };
                if (e.type === n(944897).M9.TokenExpected) return {
                    type: e.type,
                    token: e.token
                };
                if (e.type === n(944897).uW.MissingSchemaPropertyOnThisRow) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                if (e.type === n(944897).uW.MissingSchemaPropertyOnCollection) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                if (e.type === n(944897).uW.ThisRowBlockPropertyMismatchCollection) return {
                    type: e.type,
                    thisRowCollection: e.thisRowCollection,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MissingContextVariable) return {
                    type: e.type,
                    valueId: e.valueId,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.FunctionCallTooFewArguments) return {
                    type: e.type,
                    numArguments: e.numArguments,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.FunctionCallUnexpectedArgument) return {
                    type: e.type,
                    parameterIndex: e.parameterIndex,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.FunctionCallArgumentWrongType) return {
                    type: e.type,
                    argumentType: e.argumentType,
                    libraryFunctionName: e.libraryFunction.name,
                    parameterIndex: e.parameterIndex,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MissingDataDependencyBlock) return {
                    type: e.type,
                    blockPointer: e.blockPointer,
                    node: e.node,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MissingDataDependencyPerson) return {
                    type: e.type,
                    personPointer: e.personPointer,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MemberPropertyMismatchCollection) return {
                    type: e.type,
                    blockCollection: e.blockCollection,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.DownstreamParseFailure) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.ContextVariableWrongType) return {
                    type: e.type,
                    valueId: e.valueId,
                    expectedType: e.expectedType,
                    resultType: e.resultType,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.DisallowedValueType) return {
                    type: e.type,
                    expressionValue: e.expressionValue,
                    allowedValueTypes: e.allowedValueTypes,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.LibraryFunctionExecutionError) return {
                    type: e.type,
                    error: e.error,
                    libraryFunctionName: e.libraryFunction.name,
                    errorSource: e.errorSource
                };
                return "errorSource" in e ? {
                    type: e.type,
                    errorSource: e.errorSource
                } : {
                    type: e.type
                }
            }
            let u = {
                checkbox: !0,
                date: !0,
                email: !0,
                multi_select: !0,
                number: !0,
                person: !0,
                phone_number: !0,
                relation: !0,
                select: !0,
                status: !0,
                text: !0,
                title: !0,
                url: !0,
                button: !1,
                file: !1,
                verification: !1,
                auto_increment_id: !1,
                created_by: !1,
                created_time: !1,
                formula: !1,
                last_edited_by: !1,
                last_edited_time: !1,
                last_visited_time: !1,
                location: !1,
                rollup: !1,
                place: !1
            };

            function d(e) {
                return !!u[e.type]
            }

            function c(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: r,
                    filter: a,
                    sort: i
                } = e, o = (0, n(722371).objectKeys)(r).filter((e, t, i) => {
                    var o;
                    let s = r[e];
                    return !(!s || !u[s.type] || (0, n(9247).$M)(s) && null != (o = (0, n(9247).om)(s)) && o.auto_update_on_edit) && (!a || a([e, s], t, r))
                });
                if (0 === o.length) return [];
                if (!t || !1 === i) return o;
                let s = (0, n(944940).L)(t, r, void 0, n(565546).jf.Page).collection_page_properties || [];
                return n(381453).Ul(o, e => s.findIndex(t => t.property === e))
            }
            let p = {
                checkbox: !0,
                email: !0,
                multi_select: !0,
                number: !0,
                person: !0,
                phone_number: !0,
                relation: !0,
                select: !0,
                status: !0,
                text: !0,
                title: !0,
                url: !0,
                auto_increment_id: !1,
                button: !1,
                created_by: !1,
                created_time: !1,
                date: !1,
                file: !1,
                formula: !1,
                last_edited_by: !1,
                last_edited_time: !1,
                last_visited_time: !1,
                location: !1,
                rollup: !1,
                verification: !1,
                place: !1
            };

            function f(e) {
                return p[e.type]
            }
            let m = {
                checkbox: !0,
                created_by: !0,
                created_time: !0,
                date: !0,
                email: !0,
                multi_select: !0,
                number: !0,
                person: !0,
                phone_number: !0,
                relation: !0,
                select: !0,
                status: !0,
                text: !0,
                title: !0,
                url: !0,
                last_edited_by: !0,
                last_edited_time: !0,
                auto_increment_id: !1,
                button: !1,
                file: !1,
                formula: !1,
                last_visited_time: !1,
                location: !1,
                rollup: !1,
                verification: !1,
                place: !1
            };

            function g(e) {
                return m[e.type]
            }

            function D(e) {
                return 0 === e
            }

            function h(e) {
                return "button_block" === e || "button_property" === e
            }

            function _(e) {
                let {
                    property: t,
                    collectionSchema: n
                } = e;
                return !!n && !n[t]
            }

            function y(e) {
                let {
                    collectionSchema: t,
                    property: n,
                    type: r
                } = e, a = null == t ? void 0 : t[n];
                return !a || ("action" === r ? !i(a) : !u[a.type])
            }

            function v({
                automationTrigger: e,
                collectionSchema: t
            }) {
                if ((null == e ? void 0 : e.type) === "event") {
                    let {
                        pagesAdded: r,
                        pagePropertiesEdited: a,
                        source: i
                    } = e.event;
                    if (void 0 === i) return !1;
                    let o = "some" === a.type && a.some,
                        s = "all" === a.type && a.all;
                    if ((o || s || []).some(e => _({
                            collectionSchema: t,
                            property: e.property
                        }) || y({
                            collectionSchema: t,
                            property: e.property,
                            type: "trigger"
                        }))) return !1;
                    let l = "some" === a.type && (!(0, n(722371).O9)(a.some) || 0 === a.some.length),
                        u = "all" === a.type && (!(0, n(722371).O9)(a.all) || 0 === a.all.length);
                    if (!r && ("none" === a.type || l || u)) return !1
                } else if ((null == e ? void 0 : e.type) !== "recurrence") return !1;
                else if (!e.recurrence) return !1;
                return !0
            }
        },
        979479: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            }), n(296540);
            var r = n(474848);

            function a(e) {
                return n(986939).A.isMobile ? (0, r.jsx)(n(182718).zD, {
                    ariaLabel: e.ariaLabel,
                    open: e.isOpen,
                    popupType: n(423291).n.SlideUp,
                    onDismiss: e.onDismiss,
                    content: e.content,
                    style: e.style,
                    children: e.children
                }) : (0, r.jsx)(n(556809).a, {
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
            "use strict";
            n.d(t, {
                A: () => i
            }), n(296540);
            var r = n(474848);
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
                        o = e.inline ? { ...t,
                            width: "none",
                            minHeight: "none"
                        } : t,
                        {
                            userStore: s,
                            avatarShouldShowShadow: l,
                            avatarSize: u,
                            hasTooltip: d,
                            tooltipHeader: c,
                            hasPersonHoverCard: p,
                            spaceStore: f
                        } = e,
                        m = (0, n(109939).tz)(),
                        g = (0, n(682985).K8)(() => null == s ? void 0 : s.getDisplayName(m), [s, m]),
                        D = (0, r.jsxs)("div", {
                            style: i,
                            children: [(0, r.jsx)("div", {
                                style: o,
                                children: (0, r.jsx)(n(321753).A, {
                                    userStore: s,
                                    avatarShouldShowShadow: l,
                                    size: u,
                                    hasTooltip: d && !p,
                                    hasPersonHoverCard: !1,
                                    tooltipHeader: c
                                })
                            }), (0, r.jsx)("div", {
                                className: "notranslate",
                                style: a.style0,
                                children: g
                            })]
                        });
                    return p ? (0, r.jsx)(n(532755).D, {
                        userStore: s,
                        spaceStore: f,
                        from: e.personHoverCardEntrypoint,
                        children: D
                    }) : D
                }
        },
        996903: (e, t, n) => {
            "use strict";

            function r(e) {
                let t = e.getSettings(),
                    r = null == t ? void 0 : t.signup_time;
                return r ? (0, n(362008).Mn)(r) : null
            }
            n.d(t, {
                i: () => r
            })
        }
    }
]);