"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [7912], {
        13014: (e, t, n) => {
            n.d(t, {
                E: () => s
            }), n(296540);
            var a = n(474848);
            let i = (0, n(109939).YK)({
                    title: {
                        id: "mailClientSelectionModal.title",
                        defaultMessage: "Choose your email client"
                    },
                    subtitle: {
                        id: "mailClientSelectionModal.subtitle",
                        defaultMessage: "Both work with a Gmail address of your choice"
                    },
                    notionMailTitle: {
                        id: "mailClientSelectionModal.notionMail.title",
                        defaultMessage: "Notion Mail"
                    },
                    notionMailDescription: {
                        id: "mailClientSelectionModal.notionMail.description",
                        defaultMessage: "Auto draft and triage mail with additional features such as mail blocks, statuses, and reminders."
                    },
                    gmailTitle: {
                        id: "mailClientSelectionModal.gmail.title",
                        defaultMessage: "Gmail"
                    },
                    gmailDescription: {
                        id: "mailClientSelectionModal.gmail.description",
                        defaultMessage: "Auto draft and triage mail."
                    }
                }),
                l = {
                    textAlign: "center"
                },
                r = {
                    whiteSpace: "pre-wrap"
                };

            function o(e) {
                let {
                    client: t,
                    isSelected: i,
                    onSelect: l,
                    title: o,
                    description: s,
                    icon: d
                } = e, c = (0, n(960253).I)(() => ({
                    button: {
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 16,
                        height: "auto",
                        borderRadius: 8,
                        paddingTop: 12,
                        paddingBottom: 12,
                        paddingInlineStart: 14,
                        paddingInlineEnd: 16 - n(451199).p,
                        border: "none",
                        boxShadow: i ? `inset 0 0 0 1px ${n(632079).Tj.blue.icon.accentPrimary}` : `inset 0 0 0 1px ${n(632079).Tj.border.primary}`
                    }
                }), [i]);
                return (0, a.jsxs)(n(548436).A, {
                    size: "lg",
                    onClick: () => l(t),
                    style: c.button,
                    children: [(0, a.jsxs)(n(4458).fI, {
                        gap: 12,
                        children: [(0, a.jsx)(n(4458).VP, {
                            flexShrink: 0,
                            alignSelf: "flex-start",
                            children: d
                        }), (0, a.jsxs)(n(4458).VP, {
                            gap: 4,
                            flex: 1,
                            minWidth: 0,
                            children: [(0, a.jsx)(n(111010).D, {
                                styleKey: "bodySmMedium",
                                children: o
                            }), (0, a.jsx)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "secondary",
                                style: r,
                                children: s
                            })]
                        })]
                    }), (0, a.jsx)(n(451199).A, {
                        isSelected: i,
                        radioButtonColor: "blue"
                    })]
                })
            }

            function s(e) {
                let {
                    selectedClient: t,
                    onSelectClient: r,
                    variant: s = "inline"
                } = e;
                return (0, a.jsxs)(n(4458).VP, {
                    gap: "modal" === s ? 24 : 16,
                    children: ["modal" === s ? (0, a.jsxs)(n(4458).VP, {
                        gap: 4,
                        alignItems: "center",
                        marginTop: 12,
                        marginBottom: 4,
                        children: [(0, a.jsx)(n(111010).D, {
                            styleKey: "titleLgBold",
                            colorVariant: "primary",
                            style: l,
                            children: (0, a.jsx)(n(109939).sA, { ...i.title
                            })
                        }), (0, a.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            style: l,
                            children: (0, a.jsx)(n(109939).sA, { ...i.subtitle
                            })
                        })]
                    }) : (0, a.jsxs)(n(4458).VP, {
                        gap: 4,
                        children: [(0, a.jsx)(n(111010).D, {
                            styleKey: "bodySemibold",
                            children: (0, a.jsx)(n(109939).sA, { ...i.title
                            })
                        }), (0, a.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            children: (0, a.jsx)(n(109939).sA, { ...i.subtitle
                            })
                        })]
                    }), (0, a.jsxs)(n(4458).VP, {
                        gap: 8,
                        children: [(0, a.jsx)(o, {
                            client: "notion_mail",
                            isSelected: "notion_mail" === t,
                            onSelect: r,
                            title: (0, a.jsx)(n(109939).sA, { ...i.notionMailTitle
                            }),
                            description: (0, a.jsx)(n(109939).sA, { ...i.notionMailDescription
                            }),
                            icon: (0, n(441443).notionMailIcon)({
                                width: 20,
                                height: 20
                            })
                        }), (0, a.jsx)(o, {
                            client: "gmail",
                            isSelected: "gmail" === t,
                            onSelect: r,
                            title: (0, a.jsx)(n(109939).sA, { ...i.gmailTitle
                            }),
                            description: (0, a.jsx)(n(109939).sA, { ...i.gmailDescription
                            }),
                            icon: (0, n(898869).gmailIcon)({
                                width: 20,
                                height: 20
                            })
                        })]
                    })]
                })
            }
        },
        102292: (e, t, n) => {
            n.d(t, {
                V: () => a
            });

            function a(e) {
                return (0, n(83208).X)("handle_invalid_workflow_name", {
                    disableExposureLogging: !0
                }) ? (0, n(166788).O)(e) : "string" == typeof e ? e : ""
            }
        },
        143630: (e, t, n) => {
            n.d(t, {
                c: () => a
            }), n(898992), n(354520);
            async function a(e) {
                let {
                    environment: t,
                    moduleId: a,
                    spaceId: i,
                    workflowId: l
                } = e;
                try {
                    let e = await t.api.callApi({
                        eventName: "getViaWorkflowModuleConfigurationUtil",
                        environment: t,
                        data: {
                            moduleId: a,
                            moduleType: "slack",
                            spaceId: i,
                            workflowId: l,
                            callArguments: {
                                functionName: "getSlackConnections",
                                functionArgs: []
                            }
                        }
                    });
                    if ("success" !== e.type || "getSlackConnections" !== e.data.functionName) return;
                    let r = [...e.data.functionReturn.personal, ...e.data.functionReturn.space].filter(e => e.authenticated);
                    if (1 !== r.length) return;
                    let [o] = r;
                    return n(496282).L3.fromPointerLike({
                        id: o.id,
                        table: o.table,
                        spaceId: i
                    })
                } catch (e) {
                    return
                }
            }
        },
        184170: (e, t, n) => {
            n.d(t, {
                x: () => i
            });
            var a = n(296540);

            function i({
                module: e,
                workflowStore: t
            }) {
                let {
                    scopedExternalConnectionStore: l,
                    externalConnection: r
                } = (0, n(243311).q)({
                    moduleValue: e
                }), o = (0, n(109939).tz)(), s = (0, n(599412).H)(o), d = (0, n(345776).T)(), c = (0, n(667291).L)(), u = e && e.state && "connectionPointer" in e.state ? e.state.connectionPointer : void 0, g = e ? (0, n(593186).jK)(e.type) : void 0, p = (null == g ? void 0 : g.createsConnectionForCurrentUser) && !u, m = (0, n(83208).X)("workflow_module_ownership_validation"), f = (0, n(682985).K8)(() => {
                    let e = null == l ? void 0 : l.getCreatedByPointer();
                    return {
                        createdById: (null == e ? void 0 : e.table) === n(514214).oo ? e.id : void 0,
                        createdTime: null == l ? void 0 : l.getCreatedTime()
                    }
                }, [l]), y = (0, n(682985).K8)(() => null == t ? void 0 : t.getRole(), [t]), {
                    createdById: h,
                    createdTime: v
                } = (0, a.useMemo)(() => {
                    let e = (null == r ? void 0 : r.created_by_table) === n(514214).oo ? r.created_by_id : void 0;
                    return {
                        createdById: f.createdById ? ? e,
                        createdTime: f.createdTime ? ? (null == r ? void 0 : r.created_time)
                    }
                }, [r, f]), x = (0, n(97668).Yb)(async () => {
                    if (h && t) {
                        let e = await t.loadRecordModel({
                            table: n(514214).oo,
                            id: h
                        });
                        return null == e ? void 0 : e.getDisplayName(o)
                    }
                    return p && c ? c : o.formatMessage({
                        defaultMessage: "Unknown user",
                        id: "workflow.connectedModuleOwner.unknownName"
                    })
                }, [h, c, o, p, t]), b = (0, a.useMemo)(() => {
                    if (v && 0 !== v) return (0, n(850640).W_)(v, "medium_with_time", s)
                }, [v, s]), w = !m || h === d || !h, k = (0, a.useMemo)(() => h === d || void 0 !== y && (0, n(642157).p2)(y), [h, d, y]);
                return {
                    createdByUser: x[0].value,
                    createdDateString: b,
                    canCurrentUserUpdateConnection: w,
                    canCurrentUserRemoveModule: k
                }
            }
        },
        189684: (e, t, n) => {
            function a(e) {
                return e.replaceAll(/(<([^>]+)>)/gi, "").trim()
            }

            function i(e, t = 140) {
                if (e.length <= t) return e;
                let n = e.substring(0, t).trim(),
                    a = n.split(" ");
                return a.length > 1 && " " !== n.charAt(n.length - 1) ? (a.pop(), `${a.map(e=>e.trim()).join(" ")}...`) : `${n.substring(0,t-3)}...`
            }

            function l(e) {
                return /[\"\']/.test(e)
            }
            n.d(t, {
                Kq: () => a,
                vo: () => l,
                xv: () => i
            }), n(898992), n(354520), n(581454)
        },
        280996: (e, t, n) => {
            n.d(t, {
                b: () => l,
                T: () => r()
            }), n(581454);
            var a = n(296540),
                i = n(474848);
            let l = a.memo(function(e) {
                let {
                    store: t = n(2009).w
                } = e, l = (0, n(682985).K8)(() => t.state.asyncModals, [t]);
                return (0, i.jsx)(i.Fragment, {
                    children: l.map(e => {
                        let {
                            id: t,
                            internalRenderModal: n,
                            isOpen: l
                        } = e, r = n(l);
                        return (0, i.jsx)(a.Fragment, {
                            children: r
                        }, t)
                    })
                })
            });
            var r = () => n(796123)
        },
        322450: (e, t, n) => {
            function a(e = !1) {
                return e ? "workspace_owners_only" : "all_workspace_members"
            }

            function i(e) {
                let {
                    policy: t,
                    userRole: i,
                    userPermissionGroups: l,
                    isOwnersOnlyDefaultEnabled: r
                } = e, o = a(r), s = i && (0, n(642157).Km)(i);
                switch (t ? ? o) {
                    case "disabled":
                        return {
                            canCreate: !1,
                            reason: "policy_restriction"
                        };
                    case "workspace_owners_only":
                        if (!s) return {
                            canCreate: !1,
                            reason: "policy_restriction"
                        };
                        break;
                    case "all_workspace_members":
                        break;
                    case "custom":
                        if (!(null == l ? void 0 : l.some(e => {
                                var t;
                                return (null == (t = e.settings) ? void 0 : t.can_create_custom_agents) === !0
                            })) && !s) return {
                            canCreate: !1,
                            reason: "policy_restriction"
                        }
                }
                return {
                    canCreate: !0
                }
            }
            n.d(t, {
                D: () => a,
                K: () => i
            }), n(898992), n(737550)
        },
        360709: (e, t, n) => {
            n.d(t, {
                c: () => l
            }), n(296540);
            var a = n(474848);
            let i = {
                connectBody: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingInline: 32,
                    minHeight: 0,
                    textAlign: "center",
                    width: "100%"
                },
                connectBodyFillHeight: {
                    height: "100%"
                },
                connectVisual: {
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBlockEnd: 4,
                    marginBottom: 32,
                    position: "relative"
                },
                iconBoxLarge: {
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: n(632079).Tj.background.primary,
                    border: `1px solid ${n(632079).Tj.border.secondary}`,
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1
                },
                dotViewport: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    position: "relative",
                    width: 64,
                    zIndex: 0
                },
                dotRow: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6
                },
                dotShell: {
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    position: "relative",
                    flexShrink: 0
                },
                dotBase: {
                    position: "absolute",
                    top: 0,
                    insetInlineStart: 0,
                    insetInlineEnd: 0,
                    bottom: 0,
                    borderRadius: 999,
                    background: n(632079).Tj.border.secondary
                },
                dotAccent: {
                    position: "absolute",
                    top: 0,
                    insetInlineStart: 0,
                    insetInlineEnd: 0,
                    bottom: 0,
                    borderRadius: 999,
                    background: n(632079).Tj.text.accentPrimary
                },
                connectDescription: {
                    maxWidth: 280,
                    marginTop: 8
                }
            };

            function l({
                connection: e,
                onCancel: t,
                variant: r = "default",
                isConnecting: o = !0,
                hideFooter: s = !1
            }) {
                let d = (0, n(958638).I)(),
                    c = o && !d,
                    u = e.shortName ? ? e.name,
                    g = function(e, t) {
                        switch (e) {
                            case "oauth":
                                return (0, a.jsx)(n(109939).sA, { ...n(210953).D.oauthProcessing
                                });
                            case "headerAuth":
                                return (0, a.jsx)(n(109939).sA, { ...n(376242).D.headerAuthConnectTitle,
                                    values: {
                                        integrationName: t
                                    }
                                });
                            case "default":
                                return (0, a.jsx)(n(109939).sA, { ...n(376242).D.connectTitle,
                                    values: {
                                        integrationName: t
                                    }
                                });
                            default:
                                (0, n(722371).HB)(e)
                        }
                    }(r, u),
                    p = function(e, t) {
                        switch (e) {
                            case "oauth":
                                return (0, a.jsx)(n(109939).sA, { ...n(210953).D.oauthProcessingHelper
                                });
                            case "headerAuth":
                                return (0, a.jsx)(n(109939).sA, { ...n(376242).D.headerAuthConnectDescription
                                });
                            case "default":
                                return (0, a.jsx)(n(109939).sA, { ...n(376242).D.connectDescription,
                                    values: {
                                        integrationName: t
                                    }
                                });
                            default:
                                (0, n(722371).HB)(e)
                        }
                    }(r, u);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(n(153321).P.div, {
                        style: { ...i.connectBody,
                            ...s && i.connectBodyFillHeight
                        },
                        initial: !d && {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: d ? void 0 : {
                            opacity: 0
                        },
                        children: [(0, a.jsxs)("div", {
                            style: i.connectVisual,
                            children: [(0, a.jsx)(n(153321).P.div, {
                                style: i.iconBoxLarge,
                                animate: c ? {
                                    x: [0, 20, 0]
                                } : {
                                    x: 0
                                },
                                transition: c ? {
                                    duration: .8,
                                    repeat: 1 / 0,
                                    ease: "easeInOut"
                                } : void 0,
                                children: (0, a.jsx)(n(480272).j, {
                                    connection: e,
                                    sizeOverride: 28
                                })
                            }), (0, a.jsx)("div", {
                                style: i.dotViewport,
                                children: (0, a.jsx)(n(153321).P.div, {
                                    style: i.dotRow,
                                    animate: c ? {
                                        x: [0, 12]
                                    } : {
                                        x: 0
                                    },
                                    transition: c ? {
                                        duration: .4,
                                        repeat: 1 / 0,
                                        ease: "linear"
                                    } : void 0,
                                    children: Array.from({
                                        length: 6
                                    }, (e, t) => (0, a.jsxs)("div", {
                                        style: i.dotShell,
                                        children: [(0, a.jsx)("div", {
                                            style: i.dotBase
                                        }), (0, a.jsx)(n(153321).P.div, {
                                            style: i.dotAccent,
                                            animate: c ? {
                                                opacity: [0, 1, 0]
                                            } : {
                                                opacity: 0
                                            },
                                            transition: c ? {
                                                duration: 1,
                                                repeat: 1 / 0,
                                                delay: .1 * t,
                                                ease: "easeInOut"
                                            } : void 0
                                        })]
                                    }, `connect-dot-${t}`))
                                })
                            }), (0, a.jsx)(n(153321).P.div, {
                                style: i.iconBoxLarge,
                                animate: c ? {
                                    x: [0, -20, 0]
                                } : {
                                    x: 0
                                },
                                transition: c ? {
                                    duration: .8,
                                    repeat: 1 / 0,
                                    ease: "easeInOut"
                                } : void 0,
                                children: (0, a.jsx)(n(16275).I, {
                                    icon: n(898378).notionTintableIcon,
                                    size: 28,
                                    colorVariant: "primary"
                                })
                            })]
                        }), (0, a.jsx)(n(111010).D, {
                            styleKey: "bodyLgSemibold",
                            colorVariant: "primary",
                            children: g
                        }), (0, a.jsx)("div", {
                            style: i.connectDescription,
                            children: (0, a.jsx)(n(111010).D, {
                                styleKey: "bodySm",
                                colorVariant: "secondary",
                                children: p
                            })
                        })]
                    }), s ? void 0 : (0, a.jsx)(n(584278).R, {
                        children: (0, a.jsxs)("div", {
                            style: n(485165).MY.footerRow,
                            children: [t ? (0, a.jsx)(n(548436).A, {
                                colorPalette: "gray",
                                onClick: t,
                                size: "lg",
                                children: (0, a.jsx)(n(109939).sA, { ...n(376242).D.cancel
                                })
                            }) : void 0, (0, a.jsx)(n(912946).A, {
                                disabled: o,
                                isLoading: o,
                                size: "lg",
                                colorPalette: "blue",
                                children: (0, a.jsx)(n(109939).sA, { ...n(376242).D.connecting
                                })
                            })]
                        })
                    })]
                })
            }
        },
        376242: (e, t, n) => {
            n.d(t, {
                D: () => a
            });
            let a = (0, n(109939).YK)({
                modalAriaLabel: {
                    id: "workflow.agent.addConnectionModal.ariaLabel",
                    defaultMessage: "Add connection modal"
                },
                title: {
                    id: "workflow.agent.addConnectionModal.title",
                    defaultMessage: "Add connection"
                },
                searchAriaLabel: {
                    id: "workflow.agent.addConnectionModal.search.ariaLabel",
                    defaultMessage: "Search connections"
                },
                closeSearchAriaLabel: {
                    id: "workflow.agent.addConnectionModal.search.close.ariaLabel",
                    defaultMessage: "Close search"
                },
                searchPlaceholder: {
                    id: "workflow.agent.addConnectionModal.search.placeholder",
                    defaultMessage: "Search connections…"
                },
                subtitle: {
                    id: "workflow.agent.addConnectionModal.subtitle",
                    defaultMessage: "Connect your team’s tools to this custom agent."
                },
                subtitleWithMcp: {
                    id: "workflow.agent.addConnectionModal.subtitleWithMcp",
                    defaultMessage: "Connect your team’s tools and MCP servers to this custom agent."
                },
                customMcp: {
                    id: "workflow.agent.addConnectionModal.customMcp",
                    defaultMessage: "Custom MCP server"
                },
                customMcpServer: {
                    id: "workflow.agent.addConnectionModal.customMcpServer",
                    defaultMessage: "Custom MCP server"
                },
                customMcpServerTagline: {
                    id: "workflow.agent.addConnectionModal.customMcpServerTagline",
                    defaultMessage: "Add your own server"
                },
                addCustomMcp: {
                    id: "workflow.agent.addConnectionModal.addCustomMcp",
                    defaultMessage: "Add custom MCP"
                },
                enableCustomMcp: {
                    id: "workflow.agent.addConnectionModal.enableCustomMcp",
                    defaultMessage: "Custom MCP Server"
                },
                customMcpDisabledTooltip: {
                    id: "workflow.agent.addConnectionModal.customMcpDisabledTooltip",
                    defaultMessage: "Your workspace admin has not enabled custom MCP servers."
                },
                disabledPreconfiguredMcpTooltip: {
                    id: "workflow.agent.addConnectionModal.disabledPreconfiguredMcpTooltip",
                    defaultMessage: "This MCP server isn’t allowed in your workspace. Ask your workspace owner to enable it."
                },
                cancel: {
                    id: "workflow.agent.addConnectionModal.cancel",
                    defaultMessage: "Cancel"
                },
                mailModuleInitializationFailed: {
                    id: "workflow.agent.addConnectionModal.mailModuleInitializationFailed",
                    defaultMessage: "Something went wrong while connecting Notion Mail. Please try again."
                },
                workerBadge: {
                    id: "workflow.agent.addConnectionModal.workerBadge",
                    defaultMessage: "Worker"
                },
                searchBadge: {
                    id: "workflow.agent.addConnectionModal.searchBadge",
                    defaultMessage: "Search"
                },
                connectionTypeConnection: {
                    id: "workflow.agent.addConnectionModal.connectionType.connection",
                    defaultMessage: "Connection"
                },
                connectionTypeMcp: {
                    id: "workflow.agent.addConnectionModal.connectionType.mcp",
                    defaultMessage: "MCP"
                },
                connectionTypeWorker: {
                    id: "workflow.agent.addConnectionModal.connectionType.worker",
                    defaultMessage: "Worker"
                },
                connectedToNotion: {
                    id: "workflow.agent.addConnectionModal.connectionType.connectedToNotion",
                    defaultMessage: "Connected to Notion"
                },
                connected: {
                    id: "workflow.agent.addConnectionModal.connected",
                    defaultMessage: "Connected"
                },
                active: {
                    id: "workflow.agent.addConnectionModal.active",
                    defaultMessage: "Connected"
                },
                add: {
                    id: "workflow.agent.addConnectionModal.add",
                    defaultMessage: "Add"
                },
                connect: {
                    id: "workflow.agent.addConnectionModal.connect",
                    defaultMessage: "Connect"
                },
                connectNamed: {
                    id: "workflow.agent.addConnectionModal.connectNamed",
                    defaultMessage: "Connect {integrationName}"
                },
                continueWithGoogle: {
                    id: "workflow.agent.addConnectionModal.continueWithGoogle",
                    defaultMessage: "Continue with Google"
                },
                connectTitle: {
                    id: "workflow.agent.addConnectionModal.connectTitle",
                    defaultMessage: "Connect to {integrationName}"
                },
                connectDescription: {
                    id: "workflow.agent.addConnectionModal.connectDescription",
                    defaultMessage: "Authorize access to enable your agent to interact with {integrationName}."
                },
                headerAuthConnectTitle: {
                    id: "workflow.agent.addConnectionModal.headerAuthConnectTitle",
                    defaultMessage: "Setting up {integrationName}…"
                },
                headerAuthConnectDescription: {
                    id: "workflow.agent.addConnectionModal.headerAuthConnectDescription",
                    defaultMessage: "Your connection is being configured automatically. This should only take a moment."
                },
                connecting: {
                    id: "workflow.agent.addConnectionModal.connecting",
                    defaultMessage: "Connecting…"
                },
                removeAccessModule: {
                    id: "workflow.agent.addConnectionModal.removeAccessModule",
                    defaultMessage: "Disconnect"
                },
                removeConfirmMessage: {
                    id: "workflow.agent.addConnectionModal.removeConfirmMessage",
                    defaultMessage: "Disconnect this connection?"
                },
                removeConfirmDescription: {
                    id: "workflow.agent.addConnectionModal.removeConfirmDescription",
                    defaultMessage: "Remove connection from this agent permanently. You’ll need to authenticate again to reconnect."
                },
                removeConfirmAcceptLabel: {
                    id: "workflow.agent.addConnectionModal.removeConfirmAcceptLabel",
                    defaultMessage: "Disconnect"
                },
                sharedAgentWarning: {
                    id: "workflow.agent.addConnectionModal.sharedAgentWarning",
                    defaultMessage: "This connection can be used by anyone who has access to this custom agent."
                },
                moreOptions: {
                    id: "workflow.agent.addConnectionModal.moreOptions",
                    defaultMessage: "More…"
                },
                connectionError: {
                    id: "workflow.agent.addConnectionModal.connectionError",
                    defaultMessage: "Failed to connect: {detail}"
                }
            })
        },
        394205: (e, t, n) => {
            n.d(t, {
                AS: () => s,
                Rv: () => o,
                WI: () => d,
                e1: () => i,
                t8: () => r,
                ze: () => l
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(737550);
            let a = ["mail.email.received", "mail.email.sent", "mail.email.receivedorsent", "mail.label.applied"];

            function i(e) {
                return !!(0, n(722371).Xk)(a, e)
            }

            function l(e) {
                return (null == e ? void 0 : e.type) === "mail.email.received" || (null == e ? void 0 : e.type) === "mail.email.sent" || (null == e ? void 0 : e.type) === "mail.email.receivedorsent" || (null == e ? void 0 : e.type) === "mail.label.applied"
            }

            function r(e) {
                return !!e && e.some(e => {
                    var t;
                    return (null == (t = e.state) ? void 0 : t.type) && i(e.state.type)
                })
            }

            function o(e) {
                let t = e.state;
                if (!l(t) || "mail.email.received" !== t.type && "mail.email.sent" !== t.type && "mail.email.receivedorsent" !== t.type) return [];
                let n = t.filters;
                if (!n || 0 === n.length) return [];
                let a = new Set;
                for (let e of n) a.add(e.field);
                return Array.from(a)
            }

            function s(e) {
                let t = e.state;
                if (!l(t)) return;
                let n = t.emailAccountIds;
                if (n && 0 !== n.length) return n[0]
            }

            function d(e) {
                if (!e) return;
                let t = new Set;
                for (let a of e) {
                    var n;
                    let e = null == (n = a.state) ? void 0 : n.type;
                    e && i(e) && t.add(e)
                }
                if (0 !== t.size) return Array.from(t)
            }
        },
        460657: (e, t, n) => {
            function a(e) {
                var t, n, a, i, l, r, o, s, d, c, u, g;
                let {
                    trigger: p,
                    supportsLifecyclePropertyFilters: m
                } = e;
                return null == p || !p.state || ("notion.page.created" === p.state.type || "notion.page.deleted" === p.state.type ? !m || !!p.state.viewId || (null == (r = p.state.propertyFilters) ? void 0 : r.type) === "all" && ((null == (o = p.state.propertyFilters.all) ? void 0 : o.length) ? ? 0) > 0 || (null == (s = p.state.propertyFilters) ? void 0 : s.type) === "some" && ((null == (d = p.state.propertyFilters.some) ? void 0 : d.length) ? ? 0) > 0 || (null == (c = p.state.propertyFilters) ? void 0 : c.type) === "any" : "notion.page.updated" !== p.state.type || (null == (t = p.state.propertyFilters) ? void 0 : t.type) === "any" || ((null == (n = p.state.propertyFilters) ? void 0 : n.type) === "all" ? ((null == (u = p.state.propertyFilters.all) ? void 0 : u.length) ? ? 0) > 0 : (null == (a = p.state.propertyFilters) ? void 0 : a.type) === "some" ? ((null == (g = p.state.propertyFilters.some) ? void 0 : g.length) ? ? 0) > 0 : (null == (i = p.state.propertyFilters) ? void 0 : i.type) !== "none" && ((null == (l = p.state.propertyIds) ? void 0 : l.length) ? ? 0) > 0))
            }

            function i(e) {
                var t, n, a, i, l;
                let r, {
                        trigger: o,
                        schema: s
                    } = e,
                    d = (r = null == (t = o) ? void 0 : t.state) && ("notion.page.created" === r.type || "notion.page.updated" === r.type || "notion.page.deleted" === r.type) ? (null == (n = r.propertyFilters) ? void 0 : n.type) === "all" ? (null == (i = r.propertyFilters.all) ? void 0 : i.map(e => e.property)) ? ? [] : (null == (a = r.propertyFilters) ? void 0 : a.type) === "some" ? (null == (l = r.propertyFilters.some) ? void 0 : l.map(e => e.property)) ? ? [] : "notion.page.updated" === r.type ? r.propertyIds ? ? [] : [] : [];
                return 0 !== d.length && d.some(e => void 0 === s[e])
            }
            n.d(t, {
                P: () => a,
                c: () => i
            }), n(898992), n(581454), n(737550)
        },
        474939: (e, t, n) => {
            n.d(t, {
                B: () => i
            });
            var a = () => n(285316);

            function i(e) {
                let {
                    emailAddresses: t,
                    preferredClient: n
                } = e, i = {};
                for (let e of t) i[e.email] = (0, a().gB)(n);
                return i
            }
        },
        480272: (e, t, n) => {
            n.d(t, {
                B: () => l,
                j: () => i
            }), n(581454), n(296540);
            var a = n(474848);

            function i(e) {
                let {
                    connection: t,
                    sizeOverride: i
                } = e;
                if ("mcpServer" === t.type) {
                    let e = i ? ? ("compact" === t.iconVariant ? n(104509).Ev.default : 24);
                    return (0, a.jsx)(n(905335).X, {
                        iconUrl: t.iconUrl ? ? t.serverIconUrl,
                        serverUrl: t.url,
                        serverName: t.name,
                        size: e
                    })
                }
                if ("worker" === t.moduleType) {
                    let e = i ? ? ("compact" === t.iconVariant ? n(104509).Ev.default : 24);
                    return (0, n(880357).bD)({
                        width: e,
                        height: e
                    })
                }
                let l = t.moduleType ? (0, n(593186).jK)(t.moduleType) : void 0;
                if (!(null != l && l.getIcon)) return null;
                let r = i ? ? ("compact" === t.iconVariant ? n(104509).Ev.default : 24);
                return l.getIcon()({
                    width: r,
                    height: r
                })
            }

            function l(e, t = 14) {
                var a;
                if (!e.moduleType) return [];
                let i = (0, n(593186).jK)(e.moduleType);
                return ((null == i || null == (a = i.getSupportedIcons) ? void 0 : a.call(i)) ? ? []).map(e => e({
                    width: t,
                    height: t
                }))
            }
        },
        485165: (e, t, n) => {
            n.d(t, {
                MY: () => r,
                So: () => i,
                W2: () => o,
                xx: () => l
            }), n(296540);
            var a = n(474848);
            let i = 24,
                l = 24,
                r = {
                    footerRow: {
                        padding: 16,
                        paddingInlineStart: 24,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: 12,
                        width: "100%"
                    },
                    footerRowWarningGap: {
                        gap: 32
                    },
                    warningText: {
                        flex: 1,
                        minWidth: 0
                    },
                    actionButton: {
                        width: "100%"
                    }
                };

            function o(e) {
                let {
                    connectionStatus: t,
                    action: i,
                    customConnectMessage: l,
                    isActionEnabled: o,
                    isLoading: s,
                    disabledTooltipContent: d,
                    onConnect: c,
                    onDisconnect: u,
                    warning: g
                } = e, p = "connected" !== t, m = "connected" === t;
                if (!p && !m) return null;
                let f = g && p,
                    y = "customConnect" === i && l ? l : (0, a.jsx)(n(109939).sA, { ...n(376242).D.connect
                    });
                return (0, a.jsx)(n(584278).R, {
                    children: (0, a.jsxs)("div", {
                        style: { ...r.footerRow,
                            ...f && r.footerRowWarningGap
                        },
                        children: [f ? (0, a.jsx)("div", {
                            style: r.warningText,
                            children: g
                        }) : void 0, m ? (0, a.jsx)(n(265779).E, {
                            onClick: u,
                            size: "lg",
                            colorPalette: "red",
                            children: (0, a.jsx)(n(109939).sA, { ...n(376242).D.removeAccessModule
                            })
                        }) : void 0, p ? (0, a.jsx)(n(51831).m, {
                            disableTooltip: void 0 === d || o || s,
                            placement: "top",
                            content: () => d ? ? null,
                            children: e => (0, a.jsx)(n(912946).A, { ...e,
                                onClick: c,
                                disabled: !o || s,
                                size: "lg",
                                colorPalette: "blue",
                                style: f ? void 0 : r.actionButton,
                                children: y
                            })
                        }) : void 0]
                    })
                })
            }
        },
        579585: (e, t, n) => {
            n.d(t, {
                Ut: () => s,
                ae: () => o
            }), n(898992), n(354520), n(581454);
            var a = n(296540),
                i = n(474848);
            let l = (0, n(109939).YK)({
                    scheduledLabel: {
                        id: "workflow.agent.triggers.recurrence.scheduledLabel",
                        defaultMessage: "Scheduled"
                    },
                    summaryWeekdays: {
                        id: "workflow.agent.triggers.recurrence.summaryWeekdays",
                        defaultMessage: "Weekdays"
                    },
                    summaryDaily: {
                        id: "workflow.agent.triggers.recurrence.summaryDaily",
                        defaultMessage: "Daily"
                    },
                    summaryWeekly: {
                        id: "workflow.agent.triggers.recurrence.summaryWeekly",
                        defaultMessage: "Weekly"
                    },
                    summaryMonthly: {
                        id: "workflow.agent.triggers.recurrence.summaryMonthly",
                        defaultMessage: "Monthly"
                    },
                    summaryYearly: {
                        id: "workflow.agent.triggers.recurrence.summaryYearly",
                        defaultMessage: "Every year"
                    },
                    summaryHourly: {
                        id: "workflow.agent.triggers.recurrence.summaryHourly",
                        defaultMessage: "Hourly"
                    },
                    summaryWeeklyOnDays: {
                        id: "workflow.agent.triggers.recurrence.summaryWeeklyOnDays",
                        defaultMessage: "Weekly on {days}"
                    },
                    onDateSuffix: {
                        id: "workflow.agent.triggers.recurrence.onDateSuffix",
                        defaultMessage: "on {date}"
                    },
                    theOrdinalDayOfMonth: {
                        id: "workflow.agent.triggers.recurrence.theOrdinalDayOfMonth",
                        defaultMessage: "the {day}"
                    }
                }),
                r = { ...n(126828).M,
                    searchInputElement: { ...n(126828).M.searchInputElement,
                        cursor: "pointer",
                        userSelect: "none"
                    }
                };

            function o(e) {
                let {
                    recurrenceTrigger: t,
                    updateRecurrenceState: o,
                    disabled: d
                } = e, c = (0, n(109939).tz)(), u = (0, n(554988).j)(), g = (0, n(682985).K8)(() => n(218744).default.getConfig({
                    configName: "custom_agent_sub_features"
                }).hourly_recurrence_triggers ? ? !1, []), p = (0, a.useMemo)(() => {
                    let e = ["day", "week", "month", "year"];
                    return g ? ["hour", ...e] : e
                }, [g]), m = (0, a.useMemo)(() => {
                    let e = n(906745).DateTime.now().setZone(t.timezone),
                        a = (0, n(943003).Nw)(e.year, e.month - 1, e.day);
                    return {
                        frequency: t.frequency,
                        hour: t.hour,
                        interval: t.interval,
                        minute: t.minute,
                        start_date: t.start_date ? ? a,
                        timezone: t.timezone,
                        end_condition: t.end_condition,
                        ..."week" === t.frequency && {
                            weekdays: t.weekdays
                        },
                        ..."month" === t.frequency && {
                            monthly_restriction: t.monthly_restriction
                        }
                    }
                }, [t]), f = (0, a.useMemo)(() => {
                    var e;
                    let n;
                    return n = s(e = {
                        intl: c,
                        recurrenceTrigger: t
                    }), `${n.schedule}${"generic"===n.kind&&n.onDate?` ${e.intl.formatMessage(l.onDateSuffix,{date:n.onDate})}`:""}${n.atTime}`
                }, [c, t]), y = (0, n(469684).$)({
                    recurrence: m,
                    onChange: e => {
                        e && o(e)
                    },
                    disabled: d,
                    allowedFrequencies: p,
                    autoFocusIfNew: !1
                }), h = (0, n(682985).K8)(() => y.buttonPopupStore.state.open, [y.buttonPopupStore]), [v, x] = (0, a.useState)(!1), b = (0, n(960253).I)(() => ({
                    searchInput: {
                        minHeight: 36,
                        borderRadius: 8,
                        border: `1.5px solid ${h?n(632079).Tj.blue.border.accentPrimary:v?n(632079).Tj.border.primary:n(632079).Tj.border.secondaryTranslucent}`,
                        boxShadow: h ? `0 0 0 3px ${n(632079).Tj.blue.border.primaryTranslucent}` : "none",
                        paddingInline: 12,
                        paddingBlock: 4,
                        lineHeight: "21px",
                        backgroundColor: n(632079).Tj.background.primary,
                        cursor: "pointer"
                    }
                }), [v, h]);
                return (0, i.jsxs)("div", {
                    style: r.container,
                    children: [(0, i.jsx)("div", {
                        style: r.label,
                        children: (0, i.jsx)("div", {
                            style: r.labelText,
                            children: c.formatMessage(l.scheduledLabel)
                        })
                    }), (0, i.jsx)("div", {
                        style: r.inputWrapper,
                        children: (0, i.jsx)(n(656252).A, { ...y,
                            disabled: d,
                            popupType: u,
                            placementToOrigin: "bottom",
                            alignmentToOrigin: "end",
                            sameWidthAsOrigin: !1,
                            originGap: 4,
                            style: {
                                width: 280,
                                backgroundColor: n(632079).Tj.background.primary,
                                borderRadius: 8,
                                border: `1px solid ${n(632079).Tj.border.secondary}`,
                                boxShadow: n(632079).Tj.shadow.base.lg,
                                boxSizing: "border-box",
                                overflow: "hidden"
                            },
                            children: e => (0, i.jsx)("div", {
                                onMouseEnter: () => x(!0),
                                onMouseLeave: () => x(!1),
                                children: (0, i.jsx)(n(36481).p, { ...e,
                                    value: f,
                                    onChange: () => {},
                                    inputElementAttributes: {
                                        readOnly: !0,
                                        "aria-readonly": !0
                                    },
                                    right: (0, i.jsx)(n(16275).I, {
                                        icon: h ? n(336632).Y : n(595453).arrowChevronSingleDownSmallIcon,
                                        size: "sm",
                                        colorVariant: "secondary"
                                    }),
                                    ignoreKeyboardMode: !0,
                                    focus: h,
                                    suppressFocusRing: !0,
                                    style: b.searchInput,
                                    inputStyle: r.searchInputElement
                                })
                            })
                        })
                    })]
                })
            }

            function s(e) {
                let t, a, {
                        intl: i,
                        recurrenceTrigger: r
                    } = e,
                    {
                        frequency: o,
                        interval: s
                    } = r,
                    d = "",
                    c = (() => {
                        if (void 0 !== r.start_date) return r.start_date;
                        let e = n(906745).DateTime.now().setZone(r.timezone);
                        return (0, n(943003).Nw)(e.year, e.month - 1, e.day)
                    })();
                if ("hour" === o) d = 1 === s ? i.formatMessage(l.summaryHourly) : i.formatMessage({
                    id: "workflows.recurrence.everyNHours",
                    defaultMessage: "Every {count} hours"
                }, {
                    count: s
                });
                else if ("day" === o) d = 1 === s ? i.formatMessage(l.summaryDaily) : i.formatMessage({
                    id: "workflows.recurrence.everyNDays",
                    defaultMessage: "Every {count} days"
                }, {
                    count: s
                });
                else if ("week" === o) {
                    let e = r.weekdays ? ? [];
                    if (1 === s && 5 === e.length && e.includes("MO") && e.includes("TU") && e.includes("WE") && e.includes("TH") && e.includes("FR")) d = i.formatMessage(l.summaryWeekdays);
                    else if (1 === s && e.length > 0) {
                        let n = e.map(e => (function(e, t) {
                            switch (t) {
                                case "MO":
                                    return e.formatMessage({
                                        id: "workflows.recurrence.monday",
                                        defaultMessage: "Monday"
                                    });
                                case "TU":
                                    return e.formatMessage({
                                        id: "workflows.recurrence.tuesday",
                                        defaultMessage: "Tuesday"
                                    });
                                case "WE":
                                    return e.formatMessage({
                                        id: "workflows.recurrence.wednesday",
                                        defaultMessage: "Wednesday"
                                    });
                                case "TH":
                                    return e.formatMessage({
                                        id: "workflows.recurrence.thursday",
                                        defaultMessage: "Thursday"
                                    });
                                case "FR":
                                    return e.formatMessage({
                                        id: "workflows.recurrence.friday",
                                        defaultMessage: "Friday"
                                    });
                                case "SA":
                                    return e.formatMessage({
                                        id: "workflows.recurrence.saturday",
                                        defaultMessage: "Saturday"
                                    });
                                case "SU":
                                    return e.formatMessage({
                                        id: "workflows.recurrence.sunday",
                                        defaultMessage: "Sunday"
                                    })
                            }
                        })(i, e)).filter(Boolean).join(", ");
                        d = i.formatMessage(l.summaryWeeklyOnDays, {
                            days: n
                        }), t = {
                            days: n
                        }
                    } else d = 1 === s ? i.formatMessage(l.summaryWeekly) : i.formatMessage({
                        id: "workflows.recurrence.everyNWeeks",
                        defaultMessage: "Every {count} weeks"
                    }, {
                        count: s
                    })
                } else if ("month" === o) {
                    if (d = 1 === s ? i.formatMessage(l.summaryMonthly) : i.formatMessage({
                            id: "workflows.recurrence.everyNMonths",
                            defaultMessage: "Every {count} months"
                        }, {
                            count: s
                        }), void 0 === r.monthly_restriction) {
                        let e = n(906745).DateTime.fromMillis(c).setZone("UTC").day,
                            t = i.locale.substring(0, 2),
                            r = (0, n(392599).o)(t, e, "d");
                        a = i.formatMessage(l.theOrdinalDayOfMonth, {
                            day: r
                        })
                    }
                } else if ("year" === o) {
                    d = 1 === s ? i.formatMessage(l.summaryYearly) : i.formatMessage({
                        id: "workflows.recurrence.everyNYears",
                        defaultMessage: "Every {count} years"
                    }, {
                        count: s
                    });
                    let e = n(906745).DateTime.fromMillis(c).setZone("UTC"),
                        t = new Date(2e3, e.month - 1, e.day);
                    a = i.formatDate(t, {
                        month: "short",
                        day: "numeric"
                    })
                }
                let u = "";
                if ("hour" !== o && void 0 !== r.hour && void 0 !== r.minute) {
                    let e = new Date(2e3, 0, 1, r.hour, r.minute),
                        t = 0 === r.minute ? i.formatTime(e, {
                            hour: "numeric"
                        }) : i.formatTime(e, {
                            hour: "numeric",
                            minute: "2-digit"
                        }),
                        n = i.formatMessage({
                            id: "workflows.recurrence.atTime",
                            defaultMessage: "at {time}"
                        }, {
                            time: t
                        });
                    u = ` ${n}`
                }
                return t ? {
                    kind: "weeklyOnDays",
                    schedule: d,
                    days: t.days,
                    atTime: u
                } : {
                    kind: "generic",
                    schedule: d,
                    onDate: a,
                    atTime: u
                }
            }
        },
        580171: (e, t, n) => {
            n.d(t, {
                j: () => l
            }), n(296540);
            var a = n(474848);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.95 1.94 12.11 12.1",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M10 7.45a.55.55 0 1 1 0 1.1H6a.55.55 0 1 1 0-1.1z"
                        }), (0, a.jsx)("path", {
                            d: "M8 1.95a6.05 6.05 0 1 1 0 12.1 6.05 6.05 0 0 1 0-12.1m0 1.1a4.95 4.95 0 1 0 0 9.9 4.95 4.95 0 0 0 0-9.9"
                        })]
                    })
                },
                l = (0, n(104509).wt)("minusCircleSmall", i, "small")
        },
        584278: (e, t, n) => {
            n.d(t, {
                R: () => l
            }), n(296540);
            var a = n(474848);
            let i = {
                container: {
                    marginTop: "auto",
                    position: "relative",
                    width: "100%",
                    borderTop: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`
                }
            };

            function l({
                children: e
            }) {
                return (0, a.jsx)("div", {
                    style: i.container,
                    children: e
                })
            }
        },
        591222: (e, t, n) => {
            n.d(t, {
                x: () => i
            });
            var a = () => n(546605);
            class i extends a().Store {
                getInitialState() {
                    return !1
                }
            }
        },
        639938: (e, t, n) => {
            n.d(t, {
                $: () => l,
                V: () => i
            }), n(581454);
            let a = (0, n(109939).YK)({
                permissionDeniedTooltip: {
                    id: "permissions.agentCreation.denied",
                    defaultMessage: "Contact a workspace owner to create agents"
                }
            });

            function i() {
                let e = (0, n(972740).L)(),
                    t = (0, n(876252).$)(),
                    a = (0, n(682985).K8)(() => !!(null == e ? void 0 : e.getZeroRetentionEnabled()), [e]),
                    i = (0, n(83208).X)("agent_creation_permissions"),
                    l = (0, n(83208).X)("custom_agents_allow_hipaa"),
                    r = (0, n(83208).X)("agent_creation_default_owners_only");
                return (0, n(682985).K8)(() => {
                    if (a && !l) return {
                        canCreate: !1,
                        reason: "feature_disabled"
                    };
                    if (!i) return {
                        canCreate: !0
                    };
                    let o = null == e ? void 0 : e.getModel(),
                        s = null == o ? void 0 : o.getSettings();
                    if (!e || !t || !o || !s) return {
                        canCreate: !1,
                        reason: "feature_disabled"
                    };
                    let d = (0, n(993077).dp)(e, t.id).getMembershipTypeAsRoleOrNone(),
                        c = n(68809).f.getSpacePermissionGroupIds({
                            spaceId: e.id
                        }),
                        u = (0, n(381453).oE)(Array.from(c).map(t => {
                            let a = (0, n(13717).E)({
                                spaceStore: e,
                                groupId: t
                            });
                            if (a) {
                                let e = a.getSettings();
                                return {
                                    settings: e ? {
                                        can_create_custom_agents: e.can_create_custom_agents
                                    } : void 0
                                }
                            }
                        })),
                        g = {
                            policy: s.custom_agent_creation_policy,
                            userRole: d && "none" !== d ? d : void 0,
                            userPermissionGroups: u,
                            isOwnersOnlyDefaultEnabled: r
                        };
                    return (0, n(322450).K)(g)
                }, [e, t, i, r, a, l])
            }

            function l() {
                let e = i(),
                    t = (0, n(109939).tz)().formatMessage(a.permissionDeniedTooltip);
                return {
                    canCreate: e.canCreate,
                    reason: e.reason,
                    tooltipMessage: t
                }
            }
        },
        667291: (e, t, n) => {
            function a(e) {
                let t = (0, n(109939).tz)();
                return (0, n(682985).K8)(() => {
                    let a = n(728372).AppStoreSidebarSpaceStore.state;
                    if (a && e) return n(807825).L.createChildStore(a, {
                        table: n(832375).oo9,
                        id: e
                    }).getDisplayName(t)
                }, [t, e])
            }

            function i() {
                let e = (0, n(109939).tz)();
                return (0, n(682985).K8)(() => {
                    let t = n(728372).AppStoreCurrentUserStore.state,
                        a = null != t && t.isDefined() ? t.getModel() : void 0;
                    return a ? a.getDisplayName(e) : void 0
                }, [e])
            }
            n.d(t, {
                L: () => i,
                y: () => a
            })
        },
        669370: (e, t, n) => {
            n.d(t, {
                M: () => i
            }), n(898992), n(737550);
            var a = n(296540);

            function i(e) {
                let {
                    isOpen: t,
                    items: n,
                    selectedId: i,
                    setSelectedId: l,
                    getItemId: r,
                    getDefaultId: o
                } = e;
                (0, a.useEffect)(() => {
                    if (!t) {
                        void 0 !== i && l(void 0);
                        return
                    }
                    if (void 0 !== i && n.some(e => r(e) === i)) return;
                    let e = o(n);
                    e !== i && l(e)
                }, [o, r, t, n, i, l])
            }
        },
        671968: (e, t, n) => {
            n.d(t, {
                q: () => r
            });
            var a = n(296540),
                i = n(474848);
            let l = {
                container: {
                    display: "flex",
                    height: "100%",
                    overflow: "hidden",
                    width: "100%",
                    flex: 1
                },
                searchInputContainer: {
                    display: "flex",
                    flex: 1,
                    alignItems: "center",
                    minWidth: 0
                },
                searchInput: {
                    width: "100%",
                    paddingInlineEnd: 4
                },
                searchInputInner: {
                    fontSize: 14,
                    lineHeight: "20px",
                    color: n(632079).Tj.text.primary
                },
                headerButton: {
                    marginInlineStart: 8,
                    marginInlineEnd: -6,
                    width: 28,
                    height: 28,
                    flexShrink: 0
                }
            };

            function r(e) {
                let {
                    isSinglePane: t,
                    title: r,
                    searchAriaLabel: o,
                    closeSearchAriaLabel: s,
                    searchPlaceholder: d,
                    leftPaneWidth: c,
                    headerPaddingInline: u = 20,
                    headerPaddingBlock: g = 14,
                    headerPaddingBlockStart: p,
                    headerPaddingBlockEnd: m,
                    leftPaneContent: f,
                    rightPaneContent: y,
                    paneRef: h
                } = e, v = (0, a.useRef)(null), [x, b] = (0, a.useState)(!1), [w, k] = (0, a.useState)(""), C = p ? ? g, j = m ? ? g, I = (0, n(960253).I)(() => ({
                    nav: {
                        width: c ? ? 252,
                        backgroundColor: n(632079).Tj.background.secondary,
                        borderInlineEndWidth: 1,
                        borderInlineEndStyle: "solid",
                        borderInlineEndColor: n(632079).Tj.border.secondary,
                        display: "flex",
                        flexDirection: "column"
                    },
                    header: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingInline: u,
                        paddingBlockStart: C,
                        paddingBlockEnd: j,
                        minHeight: 28,
                        boxSizing: "border-box"
                    }
                }), [u, c, j, C]), M = (0, a.useCallback)(() => {
                    if (x) {
                        b(!1), k("");
                        return
                    }
                    b(!0), k("")
                }, [x]), T = (0, a.useCallback)(() => {
                    x && (k(""), b(!1))
                }, [x]), S = (0, a.useCallback)(() => {
                    0 === w.trim().length && T()
                }, [T, w]);
                return (0, i.jsxs)("div", {
                    style: l.container,
                    children: [t ? void 0 : (0, i.jsxs)("div", {
                        style: I.nav,
                        children: [(0, i.jsxs)("div", {
                            style: I.header,
                            children: [(0, i.jsx)(n(4458).fI, {
                                alignItems: "center",
                                flex: 1,
                                minWidth: 0,
                                height: "100%",
                                children: (0, i.jsx)(n(203066).N, {
                                    mode: "wait",
                                    children: x ? (0, i.jsx)(n(153321).P.div, {
                                        initial: {
                                            opacity: 0,
                                            x: -8
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            x: -8
                                        },
                                        transition: {
                                            duration: .15
                                        },
                                        style: l.searchInputContainer,
                                        children: (0, i.jsx)(n(36481).p, {
                                            ref: v,
                                            format: "transparent",
                                            inputElementAttributes: {
                                                "aria-label": o
                                            },
                                            value: w,
                                            onChange: e => k(e.target.value),
                                            placeholder: d,
                                            showClearButton: !1,
                                            focusInitial: !0,
                                            focusAfterAnimation: !0,
                                            onBlur: S,
                                            onKeyDown: e => {
                                                "Escape" === e.key && T()
                                            },
                                            style: l.searchInput,
                                            inputStyle: l.searchInputInner
                                        })
                                    }, "search-input") : (0, i.jsx)(n(153321).P.div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: .15
                                        },
                                        children: r
                                    }, "title")
                                })
                            }), (0, i.jsx)(n(374533).A, {
                                icon: x ? n(25094).xMarkSmallIcon : n(921048).magnifyingGlassSmallIcon,
                                ariaLabel: x ? s : o,
                                onMouseDown: e => {
                                    x && e.preventDefault()
                                },
                                onClick: M,
                                size: "sm",
                                style: l.headerButton
                            })]
                        }), (0, i.jsx)(n(4458).VP, {
                            flex: 1,
                            minHeight: 0,
                            children: f({
                                searchQuery: w
                            })
                        })]
                    }), (0, i.jsx)(n(4458).VP, {
                        flex: 1,
                        minWidth: 0,
                        ref: h,
                        tabIndex: -1,
                        children: y
                    })]
                })
            }
        },
        684551: (e, t, n) => {
            n.d(t, {
                i: () => a
            });

            function a({
                module: e,
                store: t
            }) {
                let i = (0, n(682985).K8)(() => t.canEdit(), [t]),
                    l = t.table === n(43296).C,
                    {
                        canCurrentUserUpdateConnection: r,
                        createdByUser: o
                    } = (0, n(184170).x)({
                        module: e,
                        workflowStore: l ? t : void 0
                    }),
                    s = "notion" === e.type;
                return i && (s || r || !l || o === n(4962).rN) ? "read_and_write" : "reader"
            }
        },
        731770: (e, t, n) => {
            n.d(t, {
                v: () => a
            }), n(898992), n(354520), n(581454);

            function a(e) {
                var t;
                let {
                    workflowStore: a,
                    workflowValue: i,
                    showCurrentModules: l,
                    isCustomAgentContext: r
                } = e, o = (0, n(345776).T)(), s = (0, n(723240).r)(), d = (0, n(972740).L)(), c = (0, n(533992).v3)(), u = (0, n(482170).l)(null == i || null == (t = i.modules) ? void 0 : t.map(e => e.type));
                return (0, n(682985).K8)(() => {
                    let e = (0, n(922900).getWorkflowAgentConfig)({
                            environment: c,
                            isCustomAgent: !0,
                            workflowId: a.id
                        }),
                        t = (0, n(16712).Z0)({
                            workflowData: i
                        }),
                        g = { ...e,
                            ...(null == t ? void 0 : t.enableScriptAgent) !== void 0 && {
                                enableScriptAgent: t.enableScriptAgent
                            },
                            ...(null == t ? void 0 : t.enableScriptAgentAdvanced) !== void 0 && {
                                enableScriptAgentAdvanced: t.enableScriptAgentAdvanced
                            },
                            ...(null == t ? void 0 : t.enableScriptAgentSearchConnectorsInCustomAgent) !== void 0 && {
                                enableScriptAgentSearchConnectorsInCustomAgent: t.enableScriptAgentSearchConnectorsInCustomAgent
                            },
                            ...(null == t ? void 0 : t.enableScriptAgentGoogleDriveInCustomAgent) !== void 0 && {
                                enableScriptAgentGoogleDriveInCustomAgent: t.enableScriptAgentGoogleDriveInCustomAgent
                            },
                            ...(null == t ? void 0 : t.enableScriptAgentSlack) !== void 0 && {
                                enableScriptAgentSlack: t.enableScriptAgentSlack
                            },
                            ...(null == t ? void 0 : t.enableScriptAgentMcpServers) !== void 0 && {
                                enableScriptAgentMcpServers: t.enableScriptAgentMcpServers
                            },
                            ...(null == t ? void 0 : t.useComputer) !== void 0 && {
                                useComputer: t.useComputer
                            }
                        };
                    return (0, n(381453).oE)(n(957042).zP.map(e => {
                        let t = (0, n(593186).jK)(e);
                        if (!t || "calendar" === e && null != d && d.getSetting("disable_notion_calendar")) return;
                        let a = !0;
                        if (s) {
                            var i;
                            a = (null == t || null == (i = t.isAvailable) ? void 0 : i.call(t, {
                                experimentService: n(218744).default,
                                userId: o,
                                spaceId: s,
                                configStep: g,
                                isCustomAgentContext: r
                            })) ? ? !0
                        }
                        let c = n(255755).y[e];
                        return !l && (0, n(593186).sQ)(e) && null != u && u.includes(e) && (a = !1), {
                            type: e,
                            componentModule: c,
                            sharedModule: t,
                            available: a
                        }
                    }).filter(e => null == e ? void 0 : e.available))
                }, [o, d, s, u, l, a.id, r, i, c], {
                    equalityFn: n(795676).k
                })
            }
        },
        740158: (e, t, n) => {
            n.d(t, {
                $: () => i
            }), n(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "6.12 3.97 6.66 12.06",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6.308 9.558a.625.625 0 0 0 0 .884l5.4 5.4a.625.625 0 1 0 .884-.884L7.634 10l4.958-4.958a.625.625 0 1 0-.884-.884z"
                    })
                },
                i = (0, n(104509).wt)("arrowChevronSingleLeft", a, "default")
        },
        820997: (e, t, n) => {
            n.d(t, {
                D: () => i
            }), n(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.37 11.75 9.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4 3.375c-1.036 0-1.875.84-1.875 1.875v5.5c0 1.036.84 1.875 1.875 1.875h8c1.036 0 1.875-.84 1.875-1.875v-5.5c0-1.036-.84-1.875-1.875-1.875zm4 4.991L4.26 4.625h7.482zm-4.625 2.122v-4.98l2.49 2.49zm9.25 0-2.49-2.49 2.49-2.489zm-8.37.887 2.493-2.493.81.81c.244.244.64.244.884 0l.81-.81 2.492 2.493z"
                    })
                },
                i = (0, n(104509).wt)("envelopeSmall", a, "small")
        },
        866116: (e, t, n) => {
            n.d(t, {
                _: () => o
            });
            var a = n(296540),
                i = n(474848);
            let l = {
                    flex: 1,
                    minHeight: 0,
                    display: "flex",
                    flexDirection: "column"
                },
                r = {
                    flexShrink: 0
                };

            function o(e) {
                let {
                    children: t,
                    footer: o,
                    paddingInline: s,
                    paddingBlockStart: d,
                    paddingBlockEnd: c
                } = e, u = (0, a.useRef)(null), {
                    moreContentScrollerHintStyle: g,
                    onScrollForMoreContentScrollerHint: p
                } = (0, n(572779).j)(u), m = (0, a.useMemo)(() => ({ ...l,
                    ...g,
                    ...void 0 !== s ? {
                        paddingInline: s
                    } : void 0,
                    ...void 0 !== d ? {
                        paddingBlockStart: d
                    } : void 0,
                    ...void 0 !== c ? {
                        paddingBlockEnd: c
                    } : void 0
                }), [g, c, d, s]);
                return (0, i.jsxs)(n(4458).VP, {
                    flex: 1,
                    minHeight: 0,
                    children: [(0, i.jsx)(n(136508)._, {
                        type: n(644154).A.Y,
                        style: m,
                        onScroll: p,
                        ref: e => {
                            u.current = e
                        },
                        children: t
                    }), o ? (0, i.jsx)("div", {
                        style: r,
                        children: o
                    }) : void 0]
                })
            }
        },
        915397: (e, t, n) => {
            n.d(t, {
                l: () => eG,
                S: () => eq
            }), n(898992), n(672577), n(581454);
            var a = n(296540),
                i = () => n(445568);

            function l(e) {
                let t = e.state;
                if ((null == t ? void 0 : t.type) !== "slack.message" && (null == t ? void 0 : t.type) !== "slack.thread.created") return;
                let n = t.filters;
                return !!n && 0 !== n.filters.length && n.filters.some(e => "message.text.contains" === e.type && e.values.some(e => e.trim().length > 0))
            }
            n(737550);
            var r = () => n(548161),
                o = () => n(593186);

            function s(e) {
                let t = e.state;
                if (!(t && ("mail.email.received" === t.type || "mail.email.sent" === t.type || "mail.email.receivedorsent" === t.type) && 1)) return e;
                let n = t.filters;
                if (!n) return e;
                let a = n.filter(e => ! function(e) {
                    var t;
                    if ("is_empty" === (t = e.operator) || "is_not_empty" === t) return !1;
                    let n = e.value.value;
                    return void 0 === n || 0 === n.trim().length
                }(e));
                if (a.length === n.length) return e;
                let i = a.length > 0 ? { ...t,
                    filters: a
                } : { ...t,
                    filters: void 0
                };
                return { ...e,
                    state: i
                }
            }

            function d(e) {
                var t, a;
                let {
                    trigger: i,
                    workflowStore: l,
                    environment: r
                } = e, o = null == (t = i.state) ? void 0 : t.type;
                if (!(0, n(534066).b$)(o) || !i.moduleId) return;
                let s = l.getDraftData(),
                    d = null == s || null == (a = s.modules) ? void 0 : a.find(e => e.id === i.moduleId && "calendar" === e.type);
                if ((null == d ? void 0 : d.type) !== "calendar") return;
                let c = i.state,
                    u = c && "calendars" in c && Array.isArray(c.calendars) ? c.calendars : [];
                if (0 === u.length) return;
                let g = (0, n(534066).ZL)({
                    module: d,
                    triggerCalendars: u,
                    getCalendarData: e => {
                        let t = (0, n(440143).Y)().getCalendarsForAccount(e.accountId).find(t => t.id === e.calendarId);
                        if (!t) return;
                        let a = (0, n(440143).Y)().getCalendarProviderAccounts().find(t => t.id === e.accountId);
                        if (a) return {
                            calendar: (0, n(370484).LC)(t),
                            account: a
                        }
                    }
                });
                (0, n(677701).c)({
                    workflowStore: l,
                    module: g,
                    environment: r
                })
            }
            n(354520), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            var c = () => n(722371),
                u = () => n(255755),
                g = () => n(934558);
            let p = ["slack", "notion", "calendar", "mail", "linear", "github", "security"],
                m = {
                    modules: []
                };

            function f({
                width: e,
                height: t
            }) {
                return a.createElement(n(16275).I, {
                    icon: n(372365).clockSmallIcon,
                    size: Math.max(e, t)
                })
            }
            let y = (0, n(109939).YK)({
                    recurrenceLabel: {
                        id: "workflow.agent.triggers.nav.recurrenceLabel",
                        defaultMessage: "On a schedule"
                    },
                    slackMessage: {
                        id: "workflow.agent.triggers.nav.slack.message",
                        defaultMessage: "Message posted"
                    },
                    slackReaction: {
                        id: "workflow.agent.triggers.nav.slack.reaction",
                        defaultMessage: "Emoji reaction added"
                    },
                    slackThread: {
                        id: "workflow.agent.triggers.nav.slack.thread",
                        defaultMessage: "Thread started"
                    },
                    slackMention: {
                        id: "workflow.agent.triggers.nav.slack.mention",
                        defaultMessage: "Agent mentioned"
                    },
                    notionPageCreated: {
                        id: "workflow.agent.triggers.nav.notion.pageCreated",
                        defaultMessage: "Page added to database"
                    },
                    notionPageUpdated: {
                        id: "workflow.agent.triggers.nav.notion.pageUpdated",
                        defaultMessage: "Property updated in database"
                    },
                    notionPageDeleted: {
                        id: "workflow.agent.triggers.nav.notion.pageDeleted",
                        defaultMessage: "Page removed from database"
                    },
                    notionCommentAdded: {
                        id: "workflow.agent.triggers.nav.notion.commentAdded",
                        defaultMessage: "Comment added to page"
                    },
                    notionAgentMentioned: {
                        id: "workflow.agent.triggers.nav.notion.agentMentioned",
                        defaultMessage: "When agent is mentioned"
                    },
                    notionDatabaseAgentUpdated: {
                        id: "workflow.agent.triggers.nav.notion.databaseAgentUpdated",
                        defaultMessage: "Database agent updated"
                    },
                    notionButtonPressed: {
                        id: "workflow.agent.triggers.nav.notion.buttonPressed",
                        defaultMessage: "Button pressed"
                    },
                    calendarEventCreated: {
                        id: "workflow.agent.triggers.nav.calendar.eventCreated",
                        defaultMessage: "Event created"
                    },
                    calendarEventUpdated: {
                        id: "workflow.agent.triggers.nav.calendar.eventUpdated",
                        defaultMessage: "Event updated"
                    },
                    calendarEventCanceled: {
                        id: "workflow.agent.triggers.nav.calendar.eventCanceled",
                        defaultMessage: "Event canceled"
                    },
                    mailEmailReceived: {
                        id: "workflow.agent.triggers.nav.mail.emailReceived",
                        defaultMessage: "New email received"
                    },
                    mailEmailSent: {
                        id: "workflow.agent.triggers.nav.mail.emailSent",
                        defaultMessage: "New email sent"
                    },
                    mailEmailReceivedOrSent: {
                        id: "workflow.agent.triggers.nav.mail.emailReceivedOrSent",
                        defaultMessage: "New email received or sent"
                    },
                    mailLabelApplied: {
                        id: "workflow.agent.triggers.nav.mail.labelApplied",
                        defaultMessage: "Label applied to email"
                    },
                    securityThreatDetected: {
                        id: "workflow.agent.triggers.nav.security.threatDetected",
                        defaultMessage: "Threat detected"
                    }
                }),
                h = {
                    "slack.message": y.slackMessage,
                    "slack.reaction.added": y.slackReaction,
                    "slack.thread.created": y.slackThread,
                    "slack.app.mention": y.slackMention,
                    "notion.page.created": y.notionPageCreated,
                    "notion.page.updated": y.notionPageUpdated,
                    "notion.page.deleted": y.notionPageDeleted,
                    "notion.page.discussion.comment.added": y.notionCommentAdded,
                    "notion.agent.mentioned": y.notionAgentMentioned,
                    "notion.database.agent.updated": y.notionDatabaseAgentUpdated,
                    "notion.button.pressed": y.notionButtonPressed,
                    "calendar.event.created": y.calendarEventCreated,
                    "calendar.event.updated": y.calendarEventUpdated,
                    "calendar.event.canceled": y.calendarEventCanceled,
                    "mail.email.received": y.mailEmailReceived,
                    "mail.email.sent": y.mailEmailSent,
                    "mail.email.receivedorsent": y.mailEmailReceivedOrSent,
                    "mail.label.applied": y.mailLabelApplied,
                    "security.threat.detected": y.securityThreatDetected
                };
            var v = n(474848);
            let x = (0, n(109939).YK)({
                recurringHeader: {
                    id: "workflow.agent.triggers.nav.recurring.header",
                    defaultMessage: "Recurring"
                }
            });

            function b(e, t) {
                return !!e.name.toLowerCase().includes(t) || !!e.searchKeywords && e.searchKeywords.some(e => e.toLowerCase().includes(t))
            }
            let w = {
                    sectionHeader: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        paddingInline: 8,
                        paddingBlock: 6
                    },
                    integrationHeader: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        paddingInline: 8,
                        paddingBlock: 6
                    },
                    headerIconWrapper: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        flexShrink: 0
                    },
                    integrationIconInner: {
                        transform: "scale(0.85)"
                    },
                    supportedIcons: {
                        display: "flex",
                        alignItems: "center",
                        marginInlineStart: "auto"
                    },
                    supportedIconWrapper: {
                        width: 18,
                        height: 18,
                        borderRadius: 9,
                        backgroundColor: n(632079).Tj.background.primary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        boxShadow: `0 0 0 0.5px ${n(632079).Tj.border.secondary}`,
                        boxSizing: "border-box"
                    },
                    supportedIconOverlap: {
                        marginInlineStart: -6
                    },
                    item: {
                        display: "flex",
                        alignItems: "center",
                        height: 28,
                        marginInlineStart: 25,
                        paddingInlineStart: 8,
                        paddingInlineEnd: 8,
                        paddingBlock: 6,
                        borderRadius: 6
                    },
                    itemDisabled: {
                        opacity: .6
                    },
                    itemLabel: { ...n(699422).RC,
                        flex: 1,
                        minWidth: 0
                    },
                    itemSelected: {
                        background: n(632079).Tj.background.tertiary
                    },
                    itemHover: {
                        background: n(632079).Tj.background.secondaryTranslucent
                    }
                },
                k = (0, n(64960)._S)({
                    color: n(632079).Tj.background.tertiary
                }),
                C = (0, n(64960)._S)({
                    color: n(632079).Tj.background.secondaryTranslucent
                }),
                j = {
                    itemPressedSelected: {
                        background: k.pressed
                    },
                    itemPressedUnselected: {
                        background: C.pressed
                    }
                };

            function I(e) {
                let {
                    items: t,
                    selectedItem: i,
                    onSelect: l,
                    searchQuery: r
                } = e, s = (0, n(109939).tz)(), d = (0, a.useMemo)(() => t.filter(e => "recurring" === e.category), [t]), c = (0, a.useMemo)(() => {
                    let e = t.filter(e => "app" === e.category),
                        n = new Map;
                    for (let t of e) {
                        var a, i;
                        let e = n.get(t.moduleType);
                        if (e) {
                            e.items.push(t);
                            continue
                        }
                        let l = (0, o().jK)(t.moduleType),
                            r = (null == l || null == (a = l.getShortName) ? void 0 : a.call(l, s)) ? ? (null == l ? void 0 : l.getName(s)) ? ? t.moduleType;
                        n.set(t.moduleType, {
                            moduleType: t.moduleType,
                            moduleName: r,
                            icon: t.icon,
                            supportedIcons: (null == l || null == (i = l.getSupportedIcons) ? void 0 : i.call(l)) ? ? [],
                            items: [t]
                        })
                    }
                    return Array.from(n.values()).sort((e, t) => {
                        let n = p.indexOf(e.moduleType),
                            a = p.indexOf(t.moduleType),
                            i = -1 === n ? p.length : n,
                            l = -1 === a ? p.length : a;
                        return i !== l ? i - l : e.moduleName.localeCompare(t.moduleName)
                    })
                }, [s, t]), u = (0, a.useMemo)(() => {
                    let e = r.trim().toLowerCase();
                    return e ? {
                        recurring: d.filter(t => b(t, e)),
                        appGroups: c.map(t => t.moduleName.toLowerCase().includes(e) ? t : { ...t,
                            items: t.items.filter(t => b(t, e))
                        }).filter(e => e.items.length > 0)
                    } : {
                        recurring: d,
                        appGroups: c
                    }
                }, [c, d, r]), g = (0, a.useCallback)(e => {
                    e.disabledReason || l(e)
                }, [l]);
                return (0, v.jsx)(n(866116)._, {
                    paddingInline: 8,
                    paddingBlockStart: 8,
                    paddingBlockEnd: 8,
                    children: (0, v.jsxs)(n(4458).VP, {
                        flex: 1,
                        gap: 12,
                        children: [u.recurring.length > 0 ? (0, v.jsxs)("div", {
                            children: [(0, v.jsxs)("div", {
                                style: w.sectionHeader,
                                children: [(0, v.jsx)("span", {
                                    style: w.headerIconWrapper,
                                    children: (0, v.jsx)(n(16275).I, {
                                        icon: n(372365).clockSmallIcon,
                                        size: 16,
                                        colorVariant: "secondary"
                                    })
                                }), (0, v.jsx)(n(111010).D, {
                                    styleKey: "captionMedium",
                                    colorVariant: "secondary",
                                    children: s.formatMessage(x.recurringHeader)
                                })]
                            }), (0, v.jsx)(n(4458).VP, {
                                gap: 1,
                                children: u.recurring.map(e => (0, v.jsx)(M, {
                                    item: e,
                                    isSelected: (null == i ? void 0 : i.key) === e.key,
                                    onSelect: g,
                                    styles: { ...j,
                                        ...w
                                    }
                                }, e.key))
                            })]
                        }) : void 0, u.appGroups.length > 0 ? (0, v.jsx)(v.Fragment, {
                            children: u.appGroups.map(e => (0, v.jsxs)("div", {
                                children: [(0, v.jsxs)("div", {
                                    style: w.integrationHeader,
                                    children: [(0, v.jsx)("span", {
                                        style: w.headerIconWrapper,
                                        children: (0, v.jsx)("span", {
                                            style: w.integrationIconInner,
                                            children: a.createElement(e.icon, {
                                                width: 18,
                                                height: 18
                                            })
                                        })
                                    }), (0, v.jsx)(n(111010).D, {
                                        styleKey: "captionMedium",
                                        colorVariant: "secondary",
                                        children: e.moduleName
                                    }), e.supportedIcons.length > 0 ? (0, v.jsx)("span", {
                                        style: w.supportedIcons,
                                        children: e.supportedIcons.map((e, t) => (0, v.jsx)("span", {
                                            style: { ...w.supportedIconWrapper,
                                                ...t > 0 && w.supportedIconOverlap
                                            },
                                            children: (0, v.jsx)(e, {
                                                width: 12,
                                                height: 12
                                            })
                                        }, t))
                                    }) : void 0]
                                }), (0, v.jsx)(n(4458).VP, {
                                    gap: 1,
                                    children: e.items.map(e => (0, v.jsx)(M, {
                                        item: e,
                                        isSelected: (null == i ? void 0 : i.key) === e.key,
                                        onSelect: g,
                                        styles: { ...j,
                                            ...w
                                        }
                                    }, e.key))
                                })]
                            }, e.moduleType))
                        }) : void 0]
                    })
                })
            }

            function M(e) {
                let {
                    item: t,
                    isSelected: i,
                    onSelect: l,
                    styles: r
                } = e, o = !!t.disabledReason, s = (0, a.useCallback)(() => {
                    o || l(t)
                }, [o, t, l]), d = (0, v.jsx)(n(988022).p, {
                    size: "sm",
                    onClick: s,
                    disabled: o,
                    style: { ...r.item,
                        ...i ? r.itemSelected : void 0,
                        ...o ? r.itemDisabled : void 0
                    },
                    hoveredStyle: i || o ? void 0 : r.itemHover,
                    pressedStyle: o ? void 0 : i ? r.itemPressedSelected : r.itemPressedUnselected,
                    children: (0, v.jsx)("span", {
                        style: r.itemLabel,
                        children: (0, v.jsx)(n(111010).D, {
                            styleKey: "bodySmRegular",
                            colorVariant: "primary",
                            children: t.name
                        })
                    })
                });
                return t.disabledReason ? (0, v.jsx)(n(51831).m, {
                    placement: "right",
                    content: () => t.disabledReason,
                    children: e => (0, v.jsx)("span", { ...e,
                        children: d
                    })
                }) : d
            }
            let T = n.p + "c6f7192df1615f93.png",
                S = `color-mix(in srgb, ${n(632079).Tj.text.secondary} 50%, ${n(632079).Tj.text.primary} 50%)`,
                A = {
                    header: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 2,
                        cursor: "pointer",
                        userSelect: "none"
                    },
                    labelHovered: {
                        color: S
                    },
                    chevron: {
                        color: n(632079).Tj.text.secondary,
                        transition: "transform 180ms ease, color 180ms ease"
                    },
                    chevronCollapsed: {
                        transform: "rotate(-90deg)"
                    },
                    chevronHovered: {
                        color: S
                    },
                    body: {
                        overflow: "hidden"
                    }
                };

            function D(e) {
                let {
                    title: t,
                    defaultExpanded: i = !1,
                    children: l
                } = e, [r, o] = (0, a.useState)(i), [s, d] = (0, a.useState)(!1), c = (0, a.useCallback)(() => o(e => !e), []), u = (0, a.useCallback)(() => d(!0), []), g = (0, a.useCallback)(() => d(!1), []);
                return (0, v.jsxs)(n(4458).VP, {
                    gap: 8,
                    children: [(0, v.jsxs)("div", {
                        role: "button",
                        tabIndex: 0,
                        "aria-expanded": r,
                        onClick: c,
                        onKeyDown: e => {
                            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), c())
                        },
                        style: A.header,
                        onMouseEnter: u,
                        onMouseLeave: g,
                        children: [(0, v.jsx)(n(111010).D, {
                            styleKey: "caption",
                            colorVariant: "secondary",
                            children: (0, v.jsx)("span", {
                                style: s ? A.labelHovered : void 0,
                                children: t
                            })
                        }), (0, v.jsx)(n(16275).I, {
                            icon: n(595453).arrowChevronSingleDownSmallIcon,
                            size: "xxs",
                            style: { ...A.chevron,
                                ...!r && A.chevronCollapsed,
                                ...s && A.chevronHovered
                            }
                        })]
                    }), (0, v.jsx)(n(153321).P.div, {
                        initial: !1,
                        animate: r ? "visible" : "hidden",
                        variants: {
                            visible: {
                                height: "auto",
                                opacity: 1,
                                transition: {
                                    height: {
                                        type: "spring",
                                        duration: .25,
                                        bounce: 0
                                    },
                                    opacity: {
                                        duration: .1,
                                        delay: .1
                                    }
                                }
                            },
                            hidden: {
                                height: 0,
                                opacity: 0,
                                transition: {
                                    height: {
                                        type: "spring",
                                        duration: .25,
                                        bounce: 0,
                                        delay: .05
                                    },
                                    opacity: {
                                        duration: .1
                                    }
                                }
                            }
                        },
                        style: { ...A.body,
                            pointerEvents: r ? "auto" : "none"
                        },
                        children: (0, v.jsx)(n(4458).VP, {
                            gap: 12,
                            children: l
                        })
                    })]
                })
            }
            let P = (0, n(109939).YK)({
                    connectTitle: {
                        id: "workflow.agent.triggers.connect.connectTitle",
                        defaultMessage: "Connect {integration}"
                    },
                    connectDescription: {
                        id: "workflow.agent.triggers.connect.connectDescription",
                        defaultMessage: "Give your agent access to read and respond in {integration}."
                    },
                    connectDescriptionSlack: {
                        id: "workflow.agent.triggers.connect.connectDescriptionSlack",
                        defaultMessage: "Give your agent access to read and respond in channels."
                    },
                    connectDescriptionCalendar: {
                        id: "workflow.agent.triggers.connect.connectDescriptionCalendar",
                        defaultMessage: "Authorize access to enable your agent to interact with your calendar."
                    },
                    connectButton: {
                        id: "workflow.agent.triggers.connect.connectButton",
                        defaultMessage: "Connect"
                    },
                    slackChannelGeneral: {
                        id: "workflow.agent.triggers.connect.slackChannel.general",
                        defaultMessage: "general"
                    },
                    slackChannelDesign: {
                        id: "workflow.agent.triggers.connect.slackChannel.design",
                        defaultMessage: "design"
                    },
                    slackChannelSupport: {
                        id: "workflow.agent.triggers.connect.slackChannel.support",
                        defaultMessage: "support"
                    }
                }),
                E = {
                    card: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 0,
                        padding: 20,
                        position: "relative",
                        backgroundColor: n(632079).Tj.blue.background.secondaryTranslucent,
                        borderRadius: 8,
                        overflow: "hidden"
                    },
                    chipsContainer: {
                        pointerEvents: "none",
                        position: "absolute",
                        top: "50%",
                        insetInlineEnd: 16,
                        transform: "translateY(-50%)"
                    },
                    chipText: {
                        fontSize: 12,
                        lineHeight: "18px",
                        color: n(632079).Tj.text.secondary
                    },
                    chipIconWrapper: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 10,
                        height: 10,
                        flexShrink: 0
                    },
                    description: {
                        marginTop: 4
                    },
                    button: {
                        marginTop: 12
                    }
                };

            function R(e) {
                var t;
                let {
                    moduleType: a,
                    onConnect: i,
                    isConnectReady: l
                } = e, r = (0, n(109939).tz)(), s = (0, o().jK)(a), d = (null == s || null == (t = s.getShortName) ? void 0 : t.call(s, r)) ? ? (null == s ? void 0 : s.getName(r)) ? ? a, c = null == s ? void 0 : s.getIcon(), g = u().y[a], p = (0, n(682985).K8)(() => {
                    var e;
                    return null == g || null == (e = g.needsCustomConnect) ? void 0 : e.call(g)
                }, [g]), m = (0, n(960253).I)(() => ({
                    chip: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        paddingInline: 12,
                        paddingBlock: 4,
                        borderRadius: 999,
                        backgroundColor: n(632079).Tj.background.primary,
                        boxShadow: n(632079).Tj.shadow.outline.sm
                    },
                    content: {
                        position: "relative",
                        paddingInlineEnd: "slack" === a ? 96 : void 0
                    }
                }), [a]), f = [{
                    key: "general",
                    name: r.formatMessage(P.slackChannelGeneral),
                    translateX: -2,
                    marginInlineEnd: 8
                }, {
                    key: "design",
                    name: r.formatMessage(P.slackChannelDesign),
                    translateX: 1
                }, {
                    key: "support",
                    name: r.formatMessage(P.slackChannelSupport),
                    translateX: 0,
                    marginInlineEnd: 16
                }];
                return (0, v.jsxs)("div", {
                    style: E.card,
                    children: ["slack" === a ? (0, v.jsx)("div", {
                        style: E.chipsContainer,
                        "aria-hidden": !0,
                        children: (0, v.jsx)(n(4458).VP, {
                            alignItems: "flex-end",
                            gap: 8,
                            children: f.map(e => (0, v.jsxs)("div", {
                                style: { ...m.chip,
                                    transform: `translateX(${e.translateX}px)`,
                                    marginInlineEnd: e.marginInlineEnd
                                },
                                children: [(0, v.jsx)("span", {
                                    style: E.chipIconWrapper,
                                    children: c ? (0, v.jsx)(n(16275).I, {
                                        icon: c,
                                        size: 10
                                    }) : void 0
                                }), (0, v.jsx)("span", {
                                    style: E.chipText,
                                    children: e.name
                                })]
                            }, e.key))
                        })
                    }) : void 0, (0, v.jsxs)("div", {
                        style: m.content,
                        children: [(0, v.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            colorVariant: "primary",
                            children: (0, v.jsx)(n(109939).sA, { ...P.connectTitle,
                                values: {
                                    integration: d
                                }
                            })
                        }), (0, v.jsx)("div", {
                            style: E.description,
                            children: (0, v.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: "slack" === a ? (0, v.jsx)(n(109939).sA, { ...P.connectDescriptionSlack
                                }) : "calendar" === a ? (0, v.jsx)(n(109939).sA, { ...P.connectDescriptionCalendar
                                }) : (0, v.jsx)(n(109939).sA, { ...P.connectDescription,
                                    values: {
                                        integration: d
                                    }
                                })
                            })
                        }), (0, v.jsx)("div", {
                            style: E.button,
                            children: (0, v.jsx)(n(912946).A, {
                                colorPalette: "blue",
                                onClick: () => {
                                    p ? p.connectHandler() : i()
                                },
                                disabled: !l,
                                size: "sm",
                                ariaLabel: r.formatMessage(P.connectTitle, {
                                    integration: d
                                }),
                                children: p ? p.connectMessage : (0, v.jsx)(n(109939).sA, { ...P.connectButton
                                })
                            })
                        })]
                    })]
                })
            }
            let L = (0, n(109939).YK)({
                    selectCalendarsLabel: {
                        id: "workflow.agent.triggers.selectors.calendar.selectCalendarsLabel",
                        defaultMessage: "Calendars"
                    },
                    removeCalendarLabel: {
                        id: "workflow.agent.triggers.selectors.calendar.removeCalendarLabel",
                        defaultMessage: "Remove calendar"
                    },
                    noCalendars: {
                        id: "workflow.agent.triggers.selectors.calendar.noCalendars",
                        defaultMessage: "No calendars available"
                    },
                    selectedCalendarsCount: {
                        id: "workflow.agent.triggers.selectors.calendar.selectedCount",
                        defaultMessage: "{count, plural, one {# calendar selected} other {# calendars selected}}"
                    },
                    calendarFallbackName: {
                        id: "workflow.agent.triggers.selectors.calendar.fallbackName",
                        defaultMessage: "Calendar"
                    }
                }),
                V = { ...n(126828).M,
                    searchInputElement: { ...n(126828).M.searchInputElement,
                        cursor: "pointer"
                    },
                    searchIcon: {
                        marginInlineEnd: 4,
                        flexShrink: 0,
                        alignSelf: "center"
                    },
                    pill: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 2,
                        paddingInline: 6,
                        paddingBlock: 4,
                        borderRadius: 999,
                        backgroundColor: n(632079).Tj.background.tertiary
                    },
                    pillFallbackDot: {
                        width: 12,
                        height: 12,
                        borderRadius: 4,
                        backgroundColor: n(632079).Tj.background.secondaryTranslucent
                    },
                    menuList: {
                        maxHeight: 220,
                        overflowY: "auto",
                        paddingTop: 4,
                        paddingBottom: 4,
                        paddingInline: 0,
                        borderRadius: 8
                    },
                    sectionHeader: {
                        display: "flex",
                        alignItems: "center",
                        paddingInline: 12,
                        paddingBlockStart: 8,
                        paddingBlockEnd: 4
                    },
                    sectionHeaderText: { ...n(649316).U.caption,
                        color: n(632079).Tj.text.secondary,
                        lineHeight: "18px"
                    },
                    labelText: { ...n(649316).U.captionMedium,
                        color: n(632079).Tj.text.secondary,
                        lineHeight: "18px"
                    },
                    pillText: { ...n(649316).U.bodySm,
                        color: n(632079).Tj.text.primary,
                        lineHeight: "19.5px"
                    },
                    listItemContent: {
                        flex: 1,
                        minWidth: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }
                };

            function _(e) {
                let {
                    itemRef: t,
                    focused: i,
                    onClick: l,
                    onAuxClick: r,
                    onMouseEnter: o,
                    role: s,
                    calendar: d,
                    isSelected: c,
                    styles: u
                } = e, {
                    isMenuListFocusVisible: g
                } = a.useContext(n(842459).V);
                return (0, v.jsxs)(n(988022).p, {
                    ref: t,
                    role: s,
                    onMouseDown: e => {
                        e.preventDefault()
                    },
                    onClick: l,
                    onAuxClick: r,
                    onMouseEnter: o,
                    disallowTabbing: !0,
                    focused: i && g,
                    "aria-selected": c,
                    style: u.listItem,
                    iconTrailing: c ? {
                        icon: n(971730).checkmarkSmallIcon,
                        size: "sm",
                        colorVariant: "secondary"
                    } : void 0,
                    children: [(0, v.jsx)(n(738699).r, {
                        calendar: d,
                        size: 18
                    }), (0, v.jsx)("div", {
                        style: u.listItemContent,
                        children: (0, v.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            children: d.name
                        })
                    })]
                })
            }

            function B(e) {
                let {
                    selectedCalendars: t,
                    onSelectCalendars: i,
                    accounts: l,
                    calendars: r,
                    autoFocus: o = !0,
                    disabled: s = !1
                } = e, d = (0, n(482170).l)(t), c = (0, a.useMemo)(() => d ? ? [], [d]), u = (0, n(109939).tz)(), [g, p] = (0, n(739271).s)(), m = (0, a.useMemo)(() => ({ ...g.inputElementAttributes,
                    autoFocus: o,
                    readOnly: !0,
                    "aria-readonly": !0,
                    "aria-autocomplete": "none"
                }), [o, g.inputElementAttributes]), {
                    isInputFocused: f,
                    isInputHovered: y,
                    isListboxVisible: h,
                    inputRef: x,
                    originRef: b,
                    popupContentRef: w,
                    handleInputClick: k,
                    handleInputBlur: C,
                    handleInputFocus: j,
                    handleInputMouseEnter: I,
                    handleInputMouseLeave: M,
                    closeCombobox: T
                } = (0, n(39485).q)({
                    autoFocus: o,
                    inputComboboxProps: g,
                    openOnFocus: o
                }), S = (0, a.useMemo)(() => {
                    let e = new Map;
                    for (let t of r) e.set(F(t), t);
                    return e
                }, [r]), A = (0, a.useMemo)(() => new Set(c.map(H)), [c]), D = (0, a.useMemo)(() => c.map(e => {
                    let t = H(e),
                        n = S.get(t);
                    return {
                        reference: e,
                        name: (null == n ? void 0 : n.name) ? ? u.formatMessage(L.calendarFallbackName),
                        calendar: n
                    }
                }), [S, u, c]), P = (0, a.useMemo)(() => c.length > 0 ? u.formatMessage(L.selectedCalendarsCount, {
                    count: c.length
                }) : "", [u, c.length]), E = (0, a.useCallback)(e => {
                    if (s) return;
                    let t = F(e);
                    A.has(t) ? i(c.filter(t => t.accountId !== e.accountId || t.calendarId !== e.id)) : i([...c, {
                        accountId: e.accountId,
                        calendarId: e.id
                    }])
                }, [s, i, c, A]), R = (0, a.useCallback)(e => {
                    if (s) return;
                    let t = c.filter(t => t.accountId !== e.accountId || t.calendarId !== e.calendarId);
                    if (i(t), !t.length) {
                        var n;
                        null == (n = x.current) || n.focus()
                    }
                }, [s, i, c, x]), B = (0, a.useCallback)(() => {}, []), K = (0, n(960253).I)(() => ({
                    searchInput: {
                        height: 36,
                        borderRadius: 8,
                        border: `1.5px solid ${f?n(632079).Tj.blue.border.accentPrimary:y?n(632079).Tj.border.primary:n(632079).Tj.border.secondaryTranslucent}`,
                        boxShadow: f ? `0 0 0 3px ${n(632079).Tj.blue.border.primaryTranslucent}` : "none",
                        paddingInline: 8,
                        paddingBlock: 4,
                        lineHeight: "21px",
                        backgroundColor: n(632079).Tj.background.primary,
                        cursor: "pointer"
                    }
                }), [f, y]), z = (0, a.useMemo)(() => {
                    let e = [];
                    for (let t of l) {
                        let n = r.filter(e => e.accountId === t.id);
                        if (0 === n.length) continue;
                        let a = t.displayName || t.email || t.id;
                        e.push({
                            key: t.id,
                            render: e => (0, v.jsxs)("div", {
                                children: [(0, v.jsx)("div", {
                                    style: V.sectionHeader,
                                    children: (0, v.jsx)("div", {
                                        style: V.sectionHeaderText,
                                        children: a
                                    })
                                }), e.children]
                            }),
                            items: n.map(e => ({
                                key: F(e),
                                action: () => E(e),
                                render: ({
                                    ref: t,
                                    ...n
                                }) => (0, v.jsx)(_, { ...n,
                                    itemRef: t,
                                    calendar: e,
                                    isSelected: A.has(F(e)),
                                    styles: V
                                })
                            }))
                        })
                    }
                    return e
                }, [l, r, E, A]), W = 0 === z.length || 0 === r.length;
                return (0, v.jsx)(n(331094).P, {
                    disabled: s,
                    label: (0, v.jsx)("div", {
                        style: V.labelText,
                        children: (0, v.jsx)(n(109939).sA, { ...L.selectCalendarsLabel
                        })
                    }),
                    placeholder: u.$t(L.selectCalendarsLabel),
                    value: P,
                    onChange: B,
                    onFocus: j,
                    onBlur: C,
                    onClick: k,
                    onMouseDown: k,
                    inputRef: x,
                    inputElementAttributes: m,
                    left: (0, n(227946).notionCalendarIcon)({
                        width: 18,
                        height: 18
                    }),
                    right: (0, v.jsx)(n(16275).I, {
                        icon: n(595453).arrowChevronSingleDownSmallIcon,
                        size: "sm",
                        colorVariant: "secondary"
                    }),
                    autoFocus: o && !s,
                    isListboxVisible: h,
                    closeCombobox: T,
                    originRef: b,
                    popupContentRef: w,
                    onMouseEnter: I,
                    onMouseLeave: M,
                    listboxMaxWidth: 264,
                    styles: {
                        container: V.container,
                        label: V.label,
                        inputWrapper: V.inputWrapper,
                        searchContainer: V.searchContainer,
                        searchInput: K.searchInput,
                        searchInputElement: V.searchInputElement,
                        listboxContainer: V.listboxContainer
                    },
                    footer: D.length > 0 ? (0, v.jsx)("div", {
                        style: V.selectedPills,
                        children: D.map(e => (0, v.jsxs)("div", {
                            style: V.pill,
                            children: [(0, v.jsx)(n(4458).fI, {
                                alignItems: "center",
                                children: e.calendar ? (0, v.jsx)(n(738699).r, {
                                    calendar: e.calendar,
                                    size: 16,
                                    parentBackgroundColor: n(632079).Tj.background.tertiary
                                }) : (0, v.jsx)("span", {
                                    style: V.pillFallbackDot
                                })
                            }), (0, v.jsx)("div", {
                                style: V.pillText,
                                children: e.name
                            }), (0, v.jsx)(n(374533).A, {
                                ariaLabel: u.formatMessage(L.removeCalendarLabel),
                                icon: n(25094).xMarkSmallIcon,
                                size: "xxs",
                                shape: "pill",
                                colorVariant: "tertiary",
                                onClick: () => R(e.reference),
                                disabled: s,
                                style: V.pillCloseButton,
                                hoveredStyle: V.pillCloseHovered
                            })]
                        }, H(e.reference)))
                    }) : void 0,
                    children: W ? (0, v.jsx)("div", {
                        style: V.emptyState,
                        children: (0, v.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "tertiary",
                            children: (0, v.jsx)(n(109939).sA, { ...L.noCalendars
                            })
                        })
                    }) : (0, v.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        role: "listbox",
                        sections: z,
                        comboboxProps: p,
                        style: V.menuList,
                        initialFocus: 0
                    })
                })
            }

            function H(e) {
                return `${e.accountId}:${e.calendarId}`
            }

            function F(e) {
                return H({
                    accountId: e.accountId,
                    calendarId: e.id
                })
            }
            let K = (0, n(109939).YK)({
                    filters: {
                        id: "workflow.agent.triggers.selectors.calendar.filters",
                        defaultMessage: "Filters"
                    }
                }),
                z = {
                    filterLabelText: { ...n(649316).U.captionMedium,
                        ...n(126828).M.labelText
                    },
                    positionRelative: {
                        position: "relative"
                    }
                };

            function W(e) {
                var t;
                let {
                    trigger: i,
                    saveTrigger: l,
                    moduleValue: r,
                    disabled: s = !1,
                    autoFocus: d = !0
                } = e, c = (0, n(109939).tz)(), u = (null == r ? void 0 : r.type) === "calendar" ? r : void 0, g = (0, n(678268).k)({
                    module: u,
                    userHasEditAccess: !0
                }), p = (0, a.useMemo)(() => [...g.enabledAccounts, ...g.disconnectedAccounts], [g]), m = (0, n(427922).A)({
                    accountIds: p.map(e => e.id),
                    module: u,
                    userHasEditAccess: !0,
                    bypassSnapshot: !0
                }), f = (0, a.useMemo)(() => (0, n(427922).i)(m), [m]), y = (0, a.useMemo)(() => {
                    let e = i.state;
                    if ((null == e ? void 0 : e.type) === "calendar.event.created" || (null == e ? void 0 : e.type) === "calendar.event.updated" || (null == e ? void 0 : e.type) === "calendar.event.canceled") return e
                }, [i.state]), h = (0, a.useCallback)(e => {
                    !s && y && l({ ...i,
                        state: { ...y,
                            calendars: e
                        }
                    })
                }, [s, l, i, y]), x = (0, a.useCallback)(e => {
                    !s && y && l({ ...i,
                        state: { ...y,
                            filter: e
                        }
                    })
                }, [s, l, i, y]), [b, w] = (0, a.useState)(!1), k = (0, a.useCallback)(() => {
                    w(!0)
                }, []), C = (0, a.useMemo)(() => {
                    var e;
                    let t = (0, o().jK)("calendar");
                    return {
                        id: "calendar",
                        type: "module",
                        name: (null == t ? void 0 : t.getName(c)) ? ? "Calendar",
                        shortName: null == t || null == (e = t.getShortName) ? void 0 : e.call(t, c),
                        iconVariant: "standard",
                        moduleType: "calendar"
                    }
                }, [c]);
                return y ? p.length ? (0, v.jsxs)(n(4458).VP, {
                    gap: 24,
                    className: "autolayout-fill-width",
                    style: z.positionRelative,
                    children: [(0, v.jsx)(B, {
                        selectedCalendars: y.calendars,
                        onSelectCalendars: h,
                        accounts: p,
                        calendars: f,
                        autoFocus: d,
                        disabled: s
                    }), (null == y || null == (t = y.calendars) ? void 0 : t.length) ? (0, v.jsxs)(n(4458).VP, {
                        gap: 8,
                        paddingBlock: 2,
                        paddingInline: 4,
                        style: z.positionRelative,
                        children: [(0, v.jsx)("div", {
                            style: z.filterLabelText,
                            children: (0, v.jsx)(n(109939).sA, { ...K.filters
                            })
                        }), (0, v.jsx)(n(113646).n, {
                            triggerType: y.type,
                            filter: y.filter,
                            onFilterChange: x
                        })]
                    }) : void 0]
                }) : (0, v.jsxs)(v.Fragment, {
                    children: [b ? (0, v.jsx)(n(360709).c, {
                        connection: C,
                        onCancel: () => w(!1),
                        hideFooter: !0
                    }) : (0, v.jsx)(R, {
                        moduleType: "calendar",
                        onConnect: k,
                        isConnectReady: !s
                    }), (0, v.jsx)(n(364e3).q, {
                        from: "agentCalendarTrigger",
                        isOpen: b,
                        onDismiss: () => w(!1)
                    })]
                }) : null
            }
            let N = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.37 11.75 9.25",
                    svg: (0, v.jsxs)(v.Fragment, {
                        children: [(0, v.jsx)("path", {
                            d: "M10.625 5.384a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6m-6.037.004a.513.513 0 0 0 0 1.025h2.625a.512.512 0 0 0 0-1.025zm0 1.574a.513.513 0 0 0 0 1.025H5.9a.512.512 0 0 0 0-1.025z"
                        }), (0, v.jsx)("path", {
                            d: "M4 3.375c-1.036 0-1.875.84-1.875 1.875v5.5c0 1.036.84 1.875 1.875 1.875h8c1.036 0 1.875-.84 1.875-1.875v-5.5c0-1.036-.84-1.875-1.875-1.875zM3.375 5.25c0-.345.28-.625.625-.625h8c.345 0 .625.28.625.625v5.5c0 .345-.28.625-.625.625H4a.625.625 0 0 1-.625-.625z"
                        })]
                    })
                },
                O = (0, n(104509).wt)("mailSmall", N, "small"),
                U = (0, n(109939).YK)({
                    emailAddressesLabel: {
                        id: "workflow.agent.triggers.selectors.mail.emailAddressesLabel",
                        defaultMessage: "Email addresses"
                    },
                    selectInbox: {
                        id: "workflow.agent.triggers.selectors.mail.selectInbox",
                        defaultMessage: "Select inbox"
                    },
                    selectedInboxesCount: {
                        id: "workflow.agent.triggers.selectors.mail.selectedInboxesCount",
                        defaultMessage: "{count, plural, one {# inbox selected} other {# inboxes selected}}"
                    },
                    noInboxes: {
                        id: "workflow.agent.triggers.selectors.mail.noInboxes",
                        defaultMessage: "No inboxes available"
                    },
                    loadInboxesError: {
                        id: "workflow.agent.triggers.selectors.mail.loadInboxesError",
                        defaultMessage: "Failed to load inboxes"
                    },
                    removeInboxLabel: {
                        id: "workflow.agent.triggers.selectors.mail.removeInboxLabel",
                        defaultMessage: "Remove inbox"
                    },
                    connectError: {
                        id: "workflow.agent.triggers.selectors.mail.connectError",
                        defaultMessage: "Failed to connect. Please try again."
                    },
                    inboxFallbackName: {
                        id: "workflow.agent.triggers.selectors.mail.inboxFallbackName",
                        defaultMessage: "Inbox"
                    },
                    filtersLabel: {
                        id: "workflow.agent.triggers.selectors.mail.filtersLabel",
                        defaultMessage: "Filters"
                    },
                    inboxOnlyLabel: {
                        id: "workflow.agent.triggers.selectors.mail.inboxOnlyLabel",
                        defaultMessage: "Only run on emails in Inbox"
                    },
                    inboxOnlyTooltip: {
                        id: "workflow.agent.triggers.selectors.mail.inboxOnlyTooltip",
                        defaultMessage: "Agent will not run on emails that skip your inbox, such as promotional or social updates, or emails matching custom filters. You can adjust what skips your inbox via custom rules in your email settings."
                    }
                }),
                $ = { ...n(126828).M,
                    searchInputElement: { ...n(126828).M.searchInputElement,
                        cursor: "pointer"
                    },
                    pill: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        paddingInlineStart: 6,
                        paddingInlineEnd: 4,
                        paddingBlock: 4,
                        borderRadius: 999,
                        backgroundColor: n(632079).Tj.blue.background.secondaryTranslucent
                    },
                    pillIcon: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 18,
                        height: 18,
                        borderRadius: 5
                    },
                    menuList: {
                        maxHeight: 240,
                        overflowY: "auto",
                        padding: 4,
                        borderRadius: 8
                    },
                    listItemContent: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        flex: 1,
                        minWidth: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    },
                    listItemText: { ...n(649316).U.bodySm,
                        color: n(632079).Tj.text.primary,
                        lineHeight: "18px"
                    },
                    listItemSubtitle: { ...n(649316).U.caption,
                        color: n(632079).Tj.text.secondary,
                        lineHeight: "16px"
                    },
                    listItemIcon: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        borderRadius: 4,
                        backgroundColor: n(632079).Tj.blue.background.secondaryTranslucent,
                        flexShrink: 0
                    },
                    listItemCheck: {
                        flexShrink: 0
                    },
                    labelText: { ...n(649316).U.caption,
                        color: n(632079).Tj.text.secondary,
                        lineHeight: "18px"
                    },
                    pillText: { ...n(649316).U.bodySm,
                        color: n(632079).Tj.text.primary,
                        lineHeight: "19.5px"
                    },
                    inboxOnlyToggleWrapper: {
                        height: 36,
                        borderRadius: 8,
                        border: `1.5px solid ${n(632079).Tj.border.secondary}`,
                        paddingInline: 8,
                        paddingBlock: 4,
                        backgroundColor: n(632079).Tj.background.primary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }
                },
                Y = {
                    style0: {
                        color: n(632079).Tj.blue.icon.accentPrimary
                    }
                };

            function G(e) {
                let {
                    itemRef: t,
                    focused: i,
                    onClick: l,
                    onAuxClick: r,
                    onMouseEnter: o,
                    role: s,
                    email: d,
                    displayName: c,
                    isSelected: u,
                    styles: g
                } = e, {
                    isMenuListFocusVisible: p
                } = a.useContext(n(842459).V);
                return (0, v.jsx)("div", {
                    role: "none",
                    children: (0, v.jsxs)(n(988022).p, {
                        ref: t,
                        role: s,
                        onClick: l,
                        onAuxClick: r,
                        onMouseEnter: o,
                        disallowTabbing: !0,
                        focused: i && p,
                        style: g.listItem,
                        iconTrailing: u ? {
                            icon: n(971730).checkmarkSmallIcon,
                            size: "sm",
                            colorVariant: "secondary",
                            style: g.listItemCheck
                        } : void 0,
                        children: [(0, v.jsx)("div", {
                            style: g.listItemIcon,
                            children: (0, v.jsx)(n(16275).I, {
                                icon: O,
                                size: "xs",
                                style: Y.style0
                            })
                        }), (0, v.jsxs)("div", {
                            style: g.listItemContent,
                            children: [(0, v.jsx)("div", {
                                style: g.listItemText,
                                children: d
                            }), (0, v.jsx)("div", {
                                style: g.listItemSubtitle,
                                children: c
                            })]
                        })]
                    })
                })
            }
            let q = {
                style0: {
                    color: n(632079).Tj.blue.icon.accentPrimary
                }
            };

            function X(e) {
                var t, i;
                let {
                    workflowStore: l,
                    workflowValue: r,
                    workflowDefinitionPointer: s,
                    trigger: d,
                    saveTrigger: c,
                    moduleValue: u,
                    disabled: g = !1,
                    autoFocus: p = !0
                } = e, m = (0, n(109939).tz)(), f = (0, n(533992).v3)(), [y, h] = (0, a.useState)(!1), x = (0, a.useRef)(!1), b = (0, a.useMemo)(() => {
                    var e;
                    let t = (0, o().jK)("mail");
                    return {
                        id: "mail",
                        type: "module",
                        name: (null == t ? void 0 : t.getName(m)) ? ? "Mail",
                        shortName: null == t || null == (e = t.getShortName) ? void 0 : e.call(t, m),
                        iconVariant: "standard",
                        moduleType: "mail"
                    }
                }, [m]), w = (0, a.useMemo)(() => {
                    let e = d.state;
                    if ((0, n(394205).ze)(e)) return e
                }, [d.state]), k = !!w, C = null == (t = r.modules) ? void 0 : t.find(e => e.id === d.moduleId && "mail" === e.type), j = (null == u ? void 0 : u.type) === "mail" ? u : void 0, I = C ? ? j, M = !!((null == I ? void 0 : I.type) === "mail" && (null == (i = I.state) ? void 0 : i.connectionPointer));
                (0, a.useEffect)(() => {
                    g || w && !d.moduleId && null != I && I.id && c({ ...d,
                        moduleId: I.id
                    })
                }, [g, null == I ? void 0 : I.id, c, d, w]), (0, n(139979).vb)({
                    mailModule: (null == I ? void 0 : I.type) === "mail" ? I : void 0,
                    workflowDefinitionPointer: s,
                    environment: f,
                    workflowStore: l
                });
                let {
                    emailAddresses: T,
                    isLoading: S,
                    error: A
                } = (0, n(603438).d)(s, {
                    enabled: M
                }), D = (0, a.useMemo)(() => {
                    var e;
                    return function(e) {
                        let {
                            fetchedEmailAddresses: t,
                            moduleEmailAddresses: n
                        } = e;
                        return t.length > 0 ? t : n.map(e => ({ ...e,
                            isDefault: !1
                        }))
                    }({
                        fetchedEmailAddresses: T,
                        moduleEmailAddresses: (null == I ? void 0 : I.type) === "mail" ? (null == (e = I.state) ? void 0 : e.emailAddresses) ? ? [] : []
                    })
                }, [T, I]), P = (0, a.useMemo)(() => [...D].sort((e, t) => e.isDefault !== t.isDefault ? e.isDefault ? -1 : 1 : e.email.localeCompare(t.email)), [D]), E = (0, a.useMemo)(() => (null == w ? void 0 : w.emailAccountIds) ? ? [], [null == w ? void 0 : w.emailAccountIds]), L = (0, a.useMemo)(() => E.map(e => {
                    var t;
                    let n = D.find(t => t.emailAccountId === e),
                        a = null == w || null == (t = w.emailAccountDisplayInfo) ? void 0 : t[e];
                    return {
                        emailAccountId: e,
                        email: (null == n ? void 0 : n.email) ? ? a ? ? m.formatMessage(U.inboxFallbackName)
                    }
                }), [D, m, E, w]), V = (0, a.useMemo)(() => E.length > 0 ? m.formatMessage(U.selectedInboxesCount, {
                    count: E.length
                }) : A ? m.formatMessage(U.loadInboxesError) : 0 === P.length ? m.formatMessage(U.noInboxes) : m.formatMessage(U.selectInbox), [A, m, E.length, P]), _ = (0, a.useCallback)(e => {
                    if (g) return;
                    let t = (0, n(139979).k4)({
                        emailAccountIds: e,
                        allEmailAddresses: D
                    });
                    w && c({ ...d,
                        state: { ...w,
                            type: w.type,
                            emailAccountIds: e.length > 0 ? e : void 0,
                            emailAccountDisplayInfo: Object.keys(t).length > 0 ? t : w.emailAccountDisplayInfo
                        }
                    })
                }, [D, g, c, d, w]), B = (0, a.useCallback)(e => {
                    _(E.includes(e) ? E.filter(t => t !== e) : [...E, e])
                }, [_, E]), H = (0, a.useCallback)(e => {
                    E.includes(e) && _(E.filter(t => t !== e))
                }, [_, E]), F = (0, a.useCallback)(e => {
                    g || ((null == w ? void 0 : w.type) === "mail.email.received" || (null == w ? void 0 : w.type) === "mail.email.sent" || (null == w ? void 0 : w.type) === "mail.email.receivedorsent") && c({ ...d,
                        state: { ...w,
                            filters: e
                        }
                    })
                }, [g, c, d, w]), K = (0, a.useCallback)(e => {
                    g || ((null == w ? void 0 : w.type) === "mail.email.received" || (null == w ? void 0 : w.type) === "mail.email.receivedorsent") && c({ ...d,
                        state: { ...w,
                            inboxOnly: e || void 0
                        }
                    })
                }, [g, c, d, w]), z = (0, a.useCallback)(e => {
                    g || (null == w ? void 0 : w.type) === "mail.label.applied" && c({ ...d,
                        state: { ...w,
                            labelNames: e.length > 0 ? e : void 0
                        }
                    })
                }, [g, c, d, w]), W = (0, a.useCallback)(async () => {
                    if (g || x.current || !w) return;
                    x.current = !0;
                    let e = async () => {
                        x.current || (x.current = !0), h(!0);
                        try {
                            let e = await (0, n(988755).k)({
                                workflowStore: l,
                                environment: f,
                                intl: m,
                                selection: {
                                    triggerType: w.type,
                                    moduleType: "mail",
                                    moduleValue: I
                                }
                            });
                            if (!e) return void n(819652).Iz({
                                message: m.formatMessage(U.connectError),
                                icon: n(966559).exclamationMarkCircleSmallIcon,
                                variant: "error",
                                presentationType: "transient"
                            });
                            let t = e.module,
                                a = (0, n(646440).getWorkflowIdFromStore)(l);
                            a && (0, n(599231).gn)({
                                environment: f,
                                tool: "mail",
                                workflowId: a
                            }), d.moduleId !== t.id && c({ ...d,
                                moduleId: t.id
                            })
                        } finally {
                            x.current = !1, h(!1)
                        }
                    };
                    if (!await (0, n(81603).ensureNotionMailAccountOrTriggerOnboarding)({
                            environment: f,
                            onConfirm: () => {
                                e()
                            }
                        })) {
                        x.current = !1;
                        return
                    }
                    await e()
                }, [g, f, m, I, c, d, w, l]), [N, Y] = (0, n(739271).s)(), X = (0, a.useMemo)(() => ({ ...N.inputElementAttributes,
                    autoFocus: p,
                    readOnly: !0,
                    "aria-readonly": !0,
                    "aria-autocomplete": "none"
                }), [p, N.inputElementAttributes]), Z = p && !g && !S && !A && 0 === E.length && P.length > 0, {
                    isInputFocused: J,
                    isInputHovered: Q,
                    isListboxVisible: ee,
                    inputRef: et,
                    originRef: en,
                    popupContentRef: ea,
                    handleInputClick: ei,
                    handleInputBlur: el,
                    handleInputFocus: er,
                    handleInputMouseEnter: eo,
                    handleInputMouseLeave: es,
                    closeCombobox: ed
                } = (0, n(39485).q)({
                    autoFocus: p,
                    inputComboboxProps: N,
                    openOnFocus: p && Z
                });
                (0, a.useEffect)(() => {
                    Z && !ee && ei()
                }, [ei, ee, Z]);
                let ec = (0, n(960253).I)(() => ({
                        searchInput: {
                            height: 36,
                            borderRadius: 8,
                            border: `1.5px solid ${J?n(632079).Tj.blue.border.accentPrimary:Q?n(632079).Tj.border.primary:n(632079).Tj.border.secondaryTranslucent}`,
                            boxShadow: J ? `0 0 0 3px ${n(632079).Tj.blue.border.primaryTranslucent}` : "none",
                            paddingInline: 8,
                            paddingBlock: 4,
                            lineHeight: "21px",
                            backgroundColor: n(632079).Tj.background.primary,
                            cursor: "pointer"
                        }
                    }), [J, Q]),
                    eu = S || y,
                    eg = !eu && !!A,
                    ep = !eu && !eg && 0 === P.length;
                if (!k || !w) return null;
                if (!M) return y ? (0, v.jsx)(n(360709).c, {
                    connection: b,
                    hideFooter: !0
                }) : (0, v.jsx)(R, {
                    moduleType: "mail",
                    onConnect: W,
                    isConnectReady: !g
                });
                let em = E.map(e => {
                        let t = D.find(t => t.emailAccountId === e);
                        return null == t ? void 0 : t.email
                    }).filter(e => !!e),
                    ef = "mail.label.applied" === w.type;
                return (0, v.jsxs)("div", {
                    style: $.container,
                    children: [(0, v.jsx)(n(331094).P, {
                        disabled: g,
                        label: (0, v.jsx)("div", {
                            style: $.labelText,
                            children: (0, v.jsx)(n(109939).sA, { ...U.emailAddressesLabel
                            })
                        }),
                        placeholder: "",
                        value: V,
                        onChange: () => {},
                        onFocus: er,
                        onBlur: el,
                        onClick: ei,
                        onMouseDown: ei,
                        inputRef: et,
                        inputElementAttributes: X,
                        left: (0, n(441443).notionMailIcon)({
                            width: 18,
                            height: 18
                        }),
                        right: (0, v.jsx)(n(16275).I, {
                            icon: n(595453).arrowChevronSingleDownSmallIcon,
                            size: "sm",
                            colorVariant: "secondary"
                        }),
                        autoFocus: p && !g,
                        isListboxVisible: ee,
                        closeCombobox: ed,
                        originRef: en,
                        popupContentRef: ea,
                        onMouseEnter: eo,
                        onMouseLeave: es,
                        listboxMaxWidth: 264,
                        styles: {
                            container: $.container,
                            label: $.label,
                            inputWrapper: $.inputWrapper,
                            searchContainer: $.searchContainer,
                            searchInput: ec.searchInput,
                            searchInputElement: $.searchInputElement,
                            listboxContainer: $.listboxContainer
                        },
                        footer: L.length > 0 ? (0, v.jsx)("div", {
                            style: $.selectedPills,
                            children: L.map(e => (0, v.jsxs)("div", {
                                style: $.pill,
                                children: [(0, v.jsx)("div", {
                                    style: $.pillIcon,
                                    children: (0, v.jsx)(n(16275).I, {
                                        icon: O,
                                        size: "xs",
                                        style: q.style0
                                    })
                                }), (0, v.jsx)("div", {
                                    style: $.pillText,
                                    children: e.email
                                }), (0, v.jsx)(n(374533).A, {
                                    icon: n(25094).xMarkSmallIcon,
                                    size: "xxs",
                                    shape: "pill",
                                    colorVariant: "tertiary",
                                    style: $.pillCloseButton,
                                    hoveredStyle: $.pillCloseHovered,
                                    onClick: () => H(e.emailAccountId),
                                    ariaLabel: m.formatMessage(U.removeInboxLabel),
                                    disabled: g
                                })]
                            }, e.emailAccountId))
                        }) : void 0,
                        children: eu ? (0, v.jsx)("div", {
                            style: $.loadingState,
                            children: (0, v.jsx)(n(517334).k, {
                                size: "sm"
                            })
                        }) : eg ? (0, v.jsx)("div", {
                            style: $.emptyState,
                            children: (0, v.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "tertiary",
                                children: (0, v.jsx)(n(109939).sA, { ...U.loadInboxesError
                                })
                            })
                        }) : ep ? (0, v.jsx)("div", {
                            style: $.emptyState,
                            children: (0, v.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "tertiary",
                                children: (0, v.jsx)(n(109939).sA, { ...U.noInboxes
                                })
                            })
                        }) : (0, v.jsx)(n(558045).A, {
                            type: n(558045).O.Vertical,
                            role: "listbox",
                            sections: [{
                                key: "emails",
                                render: e => (0, v.jsx)("div", {
                                    children: e.children
                                }),
                                items: P.map(e => ({
                                    key: e.emailAccountId,
                                    action: () => B(e.emailAccountId),
                                    render: ({
                                        ref: t,
                                        ...n
                                    }) => (0, v.jsx)(G, { ...n,
                                        itemRef: t,
                                        email: e.email,
                                        displayName: e.displayName,
                                        isSelected: E.includes(e.emailAccountId),
                                        styles: $
                                    })
                                }))
                            }],
                            comboboxProps: Y,
                            style: $.menuList,
                            initialFocus: 0
                        })
                    }), "mail.email.received" === w.type || "mail.email.sent" === w.type || "mail.email.receivedorsent" === w.type ? (0, v.jsxs)("div", {
                        style: $.container,
                        children: [(0, v.jsx)("div", {
                            style: $.labelText,
                            children: (0, v.jsx)(n(109939).sA, { ...U.filtersLabel
                            })
                        }), "mail.email.received" === w.type || "mail.email.receivedorsent" === w.type ? (0, v.jsxs)("div", {
                            style: $.inboxOnlyToggleWrapper,
                            children: [(0, v.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                gap: 4,
                                children: [(0, v.jsx)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "primary",
                                    children: (0, v.jsx)(n(109939).sA, { ...U.inboxOnlyLabel
                                    })
                                }), (0, v.jsx)(n(51831).m, {
                                    placement: "right",
                                    alignment: "center",
                                    textWrap: !0,
                                    style: {
                                        width: 240
                                    },
                                    content: () => (0, v.jsx)(n(109939).sA, { ...U.inboxOnlyTooltip
                                    }),
                                    children: e => (0, v.jsx)("div", {
                                        "aria-label": m.formatMessage(U.inboxOnlyTooltip),
                                        ...e,
                                        children: (0, v.jsx)(n(16275).I, {
                                            icon: n(372181).infoCircleSmallIcon,
                                            size: "sm",
                                            colorVariant: "secondary"
                                        })
                                    })
                                })]
                            }), (0, v.jsx)(n(354491).d, {
                                on: w.inboxOnly ? ? !1,
                                onClick: () => K(!w.inboxOnly),
                                disabled: g,
                                "aria-label": m.formatMessage(U.inboxOnlyLabel)
                            })]
                        }) : void 0, (0, v.jsx)(n(680152).l, {
                            filters: w.filters,
                            onChange: F,
                            disabled: g
                        })]
                    }) : void 0, ef ? (0, v.jsxs)(n(4458).VP, {
                        alignItems: "flex-start",
                        gap: 6,
                        padding: 4,
                        children: [(0, v.jsx)(n(623336).t, {
                            selectedLabelNames: w.labelNames,
                            selectedEmailAddresses: em,
                            workflowDefinitionPointer: s,
                            writeLabelNames: z,
                            disabled: g
                        }), w.labelNames && w.labelNames.length > 0 ? (0, v.jsx)(n(4458).fI, {
                            flexWrap: "wrap",
                            gap: 6,
                            children: w.labelNames.map(e => (0, v.jsx)(n(593100).O, {
                                value: e,
                                color: "gray",
                                format: n(696654).NY.Medium,
                                showRemoveButton: !g,
                                onClickRemove: () => {
                                    var t;
                                    g || z((null == (t = w.labelNames) ? void 0 : t.filter(t => t !== e)) ? ? [])
                                },
                                isSingle: !0
                            }, e))
                        }) : void 0]
                    }) : void 0]
                })
            }
            let Z = (0, n(109939).YK)({
                searchPlaceholder: {
                    id: "workflow.agent.triggers.selectors.database.searchPlaceholder",
                    defaultMessage: "Search data sources…"
                },
                noResults: {
                    id: "workflow.agent.triggers.selectors.database.noResults",
                    defaultMessage: "No data sources found"
                },
                startTyping: {
                    id: "workflow.agent.triggers.selectors.database.startTyping",
                    defaultMessage: "Start typing to search data sources…"
                },
                selectDatabaseLabel: {
                    id: "workflow.agent.triggers.selectors.database.selectDatabaseLabel",
                    defaultMessage: "Select data source"
                }
            });

            function J(e) {
                let {
                    itemRef: t,
                    focused: i,
                    onClick: l,
                    onAuxClick: r,
                    onMouseEnter: o,
                    role: s,
                    databaseStore: d,
                    isSelected: c,
                    styles: u
                } = e, {
                    isMenuListFocusVisible: g
                } = a.useContext(n(842459).V), p = (0, n(682985).K8)(() => d.getIcon(), [d]), m = (0, n(682985).K8)(() => (0, n(569553).Te)(d), [d]), f = (0, n(682985).K8)(() => d.getParentStore(), [d]), y = (0, n(682985).K8)(() => (0, n(457915).g)(d), [d]);
                (0, a.useEffect)(() => {
                    for (let e of y) e.isReady() || e.load()
                }, [y]), (0, a.useEffect)(() => {
                    (f instanceof n(970831).B || f instanceof n(356912).m) && !f.isDefined() && f.load()
                }, [f]);
                let h = f instanceof n(970831).B ? f : d;
                return (0, v.jsx)("div", {
                    role: "none",
                    children: (0, v.jsxs)(n(988022).p, {
                        ref: t,
                        role: s,
                        onMouseDown: e => {
                            e.preventDefault()
                        },
                        onClick: l,
                        onAuxClick: r,
                        onMouseEnter: o,
                        disallowTabbing: !0,
                        focused: i && g,
                        style: u.listItem,
                        iconTrailing: c ? {
                            icon: n(971730).checkmarkSmallIcon,
                            size: "sm",
                            colorVariant: "secondary",
                            style: u.listItemCheck
                        } : void 0,
                        children: [(0, v.jsx)(n(569553).B6, {
                            disabled: !0,
                            icon: p,
                            iconRecordCategory: m,
                            isEmptyPage: !1,
                            size: 20
                        }), (0, v.jsxs)("div", {
                            style: u.listItemContent,
                            children: [(0, v.jsx)(n(627918).A, {
                                store: d,
                                shouldWrap: !1,
                                maxLines: 1,
                                style: u.listItemTitle
                            }), (0, v.jsx)(n(307983).Ay, {
                                store: h,
                                showFullPathInTooltip: !0,
                                style: u.listItemPath,
                                innerStyle: u.listItemPath
                            })]
                        })]
                    })
                })
            }
            let Q = { ...n(126828).M,
                searchIcon: {
                    marginInlineEnd: 4,
                    flexShrink: 0
                },
                selectedChipTitle: {
                    fontSize: 13,
                    lineHeight: "19.5px",
                    color: n(632079).Tj.text.primary,
                    userSelect: "none"
                },
                searchInputElement: { ...n(126828).M.searchInputElement
                },
                listboxContainer: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    backgroundColor: n(632079).Tj.background.primary,
                    borderRadius: 8,
                    border: `1px solid ${n(632079).Tj.border.secondary}`,
                    boxShadow: n(632079).Tj.shadow.base.lg,
                    boxSizing: "border-box",
                    textAlign: "start"
                },
                menuList: {
                    maxHeight: 240,
                    overflowY: "auto",
                    padding: 4,
                    borderRadius: 8
                },
                listItem: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: 8,
                    gap: 8,
                    cursor: "pointer",
                    borderRadius: 8,
                    backgroundColor: "transparent",
                    border: "none",
                    width: "100%",
                    textAlign: "start",
                    minHeight: 52,
                    height: "auto"
                },
                listItemContent: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    flex: 1,
                    minWidth: 0,
                    overflow: "hidden"
                },
                listItemTitle: {
                    fontSize: 13,
                    lineHeight: "19.5px",
                    color: n(632079).Tj.text.primary,
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                listItemPath: {
                    fontSize: 11,
                    lineHeight: "16.5px",
                    color: n(632079).Tj.text.tertiary,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                listItemCheck: {
                    marginInlineStart: "auto",
                    flexShrink: 0
                }
            };

            function ee(e) {
                let {
                    workflowDefinitionPointer: t,
                    selectedDatabaseId: i,
                    onSelectDatabase: l,
                    onClearDatabase: o,
                    autoFocus: s = !0,
                    disabled: d = !1
                } = e, c = (0, n(482170).l)(t), u = (0, n(109939).tz)(), g = (0, n(972740).L)(), {
                    spaceId: p
                } = (0, a.useMemo)(() => c ? (0, r().kI)(c) : {
                    spaceId: void 0
                }, [c]), [m, f] = (0, a.useState)(""), [y, h] = (0, a.useState)(!s || d), [x, b] = (0, n(739271).s)(), w = (0, a.useMemo)(() => ({ ...x.inputElementAttributes,
                    autoFocus: s,
                    ...y ? {
                        tabIndex: -1
                    } : {}
                }), [s, x.inputElementAttributes, y]), {
                    isInputFocused: k,
                    isInputHovered: C,
                    isListboxVisible: j,
                    setIsListboxVisible: I,
                    inputRef: M,
                    originRef: T,
                    popupContentRef: S,
                    handleInputClick: A,
                    handleInputBlur: D,
                    handleInputFocus: P,
                    handleInputMouseEnter: E,
                    handleInputMouseLeave: R,
                    closeCombobox: L
                } = (0, n(39485).q)({
                    autoFocus: s,
                    inputComboboxProps: x,
                    openOnFocus: s
                });
                (0, a.useEffect)(() => {
                    if (s) return void h(!1);
                    h(!0);
                    let e = requestAnimationFrame(() => {
                        h(!1)
                    });
                    return () => cancelAnimationFrame(e)
                }, [s]);
                let {
                    databases: V,
                    isLoading: _
                } = (0, n(805757)._)({
                    workflowDefinitionPointer: c,
                    open: j,
                    searchQuery: m
                });
                (0, a.useEffect)(() => {
                    j || f("")
                }, [j]);
                let B = (0, a.useCallback)(e => {
                        var t;
                        let n = (null == (t = e.getName()) ? void 0 : t.toString()) ? ? "Untitled";
                        l({
                            databaseId: e.id,
                            databaseName: n
                        }), f(""), L()
                    }, [L, l]),
                    H = (0, a.useCallback)(() => {
                        d || (null == o || o(), f(""))
                    }, [d, o]),
                    F = (0, a.useCallback)(e => {
                        f(e.target.value), I(!0)
                    }, [I]),
                    K = (0, a.useCallback)(() => {
                        var e;
                        I(!0), null == (e = M.current) || e.focus()
                    }, [M, I]),
                    z = (0, a.useCallback)(e => {
                        e.preventDefault(), K()
                    }, [K]),
                    W = (0, n(960253).I)(() => ({
                        searchInput: {
                            height: 36,
                            borderRadius: 8,
                            border: `1.5px solid ${k?n(632079).Tj.blue.border.accentPrimary:C?n(632079).Tj.border.primary:n(632079).Tj.border.secondaryTranslucent}`,
                            boxShadow: k ? `0 0 0 3px ${n(632079).Tj.blue.border.primaryTranslucent}` : "none",
                            paddingInline: 8,
                            paddingBlock: 4,
                            lineHeight: "21px",
                            backgroundColor: n(632079).Tj.background.primary
                        }
                    }), [k, C]),
                    N = (0, n(682985).K8)(() => {
                        if (!i || !g || p && g.id !== p) return;
                        let e = n(356912).m.createChildStore(g, {
                            table: "collection",
                            id: i
                        });
                        return e.load(), e
                    }, [i, g, p]),
                    O = (0, n(682985).K8)(() => {
                        if (N) return {
                            store: N,
                            icon: N.getIcon(),
                            iconRecordCategory: (0, n(569553).Te)(N)
                        }
                    }, [N]),
                    U = m.trim(),
                    $ = !!O && !k && !U,
                    Y = Z.selectDatabaseLabel,
                    G = Z.searchPlaceholder,
                    q = U ? Z.noResults : Z.startTyping,
                    X = (0, a.useMemo)(() => {
                        let e = { ...W,
                            ...Q
                        };
                        return [{
                            key: "databases",
                            render: e => (0, v.jsx)("div", {
                                children: e.children
                            }),
                            items: V.map(t => ({
                                key: t.id,
                                action: () => B(t),
                                render: ({
                                    ref: n,
                                    ...a
                                }) => (0, v.jsx)(J, { ...a,
                                    itemRef: n,
                                    databaseStore: t,
                                    isSelected: t.id === i,
                                    styles: e
                                })
                            }))
                        }]
                    }, [V, B, i, W]);
                return (0, v.jsx)(n(331094).P, {
                    disabled: d,
                    label: (0, v.jsx)("div", {
                        style: Q.labelText,
                        children: (0, v.jsx)(n(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "secondary",
                            children: (0, v.jsx)(n(109939).sA, { ...Y
                            })
                        })
                    }),
                    placeholder: $ ? "" : u.formatMessage(G),
                    value: m,
                    onChange: F,
                    onFocus: P,
                    onBlur: D,
                    onClick: A,
                    onMouseDown: A,
                    inputRef: M,
                    inputElementAttributes: w,
                    left: $ && O ? (0, v.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 8,
                        marginInlineEnd: 2,
                        minWidth: 0,
                        onMouseDown: z,
                        children: [(0, v.jsx)(n(569553).B6, {
                            disabled: !0,
                            icon: O.icon,
                            iconRecordCategory: O.iconRecordCategory,
                            isEmptyPage: !1,
                            size: 20
                        }), (0, v.jsx)(n(627918).A, {
                            store: O.store,
                            shouldWrap: !1,
                            maxLines: 1,
                            style: Q.selectedChipTitle
                        })]
                    }) : (0, v.jsx)(n(16275).I, {
                        icon: n(921048).magnifyingGlassSmallIcon,
                        size: "sm",
                        colorVariant: "secondary",
                        style: Q.searchIcon
                    }),
                    showClearButton: !0,
                    forceShowClearButton: !y && (!!O || m.length > 0),
                    onClearButtonClick: () => {
                        O ? H() : f(""), K()
                    },
                    autoFocus: s,
                    isListboxVisible: j,
                    closeCombobox: L,
                    originRef: T,
                    popupContentRef: S,
                    onMouseEnter: E,
                    onMouseLeave: R,
                    styles: {
                        container: Q.container,
                        label: Q.label,
                        inputWrapper: Q.inputWrapper,
                        searchContainer: Q.searchContainer,
                        searchInput: W.searchInput,
                        searchInputElement: Q.searchInputElement,
                        listboxContainer: Q.listboxContainer
                    },
                    children: V.length > 0 ? (0, v.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        role: "listbox",
                        sections: X,
                        comboboxProps: b,
                        style: Q.menuList,
                        initialFocus: 0
                    }) : _ ? (0, v.jsx)("div", {
                        style: Q.loadingState,
                        children: (0, v.jsx)(n(517334).k, {
                            size: "sm"
                        })
                    }) : (0, v.jsx)("div", {
                        style: Q.emptyState,
                        children: (0, v.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "tertiary",
                            children: (0, v.jsx)(n(109939).sA, { ...q
                            })
                        })
                    })
                })
            }
            let et = (0, n(109939).YK)({
                searchPlaceholder: {
                    id: "workflow.agent.triggers.selectors.databaseView.searchPlaceholder",
                    defaultMessage: "Search views…"
                },
                noViews: {
                    id: "workflow.agent.triggers.selectors.databaseView.noViews",
                    defaultMessage: "No views found"
                },
                startTyping: {
                    id: "workflow.agent.triggers.selectors.databaseView.startTyping",
                    defaultMessage: "Start typing to search views…"
                },
                selectViewLabel: {
                    id: "workflow.agent.triggers.selectors.databaseView.selectViewLabel",
                    defaultMessage: "Select view"
                },
                entireDataSource: {
                    id: "workflow.agent.triggers.selectors.databaseView.entireDataSource",
                    defaultMessage: "Entire database"
                }
            });

            function en(e) {
                let t = (0, n(682985).K8)(() => e.viewStore.getName() ? ? e.viewStore.id, [e.viewStore]);
                return (0, v.jsx)(ea, { ...e,
                    title: t
                })
            }

            function ea(e) {
                let {
                    itemRef: t,
                    focused: i,
                    onClick: l,
                    onAuxClick: r,
                    onMouseEnter: o,
                    role: s,
                    viewStore: d,
                    title: c,
                    caption: u,
                    isSelected: g,
                    styles: p
                } = e, {
                    isMenuListFocusVisible: m
                } = a.useContext(n(842459).V), f = (0, n(682985).K8)(() => null == d ? void 0 : d.getType(), [d]), y = (0, n(682985).K8)(() => null == d ? void 0 : d.getFormat().collection_view_icon, [d]);
                return (0, v.jsx)("div", {
                    role: "none",
                    children: (0, v.jsxs)(n(988022).p, {
                        ref: t,
                        role: s,
                        onMouseDown: e => {
                            e.preventDefault()
                        },
                        onClick: l,
                        onAuxClick: r,
                        onMouseEnter: o,
                        disallowTabbing: !0,
                        focused: i && m,
                        hoveredStyle: p.listItemHover,
                        style: p.listItem,
                        iconTrailing: g ? {
                            icon: n(971730).checkmarkSmallIcon,
                            size: "sm",
                            colorVariant: "secondary",
                            style: p.listItemCheck
                        } : void 0,
                        children: [(0, v.jsx)("div", {
                            style: p.listItemIconSlot,
                            children: d && f ? (0, v.jsx)(n(647905).hy, {
                                color: "lightGray",
                                viewType: f,
                                viewIcon: y
                            }) : (0, v.jsx)(n(647905).hy, {
                                color: "lightGray",
                                viewType: "table"
                            })
                        }), (0, v.jsxs)("div", {
                            style: p.listItemContent,
                            children: [(0, v.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                children: c
                            }), u ? (0, v.jsx)(n(111010).D, {
                                styleKey: "caption",
                                colorVariant: "tertiary",
                                children: u
                            }) : null]
                        })]
                    })
                })
            }
            let ei = { ...n(126828).M,
                searchIcon: {
                    marginInlineEnd: 4,
                    flexShrink: 0
                },
                selectedChipTitle: {
                    fontSize: 13,
                    lineHeight: "19.5px",
                    color: n(632079).Tj.text.primary,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    userSelect: "none"
                },
                searchInputElement: { ...n(126828).M.searchInputElement
                },
                listboxContainer: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    backgroundColor: n(632079).Tj.background.primary,
                    borderRadius: 8,
                    border: `1px solid ${n(632079).Tj.border.secondary}`,
                    boxShadow: n(632079).Tj.shadow.base.lg,
                    boxSizing: "border-box",
                    textAlign: "start"
                },
                menuList: {
                    maxHeight: 240,
                    overflowY: "auto",
                    padding: 4,
                    borderRadius: 8
                },
                listItem: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: 8,
                    gap: 8,
                    cursor: "pointer",
                    borderRadius: 8,
                    backgroundColor: "transparent",
                    border: "none",
                    width: "100%",
                    textAlign: "start",
                    minHeight: 40,
                    height: "auto"
                },
                listItemHover: {
                    backgroundColor: n(632079).Tj.background.secondary
                },
                listItemIconSlot: {
                    width: 20,
                    height: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                },
                selectedChipIconSlot: {
                    width: 20,
                    height: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                },
                listItemContent: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    flex: 1,
                    minWidth: 0,
                    overflow: "hidden"
                },
                listItemTitle: {
                    fontSize: 13,
                    lineHeight: "19.5px",
                    color: n(632079).Tj.text.primary
                },
                listItemCheck: {
                    marginInlineStart: "auto",
                    flexShrink: 0
                }
            };

            function el(e) {
                let {
                    selectedDatabaseId: t,
                    selectedViewId: i,
                    onSelectView: l,
                    disabled: r = !1
                } = e, o = (0, n(109939).tz)(), s = (0, n(972740).L)(), [d, u] = (0, a.useState)(""), [g, p] = (0, n(739271).s)(), {
                    isInputFocused: m,
                    isInputHovered: f,
                    isListboxVisible: y,
                    setIsListboxVisible: h,
                    inputRef: x,
                    originRef: b,
                    popupContentRef: w,
                    handleInputClick: k,
                    handleInputBlur: C,
                    handleInputFocus: j,
                    handleInputMouseEnter: I,
                    handleInputMouseLeave: M,
                    closeCombobox: T
                } = (0, n(39485).q)({
                    autoFocus: !1,
                    inputComboboxProps: g,
                    openOnFocus: !1
                }), S = (0, n(960253).I)(() => ({
                    searchInput: {
                        height: 36,
                        borderRadius: 8,
                        border: `1.5px solid ${m?n(632079).Tj.blue.border.accentPrimary:f?n(632079).Tj.border.primary:n(632079).Tj.border.secondaryTranslucent}`,
                        boxShadow: m ? `0 0 0 3px ${n(632079).Tj.blue.border.primaryTranslucent}` : "none",
                        paddingInline: 8,
                        paddingBlock: 4,
                        lineHeight: "21px",
                        backgroundColor: n(632079).Tj.background.primary
                    }
                }), [m, f]), A = (0, n(682985).K8)(() => {
                    if (!t || !s) return;
                    let e = n(356912).m.createChildStore(s, {
                        table: "collection",
                        id: t
                    });
                    return e.load(), e
                }, [t, s]), D = (0, n(682985).K8)(() => {
                    if (!A || !t) return [];
                    let e = A.getParentCollectionViewBlockStore();
                    return e ? e.isDefined() ? e.getCollectionViewStores().filter(e => {
                        var n;
                        let a = e.getType();
                        return "chart" !== a && "form_editor" !== a && (null == (n = e.getCollectionStore()) ? void 0 : n.id) === t
                    }).sort((e, t) => (e.getName() ? ? "").localeCompare(t.getName() ? ? "")) : (e.load(), []) : []
                }, [t, A]);
                (0, a.useEffect)(() => {
                    for (let e of D) e.isDefined() || e.load()
                }, [D]);
                let P = (0, a.useMemo)(() => {
                        let e = d.trim().toLowerCase();
                        return e ? D.filter(t => (t.getName() ? ? "").toLowerCase().includes(e)) : D
                    }, [D, d]),
                    E = (0, n(682985).K8)(() => {
                        if (!i || !s) return;
                        let e = n(547131).p.createChildStore(s, {
                            table: "collection_view",
                            id: i
                        });
                        return e.load(), e
                    }, [i, s]),
                    R = !m && "" === d.trim() && !!t,
                    L = (0, n(682985).K8)(() => null == E ? void 0 : E.getName(), [E]),
                    V = (0, n(682985).K8)(() => null == E ? void 0 : E.getType(), [E]),
                    _ = (0, n(682985).K8)(() => null == E ? void 0 : E.getFormat().collection_view_icon, [E]),
                    B = i && L ? L : o.formatMessage(et.entireDataSource),
                    H = (0, a.useCallback)(e => {
                        l(e), u(""), T()
                    }, [T, l]),
                    F = (0, a.useCallback)(e => {
                        u(e.target.value), h(!0)
                    }, [h]),
                    K = (0, a.useCallback)(() => {
                        var e;
                        h(!0), null == (e = x.current) || e.focus()
                    }, [x, h]),
                    z = (0, a.useCallback)(e => {
                        e.preventDefault(), K()
                    }, [K]),
                    W = (0, a.useCallback)(() => {
                        l(void 0), u(""), K()
                    }, [K, l]),
                    N = d.trim() ? et.noViews : et.startTyping,
                    O = (0, a.useMemo)(() => {
                        let e = { ...S,
                            ...ei
                        };
                        return [{
                            key: "views",
                            render: e => (0, v.jsx)("div", {
                                children: e.children
                            }),
                            items: [{
                                key: "all-pages-in-data-source",
                                action: () => H(void 0),
                                render: ({
                                    ref: t,
                                    ...n
                                }) => (0, v.jsx)(ea, { ...n,
                                    itemRef: t,
                                    viewStore: void 0,
                                    title: o.formatMessage(et.entireDataSource),
                                    isSelected: !i,
                                    styles: e
                                })
                            }, ...P.map(t => ({
                                key: t.id,
                                action: () => H(t.id),
                                render: ({
                                    ref: n,
                                    ...a
                                }) => (0, v.jsx)(en, { ...a,
                                    itemRef: n,
                                    viewStore: t,
                                    isSelected: t.id === i,
                                    styles: e
                                })
                            }))]
                        }]
                    }, [P, H, o, i, S]);
                return (0, v.jsx)(n(331094).P, {
                    disabled: r || !t,
                    label: (0, v.jsx)("div", {
                        style: ei.labelText,
                        children: (0, v.jsx)(n(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "secondary",
                            children: (0, v.jsx)(n(109939).sA, { ...et.selectViewLabel
                            })
                        })
                    }),
                    placeholder: R ? "" : o.formatMessage(et.searchPlaceholder),
                    value: d,
                    onChange: F,
                    onFocus: j,
                    onBlur: C,
                    onClick: k,
                    onMouseDown: k,
                    inputRef: x,
                    inputElementAttributes: g.inputElementAttributes,
                    left: R ? (0, v.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 8,
                        marginInlineEnd: 2,
                        minWidth: 0,
                        onMouseDown: z,
                        children: [i && V ? (0, v.jsx)("div", {
                            style: ei.selectedChipIconSlot,
                            children: (0, v.jsx)(n(647905).hy, {
                                color: "lightGray",
                                viewType: V,
                                viewIcon: _
                            })
                        }) : (0, v.jsx)(n(647905).hy, {
                            color: "lightGray",
                            viewType: "table"
                        }), (0, v.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            style: ei.selectedChipTitle,
                            children: B
                        })]
                    }) : (0, v.jsx)(n(16275).I, {
                        icon: n(921048).magnifyingGlassSmallIcon,
                        size: "sm",
                        colorVariant: "secondary",
                        style: ei.searchIcon
                    }),
                    showClearButton: !0,
                    forceShowClearButton: !!i || d.length > 0,
                    onClearButtonClick: () => {
                        (d.length > 0 || i) && W()
                    },
                    autoFocus: !1,
                    isListboxVisible: y,
                    closeCombobox: T,
                    originRef: b,
                    popupContentRef: w,
                    onMouseEnter: I,
                    onMouseLeave: M,
                    styles: {
                        container: ei.container,
                        label: ei.label,
                        inputWrapper: ei.inputWrapper,
                        searchContainer: ei.searchContainer,
                        searchInput: S.searchInput,
                        searchInputElement: ei.searchInputElement,
                        listboxContainer: ei.listboxContainer
                    },
                    children: t ? P.length > 0 || !d.trim() ? (0, v.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        role: "listbox",
                        sections: O,
                        comboboxProps: p,
                        style: ei.menuList,
                        initialFocus: 0
                    }) : (0, v.jsx)("div", {
                        style: ei.emptyState,
                        children: (0, v.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "tertiary",
                            children: (0, v.jsx)(n(109939).sA, { ...et.noViews
                            })
                        })
                    }) : (0, v.jsx)("div", {
                        style: ei.loadingState,
                        children: (0, c().O9)(t) ? (0, v.jsx)(n(517334).k, {
                            size: "sm"
                        }) : (0, v.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "tertiary",
                            children: (0, v.jsx)(n(109939).sA, { ...N
                            })
                        })
                    })
                })
            }
            n(16280), n(814603), n(147566), n(198721);
            var er = () => n(402459);
            let eo = (0, n(109939).YK)({
                selectChannelLabel: {
                    id: "workflow.agent.triggers.selectors.slack.selectChannelLabel",
                    defaultMessage: "Select channel"
                },
                privateChannelsFooterLabel: {
                    id: "workflow.agent.triggers.selectors.slack.privateChannelsFooterLabel",
                    defaultMessage: "Private channels"
                },
                privateChannelsFooterBadge: {
                    id: "workflow.agent.triggers.selectors.slack.privateChannelsFooterBadge",
                    defaultMessage: "Coming soon"
                },
                allChannelsLabel: {
                    id: "workflow.agent.triggers.selectors.slack.allChannelsLabel",
                    defaultMessage: "All public channels"
                },
                allChannelsSubtitle: {
                    id: "workflow.agent.triggers.selectors.slack.allChannelsSubtitle",
                    defaultMessage: "This will automatically include newly-created Slack channels."
                },
                searchPlaceholder: {
                    id: "workflow.agent.triggers.selectors.slack.searchPlaceholder",
                    defaultMessage: "Search channels…"
                },
                removeChannelLabel: {
                    id: "workflow.agent.triggers.selectors.slack.removeChannelLabel",
                    defaultMessage: "Remove channel"
                },
                clearAllChannelsLabel: {
                    id: "workflow.agent.triggers.selectors.slack.clearAllChannelsLabel",
                    defaultMessage: "Clear all channels"
                },
                noResults: {
                    id: "workflow.agent.triggers.selectors.slack.noResults",
                    defaultMessage: "No channels found"
                },
                noChannelsSelected: {
                    id: "workflow.agent.triggers.selectors.slack.noChannelsSelected",
                    defaultMessage: "No channels selected"
                }
            });

            function es(e) {
                let {
                    channelName: t,
                    isPrivate: a,
                    showHash: i = !0
                } = e;
                return a ? (0, v.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    gap: 2,
                    children: [(0, v.jsx)(n(16275).I, {
                        icon: n(697198).lockSmallIcon,
                        size: "xs"
                    }), t]
                }) : (0, v.jsxs)(v.Fragment, {
                    children: [i ? "#" : "", t]
                })
            }

            function ed(e) {
                let {
                    id: t,
                    isActive: a,
                    isFocusVisible: i,
                    isSelected: l,
                    onClick: r,
                    onMouseEnter: o,
                    channelName: s,
                    showHash: d = !0,
                    isPrivate: c,
                    leadingIcon: u,
                    styles: g
                } = e;
                return (0, v.jsx)("div", {
                    role: "presentation",
                    children: (0, v.jsxs)(n(988022).p, {
                        id: t,
                        role: "option",
                        "aria-selected": l,
                        onClick: r,
                        onMouseEnter: o,
                        disallowTabbing: !0,
                        focused: a && i,
                        style: g.listItem,
                        iconTrailing: l ? {
                            icon: n(971730).checkmarkSmallIcon,
                            size: "sm",
                            colorVariant: "secondary",
                            style: eu.listItemCheck
                        } : void 0,
                        children: [u ? (0, v.jsx)("span", {
                            style: g.listItemIcon,
                            children: u
                        }) : null, (0, v.jsx)("div", {
                            style: g.listItemContent,
                            children: (0, v.jsx)("div", {
                                style: g.listItemText,
                                children: (0, v.jsx)(es, {
                                    channelName: s,
                                    isPrivate: c,
                                    showHash: d
                                })
                            })
                        })]
                    })
                })
            }

            function ec(e) {
                var t;
                let n;
                try {
                    n = new URL(e)
                } catch {
                    return
                }
                let a = n.pathname.match(/^\/archives\/(?<channelId>[\w-]+)(\/|$)/);
                return null == a || null == (t = a.groups) ? void 0 : t.channelId
            }
            let eu = { ...n(126828).M,
                searchIcon: {
                    marginInlineEnd: 4,
                    flexShrink: 0
                },
                pill: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    paddingInlineStart: 10,
                    paddingInlineEnd: 6,
                    paddingBlock: 4,
                    borderRadius: 999,
                    backgroundColor: n(632079).Tj.background.tertiary
                },
                pillIcon: {
                    display: "flex",
                    alignItems: "center"
                },
                menuList: {
                    maxHeight: 180,
                    overflowY: "auto",
                    paddingTop: 4,
                    paddingBottom: 4,
                    paddingInline: 0,
                    borderRadius: 8,
                    flex: 1
                },
                listItem: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingInline: 10,
                    paddingBlock: 6,
                    gap: 10,
                    cursor: "pointer",
                    borderRadius: 8,
                    textAlign: "start",
                    backgroundColor: "transparent",
                    border: "none",
                    width: "100%",
                    height: "auto"
                },
                listItemIcon: {
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0
                },
                listItemContent: {
                    flex: 1,
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                listItemCheck: {
                    marginInlineStart: "auto",
                    flexShrink: 0
                },
                listItemText: { ...n(649316).U.bodySm,
                    color: n(632079).Tj.text.primary,
                    lineHeight: "19.5px"
                },
                allChannelsSubtitle: {
                    marginTop: 4
                },
                listboxBody: {
                    flex: 1
                },
                listboxFooter: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingInline: 12,
                    paddingBlock: 8,
                    borderTop: `1px solid ${n(632079).Tj.border.secondary}`,
                    backgroundColor: n(632079).Tj.background.primary
                },
                listboxFooterLeft: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6
                },
                listboxFooterText: { ...n(649316).U.caption,
                    color: n(632079).Tj.text.tertiary,
                    lineHeight: "18px"
                },
                labelText: { ...n(649316).U.captionMedium,
                    color: n(632079).Tj.text.secondary,
                    lineHeight: "18px"
                },
                pillText: { ...n(649316).U.bodySm,
                    color: n(632079).Tj.text.primary,
                    lineHeight: "19.5px"
                }
            };

            function eg(e) {
                var t;
                let {
                    moduleId: i,
                    moduleValue: l,
                    workflowDefinitionPointer: o,
                    selectedChannelIds: s,
                    isAllPublicChannels: d,
                    onSelectChannels: c,
                    onSelectAllPublicChannels: u,
                    disableAllPublicChannels: g,
                    autoFocus: p = !1,
                    disabled: m = !1
                } = e, f = (0, n(482170).l)(l), y = (0, n(482170).l)(o), h = (0, n(482170).l)(s), x = (0, n(109939).tz)(), b = (0, n(533992).v3)(), {
                    spaceId: w
                } = (0, a.useMemo)(() => (0, r().kI)(y), [y]);
                if ("slack" !== f.type) throw Error("Module in SlackChannelSelectorInline is not a slack module");
                let k = null == (t = f.state) ? void 0 : t.connectionPointer,
                    C = (0, a.useMemo)(() => (0, n(315126).zz)(k), [k]),
                    j = (0, n(483459).s)(f),
                    [I, M] = (0, a.useState)(""),
                    [T, S] = (0, n(739271).s)(),
                    {
                        isInputFocused: A,
                        isInputHovered: D,
                        isListboxVisible: P,
                        setIsListboxVisible: E,
                        inputRef: R,
                        originRef: L,
                        popupContentRef: V,
                        handleInputClick: _,
                        handleInputBlur: B,
                        handleInputFocus: H,
                        handleInputMouseEnter: F,
                        handleInputMouseLeave: K,
                        closeCombobox: z
                    } = (0, n(39485).q)({
                        autoFocus: p,
                        inputComboboxProps: T,
                        openOnFocus: p
                    }),
                    {
                        loadedChannelsForAccount: W,
                        isLoading: N
                    } = (0, n(524088).XN)(C);
                (0, a.useEffect)(() => {
                    C && w && ((0, n(335085).eE)({
                        environment: b,
                        workflowDefinitionPointer: y,
                        externalAuthConfig: C,
                        moduleId: i
                    }), (0, n(524088).Hn)({
                        environment: b,
                        spaceId: w,
                        externalAuthConfig: C,
                        moduleId: i,
                        workflowId: y.id
                    }))
                }, [b, w, C, y, i]);
                let O = (0, a.useDeferredValue)(I),
                    {
                        publicChannels: U,
                        privateChannels: $
                    } = (0, a.useMemo)(() => P ? (0, n(654835).l)({
                        channels: W,
                        filter: void 0
                    }) : {
                        publicChannels: [],
                        privateChannels: [],
                        personalChannels: [],
                        imChannels: []
                    }, [P, W]),
                    {
                        channelDataMap: Y
                    } = (0, n(335085).$8)({
                        channelIds: h,
                        moduleId: i,
                        workflowDefinitionPointer: y,
                        moduleValue: f
                    }),
                    G = (0, a.useMemo)(() => {
                        if (!h || 0 === h.length) return [];
                        let e = Array.from(Y.values()),
                            t = h.map(t => {
                                let {
                                    channelData: a
                                } = (0, n(57577).F)({
                                    identifier: t,
                                    channels: e
                                });
                                return {
                                    id: t,
                                    name: (null == a ? void 0 : a.name) ? ? em({
                                        selection: t
                                    }),
                                    isPrivate: (null == a ? void 0 : a.type) === "private"
                                }
                            });
                        return d ? t.filter(e => e.isPrivate) : t
                    }, [Y, d, h]),
                    q = (0, a.useMemo)(() => (function(e) {
                        let {
                            selectedChannelIds: t
                        } = e, n = new Set, a = new Set;
                        for (let e of t ? ? []) {
                            if ((0, er().NL)(e)) {
                                n.add(e);
                                continue
                            }
                            if ((0, er().XT)(e)) {
                                a.add(e);
                                let t = ec(e);
                                t && n.add(t);
                                continue
                            }
                            if ((0, er().HL)(e)) {
                                var i, l;
                                let t = null == (i = (l = er().A2.slackChannel).parseUri) ? void 0 : i.call(l, e);
                                !t || t instanceof Error || "slackChannel" !== t.type || n.add(t.channelId)
                            }
                        }
                        return {
                            selectedChannelIds: n,
                            selectedChannelUrls: a
                        }
                    })({
                        selectedChannelIds: h
                    }), [h]),
                    X = (0, a.useMemo)(() => P ? U.filter(e => (0, n(654835).b)({
                        channelName: e.name,
                        query: O
                    })) : [], [U, O, P]),
                    Z = (0, n(682985).K8)(() => n(886556).z.isSlackPrivateSettingsEnabled(), []),
                    J = (0, a.useMemo)(() => P && Z ? $.filter(e => (0, n(654835).b)({
                        channelName: e.name,
                        query: O
                    })) : [], [$, O, P, Z]),
                    Q = (0, a.useCallback)(e => q.selectedChannelIds.has(e.id) || void 0 !== e.url && q.selectedChannelUrls.has(e.url), [q]),
                    ee = (0, a.useCallback)(e => {
                        let {
                            channel: t,
                            selections: n
                        } = e;
                        return n.filter(e => {
                            if (e === t.id || void 0 !== t.url && e === t.url) return !1;
                            if ((0, er().HL)(e)) {
                                var n, a;
                                let i = null == (n = (a = er().A2.slackChannel).parseUri) ? void 0 : n.call(a, e);
                                if (i && !(i instanceof Error) && "slackChannel" === i.type && i.channelId === t.id) return !1
                            }
                            return (!(0, er().XT)(e) || ec(e) !== t.id) && !0
                        })
                    }, []),
                    et = (0, a.useCallback)(e => e.map(e => {
                        let t = function(e) {
                                var t, n;
                                let {
                                    selection: a,
                                    channels: i
                                } = e, l = i.find(e => e.id === a || e.url === a);
                                if (l) return l;
                                let r = null == (t = (n = er().A2.slackChannel).parseUri) ? void 0 : t.call(n, a);
                                if (r && !(r instanceof Error) && "slackChannel" === r.type) return i.find(e => e.id === r.channelId)
                            }({
                                selection: e,
                                channels: W
                            }),
                            a = (null == t ? void 0 : t.url) ? ? function(e) {
                                var t, n, a, i;
                                let {
                                    selection: l
                                } = e;
                                if ((0, er().XT)(l)) return l;
                                let r = null == (t = (n = er().A2.slackChannel).parseUri) ? void 0 : t.call(n, l);
                                if (r && !(r instanceof Error) && "slackChannel" === r.type) {
                                    let e = null == (a = (i = er().A2.slackChannel).getUrl) ? void 0 : a.call(i, r);
                                    return "string" == typeof e ? e : void 0
                                }
                            }({
                                selection: e
                            }),
                            i = function(e) {
                                var t, a;
                                let {
                                    selection: i,
                                    channelUrl: l,
                                    slackWorkspaceUrl: r
                                } = e;
                                if ((0, er().HL)(i)) return i;
                                if (!l) return;
                                let o = null == (t = (a = er().A2.slackChannel).parseUrlToUri) ? void 0 : t.call(a, l, {
                                    baseUrl: n(986939).A.domainBaseUrl,
                                    publicDomainName: n(986939).A.publicDomainName,
                                    slackWorkspaceUrl: r
                                });
                                return "string" == typeof o ? o : void 0
                            }({
                                selection: e,
                                channelUrl: a,
                                slackWorkspaceUrl: j
                            });
                        return {
                            channelId: (null == t ? void 0 : t.id) ? ? ep({
                                selection: e
                            }) ? ? e,
                            channelName: (null == t ? void 0 : t.name) ? ? em({
                                selection: e
                            }),
                            channelUrl: a,
                            channelUri: i
                        }
                    }), [W, j]),
                    en = (0, a.useCallback)(e => {
                        var t;
                        if (m || d && "private" !== e.type) return;
                        let n = h ? ? [];
                        if (Q(e)) {
                            let t = et(ee({
                                channel: e,
                                selections: n
                            }));
                            d ? u(t) : c(t), M("");
                            return
                        }
                        let a = et([...n, (t = e).url ? ? t.id]);
                        d ? u(a) : c(a), M("")
                    }, [et, m, d, Q, u, c, ee, h]),
                    ea = (0, a.useCallback)(e => {
                        if (m) return;
                        let t = (h ? ? []).filter(t => t !== e);
                        d ? u(et(t)) : c(et(t)), M("")
                    }, [et, m, d, u, c, h]),
                    ei = (0, a.useCallback)(e => {
                        m || (M(e.target.value), E(!0))
                    }, [m, E]),
                    el = (0, a.useCallback)(() => {
                        m || d || (u(G.filter(e => e.isPrivate).map(e => ({
                            channelId: e.id,
                            channelName: e.name
                        }))), M(""), z())
                    }, [z, m, d, u, G]),
                    eg = (0, a.useCallback)(() => {
                        m || !d || (c(G.filter(e => e.isPrivate).map(e => ({
                            channelId: e.id,
                            channelName: e.name
                        }))), M(""))
                    }, [m, d, c, G]),
                    ef = (0, a.useMemo)(() => ({ ...eu,
                        searchInput: {
                            height: 36,
                            borderRadius: 8,
                            border: `1.5px solid ${A?n(632079).Tj.blue.border.accentPrimary:D?n(632079).Tj.border.primary:n(632079).Tj.border.secondaryTranslucent}`,
                            boxShadow: A ? `0 0 0 3px ${n(632079).Tj.blue.border.primaryTranslucent}` : "none",
                            paddingInline: 8,
                            paddingBlock: 4,
                            lineHeight: "21px",
                            backgroundColor: n(632079).Tj.background.primary
                        }
                    }), [A, D]),
                    ey = O.trim().length > 0,
                    eh = !ey && !d && !g,
                    ev = X.length > 0 || Z && J.length > 0,
                    ex = (0, a.useId)(),
                    eb = (0, a.useRef)(null),
                    ew = (0, a.useMemo)(() => {
                        if (!P || ey && X.length + J.length === 0) return [];
                        let e = [];
                        eh && e.push({
                            kind: "option",
                            key: "all-channels",
                            label: x.formatMessage(eo.allChannelsLabel),
                            showHash: !1,
                            isPrivate: !1,
                            isSelected: !1,
                            leadingIcon: (0, v.jsx)(n(16275).I, {
                                icon: n(825012).peopleIcon,
                                size: "xs",
                                colorVariant: "primary"
                            }),
                            onSelect: el
                        });
                        let t = [];
                        for (let e of X) t.push({
                            channel: e,
                            isPrivate: !1
                        });
                        if (Z)
                            for (let e of J) t.push({
                                channel: e,
                                isPrivate: !0
                            });
                        for (let {
                                channel: n,
                                isPrivate: a
                            } of (t.sort((e, t) => e.channel.name.localeCompare(t.channel.name)), t)) e.push({
                            kind: "option",
                            key: n.id,
                            label: n.name,
                            showHash: !0,
                            isPrivate: a,
                            isSelected: Q(n),
                            onSelect: () => en(n)
                        });
                        return e
                    }, [el, en, Q, x, P, ey, Z, J, X, eh]),
                    [ek, eC] = (0, a.useState)(void 0),
                    ej = (0, a.useMemo)(() => {
                        if (void 0 !== ek && ew[ek]) return `${ex}-option-${ek}`
                    }, [ek, ew, ex]);
                (0, a.useEffect)(() => {
                    S.setComboboxState({
                        inputElementAttributes: {
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": ex,
                            "aria-expanded": S.isComboboxFocused,
                            "aria-haspopup": "listbox",
                            "aria-activedescendant": ej
                        },
                        suppressFocusRing: void 0 !== ek
                    })
                }, [ej, ek, ex, S, S.isComboboxFocused]);
                let eI = (0, n(326361).Te)({
                        count: ew.length,
                        getScrollElement: () => eb.current,
                        estimateSize: (0, a.useCallback)(e => 32, []),
                        overscan: 10
                    }),
                    eM = (0, a.useMemo)(() => {
                        let e = [];
                        for (let n = 0; n < ew.length; n++) {
                            var t;
                            (null == (t = ew[n]) ? void 0 : t.kind) === "option" && e.push(n)
                        }
                        return e
                    }, [ew]),
                    eT = eM[0];
                (0, a.useEffect)(() => {
                    P && void 0 !== eT ? eC(e => {
                        var t;
                        return void 0 === e ? eT : e >= 0 && e < ew.length && (null == (t = ew[e]) ? void 0 : t.kind) === "option" ? e : eT
                    }) : eC(void 0)
                }, [eT, P, ew]);
                let eS = (0, a.useCallback)(e => {
                        let {
                            direction: t,
                            startIndex: n
                        } = e;
                        if (0 === eM.length) return;
                        let a = void 0 !== n ? eM.indexOf(n) : -1;
                        if ("next" === t) {
                            let e = -1 === a ? 0 : (a + 1) % eM.length;
                            return eM[e]
                        }
                        let i = -1 === a ? eM.length - 1 : (a - 1 + eM.length) % eM.length;
                        return eM[i]
                    }, [eM]),
                    eA = (0, a.useCallback)(e => {
                        if (!m) {
                            if ("ArrowDown" === e.key) {
                                if (e.preventDefault(), E(!0), 0 === eM.length) return;
                                let t = eS({
                                    direction: "next",
                                    startIndex: ek
                                });
                                void 0 !== t && (eC(t), eI.scrollToIndex(t, {
                                    align: "auto"
                                }));
                                return
                            }
                            if ("ArrowUp" === e.key) {
                                if (e.preventDefault(), E(!0), 0 === eM.length) return;
                                let t = eS({
                                    direction: "prev",
                                    startIndex: ek
                                });
                                void 0 !== t && (eC(t), eI.scrollToIndex(t, {
                                    align: "auto"
                                }));
                                return
                            }
                            if ("Enter" === e.key) {
                                let t = void 0 !== ek ? ew[ek] : void 0;
                                (null == t ? void 0 : t.kind) === "option" && (e.preventDefault(), t.onSelect());
                                return
                            }
                            "Escape" === e.key && (e.preventDefault(), z())
                        }
                    }, [ek, z, m, eS, ew, E, eM.length, eI]),
                    eD = (0, a.useMemo)(() => ({ ...T.inputElementAttributes,
                        autoFocus: p,
                        onKeyDown: eA
                    }), [p, eA, T.inputElementAttributes]),
                    eP = S.isFocusVisible && S.isComboboxFocused;
                return (0, v.jsx)(n(331094).P, {
                    disabled: m,
                    label: (0, v.jsx)(n(111010).D, {
                        styleKey: "caption",
                        colorVariant: "secondary",
                        children: (0, v.jsx)(n(109939).sA, { ...eo.selectChannelLabel
                        })
                    }),
                    placeholder: x.formatMessage(eo.searchPlaceholder),
                    value: I,
                    onChange: ei,
                    onFocus: H,
                    onBlur: B,
                    onClick: _,
                    onMouseDown: _,
                    inputRef: R,
                    inputElementAttributes: eD,
                    left: (0, v.jsx)(n(16275).I, {
                        icon: n(330274).magnifyingGlassIcon,
                        size: "sm",
                        colorVariant: "secondary",
                        style: eu.searchIcon
                    }),
                    autoFocus: p && !m,
                    isListboxVisible: P,
                    closeCombobox: z,
                    originRef: L,
                    popupContentRef: V,
                    onMouseEnter: F,
                    onMouseLeave: K,
                    listboxMaxWidth: 264,
                    styles: {
                        container: eu.container,
                        label: eu.label,
                        inputWrapper: eu.inputWrapper,
                        searchContainer: eu.searchContainer,
                        searchInput: ef.searchInput,
                        searchInputElement: eu.searchInputElement,
                        listboxContainer: eu.listboxContainer
                    },
                    footer: (0, v.jsxs)(n(4458).fI, {
                        flexWrap: "wrap",
                        gap: 6,
                        width: "100%",
                        children: [d ? (0, v.jsxs)("div", {
                            style: eu.pill,
                            children: [(0, v.jsx)("span", {
                                style: eu.pillIcon,
                                children: (0, v.jsx)(n(16275).I, {
                                    icon: n(825012).peopleIcon,
                                    size: "xs",
                                    colorVariant: "primary"
                                })
                            }), (0, v.jsx)("div", {
                                style: eu.pillText,
                                children: x.formatMessage(eo.allChannelsLabel)
                            }), (0, v.jsx)(n(374533).A, {
                                ariaLabel: x.formatMessage(eo.clearAllChannelsLabel),
                                icon: n(25094).xMarkSmallIcon,
                                size: "xxs",
                                shape: "pill",
                                colorVariant: "tertiary",
                                onClick: eg,
                                disabled: m,
                                style: ef.pillCloseButton,
                                hoveredStyle: ef.pillCloseHovered
                            })]
                        }) : void 0, d ? (0, v.jsx)(n(111010).D, {
                            styleKey: "caption",
                            colorVariant: "secondary",
                            style: eu.allChannelsSubtitle,
                            children: (0, v.jsx)(n(109939).sA, { ...eo.allChannelsSubtitle
                            })
                        }) : void 0, d || 0 !== G.length || P ? void 0 : (0, v.jsx)(n(111010).D, {
                            styleKey: "caption",
                            colorVariant: "secondary",
                            children: (0, v.jsx)(n(109939).sA, { ...eo.noChannelsSelected
                            })
                        }), G.map(e => (0, v.jsxs)("div", {
                            style: eu.pill,
                            children: [(0, v.jsx)("div", {
                                style: eu.pillText,
                                children: (0, v.jsx)(es, {
                                    channelName: e.name,
                                    isPrivate: e.isPrivate
                                })
                            }), (0, v.jsx)(n(374533).A, {
                                ariaLabel: x.formatMessage(eo.removeChannelLabel),
                                icon: n(25094).xMarkSmallIcon,
                                size: "xxs",
                                shape: "pill",
                                colorVariant: "tertiary",
                                onClick: () => ea(e.id),
                                disabled: m,
                                style: eu.pillCloseButton,
                                hoveredStyle: eu.pillCloseHovered
                            })]
                        }, e.id))]
                    }),
                    children: (0, v.jsxs)(n(4458).VP, {
                        minHeight: 0,
                        children: [(0, v.jsx)("div", {
                            style: eu.listboxBody,
                            children: N ? (0, v.jsx)("div", {
                                style: eu.loadingState,
                                children: (0, v.jsx)(n(517334).k, {
                                    size: "sm"
                                })
                            }) : !ey || ev ? (0, v.jsx)("div", {
                                ref: eb,
                                id: ex,
                                role: "listbox",
                                style: ef.menuList,
                                children: (0, v.jsx)("div", {
                                    style: {
                                        height: eI.getTotalSize(),
                                        width: "100%",
                                        position: "relative"
                                    },
                                    children: eI.getVirtualItems().map(e => {
                                        let t = ew[e.index];
                                        if (!t) return null;
                                        let n = `${t.key}--slack-channel-selector-inline`,
                                            a = ek === e.index;
                                        return (0, v.jsx)("div", {
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                insetInlineStart: 0,
                                                width: "100%",
                                                transform: `translateY(${e.start}px)`,
                                                height: e.size,
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                paddingInline: 4
                                            },
                                            children: (0, v.jsx)(ed, {
                                                id: `${ex}-option-${e.index}`,
                                                isActive: !!a,
                                                isFocusVisible: eP,
                                                isSelected: t.isSelected,
                                                onClick: t.onSelect,
                                                onMouseEnter: () => {
                                                    S.onItemHover(), eC(e.index)
                                                },
                                                channelName: t.label,
                                                showHash: t.showHash,
                                                isPrivate: t.isPrivate,
                                                leadingIcon: t.leadingIcon,
                                                styles: ef
                                            })
                                        }, n)
                                    })
                                })
                            }) : (0, v.jsx)("div", {
                                style: eu.emptyState,
                                children: (0, v.jsx)(n(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "tertiary",
                                    children: (0, v.jsx)(n(109939).sA, { ...eo.noResults
                                    })
                                })
                            })
                        }), Z ? void 0 : (0, v.jsxs)("div", {
                            style: eu.listboxFooter,
                            children: [(0, v.jsxs)("span", {
                                style: eu.listboxFooterLeft,
                                children: [(0, v.jsx)(n(16275).I, {
                                    icon: n(697198).lockSmallIcon,
                                    size: "xs",
                                    colorVariant: "tertiary"
                                }), (0, v.jsx)("div", {
                                    style: eu.listboxFooterText,
                                    children: (0, v.jsx)(n(109939).sA, { ...eo.privateChannelsFooterLabel
                                    })
                                })]
                            }), (0, v.jsx)(n(746434).E, {
                                color: "gray",
                                content: x.formatMessage(eo.privateChannelsFooterBadge)
                            })]
                        })]
                    })
                })
            }

            function ep(e) {
                var t, n;
                let {
                    selection: a
                } = e;
                if ((0, er().NL)(a)) return a;
                let i = null == (t = (n = er().A2.slackChannel).parseUri) ? void 0 : t.call(n, a);
                if (i && !(i instanceof Error) && "slackChannel" === i.type) return i.channelId
            }

            function em(e) {
                let {
                    selection: t
                } = e;
                return ep({
                    selection: t
                }) ? ? t
            }
            let ef = (0, n(109939).YK)({
                    triggerOnEmojiLabel: {
                        id: "workflow.agent.triggers.selectors.slack.triggerOnEmojiLabel",
                        defaultMessage: "Trigger on emoji"
                    },
                    anyEmoji: {
                        id: "workflowSlackEmojiPicker.anyEmoji",
                        defaultMessage: "Any emoji"
                    },
                    loading: {
                        id: "workflowSlackEmojiPicker.loading",
                        defaultMessage: "Loading"
                    },
                    emojiButtonLabel: {
                        id: "workflow.agent.triggers.selectors.slack.emojiButtonLabel",
                        defaultMessage: "Choose emoji"
                    }
                }),
                ey = {
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        paddingInline: 4,
                        paddingBlock: 2
                    },
                    labelText: { ...n(649316).U.caption,
                        color: n(632079).Tj.text.secondary,
                        lineHeight: "18px"
                    },
                    button: {
                        width: "100%",
                        border: `1.5px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                        backgroundColor: n(632079).Tj.background.primary,
                        paddingInline: 8,
                        paddingBlock: 0
                    },
                    buttonValue: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        minWidth: 0,
                        overflow: "hidden"
                    },
                    emojiList: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        minWidth: 0,
                        overflow: "hidden"
                    },
                    emojiItem: {
                        display: "flex",
                        alignItems: "center"
                    },
                    chevron: {
                        flexShrink: 0
                    }
                };

            function eh(e) {
                let {
                    disabled: t = !1,
                    moduleId: i,
                    onUpdateReactions: l,
                    reactions: r,
                    shouldDefaultToFirstEmoji: o = !1,
                    workflowDefinitionPointer: s
                } = e, d = (0, n(109939).tz)(), c = (0, n(554988).j)(), u = (0, n(682985).uB)(void 0, n(510969).A), {
                    allEmojis: g,
                    isLoading: p
                } = (0, n(232843).M)({
                    workflowDefinitionPointer: s,
                    moduleId: i
                }), m = (0, a.useMemo)(() => r ? ? [], [r]);
                (0, n(383953).w)(() => {
                    if (!o || void 0 !== r || p) return;
                    let e = Object.keys(g)[0];
                    void 0 !== e && l([e])
                });
                let f = (0, a.useMemo)(() => p && 0 === Object.keys(g).length ? (0, v.jsx)(n(111010).D, {
                    styleKey: "bodyRegular",
                    colorVariant: "primary",
                    children: (0, v.jsx)(n(109939).sA, { ...ef.loading
                    })
                }) : 0 === m.length ? (0, v.jsx)(n(111010).D, {
                    styleKey: "bodyRegular",
                    colorVariant: "primary",
                    children: (0, v.jsx)(n(109939).sA, { ...ef.anyEmoji
                    })
                }) : (0, v.jsx)("div", {
                    style: ey.emojiList,
                    children: m.map(e => (0, v.jsx)("span", {
                        style: ey.emojiItem,
                        children: (0, v.jsx)(n(876287).Z, {
                            emojiName: e,
                            allEmojis: g,
                            size: 16
                        })
                    }, e))
                }), [g, p, m]);
                return (0, v.jsxs)("div", {
                    style: ey.container,
                    children: [(0, v.jsx)("div", {
                        style: ey.labelText,
                        children: (0, v.jsx)(n(109939).sA, { ...ef.triggerOnEmojiLabel
                        })
                    }), (0, v.jsx)(n(656252).A, {
                        buttonPopupStore: u,
                        popupType: c,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        originGap: 4,
                        content: e => (0, v.jsx)(n(711368)._, {
                            allEmojis: g,
                            isLoading: p,
                            triggerEmojis: m,
                            writeReactions: l,
                            onClose: e.close
                        }),
                        children: e => (0, v.jsx)(n(548436).A, { ...t ? {} : e,
                            size: "xl",
                            ariaLabel: d.formatMessage(ef.emojiButtonLabel),
                            style: ey.button,
                            disabled: t,
                            children: (0, v.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%",
                                gap: 8,
                                children: [(0, v.jsx)("div", {
                                    style: ey.buttonValue,
                                    children: f
                                }), (0, v.jsx)(n(16275).I, {
                                    icon: n(595453).arrowChevronSingleDownSmallIcon,
                                    size: "xs",
                                    colorVariant: "secondary",
                                    style: ey.chevron
                                })]
                            })
                        })
                    })]
                })
            }
            let ev = (0, n(109939).YK)({
                    moreSettings: {
                        id: "workflow.agent.triggersV4.configPane.moreSettings",
                        defaultMessage: "More settings"
                    },
                    includeThreadReplies: {
                        id: "workflow.agent.triggersV4.configPane.slack.includeThreadReplies",
                        defaultMessage: "Include thread replies"
                    },
                    messageFilters: {
                        id: "workflow.agent.triggersV4.configPane.slack.messageFilters",
                        defaultMessage: "Message contains any keyword or phrase"
                    },
                    followThreadMessages: {
                        id: "workflow.agent.triggersV4.configPane.slack.followThreadMessages",
                        defaultMessage: "Allow agent to monitor follow up messages in the thread"
                    },
                    allowMultipleReactions: {
                        id: "workflow.agent.triggersV4.configPane.slack.allowMultipleReactions",
                        defaultMessage: "Allow agent to trigger multiple times per emoji reaction"
                    },
                    showTypingIndicator: {
                        id: "workflow.agent.triggersV4.configPane.slack.showTypingIndicator",
                        defaultMessage: "Show typing indicator in Slack"
                    },
                    mentionHelpHowItWorksLabel: {
                        id: "workflow.agent.triggersV4.configPane.slack.mentionHelp.howItWorksLabel",
                        defaultMessage: "How it works"
                    },
                    mentionHelpHowItWorksDescription: {
                        id: "workflow.agent.triggersV4.configPane.slack.mentionHelp.howItWorksDescription",
                        defaultMessage: "Triggers when the agent is @mentioned in Slack"
                    },
                    mentionHelpUserName: {
                        id: "workflow.agent.triggersV4.configPane.slack.mentionHelp.userName",
                        defaultMessage: "shannon"
                    },
                    mentionHelpDate: {
                        id: "workflow.agent.triggersV4.configPane.slack.mentionHelp.date",
                        defaultMessage: "10:41 AM"
                    },
                    mentionHelpMessage: {
                        id: "workflow.agent.triggersV4.configPane.slack.mentionHelp.message",
                        defaultMessage: "<agentNameTag>@{agentName}</agentNameTag> what’s the latest on this?"
                    },
                    mentionHelpAgentReplyCount: {
                        id: "workflow.agent.triggersV4.configPane.slack.mentionHelp.agentReplyCount",
                        defaultMessage: "1 reply"
                    },
                    mentionHelpSlackAdminRequirementLink: {
                        id: "workflow.agent.triggersV4.configPane.slack.mentionHelp.slackAdminRequirementLink",
                        defaultMessage: "Requires your Slack admin to enable user group creation first. <learnMore>Learn more.</learnMore>"
                    }
                }),
                ex = "rgb(18, 100, 163)",
                eb = {
                    paddingInline: 4
                },
                ew = {
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    paddingInline: 4,
                    paddingBlock: 2
                },
                ek = {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    cursor: "pointer"
                },
                eC = {
                    mentionHelpSection: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        paddingInline: 4
                    },
                    mentionHelpCardContainer: {
                        display: "flex",
                        paddingBlockStart: 20,
                        paddingInlineStart: 20,
                        backgroundColor: n(632079).Tj.background.secondary,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: n(632079).Tj.border.secondary
                    },
                    mentionHelpCard: {
                        display: "flex",
                        flexGrow: 1,
                        flexDirection: "column",
                        backgroundColor: n(632079).Tj.background.primary,
                        gap: 8,
                        paddingBlock: 20,
                        paddingInlineStart: 20,
                        borderStartStartRadius: 12,
                        borderStartEndRadius: 0,
                        borderEndStartRadius: 0,
                        borderEndEndRadius: 10,
                        borderTopWidth: 1,
                        borderTopStyle: "solid",
                        borderTopColor: n(632079).Tj.border.secondary,
                        borderInlineStartWidth: 1,
                        borderInlineStartStyle: "solid",
                        borderInlineStartColor: n(632079).Tj.border.secondary
                    },
                    mentionHelpAgentIconContainer: {
                        borderRadius: 8
                    },
                    mentionHelpMessageUserAvatarContainer: {
                        width: 36,
                        height: 36,
                        flexShrink: 0,
                        borderRadius: 8,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: n(632079).Tj.border.secondary,
                        backgroundColor: n(632079).Tj.background.secondary,
                        display: "flex",
                        overflow: "hidden"
                    },
                    mentionHelpMessageUserAvatarImage: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    },
                    mentionHelpAgentName: {
                        color: ex,
                        backgroundColor: "rgba(54, 197, 240, 0.13)",
                        borderRadius: 3,
                        paddingBlock: 1,
                        paddingInline: 2
                    },
                    mentionHelpAgentReplyRow: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        paddingInline: 44
                    },
                    mentionHelpAgentReplyText: {
                        color: ex,
                        fontWeight: n(699422).Wy.medium
                    },
                    mentionHelpLearnAboutSharingLink: {
                        display: "flex",
                        alignItems: "start",
                        marginBlockStart: 8,
                        gap: 2
                    },
                    mentionHelpLearnMoreLink: {
                        display: "inline"
                    },
                    mentionHelpLearnMoreText: {
                        textDecoration: "underline"
                    }
                };

            function ej(e) {
                var t, i, l;
                let {
                    workflowStore: r,
                    workflowValue: o,
                    workflowDefinitionPointer: s,
                    draftTrigger: d,
                    saveDraftTrigger: u,
                    moduleValue: g,
                    isEditMode: p,
                    disabled: m,
                    emptyState: f
                } = e, y = (0, n(682985).K8)(() => {
                    var e;
                    return null == (e = r.getData()) ? void 0 : e.name
                }, [r]), h = (0, n(102292).V)(y).trim() || "agent", x = (0, n(682985).K8)(() => {
                    var e;
                    return null == (e = r.getData()) ? void 0 : e.icon
                }, [r]), b = "on" === (0, n(604306).r)("ai_model_cost_agent_page_created_deleted_trigger_filters", {
                    disableExposureLogging: !0
                }), w = ((null == d || null == (t = d.state) ? void 0 : t.type) === "notion.page.created" || (null == d || null == (i = d.state) ? void 0 : i.type) === "notion.page.deleted") && !!(null == d || null == (l = d.state) ? void 0 : l.collectionId) && b;
                (0, a.useEffect)(() => {
                    w && n(218744).default.getEligibleGroup({
                        experimentId: "ai_model_cost_agent_page_created_deleted_trigger_filters",
                        defaultGroup: "control"
                    })
                }, [w]);
                let k = (0, a.useCallback)(e => {
                        m || u(e)
                    }, [m, u]),
                    C = (0, a.useCallback)(e => {
                        if (!m && d && d.state && ("notion.page.created" === d.state.type || "notion.page.updated" === d.state.type || "notion.page.deleted" === d.state.type || "notion.page.discussion.comment.added" === d.state.type || "notion.database.agent.updated" === d.state.type)) {
                            var t, n;
                            k({ ...d,
                                state: (t = d.state, n = e.databaseId, "notion.page.updated" === t.type ? { ...t,
                                    collectionId: n,
                                    propertyIds: void 0,
                                    propertyFilters: void 0,
                                    shouldIgnorePageContentUpdates: t.shouldIgnorePageContentUpdates ? ? !0
                                } : "notion.page.created" === t.type || "notion.page.deleted" === t.type ? { ...t,
                                    collectionId: n,
                                    viewId: void 0,
                                    propertyFilters: void 0
                                } : { ...t,
                                    collectionId: n
                                })
                            })
                        }
                    }, [m, d, k]),
                    j = (0, a.useCallback)(() => {
                        if (!m && d && d.state && ("notion.page.created" === d.state.type || "notion.page.updated" === d.state.type || "notion.page.deleted" === d.state.type || "notion.page.discussion.comment.added" === d.state.type || "notion.database.agent.updated" === d.state.type)) {
                            var e;
                            k({ ...d,
                                state: "notion.page.updated" === (e = d.state).type ? { ...e,
                                    collectionId: void 0,
                                    propertyIds: void 0,
                                    propertyFilters: void 0,
                                    shouldIgnorePageContentUpdates: !0
                                } : "notion.page.created" === e.type || "notion.page.deleted" === e.type ? { ...e,
                                    collectionId: void 0,
                                    viewId: void 0,
                                    propertyFilters: void 0
                                } : { ...e,
                                    collectionId: void 0
                                }
                            })
                        }
                    }, [m, d, k]),
                    I = (0, a.useCallback)(e => {
                        !m && d && d.state && ("notion.page.created" === d.state.type || "notion.page.deleted" === d.state.type) && k({ ...d,
                            state: { ...d.state,
                                viewId: e
                            }
                        })
                    }, [m, d, k]),
                    M = (0, a.useCallback)(e => {
                        if (m || !d || !d.state || "slack.message" !== d.state.type && "slack.thread.created" !== d.state.type && "slack.app.mention" !== d.state.type && "slack.reaction.added" !== d.state.type) return;
                        let t = e.map(e => e.channelUrl ? ? e.channelId);
                        k({ ...d,
                            state: { ...d.state,
                                channelIds: t,
                                allChannels: !1
                            }
                        })
                    }, [m, d, k]),
                    T = (0, a.useCallback)(e => {
                        if (m || !d || !d.state || "slack.message" !== d.state.type && "slack.thread.created" !== d.state.type && "slack.app.mention" !== d.state.type && "slack.reaction.added" !== d.state.type) return;
                        let t = e.map(e => e.channelUrl ? ? e.channelId);
                        k({ ...d,
                            state: { ...d.state,
                                channelIds: t.length > 0 ? t : void 0,
                                allChannels: !0
                            }
                        })
                    }, [m, d, k]),
                    S = (0, a.useCallback)(e => {
                        var t;
                        m || (null == d || null == (t = d.state) ? void 0 : t.type) === "slack.reaction.added" && k({ ...d,
                            state: { ...d.state,
                                reactions: e
                            }
                        })
                    }, [m, d, k]);
                if (!d) return f;
                let A = d.state;
                if ((null == A ? void 0 : A.type) === "recurrence") return (0, v.jsx)(n(579585).ae, {
                    recurrenceTrigger: A,
                    disabled: m,
                    updateRecurrenceState: e => {
                        if (m) return;
                        let t = (0, n(832248).es)(e),
                            a = {
                                type: "recurrence",
                                frequency: t.frequency,
                                interval: t.interval,
                                timezone: t.timezone,
                                start_date: t.start_date,
                                ...(0, c().O9)(t.hour) && {
                                    hour: t.hour
                                },
                                ...(0, c().O9)(t.minute) && {
                                    minute: t.minute
                                },
                                ...(0, c().O9)(t.end_condition) && {
                                    end_condition: t.end_condition
                                },
                                ...(0, c().O9)(A.scheduleId) && {
                                    scheduleId: A.scheduleId
                                },
                                ...(0, c().O9)(A.collectionId) && {
                                    collectionId: A.collectionId
                                },
                                ...(0, c().O9)(A.viewId) && {
                                    viewId: A.viewId
                                }
                            };
                        k({ ...d,
                            state: "week" === t.frequency ? { ...a,
                                frequency: "week",
                                weekdays: t.weekdays
                            } : "month" === t.frequency ? { ...a,
                                frequency: "month",
                                monthly_restriction: t.monthly_restriction
                            } : a
                        })
                    }
                });
                if (A && ("notion.page.created" === A.type || "notion.page.updated" === A.type || "notion.page.deleted" === A.type || "notion.page.discussion.comment.added" === A.type || "notion.database.agent.updated" === A.type) && s) {
                    let e = { ...d,
                            state: A
                        },
                        t = "notion.page.updated" === A.type || b;
                    return (0, v.jsxs)(n(4458).VP, {
                        gap: 16,
                        children: [(0, v.jsx)(ee, {
                            workflowDefinitionPointer: s,
                            selectedDatabaseId: A.collectionId,
                            onSelectDatabase: C,
                            onClearDatabase: j,
                            autoFocus: !p,
                            disabled: m
                        }), "notion.page.updated" === A.type || "notion.page.created" === A.type || "notion.page.deleted" === A.type ? A.collectionId ? (0, v.jsxs)(v.Fragment, {
                            children: [("notion.page.created" === A.type || "notion.page.deleted" === A.type) && t ? (0, v.jsx)(el, {
                                selectedDatabaseId: A.collectionId,
                                selectedViewId: A.viewId,
                                onSelectView: I,
                                disabled: m
                            }) : void 0, (0, v.jsx)("div", {
                                style: eb,
                                children: (0, v.jsx)(n(704917)._Y, {
                                    store: r,
                                    collectionId: A.collectionId,
                                    isInTranscript: !1,
                                    workflowDefinitionPointer: s,
                                    trigger: { ...d,
                                        state: A
                                    },
                                    saveTrigger: k,
                                    showPageContentEditedToggle: !1,
                                    supportsLifecyclePropertyFilters: t
                                })
                            })]
                        }) : (0, v.jsx)(n(860050).F, {
                            store: r,
                            collectionId: A.collectionId,
                            isInTranscript: !1,
                            workflowDefinitionPointer: s,
                            trigger: e,
                            saveTrigger: k,
                            showPageContentOption: !1
                        }) : void 0]
                    })
                }
                if (A && ("slack.message" === A.type || "slack.thread.created" === A.type || "slack.app.mention" === A.type || "slack.reaction.added" === A.type) && d.moduleId && g && s) {
                    let e = { ...d,
                        state: A
                    };
                    return (0, v.jsx)(eI, {
                        workflowStore: r,
                        mentionAgentIcon: x,
                        draftTrigger: e,
                        moduleId: d.moduleId,
                        moduleValue: g,
                        workflowDefinitionPointer: s,
                        mentionAgentName: h,
                        onSelectChannels: M,
                        onSelectAllPublicChannels: T,
                        onUpdateReactions: S,
                        isNewTrigger: !p,
                        saveDraftTrigger: k,
                        disabled: m
                    })
                }
                return A && ("calendar.event.created" === A.type || "calendar.event.updated" === A.type || "calendar.event.canceled" === A.type) ? (0, v.jsx)(W, {
                    trigger: d,
                    saveTrigger: k,
                    moduleValue: g,
                    disabled: m,
                    autoFocus: !p
                }) : A && ("mail.email.received" === A.type || "mail.email.sent" === A.type || "mail.email.receivedorsent" === A.type || "mail.label.applied" === A.type) && o && s ? (0, v.jsx)(X, {
                    workflowStore: r,
                    workflowValue: o,
                    workflowDefinitionPointer: s,
                    trigger: d,
                    saveTrigger: k,
                    moduleValue: g,
                    disabled: m,
                    autoFocus: !p
                }) : o && s ? (0, v.jsx)(n(210511).WorkflowTriggerConfiguration, {
                    workflowStore: r,
                    workflowValue: o,
                    workflowDefinitionPointer: s,
                    trigger: d,
                    saveTrigger: k,
                    isInTranscript: !1,
                    disabled: m
                }) : f
            }

            function eI(e) {
                let {
                    workflowStore: t,
                    mentionAgentIcon: i,
                    draftTrigger: l,
                    moduleId: r,
                    moduleValue: o,
                    workflowDefinitionPointer: s,
                    mentionAgentName: d,
                    onSelectChannels: c,
                    onSelectAllPublicChannels: u,
                    onUpdateReactions: g,
                    isNewTrigger: p,
                    saveDraftTrigger: m,
                    disabled: f
                } = e, y = l.state, [h, x] = (0, a.useState)(!1), b = (0, a.useCallback)(() => {
                    x(!0)
                }, []), w = (0, a.useCallback)(() => {
                    x(!1)
                }, []), {
                    isSlackReactionDedupeEnabled: k,
                    isSetSlackStatusEnabled: C
                } = (0, n(682985).K8)(() => {
                    let e = n(218744).default.getConfig({
                        configName: "custom_agent_sub_features"
                    });
                    return {
                        isSlackReactionDedupeEnabled: !!e.slack_reaction_dedupe,
                        isSetSlackStatusEnabled: !!e.set_slack_status
                    }
                }, []), j = (0, n(682985).K8)(() => ((null == y ? void 0 : y.type) === "slack.message" || (null == y ? void 0 : y.type) === "slack.thread.created") && "on" === n(218744).default.getEligibleGroup({
                    experimentId: "ai_model_cost_slack_trigger_message_contains_filter",
                    defaultGroup: "control"
                }), [null == y ? void 0 : y.type]), I = (0, a.useCallback)(() => {
                    !f && y && ("slack.message" === y.type || "slack.thread.created" === y.type) && m({ ...l,
                        state: { ...y,
                            type: "slack.message" === y.type ? "slack.thread.created" : "slack.message"
                        }
                    })
                }, [f, l, m, y]), M = (0, a.useCallback)(() => {
                    !f && y && ("slack.app.mention" === y.type || "slack.reaction.added" === y.type) && m({ ...l,
                        state: { ...y,
                            shouldSubscribeToThread: !y.shouldSubscribeToThread
                        }
                    })
                }, [f, l, m, y]), S = (0, a.useCallback)(() => {
                    f || (null == y ? void 0 : y.type) !== "slack.reaction.added" || m({ ...l,
                        state: { ...y,
                            allowMultipleReactions: !y.allowMultipleReactions
                        }
                    })
                }, [f, l, m, y]), A = (0, a.useCallback)(() => {
                    !f && y && m({ ...l,
                        state: { ...y,
                            shouldShowTyping: !(0, n(264420).NI)(y)
                        }
                    })
                }, [f, l, m, y]), P = (0, n(682985).K8)(() => ((null == y ? void 0 : y.type) === "slack.message" || (null == y ? void 0 : y.type) === "slack.thread.created") && n(886556).z.customAgentsSlackDisableAllChannels(), [y]), E = (0, a.useCallback)(e => {
                    !f && y && ("slack.message" === y.type || "slack.thread.created" === y.type) && m({ ...l,
                        state: { ...y,
                            filters: e
                        }
                    })
                }, [f, l, m, y]);
                if (!y) return null;
                let R = "slack.message" === y.type || "slack.thread.created" === y.type,
                    L = "slack.app.mention" === y.type,
                    V = "slack.app.mention" === y.type || "slack.reaction.added" === y.type,
                    _ = k && "slack.reaction.added" === y.type;
                return (0, v.jsxs)(n(4458).VP, {
                    gap: 16,
                    children: [L ? (0, v.jsxs)("div", {
                        style: eC.mentionHelpSection,
                        children: [(0, v.jsxs)(n(4458).VP, {
                            gap: 2,
                            children: [(0, v.jsx)(n(111010).D, {
                                styleKey: "caption",
                                colorVariant: "secondary",
                                children: (0, v.jsx)(n(109939).sA, { ...ev.mentionHelpHowItWorksLabel
                                })
                            }), (0, v.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "primary",
                                children: (0, v.jsx)(n(109939).sA, { ...ev.mentionHelpHowItWorksDescription
                                })
                            })]
                        }), (0, v.jsxs)("div", {
                            children: [(0, v.jsx)("div", {
                                style: eC.mentionHelpCardContainer,
                                children: (0, v.jsxs)("div", {
                                    style: eC.mentionHelpCard,
                                    children: [(0, v.jsxs)(n(4458).fI, {
                                        gap: 8,
                                        children: [(0, v.jsx)("div", {
                                            style: eC.mentionHelpMessageUserAvatarContainer,
                                            children: (0, v.jsx)("img", {
                                                src: T,
                                                alt: "",
                                                style: eC.mentionHelpMessageUserAvatarImage
                                            })
                                        }), (0, v.jsxs)("div", {
                                            children: [(0, v.jsxs)(n(4458).fI, {
                                                alignItems: "center",
                                                gap: 6,
                                                children: [(0, v.jsx)(n(111010).D, {
                                                    styleKey: "bodySmBold",
                                                    colorVariant: "primary",
                                                    children: (0, v.jsx)(n(109939).sA, { ...ev.mentionHelpUserName
                                                    })
                                                }), (0, v.jsx)(n(111010).D, {
                                                    styleKey: "captionSm",
                                                    colorVariant: "secondary",
                                                    children: (0, v.jsx)(n(109939).sA, { ...ev.mentionHelpDate
                                                    })
                                                })]
                                            }), (0, v.jsx)(n(111010).D, {
                                                styleKey: "bodySm",
                                                colorVariant: "primary",
                                                children: (0, v.jsx)(n(109939).sA, { ...ev.mentionHelpMessage,
                                                    values: {
                                                        agentName: d,
                                                        agentNameTag: e => (0, v.jsx)("span", {
                                                            style: eC.mentionHelpAgentName,
                                                            children: e
                                                        })
                                                    }
                                                })
                                            })]
                                        })]
                                    }), (0, v.jsxs)("div", {
                                        style: eC.mentionHelpAgentReplyRow,
                                        children: [(0, v.jsx)("div", {
                                            style: eC.mentionHelpAgentIconContainer,
                                            children: (0, v.jsx)(n(651790).AgentIcon, {
                                                agentIcon: i,
                                                workflowStore: t,
                                                size: 20
                                            })
                                        }), (0, v.jsx)(n(111010).D, {
                                            styleKey: "bodySmMedium",
                                            children: (0, v.jsx)("span", {
                                                style: eC.mentionHelpAgentReplyText,
                                                children: (0, v.jsx)(n(109939).sA, { ...ev.mentionHelpAgentReplyCount
                                                })
                                            })
                                        })]
                                    })]
                                })
                            }), (0, v.jsxs)("div", {
                                style: eC.mentionHelpLearnAboutSharingLink,
                                children: [(0, v.jsx)(n(16275).I, {
                                    icon: n(372181).infoCircleSmallIcon,
                                    size: "sm",
                                    colorVariant: "tertiary"
                                }), (0, v.jsx)(n(111010).D, {
                                    as: "span",
                                    styleKey: "captionMedium",
                                    colorVariant: "tertiary",
                                    children: (0, v.jsx)(n(109939).sA, { ...ev.mentionHelpSlackAdminRequirementLink,
                                        values: {
                                            learnMore: e => (0, v.jsx)(n(68774).N, {
                                                style: eC.mentionHelpLearnMoreLink,
                                                href: (0, n(442564).x)("guides.customAgentsConfigureTriggersAndSchedules"),
                                                external: !0,
                                                onMouseEnter: b,
                                                onMouseLeave: w,
                                                children: (0, v.jsx)(n(111010).D, {
                                                    as: "span",
                                                    styleKey: "captionMedium",
                                                    style: eC.mentionHelpLearnMoreText,
                                                    colorVariant: h ? "secondary" : "tertiary",
                                                    children: e
                                                })
                                            })
                                        }
                                    })
                                })]
                            })]
                        })]
                    }) : void 0, (0, v.jsx)(eg, {
                        moduleId: r,
                        moduleValue: o,
                        workflowDefinitionPointer: s,
                        selectedChannelIds: y.channelIds,
                        isAllPublicChannels: !!y.allChannels,
                        onSelectChannels: c,
                        onSelectAllPublicChannels: u,
                        disableAllPublicChannels: P,
                        disabled: f
                    }), R && j ? (0, v.jsxs)("div", {
                        style: ew,
                        children: [(0, v.jsx)(n(111010).D, {
                            styleKey: "caption",
                            colorVariant: "secondary",
                            children: (0, v.jsx)(n(109939).sA, { ...ev.messageFilters
                            })
                        }), (0, v.jsx)(n(862884).k, {
                            filters: y.filters,
                            onChange: E,
                            disabled: f
                        })]
                    }) : void 0, "slack.reaction.added" === y.type ? (0, v.jsx)(eh, {
                        moduleId: r,
                        workflowDefinitionPointer: s,
                        reactions: y.reactions,
                        onUpdateReactions: g,
                        shouldDefaultToFirstEmoji: p,
                        disabled: f
                    }) : void 0, R || V || _ || C ? (0, v.jsx)("div", {
                        style: eb,
                        children: (0, v.jsx)(D, {
                            title: (0, v.jsx)(n(109939).sA, { ...ev.moreSettings
                            }),
                            defaultExpanded: !1,
                            children: (0, v.jsxs)(n(4458).VP, {
                                gap: 12,
                                children: [R ? (0, v.jsxs)("label", {
                                    style: ek,
                                    children: [(0, v.jsx)(n(349050).S, {
                                        checked: "slack.message" === y.type,
                                        size: 16,
                                        onClick: I,
                                        disabled: f
                                    }), (0, v.jsx)(n(111010).D, {
                                        styleKey: "caption",
                                        colorVariant: "primary",
                                        children: (0, v.jsx)(n(109939).sA, { ...ev.includeThreadReplies
                                        })
                                    })]
                                }) : void 0, V ? (0, v.jsxs)("label", {
                                    style: ek,
                                    children: [(0, v.jsx)(n(349050).S, {
                                        checked: y.shouldSubscribeToThread ? ? !1,
                                        size: 16,
                                        onClick: M,
                                        disabled: f
                                    }), (0, v.jsx)(n(111010).D, {
                                        styleKey: "caption",
                                        colorVariant: "primary",
                                        children: (0, v.jsx)(n(109939).sA, { ...ev.followThreadMessages
                                        })
                                    })]
                                }) : void 0, _ ? (0, v.jsxs)("label", {
                                    style: ek,
                                    children: [(0, v.jsx)(n(349050).S, {
                                        checked: y.allowMultipleReactions ? ? !1,
                                        size: 16,
                                        onClick: S,
                                        disabled: f
                                    }), (0, v.jsx)(n(111010).D, {
                                        styleKey: "caption",
                                        colorVariant: "primary",
                                        children: (0, v.jsx)(n(109939).sA, { ...ev.allowMultipleReactions
                                        })
                                    })]
                                }) : void 0, C ? (0, v.jsxs)("label", {
                                    style: ek,
                                    children: [(0, v.jsx)(n(349050).S, {
                                        checked: (0, n(264420).NI)(y),
                                        size: 16,
                                        onClick: A,
                                        disabled: f
                                    }), (0, v.jsx)(n(111010).D, {
                                        styleKey: "caption",
                                        colorVariant: "primary",
                                        children: (0, v.jsx)(n(109939).sA, { ...ev.showTypingIndicator
                                        })
                                    })]
                                }) : void 0]
                            })
                        })
                    }) : void 0]
                })
            }
            let eM = {
                container: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    willChange: "transform"
                },
                dot: {
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    backgroundColor: n(632079).Tj.border.secondary
                }
            };

            function eT(e) {
                let {
                    isAnimating: t
                } = e;
                return (0, v.jsx)(n(153321).P.div, {
                    style: eM.container,
                    "aria-hidden": !0,
                    animate: t ? {
                        x: [0, 12]
                    } : {
                        x: 0
                    },
                    transition: t ? {
                        duration: .4,
                        repeat: 1 / 0,
                        ease: "linear"
                    } : {
                        duration: .15,
                        ease: "easeOut"
                    },
                    children: Array.from({
                        length: 6
                    }, (e, a) => (0, v.jsx)(n(153321).P.div, {
                        style: eM.dot,
                        animate: t ? {
                            backgroundColor: [n(632079).Tj.border.secondary, n(632079).Tj.blue.background.accentPrimary, n(632079).Tj.border.secondary]
                        } : {
                            backgroundColor: n(632079).Tj.border.secondary
                        },
                        transition: t ? {
                            duration: 1,
                            repeat: 1 / 0,
                            delay: .1 * a
                        } : {
                            duration: .15
                        }
                    }, a))
                })
            }
            let eS = (0, n(109939).YK)({
                    connectToTitle: {
                        id: "workflow.agent.triggers.connect.connectToTitle",
                        defaultMessage: "Connect to {integration}"
                    },
                    connectDescription: {
                        id: "workflow.agent.triggers.connect.screen.connectDescription",
                        defaultMessage: "Authorize access to enable your agent to interact with {integration}."
                    },
                    connectedTitle: {
                        id: "workflow.agent.triggers.connect.connectedTitle",
                        defaultMessage: "Connected!"
                    },
                    connectedDescription: {
                        id: "workflow.agent.triggers.connect.connectedDescription",
                        defaultMessage: "{integration} is now linked to your agent"
                    },
                    connectButton: {
                        id: "workflow.agent.triggers.connect.connectCTAButton",
                        defaultMessage: "Connect {integration}"
                    },
                    connectingButton: {
                        id: "workflow.agent.triggers.connect.connectingButton",
                        defaultMessage: "Connecting…"
                    },
                    backButton: {
                        id: "workflow.agent.triggers.connect.backButton",
                        defaultMessage: "Back"
                    }
                }),
                eA = {
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        backgroundColor: n(632079).Tj.background.primary
                    },
                    header: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        paddingInline: 20,
                        paddingBlock: 20,
                        minHeight: 28,
                        boxSizing: "border-box"
                    },
                    headerButton: {
                        marginInlineStart: -4,
                        width: 28,
                        height: 28,
                        flexShrink: 0
                    },
                    content: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        flex: 1,
                        paddingInline: 32,
                        paddingBlock: 32
                    },
                    authContainer: {
                        display: "flex",
                        width: "100%",
                        flexDirection: "column",
                        alignItems: "center"
                    },
                    successContainer: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    },
                    successDescription: {
                        marginTop: 4
                    },
                    successIconCircle: {
                        marginBottom: 24,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 80,
                        height: 80,
                        borderRadius: 9999,
                        backgroundColor: n(632079).Tj.green.background.secondaryTranslucent
                    },
                    iconCard: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 56,
                        height: 56,
                        borderRadius: 16,
                        border: `1px solid ${n(632079).Tj.border.secondary}`,
                        backgroundColor: n(632079).Tj.background.primary,
                        boxShadow: n(632079).Tj.shadow.outline.sm,
                        flexShrink: 0,
                        willChange: "transform"
                    },
                    iconsContainer: {
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        marginBottom: 32,
                        position: "relative"
                    },
                    dotsWrapper: {
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 64,
                        overflow: "hidden"
                    },
                    notionIconCardInner: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        backgroundColor: n(632079).Tj.blue.background.accentPrimary
                    },
                    text: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: 8,
                        maxWidth: 280
                    },
                    description: {
                        maxWidth: 280,
                        marginBottom: 32
                    },
                    button: {
                        width: "100%",
                        maxWidth: 280,
                        borderRadius: 12
                    },
                    buttonContentRow: {
                        display: "flex",
                        alignItems: "center",
                        gap: 10
                    },
                    connectingSpinner: {
                        width: 16,
                        height: 16,
                        borderRadius: 999,
                        border: `2px solid color-mix(in srgb, ${n(632079).Tj.text.inversePrimary} 30%, transparent)`,
                        borderTopColor: n(632079).Tj.text.inversePrimary
                    },
                    style0: {
                        zIndex: 10
                    },
                    style1: {
                        zIndex: 0
                    }
                };

            function eD(e) {
                let {
                    moduleType: t,
                    isConnecting: a,
                    isConnectReady: i,
                    showSuccess: l = !1,
                    onConnect: r,
                    onBack: s
                } = e, d = (0, n(109939).tz)(), c = (0, o().jK)(t), u = (null == c ? void 0 : c.getName(d)) ? ? t, g = null == c ? void 0 : c.getIcon();
                return (0, v.jsxs)("div", {
                    style: eA.container,
                    children: [(0, v.jsx)("div", {
                        style: eA.header,
                        children: (0, v.jsx)(n(374533).A, {
                            icon: n(740158).$,
                            onClick: s,
                            disabled: a,
                            ariaLabel: d.formatMessage(eS.backButton),
                            size: "md",
                            style: eA.headerButton
                        })
                    }), (0, v.jsx)("div", {
                        style: eA.content,
                        children: (0, v.jsx)(n(4458).VP, {
                            alignItems: "center",
                            width: "100%",
                            children: (0, v.jsx)(n(203066).N, {
                                mode: "wait",
                                children: l ? (0, v.jsxs)(n(153321).P.div, {
                                    initial: {
                                        scale: .9,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        opacity: 1
                                    },
                                    style: eA.successContainer,
                                    children: [(0, v.jsx)(n(153321).P.div, {
                                        style: eA.successIconCircle,
                                        initial: {
                                            scale: 0
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20
                                        },
                                        children: (0, v.jsx)(n(16275).I, {
                                            icon: n(15956).checkmarkIcon,
                                            size: 32,
                                            colorPalette: "green",
                                            colorVariant: "accentPrimary"
                                        })
                                    }), (0, v.jsx)(n(111010).D, {
                                        styleKey: "titleSmSemibold",
                                        colorVariant: "primary",
                                        children: (0, v.jsx)(n(109939).sA, { ...eS.connectedTitle
                                        })
                                    }), (0, v.jsx)("div", {
                                        style: eA.successDescription,
                                        children: (0, v.jsx)(n(111010).D, {
                                            styleKey: "bodySm",
                                            colorVariant: "tertiary",
                                            children: (0, v.jsx)(n(109939).sA, { ...eS.connectedDescription,
                                                values: {
                                                    integration: u
                                                }
                                            })
                                        })
                                    })]
                                }, "success") : (0, v.jsxs)(n(153321).P.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    style: eA.authContainer,
                                    children: [(0, v.jsxs)("div", {
                                        style: eA.iconsContainer,
                                        children: [(0, v.jsx)(n(153321).P.div, {
                                            style: { ...eA.iconCard,
                                                ...eA.style0
                                            },
                                            animate: a ? {
                                                x: [0, 20, 0]
                                            } : {
                                                x: 0
                                            },
                                            transition: a ? {
                                                duration: .8,
                                                repeat: 1 / 0,
                                                ease: "easeInOut"
                                            } : {
                                                duration: .15,
                                                ease: "easeOut"
                                            },
                                            children: g ? (0, v.jsx)(n(16275).I, {
                                                icon: g,
                                                size: 28
                                            }) : void 0
                                        }), (0, v.jsx)("div", {
                                            style: { ...eA.dotsWrapper,
                                                ...eA.style1
                                            },
                                            children: (0, v.jsx)(eT, {
                                                isAnimating: a
                                            })
                                        }), (0, v.jsx)(n(153321).P.div, {
                                            style: { ...eA.iconCard,
                                                ...eA.style0
                                            },
                                            animate: a ? {
                                                x: [0, -20, 0]
                                            } : {
                                                x: 0
                                            },
                                            transition: a ? {
                                                duration: .8,
                                                repeat: 1 / 0,
                                                ease: "easeInOut"
                                            } : {
                                                duration: .15,
                                                ease: "easeOut"
                                            },
                                            children: (0, v.jsx)("div", {
                                                style: eA.notionIconCardInner,
                                                children: (0, v.jsx)(n(111010).D, {
                                                    as: "span",
                                                    styleKey: "bodySemibold",
                                                    colorVariant: "inversePrimary",
                                                    children: "N"
                                                })
                                            })
                                        })]
                                    }), (0, v.jsxs)("div", {
                                        style: eA.text,
                                        children: [(0, v.jsx)(n(111010).D, {
                                            styleKey: "titleSmSemibold",
                                            colorVariant: "primary",
                                            children: (0, v.jsx)(n(109939).sA, { ...eS.connectToTitle,
                                                values: {
                                                    integration: u
                                                }
                                            })
                                        }), (0, v.jsx)("div", {
                                            style: eA.description,
                                            children: (0, v.jsx)(n(111010).D, {
                                                styleKey: "bodySm",
                                                colorVariant: "tertiary",
                                                children: (0, v.jsx)(n(109939).sA, { ...eS.connectDescription,
                                                    values: {
                                                        integration: u
                                                    }
                                                })
                                            })
                                        })]
                                    }), (0, v.jsx)(n(4458).fI, {
                                        justifyContent: "center",
                                        width: "100%",
                                        children: (0, v.jsx)(n(912946).A, {
                                            onClick: r,
                                            size: "xl",
                                            disabled: a || !i,
                                            style: eA.button,
                                            ariaLabel: d.formatMessage(eS.connectButton, {
                                                integration: u
                                            }),
                                            children: a ? (0, v.jsxs)("span", {
                                                style: eA.buttonContentRow,
                                                children: [(0, v.jsx)(n(153321).P.div, {
                                                    animate: {
                                                        rotate: 360
                                                    },
                                                    transition: {
                                                        duration: 1,
                                                        repeat: 1 / 0,
                                                        ease: "linear"
                                                    },
                                                    style: eA.connectingSpinner
                                                }), (0, v.jsx)(n(109939).sA, { ...eS.connectingButton
                                                })]
                                            }) : (0, v.jsx)(n(109939).sA, { ...eS.connectButton,
                                                values: {
                                                    integration: u
                                                }
                                            })
                                        })
                                    })]
                                }, "auth")
                            })
                        })
                    })]
                })
            }
            let eP = {
                container: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    paddingInline: 10,
                    paddingBlockStart: 12
                },
                scriptSelectButton: {
                    paddingInline: 10,
                    paddingBlock: 6,
                    borderRadius: 8,
                    border: `1px solid ${n(632079).Tj.border.secondary}`,
                    gap: 6,
                    minWidth: 140,
                    justifyContent: "space-between"
                },
                scriptSelectDisabled: {
                    borderColor: n(632079).Tj.border.secondary,
                    color: n(632079).Tj.text.secondary,
                    opacity: .6
                }
            };

            function eE(e) {
                let {
                    workflowStore: t,
                    triggerStore: i,
                    trigger: l,
                    scripts: r,
                    scriptsEnabled: o,
                    workflowIcon: s,
                    disabled: d = !1
                } = e, c = t.table === n(832375).C0E && !d, u = (0, n(533992).v3)(), g = (0, n(960253).I)(() => ({
                    labelWrapper: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        cursor: c ? "pointer" : "default"
                    }
                }), [c]), p = null != l && l.scriptId ? "script" : "agent", m = (0, a.useMemo)(() => r.find(e => e.id === (null == l ? void 0 : l.scriptId)), [r, null == l ? void 0 : l.scriptId]), f = (0, a.useMemo)(() => {
                    let e = r.findIndex(e => e.id === (null == l ? void 0 : l.scriptId));
                    return e >= 0 ? e : void 0
                }, [r, null == l ? void 0 : l.scriptId]), y = (0, a.useCallback)(e => {
                    i && l && (0, n(377796).createAndCommit)({
                        userAction: "TriggerConfigModal.updateScriptId",
                        environment: u,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: i.pointer.spaceId
                        },
                        perform: t => {
                            (0, n(173157).z)({
                                store: i,
                                data: {
                                    scriptId: e
                                },
                                transaction: t
                            })
                        }
                    })
                }, [u, l, i]), h = (0, a.useCallback)(() => {
                    c && y(void 0)
                }, [y, c]), x = `trigger-action-${(null==l?void 0:l.id)??"new"}-agent`, b = `trigger-action-${(null==l?void 0:l.id)??"new"}-script`, w = (0, a.useCallback)(() => {
                    if (!c || 0 === r.length) return;
                    let e = m ? ? r[0];
                    y(null == e ? void 0 : e.id)
                }, [y, c, r, m]);
                return o ? (0, v.jsxs)("div", {
                    style: eP.container,
                    children: [(0, v.jsx)(n(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        children: (0, v.jsx)(n(109939).sA, {
                            id: "workflow.agent.triggers.doHeader",
                            defaultMessage: "Do"
                        })
                    }), (0, v.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 10,
                        children: [(0, v.jsx)(n(101127).a, {
                            checked: "agent" === p,
                            onChange: h,
                            disabled: !c,
                            name: `trigger-action-${(null==l?void 0:l.id)??"new"}`,
                            value: "agent",
                            selectorSize: "small",
                            id: x
                        }), (0, v.jsxs)("label", {
                            htmlFor: x,
                            style: g.labelWrapper,
                            children: [(0, v.jsx)(n(651790).AgentIcon, {
                                agentIcon: s,
                                workflowStore: t,
                                size: 20
                            }), (0, v.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                children: (0, v.jsx)(n(109939).sA, {
                                    id: "workflow.agent.triggers.do.runAgent",
                                    defaultMessage: "Run agent"
                                })
                            })]
                        })]
                    }), (0, v.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 10,
                        children: [(0, v.jsx)(n(101127).a, {
                            checked: "script" === p,
                            onChange: w,
                            disabled: !c || 0 === r.length,
                            name: `trigger-action-${(null==l?void 0:l.id)??"new"}`,
                            value: "script",
                            selectorSize: "small",
                            id: b
                        }), (0, v.jsxs)("label", {
                            htmlFor: b,
                            style: g.labelWrapper,
                            children: [(0, v.jsx)(n(16275).I, {
                                icon: n(107492).c,
                                size: "sm"
                            }), (0, v.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                children: (0, v.jsx)(n(109939).sA, {
                                    id: "workflow.agent.triggers.do.runScript",
                                    defaultMessage: "Run script"
                                })
                            })]
                        }), (0, v.jsx)(n(656252).A, {
                            disabled: !c || 0 === r.length,
                            popupType: n(656252).z.Popup,
                            alignmentToOrigin: "start",
                            placementToOrigin: "bottom",
                            originGap: 4,
                            content: ({
                                close: e
                            }) => {
                                let t = 0 === r.length ? [{
                                    key: "no-scripts",
                                    render: e => (0, v.jsx)(n(844565).A, { ...e
                                    }),
                                    items: [{
                                        key: "no-scripts-item",
                                        render: e => (0, v.jsx)(n(95582).A, { ...e,
                                            title: (0, v.jsx)(n(109939).sA, {
                                                id: "workflow.agent.triggers.do.noScripts",
                                                defaultMessage: "No scripts available"
                                            }),
                                            disabled: !0,
                                            ignoreLocalHoverState: !0
                                        }),
                                        action: () => e()
                                    }]
                                }] : [{
                                    key: "scripts",
                                    render: e => (0, v.jsx)(n(844565).A, { ...e
                                    }),
                                    items: r.map(t => ({
                                        key: t.id,
                                        render: (e, a) => (0, v.jsx)(n(95582).A, { ...e,
                                            onFocus: a.onFocus,
                                            title: t.name,
                                            isChecked: t.id === (null == m ? void 0 : m.id)
                                        }),
                                        action: () => {
                                            y(t.id), e()
                                        }
                                    }))
                                }];
                                return (0, v.jsx)(n(747369).A, {
                                    menuType: n(649476).gu.Popup,
                                    minWidth: 220,
                                    children: (0, v.jsx)(n(558045).A, {
                                        type: n(558045).O.Vertical,
                                        initialFocus: f,
                                        sections: t
                                    })
                                })
                            },
                            children: e => (0, v.jsxs)(n(988022).p, { ...e,
                                style: { ...eP.scriptSelectButton,
                                    ...0 === r.length || !c ? eP.scriptSelectDisabled : void 0
                                },
                                children: [(0, v.jsx)("span", {
                                    children: m ? m.name : (0, v.jsx)(n(109939).sA, {
                                        id: "workflow.agent.triggers.do.selectScript",
                                        defaultMessage: "Select script"
                                    })
                                }), (0, v.jsx)(n(16275).I, {
                                    icon: n(595453).arrowChevronSingleDownSmallIcon,
                                    size: "sm"
                                })]
                            })
                        })]
                    })]
                }) : null
            }
            let eR = (0, n(109939).YK)({
                    configureHeader: {
                        id: "workflow.agent.triggers.pane.configureHeader",
                        defaultMessage: "Configure"
                    },
                    oauthPopupTitle: {
                        id: "workflows.hooks.useModuleAuthDetails.title",
                        defaultMessage: "Authenticate"
                    },
                    slackMessageHeader: {
                        id: "workflow.agent.triggers.pane.slack.messageHeader",
                        defaultMessage: "Message posted"
                    },
                    selectMailClient: {
                        id: "workflow.agent.triggersV4.pane.selectMailClient",
                        defaultMessage: "Select"
                    }
                }),
                eL = {
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    overflowY: "hidden",
                    overflowX: "visible"
                },
                eV = {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    paddingInline: 20,
                    paddingBlockStart: 14,
                    paddingBlockEnd: 0
                },
                e_ = {
                    flex: 1,
                    minHeight: 0,
                    overflowY: "auto",
                    overflowX: "visible",
                    paddingInline: 20,
                    paddingBlockStart: 14,
                    paddingBlockEnd: 20
                };

            function eB(e) {
                let {
                    headerTitle: t,
                    headerIcon: a,
                    children: i
                } = e;
                return (0, v.jsxs)("div", {
                    style: eL,
                    children: [(0, v.jsx)("div", {
                        style: eV,
                        children: (0, v.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            height: 28,
                            children: [a || null, (0, v.jsx)(n(111010).D, {
                                styleKey: "bodyLgSemibold",
                                colorVariant: "primary",
                                children: t
                            })]
                        })
                    }), (0, v.jsx)("div", {
                        style: e_,
                        children: i
                    })]
                })
            }
            let eH = {
                    padding: 20
                },
                eF = {
                    height: "100%"
                },
                eK = {
                    paddingBlockStart: 8
                },
                ez = {
                    paddingBlockStart: 12
                },
                eW = {
                    width: "100%"
                };

            function eN(e) {
                var t, i, l;
                let {
                    environment: s,
                    workflowStore: d,
                    workflowValue: c,
                    workflowDefinitionPointer: u,
                    selectedNavItem: g,
                    triggerStore: p,
                    draftTrigger: m,
                    saveDraftTrigger: f,
                    scripts: y,
                    scriptsEnabled: h,
                    workflowIcon: x,
                    isEditMode: b,
                    disabled: w,
                    onMailClientSelected: k,
                    onExistingPreferredMailClient: C,
                    onShouldHideFooterChange: j
                } = e, I = (0, n(109939).tz)(), M = null == (t = (0, n(876252).$)()) ? void 0 : t.id, [T, S] = (0, a.useState)("preview"), [A, D] = (0, a.useState)(!1), [P, E] = (0, a.useState)(!1), [L, V] = (0, a.useState)("notion_mail"), _ = (0, n(83208).X)("mail_agent_draft_to_all_connected_clients"), B = (0, a.useRef)(!1), H = (0, a.useRef)(!1);
                (0, a.useEffect)(() => {
                    let e = "connect" === T || "clientSelection" === T;
                    null == j || j(e)
                }, [T, j]);
                let F = (0, a.useMemo)(() => {
                        if (g) return (0, o().jK)(g.moduleType)
                    }, [g]),
                    K = !!((null == F ? void 0 : F.authentication) && g),
                    z = (0, a.useMemo)(() => {
                        var e;
                        if (g) return null == c || null == (e = c.modules) ? void 0 : e.find(e => e.type === g.moduleType)
                    }, [g, null == c ? void 0 : c.modules]),
                    W = (0, a.useMemo)(() => {
                        if (!K) return !0;
                        if (!z) return !1;
                        let e = z.state;
                        return !!e && "connectionPointer" in e && !!e.connectionPointer
                    }, [z, K]),
                    N = !!(!w && g && u && M),
                    O = (0, a.useMemo)(() => {
                        if (g) return "slack.thread.created" === g.triggerType ? I.formatMessage(eR.slackMessageHeader) : g.name
                    }, [I, g]),
                    U = g ? `${g.moduleType}:${g.triggerType}` : void 0,
                    $ = a.useRef(void 0);
                (0, a.useEffect)(() => {
                    let e;
                    if ($.current !== U) {
                        $.current = U, S("preview"), D(!1), E(!1), H.current = !1;
                        return
                    }
                    if (!g) {
                        S("preview"), D(!1), E(!1);
                        return
                    }
                    return !K || W ? K && W && "connect" === T ? (D(!1), E(!0), e = setTimeout(() => {
                        E(!1), (null == g ? void 0 : g.moduleType) === "mail" && B.current && !_ ? (B.current = !1, V("notion_mail"), S("clientSelection")) : S("configure")
                    }, 1200), () => {
                        e && clearTimeout(e)
                    }) : (D(!1), void("clientSelection" !== T && (E(!1), S("configure")))) : ("configure" === T && S("preview"), E(!1), () => {
                        e && clearTimeout(e)
                    })
                }, [W, _, K, T, g, U]), (0, a.useEffect)(() => {
                    if ((null == g ? void 0 : g.moduleType) !== "mail" || !W || "configure" !== T || H.current) return;
                    H.current = !0;
                    let e = !1;
                    return s.api.callApi({
                        eventName: "initializeMailTriggerConnection",
                        environment: s,
                        data: {
                            spaceId: d.pointer.spaceId,
                            workflowId: d.id
                        }
                    }).then(t => {
                        if (!e && "success" === t.type && "success" === t.data.type) {
                            let e = t.data.existingPreferredMailClient;
                            null == C || C(e), void 0 !== e || _ || (V("notion_mail"), S("clientSelection"))
                        }
                    }).catch(e => {
                        n(773352).log({
                            level: "error",
                            from: "AgentTriggerTypePane",
                            type: "initializeMailTriggerConnectionFailed",
                            error: (0, n(416607).convertErrorToLog)(e)
                        })
                    }), () => {
                        e = !0
                    }
                }, [s, _, W, C, T, null == g ? void 0 : g.moduleType, d.id, d.pointer.spaceId]);
                let Y = (0, a.useRef)(!1),
                    G = (0, a.useCallback)(async () => {
                        if (g && u && M && !Y.current) {
                            Y.current = !0, D(!0);
                            try {
                                let e = z;
                                if (!e) {
                                    let t = await (0, n(988755).k)({
                                        workflowStore: d,
                                        environment: s,
                                        intl: I,
                                        selection: {
                                            triggerType: g.triggerType,
                                            moduleType: g.moduleType,
                                            moduleValue: z
                                        }
                                    });
                                    if (!t) return;
                                    e = t.module, "mail" === g.moduleType && (null == C || C(t.existingPreferredMailClient), B.current = void 0 === t.existingPreferredMailClient, H.current = !0)
                                }
                                if (m && m.moduleId !== e.id && f({ ...m,
                                        moduleId: e.id
                                    }), e.state && "connectionPointer" in e.state && e.state.connectionPointer) return;
                                let {
                                    callbackType: t,
                                    redirectToAuth: a
                                } = (0, n(321543).LX)(s), {
                                    spaceId: i,
                                    workflowId: l,
                                    transcriptId: o
                                } = (0, r().kI)(u), c = (0, n(242302).A)();
                                (0, n(104310).u)({
                                    event: {
                                        eventName: "slack_auth_flow_initiated",
                                        eventProperties: {
                                            from: "custom_agent_trigger_modal",
                                            slack_auth_session_id: c
                                        }
                                    }
                                });
                                let p = (0, r().nh)({
                                    callbackType: t,
                                    moduleId: e.id,
                                    redirectToAuth: a ? "true" : void 0,
                                    spaceId: i,
                                    type: "workflow",
                                    workflowId: l,
                                    transcriptId: o,
                                    userId: M,
                                    slackAuthSessionId: c
                                }, n(986939).A.domainBaseUrl);
                                s.device.isElectron ? (0, n(754573).P)((0, n(758654).Gm)({
                                    url: `${n(986939).A.domainBaseUrl}${n(168962).JZ.initiateExternalAuthenticationFromDesktop}`,
                                    query: {
                                        redirectUri: encodeURIComponent(p)
                                    }
                                })) : await n(956935).P(s, {
                                    height: 700,
                                    titleMessage: eR.oauthPopupTitle,
                                    url: p,
                                    width: 610
                                })
                            } catch {} finally {
                                D(!1), Y.current = !1
                            }
                        }
                    }, [M, m, s, I, z, C, f, g, u, d]),
                    q = (0, a.useCallback)(() => {
                        N && (E(!1), S("connect"), (null == g ? void 0 : g.moduleType) === "slack" && G())
                    }, [G, N, null == g ? void 0 : g.moduleType]),
                    X = (0, a.useCallback)(() => {
                        E(!1), S("preview")
                    }, []),
                    Z = (0, a.useCallback)(() => {
                        null == k || k(L), S("configure")
                    }, [k, L]),
                    J = (0, v.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        children: (0, v.jsx)(n(109939).sA, { ...eR.configureHeader
                        })
                    });
                if (!g) return (0, v.jsx)("div", {
                    style: eH,
                    children: J
                });
                let Q = (null == m || null == (i = m.state) ? void 0 : i.type) === "slack.thread.created" && "slack.message" === g.triggerType;
                if ((null == m || null == (l = m.state) ? void 0 : l.type) !== void 0 && m.state.type !== g.triggerType && !Q) return (0, v.jsx)("div", {
                    style: eH,
                    children: J
                });
                let ee = null == F ? void 0 : F.getIcon(),
                    et = O ? ? g.name,
                    en = g ? "recurrence" === g.triggerType ? (0, v.jsx)(n(16275).I, {
                        icon: n(772683).clockIcon,
                        colorVariant: "primary"
                    }) : ee ? (0, v.jsx)(n(16275).I, {
                        icon: ee
                    }) : void 0 : void 0;
                if (K && "connect" === T) return (0, v.jsx)("div", {
                    style: eF,
                    children: (0, v.jsx)(eD, {
                        moduleType: g.moduleType,
                        isConnecting: A,
                        isConnectReady: N,
                        showSuccess: P,
                        onConnect: G,
                        onBack: X
                    })
                });
                if ("clientSelection" === T) return (0, v.jsxs)(eB, {
                    headerTitle: et,
                    headerIcon: en,
                    children: [(0, v.jsx)(n(13014).E, {
                        selectedClient: L,
                        onSelectClient: V
                    }), (0, v.jsx)("div", {
                        style: ez,
                        children: (0, v.jsx)(n(912946).A, {
                            onClick: Z,
                            size: "lg",
                            colorPalette: "blue",
                            style: eW,
                            children: (0, v.jsx)(n(109939).sA, { ...eR.selectMailClient
                            })
                        })
                    })]
                });
                if (K && !W) return (0, v.jsx)(eB, {
                    headerTitle: et,
                    headerIcon: en,
                    children: (0, v.jsx)(R, {
                        moduleType: g.moduleType,
                        onConnect: q,
                        isConnectReady: N
                    })
                });
                let ea = !!(h && m);
                return (0, v.jsxs)(eB, {
                    headerTitle: et,
                    headerIcon: en,
                    children: [(0, v.jsx)(ej, {
                        workflowStore: d,
                        workflowValue: c,
                        workflowDefinitionPointer: u,
                        draftTrigger: m,
                        saveDraftTrigger: f,
                        moduleValue: z,
                        isEditMode: b,
                        disabled: w,
                        emptyState: J
                    }), ea ? (0, v.jsx)("div", {
                        style: eK,
                        children: (0, v.jsx)(eE, {
                            workflowStore: d,
                            triggerStore: p,
                            trigger: m,
                            scripts: y,
                            scriptsEnabled: h,
                            workflowIcon: x,
                            disabled: w
                        })
                    }) : void 0]
                })
            }

            function eO(e) {
                return e.getDataStore().getKeyStore("triggers")
            }

            function eU(e) {
                let t = (0, n(381453).mg)(e);
                return t.state && "emailAccountDisplayInfo" in t.state && delete t.state.emailAccountDisplayInfo, (0, n(799150).A)(t, "ignore-class-instances")
            }
            let e$ = (0, n(109939).YK)({
                    modalTitle: {
                        id: "workflow.agent.triggers.modal.title",
                        defaultMessage: "Add trigger"
                    },
                    searchAria: {
                        id: "workflow.agent.triggers.nav.search.aria",
                        defaultMessage: "Search trigger types"
                    },
                    closeSearchAria: {
                        id: "workflow.agent.triggers.nav.search.close.aria",
                        defaultMessage: "Close search"
                    },
                    searchPlaceholder: {
                        id: "workflow.agent.triggers.nav.search.placeholder",
                        defaultMessage: "Search triggers…"
                    },
                    addTrigger: {
                        id: "workflow.agent.triggers.modal.addTrigger",
                        defaultMessage: "Add trigger"
                    },
                    saveChanges: {
                        id: "workflow.agent.triggers.modal.saveChanges",
                        defaultMessage: "Save"
                    },
                    deleteTrigger: {
                        id: "workflow.agent.triggers.modal.deleteTrigger",
                        defaultMessage: "Delete"
                    },
                    deleteTriggerConfirmMessage: {
                        id: "workflow.agent.triggers.modal.deleteTrigger.confirmationMessage",
                        defaultMessage: "Delete this trigger?"
                    },
                    deleteTriggerConfirmButtonLabel: {
                        id: "workflow.agent.triggers.modal.deleteTrigger.confirmButtonLabel",
                        defaultMessage: "Delete"
                    },
                    waitForEditsToFinish: {
                        id: "workflow.agent.triggers.selectors.notion.waitForEditsToFinish",
                        defaultMessage: "Wait for edits to finish"
                    },
                    triggerWhenPageContentEdited: {
                        id: "workflow.agent.triggers.selectors.notion.triggerWhenPageContentEdited",
                        defaultMessage: "Trigger when page content edited"
                    },
                    exitConfirmMessage: {
                        id: "workflow.trigger.navigation.confirmation.message",
                        defaultMessage: "Leave before trigger setup is complete?"
                    },
                    exitConfirmOk: {
                        id: "workflow.trigger.navigation.confirmation.ok",
                        defaultMessage: "OK"
                    },
                    exitConfirmCancel: {
                        id: "workflow.trigger.navigation.confirmation.cancel",
                        defaultMessage: "Cancel"
                    },
                    triggerCreationFailed: {
                        id: "workflow.agent.trigger.creationFailed",
                        defaultMessage: "Failed to create trigger. Please try again."
                    },
                    explicitTriggerSelectionRequired: {
                        id: "workflow.agent.triggers.modal.explicitTriggerSelectionRequired",
                        defaultMessage: "Make a property selection to add this trigger"
                    },
                    explicitDataSourceSelectionRequired: {
                        id: "workflow.agent.triggers.modal.explicitDataSourceSelectionRequired",
                        defaultMessage: "Select a view or confirm no additional property filters"
                    }
                }),
                eY = {
                    allChannelsWarning: {
                        backgroundColor: n(632079).Tj.yellow.background.secondary,
                        borderRadius: 8,
                        marginInline: 20,
                        paddingInline: 12,
                        paddingBlock: 8
                    },
                    footerCheckboxLabel: { ...n(649316).U.caption,
                        color: n(632079).Tj.text.secondary,
                        lineHeight: "18px"
                    },
                    footerCheckboxLabelContainer: {
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        cursor: "pointer"
                    },
                    primaryButton: {
                        paddingInline: 16,
                        lineHeight: "21px"
                    }
                };

            function eG(e) {
                let {
                    isOpen: t,
                    workflowStore: x
                } = e, b = function(e) {
                    var t, v, x, b, w, k, C, j, I, M;
                    let {
                        isOpen: T,
                        onClose: S,
                        workflowStore: A,
                        editingTriggerId: D,
                        suppressChecklistStore: P
                    } = e, E = (0, n(109939).tz)(), R = (0, n(533992).v3)(), L = "on" === (0, n(604306).r)("ai_model_cost_agent_page_created_deleted_trigger_filters", {
                        disableExposureLogging: !0
                    }), V = (0, n(83208).X)("mail_agent_draft_to_all_connected_clients"), {
                        workflowValue: _,
                        threadStore: B
                    } = (0, n(867587).N)(A, !0), H = (0, n(682985).K8)(() => {
                        let e = A.pointer;
                        if (e || null != B && B.pointer) return (0, n(646440).getWorkflowDefinitionPointer)({
                            workflowPointer: e,
                            threadPointer: null == B ? void 0 : B.pointer
                        })
                    }, [B, A.pointer]), F = (0, n(682985).K8)(() => {
                        var e;
                        return null == (e = A.getPublishedArtifactStore()) ? void 0 : e.getData()
                    }, [A]), K = (0, a.useMemo)(() => (0, n(16712).Z0)({
                        workflowData: _,
                        publishedWorkflowData: F
                    }), [F, _]), z = (0, n(16712).Hg)(K), W = (0, a.useMemo)(() => {
                        let e = null == _ ? void 0 : _.scripts;
                        return Array.isArray(e) ? e : []
                    }, [null == _ ? void 0 : _.scripts]), N = null == _ ? void 0 : _.icon, O = (0, n(435974).T)({
                        workflowData: _
                    }), U = (0, a.useMemo)(() => {
                        var e;
                        if (D) return null == _ || null == (e = _.triggers) || null == (e = e.find(e => e.id === D)) || null == (e = e.state) ? void 0 : e.type
                    }, [D, null == _ ? void 0 : _.triggers]), $ = (0, a.useMemo)(() => {
                        var e;
                        if (D) return null == _ || null == (e = _.triggers) ? void 0 : e.find(e => e.id === D)
                    }, [D, null == _ ? void 0 : _.triggers]), Y = "slack.thread.created" === U ? "slack.message" : U, G = function(e) {
                        let {
                            workflowStore: t,
                            workflowValue: a,
                            modulePermissions: l,
                            editingTriggerType: r
                        } = e, s = (0, n(109939).tz)(), d = (0, n(731770).v)({
                            workflowStore: t,
                            workflowValue: a ? ? m,
                            showCurrentModules: !0
                        });
                        return (0, n(682985).K8)(() => {
                            var e, t, n;
                            let m = [],
                                v = !!a && (0, i().isWorkflowDataDatabaseAgent)(a),
                                x = new Set;
                            for (let t of (null == a ? void 0 : a.triggers) ? ? []) {
                                let n = null == (e = t.state) ? void 0 : e.type;
                                n && x.add(n)
                            }
                            for (let e of (d.some(e => "notion" === e.type) && (!v || (0, c().Xk)(i().DATABASE_AGENT_ALLOWED_TRIGGER_TYPES, "recurrence")) && (0, o().jK)("notion") && m.push({
                                    key: "recurring-recurrence",
                                    triggerType: "recurrence",
                                    moduleType: "notion",
                                    name: s.formatMessage(y.recurrenceLabel),
                                    icon: f,
                                    category: "recurring"
                                }), [...d].sort((e, t) => {
                                    let n = p.indexOf(e.type),
                                        a = p.indexOf(t.type),
                                        i = -1 === n ? p.length : n,
                                        l = -1 === a ? p.length : a;
                                    return i !== l ? i - l : e.type.localeCompare(t.type)
                                }))) {
                                let a = e.type,
                                    d = (0, o().jK)(a),
                                    p = u().y[a];
                                if (!d || v && "notion" !== a) continue;
                                let f = l.get(a),
                                    y = (null == f ? void 0 : f.canAddTrigger) === !1 ? null == f ? void 0 : f.disabledReason : void 0,
                                    b = [(null == (t = d.getShortName) ? void 0 : t.call(d, s)) ? ? d.getName(s), d.getName(s), ...(null == (n = d.getSearchKeywords) ? void 0 : n.call(d)) ? ? []];
                                for (let [t, n] of (0, c().WP)(p.triggers).filter(([e]) => "slack.thread.created" !== e && "notion.agent.mentioned" !== e && !!(0, g().A)({
                                        triggerType: e,
                                        context: "configuration"
                                    }) && (!v || (0, c().Xk)(i().DATABASE_AGENT_ALLOWED_TRIGGER_TYPES, e)))) {
                                    let i = (0, o().Tc)(t),
                                        l = v && ("notion.page.created" === t || "notion.page.updated" === t),
                                        d = ((null == i ? void 0 : i.isSingleton) ? ? l) && x.has(t) && t !== r,
                                        c = h[t],
                                        u = "description" in n ? s.formatMessage(n.description) : t;
                                    m.push({
                                        key: `${a}-${t}`,
                                        triggerType: t,
                                        moduleType: a,
                                        name: c ? s.formatMessage(c) : u,
                                        icon: e.sharedModule.getIcon(),
                                        category: "app",
                                        disabledReason: d ? s.formatMessage({
                                            id: "TriggerConfigModal.AddTriggerButton.singletonTriggerDisabled",
                                            defaultMessage: "This trigger is already added"
                                        }) : y,
                                        searchKeywords: b
                                    })
                                }
                            }
                            return m
                        }, [d, r, s, l, a])
                    }({
                        workflowStore: A,
                        workflowValue: _,
                        modulePermissions: O,
                        editingTriggerType: Y
                    }), q = (0, a.useMemo)(() => {
                        if (Y) {
                            var e;
                            return null == (e = G.find(e => e.triggerType === Y)) ? void 0 : e.key
                        }
                        let t = G.find(e => "recurring" === e.category) ? ? G[0];
                        return null == t ? void 0 : t.key
                    }, [G, Y]), [X, Z] = (0, a.useState)(void 0), J = (0, a.useMemo)(() => {
                        if (X) return G.find(e => e.key === X)
                    }, [G, X]);
                    (0, n(669370).M)({
                        isOpen: T,
                        items: G,
                        selectedId: X,
                        setSelectedId: Z,
                        getItemId: e => e.key,
                        getDefaultId: () => q
                    });
                    let Q = (0, a.useRef)(null),
                        ee = (0, a.useRef)(!1),
                        [et, en] = (0, a.useState)(!1),
                        [ea, ei] = (0, a.useState)(void 0),
                        [el, er] = (0, a.useState)(void 0),
                        eo = (0, a.useCallback)(() => {
                            ee.current && (P.setState(!1), ee.current = !1), ei(void 0), er(void 0), S()
                        }, [S, P]),
                        {
                            draftTriggerStore: es,
                            draftTrigger: ed,
                            hasDraftEdits: ec,
                            isEditMode: eu,
                            isSelectingTriggerType: eg,
                            selectTriggerType: ep,
                            saveDraftTrigger: em,
                            commitDraft: ef
                        } = function(e) {
                            let {
                                workflowStore: t,
                                workflowValue: r,
                                editingTriggerId: d
                            } = e, c = (0, n(533992).v3)(), u = void 0 !== d, g = (0, a.useMemo)(() => d ? ? (0, n(4962).Ay)(), [d]), p = (0, a.useMemo)(() => {
                                let e = new(n(870941)).A({
                                    name: "AgentTriggerTypeModal",
                                    isTemporaryData: !0
                                });
                                return e.addCacheFallback(c.defaultRecordCache.inMemoryRecordCache), e
                            }, [c.defaultRecordCache.inMemoryRecordCache]), m = (0, n(682985).K8)(() => (function(e) {
                                let {
                                    workflowStore: t,
                                    triggerId: n
                                } = e;
                                if (!n) return;
                                let a = eO(t),
                                    i = (a.getValue() ? ? []).findIndex(e => e.id === n);
                                if (-1 !== i) return a.getKeyStore(i)
                            })({
                                workflowStore: t,
                                triggerId: d
                            }), [d, t]), [f, y] = (0, a.useState)(void 0), [h, v] = (0, a.useState)(void 0), x = (0, n(682985).K8)(() => null == f ? void 0 : f.getValue(), [f]);
                            (0, a.useEffect)(() => {
                                var e;
                                if (!r) return;
                                if (u) {
                                    if (!m) return;
                                    y(m.clone(p)), v(m.getValue());
                                    return
                                }
                                let a = eO(t),
                                    i = (null == (e = a.getValue()) ? void 0 : e.length) ? ? 0,
                                    l = a.getKeyStore(i).clone(p);
                                (0, n(377796).createAndCommit)({
                                    userAction: "WorkflowActions.saveTrigger",
                                    environment: c,
                                    canUndo: !1,
                                    cellTarget: {
                                        spaceWithId: t.pointer.spaceId
                                    },
                                    perform: e => {
                                        (0, n(368198).K)({
                                            store: l,
                                            value: {
                                                id: g,
                                                name: void 0,
                                                enabled: !0,
                                                moduleId: void 0,
                                                state: void 0
                                            },
                                            transaction: e
                                        })
                                    }
                                }), y(l), v(void 0)
                            }, [g, c, u, p, m, t, r]);
                            let [b, w] = (0, a.useState)(!1), k = (0, a.useCallback)(e => {
                                f && (0, n(377796).createAndCommit)({
                                    userAction: "AgentTriggerTypeModal.updateDraft",
                                    environment: c,
                                    canUndo: !1,
                                    cellTarget: {
                                        spaceWithId: t.pointer.spaceId
                                    },
                                    perform: t => {
                                        (0, n(368198).K)({
                                            store: f,
                                            value: e,
                                            transaction: t
                                        })
                                    }
                                })
                            }, [f, c, t]), C = (0, a.useCallback)(e => {
                                if (!r || !f) return Promise.resolve();
                                let t = (0, o().jK)(e.moduleType);
                                if (!t) return Promise.resolve();
                                let n = t.triggers[e.triggerType];
                                if (!n) return Promise.resolve();
                                w(!0);
                                try {
                                    let t = function(e) {
                                            var t;
                                            let {
                                                workflowValue: n,
                                                moduleType: a
                                            } = e;
                                            return null == n || null == (t = n.modules) ? void 0 : t.find(e => e.type === a)
                                        }({
                                            workflowValue: r,
                                            moduleType: e.moduleType
                                        }),
                                        a = null == t ? void 0 : t.id,
                                        i = { ...f.getValue() ? ? {
                                                id: g,
                                                name: void 0,
                                                enabled: !0,
                                                moduleId: a,
                                                state: void 0
                                            },
                                            id : g,
                                            moduleId : a,
                                            state: n.createDefaultState()
                                        };
                                    return k(i), u || v(i), Promise.resolve()
                                } finally {
                                    w(!1)
                                }
                            }, [g, f, u, k, r]), j = (0, a.useMemo)(() => {
                                if (!x || !h) return !1;
                                let e = eU(x),
                                    t = eU(h);
                                return !(0, n(381453).n4)(e, t)
                            }, [x, h]), I = (0, a.useCallback)(() => {
                                var e, a, r, o, d, u, g;
                                if (!x) return;
                                let p = s(x);
                                if ((0, n(377796).createAndCommit)({
                                        userAction: "WorkflowActions.saveTrigger",
                                        environment: c,
                                        canUndo: !0,
                                        cellTarget: {
                                            spaceWithId: t.pointer.spaceId
                                        },
                                        perform: e => {
                                            (0, n(421439).y4)({
                                                store: t,
                                                operation: n(861988).NW({
                                                    pointer: t.pointer,
                                                    trigger: p
                                                }),
                                                transaction: e
                                            })
                                        }
                                    }), ((null == (e = p.state) ? void 0 : e.type) === "mail.email.received" || (null == (a = p.state) ? void 0 : a.type) === "mail.email.sent" || (null == (r = p.state) ? void 0 : r.type) === "mail.email.receivedorsent" || (null == (o = p.state) ? void 0 : o.type) === "mail.label.applied") && p.moduleId) {
                                    let e = t.getDraftData(),
                                        a = null == e || null == (u = e.modules) ? void 0 : u.find(e => e.id === p.moduleId && "mail" === e.type),
                                        i = (null == a ? void 0 : a.type) === "mail" ? ((null == (g = a.state) ? void 0 : g.emailAddresses) ? ? []).map(e => ({ ...e,
                                            isDefault: !1
                                        })) : [];
                                    (0, n(139979).r6)({
                                        moduleId: p.moduleId,
                                        workflowStore: t,
                                        environment: c,
                                        allEmailAddresses: i
                                    })
                                }
                                let m = null == (d = p.state) ? void 0 : d.type,
                                    f = !!m && (0, n(394205).e1)(m);
                                (0, n(599231).BJ)({
                                    workflowId: t.id,
                                    triggerId: p.id,
                                    type: m,
                                    mailFilterTypes: f ? (0, n(394205).Rv)(p) : void 0,
                                    emailAccountId: f ? (0, n(394205).AS)(p) : void 0,
                                    hasSlackMessageContainsFilter: l(p),
                                    isDatabaseAgent: (0, i().isWorkflowDataDatabaseAgent)(t.getDraftData()),
                                    ...(0, n(599231).im)(p)
                                })
                            }, [x, c, t]);
                            return {
                                draftTriggerStore: f,
                                draftTrigger: x,
                                hasDraftEdits: j,
                                isEditMode: u,
                                isSelectingTriggerType: b,
                                selectTriggerType: C,
                                saveDraftTrigger: k,
                                commitDraft: I
                            }
                        }({
                            workflowStore: A,
                            workflowValue: _,
                            editingTriggerId: D
                        }),
                        ey = (0, a.useMemo)(() => {
                            var e, t;
                            if (!(null != ed && null != (e = ed.state) && e.type) || !(null != J && J.moduleType)) return;
                            let a = (0, n(210511).getTriggerDefinitionByType)({
                                moduleType: J.moduleType,
                                triggerType: ed.state.type
                            });
                            return null == a || null == (t = a.getWarning) ? void 0 : t.call(a, {
                                trigger: ed,
                                intl: E
                            })
                        }, [ed, E, null == J ? void 0 : J.moduleType]);
                    (0, a.useEffect)(() => {
                        if (!T || !eu) return;
                        let e = window.requestAnimationFrame(() => {
                            var e;
                            null == (e = Q.current) || e.focus()
                        });
                        return () => {
                            window.cancelAnimationFrame(e)
                        }
                    }, [eu, T]), (0, a.useEffect)(() => () => {
                        ee.current && (P.setState(!1), ee.current = !1)
                    }, [P]), (0, a.useEffect)(() => {
                        var e;
                        eu || !_ || !J || eg || null != ed && null != (e = ed.state) && e.type || ep(J)
                    }, [null == ed || null == (t = ed.state) ? void 0 : t.type, eu, eg, J, ep, _]);
                    let eh = (0, a.useCallback)(e => {
                            Z(e.key);
                            let t = "slack.thread.created" === U && "slack.message" === e.triggerType;
                            eu && (e.triggerType === U || t) || ep(e)
                        }, [U, eu, ep]),
                        ev = (0, a.useMemo)(() => !!ed && (0, r().VB)(ed), [ed]),
                        ex = function({
                            module: e,
                            store: t
                        }) {
                            let a = (0, n(682985).K8)(() => t.canEdit(), [t]),
                                i = (0, n(684551).i)({
                                    module: e ? ? {
                                        id: "no-module",
                                        type: "notion",
                                        name: "notion",
                                        version: "1.0.0"
                                    },
                                    store: t
                                });
                            return e ? i : a ? "read_and_write" : "reader"
                        }({
                            module: (0, a.useMemo)(() => {
                                var e;
                                if (null != $ && $.moduleId) return null == _ || null == (e = _.modules) ? void 0 : e.find(e => e.id === $.moduleId)
                            }, [null == $ ? void 0 : $.moduleId, null == _ ? void 0 : _.modules]),
                            store: A
                        }),
                        eb = (0, n(642157).p2)(ex),
                        ew = (0, a.useMemo)(() => {
                            var e;
                            let t = null == _ || null == (e = _.modules) ? void 0 : e.find(e => "slack" === e.type),
                                n = null == t ? void 0 : t.state;
                            return !!(n && "connectionPointer" in n && n.connectionPointer)
                        }, [null == _ ? void 0 : _.modules]),
                        ek = !!((null == ed || null == (v = ed.state) ? void 0 : v.type) === "notion.page.created" && ed.state.collectionId),
                        eC = ek && (null == ed || null == (x = ed.state) ? void 0 : x.type) === "notion.page.created" && 0 !== ed.state.debounceTimeoutSeconds,
                        ej = !!((null == ed || null == (b = ed.state) ? void 0 : b.type) === "notion.page.updated" && ed.state.collectionId),
                        eI = ej && (null == ed || null == (w = ed.state) ? void 0 : w.type) === "notion.page.updated" && !ed.state.shouldIgnorePageContentUpdates,
                        [eM, eT] = (0, a.useState)(!1),
                        eS = (0, a.useCallback)(e => {
                            eT(e)
                        }, []),
                        eA = (0, a.useMemo)(() => !eu && (!!eM || !!((null == J ? void 0 : J.moduleType) === "slack" && !ew)), [eu, ew, eM, null == J ? void 0 : J.moduleType]),
                        eD = !!ec,
                        [eP, eE] = (0, a.useState)(!1),
                        eR = eu && !eb,
                        eL = (0, a.useCallback)(() => {
                            eE(!1)
                        }, []),
                        eV = (0, a.useCallback)(() => {
                            eE(!1), eo()
                        }, [eo]),
                        e_ = (0, a.useCallback)(() => {
                            eD ? eP || (eE(!0), n(647095).ui({
                                message: E.formatMessage(e$.exitConfirmMessage),
                                showCancel: !1,
                                keepFocus: !0,
                                onDismiss: eL,
                                items: [{
                                    label: E.formatMessage(e$.exitConfirmOk),
                                    color: void 0,
                                    buttonType: "solid",
                                    onAccept: eV
                                }, {
                                    label: E.formatMessage(e$.exitConfirmCancel),
                                    color: void 0,
                                    buttonType: "outline",
                                    onAccept: eL
                                }]
                            })) : eo()
                        }, [eo, eL, eV, E, eP, eD]),
                        eB = (0, a.useCallback)(async e => {
                            if (!ed || !ed.state || !J || !_) return;
                            let t = O.get(J.moduleType);
                            if ((null == t ? void 0 : t.canAddTrigger) !== !1) {
                                ! function(e) {
                                    if (!e) return !1;
                                    for (let t of e.modules ? ? []) {
                                        let n = (0, o().jK)(t.type);
                                        if (n && "ready" !== n.getModuleConfigurationStatus(t, e)) return !0
                                    }
                                    for (let t of e.triggers ? ? [])
                                        if (!(0, r().VB)(t)) return !0;
                                    return !1
                                }(_) && (P.setState(!0), ee.current = !0), en(!0);
                                try {
                                    var a, c, u, g;
                                    let t = s(ed).state;
                                    if (!t) return;
                                    let r = "mail" === J.moduleType || null == (a = _.modules) ? void 0 : a.find(e => e.type === J.moduleType),
                                        o = await (0, n(988755).v)({
                                            workflowStore: A,
                                            environment: R,
                                            intl: E,
                                            selection: {
                                                triggerType: t.type,
                                                moduleType: J.moduleType,
                                                moduleValue: r,
                                                initialState: t,
                                                moduleInitialState: e ? {
                                                    preferredMailClient: e
                                                } : void 0
                                            }
                                        });
                                    if (!o) {
                                        n(819652).Iz({
                                            message: E.formatMessage(e$.triggerCreationFailed),
                                            icon: n(966559).exclamationMarkCircleSmallIcon,
                                            variant: "error",
                                            presentationType: "transient"
                                        }), ee.current && (P.setState(!1), ee.current = !1);
                                        return
                                    }
                                    let p = null == (c = o.state) ? void 0 : c.type;
                                    if (!p) return;
                                    let m = (0, n(394205).e1)(p);
                                    if (("mail.email.received" === p || "mail.email.sent" === p || "mail.email.receivedorsent" === p || "mail.label.applied" === p) && o.moduleId) {
                                        let e = A.getDraftData(),
                                            t = null == e || null == (u = e.modules) ? void 0 : u.find(e => e.id === o.moduleId && "mail" === e.type),
                                            a = (null == t ? void 0 : t.type) === "mail" ? ((null == (g = t.state) ? void 0 : g.emailAddresses) ? ? []).map(e => ({ ...e,
                                                isDefault: !1
                                            })) : [];
                                        (0, n(139979).r6)({
                                            moduleId: o.moduleId,
                                            workflowStore: A,
                                            environment: R,
                                            allEmailAddresses: a
                                        })
                                    }
                                    d({
                                        trigger: o,
                                        workflowStore: A,
                                        environment: R
                                    }), (0, n(599231).Cx)({
                                        workflowId: A.id,
                                        triggerId: o.id,
                                        type: p,
                                        mailFilterTypes: m ? (0, n(394205).Rv)(o) : void 0,
                                        emailAccountId: m ? (0, n(394205).AS)(o) : void 0,
                                        hasSlackMessageContainsFilter: l(o),
                                        isDatabaseAgent: (0, i().isWorkflowDataDatabaseAgent)(_),
                                        ...(0, n(599231).im)(o)
                                    }), (0, n(599231).aA)({
                                        environment: R,
                                        type: p,
                                        triggerId: o.id,
                                        workflowId: A.id,
                                        isDatabaseAgent: (0, i().isWorkflowDataDatabaseAgent)(_)
                                    }), eo()
                                } finally {
                                    en(!1)
                                }
                            }
                        }, [eo, ed, R, E, O, J, P, A, _]),
                        eH = (0, a.useCallback)(e => {
                            ei(e)
                        }, []),
                        eF = (0, a.useCallback)(e => {
                            er(e)
                        }, []),
                        eK = (0, a.useCallback)(async () => {
                            if (ed && ev && !eg && !et) {
                                en(!0);
                                try {
                                    if (eu) {
                                        if (!eb) return;
                                        ef(), d({
                                            trigger: ed,
                                            workflowStore: A,
                                            environment: R
                                        }), eo();
                                        return
                                    }
                                    if ((null == J ? void 0 : J.moduleType) === "mail") {
                                        try {
                                            if (!await n(81603).ensureNotionMailAccountOrTriggerOnboarding({
                                                    environment: R,
                                                    onConfirm: () => {
                                                        eB(void 0)
                                                    }
                                                })) return;
                                            let e = ea ? ? el;
                                            if (void 0 === e && !V) {
                                                let t = await R.api.callApi({
                                                    eventName: "initializeMailTriggerConnection",
                                                    environment: R,
                                                    data: {
                                                        spaceId: A.pointer.spaceId,
                                                        workflowId: A.id
                                                    }
                                                });
                                                "success" === t.type && "success" === t.data.type && (e = t.data.existingPreferredMailClient)
                                            }
                                            await eB(e)
                                        } catch (e) {
                                            n(773352).log({
                                                level: "error",
                                                from: "AgentTriggerTypeModal",
                                                type: "mailTriggerCreationFailed",
                                                error: (0, n(416607).convertErrorToLog)(e)
                                            }), n(819652).Iz({
                                                message: E.formatMessage(e$.triggerCreationFailed),
                                                icon: n(966559).exclamationMarkCircleSmallIcon,
                                                variant: "error",
                                                presentationType: "transient"
                                            })
                                        }
                                        return
                                    }
                                    await eB(void 0)
                                } finally {
                                    en(!1)
                                }
                            }
                        }, [eb, eo, ef, eB, ed, R, el, E, ev, V, eu, et, eg, ea, null == J ? void 0 : J.moduleType, A]),
                        ez = (0, a.useCallback)(async () => {
                            var e;
                            $ && (null == (e = $.state) ? void 0 : e.type) !== "notion.agent.mentioned" && eb && (await n(647095).Gh({
                                message: E.formatMessage(e$.deleteTriggerConfirmMessage),
                                acceptLabel: E.formatMessage(e$.deleteTriggerConfirmButtonLabel)
                            })).accept && (! function(e) {
                                let {
                                    trigger: t,
                                    workflowStore: a
                                } = e, i = a.pointer.spaceId;
                                (0, n(377796).createAndCommit)({
                                    userAction: "WorkflowActions.deleteTrigger",
                                    environment: e.environment,
                                    canUndo: !0,
                                    cellTarget: i ? {
                                        spaceWithId: i
                                    } : void 0,
                                    perform: e => {
                                        (0, n(421439).y4)({
                                            store: a,
                                            operation: n(861988).LI({
                                                pointer: a.pointer,
                                                trigger: t
                                            }),
                                            transaction: e
                                        })
                                    }
                                })
                            }({
                                workflowStore: A,
                                trigger: $,
                                environment: R
                            }), eo())
                        }, [eb, eo, R, E, $, A]),
                        eW = (0, a.useCallback)(() => {
                            var e;
                            if (eR || !ed || (null == (e = ed.state) ? void 0 : e.type) !== "notion.page.created" || !ed.state.collectionId) return;
                            let t = 0 !== ed.state.debounceTimeoutSeconds;
                            em({ ...ed,
                                state: { ...ed.state,
                                    debounceTimeoutSeconds: t ? 0 : void 0
                                }
                            })
                        }, [eR, ed, em]),
                        eN = (0, a.useCallback)(() => {
                            var e;
                            if (eR || !ed || (null == (e = ed.state) ? void 0 : e.type) !== "notion.page.updated" || !ed.state.collectionId) return;
                            let t = !!ed.state.shouldIgnorePageContentUpdates;
                            em({ ...ed,
                                state: { ...ed.state,
                                    shouldIgnorePageContentUpdates: !t
                                }
                            })
                        }, [eR, ed, em]),
                        eY = (0, a.useMemo)(() => (0, n(460657).P)({
                            trigger: ed,
                            supportsLifecyclePropertyFilters: L
                        }), [ed, L]),
                        eG = !ed || !ev || !eY || eg || et || eu && !eb,
                        eq = ((null == ed || null == (k = ed.state) ? void 0 : k.type) === "notion.page.updated" || (null == ed || null == (C = ed.state) ? void 0 : C.type) === "notion.page.created" || (null == ed || null == (j = ed.state) ? void 0 : j.type) === "notion.page.deleted") && !eY,
                        eX = (null == ed || null == (I = ed.state) ? void 0 : I.type) === "notion.page.created" || (null == ed || null == (M = ed.state) ? void 0 : M.type) === "notion.page.deleted" ? E.formatMessage(e$.explicitDataSourceSelectionRequired) : E.formatMessage(e$.explicitTriggerSelectionRequired),
                        eZ = eu ? 468 : 720;
                    return {
                        intl: E,
                        environment: R,
                        workflowValue: _,
                        workflowDefinitionPointer: H,
                        navItems: G,
                        selectedNavItem: J,
                        handleSelectNavItem: eh,
                        draftTriggerStore: es,
                        draftTrigger: ed,
                        saveDraftTrigger: em,
                        hasDraftEdits: ec,
                        isEditMode: eu,
                        areDraftEditsDisabled: eR,
                        shouldHideModalFooter: eA,
                        shouldShowWaitForEditsToFinish: ek,
                        waitForEditsToFinishEnabled: eC,
                        handleToggleWaitForEditsToFinish: eW,
                        shouldShowTriggerWhenPageContentEdited: ej,
                        triggerWhenPageContentEditedEnabled: eI,
                        handleToggleTriggerWhenPageContentEdited: eN,
                        scripts: W,
                        scriptsEnabled: z,
                        workflowIcon: N,
                        persistedEditingTrigger: $,
                        handleDeleteTrigger: ez,
                        handlePrimaryAction: eK,
                        handleMailClientSelected: eH,
                        handleExistingPreferredMailClient: eF,
                        handlePaneShouldHideFooterChange: eS,
                        isPrimaryDisabled: eG,
                        shouldShowExplicitSelectionTooltip: eq,
                        explicitSelectionTooltipMessage: eX,
                        isSaving: et,
                        handleDismiss: e_,
                        triggerWarningMessage: ey,
                        paneRef: Q,
                        modalWidth: eZ
                    }
                }(e);
                return (0, v.jsx)(n(833503).s, {
                    ariaLabel: b.intl.formatMessage(e$.modalTitle),
                    isOpen: t,
                    onDismiss: b.handleDismiss,
                    onClosed: e.onClosed ? ? (() => {}),
                    allowDismissByEscape: !0,
                    showCloseIcon: !1,
                    borderRadius: 16,
                    anchor: "center",
                    startClosingOnDismiss: !1,
                    areaConstraint: {
                        width: {
                            type: "fixed",
                            length: b.modalWidth
                        },
                        height: {
                            type: "fixed",
                            length: 600
                        }
                    },
                    children: () => {
                        var e;
                        return (0, v.jsx)(n(671968).q, {
                            isSinglePane: b.isEditMode,
                            headerPaddingInline: 20,
                            headerPaddingBlockStart: 14,
                            headerPaddingBlockEnd: 0,
                            title: (0, v.jsx)(n(111010).D, {
                                styleKey: "bodyLgSemibold",
                                colorVariant: "primary",
                                children: (0, v.jsx)(n(109939).sA, { ...e$.modalTitle
                                })
                            }),
                            searchAriaLabel: b.intl.formatMessage(e$.searchAria),
                            closeSearchAriaLabel: b.intl.formatMessage(e$.closeSearchAria),
                            searchPlaceholder: b.intl.formatMessage(e$.searchPlaceholder),
                            leftPaneContent: ({
                                searchQuery: e
                            }) => (0, v.jsx)(I, {
                                items: b.navItems,
                                selectedItem: b.selectedNavItem,
                                onSelect: b.handleSelectNavItem,
                                searchQuery: e
                            }),
                            rightPaneContent: (0, v.jsxs)(v.Fragment, {
                                children: [(0, v.jsx)(eN, {
                                    environment: b.environment,
                                    workflowStore: x,
                                    workflowValue: b.workflowValue,
                                    workflowDefinitionPointer: b.workflowDefinitionPointer,
                                    selectedNavItem: b.selectedNavItem,
                                    triggerStore: b.draftTriggerStore,
                                    draftTrigger: b.draftTrigger,
                                    saveDraftTrigger: b.saveDraftTrigger,
                                    scripts: b.scripts,
                                    scriptsEnabled: b.scriptsEnabled,
                                    workflowIcon: b.workflowIcon,
                                    isEditMode: b.isEditMode,
                                    disabled: b.areDraftEditsDisabled,
                                    onMailClientSelected: b.handleMailClientSelected,
                                    onExistingPreferredMailClient: b.handleExistingPreferredMailClient,
                                    onShouldHideFooterChange: b.handlePaneShouldHideFooterChange
                                }), b.shouldHideModalFooter ? void 0 : (0, v.jsxs)(n(4458).VP, {
                                    children: [b.triggerWarningMessage ? (0, v.jsx)("div", {
                                        style: eY.allChannelsWarning,
                                        children: (0, v.jsx)(n(111010).D, {
                                            styleKey: "caption",
                                            colorPalette: "yellow",
                                            colorVariant: "secondary",
                                            children: b.triggerWarningMessage
                                        })
                                    }) : void 0, (0, v.jsxs)(n(4458).fI, {
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: 20,
                                        children: [(0, v.jsx)(n(4458).fI, {
                                            alignItems: "center",
                                            gap: 10,
                                            minHeight: 24,
                                            children: b.shouldShowWaitForEditsToFinish ? (0, v.jsxs)("label", {
                                                style: eY.footerCheckboxLabelContainer,
                                                children: [(0, v.jsx)(n(349050).S, {
                                                    checked: b.waitForEditsToFinishEnabled,
                                                    size: 16,
                                                    onClick: b.handleToggleWaitForEditsToFinish,
                                                    disabled: b.areDraftEditsDisabled
                                                }), (0, v.jsx)("div", {
                                                    style: eY.footerCheckboxLabel,
                                                    children: (0, v.jsx)(n(109939).sA, { ...e$.waitForEditsToFinish
                                                    })
                                                })]
                                            }) : b.shouldShowTriggerWhenPageContentEdited ? (0, v.jsxs)("label", {
                                                style: eY.footerCheckboxLabelContainer,
                                                children: [(0, v.jsx)(n(349050).S, {
                                                    checked: b.triggerWhenPageContentEditedEnabled,
                                                    size: 16,
                                                    onClick: b.handleToggleTriggerWhenPageContentEdited,
                                                    disabled: b.areDraftEditsDisabled
                                                }), (0, v.jsx)("div", {
                                                    style: eY.footerCheckboxLabel,
                                                    children: (0, v.jsx)(n(109939).sA, { ...e$.triggerWhenPageContentEdited
                                                    })
                                                })]
                                            }) : void 0
                                        }), (0, v.jsxs)(n(4458).fI, {
                                            alignItems: "center",
                                            gap: 8,
                                            children: [b.isEditMode && b.persistedEditingTrigger && (null == (e = b.persistedEditingTrigger.state) ? void 0 : e.type) !== "notion.agent.mentioned" && !b.areDraftEditsDisabled ? (0, v.jsx)(n(988022).p, {
                                                size: "xl",
                                                colorPalette: "red",
                                                onClick: b.handleDeleteTrigger,
                                                children: (0, v.jsx)(n(109939).sA, { ...e$.deleteTrigger
                                                })
                                            }) : void 0, (0, v.jsx)(n(51831).m, {
                                                placement: "top",
                                                disableTooltip: !b.shouldShowExplicitSelectionTooltip,
                                                content: () => b.explicitSelectionTooltipMessage,
                                                children: e => (0, v.jsx)(n(912946).A, { ...e,
                                                    size: "xl",
                                                    onClick: b.handlePrimaryAction,
                                                    disabled: b.isPrimaryDisabled,
                                                    isLoading: b.isSaving,
                                                    colorPalette: "blue",
                                                    style: eY.primaryButton,
                                                    children: b.isEditMode ? (0, v.jsx)(n(109939).sA, { ...e$.saveChanges
                                                    }) : (0, v.jsx)(n(109939).sA, { ...e$.addTrigger
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            }),
                            paneRef: b.paneRef
                        })
                    }
                })
            }
            async function eq(e) {
                let {
                    workflowStore: t,
                    editingTriggerId: a,
                    suppressChecklistStore: i
                } = e;
                await n(280996).T.showAsyncModal(e => {
                    let {
                        isOpen: n,
                        onDismiss: l,
                        onClosed: r
                    } = e;
                    return (0, v.jsx)(eG, {
                        isOpen: n,
                        onClose: l,
                        onClosed: r,
                        workflowStore: t,
                        editingTriggerId: a,
                        suppressChecklistStore: i
                    })
                })
            }
        },
        916820: (e, t, n) => {
            n.d(t, {
                Sn: () => o,
                aG: () => r
            });
            var a = n(296540),
                i = n(474848);
            let l = (0, a.createContext)(void 0);

            function r({
                children: e,
                store: t
            }) {
                return (0, i.jsx)(l.Provider, {
                    value: t,
                    children: e
                })
            }

            function o() {
                return (0, a.useContext)(l)
            }
            l.displayName = "AgentThreadListContext"
        },
        934558: (e, t, n) => {
            n.d(t, {
                A: () => a
            });

            function a(e) {
                let {
                    triggerType: t,
                    context: a
                } = e;
                if (!t) return !1;
                switch (t) {
                    case "calendar.event.created":
                    case "calendar.event.updated":
                    case "calendar.event.canceled":
                        return n(218744).default.checkGate({
                            gateName: "notion_calendar_custom_agent_triggers"
                        });
                    case "notion.button.pressed":
                    case "notion.database.agent.updated":
                        return !1;
                    case "recurrence":
                    case "slack.thread.created":
                        return "display" === a;
                    case "notion.agent.mentioned":
                    case "mail.email.received":
                    case "mail.email.sent":
                    case "mail.email.receivedorsent":
                    case "mail.label.applied":
                    case "notion.page.created":
                    case "notion.page.deleted":
                    case "notion.page.discussion.comment.added":
                    case "notion.page.updated":
                    case "discord.interaction":
                    case "security.threat.detected":
                    case "slack.app.mention":
                    case "slack.message":
                    case "slack.reaction.added":
                        return !0;
                    default:
                        (0, n(722371).HB)(t)
                }
            }
        },
        988755: (e, t, n) => {
            async function a(e) {
                var t, a, i, l, r, o, s, d;
                let c, u, g, p, {
                        workflowStore: m,
                        environment: f,
                        intl: y,
                        selection: h
                    } = e,
                    {
                        moduleType: v,
                        moduleValue: x,
                        moduleInitialState: b
                    } = h,
                    w = (0, n(593186).jK)(v);
                if (!w) return;
                let k = "mail" === v && (!x || "mail" !== x.type || !(null != (t = x.state) && t.connectionPointer)),
                    C = "mail" === v && (null == x ? void 0 : x.type) === "mail" && (null == (a = x.state) ? void 0 : a.connectionPointer) !== void 0 && (null == (i = x.state) ? void 0 : i.emailAddresses) === void 0;
                if (k || C) {
                    let e = await f.api.callApi({
                        eventName: "initializeMailTriggerConnection",
                        environment: f,
                        data: {
                            spaceId: m.pointer.spaceId,
                            workflowId: m.id
                        }
                    });
                    if ("success" === e.type && "success" === e.data.type) c = {
                        connectionPointer: e.data.connectionPointer,
                        creatorEmail: e.data.creatorEmail,
                        emailAddresses: e.data.emailAddresses
                    }, u = e.data.existingPreferredMailClient;
                    else if (k) return
                }
                if ("mail" === v && c && !x) {
                    let e = m.getDraftData();
                    g = null == e || null == (r = e.modules) ? void 0 : r.find(e => {
                        var t;
                        return "mail" === e.type && (null == (t = e.state) || null == (t = t.connectionPointer) ? void 0 : t.id) === c.connectionPointer.id
                    })
                }
                let j = x || g;
                if (j) {
                    let e;
                    if ("mail" === j.type) {
                        let t = j.state ? ? {},
                            a = {};
                        if (void 0 === t.emailAddresses && null != (o = c) && o.emailAddresses && (a.emailAddresses = c.emailAddresses, void 0 === t.emailPermissionSettings)) {
                            let e = t.preferredMailClient ? ? u ? ? (null == b ? void 0 : b.preferredMailClient) ? ? n(285316).ou;
                            a.emailPermissionSettings = (0, n(474939).B)({
                                emailAddresses: c.emailAddresses,
                                preferredClient: e
                            })
                        }
                        void 0 === t.connectionPointer && null != (s = c) && s.connectionPointer && (a.connectionPointer = c.connectionPointer), void 0 === t.creatorEmail && null != (d = c) && d.creatorEmail && (a.creatorEmail = c.creatorEmail), Object.keys(a).length > 0 && (e = { ...j,
                            state: a
                        })
                    }
                    return {
                        moduleForTrigger: j,
                        moduleToCreate: void 0,
                        moduleToUpdate: e,
                        existingPreferredMailClient: u
                    }
                }
                let I = "slack" === v ? (0, n(4962).Ay)() : void 0,
                    M = m.pointer.spaceId;
                "slack" === v && I && (p = await (0, n(143630).c)({
                    environment: f,
                    moduleId: I,
                    spaceId: M,
                    workflowId: m.id
                }));
                let T = "mail" === v ? (null == (l = w.getShortName) ? void 0 : l.call(w, y)) ? ? w.getName(y) : void 0,
                    S = "mail" === v && c ? {
                        connectionPointer: c.connectionPointer,
                        creatorEmail: c.creatorEmail,
                        emailAddresses: c.emailAddresses ? ? [],
                        emailPermissionSettings: (0, n(474939).B)({
                            emailAddresses: c.emailAddresses,
                            preferredClient: u ? ? (null == b ? void 0 : b.preferredMailClient) ? ? n(285316).ou
                        })
                    } : void 0,
                    A = "slack" === v && p ? { ...S ? ? {},
                        connectionPointer : p
                    } : "mail" === v ? { ...S ? ? {},
                        ...b
                    } : S,
                    D = I ? ? (0, n(4962).Ay)();
                return {
                    moduleToCreate: (0, n(593186).r4)({
                        type: v,
                        definition: w,
                        name: T,
                        intl: y,
                        id: D,
                        state: A
                    }),
                    moduleToUpdate: void 0,
                    moduleForTrigger: void 0,
                    existingPreferredMailClient: u
                }
            }
            async function i(e) {
                var t;
                let i = await a(e);
                if (!i) return;
                let {
                    existingPreferredMailClient: l
                } = i;
                if (i.moduleForTrigger) {
                    if (i.moduleToUpdate) {
                        let t = i.moduleToUpdate;
                        return (0, n(377796).createAndCommit)({
                            userAction: "WorkflowActions.saveTrigger",
                            environment: e.environment,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: e.workflowStore.pointer.spaceId
                            },
                            perform: a => {
                                var i;
                                let l = e.workflowStore.getDraftData(),
                                    r = null == l || null == (i = l.modules) ? void 0 : i.find(e => e.id === t.id && e.type === t.type),
                                    o = r && "mail" === r.type ? { ...r,
                                        state: { ...r.state,
                                            ...t.state
                                        }
                                    } : t;
                                (0, n(421439).y4)({
                                    store: e.workflowStore,
                                    operation: (0, n(861988).xb)({
                                        pointer: e.workflowStore.pointer,
                                        module: o
                                    }),
                                    transaction: a
                                })
                            }
                        }), {
                            module: t,
                            existingPreferredMailClient: l
                        }
                    }
                    return {
                        module: i.moduleForTrigger,
                        existingPreferredMailClient: l
                    }
                }
                if (!i.moduleToCreate) return;
                let r = i.moduleToCreate,
                    o = null == (t = e.environment.currentUser) ? void 0 : t.id;
                return o && (0, n(190934).qW)(r.type) && (r = (0, n(190934).cU)({
                    module: r,
                    userId: o
                })), (0, n(377796).createAndCommit)({
                    userAction: "WorkflowActions.saveTrigger",
                    environment: e.environment,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: e.workflowStore.pointer.spaceId
                    },
                    perform: t => {
                        (0, n(421439).y4)({
                            store: e.workflowStore,
                            operation: (0, n(861988).xb)({
                                pointer: e.workflowStore.pointer,
                                module: r
                            }),
                            transaction: t
                        })
                    }
                }), {
                    module: r,
                    existingPreferredMailClient: l
                }
            }
            async function l(e) {
                let t, {
                        workflowStore: i,
                        environment: l,
                        selection: r
                    } = e,
                    {
                        triggerType: o,
                        moduleType: s,
                        initialState: d
                    } = r,
                    c = (0, n(593186).jK)(s);
                if (!c) return;
                let u = c.triggers[o];
                if (!u) return;
                let g = (0, n(4962).Ay)(),
                    p = await a(e);
                if (p) return (0, n(377796).createAndCommit)({
                    userAction: "WorkflowActions.saveTrigger",
                    environment: l,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: i.pointer.spaceId
                    },
                    perform: e => {
                        var a, l, o, s;
                        let c;
                        if (p.moduleToCreate && (0, n(421439).y4)({
                                store: i,
                                operation: (0, n(861988).xb)({
                                    pointer: i.pointer,
                                    module: p.moduleToCreate
                                }),
                                transaction: e
                            }), p.moduleToUpdate) {
                            let t = p.moduleToUpdate,
                                a = i.getDraftData(),
                                l = null == a || null == (s = a.modules) ? void 0 : s.find(e => e.id === t.id && e.type === t.type);
                            c = l && "mail" === l.type ? { ...l,
                                state: { ...l.state,
                                    ...t.state
                                }
                            } : t, (0, n(421439).y4)({
                                store: i,
                                operation: (0, n(861988).xb)({
                                    pointer: i.pointer,
                                    module: c
                                }),
                                transaction: e
                            })
                        }
                        let m = c ? ? p.moduleForTrigger ? ? p.moduleToCreate;
                        if (null != (a = r.moduleInitialState) && a.preferredMailClient && (null == (l = m) ? void 0 : l.type) === "mail" && (null == (o = m.state) ? void 0 : o.preferredMailClient) === void 0) {
                            let t = { ...m,
                                state: { ...m.state,
                                    preferredMailClient: r.moduleInitialState.preferredMailClient
                                }
                            };
                            (0, n(421439).y4)({
                                store: i,
                                operation: (0, n(861988).xb)({
                                    pointer: i.pointer,
                                    module: t
                                }),
                                transaction: e
                            }), m = t
                        }
                        if (!m) throw Error("No module available for trigger creation");
                        let f = {
                            id: g,
                            state: d ? ? u.createDefaultState(),
                            enabled: !0,
                            name: "",
                            moduleId: m.id
                        };
                        (0, n(421439).y4)({
                            store: i,
                            operation: (0, n(861988).NW)({
                                pointer: i.pointer,
                                trigger: f
                            }),
                            transaction: e
                        }), t = f
                    }
                }), t
            }
            n.d(t, {
                k: () => i,
                v: () => l
            }), n(16280), n(898992), n(672577)
        }
    }
]);