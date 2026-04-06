"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [78288], {
        6904: (e, t, a) => {
            a.d(t, {
                D: () => i
            }), a(898992), a(803949);
            var n = a(296540);

            function i({
                unpersistedInMemoryRecordCache: e,
                userId: t
            }) {
                let o = (0, n.useCallback)(({
                    perform: n
                }) => {
                    let i = new(a(651814)).Z({
                            deadlockTimeoutMs: a(377796).DEADLOCK_WARNING_TIMEOUT_MS
                        }),
                        o = n(i),
                        r = a(412951).RecordMap.create();
                    for (let n of (i.stores.forEach(e => {
                            let t = e.getRecordModel(e.pointer);
                            t && r.addModel(t)
                        }), (0, a(182830).applyOperationsToRecordMap)({
                            operations: i.operations,
                            recordMap: r,
                            updateOnly: !1
                        }), r)) {
                        let {
                            model: a,
                            pointer: i
                        } = n;
                        e.setModelAndRole({
                            pointer: i,
                            userId: t
                        }, a, "editor")
                    }
                    return e.emitAll(), {
                        performResult: o,
                        serverCommitResult: Promise.resolve(void 0),
                        transactionId: i.id
                    }
                }, [e, t]);
                return (0, n.useMemo)(() => ({
                    createAndCommit: o
                }), [o])
            }
        },
        63974: (e, t, a) => {
            a.d(t, {
                o: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.77 1.79 12.45 12.42",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M8.708 1.978a.625.625 0 0 0-.884.884l.914.913H3.84c-1.14 0-2.065.925-2.065 2.065v4.78a.625.625 0 0 0 1.25 0V5.84c0-.45.365-.815.815-.815h4.898l-.914.913a.625.625 0 0 0 .884.884l1.98-1.98a.625.625 0 0 0 0-.884zM13.6 4.755a.625.625 0 0 0-.625.625v4.78c0 .45-.365.815-.815.815H7.263l.913-.913a.625.625 0 0 0-.884-.884l-1.98 1.98a.625.625 0 0 0 0 .884l1.98 1.98a.625.625 0 1 0 .884-.884l-.913-.913h4.897c1.14 0 2.065-.924 2.065-2.065V5.38a.625.625 0 0 0-.625-.625"
                    })
                },
                i = (0, a(104509).wt)("arrowSquareLeftRightSmall", n, "small")
        },
        90416: (e, t, a) => {
            a.d(t, {
                CT: () => r,
                K_: () => s,
                Mi: () => n,
                uv: () => o,
                zL: () => l,
                zj: () => i
            });
            let n = ["database_agents", "database_agent_autofill_button", "database_agent_run_dropdown", "database_agent_fill_rows", "database_agent_fill_all", "database_agent_preview_generate", "database_agent_edit_modal_toggle", "database_agent_setup_menu_item"],
                i = ["ai_unified_find_search_modal", "ai_unified_find_chat", "ai_chat_with_model", "ai_assistant_limit_in_app", "ai_autofill_fill_all_pages", "ai_autofill_bulk_fill", "ai_autofill_on_page_edit", "ai_autofill_try_on_view", "ai_limit_in_app", "ai_limit_property_autofill", "ai_limit_sidebar", "ai_limit_settings", "ai_limited_qna_no_results", "ai_limited_qna_upsell_action_button", "ai_qna_waitlist", "ai_qna_limit_in_app", "ai_upsell_notice", "ai_upsell_settings", "ai_page_translation", "ai_plans_page", "ai_formulas"],
                o = ["ai_research_mode"],
                r = ["ai_meeting_notes", "ai_meeting_notes_custom_transcript_retention"],
                l = ["ai_agent"],
                s = ["custom_agent", "custom_agents_sidebar", "new_custom_agents_sidebar", "new_custom_agents_library", "slippery_slope_flyout_menu", "custom_agents_launch_modal", "custom_agents_gift_box", "marketplace_agents"]
        },
        160184: (e, t, a) => {
            a.d(t, {
                U: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M11.904 3.28a6.125 6.125 0 1 0-1.648 10.415.625.625 0 1 0-.46-1.163 4.875 4.875 0 1 1 2.808-2.93c-.102.294-.43.523-.878.523a.87.87 0 0 1-.872-.872V5.705a.625.625 0 0 0-1.242-.098 3.04 3.04 0 0 0-1.746-.527c-.792 0-1.542.277-2.095.825-.557.55-.871 1.332-.871 2.256s.313 1.714.864 2.276 1.3.858 2.102.858c.8 0 1.55-.294 2.104-.85a2.12 2.12 0 0 0 1.756.93c.835 0 1.738-.441 2.058-1.361a6.125 6.125 0 0 0-1.88-6.734M6.65 6.793c.294-.29.715-.463 1.216-.463.5 0 .929.173 1.228.466.296.289.508.735.508 1.365 0 .631-.213 1.095-.515 1.4-.303.306-.73.484-1.221.484-.49 0-.91-.178-1.209-.482-.296-.303-.507-.767-.507-1.402 0-.633.21-1.08.5-1.368"
                    })
                },
                i = (0, a(104509).wt)("atSmall", n, "small")
        },
        176020: (e, t, a) => {
            function n(e) {
                if (e.integration_id !== a(49361).zG) throw "Cannot render account for integration.";
                let t = /(.+) - (.+)/.exec(e.account_name);
                if (!t) return {
                    accountName: e.account_name
                };
                let [, n, i] = t;
                return {
                    organizationName: n,
                    accountName: i
                }
            }

            function i(e) {
                return a(993189).Bj6.fromValue(a(832375).AsL, e).getSlackWorkspaceId()
            }

            function o(e, t) {
                return t ? e.filter(e => {
                    let a = i(e);
                    return !!a && t(a)
                }) : e
            }

            function r(e, t = "") {
                let a = {};
                for (let i of e) {
                    let {
                        accountName: e,
                        organizationName: o
                    } = n(i);
                    (function(e) {
                        let {
                            accountName: t,
                            organizationName: a,
                            query: n
                        } = e;
                        if (0 === n.length) return !0;
                        let i = t.toLocaleLowerCase().indexOf(n.trim().toLocaleLowerCase()) >= 0,
                            o = !!a && a.toLocaleLowerCase().indexOf(n.trim().toLocaleLowerCase()) >= 0;
                        return i || o
                    })({
                        query: t,
                        accountName: e,
                        organizationName: o
                    }) && (a[e] || (a[e] = []), a[e].push({
                        externalAuthentication: i,
                        workspaceName: o
                    }))
                }
                return a
            }
            a.d(t, {
                Dy: () => i,
                Os: () => r,
                l$: () => o,
                qO: () => n
            }), a(944114), a(898992), a(354520)
        },
        199572: (e, t, a) => {
            a.d(t, {
                f: () => n
            });

            function n(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e;
                return (0, a(682985).K8)(() => {
                    if (n) return (0, a(770694).C)({
                        environment: t,
                        spaceId: n
                    })
                }, [t, n])
            }
        },
        200261: (e, t, a) => {
            a.d(t, {
                A: () => o
            }), a(296540);
            var n = a(474848);
            let i = {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                },
                o = function() {
                    return (0, n.jsx)(a(636518).Ay, {
                        title: (0, n.jsx)(a(517334).k, {
                            size: "default"
                        }),
                        titleStyle: i
                    })
                }
        },
        302465: (e, t, a) => {
            a.d(t, {
                FQ: () => s,
                Yl: () => i,
                eH: () => o,
                hy: () => l,
                oB: () => r,
                wk: () => n
            });
            let n = "For security or quality reasons, this connection is not available at this time.";

            function i(e) {
                let t = e.trim(),
                    n = (0, a(758654).bk)(t);
                if (!n) return t.toLowerCase();
                let i = n.pathname.replace(/\/+$/, "") || "/";
                return n.pathname = i, n.toString().toLowerCase()
            }

            function o(e) {
                let t = (0, a(758654).bk)(e);
                return !!t && (t.hostname.endsWith("mcp.mail.notion.so") && "/mail" === t.pathname || t.hostname.endsWith("mcp.mail.dev.notion.so") && "/mail" === t.pathname || t.hostname.endsWith("mcp.mail.stg.notion.so") && "/mail" === t.pathname || "localhost" === t.hostname && "3000" === t.port && "/mail" === t.pathname || "localhost" === t.hostname && "6010" === t.port && "/mail" === t.pathname)
            }

            function r(e) {
                let t = (0, a(758654).bk)(e);
                if (!t) return !1;
                let n = t.hostname.toLowerCase();
                return "notion.so" === n || n.endsWith(".notion.so") || "notion.com" === n || n.endsWith(".notion.com")
            }

            function l(e) {
                return o(e)
            }

            function s(e) {
                let t = (0, a(758654).bk)(e);
                return !!t && "api.githubcopilot.com" === t.hostname.toLowerCase()
            }
        },
        305042: (e, t, a) => {
            a.d(t, {
                b: () => i,
                k: () => o
            }), a(16280);
            var n = a(296540);

            function i() {
                return (0, n.useContext)(a(348718).A)
            }

            function o() {
                let {
                    automationStore: e
                } = (0, a(605263).q8)(), {
                    collectionStore: t,
                    ...n
                } = i(), o = (0, a(682985).K8)(() => {
                    if (!(null != e && e.isTriggerType("event") || null != e && e.isTriggerType("recurrence"))) throw Error("automationStore is wrong type. Is this called in the wrong type of automation?");
                    return e
                }, [e]);
                if (!t) throw Error("collectionStore is undefined. Is this rendered inside an AutomationEditorContext.Provider?");
                return { ...n,
                    collectionStore: t,
                    automationStore: o
                }
            }
        },
        308292: (e, t, a) => {
            a.d(t, {
                AL: () => n,
                Q6: () => o,
                vt: () => i
            }), a(898992), a(672577);
            let n = {
                autoCompleteSprints: !1,
                actionConfig: {
                    complete_sprint_action: "complete_sprint_and_move_incomplete_tasks_to_next_sprint"
                },
                recurrenceConfig: {
                    interval: 2,
                    weekdays: ["MO"]
                }
            };

            function i(e) {
                let {
                    eventTracker: t,
                    properties: a
                } = e;
                t.DO_NOT_USE_commonTrackEvent({
                    eventName: "complete_sprint_action",
                    properties: a
                })
            }

            function o(e, t) {
                var n;
                return null == (n = t.groups) || null == (n = n.find(t => t.id === a(11448).nl || (null == t ? void 0 : t.name) === a(998833).P0 || (null == t ? void 0 : t.name) === e.formatMessage(a(998833).oz.statusGroupNameComplete))) ? void 0 : n.name
            }
        },
        320500: (e, t, a) => {
            a.d(t, {
                E: () => i
            }), a(296540);
            var n = a(474848);

            function i({
                progressPercentage: e,
                maxValue: t,
                currentValue: o,
                ...r
            }) {
                let l = (0, a(109939).tz)(),
                    s = o ? o / (t ? ? 100) * 100 : Math.round(Math.max(0, Math.min(100, e ? ? 0)));
                return (0, n.jsx)(a(4458).fI, {
                    inline: !0,
                    contentEditable: !1,
                    role: "progressbar",
                    "aria-valuenow": o || e,
                    "aria-valuemin": 0,
                    "aria-valuemax": t ? ? 100,
                    "aria-label": l.formatMessage({
                        id: "loadingProgressRing.progressLabel",
                        defaultMessage: "Loading progress: {percentage}%"
                    }, {
                        percentage: s
                    }),
                    children: (0, n.jsx)(a(523262).Y, {
                        progressPercentage: s,
                        ...r
                    })
                })
            }
        },
        322662: (e, t, a) => {
            a.d(t, {
                Ee: () => u,
                J1: () => o,
                oG: () => r
            }), a(296540);
            var n = a(474848);
            let i = {
                define_variables_automation_action: {
                    launchDateMs: 17277408e5,
                    expiryDateMs: 1738368e6
                },
                passkey_setting: {
                    launchDateMs: 1729101727e3,
                    expiryDateMs: 1738432882e3
                },
                publish_site_settings_embed_page: {
                    launchDateMs: 1736208e6,
                    expiryDateMs: 1743984e6
                },
                generalized_recurrence_automations: {
                    launchDateMs: 17365536e5,
                    expiryDateMs: 17460576e5
                },
                ai_page_translation_topbar_more_action: {
                    launchDateMs: 0x1953afaf7be,
                    expiryDateMs: 17434656e5
                },
                verification: {
                    launchDateMs: 1740096e6,
                    expiryDateMs: 174375e7
                },
                notion_ai_workspace_settings: {
                    launchDateMs: 17424288e5,
                    expiryDateMs: 17550432e5
                },
                notion_mail_launch_modal: {
                    launchDateMs: 17446752e5,
                    expiryDateMs: 17525376e5
                },
                notion_mail_launch_modal_2: {
                    launchDateMs: 17446752e5,
                    expiryDateMs: 17578944e5
                },
                ui_doc_example: {
                    launchDateMs: 19249056e5,
                    expiryDateMs: 19249056e5
                },
                salesforce_sync_unfurling_option: {
                    launchDateMs: 17443296e5,
                    expiryDateMs: 17538336e5
                },
                personal_home_sidebar_item: {
                    launchDateMs: 17470944e5,
                    expiryDateMs: 175392e7
                },
                collection_property_reminder: {
                    launchDateMs: 1751958e6,
                    expiryDateMs: 17552628e5
                },
                get_notified_onboarding_tooltip: {
                    launchDateMs: 17520228e5,
                    expiryDateMs: 17591904e5
                },
                conditional_color_feature: {
                    launchDateMs: 17537472e5,
                    expiryDateMs: 17563392e5
                },
                web_clipper_new_tab_settings: {
                    launchDateMs: 17471808e5,
                    expiryDateMs: 18149184e5
                },
                my_meetings: {
                    launchDateMs: 17578944e5,
                    expiryDateMs: 17657568e5
                },
                workspace_connections_tab: {
                    launchDateMs: 17578944e5,
                    expiryDateMs: 18149184e5
                },
                external_agents_tab: {
                    launchDateMs: 17578944e5,
                    expiryDateMs: 18149184e5
                },
                permissions_tab: {
                    launchDateMs: 17578944e5,
                    expiryDateMs: 18149184e5
                },
                library_sidebar: {
                    launchDateMs: 17705952e5,
                    expiryDateMs: 17730144e5
                }
            };

            function o({
                style: e
            }) {
                let t = (0, a(960253).I)(() => ({
                    badge: {
                        letterSpacing: 0,
                        whiteSpace: "nowrap",
                        width: "fit-content",
                        ...e
                    }
                }), [e]);
                return (0, n.jsx)(a(746434).E, {
                    color: "blue",
                    style: t.badge,
                    content: (0, n.jsx)(a(109939).sA, {
                        id: "newBadgeComponent.label",
                        defaultMessage: "New"
                    })
                })
            }

            function r(e) {
                return (0, a(682985).K8)(() => {
                    let {
                        launchDateMs: t,
                        expiryDateMs: n
                    } = i[e], o = a(728372).AppStoreCurrentUserSettingsStore.state;
                    if (o && o.isReady()) {
                        var r;
                        let e = null == (r = o.getSettings()) ? void 0 : r.signup_time;
                        if (e && e > t) return !1
                    }
                    return Date.now() <= n
                }, [e])
            }

            function l({
                style: e,
                newBadgeKey: t
            }) {
                return r(t) ? (0, n.jsx)(o, {
                    style: e
                }) : null
            }

            function s({
                style: e,
                newBadgeKey: t
            }) {
                return (0, a(83208).X)(t) ? (0, n.jsx)(o, {
                    style: e
                }) : null
            }

            function u(e) {
                return e.didUserEngage ? null : "feature_gate" === e.keyType ? (0, n.jsx)(s, { ...e
                }) : (0, n.jsx)(l, { ...e
                })
            }
        },
        348718: (e, t, a) => {
            a.d(t, {
                A: () => l,
                v: () => r
            }), a(898992), a(354520);
            var n = a(296540),
                i = a(474848);
            let o = (0, n.createContext)({
                collectionStore: void 0,
                currentDraggingActionId: void 0,
                disabled: !0,
                maybePersistedTransactionActions: {
                    createAndCommit: a(708652).l
                },
                editorPlacement: {
                    type: "inline"
                },
                editorWidth: 300,
                suppressActionErrors: [],
                collapsedActionIds: [],
                hideDragHandle: !1,
                cantSaveDueToError: !1,
                toggleActionIdCollapsed: () => {}
            });

            function r(e) {
                let {
                    automationStore: t
                } = (0, a(605263).q8)(), r = (0, a(682985).K8)(() => t.getActionIds(), [t]), [l, s] = (0, n.useReducer)((e, n) => {
                    let i = e.includes(n);
                    return (0, a(104310).u)({
                        event: {
                            eventName: "automation_action_collapse_toggle",
                            eventProperties: {
                                collapsed: !i,
                                automation_action_id: n,
                                automation_id: t.id
                            }
                        }
                    }), i ? e.filter(e => e !== n) : [...e, n]
                }, e.defaultCollapseActions ? r : []);
                return (0, i.jsx)(o.Provider, {
                    value: { ...e.value,
                        collapsedActionIds: l,
                        toggleActionIdCollapsed: s
                    },
                    children: e.children
                })
            }
            o.displayName = "AutomationEditorContext";
            let l = o
        },
        427724: (e, t, a) => {
            a.d(t, {
                x: () => r
            });
            var n = a(296540),
                i = a(474848);
            let o = {
                assistantBlueLink: {
                    color: a(632079).Tj.blue.text.accentPrimary,
                    cursor: "pointer",
                    fontWeight: a(699422).Wy.semibold,
                    textDecoration: "none"
                }
            };

            function r(e) {
                let {
                    featureAvailability: t,
                    upsellFrom: r,
                    sunsetCheckSource: s,
                    showOptimisticUpsell: u
                } = e, d = (0, a(109939).tz)(), c = (0, a(855021).q)(), p = (0, a(972740).L)(), _ = (0, a(83208).X)("upgrade_system_ai"), m = (0, a(682985).K8)(() => !!t && "available" === t.type && void 0 !== t.expiry && "sunset" === t.expiry.type, [t]), g = (0, a(722371).Xk)(a(90416).uv, r), f = "ai_formulas" === r, y = "sales_assisted" === c, {
                    handleClick: h,
                    upgradeEligibility: v
                } = (0, a(79268).C)({
                    upsell: null == t ? void 0 : t.upsell,
                    source: r,
                    spaceStore: p
                });
                return (0, n.useMemo)(() => {
                    if (!t) return {
                        upsellHeader: void 0,
                        upsellMessage: d.formatMessage(a(385728).D.noAccessFeatureMessage),
                        actionButtonMsg: void 0,
                        actionForFeatureAvailability: void 0,
                        isSunset: m
                    };
                    if ("available" === t.type && !u) {
                        let e = t.expiry;
                        return void 0 !== s && m && void 0 !== t && void 0 !== e ? {
                            upsellHeader: d.formatMessage(a(385728).D.upgradeToBusiness),
                            upsellMessage: d.formatMessage(a(385728).D.aiConnectorsSunsetUpsellBanner, {
                                date: e.endDate.toFormat("MMMM d"),
                                bold: e => (0, i.jsx)(a(428217).V, {
                                    external: !0,
                                    href: a(168962).JZ.pricing,
                                    hoverColor: "blue",
                                    style: o.assistantBlueLink,
                                    children: e
                                }),
                                breakLine: "assistant_overflow_menu_add_connectors" === s,
                                br: (0, i.jsx)("br", {})
                            }),
                            actionButtonMsg: d.formatMessage(a(385728).D.upgradeButton),
                            actionForFeatureAvailability: h,
                            isSunset: m
                        } : {
                            upsellHeader: void 0,
                            upsellMessage: void 0,
                            actionButtonMsg: void 0,
                            actionForFeatureAvailability: void 0,
                            isSunset: m
                        }
                    }
                    let e = t.upsell;
                    if (!e || "none" === e.type) return {
                        upsellHeader: void 0,
                        upsellMessage: void 0,
                        actionButtonMsg: void 0,
                        actionForFeatureAvailability: void 0,
                        isSunset: m
                    };
                    let n = function(e) {
                        let {
                            salesAssistedUpgradeRequired: t,
                            upgradeEligibility: n
                        } = e, i = "eligible_to_request" === n.status ? "memberCanRequest" : "request_pending" === n.status ? "memberRequested" : "adminUpsell", o = `${i}.${t?"salesAssisted":"selfService"}`;
                        return a(385728).D[o]
                    }({
                        salesAssistedUpgradeRequired: y,
                        upgradeEligibility: v
                    });
                    if ("request_pending" === v.status) return {
                        upsellHeader: void 0,
                        upsellMessage: d.formatMessage(n, {
                            isResearchMode: g,
                            isFormulas: f
                        }),
                        actionButtonMsg: void 0,
                        actionForFeatureAvailability: void 0,
                        isSunset: m
                    };
                    if ("eligible_to_request" === v.status) return _ ? {
                        upsellHeader: void 0,
                        upsellMessage: l({
                            upsellMsgInfo: n,
                            upsellFrom: r,
                            upsell: e,
                            isResearchMode: g,
                            isFormulas: f,
                            onClick: h,
                            spaceStore: p
                        }),
                        actionButtonMsg: "ai_meeting_notes" === r ? d.formatMessage(a(385728).D.requestAccessButtonShort) : d.formatMessage(a(385728).D.requestAccessButton),
                        actionForFeatureAvailability: h,
                        isSunset: m
                    } : {
                        upsellHeader: void 0,
                        upsellMessage: d.formatMessage(n, {
                            isResearchMode: g,
                            isFormulas: f,
                            bold: e => (0, i.jsx)(a(675828).f, {
                                onClick: h,
                                children: e
                            })
                        }),
                        actionButtonMsg: "ai_meeting_notes" === r ? d.formatMessage(a(385728).D.requestAccessButtonShort) : d.formatMessage(a(385728).D.requestAccessButton),
                        actionForFeatureAvailability: h,
                        isSunset: m
                    }; {
                        let t = "sales_assisted" === v.status ? d.formatMessage(a(385728).D.contactSalesButton) : "ai_meeting_notes" === r ? d.formatMessage(a(385728).D.upgradeButton) : d.formatMessage(a(385728).D.getNotionAI);
                        return _ ? {
                            upsellHeader: void 0,
                            upsellMessage: l({
                                upsellMsgInfo: n,
                                upsellFrom: r,
                                upsell: e,
                                isResearchMode: g,
                                isFormulas: f,
                                onClick: h,
                                spaceStore: p
                            }),
                            actionButtonMsg: t,
                            actionForFeatureAvailability: h,
                            isSunset: m
                        } : {
                            upsellHeader: void 0,
                            upsellMessage: d.formatMessage(n, {
                                isResearchMode: g,
                                isFormulas: f,
                                bold: e => (0, i.jsx)(a(675828).f, {
                                    onClick: h,
                                    children: e
                                })
                            }),
                            actionButtonMsg: t,
                            actionForFeatureAvailability: h,
                            isSunset: m
                        }
                    }
                }, [t, u, y, d, m, s, h, g, f, _, r, v, p])
            }

            function l(e) {
                let {
                    upsellMsgInfo: t,
                    upsellFrom: n,
                    upsell: o,
                    isResearchMode: r,
                    isFormulas: l,
                    onClick: s,
                    spaceStore: u
                } = e, d = { ...t,
                    interpolatedValues: {
                        isResearchMode: r,
                        isFormulas: l,
                        bold: e => (0, i.jsx)(a(675828).f, {
                            onClick: s,
                            children: e
                        })
                    }
                };
                return (0, i.jsx)(a(754951).UpgradeButton, {
                    source: n,
                    upsell: o,
                    display: "text",
                    size: "small",
                    customMessages: {
                        eligible_to_purchase: d,
                        sales_eligible: d,
                        sales_assisted: d
                    },
                    spaceStore: u
                })
            }
        },
        433837: (e, t, a) => {
            a.d(t, {
                Me: () => l,
                Vv: () => i,
                Z3: () => o,
                wI: () => r
            });
            var n = () => a(906745);

            function i(e) {
                if ("week" === e.frequency && e.weekdays && 1 === e.weekdays.length) return {
                    weekday: e.weekdays[0],
                    duration: e.interval
                }
            }

            function o(e) {
                let {
                    currentSprintEndDate: t,
                    sprintSchedule: a
                } = e;
                return s({
                    startDate: d({
                        dateToAdjust: n().DateTime.fromISO(t),
                        weekday: a.weekday,
                        wrapForEqualDays: !0
                    }),
                    duration: a.duration
                })
            }

            function r(e) {
                let {
                    userTimeZone: t,
                    sprintSchedule: a
                } = e;
                return s({
                    startDate: n().DateTime.local({
                        zone: t
                    }),
                    duration: a.duration
                })
            }

            function l(e) {
                let {
                    currentSprintStartDate: t,
                    sprintSchedule: a
                } = e, {
                    end_date: i
                } = s({
                    startDate: d({
                        dateToAdjust: n().DateTime.fromISO(t),
                        weekday: a.weekday,
                        wrapForEqualDays: !1
                    }),
                    duration: a.duration
                }), o = n().DateTime.fromISO(i), r = n().DateTime.now().startOf("day");
                for (; o.diff(r, "days").days < 0;) o = o.plus({
                    weeks: 1
                });
                return {
                    type: "daterange",
                    start_date: o.plus({
                        days: 1
                    }).minus({
                        weeks: a.duration
                    }).toISODate(),
                    end_date: o.toISODate()
                }
            }

            function s(e) {
                let {
                    startDate: t,
                    duration: a
                } = e, n = t.plus({
                    weeks: a
                }).minus({
                    days: 1
                });
                return {
                    type: "daterange",
                    start_date: t.toISODate(),
                    end_date: n.toISODate()
                }
            }
            let u = {
                SU: 0,
                MO: 1,
                TU: 2,
                WE: 3,
                TH: 4,
                FR: 5,
                SA: 6
            };

            function d(e) {
                let {
                    dateToAdjust: t,
                    weekday: a,
                    wrapForEqualDays: n
                } = e, i = function(e) {
                    let {
                        currentWeekday: t,
                        nextWeekday: a,
                        wrapForEqualDays: n
                    } = e, i = "number" == typeof t ? t : u[t], o = "number" == typeof a ? a : u[a];
                    if (i === o) return 7 * !!n;
                    let r = i,
                        l = 0;
                    for (; r !== o;) r === u.SA ? r = 0 : r += 1, l += 1;
                    return l
                }({
                    currentWeekday: t.weekday % 7,
                    nextWeekday: u[a],
                    wrapForEqualDays: n
                });
                return t.plus({
                    days: i
                })
            }
        },
        497570: (e, t, a) => {
            function n(e) {
                return e.isReady() && !e.isDefined() && "none" !== e.getRole()
            }

            function i(e) {
                return (0, a(682985).K8)(() => n(e), [e])
            }
            a.d(t, {
                W: () => i,
                X: () => n
            })
        },
        578083: (e, t, a) => {
            a.d(t, {
                l: () => l
            }), a(296540);
            var n = a(474848);
            let i = {
                    display: "inline-flex"
                },
                o = {
                    flexBasis: "100%"
                },
                r = {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "6px 8px"
                };

            function l(e) {
                let t, l = (0, a(109939).tz)(),
                    {
                        numberValue: s,
                        numberFormat: u,
                        numberPrecision: d,
                        numberShowAs: c,
                        shouldRenderTooltip: p,
                        withComma: _,
                        style: m,
                        ringWidth: g,
                        className: f,
                        barHeight: y
                    } = e,
                    h = (0, a(960253).e)();
                if (Number.isNaN(s) || a(627179).pN(s)) return null;
                let v = e.progressSize ? ? 21,
                    M = (null == c ? void 0 : c.showValue) ? ? !0,
                    b = M && a(700369).ZV(s, u, l, void 0, d);
                if ((null == c ? void 0 : c.type) === "bar" || (null == c ? void 0 : c.type) === "ring") {
                    let r = a(700369).XK(s, c.maxValue),
                        {
                            filledColor: l,
                            gapColor: d,
                            unfilledColor: _
                        } = function({
                            themeMode: e,
                            color: t
                        }) {
                            let n = "default" === t ? a(632079).Tj.selectLightGray : a(632079).Tj.palette[t],
                                i = "dark" === e ? n[500] : n[400];
                            return {
                                filledColor: i,
                                gapColor: n[50],
                                unfilledColor: "dark" === e ? n[200] : a(632079).Tj.selectLightGray[200]
                            }
                        }({
                            themeMode: h,
                            color: c.color
                        }),
                        m = p ? a(793550).lh({
                            numberValue: s,
                            numberFormat: u,
                            numberShowAs: c
                        }) : void 0;
                    t = "bar" === c.type ? (0, n.jsx)(a(819197).z, {
                        percentage: r,
                        filledColor: l,
                        gapColor: d,
                        unfilledColor: _,
                        height: y,
                        style: {
                            height: v,
                            ...e.barStyle,
                            ...!M ? o : {}
                        },
                        tooltip: m
                    }) : (0, n.jsx)(a(51831).m, {
                        placement: "top",
                        content: () => m,
                        disableTooltip: !m,
                        children: e => (0, n.jsx)("span", {
                            style: i,
                            ...e,
                            children: (0, n.jsx)(a(320500).E, {
                                currentValue: s,
                                maxValue: c.maxValue,
                                progressColor: "default" === c.color ? void 0 : c.color,
                                size: v,
                                ringThickness: g
                            })
                        })
                    })
                }
                return (0, n.jsxs)("div", {
                    style: { ...r,
                        ...m
                    },
                    className: f,
                    children: [b, t, _ ? ", " : null]
                })
            }
        },
        708652: (e, t, a) => {
            a.d(t, {
                l: () => i,
                t: () => o
            }), a(16280);
            var n = a(296540);

            function i(e) {
                let t = new(a(651814)).Z({
                    deadlockTimeoutMs: a(377796).DEADLOCK_WARNING_TIMEOUT_MS
                });
                return {
                    performResult: e.perform(t),
                    serverCommitResult: Promise.resolve(void 0),
                    transactionId: t.id
                }
            }

            function o(e) {
                let {
                    automationId: t,
                    spaceId: i,
                    defaultValue: o,
                    persist: r,
                    parentStore: l
                } = e, s = (0, a(533992).v3)(), u = (0, a(345776).T)(), d = (0, n.useMemo)(() => {
                    if (t && i) return {
                        id: t,
                        table: a(832375).yBS,
                        spaceId: i
                    }
                }, [t, i]), c = (0, a(133796).l)("useUnpersistedAutomationStore", {
                    cacheFallback: (null == l ? void 0 : l.inMemoryRecordCache) ? ? s.defaultRecordCache.inMemoryRecordCache,
                    isTemporaryData: !0
                }), p = (0, n.useMemo)(() => {
                    if (!d || r) return;
                    let e = c.getEntry({
                        pointer: d,
                        userId: u
                    });
                    if (!(0, a(722371).O9)(e) && u) {
                        if (!o) throw Error("create is true but no defaultValue provided");
                        c.setRecord({
                            pointer: d,
                            userId: u
                        }, {
                            role: "editor",
                            value: o
                        })
                    }
                    return new(a(698405)).d(s, d, {
                        inMemoryRecordCache: c
                    })
                }, [o, s, r, d, c, u]), _ = (0, a(682985).K8)(() => {
                    let e = l ? ? (0, a(330870).a)();
                    if (d && e) return a(698405).d.createChildStore(e, d)
                }, [d, l]), m = r ? _ : p, g = (0, a(682985).K8)(() => {
                    var e, t;
                    let n, i;
                    return !r && (n = null == _ ? void 0 : _.getModel(), i = null == p ? void 0 : p.getModel(), !!(!p || !i || n && (null == (e = n.getProperties()) ? void 0 : e.name) !== (null == (t = i.getProperties()) ? void 0 : t.name) || n && n.getStatus() !== i.getStatus() || function(e, t) {
                        let n = null == e ? void 0 : e.getModel(),
                            i = t.getModel();
                        if (!i) return !0;
                        if ((0, a(722371).O9)(n))
                            if (n.isEventType() && i.isEventType()) {
                                let e = n.getEventConfiguration(),
                                    t = i.getEventConfiguration();
                                return !(0, a(381453).n4)(e, t)
                            } else if (n.isRecurrenceType() && i.isRecurrenceType()) {
                            let e = n.getRecurrence(),
                                t = i.getRecurrence();
                            return !(0, a(381453).n4)(e, t)
                        } else if (n.isButtonType() && i.isButtonType()) return !1;
                        else return !0;
                        if (i.isEventType()) {
                            let e = i.getEventConfiguration();
                            return !1 !== e.pagesAdded || "none" !== e.pagePropertiesEdited.type
                        }
                        return !!i.isRecurrenceType() || !i.isButtonType() && void(0, a(722371).HB)(i)
                    }(_, p) || function(e, t) {
                        let n = t.getSpaceId();
                        if (!n) return !1;
                        if (!(0, a(722371).O9)(e)) return t.getActionIds().length > 0; {
                            let i = e.getActionIds(),
                                o = t.getActionIds();
                            return !(i.length === o.length && (0, a(381453).n4)(i, o)) || i.some(i => {
                                let o = {
                                        id: i,
                                        spaceId: n,
                                        table: a(832375).SC1
                                    },
                                    r = a(464011).b.createChildStore(e, o).getModel(),
                                    l = a(464011).b.createChildStore(t, o).getModel();
                                return !(0, a(722371).O9)(r) || !(0, a(722371).O9)(l) || !(0, a(381453).n4)(r.getConfig(), l.getConfig())
                            })
                        }
                    }(_, p)))
                }, [r, _, p]), {
                    createAndCommit: f
                } = (0, a(6904).D)({
                    unpersistedInMemoryRecordCache: c,
                    userId: u
                });
                return {
                    maybePersistedTransactionActions: {
                        createAndCommit: (0, n.useCallback)(e => r ? (0, a(377796).createAndCommit)({ ...e,
                            canUndo: !0,
                            environment: s,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0
                        }) : f(e), [f, s, r, i])
                    },
                    maybePersistedAutomationStore: m,
                    hasUnpersistedChanges: g
                }
            }
            a(898992), a(737550)
        },
        931118: (e, t, a) => {
            a.d(t, {
                r: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.79 2.35 14.41 15.68",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M10 2.355a2.35 2.35 0 0 0-2.253 1.686 5.06 5.06 0 0 0-2.803 4.527v1.189c0 .919-.334 1.806-.939 2.498l-.818.935c-.881 1.007-.166 2.583 1.173 2.583h3.02a2.65 2.65 0 0 0 5.24 0h3.02c1.339 0 2.054-1.576 1.173-2.583l-.818-.935a3.8 3.8 0 0 1-.939-2.498v-1.19a5.06 5.06 0 0 0-2.803-4.526A2.35 2.35 0 0 0 10 2.355m1.5 13.418a1.55 1.55 0 0 1-2.998 0zM8.909 4.564A1.104 1.104 0 0 1 10 3.605c.556 0 1.017.415 1.091.96l.049.353.329.138a3.81 3.81 0 0 1 2.337 3.512v1.189c0 1.221.444 2.401 1.248 3.32l.818.936a.307.307 0 0 1-.232.51H4.36a.308.308 0 0 1-.232-.51l.818-.935a5.04 5.04 0 0 0 1.248-3.321v-1.19c0-1.58.963-2.936 2.337-3.511l.33-.138z"
                    })
                },
                i = (0, a(104509).wt)("bell", n, "default")
        },
        934080: (e, t, a) => {
            a.d(t, {
                J: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.39 15.26 15.21",
                    svg: (0, a(474848).jsx)("path", {
                        d: "m10.775 2.583 2.475 2.475a.625.625 0 0 1 0 .884l-2.475 2.475a.625.625 0 1 1-.884-.884l1.408-1.408H4.8c-.649 0-1.175.526-1.175 1.175v5.975a.625.625 0 1 1-1.25 0V7.3A2.425 2.425 0 0 1 4.8 4.875h6.499L9.891 3.467a.625.625 0 0 1 .884-.884M17 6.1c.345 0 .625.28.625.625V12.7a2.425 2.425 0 0 1-2.425 2.425H8.7l1.408 1.408a.625.625 0 1 1-.884.884L6.75 14.942a.625.625 0 0 1 0-.884l2.475-2.475a.625.625 0 1 1 .884.884l-1.408 1.408H15.2c.649 0 1.175-.526 1.175-1.175V6.725c0-.345.28-.625.625-.625"
                    })
                },
                i = (0, a(104509).wt)("arrowSquareLeftRight", n, "default")
        }
    }
]);