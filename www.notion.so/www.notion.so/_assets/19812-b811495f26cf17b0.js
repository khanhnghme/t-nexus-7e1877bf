"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [19812, 27038], {
        31256: (e, t, i) => {
            i.d(t, {
                J: () => a
            }), i(296540);
            var n = i(474848);
            let o = {
                marginTop: 12,
                marginBottom: 4
            };

            function a() {
                let e = (0, i(533992).v3)();
                return (0, n.jsx)(i(321412).b, {
                    id: "languageAndRegionSettingsLanguage",
                    title: (0, n.jsx)(i(109939).sA, {
                        id: "languageRegionSettings.language.label",
                        defaultMessage: "Language"
                    }),
                    byline: (0, n.jsx)(i(109939).sA, {
                        id: "languageSettings.languageSwitcher.subtitle",
                        defaultMessage: "Choose the language you want to use Notion in"
                    }),
                    item: (0, n.jsx)(i(548436).A, {
                        size: "lg",
                        style: o,
                        onClick: () => {
                            (0, i(104310).u)({
                                event: {
                                    eventName: "change_language_button_clicked",
                                    eventProperties: {}
                                }
                            }), e.mobileNative && e.mobileNative.openAppLanguageSettings()
                        },
                        iconLeading: i(695142).arrowDiagonalUpRightFillIcon,
                        children: (0, n.jsx)(i(109939).sA, {
                            id: "languageSettings.languageSection.androidChangeLanguageButton",
                            defaultMessage: "Change Language"
                        })
                    })
                })
            }
        },
        33266: (e, t, i) => {
            i.d(t, {
                y: () => n
            });
            let n = (0, i(104509).xh)("gong", {
                default: {
                    loader: () => i.e(69998).then(i.bind(i, 736544))
                }
            })
        },
        44027: (e, t, i) => {
            function n(e) {
                let {
                    businessTrialOffer: t,
                    billingTime: n,
                    modalLastShownAt: o,
                    modalShownTimes: a
                } = e;
                return !!(0, i(383378).V9)(t, n) && void 0 !== o && void 0 !== a && (!(o > 0) || !(n.diff(i(906745).DateTime.fromMillis(o), "days").days >= i(118999).ls)) && (a ? ? 0) >= i(118999).TY
            }

            function o(e, t = (0, i(192159).DS)(e)) {
                if (!e) return;
                let n = (0, i(192159).i5)(e);
                if (n) return Math.ceil(n.toUTC().diff(t.toUTC(), "days").days)
            }

            function a(e, t) {
                let n = i(906745).DateTime.fromMillis(e.endDateMs).toUTC();
                return (t ? ? i(906745).DateTime.now()).toUTC().hasSame(n, "day")
            }

            function r(e) {
                let t = (0, i(278662).Jd)(e);
                if (t) return (0, i(875472).Vm)(t)
            }

            function l(e) {
                let t = (0, i(278662).Jd)(e);
                if (t) return (0, i(875472).kd)(t)
            }

            function s(e) {
                let t = i(118999).Tu[e];
                if (void 0 === t) throw Error(`Unknown trial length: ${e}`);
                return t
            }

            function d(e) {
                return Math.round(e / 30)
            }

            function c({
                billingData: e
            }) {
                if (!(0, i(192159).TB)(e)) return !1;
                if ((0, i(192159).HY)(e)) {
                    var t;
                    return (null == e ? void 0 : e.type) === "admin" && (null == (t = e.trial) ? void 0 : t.autoConvert) === !0
                }
                return (null == e ? void 0 : e.type) === "admin" && (0, i(722371).O9)(null == e ? void 0 : e.paymentMethod)
            }

            function u(e) {
                return (0, i(192159).oD)(e) && (0, i(717274).pX)()
            }

            function p(e) {
                return (0, i(722371).Xk)(["multi_search_scope_menu", "ai_workspace_settings_connector_cards", "business_trial_ai_connectors_upsell", "ai_corner_chat_connectors_button"], e)
            }

            function g(e) {
                return (0, i(722371).Xk)(i(90416).K_, e)
            }

            function m(e) {
                return (0, i(722371).Xk)([...i(994234).iE, ...i(994234).wW, ...i(994234).Fh], e)
            }

            function f(e) {
                let {
                    openedFrom: t,
                    campaign: i,
                    isCustomAgentsGateEnabled: n
                } = e;
                return n && (g(t) || "deeplink" === t && m(i))
            }
            i.d(t, {
                F$: () => f,
                IU: () => u,
                J: () => r,
                SF: () => g,
                Tr: () => d,
                UP: () => o,
                XF: () => a,
                cn: () => l,
                dt: () => m,
                od: () => n,
                rE: () => s,
                tY: () => p,
                z2: () => c
            }), i(16280)
        },
        50171: (e, t, i) => {
            i.r(t), i.d(t, {
                exclamationMarkTriangleSmallIcon: () => a,
                iconDefinition: () => o
            }), i(296540);
            var n = i(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.49 1.87 13.01 11.75",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.9 5.281a.625.625 0 0 0-.625.625v2.5a.625.625 0 0 0 1.25 0v-2.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, n.jsx)("path", {
                            d: "M9.58 2.788c-.702-1.217-2.458-1.217-3.16 0l-4.677 8.1c-.702 1.216.176 2.737 1.58 2.737h9.354c1.405 0 2.283-1.52 1.58-2.738zm-2.078.625a.575.575 0 0 1 .996 0l4.677 8.1a.575.575 0 0 1-.498.862H3.324a.575.575 0 0 1-.498-.863z"
                        })]
                    })
                },
                a = (0, i(104509).wt)("exclamationMarkTriangleSmall", o, "small")
        },
        59042: (e, t, i) => {
            i.d(t, {
                Q: () => n
            });
            let n = (0, i(104509).xh)("attio", {
                default: {
                    loader: () => i.e(48014).then(i.bind(i, 874320))
                }
            })
        },
        62412: (e, t, i) => {
            i.d(t, {
                O: () => r,
                u: () => a
            });
            var n = i(296540),
                o = i(474848);

            function a(e) {
                let {
                    buttonStyles: t
                } = e, a = (0, i(109939).tz)(), l = a.formatMessage(r.settings), s = (0, n.useCallback)(() => {
                    i(599754).Ow({
                        openedFrom: "sidebar",
                        currentPage: "user_settings"
                    })
                }, []);
                return (0, o.jsx)(i(51831).m, {
                    content: () => a.formatMessage(r.tooltip),
                    originGap: 6,
                    textWrap: !0,
                    placement: "right",
                    children: e => (0, o.jsx)(i(64960).Ay, { ...e,
                        onClick: s,
                        style: i(132261).DX.baseSidebarItem,
                        hoveredStyle: null == t ? void 0 : t.hoveredStyle,
                        children: (0, o.jsx)(i(380559).u, {
                            left: (0, o.jsx)(i(16275).I, {
                                icon: i(829968).gearIcon,
                                colorVariant: "secondary",
                                size: "lg"
                            }),
                            children: l
                        })
                    })
                })
            }
            let r = (0, i(109939).YK)({
                settingsAndMembers: {
                    id: "sidebarSettingsButton.settingsAndMembers",
                    defaultMessage: "Settings & members"
                },
                settings: {
                    id: "sidebarSettingsButton.settings",
                    defaultMessage: "Settings"
                },
                tooltip: {
                    id: "sidebarSettingsButton.tooltip",
                    defaultMessage: "Manage your account and settings"
                }
            })
        },
        96397: (e, t, i) => {
            i.d(t, {
                r: () => n
            });
            let n = (0, i(104509).xh)("n8N", {
                default: {
                    loader: () => i.e(45519).then(i.bind(i, 936631))
                }
            })
        },
        97010: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => n,
                templatesIcon: () => o
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.08 2.62 15.84 14.75",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M7.682 5.716V4.182c0-.858.7-1.557 1.557-1.557h5.823c.858 0 1.557.7 1.557 1.557v5.59a1.56 1.56 0 0 1-1.093 1.486l2.185 3.786c.589 1.038-.154 2.331-1.354 2.331H9.38c-1.138 0-1.895-1.18-1.421-2.201q-.513.113-1.057.114a4.81 4.81 0 0 1-4.818-4.818 4.812 4.812 0 0 1 5.6-4.754M9.24 3.875a.31.31 0 0 0-.307.307v5.6a.3.3 0 0 0 .298.296h1.66l.622-1.075a.6.6 0 0 1 .073-.103 1.56 1.56 0 0 1 2.638.1l.002.003.62 1.075h.217a.31.31 0 0 0 .307-.306v-5.59a.31.31 0 0 0-.307-.307zm-.01 7.453a1.55 1.55 0 0 1-1.547-1.547V6.99a3.562 3.562 0 0 0-4.35 3.481 3.56 3.56 0 0 0 3.569 3.568 3.54 3.54 0 0 0 2.09-.669l1.178-2.04zm3.914-1.7a.31.31 0 0 0-.54.002 1 1 0 0 1-.057.08L9.11 15.665l-.001.002a.306.306 0 0 0 .27.458h6.978a.31.31 0 0 0 .268-.463z"
                    })
                },
                o = (0, i(104509).wt)("templates", n, "default")
        },
        100410: (e, t, i) => {
            i.r(t), i.d(t, {
                iPhoneIcon: () => a,
                iconDefinition: () => o
            }), i(296540);
            var n = i(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.12 2.37 9.75 15.25",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.375 15c0-.345.28-.625.625-.625h4a.625.625 0 1 1 0 1.25H8A.625.625 0 0 1 7.375 15M9 4.375a.625.625 0 1 0 0 1.25h2a.625.625 0 1 0 0-1.25z"
                        }), (0, n.jsx)("path", {
                            d: "M5.125 4.5c0-1.174.951-2.125 2.125-2.125h5.5c1.174 0 2.125.951 2.125 2.125v11a2.125 2.125 0 0 1-2.125 2.125h-5.5A2.125 2.125 0 0 1 5.125 15.5zm2.125-.875a.875.875 0 0 0-.875.875v11c0 .483.392.875.875.875h5.5a.875.875 0 0 0 .875-.875v-11a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                a = (0, i(104509).wt)("iPhone", o, "default")
        },
        103499: (e, t, i) => {
            i.r(t), i.d(t, {
                filterSmallIcon: () => o,
                iconDefinition: () => n
            }), i(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.69 3.69 12.61 8.61",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M2.4 3.7a.7.7 0 1 0 0 1.4h11.2a.7.7 0 1 0 0-1.4zm9.5 3.594H4.1a.7.7 0 1 0 0 1.4h7.8a.7.7 0 1 0 0-1.4M5.8 10.9a.7.7 0 1 0 0 1.4h4.4a.7.7 0 1 0 0-1.4z"
                    })
                },
                o = (0, i(104509).wt)("filterSmall", n, "small")
        },
        109925: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => n,
                phoneIcon: () => o
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.58 2.77 14.78 14.57",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M4.84 3.093a1.34 1.34 0 0 1 1.881.158l2.52 2.96a1.524 1.524 0 0 1-.083 2.066l-1.22 1.22 2.715 2.717 1.221-1.221a1.525 1.525 0 0 1 2.066-.084l2.962 2.517a1.29 1.29 0 0 1 .16 1.805l-.559.678a3.94 3.94 0 0 1-3.447 1.414l-.16-.016A11.564 11.564 0 0 1 2.614 7.299 3.88 3.88 0 0 1 3.97 3.822zm.93.969a.09.09 0 0 0-.128-.011l-.869.729a2.63 2.63 0 0 0-.919 2.358 10.314 10.314 0 0 0 9.17 8.925l.16.017a2.7 2.7 0 0 0 2.355-.966l.558-.678a.04.04 0 0 0-.005-.057l-2.961-2.517a.275.275 0 0 0-.373.015l-1.663 1.663a.625.625 0 0 1-.884 0l-3.6-3.6a.625.625 0 0 1 0-.884l1.663-1.663a.275.275 0 0 0 .015-.373z"
                    })
                },
                o = (0, i(104509).wt)("phone", n, "default")
        },
        116175: (e, t, i) => {
            i.d(t, {
                V: () => n
            });
            let n = (0, i(104509).xh)("ramp", {
                default: {
                    loader: () => i.e(27373).then(i.bind(i, 597577))
                }
            })
        },
        118999: (e, t, i) => {
            i.d(t, {
                Hb: () => m,
                Hu: () => c,
                TY: () => n,
                Tu: () => r,
                U4: () => g,
                U7: () => f,
                WO: () => s,
                XX: () => p,
                c4: () => d,
                ef: () => a,
                ej: () => u,
                hI: () => l,
                ls: () => o
            });
            let n = 2,
                o = 30,
                a = 30,
                r = {
                    365: 5,
                    180: 5,
                    90: 5,
                    30: 5,
                    14: 4
                },
                l = 332,
                s = 852,
                d = 800,
                c = 407,
                u = 24,
                p = 400,
                g = 450,
                m = 524,
                f = 7
        },
        128817: (e, t, i) => {
            function n(e, t, n) {
                var o;
                let a = i(728372).AppStoreCurrentUserSettingsStore.state;
                if (!a) return;
                let r = null == (o = a.getSettings()) ? void 0 : o.tutorials;
                n ? (0, i(862759).m)({
                    userSettingsStore: a,
                    transaction: n,
                    data: {
                        tutorials: { ...r,
                            [t]: (0, i(752153).i9)(a, t)
                        }
                    }
                }) : u({
                    userAction: "TutorialActions.nextStep",
                    environment: e,
                    perform: e => {
                        (0, i(862759).m)({
                            userSettingsStore: a,
                            transaction: e,
                            data: {
                                tutorials: { ...r,
                                    [t]: (0, i(752153).i9)(a, t)
                                }
                            }
                        })
                    },
                    userId: a.id
                })
            }

            function o(e, t) {
                var n;
                let o = i(728372).AppStoreCurrentUserSettingsStore.state;
                if (!o) return;
                let a = null == (n = o.getSettings()) ? void 0 : n.tutorials;
                u({
                    userAction: "TutorialActions.prevStep",
                    environment: e,
                    perform: e => {
                        (0, i(862759).m)({
                            userSettingsStore: o,
                            transaction: e,
                            data: {
                                tutorials: { ...a,
                                    [t]: (0, i(752153).KD)(o, t)
                                }
                            }
                        })
                    },
                    userId: o.id
                })
            }

            function a(e, t) {
                var n;
                let o = i(728372).AppStoreCurrentUserSettingsStore.state;
                if (!o) return;
                let a = null == (n = o.getSettings()) ? void 0 : n.tutorials;
                (null == a ? void 0 : a[t]) !== i(212169).YD && u({
                    userAction: "TutorialActions.dismissTutorial",
                    environment: e,
                    perform: e => {
                        (0, i(862759).m)({
                            userSettingsStore: o,
                            transaction: e,
                            data: {
                                tutorials: { ...a,
                                    [t]: i(212169).YD
                                }
                            }
                        })
                    },
                    userId: o.id
                })
            }

            function r(e) {
                let t = i(728372).AppStoreCurrentUserSettingsStore.state;
                t && u({
                    userAction: "TutorialActions.resetTutorialsDebug",
                    environment: e,
                    perform: e => {
                        (0, i(862759).m)({
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

            function l(e, t, n) {
                var o;
                let a = i(728372).AppStoreCurrentUserSettingsStore.state;
                if (!a || (0, i(752153).x$)(a, t)) return;
                let r = (0, i(752153).gt)(a, t);
                i(212169).c$[t].steps.findIndex(e => e.id === r) >= i(212169).c$[t].steps.findIndex(e => e.id === n) || (0, i(862759).m)({
                    userSettingsStore: a,
                    transaction: e,
                    data: {
                        tutorials: { ...null == (o = a.getSettings()) ? void 0 : o.tutorials,
                            [t]: n
                        }
                    }
                })
            }

            function s(e, t, n) {
                if ((0, i(752153).ll)(n)) return;
                let o = (0, i(752153).tb)(t, n);
                o && l(e, t, o)
            }

            function d(e) {
                var t;
                let {
                    environment: n,
                    tutorialId: o,
                    tutorialStepId: a,
                    transaction: r
                } = e, l = i(728372).AppStoreCurrentUserSettingsStore.state;
                if (!l) return;
                let s = null == (t = l.getSettings()) ? void 0 : t.tutorials;
                r ? (0, i(862759).m)({
                    userSettingsStore: l,
                    transaction: r,
                    data: {
                        tutorials: { ...s,
                            [o]: a
                        }
                    }
                }) : u({
                    userAction: "TutorialActions.nextStep",
                    environment: n,
                    perform: e => {
                        (0, i(862759).m)({
                            userSettingsStore: l,
                            transaction: e,
                            data: {
                                tutorials: { ...s,
                                    [o]: a
                                }
                            }
                        })
                    },
                    userId: l.id
                })
            }

            function c(e) {
                let t = i(728372).AppStoreCurrentUserSettingsStore.state;
                return !!t && (0, i(752153).x$)(t, e)
            }

            function u(e) {
                return (0, i(377796).createAndCommit)({ ...e,
                    canUndo: !1,
                    cellTarget: "main"
                })
            }
            i.r(t), i.d(t, {
                checkIsTutorialDone: () => c,
                dismissTutorial: () => a,
                resetTutorials: () => r,
                tutorialAdvanceToStep: () => l,
                tutorialAdvanceToStepAfter: () => s,
                tutorialGoToNextStep: () => n,
                tutorialGoToPrevStep: () => o,
                tutorialGoToStep: () => d
            })
        },
        138105: (e, t, i) => {
            i.d(t, {
                W: () => r,
                U: () => s
            });
            var n = i(296540);
            let o = {
                control: (0, i(109939).YK)({
                    tooltip: {
                        id: "adoptionMarketplaceSidebarTooltipDiscovery.control.tooltip",
                        defaultMessage: "Find templates by Notion’s community"
                    }
                }),
                v1: (0, i(109939).YK)({
                    tooltip: {
                        id: "adoptionMarketplaceSidebarTooltipDiscovery.v1.tooltip",
                        defaultMessage: "Discover tools and templates for your workspace"
                    }
                }),
                v2: (0, i(109939).YK)({
                    tooltip: {
                        id: "adoptionMarketplaceSidebarTooltipDiscovery.v2.tooltip",
                        defaultMessage: "Discover what the community has built"
                    }
                })
            };
            var a = i(474848);

            function r(e) {
                let {
                    styles: t
                } = e, r = (0, i(533992).v3)(), s = (0, i(109939).tz)(), d = (0, n.useRef)(!1), c = (0, i(682985).K8)(() => {
                    let {
                        RouterStore: e
                    } = r;
                    return e.state.route.name
                }, [r]), u = (0, i(682985).K8)(() => {
                    let e = i(218744).default.getEligibleGroup({
                        experimentId: "adoption_marketplace_sidebar_surface_exploratory_copy",
                        defaultGroup: "control"
                    });
                    return "v1" === e || "v2" === e ? e : "control"
                }, []), p = (0, i(682985).K8)(() => i(218744).default.getEligibleGroup({
                    experimentId: "adoption_marketplace_sidebar_tooltip_discovery_copy",
                    defaultGroup: "control",
                    disableExposureLogging: !0
                }), []), g = (0, i(892166).U)("marketplace_sidebar_option_click"), m = (0, n.useCallback)(() => {
                    var e;
                    let t = "control" === (e = p) || "v1" === e || "v2" === e ? e : "control";
                    return s.formatMessage(o[t].tooltip)
                }, [s, p]), f = (0, n.useCallback)(() => {
                    d.current || (d.current = !0, i(218744).default.manuallyLogExperimentExposure("adoption_marketplace_sidebar_tooltip_discovery_copy"))
                }, []);
                return (0, a.jsx)(i(51831).m, {
                    content: m,
                    originGap: 6,
                    placement: "right",
                    children: (e, n) => (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(l, {
                            isTooltipVisible: n,
                            onTooltipVisible: f
                        }), (0, a.jsx)(i(590422).Q, {
                            style: t.sidebarItemButtonStyle,
                            hoveredStyle: t.buttonHoveredStyle,
                            onClick: g,
                            ...e,
                            children: (0, a.jsx)(i(380559).u, {
                                left: (0, a.jsx)(i(16275).I, {
                                    icon: i(97010).templatesIcon,
                                    colorVariant: "secondary",
                                    size: "lg"
                                }),
                                isBottomItem: !0,
                                style: "gallery" === c ? t.sidebarItemActiveStyle : {},
                                children: s.formatMessage(i(648880).L[u])
                            })
                        })]
                    })
                })
            }

            function l(e) {
                let {
                    isTooltipVisible: t,
                    onTooltipVisible: i
                } = e;
                return (0, n.useEffect)(() => {
                    t && i()
                }, [t, i]), null
            }
            let s = (0, i(109939).YK)({
                templatesMwnTooltip: {
                    defaultMessage: "Find templates by Notion’s community",
                    id: "sidebar.openTemplatePickerButton.tooltip.mwn"
                },
                title: {
                    defaultMessage: "Templates",
                    id: "sidebar.openTemplatePickerButton"
                },
                marketplaceTitle: {
                    defaultMessage: "Marketplace",
                    id: "sidebar.openMarketplaceButton"
                }
            })
        },
        152996: (e, t, i) => {
            i.d(t, {
                Vq: () => n,
                bt: () => a,
                vx: () => o
            });
            let n = {
                    mini: 3,
                    small: 4,
                    default: 6,
                    medium: 8,
                    large: 12,
                    max: 16
                },
                o = "0px 4px 0px -2px #00000005",
                a = {
                    opacity: .5,
                    pointerEvents: "none",
                    userSelect: "none"
                }
        },
        166863: (e, t, i) => {
            i.d(t, {
                P: () => o
            });
            let n = (0, i(109939).YK)({
                    languageTitle: {
                        id: "languageRegionSettings.language.label",
                        defaultMessage: "Language"
                    },
                    languageDescription: {
                        id: "languageSettings.languageSwitcher.subtitle",
                        defaultMessage: "Choose the language you want to use Notion in"
                    },
                    numberFormatTitle: {
                        id: "languageRegionSettings.numberFormat.label",
                        defaultMessage: "Number format"
                    },
                    numberFormatDescription: {
                        id: "languageRegionSettings.numberFormat.description",
                        defaultMessage: "Choose how numbers and currencies are formatted. Default uses your language setting."
                    },
                    spellcheckerTitle: {
                        id: "languageRegionSettings.spellchecker.label",
                        defaultMessage: "Spellchecker languages"
                    },
                    spellcheckerDescription: {
                        id: "languageSettings.spellcheckerSwitcher.subtitle",
                        defaultMessage: "Change the languages used by the spellchecker."
                    },
                    textDirectionTitle: {
                        id: "textDirectionControlsSetting.title",
                        defaultMessage: "Always show text direction controls"
                    },
                    textDirectionDescription: {
                        id: "textDirectionControlsSetting.caption",
                        defaultMessage: "Show the option to change text direction (left to right or right to left) in the editor, regardless of what language you’re using"
                    },
                    startWeekOnMondayTitle: {
                        id: "calendarSettings.startWeekOnMonday.label",
                        defaultMessage: "Start week on Monday"
                    },
                    startWeekOnMondayDescription: {
                        id: "calendarSettings.startWeekOnMonday.message",
                        defaultMessage: "This will affect the way your calendars appear in Notion"
                    },
                    dateFormatTitle: {
                        id: "dateMentionFormatSettings.title",
                        defaultMessage: "Date format"
                    },
                    dateFormatDescription: {
                        id: "dateMentionFormatSettings.caption",
                        defaultMessage: "Set the default format for new @date mentions"
                    },
                    autoTimezoneTitle: {
                        id: "dateAndTimeSettings.autoTimeZone.title",
                        defaultMessage: "Set time zone automatically using your location"
                    },
                    autoTimezoneDescription: {
                        id: "dateAndTimeSettings.autoTimeZone.caption",
                        defaultMessage: "Reminders, notifications, and emails will be delivered to you based on your time zone"
                    },
                    timezoneTitle: {
                        id: "dateAndTimeSettings.timeZone.title",
                        defaultMessage: "Time zone"
                    },
                    timezoneDescription: {
                        id: "dateAndTimeSettings.timeZone.caption",
                        defaultMessage: "Choose your time zone"
                    }
                }),
                o = {
                    language: {
                        id: "languageAndRegionSettingsLanguage",
                        title: n.languageTitle,
                        description: n.languageDescription
                    },
                    numberFormat: {
                        id: "languageAndRegionSettingsNumberFormat",
                        title: n.numberFormatTitle,
                        description: n.numberFormatDescription
                    },
                    spellchecker: {
                        id: "languageAndRegionSettingsSpellchecker",
                        title: n.spellcheckerTitle,
                        description: n.spellcheckerDescription
                    },
                    textDirection: {
                        id: "languageAndRegionSettingsTextDirection",
                        title: n.textDirectionTitle,
                        description: n.textDirectionDescription
                    },
                    startWeekOnMonday: {
                        id: "languageAndRegionSettingsStartWeekOnMonday",
                        title: n.startWeekOnMondayTitle,
                        description: n.startWeekOnMondayDescription
                    },
                    dateFormat: {
                        id: "languageAndRegionSettingsDateFormat",
                        title: n.dateFormatTitle,
                        description: n.dateFormatDescription
                    },
                    autoTimezone: {
                        id: "languageAndRegionSettingsAutoTimezone",
                        title: n.autoTimezoneTitle,
                        description: n.autoTimezoneDescription
                    },
                    timezone: {
                        id: "languageAndRegionSettingsTimezone",
                        title: n.timezoneTitle,
                        description: n.timezoneDescription
                    }
                }
        },
        198347: (e, t, i) => {
            i.d(t, {
                v: () => n
            });

            function n(e, t) {
                i(606047).A.setState({ ...i(606047).A.state,
                    open: !0,
                    from: e
                }), i(606047).A.state.onClose = null == t ? void 0 : t.onClose
            }
        },
        203986: (e, t, i) => {
            i.d(t, {
                v: () => n
            });

            function n() {
                let e = (0, i(972740).L)();
                return (0, i(682985).K8)(() => (null == e ? void 0 : e.getSetting("disallow_custom_mcp_servers")) === !1, [e])
            }
        },
        209868: (e, t, i) => {
            i.d(t, {
                M: () => n
            });
            let n = (0, i(104509).xh)("sentry", {
                default: {
                    loader: () => i.e(13568).then(i.bind(i, 406362))
                }
            })
        },
        212169: (e, t, i) => {
            i.d(t, {
                Ud: () => r,
                YD: () => a,
                c$: () => n,
                q_: () => o
            });
            let n = {
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
                o = "completed",
                a = "dismissed";

            function r(e, t) {
                return null == t ? void 0 : t[e]
            }
        },
        244878: (e, t, i) => {
            i.d(t, {
                a: () => n
            });
            let n = (0, i(104509).xh)("miro", {
                default: {
                    loader: () => i.e(6122).then(i.bind(i, 891772))
                },
                tintable: {
                    loader: () => i.e(6122).then(i.bind(i, 985130))
                }
            })
        },
        272799: (e, t, i) => {
            function n(e) {
                i(986939).A.isMobile || i(822284).HL.setState({
                    open: !0,
                    ...e
                })
            }

            function o() {
                i(822284).HL.update(e => ({ ...e,
                    open: !1
                }))
            }

            function a(e) {
                i(986939).A.isMobile || i(822284).BusinessTrialEndingModalStore.update(() => ({
                    modalState: "initial",
                    ...e,
                    open: !0
                }))
            }

            function r(e) {
                i(822284).BusinessTrialEndingModalStore.update(t => ({ ...t,
                    modalState: e
                }))
            }

            function l() {
                i(822284).BusinessTrialEndingModalStore.update(e => ({ ...e,
                    open: !1,
                    modalState: "initial"
                }))
            }

            function s(e) {
                i(822284).BS.setState({ ...e,
                    open: !0
                })
            }

            function d() {
                i(822284).BS.update(e => ({ ...e,
                    open: !1
                }))
            }

            function c(e) {
                i(822284).jz.setState({
                    open: !0,
                    ...e
                })
            }

            function u() {
                i(822284).jz.update(e => ({ ...e,
                    open: !1
                }))
            }

            function p(e) {
                i(986939).A.isMobile || i(822284).ZJ.setState({
                    open: !0,
                    ...e
                })
            }

            function g() {
                i(822284).ZJ.update(e => ({ ...e,
                    open: !1
                }))
            }
            async function m(e) {
                var t;
                let {
                    billingData: n,
                    environment: o,
                    spaceStore: a,
                    from: r,
                    memberCount: l,
                    prices: s,
                    offerToApply: d,
                    autoConvert: c,
                    captchaToken: u,
                    sessionId: p
                } = e;
                if (!a || !r || !n || void 0 === l || !d) return {
                    success: !1,
                    error: "Invalid arguments"
                };
                let g = e.nowForTesting ? ? i(906745).DateTime.now(),
                    m = i(653828).H.state.selectedCurrencyCode ? ? "USD",
                    f = (0, i(982473).vk)(s, {
                        product: "business",
                        interval: "month",
                        currency: m
                    }),
                    h = (0, i(982473).vH)({
                        items: (null == (t = n.subscription) ? void 0 : t.items) ? ? [],
                        trialEnd: g.plus({
                            days: (0, i(337592).s1)(d)
                        })
                    }, {
                        price: f,
                        quantity: l
                    }),
                    v = d.campaign;
                try {
                    return await (0, i(129909).n)({
                        environment: o,
                        spaceStore: a,
                        from: r,
                        desiredState: h,
                        trialData: {
                            id: v,
                            from: r,
                            autoConvert: c
                        },
                        captchaToken: u,
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
            async function f(e) {
                let {
                    billingData: t,
                    environment: n,
                    spaceStore: o
                } = e, a = o.getSpaceId();
                if (!t || !(0, i(192159).TB)(t) || !o.canAdmin()) return;
                let r = await n.api.callCellCompatibleApi({
                    eventName: "getCustomerOffersReceived",
                    environment: n,
                    data: {
                        spaceId: a
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: a
                    }
                });
                if ("failed" !== r.type) return (0, i(278662).Jd)(r.data)
            }

            function h(e) {
                var t, n;
                let o, {
                    billingData: a,
                    businessTrialOffer: r,
                    modalLastShownAt: l,
                    modalShownTimes: s
                } = e;
                if (!a) return !1;
                let d = (0, i(192159).DS)(a);
                if (t = l, n = d, t && i(906745).DateTime.fromMillis(t).startOf("day").equals(n.startOf("day")) || "business" === (0, i(192159).AW)(a) || "enterprise" === (0, i(192159).AW)(a) || !r || (0, i(44027).od)({
                        businessTrialOffer: r,
                        billingTime: d,
                        modalLastShownAt: l,
                        modalShownTimes: s
                    }) || (0, i(44027).z2)({
                        billingData: a
                    }) || void 0 === r || (0, i(875472).nb)(r)) return !1;
                let c = r.offer.duration.days;
                if (void 0 === c) return !1;
                try {
                    o = (0, i(44027).rE)(c)
                } catch {
                    o = void 0
                }
                return void 0 !== o && (0, i(383378).tz)(r, o, d) || (0, i(44027).XF)(r, d) || (0, i(383378).V9)(r, d)
            }
            i.r(t), i.d(t, {
                closeBusinessTrialCCUpfrontModal: () => g,
                closeBusinessTrialEndingModal: () => l,
                closeBusinessTrialExplorePlanModal: () => u,
                closeBusinessTrialLossAversionModal: () => d,
                closeBusinessTrialStartModal: () => o,
                createBusinessTrial: () => m,
                determineShouldShowTrialEndingModal: () => h,
                getBusinessTrialUsingOffersReceived: () => f,
                openBusinessTrialCCUpfrontModal: () => p,
                openBusinessTrialEndingModal: () => a,
                openBusinessTrialExplorePlanModal: () => c,
                openBusinessTrialLossAversionModal: () => s,
                openBusinessTrialStartModal: () => n,
                updateBusinessTrialEndingModalState: () => r
            }), i(16280)
        },
        306604: (e, t, i) => {
            i.d(t, {
                e: () => n
            });
            let n = (0, i(104509).xh)("intercom", {
                default: {
                    loader: () => i.e(47644).then(i.bind(i, 91066))
                }
            })
        },
        321412: (e, t, i) => {
            i.d(t, {
                b: () => s
            });
            var n = i(296540),
                o = i(474848);
            let a = {
                highlight: {
                    height: "calc(100% + 12px)",
                    width: "calc(100% + 24px)",
                    insetBlockStart: "-6px",
                    insetInlineStart: "-12px",
                    position: "absolute",
                    backgroundColor: i(632079).Tj.yellow.background.secondaryTranslucent,
                    borderRadius: 6,
                    pointerEvents: "none"
                }
            };

            function r({
                itemId: e,
                itemRef: t
            }) {
                let l = (0, i(533992).v3)(),
                    s = (0, n.useContext)(i(700587).U),
                    d = (0, i(682985).K8)(() => i(488301).J.state.highlightedSetting === e, [e]);
                return (0, n.useEffect)(() => {
                    d && t.current && (0, i(341471).h)({
                        element: t.current,
                        environment: l,
                        scrollerContext: s,
                        vertical: {
                            reveal: "closest"
                        },
                        horizontal: void 0,
                        animate: !0
                    })
                }, [d, l, t, s]), (0, o.jsx)(i(654979).A, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    visible: !!d,
                    config: {
                        duration: 250,
                        timingFunction: "ease-in-out"
                    },
                    style: a.highlight
                })
            }
            let l = {
                flex: 3,
                minWidth: 200
            };

            function s({
                id: e,
                title: t,
                titleId: a,
                byline: d,
                bylineId: c,
                item: u,
                badge: p,
                layout: g = "inline"
            }) {
                let m = (0, n.useRef)(null),
                    f = (0, i(960253).I)(() => ({
                        settingContainer: {
                            display: "flex",
                            width: "100%",
                            flexWrap: "wrap",
                            position: "relative",
                            gap: 12,
                            ..."stacked" === g ? {
                                flexDirection: "column"
                            } : {
                                justifyContent: "space-between",
                                alignItems: "center"
                            }
                        },
                        settingItem: {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            ..."stacked" === g ? {
                                width: "100%"
                            } : {
                                alignItems: "flex-end"
                            }
                        }
                    }), [g]);
                return (0, o.jsxs)("div", {
                    ref: m,
                    style: f.settingContainer,
                    children: [(0, o.jsx)("div", {
                        style: l,
                        children: (0, o.jsx)(i(741489).j, {
                            title: t,
                            titleId: a,
                            byline: d,
                            bylineId: c,
                            badge: p
                        })
                    }), (0, o.jsx)("div", {
                        style: f.settingItem,
                        children: u
                    }), (0, o.jsx)(r, {
                        itemId: e,
                        itemRef: m
                    })]
                })
            }
        },
        337439: (e, t, i) => {
            i.d(t, {
                p: () => n
            });
            async function n() {
                return (await i.e(32675).then(i.bind(i, 271417))).navigateToLibraryPage
            }
        },
        337592: (e, t, i) => {
            i.d(t, {
                Ki: () => o,
                d1: () => a,
                j8: () => s,
                s1: () => l,
                yX: () => r
            }), i(898992), i(737550), i(296540);
            var n = i(474848);

            function o(e) {
                if (!e) return;
                let t = (0, i(875472).b_)(e);
                return (0, n.jsx)(i(109939).sA, {
                    id: "coupon.duration.months",
                    defaultMessage: "{formattedMonths} months",
                    values: {
                        formattedMonths: (0, n.jsx)(i(109939).Gr, {
                            value: t.months
                        })
                    }
                })
            }

            function a(e, t, n, o) {
                return o && (0, i(90119).FV)(o, t) ? o : n && e === t && (0, i(90119).FV)(n.campaign, e) ? n.campaign : void 0
            }

            function r(e, t, n) {
                let o, a;
                if (e && (0, i(875472).rM)(e) && (o = (0, i(90119).MN)(e.offer.campaign, t), a = !!n && (0, i(90119).sZ)(e.offer.campaign, n), o && a)) return (0, i(875472).kd)(e)
            }

            function l(e) {
                return (0, i(875472).b_)(e).days
            }
            async function s({
                billingData: e,
                environment: t,
                sidebarSpaceStore: n,
                offerCampaign: o
            }) {
                return !n.id || !e || !n.getSetting("reach_block_limit_time") || (0, i(192159).Gm)(e) ? Promise.resolve(!1) : Promise.resolve(!!await i(617995).I.awaitData(t, {
                    offerCampaign: o,
                    spaceId: n.id
                }))
            }
        },
        351124: (e, t, i) => {
            i.d(t, {
                i: () => n
            });
            let n = (0, i(104509).xh)("amplitude", {
                default: {
                    loader: () => i.e(36448).then(i.bind(i, 238866))
                },
                tintable: {
                    loader: () => i.e(36448).then(i.bind(i, 749776))
                }
            })
        },
        370484: (e, t, i) => {
            function n(e) {
                return "owner" === e.accessRole || "writer" === e.accessRole
            }

            function o(e) {
                return `${e.accountId}:${e.id}`
            }

            function a(e) {
                return {
                    id: e.id,
                    accountId: e.accountId,
                    name: e.name,
                    color: e.color,
                    primary: e.primary,
                    accessRole: e.accessRole
                }
            }

            function r(e) {
                let {
                    accountEmail: t,
                    accountCalendars: i
                } = e;
                if (0 === i.length) return;
                let n = i.find(e => e.primary);
                if (n) return n;
                if (t) {
                    let e = i.find(e => e.id === t);
                    if (e) return e
                }
                return i[0]
            }

            function l(e) {
                let {
                    currentUserEmail: t,
                    calendarAccounts: l,
                    getCalendarsForAccount: s
                } = e, d = function(e, t) {
                    if (0 === t.length) return;
                    let n = void 0 !== e ? (0, i(258902).lf)(e, t) : t[0];
                    if (!n) return;
                    let o = r({
                        accountEmail: n.email,
                        accountCalendars: n.calendars
                    });
                    if (o) return {
                        account: n,
                        defaultCalendar: o,
                        state: {
                            defaultCalendar: {
                                accountId: n.id,
                                calendarId: o.id
                            },
                            connectedAccountSnapshots: t.map(e => ({
                                id: e.id,
                                email: e.email,
                                provider: e.provider,
                                authorized: e.authorized,
                                displayName: e.displayName,
                                authorizationStatus: e.authorized ? "authorized" : "unauthorized",
                                calendars: e.calendars
                            }))
                        }
                    }
                }(t, l.map(e => ({ ...e,
                    calendars: s(e.id).map(a)
                })));
                if (!d) return;
                let {
                    account: c,
                    defaultCalendar: u,
                    state: p
                } = d, g = n(u), m = [{
                    moduleType: "calendar",
                    type: "accountOrganizationCalendars",
                    identifier: c.id,
                    actions: ["read", "readCoworker"]
                }, function(e) {
                    let {
                        calendar: t,
                        actions: i,
                        constraints: n
                    } = e;
                    return {
                        type: "calendar",
                        moduleType: "calendar",
                        identifier: o(t),
                        accountId: t.accountId,
                        calendarId: t.id,
                        actions: i,
                        constraints: n
                    }
                }({
                    calendar: u,
                    actions: g ? ["read", "write"] : ["read"],
                    constraints: g ? {
                        skipConfirmation: !1
                    } : void 0
                })];
                return {
                    account: c,
                    calendar: u,
                    state: p,
                    permissions: m
                }
            }
            i.d(t, {
                Jx: () => n,
                LC: () => a,
                N$: () => o,
                QJ: () => r,
                rL: () => l
            }), i(898992), i(672577), i(581454)
        },
        372365: (e, t, i) => {
            i.r(t), i.d(t, {
                clockSmallIcon: () => a,
                iconDefinition: () => o
            }), i(296540);
            var n = i(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M8 3.955a.625.625 0 0 0-.625.625v2.795H5.12a.625.625 0 1 0 0 1.25H8c.345 0 .625-.28.625-.625V4.58A.625.625 0 0 0 8 3.955"
                        }), (0, n.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                a = (0, i(104509).wt)("clockSmall", o, "small")
        },
        380559: (e, t, i) => {
            i.d(t, {
                u: () => r
            }), i(296540);
            var n = i(474848);
            let o = {
                position: "absolute",
                insetInlineEnd: -2,
                bottom: -2
            };

            function a(e) {
                let {
                    size: t
                } = e;
                return (0, n.jsx)("span", {
                    style: o,
                    children: (0, n.jsx)(i(16275).I, {
                        icon: i(759706).arrowDiagonalUpRightSmallIcon,
                        size: t,
                        colorVariant: "primary",
                        showOutline: !0
                    })
                })
            }

            function r(e) {
                var t, o;
                let {
                    isTablet: r
                } = (0, i(533992).Y0)(), l = (0, i(853284).U)(), s = (0, i(665002).g)(), d = i(986939).A.isMobile ? (0, i(616844).Y5)("left", "number" == typeof(null == (t = e.style) ? void 0 : t.paddingInlineStart) ? null == (o = e.style) ? void 0 : o.paddingInlineStart : 10) : void 0, c = (0, i(960253).I)(() => {
                    let t = i(986939).A.isMobile ? {
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            minHeight: 26,
                            fontSize: 16,
                            paddingTop: r ? 4 : 8,
                            paddingBottom: r ? 4 : 8,
                            paddingInlineStart: d,
                            paddingInlineEnd: 10,
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            boxShadow: void 0,
                            marginBottom: e.shouldShowMobileMarginBottom ? 12 : 1
                        } : {
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            fontSize: 14,
                            minHeight: e.isBottomItem ? 24 : 27,
                            height: i(132261).Zr,
                            paddingTop: 4,
                            paddingBottom: 4,
                            ...(0, i(153262).ic)()
                        },
                        n = i(986939).A.isMobile ? 24 : e.isLibrary ? i(132261).FD : i(132261).ry;
                    return {
                        wrapper: { ...t,
                            ...e.style,
                            ...s && {
                                transition: "none"
                            }
                        },
                        icon: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            flexGrow: 0,
                            width: i(986939).A.isMobile ? 28 : 22,
                            height: i(986939).A.isMobile ? 24 : 18,
                            marginInlineEnd: e.isLibrary ? 3 : 8,
                            position: "relative"
                        },
                        right: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            flexGrow: 0,
                            height: "100%",
                            ...e.rightStyle
                        },
                        left: {
                            flexShrink: 0,
                            flexGrow: 0,
                            borderRadius: 4,
                            color: i(632079).Tj.text.secondary,
                            width: n,
                            height: n,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginInlineEnd: l ? 6 * !e.icon : e.isLibrary ? 8 : 8 * !e.icon
                        },
                        children: {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexBasis: "auto",
                            whiteSpace: "nowrap",
                            minWidth: 0,
                            overflow: "hidden",
                            textOverflow: e.right && !i(986939).A.isMobile ? "clip" : "ellipsis",
                            ...e.childrenStyle
                        }
                    }
                }, [r, d, e.shouldShowMobileMarginBottom, e.isBottomItem, e.style, e.rightStyle, e.isLibrary, e.icon, e.right, e.childrenStyle, l, s]);
                return (0, n.jsxs)("div", {
                    role: e.role,
                    dir: (0, i(619157).A1)() ? "rtl" : "ltr",
                    "aria-current": e["aria-current"],
                    "aria-expanded": e["aria-expanded"],
                    "aria-owns": e["aria-owns"],
                    "aria-labelledby": e["aria-labelledby"],
                    style: c.wrapper,
                    onFocus: e.onFocus,
                    onBlur: e.onBlur,
                    onMouseMove: e.onMouseMove,
                    onMouseLeave: e.onMouseLeave,
                    onClick: e.onClick,
                    className: e.className,
                    children: [e.left ? (0, n.jsx)("div", {
                        style: c.left,
                        children: e.left
                    }) : void 0, e.icon ? (0, n.jsxs)("div", {
                        style: c.icon,
                        children: [e.icon, e.isAlias ? (0, n.jsx)(a, {
                            size: "xs"
                        }) : void 0]
                    }) : void 0, (0, n.jsx)("div", {
                        style: c.children,
                        children: e.children
                    }), e.right ? (0, n.jsx)("div", {
                        style: c.right,
                        children: e.right
                    }) : void 0]
                })
            }
        },
        383378: (e, t, i) => {
            i.d(t, {
                $G: () => o,
                Hj: () => a,
                Nh: () => c,
                V9: () => l,
                WL: () => n,
                cv: () => d,
                nS: () => r,
                tz: () => s
            }), i(581454);
            let n = 30,
                o = 5;

            function a(e, t) {
                var i;
                return (null == (i = e.subscription) ? void 0 : i.trialEnd) !== void 0 && "reset_and_invoice" === t.subscription.type
            }

            function r(e, t, n) {
                return e ? (0, i(850640).W_)(e.toMillis(), n ? ? "long", t) : void 0
            }

            function l(e, t) {
                let n = i(906745).DateTime.fromMillis(e.endDateMs);
                return (t ? ? i(906745).DateTime.now()) > n
            }

            function s(e, t, n) {
                let o = i(906745).DateTime.fromMillis(e.endDateMs),
                    a = n ? ? i(906745).DateTime.now();
                return a < o && o.diff(a).as("days") <= t
            }

            function d(e) {
                let {
                    prices: t,
                    products: o,
                    interval: a,
                    memberCount: r,
                    currency: l = "USD",
                    trialLengthDays: s = n,
                    trialStartDate: d = i(906745).DateTime.now()
                } = e;
                return {
                    items: o.map(e => ({
                        price: (0, i(982473).vk)(t, {
                            product: e,
                            interval: a,
                            currency: l
                        }),
                        quantity: r
                    })),
                    trialEnd: d.plus({
                        days: s
                    })
                }
            }

            function c(e) {
                return (0, i(722371).Xk)(e, "plus") && (0, i(722371).Xk)(e, "ai")
            }
        },
        392325: (e, t, i) => {
            i.d(t, {
                WD: () => s,
                lB: () => l,
                ge: () => a,
                jg: () => r,
                GU: () => d
            }), i(944114);
            var n = i.n(i(845732));
            let o = (0, i(290068).F)({
                unicode: () => /@\p{Letter}+/gu,
                fallback: /@[A-Za-z]+/g
            });

            function a(e) {
                return {
                    plugin: t => {
                        var n, a;
                        l(t), n = t, a = e, r({
                            md: n,
                            name: "user_mentions",
                            regex: o,
                            createTokens(e, t) {
                                let n = e.slice(1),
                                    o = a.get(n);
                                if (o) return [{
                                    type: "user_mention_open",
                                    tag: "a",
                                    level: t + 1,
                                    attrs: {
                                        [i(253050).lc[i(247438).Ifu.User]]: o
                                    }
                                }, {
                                    type: "text",
                                    content: e
                                }, {
                                    type: "user_mention_close",
                                    tag: "/a",
                                    level: t
                                }]
                            }
                        }), s(t), d(t)
                    }
                }
            }

            function r(e) {
                let {
                    md: t,
                    name: n,
                    regex: o,
                    createTokens: a
                } = e, {
                    arrayReplaceAt: r
                } = t.utils;
                t.core.ruler.after("linkify", n, e => {
                    let t = 0,
                        l = e.tokens;
                    for (let s = 0; s < l.length; s++) {
                        let d = l[s].children;
                        if ("inline" === l[s].type && d)
                            for (let c = d.length - 1; c >= 0; c--) {
                                let u = d[c];
                                ("link_open" === u.type || "link_close" === u.type) && "auto" === u.info && (t -= u.nesting), "text" === u.type && 0 === t && o.test(u.content) && (l[s].children = r(d, c, function(e, t, r) {
                                    let l = 0,
                                        s = [];
                                    if (e.replace(o, function(o) {
                                            let d = Array.from(arguments),
                                                c = d.length - 1;
                                            "string" != typeof d[c] && (c -= 1);
                                            let u = d[c],
                                                p = d[c - 1];
                                            if (p > 0 && (0, i(290068).D$)(u[p - 1]) || p + o.length < u.length && (0, i(290068).D$)(u[p + o.length])) return "";
                                            let g = a(o, t);
                                            if (!g) return "";
                                            if (p > l) {
                                                let t = new r("text", "", 0);
                                                t.content = e.slice(l, p), s.push(t)
                                            }
                                            for (let {
                                                    type: e,
                                                    attrs: t,
                                                    tag: i,
                                                    level: o,
                                                    content: a
                                                } of g) {
                                                let l = new r(e, "", 0);
                                                if (t)
                                                    for (let [e, i] of Object.entries(t)) l.attrPush([e, i]);
                                                i && (l.tag = i, l.markup = n), void 0 !== o && (l.level = o), a && (l.content = a), s.push(l)
                                            }
                                            return l = p + o.length, ""
                                        }), l < e.length) {
                                        let t = new r("text", "", 0);
                                        t.content = e.slice(l), s.push(t)
                                    }
                                    return s
                                }(u.content, u.level, e.Token)))
                            }
                    }
                    return !0
                })
            }

            function l(e) {
                r({
                    md: e,
                    name: "date_mentions",
                    regex: /20\d\d-\d\d-\d\d/g,
                    createTokens: (e, t) => [{
                        type: "date_mention_open",
                        tag: "time",
                        attrs: {
                            datetime: e,
                            [i(253050).lc.dateFormat]: "relative"
                        },
                        level: t + 1
                    }, {
                        type: "text",
                        content: e
                    }, {
                        type: "date_mention_close",
                        tag: "/time",
                        level: t
                    }]
                })
            }

            function s(e) {
                let t = /^aside\s+(.*)$/;
                e.use(n(), "callout_block", {
                    validate: e => !!e.trim().match(t),
                    render(n, o) {
                        if (1 !== n[o].nesting) return "</div>"; {
                            let a = n[o].info.trim().match(t),
                                r = (null == a ? void 0 : a[1]) ? ? "";
                            (0, i(312028).A)(r) || (r = "");
                            let l = function(e, t) {
                                let i = [];
                                for (let [n, o] of t) i.push(`${n}="${e.utils.escapeHtml(o)}"`);
                                return i.join(" ")
                            }(e, [
                                [i(253050).lc[i(955630).xd.callout], ""],
                                [i(253050).lc.calloutBackground, "gray_background"],
                                [i(253050).lc.calloutIcon, r]
                            ]);
                            return `<div ${l}>`
                        }
                    }
                })
            }

            function d(e) {
                let t = /^▶\s+(.*)$/;
                e.use(n(), "toggle_block", {
                    validate: e => !!e.trim().match(t),
                    render(i, n) {
                        if (1 !== i[n].nesting) return "</details>"; {
                            let o = i[n].info.trim().match(t),
                                a = (null == o ? void 0 : o[1]) ? ? "";
                            return `<details><summary>${e.utils.escapeHtml(a)}</summary>`
                        }
                    }
                })
            }
        },
        405072: (e, t, i) => {
            i.d(t, {
                J: () => n
            });

            function n(e) {
                var t;
                let {
                    isMobileNative: n,
                    isAndroid: o
                } = e, a = i(218744).default.checkGate({
                    gateName: "android_show_language_settings"
                }), r = null == (t = (0, i(663250).getMobileNativeDeviceInfo)()) ? void 0 : t.mobileNativeAndroidApiLevel;
                return a && n && o && "number" == typeof r && r >= 33
            }
        },
        449515: (e, t, i) => {
            i.d(t, {
                P: () => n
            });
            let n = (0, i(104509).xh)("wiz", {
                default: {
                    loader: () => i.e(10553).then(i.bind(i, 493813))
                }
            })
        },
        457637: (e, t, i) => {
            i.d(t, {
                x: () => n
            });
            let n = (0, i(104509).xh)("snowflake", {
                default: {
                    loader: () => i.e(18271).then(i.bind(i, 99679))
                }
            })
        },
        478695: (e, t, i) => {
            function n(e) {
                return e.includes("*") || e.includes("?")
            }

            function o(e, t) {
                if (0 === t.length) return !1;
                let o = (0, i(302465).Yl)(e),
                    a = t.filter(e => {
                        let t, i;
                        return !n(e) || !n(-1 === (i = (t = e.replace(/^https?:\/\//, "")).indexOf("/")) ? t : t.slice(0, i))
                    }).map(e => n(e) ? e : (0, i(302465).Yl)(e));
                return 0 !== a.length && a.some(e => (function(e) {
                    let t = "",
                        i = 0;
                    for (; i < e.length;) "*" === e[i] && "*" === e[i + 1] ? (t += ".*", i += 2) : ("*" === e[i] ? t += "[^/]*" : "?" === e[i] ? t += "[^/]" : t += e[i].replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), i += 1);
                    return RegExp(`^${t}$`, "i")
                })(e).test(o))
            }
            i.d(t, {
                Q: () => o,
                d: () => n
            }), i(898992), i(354520), i(581454), i(737550)
        },
        540543: (e, t, i) => {
            i.d(t, {
                h: () => n
            });
            let n = (0, i(104509).xh)("monday", {
                default: {
                    loader: () => i.e(98713).then(i.bind(i, 387769))
                }
            })
        },
        574657: (e, t, i) => {
            i.r(t), i.d(t, {
                checkmarkCircleFillSmallIcon: () => o,
                iconDefinition: () => n
            }), i(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.94 1.95 12.11 12.11",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M1.95 8a6.05 6.05 0 1 1 12.1 0 6.05 6.05 0 0 1-12.1 0m8.444-1.623a.55.55 0 0 0-.944-.566L7.443 9.156 6.339 7.87a.55.55 0 1 0-.835.716l1.6 1.867a.55.55 0 0 0 .89-.075z"
                    })
                },
                o = (0, i(104509).wt)("checkmarkCircleFillSmall", n, "fillSmall")
        },
        602226: (e, t, i) => {
            i.d(t, {
                z: () => s
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            var n = i(296540),
                o = () => i(302465),
                a = () => i(797421);
            let r = 5 * i(695216).Xb,
                l = {};

            function s() {
                let e = (0, i(533992).v3)(),
                    t = (0, i(723240).r)(),
                    [s, d] = (0, n.useState)(() => l.servers),
                    [c, u] = (0, n.useState)(() => l.serverUrls ? ? new Set),
                    [p, g] = (0, n.useState)(!1);
                return (0, n.useEffect)(() => {
                    let i = !0;
                    return t ? l.servers && l.serverUrls && l.fetchedAt && Date.now() - l.fetchedAt < r ? (d(l.servers), u(l.serverUrls ? ? new Set), () => {
                        i = !1
                    }) : l.fetchPromise ? (g(!0), l.fetchPromise.then(() => {
                        i && l.servers && l.serverUrls && (d(l.servers), u(l.serverUrls)), i && g(!1)
                    }), () => {
                        i = !1
                    }) : (g(!0), l.fetchPromise = (async () => {
                        let n = await e.api.callApi({
                                environment: e,
                                eventName: "getPreconfiguredMcpServers",
                                data: {
                                    spaceId: t
                                }
                            }),
                            r = Date.now();
                        "success" === n.type ? (l.servers = n.data.servers, l.serverUrls = function(e) {
                            let t = new Set;
                            for (let i of e)
                                if ("hidden" !== i.visibility && (i.serverUrl && t.add((0, o().Yl)(i.serverUrl)), i.serverUrlConfig))
                                    for (let e of (0, a().Du)(i.serverUrlConfig)) t.add((0, o().Yl)(e));
                            return t
                        }(l.servers)) : (l.servers = [], l.serverUrls = new Set), l.fetchedAt = r, l.fetchPromise = void 0, i && (d(l.servers), u(l.serverUrls), g(!1))
                    })(), () => {
                        i = !1
                    }) : (d([]), u(new Set), () => {
                        i = !1
                    })
                }, [e, t]), {
                    servers: s,
                    serverUrls: c,
                    isLoading: p
                }
            }
        },
        616552: (e, t, i) => {
            i.d(t, {
                u: () => a
            }), i(378347);
            let n = [{
                    hostname: "mcp.amplitude.com",
                    basePath: "/mcp",
                    iconGroup: i(351124).i
                }, {
                    hostname: "mcp.eu.amplitude.com",
                    basePath: "/mcp",
                    iconGroup: i(351124).i
                }, {
                    hostname: "mcp.asana.com",
                    iconGroup: i(116531).X
                }, {
                    hostname: "mcp.attio.com",
                    basePath: "/mcp",
                    iconGroup: i(59042).Q
                }, {
                    hostname: "mcp.atlassian.com",
                    iconGroup: i(254497).z
                }, {
                    hostname: "mcp.box.com",
                    iconGroup: i(625508).g
                }, {
                    hostname: "mcp.canva.com",
                    basePath: "/mcp",
                    iconGroup: i(986306).E
                }, {
                    hostname: "mcp.figma.com",
                    basePath: "/mcp",
                    iconGroup: i(628009).j
                }, {
                    hostname: "api.githubcopilot.com",
                    basePath: "/mcp",
                    iconGroup: i(198852).A
                }, {
                    hostname: "api.gong.io",
                    basePath: "/mcp",
                    iconGroup: i(33266).y
                }, {
                    hostname: "bigquery.googleapis.com",
                    iconGroup: i(709720).m
                }, {
                    hostname: "compute.googleapis.com",
                    iconGroup: i(709720).m
                }, {
                    hostname: "container.googleapis.com",
                    iconGroup: i(709720).m
                }, {
                    hostname: "mapstools.googleapis.com",
                    iconGroup: i(747832).s
                }, {
                    hostname: "app.hex.tech",
                    basePath: "/mcp",
                    iconGroup: i(966540).k
                }, {
                    hostname: "mcp.hubspot.com",
                    iconGroup: i(208302).Q
                }, {
                    hostname: "mcp.intercom.com",
                    basePath: "/mcp",
                    iconGroup: i(306604).e
                }, {
                    hostname: "mcp.intercom.com",
                    basePath: "/sse",
                    iconGroup: i(306604).e
                }, {
                    hostname: "mcp.jira.com",
                    iconGroup: i(93575).N
                }, {
                    hostname: "mcp.linear.app",
                    iconGroup: i(242426).u
                }, {
                    hostname: "mcp.miro.com",
                    iconGroup: i(244878).a
                }, {
                    hostname: "mcp.monday.com",
                    iconGroup: i(540543).h
                }, {
                    hostname: "mcp.ramp.com",
                    iconGroup: i(116175).V
                }, {
                    hostname: "ramp-mcp-remote.ramp.com",
                    iconGroup: i(116175).V
                }, {
                    hostname: "demo-mcp.ramp.com",
                    basePath: "/mcp",
                    iconGroup: i(116175).V
                }, {
                    hostname: "mcp.sentry.dev",
                    basePath: "/mcp",
                    iconGroup: i(209868).M
                }, {
                    hostname: "mcp.stripe.com",
                    iconGroup: i(879467).r
                }, {
                    hostname: "mcp.app.wiz.io",
                    iconGroup: i(449515).P
                }, {
                    hostname: "mcp.zapier.com",
                    iconGroup: i(488942).M
                }],
                o = {
                    n8n: i(96397).r,
                    snowflake: i(457637).x
                };

            function a(e, t) {
                if (e) {
                    let t = (0, i(758654).bk)(e);
                    if (t) {
                        let e = t.hostname.toLowerCase(),
                            i = t.pathname.toLowerCase();
                        for (let t of n) {
                            if (e !== t.hostname) continue;
                            let n = t.basePath ? ? "/";
                            if ("/" === n || i === n || i.startsWith(n + "/")) return t.iconGroup
                        }
                    }
                }
                if (t) {
                    let e = t.toLowerCase();
                    if (Object.hasOwn(o, e)) return o[e]
                }
            }
        },
        619539: (e, t, i) => {
            i.d(t, {
                W: () => r,
                s: () => a
            }), i(898992), i(737550), i(296540);
            var n = i(474848);
            let o = (0, i(109939).YK)({
                mcpBadge: {
                    id: "mcpToolsInline.mcpBadge",
                    defaultMessage: "MCP"
                },
                customMcpBadge: {
                    id: "mcpProtocolBadge.customMcpBadge",
                    defaultMessage: "Custom MCP"
                },
                customMcpBadgeTooltip: {
                    id: "mcpProtocolBadge.customMcpBadgeTooltip",
                    defaultMessage: "Notion has not reviewed this server"
                },
                customMcpBlockedTooltip: {
                    id: "mcpProtocolBadge.customMcpBlockedTooltip",
                    defaultMessage: "Custom MCP servers are disabled for this workspace"
                }
            });

            function a(e) {
                let {
                    servers: t,
                    serverUrls: n
                } = (0, i(602226).z)(), o = e ? (0, i(302465).Yl)(e) : void 0, a = void 0 !== o && n.has(o), r = !a && void 0 !== e && (t ? ? []).some(t => t.serverUrlConfig && (0, i(797421).nS)(t.serverUrlConfig, e)), l = a || r, s = !!e && (0, i(302465).oB)(e), d = !!e && n.size > 0 && !l && !s;
                return {
                    isPreconfigured: l,
                    isCustom: d
                }
            }

            function r(e) {
                let {
                    serverUrl: t
                } = e, {
                    isCustom: r
                } = a(t), l = (0, i(203986).v)(), s = r && !l, d = r ? (0, n.jsx)(i(109939).sA, { ...o.customMcpBadge
                }) : (0, n.jsx)(i(109939).sA, { ...o.mcpBadge
                }), c = (0, n.jsx)(i(746434).E, {
                    color: s ? "red" : "gray",
                    content: d
                });
                if (!r) return c;
                let u = s ? o.customMcpBlockedTooltip : o.customMcpBadgeTooltip;
                return (0, n.jsx)(i(51831).m, {
                    placement: "top",
                    content: () => (0, n.jsx)(i(109939).sA, { ...u
                    }),
                    children: e => (0, n.jsx)("span", { ...e,
                        children: c
                    })
                })
            }
        },
        665002: (e, t, i) => {
            i.d(t, {
                H: () => s,
                g: () => d
            });
            var n = i(296540),
                o = i(474848);
            let a = {
                    disableHoverAnimations: !1
                },
                r = {
                    disableHoverAnimations: !0
                },
                l = (0, n.createContext)(a);

            function s({
                disableHoverAnimations: e,
                children: t
            }) {
                return (0, o.jsx)(l.Provider, {
                    value: e ? r : a,
                    children: t
                })
            }

            function d() {
                return (0, n.useContext)(l).disableHoverAnimations
            }
            l.displayName = "SidebarItemHoverAnimationContext"
        },
        666236: (e, t, i) => {
            i.d(t, {
                P: () => n
            });

            function n(e) {
                let {
                    environment: t
                } = e;
                (0, i(79266).navigate)({
                    environment: t,
                    url: i(168962).JZ.marketplace,
                    redirect: !1
                })
            }
        },
        678064: (e, t, i) => {
            i.d(t, {
                A: () => o
            }), i(581454), i(296540);
            var n = i(474848);
            let o = function({
                    currentLocale: e,
                    confirm: t,
                    onChange: o,
                    origin: a,
                    showGlobeIcon: l,
                    showVisibleLabelPrefix: s = !1
                }) {
                    (0, i(533992).v3)();
                    let d = (0, i(109939).tz)(),
                        c = (0, i(682985).uB)(void 0, i(510969).A),
                        u = (0, i(83208).X)("polyglot");
                    if (i(986939).A.isMobile) return null;
                    let p = (0, i(601587).Vn)(d)[e].languageNameInThatLanguage,
                        g = l ? i(988022).p : i(548436).A;
                    return (0, n.jsx)(i(656252).A, {
                        onClick: () => {
                            (0, i(104310).u)({
                                event: {
                                    eventName: "change_locale_clicked",
                                    eventProperties: {
                                        origin: a
                                    }
                                }
                            })
                        },
                        ariaPopupType: "listbox",
                        popupType: i(656252).z.Popup,
                        buttonPopupStore: c,
                        ariaLabel: d.formatMessage({
                            id: "languagePicker.popup.ariaLabel",
                            defaultMessage: "Select language"
                        }),
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        content: a => {
                            let l = u ? [...i(619157).fy, ...i(619157).Tf] : [...i(619157).fy],
                                s = [{
                                    key: "languages",
                                    render: e => (0, n.jsx)(i(844565).A, { ...e,
                                        topBorder: 0 !== e.index
                                    }),
                                    items: (0, i(601587).O8)(l, d).map(l => ({
                                        key: l,
                                        render: e => (function(e, t, o, a) {
                                            let {
                                                languageNameInThatLanguage: l,
                                                languageNameInCurrentLanguage: s
                                            } = (0, i(601587).Vn)(a)[e];
                                            return (0, n.jsx)(r, {
                                                label: l,
                                                caption: s,
                                                focused: t,
                                                props: o,
                                                locale: e
                                            })
                                        })(l, e.focused, e, d),
                                        action: () => {
                                            var r, s, c, u, p;
                                            r = l, s = e, c = d, u = t, p = o, s !== r && function(e, t, o, a) {
                                                let {
                                                    languageNameInThatLanguage: r
                                                } = (0, i(601587).Vn)(t)[e];
                                                o ? i(647095).ui({
                                                    showCancel: !0,
                                                    keepFocus: !1,
                                                    message: (0, n.jsx)(i(109939).sA, {
                                                        id: "languagePicker.changeLanguage.confirmationMessage",
                                                        defaultMessage: "Are you sure you want to update the language to {language}?",
                                                        values: {
                                                            language: r
                                                        }
                                                    }),
                                                    items: [{
                                                        label: (0, n.jsx)(i(109939).sA, {
                                                            id: "languagePicker.changeLanguage.updateButton.label",
                                                            defaultMessage: "Update"
                                                        }),
                                                        color: "red",
                                                        onAccept: () => {
                                                            a(e)
                                                        }
                                                    }]
                                                }) : a(e)
                                            }(r, c, u, p), a.close()
                                        }
                                    }))
                                }],
                                c = {
                                    menuType: i(649476).gu.Popup,
                                    width: 240
                                };
                            return (0, n.jsx)(i(747369).A, {
                                className: i(828432).jtA,
                                ...c,
                                children: (0, n.jsx)(i(558045).A, {
                                    type: i(558045).O.Vertical,
                                    role: "listbox",
                                    initialFocus: void 0,
                                    sections: s
                                })
                            })
                        },
                        children: e => (0, n.jsx)(g, {
                            "aria-label": d.formatMessage({
                                id: "languagePicker.ariaLabel",
                                defaultMessage: "Language: {language}"
                            }, {
                                language: p
                            }),
                            colorPalette: l ? "gray" : void 0,
                            iconLeading: l ? i(515388).globeIcon : void 0,
                            iconTrailing: {
                                icon: i(595453).arrowChevronSingleDownSmallIcon,
                                size: "xs",
                                colorVariant: "secondary"
                            },
                            ...e,
                            children: s ? (0, n.jsx)(i(109939).sA, {
                                id: "languagePicker.visibleLabel",
                                defaultMessage: "Language: {language}",
                                values: {
                                    language: p
                                }
                            }) : p
                        })
                    })
                },
                a = {
                    style1: {
                        marginInlineEnd: 0
                    },
                    style2: {
                        color: i(632079).Tj.text.secondary
                    }
                };

            function r(e) {
                return (0, n.jsx)(i(95582).A, { ...e.props,
                    title: (0, n.jsx)(i(4458).fI, {
                        alignItems: "center",
                        children: (0, n.jsx)("div", {
                            style: { ...e.style,
                                ...a.style1
                            },
                            children: e.label
                        })
                    }),
                    caption: e.caption && (0, n.jsx)("span", {
                        style: a.style2,
                        children: e.caption
                    }),
                    shouldWrapCaption: !0
                })
            }
        },
        709720: (e, t, i) => {
            i.d(t, {
                m: () => n
            });
            let n = (0, i(104509).xh)("google", {
                default: {
                    loader: () => Promise.resolve().then(i.bind(i, 930646))
                }
            })
        },
        710426: (e, t, i) => {
            i.d(t, {
                Ay: () => a,
                MR: () => l
            }), i(18107), i(967357), i(898992), i(354520), i(581454);
            var n = i(296540),
                o = i(474848);
            let a = n.memo(function(e) {
                let {
                    store: t,
                    from: n,
                    type: a,
                    canEditItem: l,
                    itemDepth: s,
                    isHovered: d,
                    isFocused: c,
                    onToggle: u
                } = e, g = i(986939).A.isMobile || d || c, m = (0, i(682985).K8)(() => {
                    var e;
                    let n = (0, i(162782).s)(t),
                        o = t.isPlaceholderWorkflowTemplateBlock(),
                        a = null == (e = t.getCollectionStoreIfSingleSource()) ? void 0 : e.isSyncedCollection(),
                        r = t.isPersonProfile(),
                        s = t.isPeopleCollectionViewPage();
                    return !!(t.getType() && l && !n && !o && !a && !r && !s)
                }, [t, l]), f = function(e) {
                    let {
                        showRightIcons: t
                    } = e;
                    return (0, i(960253).I)(() => ({
                        iconContainer: {
                            display: "flex",
                            paddingInlineStart: 3,
                            ...t ? {} : { ...i(69916).Qg,
                                display: "block"
                            }
                        }
                    }), [t])
                }({
                    showRightIcons: g
                });
                return a === i(171231).yy ? null : (0, o.jsx)("div", {
                    style: f.iconContainer,
                    children: "library" === n ? null : (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(p, {
                            store: t,
                            from: n,
                            type: e.type,
                            itemIndex: e.itemIndex,
                            itemDepth: s
                        }), m ? (0, o.jsx)(r, {
                            store: t,
                            onToggle: u,
                            isTopLevelItem: 0 === s,
                            from: n,
                            type: a
                        }) : void 0]
                    })
                })
            });

            function r(e) {
                let {
                    store: t,
                    onToggle: n,
                    isTopLevelItem: a,
                    from: r,
                    type: l
                } = e, d = (0, i(533992).v3)(), c = (0, i(109939).tz)(), p = (0, i(682985).K8)(() => t.isCollectionView(), [t]), g = (0, i(682985).K8)(() => t.getOwnedAndLinkedCollectionStores(), [t]), m = (0, i(682985).K8)(() => {
                    var e;
                    let n = null == (e = t.getCollectionViewStores().at(0)) ? void 0 : e.id;
                    if (!n) return;
                    let o = i(547131).p.createChildStore(t, {
                        table: i(832375).Gy1,
                        id: n
                    });
                    return null == o ? void 0 : o.getFormatStore().getValue()
                }, [t]), f = c.formatMessage(i(925021).v.addAPageInside);
                return p && !m && 0 === g.length ? (0, o.jsx)(s, {
                    disabled: !0
                }) : g.length <= 1 ? (0, o.jsx)(i(51831).m, {
                    content: () => f,
                    placement: "bottom",
                    children: e => {
                        let c = { ...e,
                            onClick: e => {
                                var o;
                                let s = (null == (o = g[0]) ? void 0 : o.getParentBlockStore()) ? ? t;
                                i(245757).ru({
                                    store: s,
                                    shouldNavigateToSource: !1,
                                    environment: d,
                                    analytics: {
                                        from: r,
                                        type: l
                                    },
                                    toggleOptions: {
                                        onToggle: n,
                                        isTopLevelItem: a
                                    }
                                })
                            }
                        };
                        return (0, o.jsx)(s, {
                            events: c
                        })
                    }
                }) : (0, o.jsx)(i(51831).m, {
                    content: () => f,
                    placement: "bottom",
                    children: e => (0, o.jsx)(i(656252).A, {
                        popupType: i(986939).A.isMobile ? i(656252).z.BottomSheet : i(656252).z.Popup,
                        content: e => (0, o.jsx)(u, {
                            blockStore: t,
                            parent: e,
                            from: r,
                            type: l
                        }),
                        children: t => (0, o.jsx)(s, {
                            events: (0, i(63390).A)(e, t)
                        })
                    })
                })
            }
            let l = {
                button: i(986939).A.isMobile ? {
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

            function s(e) {
                let t = (0, i(109939).tz)();
                return (0, o.jsx)(i(64960).Ay, {
                    ariaLabel: t.formatMessage(i(925021).v.addAPageInside),
                    style: l.button,
                    disabled: e.disabled,
                    disabledFeedback: e.disabled,
                    ...e.events,
                    children: (0, o.jsx)(i(16275).I, {
                        icon: i(638501).plusSmallIcon,
                        size: "sm",
                        colorVariant: i(986939).A.isMobile ? "tertiary" : "secondary"
                    })
                })
            }
            let d = {
                display: "flex",
                alignItems: "center",
                whiteSpace: "pre"
            };

            function c({
                itemProps: e,
                store: t,
                disabled: n,
                blockStore: a
            }) {
                let r = (0, i(682985).K8)(() => t.getIcon(), [t]),
                    l = (0, i(682985).K8)(() => {
                        var e;
                        return (null == (e = t.getParentBlockStore()) ? void 0 : e.id) !== a.id
                    }, [t, a]);
                return (0, o.jsx)(i(95582).A, { ...e,
                    disabled: n,
                    disabledFeedback: !0,
                    title: (0, o.jsx)("div", {
                        style: d,
                        children: (0, o.jsx)(i(627918).A, {
                            store: t
                        })
                    }),
                    icon: (0, o.jsx)(i(734914).A, {
                        icon: r,
                        size: 14,
                        isEmptyPage: !1,
                        isAlias: l,
                        iconRecordCategory: "collection"
                    })
                })
            }

            function u(e) {
                let {
                    blockStore: t,
                    parent: n,
                    from: a,
                    type: r
                } = e, l = (0, i(533992).v3)(), s = (0, i(682985).K8)(() => t.getOwnedAndLinkedCollectionStores().filter(e => !e.isSyncedCollection()), [t]), d = (0, i(682985).K8)(() => s.map(e => !i(352441).Q.getData(l, {
                    collectionId: e.id,
                    spaceId: e.getSpaceId()
                })), [s, l]), u = {
                    menuType: i(986939).A.isMobile ? i(649476).gu.Modal : i(649476).gu.Popup,
                    right: i(986939).A.isMobile ? (0, o.jsx)(i(109939).sA, { ...i(789722).W.done
                    }) : void 0
                }, p = {
                    key: "collections",
                    render: e => (0, o.jsx)(i(844565).A, { ...e,
                        title: (0, o.jsx)(i(109939).sA, {
                            defaultMessage: "Add to",
                            id: "sidebarItem.addAPageInside.popup.addTo"
                        })
                    }),
                    items: s.map((e, n) => ({
                        key: e.id,
                        render: i => (0, o.jsx)(c, {
                            itemProps: i,
                            store: e,
                            disabled: d[n],
                            blockStore: t
                        }),
                        action: t => {
                            i(245757).ru({
                                store: e,
                                environment: l,
                                shouldNavigateToSource: !0,
                                analytics: {
                                    from: a,
                                    type: r
                                }
                            })
                        }
                    }))
                };
                return (0, o.jsx)(i(747369).A, { ...u,
                    children: (0, o.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        onAccept: n.close,
                        initialFocus: void 0,
                        sections: [p]
                    })
                })
            }

            function p(e) {
                let {
                    store: t,
                    from: n,
                    type: a,
                    itemDepth: r,
                    itemIndex: s
                } = e, d = (0, i(109939).tz)(), c = (0, i(533992).v3)(), u = e => {
                    let o = (0, i(297311).U)(t);
                    (0, i(472709).L)({
                        environment: c,
                        store: t
                    }), i(899964).it({
                        environment: c,
                        stores: [t],
                        left: e.clientX,
                        top: e.clientY,
                        showInput: !1,
                        actionSectionGroupKey: "sidebar_outliner",
                        analyticsFrom: "sidebar_more_menu",
                        optionalAnalyticsProperties: {
                            teamStore: o,
                            type: 0 === r ? "top_level" : "nested",
                            outliner_type: a,
                            outliner_position: s,
                            outliner_depth: r,
                            outliner_location: "main_sidebar" === n ? "sidebar" : "library" === n ? "library" : "pane"
                        }
                    })
                }, p = "bookmarks" === a ? d.formatMessage({
                    defaultMessage: "Remove, rename, and more…",
                    id: "sidebarItem.favoritedPageMenuButton.tooltip"
                }) : "myMeetings" === a ? d.formatMessage({
                    defaultMessage: "Copy, move, and more…",
                    id: "sidebarItem.meetingNoteMenuButton.tooltip"
                }) : d.formatMessage({
                    defaultMessage: "Delete, duplicate, and more…",
                    id: "sidebarItem.pageMenuButton.tooltip"
                });
                return (0, o.jsx)(i(51831).m, {
                    content: () => p,
                    placement: "bottom",
                    children: e => (0, o.jsx)(i(64960).Ay, {
                        ariaLabel: p,
                        style: l.button,
                        onClick: u,
                        ...e,
                        children: (0, o.jsx)(i(16275).I, {
                            icon: i(361226).ellipsisSmallIcon,
                            size: "sm",
                            colorVariant: i(986939).A.isMobile ? "tertiary" : "secondary"
                        })
                    })
                })
            }
        },
        734914: (e, t, i) => {
            i.d(t, {
                A: () => a
            }), i(296540);
            var n = i(474848);
            let o = {
                wrap: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    flexGrow: 0,
                    width: i(986939).A.isMobile ? 28 : 22,
                    height: i(986939).A.isMobile ? 24 : 18,
                    position: "relative"
                }
            };

            function a(e) {
                let {
                    icon: t,
                    isAlias: a,
                    isEmptyPage: r,
                    iconStyle: l,
                    size: s,
                    iconRecordCategory: d
                } = e;
                return (0, n.jsxs)("div", {
                    style: o.wrap,
                    children: [(0, n.jsx)(i(569553).B6, {
                        disabled: !0,
                        icon: t,
                        iconRecordCategory: d,
                        isEmptyPage: r,
                        size: s ? ? 19,
                        style: l
                    }), a ? (0, n.jsx)(i(321825).H, {
                        size: "sm"
                    }) : void 0]
                })
            }
        },
        738699: (e, t, i) => {
            i.d(t, {
                r: () => r
            }), i(296540);
            var n = i(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 2.87 14.26 14.25",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M15.625 16.25C15.625 9.83 10.42 4.625 4 4.625a.875.875 0 1 1 0-1.75c7.387 0 13.375 5.988 13.375 13.375a.875.875 0 0 1-1.75 0"
                        }), (0, n.jsx)("path", {
                            d: "M11.125 16.25A7.125 7.125 0 0 0 4 9.125a.875.875 0 1 1 0-1.75 8.875 8.875 0 0 1 8.875 8.875.875.875 0 0 1-1.75 0"
                        }), (0, n.jsx)("path", {
                            d: "M6.625 16.25A2.625 2.625 0 0 0 4 13.625a.875.875 0 0 1 0-1.75 4.375 4.375 0 0 1 4.375 4.375.875.875 0 0 1-1.75 0"
                        })]
                    })
                },
                a = (0, i(104509).wt)("rssFill", o, "fill");

            function r(e) {
                let {
                    calendar: t,
                    size: o = "default",
                    parentBackgroundColor: r
                } = e, l = (0, i(370484).Jx)(t), s = ((0, i(104509).cr)(o) ? i(104509).Ev[o] : o) / 20, d = (0, i(960253).e)(), c = (0, i(960253).I)(() => ({
                    container: {
                        flexShrink: 0,
                        transform: `scale(${s})`,
                        transformOrigin: "center"
                    },
                    roundedSquare: {
                        backgroundColor: (0, i(588727).QL)({
                            theme: i(632079).Tj,
                            calendarColor: t.color,
                            themeMode: d
                        }),
                        borderRadius: 4
                    },
                    rssIcon: {
                        color: r ? ? i(632079).Tj.background.primary,
                        transform: "translate(-0.2px, 0.2px)"
                    }
                }), [t.color, r, s, d]);
                return (0, n.jsx)(i(4458).VP, {
                    width: 20,
                    height: 20,
                    style: c.container,
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0, n.jsx)(i(4458).VP, {
                        width: 13.75,
                        height: 13.75,
                        style: c.roundedSquare,
                        alignItems: "center",
                        justifyContent: "center",
                        children: l ? void 0 : (0, n.jsx)(i(16275).I, {
                            icon: a,
                            size: 11,
                            style: c.rssIcon
                        })
                    })
                })
            }
        },
        741489: (e, t, i) => {
            i.d(t, {
                j: () => o
            }), i(296540);
            var n = i(474848);

            function o({
                title: e,
                titleId: t,
                byline: a,
                bylineId: r,
                badge: l
            }) {
                return (0, n.jsxs)(i(4458).VP, {
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 4,
                    children: [(0, n.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        gap: 6,
                        children: [(0, n.jsx)(i(111010).D, {
                            id: t,
                            styleKey: i(986939).A.isMobile ? "captionMedium" : "bodyMedium",
                            colorVariant: "primary",
                            children: e
                        }), l]
                    }), a ? (0, n.jsx)(i(111010).D, {
                        id: r,
                        styleKey: i(986939).A.isMobile ? "captionSmRegular" : "bodySmRegular",
                        colorVariant: "secondary",
                        style: {
                            textWrap: "pretty"
                        },
                        children: a
                    }) : void 0]
                })
            }
        },
        747832: (e, t, i) => {
            i.d(t, {
                s: () => n
            });
            let n = (0, i(104509).xh)("maps", {
                default: {
                    loader: () => Promise.resolve().then(i.bind(i, 252470))
                }
            })
        },
        752153: (e, t, i) => {
            function n(e, t) {
                return o(s(e, t))
            }

            function o(e) {
                return void 0 !== e && (e === i(212169).q_ || e === i(212169).YD)
            }

            function a(e, t) {
                if (o(t)) return;
                let n = i(212169).c$[e],
                    a = n.steps.findIndex(e => e.id === t);
                return -1 === a ? n.steps[0].id : a === n.steps.length - 1 ? i(212169).q_ : n.steps[a + 1].id
            }

            function r(e, t) {
                let i = s(e, t);
                if (!(!i || o(i))) return a(t, i)
            }

            function l(e, t) {
                let n = s(e, t);
                if (n) {
                    var a;
                    let e = i(212169).c$[t];
                    if (o(n)) return null == (a = e.steps.at(-1)) ? void 0 : a.id;
                    let r = e.steps.findIndex(e => e.id === n);
                    return -1 !== r && 0 !== r ? e.steps[r - 1].id : void 0
                }
            }

            function s(e, t) {
                var n;
                if (!e) return;
                let o = ((null == (n = e.getSettings()) ? void 0 : n.tutorials) || {})[t];
                return void 0 === o ? i(212169).c$[t].steps[0].id : o
            }
            i.d(t, {
                KD: () => l,
                gt: () => s,
                i9: () => r,
                ll: () => o,
                tb: () => a,
                x$: () => n
            }), i(18107), i(967357)
        },
        793679: (e, t, i) => {
            i.d(t, {
                H: () => o
            }), i(296540);
            var n = i(474848);

            function o({
                id: e,
                title: t,
                byline: a,
                isToggledOn: r,
                onToggle: l,
                badge: s,
                isLocked: d,
                isDisabled: c,
                tooltip: u
            }) {
                let p = (0, i(817588).B)(),
                    g = (0, i(817588).B)();
                return (0, n.jsx)(i(321412).b, {
                    id: e,
                    title: t,
                    titleId: p,
                    byline: a,
                    bylineId: g,
                    badge: s,
                    item: (0, n.jsx)(i(354491).d, {
                        "aria-labelledby": p,
                        "aria-describedby": g,
                        on: r,
                        isLocked: d,
                        tooltip: u,
                        disabled: c,
                        onClick: l
                    })
                })
            }
        },
        797421: (e, t, i) => {
            function n(e, t) {
                switch (e.type) {
                    case "fixed":
                        return e.url;
                    case "variant":
                        {
                            if ("variant" !== t.type) return;
                            let i = e.variants[t.selectedVariantIndex];
                            return null == i ? void 0 : i.url
                        }
                    case "template":
                        {
                            if ("template" !== t.type) return;
                            let i = e.urlTemplate;
                            for (let n of e.placeholders) {
                                let e = t.values[n.key];
                                if (!e) return;
                                i = i.replaceAll(`{${n.key}}`, encodeURIComponent(e))
                            }
                            return i
                        }
                    case "pattern":
                        if ("pattern" !== t.type) return;
                        return t.url
                }
            }

            function o(e) {
                switch (e.type) {
                    case "fixed":
                        return [e.url];
                    case "variant":
                        return e.variants.map(e => e.url);
                    case "template":
                    case "pattern":
                        return []
                }
            }

            function a(e, t) {
                let n = (0, i(302465).Yl)(t);
                switch (e.type) {
                    case "fixed":
                        return (0, i(302465).Yl)(e.url) === n;
                    case "variant":
                        return e.variants.some(e => (0, i(302465).Yl)(e.url) === n);
                    case "template":
                        var o = e.urlTemplate,
                            a = t;
                        try {
                            let e = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\{[^}]+\\}/g, "[^/]+");
                            return RegExp(`^${e}$`, "i").test(a)
                        } catch (e) {
                            return !1
                        }
                    case "pattern":
                        var r = e.validationPattern,
                            l = t;
                        try {
                            return new RegExp(r).test(l)
                        } catch (e) {
                            return !1
                        }
                }
            }
            i.d(t, {
                Du: () => o,
                nS: () => a,
                lC: () => n
            }), i(898992), i(581454), i(737550), i(969475).union([i(969475).object({
                required: {
                    type: i(969475).literal("fixed"),
                    url: i(969475).string()
                },
                optional: {}
            }), i(969475).object({
                required: {
                    type: i(969475).literal("pattern"),
                    validationPattern: i(969475).string()
                },
                optional: {
                    description: i(969475).string(),
                    label: i(969475).string(),
                    placeholder: i(969475).string()
                }
            }), i(969475).object({
                required: {
                    placeholders: i(969475).array(i(969475).object({
                        required: {
                            key: i(969475).string(),
                            label: i(969475).string()
                        },
                        optional: {
                            description: i(969475).string(),
                            pattern: i(969475).string()
                        }
                    })),
                    type: i(969475).literal("template"),
                    urlTemplate: i(969475).string()
                },
                optional: {}
            }), i(969475).object({
                required: {
                    type: i(969475).literal("variant"),
                    variants: i(969475).array(i(969475).object({
                        required: {
                            name: i(969475).string(),
                            url: i(969475).string()
                        },
                        optional: {}
                    }))
                },
                optional: {
                    defaultVariantIndex: i(969475).number()
                }
            })])
        },
        822284: (e, t, i) => {
            i.d(t, {
                BS: () => a,
                BusinessTrialEndingModalStore: () => o,
                HL: () => n,
                ZJ: () => l,
                jz: () => r
            });
            let n = i(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    potentialCampaigns: []
                }, {
                    name: "BusinessTrialStartModalStore"
                }),
                o = i(546605).Store.createValue({
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
                a = i(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    connectedApps: [],
                    teamStores: [],
                    pageStores: [],
                    onSecondaryButtonClick: void 0
                }, {
                    name: "BusinessTrialLossAversionModalStore"
                }),
                r = i(546605).Store.createValue({
                    open: !1,
                    connectedApps: [],
                    teamStores: [],
                    pageStores: []
                }, {
                    name: "BusinessTrialExplorePlanModalStore"
                }),
                l = i(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    trialCampaign: void 0,
                    showBillingIntervalSelect: !1
                }, {
                    name: "BusinessTrialCCUpfrontModalStore"
                })
        },
        879467: (e, t, i) => {
            i.d(t, {
                r: () => n
            });
            let n = (0, i(104509).xh)("stripeMark", {
                default: {
                    loader: () => i.e(1693).then(i.bind(i, 584373))
                }
            })
        },
        892166: (e, t, i) => {
            i.d(t, {
                U: () => o
            });
            var n = i(296540);

            function o(e, t) {
                let {
                    navigate: o
                } = (0, n.useContext)(i(44894).E), a = (0, i(533992).v3)(), {
                    isPhone: r
                } = (0, i(533992).Y0)(), l = (0, n.useContext)(i(19187).e);
                return (0, n.useCallback)(n => {
                    if ((0, i(104310).u)({
                            event: {
                                eventName: e,
                                eventProperties: {}
                            }
                        }), r) null == l || l(), o({
                        environment: a,
                        url: "/nativetab/templates",
                        redirect: !0
                    });
                    else {
                        let e = "click" === n.type && (n.metaKey || n.ctrlKey);
                        (null == t ? void 0 : t.forceOpenInNewTab) || e ? o({
                            environment: a,
                            url: i(168962).JZ.marketplace,
                            openInNew: "tab",
                            makeTabActive: !e && a.device.isDesktop
                        }) : (0, i(666236).P)({
                            environment: a
                        })
                    }
                }, [a, e, t, r, l, o])
            }
        },
        905335: (e, t, i) => {
            i.d(t, {
                X: () => a
            });
            var n = i(296540),
                o = i(474848);

            function a(e) {
                var t;
                let {
                    iconUrl: a,
                    serverUrl: r,
                    serverName: l,
                    size: s
                } = e, {
                    hasError: d,
                    isLoading: c
                } = function(e, t = {}) {
                    let {
                        trackLoading: i = !1
                    } = t, [o, a] = (0, n.useState)(!1), [r, l] = (0, n.useState)(i && !!e);
                    return (0, n.useEffect)(() => {
                        if (a(!1), !e) return void l(!1);
                        i && l(!0);
                        let t = new Image;
                        return t.src = e, t.onload = () => {
                            i && l(!1), a(!1)
                        }, t.onerror = () => {
                            i && l(!1), a(!0)
                        }, () => {
                            t.onload = null, t.onerror = null
                        }
                    }, [e, i]), {
                        hasError: o,
                        isLoading: r
                    }
                }(a, {
                    trackLoading: !0
                }), u = n.useMemo(() => (0, i(616552).u)(r, l), [r, l]), p = (t = s, (0, i(960253).I)(() => ({
                    iconWrapper: {
                        width: t,
                        height: t,
                        borderRadius: 4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    iconImage: {
                        width: t,
                        height: t,
                        objectFit: "contain",
                        borderRadius: 4
                    }
                }), [t]));
                return u ? (0, o.jsx)("div", {
                    style: p.iconWrapper,
                    children: (0, o.jsx)(i(708966).Q, {
                        iconGroup: u,
                        variantName: "default",
                        style: {
                            width: s,
                            height: s
                        }
                    })
                }) : !a || d || c ? (0, o.jsx)(i(402363).A, {
                    size: s,
                    title: l,
                    isLarge: !0
                }) : (0, o.jsx)("div", {
                    style: p.iconWrapper,
                    children: (0, o.jsx)(i(989059).A, {
                        src: a,
                        alt: "MCP server icon",
                        style: p.iconImage
                    })
                })
            }
        },
        925021: (e, t, i) => {
            i.d(t, {
                K: () => o,
                v: () => n
            });
            let n = (0, i(109939).YK)({
                    addAPageInside: {
                        defaultMessage: "Add a page inside",
                        id: "sidebarItem.addAPageInside.tooltip"
                    }
                }),
                o = (0, i(109939).YK)({
                    addPageTooltip: {
                        defaultMessage: "Add a page",
                        id: "sidebar.addButton.addPageTooltip"
                    }
                })
        },
        966540: (e, t, i) => {
            i.d(t, {
                k: () => n
            });
            let n = (0, i(104509).xh)("hex", {
                default: {
                    loader: () => i.e(20512).then(i.bind(i, 893530))
                },
                tintable: {
                    loader: () => i.e(20512).then(i.bind(i, 92776))
                }
            })
        },
        986306: (e, t, i) => {
            i.d(t, {
                E: () => n
            });
            let n = (0, i(104509).xh)("canva", {
                default: {
                    loader: () => i.e(56662).then(i.bind(i, 53360))
                }
            })
        },
        989068: (e, t, i) => {
            async function n(e) {
                var t;
                return null === i(775657).electronApi || void 0 === i(775657).electronApi || null == (t = i(775657).electronApi.checkLocaleSupport) ? void 0 : t.call(i(775657).electronApi, e)
            }
            i.d(t, {
                o: () => s,
                i: () => r
            }), i(296540);
            var o = i(474848);
            let a = (0, i(109939).YK)({
                title: {
                    id: "desktop.unsupportedLocale.title",
                    defaultMessage: "Language not supported on desktop"
                },
                message: {
                    id: "desktop.unsupportedLocale.message",
                    defaultMessage: "The {localeName} locale isn’t supported in this version of the desktop app. Try updating to the latest desktop version."
                }
            });
            async function r({
                locale: e,
                environment: t,
                origin: o,
                intl: l
            }) {
                var s;
                if (t.device.isElectron) {
                    let t = await n(e);
                    if ((null == t ? void 0 : t.supported) === !1) return void i(819652).HK({
                        id: "unsupported_locale",
                        title: l.formatMessage(a.title),
                        message: l.formatMessage(a.message, {
                            localeName: e
                        })
                    })
                }(0, i(195857).DO_NOT_USE_trackLegacy)("locale_changed", {
                    locale: e,
                    origin: o
                });
                let d = await t.api.callApi({
                    eventName: "setlocale",
                    environment: t,
                    data: {
                        locale: e
                    }
                });
                "success" === d.type ? (i(467008).A.set("preferredLocale", e), await i(941701).transactionQueue.drain(), t.device.isElectron) ? (null === i(775657).electronApi || void 0 === i(775657).electronApi || null == (s = i(775657).electronApi.setLocale) || s.call(i(775657).electronApi, e), (0, i(518531).F)({
                    includeFocusedWindow: !0
                })) : window.location.reload(!0) : i(647095).Qg(d)
            }

            function l(e) {
                let t = (0, i(533992).v3)(),
                    n = (0, i(109939).tz)();
                return (0, o.jsx)(i(321412).b, {
                    id: "languageAndRegionSettingsLanguage",
                    title: (0, o.jsx)(i(109939).sA, { ...i(166863).P.language.title
                    }),
                    byline: (0, o.jsx)(i(109939).sA, { ...i(166863).P.language.description
                    }),
                    item: (0, o.jsx)(i(678064).A, {
                        confirm: !0,
                        onChange: e => r({
                            locale: e,
                            environment: t,
                            origin: "languageSettings",
                            intl: n
                        }),
                        currentLocale: e.locale,
                        origin: "languageSettings"
                    })
                })
            }

            function s(e) {
                let {
                    device: t
                } = (0, i(533992).v3)();
                return (0, i(682985).K8)(() => (0, i(405072).J)({
                    isMobileNative: t.isMobileNative,
                    isAndroid: t.isAndroid
                }), [t.isMobileNative, t.isAndroid]) ? (0, o.jsx)(i(31256).J, {}) : i(986939).A.isMobile ? null : (0, o.jsx)(l, { ...e
                })
            }
        }
    }
]);