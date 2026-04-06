(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [4690, 7401, 35191, 47381], {
        37458: (e, t, r) => {
            e.exports = r(708009)
        },
        44027: (e, t, r) => {
            "use strict";

            function a(e) {
                let {
                    businessTrialOffer: t,
                    billingTime: a,
                    modalLastShownAt: n,
                    modalShownTimes: o
                } = e;
                return !!(0, r(383378).V9)(t, a) && void 0 !== n && void 0 !== o && (!(n > 0) || !(a.diff(r(906745).DateTime.fromMillis(n), "days").days >= r(118999).ls)) && (o ? ? 0) >= r(118999).TY
            }

            function n(e, t = (0, r(192159).DS)(e)) {
                if (!e) return;
                let a = (0, r(192159).i5)(e);
                if (a) return Math.ceil(a.toUTC().diff(t.toUTC(), "days").days)
            }

            function o(e, t) {
                let a = r(906745).DateTime.fromMillis(e.endDateMs).toUTC();
                return (t ? ? r(906745).DateTime.now()).toUTC().hasSame(a, "day")
            }

            function i(e) {
                let t = (0, r(278662).Jd)(e);
                if (t) return (0, r(875472).Vm)(t)
            }

            function s(e) {
                let t = (0, r(278662).Jd)(e);
                if (t) return (0, r(875472).kd)(t)
            }

            function l(e) {
                let t = r(118999).Tu[e];
                if (void 0 === t) throw Error(`Unknown trial length: ${e}`);
                return t
            }

            function d(e) {
                return Math.round(e / 30)
            }

            function c({
                billingData: e
            }) {
                if (!(0, r(192159).TB)(e)) return !1;
                if ((0, r(192159).HY)(e)) {
                    var t;
                    return (null == e ? void 0 : e.type) === "admin" && (null == (t = e.trial) ? void 0 : t.autoConvert) === !0
                }
                return (null == e ? void 0 : e.type) === "admin" && (0, r(722371).O9)(null == e ? void 0 : e.paymentMethod)
            }

            function u(e) {
                return (0, r(192159).oD)(e) && (0, r(717274).pX)()
            }

            function p(e) {
                return (0, r(722371).Xk)(["multi_search_scope_menu", "ai_workspace_settings_connector_cards", "business_trial_ai_connectors_upsell", "ai_corner_chat_connectors_button"], e)
            }

            function m(e) {
                return (0, r(722371).Xk)(r(90416).K_, e)
            }

            function f(e) {
                return (0, r(722371).Xk)([...r(994234).iE, ...r(994234).wW, ...r(994234).Fh], e)
            }

            function g(e) {
                let {
                    openedFrom: t,
                    campaign: r,
                    isCustomAgentsGateEnabled: a
                } = e;
                return a && (m(t) || "deeplink" === t && f(r))
            }
            r.d(t, {
                F$: () => g,
                IU: () => u,
                J: () => i,
                SF: () => m,
                Tr: () => d,
                UP: () => n,
                XF: () => o,
                cn: () => s,
                dt: () => f,
                od: () => a,
                rE: () => l,
                tY: () => p,
                z2: () => c
            }), r(16280)
        },
        56281: (e, t, r) => {
            "use strict";

            function a(e, t) {
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

            function n(e) {
                return "personal" !== e && r(126365).tX.find(t => t === e)
            }
            r.d(t, {
                VV: () => i,
                _6: () => n,
                _q: () => o,
                ex: () => a
            }), r(16280), r(944114), r(898992), r(672577);
            let o = ["kr_card", "kakao_pay", "naver_pay"];

            function i(e) {
                let {
                    currency: t
                } = e, r = ["card", "link"];
                return "EUR" === t && r.push("sepa_debit"), "KRW" === t && r.push(...o), r
            }
        },
        90416: (e, t, r) => {
            "use strict";
            r.d(t, {
                CT: () => i,
                K_: () => l,
                Mi: () => a,
                uv: () => o,
                zL: () => s,
                zj: () => n
            });
            let a = ["database_agents", "database_agent_autofill_button", "database_agent_run_dropdown", "database_agent_fill_rows", "database_agent_fill_all", "database_agent_preview_generate", "database_agent_edit_modal_toggle", "database_agent_setup_menu_item"],
                n = ["ai_unified_find_search_modal", "ai_unified_find_chat", "ai_chat_with_model", "ai_assistant_limit_in_app", "ai_autofill_fill_all_pages", "ai_autofill_bulk_fill", "ai_autofill_on_page_edit", "ai_autofill_try_on_view", "ai_limit_in_app", "ai_limit_property_autofill", "ai_limit_sidebar", "ai_limit_settings", "ai_limited_qna_no_results", "ai_limited_qna_upsell_action_button", "ai_qna_waitlist", "ai_qna_limit_in_app", "ai_upsell_notice", "ai_upsell_settings", "ai_page_translation", "ai_plans_page", "ai_formulas"],
                o = ["ai_research_mode"],
                i = ["ai_meeting_notes", "ai_meeting_notes_custom_transcript_retention"],
                s = ["ai_agent"],
                l = ["custom_agent", "custom_agents_sidebar", "new_custom_agents_sidebar", "new_custom_agents_library", "slippery_slope_flyout_menu", "custom_agents_launch_modal", "custom_agents_gift_box", "marketplace_agents"]
        },
        118999: (e, t, r) => {
            "use strict";
            r.d(t, {
                Hb: () => f,
                Hu: () => c,
                TY: () => a,
                Tu: () => i,
                U4: () => m,
                U7: () => g,
                WO: () => l,
                XX: () => p,
                c4: () => d,
                ef: () => o,
                ej: () => u,
                hI: () => s,
                ls: () => n
            });
            let a = 2,
                n = 30,
                o = 30,
                i = {
                    365: 5,
                    180: 5,
                    90: 5,
                    30: 5,
                    14: 4
                },
                s = 332,
                l = 852,
                d = 800,
                c = 407,
                u = 24,
                p = 400,
                m = 450,
                f = 524,
                g = 7
        },
        128817: (e, t, r) => {
            "use strict";

            function a(e, t, a) {
                var n;
                let o = r(728372).AppStoreCurrentUserSettingsStore.state;
                if (!o) return;
                let i = null == (n = o.getSettings()) ? void 0 : n.tutorials;
                a ? (0, r(862759).m)({
                    userSettingsStore: o,
                    transaction: a,
                    data: {
                        tutorials: { ...i,
                            [t]: (0, r(752153).i9)(o, t)
                        }
                    }
                }) : u({
                    userAction: "TutorialActions.nextStep",
                    environment: e,
                    perform: e => {
                        (0, r(862759).m)({
                            userSettingsStore: o,
                            transaction: e,
                            data: {
                                tutorials: { ...i,
                                    [t]: (0, r(752153).i9)(o, t)
                                }
                            }
                        })
                    },
                    userId: o.id
                })
            }

            function n(e, t) {
                var a;
                let n = r(728372).AppStoreCurrentUserSettingsStore.state;
                if (!n) return;
                let o = null == (a = n.getSettings()) ? void 0 : a.tutorials;
                u({
                    userAction: "TutorialActions.prevStep",
                    environment: e,
                    perform: e => {
                        (0, r(862759).m)({
                            userSettingsStore: n,
                            transaction: e,
                            data: {
                                tutorials: { ...o,
                                    [t]: (0, r(752153).KD)(n, t)
                                }
                            }
                        })
                    },
                    userId: n.id
                })
            }

            function o(e, t) {
                var a;
                let n = r(728372).AppStoreCurrentUserSettingsStore.state;
                if (!n) return;
                let o = null == (a = n.getSettings()) ? void 0 : a.tutorials;
                (null == o ? void 0 : o[t]) !== r(212169).YD && u({
                    userAction: "TutorialActions.dismissTutorial",
                    environment: e,
                    perform: e => {
                        (0, r(862759).m)({
                            userSettingsStore: n,
                            transaction: e,
                            data: {
                                tutorials: { ...o,
                                    [t]: r(212169).YD
                                }
                            }
                        })
                    },
                    userId: n.id
                })
            }

            function i(e) {
                let t = r(728372).AppStoreCurrentUserSettingsStore.state;
                t && u({
                    userAction: "TutorialActions.resetTutorialsDebug",
                    environment: e,
                    perform: e => {
                        (0, r(862759).m)({
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

            function s(e, t, a) {
                var n;
                let o = r(728372).AppStoreCurrentUserSettingsStore.state;
                if (!o || (0, r(752153).x$)(o, t)) return;
                let i = (0, r(752153).gt)(o, t);
                r(212169).c$[t].steps.findIndex(e => e.id === i) >= r(212169).c$[t].steps.findIndex(e => e.id === a) || (0, r(862759).m)({
                    userSettingsStore: o,
                    transaction: e,
                    data: {
                        tutorials: { ...null == (n = o.getSettings()) ? void 0 : n.tutorials,
                            [t]: a
                        }
                    }
                })
            }

            function l(e, t, a) {
                if ((0, r(752153).ll)(a)) return;
                let n = (0, r(752153).tb)(t, a);
                n && s(e, t, n)
            }

            function d(e) {
                var t;
                let {
                    environment: a,
                    tutorialId: n,
                    tutorialStepId: o,
                    transaction: i
                } = e, s = r(728372).AppStoreCurrentUserSettingsStore.state;
                if (!s) return;
                let l = null == (t = s.getSettings()) ? void 0 : t.tutorials;
                i ? (0, r(862759).m)({
                    userSettingsStore: s,
                    transaction: i,
                    data: {
                        tutorials: { ...l,
                            [n]: o
                        }
                    }
                }) : u({
                    userAction: "TutorialActions.nextStep",
                    environment: a,
                    perform: e => {
                        (0, r(862759).m)({
                            userSettingsStore: s,
                            transaction: e,
                            data: {
                                tutorials: { ...l,
                                    [n]: o
                                }
                            }
                        })
                    },
                    userId: s.id
                })
            }

            function c(e) {
                let t = r(728372).AppStoreCurrentUserSettingsStore.state;
                return !!t && (0, r(752153).x$)(t, e)
            }

            function u(e) {
                return (0, r(377796).createAndCommit)({ ...e,
                    canUndo: !1,
                    cellTarget: "main"
                })
            }
            r.r(t), r.d(t, {
                checkIsTutorialDone: () => c,
                dismissTutorial: () => o,
                resetTutorials: () => i,
                tutorialAdvanceToStep: () => s,
                tutorialAdvanceToStepAfter: () => l,
                tutorialGoToNextStep: () => a,
                tutorialGoToPrevStep: () => n,
                tutorialGoToStep: () => d
            })
        },
        208117: (e, t, r) => {
            "use strict";

            function a(e) {
                let {
                    environment: t,
                    externalOrgSummary: a,
                    spaceStore: o,
                    billingData: i
                } = e;
                return n({
                    environment: t,
                    externalOrgSummary: a,
                    spaceStore: o,
                    billingData: i
                }) && !(0, r(192159).N8)(i) && !!(!o || !(0, r(556306).h)(o))
            }

            function n(e) {
                let {
                    environment: t,
                    externalOrgSummary: a,
                    spaceStore: n,
                    billingData: o
                } = e;
                if (o && (0, r(192159).N8)(o)) return !0;
                let i = null == n ? void 0 : n.id;
                return !!i && (!!(((0, r(616579).j)({
                    environment: t,
                    spaceId: i
                }) ? ? 1) > 99 || (0, r(192159).N8)(o)) || !!a && "company_employee_count" in a && parseInt(a.company_employee_count) > 99)
            }
            r.d(t, {
                H: () => n,
                q: () => a
            })
        },
        212169: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ud: () => i,
                YD: () => o,
                c$: () => a,
                q_: () => n
            });
            let a = {
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
                n = "completed",
                o = "dismissed";

            function i(e, t) {
                return null == t ? void 0 : t[e]
            }
        },
        272799: (e, t, r) => {
            "use strict";

            function a(e) {
                r(986939).A.isMobile || r(822284).HL.setState({
                    open: !0,
                    ...e
                })
            }

            function n() {
                r(822284).HL.update(e => ({ ...e,
                    open: !1
                }))
            }

            function o(e) {
                r(986939).A.isMobile || r(822284).BusinessTrialEndingModalStore.update(() => ({
                    modalState: "initial",
                    ...e,
                    open: !0
                }))
            }

            function i(e) {
                r(822284).BusinessTrialEndingModalStore.update(t => ({ ...t,
                    modalState: e
                }))
            }

            function s() {
                r(822284).BusinessTrialEndingModalStore.update(e => ({ ...e,
                    open: !1,
                    modalState: "initial"
                }))
            }

            function l(e) {
                r(822284).BS.setState({ ...e,
                    open: !0
                })
            }

            function d() {
                r(822284).BS.update(e => ({ ...e,
                    open: !1
                }))
            }

            function c(e) {
                r(822284).jz.setState({
                    open: !0,
                    ...e
                })
            }

            function u() {
                r(822284).jz.update(e => ({ ...e,
                    open: !1
                }))
            }

            function p(e) {
                r(986939).A.isMobile || r(822284).ZJ.setState({
                    open: !0,
                    ...e
                })
            }

            function m() {
                r(822284).ZJ.update(e => ({ ...e,
                    open: !1
                }))
            }
            async function f(e) {
                var t;
                let {
                    billingData: a,
                    environment: n,
                    spaceStore: o,
                    from: i,
                    memberCount: s,
                    prices: l,
                    offerToApply: d,
                    autoConvert: c,
                    captchaToken: u,
                    sessionId: p
                } = e;
                if (!o || !i || !a || void 0 === s || !d) return {
                    success: !1,
                    error: "Invalid arguments"
                };
                let m = e.nowForTesting ? ? r(906745).DateTime.now(),
                    f = r(653828).H.state.selectedCurrencyCode ? ? "USD",
                    g = (0, r(982473).vk)(l, {
                        product: "business",
                        interval: "month",
                        currency: f
                    }),
                    _ = (0, r(982473).vH)({
                        items: (null == (t = a.subscription) ? void 0 : t.items) ? ? [],
                        trialEnd: m.plus({
                            days: (0, r(337592).s1)(d)
                        })
                    }, {
                        price: g,
                        quantity: s
                    }),
                    b = d.campaign;
                try {
                    return await (0, r(129909).n)({
                        environment: n,
                        spaceStore: o,
                        from: i,
                        desiredState: _,
                        trialData: {
                            id: b,
                            from: i,
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
            async function g(e) {
                let {
                    billingData: t,
                    environment: a,
                    spaceStore: n
                } = e, o = n.getSpaceId();
                if (!t || !(0, r(192159).TB)(t) || !n.canAdmin()) return;
                let i = await a.api.callCellCompatibleApi({
                    eventName: "getCustomerOffersReceived",
                    environment: a,
                    data: {
                        spaceId: o
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: o
                    }
                });
                if ("failed" !== i.type) return (0, r(278662).Jd)(i.data)
            }

            function _(e) {
                var t, a;
                let n, {
                    billingData: o,
                    businessTrialOffer: i,
                    modalLastShownAt: s,
                    modalShownTimes: l
                } = e;
                if (!o) return !1;
                let d = (0, r(192159).DS)(o);
                if (t = s, a = d, t && r(906745).DateTime.fromMillis(t).startOf("day").equals(a.startOf("day")) || "business" === (0, r(192159).AW)(o) || "enterprise" === (0, r(192159).AW)(o) || !i || (0, r(44027).od)({
                        businessTrialOffer: i,
                        billingTime: d,
                        modalLastShownAt: s,
                        modalShownTimes: l
                    }) || (0, r(44027).z2)({
                        billingData: o
                    }) || void 0 === i || (0, r(875472).nb)(i)) return !1;
                let c = i.offer.duration.days;
                if (void 0 === c) return !1;
                try {
                    n = (0, r(44027).rE)(c)
                } catch {
                    n = void 0
                }
                return void 0 !== n && (0, r(383378).tz)(i, n, d) || (0, r(44027).XF)(i, d) || (0, r(383378).V9)(i, d)
            }
            r.r(t), r.d(t, {
                closeBusinessTrialCCUpfrontModal: () => m,
                closeBusinessTrialEndingModal: () => s,
                closeBusinessTrialExplorePlanModal: () => u,
                closeBusinessTrialLossAversionModal: () => d,
                closeBusinessTrialStartModal: () => n,
                createBusinessTrial: () => f,
                determineShouldShowTrialEndingModal: () => _,
                getBusinessTrialUsingOffersReceived: () => g,
                openBusinessTrialCCUpfrontModal: () => p,
                openBusinessTrialEndingModal: () => o,
                openBusinessTrialExplorePlanModal: () => c,
                openBusinessTrialLossAversionModal: () => l,
                openBusinessTrialStartModal: () => a,
                updateBusinessTrialEndingModalState: () => i
            }), r(16280)
        },
        316376: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                createDatabaseFromTodoBlocks: () => o,
                getConsecutiveTodoBlocks: () => s,
                getPreviousTodoBlocks: () => i,
                maybeTriggerDatabasePromoNudgeOnCreate: () => n
            }), r(944114), r(898992), r(803949), r(581454);
            var a = () => r(955630);
            async function n(e) {
                var t;
                let {
                    blockStore: a,
                    environment: n
                } = e, d = a.getParentBlockStore();
                if (!d || i(d, a, 3).length < 3) return;
                let c = (0, r(904434).R$)(n),
                    u = null == c || null == (t = c.getSettings()) || null == (t = t.adoption_entry_points) ? void 0 : t.database_nudge_on_create_todo;
                if (u && (u.length >= 3 || Date.now() - u[u.length - 1] < r(695216).nD)) return;
                if (!await (0, r(804677).E)(n, "database_nudge_on_create_todo") || !r(218744).default.checkGate({
                        gateName: "adoption_database_newbie_lifecycle_campaign"
                    })) return;
                let p = s(d, a);
                if (d.table !== r(832375).evP) return;
                let m = {
                        todoBlocks: p.map(e => {
                            let t = e.getBlockTitleStore().getValue() || [],
                                r = e.isChecked();
                            return {
                                id: e.id,
                                titleValue: t,
                                isChecked: r
                            }
                        }),
                        currentBlockId: a.id,
                        parentBlock: {
                            id: d.id,
                            table: d.table,
                            spaceId: d.getSpaceId()
                        }
                    },
                    f = r(962299).A.getIntl();
                (0, r(408441).trackDatabaseEntrypointCta)({
                    environment: e.environment,
                    feature: "create_database",
                    action: "view",
                    from: "database_nudge_on_create_todo"
                }), (0, r(462391).P$)("database_nudge_on_create_todo") ? ((0, r(531175).i)({
                    environment: n,
                    messageKey: "database_nudge_on_create_todo"
                }), r(819652).Iz({
                    message: f.formatMessage(l.databasePromoDescription),
                    presentationType: "persistent",
                    id: "database-promo-nudge",
                    title: r(962299).A.formatMessage(l.databasePromoTitle),
                    onUserDismiss: () => {
                        r(357709).Sq(n, {
                            callout_key: "database_nudge_on_create_todo",
                            placement_key: "Toast",
                            dismiss_type: "toast_dismiss"
                        }), (0, r(408441).trackDatabaseEntrypointCta)({
                            environment: e.environment,
                            feature: "create_database",
                            action: "dismiss",
                            from: "database_nudge_on_create_todo"
                        })
                    },
                    actions: {
                        primary: {
                            title: r(962299).A.formatMessage(l.databasePromoPrimaryAction),
                            onAction: () => {
                                r(357709).Y5(n, {
                                    callout_key: "database_nudge_on_create_todo",
                                    placement_key: "Toast",
                                    click_type: "primary_cta"
                                }), (0, r(408441).trackDatabaseEntrypointCta)({
                                    environment: e.environment,
                                    feature: "create_database",
                                    action: "click",
                                    from: "database_nudge_on_create_todo"
                                }), o({
                                    environment: e.environment,
                                    nudgeData: m
                                }), r(819652).UW({
                                    id: "database-promo-nudge"
                                })
                            }
                        }
                    }
                })) : (0, r(531175).i)({
                    environment: n,
                    messageKey: "database_nudge_on_create_todo",
                    options: {},
                    metadata: {
                        nudgeData: m
                    }
                }), r(357709).DL(n, {
                    callout_key: "database_nudge_on_create_todo",
                    placement_key: "Toast"
                }), (0, r(658703).p)(n, {
                    entryPoint: "database_nudge_on_create_todo"
                })
            }

            function o(e) {
                let t, n, {
                        environment: o,
                        nudgeData: i
                    } = e,
                    s = new(r(970831)).B(o, {
                        table: r(832375).evP,
                        id: i.parentBlock.id
                    });
                if (!s) return;
                let l = "",
                    d = [];
                (0, r(377796).createAndCommit)({
                    environment: o,
                    userAction: "create_database_from_todos",
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: i.parentBlock.spaceId
                    },
                    perform: e => {
                        let c, u = r(124937).Wv({
                            environment: o,
                            type: a().xd.collectionView,
                            inMemoryRecordCache: s.inMemoryRecordCache,
                            transaction: e,
                            spaceId: i.parentBlock.spaceId
                        });
                        t = u.id, (0, r(173157).z)({
                            store: u,
                            transaction: e,
                            data: {
                                parent_id: i.parentBlock.id,
                                parent_table: i.parentBlock.table,
                                alive: !0
                            }
                        }), r(579695).NI({
                            parentStore: s.getContentStore(),
                            childStore: u,
                            transaction: e,
                            after: i.currentBlockId
                        });
                        let p = {
                                title: {
                                    name: "Name",
                                    type: "title"
                                },
                                [l = (0, r(295447).Z1)({
                                    environment: o,
                                    table: r(832375).VlP,
                                    spaceId: i.parentBlock.spaceId
                                })]: (0, r(366710).D)("Status", r(962299).A.getIntl())
                            },
                            m = r(124937).eC({
                                environment: o,
                                table: r(832375).VlP,
                                value: {
                                    id: (0, r(295447).Z1)({
                                        environment: o,
                                        table: r(832375).VlP,
                                        spaceId: i.parentBlock.spaceId
                                    }),
                                    name: r(247438).x9d("Tasks"),
                                    schema: p,
                                    format: {
                                        collection_page_properties: [{
                                            property: l,
                                            visible: !0
                                        }]
                                    },
                                    parent_id: u.id,
                                    parent_table: "block",
                                    space_id: i.parentBlock.spaceId,
                                    alive: !0,
                                    version: 0,
                                    ...(0, r(510768).$)(o)
                                },
                                inMemoryRecordCache: s.inMemoryRecordCache,
                                transaction: e
                            });
                        n = m.id, (0, r(173157).z)({
                            store: u,
                            transaction: e,
                            data: {
                                collection_id: m.id,
                                view_ids: []
                            }
                        });
                        let f = r(124937).eC({
                            environment: o,
                            table: r(832375).Gy1,
                            value: {
                                id: (0, r(295447).Z1)({
                                    environment: o,
                                    table: r(832375).Gy1,
                                    spaceId: i.parentBlock.spaceId
                                }),
                                type: "table",
                                name: "Default view",
                                parent_id: u.id,
                                parent_table: "block",
                                space_id: i.parentBlock.spaceId,
                                alive: !0,
                                version: 0,
                                query2: {
                                    sort: [{
                                        property: l,
                                        direction: "ascending"
                                    }]
                                }
                            },
                            inMemoryRecordCache: s.inMemoryRecordCache,
                            transaction: e
                        });
                        (0, r(173157).z)({
                            store: u,
                            transaction: e,
                            data: {
                                view_ids: [f.id]
                            }
                        });
                        let g = r(124937).eC({
                            environment: o,
                            table: r(832375).Gy1,
                            value: {
                                id: (0, r(295447).Z1)({
                                    environment: o,
                                    table: r(832375).Gy1,
                                    spaceId: i.parentBlock.spaceId
                                }),
                                type: "board",
                                name: "Board view",
                                parent_id: u.id,
                                parent_table: "block",
                                space_id: i.parentBlock.spaceId,
                                alive: !0,
                                version: 0,
                                query2: {
                                    group_by: l
                                },
                                format: {
                                    board_columns_by: {
                                        type: "status",
                                        property: l,
                                        groupBy: "option",
                                        sort: {
                                            type: "ascending"
                                        },
                                        hideEmptyGroups: !1
                                    }
                                }
                            },
                            inMemoryRecordCache: s.inMemoryRecordCache,
                            transaction: e
                        });
                        if ((0, r(173157).z)({
                                store: u,
                                transaction: e,
                                data: {
                                    view_ids: [f.id, g.id]
                                }
                            }), i.todoBlocks.forEach(t => {
                                let {
                                    titleValue: n,
                                    isChecked: u
                                } = t;
                                if (0 === n.length) return;
                                let p = Array.isArray(n) ? n : [],
                                    f = r(124937).Wv({
                                        environment: o,
                                        type: a().xd.page,
                                        inMemoryRecordCache: s.inMemoryRecordCache,
                                        transaction: e,
                                        spaceId: i.parentBlock.spaceId
                                    });
                                d.push(f.id), c || (c = f), p.length > 0 && r(41403).yr({
                                    environment: o,
                                    store: f.getBlockTitleStore(),
                                    tokens: p,
                                    index: 0,
                                    transaction: e,
                                    updateSelection: !1
                                }), (0, r(173157).z)({
                                    store: f,
                                    transaction: e,
                                    data: {
                                        parent_id: m.id,
                                        parent_table: "collection",
                                        alive: !0
                                    }
                                }), (0, r(173157).z)({
                                    store: f.getPropertiesStore(),
                                    transaction: e,
                                    data: {
                                        [l]: u ? (0, r(561872).U8)("Done") : (0, r(561872).U8)("Not started")
                                    }
                                })
                            }), !r(128817).checkIsTutorialDone("database_onboarding")) {
                            var _, b, v, y, h, S;
                            let t, a, n = (0, r(904434).R$)(o),
                                i = (_ = m, b = f, v = l, y = g, h = c, t = {
                                    collectionId: _.id,
                                    collectionViewId: b.id,
                                    statusPropertyId: v
                                }, a = h ? {
                                    databasePageId: h.id
                                } : {}, {
                                    database_onboarding_status_property_tooltip: {
                                        stepType: "database_onboarding_status_property_tooltip",
                                        ...t,
                                        ...a
                                    },
                                    database_onboarding_add_property_tooltip: {
                                        stepType: "database_onboarding_add_property_tooltip",
                                        ...t
                                    },
                                    database_onboarding_database_page_tooltip: {
                                        stepType: "database_onboarding_database_page_tooltip",
                                        ...t,
                                        ...a
                                    },
                                    database_onboarding_board_view_tooltip: {
                                        stepType: "database_onboarding_board_view_tooltip",
                                        ...t,
                                        collectionBoardViewId: y.id
                                    }
                                });
                            if (n) {
                                (0, r(862759).m)({
                                    userSettingsStore: n,
                                    transaction: e,
                                    data: {
                                        tutorial_step_settings: { ...null == (S = n.getSettings()) ? void 0 : S.tutorial_step_settings,
                                            database_onboarding: i
                                        }
                                    }
                                }), r(128817).tutorialGoToStep({
                                    environment: o,
                                    tutorialId: "database_onboarding",
                                    tutorialStepId: "database_onboarding_status_property_tooltip",
                                    transaction: e
                                })
                            }
                        }
                    }
                }), t && n && (r(549960).vH(o, {
                    type: a().xd.collectionView,
                    from: "lifecycle_nudge",
                    creating_block_id: t,
                    collection_id: n,
                    teamStore: void 0
                }), l && r(465513).Z(o, {
                    from: "lifecycle_nudge",
                    collection_id: n,
                    property_type: "status"
                }), d.forEach(e => {
                    r(549960).vH(o, {
                        type: a().xd.page,
                        from: "lifecycle_nudge",
                        creating_block_id: e,
                        collection_id: n,
                        new_page_id: e,
                        teamStore: void 0
                    })
                }))
            }

            function i(e, t, r) {
                let n = e.getContentStores();
                if (!n || 0 === n.length) return [];
                let o = n.findIndex(e => {
                    var r;
                    return (null == e || null == (r = e.pointer) ? void 0 : r.id) === t.pointer.id
                });
                if (-1 === o) return [];
                let i = [];
                for (let e = o; e >= 0; e--) {
                    let t = n[e];
                    if (t)
                        if (t.isType(a().xd.toDo)) {
                            if (i.unshift(t), r && i.length >= r) break
                        } else break
                }
                return i
            }

            function s(e, t) {
                let r = e.getContentStores();
                if (!r || 0 === r.length) return [];
                let n = r.findIndex(e => {
                    var r;
                    return (null == e || null == (r = e.pointer) ? void 0 : r.id) === t.pointer.id
                });
                if (-1 === n) return [];
                let o = r[n];
                if (!o || !o.isType(a().xd.toDo)) return [];
                let i = [];
                for (let e = n; e >= 0; e--) {
                    let t = r[e];
                    if (t)
                        if (t.isType(a().xd.toDo)) i.unshift(t);
                        else break
                }
                for (let e = n + 1; e < r.length; e++) {
                    let t = r[e];
                    if (t)
                        if (t.isType(a().xd.toDo)) i.push(t);
                        else break
                }
                return i
            }
            let l = (0, r(109939).YK)({
                databasePromoTitle: {
                    id: "database.promo.title",
                    defaultMessage: "Track tasks smarter with a database"
                },
                databasePromoDescription: {
                    id: "database.promo.description",
                    defaultMessage: "Sort and filter by status to stay organized. Create it with /database."
                },
                databasePromoPrimaryAction: {
                    id: "database.promo.primaryAction",
                    defaultMessage: "Try database"
                }
            })
        },
        323821: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                TOASTER_ZINDEX: () => _,
                Toaster: () => b
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(672577), r(581454), r(908872), r(737550);
            var a = r(296540),
                n = r(474848);

            function o(e, t) {
                return e ? t[e] : t.default
            }
            let i = {
                    minHeight: 28,
                    padding: "4px 8px",
                    gap: 8,
                    borderRadius: 6,
                    display: "flex"
                },
                s = {
                    marginInlineEnd: 4
                },
                l = {
                    position: "relative"
                };

            function d(e) {
                let {
                    type: t,
                    actionProps: a,
                    invalidated: d,
                    variant: c
                } = e, u = (0, r(632079).O4)({
                    theme: "dark"
                }), p = (0, r(960253).I)(() => ({
                    primaryActionButton: {
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: o(c, {
                            default: `1px solid ${r(713101).$.dark.translucentGray[400]}`,
                            error: r(632079).Tj.red.border.strong
                        })
                    },
                    actionButtonHovered: {
                        background: o(c, {
                            default: u.state.hover,
                            error: r(632079).Tj.red.background.secondaryTranslucent
                        })
                    },
                    actionButtonPressed: {
                        background: o(c, {
                            default: u.state.pressed,
                            error: r(632079).Tj.red.background.tertiaryTranslucent
                        })
                    }
                }), [u, c]);
                return (0, n.jsxs)(r(64960).Ay, {
                    style: { ...i,
                        ..."primary" === t ? p.primaryActionButton : {}
                    },
                    hoveredStyle: p.actionButtonHovered,
                    pressedStyle: p.actionButtonPressed,
                    disabled: a.disabled || d || a.isLoading,
                    onClick: a.onAction,
                    children: [a.isLoading ? (0, n.jsx)(r(517334).k, {
                        style: s
                    }) : null, (0, n.jsxs)(r(4458).fI, {
                        alignItems: "center",
                        justifyContent: "center",
                        className: "autolayout-fill-width",
                        style: l,
                        children: [a.leadingIconProps ? (0, n.jsx)(r(708966).Q, { ...a.leadingIconProps
                        }) : void 0, (0, n.jsx)(r(111010).D, {
                            styleKey: "captionMedium",
                            colorPalette: "error" === c ? "red" : void 0,
                            colorVariant: "primary" === t ? "error" === c ? "accentPrimary" : "inversePrimary" : "error" === c ? "secondary" : "inverseSecondary",
                            children: a.title
                        }), a.trailingIconProps ? (0, n.jsx)(r(708966).Q, { ...a.trailingIconProps
                        }) : void 0]
                    })]
                })
            }
            let c = {
                kVAEAm: "x1n2onr6",
                $$css: !0
            };

            function u(e) {
                let {
                    actions: t,
                    ...a
                } = e, {
                    primary: o,
                    secondary: i
                } = t;
                return (0, n.jsxs)(r(4458).fI, {
                    style: c,
                    gap: 8,
                    paddingInlineStart: 8,
                    paddingBottom: 4,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    className: "autolayout-fill-width",
                    children: [i ? (0, n.jsx)(d, { ...a,
                        type: "secondary",
                        actionProps: i
                    }) : void 0, o ? (0, n.jsx)(d, { ...a,
                        type: "primary",
                        actionProps: o
                    }) : void 0]
                })
            }
            let p = {
                width: 24,
                height: 24,
                position: "absolute",
                insetInlineEnd: 8,
                top: 8,
                gap: 8,
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1
            };

            function m(e) {
                let t = (0, r(109939).tz)(),
                    {
                        updatedAt: i,
                        onReplace: s,
                        onMouseEnter: l,
                        onMouseLeave: d,
                        framerMotion: c,
                        variant: m = "default"
                    } = e,
                    {
                        motion: f
                    } = c,
                    g = (0, r(448988).sM)(c),
                    _ = (0, r(668745).ZC)(i),
                    b = (0, r(632079).O4)({
                        theme: "dark"
                    }),
                    v = (0, r(960253).I)(() => ({
                        toastContainer: {
                            display: "flex",
                            alignItems: "flex-start",
                            borderRadius: 8,
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: o(m, {
                                default: b.border.secondary,
                                error: r(632079).Tj.red.border.primary
                            }),
                            outline: "none",
                            background: o(m, {
                                default: b.background.elevated,
                                error: r(632079).Tj.red.background.secondary
                            }),
                            backdropFilter: "blur(15px)",
                            width: 280,
                            paddingTop: 8,
                            paddingInlineEnd: 8,
                            paddingBottom: 4,
                            paddingInlineStart: 8,
                            pointerEvents: "auto",
                            minHeight: 40
                        },
                        title: {
                            color: o(m, {
                                default: r(632079).Tj.text.inversePrimary,
                                error: r(632079).Tj.red.text.accentPrimary
                            }),
                            fontFeatureSettings: "'case' on",
                            overflowWrap: "break-word"
                        },
                        toastMessage: {
                            color: o(m, {
                                default: b.text.primary,
                                error: r(632079).Tj.red.text.accentPrimary
                            }),
                            fontFeatureSettings: "'case' on",
                            overflowWrap: "break-word",
                            width: "100%"
                        },
                        closeIcon: {
                            paddingBottom: .5,
                            fill: o(m, {
                                default: r(713101).$.dark.translucentGray[800],
                                error: r(632079).Tj.red.icon.accentPrimary
                            })
                        },
                        closeIconHovered: {
                            background: o(m, {
                                default: b.state.hover,
                                error: r(632079).Tj.red.background.secondaryTranslucent
                            })
                        },
                        closeIconPressed: {
                            background: o(m, {
                                default: b.state.pressed,
                                error: r(632079).Tj.red.background.tertiaryTranslucent
                            })
                        }
                    }), [b, m]);
                (0, a.useEffect)(() => {
                    (async () => {
                        i && (!_ || i > _) && (s(), e.disableBounceAnimation || await g.start({
                            scale: [1, 1.05, 1],
                            transition: {
                                duration: .15,
                                ease: "easeIn"
                            }
                        }))
                    })()
                }, [i, _, s, g, e.disableBounceAnimation]);
                let y = e.jsxMessage ? ? e.message,
                    h = "error" === m ? {
                        colorPalette: "red",
                        colorVariant: "accentPrimary"
                    } : {
                        colorPalette: "gray",
                        colorVariant: "inverseSecondary"
                    };
                return (0, n.jsxs)(f.div, {
                    onHoverStart: l,
                    onHoverEnd: d,
                    animate: g,
                    style: v.toastContainer,
                    custom: e.id,
                    children: ["blocking" !== e.presentationType ? (0, n.jsx)(r(374533).A, {
                        ariaLabel: t.formatMessage({
                            id: "toast.close",
                            defaultMessage: "Close"
                        }),
                        icon: () => (0, n.jsx)(r(16275).I, {
                            icon: r(117152).xMarkIcon,
                            size: "xs",
                            style: v.closeIcon
                        }),
                        style: p,
                        hoveredStyle: v.closeIconHovered,
                        pressedStyle: v.closeIconPressed,
                        onClick: e.onClose
                    }) : void 0, e.icon ? (0, n.jsx)(r(4458).VP, {
                        width: 26,
                        height: 24,
                        paddingTop: 2,
                        paddingInlineEnd: 4,
                        paddingBottom: 2,
                        paddingInlineStart: 2,
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        children: (0, n.jsx)(r(16275).I, {
                            icon: e.icon,
                            colorPalette: e.iconColorPalette ? ? h.colorPalette,
                            colorVariant: e.iconColorVariant ? ? h.colorVariant,
                            size: "sm"
                        })
                    }) : void 0, (0, n.jsxs)(r(4458).VP, {
                        flexGrow: 1,
                        alignItems: "flex-start",
                        children: [(0, n.jsxs)("div", { ...{
                                className: "x78zum5 xdt5ytf x1cy8zhl x1r0jzty x17zd0t2 x1iorvi4 xziim83 xwib8y2 x135b78x xh8yej3"
                            },
                            children: [e.title ? (0, n.jsx)(r(111010).D, {
                                styleKey: "captionSemibold",
                                style: v.title,
                                children: e.title
                            }) : void 0, y ? (0, n.jsx)(r(111010).D, {
                                styleKey: "captionRegular",
                                style: v.toastMessage,
                                children: y
                            }) : void 0]
                        }), e.actions ? (0, n.jsx)(u, {
                            actions: e.actions,
                            invalidated: e.invalidated,
                            variant: e.variant
                        }) : void 0]
                    })]
                })
            }

            function f(e) {
                let {
                    value: t
                } = (0, r(815048).fJ)(r(448988).fM);
                return t ? (0, n.jsx)(m, { ...e,
                    framerMotion: t
                }) : null
            }
            var g = () => r(853429);
            let _ = 201;

            function b() {
                let e = (0, r(533992).v3)(),
                    [t, o] = (0, a.useState)({}),
                    [i, s] = (0, a.useReducer)(e => e + 1, 0),
                    l = (0, a.useRef)({}),
                    d = (0, a.useRef)(),
                    c = (0, a.useRef)({}),
                    u = (0, a.useRef)(new Set),
                    p = (0, r(682985).K8)(() => r(722344).A.state.toasts, []),
                    m = (0, r(682985).K8)(() => r(696190).default.getMessagesForPlacement("Toast"), []),
                    [_] = (0, r(682985).K8)(() => [e.WindowSizeStore.getSafePaddingBottomPx(12)], [e.WindowSizeStore]),
                    b = (0, a.useCallback)(() => {
                        let e, r = Object.keys(t).filter(r => {
                            var a, n;
                            return r === (null == (a = d.current) ? void 0 : a.toast.id) && (e = t[r]), r !== (null == (n = d.current) ? void 0 : n.toast.id)
                        }).map(e => t[e]).sort((e, t) => {
                            var r, a;
                            return (null == (r = t.createdAt) ? void 0 : r.valueOf()) - (null == (a = e.createdAt) ? void 0 : a.valueOf())
                        });
                        if (e && d.current && void 0 !== d.current.index) {
                            let {
                                index: t
                            } = d.current;
                            r.splice(t, 0, e), d.current.index = r.indexOf(e)
                        }
                        return r
                    }, [t]),
                    h = (0, a.useCallback)(e => {
                        clearTimeout(l.current[e]), delete l.current[e]
                    }, []),
                    S = (0, a.useCallback)((e, t) => {
                        var r, a;
                        e.id === (null == (r = d.current) ? void 0 : r.toast.id) && (d.current = void 0), h(e.id), null != (a = c.current) && a[e.id] && (c.current[e.id].active = !1, t && (c.current[e.id].suppressOnDismiss = t)), s()
                    }, [h]),
                    k = (0, a.useCallback)(e => {
                        var t, r;
                        "transient" === e.presentationType && !l.current[e.id] && e.id !== (null == (t = d.current) ? void 0 : t.toast.id) && null != (r = c.current) && null != (r = r[e.id]) && r.active && (h(e.id), l.current[e.id] = window.setTimeout(() => S(e), 5e3))
                    }, [h, S]),
                    x = (0, a.useCallback)(() => {
                        requestAnimationFrame(() => {
                            let e = b(),
                                t = 0;
                            for (let [a, n] of e.entries()) {
                                var r;
                                let e = document.querySelector(`[data-toast-id='${n.id}']`);
                                if (!e || n.id === (null == (r = d.current) ? void 0 : r.toast.id)) continue;
                                let o = e.getBoundingClientRect();
                                if (!o.height) return void x();
                                if (c.current[n.id] || (c.current[n.id] = {
                                        toast: n,
                                        active: !0
                                    }), c.current[n.id].index = a, c.current[n.id].height = o.height, d.current) {
                                    let e = d.current;
                                    t < e.yPos - e.height || t - o.height > e.yPos || (t = e.yPos + e.height + _)
                                }
                                c.current[n.id].yPos = t, (t = t + o.height + _) > window.innerHeight && (c.current[n.id].active = !1), k(n)
                            }
                            s()
                        })
                    }, [b, k, _]);
                (0, a.useEffect)(() => {
                    o(t => {
                        let a = { ...t,
                            ...p
                        };
                        for (let t of m)
                            if ((0, g().lN)(t)) {
                                let n = function(e, t) {
                                    let a, {
                                        title: n,
                                        subtitle: o,
                                        callToAction: i,
                                        action: s,
                                        presentationType: l
                                    } = e.props;
                                    return i && s && (a = {
                                        primary: {
                                            title: i,
                                            onAction: () => {
                                                r(357709).Y5(t, {
                                                    callout_key: e.key,
                                                    placement_key: "Toast",
                                                    click_type: "primary_cta"
                                                }), (0, g().Wq)({
                                                    action: s,
                                                    environment: t,
                                                    metadata: e.props.metadata
                                                }), (0, r(734389).O)(t, e)
                                            }
                                        }
                                    }), {
                                        id: e.id,
                                        createdAt: Date.now(),
                                        presentationType: l ? ? "transient",
                                        title: n,
                                        message: o,
                                        actions: a,
                                        messageKey: e.key,
                                        onDismiss: () => {
                                            r(357709).Sq(t, {
                                                callout_key: e.key,
                                                placement_key: "Toast",
                                                dismiss_type: "toast_dismiss"
                                            }), (0, r(734389).O)(t, e)
                                        },
                                        onUserDismiss: () => {
                                            r(357709).Sq(t, {
                                                callout_key: e.key,
                                                placement_key: "Toast",
                                                dismiss_type: "toast_dismiss"
                                            }), (0, r(734389).O)(t, e)
                                        }
                                    }
                                }(t, e);
                                a[n.id] = n
                            }
                        for (let e of Object.values(a)) c.current[e.id] && !p[e.id] && (m.some(t => t.id === e.id) || (c.current[e.id].active = !1));
                        return a
                    })
                }, [p, m, e]), (0, a.useLayoutEffect)(x, [t, x]), (0, a.useEffect)(() => (window.addEventListener("resize", x), () => window.removeEventListener("resize", x)), [x]);
                let w = (0, a.useCallback)(e => {
                        var t;
                        null != (t = c.current) && t[e.id] && (c.current[e.id].userDismissed = !0), S(e)
                    }, [S]),
                    T = (0, a.useCallback)((e, t) => {
                        var r, a, n;
                        h(e.id), null == (r = c.current) || !r[e.id] || null != (a = c.current) && null != (a = a[e.id]) && a.actionTriggered || null != (n = c.current) && null != (n = n[e.id]) && n.userDismissed || (c.current[e.id].active = !0, d.current = { ...c.current[e.id]
                        }, x())
                    }, [x, h]),
                    I = (0, a.useCallback)(e => {
                        var t;
                        e.id === (null == (t = d.current) ? void 0 : t.toast.id) ? (d.current = void 0, x()) : k(e)
                    }, [x, k]),
                    C = (0, a.useCallback)(e => {
                        h(e.id), k(e)
                    }, [h, k]),
                    B = (0, a.useCallback)(a => {
                        var n, i;
                        let s = a.target,
                            l = null == s ? void 0 : s.getAttribute("data-toast-id");
                        if (s && "opacity" === a.propertyName && l && null != (n = c.current) && n[l]) {
                            let a = c.current[l];
                            if (a.active) return;
                            l === (null == (i = d.current) ? void 0 : i.toast.id) && (d.current = void 0);
                            let n = t[l];
                            if (r(722344).A.state.toasts[n.id]) r(819652).UW({
                                id: n.id,
                                suppressDismiss: a.suppressOnDismiss,
                                userDismiss: a.userDismissed
                            });
                            else {
                                n.onUserDismiss && a.userDismissed && n.onUserDismiss();
                                let t = m.find(e => e.id === n.id);
                                t && (0, r(734389).O)(e, t)
                            }
                            delete c.current[l], null != n && n.id && u.current.delete(n.id), o(e => r(381453).cJ({ ...e
                            }, [l]))
                        }
                    }, [t, m, e]),
                    {
                        announce: M
                    } = (0, r(813367).U)(),
                    A = (0, a.useRef)(),
                    P = (e => {
                        let r = Object.values(t).reduce((e, t) => !e || (t.createdAt ? ? 0) > (e.createdAt ? ? 0) ? t : e, void 0);
                        if (r && null != (e = c.current) && null != (e = e[r.id]) && e.active) return ["string" == typeof r.title ? r.title : void 0, "string" == typeof r.message ? r.message : void 0].filter(Boolean).join(" ") || void 0
                    })();
                return (0, a.useEffect)(() => {
                    P && P !== A.current && M(P), A.current = P
                }, [P, M]), (0, n.jsx)(y, {
                    children: (0, n.jsx)(r(114596).O, {
                        open: b().length > 0,
                        children: b().map((t, a) => {
                            var o;
                            let i = null == (o = c.current) ? void 0 : o[t.id],
                                s = (null == i ? void 0 : i.yPos) !== void 0 && (null == i ? void 0 : i.active),
                                l = null != i && i.active ? 0 : 100;
                            if (s && i && t.messageKey && !u.current.has(t.id) && !i.userDismissed && !i.actionTriggered) {
                                let a = t.messageKey;
                                r(357709).DL(e, {
                                    callout_key: a,
                                    placement_key: "Toast"
                                }), u.current.add(t.id)
                            }
                            return (0, n.jsx)(v, {
                                "data-toast-id": t.id,
                                onTransitionEnd: B,
                                yPos: (null == i ? void 0 : i.yPos) !== void 0 ? -i.yPos : l,
                                visible: s,
                                children: (0, n.jsx)(f, { ...t,
                                    onMouseEnter: () => T(t, a),
                                    onMouseLeave: () => I(t),
                                    onReplace: () => C(t),
                                    onClose: () => w(t),
                                    actions: t.actions
                                })
                            }, t.id)
                        })
                    })
                })
            }

            function v(e) {
                let {
                    yPos: t,
                    visible: a,
                    children: o,
                    ...i
                } = e, s = (0, r(533992).v3)(), [l, d, c] = (0, r(682985).K8)(() => [(0, r(616844).Y5)("left", 12), (0, r(616844).Y5)("bottom", 12), (0, r(898478).k)(s)], [s]), u = (0, r(682985).K8)(() => !!r(694648).U.getState(), []), p = (0, r(960253).I)(() => {
                    let e = {
                        transform: `scale(${a?1:.96})`,
                        position: void 0,
                        marginInline: l,
                        marginBottom: d
                    };
                    return {
                        toastContainer: {
                            insetInlineStart: c,
                            transform: `translateY(${t??0}px) scale(${a?1:.96})`,
                            transitionDuration: "0.3s",
                            opacity: +!!a,
                            position: "fixed",
                            bottom: 0,
                            transitionProperty: "opacity, transform",
                            marginInlineStart: l,
                            marginBottom: d,
                            ...u ? e : {}
                        }
                    }
                }, [c, l, d, t, a, u]);
                return (0, n.jsx)("div", {
                    style: p.toastContainer,
                    ...i,
                    children: o
                })
            }

            function y(e) {
                let {
                    children: t
                } = e, a = (0, r(682985).O$)(r(694648).U);
                return a ? (0, n.jsx)(r(425930).A.Provider, {
                    value: a,
                    children: t
                }) : (0, n.jsx)(n.Fragment, {
                    children: t
                })
            }
        },
        336613: (e, t, r) => {
            "use strict";
            let a, n;

            function o(e) {
                a = e
            }

            function i(e) {
                n = e
            }

            function s() {
                if (!a) throw Error("configureSubscriptionActions() must be called before using subscription actions");
                return a
            }
            async function l() {
                if (!n) throw Error("configureSubscriptionActionsLazyDeps() must be called before loading lazy deps");
                return n()
            }
            r.d(t, {
                N7: () => l,
                NK: () => o,
                NS: () => i,
                XC: () => s
            }), r(16280)
        },
        337592: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ki: () => n,
                d1: () => o,
                j8: () => l,
                s1: () => s,
                yX: () => i
            }), r(898992), r(737550), r(296540);
            var a = r(474848);

            function n(e) {
                if (!e) return;
                let t = (0, r(875472).b_)(e);
                return (0, a.jsx)(r(109939).sA, {
                    id: "coupon.duration.months",
                    defaultMessage: "{formattedMonths} months",
                    values: {
                        formattedMonths: (0, a.jsx)(r(109939).Gr, {
                            value: t.months
                        })
                    }
                })
            }

            function o(e, t, a, n) {
                return n && (0, r(90119).FV)(n, t) ? n : a && e === t && (0, r(90119).FV)(a.campaign, e) ? a.campaign : void 0
            }

            function i(e, t, a) {
                let n, o;
                if (e && (0, r(875472).rM)(e) && (n = (0, r(90119).MN)(e.offer.campaign, t), o = !!a && (0, r(90119).sZ)(e.offer.campaign, a), n && o)) return (0, r(875472).kd)(e)
            }

            function s(e) {
                return (0, r(875472).b_)(e).days
            }
            async function l({
                billingData: e,
                environment: t,
                sidebarSpaceStore: a,
                offerCampaign: n
            }) {
                return !a.id || !e || !a.getSetting("reach_block_limit_time") || (0, r(192159).Gm)(e) ? Promise.resolve(!1) : Promise.resolve(!!await r(617995).I.awaitData(t, {
                    offerCampaign: n,
                    spaceId: a.id
                }))
            }
        },
        357709: (e, t, r) => {
            "use strict";

            function a(e, t) {
                let a = (0, r(462391).h2)(t.callout_key);
                a && (t.placement_key = (0, r(462391).t9)(a)), (0, r(104310).u)({
                    event: {
                        eventName: "callout_show",
                        eventProperties: { ...t,
                            callout_src: a ? "static" : "cio"
                        }
                    }
                })
            }

            function n(e, t) {
                let a = (0, r(462391).h2)(t.callout_key);
                a && (t.placement_key = (0, r(462391).t9)(a)), (0, r(104310).u)({
                    event: {
                        eventName: "callout_click",
                        eventProperties: { ...t,
                            callout_src: a ? "static" : "cio"
                        }
                    }
                }), t.callout_key && r(409725).l.trackEvent("callout_click", {
                    callout_key: t.callout_key,
                    click_type: t.click_type,
                    placement_key: t.placement_key
                })
            }

            function o(e, t) {
                let a = (0, r(462391).h2)(t.callout_key);
                a && (t.placement_key = (0, r(462391).t9)(a)), (0, r(104310).u)({
                    event: {
                        eventName: "callout_dismiss",
                        eventProperties: { ...t,
                            callout_src: a ? "static" : "cio"
                        }
                    }
                })
            }

            function i(e, t) {
                let a = (0, r(462391).h2)(t.callout_key);
                a && (t.placement_key = (0, r(462391).t9)(a)), (0, r(104310).u)({
                    event: {
                        eventName: "callout_engagement",
                        eventProperties: { ...t,
                            callout_src: a ? "static" : "cio"
                        }
                    }
                })
            }

            function s(e, t) {
                let {
                    eligible_callouts: a,
                    required_arg_timeout: n,
                    required_args_run_duration: o,
                    eligibility_timeouts: i,
                    blocklist: s
                } = t;
                (0, r(104310).u)({
                    event: {
                        eventName: "callout_coordinator_resolved",
                        eventProperties: {
                            eligible_callouts: a,
                            required_arg_timeout: n,
                            required_args_run_duration: o,
                            eligibility_timeouts: i,
                            blocklist: s
                        }
                    }
                })
            }

            function l(e, t) {
                (0, r(104310).u)({
                    event: {
                        eventName: "callout_feature_interaction",
                        eventProperties: t
                    }
                })
            }

            function d(e, t) {
                (0, r(104310).u)({
                    event: {
                        eventName: "callout_skipped",
                        eventProperties: t
                    }
                })
            }

            function c(e, t) {
                let a = (0, r(462391).h2)(t.callout_key);
                a && (t.placement_key = (0, r(462391).t9)(a)), (0, r(104310).u)({
                    event: {
                        eventName: "callout_not_shown",
                        eventProperties: { ...t,
                            callout_src: a ? "static" : "cio"
                        }
                    }
                })
            }
            r.d(t, {
                Ak: () => c,
                Cu: () => d,
                DL: () => a,
                Jb: () => i,
                Sq: () => o,
                Y5: () => n,
                gc: () => l,
                wo: () => s
            })
        },
        375592: (e, t, r) => {
            "use strict";
            r.d(t, {
                T: () => a
            });
            let a = new(r(273917)).U(e => `${e.currentUser.id}`, async e => {
                let t = await e.api.callApi({
                    eventName: "getExternalOrgData",
                    environment: e,
                    data: {}
                });
                return "success" === t.type ? t.data : void 0
            });
            r(202146).exposeDebugValue("ExternalOrgDataStore", a)
        },
        383378: (e, t, r) => {
            "use strict";
            r.d(t, {
                $G: () => n,
                Hj: () => o,
                Nh: () => c,
                V9: () => s,
                WL: () => a,
                cv: () => d,
                nS: () => i,
                tz: () => l
            }), r(581454);
            let a = 30,
                n = 5;

            function o(e, t) {
                var r;
                return (null == (r = e.subscription) ? void 0 : r.trialEnd) !== void 0 && "reset_and_invoice" === t.subscription.type
            }

            function i(e, t, a) {
                return e ? (0, r(850640).W_)(e.toMillis(), a ? ? "long", t) : void 0
            }

            function s(e, t) {
                let a = r(906745).DateTime.fromMillis(e.endDateMs);
                return (t ? ? r(906745).DateTime.now()) > a
            }

            function l(e, t, a) {
                let n = r(906745).DateTime.fromMillis(e.endDateMs),
                    o = a ? ? r(906745).DateTime.now();
                return o < n && n.diff(o).as("days") <= t
            }

            function d(e) {
                let {
                    prices: t,
                    products: n,
                    interval: o,
                    memberCount: i,
                    currency: s = "USD",
                    trialLengthDays: l = a,
                    trialStartDate: d = r(906745).DateTime.now()
                } = e;
                return {
                    items: n.map(e => ({
                        price: (0, r(982473).vk)(t, {
                            product: e,
                            interval: o,
                            currency: s
                        }),
                        quantity: i
                    })),
                    trialEnd: d.plus({
                        days: l
                    })
                }
            }

            function c(e) {
                return (0, r(722371).Xk)(e, "plus") && (0, r(722371).Xk)(e, "ai")
            }
        },
        408441: (e, t, r) => {
            "use strict";

            function a(e) {
                let {
                    environment: t,
                    ...a
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "database_entrypoint_cta",
                        eventProperties: a
                    }
                })
            }
            r.r(t), r.d(t, {
                trackDatabaseEntrypointCta: () => a
            })
        },
        448988: (e, t, r) => {
            "use strict";
            r.d(t, {
                Wx: () => o,
                fM: () => a,
                sM: () => n
            });
            let a = new(r(815048)).O2("framer-motion", async () => await Promise.all([r.e(49806), r.e(79974), r.e(45414), r.e(37043)]).then(r.bind(r, 301716)));

            function n(e) {
                return e.useAnimation()
            }

            function o(e, ...t) {
                return e.useInView(...t)
            }
        },
        466290: (e, t, r) => {
            "use strict";
            r.d(t, {
                K: () => n
            });
            var a = () => r(906745);

            function n(e, t) {
                r(696190).default.isVisible(t.key) && (r(696190).default.removeMessage(t.key), r(986939).A.isAdminMode || (! function(e, t) {
                    let n = r(728372).AppStoreCurrentUserSettingsStore.state,
                        o = null == n ? void 0 : n.getSettings();
                    if (!o || !n) return;
                    let i = new(r(543346)).GO(o.callout_placement_exposures);
                    for (let e of t) i.add(e, a().DateTime.now().toMillis());
                    (0, r(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addPlacementExposures",
                        cellTarget: "main",
                        canUndo: !0,
                        perform: e => {
                            (0, r(862759).m)({
                                userSettingsStore: n,
                                transaction: e,
                                data: {
                                    callout_placement_exposures: i.exportUserSetting()
                                }
                            })
                        }
                    })
                }(e, [(0, r(125542).Q3)(t)]), (0, r(476114).q)(e, t), r(728372).AppStoreInAppCalloutStore.state.updateCalloutStatus({
                    calloutId: t.key,
                    visible: !1
                }), (0, r(819416).Z)(e, t.key)), r(696190).default.isPendingDynamicMessage(t.key) && (0, r(740063).G)(t.key))
            }
        },
        476114: (e, t, r) => {
            "use strict";

            function a({
                environment: e,
                message: t,
                overwrite: n = !1
            }) {
                let o = r(728372).AppStoreCurrentUserSettingsStore.state,
                    i = null == o ? void 0 : o.getSettings();
                if (!o || !i) return;
                let s = new Map((i.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                (!s.has(t.key) || n) && s.set(t.key, {
                    name: t.key,
                    timestamp: r(906745).DateTime.now().toMillis()
                }), (0, r(377796).createAndCommit)({
                    environment: e,
                    userAction: "messageActions.addUserSettingsDismissal",
                    cellTarget: "main",
                    canUndo: !0,
                    perform: e => {
                        (0, r(862759).m)({
                            userSettingsStore: o,
                            transaction: e,
                            data: {
                                callout_dismissal_timestamps: Array.from(s.values())
                            }
                        })
                    }
                })
            }

            function n(e, t) {
                let n = (0, r(125542).K0)(t);
                "once_per_user" === n ? a({
                    environment: e,
                    message: t
                }) : "once_per_space" === n && function({
                    environment: e,
                    message: t,
                    overwrite: a = !1
                }) {
                    let n = r(728372).AppStoreSidebarSpaceViewStore.state,
                        o = null == n ? void 0 : n.getSettings();
                    if (!n || !o) return;
                    let i = n.getSpaceId(),
                        s = new Map((o.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                    (!s.has(t.key) || a) && s.set(t.key, {
                        name: t.key,
                        timestamp: r(906745).DateTime.now().toMillis()
                    }), (0, r(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addSpaceViewDismissal",
                        canUndo: !0,
                        cellTarget: i ? {
                            spaceWithId: i
                        } : void 0,
                        perform: e => {
                            r(380762).AG(n, e, {
                                callout_dismissal_timestamps: Array.from(s.values())
                            })
                        }
                    })
                }({
                    environment: e,
                    message: t
                })
            }
            r.d(t, {
                q: () => n,
                H: () => a
            }), r(581454)
        },
        531175: (e, t, r) => {
            "use strict";
            async function a(e) {
                let {
                    environment: t,
                    messageKey: a,
                    options: n,
                    metadata: o
                } = e, i = await r(497345).f.load();
                await i.maybeShowPendingMessagesImpl({
                    environment: t,
                    messageKeys: [a],
                    options: n,
                    metadata: o
                })
            }
            r.d(t, {
                i: () => a
            })
        },
        556306: (e, t, r) => {
            "use strict";

            function a(e) {
                return !!e.getSetting("self_serve_enterprise_eligible")
            }
            r.d(t, {
                h: () => a
            })
        },
        694648: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n,
                U: () => a
            });
            let a = r(546605).Store.createValue(null, {
                name: "InAppActivityToasterOverlayElemStore"
            });

            function n(e) {
                a.setState(e)
            }
        },
        708009: (e, t) => {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var a, n = "https://js.stripe.com/v3",
                o = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
                i = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
                s = function() {
                    for (var e = document.querySelectorAll('script[src^="'.concat(n, '"]')), t = 0; t < e.length; t++) {
                        var r = e[t];
                        if (o.test(r.src)) return r
                    }
                    return null
                },
                l = function(e) {
                    var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                        r = document.createElement("script");
                    r.src = "".concat(n).concat(t);
                    var a = document.head || document.body;
                    if (!a) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                    return a.appendChild(r), r
                },
                d = function(e, t) {
                    e && e._registerWrapper && e._registerWrapper({
                        name: "stripe-js",
                        version: "1.52.1",
                        startTime: t
                    })
                },
                c = null,
                u = function(e, t, r) {
                    if (null === e) return null;
                    var a = e.apply(void 0, t);
                    return d(a, r), a
                },
                p = function(e) {
                    var t = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e), "\n");
                    if (null === e || "object" !== r(e)) throw Error(t);
                    if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
                    throw Error(t)
                },
                m = !1,
                f = function() {
                    for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    m = !0;
                    var o = Date.now();
                    return (e = a, null !== c ? c : c = new Promise(function(t, r) {
                        if ("u" < typeof window || "u" < typeof document) return void t(null);
                        if (window.Stripe && e && console.warn(i), window.Stripe) return void t(window.Stripe);
                        try {
                            var a = s();
                            a && e ? console.warn(i) : a || (a = l(e)), a.addEventListener("load", function() {
                                window.Stripe ? t(window.Stripe) : r(Error("Stripe.js not available"))
                            }), a.addEventListener("error", function() {
                                r(Error("Failed to load Stripe.js"))
                            })
                        } catch (e) {
                            r(e);
                            return
                        }
                    })).then(function(e) {
                        return u(e, r, o)
                    })
                };
            f.setLoadParameters = function(e) {
                if (!(m && a && Object.keys(p(e)).reduce(function(t, r) {
                        var n;
                        return t && e[r] === (null == (n = a) ? void 0 : n[r])
                    }, !0))) {
                    if (m) throw Error("You cannot change load parameters after calling loadStripe");
                    a = p(e)
                }
            }, t.loadStripe = f
        },
        734389: (e, t, r) => {
            "use strict";

            function a(e, t) {
                (0, r(466290).K)(e, t)
            }
            r.d(t, {
                O: () => a
            })
        },
        752153: (e, t, r) => {
            "use strict";

            function a(e, t) {
                return n(l(e, t))
            }

            function n(e) {
                return void 0 !== e && (e === r(212169).q_ || e === r(212169).YD)
            }

            function o(e, t) {
                if (n(t)) return;
                let a = r(212169).c$[e],
                    o = a.steps.findIndex(e => e.id === t);
                return -1 === o ? a.steps[0].id : o === a.steps.length - 1 ? r(212169).q_ : a.steps[o + 1].id
            }

            function i(e, t) {
                let r = l(e, t);
                if (!(!r || n(r))) return o(t, r)
            }

            function s(e, t) {
                let a = l(e, t);
                if (a) {
                    var o;
                    let e = r(212169).c$[t];
                    if (n(a)) return null == (o = e.steps.at(-1)) ? void 0 : o.id;
                    let i = e.steps.findIndex(e => e.id === a);
                    return -1 !== i && 0 !== i ? e.steps[i - 1].id : void 0
                }
            }

            function l(e, t) {
                var a;
                if (!e) return;
                let n = ((null == (a = e.getSettings()) ? void 0 : a.tutorials) || {})[t];
                return void 0 === n ? r(212169).c$[t].steps[0].id : n
            }
            r.d(t, {
                KD: () => s,
                gt: () => l,
                i9: () => i,
                ll: () => n,
                tb: () => o,
                x$: () => a
            }), r(18107), r(967357)
        },
        804677: (e, t, r) => {
            "use strict";
            async function a(e, t) {
                let a = await r(497345).f.load();
                return await a.isPendingMessageEligibleImpl(e, t)
            }
            r.d(t, {
                E: () => a
            })
        },
        822284: (e, t, r) => {
            "use strict";
            r.d(t, {
                BS: () => o,
                BusinessTrialEndingModalStore: () => n,
                HL: () => a,
                ZJ: () => s,
                jz: () => i
            });
            let a = r(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    potentialCampaigns: []
                }, {
                    name: "BusinessTrialStartModalStore"
                }),
                n = r(546605).Store.createValue({
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
                o = r(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    connectedApps: [],
                    teamStores: [],
                    pageStores: [],
                    onSecondaryButtonClick: void 0
                }, {
                    name: "BusinessTrialLossAversionModalStore"
                }),
                i = r(546605).Store.createValue({
                    open: !1,
                    connectedApps: [],
                    teamStores: [],
                    pageStores: []
                }, {
                    name: "BusinessTrialExplorePlanModalStore"
                }),
                s = r(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    trialCampaign: void 0,
                    showBillingIntervalSelect: !1
                }, {
                    name: "BusinessTrialCCUpfrontModalStore"
                })
        },
        853429: (e, t, r) => {
            "use strict";

            function a({
                action: e,
                environment: t,
                metadata: n
            }) {
                switch (e.type) {
                    case "link":
                        window.open(e.link);
                        break;
                    case "open_settings":
                        let o = (0, r(872017).D)(e.page);
                        o && r(599754).Ow({
                            currentPage: o
                        });
                        break;
                    case "view_block":
                        let i = new(r(970831)).B(t, {
                            table: r(832375).evP,
                            id: e.blockId
                        });
                        i.isDefined() && (0, r(545586).navigateToBlock)({
                            environment: t,
                            store: i,
                            pageVisitSource: r(254656).y8.Sidebar
                        });
                        break;
                    case "create_database":
                        let s = function(e) {
                            if (e && "object" == typeof e && "nudgeData" in e && e.nudgeData && "object" == typeof e.nudgeData) {
                                let t = e.nudgeData;
                                if ("todoBlocks" in t && "currentBlockId" in t && "parentBlock" in t) return t
                            }
                            return null
                        }(n);
                        s && (0, r(316376).createDatabaseFromTodoBlocks)({
                            environment: t,
                            nudgeData: s
                        });
                        break;
                    case "open_agent":
                        (0, r(909212).re)() && r(310639).assistantDependency.load().then(r => {
                            r.agentActions.openNewAgentSidebarFromMainBlock({
                                environment: t,
                                primeTextInput: e.query
                            })
                        });
                        break;
                    case "create_transcription_block":
                        (async () => {
                            try {
                                (await r(68067).$.load()).createAndNavigateToTranscriptionBlock({
                                    environment: t,
                                    from: e.from,
                                    title: "new_page"
                                })
                            } catch (e) {
                                r(773352).log({
                                    level: "error",
                                    from: "handleInAppMessageAction",
                                    type: "failed_to_lazy_load_transcription_create_actions",
                                    error: (0, r(416607).convertErrorToLog)(e)
                                })
                            }
                        })();
                        break;
                    case "open_trial_modal":
                        ! function(e) {
                            let {
                                modalType: t
                            } = e;
                            switch (t) {
                                case "business_trial_start":
                                    r(272799).openBusinessTrialStartModal({
                                        openedFrom: "sidebar_upgrade_nudge",
                                        potentialCampaigns: ["stacked_business_trial", "stacked_business_trial_14d", "business_reverse"]
                                    });
                                    break;
                                case "business_trial_ending":
                                    r(272799).openBusinessTrialEndingModal({
                                        openedFrom: "self_serve_business_trial_ending_soon_nudge",
                                        modalState: "initial"
                                    });
                                    break;
                                case "business_trial_explore":
                                    r(272799).openBusinessTrialExplorePlanModal({
                                        openedFrom: "self_serve_business_trial_nudge"
                                    });
                                    break;
                                default:
                                    (0, r(722371).HB)(t)
                            }
                        }(e);
                        break;
                    case "open_meetings_tab":
                        (0, r(104310).u)({
                            event: {
                                eventName: "ai_meetings_tab_click",
                                eventProperties: {
                                    source: "in_app_message"
                                }
                            }
                        }), (0, r(79266).navigate)({
                            environment: t,
                            url: r(168962).JZ.meet
                        });
                        break;
                    default:
                        (0, r(722371).HB)(e)
                }
            }

            function n(e) {
                return "tooltip" === e.type && "object" == typeof e.props && "tooltipOrigin" in e.props && "bottom_assistant" === e.props.tooltipOrigin
            }

            function o(e) {
                return "toast" === e.type ? (e.type, !0) : (e.type, !1)
            }
            r.d(t, {
                Wq: () => a,
                Z2: () => n,
                lN: () => o
            })
        },
        872017: (e, t, r) => {
            "use strict";
            r.d(t, {
                D: () => o,
                O: () => n
            });
            let a = ["profile", "plans", "members"];

            function n(e) {
                return !!(0, r(722371).Xk)(a, e)
            }

            function o(e) {
                switch (e) {
                    case "profile":
                    case "manage_emails":
                    case "notifications_and_settings":
                    case "user_settings":
                    case "notifications":
                    case "mail_and_calendar":
                    case "connected_apps":
                    case "language_and_region":
                    case "offline":
                    case "settings":
                    case "members":
                    case "plans":
                    case "billing":
                    case "ai_usage_dashboard":
                    case "subscription":
                    case "security":
                    case "identity_provisioning":
                    case "admin_content_search":
                    case "integrations":
                    case "integrations_mcp":
                    case "imports":
                    case "teams":
                    case "audit_log":
                    case "analytics":
                    case "sites":
                    case "public_pages":
                    case "custom_emoji":
                    case "verified_pages":
                    case "requests":
                    case "workspace_discovery":
                    case "experiments":
                    case "performance_toolbar":
                    case "personalization":
                    case "user_similarity_scores":
                    case "collection_debug":
                    case "offline_mode_debug":
                    case "ai":
                    case "design_previews":
                    case "mobile_native":
                        return e;
                    default:
                        return
                }
            }
        },
        889503: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                getStripe: () => o,
                getStripeAppearance: () => d,
                optionalPaymentMethodIdGivenPaymentData: () => u,
                stripeElementLocaleGivenNotionLocale: () => i,
                translateStripeError: () => l,
                useElementsOptions: () => s
            });
            var a = r(296540);
            let n = null;
            async function o() {
                return n || (r(37458).loadStripe.setLoadParameters({
                    advancedFraudSignals: !1
                }), n = (0, r(37458).loadStripe)(r(986939).A.stripe.key)), n
            }

            function i(e) {
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
                let t = (0, r(960253).e)(),
                    n = (0, r(632079).O4)({
                        theme: t
                    }),
                    {
                        type: o
                    } = e,
                    s = "setup" === o || "subscription" === o ? e.currency : void 0,
                    l = "subscription" === o ? e.amount : void 0,
                    c = (0, r(682985).K8)(() => {
                        var e;
                        return (null == (e = r(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.preferred_locale) || r(599412).q
                    }, []);
                return (0, a.useMemo)(() => {
                    let e = {
                            appearance: d(n, t),
                            locale: i(c)
                        },
                        a = {
                            paymentMethodTypes: (0, r(56281).VV)({
                                currency: s
                            })
                        };
                    switch (o) {
                        case "address":
                            return e;
                        case "setup":
                            return { ...e,
                                ...a,
                                currency: null == s ? void 0 : s.toLowerCase(),
                                mode: "setup",
                                paymentMethodCreation: "manual"
                            };
                        case "subscription":
                            return { ...e,
                                ...a,
                                amount: l,
                                currency: null == s ? void 0 : s.toLowerCase(),
                                mode: "subscription",
                                paymentMethodCreation: "manual",
                                setupFutureUsage: "off_session",
                                loader: "never"
                            };
                        default:
                            (0, r(722371).HB)(o)
                    }
                }, [n, t, c, s, o, l])
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
                        var r = e,
                            a = t.decline_code;
                        switch (a) {
                            case "expired_card":
                                return r.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.expiredCard",
                                    defaultMessage: "Your card was declined because it is an expired card."
                                });
                            case "incorrect_number":
                                return r.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.incorrectNumber",
                                    defaultMessage: "Your card was declined because you input an incorrect number."
                                });
                            case "insufficient_funds":
                                return r.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.declinedFunds",
                                    defaultMessage: "Your card was declined because of insufficient funds."
                                });
                            case "invalid_cvc":
                                return r.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.invalidCvc",
                                    defaultMessage: "Your card was declined because you input an invalid CVC number"
                                });
                            case "invalid_amount":
                                return r.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.invalidAmount",
                                    defaultMessage: "Your card was declined because payment amount exceeds the amount that's allowed."
                                });
                            default:
                                return r.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message",
                                    defaultMessage: "Your card was declined."
                                })
                        }
                    default:
                        return t.message || ""
                }
            }

            function d(e, t) {
                let a = c(e.text.primary),
                    n = c(e.text.secondary),
                    o = c(e.text.tertiary),
                    i = c(e.red.text.accentPrimary),
                    s = c(e.blue.text.accentPrimary);
                return {
                    labels: "above",
                    theme: "dark" === t ? "night" : "stripe",
                    variables: {
                        spacingGridRow: "12px",
                        spacingGridColumn: "12px",
                        spacingUnit: "4px",
                        spacingTab: "6px",
                        colorPrimary: a,
                        colorPrimaryText: a,
                        colorText: a,
                        colorTextSecondary: n,
                        colorTextPlaceholder: o,
                        colorIcon: a,
                        colorIconCheckmark: c(e.icon.inversePrimary),
                        colorDanger: i,
                        colorBackground: c(e.whiteButtonBackground),
                        colorIconTabHover: a,
                        colorIconTabSelected: s,
                        colorIconChevronDown: a,
                        fontFamily: r(699422).Tf.sans,
                        fontWeightLight: `${r(699422).Wy.light}`,
                        fontWeightNormal: `${r(699422).Wy.regular}`,
                        fontWeightMedium: `${r(699422).Wy.medium}`,
                        fontWeightBold: `${r(699422).Wy.medium}`,
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
                            color: a,
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
                            color: a,
                            boxShadow: "none",
                            outline: "none"
                        },
                        ".Tab--selected:hover": {
                            backgroundColor: e.whiteButtonBackground,
                            color: a
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
                            color: a
                        },
                        ".Input--invalid": {
                            color: a,
                            boxShadow: e.inputRedFocusRing
                        },
                        ".Input:focus": {
                            color: a,
                            boxShadow: e.inputBlueFocusRing
                        },
                        ".Label": {
                            fontSize: "12px",
                            lineHeight: "15px",
                            fontWeight: "500",
                            color: n,
                            marginBottom: "8px"
                        },
                        ".Error": {
                            fontSize: "12px",
                            fontWeight: "400",
                            lineHeight: "15px",
                            color: i
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
                            color: a
                        },
                        ".PickerItem:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground,
                            color: a,
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
                            color: a
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
                            color: n,
                            fontSize: "10px",
                            fontWeight: "400",
                            lineHeight: "13px",
                            letterSpacing: "0.12px"
                        },
                        ".CheckboxLabel": {
                            color: a,
                            fontSize: "12px",
                            fontWeight: "500",
                            lineHeight: "15px"
                        },
                        ".Action, .MenuAction": {
                            color: a,
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
                            fill: a
                        },
                        ".Block": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            padding: "16px"
                        },
                        ".Icon": {
                            fill: a
                        }
                    }
                }
            }

            function c(e) {
                let [t, r, a, n] = e.match(/[\d.]+/g) ? ? [];
                return t && r && a && n && 1 === parseInt(n) ? `rgb(${t}, ${r}, ${a})` : e
            }

            function u(e) {
                return (null == e ? void 0 : e.type) === "paymentMethodId" ? e.value : void 0
            }
        }
    }
]);