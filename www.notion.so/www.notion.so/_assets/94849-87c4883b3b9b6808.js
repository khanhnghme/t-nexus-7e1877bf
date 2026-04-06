"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [94849], {
        3161: (e, t, i) => {
            i.d(t, {
                m: () => n
            });

            function n(e, t) {
                let n = "msStore" === e.device.desktopTargetPlatform,
                    a = !t || (0, i(529587).X)(t);
                return !i(986939).A.isMobile && !n && !a
            }
        },
        17118: (e, t, i) => {
            i.d(t, {
                l: () => o
            });
            var n = () => i(546605);
            class a extends n().Store {
                getInitialState() {
                    return null
                }
            }
            let o = new a
        },
        24829: (e, t, i) => {
            i.d(t, {
                A: () => n
            });

            function n(e) {
                let {
                    environment: t,
                    userSettingsStore: n,
                    metadata: a
                } = e;
                n && (0, i(377796).createAndCommit)({
                    environment: t,
                    userAction: "userSettingsActions.setNuxDatabaseLearningMetadata",
                    canUndo: !1,
                    cellTarget: "main",
                    perform: e => {
                        (0, i(862759).m)({
                            userSettingsStore: n,
                            transaction: e,
                            data: {
                                nux_database_learning_metadata: a
                            }
                        })
                    }
                })
            }
        },
        28998: (e, t, i) => {
            i.d(t, {
                o: () => n
            });

            function n(e) {
                let t = e.getSubscriptionTier();
                return "plus" === t || "business" === t || "enterprise" === t
            }
        },
        66642: (e, t, i) => {
            i.d(t, {
                z: () => n
            });

            function n(e, t, n) {
                let a = !!(0, i(471078).O)({
                        environment: e,
                        spaceId: n
                    }),
                    o = (0, i(717274).Km)(e),
                    r = (0, i(641466).qp)();
                return !!(0, i(216260).dL)() && !!a && (!!o && null !== r && r >= 0 || (0, i(983888).B)(e, t, n) >= i(284397).g)
            }
        },
        94849: (e, t, i) => {
            i.d(t, {
                S: () => l
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(672577), i(737550), i(814603), i(147566), i(198721);
            let n = {
                    "1_day": 864e5,
                    "1_week": 6048e5,
                    "2_weeks": 12096e5,
                    "1_minute": 6e4
                },
                a = Date.UTC(2026, 1, 26);

            function o(e, t) {
                return e.getCreatedById() === t && e.getCreatedTime() > 0 && e.getCreatedTime() < a
            }

            function r(e) {
                let {
                    currentUserSettingsStore: t,
                    minAccountAgeInDays: n
                } = e;
                return Number((0, i(996903).i)(t)) >= n
            }

            function s(e) {
                let {
                    sidebarSpaceStore: t,
                    billingData: n,
                    targetDaysRemaining: a
                } = e;
                if (!t.canAdmin() || !n || (0, i(192159).Gm)(n)) return !1;
                let o = (0, i(97700).n)({
                    campaign: "aimn",
                    space: t.getModel()
                });
                return void 0 !== o && o === a
            }
            let l = {
                dummy_modal: async e => Promise.resolve(!1),
                dummy_modal_2: async e => Promise.resolve(!1),
                meeting_block_abandoner_reminder: async e => {
                    let {
                        environment: t,
                        sidebarSpaceStore: n
                    } = e;
                    if (!(0, i(869708).M5)()) return !1;
                    let a = await (0, i(628860).B)(t, {
                        name: "ai_meeting_notes",
                        spaceId: n.getSpaceId(),
                        userId: t.currentUser.id,
                        amount: 1
                    });
                    return (0, i(811656).e2)(a)
                },
                ai_microsoft_teams_universal_qna_announcement: async e => Promise.resolve(!1),
                sidebar_upgrade_nudge: async e => {
                    let t, n, {
                            environment: a,
                            currentUserSettingsStore: o,
                            billingData: r,
                            sidebarSpaceStore: s
                        } = e,
                        l = o.getSettings(),
                        d = (0, i(616579).j)({
                            environment: a,
                            spaceId: s.id
                        }) ? ? 1,
                        c = (0, i(776371).x)({
                            billingData: r,
                            memberCount: d
                        });
                    return Promise.resolve(!(null != l && l.dismissed_sidebar_upgrade_nudge) && "none" === c && !(0, i(192159).Fq)(r) && 1 === d && (null === (n = (t = null == s ? void 0 : s.getCreatedTime()) ? (0, i(362008).Mn)(t) : null) || !(n <= 7)))
                },
                ai_limit_nudge: async e => {
                    var t, n;
                    let {
                        environment: a,
                        sidebarSpaceStore: o,
                        currentUserSettingsStore: r,
                        assistantFeatureGateStore: s
                    } = e;
                    if (!s.isAiEnabled()) return !1;
                    let l = r.getSettings();
                    if (void 0 === l) return !1;
                    let d = o.getSpaceId(),
                        c = await (0, i(628860).B)(a, {
                            name: "ai_usage",
                            spaceId: d,
                            userId: a.currentUser.id,
                            amount: 1
                        }),
                        u = c.limit;
                    if ("unlimited" === u.total) return !1;
                    let _ = Number(u.current / u.total),
                        m = _ >= i(319020).G ? !!(null == (t = l.addOnLimitNotifications) ? void 0 : t.disableLimitNotificationInSidebar) : !!(null == (n = l.addOnLimitNotifications) ? void 0 : n.disableWarningNotificationInSidebar),
                        p = c.upsell;
                    return "unavailable" !== c.type && void 0 !== p && !m && _ >= i(319020)._
                },
                block_limit_nudge: e => {
                    let {
                        environment: t,
                        subscriptionDataStore: n,
                        sidebarSpaceStore: a
                    } = e;
                    return Promise.resolve(("unsubscribed_admin" === n.state.type || "unsubscribed_member" === n.state.type) && n.state && (0, i(66642).z)(t, n.state, a.id))
                },
                resurrection_offer_sidebar: async e => {
                    let {
                        environment: t,
                        billingData: n,
                        sidebarSpaceStore: a
                    } = e, o = a.getSpaceId();
                    return !(0, i(192159).Fq)(n) && a.canAdmin() && o ? Promise.resolve("resurrection_offer" === await (0, i(124094).E)(t, null == a ? void 0 : a.id, "resurrection_offer_callout")) : Promise.resolve(!1)
                },
                business_resurrection_offer_sidebar: async e => {
                    let {
                        environment: t,
                        billingData: n,
                        sidebarSpaceStore: a
                    } = e, o = a.getSpaceId();
                    return !(0, i(192159).Fq)(n) && a.canAdmin() && o ? Promise.resolve("business_resurrection_offer" === await (0, i(124094).E)(t, null == a ? void 0 : a.id, "resurrection_offer_callout")) : Promise.resolve(!1)
                },
                expansion_offer_sidebar_callout: async e => {
                    var t, n, a;
                    let {
                        environment: o,
                        sidebarSpaceStore: r
                    } = e, s = null == (t = i(728372).AppStoreCurrentUserSettingsStore.state) ? void 0 : t.getSettings();
                    if (!(null == s || null == (n = s.callout_dismissal_timestamps) ? void 0 : n.some(e => "expansion_offer_invite_members_announcement" === e.name))) return !1;
                    let l = await (0, i(226309).Vv)({
                            environment: o,
                            spaceId: r.getSpaceId()
                        }),
                        d = await (0, i(423127).Xd)({
                            billingData: l,
                            spaceStore: r,
                            environment: o
                        });
                    if (!(null != d && d.shouldShowCallout) || !d.campaign) return !1;
                    let c = r.getModel(),
                        u = null == c || null == (a = c.getSettings()) || null == (a = a.offer_member_count) ? void 0 : a.find(e => e.campaign === d.campaign);
                    return !!(null != u && u.initialTimestamp) && (0, i(423127).ju)({
                        initialTimestamp: u.initialTimestamp,
                        dismissalKey: "expansion_offer_sidebar_callout",
                        billingData: l
                    })
                },
                onboarding_reverse_trial_sidebar: async e => {
                    let {
                        environment: t,
                        sidebarSpaceStore: n
                    } = e, a = await (0, i(226309).Vv)({
                        environment: t,
                        spaceId: n.getSpaceId()
                    }), o = (0, i(192159).TB)(a), r = (0, i(192159).DS)(a);
                    if (!o || !n.canAdmin()) return Promise.resolve(!1);
                    let s = n.getSpaceId(),
                        l = await t.api.callCellCompatibleApi({
                            eventName: "getCustomerOffersReceived",
                            environment: t,
                            data: {
                                spaceId: s
                            },
                            cellNavigation: {
                                cellId: void 0,
                                spaceId: s
                            }
                        });
                    if ("success" !== l.type || (0, i(278662).tX)(l.data)) return Promise.resolve(!1);
                    let d = (0, i(875472).e8)(l.data, "trial");
                    return d ? Promise.resolve((0, i(875472).ER)(d, r) > Math.round((0, i(875472).b_)(d.offer).as("days") / 2)) : Promise.resolve(!1)
                },
                import_data_prompt: async e => {
                    var t;
                    let {
                        experimentStore: i,
                        currentUserSettingsStore: n
                    } = e;
                    return (null == (t = n.getSettings()) || null == (t = t.adoption_entry_points) ? void 0 : t.import_sidebar_announcement) ? Promise.resolve(!1) : Promise.resolve("on" === i.getEligibleGroup({
                        experimentId: "adoption_import_push",
                        defaultGroup: "control",
                        enableEventTrailLogging: !0
                    }))
                },
                student_org_prompt: async e => {
                    var t, n;
                    let {
                        environment: a,
                        currentUserSettingsStore: o,
                        billingData: r
                    } = e, s = ["student", "personal", "personal_free", "free"].includes((0, i(192159).AI)(r)), l = new Set(["student_club_monthly", "student_club_yearly"]), d = (0, i(745452).p)(), c = (null == r || null == (t = r.subscription) || null == (t = t.items) ? void 0 : t.some(e => l.has(e.price.externalId))) ? ? !1;
                    if ((null == (n = o.getSettings()) ? void 0 : n.dismissed_sidebar_student_org_prompt) !== void 0 || !s || c || (null == d ? void 0 : d.collaborativeIntent) === "multiplayer") return !1;
                    let u = await a.api.callApi({
                        eventName: "isEmailEducation",
                        environment: a,
                        data: {
                            validationType: "Domain"
                        }
                    });
                    return "failed" !== u.type && u.data.isEligible
                },
                notion_calendar_launch_promo: async e => {
                    let {
                        environment: t,
                        currentUserSettingsStore: n,
                        mainEditorCurrentBlockStore: a,
                        experimentStore: o,
                        sidebarSpaceStore: r
                    } = e;
                    if (o.checkGate({
                            gateName: "2025_non_mwn_callout_modal_blackout"
                        })) return Promise.resolve(!1);
                    let s = n.getSettings();
                    if (!s) return !1;
                    let l = s.notion_calendar_launch_modal_phase,
                        d = t.device.isElectron ? void 0 === l : void 0 === l || "connected_notion_calendar" === l,
                        c = "msStore" === t.device.desktopTargetPlatform;
                    return Promise.resolve(a.canRead() && o.checkGate({
                        gateName: "notion_calendar_launch_modal"
                    }) && !(0, i(916804).I)(r) && !(0, i(529587).X)(r) && !c && d)
                },
                startup_sidebar_footer: async e => Promise.resolve(!1),
                asana_post_import_tour: async e => {
                    var t, i;
                    let {
                        currentUserSettingsStore: n,
                        mainEditorCurrentBlockStore: a
                    } = e;
                    return Promise.resolve((null == a ? void 0 : a.isCollectionView()) && (null == (t = a.getFormat()) ? void 0 : t.is_asana_imported_project) && !(null != (i = n.getSettings()) && i.seen_asana_post_import_tour))
                },
                desktop_download_sidebar: async e => {
                    var t, n, a;
                    let {
                        currentUserSettingsStore: o,
                        environment: r
                    } = e;
                    if ("web-desktop" !== r.device.deviceType || "control" !== i(218744).default.getEligibleGroup({
                            experimentId: "adoption_promote_desktop_app_download_in_onboarding",
                            defaultGroup: "control",
                            disableExposureLogging: !0
                        }) || (null == (t = o.getSettings()) ? void 0 : t.used_mac_app) || (null == (n = o.getSettings()) ? void 0 : n.used_windows_app)) return !1;
                    let s = null == (a = o.getSettings()) ? void 0 : a.signup_time;
                    if (!s) return !1;
                    let l = i(906745).DateTime.now().toMillis() - s;
                    return !(l >= 7 * i(627179).nD) && Promise.resolve(l < Number(i(627179).pT))
                },
                ai_meeting_notes_browser_summary_app_download: async e => {
                    let {
                        environment: t
                    } = e;
                    return !await (0, i(126592).e)(t) && Promise.resolve(!0)
                },
                open_in_calendar_tooltip: async e => {
                    let {
                        sidebarSpaceStore: t,
                        currentUserSettingsStore: n
                    } = e, a = n.getSettings();
                    return Promise.resolve(!(0, i(453737).d)({
                        spaceStore: t
                    }) && !(null != a && a.seen_open_in_calendar_tooltip))
                },
                ai_google_drive_qna_notification_tooltip: async e => {
                    let {
                        environment: t,
                        assistantFeatureGateStore: n,
                        sidebarSpaceStore: a,
                        sidebarSpaceViewStore: o
                    } = e, r = o.getSettings();
                    if (!r || !n.isAiEnabled() || !n.isGoogleDriveQnaNotificationEnabled() || !n.canUseAiConnectorSearchScope("google-drive") || void 0 !== r.ai_google_drive_qna_notification_seen_at) return Promise.resolve(!1);
                    let s = a.getSpaceId();
                    if (i(218744).default.checkGate({
                            gateName: "ai_connector_unification_google_drive"
                        })) {
                        let e = await (0, i(262364).u)({
                            environment: t,
                            spaceId: s,
                            connector: "google-drive"
                        });
                        return "failed" === e ? Promise.resolve(!1) : Promise.resolve(void 0 !== e && e.details.userConnectionDetails.isRecallEnabled)
                    }
                    let l = await t.api.callApi({
                        eventName: "getGoogleDriveRecallStatusForUser",
                        environment: t,
                        data: {
                            spaceId: s
                        }
                    });
                    return Promise.resolve("success" === l.type && "enabled" === l.data.status)
                },
                ai_slack_qna_notification_tooltip: async e => {
                    let {
                        environment: t,
                        sidebarSpaceStore: n,
                        sidebarSpaceViewStore: a,
                        assistantFeatureGateStore: o
                    } = e, r = null == a ? void 0 : a.getSettings(), s = n.getSpaceId();
                    if (!o.isSlackQnaNotificationEnabled() || !o.isAiEnabled() || !r || void 0 !== r.ai_slack_qna_notification_seen_at) return Promise.resolve(!1);
                    if ("success" === (await (0, i(166672).updateSlackQnAConnectionState)({
                            environment: t,
                            spaceId: s
                        })).status) {
                        var l;
                        return Promise.resolve((null == (l = i(32913).Rh.state.connectedApps) ? void 0 : l.includes("slack-admin")) && i(32913).Rh.state.canQuery && !i(32913).Rh.state.inProgress && i(32913).Rh.state.isSyncCompleted)
                    }
                    return Promise.resolve(!1)
                },
                ai_slack_qna_embed_tooltip: async e => {
                    var t;
                    let {
                        environment: n,
                        sidebarSpaceStore: a,
                        mainEditorCurrentBlockStore: o,
                        assistantFeatureGateStore: s,
                        currentUserSettingsStore: l,
                        experimentStore: d
                    } = e;
                    if (null != (t = l.getSettings()) && t.seen_slack_embed_ai_connector_tooltip) return !1;
                    let c = a.getSpaceId(),
                        u = await (0, i(226309).yk)({
                            environment: n,
                            spaceId: c
                        }),
                        _ = (0, i(262166).rV)((0, i(192159).AI)(u), "plus"),
                        m = !!(0, i(471078).O)({
                            environment: n,
                            spaceId: a.id
                        });
                    return !!o.canRead() && !!_ && !!m && !!r({
                        currentUserSettingsStore: l,
                        minAccountAgeInDays: 8
                    }) && !!d.checkGate({
                        gateName: "enable_slack_embed_tooltips_actual"
                    }) && !!s.isAiEnabled() && Promise.resolve(!0)
                },
                ai_sales_assisted_notification_tooltip: async e => {
                    let {
                        assistantFeatureGateStore: t,
                        currentUserSettingsStore: n,
                        sidebarSpaceStore: a,
                        environment: o
                    } = e, r = null == n ? void 0 : n.getSettings(), s = (0, i(785419).v)(o, a.id), l = (null == r ? void 0 : r.ai_assistant_onboarding_phase) !== "tooltip" || (null == r ? void 0 : r.ai_assistant_onboarding_phase_last_set_at) !== void 0 && 1 > (0, i(362008).Mn)(r.ai_assistant_onboarding_phase_last_set_at), d = await (0, i(655293).S)(o, {
                        name: "ai_usage",
                        amount: "unknown",
                        spaceId: a.id,
                        userId: o.currentUser.id
                    });
                    return Promise.resolve(t.showAssistantNotionAiCopy() && t.isAiEnabled() && s && void 0 === r.ai_sales_assisted_extra_notification_seen_at && !l && d)
                },
                ai_assistant_origin_element_tooltip: async e => {
                    let {
                        environment: t,
                        currentUserSettingsStore: n,
                        mainEditorCurrentBlockStore: a,
                        assistantFeatureGateStore: o
                    } = e;
                    return Promise.resolve(!(0, i(348295).$)(t).state && a.canRead() && o.isQnATooltipsVisible(n))
                },
                language_switch_prompt: async e => {
                    let {
                        environment: t,
                        experimentStore: n
                    } = e;
                    if (!n.checkGate({
                            gateName: "language_switch_prompt_v2",
                            disableExposureLogging: !0
                        })) return !1;
                    try {
                        let e = await t.api.callApi({
                            eventName: "isEligibleForLanguageSwitchPrompt",
                            environment: t,
                            data: {
                                navigatorLanguages: Array.from(navigator.languages)
                            }
                        });
                        if ("success" === e.type) {
                            let t = e.data;
                            return i(106023).z.setState({
                                status: "fulfilled",
                                ...t
                            }), t.isEligible
                        }
                    } catch (e) {}
                    return i(106023).z.setState({
                        status: "fulfilled",
                        isEligible: !1,
                        eligibilityReason: void 0,
                        preferredSwitchableLocale: void 0
                    }), !1
                },
                forms_share_form_tooltip: async e => {
                    var t;
                    let {
                        currentUserSettingsStore: i
                    } = e;
                    return Promise.resolve(!(null == (t = i.getSettings()) ? void 0 : t.seen_forms_share_form_tooltip))
                },
                forms_add_conditional_logic_tooltip: async e => {
                    var t;
                    let {
                        currentUserSettingsStore: i
                    } = e;
                    return Promise.resolve(!(null == (t = i.getSettings()) ? void 0 : t.seen_forms_add_conditional_logic_tooltip))
                },
                customize_slug_tooltip: async e => {
                    let {
                        sidebarSpaceStore: t
                    } = e;
                    return Promise.resolve((0, i(28998).o)(t))
                },
                collection_add_item_button_tooltip: async e => {
                    let {
                        mainEditorCurrentBlockStore: t
                    } = e;
                    return Promise.resolve(t.canEdit())
                },
                ai_connector_outlook_sidebar_notification: async e => {
                    let {
                        assistantFeatureGateStore: t,
                        sidebarSpaceStore: n,
                        mainEditorCurrentBlockStore: a,
                        currentUserSettingsStore: o,
                        environment: s
                    } = e;
                    if ((0, i(876688).wd)().includes("outlook")) return !1;
                    let l = n.getSpaceId(),
                        d = await (0, i(226309).yk)({
                            environment: s,
                            spaceId: l
                        }),
                        c = (0, i(262166).rV)((0, i(192159).AI)(d), "enterprise"),
                        u = !!(0, i(471078).O)({
                            environment: s,
                            spaceId: n.id
                        });
                    return !!a.canRead() && !!n.canAdmin() && !!c && !!u && !!r({
                        currentUserSettingsStore: o,
                        minAccountAgeInDays: 8
                    }) && !!t.isOutlookSidebarNotificationEnabled() && !!t.isAiConnectorEnabled("outlook") && !!t.isAiEnabled() && !0
                },
                "ai_connector_google-calendar_sidebar_notification": async e => {
                    let {
                        assistantFeatureGateStore: t,
                        sidebarSpaceStore: n,
                        mainEditorCurrentBlockStore: a,
                        currentUserSettingsStore: o,
                        environment: s
                    } = e;
                    if ((0, i(876688).wd)().includes("google-calendar")) return !1;
                    let l = n.getSpaceId(),
                        d = await (0, i(226309).yk)({
                            environment: s,
                            spaceId: l
                        }),
                        c = (0, i(262166).rV)((0, i(192159).AI)(d), "business"),
                        u = !!(0, i(471078).O)({
                            environment: s,
                            spaceId: n.id
                        });
                    return !!a.canRead() && !!n.canAdmin() && !!c && !!u && !!r({
                        currentUserSettingsStore: o,
                        minAccountAgeInDays: 8
                    }) && !!t.isGoogleCalendarSidebarNotificationEnabled() && !!t.isAiConnectorEnabled("google-calendar") && !!t.isAiEnabled() && !0
                },
                ai_connector_asana_sidebar_notification: async e => {
                    let {
                        assistantFeatureGateStore: t,
                        sidebarSpaceStore: n,
                        mainEditorCurrentBlockStore: a,
                        currentUserSettingsStore: o,
                        environment: s
                    } = e;
                    if ((0, i(876688).wd)().includes("asana")) return !1;
                    let l = n.getSpaceId(),
                        d = await (0, i(226309).yk)({
                            environment: s,
                            spaceId: l
                        }),
                        c = (0, i(262166).rV)((0, i(192159).AI)(d), "business"),
                        u = !!(0, i(471078).O)({
                            environment: s,
                            spaceId: n.id
                        });
                    return !!a.canRead() && !!n.canAdmin() && !!c && !!u && !!r({
                        currentUserSettingsStore: o,
                        minAccountAgeInDays: 8
                    }) && !!t.isAsanaSidebarNotificationEnabled() && !!t.isAiConnectorEnabled("asana") && !!t.isAiEnabled() && !0
                },
                ai_connector_box_sidebar_notification: async e => {
                    let {
                        assistantFeatureGateStore: t,
                        sidebarSpaceStore: n,
                        mainEditorCurrentBlockStore: a,
                        currentUserSettingsStore: o,
                        environment: s
                    } = e;
                    if ((0, i(876688).wd)().includes("box")) return !1;
                    let l = n.getSpaceId(),
                        d = await (0, i(226309).yk)({
                            environment: s,
                            spaceId: l
                        }),
                        c = (0, i(262166).rV)((0, i(192159).AI)(d), "enterprise"),
                        u = !!(0, i(471078).O)({
                            environment: s,
                            spaceId: n.id
                        });
                    return !!a.canRead() && !!n.canAdmin() && !!c && !!u && !!r({
                        currentUserSettingsStore: o,
                        minAccountAgeInDays: 8
                    }) && !!t.isBoxSidebarNotificationEnabled() && !!t.isAiConnectorEnabled("box") && !!t.isAiEnabled() && !0
                },
                ai_connector_salesforce_sidebar_notification: async e => {
                    let {
                        assistantFeatureGateStore: t,
                        sidebarSpaceStore: n,
                        mainEditorCurrentBlockStore: a,
                        currentUserSettingsStore: o,
                        environment: s
                    } = e;
                    if ((0, i(876688).wd)().includes("salesforce")) return !1;
                    let l = n.getSpaceId(),
                        d = await (0, i(226309).yk)({
                            environment: s,
                            spaceId: l
                        }),
                        c = (0, i(262166).rV)((0, i(192159).AI)(d), "enterprise"),
                        u = !!(0, i(471078).O)({
                            environment: s,
                            spaceId: n.id
                        });
                    return !!a.canRead() && !!n.canAdmin() && !!c && !!u && !!r({
                        currentUserSettingsStore: o,
                        minAccountAgeInDays: 8
                    }) && !!t.isSalesforceSidebarNotificationEnabled() && !!t.isAiConnectorEnabled("salesforce") && !!t.isAiEnabled() && !0
                },
                ai_connector_confluence_sidebar_notification: async e => {
                    let {
                        assistantFeatureGateStore: t,
                        sidebarSpaceStore: n,
                        mainEditorCurrentBlockStore: a,
                        currentUserSettingsStore: o,
                        environment: s
                    } = e;
                    if ((0, i(876688).wd)().includes("confluence")) return !1;
                    let l = n.getSpaceId(),
                        d = !!(0, i(471078).O)({
                            environment: s,
                            spaceId: n.id
                        });
                    if (!a.canRead() || !n.canAdmin() || !d) return !1;
                    let c = await (0, i(226309).yk)({
                        environment: s,
                        spaceId: l
                    });
                    return !!(0, i(262166).rV)((0, i(192159).AI)(c), "enterprise") && !!r({
                        currentUserSettingsStore: o,
                        minAccountAgeInDays: 8
                    }) && !!t.isConfluenceSidebarNotificationEnabled() && !!t.isAiConnectorEnabled("confluence") && !!t.isAiEnabled()
                },
                workflow_template_installation: async e => {
                    let {
                        mainEditorCurrentBlockStore: t
                    } = e;
                    return Promise.resolve(t.canEdit())
                },
                organization_onboarding_modal: async e => {
                    let {
                        environment: t,
                        sidebarSpaceStore: n
                    } = e, a = (0, i(262166).bp)(n.getSubscriptionTier()), o = n.isReady() && n.canAdmin();
                    if (!a || !o) return !1;
                    let r = await t.api.callApi({
                        eventName: "getOrganizationOnboardingInfo",
                        environment: t,
                        data: {
                            spaceId: n.getSpaceId()
                        }
                    });
                    if ("success" === r.type) {
                        let e = r.data.result.onboardingStatus;
                        return "ineligible" !== e && "completed" !== e
                    }
                    return !1
                },
                get_notified_onboarding_tooltip: async ({
                    currentUserSettingsStore: e,
                    experimentStore: t
                }) => Promise.resolve(r({
                    currentUserSettingsStore: e,
                    minAccountAgeInDays: 8
                })),
                workflow_agent_header_tooltip: async e => Promise.resolve(!0),
                try_notion_for_work_sidebar_callout_revamped: async e => {
                    let {
                        currentUserSettingsStore: t,
                        sidebarSpaceStore: n
                    } = e, a = r({
                        currentUserSettingsStore: t,
                        minAccountAgeInDays: 90
                    }), o = (0, i(904434).FX)(), s = "education" === o && !(0, i(28998).o)(n);
                    return Promise.resolve(a && ("personal" === o || s) && "control" !== (i(986939).A.isMobile ? "control" : i(218744).default.getEligibleGroup({
                        experimentId: "b2c2b_sidebar_callout_flow",
                        defaultGroup: "control"
                    })))
                },
                notion_mail_launch_modal: async e => {
                    let {
                        environment: t,
                        experimentStore: n
                    } = e;
                    if (n.checkGate({
                            gateName: "2025_non_mwn_callout_modal_blackout"
                        })) return Promise.resolve(!1);
                    let a = await (0, i(206164)._)({
                            environment: t
                        }),
                        o = "msStore" === t.device.desktopTargetPlatform;
                    return !a && !o && n.checkGate({
                        gateName: "notion_mail_launch_modal"
                    })
                },
                notion_mail_launch_modal_2: async e => {
                    let {
                        environment: t,
                        experimentStore: n,
                        sidebarSpaceStore: a,
                        sidebarSpaceViewStore: o,
                        currentUserSettingsStore: r,
                        billingData: s
                    } = e;
                    if (n.checkGate({
                            gateName: "2025_non_mwn_callout_modal_blackout"
                        })) return Promise.resolve(!1);
                    let l = !1;
                    if (s && (0, i(192159).TB)(s)) {
                        let e = await (0, i(821587).PT)({
                            environment: t,
                            billingData: s,
                            spaceStore: a
                        });
                        if (e) {
                            let t = "type" in s && "admin" === s.type ? { ...s,
                                type: "admin"
                            } : void 0;
                            l = await (0, i(821587).iO)({
                                billingData: t,
                                businessTrialOffer: e,
                                modalLastShownAt: null == o ? void 0 : o.getSettingsStore().getKeyValue("business_trial_ending_modal_last_shown_at"),
                                modalShownTimes: null == o ? void 0 : o.getSettingsStore().getKeyValue("business_trial_ending_modal_shown_times")
                            })
                        }
                    }
                    let d = !!(a && r.id && (0, i(993077).dp)(a, r.id).isWorkspaceOwner());
                    return (!l || !d) && !await (0, i(206164)._)({
                        environment: t
                    }) && n.checkGate({
                        gateName: "notion_mail_launch_modal_2"
                    })
                },
                notion_mail_launch_2_callout: async e => {
                    let {
                        environment: t,
                        experimentStore: n,
                        sidebarSpaceViewStore: a
                    } = e, o = await (0, i(206164)._)({
                        environment: t
                    });
                    return !(!i(984858).sidebarExpandedStore.state || a.getNotionAppsHidden()) && !o && n.checkGate({
                        gateName: "notion_mail_launch_modal_2"
                    })
                },
                ai_for_work_announcement_modal: async e => {
                    let {
                        experimentStore: t,
                        assistantFeatureGateStore: i
                    } = e;
                    if (t.checkGate({
                            gateName: "2025_non_mwn_callout_modal_blackout"
                        })) return Promise.resolve(!1);
                    let n = t.checkGate({
                        gateName: "ai_for_work_modal",
                        disableExposureLogging: !0
                    });
                    return Promise.resolve("aifw" !== new URLSearchParams(window.location.search).get("origin") && i.isAiEnabled() && n)
                },
                passkey_nudge_modal: async e => {
                    var t, i;
                    let {
                        environment: n,
                        experimentStore: a,
                        spaceProfileSettingsStore: o
                    } = e;
                    if (a.checkGate({
                            gateName: "2025_non_mwn_callout_modal_blackout"
                        })) return Promise.resolve(!1);
                    let r = a.checkGate({
                        gateName: "passkey_nudges"
                    }) && !o.state.accountSettings.isSamlEnforced && o.state.accountSettings.hasPassword && !o.state.accountSettings.hasPasskeys;
                    return n.device.isAndroid && ((null == (t = n.RouterStore.state.route) ? void 0 : t.name) !== "nativeTab" || (null == (i = n.RouterStore.state.route) ? void 0 : i.tab) !== "settings") || !r ? Promise.resolve(!1) : Promise.resolve(!0)
                },
                meeting_notes_trial_celebration_modal: async e => Promise.resolve(!1),
                collaboration_callout: async e => {
                    let {
                        sidebarSpaceStore: t,
                        sidebarSpaceViewStore: n,
                        currentUserSettingsStore: a,
                        environment: o
                    } = e;
                    if (!t) return !1;
                    let r = !(0, i(471078).O)({
                            environment: o,
                            spaceId: t.id
                        }) && 0 === t.getSpacePages().length && "personal" === t.getPlanType(),
                        s = ((0, i(275619).I)({
                            environment: o,
                            spaceViewStore: n
                        }) ? ? []).length > 0,
                        {
                            allPagesStores: l
                        } = (0, i(500957).a)({
                            environment: o,
                            spaceViewStore: n,
                            userSettingsStore: a,
                            type: "shared"
                        }).state,
                        d = l.length > 0;
                    if (!r || !s || d || !await (0, i(655293).S)(o, {
                            name: "members",
                            spaceId: t.id,
                            userId: o.currentUser.id,
                            amount: 1
                        })) return Promise.resolve(!1);
                    let c = await (0, i(655293).S)(o, {
                            name: "contacts_imports_invite",
                            spaceId: t.id,
                            userId: o.currentUser.id
                        }),
                        u = t.canEditMembership();
                    return (0, i(178076).vC)({
                        canEditPermission: u,
                        isMobile: i(986939).A.isMobile,
                        isEnterprise: c
                    }) ? Promise.resolve(!0) : Promise.resolve(!1)
                },
                public_share_link_tooltip: async e => {
                    let {
                        mainEditorCurrentBlockStore: t
                    } = e;
                    return (0, i(544314).C)({
                        store: t
                    }).disabled || t.pathIsDead() || i(475097).default.isSidePeekOpen() || i(475097).default.isCenterPeekOpen() || !t.canAdmin() || t.getPermissionItems().find(e => (0, i(642157).vZ)(e)) ? Promise.resolve(!1) : Promise.resolve(!0)
                },
                sharing_contacts_import_tooltip: async e => {
                    let {
                        mainEditorCurrentBlockStore: t,
                        sidebarSpaceStore: n,
                        experimentStore: a
                    } = e;
                    if (!t.canAdmin()) return Promise.resolve(!1);
                    let o = n.getBotSettingsStore().getValue();
                    return (null == o ? void 0 : o.integration_restrictions) === "approved_only" && null != o && o.integration_approval_statuses && !o.integration_approval_statuses[i(49361).LF] ? Promise.resolve(!1) : Promise.resolve("control" !== a.getEligibleGroup({
                        experimentId: "microsoft_contacts_import",
                        defaultGroup: "control",
                        disableExposureLogging: !0
                    }))
                },
                copy_link_no_permissions_tooltip: async e => {
                    let {
                        mainEditorCurrentBlockStore: t
                    } = e;
                    return (0, i(544314).C)({
                        store: t
                    }).disabled || t.pathIsDead() || i(475097).default.isSidePeekOpen() || i(475097).default.isCenterPeekOpen() ? Promise.resolve(!1) : Promise.resolve(!0)
                },
                search_unified_find_result_tooltip: async e => {
                    let {
                        environment: t,
                        sidebarSpaceStore: n,
                        assistantFeatureGateStore: a
                    } = e, o = n.id, r = t.currentUser.id;
                    if (!o || !r || !a.isDeepFindEnabled()) return Promise.resolve(!1);
                    let s = await (0, i(628860).B)(t, {
                        name: "ai_usage",
                        spaceId: o,
                        userId: r,
                        amount: 1
                    });
                    return Promise.resolve((0, i(811656).e2)(s))
                },
                research_mode_chat_history_tooltip: async e => {
                    let {
                        environment: t,
                        sidebarSpaceStore: n,
                        assistantFeatureGateStore: a
                    } = e, o = n.getSpaceId(), r = t.currentUser.id;
                    if (!o || !r || !a.isResearchModeWelcomePageAiEnabled() || !a.isResearchModeChatHistoryCalloutEnabled()) return Promise.resolve(!1);
                    let s = await (0, i(628860).B)(t, {
                        name: "ai_research_mode",
                        spaceId: o,
                        userId: r,
                        amount: 1
                    });
                    return Promise.resolve((0, i(811656).e2)(s))
                },
                anyone_with_the_link_sidebar_callout: async e => {
                    let {
                        environment: t,
                        currentUserRootStore: n
                    } = e;
                    return !n || (0, i(799853).C)({
                        userRootStore: n
                    }) ? Promise.resolve(!1) : (0, i(505941).y)(t) ? Promise.resolve(!0) : Promise.resolve(!1)
                },
                meeting_notes_public_share_link_tooltip: async e => Promise.resolve(!1),
                research_mode_discoverability_tooltip: async e => {
                    let {
                        environment: t,
                        sidebarSpaceStore: n,
                        assistantFeatureGateStore: a
                    } = e, o = n.getSpaceId(), r = t.currentUser.id;
                    if (!o || !r || !a.isResearchModeDiscoverabilityTooltipEnabled() || !a.isResearchModeWelcomePageAiEnabled()) return Promise.resolve(!1);
                    let s = await (0, i(628860).B)(t, {
                        name: "ai_research_mode",
                        spaceId: o,
                        userId: r,
                        amount: 1
                    });
                    return Promise.resolve((0, i(811656).e2)(s) && 0 === s.limit.current)
                },
                onboarding_workflow_template_callout: async e => {
                    var t, a, o, r, s;
                    let {
                        currentUserSettingsStore: l
                    } = e;
                    if (null == (t = l.getSettings()) || null == (t = t.adoption_entry_points) ? void 0 : t.onboarding_workflow_template_sidebar_announcement) return Promise.resolve(!1);
                    let d = null == (a = l.getSettings()) ? void 0 : a.onboarding_workflow_template_blocks,
                        c = d && Object.keys(d).length > 0 && Object.values(d).some(e => e.length > 0),
                        u = null == (o = i(728372).AppStoreSidebarSpaceStore.state) ? void 0 : o.id;
                    if (!u) return Promise.resolve(!1);
                    let _ = null == d ? void 0 : d[u];
                    if (!c || !_) return Promise.resolve(!1);
                    let m = null == (r = l.getSettings()) ? void 0 : r.signup_time;
                    return m ? (s = {
                        signupTime: m,
                        age: "1_day"
                    }, new Date(Date.now()).getTime() - s.signupTime < n[s.age], Promise.resolve(!1)) : Promise.resolve(!1)
                },
                referral_announcement: async e => {
                    let {
                        environment: t,
                        sidebarSpaceStore: n,
                        billingData: a
                    } = e;
                    if (i(986939).A.isMobile || !n.getSpaceId() || !(0, i(226309).qc)(a)) return Promise.resolve(!1);
                    let o = (0, i(616579).j)({
                        environment: t,
                        spaceId: n.id
                    }) ? ? 1;
                    return (0, i(717274).VJ)({
                        memberCount: o,
                        billingData: a,
                        environment: t
                    }) ? Promise.resolve(!0) : Promise.resolve(!1)
                },
                expansion_offer_announcement: async e => {
                    let {
                        environment: t,
                        sidebarSpaceStore: n,
                        billingData: a
                    } = e;
                    if (i(986939).A.isMobile) return Promise.resolve(!1);
                    let o = n.getSpaceId();
                    if (!o || !(0, i(226309).qc)(a)) return Promise.resolve(!1);
                    let r = (0, i(616579).j)({
                        environment: t,
                        spaceId: n.id
                    }) ? ? 1;
                    return (0, i(423127).dM)({
                        memberCount: r,
                        billingData: a,
                        spaceId: o,
                        environment: t
                    }) ? Promise.resolve(!0) : Promise.resolve(!1)
                },
                expansion_offer_invite_members_announcement: async e => {
                    let {
                        environment: t,
                        sidebarSpaceStore: n,
                        billingData: a
                    } = e;
                    if (i(986939).A.isMobile || !n.getSpaceId()) return Promise.resolve(!1);
                    let {
                        shouldShow: o,
                        campaign: r
                    } = await (0, i(423127).TO)({
                        billingData: a,
                        spaceStore: n,
                        environment: t
                    });
                    return o && r && i(149402).w.setCampaign(r), Promise.resolve(o)
                },
                notion_calendar_existing_user_activation_callout: async e => {
                    let {
                        environment: t,
                        sidebarSpaceStore: n,
                        sidebarSpaceViewStore: a
                    } = e;
                    if (!i(984858).sidebarExpandedStore.state || a.getNotionAppsHidden()) return !1;
                    let o = await (0, i(338901).b)();
                    if (!o) return !1;
                    let r = a.getFirstJoinedSpaceTime();
                    return !!r && !(Math.abs(o.created_at - r) > 3e4) && (0, i(3161).m)(t, n)
                },
                share_referral_link_notification_tooltip: async e => {
                    let {
                        environment: t,
                        sidebarSpaceStore: n,
                        billingData: a
                    } = e;
                    if (i(986939).A.isMobile || !n.getSpaceId() || !(0, i(226309).qc)(a)) return Promise.resolve(!1);
                    let o = (0, i(616579).j)({
                        environment: t,
                        spaceId: n.id
                    }) ? ? 1;
                    return (0, i(717274).VJ)({
                        memberCount: o,
                        billingData: a,
                        environment: t
                    }) ? Promise.resolve(!0) : Promise.resolve(!1)
                },
                workspace_discovery_sidebar_callout: async e => {
                    let {
                        environment: t,
                        sidebarSpaceStore: n,
                        experimentStore: a,
                        currentUserSettingsStore: o
                    } = e;
                    if (!(null != n && n.id) || !t.currentUser.id || !(0, i(993077).dp)(n, t.currentUser.id).isMember() || (0, i(455221).e)(t, n.id) || !(0, i(204368).c)({
                            currentUserSettingsStore: o
                        })) return !1;
                    let r = await t.api.callMainCellApi({
                        eventName: "hasJoinableSpaces",
                        environment: t,
                        data: {}
                    });
                    return "failed" !== r.type && !!r.data.hasJoinableSpaces && "on" === a.getEligibleGroup({
                        experimentId: "workspace_discovery_callout_sidebar_v2",
                        defaultGroup: "control"
                    })
                },
                adoption_nux_second_session_database_learning_tooltip: async e => {
                    let {
                        environment: t,
                        experimentStore: n,
                        currentUserSettingsStore: a
                    } = e;
                    if (!n.checkGate({
                            gateName: "adoption_nux_education_content_delivery"
                        }) || i(986939).A.isMobile || !a || !a.getSettings()) return Promise.resolve(!1);
                    let o = (0, i(686378).g)({
                        userSettingsStore: a
                    });
                    if (o && void 0 !== o.last_delivered_at) return Promise.resolve(!1);
                    let r = n.getConfigKey("days_since_signup_education_content_delivery_override", "days") ? ? (0, i(996903).i)(a);
                    if (null == r || r > 7) return Promise.resolve(!1);
                    let s = function(e) {
                        let {
                            daysSinceSignup: t,
                            experimentStore: i
                        } = e, n = "control";
                        return t <= 6 && t >= 4 && (n = i.getEligibleGroup({
                            experimentId: "adoption_nux_education_database_date_range",
                            defaultGroup: "control",
                            enableEventTrailLogging: !0
                        })), n
                    }({
                        daysSinceSignup: r,
                        experimentStore: n
                    });
                    return ((0, i(24829).A)({
                        environment: t,
                        userSettingsStore: a,
                        metadata: {}
                    }), "control" !== s) ? Promise.resolve(!0) : Promise.resolve(!1)
                },
                aimn_offer_announcement: async e => {
                    let {
                        environment: t,
                        billingData: n,
                        sidebarSpaceStore: a
                    } = e, o = a.getSpaceId();
                    if (!o || (0, i(192159).Gm)(n)) return !1;
                    let r = await i(705820).P.awaitData(t, {
                        spaceId: o
                    });
                    return (null == r ? void 0 : r.includes("aimn")) ? ? !1
                },
                block_limit_offer_announcement: async e => {
                    let {
                        environment: t,
                        billingData: n
                    } = e, a = i(728372).AppStoreSidebarSpaceStore.state;
                    if (!(null != a && a.id) || (0, i(192159).Gm)(n)) return Promise.resolve(!1);
                    let o = await i(617995).I.awaitData(t, {
                        offerCampaign: "block_limit",
                        spaceId: null == a ? void 0 : a.id
                    });
                    return o ? Promise.resolve(!!o) : Promise.resolve(!!await i(617995).I.awaitData(t, {
                        offerCampaign: "annual_block_limit",
                        spaceId: null == a ? void 0 : a.id
                    }))
                },
                plus_block_limit_coupon_announcement_2: async e => {
                    let {
                        environment: t,
                        billingData: n,
                        sidebarSpaceStore: a
                    } = e;
                    return await (0, i(337592).j8)({
                        billingData: n,
                        environment: t,
                        sidebarSpaceStore: a,
                        offerCampaign: "plus_block_limit_coupon"
                    })
                },
                business_block_limit_coupon_announcement_2: async e => {
                    let {
                        environment: t,
                        billingData: n,
                        sidebarSpaceStore: a
                    } = e;
                    return await (0, i(337592).j8)({
                        billingData: n,
                        environment: t,
                        sidebarSpaceStore: a,
                        offerCampaign: "business_block_limit_coupon"
                    })
                },
                business_block_limit_trial_announcement_2: async e => {
                    let {
                        environment: t,
                        billingData: n,
                        sidebarSpaceStore: a
                    } = e;
                    return await (0, i(337592).j8)({
                        billingData: n,
                        environment: t,
                        sidebarSpaceStore: a,
                        offerCampaign: "business_cc_14d_block_limit"
                    })
                },
                post_business_trial_delayed_offer_announcement: async e => {
                    let t = i(728372).AppStoreSidebarSpaceStore.state,
                        n = null == t ? void 0 : t.id;
                    return n && await i(617995).I.awaitData(e.environment, {
                        offerCampaign: "business_trial_non_conversion_delayed",
                        spaceId: n
                    }) ? Promise.resolve(!0) : Promise.resolve(!1)
                },
                invite_members_sidebar_callout: async e => {
                    let {
                        environment: t,
                        sidebarSpaceStore: n,
                        experimentStore: a
                    } = e, o = t.currentUser.id;
                    if (!o || !(0, i(993077).dp)(n, o).isMember()) return Promise.resolve(!1);
                    let r = i(185995).default.getData(t, {
                            spaceId: n.getSpaceId()
                        }),
                        s = (0, i(278662).Jd)(r ? ? []);
                    if ((null == s ? void 0 : s.offer.type) === "trial" && (0, i(278662).w5)(s.offer.campaign)) return Promise.resolve(!1);
                    let l = i(54068).T.getData(t, {
                        spaceId: n.getSpaceId()
                    });
                    if (!l) return Promise.resolve(!1);
                    let d = (0, i(616579).j)({
                        environment: t,
                        spaceId: n.id
                    }) ? ? 1;
                    if ("invite" !== (0, i(776371).x)({
                            billingData: l,
                            memberCount: d
                        }) || !await (0, i(655293).S)(t, {
                            name: "members",
                            spaceId: n.getSpaceId(),
                            userId: t.currentUser.id,
                            amount: 1
                        })) return Promise.resolve(!1);
                    let {
                        canShowInviteMembers: c
                    } = (0, i(249583).Y)(n);
                    if (!c) return Promise.resolve(!1);
                    let u = a.getEligibleGroup({
                        experimentId: "invite_members_sidebar_callout_exposure",
                        defaultGroup: "control",
                        enableEventTrailLogging: !0
                    });
                    return "test50" === u ? Promise.resolve(.5 > Math.random()) : "test25" === u ? Promise.resolve(.25 > Math.random()) : Promise.resolve(!0)
                },
                trial_ai_info_modal: async e => {
                    let {
                        environment: t,
                        sidebarSpaceStore: n,
                        billingData: a
                    } = e, o = n.getSpaceId();
                    if (!(0, i(192159).TB)(a)) return Promise.resolve(!1);
                    let r = await i(185995).default.awaitData(t, {
                        spaceId: o
                    });
                    if (!r) return Promise.resolve(!1);
                    let s = (0, i(278662).Jd)(r);
                    if (!s || "trial" !== s.offer.type || !(0, i(875472).rM)(s)) return Promise.resolve(!1);
                    let l = i(218744).default.checkGate({
                            gateName: "custom_agents_business_trials"
                        }),
                        d = (0, i(44027).F$)({
                            openedFrom: s.entrypoint,
                            campaign: s.offer.campaign,
                            isCustomAgentsGateEnabled: l
                        }) && (0, i(875472).Si)(s) >= 1;
                    if (! function(e) {
                            let {
                                messageKey: t,
                                nDays: n,
                                currentTime: a = i(906745).DateTime.now()
                            } = e, o = i(728372).AppStoreCurrentUserSettingsStore.state, r = i(728372).AppStoreSidebarSpaceViewStore.state, s = null == o ? void 0 : o.getSettings(), l = ((null == s ? void 0 : s.callout_dismissal_timestamps) ? ? []).find(e => e.name === t), d = null == r ? void 0 : r.getSettings(), c = ((null == d ? void 0 : d.callout_dismissal_timestamps) ? ? []).find(e => e.name === t), u = Math.max((null == l ? void 0 : l.timestamp) ? ? 0, (null == c ? void 0 : c.timestamp) ? ? 0);
                            if (!u) return !0;
                            let _ = a.toMillis();
                            return (0, i(362008).Mn)(u, _) >= n
                        }({
                            messageKey: "trial_ai_info_modal",
                            nDays: i(118999).ef,
                            currentTime: (0, i(192159).DS)(a)
                        })) return !1;
                    if (d) return Promise.resolve(!0);
                    if (!(0, i(44027).tY)(s.entrypoint)) return Promise.resolve(!1);
                    let c = i(218744).default.getEligibleGroup({
                        experimentId: "trial_ai_info_modal",
                        parameter: "start_time_string",
                        defaultGroup: "0",
                        disableExposureLogging: !0
                    });
                    if ("string" != typeof c || "0" === c) return Promise.resolve(!1);
                    let u = new Date(c).getTime();
                    return isNaN(u) || s.startDateMs < u ? Promise.resolve(!1) : Promise.resolve("on" !== i(218744).default.getEligibleGroup({
                        experimentId: "trial_ai_info_modal",
                        defaultGroup: "control"
                    }))
                },
                dummy_toast: async e => Promise.resolve(!1),
                business_coupon_eligibility_midpoint_callout: async ({
                    environment: e,
                    sidebarSpaceStore: t,
                    billingData: n
                }) => {
                    let a = await (0, i(124094).E)(e, null == t ? void 0 : t.id, "post_business_trial_coupon_callout");
                    if (!a) return Promise.resolve(!1);
                    let o = i(218744).default.getConfig({
                            configName: "offers_metadata"
                        }),
                        r = (0, i(97700).n)({
                            campaign: a,
                            space: t.getModel(),
                            billingData: n,
                            offerMetadata: o
                        });
                    return r ? Promise.resolve((0, i(763230).r4)({
                        value: r,
                        startValue: 2,
                        endValue: 5
                    })) : Promise.resolve(!1)
                },
                business_coupon_eligibility_final_callout: async ({
                    environment: e,
                    sidebarSpaceStore: t,
                    billingData: n
                }) => {
                    let a = await (0, i(124094).E)(e, null == t ? void 0 : t.id, "post_business_trial_coupon_callout");
                    if (!a) return Promise.resolve(!1);
                    let o = i(218744).default.getConfig({
                        configName: "offers_metadata"
                    });
                    return Promise.resolve(1 === (0, i(97700).n)({
                        campaign: a,
                        space: t.getModel(),
                        billingData: n,
                        offerMetadata: o
                    }))
                },
                aimn_exploding_offer_nudge_d3: ({
                    sidebarSpaceStore: e,
                    billingData: t
                }) => Promise.resolve(s({
                    sidebarSpaceStore: e,
                    billingData: t,
                    targetDaysRemaining: 3
                })),
                aimn_exploding_offer_nudge_d1: ({
                    sidebarSpaceStore: e,
                    billingData: t
                }) => Promise.resolve(s({
                    sidebarSpaceStore: e,
                    billingData: t,
                    targetDaysRemaining: 1
                })),
                database_nudge_on_create_todo: async ({
                    environment: e,
                    recentEventsStore: t,
                    userLifecycleProfileStore: n
                }) => {
                    let a = (0, i(543346).cz)({
                            userLifecycleProfileStore: n,
                            recentEventsStore: t
                        }),
                        o = n.getProfile();
                    return Promise.resolve((0, i(686811).k)({
                        environment: e,
                        analyticsEventCounts: a,
                        lifecycleProfile: o
                    }))
                },
                database_nudge_on_create_property: async ({
                    environment: e,
                    recentEventsStore: t,
                    userLifecycleProfileStore: n
                }) => {
                    let a = (0, i(543346).cz)({
                            userLifecycleProfileStore: n,
                            recentEventsStore: t
                        }),
                        o = n.getProfile();
                    return Promise.resolve((0, i(686811).X)({
                        environment: e,
                        analyticsEventCounts: a,
                        lifecycleProfile: o
                    }))
                },
                consultant_launch_modal: async ({
                    experimentStore: e
                }) => Promise.resolve("on" === e.getEligibleGroup({
                    experimentId: "marketplace_consultant_launch_modal_experiment"
                }) && !!e.getEligibleGroup({
                    experimentId: "marketplace_consultant_launch_modal_autotune"
                })),
                agent_business_trial_announcement: e => Promise.resolve(!1),
                setup_sessions_instant_booking: async e => {
                    var t;
                    let {
                        currentUserSettingsStore: i,
                        experimentStore: n
                    } = e;
                    return !n.checkGate({
                        gateName: "setup_sessions_instant_booking"
                    }) || (null == (t = i.getSettings()) ? void 0 : t.setup_session_booked) ? Promise.resolve(!1) : Promise.resolve(!0)
                },
                custom_agents_launch_modal: async ({
                    experimentStore: e,
                    sidebarSpaceStore: t
                }) => {
                    if (i(986939).A.isMobile || (0, i(916804).I)(t)) return Promise.resolve(!1);
                    let n = !!(null == t ? void 0 : t.getZeroRetentionEnabled()),
                        a = e.checkGate({
                            gateName: "custom_agents_server"
                        }),
                        o = e.checkGate({
                            gateName: "custom_agent_launch_modal"
                        });
                    if (n || !a || !o) return Promise.resolve(!1);
                    let r = t.isAiEnabledOnSpace() ? ? !1,
                        s = !!t.canAdmin();
                    return Promise.resolve(r || s)
                },
                can_create_pages_in_collection_tooltip: async e => {
                    var t;
                    let {
                        currentUserSettingsStore: i
                    } = e;
                    return Promise.resolve(!(null == (t = i.getSettings()) ? void 0 : t.seen_can_create_pages_in_collection_tooltip))
                },
                aimn_live_collab_tooltip: e => Promise.resolve(!0),
                content_reskin_v2_announcement: async e => {
                    let {
                        experimentStore: t,
                        environment: n,
                        sidebarSpaceStore: a,
                        sidebarSpaceViewStore: r,
                        currentUserSettingsStore: s
                    } = e;
                    if (!t.checkGate({
                            gateName: "content_reskin_v2"
                        })) return Promise.resolve(!1);
                    let l = !!(0, i(471078).O)({
                            environment: n,
                            spaceId: a.id
                        }),
                        {
                            allPagesStores: d
                        } = (0, i(500957).a)({
                            environment: n,
                            spaceViewStore: r,
                            userSettingsStore: s,
                            type: "shared"
                        }).state,
                        c = n.currentUser.id;
                    return c ? l ? Promise.resolve(d.some(e => o(e, c))) : Promise.resolve([...(0, i(275619).I)({
                        environment: n,
                        spaceViewStore: r
                    }) ? ? [], ...d].filter(e => o(e, c)).length > 3) : Promise.resolve(!1)
                }
            }
        },
        97700: (e, t, i) => {
            i.d(t, {
                d: () => a,
                n: () => o
            });
            let n = {
                aimn: 7
            };

            function a(e, t) {
                var i;
                return "business_trial_non_conversion" === e || void 0 !== n[e] && (null == t || null == (i = t.getSettings()) || null == (i = i.offers_metadata) || null == (i = i[e]) ? void 0 : i.modal_seen_at) !== void 0
            }

            function o(e) {
                var t, a, o;
                let r, s = n[e.campaign],
                    l = null == (t = e.space) || null == (t = t.getSettings()) || null == (t = t.offers_metadata) || null == (t = t[e.campaign]) ? void 0 : t.modal_seen_at;
                if (void 0 !== s && void 0 !== l) return Math.max(0, s - Math.max(0, (0, i(362008).Mn)(l, Date.now())));
                if ("business_trial_non_conversion" !== e.campaign) return;
                let d = null == (a = e.space) ? void 0 : a.getSetting("biz_offer_aversion_rejected_time");
                if (!d) return;
                let c = e.billingData ? (0, i(192159).DS)(e.billingData).toMillis() : Date.now(),
                    u = (0, i(362008).Mn)(d, c),
                    _ = ("number" == typeof(r = null == (o = e.offerMetadata) ? void 0 : o.post_biz_trial_coupon_eligible_days) ? r : 7) - u;
                return _ <= 0 ? 0 : _
            }
        },
        106023: (e, t, i) => {
            i.d(t, {
                z: () => n
            });
            let n = i(546605).Store.createValue({
                status: "uninitialized",
                isEligible: !1,
                preferredSwitchableLocale: void 0,
                eligibilityReason: void 0
            });
            i(202146).exposeDebugValue("LanguageSwitchEligibilityStore", n)
        },
        126592: (e, t, i) => {
            i.d(t, {
                e: () => n
            });
            async function n(e) {
                if (null !== i(17118).l.state) return i(17118).l.state;
                let t = e.device.os;
                if ("mac" !== t && "windows" !== t) return !1;
                let n = await e.api.callApi({
                    eventName: "getDesktopAppRegistration",
                    environment: e,
                    data: {
                        os: t
                    }
                });
                if ("failed" === n.type) return i(773352).log({
                    level: "error",
                    from: "getDesktopAppRegistered",
                    type: "api:getDesktopAppRegistration",
                    error: n.error
                }), !1;
                let a = n.data.isRegistered || !!n.data.isRegistered30Day;
                return i(17118).l.setState(a), a
            }
        },
        178076: (e, t, i) => {
            function n(e) {
                let {
                    focus: t
                } = e;
                return (0, i(960253).I)(() => ({
                    searchBar: {
                        padding: 16
                    },
                    inputStyle: {
                        minWidth: 60,
                        width: "auto",
                        borderStartStartRadius: 4,
                        borderStartEndRadius: 4,
                        fontSize: 14,
                        fontWeight: i(699422).Wy.regular
                    },
                    inputOuterStyle: {
                        padding: 6,
                        borderRadius: 6,
                        height: 20,
                        alignItems: "center",
                        minHeight: 32,
                        background: i(632079).Tj.palette.gray[30],
                        ...t && {
                            background: "none"
                        }
                    }
                }), [t])
            }
            i.d(t, {
                Io: () => l,
                Mg: () => c,
                XQ: () => a,
                ce: () => r,
                dE: () => d,
                uj: () => o,
                vC: () => u,
                vG: () => n,
                vS: () => s
            }), i(944114), i(898992), i(803949);
            let a = {
                    selectAllSectionStyle: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        paddingTop: 8,
                        paddingInlineEnd: 0,
                        paddingBottom: 16,
                        paddingInlineStart: 0
                    },
                    sectionMenuItem: {
                        paddingTop: 12,
                        paddingInlineEnd: 0,
                        paddingBottom: 0,
                        paddingInlineStart: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2
                    },
                    dividerStyle: {
                        margin: "0px 16px"
                    },
                    dividerInnerStyle: {
                        borderBottom: `1px solid ${i(632079).Tj.border.secondary}`
                    },
                    selectAllStyle: {
                        display: "flex",
                        fontSize: 14,
                        color: i(632079).Tj.text.primary
                    },
                    totalCountsStyle: {
                        paddingInlineStart: 3,
                        fontSize: 14,
                        color: i(632079).Tj.text.tertiary
                    }
                },
                o = {
                    footerStyle: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: 60,
                        paddingTop: 12,
                        paddingInlineEnd: 16,
                        paddingBottom: 16,
                        paddingInlineStart: 16,
                        borderTop: `1px solid ${i(632079).Tj.border.secondary}`
                    }
                },
                r = {
                    labelContainer: {
                        display: "flex",
                        alignItems: "center",
                        color: i(632079).oZ.uiLightBlack,
                        gap: 6
                    },
                    importListButton: {
                        height: 28,
                        borderRadius: 4,
                        border: void 0,
                        width: "100%"
                    },
                    importListButtonContainer: {
                        padding: "0 6px",
                        alignItems: "center"
                    }
                },
                s = {
                    topContainer: {
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        height: 40,
                        padding: "0 16px",
                        borderBottom: `1px solid ${i(632079).Tj.border.secondary}`
                    },
                    sendInviteLabel: {
                        color: i(632079).Tj.text.primary,
                        fontSize: 14,
                        fontWeight: i(699422).Wy.medium,
                        textAlign: "start",
                        verticalAlign: "top"
                    }
                };

            function l(e, t) {
                return (0, i(960253).I)(() => ({
                    buttonContainer: {
                        padding: "0 8px",
                        ...t
                    },
                    button: {
                        height: 32,
                        borderRadius: 4,
                        border: `1px solid ${i(632079).Tj.border.primary}`,
                        ...e
                    }
                }), [e, t])
            }

            function d(e) {
                let {
                    filteredImportedContacts: t,
                    inviteTargetsStore: i
                } = e, n = i.state.inviteTargets.length;
                return 0 !== n && n === t.length
            }

            function c(e) {
                let {
                    filteredImportedContacts: t
                } = e, i = {};
                return t.forEach((e, t) => {
                    let n = e.value.email[0].toUpperCase(),
                        a = /^[A-Za-z]$/.test(n) ? n : "#";
                    i[a] || (i[a] = []), i[a].push(e)
                }), i
            }

            function u(e) {
                let {
                    canEditPermission: t,
                    isMobile: i,
                    isEnterprise: n
                } = e;
                return !i && !n && !!t
            }
        },
        249583: (e, t, i) => {
            i.d(t, {
                Y: () => n
            });

            function n(e) {
                if (!e || (0, i(916804).I)(e)) return {
                    canShowInviteMembers: !1,
                    canRequestMembers: !1
                };
                let t = !e.canEditMembership() && !e.getDisableMembershipRequests() && (0, i(724175).x)();
                return {
                    canShowInviteMembers: e.canEditMembership() || t,
                    canRequestMembers: t
                }
            }
        },
        319020: (e, t, i) => {
            i.d(t, {
                G: () => a,
                _: () => n
            });
            let n = .7,
                a = 1
        },
        339496: (e, t, i) => {
            i.d(t, {
                h: () => n
            });

            function n({
                blockId: e,
                setting: t
            }) {
                var a;
                let {
                    publicPageData: o
                } = i(686494).A.state;
                if ((null == o ? void 0 : o.pageId) === e) return null == (a = o.securitySettings) ? void 0 : a[t]
            }
        },
        544314: (e, t, i) => {
            i.d(t, {
                C: () => n
            });

            function n({
                store: e
            }) {
                let t = (0, i(339496).h)({
                    blockId: e.id,
                    setting: "publicAccess"
                });
                if ((0, i(722371).O9)(t)) return t;
                let a = (0, i(974410).f)(e),
                    o = (0, i(297311).U)(e);
                return o ? {
                    disabled: !!o.getDisablePublicAccess(),
                    disabledBy: "team"
                } : !o && null != a && a.getDisablePublicAccess() ? {
                    disabled: !0,
                    disabledBy: "space"
                } : {
                    disabled: !1
                }
            }
        },
        686378: (e, t, i) => {
            i.d(t, {
                g: () => n
            });

            function n(e) {
                var t;
                let {
                    userSettingsStore: i
                } = e;
                if (i) return null == (t = i.getSettings()) ? void 0 : t.nux_database_learning_metadata
            }
        },
        686811: (e, t, i) => {
            function n(e) {
                return !!e.analyticsEventCounts && (0, i(543346).H0)({ ...e,
                    configKey: "databaseNewbie"
                })
            }

            function a(e) {
                return !!e.analyticsEventCounts && (0, i(543346).H0)({ ...e,
                    configKey: "databaseViewNewbie"
                })
            }
            i.d(t, {
                X: () => a,
                k: () => n
            })
        },
        776371: (e, t, i) => {
            function n(e) {
                let {
                    billingData: t,
                    memberCount: n
                } = e, a = (0, i(192159).AI)(t), o = (0, i(262166).dL)(a), r = (0, i(262166).sP)(a);
                return o && n < 5 ? "invite" : o ? "upgrade" : n < 5 && !r ? "invite" : "none"
            }

            function a(e) {
                let t = (0, i(533992).v3)(),
                    a = (0, i(226309).lh)({
                        spaceId: e
                    }),
                    o = (0, i(855361).S)({
                        environment: t,
                        spaceId: e
                    }) ? ? 1;
                return a ? n({
                    billingData: a,
                    memberCount: o
                }) : "none"
            }
            i.d(t, {
                w: () => a,
                x: () => n
            })
        },
        785419: (e, t, i) => {
            let n;
            i.d(t, {
                v: () => a
            });

            function a(e, t) {
                return n ? ? (0, i(455221).e)(e, t)
            }(0, i(887789).exposeDebugEnvironmentValue)("getAssistantOnboardingDebugInfo", e => () => {
                let t = i(728372).AppStoreCurrentUserSettingsStore.state,
                    n = i(728372).AppStoreSidebarSpaceStore.state,
                    o = null == t ? void 0 : t.getSettings();
                if (!o || !n) return;
                let {
                    ai_qna_intro_onboarding_phase: r,
                    ai_assistant_onboarding_phase: s,
                    ai_assistant_onboarding_phase_last_set_at: l,
                    ai_assistant_tooltips_onboarding_phase: d,
                    ai_sales_assisted_extra_notification_seen_at: c,
                    last_exposed_to_ai_qna_at: u,
                    qna_reminders_shown_at: _
                } = o;
                return {
                    isSalesAssisted: a(e, n.id),
                    relevantUserSettings: {
                        ai_qna_intro_onboarding_phase: r,
                        ai_assistant_onboarding_phase: s,
                        ai_assistant_tooltips_onboarding_phase: d,
                        ai_assistant_onboarding_phase_last_set_at: l,
                        ai_sales_assisted_extra_notification_seen_at: c,
                        last_exposed_to_ai_qna_at: u,
                        qna_reminders_shown_at: _
                    }
                }
            })
        }
    }
]);