"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [99543], {
        323425: (e, t, a) => {
            async function s(e) {
                let {
                    environment: t,
                    spaceId: s
                } = e, n = await t.api.callApi({
                    eventName: "disconnectSlackIngestion",
                    environment: t,
                    data: {
                        spaceId: s,
                        disconnectForWorkspace: !1
                    }
                });
                if ("success" === n.type) {
                    var i;
                    a(32913).Rh.setState({ ...a(32913).Rh.state,
                        connectedApps: null == (i = a(32913).Rh.state.connectedApps) ? void 0 : i.filter(e => "slack" !== e),
                        isPrivateSync: !1
                    })
                }
                return "success" === n.type
            }
            async function n(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e;
                if ((0, a(104310).u)({
                        event: {
                            eventName: "universal_qna_button_click",
                            eventProperties: {
                                button_name: "revoke_private_access_start",
                                integration_type: "slack",
                                setup_session_id: a(32913).Rh.state.sessionId,
                                from: a(32913).Rh.state.analyticsFrom
                            }
                        }
                    }), !await s({
                        environment: t,
                        spaceId: n
                    })) throw Error("Failed to disconnect Slack personal authentication")
            }

            function i() {
                a(32913).Rh.setState({ ...a(32913).Rh.state,
                    currentScreen: "settings"
                })
            }
            async function o(e) {
                let t, {
                        environment: s,
                        spaceId: n,
                        withPrivateAccess: i
                    } = e,
                    o = a(886556).z.isSlackV2AiConnectorEnabled(),
                    l = (a(32913).Rh.state.privateAccessEnabled ? ? !1) && i;
                (0, a(104310).u)({
                    event: {
                        eventName: "universal_qna_button_click",
                        eventProperties: {
                            button_name: i ? "private_auth_connect_start" : "public_auth_connect_start",
                            integration_type: "slack",
                            setup_session_id: a(32913).Rh.state.sessionId,
                            from: a(32913).Rh.state.analyticsFrom,
                            connection_version: 2
                        }
                    }
                });
                let r = (0, a(242302).A)();
                (0, a(104310).u)({
                    event: {
                        eventName: "slack_auth_flow_initiated",
                        eventProperties: {
                            from: i ? "ai_connector_user_private" : "ai_connector_user_public",
                            slack_auth_session_id: r
                        }
                    }
                });
                let c = await s.api.callApi({
                    eventName: "getSlackIngestionAuthorizeUrl",
                    environment: s,
                    data: {
                        spaceId: n,
                        isAdminAuth: !1,
                        isDesktopApp: s.device.isElectron,
                        isPrivateAccessEnabled: l,
                        sessionId: r
                    }
                });
                if ("success" === c.type)
                    if (s.device.isElectron) t = await (0, a(754573).P)(c.data.url);
                    else {
                        let e = (0, a(600923).K)("slack");
                        if (!e.messages.userOverwritePopupTitleMessage) throw Error("User overwrite popup title message is not defined");
                        t = await a(956935).P(s, {
                            width: 800,
                            height: 600,
                            url: c.data.url,
                            titleMessage: e.messages.userOverwritePopupTitleMessage
                        })
                    }
                o && t && (a(32913).Rh.setState({ ...a(32913).Rh.state,
                    connectedApps: [...a(32913).Rh.state.connectedApps ? ? [], "slack"],
                    isPrivateAuth: l
                }), a(436555).D6({
                    label: a(962299).A.getIntl().formatMessage(l ? {
                        defaultMessage: "You are connected to both Private and Public messages",
                        id: "slack.v2.user.auth.success"
                    } : {
                        defaultMessage: "You are connected to Public messages",
                        id: "slack.v2.user.auth.public.success"
                    }),
                    position: "bottom"
                }), (0, a(104310).u)({
                    event: {
                        eventName: "universal_qna_button_click",
                        eventProperties: {
                            button_name: l ? "private_auth_connect_success" : "public_auth_connect_success",
                            integration_type: "slack",
                            setup_session_id: a(32913).Rh.state.sessionId,
                            from: a(32913).Rh.state.analyticsFrom,
                            connection_version: 2
                        }
                    }
                }))
            }
            async function l(e) {
                let t, {
                    environment: s,
                    spaceId: n,
                    isWriteAccessApproved: i,
                    isPrivateAccessEnabled: o
                } = e;
                (0, a(104310).u)({
                    event: {
                        eventName: "universal_qna_button_click",
                        eventProperties: {
                            button_name: "admin_migration_start",
                            integration_type: "slack",
                            setup_session_id: a(32913).Rh.state.sessionId,
                            from: a(32913).Rh.state.analyticsFrom,
                            connection_version: 2
                        }
                    }
                });
                let l = (0, a(242302).A)();
                (0, a(104310).u)({
                    event: {
                        eventName: "slack_auth_flow_initiated",
                        eventProperties: {
                            from: "ai_connector_admin_settings",
                            slack_auth_session_id: l
                        }
                    }
                });
                let r = await s.api.callApi({
                    eventName: "getSlackIngestionAuthorizeUrl",
                    environment: s,
                    data: {
                        spaceId: n,
                        isAdminAuth: !0,
                        isDesktopApp: s.device.isElectron,
                        isWriteAccessApproved: i,
                        isPrivateAccessEnabled: o,
                        sessionId: l
                    }
                });
                if ("success" === r.type)
                    if (s.device.isElectron) t = await (0, a(754573).P)(r.data.url);
                    else {
                        let e = (0, a(600923).K)("slack");
                        if (!e.messages.userOverwritePopupTitleMessage) throw Error("User overwrite popup title message is not defined");
                        t = await a(956935).P(s, {
                            width: 800,
                            height: 600,
                            url: r.data.url,
                            titleMessage: e.messages.userOverwritePopupTitleMessage
                        })
                    }
                if (t) {
                    if (a(32913).Rh.setState({ ...a(32913).Rh.state,
                            connectionVersion: 2,
                            connectedApps: [...a(32913).Rh.state.connectedApps ? ? [], "slack"],
                            writeAccessApproved: i
                        }), i) return;
                    a(436555).D6({
                        label: a(962299).A.getIntl().formatMessage(o ? {
                            defaultMessage: "Slack AI updated, You now have access to Private conversations",
                            id: "slack.v2.admin.auth.success"
                        } : {
                            defaultMessage: "Slack AI connector connected successfully",
                            id: "slack.v2.admin.auth.public.success"
                        }),
                        position: "bottom"
                    }), (0, a(104310).u)({
                        event: {
                            eventName: "universal_qna_button_click",
                            eventProperties: {
                                button_name: "admin_migration_success",
                                integration_type: "slack",
                                setup_session_id: a(32913).Rh.state.sessionId,
                                from: a(32913).Rh.state.analyticsFrom,
                                connection_version: 2
                            }
                        }
                    })
                }
            }
            a.d(t, {
                FM: () => l,
                JR: () => o,
                lx: () => s,
                mI: () => n,
                nh: () => i
            }), a(16280), a(898992), a(354520)
        },
        328590: (e, t, a) => {
            a.d(t, {
                b: () => o
            });
            var s = () => a(546605);

            function n() {
                return {
                    currentScreen: "none",
                    onConfirm: void 0,
                    loginHint: void 0,
                    authAction: void 0,
                    from: "agentSetup"
                }
            }
            class i extends s().Store {
                getInitialState() {
                    return n()
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
                    this.setState(n())
                }
                setScreen(e) {
                    this.setState({ ...this.state,
                        currentScreen: e
                    })
                }
            }
            let o = new i;
            (0, a(202146).exposeDebugValue)("notionMailAccountRequiredModalStore", o)
        },
        420515: (e, t, a) => {
            async function s(e) {
                let {
                    environment: t,
                    spaceId: a,
                    jiraApiToken: s,
                    jiraSiteUrl: n,
                    developerSpaceId: i
                } = e, o = await t.api.callApi({
                    eventName: "authenticateJiraAiConnector",
                    environment: t,
                    data: {
                        spaceId: a,
                        jiraApiToken: s,
                        jiraSiteUrl: n,
                        developerSpaceId: i
                    }
                });
                return "success" !== o.type ? {
                    status: "failed"
                } : "success" === o.type && "failed" === o.data.connectionStatus ? {
                    status: "failed",
                    errorCode: o.data.errorCode
                } : {
                    status: "success"
                }
            }
            async function n(e) {
                let {
                    environment: t,
                    spaceId: s,
                    analyticsProperties: n
                } = e, {
                    analyticsFrom: i,
                    buttonName: o,
                    sessionId: l
                } = n;
                (0, a(104310).u)({
                    event: {
                        eventName: "universal_qna_button_click",
                        eventProperties: {
                            button_name: o,
                            integration_type: "jira",
                            setup_session_id: l,
                            from: i
                        }
                    }
                });
                let r = await t.api.callApi({
                    eventName: "getJiraUserAuthUrl",
                    environment: t,
                    data: {
                        spaceId: s,
                        isDesktop: t.device.isElectron,
                        sessionId: l
                    }
                });
                if ("success" === r.type)
                    if (t.device.isElectron)(0, a(754573).P)(r.data.url);
                    else {
                        let e = (0, a(600923).K)("jira");
                        a(956935).P(t, {
                            width: 800,
                            height: 600,
                            url: r.data.url,
                            titleMessage: e.messages.oauthPopupTitleMessage
                        })
                    }
            }
            async function i(e) {
                let {
                    environment: t,
                    spaceId: s
                } = e;
                "failed" === (await t.api.callApi({
                    eventName: "disconnectAiConnector",
                    environment: t,
                    data: {
                        spaceId: s,
                        connector: "jira"
                    }
                })).type ? a(436555).D6({
                    label: a(962299).A.getIntl().formatMessage({
                        defaultMessage: "Something went wrong. Please try again.",
                        id: "jira.v2.disconnect.failed"
                    })
                }) : (a(436555).D6({
                    label: a(962299).A.getIntl().formatMessage({
                        defaultMessage: "Started disconnecting Jira. This can take up to 3 hours.",
                        id: "jira.v2.disconnect.started"
                    }),
                    position: "bottom"
                }), a(213056).EF.setState({ ...a(213056).EF.state,
                    jiraSyncState: "disconnecting",
                    isDisconnecting: !0
                }))
            }

            function o(e) {
                let {
                    spaceId: t,
                    analyticsProperties: s
                } = e;
                t && ((0, a(104310).u)({
                    event: {
                        eventName: "universal_qna_button_click",
                        eventProperties: {
                            button_name: "user_jira_resume_pending_connection",
                            integration_type: "jira",
                            setup_session_id: s.sessionId,
                            from: s.analyticsFrom
                        }
                    }
                }), (0, a(166672).navigateToAIConnectorOnboarding)({
                    connector: "jira",
                    analyticsFrom: s.analyticsFrom,
                    sessionId: s.sessionId
                }))
            }
            async function l(e) {
                let {
                    environment: t,
                    spaceId: s
                } = e, n = await t.api.callApi({
                    eventName: "getJiraSelection",
                    environment: t,
                    data: {
                        spaceId: s
                    }
                });
                if ("success" === n.type) return a(213056).EF.setState({ ...a(213056).EF.state,
                    syncControl: n.data
                }), n.data
            }

            function r() {
                a(213056).EF.setState({ ...a(213056).EF.state,
                    currentScreen: "connection_complete_screen"
                })
            }

            function c(e) {
                let {
                    analyticsFrom: t,
                    screenToShow: s
                } = e, n = e.sessionId ? ? a(92513).JW();
                a(213056).EF.setState({ ...a(213056).EF.state,
                    analyticsFrom: t,
                    currentScreen: s,
                    sessionId: n
                })
            }
            async function d(e) {
                let {
                    environment: t,
                    spaceId: s,
                    projectSelection: n
                } = e, i = await t.api.callApi({
                    eventName: "setJiraSelection",
                    environment: t,
                    data: {
                        spaceId: s,
                        ...n
                    }
                });
                if ("failed" === i.type) {
                    var o;
                    return (null == (o = i.error) || null == (o = o.data) || null == (o = o.responseBody) ? void 0 : o.debugMessage) === "NO_CHANGES" ? a(436555).D6({
                        label: a(962299).A.getIntl().formatMessage({
                            defaultMessage: "No changes to the selection",
                            id: "jira.v2.project.selection.no_changes"
                        }),
                        position: "bottom"
                    }) : a(436555).D6({
                        label: a(962299).A.getIntl().formatMessage({
                            defaultMessage: "Something went wrong. Please try again.",
                            id: "jira.v2.project.selection.failed"
                        }),
                        position: "bottom"
                    }), !1
                }
                return !0
            }
            async function u(e) {
                let {
                    environment: t,
                    spaceId: s
                } = e;
                "failed" === (await t.api.callApi({
                    eventName: "startJiraAIV2Editflow",
                    environment: t,
                    data: {
                        spaceId: s
                    }
                })).type ? a(436555).D6({
                    label: a(962299).A.getIntl().formatMessage({
                        defaultMessage: "Something went wrong. Please try again.",
                        id: "jira.v2.editflow.failed"
                    }),
                    position: "bottom"
                }) : (a(436555).D6({
                    label: a(962299).A.getIntl().formatMessage({
                        defaultMessage: "Editing Jira connection. This can take up to 36 hours.",
                        id: "jira.v2.editflow.started"
                    }),
                    position: "bottom"
                }), a(213056).EF.setState({ ...a(213056).EF.state,
                    jiraSyncState: "editing",
                    jiraSyncProgress: 0
                }))
            }
            async function m(e) {
                let {
                    environment: t,
                    spaceId: s,
                    analyticsProperties: n
                } = e, i = await t.api.callApi({
                    eventName: "startIngestion",
                    environment: t,
                    data: {
                        connector: "jira",
                        spaceId: s,
                        setupSessionId: n.sessionId
                    }
                });
                "failed" !== i.type && ("success" !== i.type || i.data.success) ? (a(436555).D6({
                    label: a(962299).A.getIntl().formatMessage({
                        defaultMessage: "Jira sync started. This can take up to 36 hours.",
                        id: "jira.v2.sync.started"
                    }),
                    position: "bottom"
                }), a(213056).EF.setState({ ...a(213056).EF.state,
                    jiraSyncState: "in_progress"
                })) : a(436555).D6({
                    label: a(962299).A.getIntl().formatMessage({
                        defaultMessage: "Something went wrong. Please try again.",
                        id: "jira.v2.sync.failed"
                    }),
                    position: "bottom"
                })
            }
            a.d(t, {
                Df: () => l,
                G: () => c,
                R: () => s,
                Rr: () => i,
                Zh: () => m,
                bS: () => o,
                ol: () => n,
                vq: () => d,
                zn: () => u,
                zr: () => r
            })
        },
        499291: (e, t, a) => {
            a.d(t, {
                $: () => y
            });
            var s = a(296540),
                n = () => a(166672);
            a(16280), a(944114), a(898992), a(354520), a(581454), a(737550), a(814603), a(147566), a(198721);
            var i = () => a(436555),
                o = a(474848);

            function l(e) {
                try {
                    return new URL(e.trim()).searchParams.get("groupId") || void 0
                } catch (e) {
                    if (e instanceof TypeError) return;
                    throw e
                }
            }
            let r = (0, a(109939).YK)({
                    saveChanges: {
                        id: "universalSearch.microsoftTeams.teamSelection.saveChanges",
                        defaultMessage: "Save changes"
                    },
                    alreadySyncing: {
                        defaultMessage: "Microsoft Teams is already syncing. This can take up to 72 hours.",
                        id: "universalSearch.microsoftTeams.settings.alreadySyncing"
                    },
                    retryActionRequest: {
                        defaultMessage: "Action failed. Please try again.",
                        id: "universalSearch.microsoftTeams.settings.retryActionRequest"
                    },
                    syncingWithNewSyncControl: {
                        id: "universalSearch.microsoftTeams.settings.syncingWithNewSyncControl",
                        defaultMessage: "Started syncing from Microsoft Teams. This can take up to 72 hours."
                    },
                    invalidUrlsFound: {
                        id: "universalSearch.microsoftTeams.manualSettings.invalidUrlsFound",
                        defaultMessage: "Some URLs were invalid and could not be parsed: {urls}"
                    },
                    listType: {
                        id: "universalSearch.microsoftTeams.manualSettings.listType",
                        defaultMessage: "List type"
                    },
                    listTypeTooltip: {
                        id: "universalSearch.microsoftTeams.manualSettings.listType.tooltip",
                        defaultMessage: "Select whether the entered teams are allowed (Inclusion) or blocked (Exclusion)."
                    },
                    teamListLabel: {
                        id: "universalSearch.microsoftTeams.manualSettings.teamList.v2",
                        defaultMessage: "Team URLs"
                    },
                    teamListTooltip: {
                        id: "universalSearch.microsoftTeams.manualSettings.teamList.tooltip.v2",
                        defaultMessage: "Paste Microsoft Teams URLs. You can get a team URL by right-clicking on a team in Microsoft Teams and selecting ‘Get link to team’."
                    },
                    teamInputPlaceholder: {
                        id: "universalSearch.microsoftTeams.manualSettings.teamInput.placeholder.v2",
                        defaultMessage: "Paste team URLs"
                    }
                }),
                c = {
                    content: {
                        flex: 1,
                        overflow: "auto",
                        padding: "16px 24px 8px 24px"
                    },
                    footer: {
                        padding: "8px 24px 16px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 12
                    },
                    manualSection: {
                        marginBottom: 16
                    },
                    manualSectionHeader: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 8
                    },
                    manualSectionLabel: {
                        fontSize: 12,
                        fontWeight: a(699422).Wy.medium,
                        color: a(632079).Tj.text.secondary
                    },
                    radioOptionsContainer: {
                        display: "flex",
                        gap: 16
                    },
                    radioOption: {
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        userSelect: "none"
                    },
                    radioLabel: {
                        fontSize: 12,
                        fontWeight: a(699422).Wy.medium,
                        color: a(632079).Tj.text.secondary
                    },
                    tokenInputStyle: {
                        borderRadius: 6,
                        padding: "6px 8px"
                    },
                    infoCircleIcon: {
                        width: 21,
                        height: 24,
                        paddingInlineStart: 4,
                        paddingBottom: 5
                    },
                    manualLoadingContainer: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 40
                    }
                };

            function d({
                isOpen: e,
                spaceId: t,
                sessionId: u,
                analyticsFrom: m
            }) {
                let p = (0, a(533992).v3)(),
                    g = (0, a(109939).tz)(),
                    [f, h] = (0, s.useState)([]),
                    [y, v] = (0, s.useState)(""),
                    [S, b] = (0, s.useState)("inclusion"),
                    [x, T] = (0, s.useState)(!1),
                    [_, j] = (0, s.useState)(!0);
                (0, a(97668).Yb)(async () => {
                    if (!t || !e) return;
                    T(!0);
                    let a = await p.api.callApi({
                        eventName: "getMicrosoftTeamsManualSelection",
                        environment: p,
                        data: {
                            spaceId: t
                        }
                    });
                    "success" !== a.type && 404 !== a.status || "success" === a.type && (h(a.data.teams.map(e => ({
                        id: e.id,
                        teamId: e.id,
                        displayText: e.displayName
                    }))), b(a.data.listType), j(!1)), T(!1)
                }, [e, t, p]);
                let k = (0, s.useCallback)(async () => {
                        if (!t) return;
                        (0, a(104310).u)({
                            event: {
                                eventName: "universal_qna_button_click",
                                eventProperties: {
                                    button_name: "save_manual_settings_button_clicked",
                                    integration_type: "microsoft-teams",
                                    setup_session_id: u,
                                    from: m
                                }
                            }
                        }), j(!0);
                        let e = await p.api.callApi({
                            eventName: "getMicrosoftTeamsAIConnectorStatus",
                            environment: p,
                            data: {
                                spaceId: t
                            }
                        });
                        if ("success" !== e.type) {
                            i().D6({
                                label: g.formatMessage(r.retryActionRequest),
                                position: "bottom"
                            }), j(!1);
                            return
                        }
                        if ("success" !== e.data.status) {
                            i().D6({
                                label: g.formatMessage(r.alreadySyncing),
                                position: "bottom"
                            }), j(!1), a(456925).F0.reset();
                            return
                        }
                        let s = f.map(e => e.teamId),
                            o = await p.api.callApi({
                                eventName: "setMicrosoftTeamsManualSelection",
                                environment: p,
                                data: {
                                    spaceId: t,
                                    teamIds: s,
                                    listType: S
                                }
                            });
                        if ("success" !== o.type || !o.data.success) {
                            i().D6({
                                label: g.formatMessage(r.retryActionRequest),
                                position: "bottom"
                            }), j(!1);
                            return
                        }
                        j(!1), i().D6({
                            label: g.formatMessage(r.syncingWithNewSyncControl),
                            position: "bottom"
                        }), (0, n().navigateToMicrosoftTeamsUniversalScreen)({
                            currentScreen: "post_edit_screen"
                        }), a(456925).F0.setInProgressAndClose()
                    }, [t, p, f, S, g, u, m]),
                    M = (0, s.useCallback)(e => {
                        let t = e.target.value;
                        if (v(t), t.includes(",") || t.includes("\n")) {
                            let e = t.split(/[,\n]/).filter(e => e.trim()),
                                a = [],
                                s = [];
                            for (let t of e) {
                                let e = t.trim();
                                if (0 === e.length) continue;
                                let n = l(e);
                                n ? f.some(e => e.teamId === n) || s.push({
                                    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
                                    teamId: n,
                                    displayText: n
                                }) : a.push(e)
                            }
                            a.length > 0 && i().D6({
                                label: g.formatMessage(r.invalidUrlsFound, {
                                    urls: a.slice(0, 3).join(", ") + (a.length > 3 ? "..." : "")
                                }),
                                position: "bottom"
                            }), s.length > 0 ? (h(e => {
                                let t = [...e, ...s];
                                return j(0 === t.length), t
                            }), v("")) : j(0 === f.length)
                        }
                    }, [f, g]),
                    A = (0, s.useCallback)(e => {
                        if ("Enter" === e.key) {
                            let e = y.trim(),
                                t = l(e);
                            if (t && !f.some(e => e.teamId === t)) {
                                let e = {
                                    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
                                    teamId: t,
                                    displayText: t
                                };
                                h(t => {
                                    let a = [...t, e];
                                    return j(0 === a.length), a
                                }), v("")
                            } else e && !t && i().D6({
                                label: g.formatMessage(r.invalidUrlsFound, {
                                    urls: e
                                }),
                                position: "bottom"
                            })
                        }
                    }, [y, f, g]),
                    C = (0, s.useCallback)(() => {
                        let e = y.trim(),
                            t = l(e);
                        if (t && !f.some(e => e.teamId === t)) {
                            let e = {
                                id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
                                teamId: t,
                                displayText: t
                            };
                            h(t => {
                                let a = [...t, e];
                                return j(0 === a.length), a
                            }), v("")
                        } else e && !t && e.startsWith("http") && i().D6({
                            label: g.formatMessage(r.invalidUrlsFound, {
                                urls: e
                            }),
                            position: "bottom"
                        })
                    }, [y, f, g]),
                    I = (0, s.useCallback)(e => {
                        h(t => {
                            let a = t.filter(t => t.id !== e.id);
                            return j(0 === a.length), a
                        })
                    }, []),
                    w = (0, s.useCallback)(() => {
                        h(e => {
                            let t = e.slice(0, -1);
                            return j(0 === t.length), t
                        })
                    }, []),
                    F = (0, s.useCallback)((e, t = 40) => e.length <= t ? e : e.substring(0, t - 3) + "...", []);
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("div", {
                        style: c.content,
                        children: x ? (0, o.jsx)("div", {
                            style: c.manualLoadingContainer,
                            children: (0, o.jsx)(a(517334).k, {
                                size: "sm"
                            })
                        }) : (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsxs)("div", {
                                style: c.manualSection,
                                children: [(0, o.jsxs)("div", {
                                    style: c.manualSectionHeader,
                                    children: [(0, o.jsx)("div", {
                                        style: c.manualSectionLabel,
                                        children: (0, o.jsx)(a(109939).sA, { ...r.listType
                                        })
                                    }), (0, o.jsx)(a(51831).m, {
                                        content: () => (0, o.jsx)(a(109939).sA, { ...r.listTypeTooltip
                                        }),
                                        children: e => (0, o.jsx)("div", { ...e,
                                            children: (0, o.jsx)(a(16275).I, {
                                                icon: a(61107).infoCircleIcon,
                                                style: c.infoCircleIcon
                                            })
                                        })
                                    })]
                                }), (0, o.jsxs)("div", {
                                    style: c.radioOptionsContainer,
                                    children: [(0, o.jsxs)("div", {
                                        style: c.radioOption,
                                        role: "radio",
                                        tabIndex: 0,
                                        "aria-checked": "inclusion" === S,
                                        onClick: () => b("inclusion"),
                                        onKeyDown: e => {
                                            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), b("inclusion"))
                                        },
                                        children: [(0, o.jsx)(a(451199).A, {
                                            isSelected: "inclusion" === S
                                        }), (0, o.jsx)("span", {
                                            style: c.radioLabel,
                                            children: "Inclusion list"
                                        })]
                                    }), (0, o.jsxs)("div", {
                                        style: c.radioOption,
                                        role: "radio",
                                        tabIndex: 0,
                                        "aria-checked": "exclusion" === S,
                                        onClick: () => b("exclusion"),
                                        onKeyDown: e => {
                                            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), b("exclusion"))
                                        },
                                        children: [(0, o.jsx)(a(451199).A, {
                                            isSelected: "exclusion" === S
                                        }), (0, o.jsx)("span", {
                                            style: c.radioLabel,
                                            children: "Exclusion list"
                                        })]
                                    })]
                                })]
                            }), (0, o.jsxs)("div", {
                                style: c.manualSection,
                                children: [(0, o.jsxs)("div", {
                                    style: c.manualSectionHeader,
                                    children: [(0, o.jsx)("div", {
                                        style: c.manualSectionLabel,
                                        children: (0, o.jsx)(a(109939).sA, { ...r.teamListLabel
                                        })
                                    }), (0, o.jsx)(a(51831).m, {
                                        content: () => (0, o.jsx)(a(109939).sA, { ...r.teamListTooltip
                                        }),
                                        children: e => (0, o.jsx)("div", { ...e,
                                            children: (0, o.jsx)(a(16275).I, {
                                                icon: a(61107).infoCircleIcon,
                                                style: c.infoCircleIcon
                                            })
                                        })
                                    })]
                                }), (0, o.jsx)(a(160319).Ay, {
                                    focusInitial: !1,
                                    focus: !1,
                                    showBorder: !0,
                                    format: a(160319).le.Select,
                                    tokenWrapStyle: {
                                        gap: 4
                                    },
                                    value: y,
                                    onChange: M,
                                    onSubmit: A,
                                    onBlur: C,
                                    onRemoveLastToken: w,
                                    type: "text",
                                    placeholder: g.formatMessage(r.teamInputPlaceholder),
                                    tokens: f.map(e => (0, o.jsx)(a(51831).m, {
                                        content: () => e.teamId,
                                        children: t => (0, o.jsx)("div", { ...t,
                                            children: (0, o.jsx)(a(628462).A, {
                                                value: F(e.displayText, 40),
                                                format: a(696654).NY.Medium,
                                                isSingle: !0,
                                                showRemoveButton: !0,
                                                onClickRemove: () => I(e)
                                            })
                                        })
                                    }, e.id)),
                                    focusAfterAnimation: !1,
                                    style: c.tokenInputStyle
                                })]
                            })]
                        })
                    }), (0, o.jsx)("div", {
                        style: c.footer,
                        children: (0, o.jsx)(a(912946).A, {
                            colorPalette: "blue",
                            onClick: k,
                            disabled: x || _,
                            children: (0, o.jsx)(a(109939).sA, { ...r.saveChanges
                            })
                        })
                    })]
                })
            }
            a(672577);
            var u = () => a(922271);
            let m = (0, a(109939).YK)({
                    allTeamsToggle: {
                        id: "universalSearch.microsoftTeams.settings.allTeamsToggle",
                        defaultMessage: "All teams"
                    },
                    disabledTooltip: {
                        id: "universalSearch.microsoftTeams.settings.disabledTooltip",
                        defaultMessage: "You can only interact after all teams are loaded"
                    },
                    reconnectButton: {
                        id: "universalSearch.microsoftTeams.settings.settingsModal.reconnectButtonText",
                        defaultMessage: "Reconnect account"
                    },
                    microsoftTeamsAIConnectorOauthPopupTitle: {
                        id: "universalSearch.microsoftTeams.oauthPopupTitle",
                        defaultMessage: "Connect Microsoft Teams AI Connector"
                    },
                    saveChanges: {
                        id: "universalSearch.microsoftTeams.teamSelection.saveChanges",
                        defaultMessage: "Save changes"
                    },
                    syncFutureTeamsCheckboxLabel: {
                        id: "universalSearch.microsoftTeams.settings.syncFutureTeamsCheckboxLabel",
                        defaultMessage: "Include teams created in the future"
                    },
                    syncPrivateConversationLabel: {
                        id: "universalSearch.microsoftTeams.settings.syncPrivateConversationLabel",
                        defaultMessage: "Content in private conversations will only be shown to members who have access to them. Permissions are strictly respected."
                    },
                    alreadySyncing: {
                        defaultMessage: "Microsoft Teams is already syncing. This can take up to 72 hours.",
                        id: "universalSearch.microsoftTeams.settings.alreadySyncing"
                    },
                    retryActionRequest: {
                        defaultMessage: "Action failed. Please try again.",
                        id: "universalSearch.microsoftTeams.settings.retryActionRequest"
                    },
                    syncControlNotUpdated: {
                        id: "universalSearch.microsoftTeams.settings.syncControlNotUpdated",
                        defaultMessage: "No change made to Microsoft Teams Connection."
                    },
                    syncingWithNewSyncControl: {
                        id: "universalSearch.microsoftTeams.settings.syncingWithNewSyncControl",
                        defaultMessage: "Started syncing from Microsoft Teams. This can take up to 72 hours."
                    },
                    searchBoxPlaceholder: {
                        id: "universalSearch.microsoftTeams.settings.searchBoxPlaceholder",
                        defaultMessage: "Search for a Team"
                    },
                    loadingTeams: {
                        id: "universalSearch.microsoftTeams.teamSelection.loadingTeams",
                        defaultMessage: "{teamsFetched} of {totalTeams} teams loaded"
                    },
                    loading1000PerMinute: {
                        id: "universalSearch.microsoftTeams.settings.loading1000PerMinute",
                        defaultMessage: "This can take up to one minute for every 1,000 teams."
                    },
                    reconnectError: {
                        id: "universalSearch.microsoftTeams.settings.reconnectError",
                        defaultMessage: "Failed to fetch teams after reconnecting. Please try again."
                    }
                }),
                p = {
                    content: {
                        flex: 1,
                        overflow: "auto",
                        paddingTop: 16,
                        paddingInlineEnd: 24,
                        paddingBottom: 8,
                        paddingInlineStart: 24
                    },
                    searchBar: {
                        width: "100%",
                        marginBottom: 16
                    },
                    teamItem: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "8px 0"
                    },
                    teamText: {
                        fontSize: 14,
                        color: a(632079).Tj.text.primary
                    },
                    divider: {
                        marginTop: 8,
                        marginBottom: 8
                    },
                    selectionWrapper: {
                        maxHeight: 250,
                        overflowY: "scroll"
                    },
                    loadingContainer: {
                        padding: "20px 0",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 12,
                        color: a(632079).Tj.text.secondary
                    },
                    errorStateWrapper: {
                        padding: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column"
                    },
                    errorText: {
                        fontSize: 14,
                        color: a(632079).Tj.red.text.primary,
                        lineHeight: "20px"
                    },
                    reconnectButton: {
                        marginTop: "16px"
                    },
                    teamsListBox: {
                        border: `1px solid ${a(632079).Tj.border.secondary}`,
                        borderRadius: 8,
                        padding: 16,
                        marginBottom: 16
                    },
                    futureTeamsRow: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "4px 0"
                    },
                    footer: {
                        paddingTop: 8,
                        paddingInlineEnd: 24,
                        paddingBottom: 16,
                        paddingInlineStart: 24,
                        display: "flex",
                        flexDirection: "column",
                        gap: 12
                    },
                    permissionsInfoBox: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        backgroundColor: a(632079).Tj.background.tertiary,
                        borderRadius: 8,
                        padding: 12
                    },
                    permissionsContent: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        flex: 1,
                        fontSize: 12,
                        color: a(632079).Tj.text.secondary,
                        lineHeight: 1.4
                    },
                    tooltipWidth: {
                        width: 280
                    }
                };

            function g({
                isOpen: e,
                spaceId: t,
                connectionStatus: l,
                sessionId: r,
                analyticsFrom: c
            }) {
                let d = (0, a(533992).v3)(),
                    f = (0, a(109939).tz)(),
                    [h, y] = (0, s.useState)(!1),
                    [v, S] = (0, s.useState)(!1),
                    [b, x] = s.useState(!0),
                    [T, _] = (0, s.useState)(0),
                    [j, k] = (0, s.useState)(""),
                    [M, A] = (0, s.useState)([]),
                    [C, I] = (0, s.useState)(!1),
                    [w, F] = (0, s.useState)(null),
                    [P, R] = (0, s.useState)(null);
                (0, a(97668).Yb)(async () => {
                    var a, s, i, o;
                    let m;
                    if (!t || !e) return;
                    if (["in_progress", "disconnecting", "editing"].includes(l)) {
                        y(!1), (0, n().navigateToMicrosoftTeamsUniversalScreen)({
                            currentScreen: "none",
                            analyticsFrom: c,
                            sessionId: r
                        });
                        return
                    }
                    y(!0), F(null), R(null);
                    let p = null == (a = await (0, n().getMicrosoftTeamsSyncControlsAction)({
                        environment: d,
                        spaceId: t
                    })) ? void 0 : a.configuredSyncControls;
                    if (!p) return void y(!1);
                    I(p.syncFutureTeams), A([]);
                    let g = [];
                    do {
                        let e = await (0, n().getMicrosoftTeamsTeamsAction)({
                            environment: d,
                            spaceId: t,
                            cursor: m
                        });
                        if ("failed" === e.type) {
                            y(!1);
                            let t = !e.offline && (null == (s = e.body) ? void 0 : s.clientData);
                            if (t && "teams_reauth_required" === t.type && "reconnectUrl" in t) {
                                F(!e.offline && (null == (o = e.body) ? void 0 : o.debugMessage) || (0, u().H)(f, e)), R(t.reconnectUrl);
                                return
                            }
                            F(!e.offline && (null == (i = e.body) ? void 0 : i.debugMessage) || (0, u().H)(f, e)), R(null);
                            return
                        }
                        for (let t of (m = e.data.cursor, e.data.totalTeamCount && _(e.data.totalTeamCount), e.data.teams)) {
                            let {
                                id: e,
                                name: a
                            } = t;
                            p.syncFutureTeams ? g.push({
                                id: e,
                                name: a,
                                checked: !p.teamsToExcludeFromSync.includes(e)
                            }) : g.push({
                                id: e,
                                name: a,
                                checked: p.teamsToSync.includes(e)
                            })
                        }
                        let a = g.find(e => e.checked),
                            l = g.find(e => !e.checked),
                            r = !1;
                        a && l ? r = "partial" : a && (r = !0), x(r), A([...g])
                    } while (m) y(!1)
                }, [e, t, l, d, c, r, f]);
                let E = (0, s.useCallback)(e => {
                        let t = M.find(t => t.id === e);
                        return !!(null == t ? void 0 : t.checked)
                    }, [M]),
                    D = (0, s.useCallback)(e => {
                        let t = M.map(t => t.id === e ? { ...t,
                            checked: !t.checked
                        } : t);
                        A(t);
                        let a = t.find(e => e.checked),
                            s = t.find(e => !e.checked),
                            n = !1;
                        a && s ? n = "partial" : a && (n = !0), x(n)
                    }, [M]),
                    N = (0, s.useCallback)(() => {
                        let e = !b;
                        x(e), A(t => t.map(t => ({ ...t,
                            checked: e
                        })))
                    }, [b]),
                    L = (0, s.useCallback)(() => M.some(e => e.checked), [M]),
                    B = (0, s.useCallback)(async () => {
                        if (P && t && await a(956935).P(d, {
                                width: 800,
                                height: 600,
                                url: P,
                                titleMessage: m.microsoftTeamsAIConnectorOauthPopupTitle
                            })) {
                            F(null), R(null), y(!0);
                            try {
                                var e, s;
                                let a, o = null == (e = await (0, n().getMicrosoftTeamsSyncControlsAction)({
                                    environment: d,
                                    spaceId: t
                                })) ? void 0 : e.configuredSyncControls;
                                if (!o) {
                                    y(!1), F(f.formatMessage(m.reconnectError));
                                    return
                                }
                                I(o.syncFutureTeams), A([]);
                                let l = [];
                                do {
                                    let e = await (0, n().getMicrosoftTeamsTeamsAction)({
                                        environment: d,
                                        spaceId: t,
                                        cursor: a
                                    });
                                    if ("failed" === e.type) {
                                        let t = !e.offline && (null == (s = e.body) ? void 0 : s.debugMessage) || (0, u().H)(f, e);
                                        F(t), y(!1), i().D6({
                                            label: t,
                                            position: "bottom"
                                        });
                                        return
                                    }
                                    for (let t of (a = e.data.cursor, e.data.totalTeamCount && _(e.data.totalTeamCount), e.data.teams)) {
                                        let {
                                            id: e,
                                            name: a
                                        } = t;
                                        o.syncFutureTeams ? l.push({
                                            id: e,
                                            name: a,
                                            checked: !0
                                        }) : l.push({
                                            id: e,
                                            name: a,
                                            checked: o.teamsToSync.includes(e)
                                        })
                                    }
                                    A([...l])
                                } while (a) y(!1)
                            } catch (e) {
                                (0, a(222024).t)().error({
                                    from: "MicrosoftTeamsSelectTeamsTab",
                                    type: "reconnectFailed",
                                    error: e
                                }), y(!1), F(f.formatMessage(m.reconnectError))
                            }
                        }
                    }, [P, t, d, f]),
                    U = (0, s.useCallback)(async () => {
                        let e;
                        if (!t) return;
                        (0, a(104310).u)({
                            event: {
                                eventName: "universal_qna_button_click",
                                eventProperties: {
                                    button_name: "settings_modal_save_button",
                                    integration_type: "microsoft-teams",
                                    setup_session_id: r,
                                    from: c
                                }
                            }
                        }), S(!0);
                        let s = await (0, n().getMicrosoftTeamsAIConnectorStatusAction)({
                            environment: d,
                            spaceId: t
                        });
                        if (!s) {
                            i().D6({
                                label: f.formatMessage(m.retryActionRequest),
                                position: "bottom"
                            }), S(!1);
                            return
                        }
                        if ("completed" !== s.connectionStatus && "pending_selection" !== s.connectionStatus) {
                            i().D6({
                                label: f.formatMessage(m.alreadySyncing),
                                position: "bottom"
                            }), S(!1), (0, n().navigateToMicrosoftTeamsUniversalScreen)({
                                currentScreen: "none",
                                analyticsFrom: c,
                                sessionId: r
                            });
                            return
                        }
                        if (C) {
                            let a = {
                                syncFutureTeams: !0,
                                teamsToSync: [],
                                teamsToExcludeFromSync: M.filter(e => !e.checked).map(e => e.id)
                            };
                            e = await (0, n().setMicrosoftTeamsSyncControlsAction)({
                                environment: d,
                                spaceId: t,
                                syncControls: a
                            })
                        } else {
                            let a = {
                                syncFutureTeams: !1,
                                teamsToSync: M.filter(e => e.checked).map(e => e.id),
                                teamsToExcludeFromSync: []
                            };
                            e = await (0, n().setMicrosoftTeamsSyncControlsAction)({
                                environment: d,
                                spaceId: t,
                                syncControls: a
                            })
                        }
                        if (!e) {
                            i().D6({
                                label: f.formatMessage(m.retryActionRequest),
                                position: "bottom"
                            }), S(!1);
                            return
                        }
                        if (!e.syncControlsUpdated) {
                            i().D6({
                                label: f.formatMessage(m.syncControlNotUpdated),
                                position: "bottom"
                            }), S(!1);
                            return
                        }
                        S(!1), i().D6({
                            label: f.formatMessage(m.syncingWithNewSyncControl),
                            position: "bottom"
                        }), (0, n().navigateToMicrosoftTeamsUniversalScreen)({
                            currentScreen: "post_edit_screen",
                            analyticsFrom: c,
                            sessionId: r
                        }), a(456925).F0.setInProgressAndClose()
                    }, [t, d, C, c, r, f, M]);
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("div", {
                        style: p.content,
                        children: w ? (0, o.jsxs)("div", {
                            style: p.errorStateWrapper,
                            children: [(0, o.jsx)("div", {
                                style: p.errorText,
                                children: w
                            }), P ? (0, o.jsx)(a(912946).A, {
                                style: p.reconnectButton,
                                onClick: B,
                                children: (0, o.jsx)(a(109939).sA, { ...m.reconnectButton
                                })
                            }) : void 0]
                        }) : (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(a(790124).A, {
                                capture: !0,
                                allowEsc: !0,
                                children: () => (0, o.jsx)(a(36481).p, {
                                    style: p.searchBar,
                                    id: "microsoftTeamsUniversalQnASearchBar",
                                    placeholder: f.formatMessage(m.searchBoxPlaceholder),
                                    value: j,
                                    onChange: e => {
                                        k(e.target.value)
                                    },
                                    disabled: v || h
                                }, "microsoftTeamsUniversalQnASearchBar")
                            }), (0, o.jsx)("div", {
                                style: p.teamsListBox,
                                children: h ? (0, o.jsxs)("div", {
                                    style: p.loadingContainer,
                                    children: [(0, o.jsx)(a(517334).k, {}), (0, o.jsxs)("div", {
                                        children: [(0, o.jsx)("div", {
                                            children: (0, o.jsx)(a(109939).sA, { ...m.loadingTeams,
                                                values: {
                                                    teamsFetched: M.length,
                                                    totalTeams: T
                                                }
                                            })
                                        }), (0, o.jsx)("div", {
                                            children: (0, o.jsx)(a(109939).sA, { ...m.loading1000PerMinute
                                            })
                                        })]
                                    })]
                                }) : (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsx)(a(51831).m, {
                                        content: () => (0, o.jsx)("div", {
                                            style: p.tooltipWidth,
                                            children: (0, o.jsx)(a(109939).sA, { ...m.disabledTooltip
                                            })
                                        }),
                                        disableTooltip: !v,
                                        children: e => (0, o.jsxs)("div", {
                                            style: p.teamItem,
                                            children: [(0, o.jsx)("div", { ...e,
                                                children: (0, o.jsx)(a(349050).S, {
                                                    disabled: v,
                                                    checked: b,
                                                    size: 14,
                                                    onClick: N
                                                })
                                            }), (0, o.jsx)("span", {
                                                style: p.teamText,
                                                children: (0, o.jsx)(a(109939).sA, { ...m.allTeamsToggle
                                                })
                                            })]
                                        })
                                    }), (0, o.jsx)(a(346268).c, {
                                        style: p.divider,
                                        size: 4
                                    }), (0, o.jsx)("div", {
                                        style: p.selectionWrapper,
                                        children: (!j ? M : M.filter(e => e.name.toLowerCase().includes(j.toLowerCase()))).map(e => (0, o.jsxs)("div", {
                                            style: p.teamItem,
                                            children: [(0, o.jsx)(a(349050).S, {
                                                disabled: v,
                                                checked: E(e.id),
                                                onClick: () => {
                                                    D(e.id)
                                                },
                                                size: 14
                                            }, `${e.id}-checkbox`), (0, o.jsx)("span", {
                                                style: p.teamText,
                                                children: ` ${e.name}`
                                            }, `${e.id}-label`)]
                                        }, e.id))
                                    })]
                                })
                            }), (0, o.jsxs)("div", {
                                style: p.futureTeamsRow,
                                children: [(0, o.jsx)(a(349050).S, {
                                    disabled: v || h,
                                    checked: C,
                                    size: 14,
                                    onClick: () => {
                                        I(!C)
                                    }
                                }), (0, o.jsx)("span", {
                                    style: p.teamText,
                                    children: (0, o.jsx)(a(109939).sA, { ...m.syncFutureTeamsCheckboxLabel
                                    })
                                })]
                            })]
                        })
                    }), (0, o.jsxs)("div", {
                        style: p.footer,
                        children: [w ? void 0 : (0, o.jsxs)("div", {
                            style: p.permissionsInfoBox,
                            children: [(0, o.jsx)(a(16275).I, {
                                icon: a(697198).lockSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            }), (0, o.jsx)("div", {
                                style: p.permissionsContent,
                                children: (0, o.jsx)(a(109939).sA, { ...m.syncPrivateConversationLabel
                                })
                            })]
                        }), (0, o.jsx)(a(912946).A, {
                            colorPalette: "blue",
                            onClick: U,
                            disabled: h || v || !!w || !L() && !C,
                            children: (0, o.jsx)(a(109939).sA, { ...m.saveChanges
                            })
                        })]
                    })]
                })
            }
            let f = (0, a(109939).YK)({
                    title: {
                        id: "universalSearch.microsoftTeams.teamSelection.title",
                        defaultMessage: "Select teams"
                    },
                    selectTeamsTab: {
                        id: "universalSearch.microsoftTeams.teamSelection.selectTeamsTab",
                        defaultMessage: "Select teams"
                    },
                    manuallyEnterTab: {
                        id: "universalSearch.microsoftTeams.teamSelection.manuallyEnterTab",
                        defaultMessage: "Manually enter"
                    },
                    modalAriaLabel: {
                        id: "universalSearch.microsoftTeams.teamSelection.modalAriaLabel",
                        defaultMessage: "Microsoft Teams team selection modal"
                    }
                }),
                h = {
                    wrapper: {
                        width: 560,
                        maxWidth: "100%",
                        maxHeight: "90vh",
                        display: "flex",
                        flexDirection: "column"
                    },
                    header: {
                        paddingTop: 24,
                        paddingInlineEnd: 24,
                        paddingBottom: 0,
                        paddingInlineStart: 24
                    },
                    title: {
                        fontSize: 20,
                        fontWeight: a(699422).Wy.semibold,
                        color: a(632079).Tj.text.primary,
                        marginBottom: 16
                    },
                    tabBar: {
                        display: "flex",
                        gap: 8,
                        borderBottom: `1px solid ${a(632079).Tj.border.primary}`,
                        padding: "0 24px"
                    },
                    tab: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "8px 12px",
                        fontSize: 14,
                        fontWeight: a(699422).Wy.medium,
                        color: a(632079).Tj.text.secondary,
                        cursor: "pointer",
                        borderBottom: "2px solid transparent",
                        marginBottom: -1,
                        backgroundColor: "transparent",
                        border: "none"
                    },
                    tabActive: {
                        color: a(632079).Tj.text.primary,
                        borderBottomColor: a(632079).Tj.blue.border.accentPrimary
                    }
                };

            function y() {
                let e = (0, a(109939).tz)(),
                    t = (0, a(723240).r)(),
                    [i, l] = (0, s.useState)("select_teams"),
                    r = (0, a(682985).K8)(() => a(456925).F0.state.currentScreen, []),
                    c = (0, a(682985).K8)(() => a(456925).F0.state.sessionId, []),
                    u = (0, a(682985).K8)(() => a(456925).F0.state.analyticsFrom, []),
                    m = (0, a(682985).K8)(() => a(456925).F0.state.connectionStatus, []),
                    p = "select_teams" === r,
                    y = (0, s.useCallback)(e => {
                        (0, a(104310).u)({
                            event: {
                                eventName: "universal_qna_button_click",
                                eventProperties: {
                                    button_name: "manually_enter" === e ? "manually_enter_tab" : "select_teams_tab",
                                    integration_type: "microsoft-teams",
                                    setup_session_id: c,
                                    from: u
                                }
                            }
                        }), l(e)
                    }, [c, u]),
                    v = (0, s.useCallback)(() => {
                        (0, a(104310).u)({
                            event: {
                                eventName: "universal_qna_button_click",
                                eventProperties: {
                                    button_name: "team_selection_modal_close",
                                    integration_type: "microsoft-teams",
                                    setup_session_id: c,
                                    from: u
                                }
                            }
                        }), (0, n().navigateToMicrosoftTeamsUniversalScreen)({
                            currentScreen: "settings",
                            analyticsFrom: u,
                            sessionId: c
                        })
                    }, [u, c]);
                return (0, o.jsx)(a(556809).a, {
                    ariaLabel: e.formatMessage(f.modalAriaLabel),
                    showCloseIcon: !0,
                    onDismiss: v,
                    open: p,
                    children: (0, o.jsxs)("div", {
                        style: h.wrapper,
                        children: [(0, o.jsx)("div", {
                            style: h.header,
                            children: (0, o.jsx)("div", {
                                style: h.title,
                                children: (0, o.jsx)(a(109939).sA, { ...f.title
                                })
                            })
                        }), (0, o.jsxs)("div", {
                            style: h.tabBar,
                            children: [(0, o.jsxs)(a(64960).Ay, {
                                style: { ...h.tab,
                                    ..."select_teams" === i && h.tabActive
                                },
                                onClick: () => y("select_teams"),
                                children: [(0, o.jsx)(a(16275).I, {
                                    icon: a(921048).magnifyingGlassSmallIcon,
                                    size: "sm"
                                }), (0, o.jsx)(a(109939).sA, { ...f.selectTeamsTab
                                })]
                            }), (0, o.jsxs)(a(64960).Ay, {
                                style: { ...h.tab,
                                    ..."manually_enter" === i && h.tabActive
                                },
                                onClick: () => y("manually_enter"),
                                children: [(0, o.jsx)(a(16275).I, {
                                    icon: a(80086).gearSmallIcon,
                                    size: "sm"
                                }), (0, o.jsx)(a(109939).sA, { ...f.manuallyEnterTab
                                })]
                            })]
                        }), "select_teams" === i ? (0, o.jsx)(g, {
                            isOpen: p,
                            spaceId: t,
                            connectionStatus: m,
                            sessionId: c,
                            analyticsFrom: u
                        }) : (0, o.jsx)(d, {
                            isOpen: p,
                            spaceId: t,
                            sessionId: c,
                            analyticsFrom: u
                        })]
                    })
                })
            }
        },
        882707: (e, t, a) => {
            a.d(t, {
                t: () => s
            });
            async function s(e) {
                let {
                    environment: t,
                    spaceId: s,
                    onAuthSuccess: n,
                    analyticsProperties: i,
                    connector: o
                } = e, {
                    buttonName: l
                } = i, r = a(399077).NT[o].state;
                (0, a(104310).u)({
                    event: {
                        eventName: "universal_qna_button_click",
                        eventProperties: {
                            button_name: l,
                            integration_type: o,
                            setup_session_id: r.sessionId,
                            from: i.analyticsFrom ? ? r.analyticsFrom
                        }
                    }
                });
                let c = (0, a(600923).K)(o);
                await c.authenticate({
                    environment: t,
                    spaceId: s,
                    onAuthSuccess: n
                })
            }
        },
        885322: (e, t, a) => {
            a.r(t), a.d(t, {
                gearFillIcon: () => n,
                iconDefinition: () => s
            }), a(296540);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.83 2.82 14.36 14.36",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M15.76 5.73c.12.16.12.39 0 .56l.01-.01-.74 1.05c-.11.16-.12.35-.05.52l.09.21c.07.18.22.31.4.34l1.25.22c.21.03.37.19.4.4.05.32.07.64.07.96V10c0 .36-.03.71-.08 1.05-.03.21-.2.36-.4.4l-1.27.22a.52.52 0 0 0-.4.33l-.09.21a.51.51 0 0 0 .04.52l.73 1.03c.12.17.13.4 0 .57-.19.26-.4.5-.63.74h-.01c-.25.25-.51.48-.79.69a.48.48 0 0 1-.56 0l-1.05-.74a.54.54 0 0 0-.52-.05l-.21.09a.53.53 0 0 0-.34.4l-.22 1.25c-.03.21-.19.37-.4.4-.32.05-.64.07-.96.07h-.02c-.36 0-.71-.03-1.05-.08a.49.49 0 0 1-.4-.4l-.22-1.27a.52.52 0 0 0-.33-.4l-.21-.09a.51.51 0 0 0-.52.04l-1.03.73a.48.48 0 0 1-.57 0c-.25-.19-.49-.4-.72-.64h-.01c-.25-.25-.48-.51-.69-.79a.48.48 0 0 1 0-.56L5 12.67c.11-.15.12-.34.05-.51l-.09-.21a.53.53 0 0 0-.4-.34l-1.25-.22a.47.47 0 0 1-.4-.4c-.05-.32-.07-.64-.07-.96v-.02c0-.36.03-.71.08-1.05.03-.21.2-.36.4-.4l1.27-.22a.52.52 0 0 0 .4-.33l.09-.21a.51.51 0 0 0-.04-.52l-.73-1.03a.48.48 0 0 1 0-.57c.19-.26.4-.5.63-.74h.01c.25-.26.51-.48.79-.69a.48.48 0 0 1 .56 0l1.05.74c.15.11.34.12.51.05l.21-.09a.53.53 0 0 0 .34-.4l.22-1.25c.03-.21.19-.37.4-.4.32-.05.64-.07.96-.07h.02c.36 0 .71.03 1.05.08.21.03.36.2.4.4l.22 1.27c.03.19.16.33.33.4l.21.09c.17.08.37.07.52-.04l1.03-.73c.17-.12.4-.13.57 0 .25.19.49.4.72.64h.01c.25.25.48.51.69.79M12.08 10c0-1.15-.93-2.08-2.08-2.08S7.92 8.85 7.92 10s.93 2.08 2.08 2.08 2.08-.93 2.08-2.08"
                    })
                },
                n = (0, a(104509).wt)("gearFill", s, "fill")
        }
    }
]);