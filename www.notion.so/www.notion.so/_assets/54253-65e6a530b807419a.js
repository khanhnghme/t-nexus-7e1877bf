"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [54253, 77916], {
        30082: (e, i, t) => {
            t.d(i, {
                H: () => o,
                U: () => s
            });
            var n = t(296540);
            let s = (0, n.createContext)(new(t(232081)).A);

            function o() {
                return (0, n.useContext)(s)
            }
            s.displayName = "TrustedDomainsContext"
        },
        229337: (e, i, t) => {
            t.d(i, {
                B: () => j
            });
            var n = t(296540);
            t(16280), t(898992), t(354520), t(430670), t(581454);
            var s = t(474848);
            let o = {
                    page_permission_added: t(697198).lockSmallIcon,
                    all_shared_pages_enabled: t(754226).peopleSmallIcon,
                    full_access_permission_added: t(697198).lockSmallIcon,
                    slack_private_channel_added: t(697198).lockSmallIcon,
                    notion_mail_connected: t(324533).paperPlaneSmallIcon,
                    notion_calendar_connected: t(505518).x,
                    module_created: t(638501).plusSmallIcon
                },
                r = {
                    chipsContainer: {
                        display: "flex",
                        textAlign: "start",
                        flexDirection: "column",
                        paddingInlineStart: 8,
                        paddingTop: 12,
                        paddingInlineEnd: 12,
                        paddingBottom: 12,
                        borderRadius: 12,
                        backgroundColor: t(632079).Tj.yellow.background.secondary,
                        width: "100%"
                    }
                };

            function a(e) {
                let {
                    descriptionText: i,
                    riskyEdits: n,
                    spaceStore: a,
                    hasDangerousCombination: l
                } = e;
                return (0, s.jsxs)(t(4458).VP, {
                    gap: 16,
                    width: "100%",
                    children: [(0, s.jsx)(t(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        children: i
                    }), (0, s.jsxs)("div", {
                        style: r.chipsContainer,
                        children: [(0, t(722371).objectKeys)(o).map(e => (0, s.jsx)(c, {
                            type: e,
                            edits: n,
                            spaceStore: a
                        }, e)), l ? (0, s.jsx)(p, {}) : void 0]
                    })]
                })
            }
            let l = {
                    marginTop: 2
                },
                d = {
                    display: "flex",
                    alignItems: "normal",
                    gap: 8,
                    paddingInline: 8,
                    paddingBlock: 6
                };

            function c(e) {
                let {
                    type: i,
                    edits: n,
                    spaceStore: r
                } = e, a = o[i], c = n.filter(e => e.type === i);
                return 0 === c.length ? null : "module_created" === i ? (0, s.jsx)(s.Fragment, {
                    children: c.map((e, i) => (0, s.jsxs)("div", {
                        style: d,
                        children: [(0, s.jsx)(t(16275).I, {
                            icon: a,
                            size: "sm",
                            colorPalette: "yellow",
                            colorVariant: "secondary",
                            style: l
                        }), (0, s.jsx)(t(111010).D, {
                            styleKey: "bodyMedium",
                            colorPalette: "yellow",
                            colorVariant: "secondary",
                            children: (0, s.jsx)(u, {
                                edits: [e],
                                spaceStore: r
                            })
                        })]
                    }, `risky-edit-module-${i}`))
                }) : (0, s.jsxs)("div", {
                    style: d,
                    children: [(0, s.jsx)(t(16275).I, {
                        icon: a,
                        size: "sm",
                        colorPalette: "yellow",
                        colorVariant: "secondary",
                        style: l
                    }), (0, s.jsx)(t(111010).D, {
                        styleKey: "bodyMedium",
                        colorPalette: "yellow",
                        colorVariant: "secondary",
                        children: (0, s.jsx)(u, {
                            edits: c,
                            spaceStore: r
                        })
                    })]
                })
            }

            function u(e) {
                let {
                    edits: i,
                    spaceStore: n
                } = e, o = i[0], r = (0, t(682985).K8)(() => {
                    let e = o.type;
                    switch (e) {
                        case "module_created":
                            return (0, s.jsx)(t(109939).sA, {
                                id: "workflows.notion.permissions.newConnections",
                                defaultMessage: "Access to {moduleName}",
                                values: {
                                    moduleName: o.moduleName
                                }
                            });
                        case "page_permission_added":
                            return (0, s.jsx)(f, {
                                edits: i
                            });
                        case "all_shared_pages_enabled":
                            return (0, s.jsx)(t(109939).sA, {
                                id: "workflows.notion.permissions.accessToPaegsInWorkspace",
                                defaultMessage: "Access to pages shared with everyone in {spaceName}",
                                values: {
                                    spaceName: n.getName()
                                }
                            });
                        case "full_access_permission_added":
                            return (0, s.jsx)(t(109939).sA, {
                                id: "workflows.notion.permissions.fullAccessPermissionAdded",
                                defaultMessage: "Full access to {count, plural, one {1 page/database} other {# pages/databases}}",
                                values: {
                                    count: o.count
                                }
                            });
                        case "slack_private_channel_added":
                            return (0, s.jsx)(b, {
                                identifiers: o.identifiers
                            });
                        case "notion_mail_connected":
                            return (0, s.jsx)(t(109939).sA, {
                                id: "workflows.notion.permissions.mail",
                                defaultMessage: "Access to your {count, plural, one {inbox} other {inboxes}}",
                                values: {
                                    count: o.count
                                }
                            });
                        case "notion_calendar_connected":
                            return (0, s.jsx)(t(109939).sA, {
                                id: "workflows.notion.permissions.calendar",
                                defaultMessage: "Access to your {count, plural, one {calendar} other {calendars}}",
                                values: {
                                    count: o.count
                                }
                            });
                        default:
                            (0, t(722371).HB)(e)
                    }
                }, [n, o, i]);
                return (0, s.jsx)("div", {
                    children: r
                })
            }

            function p() {
                return (0, s.jsxs)("div", {
                    style: d,
                    children: [(0, s.jsx)(t(16275).I, {
                        icon: t(50171).exclamationMarkTriangleSmallIcon,
                        size: "sm",
                        colorPalette: "yellow",
                        colorVariant: "secondary",
                        style: l
                    }), (0, s.jsx)(t(111010).D, {
                        styleKey: "bodyMedium",
                        colorPalette: "yellow",
                        colorVariant: "secondary",
                        children: (0, s.jsx)(t(109939).sA, {
                            id: "workflows.agentRiskyEdit.dangerousCombination",
                            defaultMessage: "This agent can send emails without confirmation and has access to data in your workspace. It could share sensitive information via email."
                        })
                    })]
                })
            }
            let m = {
                    textDecoration: "underline",
                    textDecorationStyle: "dotted",
                    cursor: "default"
                },
                g = {
                    minWidth: 200,
                    maxWidth: 280
                },
                h = {
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    maxHeight: 200,
                    overflowY: "auto"
                };

            function f(e) {
                let {
                    edits: i
                } = e, n = i.filter(e => "page_permission_added" === e.type), o = n.length;
                return (0, s.jsx)(t(51831).m, {
                    content: () => (0, s.jsx)("div", {
                        style: h,
                        children: n.map((e, i) => (0, s.jsxs)(t(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            children: [(0, s.jsx)(t(569553).B6, {
                                disabled: !0,
                                icon: e.blockStore.getIcon(),
                                isEmptyPage: !1,
                                size: 14,
                                iconRecordCategory: (0, t(569553).Te)(e.blockStore)
                            }), (0, s.jsx)(t(627918).A, {
                                store: e.blockStore
                            })]
                        }, i))
                    }),
                    placement: "top",
                    style: g,
                    textWrap: !0,
                    overlayContainerZIndex: t(455852).k,
                    children: e => (0, s.jsx)("span", {
                        style: m,
                        ...e,
                        children: (0, s.jsx)(t(109939).sA, {
                            id: "workflows.notion.permissions.pagePermissionAdded",
                            defaultMessage: "Access to {count} private {count, plural, one {page} other {pages}}",
                            values: {
                                count: o
                            }
                        })
                    })
                })
            }

            function b(e) {
                let {
                    identifiers: i
                } = e, n = i.length, o = (0, t(682985).K8)(() => i.flatMap(e => {
                    let i = function(e) {
                            if ((0, t(402459).NL)(e)) return e;
                            let i = t(402459).A2.slackChannel.parseUri(e);
                            return i instanceof Error ? e : i.channelId
                        }(e),
                        n = t(315799).c.findChannelById(i);
                    return [null == n ? void 0 : n.name]
                }), [i]);
                return (0, s.jsx)(t(51831).m, {
                    content: () => (0, s.jsx)("div", {
                        style: h,
                        children: o.map((e, i) => (0, s.jsx)("div", {
                            children: `#${e}`
                        }, i))
                    }),
                    placement: "top",
                    style: g,
                    textWrap: !0,
                    overlayContainerZIndex: t(455852).k,
                    children: e => (0, s.jsx)("span", {
                        style: m,
                        ...e,
                        children: (0, s.jsx)(t(109939).sA, {
                            id: "workflows.slack.permissions.privateChannelAdded",
                            defaultMessage: "Access to {count, plural, one {1 private Slack channel} other {# private Slack channels}}",
                            values: {
                                count: n
                            }
                        })
                    })
                })
            }
            t(517642), t(658004), t(733853), t(845876), t(432475), t(515024), t(731698), t(908872), t(737550);
            let y = ["mail", "calendar"];

            function v(e) {
                return "module_created" !== e.type || "notion" === e.module.type || y.includes(e.module.type) ? [] : [e.module]
            }

            function _(e) {
                if ("module_permission_added" !== e.type) return !1;
                let i = e.permission;
                return "notion" === i.type && "workspacePublic" === i.identifier.type && i.actions.some(e => "reader" === e)
            }
            let x = new Set(["*", "public:*", "users:*"]);

            function S(e) {
                if ("module_permission_added" !== e.type) return [];
                let i = e.permission;
                return "slack" !== i.type ? [] : (Array.isArray(i.identifier) ? i.identifier : [i.identifier]).filter(e => {
                    if (x.has(e)) return !1;
                    let i = function(e) {
                            if ((0, t(402459).NL)(e)) return e;
                            let i = t(402459).A2.slackChannel.parseUri(e);
                            return i instanceof Error ? e : i.channelId
                        }(e),
                        n = t(315799).c.findChannelById(i);
                    return (null == n ? void 0 : n.type) !== "public"
                })
            }
            let k = (0, t(109939).YK)({
                    saveConfirmationMessage: {
                        id: "workflows.agentTopbar.saveConfirmationMessage",
                        defaultMessage: "Save {agentName, select, undefined {this agent} other {{agentName}}}?"
                    },
                    saveConfirmationDescription: {
                        id: "workflows.agentTopbar.saveConfirmationDescription",
                        defaultMessage: "Anyone with ‘Can interact’ access to this agent will have the following."
                    },
                    saveConfirmationAccept: {
                        id: "workflows.agentTopbar.saveConfirmationAccept",
                        defaultMessage: "I understand, Continue"
                    },
                    saveConfirmationWarningText: {
                        id: "workflows.agentTopbar.saveConfirmationWarningText",
                        defaultMessage: "Learn about permissions"
                    },
                    dangerousCombinationDescription: {
                        id: "workflows.agentTopbar.dangerousCombinationDescription",
                        defaultMessage: "Review the following before continuing."
                    }
                }),
                I = {
                    width: "100%"
                },
                w = {
                    width: "100%",
                    justifyContent: "center"
                };

            function j(e) {
                let {
                    edits: i,
                    spaceStore: o,
                    workflowStore: r,
                    isEnabled: l,
                    slackWorkspaceName: d
                } = e, {
                    message: c,
                    descriptionText: u
                } = e, p = e.requireSharedWithUsers ? ? !0, m = (0, t(109939).tz)(), g = (0, t(346582).b)(r);
                return (0, n.useCallback)(async () => {
                    var e, n;
                    if (!o || !r) return !0;
                    let h = l && (!p || g) ? function(e) {
                            let {
                                edits: i,
                                spaceStore: n,
                                slackWorkspaceName: s
                            } = e, o = i.flatMap(v), r = i.reduce((e, i) => {
                                var t;
                                return e + +("module_created" === (t = i).type && "calendar" === t.module.type)
                            }, 0), a = i.reduce((e, i) => {
                                var t, n;
                                return e + ("module_created" !== (t = i).type || "mail" !== t.module.type ? 0 : (null == (n = t.module.state) || null == (n = n.emailAddresses) ? void 0 : n.length) ? ? 0)
                            }, 0), l = i.some(_), d = i.flatMap(e => (function(e, i) {
                                if ("module_permission_added" !== e.type) return [];
                                let n = e.permission;
                                if ("notion" !== n.type || "pageOrCollectionViewBlock" !== n.identifier.type) return [];
                                let s = t(970831).B.createChildStore(i, {
                                    table: t(682956).ev,
                                    id: n.identifier.blockId
                                });
                                return (0, t(862085).Jh)(s) ? [] : [s]
                            })(e, n)), c = i.reduce((e, i) => e + function(e) {
                                if ("module_permission_added" !== e.type) return 0;
                                let i = e.permission;
                                return "notion" !== i.type ? 0 : +!!i.actions.some(e => "editor" === e)
                            }(i), 0), u = i.flatMap(S);
                            return [...d.length > 0 ? d.map(e => ({
                                type: "page_permission_added",
                                blockStore: e
                            })) : [], ...l ? [{
                                type: "all_shared_pages_enabled"
                            }] : [], ...c > 0 ? [{
                                type: "full_access_permission_added",
                                count: c
                            }] : [], ...a > 0 ? [{
                                type: "notion_mail_connected",
                                count: a
                            }] : [], ...r > 0 ? [{
                                type: "notion_calendar_connected",
                                count: r
                            }] : [], ...u.length > 0 ? [{
                                type: "slack_private_channel_added",
                                count: u.length,
                                identifiers: u
                            }] : [], ...o.length > 0 ? o.map(e => ({
                                type: "module_created",
                                moduleName: function(e) {
                                    let {
                                        module: i,
                                        slackWorkspaceName: n
                                    } = e, s = i.type;
                                    switch (s) {
                                        case "mail":
                                            return "Mail";
                                        case "calendar":
                                            return "Calendar";
                                        case "claude":
                                            return "Claude";
                                        case "boxy":
                                            return "Boxy";
                                        case "slack":
                                            return n ? `${n} (Slack)` : "Slack";
                                        case "notion":
                                            return "Notion";
                                        case "computer":
                                            return "Computer";
                                        case "cursor":
                                            return "Cursor";
                                        case "files":
                                            return "Files";
                                        case "fs":
                                            return "Filesystem";
                                        case "images":
                                            return "Images";
                                        case "mcpServer":
                                            return i.name;
                                        case "test":
                                            return "Test";
                                        case "worker":
                                            return "Worker";
                                        case "workers":
                                            return "Workers";
                                        case "search":
                                            return "Search";
                                        case "helpdocs":
                                            return "Help Center";
                                        case "skills":
                                            return "Skills";
                                        case "web":
                                            return "Web";
                                        case "asana":
                                            return "Asana";
                                        case "box":
                                            return "Box";
                                        case "browser":
                                            return "Browser";
                                        case "discord":
                                            return "Discord";
                                        case "github":
                                            return "Github";
                                        case "googleDrive":
                                            return "Google Drive";
                                        case "gmail":
                                            return "Gmail";
                                        case "googleCalendar":
                                            return "Google Calendar";
                                        case "jira":
                                            return "Jira";
                                        case "linear":
                                            return "Linear";
                                        case "microsoftTeams":
                                            return "Microsoft Teams";
                                        case "marketplace":
                                            return "Marketplace";
                                        case "outlook":
                                            return "Outlook";
                                        case "salesforce":
                                            return "Salesforce";
                                        case "confluence":
                                            return "Confluence";
                                        case "sharepoint":
                                            return "SharePoint";
                                        case "customConnector":
                                            return "Custom Connectors";
                                        case "security":
                                            return "Security";
                                        case "system":
                                            return "System";
                                        default:
                                            (0, t(722371).HB)(s)
                                    }
                                }({
                                    module: e,
                                    slackWorkspaceName: s
                                })
                            })) : []]
                        }({
                            edits: i,
                            slackWorkspaceName: d,
                            spaceStore: o
                        }) : [],
                        f = r.getDraftData() ? ? (null == (e = r.getPublishedArtifactStore()) ? void 0 : e.getData()),
                        b = (null == f ? void 0 : f.modules) ? ? [],
                        y = l && (0, t(767316).Yo)(b);
                    if (0 === h.length && !y) return !0;
                    let x = null == (n = r.getName()) ? void 0 : n.trim(),
                        j = null != x && x.length ? x : void 0,
                        A = c ? ? m.formatMessage(k.saveConfirmationMessage, {
                            agentName: j
                        }),
                        P = y && 0 === h.length ? k.dangerousCombinationDescription : k.saveConfirmationDescription,
                        M = u ? ? m.formatMessage(P),
                        C = (0, s.jsx)(t(68774).N, {
                            href: (0, t(442564).x)("guides.customAgentsSharingAndPermissions"),
                            external: !0,
                            style: I,
                            children: (0, s.jsx)(t(988022).p, {
                                size: "lg",
                                style: w,
                                colorVariant: "secondary",
                                children: m.formatMessage(k.saveConfirmationWarningText)
                            })
                        });
                    return (await t(647095).Gh({
                        message: A,
                        warningText: C,
                        description: (0, s.jsx)(a, {
                            descriptionText: M,
                            riskyEdits: h,
                            spaceStore: o,
                            hasDangerousCombination: y
                        }),
                        acceptLabel: m.formatMessage(k.saveConfirmationAccept),
                        acceptColor: "blue",
                        mode: "wide",
                        icon: (0, s.jsx)(t(466113).G, {
                            workflowStore: r
                        }),
                        showCancelButton: !1,
                        showCloseButton: !0
                    })).accept
                }, [i, u, m, l, g, c, p, d, o, r])
            }
        },
        232081: (e, i, t) => {
            t.d(i, {
                A: () => o
            });
            var n = () => t(546605);
            class s extends n().Store {
                getInitialState() {
                    return {
                        trustedDomainPointers: [],
                        enabledTrustedEmailDomains: [],
                        trustedDomains: [],
                        lastEmitData: {
                            value: -1,
                            spaceId: void 0
                        }
                    }
                }
                getForSpace(e) {
                    if (!e) return;
                    let {
                        enabledTrustedEmailDomains: i,
                        trustedDomainPointers: t,
                        trustedDomains: n,
                        lastEmitData: s
                    } = this.state;
                    if (s.spaceId === e.id) return {
                        enabledTrustedEmailDomains: i,
                        trustedDomainPointers: t,
                        trustedDomains: n
                    }
                }
                shouldRefetchTrustedDomains({
                    currentSpaceId: e,
                    emitValue: i
                }) {
                    let {
                        spaceId: t,
                        value: n
                    } = this.state.lastEmitData;
                    return e !== t || i !== n
                }
            }
            let o = s
        },
        315799: (e, i, t) => {
            t.d(i, {
                c: () => a,
                m: () => o
            });
            var n = () => t(546605);

            function s(e) {
                switch (e.type) {
                    case "external":
                        return `external-${e.botId}`;
                    case "workflowExternal":
                        return `workflowExternal-${e.externalConnectionId}`;
                    case "universal":
                        return `universal-${e.app}-${e.spaceId}`;
                    default:
                        throw (0, t(722371).HB)(e)
                }
            }
            let o = {
                channels: {},
                fetching: !1,
                lastRefreshed: 0,
                failed: !1
            };
            class r extends n().Store {
                getStateForBot(e) {
                    let i = s(e);
                    return this.state[i] ? ? o
                }
                updateStateForBot(e, i) {
                    this.setState({ ...this.state,
                        [s(e)]: { ...this.getStateForBot(e),
                            ...i
                        }
                    })
                }
                addChannelsForBot(e, i) {
                    let t = this.getStateForBot(e);
                    this.setState({ ...this.state,
                        [s(e)]: { ...t,
                            channels: { ...t.channels,
                                ...i
                            }
                        }
                    })
                }
                findChannelById(e) {
                    for (let i of Object.keys(this.state)) {
                        let t = this.state[i],
                            n = null == t ? void 0 : t.channels[e];
                        if (n) return n
                    }
                }
            }
            let a = new r;
            (0, t(202146).exposeDebugValue)("ExternalNotificationChannelsStore", a)
        },
        324533: (e, i, t) => {
            t.r(i), t.d(i, {
                iconDefinition: () => n,
                paperPlaneSmallIcon: () => s
            }), t(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.53 2.17 12.34 12.33",
                    svg: (0, t(474848).jsx)("path", {
                        d: "M13.308 2.179a.6.6 0 0 0-.294.038L1.934 6.505a.625.625 0 0 0-.074 1.132l4.231 2.312 2.313 4.23a.625.625 0 0 0 1.13-.073l4.289-11.08a.625.625 0 0 0-.21-.727m-.041-.029a.6.6 0 0 0-.264-.091zM3.64 7.185l7.064-2.734L6.44 8.715zM7.325 9.6l4.264-4.264L8.855 12.4z"
                    })
                },
                s = (0, t(104509).wt)("paperPlaneSmall", n, "small")
        },
        346582: (e, i, t) => {
            t.d(i, {
                b: () => s
            });
            var n = () => t(642157);

            function s(e) {
                let i = (0, t(345776).T)();
                return (0, t(682985).K8)(() => {
                    if (!e) return !1;
                    for (let t of e.getPermissionItems() || [])
                        if ((0, n().Lg)(t) && "none" !== t.role || (0, n().Ds)(t) && "none" !== t.role || (0, n().B2)(t) && "none" !== t.role && (!i || t.user_id !== i)) return !0;
                    return !1
                }, [e, i])
            }
        },
        354253: (e, i, t) => {
            t.r(i), t.d(i, {
                GeneralAccessPermissionSection: () => J
            });
            var n = t(296540);

            function s(e, i) {
                let n = e.table === t(832375).evP ? e.getPublicPermission() : void 0,
                    s = (0, t(381453).o8)(n ? ? {
                        type: "public_permission",
                        role: "none"
                    });
                s.role = i;
                let {
                    is_site: o
                } = s;
                return "none" !== i ? { ...s,
                    is_public_share_link: !0
                } : o ? { ...s,
                    role: "reader",
                    is_public_share_link: !1
                } : { ...s,
                    is_public_share_link: !1
                }
            }
            t(898992), t(354520), t(581454);
            let o = {
                control: (0, t(109939).YK)({
                    label: {
                        id: "shareMenuPermissionLabel.control.label",
                        defaultMessage: "Only people invited"
                    }
                }),
                restricted: (0, t(109939).YK)({
                    label: {
                        id: "shareMenuPermissionLabel.restricted.label",
                        defaultMessage: "Restricted"
                    },
                    helperText: {
                        id: "shareMenuPermissionLabel.restricted.helperText",
                        defaultMessage: "This page can only be accessed by people you share it with"
                    }
                }),
                shared_with: (0, t(109939).YK)({
                    label: {
                        id: "shareMenuPermissionLabel.sharedWith.label",
                        defaultMessage: "Only people shared with"
                    }
                })
            };

            function r(e) {
                let {
                    permission: i,
                    includeHybrid: t
                } = e;
                return "none" === i.role && void 0 === i.can_create_pages_in_collection ? "private" : t ? "open_unlisted_hybrid" : i.unlisted_timestamp ? "unlisted" : "open"
            }
            var a = t(474848);
            let l = {
                menuItemDesktopIconStyle: { ...t(986939).A.isMobile ? {
                        marginTop: 5,
                        marginBottom: 4,
                        marginInlineStart: 13,
                        marginInlineEnd: 6
                    } : {
                        marginInlineStart: 0
                    },
                    alignSelf: "center"
                }
            };

            function d(e) {
                let i, {
                        store: o,
                        publicPermission: r,
                        permissionItemArgs: d,
                        menuListItemProps: c,
                        onClose: u
                    } = e,
                    {
                        permissionItem: p,
                        from: m
                    } = r,
                    {
                        sudoModeStore: g,
                        location: h
                    } = d,
                    f = (0, t(533992).v3)(),
                    {
                        isPhone: b
                    } = (0, t(533992).Y0)(),
                    y = (0, t(809934).v)(r.permissionItem),
                    v = (0, t(612604).P)({
                        store: o
                    }),
                    _ = v.disabled,
                    x = (0, n.useCallback)(async () => {
                        let e = (0, t(642157).Yi)(m),
                            i = s(o, "reader");
                        await (0, t(319627).Hc)({
                            oldPermissionItem: p,
                            newPermissionItem: i,
                            wasInherited: e !== o.id,
                            environment: f,
                            store: o,
                            sudoModeStore: g,
                            location: h
                        }), u()
                    }, [f, o, p, m, g, h, u]),
                    S = (0, t(960253).I)(() => ({
                        menuItemContainer: {
                            minHeight: 28,
                            marginBottom: 2,
                            lineHeight: "unset",
                            ...b && {
                                paddingTop: t(255069).T3,
                                paddingBottom: t(255069).T3
                            },
                            color: t(632079).Tj.text.primary,
                            ..._ && {
                                color: t(632079).Tj.text.tertiary
                            }
                        }
                    }), [b, _]);
                return _ && "space" === v.disabledBy && (i = (0, a.jsx)(t(109939).sA, {
                    defaultMessage: "Workspace admin has disabled this sharing permission",
                    id: "publicShareLinkItem.menuItemTooltip.publicSharingDisabledWorkspace"
                })), _ && "team" === v.disabledBy && (i = (0, a.jsx)(t(109939).sA, {
                    defaultMessage: "Teamspace admin has disabled this sharing permission",
                    id: "publicShareLinkItem.menuItemTooltip.publicSharingDisabledTeamspace"
                })), (0, a.jsx)(t(51831).m, {
                    content: e => i,
                    placement: "bottom",
                    disableTooltip: !_,
                    children: e => (0, a.jsx)(t(95582).A, { ...c,
                        ...e,
                        title: (0, a.jsx)(t(109939).sA, {
                            defaultMessage: "Anyone on the web with link",
                            id: "publicShareLinkItem.menuItem.title"
                        }),
                        shouldWrapTitle: !0,
                        shouldWrapCaption: !0,
                        style: S.menuItemContainer,
                        icon: (0, a.jsx)(t(16275).I, {
                            icon: t(515388).globeIcon,
                            colorVariant: _ ? "tertiary" : "secondary"
                        }),
                        desktopIconStyle: l.menuItemDesktopIconStyle,
                        isChecked: y,
                        disabled: _,
                        onClick: x
                    })
                })
            }
            let c = t(104509).Ev.default,
                u = {
                    marginTop: 1
                },
                p = {
                    marginTop: 1
                },
                m = [{
                    key: "private",
                    title: ({
                        type: e
                    }) => "full" === e ? (0, a.jsx)(t(109939).sA, {
                        id: "linkSharingPill.visibilityTitle.inviteOnlyFullLength",
                        defaultMessage: "Only people invited"
                    }) : (0, a.jsx)(t(109939).sA, {
                        id: "linkSharingPill.visibilityTitle.inviteOnly",
                        defaultMessage: "Invite only"
                    }),
                    caption: () => (0, a.jsx)(t(109939).sA, {
                        id: "linkSharingPill.visibilityCaption.inviteOnly",
                        defaultMessage: "Only you and people invited can access"
                    }),
                    icon: ({
                        style: e
                    }) => (0, a.jsx)(t(16275).I, {
                        icon: t(269298).lockFillIcon,
                        style: { ...e,
                            ...u
                        }
                    })
                }, {
                    key: "unlisted",
                    title: ({
                        spaceName: e
                    }) => (0, a.jsx)(t(109939).sA, {
                        id: "linkSharingPill.visibilityTitle.anyoneWithLinkRedesign",
                        defaultMessage: "Anyone at {spaceName} with the link",
                        values: {
                            spaceName: e
                        }
                    }),
                    caption: () => (0, a.jsx)(t(109939).sA, {
                        id: "linkSharingPill.visibilityCaption.anyoneWithLinkRedesign",
                        defaultMessage: "Workspace members can access with the link"
                    }),
                    icon: ({
                        style: e
                    }) => (0, a.jsx)(t(16275).I, {
                        icon: t(588739).linkIcon,
                        style: { ...e,
                            ...p
                        }
                    })
                }, {
                    key: "open",
                    title: ({
                        spaceName: e
                    }) => (0, a.jsx)(t(109939).sA, {
                        id: "linkSharingPill.visibilityTitle.everyoneInWorkspace",
                        defaultMessage: "Everyone at {spaceName}",
                        values: {
                            spaceName: e
                        }
                    }),
                    caption: () => (0, a.jsx)(t(109939).sA, {
                        id: "linkSharingPill.visibilityCaption.everyoneInWorkspaceV2",
                        defaultMessage: "Workspace members can access and discover in search"
                    }),
                    icon: ({
                        spaceStore: e,
                        teamspaceIconSize: i
                    }) => (0, a.jsx)(t(729746).x, {
                        disabled: !0,
                        store: e,
                        size: i,
                        style: {
                            marginInlineStart: (c - i) / 2,
                            marginInlineEnd: (c - i) / 2
                        }
                    })
                }, {
                    key: "open_unlisted_hybrid",
                    title: ({
                        spaceName: e,
                        visibility: i
                    }) => "unlisted" === i ? (0, a.jsx)(t(109939).sA, {
                        id: "blockPermissionsSettings.permissionItem.workspaceAccessNew.unlisted",
                        defaultMessage: "Everyone at {spaceName} with the link",
                        values: {
                            spaceName: e
                        }
                    }) : (0, a.jsx)(t(109939).sA, {
                        id: "linkSharingPill.visibilityTitle.everyoneInWorkspace",
                        defaultMessage: "Everyone at {spaceName}",
                        values: {
                            spaceName: e
                        }
                    }),
                    caption: () => {},
                    icon: ({
                        spaceStore: e,
                        teamspaceIconSize: i
                    }) => (0, a.jsx)(t(729746).x, {
                        disabled: !0,
                        store: e,
                        size: i,
                        style: {
                            marginInlineStart: (c - i) / 2,
                            marginInlineEnd: (c - i) / 2
                        }
                    })
                }],
                g = (0, t(109939).YK)({
                    riskyEditsDescription: {
                        id: "shareMenu.generalAccess.agentWorkspaceWarning.confirmation.riskyEditsDescription",
                        defaultMessage: "Anyone in the workspace with ‘Can interact’ access to this agent will have the following."
                    }
                }),
                h = {
                    key: "publicShareLink",
                    title: () => void 0,
                    caption: () => void 0,
                    icon: () => void 0
                },
                f = {
                    icon: {
                        fill: t(986939).A.isMobile ? t(632079).Tj.icon.primary : t(632079).Tj.text.primary,
                        width: c
                    },
                    iconContainer: { ...t(986939).A.isMobile ? {
                            marginInlineStart: 13,
                            marginTop: 5,
                            marginBottom: 4
                        } : {
                            marginInlineStart: 0
                        },
                        marginInlineEnd: 0,
                        alignSelf: "center"
                    },
                    selectedTitle: {},
                    titleStyle: t(986939).A.isMobile ? {
                        marginInlineStart: 4
                    } : {},
                    mobileScroller: {
                        background: t(632079).Tj.background.secondary
                    },
                    mobileButton: {
                        paddingTop: 8,
                        paddingBottom: 8
                    },
                    mobileButtonDivider: {
                        borderBottom: `1px solid ${t(632079).Tj.border.secondaryTranslucent}`
                    },
                    sectionMenuItem: { ...!t(986939).A.isMobile ? {
                            paddingTop: 4,
                            paddingBottom: 4
                        } : {},
                        ...t(986939).A.isMobile ? {
                            overflow: "hidden",
                            background: t(632079).Tj.background.elevated,
                            borderRadius: 12,
                            marginInlineStart: 16,
                            marginInlineEnd: 16,
                            marginBottom: 16,
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: t(632079).Tj.border.secondary,
                            padding: void 0
                        } : {}
                    },
                    menuList: { ...t(986939).A.isMobile ? {
                            width: "100%",
                            margin: "0 auto"
                        } : {}
                    },
                    header: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        background: t(632079).Tj.background.secondary,
                        paddingTop: 12,
                        paddingBottom: 20
                    },
                    headerLabel: {
                        fontSize: 16,
                        fontWeight: t(699422).Wy.semibold
                    },
                    style0: {
                        borderRadius: 6
                    }
                };

            function b(e) {
                let {
                    store: i,
                    spacePermission: l,
                    sudoModeStore: c,
                    location: u,
                    isRestricted: p,
                    trustedDomainPermission: b,
                    publicPermission: y,
                    showPublicShareLinkPermission: v,
                    parentCloseCallback: _,
                    handleSpacePermissionChange: x,
                    permissionItemArgs: S,
                    onlyShowPrivateSpaceVisibility: k
                } = e, I = (0, t(533992).v3)(), {
                    isTablet: w
                } = (0, t(533992).Y0)(), j = (0, t(682985).O$)(t(728372).AppStoreSidebarSpaceStore), A = r({
                    permission: l.permissionItem,
                    includeHybrid: !0
                }), P = r({
                    permission: l.permissionItem,
                    includeHybrid: !1
                }), M = i instanceof t(360851).N ? i : void 0, C = (0, t(682985).K8)(() => {
                    var e;
                    if (!M || !j) return [];
                    let {
                        edits: i
                    } = (0, t(604789).x)({
                        oldWorkflow: void 0,
                        newWorkflow: M.getDraftData() ? ? (null == (e = M.getPublishedArtifactStore()) ? void 0 : e.getData()),
                        returnAllEditsEvenIfWorkflowMissing: !0
                    });
                    return i
                }, [j, M]), T = (0, t(682985).K8)(() => t(32913).Rh.state.externalSourceName, []), B = (0, t(109939).tz)(), L = (0, t(229337).B)({
                    edits: C,
                    spaceStore: j,
                    workflowStore: M,
                    isEnabled: i.table === t(832375).C0E,
                    requireSharedWithUsers: !1,
                    slackWorkspaceName: T,
                    message: (0, a.jsx)(t(111010).D, {
                        styleKey: "titleSmSemibold",
                        children: (0, a.jsx)(t(109939).sA, {
                            id: "shareMenu.generalAccess.agentWorkspaceWarning.confirmation.title",
                            defaultMessage: "Make this agent available to everyone?"
                        })
                    }),
                    descriptionText: B.formatMessage(g.riskyEditsDescription)
                }), D = l.from, W = (0, t(642157).Yi)(D), O = D.table !== i.table || W !== i.id, E = (0, t(682985).K8)(() => !!j && i.table === t(832375).evP && i.isTopLevelWorkspacePage(j.id), [i, j]), R = (0, t(481522).X)(), N = (0, t(682985).K8)(() => {
                    let e = t(865768).QJ({
                        store: i
                    });
                    return e ? r({
                        permission: e,
                        includeHybrid: !1
                    }) : "private"
                }, [i]), V = (0, t(642157).Tt)((null == b ? void 0 : b.permissionItem.role) ? ? "none"), K = (0, t(682985).K8)(() => t(218744).default.getEligibleGroup({
                    experimentId: "adoption_share_menu_permission_label_clarity_copy",
                    disableExposureLogging: !0
                }), []), H = function(e) {
                    let {
                        onlyShowPrivateSpaceVisibility: i,
                        hideOpenAndUnlistedOption: t
                    } = e;
                    return m.filter(({
                        key: e
                    }) => i || t ? "private" === e : "private" === e || "open_unlisted_hybrid" === e)
                }({
                    onlyShowPrivateSpaceVisibility: k,
                    hideOpenAndUnlistedOption: (0, t(75843).V)()
                });
                (0, n.useEffect)(() => {
                    null != j && j.id && t(758144).V0({
                        environment: I,
                        spaceId: j.id,
                        pageId: i.id,
                        pageVisibility: P,
                        hasTrustedDomainPermission: V,
                        hasPublicShareLinkPermission: null != y && !!y.permissionItem && (0, t(809934).v)(y.permissionItem),
                        shareMenuSessionId: t(880853).Ay.state.sessionId
                    })
                }, [null == j ? void 0 : j.id, i.id, P, V, I, y]);
                let z = v ? [...H, h] : H;
                if (!j) return null;
                let F = !!y && (0, t(809934).v)(y.permissionItem);
                return (0, a.jsx)(t(747369).A, {
                    menuType: (t(986939).A.isMobile, t(649476).gu.Popup),
                    disableScroller: !0,
                    scrollerStyle: t(986939).A.isMobile ? f.mobileScroller : {},
                    height: t(986939).A.isMobile ? w ? "100%" : "50vh" : void 0,
                    minWidth: t(986939).A.isMobile ? "100%" : void 0,
                    maxWidth: t(986939).A.isMobile ? "100%" : void 0,
                    maxHeight: t(986939).A.isMobile ? "100%" : void 0,
                    header: t(986939).A.isMobile ? (0, a.jsx)("div", {
                        style: f.header,
                        children: (0, a.jsx)(t(324489).V, {
                            style: f.headerLabel,
                            children: (0, a.jsx)(t(109939).sA, {
                                defaultMessage: "General access",
                                id: "PermissionRoleSelect.Header.GeneralAccess"
                            })
                        })
                    }) : void 0,
                    children: (0, a.jsx)(t(558045).A, {
                        type: t(558045).O.Vertical,
                        initialFocus: void 0,
                        style: t(986939).A.isMobile ? f.menuList : void 0,
                        sections: [{
                            key: "visibilityOptions",
                            render: e => (0, a.jsx)(t(844565).A, { ...e,
                                disableDesktopPadding: t(986939).A.isMobile,
                                style: f.sectionMenuItem
                            }),
                            items: z.map((e, n) => {
                                let r = e.key;
                                if ("publicShareLink" === r) return i.table !== t(832375).evP ? void 0 : y ? {
                                    key: "public_share_link",
                                    action: () => {},
                                    render: e => (0, a.jsx)(d, {
                                        store: i,
                                        publicPermission: y,
                                        permissionItemArgs: S,
                                        menuListItemProps: e,
                                        onClose: _
                                    })
                                } : void 0;
                                let g = function(e) {
                                        let {
                                            oldVisibility: i,
                                            newVisibility: t,
                                            hasPublicShareLinkPublicPermission: n
                                        } = e;
                                        return !n && (i === t || "unlisted" === i && "open" === t || "open" === i && "unlisted" === t)
                                    }({
                                        oldVisibility: A,
                                        newVisibility: r,
                                        hasPublicShareLinkPublicPermission: F
                                    }),
                                    h = n !== m.length - 1,
                                    b = {
                                        minHeight: 28,
                                        ...t(986939).A.isMobile ? f.mobileButton : {},
                                        ...t(986939).A.isMobile && h ? f.mobileButtonDivider : {},
                                        ...h && !t(986939).A.isMobile && {
                                            marginBottom: 2
                                        }
                                    },
                                    v = "restricted" === K,
                                    k = "private" === r && (v || "shared_with" === K);
                                return {
                                    key: r,
                                    render: i => (0, a.jsx)(t(95582).A, {
                                        title: (0, a.jsxs)(t(324489).V, {
                                            isMultiline: !0,
                                            children: [k ? B.formatMessage(o[v ? "restricted" : "shared_with"].label) : e.title({
                                                spaceName: R,
                                                type: "full",
                                                visibility: P
                                            }), "private" === r && v ? (0, a.jsx)(t(111010).D, {
                                                styleKey: "captionRegular",
                                                colorVariant: "secondary",
                                                children: B.formatMessage(o.restricted.helperText)
                                            }) : void 0]
                                        }),
                                        icon: e.icon({
                                            style: f.icon,
                                            spaceStore: j,
                                            teamspaceIconSize: 20
                                        }),
                                        desktopIconStyle: f.iconContainer,
                                        titleStyle: { ...f.titleStyle,
                                            ...g && !t(986939).A.isMobile ? f.selectedTitle : {}
                                        },
                                        isChecked: g,
                                        buttonStyle: f.style0,
                                        style: b,
                                        shouldWrapTitle: !0,
                                        ...i
                                    }),
                                    action: async () => {
                                        var e, n, o, a;
                                        if (g) return;
                                        if (i.table === t(832375).C0E && "private" === P && "private" !== r && !await L()) return void _();
                                        let d = l.permissionItem,
                                            m = {
                                                type: "space_permission",
                                                role: (e = d, n = P, o = r, a = i, "private" === o ? "none" : a.table === t(832375).C0E && "private" === n ? "reader" : "private" === n ? "editor" : e.role)
                                            };
                                        "unlisted" === r && (m.unlisted_timestamp = Date.now());
                                        let h = function(e, i) {
                                                if (e === i) return !1;
                                                switch (i) {
                                                    case "open":
                                                    case "open_unlisted_hybrid":
                                                        return !1;
                                                    case "unlisted":
                                                        return "open" === e;
                                                    case "private":
                                                        return !0;
                                                    default:
                                                        (0, t(722371).HB)(i)
                                                }
                                            }(N, r) && !p && !E,
                                            f = !1,
                                            b = !1;
                                        if ("block" === i.table) {
                                            let e = await (0, t(437710).S)({
                                                environment: I,
                                                store: i,
                                                newPermissionItem: m
                                            });
                                            if (e.wasDuplicatable && !e.willBeDuplicatable) {
                                                if (!e.confirmedChange) return void _();
                                                f = !0
                                            } else !e.wasDuplicatable && e.willBeDuplicatable && (b = !0)
                                        }
                                        let v = await (0, t(319627).Hc)({
                                            oldPermissionItem: d,
                                            newPermissionItem: m,
                                            wasInherited: O,
                                            environment: I,
                                            store: i,
                                            sudoModeStore: c,
                                            location: u,
                                            restrictingVisibility: h
                                        });
                                        if (v && x && x({
                                                before: d,
                                                after: m
                                            }), v && "private" === r && y && F) {
                                            let e = y.from,
                                                n = (0, t(642157).Yi)(e),
                                                o = e.table !== i.table || n !== i.id;
                                            ! function(e) {
                                                let {
                                                    environment: i,
                                                    store: n,
                                                    publicPermission: o,
                                                    wasInherited: r,
                                                    location: a,
                                                    sudoModeStore: l
                                                } = e, d = o.permissionItem, c = s(n, "none");
                                                (0, t(319627).Hc)({
                                                    environment: i,
                                                    store: n,
                                                    oldPermissionItem: d,
                                                    newPermissionItem: c,
                                                    wasInherited: r,
                                                    location: a,
                                                    sudoModeStore: l
                                                })
                                            }({
                                                environment: I,
                                                store: i,
                                                publicPermission: y,
                                                wasInherited: o,
                                                location: u,
                                                sudoModeStore: c
                                            })
                                        }
                                        v && f ? t(281360).a({
                                            environment: I,
                                            spaceStore: j,
                                            pageId: void 0,
                                            from: "page_permissions"
                                        }) : v && b && (0, t(356622).V)({
                                            environment: I,
                                            spaceStore: j,
                                            errors: []
                                        }), _()
                                    }
                                }
                            }).filter(t(722371).O9)
                        }]
                    })
                })
            }
            let y = {
                    origin: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingInlineStart: 6,
                        marginInlineStart: -6,
                        height: void 0,
                        paddingTop: 6,
                        paddingBottom: 6,
                        gap: 4
                    },
                    privacyMenu: { ...!t(986939).A.isMobile && {
                            width: "max-content",
                            borderRadius: 10
                        },
                        ...t(986939).A.isMobile && {
                            maxWidth: "100%"
                        }
                    },
                    title: {
                        fontSize: 14,
                        whiteSpace: "normal"
                    },
                    mobileButton: {
                        display: "flex",
                        alignItems: "center",
                        whiteSpace: "normal",
                        gap: 4,
                        marginBottom: 4,
                        height: void 0
                    }
                },
                v = n.memo(function({
                    store: e,
                    spacePermission: i,
                    trustedDomainPermission: s,
                    publicPermission: o,
                    showPublicShareLinkPermission: r,
                    isRestricted: l,
                    permissionItemArgs: d,
                    hideHoverStyles: c,
                    buttonPopupStore: u,
                    isDisplayOnly: p,
                    handleSpacePermissionChange: m,
                    title: g,
                    onlyShowPrivateSpaceVisibility: h
                }) {
                    let f = e.table === t(832375).evP,
                        v = (0, t(270102).i)(f ? e : void 0),
                        _ = (0, t(682985).K8)(() => e.canAdmin(), [e]),
                        x = !_ || p || v,
                        S = (0, n.useCallback)(() => u.setState({ ...u.state,
                            open: !0
                        }), [u]);
                    return x ? (0, a.jsx)("div", {
                        style: y.title,
                        children: g
                    }) : (0, a.jsx)(t(656252).A, {
                        disabled: x,
                        onClick: S,
                        buttonPopupStore: u,
                        style: y.privacyMenu,
                        alignmentToOrigin: "start",
                        popupType: t(986939).A.isMobile ? t(182718).nl.BottomSheet : t(182718).nl.Popup,
                        content: t => i ? (0, a.jsx)(b, {
                            store: e,
                            spacePermission: i,
                            parentCloseCallback: t.close,
                            trustedDomainPermission: s,
                            publicPermission: o,
                            showPublicShareLinkPermission: r,
                            isRestricted: l,
                            sudoModeStore: d.sudoModeStore,
                            location: d.location,
                            permissionItemArgs: d,
                            handleSpacePermissionChange: m,
                            onlyShowPrivateSpaceVisibility: h
                        }) : null,
                        children: e => t(986939).A.isMobile ? (0, a.jsx)("div", {
                            style: y.title,
                            ...e,
                            children: (0, a.jsxs)("div", {
                                style: y.mobileButton,
                                children: [g, (0, a.jsx)(t(16275).I, {
                                    icon: t(491469).arrowChevronSingleRightSmallIcon,
                                    size: "sm",
                                    colorVariant: "secondary"
                                })]
                            })
                        }) : (0, a.jsxs)(t(988022).p, {
                            style: y.origin,
                            hoveredStyle: c ? {
                                background: "unset"
                            } : void 0,
                            pressedStyle: c ? {
                                background: "unset"
                            } : void 0,
                            disabled: x,
                            ...e,
                            children: [(0, a.jsx)("div", {
                                style: y.title,
                                children: g
                            }), _ ? (0, a.jsx)(t(16275).I, {
                                icon: t(595453).arrowChevronSingleDownSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            }) : null]
                        })
                    })
                }),
                _ = {
                    width: 260
                };

            function x(e) {
                let {
                    originRef: i
                } = e, n = (0, t(533992).v3)(), s = (0, t(682985).K8)(() => t(696190).default.isVisible(t(347971).dv), []), o = (0, t(718012).V)();
                return (0, a.jsx)(t(397732).B, {
                    shouldShow: s,
                    calloutId: t(347971).dv,
                    inAppCalloutStore: o,
                    children: (0, a.jsx)(t(788139).k, {
                        style: _,
                        pointerLength: 25,
                        pointerPosition: "50%",
                        origin: i,
                        placementToOrigin: "left",
                        alignmentToOrigin: "center",
                        numSteps: 1,
                        header: (0, a.jsx)(t(109939).sA, {
                            id: "meeting_notes_public_share_link_tooltip.header",
                            defaultMessage: "Public link copied!"
                        }),
                        content: (0, a.jsx)(t(109939).sA, {
                            id: "meeting_notes_public_share_link_tooltip.content",
                            defaultMessage: "This page is now accessible to anyone on the web with the link and ready to share."
                        }),
                        finalButtonContent: null,
                        onCloseClick: () => {
                            (0, t(59579).a)(n, t(347971).dv)
                        },
                        shouldDismissUponOutsideClick: !0
                    })
                })
            }
            let S = {
                    type: "public_permission",
                    role: "none",
                    is_public_share_link: !1
                },
                k = {
                    container: {
                        width: "100%"
                    },
                    linkExpirationContainer: t(986939).A.isMobile ? {
                        minHeight: 0
                    } : {},
                    linkExpirationButton: t(986939).A.isMobile ? {
                        paddingInlineStart: 16,
                        paddingInlineEnd: 16,
                        paddingTop: 12,
                        paddingBottom: 12,
                        width: void 0,
                        borderBottomWidth: 1,
                        borderBottomStyle: "solid",
                        borderBottomColor: t(632079).Tj.border.secondary,
                        background: t(632079).Tj.background.elevated
                    } : {
                        padding: 0
                    }
                };

            function I(e) {
                let {
                    store: i,
                    spacePermission: o,
                    publicPermission: r,
                    trustedDomainPermission: l,
                    permissionItemArgs: d,
                    fromPermissionWrapper: c,
                    isRestricted: u
                } = e, {
                    permissionItem: p,
                    from: m
                } = r, {
                    location: g,
                    sudoModeStore: h
                } = d, f = (0, t(533992).v3)(), b = (0, n.useRef)(null), y = (0, t(682985).uB)(void 0, t(510969).A), _ = !f.currentUser.isLoggedIn(), I = "none" !== o.permissionItem.role, w = (0, t(809934).v)(p) ? p : { ...p,
                    ...S
                }, A = (0, n.useCallback)(() => {
                    y.setState({
                        open: !0
                    })
                }, [y]), C = (0, n.useCallback)(async e => {
                    let n = (0, t(642157).Yi)(m) !== i.id;
                    if ("string" != typeof e || !(e in t(642157).TE)) return !1;
                    let o = s(i, e);
                    return await (0, t(319627).Hc)({
                        environment: f,
                        store: i,
                        oldPermissionItem: p,
                        newPermissionItem: o,
                        wasInherited: n,
                        location: g,
                        sudoModeStore: h
                    })
                }, [f, i, p, m, g, h]), T = (0, n.useCallback)(async e => {
                    let n = (0, t(642157).Yi)(m) !== i.id,
                        s = { ...p,
                            expiration_timestamp: e
                        };
                    return await (0, t(319627).Hc)({
                        environment: f,
                        store: i,
                        oldPermissionItem: p,
                        newPermissionItem: s,
                        wasInherited: n,
                        location: g,
                        sudoModeStore: h
                    })
                }, [f, i, p, m, g, h]), B = (0, n.useMemo)(() => [{
                    role: "none",
                    prefixItem: {
                        key: "link-expiration",
                        render: e => (0, a.jsx)("div", { ...e,
                            children: (0, a.jsx)(t(886868).A, {
                                permissionItem: p,
                                hideIcon: !0,
                                onChange: T,
                                focused: !1,
                                buttonStyle: k.linkExpirationButton,
                                style: k.linkExpirationContainer,
                                spaceStore: (0, t(974410).f)(i)
                            })
                        }),
                        action: () => {}
                    }
                }], [p, i, T]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(x, {
                        originRef: b
                    }), (0, a.jsx)("div", {
                        style: k.container,
                        className: t(828432).VRj,
                        ref: b,
                        children: (0, a.jsx)(t(557683).Ay, {
                            store: i,
                            permissionItem: w,
                            from: m,
                            shouldDisable: _,
                            fromPermissionWrapper: c,
                            onClick: A,
                            onChange: C,
                            roleItemOverrides: B,
                            icon: (0, a.jsx)(j, {}),
                            title: (0, a.jsx)(v, {
                                store: i,
                                spacePermission: o,
                                trustedDomainPermission: l,
                                publicPermission: r,
                                showPublicShareLinkPermission: !0,
                                isRestricted: u,
                                permissionItemArgs: d,
                                fromPermissionWrapper: c,
                                buttonPopupStore: y,
                                hideHoverStyles: !1,
                                isDisplayOnly: d.shouldDisable ? ? !1,
                                title: (0, a.jsx)(P, {}),
                                onlyShowPrivateSpaceVisibility: I
                            }),
                            subtitle: t(986939).A.isMobile ? (0, a.jsx)(M, {
                                role: p.role
                            }) : void 0,
                            upgradeButtonName: "public_share_link_item",
                            isRemovableOverride: !0,
                            renderTitleWithoutUILabelWrapper: !0,
                            ...d
                        })
                    })]
                })
            }
            let w = {
                globeIcon: {
                    width: t(986939).A.isMobile ? 24 : t(104509).Ev.default,
                    height: t(986939).A.isMobile ? 24 : t(104509).Ev.default
                }
            };

            function j() {
                return (0, a.jsx)(t(427986).A, {
                    type: "square",
                    iconType: "function",
                    iconFn: t(515388).globeIcon,
                    iconStyle: w.globeIcon
                })
            }
            let A = {
                fontSize: 14,
                whiteSpace: "normal"
            };

            function P() {
                return (0, a.jsx)("div", {
                    style: A,
                    children: (0, a.jsx)(t(109939).sA, {
                        defaultMessage: "Anyone on the web with link",
                        id: "publicShareLinkItem.permissionItem.title"
                    })
                })
            }

            function M(e) {
                let {
                    role: i
                } = e;
                return t(986939).A.isMobile ? (0, a.jsx)(t(109939).sA, { ...(0, t(132866).R)({
                        type: "public_permission",
                        role: i,
                        table: "block",
                        isRemovable: !1
                    }).label
                }) : null
            }

            function C({
                store: e,
                spaceOwnerPermission: i,
                permissionItemArgs: n,
                fromPermissionWrapper: s
            }) {
                let o = (0, t(533992).v3)(),
                    r = (0, t(682985).O$)(t(728372).AppStoreSidebarSpaceStore),
                    l = (0, t(682985).K8)(() => {
                        if (r) return (0, t(742197).G)(o, r)
                    }, [o, r]);
                return r ? (0, a.jsx)(t(557683).Ay, {
                    store: e,
                    permissionItem: i.permissionItem,
                    from: i.from,
                    icon: (0, a.jsx)(t(867292).A, {
                        store: r
                    }),
                    title: (0, a.jsx)(t(324489).V, {
                        isMultiline: !0,
                        children: (0, a.jsx)(t(109939).sA, {
                            id: "spaceOwnerPermissionItem.title",
                            defaultMessage: "Owners of {spaceName}",
                            values: {
                                spaceName: l || (0, a.jsx)(t(109939).sA, {
                                    id: "generalAccessPermissionsList.getSpaceName.untitledWorkspace.name",
                                    defaultMessage: "Untitled workspace"
                                })
                            }
                        })
                    }),
                    upgradeButtonName: "space_owner_permission_item",
                    fromPermissionWrapper: s,
                    isRemovableOverride: !1,
                    hideRoleSelectButton: !1,
                    renderTitleWithoutUILabelWrapper: !0,
                    shouldDisable: !0,
                    ...n
                }) : null
            }
            let T = new(t(815048)).O2("PublicShareLinkTutorialTooltip", () => t.e(77916).then(t.bind(t, 742364))),
                B = (0, t(815048)._h)(T, e => e.PublicShareLinkTutorialTooltip);

            function L({
                visibility: e,
                spaceStore: i
            }) {
                let s = (0, t(533992).v3)(),
                    r = (0, t(109939).tz)(),
                    l = (0, t(682985).K8)(() => (0, t(742197).G)(s, i), [s, i]),
                    d = (0, t(682985).K8)(() => t(218744).default.getEligibleGroup({
                        experimentId: "adoption_share_menu_permission_label_clarity_copy",
                        disableExposureLogging: !0
                    }), []);
                switch ((0, n.useEffect)(() => {
                    void 0 !== d && t(218744).default.getEligibleGroup({
                        experimentId: "adoption_share_menu_permission_label_clarity_copy",
                        disableExposureLogging: !1
                    })
                }, [d]), e) {
                    case "private":
                        {
                            let e = "restricted" === d,
                                i = "shared_with" === d;
                            if (e) return (0, a.jsxs)(a.Fragment, {
                                children: [r.formatMessage(o.restricted.label), (0, a.jsx)(t(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    children: r.formatMessage(o.restricted.helperText)
                                })]
                            });
                            if (i) return (0, a.jsx)(a.Fragment, {
                                children: r.formatMessage(o.shared_with.label)
                            });
                            return (0, a.jsx)(t(109939).sA, {
                                id: "spacePermissionVisibilityPicker.private",
                                defaultMessage: "Only people invited"
                            })
                        }
                    case "unlisted":
                        return (0, a.jsx)(t(109939).sA, {
                            id: "blockPermissionsSettings.permissionItem.workspaceAccessNew.unlisted",
                            defaultMessage: "Everyone at {spaceName} with the link",
                            values: {
                                spaceName: l
                            }
                        });
                    case "open":
                    case "open_unlisted_hybrid":
                        return (0, a.jsx)(t(109939).sA, {
                            defaultMessage: "Everyone at {workspaceName}",
                            id: "blockPermissionsSettings.permissionItem.workspaceAccessNew",
                            values: {
                                workspaceName: l
                            }
                        });
                    default:
                        (0, t(722371).HB)(e)
                }
            }
            let D = {
                visibilityToggle: {
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
                    marginInlineStart: 12,
                    paddingInlineStart: 4
                },
                buttonMenuItemStyleMobile: {
                    backgroundColor: t(632079).Tj.background.elevated,
                    paddingTop: 12,
                    paddingBottom: 12,
                    marginInlineEnd: 12,
                    borderBottomWidth: 1,
                    borderBottomStyle: "solid",
                    borderBottomColor: t(632079).Tj.border.secondary,
                    width: "100%"
                }
            };

            function W(e) {
                let {
                    permissionItem: i,
                    onToggle: n,
                    focused: s
                } = e, o = (0, t(109939).tz)(), r = !!i && !i.unlisted_timestamp, l = o.formatMessage({
                    id: "spacePermissionItem.visibilityPicker.unlistedToggle",
                    defaultMessage: "Hide in search"
                });
                return (0, a.jsx)("div", {
                    children: (0, a.jsx)(t(95582).A, {
                        onClick: n,
                        focused: s,
                        style: t(986939).A.isMobile ? D.buttonMenuItemStyleMobile : {},
                        title: l,
                        shouldWrapTitle: !0,
                        right: (0, a.jsx)("div", {
                            style: t(986939).A.isMobile ? {} : D.visibilityToggle,
                            children: (0, a.jsx)(t(354491).d, {
                                disabled: !1,
                                on: !r,
                                onClick: n
                            })
                        })
                    })
                })
            }
            let O = new(t(245541)).R({
                    key: "shareMenuRoleSelectCalloutCount",
                    namespace: t(274919).Bq,
                    important: !0,
                    trackingType: "necessary"
                }),
                E = {
                    width: "100%"
                },
                R = {
                    width: 250,
                    whiteSpace: "normal"
                },
                N = {
                    marginInlineStart: 16
                },
                V = {
                    lockIcon: {
                        width: t(986939).A.isMobile ? 24 : 18,
                        height: t(986939).A.isMobile ? 24 : 18
                    }
                };

            function K({
                visibility: e,
                spaceStore: i
            }) {
                return "private" === e ? (0, a.jsx)(t(427986).A, {
                    type: "square",
                    iconType: "function",
                    iconFn: t(269298).lockFillIcon,
                    iconStyle: V.lockIcon
                }) : "unlisted" === e ? (0, a.jsx)(t(867292).A, {
                    store: i
                }) : "open" === e ? (0, a.jsx)(t(867292).A, {
                    store: i
                }) : "open_unlisted_hybrid" === e ? (0, a.jsx)(t(867292).A, {
                    store: i
                }) : void(0, t(722371).HB)(e)
            }

            function H({
                store: e,
                spacePermission: i,
                trustedDomainPermission: t,
                publicPermission: n,
                showPublicShareLinkPermission: s,
                isRestricted: o,
                permissionItemArgs: r,
                fromPermissionWrapper: l,
                buttonPopupStore: d,
                visibility: c,
                spaceStore: u,
                hideHoverStyles: p,
                isDisplayOnly: m,
                handleSpacePermissionChange: g
            }) {
                return (0, a.jsx)(v, {
                    store: e,
                    spacePermission: i,
                    trustedDomainPermission: t,
                    publicPermission: n,
                    showPublicShareLinkPermission: s,
                    isRestricted: o,
                    permissionItemArgs: r,
                    fromPermissionWrapper: l,
                    buttonPopupStore: d,
                    hideHoverStyles: p,
                    isDisplayOnly: m,
                    handleSpacePermissionChange: g,
                    title: (0, a.jsx)(L, {
                        visibility: c,
                        spaceStore: u
                    })
                })
            }
            let z = function({
                trustedDomainPermission: e,
                isRestricted: i,
                publicPermission: s,
                showPublicShareLinkPermission: o,
                shouldShowPublicShareLinkTooltip: l,
                ...d
            }) {
                let {
                    store: c,
                    spacePermission: u,
                    fromPermissionWrapper: p
                } = d, m = (0, t(533992).v3)(), g = (0, n.useRef)(null), h = (0, t(682985).uB)(void 0, t(510969).A);
                (0, n.useEffect)(() => {
                    l && (0, t(376730).H)(m, t(742364).PUBLIC_SHARE_LINK_TOOLTIP_ID)
                }, [m, l]);
                let f = t(642157).Ni(u.permissionItem) && "none" !== u.permissionItem.role,
                    b = (0, t(296340).QX)(u),
                    y = !!((0, t(642157).i4)(u.permissionItem) && u.permissionItem.can_create_pages_in_collection),
                    v = (0, t(682985).K8)(() => (0, t(974410).f)(c), [c]),
                    _ = (0, t(682985).K8)(() => !(null != v && v.isDefined()), [v]),
                    x = (0, t(682985).K8)(() => !!v && (0, t(916804).I)(v), [v]),
                    S = (0, t(682985).K8)(() => (0, t(865768).WG)(), []),
                    k = (0, t(682985).K8)(() => t(218744).default.checkGate({
                        gateName: "domain_link_sharing_redesign_override",
                        disableExposureLogging: !0
                    }), []),
                    I = (0, t(30082).H)(),
                    w = (0, t(682985).K8)(() => {
                        var e;
                        return null == I || null == (e = I.getForSpace(v)) ? void 0 : e.trustedDomains
                    }, [I, v]),
                    j = (0, t(682985).K8)(() => (0, t(556191).Hb)({
                        space: null == v ? void 0 : v.getModel(),
                        trustedDomains: w,
                        enableTrustedDomainPermissionRedesign: k
                    }), [v, w, k]),
                    A = (0, t(682985).K8)(() => v && c.table === t(832375).evP ? c.isTopLevelWorkspacePage(v.id) : c.table === t(832375).C0E, [c, v]),
                    P = (0, t(682985).K8)(() => {
                        let e = (0, t(865768).QJ)({
                            store: c
                        });
                        return e ? r({
                            permission: e,
                            includeHybrid: !1
                        }) : "private"
                    }, [c]),
                    M = (0, t(682985).K8)(() => O.getState() ? ? 0, []),
                    [C, T] = (0, n.useState)(!1),
                    L = (0, n.useCallback)(({
                        before: e,
                        after: i
                    }) => {
                        let n = !1,
                            s = (0, t(296340).QX)(e),
                            o = (0, t(296340).QX)(i);
                        "private" === s && "private" !== o && M < 3 && (n = !0, O.setState(M + 1)), T(n)
                    }, [M]),
                    D = (0, n.useCallback)(() => {
                        h.setState({
                            open: !0
                        })
                    }, [h]),
                    V = (0, n.useCallback)(async () => {
                        let e, n = u.permissionItem,
                            s = (0, t(381453).mg)(n);
                        "unlisted" == ("open" === b ? "unlisted" : "open") ? (s.unlisted_timestamp = Date.now(), e = "open" === P) : (delete s.unlisted_timestamp, e = !1);
                        let o = u.from,
                            r = (0, t(642157).Yi)(o),
                            a = o.table !== c.table || r !== c.id;
                        e = e && !A && !i, await (0, t(319627).Hc)({
                            oldPermissionItem: n,
                            newPermissionItem: s,
                            wasInherited: a,
                            environment: m,
                            store: c,
                            restrictingVisibility: e,
                            sudoModeStore: d.permissionItemArgs.sudoModeStore,
                            location: d.permissionItemArgs.location
                        })
                    }, [m, u, A, d.permissionItemArgs, b, c, i, P]),
                    z = (0, n.useMemo)(() => [{
                        key: "can-find-in-search-toggle",
                        render: e => (0, a.jsx)(t(51831).m, {
                            placement: "left",
                            content: () => (0, a.jsx)("div", {
                                style: R,
                                children: (0, a.jsx)(t(109939).sA, {
                                    defaultMessage: "Hide this page in search results from users without the link or who haven’t visited it before",
                                    id: "spacePermissionItem.unlistedToggle.tooltip"
                                })
                            }),
                            children: i => (0, a.jsx)("div", { ...e,
                                ...i,
                                children: (0, a.jsx)(W, {
                                    permissionItem: u.permissionItem,
                                    onToggle: V,
                                    focused: e.focused
                                })
                            })
                        }),
                        action: () => {}
                    }], [u, V]),
                    F = "private" === b;
                if (!v) return null;
                if (_)
                    if (x) return (0, a.jsx)("div", {
                        style: E,
                        className: f ? void 0 : t(828432).VRj,
                        children: (0, a.jsx)(t(557683).Ay, {
                            store: c,
                            permissionItem: u.permissionItem,
                            from: u.from,
                            icon: (0, a.jsx)(K, {
                                visibility: b,
                                spaceStore: v
                            }),
                            iconStyle: void 0,
                            title: (0, a.jsx)(H, {
                                store: c,
                                spaceStore: v,
                                spacePermission: u,
                                trustedDomainPermission: e,
                                publicPermission: s,
                                showPublicShareLinkPermission: o,
                                isRestricted: !0,
                                permissionItemArgs: d.permissionItemArgs,
                                fromPermissionWrapper: p,
                                buttonPopupStore: h,
                                visibility: b,
                                hideHoverStyles: F,
                                isDisplayOnly: !0,
                                handleSpacePermissionChange: L
                            }),
                            subtitle: t(986939).A.isMobile && !F ? (0, a.jsx)(t(109939).sA, { ...(0, t(132866).R)({
                                    type: "space_permission",
                                    role: u.permissionItem.role,
                                    table: "block",
                                    isRemovable: !1,
                                    canCreate: y
                                }).label
                            }) : void 0,
                            upgradeButtonName: "space_permission_item",
                            fromPermissionWrapper: p,
                            isRemovableOverride: !0,
                            hideRoleSelectButton: F,
                            renderTitleWithoutUILabelWrapper: !0,
                            ...d.permissionItemArgs,
                            shouldDisable: !0
                        })
                    });
                    else return null;
                let G = S && (null == j ? void 0 : j.length) > 0 && ("open" === b || "unlisted" === b),
                    U = G ? (0, a.jsx)(t(109939).sA, {
                        defaultMessage: "Anyone with a {trustedDomain} email can also view this page",
                        id: "blockPermissionsSettings.spacePermission.trustedDomainTooltip",
                        values: {
                            trustedDomain: j[0]
                        }
                    }) : void 0;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(B, {
                        originRef: g,
                        onPrimaryButtonClick: D
                    }), (0, a.jsx)(t(742364).CopyLinkNoPermissionsTooltip, {
                        originRef: g,
                        onPrimaryButtonClick: D
                    }), (0, a.jsx)("div", {
                        style: E,
                        className: f ? void 0 : t(828432).VRj,
                        ref: g,
                        children: (0, a.jsx)(t(557683).Ay, {
                            store: c,
                            permissionItem: u.permissionItem,
                            from: u.from,
                            icon: (0, a.jsx)(K, {
                                visibility: b,
                                spaceStore: v
                            }),
                            iconStyle: void 0,
                            title: (0, a.jsx)(H, {
                                store: c,
                                spaceStore: v,
                                spacePermission: u,
                                trustedDomainPermission: e,
                                publicPermission: s,
                                showPublicShareLinkPermission: o,
                                isRestricted: i,
                                permissionItemArgs: d.permissionItemArgs,
                                fromPermissionWrapper: p,
                                buttonPopupStore: h,
                                visibility: b,
                                hideHoverStyles: F,
                                isDisplayOnly: d.permissionItemArgs.shouldDisable ? ? !1,
                                handleSpacePermissionChange: L
                            }),
                            selectHeader: t(986939).A.isMobile ? (0, a.jsx)(t(636518).Ay, {
                                title: (0, a.jsx)(H, {
                                    store: c,
                                    spaceStore: v,
                                    spacePermission: u,
                                    trustedDomainPermission: e,
                                    publicPermission: s,
                                    showPublicShareLinkPermission: o,
                                    isRestricted: i,
                                    permissionItemArgs: d.permissionItemArgs,
                                    fromPermissionWrapper: p,
                                    buttonPopupStore: h,
                                    visibility: b,
                                    hideHoverStyles: F,
                                    isDisplayOnly: !0,
                                    handleSpacePermissionChange: L
                                }),
                                icon: (0, a.jsx)(K, {
                                    visibility: b,
                                    spaceStore: v
                                }),
                                desktopIconStyle: N
                            }) : void 0,
                            onClick: D,
                            inheritedTooltip: G ? U : void 0,
                            nonInheritedTooltip: U,
                            subtitle: t(986939).A.isMobile && !F ? (0, a.jsx)(t(109939).sA, { ...(0, t(132866).R)({
                                    type: "space_permission",
                                    role: u.permissionItem.role,
                                    table: "block",
                                    isRemovable: !1,
                                    canCreate: y
                                }).label
                            }) : void 0,
                            upgradeButtonName: "space_permission_item",
                            fromPermissionWrapper: p,
                            isRemovableOverride: !0,
                            hideRoleSelectButton: F,
                            renderTitleWithoutUILabelWrapper: !0,
                            additionalCapabilities: z,
                            openRoleSelectMenuOnRender: C,
                            ...d.permissionItemArgs
                        })
                    })]
                })
            };

            function F(e) {
                var i, n;
                let {
                    store: s,
                    spaceOwnerPermission: o,
                    showSpaceOwnerPermission: r,
                    spacePermission: l,
                    showSpacePermission: d,
                    trustedDomainPermission: c,
                    publicPermission: u,
                    showPublicShareLinkPermission: p,
                    permissionItemArgs: m,
                    isRestricted: g
                } = e, h = (0, t(809934).v)(u.permissionItem);
                return (0, a.jsxs)(a.Fragment, {
                    children: [r ? (0, a.jsx)(C, {
                        store: s,
                        spaceOwnerPermission: o,
                        permissionItemArgs: m,
                        fromPermissionWrapper: "permission_list"
                    }) : void 0, d && (i = l, n = u, !(p && "none" === i.permissionItem.role && void 0 === i.permissionItem.can_create_pages_in_collection && ("none" !== i.permissionItem.role || (0, t(809934).v)(n.permissionItem)))) ? p ? (0, a.jsx)(z, {
                        store: s,
                        spacePermission: l,
                        publicPermission: u,
                        showPublicShareLinkPermission: p && !h,
                        trustedDomainPermission: c,
                        permissionItemArgs: m,
                        fromPermissionWrapper: "permission_list",
                        isRestricted: g,
                        shouldShowPublicShareLinkTooltip: !h
                    }) : (0, a.jsx)(z, {
                        store: s,
                        spacePermission: l,
                        showPublicShareLinkPermission: !1,
                        trustedDomainPermission: void 0,
                        permissionItemArgs: m,
                        fromPermissionWrapper: "permission_list",
                        isRestricted: g
                    }) : void 0, p && h ? (0, a.jsx)(I, {
                        store: s,
                        spacePermission: l,
                        publicPermission: u,
                        trustedDomainPermission: c,
                        permissionItemArgs: m,
                        fromPermissionWrapper: "permission_list",
                        isRestricted: g
                    }) : void 0]
                })
            }
            let G = {
                    overflow: "hidden"
                },
                U = {
                    paddingTop: 12,
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    paddingBottom: 8
                },
                Y = {
                    position: "relative"
                };

            function J({
                store: e,
                calculatedPermissions: i,
                permissionItemArgs: n
            }) {
                let {
                    showSpaceOwnerPermission: s,
                    mostPermissiveSpaceOwnerItem: o,
                    showSpacePermission: r,
                    mostPermissiveTrustedDomainItem: l,
                    mostPermissiveSpaceItem: d,
                    mostPermissivePublicItem: c,
                    showPublicShareLinkPermission: u,
                    showRestrictedPermissionBanner: p
                } = i, m = (0, t(296340).QX)(d), g = e.table === t(832375).C0E && r && "private" !== m;
                return (0, a.jsxs)(t(844565).A, {
                    disableMobilePadding: !0,
                    disableMobileBorders: !0,
                    style: U,
                    children: [(0, a.jsx)(t(395548).nc, {}), (0, a.jsx)(F, {
                        store: e,
                        spaceOwnerPermission: o,
                        showSpaceOwnerPermission: s,
                        spacePermission: d,
                        showSpacePermission: r,
                        publicPermission: c,
                        showPublicShareLinkPermission: u,
                        trustedDomainPermission: l,
                        permissionItemArgs: n,
                        fromPermissionWrapper: "permission_list",
                        isRestricted: p
                    }), (0, a.jsx)(t(203066).N, {
                        children: g ? (0, a.jsx)(t(153321).P.div, {
                            style: G,
                            initial: {
                                height: 0,
                                opacity: 0
                            },
                            animate: {
                                height: "auto",
                                opacity: 1
                            },
                            exit: {
                                height: 0,
                                opacity: 0
                            },
                            transition: {
                                duration: .2,
                                ease: "easeInOut"
                            },
                            children: (0, a.jsx)(t(4458).VP, {
                                paddingBlock: 8,
                                className: "autolayout-fill-width",
                                style: Y,
                                children: (0, a.jsx)(t(748356).l, {
                                    display: "inline",
                                    tint: "yellow",
                                    staticIcon: t(61107).infoCircleIcon,
                                    label: (0, a.jsx)(t(111010).D, {
                                        styleKey: "captionMedium",
                                        children: (0, a.jsx)(t(109939).sA, {
                                            id: "shareMenu.generalAccess.agentWorkspaceWarning.label",
                                            defaultMessage: "This agent’s sources and tools are now accessible to everyone in the workspace, even if they wouldn’t have access otherwise."
                                        })
                                    })
                                })
                            })
                        }) : null
                    })]
                })
            }
        },
        395548: (e, i, t) => {
            t.d(i, {
                E3: () => r,
                nc: () => s
            }), t(296540);
            var n = t(474848);

            function s() {
                return (0, n.jsx)(a, {
                    children: (0, n.jsx)(t(109939).sA, {
                        id: "blockPermissionsSettings.permissionsList.generalAccessAttribution",
                        defaultMessage: "General access"
                    })
                })
            }
            t(632079).Tj.text.secondary;
            let o = {
                display: "flex",
                alignItems: "center"
            };

            function r({
                collectionPickerPopupMenu: e
            }) {
                let i = e ? (0, n.jsx)(t(109939).sA, {
                    id: "blockPermissionsSettings.permissionsList.collectionPropertyPermissionsAttribution.pageLevelAccessFor",
                    defaultMessage: "Page-level access for {popupMenu}",
                    values: {
                        popupMenu: e
                    }
                }) : (0, n.jsx)(t(109939).sA, {
                    id: "blockPermissionsSettings.permissionsList.collectionPropertyPermissionsAttribution.pageLevelAccess",
                    defaultMessage: "Page-level access"
                });
                return (0, n.jsx)(a, {
                    children: (0, n.jsx)("span", {
                        style: o,
                        children: i
                    })
                })
            }

            function a(e) {
                let {
                    children: i
                } = e, s = 8 * !t(986939).A.isMobile, o = (0, t(616844).Y5)("left", s), r = (0, t(616844).Y5)("right", s), a = (0, t(960253).I)(() => ({
                    label: {
                        color: t(632079).Tj.text.secondary,
                        fontWeight: t(699422).Wy.medium,
                        paddingInlineStart: o,
                        paddingInlineEnd: r,
                        paddingTop: 0,
                        paddingBottom: 4,
                        overflow: "visible",
                        textWrap: "wrap",
                        ...t(986939).A.isMobile ? {
                            fontSize: 15,
                            paddingTop: 2,
                            color: t(632079).Tj.text.secondary
                        } : {}
                    }
                }), [o, r]);
                return (0, n.jsx)(t(324489).V, {
                    isSmall: !0,
                    style: a.label,
                    children: i
                })
            }
        },
        437710: (e, i, t) => {
            t.d(i, {
                S: () => s
            }), t(296540);
            var n = t(474848);
            async function s(e) {
                let {
                    environment: i,
                    store: s,
                    newPermissionItem: o
                } = e, r = s.getSpaceStore(), a = (0, t(920200).k)({
                    environment: i,
                    spaceStore: r
                }), l = (0, t(510461).j)({
                    environment: i,
                    store: s,
                    newPermissionItem: o
                });
                if (void 0 === a && void 0 === l || !a || l) return {
                    wasDuplicatable: a,
                    willBeDuplicatable: l,
                    confirmedChange: void 0
                };
                let {
                    accept: d
                } = await t(647095).Gh({
                    message: (0, n.jsx)(t(109939).sA, {
                        defaultMessage: "This is the custom landing page for this workspace.",
                        id: "customGettingStarted.changePermissionConfirm.title"
                    }),
                    description: (0, n.jsx)(t(109939).sA, {
                        defaultMessage: "If other workspace members cannot view this page, they will have Notion’s default landing page installed instead. Are you sure you want to change the page permissions?",
                        id: "customGettingStarted.changePermissionConfirm.description"
                    }),
                    acceptLabel: (0, n.jsx)(t(109939).sA, {
                        defaultMessage: "Change permission",
                        id: "customGettingStarted.changePermissionConfirm.button.text"
                    })
                });
                return {
                    wasDuplicatable: a,
                    willBeDuplicatable: l,
                    confirmedChange: d
                }
            }
        },
        466113: (e, i, t) => {
            t.d(i, {
                G: () => s
            }), t(296540);
            var n = t(474848);

            function s(e) {
                let {
                    workflowStore: i
                } = e, s = (0, t(682985).K8)(() => i.getRawIcon(), [i]);
                return (0, n.jsx)(t(651790).AgentIcon, {
                    agentIcon: s,
                    workflowStore: i,
                    size: 42
                })
            }
        },
        481522: (e, i, t) => {
            t.d(i, {
                X: () => n
            });

            function n() {
                let e = (0, t(533992).v3)(),
                    i = (0, t(109939).tz)();
                return (0, t(682985).K8)(() => {
                    let n = t(728372).AppStoreSidebarSpaceStore.state;
                    return n ? (0, t(742197).G)(e, n) : i.formatMessage({
                        defaultMessage: "Untitled workspace",
                        id: "spaceHelpers.getSpaceName.untitledWorkspace.name"
                    })
                }, [e, i])
            }
        },
        505518: (e, i, t) => {
            t.d(i, {
                x: () => s
            }), t(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    svg: (0, t(474848).jsx)("path", {
                        d: "M5.61218 4.0799C4.73322 4.18671 4.02924 4.93207 3.97064 5.81104L3.96588 5.9032L3.96729 15.342L3.10266 15.3953H3.06824C2.85229 15.3841 2.65259 15.2995 2.49689 15.1501C2.32245 14.9828 2.22455 14.7541 2.21741 14.5035C2.21741 14.4936 2.21606 14.4837 2.21606 14.4731V4.13733C2.21606 3.25684 2.90002 2.52771 3.77881 2.47156L13.9657 1.82074C13.9833 1.81946 14.0008 1.81873 14.0183 1.81873C14.2174 1.81873 14.4028 1.89215 14.5449 2.02765C14.6442 2.12225 14.7142 2.24054 14.7517 2.37207C14.7679 2.42828 14.7777 2.48712 14.7816 2.5473L14.7817 3.49023L5.64923 4.07343L5.61218 4.0799ZM17.784 16.7507C17.784 16.7665 17.7827 16.7824 17.7814 16.7983C17.7587 17.1375 17.4935 17.4362 17.1673 17.4976C17.1608 17.4976 17.1543 17.4996 17.1478 17.4996L6.10248 18.1812H6.06805C5.85211 18.17 5.6524 18.0854 5.49677 17.936C5.32233 17.7687 5.22437 17.54 5.21722 17.2894C5.21722 17.2795 5.21588 17.2696 5.21588 17.259V6.07227C5.21588 6.05646 5.21588 6.0412 5.21722 6.02533C5.24121 5.66638 5.53564 5.35303 5.88715 5.31604C5.89624 5.31604 5.90533 5.31335 5.91443 5.31268L16.9655 4.60663C16.9831 4.60535 17.0006 4.60468 17.0181 4.60468C17.2172 4.60468 17.4026 4.67804 17.5447 4.8136C17.644 4.90814 17.714 5.02643 17.7516 5.15802C17.7678 5.21417 17.7775 5.27301 17.7814 5.33319L17.784 16.7507ZM16.5358 8.02374C16.5358 7.7887 16.3475 7.61896 16.1176 7.63098L6.90546 8.19415C6.67493 8.20618 6.46613 8.37146 6.46613 8.62994V16.1628C6.45618 16.6468 6.77686 16.7722 7.1391 16.7462L16.0001 16.2205L16.002 16.2199C16.468 16.2015 16.5358 15.8461 16.5358 15.57V8.02374ZM10.8688 10.1928C10.0123 10.4406 9.82344 10.0635 9.91725 9.66956C10.4309 9.54925 11.7667 9.1481 12.272 8.96645L12.278 14.2527L13.212 14.3886C13.212 14.7327 13.0154 14.948 12.6647 14.9702C12.3736 14.9883 11.697 15.0129 11.3716 15.0333C10.8664 15.0646 9.9413 15.1398 9.9413 15.1398C9.91544 15.0706 9.90705 15.0009 9.90705 14.9389C9.90705 14.7711 9.975 14.5991 10.1975 14.5239L10.8742 14.305L10.8688 10.1928Z"
                    })
                },
                s = (0, t(104509).wt)("calendarDate01", n, "default")
        },
        510461: (e, i, t) => {
            t.d(i, {
                j: () => n
            });

            function n(e) {
                let {
                    environment: i,
                    store: n,
                    newPermissionItem: s
                } = e, o = n.getSpaceStore(), r = o ? (0, t(274749).i)(o) : void 0;
                if (!r) return;
                if ("block" !== n.table || n.id !== r) {
                    let e = new(t(970831)).B(i, {
                        table: "block",
                        id: r
                    });
                    return (0, t(329171).n)(e)
                }
                let a = (0, t(862085).Jh)(n),
                    l = (0, t(862085).K1)(n);
                if (a && l) return !0;
                let d = "space_permission" === s.type && "none" === s.role,
                    c = "public_permission" === s.type && !(0, t(642157).Tt)(s.role),
                    u = "public_permission" === s.type && (0, t(642157).W8)(s) && !1 === s.allow_duplicate;
                return !d && !(c || u)
            }
        },
        612604: (e, i, t) => {
            t.d(i, {
                P: () => n
            });

            function n({
                store: e
            }) {
                return (0, t(682985).K8)(() => (0, t(544314).C)({
                    store: e
                }), [e])
            }
        },
        742364: (e, i, t) => {
            t.r(i), t.d(i, {
                COPY_LINK_NO_PERMISSIONS_TOOLTIP_ID: () => o,
                CopyLinkNoPermissionsTooltip: () => d,
                PUBLIC_SHARE_LINK_TOOLTIP_ID: () => s,
                PublicShareLinkTutorialTooltip: () => a
            }), t(296540);
            var n = t(474848);
            let s = "public_share_link_tooltip",
                o = "copy_link_no_permissions_tooltip",
                r = {
                    width: 260
                };

            function a(e) {
                let {
                    originRef: i,
                    onPrimaryButtonClick: o
                } = e, a = (0, t(533992).v3)(), l = (0, t(682985).K8)(() => t(696190).default.isVisible(s), []), d = (0, t(718012).V)();
                return (0, n.jsx)(t(397732).B, {
                    shouldShow: l,
                    calloutId: s,
                    inAppCalloutStore: d,
                    children: (0, n.jsx)(t(788139).k, {
                        style: r,
                        pointerLength: 25,
                        pointerPosition: "50%",
                        origin: i,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        numSteps: 1,
                        header: (0, n.jsxs)(t(4458).VP, {
                            gap: 10,
                            children: [(0, n.jsx)(t(16275).I, {
                                icon: t(515388).globeIcon
                            }), (0, n.jsx)(t(109939).sA, {
                                id: "generalAccessPermissions.publicShareLink.tutorialTooltip.header",
                                defaultMessage: "Share your page with anyone"
                            })]
                        }),
                        content: (0, n.jsx)(t(109939).sA, {
                            id: "generalAccessPermissions.publicShareLink.tutorialTooltip.content",
                            defaultMessage: "You can now change your page settings to collaborate with anyone on the web with the link"
                        }),
                        finalButtonContent: (0, n.jsx)(t(109939).sA, {
                            id: "generalAccessPermissions.publicShareLink.tutorialTooltip.finalButtonContent",
                            defaultMessage: "Try it out"
                        }),
                        onPrimaryButtonClick: () => {
                            (0, t(59579).a)(a, s), o()
                        },
                        shouldDismissUponOutsideClick: !0,
                        onCloseClick: () => {
                            (0, t(59579).a)(a, s)
                        }
                    })
                })
            }
            let l = {
                width: 260
            };

            function d(e) {
                let {
                    originRef: i,
                    onPrimaryButtonClick: s
                } = e, r = (0, t(533992).v3)(), a = (0, t(682985).K8)(() => t(696190).default.isVisible(o), []), d = (0, t(718012).V)();
                return (0, n.jsx)(t(397732).B, {
                    shouldShow: a,
                    calloutId: o,
                    inAppCalloutStore: d,
                    children: (0, n.jsx)(t(788139).k, {
                        style: l,
                        pointerLength: 25,
                        pointerPosition: "50%",
                        origin: i,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        numSteps: 1,
                        header: (0, n.jsxs)(t(4458).VP, {
                            gap: 10,
                            children: [(0, n.jsx)(t(16275).I, {
                                icon: t(515388).globeIcon
                            }), (0, n.jsx)(t(109939).sA, {
                                id: "shareMenu.copyLinkNoPermissions.tutorialTooltip.header",
                                defaultMessage: "Ready to share?"
                            })]
                        }),
                        content: (0, n.jsx)(t(109939).sA, {
                            id: "shareMenu.copyLinkNoPermissions.tutorialTooltip.content",
                            defaultMessage: "This page is private. Update permissions to share with others."
                        }),
                        finalButtonContent: (0, n.jsx)(t(109939).sA, {
                            id: "shareMenu.copyLinkNoPermissions.tutorialTooltip.finalButtonContent",
                            defaultMessage: "Add permissions"
                        }),
                        onPrimaryButtonClick: () => {
                            (0, t(195857).DO_NOT_USE_trackLegacy)("tooltip_action", {
                                tooltip_type: "copy_link_no_permissions",
                                action: "add_permissions_clicked"
                            }), (0, t(59579).a)(r, o), s()
                        },
                        shouldDismissUponOutsideClick: !0,
                        onCloseClick: () => {
                            (0, t(104310).u)({
                                event: {
                                    eventName: "dismiss_tooltip",
                                    eventProperties: {
                                        tooltip_type: "copy_link_no_permissions"
                                    }
                                }
                            }), (0, t(59579).a)(r, o)
                        }
                    })
                })
            }
        },
        754226: (e, i, t) => {
            t.r(i), t.d(i, {
                iconDefinition: () => n,
                peopleSmallIcon: () => s
            }), t(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.55 1.9 15.26 11.99",
                    svg: (0, t(474848).jsx)("path", {
                        d: "M9.336 2.869c.48-.6 1.192-.96 2.064-.96s1.584.36 2.065.96c.468.583.687 1.352.687 2.144 0 .793-.219 1.561-.687 2.145-.48.599-1.193.96-2.065.96s-1.584-.361-2.064-.96c-.469-.584-.687-1.352-.687-2.145s.218-1.56.687-2.144m.98.786c-.252.313-.411.783-.411 1.358s.16 1.046.41 1.359c.24.298.589.49 1.085.49s.846-.192 1.085-.49c.251-.313.41-.783.41-1.359 0-.575-.159-1.045-.41-1.358-.239-.298-.589-.49-1.085-.49s-.846.192-1.085.49M4.6 2.572c-.803 0-1.462.334-1.907.888-.433.539-.632 1.245-.632 1.97s.2 1.43.632 1.97c.445.553 1.104.887 1.907.887.804 0 1.463-.334 1.907-.888.433-.539.632-1.245.632-1.97S6.94 4 6.507 3.46c-.444-.553-1.103-.887-1.907-.887M3.317 5.43c0-.507.14-.916.356-1.184.203-.253.5-.418.927-.418s.725.165.928.418c.215.268.355.677.355 1.184s-.14.915-.355 1.183c-.203.253-.5.418-.928.418s-.724-.165-.927-.418c-.216-.268-.356-.676-.356-1.183m-.887 7.206h3.344c.076.466.268.896.539 1.256H2.43c-.577 0-1.132-.243-1.49-.656a1.51 1.51 0 0 1-.23-1.675c.68-1.42 2.175-2.389 3.89-2.389.797 0 1.547.21 2.19.576a5.6 5.6 0 0 0-.685 1.056 3.16 3.16 0 0 0-1.505-.376c-1.24 0-2.29.699-2.758 1.676a.26.26 0 0 0-.03.161c.007.04.028.092.076.148a.73.73 0 0 0 .542.223M11.4 8.84c-1.917 0-3.58 1.117-4.279 2.735a1.54 1.54 0 0 0 .268 1.665c.36.41.913.652 1.49.652h5.04c.579 0 1.131-.242 1.492-.652a1.54 1.54 0 0 0 .268-1.665c-.7-1.618-2.362-2.736-4.279-2.736m-3.126 3.233c.496-1.147 1.698-1.978 3.126-1.978s2.63.831 3.126 1.978c.055.128.034.233-.058.338a.74.74 0 0 1-.548.225H8.88a.74.74 0 0 1-.548-.225c-.092-.105-.113-.21-.058-.338"
                    })
                },
                s = (0, t(104509).wt)("peopleSmall", n, "small")
        },
        758144: (e, i, t) => {
            function n(e) {
                let {
                    environment: i,
                    internalDomains: n,
                    inviteResults: c,
                    destination: u,
                    metadata: p
                } = e;
                0 !== c.length && (function(e) {
                    var i;
                    let {
                        addedPermissions: n,
                        environment: s,
                        internalDomains: o,
                        metadata: a,
                        destination: l
                    } = e;
                    if (0 === n.length) return;
                    let d = n.map(e => e.invite.inviteTarget),
                        c = n.map(e => e.blockPermissionItem),
                        u = n.filter(r).filter(e => void 0 !== e.invite.internalDomain).map(e => e.inviteeUserId);
                    t(179701).Jg(s, {
                        domainType: (0, t(904434).FX)(),
                        internal_domains: o ? ? [],
                        invite_flow_id: a.inviteFlowId,
                        invite_message_length: (null == (i = a.inviteMessage) ? void 0 : i.length) ? ? 0,
                        invite_origin: a.inviteOrigin,
                        invite_targets: d,
                        invitee_ids_with_internal_domain: u,
                        invitee_ids_with_internal_domain_enforced: [],
                        is_onboarding: !1,
                        is_space: !1,
                        permission_items: c,
                        role: l.role,
                        share_menu_session_id: a.shareMenuSessionId
                    })
                }({
                    addedPermissions: c.filter(l),
                    environment: i,
                    internalDomains: n,
                    destination: u,
                    metadata: p
                }), function(e) {
                    var i;
                    let {
                        createdMembers: n,
                        environment: s,
                        internalDomains: o,
                        metadata: r,
                        destination: a
                    } = e;
                    if (0 === n.length) return;
                    let l = n.map(e => e.invite.inviteTarget),
                        d = n.map(e => (0, t(283161).z)(e.spaceActor)),
                        c = n.filter(e => void 0 !== e.invite.internalDomain).map(e => e.inviteeUserId),
                        u = n.filter(e => e.wasInternalDomainEnforced).map(e => e.inviteeUserId);
                    if (t(179701).Jg(s, {
                            domainType: (0, t(904434).FX)(),
                            internal_domains: o ? ? [],
                            invite_flow_id: r.inviteFlowId,
                            invite_message_length: (null == (i = r.inviteMessage) ? void 0 : i.length) ? ? 0,
                            invite_origin: r.inviteOrigin,
                            invite_targets: l,
                            invitee_ids_with_internal_domain: c,
                            invitee_ids_with_internal_domain_enforced: u,
                            is_onboarding: !1,
                            is_space: !0,
                            permission_items: d,
                            role: (0, t(729052).ps)(a.spaceMembershipType),
                            share_menu_session_id: r.shareMenuSessionId
                        }), u.length > 0) {
                        let e = o ? o.map(e => e.url) : [];
                        t(179701).hp({
                            invite_flow_id: r.inviteFlowId,
                            invite_origin: r.inviteOrigin,
                            user_ids: u,
                            internal_domains: e
                        })
                    }
                }({
                    createdMembers: c.filter(d),
                    environment: i,
                    internalDomains: n,
                    destination: u,
                    metadata: p
                }), c.filter(a), function(e) {
                    let {
                        createdGuestRequests: i,
                        destination: n,
                        metadata: s
                    } = e;
                    if (0 === i.length) return;
                    let o = i.filter(e => void 0 !== e.invite.internalDomain).map(e => {
                        var i;
                        return null == (i = e.invite.invitee) ? void 0 : i.email
                    }).filter(t(722371).O9);
                    t(179701).xF({
                        internal_guest_enforcement: !1,
                        invite_flow_id: s.inviteFlowId,
                        is_bot: !1,
                        is_internal_domain: o.length > 0,
                        invitee_emails_with_internal_domain: o,
                        invitee_emails_with_internal_domain_enforced: [],
                        role: n.role,
                        space_role: (0, t(729052).ps)(n.spaceMembershipType),
                        user_count: i.length
                    })
                }({
                    createdGuestRequests: c.filter(s),
                    destination: u,
                    metadata: p
                }), function(e) {
                    let {
                        createdMemberRequests: i,
                        destination: n,
                        metadata: s
                    } = e;
                    if (0 === i.length) return;
                    let o = i.filter(e => void 0 !== e.invite.internalDomain).map(e => {
                            var i;
                            return null == (i = e.invite.invitee) ? void 0 : i.email
                        }).filter(t(722371).O9),
                        r = i.filter(e => e.wasInternalDomainEnforced).map(e => {
                            var i;
                            return null == (i = e.invite.invitee) ? void 0 : i.email
                        }).filter(t(722371).O9);
                    t(179701).RH({
                        from: "share_menu",
                        invite_flow_id: s.inviteFlowId,
                        invite_space_role_selection: t(758972).NJ.workspace_member,
                        is_bot: !1,
                        is_internal_domain: o.length > 0,
                        internal_guest_enforcement: r.length > 0,
                        invitee_emails_with_internal_domain: o,
                        invitee_emails_with_internal_domain_enforced: r,
                        role: n.role,
                        space_role: (0, t(729052).ps)(n.spaceMembershipType),
                        user_count: i.length
                    })
                }({
                    createdMemberRequests: c.filter(o),
                    destination: u,
                    metadata: p
                }))
            }

            function s(e) {
                return "createdGuestRequest" === e.type
            }

            function o(e) {
                return "createdMemberRequest" === e.type
            }

            function r(e) {
                return "addedUserPermission" === e.type
            }

            function a(e) {
                return "addedAgentPermission" === e.type
            }

            function l(e) {
                return !!r(e) || "addedGroupPermission" === e.type
            }

            function d(e) {
                return "createdMember" === e.type
            }

            function c({
                environment: e,
                spaceId: i,
                pageId: n,
                pageVisibility: s,
                hasTrustedDomainPermission: o,
                hasPublicShareLinkPermission: r,
                shareMenuSessionId: a
            }) {
                (0, t(104310).u)({
                    event: {
                        eventName: "general_access_menu_open",
                        eventProperties: {
                            spaceId: i,
                            pageId: n,
                            pageVisibility: s,
                            hasTrustedDomainPermission: o,
                            hasPublicShareLinkPermission: r,
                            shareMenuSessionId: a
                        }
                    }
                })
            }

            function u({
                environment: e,
                variant: i,
                page: n
            }) {
                (0, t(104310).u)({
                    event: {
                        eventName: "share_menu_viewed",
                        eventProperties: {
                            variant: i,
                            page: n
                        }
                    }
                })
            }

            function p({
                environment: e,
                variant: i,
                action: n,
                hasMessage: s,
                inviteTargetCount: o
            }) {
                (0, t(104310).u)({
                    event: {
                        eventName: "share_menu_interaction",
                        eventProperties: {
                            variant: i,
                            action: n,
                            has_message: s,
                            invite_target_count: o
                        }
                    }
                })
            }
            t.d(i, {
                Bw: () => n,
                Iv: () => u,
                V0: () => c,
                sv: () => p
            }), t(898992), t(354520), t(581454)
        },
        767316: (e, i, t) => {
            t.d(i, {
                Nu: () => o,
                Yo: () => l,
                rW: () => r,
                vO: () => a
            }), t(898992), t(354520), t(672577), t(581454), t(737550);
            var n = () => t(285316);

            function s(e) {
                if (!e) return [];
                let i = e.emailAddresses ? ? [],
                    t = e.selectedEmailAccountIds,
                    n = e.emailPermissionSettings ? Object.keys(e.emailPermissionSettings) : [];
                if (t) {
                    if (0 === t.length) return [];
                    let e = i.filter(e => t.includes(e.emailAccountId)).map(e => e.email);
                    return e.length > 0 ? e : n
                }
                return i.length > 0 ? i.map(e => e.email) : n
            }

            function o(e) {
                let i = e.find(e => "notion" === e.type);
                return !!(null != i && i.permissions) && i.permissions.some(e => "notion" === e.type && "workspacePublic" === e.identifier.type && (0, t(445568).permissionActionsAllowRead)(e.actions))
            }

            function r(e) {
                for (let i of e.filter(e => "mail" === e.type)) {
                    let e = i.state;
                    for (let i of s(e))
                        if ("without_confirmation" === (0, n()._J)(e, i).send) return !0
                }
                return !1
            }

            function a(e) {
                if (!(o(e) && r(e))) return;
                let i = e.find(e => "mail" === e.type);
                if (!i || "mail" !== i.type) return;
                let t = i.state,
                    a = s(t);
                if (0 === a.length) return;
                let l = { ...(null == t ? void 0 : t.emailPermissionSettings) ? ? {}
                };
                for (let e of a) {
                    let i = (0, n()._J)(t, e);
                    "without_confirmation" === i.send && (l[e] = { ...i,
                        send: "with_confirmation"
                    })
                }
                return { ...i,
                    state: { ...t,
                        emailPermissionSettings: l
                    }
                }
            }

            function l(e) {
                let i;
                return r(e) && (function(e) {
                    if (e.some(e => "web" === e.type)) return !0;
                    let i = e.find(e => "notion" === e.type);
                    return !!(i && (0, t(445568).isWebAccessEnabled)(i.permissions))
                }(e) || !!(null != (i = e.find(e => "notion" === e.type)) && i.permissions) && i.permissions.some(e => {
                    if ("notion" !== e.type) return !1;
                    let {
                        identifier: i,
                        actions: n
                    } = e;
                    return ("pageOrCollectionViewBlock" === i.type || "workspacePublic" === i.type) && (0, t(445568).permissionActionsAllowRead)(n)
                }))
            }
        },
        867292: (e, i, t) => {
            t.d(i, {
                A: () => r
            });
            var n = t(296540),
                s = t(474848);
            let o = {
                    iconBoxStyles: {
                        color: t(632079).Tj.icon.secondary
                    }
                },
                r = n.memo(function({
                    store: e
                }) {
                    let i = (0, t(682985).K8)(() => {
                            var i;
                            return null == (i = e.getIcon()) ? void 0 : i.icon
                        }, [e]),
                        n = (0, t(960253).e)(),
                        r = (0, t(960253).I)(() => ({
                            teamOrSpaceIcon: (0, t(912221).iM)({
                                themeMode: n,
                                size: t(986939).A.isMobile ? t(557683).Bj : t(557683).Ev,
                                useLargeBorderRadius: !0,
                                useLightBackgroundColor: !0,
                                icon: i
                            })
                        }), [i, n]),
                        {
                            innerEmojiOrFlatIconSize: a,
                            innerInitialSize: l
                        } = function({
                            baseSize: e
                        }) {
                            return {
                                innerEmojiOrFlatIconSize: .65 * e,
                                innerInitialSize: .75 * e
                            }
                        }({
                            baseSize: t(986939).A.isMobile ? t(557683).Bj : t(557683).Ev
                        });
                    return (0, s.jsx)(t(729746).x, {
                        disabled: !0,
                        store: e,
                        size: t(986939).A.isMobile ? t(557683).Bj : t(557683).Ev,
                        iconContainerStyles: r.teamOrSpaceIcon,
                        iconBoxStyles: o.iconBoxStyles,
                        innerEmojiOrFlatIconSize: a,
                        innerInitialSize: l
                    })
                })
        }
    }
]);