"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [45915], {
        59579: (e, t, a) => {
            a.d(t, {
                a: () => i
            });

            function i(e, t) {
                let i = {
                    id: "",
                    key: t,
                    type: "static",
                    category: a(292609).lU[t].category,
                    props: {}
                };
                (0, a(466290).K)(e, i)
            }
        },
        106023: (e, t, a) => {
            a.d(t, {
                z: () => i
            });
            let i = a(546605).Store.createValue({
                status: "uninitialized",
                isEligible: !1,
                preferredSwitchableLocale: void 0,
                eligibilityReason: void 0
            });
            a(202146).exposeDebugValue("LanguageSwitchEligibilityStore", i)
        },
        117954: (e, t, a) => {
            a.r(t), a.d(t, {
                LanguageSwitchPromptPopup: () => o
            });
            var i = a(296540),
                l = a(474848);
            let n = ["ar-SA", "he-IL"];

            function o() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(109939).tz)(),
                    o = (0, a(718012).V)(),
                    s = (0, a(368891).g)(),
                    [r, c, u, p] = (0, a(682985).K8)(() => {
                        let e = a(696190).default.isVisible("language_switch_prompt"),
                            t = a(218744).default.checkGate({
                                gateName: "rtl_prompt_with_education"
                            }),
                            i = null == s ? void 0 : s.getSettings(),
                            l = (null == i ? void 0 : i.language_switching_prompt_dismissals) || [],
                            o = a(106023).z.state.isEligible ? a(106023).z.state.preferredSwitchableLocale : void 0,
                            r = o ? n.includes(o) && !t ? void 0 : o : void 0,
                            c = void 0 !== r && (null == l ? void 0 : l.includes(r));
                        return [e && !c && void 0 !== r, l, r, t]
                    }, [s]),
                    g = (0, i.useMemo)(() => {
                        var i;
                        let n, o, r, g, m;
                        if (u) return i = () => {
                            s && ((0, a(377796).createAndCommit)({
                                userAction: "languageSwitchPromptToast.action",
                                environment: e,
                                cellTarget: "main",
                                canUndo: !0,
                                perform(e) {
                                    (0, a(862759).m)({
                                        userSettingsStore: s,
                                        data: {
                                            language_switching_prompt_dismissals: c.concat(u)
                                        },
                                        transaction: e
                                    })
                                }
                            }), (0, a(59579).a)(e, "language_switch_prompt"))
                        }, n = (0, a(619157).Vf)(u), o = p && n, r = t.formatMessage({
                            id: "languageSwitchPromptToast.rtlTitle",
                            defaultMessage: "New languages are here"
                        }), g = (0, l.jsx)(a(109939).sA, {
                            id: "languageSwitchPromptToast.rtlDescription",
                            defaultMessage: "Write and work in your preferred language. You can change your Notion language anytime."
                        }), m = (0, a(601587).Vn)(t)[u].languageNameInCurrentLanguage, {
                            presentationType: "persistent",
                            id: "language_switch_prompt_toast",
                            title: o ? r : t.formatMessage({
                                id: "languageSwitchPromptToast.title",
                                defaultMessage: "Use Notion in your preferred language"
                            }),
                            jsxMessage: o ? g : (0, l.jsx)(a(109939).sA, {
                                id: "languageSwitchPromptToast.description",
                                defaultMessage: "Find the language you love. Try {languageName} now",
                                values: {
                                    languageName: m
                                }
                            }),
                            actions: {
                                primary: {
                                    title: t.formatMessage({
                                        id: "languageSwitchPromptToast.clickThrough",
                                        defaultMessage: "Go to Settings"
                                    }),
                                    onAction: () => {
                                        a(599754).Ow({
                                            currentPage: "user_settings",
                                            isMobile: !1,
                                            highlightedSetting: "userSettingsLanguage"
                                        }), i(), (0, a(357709).Y5)(e, {
                                            callout_key: "language_switch_prompt",
                                            variant: u,
                                            click_type: "primary_cta",
                                            placement_key: "Tooltip"
                                        }), a(819652).UW({
                                            id: "language_switch_prompt_toast"
                                        })
                                    }
                                }
                            },
                            onDismiss: () => {
                                i()
                            },
                            onUserDismiss: () => {
                                (0, a(357709).Sq)(e, {
                                    callout_key: "language_switch_prompt",
                                    variant: u,
                                    dismiss_type: "tooltip_dismiss",
                                    placement_key: "Tooltip"
                                })
                            }
                        }
                    }, [s, e, t, u, c, p]);
                return (0, a(619772).A)(() => {
                    g && a(819652).HK(g), o.updateCalloutStatus({
                        calloutId: "language_switch_prompt",
                        visible: !0
                    });
                    let {
                        isEligible: t,
                        eligibilityReason: i
                    } = a(106023).z.state;
                    (0, a(357709).DL)(e, {
                        callout_key: "language_switch_prompt",
                        variant: u,
                        placement_key: "Tooltip",
                        callout_metadata: { ...t && {
                                display_reason: i
                            }
                        }
                    })
                }, r), null
            }
        },
        357709: (e, t, a) => {
            function i(e, t) {
                let i = (0, a(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, a(462391).t9)(i)), (0, a(104310).u)({
                    event: {
                        eventName: "callout_show",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }

            function l(e, t) {
                let i = (0, a(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, a(462391).t9)(i)), (0, a(104310).u)({
                    event: {
                        eventName: "callout_click",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                }), t.callout_key && a(409725).l.trackEvent("callout_click", {
                    callout_key: t.callout_key,
                    click_type: t.click_type,
                    placement_key: t.placement_key
                })
            }

            function n(e, t) {
                let i = (0, a(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, a(462391).t9)(i)), (0, a(104310).u)({
                    event: {
                        eventName: "callout_dismiss",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }

            function o(e, t) {
                let i = (0, a(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, a(462391).t9)(i)), (0, a(104310).u)({
                    event: {
                        eventName: "callout_engagement",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }

            function s(e, t) {
                let {
                    eligible_callouts: i,
                    required_arg_timeout: l,
                    required_args_run_duration: n,
                    eligibility_timeouts: o,
                    blocklist: s
                } = t;
                (0, a(104310).u)({
                    event: {
                        eventName: "callout_coordinator_resolved",
                        eventProperties: {
                            eligible_callouts: i,
                            required_arg_timeout: l,
                            required_args_run_duration: n,
                            eligibility_timeouts: o,
                            blocklist: s
                        }
                    }
                })
            }

            function r(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "callout_feature_interaction",
                        eventProperties: t
                    }
                })
            }

            function c(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "callout_skipped",
                        eventProperties: t
                    }
                })
            }

            function u(e, t) {
                let i = (0, a(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, a(462391).t9)(i)), (0, a(104310).u)({
                    event: {
                        eventName: "callout_not_shown",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }
            a.d(t, {
                Ak: () => u,
                Cu: () => c,
                DL: () => i,
                Jb: () => o,
                Sq: () => n,
                Y5: () => l,
                gc: () => r,
                wo: () => s
            })
        },
        368891: (e, t, a) => {
            a.d(t, {
                g: () => i
            });

            function i() {
                return (0, a(682985).O$)(a(728372).AppStoreCurrentUserSettingsStore)
            }
        },
        466290: (e, t, a) => {
            a.d(t, {
                K: () => l
            });
            var i = () => a(906745);

            function l(e, t) {
                a(696190).default.isVisible(t.key) && (a(696190).default.removeMessage(t.key), a(986939).A.isAdminMode || (! function(e, t) {
                    let l = a(728372).AppStoreCurrentUserSettingsStore.state,
                        n = null == l ? void 0 : l.getSettings();
                    if (!n || !l) return;
                    let o = new(a(543346)).GO(n.callout_placement_exposures);
                    for (let e of t) o.add(e, i().DateTime.now().toMillis());
                    (0, a(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addPlacementExposures",
                        cellTarget: "main",
                        canUndo: !0,
                        perform: e => {
                            (0, a(862759).m)({
                                userSettingsStore: l,
                                transaction: e,
                                data: {
                                    callout_placement_exposures: o.exportUserSetting()
                                }
                            })
                        }
                    })
                }(e, [(0, a(125542).Q3)(t)]), (0, a(476114).q)(e, t), a(728372).AppStoreInAppCalloutStore.state.updateCalloutStatus({
                    calloutId: t.key,
                    visible: !1
                }), (0, a(819416).Z)(e, t.key)), a(696190).default.isPendingDynamicMessage(t.key) && (0, a(740063).G)(t.key))
            }
        },
        476114: (e, t, a) => {
            function i({
                environment: e,
                message: t,
                overwrite: l = !1
            }) {
                let n = a(728372).AppStoreCurrentUserSettingsStore.state,
                    o = null == n ? void 0 : n.getSettings();
                if (!n || !o) return;
                let s = new Map((o.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                (!s.has(t.key) || l) && s.set(t.key, {
                    name: t.key,
                    timestamp: a(906745).DateTime.now().toMillis()
                }), (0, a(377796).createAndCommit)({
                    environment: e,
                    userAction: "messageActions.addUserSettingsDismissal",
                    cellTarget: "main",
                    canUndo: !0,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: n,
                            transaction: e,
                            data: {
                                callout_dismissal_timestamps: Array.from(s.values())
                            }
                        })
                    }
                })
            }

            function l(e, t) {
                let l = (0, a(125542).K0)(t);
                "once_per_user" === l ? i({
                    environment: e,
                    message: t
                }) : "once_per_space" === l && function({
                    environment: e,
                    message: t,
                    overwrite: i = !1
                }) {
                    let l = a(728372).AppStoreSidebarSpaceViewStore.state,
                        n = null == l ? void 0 : l.getSettings();
                    if (!l || !n) return;
                    let o = l.getSpaceId(),
                        s = new Map((n.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                    (!s.has(t.key) || i) && s.set(t.key, {
                        name: t.key,
                        timestamp: a(906745).DateTime.now().toMillis()
                    }), (0, a(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addSpaceViewDismissal",
                        canUndo: !0,
                        cellTarget: o ? {
                            spaceWithId: o
                        } : void 0,
                        perform: e => {
                            a(380762).AG(l, e, {
                                callout_dismissal_timestamps: Array.from(s.values())
                            })
                        }
                    })
                }({
                    environment: e,
                    message: t
                })
            }
            a.d(t, {
                q: () => l,
                H: () => i
            }), a(581454)
        }
    }
]);