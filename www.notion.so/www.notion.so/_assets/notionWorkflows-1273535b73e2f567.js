"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [40994], {
        445568: (e, i, t) => {
            t.r(i), t.d(i, {
                DATABASE_AGENT_ALLOWED_TRIGGER_TYPES: () => c,
                SORT_OPTIONS: () => a,
                commentFileTypes: () => o,
                getDatabaseAgentCollectionId: () => d,
                getDatabaseAgentData: () => s,
                getWebSearchAllowedDomains: () => I,
                isHelpDocsSearchEnabled: () => D,
                isSearchPermission: () => w,
                isWebAccessEnabled: () => m,
                isWorkflowDataDatabaseAgent: () => r,
                isWorkflowDatabaseAgentWorkflow: () => l,
                isWorkspaceSearchEnabled: () => A,
                notion: () => u,
                permissionActionsAllowRead: () => f
            }), t(898992), t(672577), t(737550);
            var n = () => t(682956);
            let o = ["image", "video", "audio", "file"],
                a = ["relevance", "lastEdited", "created"];

            function l(e) {
                return r(e.getData())
            }

            function r(e) {
                return !!e && s(e).isDatabaseAgent
            }

            function s(e) {
                var i;
                let t = null == (i = e.modules) || null == (i = i.find(e => "notion" === e.type)) || null == (i = i.state) ? void 0 : i.ownedByDatabasePropertyIds;
                return t ? {
                    isDatabaseAgent: !0,
                    ownedByDatabasePropertyIds: t
                } : {
                    isDatabaseAgent: !1
                }
            }

            function d(e, i) {
                if (!s(e).isDatabaseAgent) return;
                let t = (e.triggers ? ? []).find(e => e.id === i),
                    n = null == t ? void 0 : t.state;
                if (n && "collectionId" in n && n.collectionId) return n.collectionId
            }
            let c = ["notion.page.created", "notion.page.updated", "notion.page.deleted", "notion.database.agent.updated", "notion.button.pressed", "recurrence"],
                u = {
                    type: "notion",
                    isSingleton: !0,
                    getToolNamePrefix: () => "notion",
                    isAvailable: () => !0,
                    config: {},
                    latestVersion: "1.0.0",
                    effects: {
                        "notion.sendNotification": {
                            versionAvailability: "*"
                        },
                        "notion.getPageDiscussions": {
                            versionAvailability: "*"
                        },
                        "notion.addCommentToDiscussion": {
                            versionAvailability: "*"
                        },
                        "notion.getUserEngagementAnalytics": {
                            versionAvailability: "*"
                        },
                        "notion.getContentEngagementAnalytics": {
                            versionAvailability: "*"
                        },
                        "notion.getDailyUsersAnalytics": {
                            versionAvailability: "*"
                        },
                        "notion.listUsersAnalytics": {
                            versionAvailability: "*"
                        },
                        "notion.listContentAnalytics": {
                            versionAvailability: "*"
                        },
                        "notion.getPageAnalyticsTimeSeries": {
                            versionAvailability: "*"
                        },
                        "notion.getPageVisitors": {
                            versionAvailability: "*"
                        },
                        "notion.listTeamspaces": {
                            versionAvailability: "*"
                        },
                        "notion.getTeamspaceTopLevelPagesAndDatabases": {
                            versionAvailability: "*"
                        },
                        "notion.createDatabase": {
                            versionAvailability: "*"
                        },
                        "notion.createTwoWayRelation": {
                            versionAvailability: "*"
                        },
                        "notion.loadAgent": {
                            versionAvailability: "*"
                        },
                        "notion.createDatabaseAgent": {
                            versionAvailability: "*"
                        },
                        "notion.loadUser": {
                            versionAvailability: "*"
                        },
                        "notion.search": {
                            versionAvailability: "*"
                        },
                        "notion.searchUsers": {
                            versionAvailability: "*"
                        },
                        "notion.loadDatabase": {
                            versionAvailability: "*"
                        },
                        "notion.loadDataSource": {
                            versionAvailability: "*"
                        },
                        "notion.createAgent": {
                            versionAvailability: "*"
                        },
                        "notion.loadPage": {
                            versionAvailability: "*"
                        },
                        "notion.loadPermissions": {
                            versionAvailability: "*"
                        },
                        "notion.loadMeetingNoteTranscript": {
                            versionAvailability: "*"
                        },
                        "notion.viewFileUrl": {
                            versionAvailability: "*"
                        },
                        "notion.createPage": {
                            versionAvailability: "*"
                        },
                        "notion.createFactoryTask": {
                            versionAvailability: "*"
                        },
                        "notion.updateDatabase": {
                            versionAvailability: "*"
                        },
                        "notion.updatePage": {
                            versionAvailability: "*"
                        },
                        "notion.updatePermission": {
                            versionAvailability: "*"
                        },
                        "notion.updateAgent": {
                            versionAvailability: "*"
                        },
                        "notion.deletePages": {
                            versionAvailability: "*"
                        },
                        "notion.archivePages": {
                            versionAvailability: "*"
                        },
                        "notion.unarchivePages": {
                            versionAvailability: "*"
                        },
                        "notion.deleteDatabases": {
                            versionAvailability: "*"
                        },
                        "notion.querySql": {
                            versionAvailability: "*"
                        },
                        "notion.queryDataSource": {
                            versionAvailability: "*"
                        },
                        "notion.queryView": {
                            versionAvailability: "*"
                        },
                        "notion.queryMeetings": {
                            versionAvailability: "*"
                        },
                        "notion.queryThreads": {
                            versionAvailability: "*"
                        },
                        "notion.investigateThread": {
                            versionAvailability: "*"
                        },
                        "notion.createAndRunThread": {
                            versionAvailability: "*"
                        },
                        "notion.spawnSubagent": {
                            versionAvailability: "*"
                        },
                        "notion.wideResearch": {
                            versionAvailability: "*"
                        },
                        "notion.getFormulaValue": {
                            versionAvailability: "*"
                        },
                        "notion.getUserActivity": {
                            versionAvailability: "*"
                        },
                        "notion.listUserConnections": {
                            versionAvailability: "*"
                        },
                        "notion.createUserConnection": {
                            versionAvailability: "*"
                        }
                    },
                    triggers: {
                        recurrence: {
                            isTriggerConfigured: () => !0,
                            triggerDuplicator: ({
                                original: e,
                                mapper: i,
                                requester: n
                            }) => {
                                let o = { ...e,
                                    scheduleId: void 0
                                };
                                if (o.collectionId) {
                                    let e = i({
                                        requested: {
                                            table: t(46241).V,
                                            id: o.collectionId,
                                            spaceId: n.spaceId
                                        },
                                        requester: n
                                    });
                                    e && (o.collectionId = e.id)
                                }
                                return o.viewId && (o.viewId = void 0), o
                            },
                            versionAvailability: "*",
                            createDefaultState: () => ({
                                type: "recurrence",
                                interval: 1,
                                timezone: (0, t(714350).P)(),
                                hour: 9,
                                minute: 0,
                                frequency: "week",
                                weekdays: ["MO"]
                            })
                        },
                        "notion.page.discussion.comment.added": {
                            isTriggerConfigured: ({
                                collectionId: e
                            }) => !!e,
                            fields: {
                                database: {
                                    required: () => !0,
                                    isConfigured: ({
                                        collectionId: e
                                    }) => !!e
                                }
                            },
                            triggerDuplicator: ({
                                original: e
                            }) => e,
                            versionAvailability: "*",
                            createDefaultState: () => ({
                                type: "notion.page.discussion.comment.added"
                            })
                        },
                        "notion.page.created": {
                            isTriggerConfigured: ({
                                collectionId: e
                            }) => !!e,
                            fields: {
                                database: {
                                    required: () => !0,
                                    isConfigured: ({
                                        collectionId: e
                                    }) => !!e
                                }
                            },
                            triggerDuplicator: ({
                                original: e,
                                mapper: i,
                                requester: n
                            }) => {
                                var o, a;
                                let l = e.collectionId ? null == (o = i({
                                        requested: {
                                            table: t(46241).V,
                                            id: e.collectionId,
                                            spaceId: n.spaceId
                                        },
                                        requester: n
                                    })) ? void 0 : o.id : void 0,
                                    r = e.viewId ? null == (a = i({
                                        requested: {
                                            table: t(435544).G,
                                            id: e.viewId,
                                            spaceId: n.spaceId
                                        },
                                        requester: n
                                    })) ? void 0 : a.id : void 0;
                                return { ...e,
                                    ...l ? {
                                        collectionId: l
                                    } : {},
                                    ...r ? {
                                        viewId: r
                                    } : {}
                                }
                            },
                            versionAvailability: "*",
                            createDefaultState: () => ({
                                type: "notion.page.created"
                            })
                        },
                        "notion.page.updated": {
                            isTriggerConfigured: ({
                                collectionId: e
                            }) => !!e,
                            fields: {
                                database: {
                                    required: () => !0,
                                    isConfigured: ({
                                        collectionId: e
                                    }) => !!e
                                }
                            },
                            triggerDuplicator: ({
                                original: e,
                                mapper: i,
                                requester: n
                            }) => {
                                let o = { ...e
                                };
                                if (o.collectionId) {
                                    let e = i({
                                        requested: {
                                            table: t(46241).V,
                                            id: o.collectionId,
                                            spaceId: n.spaceId
                                        },
                                        requester: n
                                    });
                                    e && (o.collectionId = e.id)
                                }
                                return o
                            },
                            versionAvailability: "*",
                            createDefaultState: () => ({
                                type: "notion.page.updated",
                                shouldIgnorePageContentUpdates: !0
                            })
                        },
                        "notion.page.deleted": {
                            isTriggerConfigured: ({
                                collectionId: e
                            }) => !!e,
                            fields: {
                                database: {
                                    required: () => !0,
                                    isConfigured: ({
                                        collectionId: e
                                    }) => !!e
                                }
                            },
                            triggerDuplicator: ({
                                original: e,
                                mapper: i,
                                requester: n
                            }) => {
                                var o, a;
                                let l = e.collectionId ? null == (o = i({
                                        requested: {
                                            table: t(46241).V,
                                            id: e.collectionId,
                                            spaceId: n.spaceId
                                        },
                                        requester: n
                                    })) ? void 0 : o.id : void 0,
                                    r = e.viewId ? null == (a = i({
                                        requested: {
                                            table: t(435544).G,
                                            id: e.viewId,
                                            spaceId: n.spaceId
                                        },
                                        requester: n
                                    })) ? void 0 : a.id : void 0;
                                return { ...e,
                                    ...l ? {
                                        collectionId: l
                                    } : {},
                                    ...r ? {
                                        viewId: r
                                    } : {}
                                }
                            },
                            versionAvailability: "*",
                            createDefaultState: () => ({
                                type: "notion.page.deleted"
                            })
                        },
                        "notion.database.agent.updated": {
                            isTriggerConfigured: ({
                                collectionId: e
                            }) => !!e,
                            fields: {
                                database: {
                                    required: () => !0,
                                    isConfigured: ({
                                        collectionId: e
                                    }) => !!e
                                }
                            },
                            triggerDuplicator: ({
                                original: e,
                                mapper: i,
                                requester: n
                            }) => {
                                if (e.collectionId) {
                                    let o = i({
                                        requested: {
                                            table: t(46241).V,
                                            id: e.collectionId,
                                            spaceId: n.spaceId
                                        },
                                        requester: n
                                    });
                                    if (o) return { ...e,
                                        collectionId: o.id
                                    }
                                }
                                return e
                            },
                            versionAvailability: "*",
                            createDefaultState: () => ({
                                type: "notion.database.agent.updated"
                            })
                        },
                        "notion.agent.mentioned": {
                            isTriggerConfigured: () => !0,
                            triggerDuplicator: ({
                                original: e
                            }) => e,
                            versionAvailability: "*",
                            createDefaultState: () => ({
                                type: "notion.agent.mentioned"
                            }),
                            isSingleton: !0
                        },
                        "notion.button.pressed": {
                            isTriggerConfigured: () => !0,
                            triggerDuplicator: ({
                                original: e
                            }) => e,
                            versionAvailability: "*",
                            createDefaultState: () => ({
                                type: "notion.button.pressed"
                            })
                        }
                    },
                    stateDuplicator: ({
                        original: e
                    }) => e,
                    getModuleConfigurationStatus: () => "ready",
                    getDescription: e => e.formatMessage({
                        defaultMessage: "This integration provides internal Notion functionality for workflows.",
                        id: "workflow.module.notion.description"
                    }),
                    getName: e => e.formatMessage({
                        defaultMessage: "Notion",
                        id: "workflow.module.notion.title"
                    }),
                    getModuleConfigSection: () => "system",
                    getIcon: () => t(792668).notionIcon,
                    autoGrantPermissions: ({
                        module: e,
                        workflow: i,
                        getRecordModel: t,
                        uriContext: o,
                        spaceId: a,
                        instructionUrls: l
                    }) => {
                        let r = e,
                            s = i.triggers || [],
                            d = i.draft_runtime_actor_pointer ? ? i.runtime_actor_pointer;
                        if ("notion" !== r.type) return r;
                        for (let {
                                parsed: e
                            } of l)
                            if ("pageOrCollectionViewBlock" === e.type) {
                                let i = t({
                                    table: n().ev,
                                    id: e.id,
                                    spaceId: a
                                });
                                if (y({
                                        module: r,
                                        blockId: e.id,
                                        block: i
                                    })) continue;
                                let o = i && p({
                                    blockModel: i,
                                    runtimeActorPointer: d
                                });
                                null != i && i.parent_id && !o ? r = g({
                                    module: r,
                                    blockId: i.id
                                }) : i || o || (r = g({
                                    module: r,
                                    blockId: e.id
                                }))
                            } else "collection" === e.type && (r = v({
                                module: r,
                                collectionId: e.collectionId,
                                getRecordModel: t,
                                uriContext: o,
                                spaceId: a,
                                runtimeActorPointer: d
                            }));
                        for (let e of s) {
                            let i = e.state;
                            i && ("notion.page.created" === i.type || "notion.page.updated" === i.type || "notion.page.deleted" === i.type || "notion.page.discussion.comment.added" === i.type) && i.collectionId && (r = v({
                                module: r,
                                collectionId: i.collectionId,
                                getRecordModel: t,
                                uriContext: o,
                                spaceId: a,
                                runtimeActorPointer: d
                            }))
                        }
                        return r
                    }
                };

            function v(e) {
                let {
                    module: i,
                    collectionId: o,
                    getRecordModel: a,
                    spaceId: l,
                    runtimeActorPointer: r
                } = e;
                if (y({
                        module: i,
                        blockId: o
                    })) return i;
                let s = a({
                        table: t(46241).V,
                        id: o,
                        spaceId: l
                    }),
                    d = null == s ? void 0 : s.parent_id;
                if (d) {
                    if (r) {
                        let e = a({
                            table: n().ev,
                            id: d,
                            spaceId: l
                        });
                        if (e && p({
                                blockModel: e,
                                runtimeActorPointer: r
                            })) return i
                    }
                    return g({
                        module: i,
                        blockId: d
                    })
                }
                return i
            }

            function g(e) {
                var i;
                let {
                    module: t,
                    blockId: n
                } = e;
                return (null == (i = t.permissions) ? void 0 : i.find(e => "pageOrCollectionViewBlock" === e.identifier.type && n === e.identifier.blockId)) ? t : { ...t,
                    permissions: [...t.permissions || [], {
                        moduleType: "notion",
                        type: "notion",
                        identifier: {
                            type: "pageOrCollectionViewBlock",
                            blockId: n
                        },
                        actions: ["reader"]
                    }]
                }
            }

            function p(e) {
                let {
                    blockModel: i,
                    runtimeActorPointer: t
                } = e;
                return !!t && i.getPermissionItems().some(e => (function(e) {
                    let {
                        permission: i,
                        runtimeActorPointer: t
                    } = e;
                    if (!t) return !1;
                    switch (i.type) {
                        case "bot_permission":
                            return "bot" === t.table && i.bot_id === t.id && b(i.role);
                        case "space_permission":
                        case "public_permission":
                            return b(i.role);
                        case "space_owner_permission":
                            return "notion_user" === t.table && b(i.role);
                        case "user_permission":
                            return "notion_user" === t.table && i.user_id === t.id && b(i.role);
                        default:
                            return !1
                    }
                })({
                    permission: e,
                    runtimeActorPointer: t
                }))
            }

            function b(e) {
                return !!e && (0, t(138798).q_)(e, "reader")
            }

            function y(e) {
                var i;
                let {
                    module: t,
                    blockId: n,
                    block: o
                } = e;
                return !!(null == (i = t.permissions) ? void 0 : i.some(e => (function(e) {
                    let {
                        permission: i,
                        blockId: t,
                        block: n
                    } = e;
                    return "notion" === i.type && ("workspacePublic" === i.identifier.type ? !!n && n.getPermissionItems().some(e => ("space_permission" === e.type || "public_permission" === e.type) && b(e.role)) : "pageOrCollectionViewBlock" === i.identifier.type && i.identifier.blockId === t && f(i.actions))
                })({
                    permission: e,
                    blockId: n,
                    block: o
                })))
            }

            function f(e) {
                return e.some(e => "editor" === e || "reader" === e || "comment_only" === e || "read_and_write" === e)
            }

            function A(e) {
                if (!e || 0 === e.length) return !0;
                let i = e.find(e => "notion" === e.type && "workspacePublic" === e.identifier.type);
                return !i || i.actions.some(e => "editor" === e || "comment_only" === e || "reader" === e || "read_and_write" === e)
            }

            function m(e) {
                let i = null == e ? void 0 : e.find(e => !!w(e) && "web" === e.identifier.type);
                return !!i && i.actions.includes("allow")
            }

            function I(e) {
                let i = null == e ? void 0 : e.find(e => !!w(e) && "web" === e.identifier.type);
                if (!i || "web" !== i.identifier.type) return;
                let t = i.identifier.allowedDomains;
                return t && t.length > 0 ? t : void 0
            }

            function D(e) {
                let i = (e.permissions ? ? []).find(e => !!w(e) && "helpdocs" === e.identifier.type);
                return i ? i.actions.includes("allow") : e.defaultIfMissingExplicitPermission
            }

            function w(e) {
                return "search" === e.type
            }
        }
    }
]);