"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [93186], {
        58588: (e, i, t) => {
            t.d(i, {
                V: () => o
            }), t(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 2.62 12.26 14.76",
                    svg: (0, t(474848).jsx)("path", {
                        d: "M3.875 3.25c0-.345.28-.625.625-.625h4c.345 0 .625.28.625.625v4c0 .345-.28.625-.625.625H7.125v.596c0 .179.126.333.302.368l5.39 1.075c.76.152 1.308.819 1.308 1.594v.617H15.5c.345 0 .625.28.625.625v4c0 .345-.28.625-.625.625h-4a.625.625 0 0 1-.625-.625v-4c0-.345.28-.625.625-.625h1.375v-.617a.375.375 0 0 0-.302-.368l-5.39-1.076a1.625 1.625 0 0 1-1.308-1.593v-.596H4.5a.625.625 0 0 1-.625-.625zm4 3.375v-2.75h-2.75v2.75zm4.25 6.75v2.75h2.75v-2.75z"
                    })
                },
                o = (0, t(104509).wt)("connections", a, "default")
        },
        224468: (e, i, t) => {
            t.d(i, {
                E: () => a,
                i: () => o
            });
            let a = "object:",
                o = {
                    type: "salesforce",
                    isSingleton: !0,
                    config: {},
                    hideReconnect: !0,
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "salesforce.search": {
                            versionAvailability: "*"
                        },
                        "salesforce.soqlQuery": {
                            versionAvailability: "*"
                        },
                        "salesforce.getSample": {
                            versionAvailability: "*"
                        },
                        "salesforce.findUserIds": {
                            versionAvailability: "*"
                        },
                        "salesforce.loadRecord": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.salesforce.description",
                        defaultMessage: "Search Salesforce records."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.salesforce.title",
                        defaultMessage: "Salesforce"
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(68722).salesforceIcon
                }
        },
        258902: (e, i, t) => {
            function a(e) {
                return void 0 !== e.provider ? "google" === e.provider : void 0 !== e.providerName && "google" === e.providerName.toLowerCase()
            }

            function o(e, i) {
                if (0 === i.length) return;
                let o = (0, t(285316).kM)(e),
                    l = i.filter(e => e.email && (0, t(285316).kM)(e.email) === o);
                return 0 === l.length ? i[0] : l.find(a) ? ? l[0]
            }
            t.d(i, {
                BJ: () => s,
                Po: () => l,
                lf: () => o,
                r6: () => r
            }), t(898992), t(354520), t(672577);
            let l = {
                    actions: ["read"],
                    constraints: void 0
                },
                r = {
                    actions: ["read", "write"],
                    constraints: {
                        skipConfirmation: !1
                    }
                },
                s = {
                    type: "calendar",
                    isSingleton: !1,
                    getModuleDedupeKey: e => e.type,
                    getToolNamePrefix: () => "calendar",
                    config: {
                        scopes: ["read", "write"]
                    },
                    isAvailable: e => {
                        let {
                            configStep: i,
                            isCustomAgentContext: t
                        } = e;
                        return !!(t || i.isCustomAgent || i.enableScriptAgent)
                    },
                    triggers: {
                        "calendar.event.created": {
                            isTriggerConfigured: e => {
                                var i;
                                return !!(null == (i = e.calendars) ? void 0 : i.length)
                            },
                            fields: {
                                calendars: {
                                    required: () => !0,
                                    isConfigured: e => {
                                        var i;
                                        return !!(null == (i = e.calendars) ? void 0 : i.length)
                                    }
                                }
                            },
                            triggerDuplicator: ({
                                original: e
                            }) => e,
                            versionAvailability: "1.0.0",
                            createDefaultState: () => ({
                                type: "calendar.event.created",
                                calendars: []
                            }),
                            getTriggerDedupKey: ({
                                workflowId: e,
                                triggerVariables: i
                            }) => {
                                var t;
                                return null == (t = i.calendarEvent) ? void 0 : t.eventId
                            }
                        },
                        "calendar.event.updated": {
                            isTriggerConfigured: e => {
                                var i;
                                return !!(null == (i = e.calendars) ? void 0 : i.length)
                            },
                            fields: {
                                calendars: {
                                    required: () => !0,
                                    isConfigured: e => {
                                        var i;
                                        return !!(null == (i = e.calendars) ? void 0 : i.length)
                                    }
                                }
                            },
                            triggerDuplicator: ({
                                original: e
                            }) => e,
                            versionAvailability: "1.0.0",
                            createDefaultState: () => ({
                                type: "calendar.event.updated",
                                calendars: []
                            }),
                            getTriggerDedupKey: ({
                                workflowId: e,
                                triggerVariables: i
                            }) => {
                                var t;
                                return null == (t = i.calendarEvent) ? void 0 : t.eventId
                            }
                        },
                        "calendar.event.canceled": {
                            isTriggerConfigured: e => {
                                var i;
                                return !!(null == (i = e.calendars) ? void 0 : i.length)
                            },
                            fields: {
                                calendars: {
                                    required: () => !0,
                                    isConfigured: e => {
                                        var i;
                                        return !!(null == (i = e.calendars) ? void 0 : i.length)
                                    }
                                }
                            },
                            triggerDuplicator: ({
                                original: e
                            }) => e,
                            versionAvailability: "1.0.0",
                            createDefaultState: () => ({
                                type: "calendar.event.canceled",
                                calendars: []
                            }),
                            getTriggerDedupKey: ({
                                workflowId: e,
                                triggerVariables: i
                            }) => {
                                var t;
                                return null == (t = i.calendarEvent) ? void 0 : t.eventId
                            }
                        }
                    },
                    effects: {
                        "calendar.fetchPlaybook": {
                            versionAvailability: "*"
                        },
                        "calendar.listCalendars": {
                            versionAvailability: "*"
                        },
                        "calendar.listEvents": {
                            versionAvailability: "*"
                        },
                        "calendar.listCoworkersEvents": {
                            versionAvailability: "*"
                        },
                        "calendar.createEvents": {
                            versionAvailability: "*"
                        },
                        "calendar.cancelEvents": {
                            versionAvailability: "*"
                        },
                        "calendar.updateEvents": {
                            versionAvailability: "*"
                        },
                        "calendar.suggestMeetingTimes": {
                            versionAvailability: "*"
                        },
                        "calendar.listCalendarResources": {
                            versionAvailability: "*"
                        }
                    },
                    authentication: void 0,
                    createsConnectionForCurrentUser: !0,
                    latestVersion: "1.0.0",
                    stateDuplicator: ({
                        original: e
                    }) => void 0,
                    getModuleConfigurationStatus: e => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflows.modules.calendar.description",
                        defaultMessage: "Schedule seamlessly. Syncs with Google Calendar and iCloud."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflows.modules.calendar.name",
                        defaultMessage: "Calendar"
                    }),
                    getShortName: e => e.formatMessage({
                        id: "workflows.modules.calendar.shortName",
                        defaultMessage: "Calendar"
                    }),
                    getSearchKeywords: () => ["Apple", "iCloud", "Gcal", "Google", "Outlook"],
                    getMessageIfNotValid: (e, i) => e.formatMessage({
                        id: "workflows.modules.calendar.notConnected",
                        defaultMessage: "Calendar is not connected to {workflowName}"
                    }, {
                        workflowName: i
                    }),
                    getDefaultPermissions: e => {
                        if (!(null != e && e.defaultCalendar)) return [];
                        let {
                            accountId: i,
                            calendarId: t
                        } = e.defaultCalendar;
                        return [{
                            moduleType: "calendar",
                            type: "accountOrganizationCalendars",
                            identifier: i,
                            actions: ["read", "readCoworker"]
                        }, {
                            moduleType: "calendar",
                            type: "calendar",
                            identifier: `${i}:${t}`,
                            accountId: i,
                            calendarId: t,
                            ...r
                        }]
                    },
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(998172).D,
                    getSupportedIcons: () => [t(821472).googleCalendarIcon, t(227946).notionCalendarIcon, t(680983).appleIcon]
                }
        },
        264420: (e, i, t) => {
            t.d(i, {
                $: () => d,
                LS: () => s,
                NI: () => n,
                NV: () => l
            }), t(16280), t(898992), t(672577);
            var a = () => t(402459);

            function o(e) {
                let {
                    message: i
                } = e;
                if (!i) return;
                let t = function(e) {
                    for (let i of e) {
                        if (!i) continue;
                        let e = a().A2.slackMessage.parseUri(i);
                        if (!(e instanceof Error)) return {
                            channelId: e.channelId,
                            messageTs: e.messageTs,
                            threadTs: e.threadTs
                        }
                    }
                }([i.threadId, i.uri, i.id]);
                if (!t) return;
                let o = t.threadTs || t.messageTs;
                return `${t.channelId}-${o}`
            }
            let l = ["app_mentions:read", "channels:history", "channels:read", "emoji:read", "files:read", "reactions:read", "usergroups:read", "users:read.email", "users:read"],
                r = Object.assign({}, ...["remove", "none", "read-only", "reply-in-thread", "read-write"].map((e, i) => ({
                    [e]: i
                })));

            function s(e) {
                return [...e].sort((e, i) => r[i] - r[e])
            }

            function n(e) {
                if (void 0 !== e.shouldShowTyping) return e.shouldShowTyping;
                switch (e.type) {
                    case "slack.app.mention":
                    case "slack.reaction.added":
                        return !0;
                    default:
                        return !1
                }
            }

            function c(e) {
                var i;
                return !!(null == (i = e.channelIds) ? void 0 : i.length) || !!e.allChannels
            }
            let d = {
                type: "slack",
                isSingleton: !0,
                getToolNamePrefix: () => "slack",
                config: {
                    scopes: {
                        local: [...l],
                        production: [...l]
                    },
                    botWriteScopes: {
                        local: ["chat:write.customize", "chat:write", "files:write", "reactions:write", "usergroups:write", "assistant:write"],
                        production: ["chat:write.customize", "chat:write", "reactions:write", "usergroups:write"]
                    },
                    botPrivateScopes: {
                        local: ["groups:history", "groups:read"],
                        production: ["groups:history", "groups:read"]
                    },
                    userScopes: {
                        local: ["groups:read", "users:read.email", "users:read", "users.profile:read"],
                        production: ["groups:read", "users:read.email", "users:read", "users.profile:read"]
                    }
                },
                authentication: {
                    type: "oauth2"
                },
                isAvailable: e => {
                    let {
                        configStep: i,
                        isCustomAgentContext: a
                    } = e;
                    return !!a || !!i.isCustomAgent || (0, t(16712).UD)(e, "workflows_slack_module_available", ["enableAgentIntegrations"])
                },
                latestVersion: "1.0.0",
                triggers: {
                    "slack.message": {
                        isTriggerConfigured: c,
                        fields: {
                            channels: {
                                required: () => !0,
                                isConfigured: c
                            }
                        },
                        triggerDuplicator: ({
                            original: e
                        }) => ({
                            type: e.type,
                            filters: e.filters
                        }),
                        versionAvailability: "*",
                        createDefaultState: () => ({
                            type: "slack.message"
                        }),
                        getTriggerDedupKey: ({
                            triggerVariables: e
                        }) => o({
                            message: e.message
                        })
                    },
                    "slack.thread.created": {
                        isTriggerConfigured: c,
                        fields: {
                            channels: {
                                required: () => !0,
                                isConfigured: c
                            }
                        },
                        triggerDuplicator: ({
                            original: e
                        }) => ({
                            type: e.type,
                            filters: e.filters
                        }),
                        versionAvailability: "*",
                        createDefaultState: () => ({
                            type: "slack.thread.created"
                        }),
                        getTriggerDedupKey: ({
                            triggerVariables: e
                        }) => {
                            var i;
                            return o({
                                message: null == (i = e.thread) ? void 0 : i[0]
                            })
                        }
                    },
                    "slack.reaction.added": {
                        isTriggerConfigured: c,
                        fields: {
                            channels: {
                                required: () => !0,
                                isConfigured: c
                            },
                            reactions: {
                                required: () => !1,
                                isConfigured: e => !!(e.reactions && e.reactions.length > 0)
                            },
                            from: {
                                required: () => !1,
                                isConfigured: e => !!e.from
                            }
                        },
                        triggerDuplicator: ({
                            original: e
                        }) => ({
                            type: e.type,
                            reactions: e.reactions,
                            allowMultipleReactions: e.allowMultipleReactions,
                            threadIds: e.threadIds,
                            from: e.from
                        }),
                        versionAvailability: "*",
                        createDefaultState: () => ({
                            type: "slack.reaction.added"
                        }),
                        getTriggerDedupKey: ({
                            triggerVariables: e
                        }) => o({
                            message: e.isFollowUpMessage ? e.thread[0] : e.message
                        })
                    },
                    "slack.app.mention": {
                        isTriggerConfigured: c,
                        fields: {
                            channels: {
                                required: () => !0,
                                isConfigured: c
                            }
                        },
                        triggerDuplicator: ({
                            original: e
                        }) => ({
                            type: e.type
                        }),
                        versionAvailability: "*",
                        createDefaultState: () => ({
                            type: "slack.app.mention"
                        }),
                        getTriggerDedupKey: ({
                            triggerVariables: e
                        }) => o({
                            message: e.message
                        })
                    }
                },
                effects: {
                    "slack.createThreadInChannel": {
                        versionAvailability: "*"
                    },
                    "slack.createThreadInDirectMessage": {
                        versionAvailability: "*"
                    },
                    "slack.replyInThread": {
                        versionAvailability: "*"
                    },
                    "slack.updateMessage": {
                        versionAvailability: "*"
                    },
                    "slack.addReactionToMessage": {
                        versionAvailability: "*"
                    },
                    "slack.removeReactionFromMessage": {
                        versionAvailability: "*"
                    },
                    "slack.getThreadsInChannelSince": {
                        versionAvailability: "*"
                    },
                    "slack.queryChannels": {
                        versionAvailability: "*"
                    },
                    "slack.getUser": {
                        versionAvailability: "*"
                    },
                    "slack.findUserByEmail": {
                        versionAvailability: "*"
                    },
                    "slack.parseSlackUriOrUrl": {
                        versionAvailability: "*"
                    },
                    "slack.viewFileUrl": {
                        versionAvailability: "*"
                    },
                    "slack.search": {
                        versionAvailability: "*"
                    },
                    "slack.loadMessage": {
                        versionAvailability: "*"
                    },
                    "slack.getUserMessages": {
                        versionAvailability: "*"
                    }
                },
                stateDuplicator: () => void 0,
                getModuleConfigurationStatus: e => {
                    var i;
                    return null != (i = e.state) && i.connectionPointer ? "ready" : "invalid"
                },
                getDescription: e => e.formatMessage({
                    defaultMessage: "Send and read messages from a connected Slack workspace.",
                    id: "workflow.module.slack.description"
                }),
                getName: e => e.formatMessage({
                    defaultMessage: "Slack",
                    id: "workflow.module.slack.title"
                }),
                getMessageIfNotValid: (e, i) => e.formatMessage({
                    defaultMessage: "Slack is not connected to {workflowName}",
                    id: "workflow.module.slack.notConnected"
                }, {
                    workflowName: i
                }),
                getDefaultPermissions: () => [{
                    moduleType: "slack",
                    type: "slack",
                    identifier: "public:*",
                    actions: ["read"]
                }, {
                    moduleType: "slack",
                    type: "slack",
                    identifier: "users:*",
                    actions: ["read"]
                }],
                getAIConfigurableDefaultPermissions: ({
                    type: e
                }) => "workflow" === e ? [{
                    identifier: "public:*",
                    actions: ["read"]
                }, {
                    identifier: "users:*",
                    actions: ["read"]
                }] : [{
                    identifier: "*",
                    actions: ["read", "write"]
                }, {
                    identifier: "users:*",
                    actions: ["read"]
                }],
                getModuleConfigSection: () => "connections",
                getIcon: () => t(378111).slackIcon,
                autoGrantPermissions: ({
                    module: e,
                    workflow: i,
                    uriContext: t
                }) => {
                    var a;
                    let o = e,
                        l = i.triggers || [];
                    if ("slack" !== o.type) return o;
                    let r = null == (a = o.permissions) ? void 0 : a.find(e => {
                        var i;
                        return "public:*" === e.identifier && (null == (i = e.actions) ? void 0 : i.includes("read"))
                    });
                    for (let e of l) {
                        let i = e.state;
                        if (i && ("slack.message" === i.type || "slack.app.mention" === i.type || "slack.reaction.added" === i.type || "slack.thread.created" === i.type) && i.channelIds && !r)
                            for (let e of i.channelIds) o = function(e) {
                                var i;
                                let {
                                    module: t,
                                    channelId: a
                                } = e;
                                return (null == (i = t.permissions) ? void 0 : i.find(e => Array.isArray(e.identifier) ? e.identifier.includes(a) : e.identifier === a)) ? t : { ...t,
                                    permissions: [...t.permissions || [], {
                                        moduleType: "slack",
                                        type: "slack",
                                        identifier: a,
                                        actions: ["read"]
                                    }]
                                }
                            }({
                                module: o,
                                channelId: e
                            })
                    }
                    return o
                }
            }
        },
        285316: (e, i, t) => {
            t.d(i, {
                _J: () => d,
                gB: () => o,
                kM: () => l,
                ki: () => u,
                ou: () => g,
                p$: () => r,
                zy: () => a
            }), t(898992), t(672577), t(737550);
            let a = {
                read: !0,
                modifyInbox: !0,
                draft: {
                    enabled: !0,
                    client: "gmail"
                },
                send: "with_confirmation"
            };

            function o(e) {
                return e ? { ...a,
                    draft: { ...a.draft,
                        client: e
                    }
                } : a
            }

            function l(e) {
                let [i, t] = e.toLowerCase().split("@");
                if (!t) return e.toLowerCase();
                let a = "gmail.com" === t || "googlemail.com" === t,
                    o = i;
                a && (o = o.replace(/\./g, ""));
                let l = o.indexOf("+");
                return -1 !== l && (o = o.substring(0, l)), `${o}@${a?"gmail.com":t}`
            }

            function r(e, i) {
                let t = l(e);
                return i.find(e => l(e.email) === t) ? ? i[0]
            }

            function s(e) {
                return "read" === e ? {
                    read: !0,
                    modifyInbox: !1,
                    draft: {
                        enabled: !1,
                        client: "notion_mail"
                    },
                    send: "disallow"
                } : {
                    read: !0,
                    modifyInbox: !0,
                    draft: {
                        enabled: !0,
                        client: "notion_mail"
                    },
                    send: "with_confirmation"
                }
            }

            function n(e) {
                if (!e) return;
                let i = e.trim().toLowerCase();
                if (("read" === i || "write" === i) && 1) return i
            }

            function c(e) {
                return e.some(e => "write" === n(e)) ? s("write") : e.some(e => "read" === n(e)) ? s("read") : void 0
            }

            function d(e, i) {
                var t;
                if (null != e && null != (t = e.emailPermissionSettings) && t[i]) return e.emailPermissionSettings[i];
                if (null != e && e.emailPermissionSettings) {
                    let t = i.trim().toLowerCase();
                    for (let [i, a] of Object.entries(e.emailPermissionSettings))
                        if (i.trim().toLowerCase() === t) return a
                }
                if (null != e && e.emailScopes) {
                    let t = e.emailScopes[i];
                    if (t && t.length > 0) {
                        let e = c(t);
                        if (e) return e
                    }
                    let a = i.trim().toLowerCase();
                    for (let [i, t] of Object.entries(e.emailScopes))
                        if (i.trim().toLowerCase() === a && t && t.length > 0) {
                            let e = c(t);
                            if (e) return e
                        }
                }
                if (null != e && e.scopes && e.scopes.length > 0) {
                    let i = c(e.scopes);
                    if (i) return i
                }
                return null != e && e.preferredMailClient ? { ...a,
                    draft: { ...a.draft,
                        client: e.preferredMailClient
                    }
                } : a
            }
            let g = "gmail",
                u = {
                    type: "mail",
                    isSingleton: !1,
                    getModuleDedupeKey: e => e.type,
                    getToolNamePrefix: () => "mail",
                    config: {
                        scopes: ["read", "write"]
                    },
                    isAvailable: e => {
                        let {
                            configStep: i,
                            experimentService: a,
                            userId: o,
                            spaceId: l,
                            isCustomAgentContext: r
                        } = e;
                        return !!r || !!i.isCustomAgent || a.checkGate({
                            gateName: "workflows_mail_module_available",
                            actor: o ? {
                                id: o,
                                table: "notion_user"
                            } : t(810016).S,
                            customIDs: {
                                spaceId: l
                            }
                        })
                    },
                    triggers: {
                        "mail.email.received": {
                            isTriggerConfigured: e => {
                                if ("mail.email.received" !== e.type || !Array.isArray(e.emailAccountIds) || 0 === e.emailAccountIds.length) return !1;
                                if (e.filters && e.filters.length > 0)
                                    for (let t of e.filters) {
                                        var i;
                                        if ("is_empty" !== t.operator && "is_not_empty" !== t.operator && !(null != (i = t.value) && null != (i = i.value) && i.trim())) return !1
                                    }
                                return !0
                            },
                            fields: {
                                emailAddresses: {
                                    required: () => !0,
                                    isConfigured: e => Array.isArray(e.emailAccountIds) && e.emailAccountIds.length > 0
                                }
                            },
                            triggerDuplicator: ({
                                original: e
                            }) => ({
                                type: e.type
                            }),
                            versionAvailability: "1.0.0",
                            createDefaultState: () => ({
                                type: "mail.email.received"
                            }),
                            getTriggerDedupKey: e => {
                                let i = e.triggerVariables.email.id;
                                return `${e.workflowId}-${i}`
                            }
                        },
                        "mail.email.sent": {
                            isTriggerConfigured: e => {
                                if ("mail.email.sent" !== e.type || !Array.isArray(e.emailAccountIds) || 0 === e.emailAccountIds.length) return !1;
                                if (e.filters && e.filters.length > 0)
                                    for (let t of e.filters) {
                                        var i;
                                        if ("is_empty" !== t.operator && "is_not_empty" !== t.operator && !(null != (i = t.value) && null != (i = i.value) && i.trim())) return !1
                                    }
                                return !0
                            },
                            fields: {
                                emailAddresses: {
                                    required: () => !0,
                                    isConfigured: e => Array.isArray(e.emailAccountIds) && e.emailAccountIds.length > 0
                                }
                            },
                            triggerDuplicator: ({
                                original: e
                            }) => ({
                                type: e.type
                            }),
                            versionAvailability: "1.0.0",
                            createDefaultState: () => ({
                                type: "mail.email.sent"
                            }),
                            getTriggerDedupKey: e => {
                                let i = e.triggerVariables.email.id;
                                return `${e.workflowId}-${i}`
                            }
                        },
                        "mail.email.receivedorsent": {
                            isTriggerConfigured: e => {
                                if ("mail.email.receivedorsent" !== e.type || !Array.isArray(e.emailAccountIds) || 0 === e.emailAccountIds.length) return !1;
                                if (e.filters && e.filters.length > 0)
                                    for (let t of e.filters) {
                                        var i;
                                        if ("is_empty" !== t.operator && "is_not_empty" !== t.operator && !(null != (i = t.value) && null != (i = i.value) && i.trim())) return !1
                                    }
                                return !0
                            },
                            fields: {
                                emailAddresses: {
                                    required: () => !0,
                                    isConfigured: e => Array.isArray(e.emailAccountIds) && e.emailAccountIds.length > 0
                                }
                            },
                            triggerDuplicator: ({
                                original: e
                            }) => ({
                                type: e.type
                            }),
                            versionAvailability: "1.0.0",
                            createDefaultState: () => ({
                                type: "mail.email.receivedorsent"
                            }),
                            getTriggerDedupKey: e => {
                                let i = e.triggerVariables.email.id;
                                return `${e.workflowId}-${i}`
                            }
                        },
                        "mail.label.applied": {
                            isTriggerConfigured: e => "mail.label.applied" === e.type && Array.isArray(e.emailAccountIds) && e.emailAccountIds.length > 0,
                            fields: {
                                emailAddresses: {
                                    required: () => !0,
                                    isConfigured: e => Array.isArray(e.emailAccountIds) && e.emailAccountIds.length > 0
                                },
                                labels: {
                                    required: () => !1,
                                    isConfigured: e => Array.isArray(e.labelNames) && e.labelNames.length > 0
                                }
                            },
                            triggerDuplicator: ({
                                original: e
                            }) => ({
                                type: e.type
                            }),
                            versionAvailability: "1.0.0",
                            createDefaultState: () => ({
                                type: "mail.label.applied"
                            }),
                            getTriggerDedupKey: e => {
                                let i = e.triggerVariables.email.id,
                                    t = e.triggerVariables.appliedLabel;
                                return `${e.workflowId}-${i}-${t}`
                            }
                        }
                    },
                    effects: {
                        "mail.runTool": {
                            versionAvailability: "*"
                        },
                        "mail.listTools": {
                            versionAvailability: "*"
                        },
                        "mail.getPrompt": {
                            versionAvailability: "*"
                        },
                        "mail.searchEmails": {
                            versionAvailability: "*"
                        },
                        "mail.searchOutlookEmails": {
                            versionAvailability: "*"
                        },
                        "mail.viewThreadContent": {
                            versionAvailability: "*"
                        },
                        "mail.readAttachment": {
                            versionAvailability: "*"
                        },
                        "mail.createMailBlock": {
                            versionAvailability: "*"
                        },
                        "mail.listMailboxViews": {
                            versionAvailability: "*"
                        },
                        "mail.getMailbox": {
                            versionAvailability: "*"
                        },
                        "mail.listStatusProperties": {
                            versionAvailability: "*"
                        },
                        "mail.healthCheck": {
                            versionAvailability: "*"
                        },
                        "mail.listGmailFilters": {
                            versionAvailability: "*"
                        },
                        "mail.setReadStatus": {
                            versionAvailability: "*"
                        },
                        "mail.createLabel": {
                            versionAvailability: "*"
                        },
                        "mail.listLabels": {
                            versionAvailability: "*"
                        },
                        "mail.updateLabel": {
                            versionAvailability: "*"
                        },
                        "mail.deleteLabel": {
                            versionAvailability: "*"
                        },
                        "mail.applyUserLabelsWithLazyCreate": {
                            versionAvailability: "*"
                        },
                        "mail.removeUserLabels": {
                            versionAvailability: "*"
                        },
                        "mail.archiveThreadsById": {
                            versionAvailability: "*"
                        },
                        "mail.archiveThreadsByQuery": {
                            versionAvailability: "*"
                        },
                        "mail.trashThread": {
                            versionAvailability: "*"
                        },
                        "mail.markThreadSpam": {
                            versionAvailability: "*"
                        },
                        "mail.moveThreadToInbox": {
                            versionAvailability: "*"
                        },
                        "mail.starThread": {
                            versionAvailability: "*"
                        },
                        "mail.createStatusColumn": {
                            versionAvailability: "*"
                        },
                        "mail.updateStatus": {
                            versionAvailability: "*"
                        },
                        "mail.setReminder": {
                            versionAvailability: "*"
                        },
                        "mail.unsetReminder": {
                            versionAvailability: "*"
                        },
                        "mail.blockSender": {
                            versionAvailability: "*"
                        },
                        "mail.unblockSender": {
                            versionAvailability: "*"
                        },
                        "mail.unsubscribeSender": {
                            versionAvailability: "*"
                        },
                        "mail.createGmailFilter": {
                            versionAvailability: "*"
                        },
                        "mail.deleteGmailFilter": {
                            versionAvailability: "*"
                        },
                        "mail.updateGmailFilter": {
                            versionAvailability: "*"
                        },
                        "mail.listOutlookCategories": {
                            versionAvailability: "*"
                        },
                        "mail.createOutlookCategory": {
                            versionAvailability: "*"
                        },
                        "mail.applyOutlookCategories": {
                            versionAvailability: "*"
                        },
                        "mail.removeOutlookCategories": {
                            versionAvailability: "*"
                        },
                        "mail.listOutlookFolders": {
                            versionAvailability: "*"
                        },
                        "mail.createOutlookFolder": {
                            versionAvailability: "*"
                        },
                        "mail.moveToOutlookFolder": {
                            versionAvailability: "*"
                        },
                        "mail.createOrUpdateDraft": {
                            versionAvailability: "*"
                        },
                        "mail.createOrUpdateGmailDraft": {
                            versionAvailability: "*"
                        },
                        "mail.createOrUpdateOutlookDraft": {
                            versionAvailability: "*"
                        },
                        "mail.createOrUpdateDraftAllClients": {
                            versionAvailability: "*"
                        },
                        "mail.sendNewEmail": {
                            versionAvailability: "*"
                        },
                        "mail.sendExistingDraft": {
                            versionAvailability: "*"
                        }
                    },
                    authentication: void 0,
                    createsConnectionForCurrentUser: !0,
                    latestVersion: "1.0.0",
                    stateDuplicator: ({
                        original: e
                    }) => void 0,
                    getModuleConfigurationStatus: e => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflows.modules.mail.description",
                        defaultMessage: "Manage your inbox. Read, draft, and send emails. Syncs with Gmail."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflows.modules.mail.name",
                        defaultMessage: "Notion Mail"
                    }),
                    getShortName: e => e.formatMessage({
                        id: "workflows.modules.mail.shortName",
                        defaultMessage: "Mail"
                    }),
                    getSearchKeywords: () => ["Gmail", "Google", "Email"],
                    getMessageIfNotValid: (e, i) => e.formatMessage({
                        id: "workflows.modules.mail.notConnected",
                        defaultMessage: "Mail is not connected to {workflowName}"
                    }, {
                        workflowName: i
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(823811).o,
                    getSupportedIcons: () => [t(441443).notionMailIcon, t(898869).gmailIcon]
                }
        },
        337762: (e, i, t) => {
            t.d(i, {
                f: () => o
            }), t(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.5 4.12 19 12.13",
                    svg: (0, t(474848).jsx)("path", {
                        d: "M4.5 4.125A2.125 2.125 0 0 0 2.375 6.25v8.25H.5v.75a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-.75h-1.875V6.25A2.125 2.125 0 0 0 15.5 4.125zM16.375 14.5H3.625V6.25c0-.483.392-.875.875-.875h11c.483 0 .875.392.875.875z"
                    })
                },
                o = (0, t(104509).wt)("laptopComputer", a, "default")
        },
        409691: (e, i, t) => {
            t.d(i, {
                BH: () => l,
                CG: () => r,
                Pc: () => a,
                Rz: () => c,
                Ws: () => n,
                v7: () => s
            }), t(944114), t(517642), t(658004), t(733853), t(845876), t(432475), t(515024), t(731698), t(898992), t(354520), t(581454), t(737550);
            let a = "__NONE__";

            function o(e) {
                return e ? e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") : "unknown"
            }

            function l(e) {
                if (!e) return "unknown";
                let i = (0, t(758654).bk)(e);
                if (!i) return "unknown";
                let a = i.hostname;
                if ("localhost" === i.hostname && i.port) a += `-${i.port}`;
                else {
                    let e = (0, t(93145).G)(i.hostname);
                    e && (a = a.replaceAll(`.${e}`, ""))
                }
                let l = o(a);
                l = l.replaceAll("mcp-", "").replaceAll("-mcp", "-");
                let r = i.pathname.split("/").filter(Boolean);
                if (r.length > 0 && "mcp" !== r[0]) {
                    let e = o(r[0]);
                    e && !l.includes(e) && (l += `-${e}`)
                }
                return l
            }

            function r(e, i) {
                return `mcp-${e||"unknown"}-${i}`
            }

            function s(e) {
                let i = [],
                    t = [];
                for (let o of e) {
                    var a;
                    null != (a = o.annotations) && a.readOnlyHint ? i.push(o) : t.push(o)
                }
                return {
                    readTools: i,
                    writeTools: t
                }
            }

            function n(e) {
                if (!e || 0 === e.length) return {};
                let i = e.some(e => {
                        var i;
                        return (null == (i = e.annotations) ? void 0 : i.readOnlyHint) === !0
                    }),
                    t = e.some(e => {
                        var i;
                        return (null == (i = e.annotations) ? void 0 : i.readOnlyHint) !== !0
                    });
                return i && !t ? {
                    runReadToolsAutomatically: !1
                } : t && !i ? {
                    runWriteToolsAutomatically: !1
                } : {}
            }

            function c(e) {
                if (e && "serverUrl" in e && "string" == typeof e.serverUrl) return e.serverUrl
            }
        },
        593186: (e, i, t) => {
            t.d(i, {
                r4: () => n,
                Tc: () => c,
                jK: () => r,
                C7: () => s,
                sQ: () => d,
                Nh: () => l
            });
            var a = () => t(722371);

            function o(e) {
                let {
                    experimentService: i,
                    userId: a
                } = e;
                return i.checkGate({
                    gateName: "workers",
                    actor: a ? {
                        table: t(514214).oo,
                        id: a
                    } : t(810016).S
                })
            }
            let l = {
                asana: {
                    type: "asana",
                    isSingleton: !0,
                    config: {},
                    hideReconnect: !0,
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "asana.search": {
                            versionAvailability: "*"
                        },
                        "asana.loadTask": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.asana.description",
                        defaultMessage: "Search Asana tasks and projects."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.asana.title",
                        defaultMessage: "Asana"
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(330925).asanaIcon
                },
                box: {
                    type: "box",
                    isSingleton: !0,
                    config: {},
                    hideReconnect: !0,
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "box.search": {
                            versionAvailability: "*"
                        },
                        "box.loadFile": {
                            versionAvailability: "*"
                        },
                        "box.findSharedItem": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.box.description",
                        defaultMessage: "Search Box files."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.box.title",
                        defaultMessage: "Box"
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(367266).boxIcon
                },
                boxy: {
                    type: "boxy",
                    isSingleton: !0,
                    config: {
                        scopes: {}
                    },
                    authentication: {
                        type: "header",
                        headers: []
                    },
                    latestVersion: "1.0.0",
                    stateDuplicator: () => void 0,
                    getModuleConfigurationStatus: e => {
                        var i;
                        return null != (i = e.state) && i.connectionPointer ? "ready" : "invalid"
                    },
                    getDescription: e => e.formatMessage({
                        id: "workflows.modules.boxy.description",
                        defaultMessage: "Create Boxy boxes and manage coding threads from connected agents."
                    }),
                    getName: () => "Boxy",
                    getMessageIfNotValid: () => "Please connect to Boxy",
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(776523).openAiIcon,
                    getSearchKeywords: () => ["openai", "boxy", "coding"],
                    isAvailable: e => (0, t(16712).UD)(e, "software_factory"),
                    effects: {
                        "boxy.createBox": {
                            versionAvailability: "*"
                        },
                        "boxy.getBox": {
                            versionAvailability: "*"
                        },
                        "boxy.sendBoxThread": {
                            versionAvailability: "*"
                        },
                        "boxy.streamMessageToThread": {
                            versionAvailability: "*"
                        }
                    },
                    triggers: {}
                },
                browser: {
                    type: "browser",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "browser.run": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: ({
                        configStep: e
                    }) => !!e.enableScriptAgent && !!e.enableScriptAgentAdvanced,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.browser.description",
                        defaultMessage: "Drive a Browserbase session with scripted browser actions."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.browser.title",
                        defaultMessage: "Browser"
                    }),
                    getModuleConfigSection: () => "system",
                    getIcon: () => t(900333).U
                },
                calendar: t(258902).BJ,
                claude: {
                    type: "claude",
                    isSingleton: !0,
                    config: {
                        scopes: {}
                    },
                    authentication: {
                        type: "header",
                        headers: []
                    },
                    latestVersion: "1.0.0",
                    stateDuplicator: () => void 0,
                    getModuleConfigurationStatus: e => {
                        var i;
                        return null != (i = e.state) && i.connectionPointer ? "ready" : "invalid"
                    },
                    getDescription: e => e.formatMessage({
                        id: "workflows.modules.claude.description",
                        defaultMessage: "Create and manage coding sessions in Claude for connected repositories."
                    }),
                    getName: () => "Claude Code",
                    getMessageIfNotValid: () => "Please connect to Claude Code",
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(756367).claudeIcon,
                    isAvailable: e => (0, t(16712).UD)(e, "workflows_claude_module_available"),
                    effects: {
                        "claude.startRun": {
                            versionAvailability: "*"
                        },
                        "claude.archiveRun": {
                            versionAvailability: "*"
                        },
                        "claude.getRunStatus": {
                            versionAvailability: "*"
                        },
                        "claude.listSessionEvents": {
                            versionAvailability: "*"
                        },
                        "claude.sendUserMessage": {
                            versionAvailability: "*"
                        }
                    },
                    triggers: {}
                },
                computer: {
                    type: "computer",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "computer.listMachines": {
                            versionAvailability: "*"
                        },
                        "computer.listSecrets": {
                            versionAvailability: "*"
                        },
                        "computer.createMachine": {
                            versionAvailability: "*"
                        },
                        "computer.destroyMachine": {
                            versionAvailability: "*"
                        },
                        "computer.setSecret": {
                            versionAvailability: "*"
                        },
                        "computer.terminal": {
                            versionAvailability: "*"
                        },
                        "computer.browser": {
                            versionAvailability: "*"
                        },
                        "computer.getJobStatus": {
                            versionAvailability: "*"
                        },
                        "computer.getJobLogs": {
                            versionAvailability: "*"
                        },
                        "computer.viewFileUrl": {
                            versionAvailability: "*"
                        },
                        "computer.getMachine": {
                            versionAvailability: "*"
                        },
                        "computer.poll": {
                            versionAvailability: "*"
                        },
                        "computer.wait": {
                            versionAvailability: "*"
                        },
                        "computer.readFile": {
                            versionAvailability: "*"
                        },
                        "computer.writeFile": {
                            versionAvailability: "*"
                        },
                        "computer.uploadFile": {
                            versionAvailability: "*"
                        },
                        "computer.downloadFile": {
                            versionAvailability: "*"
                        },
                        "computer.listDir": {
                            versionAvailability: "*"
                        },
                        "computer.mkdir": {
                            versionAvailability: "*"
                        },
                        "computer.rm": {
                            versionAvailability: "*"
                        },
                        "computer.getTags": {
                            versionAvailability: "*"
                        },
                        "computer.setTags": {
                            versionAvailability: "*"
                        },
                        "computer.deleteSecret": {
                            versionAvailability: "*"
                        },
                        "computer.tunnels": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: function(e) {
                        return !!e.configStep.enableScriptAgent && !1 !== e.configStep.useComputer && e.experimentService.checkGate({
                            actor: e.userId ? {
                                id: e.userId,
                                table: "notion_user"
                            } : t(810016).S,
                            customIDs: {
                                spaceId: e.spaceId
                            },
                            gateName: "filesystem_sandbox"
                        })
                    },
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        defaultMessage: "Provision and control remote computers.",
                        id: "workflow.module.computer.description"
                    }),
                    getName: e => e.formatMessage({
                        defaultMessage: "Computer",
                        id: "workflow.module.computer.title"
                    }),
                    getModuleConfigSection: () => "system",
                    getIcon: () => t(337762).f
                },
                confluence: {
                    type: "confluence",
                    isSingleton: !0,
                    config: {},
                    hideReconnect: !0,
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "confluence.search": {
                            versionAvailability: "*"
                        },
                        "confluence.cqlQuery": {
                            versionAvailability: "*"
                        },
                        "confluence.loadPage": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.confluence.description",
                        defaultMessage: "Search, query, and load Confluence pages."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.confluence.title",
                        defaultMessage: "Confluence"
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(233019).confluenceIcon
                },
                customConnector: {
                    type: "customConnector",
                    isSingleton: !0,
                    config: {},
                    hideReconnect: !0,
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {},
                    isAvailable: e => (0, t(16712).UD)(e, "custom_ai_connectors"),
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.customConnector.description",
                        defaultMessage: "Search custom connectors."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.customConnector.title",
                        defaultMessage: "Custom Connectors"
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(85071).integrationIcon
                },
                cursor: {
                    type: "cursor",
                    isSingleton: !0,
                    config: {
                        scopes: {}
                    },
                    authentication: {
                        type: "header",
                        headers: []
                    },
                    latestVersion: "1.0.0",
                    stateDuplicator: () => void 0,
                    getModuleConfigurationStatus: e => {
                        var i;
                        return null != (i = e.state) && i.connectionPointer ? "ready" : "invalid"
                    },
                    getName: () => "Cursor",
                    getMessageIfNotValid: () => "Please connect to Cursor",
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(897799).cursorIcon,
                    isAvailable: () => !0,
                    effects: {
                        "cursor.createAgent": {
                            versionAvailability: "*"
                        },
                        "cursor.addFollowup": {
                            versionAvailability: "*"
                        },
                        "cursor.getAgent": {
                            versionAvailability: "*"
                        },
                        "cursor.listRepositories": {
                            versionAvailability: "*"
                        }
                    },
                    triggers: {}
                },
                discord: {
                    type: "discord",
                    isSingleton: !0,
                    getToolNamePrefix: () => "discord",
                    config: {},
                    authentication: {
                        type: "oauth2"
                    },
                    latestVersion: "1.0.0",
                    triggers: {
                        "discord.interaction": {
                            isTriggerConfigured: e => !!(null == e ? void 0 : e.type),
                            fields: {
                                channels: {
                                    required: () => !1,
                                    isConfigured: e => !!(null == e ? void 0 : e.allChannels) || !!((null == e ? void 0 : e.channelIds) && e.channelIds.length > 0)
                                }
                            },
                            triggerDuplicator: ({
                                original: e
                            }) => ({
                                type: e.type
                            }),
                            versionAvailability: "*",
                            createDefaultState: () => ({
                                type: "discord.interaction"
                            }),
                            getTriggerDedupKey: ({
                                triggerVariables: e
                            }) => e.message.id
                        }
                    },
                    effects: {
                        "discord.search": {
                            versionAvailability: "*"
                        },
                        "discord.sendMessageToChannel": {
                            versionAvailability: "*"
                        },
                        "discord.updateMessage": {
                            versionAvailability: "*"
                        },
                        "discord.addReaction": {
                            versionAvailability: "*"
                        },
                        "discord.removeReaction": {
                            versionAvailability: "*"
                        },
                        "discord.listChannels": {
                            versionAvailability: "*"
                        },
                        "discord.getRecentChannelMessages": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: e => {
                        let {
                            configStep: i,
                            isCustomAgentContext: a
                        } = e;
                        return a || i.isCustomAgent ? (0, t(16712).UD)(e, "custom_agents_discord_module", []) : (0, t(16712).UD)(e, "agent_discord_module", [])
                    },
                    stateDuplicator: () => void 0,
                    getModuleConfigurationStatus: e => {
                        var i;
                        return null != (i = e.state) && i.guildId ? "ready" : "invalid"
                    },
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.discord.description",
                        defaultMessage: "Send and read messages from a connected Discord server."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.discord.title",
                        defaultMessage: "Discord"
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(181415).discordIcon,
                    getDefaultPermissions: () => [{
                        type: "discord",
                        moduleType: "discord",
                        identifier: "*",
                        actions: ["search", "read"]
                    }],
                    getAIConfigurableDefaultPermissions: ({
                        type: e
                    }) => [{
                        identifier: "*",
                        actions: ["search", "read"]
                    }]
                },
                fs: {
                    type: "fs",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "fs.readDir": {
                            versionAvailability: "*"
                        },
                        "fs.readFiles": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.fs.description",
                        defaultMessage: "Read-only virtual filesystem access for the script sandbox."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.fs.title",
                        defaultMessage: "Filesystem"
                    }),
                    getModuleConfigSection: () => "system",
                    getIcon: () => t(937776).B
                },
                gmail: {
                    type: "gmail",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "gmail.search": {
                            versionAvailability: "*"
                        },
                        "gmail.loadThread": {
                            versionAvailability: "*"
                        },
                        "gmail.query": {
                            versionAvailability: "*"
                        }
                    },
                    hideReconnect: !0,
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.gmail.description",
                        defaultMessage: "Search Gmail messages."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.gmail.title",
                        defaultMessage: "Gmail"
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(898869).gmailIcon
                },
                googleCalendar: {
                    type: "googleCalendar",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "googleCalendar.search": {
                            versionAvailability: "*"
                        },
                        "googleCalendar.query": {
                            versionAvailability: "*"
                        }
                    },
                    hideReconnect: !0,
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.googleCalendar.description",
                        defaultMessage: "Search Google Calendar events."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.googleCalendar.title",
                        defaultMessage: "Google Calendar"
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(821472).googleCalendarIcon
                },
                googleDrive: {
                    type: "googleDrive",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    hideReconnect: !0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "googleDrive.search": {
                            versionAvailability: "*"
                        },
                        "googleDrive.loadFile": {
                            versionAvailability: "*"
                        },
                        "googleDrive.lsFolder": {
                            versionAvailability: "*"
                        },
                        "googleDrive.loadZipFile": {
                            versionAvailability: "*"
                        },
                        "googleDrive.grepFiles": {
                            versionAvailability: "*"
                        },
                        "googleDrive.getFileComments": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.googleDrive.description",
                        defaultMessage: "Search Google Drive files."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.googleDrive.title",
                        defaultMessage: "Google Drive"
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(933546).googleDriveIcon
                },
                github: {
                    type: "github",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    hideReconnect: !0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "github.search": {
                            versionAvailability: "*"
                        },
                        "github.grepCode": {
                            versionAvailability: "*"
                        },
                        "github.lsDirectory": {
                            versionAvailability: "*"
                        },
                        "github.loadPR": {
                            versionAvailability: "*"
                        },
                        "github.loadIssue": {
                            versionAvailability: "*"
                        },
                        "github.loadCommit": {
                            versionAvailability: "*"
                        },
                        "github.loadFile": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.github.description",
                        defaultMessage: "Search Github issues, pull requests, and code."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.github.title",
                        defaultMessage: "Github"
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(240150).N
                },
                images: {
                    type: "images",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "images.generate": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.images.description",
                        defaultMessage: "Generate images with AI in the script sandbox."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.images.title",
                        defaultMessage: "Images"
                    }),
                    getModuleConfigSection: () => "system",
                    getIcon: () => t(937233).M
                },
                helpdocs: {
                    type: "helpdocs",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "helpdocs.search": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.helpdocs.description",
                        defaultMessage: "Search Notion Help Center."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.helpdocs.title",
                        defaultMessage: "Help docs"
                    }),
                    getModuleConfigSection: () => "system",
                    getIcon: () => t(712802).bookIcon
                },
                files: {
                    type: "files",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "files.getFileContent": {
                            versionAvailability: "*"
                        },
                        "files.getFileUrl": {
                            versionAvailability: "*"
                        },
                        "files.getFileName": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        defaultMessage: "This integration allows working with files in your Workflow.",
                        id: "workflow.module.files.description"
                    }),
                    getName: e => e.formatMessage({
                        defaultMessage: "Files",
                        id: "workflow.module.files.title"
                    }),
                    getModuleConfigSection: () => "system",
                    getIcon: () => t(138266).B
                },
                jira: {
                    type: "jira",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    hideReconnect: !0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "jira.search": {
                            versionAvailability: "*"
                        },
                        "jira.loadIssue": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.jira.description",
                        defaultMessage: "Search Jira tickets."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.jira.title",
                        defaultMessage: "Jira"
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(117073).jiraIcon
                },
                linear: {
                    type: "linear",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    hideReconnect: !0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "linear.search": {
                            versionAvailability: "*"
                        },
                        "linear.loadIssue": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.linear.description",
                        defaultMessage: "Search Linear issues."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.linear.title",
                        defaultMessage: "Linear"
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(382744).linearIcon
                },
                mail: t(285316).ki,
                marketplace: {
                    type: "marketplace",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "marketplace.installTemplate": {
                            versionAvailability: "*"
                        },
                        "marketplace.searchTemplates": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.marketplace.description",
                        defaultMessage: "Install marketplace templates into your workspace."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.marketplace.title",
                        defaultMessage: "Marketplace"
                    }),
                    getModuleConfigSection: () => "system",
                    getIcon: () => t(792668).notionIcon
                },
                microsoftTeams: {
                    type: "microsoftTeams",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    hideReconnect: !0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "microsoftTeams.search": {
                            versionAvailability: "*"
                        },
                        "microsoftTeams.viewChannel": {
                            versionAvailability: "*"
                        },
                        "microsoftTeams.loadMessage": {
                            versionAvailability: "*"
                        },
                        "microsoftTeams.viewChat": {
                            versionAvailability: "*"
                        },
                        "microsoftTeams.getUserMessages": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.microsoftTeams.description",
                        defaultMessage: "Search Microsoft Teams messages."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.microsoftTeams.title",
                        defaultMessage: "Microsoft Teams"
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(394615).microsoftTeamsIcon
                },
                mcpServer: {
                    type: "mcpServer",
                    config: {},
                    isSingleton: !1,
                    getModuleDedupeKey: e => {
                        var i;
                        return (null == (i = e.state) ? void 0 : i.serverUrl) ? ? e.id
                    },
                    getToolNamePrefix: e => {
                        var i;
                        let a = (0, t(409691).BH)(null == (i = e.state) ? void 0 : i.serverUrl);
                        return `mcp-${a}`
                    },
                    isAvailable: () => !0,
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    stateDuplicator: () => void 0,
                    getModuleConfigurationStatus: e => {
                        var i;
                        return null != (i = e.state) && i.serverUrl ? "ready" : "invalid"
                    },
                    triggers: {},
                    effects: {
                        "mcpServer.runTool": {
                            versionAvailability: "*"
                        },
                        "mcpServer.listResources": {
                            versionAvailability: "*"
                        },
                        "mcpServer.readResource": {
                            versionAvailability: "*"
                        },
                        "mcpServer.listPrompts": {
                            versionAvailability: "*"
                        },
                        "mcpServer.getPrompt": {
                            versionAvailability: "*"
                        },
                        "mcpServer.listTools": {
                            versionAvailability: "*"
                        }
                    },
                    getDescription: e => e.formatMessage({
                        id: "workflows.modules.mcpServer.description",
                        defaultMessage: "Integration with MCP server for AI inference with tools"
                    }),
                    getName: (e, i) => null != i && i.name ? i.name : e.formatMessage({
                        id: "workflows.modules.mcpServer.name",
                        defaultMessage: "MCP Server"
                    }),
                    getMessageIfNotValid: (e, i) => e.formatMessage({
                        id: "workflows.modules.mcpServer.notConnected",
                        defaultMessage: "MCP Server is not configured in {workflowName}"
                    }, {
                        workflowName: i
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(58588).V
                },
                notion: t(445568).notion,
                outlook: {
                    type: "outlook",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "outlook.search": {
                            versionAvailability: "*"
                        },
                        "outlook.loadMessage": {
                            versionAvailability: "*"
                        },
                        "outlook.loadThread": {
                            versionAvailability: "*"
                        },
                        "outlook.query": {
                            versionAvailability: "*"
                        }
                    },
                    hideReconnect: !0,
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.outlook.description",
                        defaultMessage: "Search Outlook messages."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.outlook.title",
                        defaultMessage: "Outlook"
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(40242).microsoftOutlookIcon
                },
                salesforce: t(224468).i,
                search: {
                    type: "search",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "search.search": {
                            versionAvailability: "*"
                        },
                        "search.unifiedSearch": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.search.description",
                        defaultMessage: "Search across Notion and connected sources with structured search inputs."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.search.title",
                        defaultMessage: "Search"
                    }),
                    getModuleConfigSection: () => "system",
                    getIcon: () => t(330274).magnifyingGlassIcon
                },
                security: {
                    type: "security",
                    isSingleton: !0,
                    config: {},
                    latestVersion: "1.0.0",
                    triggers: {
                        "security.threat.detected": {
                            isTriggerConfigured: e => !!(null == e ? void 0 : e.type),
                            triggerDuplicator: ({
                                original: e
                            }) => ({
                                type: e.type,
                                severityFilter: e.severityFilter,
                                categoryFilter: e.categoryFilter,
                                agentIds: e.agentIds
                            }),
                            versionAvailability: "*",
                            createDefaultState: () => ({
                                type: "security.threat.detected",
                                severityFilter: ["high", "medium"]
                            })
                        }
                    },
                    effects: {
                        "security.searchAuditLogs": {
                            versionAvailability: "*"
                        },
                        "security.getAuditLogEntry": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: e => (0, t(16712).UD)(e, "security_agent", []),
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.security.description",
                        defaultMessage: "Detect threats, search audit logs, and monitor agent security across your workspace."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.security.title",
                        defaultMessage: "Security"
                    }),
                    getShortName: e => e.formatMessage({
                        id: "workflow.module.security.shortName",
                        defaultMessage: "Security"
                    }),
                    getModuleConfigSection: () => "system",
                    getIcon: () => t(879051).shieldLockSmallIcon,
                    getSearchKeywords: () => ["security", "threat", "audit", "audit log", "monitor", "protection", "agent", "safety", "compliance", "incident"],
                    hideReconnect: !0
                },
                skills: {
                    type: "skills",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {},
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.skills.description",
                        defaultMessage: "Built-in skills that provide task-specific execution guidance."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.skills.title",
                        defaultMessage: "Skills"
                    }),
                    getModuleConfigSection: () => "system",
                    getIcon: () => t(330274).magnifyingGlassIcon
                },
                sharepoint: {
                    type: "sharepoint",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    hideReconnect: !0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "sharepoint.search": {
                            versionAvailability: "*"
                        },
                        "sharepoint.loadFile": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.sharepoint.description",
                        defaultMessage: "Search SharePoint files."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.sharepoint.title",
                        defaultMessage: "SharePoint"
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(72168).microsoftSharePointIcon
                },
                slack: t(264420).$,
                system: {
                    type: "system",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "system.wait": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.system.description",
                        defaultMessage: "Internal system utilities for script-agent runtime."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.system.title",
                        defaultMessage: "System"
                    }),
                    getModuleConfigSection: () => "system",
                    getIcon: () => t(789511).S
                },
                test: {
                    type: "test",
                    isSingleton: !1,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "test.getState": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.test.description",
                        defaultMessage: "Internal test module for validating module workflows."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.test.title",
                        defaultMessage: "Test"
                    }),
                    getModuleConfigSection: () => "system",
                    getIcon: () => t(850741).c
                },
                web: {
                    type: "web",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    triggers: {},
                    effects: {
                        "web.search": {
                            versionAvailability: "*"
                        },
                        "web.loadPage": {
                            versionAvailability: "*"
                        }
                    },
                    isAvailable: () => !1,
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflow.module.web.description",
                        defaultMessage: "Search the public web and load page content."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflow.module.web.title",
                        defaultMessage: "Web"
                    }),
                    getModuleConfigSection: () => "system",
                    getIcon: () => t(515388).globeIcon
                },
                workers: {
                    type: "workers",
                    isSingleton: !0,
                    config: {},
                    authentication: void 0,
                    latestVersion: "1.0.0",
                    isAvailable: ({
                        configStep: e,
                        experimentService: i,
                        userId: t,
                        isCustomAgentContext: a
                    }) => !e.isCustomAgent && !a && (void 0 === t || o({
                        experimentService: i,
                        userId: t
                    })),
                    triggers: {},
                    effects: {
                        "workers.list": {
                            versionAvailability: "*"
                        }
                    },
                    stateDuplicator: () => void 0,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        id: "workflows.modules.workersMeta.description",
                        defaultMessage: "List available workers in your workspace."
                    }),
                    getName: e => e.formatMessage({
                        id: "workflows.modules.workersMeta.title",
                        defaultMessage: "Workers"
                    }),
                    getModuleConfigSection: () => "system",
                    getIcon: () => t(880357).ow
                },
                worker: {
                    type: "worker",
                    isSingleton: !1,
                    getModuleDedupeKey: e => {
                        var i;
                        return (null == (i = e.state) ? void 0 : i.workerId) ? ? e.id
                    },
                    config: {},
                    isAvailable: ({
                        configStep: e,
                        experimentService: i,
                        userId: t,
                        isCustomAgentContext: a
                    }) => (!!a || !!e.isCustomAgent) && (void 0 === t || o({
                        experimentService: i,
                        userId: t
                    })),
                    authentication: void 0,
                    hideReconnect: !0,
                    latestVersion: "1.0.0",
                    stateDuplicator: () => void 0,
                    getModuleConfigurationStatus: e => {
                        var i;
                        return null != (i = e.state) && i.workerId ? "ready" : "invalid"
                    },
                    triggers: {},
                    effects: {
                        "worker.listTools": {
                            versionAvailability: "*"
                        },
                        "worker.runTool": {
                            versionAvailability: "*"
                        }
                    },
                    getDescription: e => e.formatMessage({
                        id: "workflows.modules.workers.description",
                        defaultMessage: "Execute custom worker tools in your workspace"
                    }),
                    getName: (e, i) => null != i && i.name ? i.name : e.formatMessage({
                        id: "workflows.modules.workers.name",
                        defaultMessage: "Worker"
                    }),
                    getMessageIfNotValid: (e, i) => e.formatMessage({
                        id: "workflows.modules.workers.notConfigured",
                        defaultMessage: "Worker is not configured in {workflowName}"
                    }, {
                        workflowName: i
                    }),
                    getModuleConfigSection: () => "connections",
                    getIcon: () => t(880357).ow
                }
            };

            function r(e) {
                return l[e]
            }

            function s(e, i) {
                var t;
                return null == (t = l[e]) ? void 0 : t.triggers[i]
            }

            function n(e) {
                var i;
                let {
                    type: a,
                    definition: o,
                    id: l,
                    name: r,
                    intl: s,
                    state: n
                } = e, c = null == (i = o.getDefaultPermissions) ? void 0 : i.call(o, n), d = {
                    type: a,
                    id: l ? ? (0, t(4962).Ay)(),
                    name: r ? ? o.getName(s),
                    version: o.latestVersion,
                    ...void 0 !== n ? {
                        state: n
                    } : {},
                    ...void 0 !== c ? {
                        permissions: c
                    } : {}
                };
                return (0, t(635270).yC)(d)
            }

            function c(e) {
                for (let i of Object.values(l))
                    if (i) {
                        for (let [t, o] of (0, a().WP)(i.triggers))
                            if (t === e) return o
                    }
            }

            function d(e) {
                let i = l[e];
                return (null == i ? void 0 : i.isSingleton) ? ? !0
            }
            t(969475).union([t(969475).object({
                optional: {
                    callbackType: t(969475).literals(...t(132702).Bi),
                    moduleSpecific: t(969475).string(),
                    redirectToAuth: t(969475).literal("true"),
                    slackAuthSessionId: t(969475).string(),
                    transcriptId: t(969475).string(),
                    workflowId: t(969475).string()
                },
                required: {
                    moduleId: t(969475).string(),
                    spaceId: t(969475).string(),
                    type: t(969475).literal("workflow"),
                    userId: t(969475).string()
                }
            }), t(969475).object({
                optional: {
                    callbackType: t(969475).literals(...t(132702).Bi),
                    moduleSpecific: t(969475).string(),
                    redirectToAuth: t(969475).literal("true"),
                    slackAuthSessionId: t(969475).string()
                },
                required: {
                    integrationId: t(969475).string(),
                    spaceId: t(969475).string(),
                    transcriptId: t(969475).string(),
                    type: t(969475).literal("agent"),
                    userId: t(969475).string()
                }
            })])
        },
        756367: (e, i, t) => {
            t.r(i), t.d(i, {
                claudeIcon: () => l,
                iconDefinition: () => o
            }), t(296540);
            var a = t(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "-0.03 0 20.06 20",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("g", {
                            className: "logo-light-mode",
                            children: [(0, a.jsx)("g", {
                                clipPath: "url(#clip0_16020_144)",
                                children: (0, a.jsx)("path", {
                                    fill: "#D97757",
                                    d: "m3.908 13.296 3.945-2.206.066-.192-.066-.106H7.66l-.66-.04-2.254-.061-1.954-.081-1.894-.101-.477-.102-.447-.587.046-.293.4-.268.574.05 1.27.086 1.903.132 1.381.08 2.046.213h.325l.045-.131-.111-.081-.087-.081-1.97-1.33-2.13-1.407-1.117-.81-.604-.41-.305-.384-.132-.84.548-.602.737.05.187.051.747.572 1.594 1.23L7.4 7.173l.305.253.122-.086.015-.06-.137-.228-1.132-2.04L5.365 2.94l-.538-.86-.142-.517a2.5 2.5 0 0 1-.086-.607l.624-.845L5.568 0l.833.111.35.304.518 1.179.837 1.857 1.3 2.524.38.749.204.693.076.213h.132v-.122l.107-1.421.197-1.746.193-2.246.066-.633.315-.759.624-.41.488.233.4.572-.055.37-.239 1.542-.467 2.419-.304 1.619h.178l.203-.203.822-1.087 1.38-1.72.61-.684.71-.753.457-.36h.863l.635.941-.284.972-.889 1.123-.736.951-1.056 1.417-.66 1.133.061.091.158-.015 2.386-.506 1.289-.233 1.538-.263.696.324.076.329-.274.673-1.645.405-1.93.384-2.872.678-.036.025.04.051 1.295.121.553.03h1.356l2.523.188.66.435.396.531-.066.405-1.015.516-1.371-.324-3.198-.759-1.097-.273h-.152v.091l.914.89 1.675 1.508 2.097 1.943.106.48-.269.38-.284-.04-1.843-1.381-.71-.623-1.61-1.35h-.106v.141l.37.541 1.96 2.935.101.9-.142.294-.508.177-.558-.101-1.147-1.604-1.183-1.806-.954-1.62-.117.067-.564 6.046-.264.308-.609.233-.507-.384-.27-.623.27-1.23.324-1.603.264-1.275.239-1.584.142-.526-.01-.035-.117.015-1.198 1.64-1.822 2.453-1.442 1.538-.345.137-.6-.309.057-.551.335-.491 1.995-2.53L8 13.074l.777-.906-.006-.132h-.045l-5.3 3.43-.944.122-.406-.38.05-.622.193-.202 1.594-1.093z"
                                })
                            }), (0, a.jsx)("defs", {
                                children: (0, a.jsx)("clipPath", {
                                    id: "clip0_16020_144",
                                    children: (0, a.jsx)("rect", {
                                        width: 20,
                                        height: 20,
                                        fill: "#fff",
                                        rx: 10
                                    })
                                })
                            })]
                        }), (0, a.jsxs)("g", {
                            className: "logo-dark-mode",
                            children: [(0, a.jsx)("g", {
                                clipPath: "url(#clip0_16020_147)",
                                children: (0, a.jsx)("path", {
                                    fill: "#D97757",
                                    d: "M3.934 13.296 7.88 11.09l.066-.192-.066-.106h-.193l-.66-.04-2.254-.061-1.955-.081-1.893-.101-.477-.102L0 9.82l.046-.293.4-.268.574.05 1.27.086 1.903.132 1.38.08 2.047.213h.325l.045-.131-.111-.081-.087-.081-1.97-1.33-2.13-1.407-1.117-.81-.604-.41-.305-.384-.132-.84.548-.602.736.05.188.051.746.572 1.594 1.23 2.082 1.527.304.253.122-.086.015-.06-.137-.228L6.6 5.013 5.391 2.94l-.538-.86-.142-.517a2.5 2.5 0 0 1-.086-.607l.624-.845L5.594 0l.833.111.35.304.518 1.179.837 1.857 1.3 2.524.38.749.204.693.076.213h.132v-.122l.106-1.421.198-1.746.193-2.246.066-.633.315-.759.624-.41.488.233.4.572-.055.37-.239 1.542-.467 2.419-.304 1.619h.177l.204-.203.822-1.087 1.38-1.72.61-.684.71-.753.457-.36h.863l.635.941-.284.972-.889 1.123-.736.951-1.056 1.417-.66 1.133.061.091.158-.015 2.386-.506 1.289-.233 1.538-.263.696.324.076.329-.274.673-1.645.405-1.93.384-2.872.678-.036.025.04.051 1.295.121.553.03h1.356l2.523.188.66.435.396.531-.066.405-1.016.516-1.37-.324-3.198-.759-1.097-.273h-.152v.091l.914.89 1.675 1.508 2.096 1.943.107.48-.27.38-.283-.04-1.843-1.381-.71-.623-1.61-1.35h-.107v.141l.371.541 1.96 2.935.101.9-.142.294-.508.177-.558-.101-1.147-1.604-1.183-1.806-.955-1.62-.116.067-.564 6.046-.264.308-.609.233L9 19.616l-.269-.623.27-1.23.324-1.603.264-1.275.239-1.584.142-.526-.01-.035-.117.015-1.198 1.64-1.822 2.453-1.442 1.538-.345.137-.6-.309.057-.551.335-.491 1.995-2.53 1.203-1.568.776-.906-.005-.132h-.045l-5.3 3.43-.944.122-.406-.38.05-.622.193-.202 1.594-1.093z"
                                })
                            }), (0, a.jsx)("defs", {
                                children: (0, a.jsx)("clipPath", {
                                    id: "clip0_16020_147",
                                    children: (0, a.jsx)("rect", {
                                        width: 20,
                                        height: 20,
                                        fill: "#fff",
                                        rx: 10
                                    })
                                })
                            })]
                        })]
                    })
                },
                l = (0, t(104509).wt)("claude", o, "default")
        },
        776523: (e, i, t) => {
            t.r(i), t.d(i, {
                iconDefinition: () => o,
                openAiIcon: () => l
            }), t(296540);
            var a = t(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.95 1 18.09 18",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("g", {
                            className: "logo-light-mode",
                            children: [(0, a.jsx)("g", {
                                clipPath: "url(#clip0_16020_1032)",
                                children: (0, a.jsx)("path", {
                                    fill: "#000",
                                    d: "M7.894 7.562V5.86c0-.143.053-.25.179-.322l3.424-1.972c.466-.27 1.022-.395 1.595-.395 2.151 0 3.514 1.668 3.514 3.442 0 .126 0 .269-.018.412l-3.55-2.079a.6.6 0 0 0-.645 0zm7.995 6.633v-4.07a.6.6 0 0 0-.323-.555l-4.5-2.617 1.47-.843a.33.33 0 0 1 .359 0l3.424 1.972c.986.574 1.649 1.792 1.649 2.975 0 1.363-.807 2.618-2.08 3.138M6.836 10.61l-1.47-.86a.34.34 0 0 1-.18-.323V5.483c0-1.918 1.47-3.37 3.46-3.37.754 0 1.452.25 2.044.699L7.16 4.856a.6.6 0 0 0-.323.555zM10 12.438l-2.106-1.183v-2.51L10 7.562l2.106 1.183v2.51zm1.353 5.45a3.36 3.36 0 0 1-2.043-.7l3.531-2.043a.6.6 0 0 0 .323-.556V9.391l1.488.86c.125.072.179.18.179.323v3.943c0 1.918-1.488 3.37-3.478 3.37M7.105 13.89 3.68 11.918c-.986-.573-1.65-1.792-1.65-2.975 0-1.38.825-2.618 2.098-3.137v4.087a.6.6 0 0 0 .323.555l4.481 2.6-1.47.842a.33.33 0 0 1-.358 0m-.197 2.94c-2.026 0-3.514-1.524-3.514-3.406 0-.143.018-.287.036-.43l3.532 2.043a.6.6 0 0 0 .645 0l4.5-2.599v1.703a.34.34 0 0 1-.18.323l-3.424 1.972c-.466.268-1.022.394-1.595.394m4.445 2.133a4.48 4.48 0 0 0 4.392-3.585c2.008-.52 3.299-2.402 3.299-4.32a4.53 4.53 0 0 0-1.506-3.352 5 5 0 0 0 .143-1.13c0-2.563-2.08-4.481-4.481-4.481-.484 0-.95.071-1.416.233a4.5 4.5 0 0 0-3.137-1.29 4.48 4.48 0 0 0-4.392 3.584C2.247 5.142.956 7.024.956 8.942c0 1.255.538 2.474 1.506 3.352a5 5 0 0 0-.143 1.13c0 2.563 2.08 4.481 4.481 4.481.484 0 .95-.071 1.416-.233a4.5 4.5 0 0 0 3.137 1.29"
                                })
                            }), (0, a.jsx)("defs", {
                                children: (0, a.jsx)("clipPath", {
                                    id: "clip0_16020_1032",
                                    children: (0, a.jsx)("path", {
                                        fill: "#fff",
                                        d: "M1 1h18v18H1z"
                                    })
                                })
                            })]
                        }), (0, a.jsxs)("g", {
                            className: "logo-dark-mode",
                            children: [(0, a.jsx)("g", {
                                clipPath: "url(#clip0_16020_1036)",
                                children: (0, a.jsx)("path", {
                                    fill: "#fff",
                                    d: "M7.894 7.562V5.86c0-.143.054-.25.179-.322l3.424-1.972c.466-.27 1.022-.395 1.595-.395 2.151 0 3.514 1.668 3.514 3.442 0 .126 0 .269-.018.412l-3.55-2.079a.6.6 0 0 0-.645 0zm7.995 6.633v-4.07a.6.6 0 0 0-.323-.555l-4.5-2.617 1.47-.843a.33.33 0 0 1 .359 0l3.424 1.972c.986.574 1.649 1.792 1.649 2.975 0 1.363-.807 2.618-2.08 3.138M6.836 10.61l-1.47-.86a.34.34 0 0 1-.179-.323V5.483c0-1.918 1.47-3.37 3.46-3.37.753 0 1.452.25 2.043.699L7.16 4.856a.6.6 0 0 0-.323.555zM10 12.438l-2.106-1.183v-2.51L10 7.562l2.106 1.183v2.51zm1.353 5.45a3.36 3.36 0 0 1-2.043-.7l3.531-2.043a.6.6 0 0 0 .323-.556V9.391l1.488.86c.125.072.179.18.179.323v3.943c0 1.918-1.488 3.37-3.478 3.37M7.105 13.89l-3.424-1.972c-.986-.573-1.649-1.792-1.649-2.975 0-1.38.825-2.618 2.097-3.137v4.087a.6.6 0 0 0 .323.555l4.481 2.6-1.47.842a.33.33 0 0 1-.358 0m-.197 2.94c-2.026 0-3.514-1.524-3.514-3.406 0-.143.018-.287.036-.43l3.532 2.043a.6.6 0 0 0 .645 0l4.5-2.599v1.703a.34.34 0 0 1-.18.323l-3.424 1.972c-.466.268-1.022.394-1.595.394m4.445 2.133a4.48 4.48 0 0 0 4.392-3.585c2.008-.52 3.299-2.402 3.299-4.32a4.53 4.53 0 0 0-1.506-3.352 5 5 0 0 0 .143-1.13c0-2.563-2.08-4.481-4.481-4.481-.484 0-.95.071-1.416.233a4.5 4.5 0 0 0-3.137-1.29 4.48 4.48 0 0 0-4.392 3.584C2.247 5.142.957 7.024.957 8.942c0 1.255.537 2.474 1.505 3.352a5 5 0 0 0-.143 1.13c0 2.563 2.08 4.481 4.481 4.481.484 0 .95-.071 1.416-.233a4.5 4.5 0 0 0 3.137 1.29"
                                })
                            }), (0, a.jsx)("defs", {
                                children: (0, a.jsx)("clipPath", {
                                    id: "clip0_16020_1036",
                                    children: (0, a.jsx)("path", {
                                        fill: "#fff",
                                        d: "M1 1h18v18H1z"
                                    })
                                })
                            })]
                        })]
                    })
                },
                l = (0, t(104509).wt)("openAi", o, "default")
        },
        789511: (e, i, t) => {
            t.d(i, {
                S: () => o
            }), t(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.64 2.4 10.71 15.2",
                    svg: (0, t(474848).jsx)("path", {
                        d: "M6.175 2.4c-.842 0-1.525.683-1.525 1.525v.4c0 1.283.481 2.52 1.349 3.465L8.027 10l-2.028 2.21a5.13 5.13 0 0 0-1.35 3.465v.4c0 .842.684 1.525 1.526 1.525h7.65c.842 0 1.525-.683 1.525-1.525v-.4c0-1.283-.481-2.52-1.349-3.465L11.973 10l2.028-2.21a5.13 5.13 0 0 0 1.349-3.465v-.4c0-.842-.683-1.525-1.525-1.525zM5.9 3.925c0-.152.123-.275.275-.275h7.65c.152 0 .275.123.275.275v.4c0 .97-.364 1.905-1.02 2.62l-2.416 2.632a.625.625 0 0 0 0 .845l2.416 2.633c.62.676.98 1.548 1.017 2.46l-2.907-2.463a1.84 1.84 0 0 0-2.38 0l-2.907 2.464a3.88 3.88 0 0 1 1.017-2.46l2.415-2.633a.625.625 0 0 0 0-.846L6.92 6.945a3.88 3.88 0 0 1-1.02-2.62z"
                    })
                },
                o = (0, t(104509).wt)("hourglass", a, "default")
        },
        823811: (e, i, t) => {
            t.d(i, {
                o: () => o
            }), t(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 15.25 11.75",
                    svg: (0, t(474848).jsx)("path", {
                        d: "M2.375 6.25c0-1.174.951-2.125 2.125-2.125h11c1.174 0 2.125.951 2.125 2.125v7.5a2.125 2.125 0 0 1-2.125 2.125h-11a2.125 2.125 0 0 1-2.125-2.125zm1.25 7.49L7.366 10 3.625 6.259zm.884.885H15.49l-3.74-3.741-1.309 1.308a.625.625 0 0 1-.884 0L8.25 10.884zM12.634 10l3.741 3.741V6.26zM4.509 5.375 10 10.866l5.491-5.491z"
                    })
                },
                o = (0, t(104509).wt)("envelope", a, "default")
        },
        850741: (e, i, t) => {
            t.d(i, {
                c: () => o
            }), t(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.9 2.75 12.18 14.49",
                    svg: (0, t(474848).jsx)("path", {
                        d: "M12.626 2.768a.625.625 0 0 1 0 1.224l-.126.013h-.125v4.794l3.366 5.159c.893 1.369-.03 3.17-1.623 3.281l-.156.006H6.039c-1.688 0-2.703-1.873-1.78-3.287l3.366-5.157V4.005H7.5a.625.625 0 0 1 0-1.25h5zM8.875 9.173l-.102.156-1.567 2.401h5.589l-1.569-2.403-.101-.156V4.005h-2.25z"
                    })
                },
                o = (0, t(104509).wt)("beaker", a, "default")
        },
        879051: (e, i, t) => {
            t.r(i), t.d(i, {
                iconDefinition: () => o,
                shieldLockSmallIcon: () => l
            }), t(296540);
            var a = t(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.85 2.2 10.29 11.61",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M8 4.485a1.7 1.7 0 0 1 1.7 1.7v.876c.42.155.72.557.72 1.03v1.834a1.1 1.1 0 0 1-1.1 1.1H6.68a1.1 1.1 0 0 1-1.1-1.1V8.092c0-.474.3-.877.72-1.031v-.875a1.7 1.7 0 0 1 1.7-1.7m0 3.877a.605.605 0 1 0 .001 1.21A.605.605 0 0 0 8 8.362m0-2.896a.72.72 0 0 0-.72.72v.806h1.44v-.806a.72.72 0 0 0-.72-.72"
                        }), (0, a.jsx)("path", {
                            d: "M7.874 2.215a.55.55 0 0 1 .372.043l.962.481a7.3 7.3 0 0 0 3.276.774h.11a.55.55 0 0 1 .55.55v4.333c0 1.97-1.174 3.75-2.985 4.527l-1.942.833a.55.55 0 0 1-.434 0l-1.942-.833a4.93 4.93 0 0 1-2.985-4.527V4.062a.55.55 0 0 1 .55-.55h.11a7.3 7.3 0 0 0 3.276-.773l.962-.481zm-.59 1.508a8.4 8.4 0 0 1-3.328.877v3.796c0 1.53.912 2.913 2.318 3.516L8 12.65l1.726-.738a3.83 3.83 0 0 0 2.318-3.516V4.6a8.4 8.4 0 0 1-3.328-.877L8 3.364z"
                        })]
                    })
                },
                l = (0, t(104509).wt)("shieldLockSmall", o, "small")
        },
        880357: (e, i, t) => {
            t.d(i, {
                bD: () => r,
                ow: () => l
            }), t(296540);
            var a = t(474848);
            let o = (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("path", {
                        d: "M17.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75Z",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        fill: "none"
                    }), (0, a.jsx)("path", {
                        d: "M8.75 10.75L11.25 13L8.75 15.25",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        fill: "none"
                    })]
                }),
                l = (0, t(104509).wt)("worker", {
                    viewBox: "3 3 18 18",
                    svg: o
                }, "default"),
                r = (0, t(104509).wt)("worker", {
                    viewBox: "0 0 24 24",
                    svg: o
                }, "small")
        },
        897799: (e, i, t) => {
            t.r(i), t.d(i, {
                cursorIcon: () => l,
                iconDefinition: () => o
            }), t(296540);
            var a = t(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.25 0 17.5 20",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("g", {
                            className: "logo-light-mode",
                            children: [(0, a.jsxs)("g", {
                                clipPath: "url(#clip0_16020_205)",
                                children: [(0, a.jsx)("path", {
                                    fill: "#757575",
                                    d: "m9.995 9.987 8.658 4.999a.6.6 0 0 1-.226.226l-8.092 4.672a.68.68 0 0 1-.68 0l-8.092-4.672a.6.6 0 0 1-.226-.226z"
                                }), (0, a.jsx)("path", {
                                    fill: "#525252",
                                    d: "M9.995 0v9.987l-8.658 4.999a.6.6 0 0 1-.082-.309v-9.38c0-.22.117-.424.308-.534L9.655.09a.7.7 0 0 1 .34-.09"
                                }), (0, a.jsx)("path", {
                                    fill: "#404040",
                                    d: "M18.652 4.989a.6.6 0 0 0-.225-.226L10.334.09A.7.7 0 0 0 9.995 0v9.987l8.658 4.999a.6.6 0 0 0 .083-.309v-9.38c0-.11-.03-.216-.083-.308"
                                }), (0, a.jsx)("path", {
                                    fill: "#D9D9D9",
                                    d: "M18.047 5.339a.29.29 0 0 1 0 .29l-7.859 13.61c-.053.093-.193.055-.193-.05v-8.97a.4.4 0 0 0-.054-.201z"
                                }), (0, a.jsx)("path", {
                                    fill: "#fff",
                                    d: "m18.047 5.339-8.106 4.68a.4.4 0 0 0-.147-.147L2.027 5.387c-.092-.053-.054-.193.052-.193h15.717c.111 0 .202.06.25.145"
                                })]
                            }), (0, a.jsx)("defs", {
                                children: (0, a.jsx)("clipPath", {
                                    id: "clip0_16020_205",
                                    children: (0, a.jsx)("path", {
                                        fill: "#fff",
                                        d: "M1.255 0h17.49v20H1.256z"
                                    })
                                })
                            })]
                        }), (0, a.jsxs)("g", {
                            className: "logo-dark-mode",
                            children: [(0, a.jsxs)("g", {
                                clipPath: "url(#clip0_16020_213)",
                                children: [(0, a.jsx)("path", {
                                    fill: "#6E6E6E",
                                    d: "m9.995 9.987 8.658 4.999a.6.6 0 0 1-.226.226l-8.092 4.672a.68.68 0 0 1-.68 0l-8.092-4.672a.6.6 0 0 1-.226-.226z"
                                }), (0, a.jsx)("path", {
                                    fill: "#4A4A4A",
                                    d: "M9.995 0v9.987l-8.658 4.999a.6.6 0 0 1-.082-.309v-9.38c0-.22.117-.424.308-.534L9.655.09a.7.7 0 0 1 .34-.09"
                                }), (0, a.jsx)("path", {
                                    fill: "#383838",
                                    d: "M18.652 4.989a.6.6 0 0 0-.225-.226L10.334.09A.7.7 0 0 0 9.995 0v9.987l8.658 4.999a.6.6 0 0 0 .083-.309v-9.38c0-.11-.03-.216-.083-.308"
                                }), (0, a.jsx)("path", {
                                    fill: "#C9C9C9",
                                    d: "M18.047 5.339a.29.29 0 0 1 0 .29l-7.859 13.61c-.053.093-.193.055-.193-.05v-8.97a.4.4 0 0 0-.054-.201z"
                                }), (0, a.jsx)("path", {
                                    fill: "#fff",
                                    d: "m18.047 5.339-8.106 4.68a.4.4 0 0 0-.147-.147L2.027 5.387c-.092-.053-.054-.193.052-.193h15.717c.111 0 .202.06.25.145"
                                })]
                            }), (0, a.jsx)("defs", {
                                children: (0, a.jsx)("clipPath", {
                                    id: "clip0_16020_213",
                                    children: (0, a.jsx)("path", {
                                        fill: "#fff",
                                        d: "M1.255 0h17.49v20H1.256z"
                                    })
                                })
                            })]
                        })]
                    })
                },
                l = (0, t(104509).wt)("cursor", o, "default")
        },
        900333: (e, i, t) => {
            t.d(i, {
                U: () => o
            }), t(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 15.25 11.75",
                    svg: (0, t(474848).jsx)("path", {
                        d: "M2.375 6.25c0-1.174.951-2.125 2.125-2.125h11c1.174 0 2.125.951 2.125 2.125v7.5a2.125 2.125 0 0 1-2.125 2.125h-11a2.125 2.125 0 0 1-2.125-2.125zm1.25 7.5c0 .483.392.875.875.875h11a.875.875 0 0 0 .875-.875V7.5H3.625zm1.008-7.316a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25m2.625-.625a.625.625 0 1 0-1.25 0 .625.625 0 0 0 1.25 0m1.375.625a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25"
                    })
                },
                o = (0, t(104509).wt)("browser", a, "default")
        }
    }
]);