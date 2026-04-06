"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [46990], {
        58931: (e, t, a) => {
            a.d(t, {
                HR: () => o,
                _y: () => r
            });
            let n = (0, a(109939).YK)({
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

            function o(e) {
                let {
                    discussionInputStore: t,
                    environment: o,
                    discussionHelpers: i,
                    reason: s
                } = e;
                a(332190).A.isComposingNewDiscussion() ? r({
                    environment: o,
                    reason: s ? ? "navigating_away"
                }) : i.hasCommentChanged(t) ? (a(65255).yO(o), a(647095).ui({
                    message: a(962299).A.formatMessage(n.discardCommentConfirmationPrompt),
                    showCancel: !0,
                    handleCancel: () => a(65255).Ie(o),
                    keepFocus: !0,
                    items: [{
                        label: a(962299).A.formatMessage(n.discardCommentButtonLabel),
                        color: "red",
                        onAccept: () => {
                            a(65255).QP(o), (0, a(585356).c)()
                        }
                    }]
                })) : (0, a(585356).c)()
            }

            function r(e) {
                let {
                    environment: t
                } = e;
                if (!a(332190).A.isDraftCommentOnValidSelection()) return;
                let o = a(332190).A.getDiscussionInputStore();
                a(65255).yO(t), a(647095).ui({
                    message: a(962299).A.formatMessage(n.draftCommentConfirmationPromptTitle),
                    description: (() => {
                        switch (e.reason) {
                            case "starting_new":
                                return a(962299).A.formatMessage(n.draftCommentConfirmationStartingNewDescription);
                            case "navigating_away":
                                return a(962299).A.formatMessage(n.draftCommentConfirmationNavigateAwayPromptDescription);
                            default:
                                (0, a(722371).HB)(e.reason)
                        }
                    })(),
                    keepFocus: !0,
                    innerStyle: {
                        textAlign: "center"
                    },
                    showCancel: !1,
                    shouldRenderDraftCommentIcon: !0,
                    items: [{
                        label: a(962299).A.formatMessage(n.returnToPageButtonLabel),
                        buttonType: "solid",
                        color: "blue",
                        onAccept: () => {
                            (0, a(758275).x)({
                                currentBlockStore: a(728372).AppStoreMainEditorCurrentBlockStore.state,
                                discussionInputStore: o,
                                environment: t
                            }), a(65255).Ie(t)
                        }
                    }, {
                        label: a(962299).A.formatMessage(n.discardCommentButtonLabel),
                        color: "red",
                        buttonType: "outline",
                        onAccept: () => {
                            a(65255).QP(t), (0, a(585356).c)()
                        }
                    }]
                })
            }
        },
        72762: (e, t, a) => {
            a.d(t, {
                o: () => n
            });

            function n(e) {
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
                }), a(639675).Ay.setState({ ...a(639675).Ay.state,
                    flowId: void 0
                })
            }
        },
        153262: (e, t, a) => {
            a.d(t, {
                Jg: () => o,
                bM: () => n,
                hG: () => r,
                ic: () => i
            });
            let n = "150ms ease";

            function o() {
                return {
                    borderRadius: 6
                }
            }
            let r = a(986939).A.isMobile ? {} : { ...o(),
                display: "flex",
                marginInlineStart: 0,
                marginInlineEnd: 0,
                transition: `background ${n}`
            };

            function i() {
                return {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8
                }
            }
        },
        169789: (e, t, a) => {
            a.d(t, {
                JK: () => o
            });
            let n = {
                EdgeManagerContext: new(a(815048)).O2("EdgeManagerContext", () => Promise.all([a.e(75134), a.e(28556), a.e(53923), a.e(48787), a.e(95798), a.e(42510)]).then(a.bind(a, 95798))),
                RelationPropertyWithEdges: new(a(815048)).O2("RelationPropertyWithEdges", () => Promise.all([a.e(75134), a.e(28556), a.e(53923), a.e(48787), a.e(48860), a.e(75234), a.e(65499), a.e(95798), a.e(91562)]).then(a.bind(a, 546073))),
                RelationPropertyOverlayWithEdges: new(a(815048)).O2("RelationPropertyOverlayWithEdges", () => Promise.all([a.e(75134), a.e(28556), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(71562), a.e(62475), a.e(3151), a.e(98629), a.e(53923), a.e(48787), a.e(23301), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(53050), a.e(87353), a.e(54951), a.e(17250), a.e(64696), a.e(28048), a.e(55940), a.e(12560), a.e(21969), a.e(76361), a.e(74145), a.e(48860), a.e(18682), a.e(79349), a.e(33162), a.e(63793), a.e(18881), a.e(62731), a.e(72805), a.e(9817), a.e(75189), a.e(47281), a.e(75234), a.e(66200), a.e(69626), a.e(95150), a.e(11719), a.e(95798), a.e(33490)]).then(a.bind(a, 357417)))
            };
            (0, a(815048)._h)(n.EdgeManagerContext, e => e.EdgeManagerProvider), (0, a(815048).jQ)(n.RelationPropertyWithEdges, e => e.RelationPropertyWithEdges);
            let o = (0, a(815048).jQ)(n.RelationPropertyOverlayWithEdges, e => e.RelationPropertyRendererWithEdges)
        },
        269298: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                lockFillIcon: () => o
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 1.95 12.05 15.66",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M6 5.95a4 4 0 1 1 8 0v1.433a2.426 2.426 0 0 1 2.025 2.392v5.4A2.425 2.425 0 0 1 13.6 17.6H6.4a2.425 2.425 0 0 1-2.425-2.425v-5.4c0-1.203.876-2.201 2.025-2.392zm6.75 1.4v-1.4a2.75 2.75 0 1 0-5.5 0v1.4zm-2.2 5.458a1.35 1.35 0 1 0-1.1 0v1.242a.55.55 0 0 0 1.1 0z"
                    })
                },
                o = (0, a(104509).wt)("lockFill", n, "fill")
        },
        351056: (e, t, a) => {
            a.r(t), a.d(t, {
                PageSurfaceBlockPropertyRouter: () => r
            });
            var n = a(296540),
                o = a(474848);
            let r = n.memo(function(e) {
                let {
                    property: t,
                    surface: r
                } = e, i = (0, n.useRef)(null), s = function(e) {
                    let {
                        collectionStore: t,
                        formDataStore: n,
                        property: o
                    } = e;
                    return (0, a(682985).K8)(() => {
                        var e;
                        let a = t.getSchema();
                        return (null == n || null == (e = n.getFormState()) || null == (e = e.collectionSchema) ? void 0 : e[o]) ? ? a[o]
                    }, [n, t, o], {
                        debugName: "usePageSurfacePropertySchema",
                        equalityFn: a(381453).n4
                    })
                }(e);
                return !(null != s && s.type) || (0, a(22148).J)(r) ? null : (0, o.jsx)(a(422575).qN, {
                    innerProps: e,
                    property: t,
                    unmappedProperty: t,
                    propertySchema: s,
                    containerRef: i,
                    children: (0, o.jsx)(a(778584).v, {
                        ref: i,
                        innerProps: e,
                        surface: r,
                        property: t,
                        propertyType: s.type
                    })
                })
            })
        },
        366318: (e, t, a) => {
            a.d(t, {
                S: () => n
            });

            function n(e) {
                return (0, a(682985).K8)(() => {
                    if (!(0, a(23803).vL)()) return !1;
                    let t = e.getParentStore();
                    return !!((null == t ? void 0 : t.table) === a(832375).VlP && t.getFormatStore().getKeyStore("external_collection_type").getValue()) || !1
                }, [e])
            }
        },
        374241: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowStraightLeftSmallIcon: () => o,
                iconDefinition: () => n
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M2.16 8.206q.046.13.148.236l4.32 4.32a.625.625 0 0 0 .884-.884L4.259 8.625h8.991a.625.625 0 1 0 0-1.25H4.259l3.253-3.253a.625.625 0 1 0-.884-.884l-4.32 4.32a.62.62 0 0 0-.148.648"
                    })
                },
                o = (0, a(104509).wt)("arrowStraightLeftSmall", n, "small")
        },
        478597: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var n = () => a(546605);
            class o extends n().Store {
                environment;
                spaceId;
                constructor(e, t) {
                    super(), this.environment = e, this.spaceId = t, this.reset()
                }
                getInitialState() {
                    if (!this.environment) return;
                    let e = new(a(870941)).A({
                        name: "DiscussionInputStore",
                        isTemporaryData: !0
                    });
                    return {
                        textStore: new(a(517013)).pm({
                            environment: this.environment,
                            pointer: (0, a(295447).zP)({
                                environment: this.environment,
                                table: a(832375).SNf,
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
                    return a(247438).q4_(e).includes("\n")
                }
            }
            let r = o
        },
        497857: (e, t, a) => {
            a.d(t, {
                h: () => o
            }), a(296540);
            var n = a(474848);

            function o() {
                return (0, n.jsx)(a(16275).I, {
                    icon: a(746204).w,
                    size: "lg",
                    colorVariant: "primary"
                })
            }
        },
        519529: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                xMarkFillSmallIcon: () => o
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.03 3.03 9.94 9.94",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M12.73 4.33a.75.75 0 1 0-1.06-1.06L8 6.94 4.33 3.27a.75.75 0 1 0-1.06 1.06L6.94 8l-3.67 3.67a.75.75 0 1 0 1.06 1.06L8 9.06l3.67 3.67a.75.75 0 0 0 1.06-1.06L9.06 8z"
                    })
                },
                o = (0, a(104509).wt)("xMarkFillSmall", n, "fillSmall")
        },
        551408: (e, t, a) => {
            function n() {
                let e = (0, a(83208).X)("database_agents"),
                    t = (0, a(682985).K8)(() => a(886556).z.isAiEnabled(), []);
                return e && t
            }

            function o() {
                return a(218744).default.checkGate({
                    gateName: "database_agents"
                }) && a(886556).z.isAiEnabled()
            }
            a.d(t, {
                A: () => n,
                R: () => o
            })
        },
        746204: (e, t, a) => {
            a.d(t, {
                w: () => o
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.87 3.72 7.16 12.56",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M6.131 9.381a.875.875 0 0 0 0 1.238l5.4 5.4a.875.875 0 1 0 1.238-1.238L7.987 10l4.782-4.781A.875.875 0 0 0 11.53 3.98z"
                    })
                },
                o = (0, a(104509).wt)("arrowChevronSingleLeftFill", n, "fill")
        },
        789722: (e, t, a) => {
            a.d(t, {
                W: () => n
            });
            let n = (0, a(109939).YK)({
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
        799843: (e, t, a) => {
            a.d(t, {
                DG: () => u,
                OH: () => s,
                nl: () => i,
                x$: () => l
            });
            let n = (0, a(109939).YK)({
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
                o = (0, a(109939).YK)({
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
                r = (0, a(109939).YK)({
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

            function i(e, {
                useCompactFormat: t,
                useUltraCompactFormat: s,
                useLowercase: l,
                roundDownYears: u,
                useWeeks: d,
                showDaysToOneWeek: m,
                nowOverrideMs: c = Date.now()
            } = {}) {
                let g = s ? o : t ? r : n,
                    f = new Date(e),
                    p = a(962299).A.getIntl().locale,
                    h = new Date(c),
                    M = Number(h) - e;
                if (M >= a(627179).Gq && u) {
                    let e = Math.floor(M / a(627179).Gq);
                    return a(962299).A.formatMessage(g.year, {
                        numYears: e
                    })
                }
                if (f.getFullYear() !== h.getFullYear()) return f.toLocaleDateString(p, s ? {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                } : {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                let y = Math.floor(M / a(627179).nD);
                if (y < 28 && y > 7 && d || m && 7 === y) {
                    let e = Math.floor(y / 7);
                    return a(962299).A.formatMessage(g.week, {
                        numWeeks: e
                    })
                }
                if (m && y > 6 || !m && y >= 3) return f.toLocaleDateString(p, {
                    month: "short",
                    day: "numeric"
                });
                if (y >= 1) return a(962299).A.formatMessage(g.day, {
                    numDays: y
                });
                let w = Math.floor(M / a(627179).pT);
                if (w >= 1) return a(962299).A.formatMessage(g.hour, {
                    numHours: w
                });
                let D = Math.floor(M / a(627179).Xb);
                return D >= 1 ? a(962299).A.formatMessage(g.minute, {
                    numMinutes: D
                }) : l ? a(962299).A.formatMessage(g.second).toLocaleLowerCase() : a(962299).A.formatMessage(g.second)
            }

            function s(e, t) {
                let n = t - e,
                    o = Math.floor(n / a(627179).Gq),
                    r = Math.floor(n / a(627179).nD),
                    i = Math.floor(n / a(627179).pT),
                    s = Math.floor(n / a(627179).Xb),
                    l = Math.floor(n / a(627179).TD);
                return o >= 1 ? a(962299).A.formatMessage(a(362008).jX.year, {
                    numYears: o
                }) : r >= 1 ? a(962299).A.formatMessage(a(362008).jX.day, {
                    numDays: r
                }) : i >= 1 ? a(962299).A.formatMessage(a(362008).jX.hour, {
                    numHours: i
                }) : s >= 1 ? a(962299).A.formatMessage(a(362008).jX.minute, {
                    numMinutes: s
                }) : a(962299).A.formatMessage(a(362008).jX.second, {
                    numSeconds: l
                })
            }

            function l(e, t) {
                return new Date(e).toLocaleDateString(a(962299).A.getIntl().locale, {
                    month: "long",
                    year: "numeric",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "2-digit",
                    second: t ? void 0 : "2-digit"
                })
            }

            function u(e) {
                return new Date(e).toLocaleDateString(a(962299).A.getIntl().locale, {
                    month: "short",
                    year: "numeric",
                    day: "numeric"
                })
            }
        },
        834656: (e, t, a) => {
            a.d(t, {
                F: () => n
            });

            function n(e, t) {
                let n = (0, a(83208).X)("collections_capabilities_refactor");
                return (0, a(682985).K8)(() => {
                    var a;
                    return n ? (null == e ? void 0 : e.state.canFollowPageLinks) ? ? !0 : !(null != t && null != (a = t.state) && a.disablePageLinks)
                }, [e, t, n])
            }
        },
        848135: (e, t, a) => {
            a.d(t, {
                B: () => o
            });
            var n = a(296540);

            function o() {
                let e = (0, n.useRef)(null),
                    [t, a] = (0, n.useState)(!1),
                    o = (0, n.useCallback)(() => {
                        let t = e.current;
                        t && a(t.matches(":hover"))
                    }, []);
                return [(0, n.useCallback)(t => {
                    t ? (t.addEventListener("mouseenter", o), t.addEventListener("mouseleave", o), e.current = t, o()) : e.current && (e.current.removeEventListener("mouseenter", o), e.current.removeEventListener("mouseleave", o), e.current = null)
                }, [o]), t, e]
            }
        },
        930113: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                lockFillSmallIcon: () => o
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.24 1.67 9.51 12.3",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.825 4.85a3.175 3.175 0 1 1 6.35 0v1.061a1.95 1.95 0 0 1 1.575 1.914v4.2a1.95 1.95 0 0 1-1.95 1.95H5.2a1.95 1.95 0 0 1-1.95-1.95v-4.2c0-.949.677-1.74 1.575-1.914zm1.1 1.025h4.15V4.85a2.075 2.075 0 0 0-4.15 0zm2.525 4.299a1.05 1.05 0 1 0-.9 0v.976a.45.45 0 0 0 .9 0z"
                    })
                },
                o = (0, a(104509).wt)("lockFillSmall", n, "fillSmall")
        }
    }
]);