"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [35621, 53974], {
        5750: (e, t, a) => {
            a.d(t, {
                X: () => r
            }), a(296540);
            var o = a(474848);
            let s = {
                button: {
                    position: "relative",
                    columnGap: 8
                },
                dirtyDotInline: {
                    width: 8,
                    height: 8,
                    marginInlineStart: 2,
                    backgroundColor: a(632079).Tj.blue.background.accentPrimary,
                    borderRadius: "50%",
                    pointerEvents: "none"
                },
                dirtyDotAbsolute: {
                    position: "absolute",
                    top: -2,
                    insetInlineEnd: -2,
                    width: 8,
                    height: 8,
                    backgroundColor: a(632079).Tj.blue.background.accentPrimary,
                    outlineWidth: 2,
                    outlineStyle: "solid",
                    outlineColor: a(632079).Tj.whiteButtonBackground,
                    borderRadius: "50%",
                    pointerEvents: "none"
                }
            };

            function r(e) {
                let {
                    onClick: t,
                    showDirtyDot: r
                } = e, i = (0, a(533992).v3)(), l = (0, a(109939).tz)(), n = (0, a(682985).K8)(() => (e.containerWidth ? ? (0, a(936221).U)(i)) >= 550, [i, e.containerWidth]);
                return (0, o.jsxs)(a(988022).p, {
                    iconLeading: {
                        icon: a(213039).M,
                        size: "default"
                    },
                    onClick: t,
                    "aria-label": l.formatMessage({
                        defaultMessage: "Settings",
                        id: "agentTopbar.flippy.settings.ariaLabel"
                    }),
                    style: s.button,
                    children: [n ? (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(a(109939).sA, {
                            defaultMessage: "Settings",
                            id: "agentTopbar.flippy.settings.label"
                        }), r && n ? (0, o.jsx)("span", {
                            style: s.dirtyDotInline
                        }) : void 0]
                    }) : void 0, r && !n ? (0, o.jsx)("span", {
                        style: s.dirtyDotAbsolute
                    }) : void 0]
                })
            }
        },
        53554: (e, t, a) => {
            async function o(e) {
                let {
                    environment: t,
                    spaceId: a,
                    threadId: o
                } = e, s = await t.api.callApi({
                    eventName: "getThreadShareStatus",
                    environment: t,
                    data: {
                        spaceId: a,
                        threadId: o
                    }
                });
                if ("success" !== s.type) throw s.error;
                return s.data
            }
            async function s(e) {
                let {
                    environment: t,
                    spaceId: a,
                    threadId: o
                } = e, s = await t.api.callApi({
                    eventName: "shareInferenceTranscript",
                    environment: t,
                    data: {
                        spaceId: a,
                        threadId: o
                    }
                });
                if ("success" !== s.type) throw s.error;
                return s.data
            }
            async function r(e) {
                let {
                    environment: t,
                    spaceId: a,
                    threadId: o
                } = e, s = await t.api.callApi({
                    eventName: "revokeSharedInferenceTranscript",
                    environment: t,
                    data: {
                        spaceId: a,
                        threadId: o
                    }
                });
                if ("success" !== s.type) throw s.error
            }
            async function i(e) {
                let {
                    environment: t,
                    spaceId: a,
                    threadId: o
                } = e, s = await t.api.callApi({
                    eventName: "getSharedInferenceTranscript",
                    environment: t,
                    data: {
                        spaceId: a,
                        threadId: o
                    }
                });
                if ("success" !== s.type) throw s.error;
                return s.data
            }
            async function l(e) {
                let {
                    environment: t,
                    spaceId: a,
                    copyThreadId: o
                } = e, s = await t.api.callApi({
                    eventName: "deleteSharedChat",
                    environment: t,
                    data: {
                        spaceId: a,
                        copyThreadId: o
                    }
                });
                if ("success" !== s.type) throw s.error
            }
            async function n(e) {
                let {
                    environment: t,
                    spaceId: a
                } = e, o = await t.api.callApi({
                    eventName: "listUserSharedChats",
                    environment: t,
                    data: {
                        spaceId: a
                    }
                });
                if ("success" !== o.type) throw o.error;
                return o.data
            }

            function d(e) {
                let {
                    spaceId: t,
                    threadId: o
                } = e;
                return `${a(986939).A.domainBaseUrl}/share/${(0,a(4962).Xw)(t)}/${(0,a(4962).Xw)(o)}`
            }

            function c(e) {
                let t = `https://twitter.com/intent/tweet?url=${encodeURIComponent(e)}`;
                window.open(t, "_blank", "noopener,noreferrer")
            }

            function u(e) {
                let t = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(e)}`;
                window.open(t, "_blank", "noopener,noreferrer")
            }

            function h(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "share_chat_social_clicked",
                        eventProperties: {
                            social_platform: e
                        }
                    }
                })
            }
            a.d(t, {
                CT: () => r,
                GP: () => u,
                LT: () => l,
                VS: () => d,
                Y9: () => c,
                YA: () => n,
                YP: () => s,
                _v: () => h,
                kg: () => i,
                m_: () => o
            })
        },
        100957: (e, t, a) => {
            a.d(t, {
                C: () => r
            });
            var o = () => a(546605);
            class s extends o().Store {
                getInitialState() {
                    return {
                        view: "landing"
                    }
                }
                setTabView(e) {
                    this.state.view = e, this.emit()
                }
            }
            let r = new s
        },
        135621: (e, t, a) => {
            a.r(t), a.d(t, {
                AgentChatActions: () => V
            });
            var o = a(296540);
            async function s(e) {
                let {
                    environment: t,
                    clientStore: o,
                    threadStore: s,
                    moduleId: r,
                    toolName: i,
                    parameters: l
                } = e;
                if (!(null != s && s.isDefined())) throw Error("Thread must exist to invoke MCP operations");
                if (s.getCurrentInferenceId()) {
                    let {
                        serverCommitResult: r
                    } = (0, a(377796).createAndCommit)({
                        userAction: "mcpInspectorActions.invokeFromInspector",
                        environment: t,
                        cellTarget: {
                            spaceWithId: e.spaceId
                        },
                        canUndo: !1,
                        perform: e => {
                            a(757688).GS({
                                threadStore: s,
                                transaction: e,
                                clientStore: o
                            })
                        }
                    });
                    await r
                }
                await a(757688).WE({
                    environment: t,
                    clientStore: o,
                    threadStore: s,
                    initialAgentActions: [{
                        type: "injectToolCall",
                        toolName: i,
                        parameters: l,
                        moduleId: r
                    }]
                })
            }
            async function r(e) {
                return s({ ...e,
                    toolName: e.toolName,
                    parameters: e.parameters,
                    moduleId: e.moduleId
                })
            }
            async function i(e) {
                let t = (0, a(409691).BH)(e.serverUrl),
                    o = (0, a(409691).CG)(t, "read-resource");
                return s({ ...e,
                    toolName: o,
                    parameters: {
                        uri: e.resourceUri
                    },
                    moduleId: e.moduleId
                })
            }
            a(16280), a(944114), a(898992), a(354520), a(672577), a(803949), a(581454), a(737550), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            var l = a(474848);
            let n = (0, a(109939).YK)({
                statusConnected: {
                    id: "mcpInspectorModal.statusConnected",
                    defaultMessage: "Connected"
                },
                statusNeedsReauth: {
                    id: "mcpInspectorModal.statusNeedsReauth",
                    defaultMessage: "Needs re-auth"
                },
                statusNeedsAuth: {
                    id: "mcpInspectorModal.statusNeedsAuth",
                    defaultMessage: "Needs auth"
                },
                statusDisabled: {
                    id: "mcpInspectorModal.statusDisabled",
                    defaultMessage: "Disabled"
                }
            });

            function d(e) {
                let t, {
                        module: o,
                        isEnabled: s
                    } = e,
                    r = (0, a(96209).y)(o),
                    i = (0, a(109939).tz)(),
                    d = function(e) {
                        let {
                            statusColor: t,
                            isEnabled: o
                        } = e;
                        return (0, a(960253).I)(() => ({
                            dot: {
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                flexShrink: 0,
                                backgroundColor: o ? "green" === t ? a(632079).Tj.green.background.accentPrimary : "yellow" === t ? a(632079).Tj.yellow.background.accentPrimary : a(632079).Tj.gray.background.tertiary : a(632079).Tj.gray.background.tertiary
                            }
                        }), [t, o])
                    }({
                        statusColor: r.color,
                        isEnabled: s
                    });
                return t = s ? "connected" === r.status ? n.statusConnected : "needs_reauth" === r.status ? n.statusNeedsReauth : n.statusNeedsAuth : n.statusDisabled, (0, l.jsx)(a(51831).m, {
                    placement: "top",
                    content: () => i.formatMessage(t),
                    children: e => (0, l.jsx)("div", {
                        style: d.dot,
                        ...e
                    })
                })
            }
            let c = (0, a(109939).YK)({
                    title: {
                        id: "mcpInspectorModal.title",
                        defaultMessage: "MCP Inspector"
                    },
                    toolsTab: {
                        id: "mcpInspectorModal.toolsTab",
                        defaultMessage: "Tools"
                    },
                    resourcesTab: {
                        id: "mcpInspectorModal.resourcesTab",
                        defaultMessage: "Resources"
                    },
                    noTools: {
                        id: "mcpInspectorModal.noTools",
                        defaultMessage: "No tools available"
                    },
                    noResources: {
                        id: "mcpInspectorModal.noResources",
                        defaultMessage: "No resources available"
                    },
                    parameters: {
                        id: "mcpInspectorModal.parameters",
                        defaultMessage: "Parameters"
                    },
                    invoke: {
                        id: "mcpInspectorModal.invoke",
                        defaultMessage: "Invoke"
                    },
                    close: {
                        id: "mcpInspectorModal.close",
                        defaultMessage: "Close"
                    }
                }),
                u = {
                    style0: {
                        opacity: .6
                    },
                    header: {
                        padding: 24,
                        borderBottom: `1px solid ${a(632079).Tj.border.secondary}`
                    },
                    tabRow: {
                        display: "flex",
                        gap: 8,
                        paddingInline: 24,
                        paddingTop: 16,
                        borderBottom: `1px solid ${a(632079).Tj.border.secondary}`
                    },
                    tab: {
                        paddingBlock: 8,
                        paddingInline: 12,
                        borderBottom: "2px solid transparent",
                        cursor: "pointer"
                    },
                    activeTab: {
                        borderBottomColor: a(632079).Tj.blue.icon.accentPrimary
                    },
                    body: {
                        flex: 1,
                        display: "flex",
                        minHeight: 0,
                        overflow: "hidden"
                    },
                    sidebar: {
                        width: 240,
                        borderInlineEnd: `1px solid ${a(632079).Tj.border.secondary}`,
                        overflowY: "auto",
                        padding: 12
                    },
                    content: {
                        flex: 1,
                        overflowY: "auto",
                        padding: 24,
                        display: "flex",
                        flexDirection: "column",
                        gap: 16
                    },
                    codeBlockWrapper: {
                        maxHeight: 300,
                        overflowY: "auto"
                    },
                    toolItem: {
                        padding: 8,
                        borderRadius: 6,
                        cursor: "pointer"
                    },
                    toolItemActive: {
                        backgroundColor: a(632079).Tj.background.secondaryTranslucent
                    },
                    footer: {
                        padding: 20,
                        borderTop: `1px solid ${a(632079).Tj.border.secondary}`,
                        display: "flex",
                        justifyContent: "space-between"
                    },
                    positionRelative: {
                        position: "relative"
                    }
                };

            function h(e) {
                let {
                    isOpen: t,
                    onClose: s,
                    modules: r,
                    threadStore: i,
                    onInvokeTool: n,
                    onInvokeResource: h
                } = e, [p, g] = (0, o.useState)("tools"), [f, m] = (0, o.useState)(0), [y, v] = (0, o.useState)(0), [b, x] = (0, o.useState)("{}"), [k, I] = (0, o.useState)(!1), [j, w] = (0, o.useState)(), C = (0, a(682985).K8)(() => (null == i ? void 0 : i.getTranscript()) ? ? [], [i]);
                (0, o.useEffect)(() => {
                    k && j && i && C.some(e => "agent-tool-result" === e.type && (e.toolName === j || e.toolName === `mcp-${j.replace(/^mcp-/,"")}`) && (0, a(780899).nP)(e)) && (I(!1), w(void 0), s())
                }, [C, k, j, i, s]);
                let S = (0, o.useCallback)(e => {
                        if (!e.inputSchema || "object" != typeof e.inputSchema) return "{}";
                        let t = e.inputSchema;
                        if (!("properties" in t) || "object" != typeof t.properties || !t.properties) return "{}";
                        let a = {},
                            o = "required" in t && Array.isArray(t.required) ? t.required : [];
                        for (let [e, s] of Object.entries(t.properties))
                            if (o.includes(e) && s && "object" == typeof s && !Array.isArray(s)) {
                                let t = "type" in s && "string" == typeof s.type ? s.type : void 0,
                                    o = "";
                                "string" === t ? o = "" : "number" === t ? o = "0" : "boolean" === t && (o = "false"), a[e] = o
                            }
                        return JSON.stringify(a, null, 2)
                    }, []),
                    M = (0, a(682985).K8)(() => {
                        let e = [];
                        for (let a of r) {
                            var t;
                            if ("mcpServer" === a.type && null != (t = a.state) && t.tools) {
                                let t = a.state.enabledToolNames,
                                    o = new Set(t);
                                for (let s of a.state.tools) e.push({
                                    tool: s,
                                    moduleId: a.id,
                                    moduleName: a.name,
                                    moduleValue: a,
                                    isEnabled: void 0 === t || o.has(s.name)
                                })
                            }
                        }
                        return e
                    }, [r]),
                    T = (0, a(682985).K8)(() => {
                        let e = [];
                        for (let a of r) {
                            var t;
                            if ("mcpServer" === a.type && null != (t = a.state) && t.resources) {
                                let t = a.state.enabledResourceUris,
                                    o = new Set(t);
                                for (let s of a.state.resources) e.push({
                                    resource: s,
                                    moduleId: a.id,
                                    moduleName: a.name,
                                    moduleValue: a,
                                    isEnabled: void 0 === t || o.has(s.uri)
                                })
                            }
                        }
                        return e
                    }, [r]),
                    A = M[f],
                    P = T[y];
                o.useEffect(() => {
                    A && x(S(A.tool))
                }, [A, S]);
                let B = (0, o.useCallback)(async () => {
                    if (!k) {
                        I(!0);
                        try {
                            var e, t, o;
                            if ("tools" === p && A) {
                                let t = JSON.parse(b),
                                    o = (0, a(409691).BH)(null == (e = A.moduleValue.state) ? void 0 : e.serverUrl),
                                    s = (0, a(409691).CG)(o, A.tool.name);
                                w(s), await n({
                                    moduleId: A.moduleId,
                                    toolName: s,
                                    parameters: t
                                })
                            } else if ("resources" === p && P) {
                                let e = (0, a(409691).BH)(null == (t = P.moduleValue.state) ? void 0 : t.serverUrl),
                                    s = (0, a(409691).CG)(e, "read-resource");
                                w(s), await h({
                                    moduleId: P.moduleId,
                                    serverUrl: null == (o = P.moduleValue.state) ? void 0 : o.serverUrl,
                                    resourceUri: P.resource.uri
                                })
                            }
                        } catch (e) {
                            throw I(!1), w(void 0), e
                        }
                    }
                }, [k, p, A, P, b, n, h]);
                return (0, l.jsx)(a(833503).s, {
                    isOpen: t,
                    onDismiss: s,
                    areaConstraint: {
                        width: {
                            type: "fixed",
                            length: 960
                        },
                        height: {
                            type: "unlimited"
                        }
                    },
                    children: () => (0, l.jsxs)(a(4458).VP, {
                        width: 960,
                        maxWidth: "90vw",
                        maxHeight: "90vh",
                        children: [(0, l.jsx)("div", {
                            style: u.header,
                            children: (0, l.jsx)(a(111010).D, {
                                styleKey: "titleMedium",
                                children: (0, l.jsx)(a(109939).sA, { ...c.title
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            style: u.tabRow,
                            children: [(0, l.jsx)(a(64960).Ay, {
                                style: { ...u.tab,
                                    ..."tools" === p ? u.activeTab : {}
                                },
                                onClick: () => g("tools"),
                                children: (0, l.jsx)(a(111010).D, {
                                    styleKey: "bodyMedium",
                                    children: (0, l.jsx)(a(109939).sA, { ...c.toolsTab
                                    })
                                })
                            }), (0, l.jsx)(a(64960).Ay, {
                                style: { ...u.tab,
                                    ..."resources" === p ? u.activeTab : {}
                                },
                                onClick: () => g("resources"),
                                children: (0, l.jsx)(a(111010).D, {
                                    styleKey: "bodyMedium",
                                    children: (0, l.jsx)(a(109939).sA, { ...c.resourcesTab
                                    })
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            style: u.body,
                            children: [(0, l.jsx)("div", {
                                style: u.sidebar,
                                children: "tools" === p ? 0 === M.length ? (0, l.jsx)(a(4458).fI, {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    children: (0, l.jsx)(a(111010).D, {
                                        styleKey: "bodyRegular",
                                        colorVariant: "secondary",
                                        children: (0, l.jsx)(a(109939).sA, { ...c.noTools
                                        })
                                    })
                                }) : M.map((e, t) => (0, l.jsx)(a(64960).Ay, {
                                    style: { ...u.toolItem,
                                        ...t === f ? u.toolItemActive : {},
                                        ...!e.isEnabled ? u.style0 : {}
                                    },
                                    onClick: () => m(t),
                                    children: (0, l.jsxs)(a(4458).fI, {
                                        gap: 8,
                                        alignItems: "center",
                                        className: "autolayout-row autolayout-fill-width",
                                        style: u.positionRelative,
                                        children: [(0, l.jsx)(d, {
                                            module: e.moduleValue,
                                            isEnabled: e.isEnabled
                                        }), (0, l.jsxs)(a(4458).VP, {
                                            gap: 0,
                                            className: "autolayout-col",
                                            style: u.positionRelative,
                                            flex: "1 1 0",
                                            children: [(0, l.jsxs)(a(4458).fI, {
                                                gap: 4,
                                                alignItems: "center",
                                                className: "autolayout-row",
                                                style: u.positionRelative,
                                                children: [(0, l.jsx)(a(111010).D, {
                                                    styleKey: "bodySmMedium",
                                                    colorVariant: e.isEnabled ? void 0 : "tertiary",
                                                    children: e.tool.title
                                                }), e.isEnabled ? void 0 : (0, l.jsx)(a(746434).E, {
                                                    color: "gray",
                                                    content: "Disabled"
                                                })]
                                            }), (0, l.jsx)(a(111010).D, {
                                                styleKey: "captionRegular",
                                                colorVariant: "secondary",
                                                children: e.moduleName
                                            })]
                                        })]
                                    })
                                }, `${e.moduleId}-${e.tool.name}`)) : 0 === T.length ? (0, l.jsx)(a(4458).fI, {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    children: (0, l.jsx)(a(111010).D, {
                                        styleKey: "bodyRegular",
                                        colorVariant: "secondary",
                                        children: (0, l.jsx)(a(109939).sA, { ...c.noResources
                                        })
                                    })
                                }) : T.map((e, t) => (0, l.jsx)(a(64960).Ay, {
                                    style: { ...u.toolItem,
                                        ...t === y ? u.toolItemActive : {},
                                        ...!e.isEnabled ? u.style0 : {}
                                    },
                                    onClick: () => v(t),
                                    children: (0, l.jsxs)(a(4458).fI, {
                                        gap: 8,
                                        alignItems: "center",
                                        className: "autolayout-row autolayout-fill-width",
                                        style: u.positionRelative,
                                        children: [(0, l.jsx)(d, {
                                            module: e.moduleValue,
                                            isEnabled: e.isEnabled
                                        }), (0, l.jsxs)(a(4458).VP, {
                                            gap: 0,
                                            className: "autolayout-col",
                                            style: u.positionRelative,
                                            flex: "1 1 0",
                                            children: [(0, l.jsxs)(a(4458).fI, {
                                                gap: 4,
                                                alignItems: "center",
                                                className: "autolayout-row",
                                                style: u.positionRelative,
                                                children: [(0, l.jsx)(a(111010).D, {
                                                    styleKey: "bodySmMedium",
                                                    colorVariant: e.isEnabled ? void 0 : "tertiary",
                                                    children: e.resource.title || e.resource.name || e.resource.uri
                                                }), e.isEnabled ? void 0 : (0, l.jsx)(a(746434).E, {
                                                    color: "gray",
                                                    content: "Disabled"
                                                })]
                                            }), (0, l.jsx)(a(111010).D, {
                                                styleKey: "captionRegular",
                                                colorVariant: "secondary",
                                                children: e.moduleName
                                            })]
                                        })]
                                    })
                                }, `${e.moduleId}-${e.resource.uri}`))
                            }), (0, l.jsx)("div", {
                                style: u.content,
                                children: "tools" === p ? A ? (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsxs)(a(4458).VP, {
                                        gap: 8,
                                        className: "autolayout-col autolayout-fill-width",
                                        style: u.positionRelative,
                                        children: [(0, l.jsxs)(a(4458).fI, {
                                            gap: 8,
                                            alignItems: "center",
                                            className: "autolayout-row",
                                            style: u.positionRelative,
                                            children: [(0, l.jsx)(a(111010).D, {
                                                styleKey: "titleMedium",
                                                children: A.tool.title
                                            }), A.isEnabled ? void 0 : (0, l.jsx)(a(746434).E, {
                                                color: "gray",
                                                content: "Disabled"
                                            })]
                                        }), A.tool.description ? (0, l.jsx)(a(111010).D, {
                                            styleKey: "bodyRegular",
                                            colorVariant: "secondary",
                                            children: A.tool.description
                                        }) : void 0, A.isEnabled ? void 0 : (0, l.jsx)(a(111010).D, {
                                            styleKey: "captionRegular",
                                            colorVariant: "tertiary",
                                            children: "This tool is disabled. You can still invoke it for debugging, but it won't be available to the agent."
                                        })]
                                    }), A.tool.inputSchema ? (0, l.jsxs)(a(4458).VP, {
                                        gap: 8,
                                        className: "autolayout-col autolayout-fill-width",
                                        style: u.positionRelative,
                                        children: [(0, l.jsx)(a(111010).D, {
                                            styleKey: "bodySmMedium",
                                            children: "Input schema"
                                        }), (0, l.jsx)("div", {
                                            style: u.codeBlockWrapper,
                                            children: (0, l.jsx)(a(140102).X, {
                                                value: JSON.stringify(A.tool.inputSchema, null, 2),
                                                disabled: !0,
                                                language: "json"
                                            })
                                        })]
                                    }) : void 0, (0, l.jsxs)(a(4458).VP, {
                                        gap: 8,
                                        className: "autolayout-col autolayout-fill-width",
                                        style: u.positionRelative,
                                        children: [(0, l.jsx)(a(111010).D, {
                                            styleKey: "bodySmMedium",
                                            children: (0, l.jsx)(a(109939).sA, { ...c.parameters
                                            })
                                        }), (0, l.jsx)("div", {
                                            style: u.codeBlockWrapper,
                                            children: (0, l.jsx)(a(140102).X, {
                                                value: b,
                                                onChange: x,
                                                language: "json"
                                            })
                                        })]
                                    })]
                                }) : null : P ? (0, l.jsxs)(a(4458).VP, {
                                    gap: 8,
                                    className: "autolayout-col autolayout-fill-width",
                                    style: u.positionRelative,
                                    children: [(0, l.jsxs)(a(4458).fI, {
                                        gap: 8,
                                        alignItems: "center",
                                        className: "autolayout-row",
                                        style: u.positionRelative,
                                        children: [(0, l.jsx)(a(111010).D, {
                                            styleKey: "titleMedium",
                                            children: P.resource.title || P.resource.name || P.resource.uri
                                        }), P.isEnabled ? void 0 : (0, l.jsx)(a(746434).E, {
                                            color: "gray",
                                            content: "Disabled"
                                        })]
                                    }), P.resource.description ? (0, l.jsx)(a(111010).D, {
                                        styleKey: "bodyRegular",
                                        colorVariant: "secondary",
                                        children: P.resource.description
                                    }) : void 0, P.isEnabled ? void 0 : (0, l.jsx)(a(111010).D, {
                                        styleKey: "captionRegular",
                                        colorVariant: "tertiary",
                                        children: "This resource is disabled. You can still read it for debugging, but it won't be available to the agent."
                                    }), (0, l.jsxs)(a(4458).VP, {
                                        gap: 4,
                                        className: "autolayout-col",
                                        style: u.positionRelative,
                                        children: [(0, l.jsxs)(a(111010).D, {
                                            styleKey: "captionRegular",
                                            colorVariant: "secondary",
                                            children: ["URI: ", P.resource.uri]
                                        }), P.resource.mimeType ? (0, l.jsxs)(a(111010).D, {
                                            styleKey: "captionRegular",
                                            colorVariant: "secondary",
                                            children: ["MIME Type: ", P.resource.mimeType]
                                        }) : void 0]
                                    })]
                                }) : null
                            })]
                        }), (0, l.jsxs)("div", {
                            style: u.footer,
                            children: [(0, l.jsx)(a(548436).A, {
                                onClick: s,
                                children: (0, l.jsx)(a(109939).sA, { ...c.close
                                })
                            }), (0, l.jsx)(a(912946).A, {
                                onClick: B,
                                disabled: k || "tools" === p && 0 === M.length || "resources" === p && 0 === T.length,
                                children: k ? (0, l.jsxs)(a(4458).fI, {
                                    gap: 8,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    className: "autolayout-row autolayout-fill-width",
                                    style: u.positionRelative,
                                    children: [(0, l.jsx)(a(517334).k, {
                                        size: "default",
                                        onDarkBackground: !0
                                    }), (0, l.jsx)(a(109939).sA, { ...c.invoke
                                    })]
                                }) : (0, l.jsx)(a(109939).sA, { ...c.invoke
                                })
                            })]
                        })]
                    })
                })
            }
            let p = (0, a(109939).YK)({
                    experimentsTitle: {
                        id: "AgentChatSettingsMenu.AgentFeatureGatesSection.Title",
                        defaultMessage: "Experiments"
                    },
                    wildWestTitle: {
                        id: "AgentChatSettingsMenu.AgentFeatureGatesSection.WildWestTitle",
                        defaultMessage: "Wild west"
                    },
                    toolInspector: {
                        id: "AgentChatSettingsMenu.inspectorMenuItem",
                        defaultMessage: "Tool inspector"
                    }
                }),
                g = a(612608).QT.filter(e => "default" === e.group),
                f = a(612608).QT.filter(e => "advanced" === e.group),
                m = (0, a(109939).YK)({
                    experimentalSettingsTooltip: {
                        id: "agentChatView.experimentalSettingsTooltip",
                        defaultMessage: "Experimental settings"
                    },
                    experimentalSettingsAriaLabel: {
                        id: "agentChatView.experimentalSettings",
                        defaultMessage: "Experimental settings"
                    }
                }),
                y = {
                    minWidth: 240
                };

            function v(e) {
                let {
                    aiChatFeatureController: t,
                    threadStore: s,
                    clientStore: n
                } = e, d = (0, a(719298).v)({
                    shape: t.headerButtonShape,
                    aiChatFeatureController: t
                }), [c, u, y] = function(e, t) {
                    let s = (0, o.useContext)(a(694220).p);
                    if (!s) throw Error("useFeatureGate must be used within a FeatureGateContextProvider");
                    let n = (0, o.useCallback)((e, t) => {
                            if (e.featureGates.forEach(e => {
                                    a(473556).default.updateLocalOverrideGate(e, !t)
                                }), !t && "agent_automations" === e.id) {
                                let e = a(612608).QT.find(e => "custom_agents" === e.id);
                                e && e.featureGates.forEach(e => {
                                    a(473556).default.updateLocalOverrideGate(e, !0)
                                })
                            }
                        }, []),
                        d = (0, a(682985).K8)(() => g.map((e, t) => {
                            let o = (0, a(612608).MI)(e, e => s.withoutExposureLogging(e, !1));
                            return {
                                action: a(763230).lQ,
                                key: `agent_feature_gate_${t}`,
                                render: t => (0, l.jsx)(a(296060).A, { ...t,
                                    on: o,
                                    onClick: () => n(e, o),
                                    title: e.label
                                })
                            }
                        }), [s, n]),
                        [c, u] = (0, o.useState)(!1),
                        m = (0, a(972740).L)(),
                        y = (0, a(682985).K8)(() => {
                            let t = null == e ? void 0 : e.getTranscript(),
                                o = null == t ? void 0 : t.find(e => "config" === e.type),
                                s = (null == o ? void 0 : o.type) === "config" && "workflow" === o.value.type ? o.value.workflowId : void 0;
                            if (!s || !m) return [];
                            let r = a(360851).N.createChildStore(m, {
                                table: a(832375).C0E,
                                id: s,
                                spaceId: m.id
                            });
                            return ((0, a(207966).o)(r) ? ? []).filter(e => "mcpServer" === e.type)
                        }, [e, m]),
                        v = (0, a(682985).K8)(() => {
                            let e = f.map((e, t) => {
                                    let o = (0, a(612608).MI)(e, e => s.withoutExposureLogging(e, !1));
                                    return {
                                        action: a(763230).lQ,
                                        key: `agent_feature_gate_${t}`,
                                        render: t => (0, l.jsx)(a(296060).A, { ...t,
                                            on: o,
                                            onClick: () => n(e, o),
                                            title: e.label
                                        })
                                    }
                                }),
                                t = s.withoutExposureLogging("workflows_debug_tools", !1),
                                o = y.length > 0 && y.some(e => {
                                    var t, a;
                                    return ((null == (t = e.state) || null == (t = t.tools) ? void 0 : t.length) ? ? 0) > 0 || ((null == (a = e.state) || null == (a = a.resources) ? void 0 : a.length) ? ? 0) > 0
                                });
                            return t && o && e.push({
                                action: () => u(!0),
                                key: "mcp_inspector",
                                render: e => (0, l.jsx)(a(95582).A, { ...e,
                                    title: (0, l.jsx)(a(109939).sA, { ...p.toolInspector
                                    })
                                })
                            }), e
                        }, [s, n, y]),
                        {
                            handleInvokeTool: b,
                            handleInvokeResource: x
                        } = function(e) {
                            let {
                                clientStore: t,
                                threadStore: s
                            } = e, l = (0, a(533992).v3)(), n = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore);
                            return {
                                handleInvokeTool: (0, o.useCallback)(async e => {
                                    if (!t || !s) throw Error("ClientStore and ThreadStore required");
                                    if (!n) throw Error("No space store");
                                    await r({
                                        environment: l,
                                        clientStore: t,
                                        threadStore: s,
                                        spaceId: n.id,
                                        moduleId: e.moduleId,
                                        toolName: e.toolName,
                                        parameters: e.parameters
                                    })
                                }, [t, s, l, n]),
                                handleInvokeResource: (0, o.useCallback)(async e => {
                                    if (!t || !s) throw Error("ClientStore and ThreadStore required");
                                    if (!n) throw Error("No space store");
                                    await i({
                                        environment: l,
                                        clientStore: t,
                                        threadStore: s,
                                        spaceId: n.id,
                                        moduleId: e.moduleId,
                                        serverUrl: e.serverUrl,
                                        resourceUri: e.resourceUri
                                    })
                                }, [t, s, l, n])
                            }
                        }({
                            clientStore: t,
                            threadStore: e
                        });
                    return [{
                        items: d,
                        key: "agent_feature_gates_default",
                        render: e => (0, l.jsx)(a(844565).A, { ...e,
                            title: (0, l.jsx)(a(109939).sA, { ...p.experimentsTitle
                            })
                        })
                    }, {
                        items: v,
                        key: "agent_feature_gates_advanced",
                        render: e => (0, l.jsx)(a(844565).A, { ...e,
                            loading: !1,
                            title: (0, l.jsx)(a(109939).sA, { ...p.wildWestTitle
                            })
                        })
                    }, (0, l.jsx)(h, {
                        isOpen: c,
                        onClose: () => u(!1),
                        modules: y,
                        threadStore: e,
                        onInvokeTool: b,
                        onInvokeResource: x
                    })]
                }(s, n), v = (0, o.useCallback)(() => {
                    let e = (0, a(381453).oE)([c, u]);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(a(747369).A, {
                            menuType: a(649476).gu.Popup,
                            children: (0, l.jsx)(a(558045).A, {
                                initialFocus: void 0,
                                sections: e,
                                type: a(558045).O.Vertical
                            })
                        }), y]
                    })
                }, [c, u, y]), b = (0, a(109939).tz)(), x = (0, o.useCallback)(e => (0, l.jsx)(a(51831).m, {
                    content: () => (0, l.jsx)(a(109939).sA, { ...m.experimentalSettingsTooltip
                    }),
                    children: t => (0, l.jsx)(a(374533).A, { ...e,
                        ...t,
                        icon: a(850741).c,
                        style: d.iconButton,
                        iconStyle: d.iconButtonIcon,
                        ariaLabel: b.formatMessage(m.experimentalSettingsAriaLabel)
                    })
                }), [b, d.iconButton, d.iconButtonIcon]);
                return null
            }
            let b = (0, a(109939).YK)({
                    slackModalTitle: {
                        defaultMessage: "Send chat to Slack",
                        id: "shareChatSlackModal.title"
                    },
                    slackModalSubtitle: {
                        defaultMessage: "Only messages up until now will be shared.",
                        id: "shareChatSlackModal.subtitle"
                    },
                    slackModalChannelTitleLabel: {
                        defaultMessage: "Post to",
                        id: "shareChatSlackModal.channelTitleLabel"
                    },
                    slackModalPreviewOptionalMessage: {
                        defaultMessage: "Here’s my AI chat about “{chatTitle}”",
                        id: "shareChatSlackModal.previewOptionalMessage"
                    },
                    slackModalSend: {
                        defaultMessage: "Send to Slack",
                        id: "shareChatSlackModal.post"
                    },
                    slackModalBack: {
                        defaultMessage: "Back",
                        id: "shareChatSlackModal.back"
                    },
                    slackModalSendSuccess: {
                        defaultMessage: "Chat sent to Slack",
                        id: "shareChatSlackModal.sendSuccess"
                    },
                    slackModalSendError: {
                        defaultMessage: "Failed to send chat",
                        id: "shareChatSlackModal.sendError"
                    },
                    slackModalNoAuthentication: {
                        defaultMessage: "To share to Slack, you need to connect your Slack workspace first. Go to Settings → Integrations to set up Slack.",
                        id: "shareChatSlackModal.noAuthentication"
                    },
                    slackModalNoThreadId: {
                        defaultMessage: "Unable to share chat. Please try creating a share link first.",
                        id: "shareChatSlackModal.noThreadId"
                    },
                    slackLabel: {
                        defaultMessage: "Slack",
                        id: "shareChatSlackModal.slackLabel"
                    },
                    closeModal: {
                        defaultMessage: "Close",
                        id: "shareChatSlackModal.closeModal"
                    }
                }),
                x = {
                    closeButton: {
                        borderRadius: "50%"
                    },
                    previewBox: {
                        backgroundColor: a(632079).Tj.background.secondary,
                        border: `1px solid ${a(632079).Tj.border.secondaryTranslucent}`,
                        borderRadius: 8,
                        padding: 16,
                        wordWrap: "break-word",
                        overflowWrap: "break-word"
                    },
                    previewMessage: {
                        wordBreak: "break-word"
                    },
                    slackBadge: {
                        backgroundColor: a(632079).Tj.background.primary,
                        border: `1px solid ${a(632079).Tj.border.secondaryTranslucent}`,
                        borderRadius: 16,
                        paddingInline: 12,
                        paddingBlock: 6,
                        alignSelf: "flex-start"
                    }
                };

            function k({
                isOpen: e,
                spaceId: t,
                threadId: s,
                chatTitle: r,
                onBack: i,
                onDismiss: n
            }) {
                let d = (0, a(533992).v3)(),
                    c = (0, a(109939).tz)(),
                    [u, h] = (0, o.useState)(""),
                    [p, g] = (0, o.useState)(),
                    [f, m] = (0, o.useState)(!1),
                    y = c.formatMessage(b.slackModalPreviewOptionalMessage, {
                        chatTitle: r
                    }),
                    v = s ? (0, a(53554).VS)({
                        spaceId: t,
                        threadId: s
                    }) : "",
                    I = `${y} ${v}`,
                    [j, w] = (0, o.useState)("");
                o.useEffect(() => {
                    s && w(I)
                }, [I, s]);
                let C = (0, a(682985).O$)(a(610463).A.completeSlackAuthentications),
                    S = C.length > 0;
                o.useEffect(() => {
                    e && S && (0, a(524088).Hn)({
                        environment: d,
                        spaceId: C[0].space_id,
                        externalAuthConfig: {
                            type: "external",
                            botId: C[0].id
                        }
                    })
                }, [e, d, C, S]);
                let M = (0, a(682985).K8)(() => S ? Object.values(a(315799).c.getStateForBot({
                        type: "external",
                        botId: C[0].id
                    }).channels).filter(e => "me" !== e.type).sort((e, t) => e.name.localeCompare(t.name)) : [], [C, S]),
                    T = (0, o.useMemo)(() => {
                        if (!u) return M.slice(0, 10);
                        let e = u.toLowerCase();
                        return M.filter(t => t.name.toLowerCase().includes(e)).slice(0, 10)
                    }, [M, u]),
                    A = (0, o.useCallback)(e => {
                        h(e.target.value), g(void 0)
                    }, []),
                    P = (0, o.useCallback)(e => {
                        g(e), h("")
                    }, []),
                    B = (0, o.useCallback)(async () => {
                        if (p && S && s) {
                            m(!0);
                            try {
                                var e;
                                let o = C[0],
                                    i = await d.api.callApi({
                                        eventName: "sendChatToSlack",
                                        environment: d,
                                        data: {
                                            spaceId: o.space_id,
                                            botId: o.id,
                                            channelId: p.id,
                                            chatUrl: (0, a(53554).VS)({
                                                spaceId: t,
                                                threadId: s
                                            }),
                                            chatTitle: r,
                                            message: j
                                        }
                                    });
                                if ("success" !== i.type) {
                                    (0, a(222024).t)().error({
                                        from: "ShareChatSlackModal",
                                        type: "sendToSlackApiFailed",
                                        error: i.error
                                    }), a(647095).f1(c.formatMessage(b.slackModalSendError));
                                    return
                                }(null == (e = i.data) ? void 0 : e.success) === !0 ? a(436555).D6({
                                    label: c.formatMessage(b.slackModalSendSuccess)
                                }) : ((0, a(222024).t)().error({
                                    from: "ShareChatSlackModal",
                                    type: "sendToSlackBusinessLogicFailed",
                                    error: "Slack API returned success: false"
                                }), a(647095).f1(c.formatMessage(b.slackModalSendError)))
                            } catch (e) {
                                (0, a(222024).t)().error({
                                    from: "ShareChatSlackModal",
                                    type: "sendToSlackException",
                                    error: e
                                }), a(647095).f1(c.formatMessage(b.slackModalSendError))
                            } finally {
                                m(!1)
                            }
                        }
                    }, [d, C, S, r, t, s, j, p, c]);
                return S ? s ? (0, l.jsx)(a(556809).a, {
                    open: e,
                    ariaLabel: c.formatMessage(b.slackModalTitle),
                    onDismiss: n,
                    showCloseIcon: !1,
                    children: (0, l.jsx)(a(790124).A, {
                        capture: !0,
                        allowUndo: !1,
                        allowEsc: !0,
                        children: e => (0, l.jsxs)(a(4458).VP, {
                            gap: 12,
                            padding: 20,
                            width: 408,
                            ...e,
                            children: [(0, l.jsxs)(a(4458).fI, {
                                alignItems: "center",
                                justifyContent: "space-between",
                                children: [(0, l.jsx)(a(111010).D, {
                                    styleKey: "titleSmSemibold",
                                    children: (0, l.jsx)(a(109939).sA, { ...b.slackModalTitle
                                    })
                                }), (0, l.jsx)(a(374533).A, {
                                    size: "xs",
                                    ariaLabel: c.formatMessage(b.slackModalTitle),
                                    onClick: n,
                                    icon: a(766970).xMarkFillIcon,
                                    style: x.closeButton
                                })]
                            }), (0, l.jsx)(a(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: (0, l.jsx)(a(109939).sA, { ...b.slackModalSubtitle
                                })
                            }), (0, l.jsxs)(a(4458).VP, {
                                gap: 16,
                                style: x.previewBox,
                                children: [(0, l.jsx)(a(111010).D, {
                                    styleKey: "bodyRegular",
                                    style: x.previewMessage,
                                    children: j
                                }), (0, l.jsxs)(a(4458).fI, {
                                    alignItems: "center",
                                    gap: 8,
                                    style: x.slackBadge,
                                    children: [(0, l.jsx)(a(16275).I, {
                                        icon: a(378111).slackIcon,
                                        size: "sm"
                                    }), (0, l.jsx)(a(111010).D, {
                                        styleKey: "bodyRegular",
                                        colorVariant: "secondary",
                                        children: (0, l.jsx)(a(109939).sA, { ...b.slackLabel
                                        })
                                    })]
                                })]
                            }), (0, l.jsxs)(a(4458).VP, {
                                gap: 8,
                                children: [(0, l.jsx)(a(111010).D, {
                                    styleKey: "captionMedium",
                                    colorVariant: "secondary",
                                    children: (0, l.jsx)(a(109939).sA, { ...b.slackModalChannelTitleLabel
                                    })
                                }), (0, l.jsx)(a(721348).S, {
                                    selectedChannel: p,
                                    channels: T,
                                    searchQuery: u,
                                    onSearchChange: A,
                                    onChannelSelect: P
                                })]
                            }), (0, l.jsxs)(a(4458).fI, {
                                justifyContent: "flex-end",
                                gap: 12,
                                paddingTop: 12,
                                children: [(0, l.jsx)(a(548436).A, {
                                    onClick: i,
                                    children: (0, l.jsx)(a(109939).sA, { ...b.slackModalBack
                                    })
                                }), (0, l.jsx)(a(912946).A, {
                                    colorPalette: "blue",
                                    disabled: !p,
                                    isLoading: f,
                                    onClick: B,
                                    children: (0, l.jsx)(a(109939).sA, { ...b.slackModalSend
                                    })
                                })]
                            })]
                        })
                    })
                }) : (0, l.jsx)(a(556809).a, {
                    open: e,
                    ariaLabel: c.formatMessage(b.slackModalTitle),
                    onDismiss: n,
                    showCloseIcon: !1,
                    children: (0, l.jsx)(a(790124).A, {
                        capture: !0,
                        allowUndo: !1,
                        allowEsc: !0,
                        children: e => (0, l.jsxs)(a(4458).VP, {
                            gap: 12,
                            padding: 20,
                            width: 408,
                            ...e,
                            children: [(0, l.jsxs)(a(4458).fI, {
                                alignItems: "center",
                                justifyContent: "space-between",
                                children: [(0, l.jsx)(a(111010).D, {
                                    styleKey: "titleSmSemibold",
                                    children: (0, l.jsx)(a(109939).sA, { ...b.slackModalTitle
                                    })
                                }), (0, l.jsx)(a(374533).A, {
                                    size: "xs",
                                    ariaLabel: c.formatMessage(b.closeModal),
                                    onClick: n,
                                    icon: a(766970).xMarkFillIcon,
                                    style: x.closeButton
                                })]
                            }), (0, l.jsx)(a(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: (0, l.jsx)(a(109939).sA, { ...b.slackModalNoThreadId
                                })
                            })]
                        })
                    })
                }) : (0, l.jsx)(a(556809).a, {
                    open: e,
                    ariaLabel: c.formatMessage(b.slackModalTitle),
                    onDismiss: n,
                    showCloseIcon: !1,
                    children: (0, l.jsx)(a(790124).A, {
                        capture: !0,
                        allowUndo: !1,
                        allowEsc: !0,
                        children: e => (0, l.jsxs)(a(4458).VP, {
                            gap: 12,
                            padding: 20,
                            width: 408,
                            ...e,
                            children: [(0, l.jsxs)(a(4458).fI, {
                                alignItems: "center",
                                justifyContent: "space-between",
                                children: [(0, l.jsx)(a(111010).D, {
                                    styleKey: "titleSmSemibold",
                                    children: (0, l.jsx)(a(109939).sA, { ...b.slackModalTitle
                                    })
                                }), (0, l.jsx)(a(374533).A, {
                                    size: "xs",
                                    ariaLabel: c.formatMessage(b.closeModal),
                                    onClick: n,
                                    icon: a(766970).xMarkFillIcon,
                                    style: x.closeButton
                                })]
                            }), (0, l.jsx)(a(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: (0, l.jsx)(a(109939).sA, { ...b.slackModalNoAuthentication
                                })
                            })]
                        })
                    })
                })
            }
            let I = (0, a(109939).YK)({
                    shareTooltip: {
                        id: "shareChatPopover.tooltip",
                        defaultMessage: "Share chat"
                    },
                    shareDisabledTooltip: {
                        id: "shareChatPopover.disabledTooltip",
                        defaultMessage: "Wait for the response to finish before sharing"
                    },
                    shareNotOwnerTooltip: {
                        id: "shareChatPopover.notOwnerTooltip",
                        defaultMessage: "Only the chat creator can share this conversation"
                    },
                    title: {
                        id: "shareChatPopover.title",
                        defaultMessage: "Share chat"
                    },
                    subtitle: {
                        id: "shareChatPopover.subtitle",
                        defaultMessage: "Only messages up until now will be shared."
                    },
                    privateLabel: {
                        id: "shareChatPopover.privateLabel",
                        defaultMessage: "Private"
                    },
                    privateDescription: {
                        id: "shareChatPopover.privateDescription",
                        defaultMessage: "Only you have access"
                    },
                    publicLabel: {
                        id: "shareChatPopover.publicLabel",
                        defaultMessage: "Create share link"
                    },
                    publicDescription: {
                        id: "shareChatPopover.publicDescription",
                        defaultMessage: "Anyone on the web with link can view"
                    },
                    disclaimer: {
                        id: "shareChatPopover.disclaimer",
                        defaultMessage: "Check content for sensitive or personal information before sharing the link. <link>Manage</link> your shared links anytime."
                    },
                    copyLink: {
                        id: "shareChatPopover.copyLink",
                        defaultMessage: "Copy link"
                    },
                    copyUpdatedLink: {
                        id: "shareChatPopover.copyUpdatedLink",
                        defaultMessage: "Copy updated link"
                    },
                    copiedToClipboard: {
                        id: "shareChatPopover.copiedToClipboard",
                        defaultMessage: "Copied link to clipboard"
                    },
                    close: {
                        id: "shareChatPopover.close",
                        defaultMessage: "Close"
                    },
                    shareFailed: {
                        id: "shareChatPopover.shareFailed",
                        defaultMessage: "Failed to share chat. Please try again."
                    },
                    copyFailed: {
                        id: "shareChatPopover.copyFailed",
                        defaultMessage: "Chat shared, but failed to copy link to clipboard."
                    },
                    revokeFailed: {
                        id: "shareChatPopover.revokeFailed",
                        defaultMessage: "Failed to make chat private. Please try again."
                    },
                    statusFetchFailed: {
                        id: "shareChatPopover.statusFetchFailed",
                        defaultMessage: "Could not load share status. Please try again."
                    },
                    staleBanner: {
                        id: "shareChatPopover.staleBanner",
                        defaultMessage: "There are new messages since last shared."
                    },
                    shareOnX: {
                        id: "shareChatPopover.shareOnX",
                        defaultMessage: "Share on X"
                    },
                    shareOnLinkedIn: {
                        id: "shareChatPopover.shareOnLinkedIn",
                        defaultMessage: "Share on LinkedIn"
                    },
                    shareOnSlack: {
                        id: "shareChatPopover.shareOnSlack",
                        defaultMessage: "Send to Slack"
                    },
                    linkedInLabel: {
                        id: "shareChatPopover.linkedInLabel",
                        defaultMessage: "LinkedIn"
                    },
                    xLabel: {
                        id: "shareChatPopover.xLabel",
                        defaultMessage: "X"
                    },
                    slackLabel: {
                        id: "shareChatPopover.slackLabel",
                        defaultMessage: "Slack"
                    },
                    defaultChatTitle: {
                        id: "shareChatPopover.defaultChatTitle",
                        defaultMessage: "AI Chat"
                    }
                }),
                j = {
                    closeButton: {
                        borderRadius: "50%"
                    },
                    socialButtonWrapper: {
                        borderRadius: "50%",
                        width: 50,
                        height: 50,
                        backgroundColor: a(632079).Tj.background.primary,
                        border: `1px solid ${a(632079).Tj.border.secondaryTranslucent}`,
                        boxShadow: a(632079).Tj.shadow.base.sm,
                        transform: "translateY(-1px)"
                    },
                    socialButtonWrapperDisabled: {
                        opacity: .5
                    },
                    socialButton: {
                        backgroundColor: "transparent",
                        border: "none",
                        width: 38,
                        height: 38
                    }
                };

            function w({
                icon: e,
                tooltipMessage: t,
                label: o,
                disabled: s,
                onClick: r,
                iconColorVariant: i
            }) {
                let n = (0, a(109939).tz)();
                return (0, l.jsxs)(a(4458).VP, {
                    alignItems: "center",
                    gap: 8,
                    children: [(0, l.jsx)(a(51831).m, {
                        content: () => (0, l.jsx)(a(109939).sA, { ...t
                        }),
                        children: o => (0, l.jsx)(a(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            style: { ...j.socialButtonWrapper,
                                ...s && j.socialButtonWrapperDisabled
                            },
                            children: (0, l.jsx)(a(374533).A, {
                                icon: {
                                    icon: e,
                                    size: "default",
                                    ...i && {
                                        colorVariant: i
                                    }
                                },
                                size: "lg",
                                shape: "pill",
                                disableBackground: !0,
                                style: j.socialButton,
                                ariaLabel: n.formatMessage(t),
                                disabled: s,
                                onClick: () => {
                                    s || r()
                                },
                                ...o
                            })
                        })
                    }), (0, l.jsx)(a(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        children: (0, l.jsx)(a(109939).sA, { ...o
                        })
                    })]
                })
            }

            function C({
                threadStore: e,
                aiChatFeatureController: t,
                isRunning: s
            }) {
                let r = (0, a(533992).v3)(),
                    i = (0, a(109939).tz)(),
                    [n, d] = (0, o.useState)(!1),
                    [c, u] = (0, o.useState)(!1),
                    [h, p] = (0, o.useState)(!1),
                    [g, f] = (0, o.useState)(void 0),
                    [m, y] = (0, o.useState)(void 0),
                    [v, b] = (0, o.useState)(void 0),
                    [x, j] = (0, o.useState)(!1),
                    w = (0, o.useRef)(0),
                    M = (0, a(719298).v)({
                        shape: t.headerButtonShape,
                        aiChatFeatureController: t
                    }),
                    T = (0, a(682985).K8)(() => e.getCreatedSource(), [e]),
                    A = (0, a(682985).K8)(() => e.getSpaceId(), [e]),
                    P = (0, a(682985).K8)(() => {
                        var t;
                        return (null == (t = e.getData()) ? void 0 : t.title) || i.formatMessage(I.defaultChatTitle)
                    }, [e, i]),
                    B = (0, a(682985).K8)(() => {
                        let t = r.currentUser.id;
                        return e.getCreatedById() === t
                    }, [e, r.currentUser.id]),
                    V = function(e) {
                        switch (e) {
                            case "sidebar":
                            case "popup":
                                return "corner_chat";
                            case "full_page":
                            case "side_peek":
                                return "full_page"
                        }
                    }(t.agentChatFormFactor),
                    D = (0, o.useCallback)(() => {
                        if (f(void 0), y(void 0), b(void 0), d(!0), (0, a(104310).u)({
                                event: {
                                    eventName: "share_chat_modal_opened",
                                    eventProperties: {
                                        thread_id: e.id,
                                        source: V
                                    }
                                }
                            }), A) {
                            let t = ++w.current;
                            p(!0), (0, a(53554).m_)({
                                environment: r,
                                spaceId: A,
                                threadId: e.id
                            }).then(e => {
                                t === w.current && (y(e), f(e.isShared ? "public" : "private"))
                            }).catch(e => {
                                t === w.current && ((0, a(222024).t)().error({
                                    from: "ShareChatPopover",
                                    type: "getThreadShareStatusFailed",
                                    error: e
                                }), a(436555).D6({
                                    label: i.formatMessage(I.statusFetchFailed)
                                }), d(!1))
                            }).finally(() => {
                                t === w.current && p(!1)
                            })
                        }
                    }, [r, i, V, A, e.id]),
                    L = (0, o.useCallback)(() => {
                        d(!1), f(void 0), y(void 0), b(void 0)
                    }, []),
                    _ = (0, o.useCallback)(t => {
                        f(t), (0, a(104310).u)({
                            event: {
                                eventName: "share_chat_scope_changed",
                                eventProperties: {
                                    thread_id: e.id,
                                    scope: t,
                                    source: V
                                }
                            }
                        }), "private" === t && A && (b(void 0), y(void 0), u(!0), (0, a(53554).CT)({
                            environment: r,
                            spaceId: A,
                            threadId: e.id
                        }).catch(e => {
                            (0, a(222024).t)().error({
                                from: "ShareChatPopover",
                                type: "revokeSharedThreadFailed",
                                error: e
                            }), a(436555).D6({
                                label: i.formatMessage(I.revokeFailed)
                            }), f("public")
                        }).finally(() => {
                            u(!1)
                        })), "public" === t && A && ((v ? ? (null == m ? void 0 : m.copyThreadId)) || (u(!0), (0, a(53554).YP)({
                            environment: r,
                            spaceId: A,
                            threadId: e.id
                        }).then(e => {
                            b(e.sharedThreadId)
                        }).catch(e => {
                            (0, a(222024).t)().error({
                                from: "ShareChatPopover",
                                type: "shareThreadOnScopeChangeFailed",
                                error: e
                            }), a(436555).D6({
                                label: i.formatMessage(I.shareFailed)
                            }), f("private")
                        }).finally(() => {
                            u(!1)
                        })))
                    }, [r, i, v, null == m ? void 0 : m.copyThreadId, V, A, e.id]),
                    R = (0, o.useCallback)(async () => {
                        if (!A) return;
                        let t = (null == m ? void 0 : m.isStale) === !0 && void 0 === v,
                            o = v ? ? (null == m ? void 0 : m.copyThreadId);
                        if (!t && o) return o;
                        try {
                            let t = await (0, a(53554).YP)({
                                environment: r,
                                spaceId: A,
                                threadId: e.id
                            });
                            return b(t.sharedThreadId), t.sharedThreadId
                        } catch (e) {
                            (0, a(222024).t)().error({
                                from: "ShareChatPopover",
                                type: "shareThreadFailed",
                                error: e
                            }), a(436555).D6({
                                label: i.formatMessage(I.shareFailed)
                            });
                            return
                        }
                    }, [A, null == m ? void 0 : m.isStale, null == m ? void 0 : m.copyThreadId, v, r, e.id, i]),
                    N = (0, o.useCallback)(async t => {
                        if (!A) return void(0, a(222024).t)().log({
                            level: "warning",
                            from: "ShareChatPopover",
                            type: "copyUrlBlockedByMissingSpaceId",
                            data: {
                                threadId: e.id,
                                sharedThreadId: t
                            }
                        });
                        let o = (0, a(53554).VS)({
                            spaceId: A,
                            threadId: t
                        });
                        try {
                            await (0, a(488391).copyString)({
                                environment: r,
                                stringValue: o,
                                copiedMessage: I.copiedToClipboard
                            })
                        } catch (e) {
                            (0, a(222024).t)().error({
                                from: "ShareChatPopover",
                                type: "copyLinkFailed",
                                error: e
                            }), a(436555).D6({
                                label: i.formatMessage(I.copyFailed)
                            })
                        }(0, a(104310).u)({
                            event: {
                                eventName: "share_chat_link_copied",
                                eventProperties: {
                                    thread_id: e.id,
                                    shared_thread_id: t,
                                    source: V
                                }
                            }
                        })
                    }, [r, i, V, A, e.id]),
                    E = (0, o.useCallback)(async () => {
                        if ("public" !== g) return void(0, a(222024).t)().log({
                            level: "warning",
                            from: "ShareChatPopover",
                            type: "copyLinkBlockedByScope",
                            data: {
                                selectedScope: g,
                                threadId: e.id
                            }
                        });
                        u(!0);
                        try {
                            let t = await R();
                            if (!t) return void(0, a(222024).t)().log({
                                level: "warning",
                                from: "ShareChatPopover",
                                type: "copyLinkBlockedByMissingThreadId",
                                data: {
                                    threadId: e.id,
                                    refreshedCopyThreadId: v,
                                    shareStatusCopyThreadId: null == m ? void 0 : m.copyThreadId
                                }
                            });
                            await N(t)
                        } finally {
                            u(!1)
                        }
                    }, [g, R, N, e.id, v, null == m ? void 0 : m.copyThreadId]),
                    K = (0, o.useCallback)(async () => {
                        if ("public" !== g) return void(0, a(222024).t)().log({
                            level: "warning",
                            from: "ShareChatPopover",
                            type: "linkedInShareBlockedByScope",
                            data: {
                                selectedScope: g,
                                threadId: e.id
                            }
                        });
                        let t = await R();
                        if (!t) return void(0, a(222024).t)().log({
                            level: "warning",
                            from: "ShareChatPopover",
                            type: "linkedInShareBlockedByMissingThreadId",
                            data: {
                                threadId: e.id,
                                refreshedCopyThreadId: v,
                                shareStatusCopyThreadId: null == m ? void 0 : m.copyThreadId
                            }
                        });
                        if (!A) return void(0, a(222024).t)().log({
                            level: "warning",
                            from: "ShareChatPopover",
                            type: "linkedInShareBlockedByMissingSpaceId",
                            data: {
                                threadId: e.id
                            }
                        });
                        (0, a(53554)._v)("linkedin");
                        let o = (0, a(53554).VS)({
                            spaceId: A,
                            threadId: t
                        });
                        (0, a(53554).GP)(o)
                    }, [g, R, A, e.id, v, null == m ? void 0 : m.copyThreadId]),
                    F = (0, o.useCallback)(async () => {
                        if ("public" !== g) return void(0, a(222024).t)().log({
                            level: "warning",
                            from: "ShareChatPopover",
                            type: "xShareBlockedByScope",
                            data: {
                                selectedScope: g,
                                threadId: e.id
                            }
                        });
                        let t = await R();
                        if (!t) return void(0, a(222024).t)().log({
                            level: "warning",
                            from: "ShareChatPopover",
                            type: "xShareBlockedByMissingThreadId",
                            data: {
                                threadId: e.id,
                                refreshedCopyThreadId: v,
                                shareStatusCopyThreadId: null == m ? void 0 : m.copyThreadId
                            }
                        });
                        if (!A) return void(0, a(222024).t)().log({
                            level: "warning",
                            from: "ShareChatPopover",
                            type: "xShareBlockedByMissingSpaceId",
                            data: {
                                threadId: e.id
                            }
                        });
                        (0, a(53554)._v)("x");
                        let o = (0, a(53554).VS)({
                            spaceId: A,
                            threadId: t
                        });
                        (0, a(53554).Y9)(o)
                    }, [g, R, A, e.id, v, null == m ? void 0 : m.copyThreadId]),
                    O = (0, o.useCallback)(async () => {
                        await R() ? ((0, a(53554)._v)("slack"), d(!1), j(!0)) : (0, a(222024).t)().log({
                            level: "warning",
                            from: "ShareChatPopover",
                            type: "slackShareBlockedByMissingThreadId",
                            data: {
                                threadId: e.id,
                                refreshedCopyThreadId: v,
                                shareStatusCopyThreadId: null == m ? void 0 : m.copyThreadId
                            }
                        })
                    }, [R, e.id, v, null == m ? void 0 : m.copyThreadId]),
                    z = (0, o.useCallback)(() => {
                        j(!1), d(!0)
                    }, []),
                    U = (0, o.useCallback)(() => {
                        j(!1)
                    }, []);
                if ("shared_copy" === T) return null;
                let H = "public" === g,
                    W = "public" === g && (null == m ? void 0 : m.isStale) === !0 && void 0 === v,
                    Y = s || !B,
                    $ = () => B ? s ? I.shareDisabledTooltip : I.shareTooltip : I.shareNotOwnerTooltip;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(a(51831).m, {
                        content: () => (0, l.jsx)(a(109939).sA, { ...$()
                        }),
                        children: e => (0, l.jsx)(a(374533).A, {
                            ariaLabel: i.formatMessage($()),
                            onClick: D,
                            icon: a(687911).Y,
                            style: M.iconButton,
                            iconStyle: M.iconButtonIcon,
                            disabled: Y,
                            ...e
                        })
                    }), (0, l.jsx)(a(979479).A, {
                        isOpen: n,
                        onDismiss: c || h ? a(763230).lQ : L,
                        showCloseIcon: !1,
                        content: () => (0, l.jsx)(S, {
                            currentScope: g,
                            isLoading: c,
                            isStatusLoading: h,
                            isCopyLinkEnabled: H,
                            isStale: W,
                            onScopeChange: _,
                            onCopyLink: E,
                            onOpenLinkedIn: K,
                            onOpenX: F,
                            onOpenSlackModal: O,
                            onDismiss: L
                        })
                    }), A ? (0, l.jsx)(k, {
                        isOpen: x,
                        spaceId: A,
                        threadId: v ? ? (null == m ? void 0 : m.copyThreadId),
                        chatTitle: P,
                        onBack: z,
                        onDismiss: U
                    }) : void 0]
                })
            }

            function S({
                currentScope: e,
                isLoading: t,
                isStatusLoading: o,
                isCopyLinkEnabled: s,
                isStale: r,
                onScopeChange: i,
                onCopyLink: n,
                onOpenLinkedIn: d,
                onOpenX: c,
                onOpenSlackModal: u,
                onDismiss: h
            }) {
                let p = (0, a(109939).tz)(),
                    g = (0, a(83208).X)("chat_share_socials");
                return o ? (0, l.jsxs)(a(4458).VP, {
                    gap: 12,
                    padding: 20,
                    width: 408,
                    children: [(0, l.jsxs)(a(4458).fI, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [(0, l.jsx)(a(111010).D, {
                            styleKey: "titleSmSemibold",
                            children: (0, l.jsx)(a(109939).sA, { ...I.title
                            })
                        }), (0, l.jsx)(a(374533).A, {
                            size: "xs",
                            ariaLabel: p.formatMessage(I.close),
                            onClick: h,
                            icon: a(766970).xMarkFillIcon,
                            style: j.closeButton
                        })]
                    }), (0, l.jsx)(a(4458).fI, {
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        children: (0, l.jsx)(a(517334).k, {
                            size: 24
                        })
                    })]
                }) : (0, l.jsxs)(a(4458).VP, {
                    gap: 12,
                    padding: 20,
                    width: 408,
                    children: [(0, l.jsxs)(a(4458).fI, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [(0, l.jsx)(a(111010).D, {
                            styleKey: "titleSmSemibold",
                            children: (0, l.jsx)(a(109939).sA, { ...I.title
                            })
                        }), (0, l.jsx)(a(374533).A, {
                            size: "xs",
                            ariaLabel: p.formatMessage(I.close),
                            onClick: h,
                            icon: a(766970).xMarkFillIcon,
                            style: j.closeButton
                        })]
                    }), r ? (0, l.jsx)(a(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        children: (0, l.jsx)(a(109939).sA, { ...I.staleBanner
                        })
                    }) : (0, l.jsx)(a(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        children: (0, l.jsx)(a(109939).sA, { ...I.subtitle
                        })
                    }), (0, l.jsxs)(a(4458).VP, {
                        gap: 8,
                        children: [(0, l.jsx)(a(469738).a, {
                            selectType: "radio",
                            selectAlignXAxis: "right",
                            name: "share-scope",
                            value: "private",
                            isSelected: "private" === e,
                            label: p.formatMessage(I.privateLabel),
                            description: p.formatMessage(I.privateDescription),
                            additionalContent: (0, l.jsx)(a(16275).I, {
                                icon: a(157160).lockIcon
                            }),
                            isDisabled: t,
                            onChange: () => i("private")
                        }), (0, l.jsx)(a(469738).a, {
                            selectType: "radio",
                            selectAlignXAxis: "right",
                            name: "share-scope",
                            value: "public",
                            isSelected: "public" === e,
                            label: p.formatMessage(I.publicLabel),
                            description: p.formatMessage(I.publicDescription),
                            additionalContent: (0, l.jsx)(a(16275).I, {
                                icon: a(515388).globeIcon
                            }),
                            isDisabled: t,
                            onChange: () => i("public")
                        })]
                    }), (0, l.jsx)(a(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        children: (0, l.jsx)(a(109939).sA, { ...I.disclaimer,
                            values: {
                                link: e => (0, l.jsx)(a(428217).V, {
                                    onClick: () => {
                                        a(100957).C.setTabView("sharedChats"), (0, a(599754).Ow)({
                                            currentPage: "public_pages"
                                        })
                                    },
                                    children: e
                                })
                            }
                        })
                    }), g ? (0, l.jsxs)(a(4458).fI, {
                        gap: 24,
                        justifyContent: "center",
                        paddingTop: 8,
                        children: [(0, l.jsx)(w, {
                            icon: a(931319).linkedinIcon,
                            tooltipMessage: I.shareOnLinkedIn,
                            label: I.linkedInLabel,
                            disabled: !s,
                            onClick: d
                        }), (0, l.jsx)(w, {
                            icon: a(981628).twitterIcon,
                            tooltipMessage: I.shareOnX,
                            label: I.xLabel,
                            disabled: !s,
                            onClick: c
                        }), (0, l.jsx)(w, {
                            icon: a(378111).slackIcon,
                            tooltipMessage: I.shareOnSlack,
                            label: I.slackLabel,
                            disabled: !s,
                            onClick: u
                        }), (0, l.jsx)(w, {
                            icon: a(588739).linkIcon,
                            tooltipMessage: r ? I.copyUpdatedLink : I.copyLink,
                            label: I.copyLink,
                            disabled: !s,
                            onClick: n,
                            iconColorVariant: "primary"
                        })]
                    }) : (0, l.jsx)(a(4458).fI, {
                        justifyContent: "flex-end",
                        children: (0, l.jsx)(a(548436).A, {
                            disabled: !s,
                            isLoading: t,
                            onClick: n,
                            iconLeading: t ? void 0 : {
                                icon: a(588739).linkIcon,
                                size: "sm"
                            },
                            children: (0, l.jsx)(a(109939).sA, { ...r ? I.copyUpdatedLink : I.copyLink
                            })
                        })
                    })]
                })
            }
            let M = new(a(815048)).O2("ThreadInviteMenu", async () => {
                    let {
                        ThreadInviteMenu: e
                    } = await Promise.all([a.e(21753), a.e(16922), a.e(8601)]).then(a.bind(a, 207518));
                    return {
                        ThreadInviteMenu: e
                    }
                }),
                T = (0, a(815048)._h)(M, e => e.ThreadInviteMenu);

            function A(e) {
                let {
                    threadStore: t,
                    aiChatFeatureController: o,
                    variant: s
                } = e, r = (0, a(109939).tz)(), i = (0, a(719298).v)({
                    shape: o.headerButtonShape,
                    aiChatFeatureController: o
                }), n = (0, a(960253).e)(), d = (0, a(960253).I)(() => ({
                    iconButtonIcon: "icon_rounded" !== s ? i.iconButtonIcon : {},
                    iconButton: { ..."icon_rounded" !== s ? i.iconButton : {
                            background: "dark" === n ? a(632079).Tj.gray.background.elevated : a(632079).Tj.background.primary,
                            borderRadius: 9999,
                            boxShadow: a(632079).Tj.shadow.outline.sm
                        }
                    }
                }), [s, i.iconButtonIcon, i.iconButton, n]);
                return "hidden" === s ? null : (0, l.jsx)(a(51831).m, {
                    content: () => (0, l.jsx)(a(4458).fI, {
                        alignItems: "center",
                        gap: 8,
                        children: (0, l.jsx)(a(109939).sA, {
                            id: "threadPermissions.headerTooltip",
                            defaultMessage: "Invite people or groups to this conversation"
                        })
                    }),
                    children: e => (0, l.jsx)(a(656252).A, {
                        popupType: a(656252).z.Popup,
                        alignmentToOrigin: "end",
                        content: e => (0, l.jsx)(T, {
                            threadStore: t,
                            onRequestClose: e.close
                        }),
                        children: ({
                            onClick: t
                        }) => "icon_rounded" === s ? (0, l.jsx)(a(374533).A, { ...e,
                            icon: {
                                icon: a(564706).inviteMemberSmallIcon,
                                size: "sm"
                            },
                            ariaLabel: r.formatMessage(a(992556).D.header),
                            onClick: t,
                            size: "md",
                            style: d.iconButton,
                            colorVariant: "secondary"
                        }) : "icon" === s ? (0, l.jsx)(a(374533).A, { ...e,
                            icon: a(447364).inviteMemberIcon,
                            ariaLabel: r.formatMessage(a(992556).D.header),
                            onClick: t,
                            iconStyle: d.iconButtonIcon,
                            style: d.iconButton,
                            colorVariant: "secondary"
                        }) : (0, l.jsx)(a(988022).p, { ...e,
                            onClick: t,
                            ariaLabel: r.formatMessage(a(992556).D.header),
                            size: "md",
                            children: (0, l.jsx)(a(109939).sA, { ...a(992556).D.header
                            })
                        })
                    })
                })
            }

            function P(e) {
                let {
                    aiChatFeatureController: t,
                    threadStore: s,
                    variant: r
                } = e, i = (0, a(682985).K8)(() => (0, a(60123).T)(s), [s]);
                return (0, o.useMemo)(() => !!s && "hidden" !== t.threadInviteButtonVariant && (!!t.supportsThreadInvites || !!i), [s, i, t.threadInviteButtonVariant, t.supportsThreadInvites]) && s ? (0, l.jsx)(A, {
                    threadStore: s,
                    aiChatFeatureController: t,
                    variant: r ? ? t.threadInviteButtonVariant
                }) : null
            }
            let B = {
                position: "absolute",
                top: 0,
                insetInlineEnd: 0,
                bottom: 0,
                width: 80
            };

            function V(e) {
                let {
                    threadStore: t,
                    workflowStore: s,
                    clientStore: r,
                    aiChatFeatureController: i,
                    onThreadChange: n,
                    showOnHover: d,
                    features: c
                } = e, {
                    showInviteButton: u,
                    showNewChatButton: h,
                    showNewChatButtonIcon: p
                } = c, g = (0, a(533992).v3)(), {
                    navigate: f
                } = (0, o.useContext)(a(44894).E), m = (0, a(853284).U)(), y = (0, a(83208).X)("agent_chat_share"), b = (0, a(682985).K8)(() => {
                    let e = a(728372).AppStoreSidebarSpaceStore.state;
                    return !!e && (0, a(262166).OX)(e.getSubscriptionTier())
                }, []), x = (0, a(682985).K8)(() => (0, a(187353).Ft)({
                    clientStore: r,
                    threadStore: t
                }), [r, t]), [k, I] = (0, o.useState)(!1), [j, w] = (0, o.useState)(!1), [S, M] = (0, a(641086).A)(), T = (0, o.useRef)(void 0), A = (0, a(684535).K)(), V = (null == t ? void 0 : t.id) ? ? ("agent" === A.name ? A.agentChatThreadId : void 0), D = (0, a(682985).K8)(() => (null == t ? void 0 : t.getSpaceId()) ? ? (null == s ? void 0 : s.getSpaceId()), [t, s]), _ = (0, a(682985).K8)(() => {
                    if ("agent" === A.name) {
                        let e = A.workflowViewType;
                        return "activity" === e || "settings" === e
                    }
                    return "chat" === A.name && !!(A.peekViewBlockId && (A.peekMode || "activity" === A.workflowViewType || "settings" === A.workflowViewType))
                }, [A]), N = "slippery_slope" === i.aiChatType && m && "agent" !== A.name, E = !!s && !N && !_, K = (0, o.useCallback)(e => {
                    if (!s) return;
                    let o = (0, a(475097).getUrlParamFromPeekMode)(a(387722).A);
                    if ("agent" === A.name) {
                        f({
                            environment: g,
                            url: (0, a(453573).Lm)({
                                workflowId: A.workflowId,
                                params: {
                                    workflowViewType: e,
                                    workflowViewId: A.workflowViewId,
                                    workflowPrompt: A.workflowPrompt,
                                    chatThreadId: A.chatThreadId,
                                    agentChatThreadId: A.agentChatThreadId
                                },
                                peekViewBlockId: A.workflowId,
                                peekModeParam: o
                            }),
                            redirect: !1
                        }), I(!1);
                        return
                    }
                    if ("chat" === A.name || "ai" === A.name) {
                        let r = "chat" === A.name ? A.threadId ? ? A.chatThreadId ? ? A.agentChatThreadId ? ? (null == t ? void 0 : t.id) : null == t ? void 0 : t.id;
                        f({
                            environment: g,
                            url: (0, a(453573).YZ)({
                                workflowId: s.id,
                                workflowViewType: e,
                                peekModeParam: o,
                                threadId: r
                            })
                        }), I(!1);
                        return
                    }
                    f({
                        environment: g,
                        url: (0, a(453573).Lm)({
                            workflowId: s.id,
                            params: {
                                workflowViewType: e,
                                agentChatThreadId: null == t ? void 0 : t.id
                            },
                            peekViewBlockId: s.id,
                            peekModeParam: o
                        })
                    }), I(!1)
                }, [s, A, g, t, f]), F = (0, o.useCallback)(e => {
                    let t = (0, a(7029).V)(e);
                    if (!t && (!_ || !s)) return void n({
                        newThreadStore: void 0
                    });
                    if (!s) return void f({
                        environment: g,
                        url: a(168962).JZ.ai,
                        openInNew: t
                    });
                    let o = _ ? (0, a(475097).getUrlParamFromPeekMode)(a(387722).A) : void 0,
                        r = _ ? "agent" === A.name ? A.workflowViewType : a(273061).S.state.mode ? ? "settings" : void 0;
                    f({
                        environment: g,
                        url: (0, a(453573).Lm)({
                            workflowId: s.id,
                            params: {
                                workflowViewType: r,
                                agentChatThreadId: void 0
                            },
                            peekViewBlockId: _ ? s.id : void 0,
                            peekModeParam: o
                        }),
                        openInNew: t,
                        makeTabActive: "tab" === t ? (0, a(7029).t)(e) : void 0
                    })
                }, [s, A, g, f, n, _]), O = (0, o.useCallback)(() => {
                    i.supportsChatActionsOnHover && (void 0 !== T.current && (clearTimeout(T.current), T.current = void 0), I(!0))
                }, [i.supportsChatActionsOnHover]), z = (0, o.useCallback)(() => {
                    i.supportsChatActionsOnHover && (T.current = window.setTimeout(() => {
                        I(!1), T.current = void 0
                    }, 100))
                }, [i.supportsChatActionsOnHover]);
                return (0, l.jsxs)("div", {
                    ref: S,
                    onMouseEnter: O,
                    onMouseLeave: z,
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        position: "relative",
                        minHeight: d ? 28 : void 0
                    },
                    children: [d && !k ? (0, l.jsx)("div", {
                        style: B
                    }) : null, !d || k || M || j ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(a(639528).g, {
                            aiChatFeatureController: i,
                            clientStore: r
                        }), (0, l.jsx)(a(736212).k, {
                            clientStore: r,
                            threadStore: t,
                            threadId: V,
                            spaceId: D,
                            aiChatFeatureController: i,
                            onOpenChange: w
                        }), (0, l.jsx)(v, {
                            aiChatFeatureController: i,
                            threadStore: t,
                            clientStore: r
                        })]
                    }) : null, E ? (0, l.jsx)(R, {
                        onNavigate: K
                    }) : null, u ? (0, l.jsx)(P, {
                        aiChatFeatureController: i,
                        threadStore: t
                    }) : null, y && !b && t ? (0, l.jsx)(C, {
                        threadStore: t,
                        aiChatFeatureController: i,
                        isRunning: x
                    }) : null, h ? (0, l.jsx)(L, {
                        aiChatFeatureController: i,
                        onNewChat: F,
                        icon: p ? a(581923).plusIcon : void 0
                    }) : null]
                })
            }
            let D = {
                shortcut: {
                    color: a(632079).Tj.text.inverseSecondary
                }
            };

            function L(e) {
                let {
                    aiChatFeatureController: t,
                    onNewChat: o,
                    icon: s
                } = e, r = (0, a(109939).tz)(), i = (0, a(853284).U)(), n = (0, a(719298).v)({
                    shape: t.headerButtonShape,
                    aiChatFeatureController: t
                }), d = i ? a(460327).Y : a(111481).M;
                return (0, l.jsx)(a(51831).m, {
                    content: () => (0, l.jsxs)(a(4458).fI, {
                        alignItems: "center",
                        gap: 8,
                        children: [(0, l.jsx)(a(109939).sA, {
                            id: "aiChatView.newChatTooltip",
                            defaultMessage: "Start new chat"
                        }), (0, l.jsx)(a(693592).A, {
                            style: D.shortcut,
                            name: "createAIChatThread"
                        })]
                    }),
                    children: e => (0, l.jsx)(a(374533).A, { ...e,
                        icon: s ? ? d,
                        iconStyle: n.iconButtonIcon,
                        style: n.iconButton,
                        ariaLabel: r.formatMessage({
                            id: "aiInferenceTranscript.newChat",
                            defaultMessage: "Start new chat"
                        }),
                        onClick: o
                    })
                })
            }
            let _ = {
                buttonGroup: {
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    paddingInline: 8
                },
                separator: {
                    width: 1,
                    height: 16,
                    backgroundColor: a(632079).Tj.border.secondary,
                    marginInline: 4
                }
            };

            function R(e) {
                let {
                    onNavigate: t
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        style: _.buttonGroup,
                        children: (0, l.jsx)(a(5750).X, {
                            onClick: () => t("settings"),
                            showDirtyDot: !1
                        })
                    }), (0, l.jsx)("div", {
                        style: _.separator
                    })]
                })
            }
        },
        213039: (e, t, a) => {
            a.d(t, {
                M: () => r
            }), a(296540);
            var o = a(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.25 15.25 11.5",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M3 7.375h6.829a2.501 2.501 0 0 0 4.842 0H17a.625.625 0 1 0 0-1.25h-2.329a2.501 2.501 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25M12.25 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
                        }), (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.75 15.75a2.5 2.5 0 0 0 2.421-1.875H17a.625.625 0 1 0 0-1.25h-6.829a2.5 2.5 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25h2.329A2.5 2.5 0 0 0 7.75 15.75m0-1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5",
                            clipRule: "evenodd"
                        })]
                    })
                },
                r = (0, a(104509).wt)("sliders", s, "default")
        },
        392252: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var o = () => a(546605);
            class s extends o().Store {
                getInitialState() {
                    return {
                        active: !1,
                        stringValue: "",
                        manualCopyMessage: void 0,
                        manualCopyMessageValues: void 0
                    }
                }
            }
            let r = new s
        },
        460327: (e, t, a) => {
            a.d(t, {
                Y: () => r
            }), a(296540);
            var o = a(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.81 2.39 16.38 15.08",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M16.938 9.353c0-2.97-2.539-5.54-6.545-5.697L10 3.648c-4.232 0-6.938 2.638-6.938 5.705 0 1.438.583 2.752 1.617 3.759a.63.63 0 0 1 .18.547 7.3 7.3 0 0 1-.89 2.528c1.108-.13 2.12-.614 3.01-1.344l.063-.044a.63.63 0 0 1 .505-.073 9 9 0 0 0 2.454.333l.392-.008c4.006-.158 6.545-2.727 6.545-5.698m1.25 0c0 3.803-3.234 6.766-7.747 6.947l-.44.01c-.88 0-1.712-.107-2.485-.3-1.349 1.022-2.985 1.62-4.826 1.428a.625.625 0 0 1-.406-1.033c.712-.818 1.096-1.737 1.284-2.642-1.116-1.197-1.756-2.734-1.756-4.41 0-3.926 3.447-6.955 8.189-6.955l.44.009c4.512.181 7.747 3.143 7.747 6.946"
                        }), (0, o.jsx)("path", {
                            d: "M10 5.875c.346 0 .626.28.626.625v2.375H13a.625.625 0 1 1 0 1.25h-2.375V12.5a.625.625 0 1 1-1.25 0v-2.375H7a.625.625 0 1 1 0-1.25h2.375V6.5c0-.346.28-.625.626-.625"
                        })]
                    })
                },
                r = (0, a(104509).wt)("chatBubblePlus", s, "default")
        },
        488391: (e, t, a) => {
            function o(e) {
                return r(e)
            }

            function s(e) {
                return r(e)
            }
            async function r(e) {
                let {
                    environment: t,
                    htmlValue: o,
                    stringValue: s,
                    copiedMessage: r,
                    manualCopyMessage: i,
                    manualCopyMessageValues: l,
                    showCopyModal: n,
                    copiedMessageValues: d
                } = e;

                function c() {
                    a(392252).A.setState({ ...a(392252).A.state,
                        active: !0,
                        stringValue: s,
                        manualCopyMessage: i,
                        manualCopyMessageValues: l
                    })
                }
                if (n) return void c();
                try {
                    var u;
                    if (t.device.isElectron && null !== a(775657).electronApi && void 0 !== a(775657).electronApi && null != (u = a(775657).electronApi.clipboard) && u.write) {
                        let e = {
                            text: s
                        };
                        o && (e.html = o), await a(775657).electronApi.clipboard.write(e)
                    } else if ("u" < typeof ClipboardItem) await navigator.clipboard.writeText(s);
                    else {
                        let e = {
                            "text/plain": new Blob([s], {
                                type: "text/plain"
                            })
                        };
                        o && (e["text/html"] = new Blob([o], {
                            type: "text/html"
                        }));
                        let t = new ClipboardItem(e);
                        await navigator.clipboard.write([t])
                    }
                    r && a(436555).D6({
                        label: a(962299).A.formatMessage(r, d)
                    })
                } catch {
                    c()
                }
            }
            a.r(t), a.d(t, {
                copyHtml: () => o,
                copyString: () => s
            })
        },
        564706: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => s,
                inviteMemberSmallIcon: () => r
            }), a(296540);
            var o = a(474848);
            let s = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.82 1.77 12.86 13.91",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M8 1.775c-.947 0-1.717.392-2.237 1.04-.508.633-.747 1.47-.747 2.337 0 .869.239 1.705.747 2.338.52.648 1.29 1.04 2.237 1.04s1.717-.392 2.237-1.04c.508-.633.748-1.47.748-2.338s-.24-1.704-.748-2.337c-.52-.648-1.29-1.04-2.237-1.04M6.738 3.597c.28-.348.69-.572 1.262-.572s.983.224 1.263.572c.291.364.472.904.472 1.555 0 .652-.18 1.192-.472 1.556-.28.348-.69.572-1.263.572s-.982-.224-1.262-.572c-.292-.364-.472-.904-.472-1.556 0-.651.18-1.191.472-1.555M8 9.178c-2.196 0-4.166 1.07-5.007 2.713a1.48 1.48 0 0 0 .2 1.676c.356.414.91.658 1.487.658h4.293a.075.075 0 0 0 .07-.105 3.8 3.8 0 0 1-.286-1.079.075.075 0 0 0-.075-.066H4.68a.72.72 0 0 1-.537-.22.3.3 0 0 1-.07-.14.26.26 0 0 1 .033-.154c.583-1.14 2.062-2.033 3.894-2.033.437 0 .855.051 1.245.144a.075.075 0 0 0 .081-.033 3.9 3.9 0 0 1 .78-.896.075.075 0 0 0-.024-.128A6.5 6.5 0 0 0 8 9.178"
                        }), (0, o.jsx)("path", {
                            d: "M12.6 9.525a3.06 3.06 0 0 0-2.474 1.248 3.06 3.06 0 0 0-.566 2.288 3.074 3.074 0 0 0 3.04 2.614 3.075 3.075 0 1 0 0-6.15m-.425 1.408a.425.425 0 0 1 .85 0V12.1c0 .041.034.075.075.075h1.167a.425.425 0 0 1 0 .85H13.1a.075.075 0 0 0-.075.075v1.166a.425.425 0 0 1-.85 0V13.1a.075.075 0 0 0-.075-.075h-1.166a.425.425 0 0 1 0-.85H12.1a.075.075 0 0 0 .075-.075z"
                        })]
                    })
                },
                r = (0, a(104509).wt)("inviteMemberSmall", s, "small")
        },
        639528: (e, t, a) => {
            a.d(t, {
                g: () => l,
                M: () => n
            });
            var o = a(296540),
                s = a(474848);
            let r = {
                viewBox: "0 0 20 20",
                fittedViewBox: "3.37 0.43 13.25 16.44",
                svg: (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("path", {
                        d: "M10.417.62a.625.625 0 0 0-.884 0l-2.5 2.5a.625.625 0 1 0 .884.884l1.458-1.458V11a.625.625 0 1 0 1.25 0V2.596l1.408 1.408a.625.625 0 1 0 .884-.883z"
                    }), (0, s.jsx)("path", {
                        d: "M8.125 5.125H5.5A2.125 2.125 0 0 0 3.375 7.25v7.5c0 1.174.951 2.125 2.125 2.125h9a2.125 2.125 0 0 0 2.125-2.125v-7.5A2.125 2.125 0 0 0 14.5 5.125h-2.625V11a1.875 1.875 0 0 1-3.75 0z"
                    })]
                })
            };
            (0, a(104509).wt)("squareAndArrowUpFill", r, "fill");
            let i = {
                width: 20,
                height: 20
            };

            function l(e) {
                let {
                    clientStore: t,
                    aiChatFeatureController: r
                } = e, l = (0, a(109939).tz)(), n = (0, a(533992).v3)(), d = (0, o.useCallback)(() => {
                    let e = !t.state.showDebug;
                    !0 === e && (0, a(812621).H)(n), t.setState({ ...t.state,
                        showDebug: e
                    })
                }, [t, n]), c = (0, a(682985).K8)(() => (0, a(909212).Ke)(), []), u = (0, a(682985).K8)(() => t.state.showDebug, [t]), h = (0, a(960253).I)(() => ({
                    icon: {
                        fill: u ? a(632079).Tj.blue.icon.accentPrimary : a(632079).Tj.icon.primary
                    }
                }), [u]);
                return c && r.supportsDebugButton ? (0, s.jsx)(a(51831).m, {
                    content: () => (0, s.jsx)(a(109939).sA, {
                        id: "aiChatView.debugTooltip",
                        defaultMessage: "Debug"
                    }),
                    children: e => (0, s.jsx)(a(374533).A, { ...e,
                        icon: a(6260).Z,
                        iconStyle: { ...i,
                            ...h.icon
                        },
                        colorPalette: u ? "blue" : void 0,
                        ariaLabel: l.formatMessage({
                            id: "aiInferenceTranscript.debug",
                            defaultMessage: "Debug"
                        }),
                        onClick: d
                    })
                }) : null
            }

            function n(e) {
                let {
                    threadStore: t,
                    aiChatFeatureController: s
                } = e, r = (0, a(533992).v3)();
                (0, a(109939).tz)();
                let i = (0, a(682985).K8)(() => {
                    var e;
                    return (null == t || null == (e = t.getData()) ? void 0 : e.shared_with_space) ? ? !1
                }, [t]);
                return (0, o.useCallback)(() => {
                    if (!t) return;
                    let e = t.getSpaceId();
                    (0, a(377796).createAndCommit)({
                        userAction: "AgentChatDebugButtons.toggleShareWithSpace",
                        environment: r,
                        cellTarget: e ? {
                            spaceWithId: e
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, a(757688).g6)({
                                threadStore: t,
                                transaction: e
                            })
                        }
                    })
                }, [t, r]), (0, a(682985).K8)(() => t && !t.canEdit(), [t]), (0, a(682985).K8)(() => (0, a(330942).q1)((null == t ? void 0 : t.getTranscript()) ? ? []), [t]), (0, a(719298).v)({
                    shape: s.headerButtonShape,
                    active: i,
                    aiChatFeatureController: s
                }), null
            }
        },
        719298: (e, t, a) => {
            a.d(t, {
                v: () => o
            });

            function o(e) {
                let {
                    active: t,
                    shape: o,
                    aiChatFeatureController: s
                } = e;
                return (0, a(960253).I)(() => {
                    let e = null != s && s.supportsTallChatHeader ? 40 : 28,
                        r = null != s && s.supportsTallChatHeader ? a(104509).lD.default : a(104509).Ev.default;
                    return {
                        iconButton: {
                            width: e,
                            height: e,
                            ..."pill" === o ? {
                                borderRadius: 50
                            } : {}
                        },
                        iconButtonIcon: {
                            width: r,
                            height: r,
                            fill: t ? a(632079).Tj.blue.icon.accentPrimary : a(632079).Tj.icon.primary
                        }
                    }
                }, [t, o, null == s ? void 0 : s.supportsTallChatHeader])
            }
        },
        721348: (e, t, a) => {
            a.d(t, {
                S: () => l
            }), a(581454);
            var o = a(296540),
                s = a(474848);
            let r = (0, a(109939).YK)({
                    slackChannelSearchPlaceholder: {
                        defaultMessage: "Search Slack channels",
                        id: "shareSummaryButton.slackModal.channelSearch.placeholder"
                    },
                    selectChannelAriaLabel: {
                        defaultMessage: "Select a channel",
                        id: "shareSummaryButton.slackModal.channelSelect.selectChannel.ariaLabel"
                    }
                }),
                i = {
                    container: {
                        width: "100%",
                        height: 32,
                        display: "flex",
                        padding: "7px 8px",
                        backgroundColor: a(632079).Tj.background.primary,
                        border: `1px solid ${a(632079).Tj.border.primary}`,
                        borderRadius: 6,
                        cursor: "pointer",
                        fontSize: 14
                    },
                    input: {
                        flex: 1
                    },
                    channelsList: {
                        minWidth: 280,
                        maxHeight: 300,
                        overflowY: "auto"
                    }
                };

            function l(e) {
                let {
                    selectedChannel: t,
                    channels: l,
                    searchQuery: n,
                    onSearchChange: d,
                    onChannelSelect: c
                } = e, u = (0, a(109939).tz)(), h = (0, a(682985).uB)(void 0, a(510969).A), p = (0, o.useCallback)(e => (null == e ? void 0 : e.type) === "private" ? a(697198).lockSmallIcon : a(295044).E, []);
                return (0, s.jsx)(a(656252).A, {
                    buttonPopupStore: h,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    originGap: 4,
                    popupType: a(423291).n.Popup,
                    trapFocus: !1,
                    content: () => l.length > 0 ? (0, s.jsx)(a(558045).A, {
                        style: i.channelsList,
                        type: a(558045).O.Vertical,
                        initialFocus: void 0,
                        sections: [{
                            key: "channels",
                            items: l.map(e => ({
                                key: e.id,
                                action: () => {
                                    c(e), h.reset()
                                },
                                render: o => (0, s.jsx)(a(95582).A, { ...o,
                                    icon: (0, s.jsx)(a(16275).I, {
                                        icon: p(e),
                                        colorVariant: "tertiary",
                                        size: "sm"
                                    }),
                                    title: e.name,
                                    isChecked: (null == t ? void 0 : t.id) === e.id
                                })
                            }))
                        }]
                    }) : null,
                    children: e => (0, s.jsx)("div", {
                        style: i.container,
                        ...e,
                        children: (0, s.jsx)(a(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            flex: 1,
                            children: (0, s.jsx)(a(36481).p, {
                                left: t ? (0, s.jsx)(a(16275).I, {
                                    icon: p(t),
                                    colorVariant: "tertiary",
                                    size: "sm"
                                }) : void 0,
                                value: t ? t.name : n,
                                onChange: d,
                                onFocus: () => h.setState({
                                    open: !0
                                }),
                                placeholder: u.formatMessage(r.slackChannelSearchPlaceholder),
                                format: "transparent",
                                style: i.input,
                                right: (0, s.jsx)(a(374533).A, {
                                    ariaLabel: u.formatMessage(r.selectChannelAriaLabel),
                                    icon: a(595453).arrowChevronSingleDownSmallIcon,
                                    colorVariant: "tertiary",
                                    size: "sm",
                                    onClick: () => h.setState({
                                        open: !0
                                    })
                                })
                            })
                        })
                    })
                })
            }
        },
        736212: (e, t, a) => {
            a.d(t, {
                k: () => l
            }), a(898992), a(354520), a(581454);
            var o = a(296540),
                s = a(474848);
            let r = {
                id: "__loading_inference__",
                input: {
                    type: "loading"
                }
            };

            function i(e) {
                let {
                    threadStore: t,
                    threadId: i,
                    spaceId: l,
                    aiChatFeatureController: n,
                    onOpenChange: d
                } = e, c = (0, a(109939).tz)(), u = (0, a(533992).v3)(), h = (0, a(972740).L)(), p = (0, a(719298).v)({
                    shape: n.headerButtonShape ? ? "roundrect",
                    aiChatFeatureController: n
                }), g = (0, o.useRef)(() => {}), [f, m] = (0, o.useState)(!1), [y, v] = (0, o.useState)(!1), [b, x] = (0, o.useState)(!1), [k, I] = (0, o.useState)([]), [j, w] = (0, o.useState)([]), [C, S] = (0, o.useState)({}), [M, T] = (0, o.useState)({}), [A, P] = (0, o.useState)({}), [B, V] = (0, o.useState)(void 0), [D, L] = (0, o.useState)(void 0), [_, R] = (0, o.useState)(void 0), N = (null == t ? void 0 : t.id) ? ? i, E = (0, a(682985).K8)(() => null == t ? void 0 : t.getSpaceId(), [t]) ? ? l ? ? (null == h ? void 0 : h.id), K = (0, o.useCallback)(e => {
                    if (e) return e < 1e12 ? 1e3 * e : e
                }, []), F = (0, o.useMemo)(() => [...k].sort((e, t) => {
                    let a = K(e.messageCreatedAt),
                        o = K(t.messageCreatedAt);
                    return void 0 !== a && void 0 !== o ? o - a : void 0 !== a ? -1 : +(void 0 !== o)
                }), [K, k]), O = (0, o.useMemo)(() => [...j].sort((e, t) => {
                    let a = K(e.startedAt),
                        o = K(t.startedAt);
                    if (void 0 !== a && void 0 !== o) return o - a;
                    if (void 0 !== a) return -1;
                    if (void 0 !== o) return 1;
                    let s = e.index ? ? Number.MIN_SAFE_INTEGER;
                    return (t.index ? ? Number.MIN_SAFE_INTEGER) - s
                }), [j, K]), z = (0, a(682985).K8)(() => (0, a(909212).Ke)(), []), U = (0, o.useMemo)(() => z ? O : O.filter(e => {
                    let t = e.inputType ? ? "";
                    return t.startsWith("customAgent") || t.startsWith("routeCustomAgent") || t.startsWith("scriptAgent") || t.startsWith("agent")
                }), [z, O]), H = (0, o.useCallback)(e => {
                    let t = K(e);
                    return t ? new Date(t).toLocaleString() : "Unknown time"
                }, [K]), W = (0, o.useMemo)(() => F.map(e => {
                    let t = H(e.messageCreatedAt);
                    return {
                        id: e.id,
                        label: t
                    }
                }), [H, F]), Y = (0, o.useMemo)(() => U.map((e, t) => {
                    let a = void 0 !== e.index ? `#${String(e.index+1)}` : `#${String(U.length-t)}`,
                        o = H(e.startedAt),
                        s = e.inputType ? ? "inference",
                        r = z ? `${a} – ${s} – ${o}` : o;
                    return {
                        id: e.id,
                        label: r
                    }
                }), [z, U, H]), $ = (0, o.useCallback)((e, t = !1) => {
                    let a = e.traceId;
                    e.allTraces && I(e.allTraces), e.inferenceOptions && w(e.inferenceOptions), a && (V(a), e.inferenceOptions && S(t => ({ ...t,
                        [a]: e.inferenceOptions
                    })));
                    let o = e.inference;
                    o && (a && T(e => ({ ...e,
                        [a]: o
                    })), P(e => ({ ...e,
                        [o.id]: o
                    })), R(o), L(o.id), t && x(!0))
                }, []), G = (0, o.useCallback)(async () => {
                    if (N && E && !f) {
                        R(e => e ? ? r), x(!0), m(!0);
                        try {
                            let e = await (0, a(522259).qA)({
                                environment: u,
                                threadId: N,
                                spaceId: E
                            });
                            $(e)
                        } finally {
                            m(!1)
                        }
                    }
                }, [$, u, f, E, N]), X = (0, o.useCallback)(async e => {
                    if (!N || !E) return;
                    V(e), L(void 0), w(C[e] ? ? []);
                    let t = M[e];
                    if (t) {
                        R(t), L(t.id);
                        return
                    }
                    v(!0);
                    try {
                        let t = await (0, a(522259).qA)({
                            environment: u,
                            threadId: N,
                            spaceId: E,
                            traceId: e
                        });
                        $(t)
                    } finally {
                        v(!1)
                    }
                }, [$, u, E, N, C, M]), q = (0, o.useCallback)(async e => {
                    if (!N || !E || !B) return;
                    L(e);
                    let t = A[e];
                    if (t) return void R(t);
                    v(!0);
                    try {
                        let t = await (0, a(522259).qA)({
                            environment: u,
                            threadId: N,
                            spaceId: E,
                            traceId: B,
                            inferenceId: e
                        });
                        $(t)
                    } finally {
                        v(!1)
                    }
                }, [$, u, A, E, N, B]);
                (0, o.useEffect)(() => {
                    if (b && _) {
                        var e;
                        null == (e = g.current) || e.call(g), x(!1)
                    }
                }, [_, b]);
                let Q = f || !N || !E;
                return _ ? (0, s.jsx)(a(656767).R, {
                    inference: _,
                    inferenceOptions: Y,
                    selectedInferenceId: D,
                    onSelectInferenceId: q,
                    traceOptions: W,
                    selectedTraceId: B,
                    onSelectTraceId: X,
                    isInferenceLoading: f || y,
                    selectionLabel: "Inference",
                    onOpenChange: d,
                    renderTrigger: ({
                        onClick: e
                    }) => (g.current = e, (0, s.jsx)(a(51831).m, {
                        content: () => (0, s.jsx)(a(109939).sA, {
                            id: "aiChatView.inferenceDetailsTooltip",
                            defaultMessage: "Debugging details"
                        }),
                        children: t => (0, s.jsx)(a(374533).A, { ...t,
                            icon: a(123219).Y,
                            isLoading: y,
                            style: p.iconButton,
                            iconStyle: p.iconButtonIcon,
                            ariaLabel: c.formatMessage({
                                id: "aiChatView.inferenceDetails",
                                defaultMessage: "Debugging details"
                            }),
                            onClick: e
                        })
                    }))
                }) : (0, s.jsx)(a(51831).m, {
                    content: () => (0, s.jsx)(a(109939).sA, {
                        id: "aiChatView.inferenceDetailsTooltip",
                        defaultMessage: "Debugging details"
                    }),
                    children: e => (0, s.jsx)(a(374533).A, { ...e,
                        icon: a(123219).Y,
                        isLoading: f,
                        style: p.iconButton,
                        iconStyle: p.iconButtonIcon,
                        ariaLabel: c.formatMessage({
                            id: "aiChatView.inferenceDetails",
                            defaultMessage: "Debugging details"
                        }),
                        onClick: G,
                        disabled: Q
                    })
                })
            }

            function l(e) {
                return (0, a(682985).K8)(() => a(218744).default.getConfig({
                    configName: "custom_agent_advanced_features"
                }).transcriptDebugging, []) ? (0, s.jsx)(i, { ...e
                }) : null
            }
        },
        812621: (e, t, a) => {
            a.d(t, {
                H: () => o
            });

            function o(e) {
                "popup" === a(562733).zI.state.chatPanelMode && (0, a(168682).M)({
                    environment: e,
                    chatPanelMode: "sidebar",
                    trackAnalytics: !1,
                    saveUserPreference: !1
                })
            }
        },
        931319: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => o,
                linkedinIcon: () => s
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1 1 18 18",
                    svg: (0, a(474848).jsx)("path", {
                        fill: "#2867B2",
                        d: "M17 1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3.758 16.5h2.684V7.833H3.758zm9.588-8.932c-1.84 0-2.614 1.433-2.614 1.433V7.833H8.158V16.5h2.574v-4.55c0-1.219.562-1.944 1.636-1.944.987 0 1.461.697 1.461 1.944v4.55H16.5v-5.487c0-2.322-1.316-3.445-3.154-3.445M5.086 3.5C4.21 3.5 3.5 4.217 3.5 5.1c0 .882.71 1.598 1.587 1.598S6.674 5.983 6.674 5.1s-.71-1.6-1.587-1.6"
                    })
                },
                s = (0, a(104509).wt)("linkedin", o, "default")
        },
        981628: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => s,
                twitterIcon: () => r
            }), a(296540);
            var o = a(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1 1.86 18 16.28",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("g", {
                            className: "logo-light-mode",
                            children: (0, o.jsx)("path", {
                                fill: "#000",
                                d: "M15.176 1.865h2.76l-6.03 6.892L19 18.135h-5.554l-4.35-5.688-4.979 5.688H1.355l6.45-7.371L1 1.865h5.695l3.933 5.199zm-.969 14.618h1.53L5.864 3.43h-1.64z"
                            })
                        }), (0, o.jsx)("g", {
                            className: "logo-dark-mode",
                            children: (0, o.jsx)("path", {
                                fill: "#fff",
                                d: "M15.176 1.865h2.76l-6.03 6.892L19 18.135h-5.554l-4.35-5.688-4.979 5.688H1.355l6.45-7.371L1 1.865h5.695l3.933 5.199zm-.969 14.618h1.53L5.864 3.43h-1.64z"
                            })
                        })]
                    })
                },
                r = (0, a(104509).wt)("twitter", s, "default")
        },
        992556: (e, t, a) => {
            a.d(t, {
                D: () => o,
                I: () => s
            });
            let o = (0, a(109939).YK)({
                    header: {
                        id: "threadPermissions.header",
                        defaultMessage: "Invite"
                    },
                    headerTooltip: {
                        id: "threadPermissions.headerTooltip",
                        defaultMessage: "Invite people or groups to this conversation"
                    },
                    inviteSectionTitle: {
                        id: "threadPermissions.invite.sectionTitle",
                        defaultMessage: "Invite"
                    },
                    invitePlaceholder: {
                        id: "threadPermissions.invite.placeholder",
                        defaultMessage: "Invite people or groups"
                    },
                    loading: {
                        id: "threadPermissions.loading",
                        defaultMessage: "Loading permissions…"
                    },
                    retry: {
                        id: "threadPermissions.retry",
                        defaultMessage: "Retry"
                    },
                    ownerLabel: {
                        id: "threadPermissions.owner",
                        defaultMessage: "Owner"
                    },
                    workspaceAudience: {
                        id: "threadPermissions.workspaceAudience",
                        defaultMessage: "Everyone in {workspace}"
                    },
                    botAudience: {
                        id: "threadPermissions.botAudience",
                        defaultMessage: "Agent access"
                    },
                    groupMembers: {
                        id: "threadPermissions.groupMembers",
                        defaultMessage: "{count, plural, one {# member} other {# members}}"
                    },
                    inviteButton: {
                        id: "threadPermissions.inviteButton",
                        defaultMessage: "Invite"
                    },
                    searching: {
                        id: "threadPermissions.searching",
                        defaultMessage: "Searching…"
                    },
                    suggestionsHeader: {
                        id: "threadPermissions.suggestions.header",
                        defaultMessage: "Not invited to this conversation"
                    },
                    noInviteResults: {
                        id: "threadPermissions.suggestions.empty",
                        defaultMessage: "No matching people or groups."
                    },
                    existingMembersTitle: {
                        id: "threadPermissions.permissionList.header",
                        defaultMessage: "Members"
                    },
                    roleNone: {
                        id: "threadPermissions.role.none",
                        defaultMessage: "Remove"
                    },
                    makeOwner: {
                        id: "threadPermissions.makeOwner",
                        defaultMessage: "Make owner"
                    },
                    noSubjectSelected: {
                        id: "threadPermissions.noSubject",
                        defaultMessage: "Add at least one person or group"
                    },
                    editorRequired: {
                        id: "threadPermissions.error.editorRequired",
                        defaultMessage: "You need edit access to invite others to this conversation."
                    },
                    errGeneric: {
                        id: "threadPermissions.error.generic",
                        defaultMessage: "Something went wrong. Please try again."
                    },
                    noSpace: {
                        id: "threadPermissions.noSpace",
                        defaultMessage: "Workspace context unavailable."
                    },
                    noThread: {
                        id: "threadPermissions.noThread",
                        defaultMessage: "This conversation is still loading."
                    },
                    empty: {
                        id: "threadPermissions.empty",
                        defaultMessage: "No one else can access this conversation yet."
                    },
                    invitePermissionsWarning: {
                        id: "threadPermissions.invite.permissionsWarning",
                        defaultMessage: "You need edit access to invite others."
                    },
                    unknownGroup: {
                        id: "threadPermissions.unknownGroup",
                        defaultMessage: "Unknown group"
                    },
                    unknownUser: {
                        id: "threadPermissions.unknownUser",
                        defaultMessage: "Unknown user"
                    },
                    suggestionSelected: {
                        id: "threadPermissions.suggestionSelected",
                        defaultMessage: "Selected"
                    }
                }),
                s = (0, a(109939).YK)({
                    reader: {
                        id: "threadPermissions.role.reader",
                        defaultMessage: "Can view"
                    },
                    readAndWrite: {
                        id: "threadPermissions.role.readAndWrite",
                        defaultMessage: "Can reply"
                    },
                    editor: {
                        id: "threadPermissions.role.editor",
                        defaultMessage: "Can manage"
                    }
                })
        }
    }
]);